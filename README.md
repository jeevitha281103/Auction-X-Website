# AuctionX — Premium Antique Auction Marketplace

A complete online auction platform built with vanilla HTML, CSS, and JavaScript. No backend required — data is persisted using `localStorage` and session management across browser tabs.

## Author

- **Name**: Jeevitha
- **Email**: [jeevitharaja2811@gmail.com](mailto:jeevitharaja2811@gmail.com)
- **LinkedIn**: [R.S. Jeevitha Raja](https://www.linkedin.com/in/r-s-jeevitha-raja-7692642b3?utm_source=share_via&utm_content=profile&utm_medium=member_android)

## Overview

AuctionX is a feature-rich auction system supporting three user roles — Admin, Seller, and Customer — across five product categories. It simulates the full auction lifecycle: listing, bidding, winning, payment, and transfer, all within a responsive, accessible front-end.

## Features

- **Three User Roles**: Admin (platform oversight), Seller (listings & sales), Customer (bidding & purchases)
- **Five Categories**: Fine Art, Antique Furniture, Antique Jewellery, Collectibles, Decorative Arts
- **Complete Auction Flow**: List → Bid → Win → Pay → Transfer
- **Real-time Bidding**: Live countdown timers, automatic bid updates, outbid notifications
- **Admin Controls**: Start/end auctions, manage users, view platform analytics
- **Seller Dashboard**: Manage listings, track sales, view earnings
- **Customer Dashboard**: Browse, bid, watchlist, purchase history, lost/outbid tracking
- **Multi-Session Support**: Switch between saved accounts without re-login
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Accessibility**: WCAG 2.1 AA compliant

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage with featured and upcoming auctions |
| `login.html` / `register.html` | Authentication with role selection |
| `categories.html` | Browse products by category |
| `live-bids.html` | Currently active auctions with live timers |
| `product.html?id=` | Product details, bidding, and bid history |
| `dashboard.html` | Customer dashboard — stats, bids, purchases |
| `profile.html` | Account settings and bank details |
| `my-bids.html` | Tabbed bid tracking — active, won, lost, history |
| `payment.html` | Payment processing for won auctions |
| `seller-dashboard.html` | Seller management — listings, sales, analytics |
| `add-product.html` | List a new item for auction |
| `admin-dashboard.html` | Admin panel — users, products, bids, payments |

## Default Accounts

| Role | Username | Email | Password |
|------|----------|-------|----------|
| Admin | Admin | admin@auctionx.com | admin123 |
| Seller | Richard | richard@kelly.com | richard123 |
| Seller | Sabrina | sabrina@carpenter.com | sabrina123 |
| Seller | John | john@carter.com | john123 |
| Seller | Harvey | harvey@miller.com | harvey123 |
| Customer | Elayna | elayna@galea.com | elayna123 |
| Customer | Colleen | colleen@hoover.com | colleen123 |
| Customer | Mercedes | mercedes@ron.com | mercedes123 |
| Customer | Rebecca | rebecca@yarros.com | rebecca123 |
| Customer | Stephanie | stephanie@archer.com | stephanie123 |
| Customer | Robin | robbin@williams.com | robin123 |
| Customer | Carl | carl@winter.com | carl123 |
| Customer | Holly | holly@jackson.com | holly123 |

> **Note**: Login accepts either username or email (case-insensitive).

## Local Development

```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000`.

## Deployment

### GitHub Pages

1. Push to the GitHub repository
2. Enable **GitHub Pages** in repository settings
   - Source: **Deploy from branch**
   - Branch: `main`, folder: `/ (root)`
3. Site auto-deploys via GitHub Actions CI/CD

## Project Structure

```
auctionx/
├── index.html
├── login.html / register.html
├── categories.html
├── live-bids.html
├── product.html
├── dashboard.html / profile.html / my-bids.html
├── payment.html
├── seller-dashboard.html / add-product.html
├── admin-dashboard.html
├── assets/
│   └── css/
│       └── main.css          # All styles (2096 lines)
├── js/
│   └── app.js                # Shared utilities, events, modals
├── data/
│   └── auction-data.js       # Data layer, CRUD, localStorage
└── README.md
```

## Technology Stack

| Layer | Technology |
|-------|-----------|
| **Markup** | HTML5 — semantic elements, ARIA roles, accessibility |
| **Styling** | CSS3 — custom properties, Grid/Flexbox, animations, responsive breakpoints |
| **Logic** | JavaScript (ES6+) — modules, event-driven architecture, localStorage API |
| **Framework** | None — vanilla JS for maximum compatibility and performance |
| **Deployment** | GitHub Pages + GitHub Actions CI/CD |

## Data Persistence

Data is stored entirely in the browser using `localStorage`:

- User accounts and authentication sessions
- Product listings and bid history
- Payment records
- Admin action logs
- Saved accounts for multi-session switching

Data survives browser restarts and page reloads. Per-tab sessions are managed via `sessionStorage`.

## License

MIT License — free to use for learning, personal, or commercial projects.
