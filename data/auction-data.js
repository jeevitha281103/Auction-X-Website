const AuctionData = {
    users: [
        {
            id: 'admin_001',
            name: 'Admin User',
            email: 'admin@auctionx.com',
            phone: '9876543210',
            password: 'admin123',
            role: 'admin',
            bankDetails: {
                accountNumber: '1234567890',
                bankName: 'Admin Bank',
                ifsc: 'ADMIN000123'
            },
            address: 'Admin Office, AuctionX HQ',
            createdAt: '2024-01-01',
            purchases: [],
            soldProducts: []
        },
        {
            id: 'seller_001',
            name: 'Richard Kelly',
            email: 'richard@kelly.com',
            phone: '9876543211',
            password: 'richard123',
            role: 'seller',
            bankDetails: {
                accountNumber: '1111222233',
                bankName: 'Heritage Trust Bank',
                ifsc: 'HTBK000111'
            },
            address: '14 Auction Lane, Heritage District',
            createdAt: '2024-01-10',
            purchases: [],
            soldProducts: []
        },
        {
            id: 'seller_002',
            name: 'Sabrina Carpenter',
            email: 'sabrina@carpenter.com',
            phone: '9876543213',
            password: 'sabrina123',
            role: 'seller',
            bankDetails: {
                accountNumber: '3333444455',
                bankName: 'Antique Capital Bank',
                ifsc: 'ACBK000333'
            },
            address: '27 Collectors Row, Art Quarter',
            createdAt: '2024-01-12',
            purchases: [],
            soldProducts: []
        },
        {
            id: 'seller_003',
            name: 'John Carter',
            email: 'john@carter.com',
            phone: '9876543214',
            password: 'john123',
            role: 'seller',
            bankDetails: {
                accountNumber: '5555666677',
                bankName: 'Vintage Vault Bank',
                ifsc: 'VVBK000555'
            },
            address: '8 Estate Drive, Prestige Hills',
            createdAt: '2024-01-14',
            purchases: [],
            soldProducts: []
        },
        {
            id: 'seller_004',
            name: 'Harvey Miller',
            email: 'harvey@miller.com',
            phone: '9876543215',
            password: 'harvey123',
            role: 'seller',
            bankDetails: {
                accountNumber: '7777888899',
                bankName: 'Gold Standard Bank',
                ifsc: 'GSBK000777'
            },
            address: '51 Heritage Boulevard, Classic Avenue',
            createdAt: '2024-01-16',
            purchases: [],
            soldProducts: []
        },
        {
            id: 'customer_001',
            name: 'Elayna Galea',
            email: 'elayna@galea.com',
            phone: '9876543220',
            password: 'elayna123',
            role: 'customer',
            bankDetails: {
                accountNumber: '1000200030',
                bankName: 'Premier Collector Bank',
                ifsc: 'PCBK001000'
            },
            address: '12 Artisan Street, Collector District',
            createdAt: '2024-02-01',
            purchases: [],
            soldProducts: []
        },
        {
            id: 'customer_002',
            name: 'Colleen Hoover',
            email: 'colleen@hoover.com',
            phone: '9876543221',
            password: 'colleen123',
            role: 'customer',
            bankDetails: {
                accountNumber: '2000300040',
                bankName: 'Premier Collector Bank',
                ifsc: 'PCBK002000'
            },
            address: '34 Literary Lane, Book District',
            createdAt: '2024-02-05',
            purchases: [],
            soldProducts: []
        },
        {
            id: 'customer_003',
            name: 'Mercedes Ron',
            email: 'mercedes@ron.com',
            phone: '9876543222',
            password: 'mercedes123',
            role: 'customer',
            bankDetails: {
                accountNumber: '3000400050',
                bankName: 'Antique Heritage Bank',
                ifsc: 'AHBK003000'
            },
            address: '56 Heritage Avenue, Old Quarter',
            createdAt: '2024-02-10',
            purchases: [],
            soldProducts: []
        },
        {
            id: 'customer_004',
            name: 'Rebecca Yarros',
            email: 'rebecca@yarros.com',
            phone: '9876543223',
            password: 'rebecca123',
            role: 'customer',
            bankDetails: {
                accountNumber: '4000500060',
                bankName: 'Classic Reserve Bank',
                ifsc: 'CRBK004000'
            },
            address: '78 Collectors Row, Antiquity Park',
            createdAt: '2024-02-15',
            purchases: [],
            soldProducts: []
        },
        {
            id: 'customer_005',
            name: 'Stephanie Archer',
            email: 'stephanie@archer.com',
            phone: '9876543224',
            password: 'stephanie123',
            role: 'customer',
            bankDetails: {
                accountNumber: '5000600070',
                bankName: 'Classic Reserve Bank',
                ifsc: 'CRBK005000'
            },
            address: '90 Oakwood Terrace, Historic Quarter',
            createdAt: '2024-02-20',
            purchases: [],
            soldProducts: []
        },
        {
            id: 'customer_006',
            name: 'Robin Williams',
            email: 'robin@williams.com',
            phone: '9876543225',
            password: 'robin123',
            role: 'customer',
            bankDetails: {
                accountNumber: '6000700080',
                bankName: 'Heritage Vault Bank',
                ifsc: 'HVBK006000'
            },
            address: '123 Prestige Hills, Estate Drive',
            createdAt: '2024-03-01',
            purchases: [],
            soldProducts: []
        },
        {
            id: 'customer_007',
            name: 'Carl Winter',
            email: 'carl@winter.com',
            phone: '9876543226',
            password: 'carl123',
            role: 'customer',
            bankDetails: {
                accountNumber: '7000800090',
                bankName: 'Heritage Vault Bank',
                ifsc: 'HVBK007000'
            },
            address: '22 Oakwood Terrace, Historic Quarter',
            createdAt: '2024-03-05',
            purchases: [],
            soldProducts: []
        },
        {
            id: 'customer_008',
            name: 'Holly Jackson',
            email: 'holly@jackson.com',
            phone: '9876543227',
            password: 'holly123',
            role: 'customer',
            bankDetails: {
                accountNumber: '8000900100',
                bankName: 'Collector\'s Reserve Bank',
                ifsc: 'CRBK008000'
            },
            address: '63 Vintage Lane, Antiquity Park',
            createdAt: '2024-03-10',
            purchases: [],
            soldProducts: []
        }
    ],

    categories: [
        { id: 'fine_art', name: 'Fine Art', icon: '🖼️', color: '#8B4513' },
        { id: 'antique_furniture', name: 'Antique Furniture', icon: '🪑', color: '#6B4226' },
        { id: 'antique_jewellery', name: 'Antique Jewellery', icon: '💍', color: '#B8860B' },
        { id: 'collectibles', name: 'Collectibles', icon: '🪙', color: '#C0C0C0' },
        { id: 'decorative_arts', name: 'Decorative Arts', icon: '🏺', color: '#4682B4' }
    ],

    products: [
        {
            id: 'prod_001', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'fine_art', name: 'Barcelona Oil on Canvas',
            description: 'Bold Post-Impressionist oil on canvas depicting a Catalan harbor scene. Heavy impasto, vivid blues and ochres. Unsigned but attributed to a School of Paris painter, circa 1920.',
            images: ['assets/images/fine_art/Barcelona Oil on Canvas.jpg'], startingBid: 68000, currentBid: 68000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-01-20', startTime: null, endTime: null,
            minBidIncrement: 2000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },
        {
            id: 'prod_002', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'fine_art', name: 'Edwardian Watercolor Botanical Study',
            description: 'Detailed botanical watercolor study of English roses and foxgloves. Circa 1905. Mounted on original acid-free board. Luminous greens and pinks, masterful light.',
            images: ['assets/images/fine_art/Edwardian Watercolor Botanical Study.jpg'], startingBid: 24000, currentBid: 24000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-01-22', startTime: null, endTime: null,
            minBidIncrement: 1000, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        },
        {
            id: 'prod_003', sellerId: 'seller_003', sellerName: 'John Carter',
            category: 'fine_art', name: 'Ming Dynasty Jade Dragon Carving',
            description: 'Exquisite jade dragon carving from the Ming Dynasty. Nephrite jade, 15th century. Intricate openwork carving, museum-quality with documented provenance.',
            images: ['assets/images/fine_art/Ming Dynasty Jade Dragon Carving.jpg'], startingBid: 340000, currentBid: 340000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-01-25', startTime: null, endTime: null,
            minBidIncrement: 15000, sellerBankDetails: { accountNumber: '5555666677', bankName: 'Vintage Vault Bank', ifsc: 'VVBK000555' }
        },
        {
            id: 'prod_004', sellerId: 'seller_004', sellerName: 'Harvey Miller',
            category: 'fine_art', name: 'Bronze Art Deco Dancer Sculpture',
            description: 'Stunning Art Deco bronze sculpture of a dancer in mid-leap. Signed base, circa 1925. Original green-brown patina. Height 42cm, mounted on marble plinth.',
            images: ['assets/images/fine_art/Bronze Art Deco Dancer Sculpture.jpg'], startingBid: 145000, currentBid: 145000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-01-28', startTime: null, endTime: null,
            minBidIncrement: 5000, sellerBankDetails: { accountNumber: '7777888899', bankName: 'Gold Standard Bank', ifsc: 'GSBK000777' }
        },
        {
            id: 'prod_005', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'fine_art', name: 'Japanese Meiji Woodblock Print',
            description: 'Original Meiji-era ukiyo-e woodblock print by a student of Hiroshige. Depicts Mount Fuji at dawn with pine forests. Excellent color, full margins.',
            images: ['assets/images/fine_art/Japanese Meiji Woodblock Print.png'], startingBid: 35000, currentBid: 35000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-01-28', startTime: null, endTime: null,
            minBidIncrement: 2000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },
        {
            id: 'prod_007', sellerId: 'seller_003', sellerName: 'John Carter',
            category: 'fine_art', name: 'Qing Dynasty Lacquerware Box',
            description: 'Ornate Qing Dynasty carved red lacquerware box with landscape motifs. Qingli period, circa 1750. Multi-layer carving, gilded interior. Excellent preservation.',
            images: ['assets/images/fine_art/Qing Dynasty Lacquerware Box.jpg'], startingBid: 178000, currentBid: 178000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-05', startTime: null, endTime: null,
            minBidIncrement: 8000, sellerBankDetails: { accountNumber: '5555666677', bankName: 'Vintage Vault Bank', ifsc: 'VVBK000555' }
        },
        {
            id: 'prod_008', sellerId: 'seller_004', sellerName: 'Harvey Miller',
            category: 'fine_art', name: 'Venetian School Oil Portrait',
            description: 'Richly colored oil portrait of a Venetian nobleman, circa 1780. School of Tiepolo. Dramatic chiaroscuro, original gilt frame. Provenance from a Venetian palazzo.',
            images: ['assets/images/fine_art/Venetian School Oil Portrait.jpg'], startingBid: 210000, currentBid: 210000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-07', startTime: null, endTime: null,
            minBidIncrement: 10000, sellerBankDetails: { accountNumber: '7777888899', bankName: 'Gold Standard Bank', ifsc: 'GSBK000777' }
        },
        {
            id: 'prod_010', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'fine_art', name: 'Marble Bust of Apollo',
            description: 'Neoclassical marble bust of Apollo, Italian, circa 1850. Fine white Carrara marble, expressive detailing. Height 58cm on later socle.',
            images: ['assets/images/fine_art/Marble Bust of Apollo.jpg'], startingBid: 165000, currentBid: 165000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-12', startTime: null, endTime: null,
            minBidIncrement: 8000, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        },
        {
            id: 'prod_012', sellerId: 'seller_004', sellerName: 'Harvey Miller',
            category: 'fine_art', name: 'Dutch Golden Age Still Life',
            description: 'Luminous Dutch Golden Age floral still life. Oil on panel, circa 1660. Rich bouquet of roses, tulips, and irons in a classical urn. Fine craquelure consistent with age.',
            images: ['assets/images/fine_art/Dutch Golden Age Still Life.jpg'], startingBid: 275000, currentBid: 275000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-16', startTime: null, endTime: null,
            minBidIncrement: 12000, sellerBankDetails: { accountNumber: '7777888899', bankName: 'Gold Standard Bank', ifsc: 'GSBK000777' }
        },
        {
            id: 'prod_014', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'fine_art', name: 'Bronze Samurai Armour Detail',
            description: 'Finely cast Japanese bronze okimono depicting a samurai warrior in full armour. Meiji period, signed. Height 35cm. Dynamic pose, extraordinary detail.',
            images: ['assets/images/fine_art/Bronze Samurai Armour Detail.jpg'], startingBid: 98000, currentBid: 98000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-20', startTime: null, endTime: null,
            minBidIncrement: 4000, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        },

        {
            id: 'prod_015', sellerId: 'seller_003', sellerName: 'John Carter',
            category: 'antique_furniture', name: 'Georgian Mahogany Chest of Drawers',
            description: 'Fine George III mahogany chest of drawers with original brass handles. Four graduated long drawers, cockbeaded edges. Circa 1780. Excellent condition.',
            images: ['assets/images/antique_furniture/Georgian Mahogany Chest of Drawers.jpg'], startingBid: 85000, currentBid: 85000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-01-25', startTime: null, endTime: null,
            minBidIncrement: 3000, sellerBankDetails: { accountNumber: '5555666677', bankName: 'Vintage Vault Bank', ifsc: 'VVBK000555' }
        },
        {
            id: 'prod_016', sellerId: 'seller_004', sellerName: 'Harvey Miller',
            category: 'antique_furniture', name: 'Louis XV Ormolu-Mounted Commode',
            description: 'Exquisite Louis XV kingwood and tulipwood commode with gilt-bronze mounts. Original marble top. Breche Violette marble. Circa 1745. Attributed to a Parisian maitre ebeniste.',
            images: ['assets/images/antique_furniture/Louis XV Ormolu-Mounted Commode.jpg'], startingBid: 420000, currentBid: 420000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-01-28', startTime: null, endTime: null,
            minBidIncrement: 20000, sellerBankDetails: { accountNumber: '7777888899', bankName: 'Gold Standard Bank', ifsc: 'GSBK000777' }
        },
        {
            id: 'prod_017', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'antique_furniture', name: 'Victorian Grandfather Clock',
            description: 'Imposing Victorian mahogany longcase clock. Eight-day striking movement, arched brass dial with moonphase. Circa 1860. Standing 230cm tall, fully restored movement.',
            images: ['assets/images/antique_furniture/Victorian Grandfather Clock.jpg'], startingBid: 62000, currentBid: 62000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-01', startTime: null, endTime: null,
            minBidIncrement: 2000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },
        {
            id: 'prod_018', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'antique_furniture', name: 'Art Deco Walnut Dining Table',
            description: 'Streamlined Art Deco extendable dining table in figured walnut. Geometric inlays, supports six to eight. Circa 1930. French origin with original mechanism.',
            images: ['assets/images/antique_furniture/Art Deco Walnut Dining Table.jpg'], startingBid: 135000, currentBid: 135000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-03', startTime: null, endTime: null,
            minBidIncrement: 5000, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        },
        {
            id: 'prod_019', sellerId: 'seller_003', sellerName: 'John Carter',
            category: 'antique_furniture', name: 'Renaissance Carved Oak Cabinet',
            description: 'Imposing Renaissance carved oak cabinet with architectural pediment and caryatid columns. German, circa 1580. Original iron hardware, carved panels depicting mythological scenes.',
            images: ['assets/images/antique_furniture/Renaissance Carved Oak Cabinet.jpg'], startingBid: 290000, currentBid: 290000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-05', startTime: null, endTime: null,
            minBidIncrement: 12000, sellerBankDetails: { accountNumber: '5555666677', bankName: 'Vintage Vault Bank', ifsc: 'VVBK000555' }
        },
        {
            id: 'prod_020', sellerId: 'seller_004', sellerName: 'Harvey Miller',
            category: 'antique_furniture', name: 'Chippendale Ribbon-Back Side Chair',
            description: 'Exceptional Chippendale ribbon-back side chair in mahogany. Philadelphia, circa 1770. Original ball-and-claw feet, pierced splat. Museum deaccession.',
            images: ['assets/images/antique_furniture/Chippendale Ribbon-Back Side Chair.jpg'], startingBid: 175000, currentBid: 175000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-07', startTime: null, endTime: null,
            minBidIncrement: 8000, sellerBankDetails: { accountNumber: '7777888899', bankName: 'Gold Standard Bank', ifsc: 'GSBK000777' }
        },
        {
            id: 'prod_021', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'antique_furniture', name: 'Georgian Gilt-Mirror Overmantel',
            description: 'Grand Georgian gilt-gesso overmantel mirror. Carved with swags, urns, and acanthus. Circa 1790. Mercury glass with original foxing. Width 120cm.',
            images: ['assets/images/antique_furniture/Georgian Gilt-Mirror Overmantel.jpg'], startingBid: 54000, currentBid: 54000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-10', startTime: null, endTime: null,
            minBidIncrement: 2000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },
        {
            id: 'prod_023', sellerId: 'seller_003', sellerName: 'John Carter',
            category: 'antique_furniture', name: 'Art Nouveau Oak Bookcase',
            description: 'Stunning Art Nouveau carved oak bookcase with sinuous lines and whiplash curves. French, circa 1900. Glazed upper doors, adjustable shelves. Attributed to Majorelle school.',
            images: ['assets/images/antique_furniture/Art Nouveau Oak Bookcase.jpg'], startingBid: 198000, currentBid: 198000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-14', startTime: null, endTime: null,
            minBidIncrement: 8000, sellerBankDetails: { accountNumber: '5555666677', bankName: 'Vintage Vault Bank', ifsc: 'VVBK000555' }
        },
        {
            id: 'prod_024', sellerId: 'seller_004', sellerName: 'Harvey Miller',
            category: 'antique_furniture', name: 'Baroque Gilded Console Table',
            description: 'Opulent Baroque carved and gilded console table. Italian, circa 1720. Scrolled legs with acanthus and cartouche. Original water gilding, marble top.',
            images: ['assets/images/antique_furniture/Baroque Gilded Console Table.jpg'], startingBid: 265000, currentBid: 265000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-16', startTime: null, endTime: null,
            minBidIncrement: 12000, sellerBankDetails: { accountNumber: '7777888899', bankName: 'Gold Standard Bank', ifsc: 'GSBK000777' }
        },
        {
            id: 'prod_025', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'antique_furniture', name: 'Victorian Carved Rosewood Center Table',
            description: 'Ornate Victorian rosewood center table with carved cabriole legs and stretcher. Ebonized and gilt detailing. Circa 1860. Original tooled leather insert.',
            images: ['assets/images/antique_furniture/Victorian Carved Rosewood Center Table.jpg'], startingBid: 48000, currentBid: 48000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-18', startTime: null, endTime: null,
            minBidIncrement: 2000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },
        {
            id: 'prod_026', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'antique_furniture', name: 'Queen Anne Slant-Front Secretary Desk',
            description: 'Fine Queen Anne slant-front secretary desk in figured maple. Original butterfly hardware, fitted interior with pigeonholes. New England, circa 1740.',
            images: ['assets/images/antique_furniture/Queen Anne Slant-Front Secretary Desk.jpg'], startingBid: 112000, currentBid: 112000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-20', startTime: null, endTime: null,
            minBidIncrement: 5000, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        },

        {
            id: 'prod_027', sellerId: 'seller_003', sellerName: 'John Carter',
            category: 'antique_jewellery', name: 'Victorian Diamond Necklace',
            description: 'Exquisite Victorian era diamond necklace with 24K gold setting. Circa 1880. Features 12 carats of old mine cut diamonds in intricate filigree work.',
            images: ['assets/images/antique_jewellery/Victorian Diamond Necklace.jpg'], startingBid: 50000, currentBid: 50000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-01-25', startTime: null, endTime: null,
            minBidIncrement: 1000, sellerBankDetails: { accountNumber: '5555666677', bankName: 'Vintage Vault Bank', ifsc: 'VVBK000555' }
        },
        {
            id: 'prod_030', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'antique_jewellery', name: 'Edwardian Pearl Tiara',
            description: 'Magnificent Edwardian pearl and diamond tiara. Circa 1905. Features natural pearls and old European cut diamonds in a delicate platinum framework.',
            images: ['assets/images/antique_jewellery/Edwardian Pearl Tiara.jpg'], startingBid: 150000, currentBid: 150000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-03', startTime: null, endTime: null,
            minBidIncrement: 5000, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        },
        {
            id: 'prod_032', sellerId: 'seller_004', sellerName: 'Harvey Miller',
            category: 'antique_jewellery', name: 'Sapphire Cocktail Ring',
            description: 'Statement Art Deco sapphire cocktail ring. 4.2 carat Ceylon sapphire surrounded by old mine cut diamonds. Platinum setting, circa 1930.',
            images: ['assets/images/antique_jewellery/Sapphire Cocktail Ring.jpg'], startingBid: 72000, currentBid: 72000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-07', startTime: null, endTime: null,
            minBidIncrement: 2000, sellerBankDetails: { accountNumber: '7777888899', bankName: 'Gold Standard Bank', ifsc: 'GSBK000777' }
        },
        {
            id: 'prod_033', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'antique_jewellery', name: 'Georgian Serpent Bracelet',
            description: 'Rare Georgian gold serpent bracelet. Flexible coils with ruby eyes. Circa 1820. Exceptional craftsmanship and condition for its age.',
            images: ['assets/images/antique_jewellery/Georgian Serpent Bracelet.jpg'], startingBid: 110000, currentBid: 110000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-10', startTime: null, endTime: null,
            minBidIncrement: 5000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },

        {
            id: 'prod_041', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'collectibles', name: '1907 Saint-Gaudens Double Eagle',
            description: 'MS-64 graded 1907 Saint-Gaudens High Relief Double Eagle gold coin. PCGS certified. Brilliant uncirculated with original mint luster.',
            images: ['assets/images/collectibles/1907 Saint-Gaudens Double Eagle.jpg'], startingBid: 180000, currentBid: 180000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-01-20', startTime: null, endTime: null,
            minBidIncrement: 8000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },
        {
            id: 'prod_042', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'collectibles', name: 'World War I Victory Medal Collection',
            description: 'Lot of 12 WWI Allied victory medals with original ribbons. Includes British, French, Italian, and American examples. Named to individual soldiers.',
            images: ['assets/images/collectibles/World War I Victory Medal Collection.jpg'], startingBid: 22000, currentBid: 22000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-01-22', startTime: null, endTime: null,
            minBidIncrement: 1000, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        },
        {
            id: 'prod_043', sellerId: 'seller_003', sellerName: 'John Carter',
            category: 'collectibles', name: '1909-S VDB Lincoln Penny',
            description: 'Key date 1909-S VDB Lincoln cent. PCGS VF-35. Sharp details, attractive chocolate brown patina. One of the most sought-after US coins.',
            images: ['assets/images/collectibles/1909-S VDB Lincoln Penny.jpg'], startingBid: 340000, currentBid: 340000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-01-25', startTime: null, endTime: null,
            minBidIncrement: 15000, sellerBankDetails: { accountNumber: '5555666677', bankName: 'Vintage Vault Bank', ifsc: 'VVBK000555' }
        },
        {
            id: 'prod_044', sellerId: 'seller_004', sellerName: 'Harvey Miller',
            category: 'collectibles', name: 'Penny Black Collection',
            description: 'Collection of 8 Penny Black stamps (1840) from Plate numbers 1-11. Most with clear Maltese Cross cancellations. Selected quality examples.',
            images: ['assets/images/collectibles/Penny Black Collection.jpg'], startingBid: 45000, currentBid: 45000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-01-28', startTime: null, endTime: null,
            minBidIncrement: 2000, sellerBankDetails: { accountNumber: '7777888899', bankName: 'Gold Standard Bank', ifsc: 'GSBK000777' }
        },
        {
            id: 'prod_045', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'collectibles', name: '1943 Bronze Lincoln Cent',
            description: 'Extremely rare 1943 bronze cent, one of approximately 20 known. PCGS AU-55. Dramatic off-metal error strike. The holy grail of Lincoln cents.',
            images: ['assets/images/collectibles/1943 Bronze Lincoln Cent.jpg'], startingBid: 450000, currentBid: 450000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-01', startTime: null, endTime: null,
            minBidIncrement: 25000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },
        {
            id: 'prod_049', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'collectibles', name: '1804 Draped Bust Silver Dollar',
            description: 'Class I 1804 Draped Bust silver dollar. NGC PR-55. One of the most famous and valuable US coins. Third-party authenticated, full provenance.',
            images: ['assets/images/collectibles/1804 Draped Bust Silver Dollar.jpg'], startingBid: 380000, currentBid: 380000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-10', startTime: null, endTime: null,
            minBidIncrement: 15000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },
        {
            id: 'prod_052', sellerId: 'seller_004', sellerName: 'Harvey Miller',
            category: 'collectibles', name: 'US Silver Proof Set Collection 1950-1964',
            description: 'Complete 15-year set of US Silver Proof Sets from 1950 to 1964. Original government packaging. Includes Walking Liberty halves, Washington quarters, Roosevelt dimes.',
            images: ['assets/images/collectibles/US Silver Proof Set Collection 1950-1964.jpg'], startingBid: 42000, currentBid: 42000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-16', startTime: null, endTime: null,
            minBidIncrement: 2000, sellerBankDetails: { accountNumber: '7777888899', bankName: 'Gold Standard Bank', ifsc: 'GSBK000777' }
        },
        {
            id: 'prod_053', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'collectibles', name: 'Vintage Star Wars Action Figures',
            description: 'Lot of 12 original Kenner Star Wars action figures (1977-1980). With original weapons. Luke, Leia, Vader, Chewbacca, R2-D2, and more. Carded and loose.',
            images: ['assets/images/collectibles/Vintage Star Wars Action Figures.jpg'], startingBid: 28000, currentBid: 28000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-18', startTime: null, endTime: null,
            minBidIncrement: 1000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },

        {
            id: 'prod_054', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'decorative_arts', name: 'Waterford Crystal Chandelier',
            description: 'Magnificent Waterford crystal chandelier with 12 lights. Hand-cut crystal drops and pendants. Irish, circa 1880. Height 85cm, fully restored.',
            images: ['assets/images/decorative_arts/Waterford Crystal Chandelier.jpg'], startingBid: 88000, currentBid: 88000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-01-22', startTime: null, endTime: null,
            minBidIncrement: 3000, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        },
        {
            id: 'prod_055', sellerId: 'seller_003', sellerName: 'John Carter',
            category: 'decorative_arts', name: 'Wedgwood Jasperware Vase Pair',
            description: 'Pair of Wedgwood blue and white jasperware urn-shaped vases. Classical figure scenes. English, circa 1800. Impressed marks. Height 38cm each.',
            images: ['assets/images/decorative_arts/Wedgwood Jasperware Vase Pair.jpg'], startingBid: 32000, currentBid: 32000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-01-25', startTime: null, endTime: null,
            minBidIncrement: 1000, sellerBankDetails: { accountNumber: '5555666677', bankName: 'Vintage Vault Bank', ifsc: 'VVBK000555' }
        },

        {
            id: 'prod_057', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'decorative_arts', name: 'Antique Brass Telescope',
            description: 'Fine Victorian brass refracting telescope on mahogany tripod. London by Dollond, circa 1860. Original optics, leather-wrapped barrel. Fully functional.',
            images: ['assets/images/decorative_arts/Antique Brass Telescope.jpg'], startingBid: 56000, currentBid: 56000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-01', startTime: null, endTime: null,
            minBidIncrement: 2000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },
        {
            id: 'prod_060', sellerId: 'seller_004', sellerName: 'Harvey Miller',
            category: 'decorative_arts', name: 'Antique Microscope by Watson',
            description: 'Fine Victorian brass microscope by W. Watson & Sons, London. Circa 1890. Rack and pinion focusing, three objectives, mahogany case. Excellent optical condition.',
            images: ['assets/images/decorative_arts/Antique Microscope by Watson.jpg'], startingBid: 38000, currentBid: 38000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-07', startTime: null, endTime: null,
            minBidIncrement: 1500, sellerBankDetails: { accountNumber: '7777888899', bankName: 'Gold Standard Bank', ifsc: 'GSBK000777' }
        },
        {
            id: 'prod_062', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'decorative_arts', name: 'Hermes Vintage Silk Scarf',
            description: 'Original Hermes silk twill scarf, circa 1970. Equestrian theme "Riders at the Gate." Hand-rolled edges, vibrant colors. Never worn, with tags.',
            images: ['assets/images/decorative_arts/Hermes Vintage Silk Scarf.jpg'], startingBid: 18000, currentBid: 18000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-12', startTime: null, endTime: null,
            minBidIncrement: 500, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        },
        {
            id: 'prod_063', sellerId: 'seller_003', sellerName: 'John Carter',
            category: 'decorative_arts', name: 'Antique Surveying Theodolite',
            description: 'Brass surveying theodolite by T. Cooke & Sons, York. Circa 1880. Full horizontal and vertical circles, original spirit level. Mahogany carrying case.',
            images: ['assets/images/decorative_arts/Antique Surveying Theodolite.jpg'], startingBid: 48000, currentBid: 48000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-14', startTime: null, endTime: null,
            minBidIncrement: 2000, sellerBankDetails: { accountNumber: '5555666677', bankName: 'Vintage Vault Bank', ifsc: 'VVBK000555' }
        },
        {
            id: 'prod_064', sellerId: 'seller_004', sellerName: 'Harvey Miller',
            category: 'decorative_arts', name: 'Chinese Celadon Porcelain Bowl',
            description: 'Song Dynasty celadon-glazed porcelain bowl. Jade-green glaze, carved lotus design. Circa 12th century. Minor kiln imperfections consistent with age.',
            images: ['assets/images/decorative_arts/Chinese Celadon Porcelain Bowl.jpg'], startingBid: 145000, currentBid: 145000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-16', startTime: null, endTime: null,
            minBidIncrement: 6000, sellerBankDetails: { accountNumber: '7777888899', bankName: 'Gold Standard Bank', ifsc: 'GSBK000777' }
        },
        {
            id: 'prod_065', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'decorative_arts', name: 'Chanel Vintage Tweed Jacket',
            description: 'Classic Chanel boucle tweed jacket, circa 1965. Black and gold thread, gilt chain-weighted hem. Silk lining with iconic camellia print. Size FR 38.',
            images: ['assets/images/decorative_arts/Chanel Vintage Tweed Jacket.jpg'], startingBid: 125000, currentBid: 125000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-18', startTime: null, endTime: null,
            minBidIncrement: 5000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },

        {
            id: 'prod_069', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'antique_jewellery', name: 'Vacheron Constantin Chronograph',
            description: 'Exceptional Vacheron Constantin chronograph wristwatch, circa 1945. 18K yellow gold case, 37mm. Manual-wind column-wheel chronograph movement. Silvered dial with two subsidiary dials. Original crown and pushers. Accompanied by archive extract from Vacheron Constantin.',
            images: ['assets/images/antique_jewellery/Vacheron Constantin Chronograph.jpg'], startingBid: 120000, currentBid: 120000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-26', startTime: null, endTime: null,
            minBidIncrement: 10000, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        },
        {
            id: 'prod_070', sellerId: 'seller_003', sellerName: 'John Carter',
            category: 'antique_jewellery', name: 'Hamilton Ventura Original',
            description: 'Original Hamilton Ventura electric watch from 1957. The worlds first electric wristwatch, featuring the iconic shield-shaped case designed by Richard Arbib. Black dial with gold hour markers. 14K gold-filled case. Working condition with service history.',
            images: ['assets/images/antique_jewellery/Hamilton Ventura Original.jpg'], startingBid: 35000, currentBid: 35000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-02-27', startTime: null, endTime: null,
            minBidIncrement: 3000, sellerBankDetails: { accountNumber: '5555666677', bankName: 'Vintage Vault Bank', ifsc: 'VVBK000555' }
        },

        {
            id: 'prod_072', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'antique_jewellery', name: 'Rajasthani Polki Bangle Set',
            description: 'Exquisite set of two Rajasthani polki bangles. Uncut diamond stones set in 22K gold with meenakari enamel work on inner surface. Traditional kundan setting technique, circa 1920. Each bangle features a unique floral motif.',
            images: ['assets/images/antique_jewellery/Rajasthani Polki Bangle Set.jpg'], startingBid: 65000, currentBid: 65000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-01', startTime: null, endTime: null,
            minBidIncrement: 5000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },
        {
            id: 'prod_073', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'antique_jewellery', name: 'Edwardian Saphire Tiara',
            description: 'Regal Edwardian sapphire and diamond tiara, circa 1910. Set in platinum with 15 carats of Ceylon sapphires and 8 carats of old European cut diamonds. Delicate garland design typical of the Belle Epoque period. Accompanied by GIA report.',
            images: ['assets/images/antique_jewellery/Edwardian Saphire Tiara.jpg'], startingBid: 280000, currentBid: 280000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-02', startTime: null, endTime: null,
            minBidIncrement: 15000, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        },
        {
            id: 'prod_075', sellerId: 'seller_004', sellerName: 'Harvey Miller',
            category: 'antique_jewellery', name: 'Art Nouveau Enamel Pendant',
            description: 'Stunning Art Nouveau enamel and gold pendant necklace. Plique-a-jour enamel depicting a dragonfly with ruby eyes. 18K gold mount with delicate chain. Circa 1900. Attributed to Alphonse Mucha workshop.',
            images: ['assets/images/antique_jewellery/Art Nouveau Enamel Pendant.jpg'], startingBid: 42000, currentBid: 42000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-04', startTime: null, endTime: null,
            minBidIncrement: 3000, sellerBankDetails: { accountNumber: '7777888899', bankName: 'Gold Standard Bank', ifsc: 'GSBK000777' }
        },
        {
            id: 'prod_076', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'antique_jewellery', name: 'Colonial Ruby Ring',
            description: 'Magnificent Colonial-era Burmese ruby ring. 4.2 carat pigeon blood ruby in 18K gold setting surrounded by old mine cut diamonds. Provenance traced to a British colonial administrators private collection. Circa 1870.',
            images: ['assets/images/antique_jewellery/Colonial Ruby Ring.jpg'], startingBid: 180000, currentBid: 180000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-05', startTime: null, endTime: null,
            minBidIncrement: 12000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },
        {
            id: 'prod_077', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'antique_jewellery', name: 'Mughal Kundan Necklace',
            description: 'Opulent Mughal kundan necklace featuring uncut diamonds and emeralds in 24K gold setting. Traditional jadau technique with meenakari reverse. Central pendant with drop emerald. Circa 1850, Rajasthani royal collection provenance.',
            images: ['assets/images/antique_jewellery/Mughal Kundan Necklace.jpg'], startingBid: 320000, currentBid: 320000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-06', startTime: null, endTime: null,
            minBidIncrement: 20000, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        },
        {
            id: 'prod_078', sellerId: 'seller_003', sellerName: 'John Carter',
            category: 'antique_jewellery', name: 'Mughal Jade Bracelet',
            description: 'Exquisite Mughal carved jade bracelet. Five sections of white nephrite jade with floral carvings inlaid with rubies and emeralds. 22K gold hinges and clasp. Circa 1780. Museum-quality piece from a private Indian collection.',
            images: ['assets/images/antique_jewellery/Mughal Jade Bracelet.jpg'], startingBid: 145000, currentBid: 145000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-07', startTime: null, endTime: null,
            minBidIncrement: 10000, sellerBankDetails: { accountNumber: '5555666677', bankName: 'Vintage Vault Bank', ifsc: 'VVBK000555' }
        },
        {
            id: 'prod_089', sellerId: 'seller_003', sellerName: 'John Carter',
            category: 'antique_furniture', name: 'Inlaid Sandalwood Jewelry Box',
            description: 'Hand-carved sandalwood jewelry box with ivory inlay. Floral motifs and geometric patterns on all surfaces. Mysore craftsmanship, circa 1900. Original lock and key. Interior lined with velvet.',
            images: ['assets/images/antique_furniture/Inlaid Sandalwood Jewelry Box.jpg'], startingBid: 35000, currentBid: 35000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-11', startTime: null, endTime: null,
            minBidIncrement: 3000, sellerBankDetails: { accountNumber: '5555666677', bankName: 'Vintage Vault Bank', ifsc: 'VVBK000555' }
        },
        {
            id: 'prod_090', sellerId: 'seller_004', sellerName: 'Harvey Miller',
            category: 'antique_furniture', name: 'Teak Temple Door Frame',
            description: 'Massive carved teak temple door frame from a Kerala temple. Elaborate depictions of gods, mythical beasts, and floral scrolls. 19th century. Three-panel design with original copper fittings.',
            images: ['assets/images/antique_furniture/Teak Temple Door Frame.jpg'], startingBid: 150000, currentBid: 150000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-11', startTime: null, endTime: null,
            minBidIncrement: 12000, sellerBankDetails: { accountNumber: '7777888899', bankName: 'Gold Standard Bank', ifsc: 'GSBK000777' }
        },
        {
            id: 'prod_092', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'antique_furniture', name: 'Carved Peacock Chair',
            description: 'Elaborately carved rosewood peacock chair from Travancore. High fan-shaped back with peacock feather motif. Caned seat. Circa 1890. Fully restored with new cane.',
            images: ['assets/images/antique_furniture/Carved Peacock Chair.jpg'], startingBid: 38000, currentBid: 38000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-11', startTime: null, endTime: null,
            minBidIncrement: 3000, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        },
        {
            id: 'prod_094', sellerId: 'seller_004', sellerName: 'Harvey Miller',
            category: 'antique_furniture', name: 'Marble Top Console Table',
            description: 'White Makrana marble top console table with carved rosewood legs. Intricate floral and vine carvings. Rajasthani craftsmanship, circa 1900. Original marble with natural veining.',
            images: ['assets/images/antique_furniture/Marble Top Console Table.jpg'], startingBid: 78000, currentBid: 78000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-11', startTime: null, endTime: null,
            minBidIncrement: 6000, sellerBankDetails: { accountNumber: '7777888899', bankName: 'Gold Standard Bank', ifsc: 'GSBK000777' }
        },
        {
            id: 'prod_095', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'antique_jewellery', name: 'Kundan Polki Choker Set',
            description: 'Opulent Kundan polki choker necklace with matching earrings. Uncut diamonds and emeralds set in 24K gold with meenakari reverse. Rajasthani bridal jewelry, circa 1890. Original velvet-lined box.',
            images: ['assets/images/antique_jewellery/Kundan Polki Choker Set.jpg'], startingBid: 185000, currentBid: 185000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-12', startTime: null, endTime: null,
            minBidIncrement: 15000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },
        {
            id: 'prod_096', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'antique_jewellery', name: 'Temple Gold Jhumka Earrings',
            description: 'South Indian temple gold jhumka earrings with ruby and pearl accents. Nakshi work depicting Goddess Lakshmi. 22K gold, circa 1920. Traditional Chettinad bridal jewelry.',
            images: ['assets/images/antique_jewellery/Temple Gold Jhumka Earrings.jpg'], startingBid: 52000, currentBid: 52000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-12', startTime: null, endTime: null,
            minBidIncrement: 4000, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        },
        {
            id: 'prod_101', sellerId: 'seller_003', sellerName: 'John Carter',
            category: 'antique_jewellery', name: 'Kashmiri Sapphire Ring',
            description: 'Stunning Kashmir sapphire ring in platinum setting. 3.5 carat unheated Kashmir sapphire surrounded by old mine cut diamonds. Circa 1920. Accompanied by GIA and SSEF reports.',
            images: ['assets/images/antique_jewellery/Kashmiri Sapphire Ring.jpg'], startingBid: 420000, currentBid: 420000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-12', startTime: null, endTime: null,
            minBidIncrement: 25000, sellerBankDetails: { accountNumber: '5555666677', bankName: 'Vintage Vault Bank', ifsc: 'VVBK000555' }
        },
        {
            id: 'prod_117', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'antique_jewellery', name: 'Victorian Mourning Brooch',
            description: 'Elegant Victorian mourning brooch featuring black jet and seed pearls. Circa 1870. Hair compartment under glass. 18K gold frame with engraved border. Classic memento mori piece.',
            images: ['assets/images/antique_jewellery/Victorian Mourning Brooch.jpg'], startingBid: 45000, currentBid: 45000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-15', startTime: null, endTime: null,
            minBidIncrement: 3000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },
        {
            id: 'prod_118', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'antique_jewellery', name: 'Belle Epoque Pearl Choker',
            description: 'Exquisite Belle Epoque pearl choker with diamonds. Circa 1905. Five strands of natural pearls with diamond-set platinum clasps. Elegance of the Edwardian era.',
            images: ['assets/images/antique_jewellery/Belle Epoque Pearl Choker.webp'], startingBid: 175000, currentBid: 175000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-16', startTime: null, endTime: null,
            minBidIncrement: 10000, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        },
        {
            id: 'prod_103', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'collectibles', name: 'Colonial India Coin Collection',
            description: 'Lot of 25 rare colonial India coins. Includes East India Company rupees, Mughal-era coins, and early British India specimens. Dates range from 1780-1920. Some in uncirculated condition.',
            images: ['assets/images/collectibles/Colonial India Coin Collection.jpg'], startingBid: 68000, currentBid: 68000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-13', startTime: null, endTime: null,
            minBidIncrement: 5000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },
        {
            id: 'prod_104', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'collectibles', name: 'Victorian Era Stamp Album',
            description: 'Complete Victorian era stamp album from British India. Contains 150+ stamps from 1854-1901. Includes rare Queen Victoria and King Edward VII issues. Original leather-bound album with handwritten notes.',
            images: ['assets/images/collectibles/Victorian Era Stamp Album.jpg'], startingBid: 45000, currentBid: 45000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-13', startTime: null, endTime: null,
            minBidIncrement: 4000, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        },
        {
            id: 'prod_105', sellerId: 'seller_003', sellerName: 'John Carter',
            category: 'collectibles', name: 'Mughal Silver Hookah Base',
            description: 'Ornate Mughal silver hookah base with floral repousse work. Inlaid with copper and brass. Northern India, circa 1850. Height 35cm. Excellent condition with original patina.',
            images: ['assets/images/collectibles/Mughal Silver Hookah Base.jpg'], startingBid: 55000, currentBid: 55000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-13', startTime: null, endTime: null,
            minBidIncrement: 5000, sellerBankDetails: { accountNumber: '5555666677', bankName: 'Vintage Vault Bank', ifsc: 'VVBK000555' }
        },
        {
            id: 'prod_106', sellerId: 'seller_004', sellerName: 'Harvey Miller',
            category: 'collectibles', name: 'Nawabi Brass Compass Set',
            description: 'Deluxe Nawabi brass compass and writing set. Includes compass, pen nib holder, letter opener, and wax seal. Engraved with floral motifs. Lucknow, circa 1870. Original velvet-lined case.',
            images: ['assets/images/collectibles/Nawabi Brass Compass Set.jpg'], startingBid: 32000, currentBid: 32000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-13', startTime: null, endTime: null,
            minBidIncrement: 3000, sellerBankDetails: { accountNumber: '7777888899', bankName: 'Gold Standard Bank', ifsc: 'GSBK000777' }
        },
        {
            id: 'prod_107', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'collectibles', name: 'Rajput Silver Coin Hoard',
            description: 'Private find of 18 silver coins from Rajput kingdoms. Includes Jodhpur, Jaipur, and Udaipur minted coins. 18th-19th century. Some with horse and elephant motifs. Archaeologically significant.',
            images: ['assets/images/collectibles/Rajput Silver Coin Hoard.jpg'], startingBid: 78000, currentBid: 78000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-13', startTime: null, endTime: null,
            minBidIncrement: 6000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },
        {
            id: 'prod_108', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'collectibles', name: 'Vintage Indian Cigarette Cards',
            description: 'Complete set of 48 Godfrey Phillips Indian beauties cigarette cards. 1920s illustrations of Indian women in regional costumes. Near mint condition. Extremely rare complete set.',
            images: ['assets/images/collectibles/Vintage Indian Cigarette Cards.jpeg'], startingBid: 25000, currentBid: 25000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-13', startTime: null, endTime: null,
            minBidIncrement: 2000, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        },
        {
            id: 'prod_109', sellerId: 'seller_003', sellerName: 'John Carter',
            category: 'collectibles', name: 'Portuguese India Postal Cover',
            description: 'Rare registered postal cover from Portuguese India (Goa). 1947 first day of Indian independence issue. Stamps cancelled on historic date. Comes with philatelic certificate.',
            images: ['assets/images/collectibles/Portuguese India Postal Cover.jpg'], startingBid: 18000, currentBid: 18000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-13', startTime: null, endTime: null,
            minBidIncrement: 1500, sellerBankDetails: { accountNumber: '5555666677', bankName: 'Vintage Vault Bank', ifsc: 'VVBK000555' }
        },
        {
            id: 'prod_110', sellerId: 'seller_004', sellerName: 'Harvey Miller',
            category: 'collectibles', name: 'Antique Indian Astrolabe',
            description: 'Brass astronomical astrolabe from Rajasthan. Islamic-Indian hybrid design with Sanskrit and Persian inscriptions. Circa 1780. Fully functional with original rete and mater. Museum-quality piece.',
            images: ['assets/images/collectibles/Antique Indian Astrolabe.jpg'], startingBid: 125000, currentBid: 125000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-13', startTime: null, endTime: null,
            minBidIncrement: 10000, sellerBankDetails: { accountNumber: '7777888899', bankName: 'Gold Standard Bank', ifsc: 'GSBK000777' }
        },
        {
            id: 'prod_111', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'decorative_arts', name: 'Bidri Ware Flower Vase',
            description: 'Exquisite Bidri ware flower vase from Hyderabad. Silver inlay on blackened zinc alloy. Geometric and floral patterns. Circa 1890. Height 28cm. Perfect condition with original polish.',
            images: ['assets/images/decorative_arts/Bidri Ware Flower Vase.jpg'], startingBid: 42000, currentBid: 42000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-14', startTime: null, endTime: null,
            minBidIncrement: 3000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },
        {
            id: 'prod_113', sellerId: 'seller_003', sellerName: 'John Carter',
            category: 'decorative_arts', name: 'Dokra Metal Nandi Statue',
            description: 'Lost-wax cast Dokra brass Nandi bull statue. Tribal art from Chhattisgarh. Intricate jewelry and saddle details. Circa 1920. Height 22cm. Heavy solid casting with rich patina.',
            images: ['assets/images/decorative_arts/Dokra Metal Nandi Statue.jpg'], startingBid: 28000, currentBid: 28000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-14', startTime: null, endTime: null,
            minBidIncrement: 2000, sellerBankDetails: { accountNumber: '5555666677', bankName: 'Vintage Vault Bank', ifsc: 'VVBK000555' }
        },
        {
            id: 'prod_115', sellerId: 'seller_001', sellerName: 'Richard Kelly',
            category: 'decorative_arts', name: 'Meenakari Brass Urn',
            description: 'Ornate Meenakari enamel decorated brass urn from Jaipur. Multi-colored enamel work depicting peacocks and lotus flowers on gold base. Circa 1880. Height 20cm. Royal workshop quality.',
            images: ['assets/images/decorative_arts/Meenakari Brass Urn.jpg'], startingBid: 35000, currentBid: 35000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-14', startTime: null, endTime: null,
            minBidIncrement: 3000, sellerBankDetails: { accountNumber: '1111222233', bankName: 'Heritage Trust Bank', ifsc: 'HTBK000111' }
        },
        {
            id: 'prod_116', sellerId: 'seller_002', sellerName: 'Sabrina Carpenter',
            category: 'decorative_arts', name: 'Lacquerware Spice Box Set',
            description: 'Set of six carved and lacquered wooden spice containers from Kashmir. Each labeled in Kashmiri calligraphy. Rosewood with gold paint accents. Circa 1900. Original cotton-lined carrying case.',
            images: ['assets/images/decorative_arts/Lacquerware Spice Box Set.jpg'], startingBid: 18000, currentBid: 18000, highestBidder: null, highestBidderId: null,
            status: 'pending', bidHistory: [], createdAt: '2024-03-14', startTime: null, endTime: null,
            minBidIncrement: 1500, sellerBankDetails: { accountNumber: '3333444455', bankName: 'Antique Capital Bank', ifsc: 'ACBK000333' }
        }
    ],

    bids: [],
    payments: [],
    adminActions: [],
    currentUser: null
};

function saveData() {
    localStorage.setItem('auctionx_data', JSON.stringify(AuctionData));
}

function loadData() {
    const data = localStorage.getItem('auctionx_data');
    if (data) {
        const saved = JSON.parse(data);
        if (saved.currentUser) AuctionData.currentUser = saved.currentUser;
        if (saved.users) AuctionData.users = saved.users;
    }
}

function getCurrentUser() {
    return AuctionData.currentUser;
}

function setCurrentUser(user) {
    AuctionData.currentUser = user;
    saveData();
}

function logout() {
    AuctionData.currentUser = null;
    localStorage.removeItem('auctionx_current_user');
    saveData();
}

function getUserById(id) {
    return AuctionData.users.find(u => u.id === id);
}

function getProductById(id) {
    return AuctionData.products.find(p => p.id === id);
}

function getProductsByCategory(categoryId) {
    return AuctionData.products.filter(p => p.category === categoryId);
}

function getProductsBySeller(sellerId) {
    return AuctionData.products.filter(p => p.sellerId === sellerId);
}

function getUserBids(userId) {
    return AuctionData.bids.filter(b => b.bidderId === userId);
}

function getProductBids(productId) {
    return AuctionData.bids.filter(b => b.productId === productId);
}

function placeBid(productId, bidderId, amount) {
    const product = getProductById(productId);
    const bidder = getUserById(bidderId);

    if (!product || !bidder) {
        return { success: false, message: 'Invalid product or user' };
    }

    if (product.status !== 'active') {
        return { success: false, message: 'Auction is not active' };
    }

    if (product.sellerId === bidderId) {
        return { success: false, message: 'Cannot bid on your own item' };
    }

    if (amount <= product.currentBid) {
        return { success: false, message: 'Bid must be higher than current bid' };
    }

    if (amount < product.currentBid + product.minBidIncrement) {
        return { success: false, message: 'Bid must meet minimum increment' };
    }

    const bidderUser = getUserById(bidderId);

    product.bidHistory.push({
        bidderId: bidderId,
        bidderName: bidderUser.name,
        amount: amount,
        timestamp: new Date().toISOString()
    });

    product.currentBid = amount;
    product.highestBidder = bidderUser.name;
    product.highestBidderId = bidderId;

    AuctionData.bids.push({
        id: 'bid_' + Date.now(),
        productId: productId,
        bidderId: bidderId,
        bidderName: bidderUser.name,
        amount: amount,
        timestamp: new Date().toISOString()
    });

    saveData();
    return { success: true, message: 'Bid placed successfully' };
}

function startBid(productId, durationMinutes = 5) {
    const product = getProductById(productId);
    if (!product) return { success: false, message: 'Product not found' };
    if (product.status !== 'pending') return { success: false, message: 'Product is not pending' };

    product.status = 'active';
    product.startTime = new Date().toISOString();
    product.endTime = new Date(Date.now() + durationMinutes * 60000).toISOString();

    AuctionData.adminActions.push({
        id: 'action_' + Date.now(),
        type: 'start_bid',
        productId: productId,
        adminId: AuctionData.currentUser.id,
        timestamp: new Date().toISOString()
    });

    saveData();
    return { success: true, message: 'Bidding started' };
}

function endBid(productId) {
    const product = getProductById(productId);
    if (!product) return { success: false, message: 'Product not found' };
    if (product.status !== 'active') return { success: false, message: 'Auction is not active' };

    if (product.highestBidderId) {
        product.status = 'sold_pending_payment';
    } else {
        product.status = 'unsold';
    }

    AuctionData.adminActions.push({
        id: 'action_' + Date.now(),
        type: 'end_bid',
        productId: productId,
        adminId: AuctionData.currentUser.id,
        timestamp: new Date().toISOString()
    });

    saveData();
    return { success: true, message: 'Bidding ended' };
}

function processPayment(paymentId, paymentData) {
    const product = getProductById(paymentData.productId);
    if (!product) return { success: false, message: 'Product not found' };

    AuctionData.payments.push({
        id: paymentId,
        productId: paymentData.productId,
        buyerId: paymentData.buyerId,
        amount: paymentData.amount,
        method: paymentData.method,
        timestamp: new Date().toISOString()
    });

    product.status = 'sold';

    AuctionData.adminActions.push({
        id: 'action_' + Date.now(),
        type: 'payment_received',
        productId: paymentData.productId,
        adminId: AuctionData.currentUser?.id || 'system',
        timestamp: new Date().toISOString()
    });

    saveData();
    return { success: true, message: 'Payment processed' };
}

function restartBid(productId) {
    const product = getProductById(productId);
    if (!product) return { success: false, message: 'Product not found' };
    if (product.status !== 'sold_pending_payment' && product.status !== 'unsold') {
        return { success: false, message: 'Product cannot be restarted' };
    }

    product.status = 'pending';
    product.currentBid = product.startingBid;
    product.highestBidder = null;
    product.highestBidderId = null;
    product.bidHistory = [];
    product.startTime = null;
    product.endTime = null;

    AuctionData.adminActions.push({
        id: 'action_' + Date.now(),
        type: 'restart_bid',
        productId: productId,
        adminId: AuctionData.currentUser?.id || 'system',
        timestamp: new Date().toISOString()
    });

    saveData();
    return { success: true, message: 'Bidding restarted' };
}

function createProduct(productData) {
    const newProduct = {
        id: 'prod_' + Date.now(),
        sellerId: productData.sellerId,
        sellerName: productData.sellerName,
        category: productData.category,
        name: productData.name,
        description: productData.description,
        images: productData.images || ['📦'],
        startingBid: productData.startingBid,
        currentBid: productData.startingBid,
        highestBidder: null,
        highestBidderId: null,
        status: 'pending',
        bidHistory: [],
        createdAt: new Date().toISOString(),
        startTime: null,
        endTime: null,
        minBidIncrement: productData.minBidIncrement || 1000,
        sellerBankDetails: productData.sellerBankDetails || {}
    };

    AuctionData.products.push(newProduct);
    saveData();
    return { success: true, product: newProduct };
}

function updateProduct(productId, updates) {
    const product = getProductById(productId);
    if (!product) return { success: false, message: 'Product not found' };

    Object.assign(product, updates);
    saveData();
    return { success: true, product: product };
}

function deleteProduct(productId) {
    const index = AuctionData.products.findIndex(p => p.id === productId);
    if (index === -1) return { success: false, message: 'Product not found' };

    AuctionData.products.splice(index, 1);
    saveData();
    return { success: true, message: 'Product deleted' };
}

function registerUser(userData) {
    const existingUser = AuctionData.users.find(u => u.email === userData.email);
    if (existingUser) {
        return { success: false, message: 'Email already registered' };
    }

    const newUser = {
        id: 'user_' + Date.now(),
        name: userData.name,
        email: userData.email,
        phone: userData.phone || '',
        password: userData.password,
        role: userData.role || 'customer',
        bankDetails: userData.bankDetails || {},
        address: userData.address || '',
        createdAt: new Date().toISOString(),
        purchases: [],
        soldProducts: []
    };

    AuctionData.users.push(newUser);
    saveData();
    return { success: true, user: newUser };
}

function loginUser(email, password, role) {
    const user = AuctionData.users.find(u => u.email === email && u.password === password);
    if (!user) {
        return { success: false, message: 'Invalid email or password' };
    }
    if (role && user.role !== role) {
        return { success: false, message: 'Invalid role for this account' };
    }

    setCurrentUser(user);
    return { success: true, user: user };
}

function formatCurrency(amount) {
    return '\u20B9' + Number(amount).toLocaleString('en-IN');
}

function formatDate(dateString) {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-IN', {
        year: 'numeric', month: 'short', day: 'numeric'
    });
}

function formatDateTime(dateString) {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString('en-IN', {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });
}

function getTimeRemaining(endTime) {
    const remaining = new Date(endTime) - new Date();
    if (remaining <= 0) return 'Ended';

    const hours = Math.floor(remaining / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m ${seconds}s`;
}

function navigate(page) {
    window.location.href = page;
}

loadData();
