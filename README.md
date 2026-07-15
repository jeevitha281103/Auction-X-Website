# AuctionX - Premium Antique Auction Marketplace

A complete auction website built with HTML, CSS, and JavaScript (no backend required - uses localStorage for data persistence).

## Author

- **Name**: Jeevitha
- **Email**: jeevitharaja2811@gmail.com

## Features

- **Three User Roles**: Admin, Seller, Customer
- **Five Categories**: Fine Art, Antique Furniture, Antique Jewellery, Collectibles, Decorative Arts
- **Complete Auction Flow**: List → Bid → Win → Pay → Transfer
- **Real-time Bidding**: Live countdown timers, automatic bid updates
- **Admin Controls**: Start/end auctions, manage users, view analytics
- **Seller Dashboard**: Manage listings, track sales, view earnings
- **Customer Features**: Browse, bid, watchlist, purchase history
- **Responsive Design**: Works on mobile, tablet, desktop
- **Accessible**: WCAG 2.1 AA compliant

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage with featured auctions |
| `login.html` / `register.html` | Authentication |
| `categories.html` | Browse by category |
| `live-bids.html` | Currently active auctions |
| `product.html?id=` | Product details & bidding |
| `dashboard.html` | User dashboard |
| `profile.html` | Account settings |
| `my-bids.html` | Bid tracking |
| `payment.html` | Payment processing |
| `seller-dashboard.html` | Seller management |
| `add-product.html` | List new item |
| `admin-dashboard.html` | Admin panel |

## Default Accounts

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@auctionx.com | admin123 |
| Seller | john@seller.com | seller123 |
| Customer | alice@collector.com | customer123 |

## Local Development

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000`

## GitHub Pages Deployment

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings (Source: Deploy from branch, Branch: main)
3. Site will be available at `https://username.github.io/repository-name`

## Project Structure

```
auctionx/
├── index.html
├── login.html
├── register.html
├── categories.html
├── live-bids.html
├── product.html
├── dashboard.html
├── profile.html
├── my-bids.html
├── payment.html
├── seller-dashboard.html
├── add-product.html
├── admin-dashboard.html
├── assets/
│   └── css/
│       └── main.css
├── js/
│   └── app.js
├── data/
│   └── auction-data.js
└── README.md
```

## Technology Stack

- **HTML5**: Semantic markup, accessibility
- **CSS3**: Custom properties, Grid/Flexbox, animations
- **JavaScript (ES6+)**: Modules, localStorage, event-driven architecture
- **No Framework**: Vanilla JS for maximum compatibility

## Data Persistence

Uses `localStorage` for:
- User accounts & sessions
- Product listings
- Bid history
- Payments
- Admin actions

Data survives browser restarts and page reloads.

## License

MIT License - Feel free to use for learning or commercial projects.