// AuctionX - Shared Utilities Library
// This file provides shared functionality across all pages

const App = {
    currentUser: null,
    bidTimers: new Map(),
    modalStack: [],
    searchDebounce: null,

    init() {
        loadData();
        this.checkAuth();
        this.bindGlobalEvents();
        this.updateHeader();
        this.startBidTimers();
    },

    checkAuth() {
        const user = getCurrentUser();
        this.currentUser = user;
        AuctionData.currentUser = user;
    },

    bindGlobalEvents() {
        document.addEventListener('click', (e) => this.handleGlobalClick(e));
        document.addEventListener('submit', (e) => this.handleGlobalSubmit(e));
        document.addEventListener('input', (e) => this.handleGlobalInput(e));
        window.addEventListener('beforeunload', () => this.cleanup());
    },

    handleGlobalClick(e) {
        const target = e.target.closest('[data-action]');
        if (target) {
            e.preventDefault();
            const action = target.dataset.action;
            this[action]?.call(this, target, e);
        }

        if (e.target.closest('#mobileMenuBtn')) {
            this.toggleMobileMenu();
        }
        if (e.target.closest('.mobile-menu-close')) {
            this.toggleMobileMenu(false);
        }
        if (e.target.closest('#userMenuBtn')) {
            this.toggleUserDropdown();
        }
        if (e.target.closest('#searchToggle')) {
            this.toggleSearch();
        }
        if (e.target.closest('.search-close')) {
            this.toggleSearch(false);
        }
        if (e.target.closest('#searchOverlay') && !e.target.closest('.search-container')) {
            this.toggleSearch(false);
        }
        if (!e.target.closest('#userMenu')) {
            this.toggleUserDropdown(false);
            this.toggleAccountsPanel(false);
        }
        if (e.target.closest('#manageAccountsBtn')) {
            this.toggleAccountsPanel(true);
        }
        if (e.target.closest('#accountsBackBtn')) {
            this.toggleAccountsPanel(false);
        }
        if (e.target.closest('.modal-close') || e.target.closest('#modalOverlay') === e.target) {
            this.closeModal();
        }
        if (e.target.closest('#logoutBtn') || e.target.closest('#mobileLogoutBtn')) {
            e.preventDefault();
            const currentId = this.currentUser?.id;
            this.removeSavedAccount(currentId);
            const accounts = this.getSavedAccounts();
            const nextAccount = accounts.find(a => getUserById(a.id));
            if (nextAccount) {
                this.switchAccount(nextAccount.id);
            } else {
                accounts.forEach(a => this.removeSavedAccount(a.id));
                logout();
                this.currentUser = null;
                this.bidTimers.forEach(timerId => clearInterval(timerId));
                this.bidTimers.clear();
                window.location.replace('index.html');
            }
        }
        if (e.target.closest('.place-bid-btn')) {
            const btn = e.target.closest('.place-bid-btn');
            const productId = btn.dataset.productId;
            if (productId && this.currentUser) {
                this.openBidModal(productId);
            } else if (!this.currentUser) {
                this.showToast('Login Required', 'Please login to place a bid', 'warning');
                window.location.href = 'login.html';
            }
        }
        if (e.target.closest('.change-bid-btn')) {
            const btn = e.target.closest('.change-bid-btn');
            const productId = btn.dataset.productId;
            if (productId && this.currentUser) {
                this.openChangeBidModal(productId);
            } else if (!this.currentUser) {
                this.showToast('Login Required', 'Please login to change your bid', 'warning');
                window.location.href = 'login.html';
            }
        }
    },

    handleGlobalSubmit(e) {
        const form = e.target.closest('form[data-form]');
        if (form) {
            e.preventDefault();
            const formType = form.dataset.form;
            this[`handle${formType.charAt(0).toUpperCase() + formType.slice(1)}Form`]?.call(this, form);
        }
    },

    handleGlobalInput(e) {
        if (e.target.matches('.search-input')) {
            this.handleSearch(e.target.value);
        }
    },

    handleSearch(query) {
        clearTimeout(this.searchDebounce);
        this.searchDebounce = setTimeout(() => {
            this.performSearch(query);
        }, 300);
    },

    performSearch(query) {
        const resultsContainer = document.getElementById('searchResults');
        const suggestionsContainer = document.getElementById('searchSuggestions');
        if (!resultsContainer || !suggestionsContainer) return;

        if (!query.trim()) {
            resultsContainer.innerHTML = '';
            suggestionsContainer.style.display = 'block';
            return;
        }

        suggestionsContainer.style.display = 'none';

        const products = AuctionData.products.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        );

        const users = AuctionData.users.filter(u =>
            u.name.toLowerCase().includes(query.toLowerCase()) ||
            u.email.toLowerCase().includes(query.toLowerCase())
        );

        let html = '';
        if (products.length > 0) {
            html += '<div class="search-section"><h4 class="search-section-title">Products</h4><div class="search-results-list" role="list">';
            products.slice(0, 5).forEach(p => {
                html += `<a href="product.html?id=${p.id}" class="search-result-item" role="option">
                    <span class="search-result-icon" aria-hidden="true">${this.getCategoryIcon(p.category)}</span>
                    <div>
                        <span class="search-result-title">${this.escapeHtml(p.name)}</span>
                        <span class="search-result-subtitle">${formatCurrency(p.currentBid)} • ${this.getCategoryName(p.category)}</span>
                    </div>
                </a>`;
            });
            html += '</div></div>';
        }

        if (users.length > 0 && this.currentUser?.role === 'admin') {
            html += '<div class="search-section"><h4 class="search-section-title">Users</h4><div class="search-results-list" role="list">';
            users.slice(0, 5).forEach(u => {
                html += `<div class="search-result-item">
                    <span class="search-result-icon" aria-hidden="true">👤</span>
                    <div>
                        <span class="search-result-title">${this.escapeHtml(u.name)}</span>
                        <span class="search-result-subtitle">${u.email} • ${u.role}</span>
                    </div>
                </div>`;
            });
            html += '</div></div>';
        }

        if (!products.length && !users.length) {
            html = '<div class="search-no-results">No results found for "<strong>' + this.escapeHtml(query) + '</strong>"</div>';
        }

        resultsContainer.innerHTML = html;
    },

    updateHeader() {
        const authButtons = document.getElementById('authButtons');
        const userMenu = document.getElementById('userMenu');
        const mobileAuth = document.getElementById('mobileAuth');
        const mobileUser = document.getElementById('mobileUser');

        if (this.currentUser) {
            authButtons?.classList.add('hidden');
            userMenu?.classList.remove('hidden');
            mobileAuth?.classList.add('hidden');
            mobileUser?.classList.remove('hidden');

            const name = this.currentUser.name;
            const firstName = name.split(' ')[0];
            const initial = name.charAt(0).toUpperCase();
            const role = this.currentUser.role;
            const roleLabel = role === 'customer' ? 'Customer (Bidder)' : role === 'seller' ? 'Seller' : 'Admin';

            document.querySelectorAll('#userName').forEach(el => {
                if (el) el.textContent = firstName;
            });
            document.querySelectorAll('#userAvatar, #mobileUserAvatar').forEach(el => {
                if (el) el.textContent = initial;
            });
            document.querySelectorAll('#dropdownName').forEach(el => {
                if (el) el.textContent = name;
            });
            document.querySelectorAll('#dropdownRole, #mobileUserRole').forEach(el => {
                if (el) el.textContent = roleLabel;
            });
            const dropdownAvatar = document.getElementById('dropdownAvatar');
            if (dropdownAvatar) dropdownAvatar.textContent = initial;
            const mobileUserName = document.getElementById('mobileUserName');
            if (mobileUserName) mobileUserName.textContent = name;
            const mobileUserRole = document.getElementById('mobileUserRole');
            if (mobileUserRole) mobileUserRole.textContent = roleLabel;

            const dashboardLink = document.getElementById('dashboardLink');
            if (dashboardLink) {
                if (role === 'seller') dashboardLink.href = 'seller-dashboard.html';
                else if (role === 'admin') dashboardLink.href = 'admin-dashboard.html';
                else dashboardLink.href = 'dashboard.html';
            }

            const sellerLink = document.getElementById('sellerDashboardLink');
            const mobileSellerLink = document.getElementById('mobileSellerLink');
            const adminLink = document.getElementById('adminDashboardLink');
            const mobileAdminLink = document.getElementById('mobileAdminLink');

            if (role === 'seller' || role === 'admin') {
                sellerLink?.classList.remove('hidden');
                mobileSellerLink?.classList.remove('hidden');
            } else {
                sellerLink?.classList.add('hidden');
                mobileSellerLink?.classList.add('hidden');
            }

            if (role === 'admin') {
                adminLink?.classList.remove('hidden');
                mobileAdminLink?.classList.remove('hidden');
            } else {
                adminLink?.classList.add('hidden');
                mobileAdminLink?.classList.add('hidden');
            }

            this.renderAccountsList();
        } else {
            authButtons?.classList.remove('hidden');
            userMenu?.classList.add('hidden');
            mobileAuth?.classList.remove('hidden');
            mobileUser?.classList.add('hidden');

            if (mobileAuth) {
                mobileAuth.innerHTML = `
                    <a href="login.html" class="btn btn-primary btn-block">Login</a>
                `;
            }
        }
    },

    getSavedAccounts() {
        try {
            return JSON.parse(localStorage.getItem('auctionx_accounts') || '[]');
        } catch { return []; }
    },

    saveAccount(user) {
        const accounts = this.getSavedAccounts();
        const exists = accounts.find(a => a.id === user.id);
        if (!exists) {
            accounts.push({
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                password: user.password
            });
            localStorage.setItem('auctionx_accounts', JSON.stringify(accounts));
        }
    },

    removeSavedAccount(userId) {
        let accounts = this.getSavedAccounts();
        accounts = accounts.filter(a => a.id !== userId);
        localStorage.setItem('auctionx_accounts', JSON.stringify(accounts));
    },

    switchAccount(userId) {
        const accounts = this.getSavedAccounts();
        const account = accounts.find(a => a.id === userId);
        if (!account) return;

        const user = getUserById(userId);
        if (!user) {
            this.removeSavedAccount(userId);
            this.showToast('Account Not Found', 'This account no longer exists', 'error');
            return;
        }

        setCurrentUser(user);
        this.currentUser = user;
        this.updateHeader();
        this.initProductCards();
        this.toggleUserDropdown(false);
        this.showToast('Switched Account', `Now logged in as ${user.name}`, 'success');
    },

    renderAccountsList() {
        const list = document.getElementById('accountsList');
        if (!list) return;

        const accounts = this.getSavedAccounts();
        const currentId = this.currentUser?.id;

        if (accounts.length === 0) {
            list.innerHTML = `<div class="account-item"><span class="account-item-info"><span class="account-item-name">No saved accounts</span></span></div>`;
            return;
        }

        list.innerHTML = accounts.map(acc => {
            const initial = acc.name.charAt(0).toUpperCase();
            const isCurrent = acc.id === currentId;
            const roleLabel = acc.role === 'customer' ? 'Bidder' : acc.role.charAt(0).toUpperCase() + acc.role.slice(1);
            return `
                <div class="account-item ${isCurrent ? 'active' : ''}" data-account-id="${acc.id}">
                    <div class="user-avatar" style="width:32px;height:32px;font-size:0.75rem;">${initial}</div>
                    <div class="account-item-info">
                        <div class="account-item-name">${this.escapeHtml(acc.name)}</div>
                        <div class="account-item-email">${this.escapeHtml(acc.email)}</div>
                        <div class="account-item-role">${roleLabel}</div>
                    </div>
                    ${isCurrent
                        ? '<span class="account-item-current">Current</span>'
                        : `<button class="account-switch-btn" data-switch-id="${acc.id}">Switch</button>`
                    }
                </div>
            `;
        }).join('');

        list.querySelectorAll('.account-switch-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.switchAccount(btn.dataset.switchId);
            });
        });
    },

    showToast(title, message, type = 'info') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="toast-icon" aria-hidden="true">
                ${this.getToastIcon(type)}
            </div>
            <div class="toast-content">
                <div class="toast-title">${this.escapeHtml(title)}</div>
                <div class="toast-message">${this.escapeHtml(message)}</div>
            </div>
            <button class="toast-close" aria-label="Dismiss">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
        `;
        toast.querySelector('.toast-close').addEventListener('click', () => toast.remove());
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 5000);
    },

    getToastIcon(type) {
        const icons = {
            success: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
            error: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
            warning: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
            info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
        };
        return icons[type] || icons.info;
    },

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    openModal(title, body, footer = '') {
        const overlay = document.getElementById('modalOverlay');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('ModalBody');
        const modalFooter = document.getElementById('modalFooter');

        modalTitle.textContent = title;
        modalBody.innerHTML = body;
        modalFooter.innerHTML = footer;

        overlay.style.display = 'flex';
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        this.modalStack.push({ title, body, footer });
    },

    closeModal() {
        const overlay = document.getElementById('modalOverlay');
        overlay.style.display = 'none';
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        this.modalStack.pop();
    },

    toggleMobileMenu(show) {
        const menu = document.getElementById('mobileMenu');
        const btn = document.getElementById('mobileMenuBtn');
        if (!menu) return;
        if (show === undefined) show = !menu.classList.contains('show');
        menu.classList.toggle('show', show);
        menu.setAttribute('aria-hidden', !show);
        btn?.setAttribute('aria-expanded', show);
        document.body.style.overflow = show ? 'hidden' : '';
    },

    toggleUserDropdown(show) {
        const dropdown = document.getElementById('userDropdown');
        const btn = document.getElementById('userMenuBtn');
        const panel = document.getElementById('accountsPanel');
        if (!dropdown) return;
        if (show === undefined) show = !dropdown.classList.contains('show');
        dropdown.classList.toggle('show', show);
        dropdown.setAttribute('aria-hidden', !show);
        btn?.setAttribute('aria-expanded', show);
        if (!show && panel) {
            panel.classList.remove('show');
            panel.setAttribute('aria-hidden', 'true');
        }
    },

    toggleAccountsPanel(show) {
        const main = document.getElementById('userDropdown');
        const panel = document.getElementById('accountsPanel');
        if (!panel) return;
        if (show === undefined) show = !panel.classList.contains('show');
        if (show) {
            main?.classList.remove('show');
            main?.setAttribute('aria-hidden', 'true');
            panel.classList.add('show');
            panel.setAttribute('aria-hidden', 'false');
            this.renderAccountsList();
        } else {
            panel.classList.remove('show');
            panel.setAttribute('aria-hidden', 'true');
        }
    },

    toggleSearch(show) {
        const overlay = document.getElementById('searchOverlay');
        const input = document.querySelector('.search-input');
        if (!overlay) return;
        if (show === undefined) show = !overlay.classList.contains('show');
        overlay.classList.toggle('show', show);
        overlay.setAttribute('aria-hidden', !show);
        if (show) {
            setTimeout(() => input?.focus(), 100);
        } else {
            if (input) input.value = '';
            const results = document.getElementById('searchResults');
            const suggestions = document.getElementById('searchSuggestions');
            if (results) results.innerHTML = '';
            if (suggestions) suggestions.style.display = 'block';
        }
    },

    startBidTimers() {
        AuctionData.products.forEach(product => {
            if (product.status === 'active' && product.endTime) {
                this.startProductTimer(product.id);
            }
        });
    },

    startProductTimer(productId) {
        const product = getProductById(productId);
        if (!product || product.status !== 'active' || !product.endTime) return;

        const timerId = setInterval(() => {
            const product = getProductById(productId);
            if (!product || product.status !== 'active') {
                clearInterval(timerId);
                this.bidTimers.delete(productId);
                return;
            }

            const remaining = new Date(product.endTime) - new Date();
            if (remaining <= 0) {
                clearInterval(timerId);
                this.bidTimers.delete(productId);
                endBid(productId);
                this.updateBidDisplays(productId);
                return;
            }

            this.updateTimerDisplay(productId, remaining);
        }, 1000);

        this.bidTimers.set(productId, timerId);
    },

    updateTimerDisplay(productId, remaining) {
        const minutes = Math.floor(remaining / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);
        const timeStr = `${minutes}m ${seconds}s`;

        document.querySelectorAll(`[data-product-id="${productId}"] .product-time-remaining, [data-product-id="${productId}"] .bid-timer`).forEach(el => {
            el.textContent = timeStr;
            if (minutes < 1) el.classList.add('badge-error');
            else if (minutes < 5) el.classList.add('badge-warning');
        });
    },

    updateBidDisplays(productId) {
        const product = getProductById(productId);
        if (!product) return;

        document.querySelectorAll(`[data-product-id="${productId}"]`).forEach(card => {
            const bidEl = card.querySelector('.product-current-bid, .current-bid-value');
            if (bidEl) bidEl.textContent = formatCurrency(product.currentBid);

            const countEl = card.querySelector('.product-bid-count, .bid-count');
            if (countEl) countEl.textContent = `${product.bidHistory.length} bids`;

            const badgeEl = card.querySelector('.product-status-badge, .status-badge');
            if (badgeEl) {
                badgeEl.textContent = this.getStatusLabel(product.status);
                badgeEl.className = 'badge ' + this.getStatusBadgeClass(product.status);
            }

            const timerEl = card.querySelector('.product-time-remaining, .bid-timer');
            if (timerEl) {
                if (product.status === 'active') {
                    timerEl.textContent = getTimeRemaining(product.endTime);
                } else {
                    timerEl.textContent = this.getStatusLabel(product.status);
                }
            }

            const bidderEl = card.querySelector('.highest-bidder');
            if (bidderEl) {
                bidderEl.textContent = product.highestBidder ? `Highest: ${product.highestBidder}` : 'No bids yet';
            }

            const btn = card.querySelector('.place-bid-btn');
            if (btn) {
                btn.disabled = product.status !== 'active' || (this.currentUser && this.currentUser.id === product.sellerId);
                btn.textContent = product.status === 'active' ? 'Place Bid' : product.status === 'sold_pending_payment' ? 'Payment Pending' : product.status === 'sold' ? 'Sold' : 'Bidding Ended';

                if (product.status === 'active' && this.userHasBidOnProduct(productId)) {
                    btn.classList.remove('place-bid-btn');
                    btn.classList.add('change-bid-btn', 'btn-outline');
                    btn.classList.remove('btn-primary');
                    btn.textContent = 'Change Bid';
                    btn.disabled = false;
                }
            }
        });
    },

    initProductCards() {
        document.querySelectorAll('.product-card').forEach(card => {
            const productId = card.dataset.productId;
            if (!productId) return;

            const product = getProductById(productId);
            if (!product) return;

            const link = card.querySelector('.product-card-link');
            if (link) link.href = `product.html?id=${productId}`;

            const placeholder = card.querySelector('.product-image-placeholder');
            if (placeholder) placeholder.textContent = this.getCategoryIcon(product.category);

            const categoryEl = card.querySelector('.product-category');
            if (categoryEl) categoryEl.textContent = this.getCategoryName(product.category);

            const titleEl = card.querySelector('.product-title');
            if (titleEl) titleEl.textContent = product.name;

            const descEl = card.querySelector('.product-description');
            if (descEl) descEl.textContent = product.description.substring(0, 100) + '...';

            const bidEl = card.querySelector('.product-current-bid');
            if (bidEl) bidEl.textContent = formatCurrency(product.currentBid);

            const countEl = card.querySelector('.product-bid-count');
            if (countEl) countEl.textContent = `${product.bidHistory.length} bids`;

            const timerEl = card.querySelector('.product-time-remaining');
            if (timerEl) {
                if (product.status === 'active' && product.endTime) {
                    timerEl.textContent = getTimeRemaining(product.endTime);
                    this.startProductTimer(productId);
                } else {
                    timerEl.textContent = this.getStatusLabel(product.status);
                }
            }

            const badgeEl = card.querySelector('.product-status-badge');
            if (badgeEl) {
                badgeEl.textContent = this.getStatusLabel(product.status);
                badgeEl.className = 'badge ' + this.getStatusBadgeClass(product.status);
            }

            const btn = card.querySelector('.place-bid-btn');
            if (btn) {
                btn.dataset.productId = productId;
                btn.disabled = product.status !== 'active' || (this.currentUser && this.currentUser.id === product.sellerId);
                btn.textContent = product.status === 'active' ? 'Place Bid' : product.status === 'sold_pending_payment' ? 'Payment Pending' : product.status === 'sold' ? 'Sold' : 'Bidding Ended';

                if (product.status === 'active' && this.userHasBidOnProduct(productId)) {
                    btn.classList.remove('place-bid-btn');
                    btn.classList.add('change-bid-btn', 'btn-outline');
                    btn.classList.remove('btn-primary');
                    btn.textContent = 'Change Bid';
                    btn.disabled = false;
                }
            }

        });
    },

    getStatusLabel(status) {
        const labels = {
            pending: 'Upcoming',
            active: 'Live',
            ended: 'Ended',
            sold_pending_payment: 'Payment Pending',
            sold: 'Sold',
            unsold: 'Unsold'
        };
        return labels[status] || status;
    },

    getStatusBadgeClass(status) {
        const classes = {
            pending: 'badge-info',
            active: 'badge-pulse badge-success',
            ended: 'badge-warning',
            sold_pending_payment: 'badge-warning',
            sold: 'badge-success',
            unsold: 'badge-error'
        };
        return classes[status] || 'badge-info';
    },

    getCategoryIcon(category) {
        const icons = {
            fine_art: '🖼️',
            antique_furniture: '🪑',
            antique_jewellery: '💍',
            collectibles: '🪙',
            decorative_arts: '🏺'
        };
        return icons[category] || '📦';
    },

    getCategoryName(category) {
        const names = {
            fine_art: 'Fine Art',
            antique_furniture: 'Antique Furniture',
            antique_jewellery: 'Antique Jewellery',
            collectibles: 'Collectibles',
            decorative_arts: 'Decorative Arts'
        };
        return names[category] || category;
    },

    // Form handling
    initForms() {
        document.querySelectorAll('form[data-form]').forEach(form => {
            const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', () => this.clearFieldError(input));
            });
        });
    },

    validateField(input) {
        if (input.required && !input.value.trim()) {
            this.showFieldError(input, 'This field is required');
            return false;
        }
        if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
            this.showFieldError(input, 'Please enter a valid email');
            return false;
        }
        if (input.type === 'tel' && input.value && !/^[\d\s\-\+\(\)]{10,}$/.test(input.value)) {
            this.showFieldError(input, 'Please enter a valid phone number');
            return false;
        }
        if (input.dataset.min && input.value && parseFloat(input.value) < parseFloat(input.dataset.min)) {
            this.showFieldError(input, `Minimum value is ${input.dataset.min}`);
            return false;
        }
        this.clearFieldError(input);
        return true;
    },

    showFieldError(input, message) {
        input.classList.add('error');
        let errorEl = input.parentNode.querySelector('.form-error');
        if (!errorEl) {
            errorEl = document.createElement('p');
            errorEl.className = 'form-error';
            input.parentNode.appendChild(errorEl);
        }
        errorEl.textContent = message;
    },

    clearFieldError(input) {
        input.classList.remove('error');
        const errorEl = input.parentNode.querySelector('.form-error');
        if (errorEl) errorEl.remove();
    },

    validateForm(form) {
        let valid = true;
        form.querySelectorAll('input[required], select[required], textarea[required]').forEach(input => {
            if (!this.validateField(input)) valid = false;
        });
        return valid;
    },

    handleLoginForm(form) {
        if (!this.validateForm(form)) return;

        const formData = new FormData(form);
        const identifier = formData.get('identifier');
        const password = formData.get('password');
        const role = formData.get('role');

            const result = loginUser(identifier, password, role);
            if (result.success) {
                this.currentUser = result.user;
                this.saveAccount(result.user);
                this.showToast('Welcome back!', `Logged in as ${result.user.name}`, 'success');
                window.location.href = 'index.html';
            } else {
            this.showToast('Login Failed', result.message, 'error');
        }
    },

    handleRegisterForm(form) {
        if (!this.validateForm(form)) return;

        const formData = new FormData(form);
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');

        if (password !== confirmPassword) {
            this.showToast('Registration Failed', 'Passwords do not match', 'error');
            return;
        }

        if (password.length < 8) {
            this.showToast('Registration Failed', 'Password must be at least 8 characters', 'error');
            return;
        }

        const userData = {
            name: `${formData.get('firstName')} ${formData.get('lastName')}`.trim(),
            email: formData.get('email'),
            phone: formData.get('phone'),
            password: password,
            role: formData.get('role'),
            bankDetails: {
                accountNumber: formData.get('accountNumber'),
                bankName: formData.get('bankName'),
                ifsc: formData.get('ifsc')
            },
            address: formData.get('address')
        };

        const result = registerUser(userData);
        if (result.success) {
            this.showToast('Registration Successful!', 'Your account has been created. Please login.', 'success');
            setTimeout(() => window.location.href = 'login.html', 1500);
        } else {
            this.showToast('Registration Failed', result.message, 'error');
        }
    },

    handleProfileForm(form) {
        if (!this.validateForm(form)) return;

        const formData = new FormData(form);
        this.currentUser.name = formData.get('name');
        this.currentUser.phone = formData.get('phone');
        this.currentUser.address = formData.get('address');
        this.currentUser.bankDetails = {
            accountNumber: formData.get('accountNumber'),
            bankName: formData.get('bankName'),
            ifsc: formData.get('ifsc')
        };

        const userIndex = AuctionData.users.findIndex(u => u.id === this.currentUser.id);
        if (userIndex !== -1) {
            AuctionData.users[userIndex] = this.currentUser;
            saveData();
            this.updateHeader();
            this.showToast('Profile Updated', 'Your profile has been saved', 'success');
        }
    },

    handleBiddingForm(form) {
        if (!this.validateForm(form)) return;

        const formData = new FormData(form);
        const productId = formData.get('productId');
        const amount = parseFloat(formData.get('amount'));

        const result = placeBid(productId, this.currentUser.id, amount);
        if (result.success) {
            this.showToast('Bid Placed!', `Your bid of ${formatCurrency(amount)} has been placed`, 'success');
            this.closeModal();
            // Refresh bid displays
            this.updateBidDisplays(productId);
        } else {
            this.showToast('Bid Failed', result.message, 'error');
        }
    },

    handlePaymentForm(form) {
        if (!this.validateForm(form)) return;

        const formData = new FormData(form);
        const paymentId = formData.get('paymentId');
        const productId = formData.get('productId');
        const payment = AuctionData.payments.find(p => p.id === paymentId);

        const paymentData = {
            method: formData.get('paymentMethod'),
            transactionId: formData.get('transactionId') || 'TXN' + Date.now()
        };

        const result = processPayment(paymentId, paymentData);
        if (result.success) {
            this.showToast('Payment Successful!', 'Your payment has been processed', 'success');
            setTimeout(() => window.location.href = 'my-bids.html', 2000);
        } else {
            this.showToast('Payment Failed', result.message, 'error');
        }
    },

    handleAddProductForm(form) {
        if (!this.validateForm(form)) return;

        const formData = new FormData(form);
        const productData = {
            category: formData.get('category'),
            name: formData.get('name'),
            description: formData.get('description'),
            startingBid: parseFloat(formData.get('startingBid')),
            minBidIncrement: parseFloat(formData.get('minBidIncrement')) || 1000
        };

        const product = createProduct(productData);
        this.showToast('Product Listed!', `${product.name} has been added for auction`, 'success');
        window.location.href = 'seller-dashboard.html';
    },

    cleanup() {
        this.bidTimers.forEach(timerId => clearInterval(timerId));
        this.bidTimers.clear();
    },

    openBidModal(productId) {
        const product = getProductById(productId);
        if (!product) return;

        const minBid = product.currentBid + product.minBidIncrement;

        this.openModal(
            `Place Bid on ${product.name}`,
            `
                <form data-form="bidding" id="bidForm" class="bid-form">
                    <input type="hidden" name="productId" value="${productId}">
                    <div class="form-group">
                        <label class="form-label">Current Bid</label>
                        <div class="form-input" style="background: var(--background); color: var(--primary); font-weight: 700; cursor: default;">${formatCurrency(product.currentBid)}</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Minimum Next Bid</label>
                        <div class="form-input" style="background: var(--background); color: var(--text-secondary); cursor: default;">${formatCurrency(minBid)}</div>
                    </div>
                    <div class="form-group">
                        <label for="bidAmount" class="form-label">Your Bid Amount *</label>
                        <input type="number" id="bidAmount" name="amount" class="form-input" required data-min="${minBid}" min="${minBid}" step="${product.minBidIncrement}" placeholder="Enter your bid" value="${minBid}">
                        <p class="form-help" id="bidHelp">Enter ${formatCurrency(minBid)} or more</p>
                    </div>
                    <div class="alert alert-info" style="font-size: 0.8125rem;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Minimum bid increment: ${formatCurrency(product.minBidIncrement)}. Bids cannot be withdrawn once placed.
                    </div>
                </form>
            `,
            `
                <button type="button" class="btn btn-ghost" id="bidCancelBtn">Cancel</button>
                <button type="button" class="btn btn-primary" id="bidSubmitBtn">Place Bid</button>
            `
        );

        const bidInput = document.getElementById('bidAmount');
        const bidHelp = document.getElementById('bidHelp');
        const submitBtn = document.getElementById('bidSubmitBtn');
        const cancelBtn = document.getElementById('bidCancelBtn');

        bidInput.addEventListener('input', () => {
            const val = parseFloat(bidInput.value);
            if (isNaN(val) || val < minBid) {
                bidHelp.textContent = `Minimum bid is ${formatCurrency(minBid)}`;
                bidHelp.style.color = 'var(--error)';
            } else {
                bidHelp.textContent = `Your bid: ${formatCurrency(val)} - Click Place Bid to confirm`;
                bidHelp.style.color = 'var(--success)';
            }
        });

        cancelBtn.addEventListener('click', () => this.closeModal());

        submitBtn.addEventListener('click', () => {
            const amount = parseFloat(bidInput.value);
            if (isNaN(amount) || amount < minBid) {
                this.showToast('Invalid Bid', `Bid must be at least ${formatCurrency(minBid)}`, 'error');
                return;
            }
            const result = placeBid(productId, this.currentUser.id, amount);
            if (result.success) {
                this.showToast('Bid Placed!', `Your bid of ${formatCurrency(amount)} has been placed`, 'success');
                this.closeModal();
                this.updateBidDisplays(productId);
            } else {
                this.showToast('Bid Failed', result.message, 'error');
            }
        });
    },

    userHasBidOnProduct(productId) {
        if (!this.currentUser) return false;
        const product = getProductById(productId);
        if (!product) return false;
        return product.bidHistory.some(b => b.bidderId === this.currentUser.id);
    },

    getUserBidOnProduct(productId) {
        if (!this.currentUser) return null;
        const product = getProductById(productId);
        if (!product) return null;
        const userBids = product.bidHistory.filter(b => b.bidderId === this.currentUser.id);
        return userBids.length > 0 ? userBids[userBids.length - 1] : null;
    },

    openChangeBidModal(productId) {
        const product = getProductById(productId);
        if (!product) return;

        const userBid = this.getUserBidOnProduct(productId);
        const minBid = product.currentBid + product.minBidIncrement;
        const isWinning = product.highestBidderId === this.currentUser.id;
        const userBidAmount = userBid ? userBid.amount : 0;

        this.openModal(
            `Change Bid on ${product.name}`,
            `
                <form data-form="bidding" id="bidForm" class="bid-form">
                    <input type="hidden" name="productId" value="${productId}">
                    ${userBid ? `
                    <div class="alert alert-info" style="font-size: 0.8125rem; margin-bottom: 16px;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Your current bid: <strong>${formatCurrency(userBidAmount)}</strong> ${isWinning ? '(Winning)' : '(Outbid)'}
                    </div>
                    ` : ''}
                    <div class="form-group">
                        <label class="form-label">Current Highest Bid</label>
                        <div class="form-input" style="background: var(--background); color: var(--primary); font-weight: 700; cursor: default;">${formatCurrency(product.currentBid)}</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Minimum Next Bid</label>
                        <div class="form-input" style="background: var(--background); color: var(--text-secondary); cursor: default;">${formatCurrency(minBid)}</div>
                    </div>
                    <div class="form-group">
                        <label for="bidAmount" class="form-label">New Bid Amount *</label>
                        <input type="number" id="bidAmount" name="amount" class="form-input" required data-min="${minBid}" min="${minBid}" step="${product.minBidIncrement}" placeholder="Enter your new bid" value="${minBid}">
                        <p class="form-help" id="bidHelp">Enter ${formatCurrency(minBid)} or more to update your bid</p>
                    </div>
                    <div class="alert alert-info" style="font-size: 0.8125rem;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Minimum bid increment: ${formatCurrency(product.minBidIncrement)}. Your previous bid will be superseded.
                    </div>
                </form>
            `,
            `
                <button type="button" class="btn btn-ghost" id="bidCancelBtn">Cancel</button>
                <button type="button" class="btn btn-primary" id="bidSubmitBtn">Update Bid</button>
            `
        );

        const bidInput = document.getElementById('bidAmount');
        const bidHelp = document.getElementById('bidHelp');
        const submitBtn = document.getElementById('bidSubmitBtn');
        const cancelBtn = document.getElementById('bidCancelBtn');

        bidInput.addEventListener('input', () => {
            const val = parseFloat(bidInput.value);
            if (isNaN(val) || val < minBid) {
                bidHelp.textContent = `Minimum bid is ${formatCurrency(minBid)}`;
                bidHelp.style.color = 'var(--error)';
            } else {
                bidHelp.textContent = `New bid: ${formatCurrency(val)} - Click Update Bid to confirm`;
                bidHelp.style.color = 'var(--success)';
            }
        });

        cancelBtn.addEventListener('click', () => this.closeModal());

        submitBtn.addEventListener('click', () => {
            const amount = parseFloat(bidInput.value);
            if (isNaN(amount) || amount < minBid) {
                this.showToast('Invalid Bid', `Bid must be at least ${formatCurrency(minBid)}`, 'error');
                return;
            }
            const result = placeBid(productId, this.currentUser.id, amount);
            if (result.success) {
                this.showToast('Bid Updated!', `Your new bid of ${formatCurrency(amount)} has been placed`, 'success');
                this.closeModal();
                this.updateBidDisplays(productId);
            } else {
                this.showToast('Bid Failed', result.message, 'error');
            }
        });
    }
};

// Attach standalone utility functions to App for global access
// (auction-data.js loaded before this file, so standalone functions exist)
['navigate', 'formatCurrency', 'formatDate', 'formatDateTime',
 'getTimeRemaining', 'getStatusLabel', 'getStatusBadgeClass',
 'getCategoryIcon', 'getCategoryName', 'escapeHtml', 'showToast',
 'openBidModal', 'openModal', 'closeModal', 'validateField',
 'clearFieldError', 'startProductTimer'
].forEach(fn => {
    if (typeof App[fn] === 'undefined' && typeof window[fn] === 'function') {
        App[fn] = window[fn];
    }
});

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// Export for global access
window.App = App;