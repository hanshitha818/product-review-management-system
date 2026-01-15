require('dotenv').config();
const mongoose = require('mongoose');

// Import models
const User = require('./models/User');
const Product = require('./models/Product');
const Review = require('./models/Review');
const Transaction = require('./models/Transaction');
const ReturnRequest = require('./models/ReturnRequest');
const Coupon = require('./models/Coupon');

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected for seeding!');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

// Seed data
const seedData = async () => {
    try {
        // Clear existing data
        await User.deleteMany({});
        await Product.deleteMany({});
        await Review.deleteMany({});
        await Transaction.deleteMany({});
        await ReturnRequest.deleteMany({});
        await Coupon.deleteMany({});

        // Insert users
        const users = await User.insertMany([
            { name: "Alice Johnson", email: "alicejohnson@gmail.com", join_date: "2011-03-15" },
            { name: "Bob Smith", email: "bob_smith@yahoo.com", join_date: "2012-08-10" },
            { name: "Charlie Brown", email: "charliebrown@outlook.com", join_date: "2013-05-05" },
            { name: "Diana Prince", email: "diana.prince@gmail.com", join_date: "2014-11-20" },
            { name: "Ethan Hunt", email: "ethanhunt@yahoo.com", join_date: "2010-02-18" },
            { name: "Fiona Clarke", email: "fionaclarke@gmail.com", join_date: "2015-07-01" },
            { name: "George Taylor", email: "georgetaylor@outlook.com", join_date: "2016-06-15" },
            { name: "Hannah Moore", email: "hannahmoore@gmail.com", join_date: "2017-09-11" },
            { name: "Ian Wright", email: "ianwright@yahoo.com", join_date: "2018-04-25" },
            { name: "Julia Roberts", email: "juliaroberts@hotmail.com", join_date: "2019-10-14" },
            { name: "Kevin Hill", email: "kevin.hill@gmail.com", join_date: "2020-01-30" },
            { name: "Laura Evans", email: "lauraevans@outlook.com", join_date: "2021-05-18" },
            { name: "Mike Scott", email: "mikescott@gmail.com", join_date: "2022-03-14" },
            { name: "Nina Green", email: "ninagreen@yahoo.com", join_date: "2018-06-10" },
            { name: "Oliver Stone", email: "oliver.stone@gmail.com", join_date: "2023-09-20" },
            { name: "Paula White", email: "paulawhite@outlook.com", join_date: "2013-08-30" },
            { name: "Quincy Adams", email: "quincyadams@hotmail.com", join_date: "2012-01-18" },
            { name: "Rachel Wilson", email: "rachelwilson@gmail.com", join_date: "2011-04-05" },
            { name: "Sam Brooks", email: "sambrooks@yahoo.com", join_date: "2017-07-22" },
            { name: "Tina Lopez", email: "tinalopez@gmail.com", join_date: "2023-02-28" },
            { name: "Uma Patel", email: "umapatel@hotmail.com", join_date: "2014-06-10" },
            { name: "Victor Cruz", email: "victor.cruz@gmail.com", join_date: "2016-03-08" },
            { name: "Wendy Brown", email: "wendybrown@yahoo.com", join_date: "2018-09-25" },
            { name: "Xavier King", email: "xavierking@gmail.com", join_date: "2021-10-01" },
            { name: "Yvonne Blake", email: "yvonneblake@outlook.com", join_date: "2015-08-19" },
            { name: "Zara Khan", email: "zarakhan@gmail.com", join_date: "2019-07-11" },
            { name: "Aaron Matthews", email: "aaron_matthews@hotmail.com", join_date: "2020-01-12" },
            { name: "Betty Davis", email: "bettydavis@gmail.com", join_date: "2010-03-23" },
            { name: "Catherine Lee", email: "catherinelee@yahoo.com", join_date: "2013-12-05" },
            { name: "David Harris", email: "davidharris@gmail.com", join_date: "2012-10-18" },
            { name: "Eleanor Parker", email: "eleanorparker@gmail.com", join_date: "2023-05-25" },
            { name: "Franklin Hall", email: "franklin.hall@hotmail.com", join_date: "2019-07-15" },
            { name: "Gloria Reed", email: "gloriareed@outlook.com", join_date: "2016-08-03" },
            { name: "Harry Potter", email: "harrypotter@gmail.com", join_date: "2018-06-20" },
            { name: "Isabel Ross", email: "isabelross@yahoo.com", join_date: "2011-09-14" },
            { name: "Jake Long", email: "jakelong@gmail.com", join_date: "2015-02-22" },
            { name: "Kelly Sanders", email: "kellysanders@gmail.com", join_date: "2020-04-30" },
            { name: "Liam Brooks", email: "liam.brooks@hotmail.com", join_date: "2014-08-16" },
            { name: "Megan Watson", email: "meganwatson@gmail.com", join_date: "2022-01-28" },
            { name: "Nathan Drake", email: "nathandrake@yahoo.com", join_date: "2023-03-06" },
            { name: "Olivia Carter", email: "oliviacarter@outlook.com", join_date: "2017-05-09" },
            { name: "Peter Parker", email: "peterparker@gmail.com", join_date: "2023-07-26" },
            { name: "Quinn Baker", email: "quinn_baker@hotmail.com", join_date: "2018-02-10" },
            { name: "Riley Morgan", email: "rileymorgan@gmail.com", join_date: "2012-11-05" },
            { name: "Sophia Taylor", email: "sophia.taylor@yahoo.com", join_date: "2019-06-15" },
            { name: "Tom Hardy", email: "tomhardy@gmail.com", join_date: "2021-09-09" },
            { name: "Ursula Grant", email: "ursulagrant@outlook.com", join_date: "2010-03-30" },
            { name: "Violet Harper", email: "violetharper@gmail.com", join_date: "2018-07-08" },
            { name: "Will Turner", email: "will.turner@yahoo.com", join_date: "2015-10-15" },
            { name: "Hansh", email: "Hansh@gmail.com", join_date: "2024-11-26" },
        ]);

        // Insert products
const products = await Product.insertMany([
    { name: "Smartphone", category: "Electronics", price: 699.99, stock: 50 },
    { name: "Men's T-Shirt", category: "Clothing", price: 19.99, stock: 100 },
    { name: "Organic Honey", category: "Food", price: 12.99, stock: 60 },
    { name: "Office Chair", category: "Furniture", price: 149.99, stock: 40 },
    { name: "Face Moisturizer", category: "Beauty", price: 14.99, stock: 100 },
    { name: "Yoga Mat", category: "Sports", price: 19.99, stock: 120 },
    { name: "Laptop", category: "Electronics", price: 999.99, stock: 30 },
    { name: "Sneakers", category: "Clothing", price: 79.99, stock: 50 },
    { name: "Almond Butter", category: "Food", price: 15.99, stock: 40 },
    { name: "Dining Table", category: "Furniture", price: 499.99, stock: 15 },
    { name: "Hair Serum", category: "Beauty", price: 19.99, stock: 60 },
    { name: "Bicycle", category: "Sports", price: 299.99, stock: 20 },
    { name: "Smartwatch", category: "Electronics", price: 199.99, stock: 70 },
    { name: "Hoodie", category: "Clothing", price: 39.99, stock: 80 },
    { name: "Dark Chocolate", category: "Food", price: 3.99, stock: 200 },
    { name: "Bookshelf", category: "Furniture", price: 89.99, stock: 30 },
    { name: "Lipstick", category: "Beauty", price: 9.99, stock: 80 },
    { name: "Dumbbells (Pair)", category: "Sports", price: 49.99, stock: 40 },
    { name: "Wireless Earbuds", category: "Electronics", price: 149.99, stock: 100 },
    { name: "Women's Jeans", category: "Clothing", price: 49.99, stock: 60 },
    { name: "Gluten-Free Bread", category: "Food", price: 4.99, stock: 100 },
    { name: "Sofa Set", category: "Furniture", price: 999.99, stock: 10 },
    { name: "Eye Cream", category: "Beauty", price: 24.99, stock: 70 },
    { name: "Tent", category: "Sports", price: 129.99, stock: 25 },
    { name: "Gaming Console", category: "Electronics", price: 499.99, stock: 25 },
    { name: "Formal Shirt", category: "Clothing", price: 59.99, stock: 40 },
    { name: "Coffee Beans", category: "Food", price: 14.99, stock: 80 },
    { name: "Bed Frame", category: "Furniture", price: 399.99, stock: 20 },
    { name: "Foundation", category: "Beauty", price: 29.99, stock: 50 },
    { name: "Running Shoes", category: "Sports", price: 89.99, stock: 50 },
    { name: "4K TV", category: "Electronics", price: 1199.99, stock: 10 },
    { name: "Scarf", category: "Clothing", price: 24.99, stock: 90 },
    { name: "Olive Oil", category: "Food", price: 10.99, stock: 50 },
    { name: "Study Desk", category: "Furniture", price: 129.99, stock: 50 },
    { name: "Makeup Brush Set", category: "Beauty", price: 39.99, stock: 40 },
    { name: "Travel Pillow", category: "Accessories", price: 12.99, stock: 70 },
    { name: "Bluetooth Speaker", category: "Electronics", price: 99.99, stock: 150 },
    { name: "Winter Coat", category: "Clothing", price: 129.99, stock: 30 },
    { name: "Granola Bars", category: "Food", price: 6.99, stock: 120 },
    { name: "Coffee Table", category: "Furniture", price: 199.99, stock: 25 },
    { name: "Shampoo", category: "Beauty", price: 8.99, stock: 150 },
    { name: "Nail Polish", category: "Beauty", price: 4.99, stock: 100 },
    { name: "Portable Charger", category: "Electronics", price: 29.99, stock: 200 },
    { name: "Cap", category: "Clothing", price: 14.99, stock: 150 },
    { name: "Dried Mango", category: "Food", price: 8.99, stock: 70 },
    { name: "Wardrobe", category: "Furniture", price: 799.99, stock: 8 },
    { name: "Perfume", category: "Beauty", price: 49.99, stock: 30 },
    { name: "Recliner", category: "Furniture", price: 299.99, stock: 12 },
    { name: "DSLR Camera", category: "Electronics", price: 699.99, stock: 20 },
    { name: "Sports Shorts", category: "Clothing", price: 29.99, stock: 100 },
    { name: "Peanut Butter", category: "Food", price: 7.99, stock: 90 },
    { name: "Umbrella", category: "Accessories", price: 14.99, stock: 100 },
    { name: "TV Stand", category: "Furniture", price: 149.99, stock: 20 },
    { name: "Conditioner", category: "Beauty", price: 8.99, stock: 150 },
    { name: "Wristwatch", category: "Accessories", price: 49.99, stock: 60 },
    { name: "Protein Powder", category: "Food", price: 49.99, stock: 30 },
    { name: "Leather Jacket", category: "Clothing", price: 199.99, stock: 20 },
]);


        // Insert reviews
const reviews = await Review.insertMany([
    // Reviews for Electronics
    { product_id: "p12", user_id: "u35", rating: 5, comment: "Absolutely amazing product, works like a charm!" },
    { product_id: "p3", user_id: "u12", rating: 4, comment: "Great quality, but the price could be better." },
    { product_id: "p7", user_id: "u19", rating: 3, comment: "It’s okay, nothing extraordinary." },
    { product_id: "p18", user_id: "u8", rating: 1, comment: "Terrible experience. Product arrived broken." },
    { product_id: "p5", user_id: "u25", rating: 2, comment: "Disappointed, didn’t meet the description." },
    { product_id: "p9", user_id: "u3", rating: 5, comment: "Exceeded my expectations, highly recommended!" },
    { product_id: "p2", user_id: "u41", rating: 4, comment: "Good product but took a while to deliver." },
    { product_id: "p19", user_id: "u2", rating: 1, comment: "Horrible, wouldn’t recommend to anyone." },
    { product_id: "p1", user_id: "u17", rating: 5, comment: "Fantastic purchase! Worth every penny." },
    { product_id: "p14", user_id: "u28", rating: 3, comment: "Okay product, not worth the hype." },
    { product_id: "p6", user_id: "u4", rating: 4, comment: "Product is excellent, customer service could improve." },
    { product_id: "p20", user_id: "u6", rating: 2, comment: "Poor build quality. Expected better." },
    { product_id: "p15", user_id: "u37", rating: 1, comment: "Completely useless, don’t buy this." },
    { product_id: "p4", user_id: "u20", rating: 5, comment: "Love it! Will definitely buy again." },
    { product_id: "p8", user_id: "u11", rating: 3, comment: "Average, does the job but nothing spectacular." },
    { product_id: "p11", user_id: "u32", rating: 2, comment: "Not as advertised, poor experience." },
    { product_id: "p13", user_id: "u45", rating: 5, comment: "A must-have for everyone. Incredible value." },
    { product_id: "p17", user_id: "u9", rating: 4, comment: "Decent product, but packaging was damaged." },
    { product_id: "p16", user_id: "u7", rating: 5, comment: "High quality, performs as described." },
    { product_id: "p10", user_id: "u24", rating: 2, comment: "Below average, barely functional." },
    { product_id: "p3", user_id: "u48", rating: 4, comment: "Good value for the price." },
    { product_id: "p6", user_id: "u26", rating: 5, comment: "Exceptional quality, will buy again." },
    { product_id: "p14", user_id: "u39", rating: 3, comment: "Works fine, but nothing exceptional." },
    { product_id: "p19", user_id: "u22", rating: 5, comment: "Exceeded all expectations, highly recommended!" },
    { product_id: "p9", user_id: "u1", rating: 1, comment: "Very dissatisfied, waste of money." },
    { product_id: "p11", user_id: "u30", rating: 4, comment: "Nice product, but could be cheaper." },
    { product_id: "p5", user_id: "u29", rating: 5, comment: "Amazing! Will definitely recommend." },
    { product_id: "p13", user_id: "u14", rating: 2, comment: "Doesn’t work as expected." },
    { product_id: "p1", user_id: "u46", rating: 3, comment: "It’s okay, gets the job done." },
    { product_id: "p18", user_id: "u23", rating: 5, comment: "Love it! Great product overall." },
    { product_id: "p12", user_id: "u50", rating: 1, comment: "Terrible quality, completely disappointed." },
    { product_id: "p16", user_id: "u38", rating: 4, comment: "Satisfied, but there’s room for improvement." },
    { product_id: "p20", user_id: "u18", rating: 3, comment: "Average product, not worth the price." },
    { product_id: "p9", user_id: "u42", rating: 5, comment: "Great purchase, absolutely love it!" },
    { product_id: "p15", user_id: "u27", rating: 2, comment: "Not happy, expected better quality." },
    { product_id: "p11", user_id: "u13", rating: 5, comment: "Highly recommend, best purchase this year!" },
    { product_id: "p3", user_id: "u15", rating: 4, comment: "Good overall, a bit pricey though." },
    { product_id: "p8", user_id: "u19", rating: 2, comment: "Poor performance, wouldn’t recommend." },
    { product_id: "p13", user_id: "u6", rating: 5, comment: "Exceptional value, absolutely worth it." },
    { product_id: "p6", user_id: "u8", rating: 1, comment: "Complete waste of money." },
    { product_id: "p4", user_id: "u44", rating: 4, comment: "Very useful, but delivery was delayed." },
    { product_id: "p1", user_id: "u36", rating: 3, comment: "It’s fine, but not what I expected." },
    { product_id: "p14", user_id: "u25", rating: 5, comment: "Fantastic! Will buy again for sure." },
    { product_id: "p12", user_id: "u43", rating: 4, comment: "Good deal, would recommend to friends." },
    { product_id: "p7", user_id: "u33", rating: 2, comment: "Not worth the money, poor quality." },
    { product_id: "p20", user_id: "u5", rating: 1, comment: "Worst product I’ve ever bought." },
    { product_id: "p2", user_id: "u37", rating: 3, comment: "It’s okay, meets basic needs." },
    { product_id: "p19", user_id: "u16", rating: 5, comment: "Excellent product, exceeded expectations!" },
    { product_id: "p10", user_id: "u4", rating: 4, comment: "Very happy with the product overall." },
]);

// Insert transactions
const transactions = await Transaction.insertMany([
    { user_id: "u1", product_id: "p12", amount: 699.99, payment_method: "Card", date: "2023-11-15" },
    { user_id: "u2", product_id: "p3", amount: 19.99, payment_method: "UPI", date: "2023-10-20" },
    { user_id: "u3", product_id: "p7", amount: 14.99, payment_method: "Net Banking", date: "2023-09-05" },
    { user_id: "u4", product_id: "p18", amount: 999.99, payment_method: "Card", date: "2023-08-12" },
    { user_id: "u5", product_id: "p5", amount: 49.99, payment_method: "UPI", date: "2023-07-30" },
    { user_id: "u6", product_id: "p9", amount: 29.99, payment_method: "Net Banking", date: "2023-06-18" },
    { user_id: "u7", product_id: "p2", amount: 14.99, payment_method: "Card", date: "2023-05-10" },
    { user_id: "u8", product_id: "p19", amount: 329.99, payment_method: "UPI", date: "2023-04-15" },
    { user_id: "u9", product_id: "p1", amount: 15.99, payment_method: "Card", date: "2023-03-20" },
    { user_id: "u10", product_id: "p14", amount: 149.99, payment_method: "Net Banking", date: "2023-02-11" },
    { user_id: "u11", product_id: "p6", amount: 49.99, payment_method: "Card", date: "2023-01-25" },
    { user_id: "u12", product_id: "p20", amount: 19.99, payment_method: "UPI", date: "2022-12-18" },
    { user_id: "u13", product_id: "p13", amount: 69.99, payment_method: "Net Banking", date: "2022-11-23" },
    { user_id: "u14", product_id: "p4", amount: 24.99, payment_method: "Card", date: "2022-10-05" },
    { user_id: "u15", product_id: "p8", amount: 14.99, payment_method: "UPI", date: "2022-09-15" },
    { user_id: "u16", product_id: "p17", amount: 59.99, payment_method: "Net Banking", date: "2022-08-22" },
    { user_id: "u17", product_id: "p10", amount: 89.99, payment_method: "Card", date: "2022-07-12" },
    { user_id: "u18", product_id: "p11", amount: 99.99, payment_method: "UPI", date: "2022-06-10" },
    { user_id: "u19", product_id: "p3", amount: 12.99, payment_method: "Card", date: "2022-05-03" },
    { user_id: "u20", product_id: "p5", amount: 8.99, payment_method: "Net Banking", date: "2022-04-25" },
    { user_id: "u21", product_id: "p18", amount: 399.99, payment_method: "Card", date: "2022-03-30" },
    { user_id: "u22", product_id: "p9", amount: 22.99, payment_method: "UPI", date: "2022-02-18" },
    { user_id: "u23", product_id: "p1", amount: 14.99, payment_method: "Net Banking", date: "2022-01-10" },
    { user_id: "u24", product_id: "p15", amount: 1199.99, payment_method: "Card", date: "2021-12-20" },
    { user_id: "u25", product_id: "p14", amount: 129.99, payment_method: "UPI", date: "2021-11-15" },
    { user_id: "u26", product_id: "p7", amount: 5.99, payment_method: "Net Banking", date: "2021-10-12" },
    { user_id: "u27", product_id: "p2", amount: 999.99, payment_method: "Card", date: "2021-09-08" },
    { user_id: "u28", product_id: "p20", amount: 14.99, payment_method: "UPI", date: "2021-08-19" },
    { user_id: "u29", product_id: "p19", amount: 4.99, payment_method: "Card", date: "2021-07-22" },
    { user_id: "u30", product_id: "p6", amount: 24.99, payment_method: "Net Banking", date: "2021-06-30" },
    { user_id: "u31", product_id: "p13", amount: 89.99, payment_method: "Card", date: "2021-05-11" },
    { user_id: "u32", product_id: "p10", amount: 14.99, payment_method: "UPI", date: "2021-04-25" },
    { user_id: "u33", product_id: "p3", amount: 59.99, payment_method: "Net Banking", date: "2021-03-13" },
    { user_id: "u34", product_id: "p12", amount: 29.99, payment_method: "Card", date: "2021-02-28" },
    { user_id: "u35", product_id: "p4", amount: 11.99, payment_method: "UPI", date: "2021-01-07" },
    { user_id: "u36", product_id: "p8", amount: 49.99, payment_method: "Card", date: "2020-12-10" },
    { user_id: "u37", product_id: "p9", amount: 79.99, payment_method: "UPI", date: "2020-11-22" },
    { user_id: "u38", product_id: "p14", amount: 14.99, payment_method: "Net Banking", date: "2020-10-25" },
    { user_id: "u39", product_id: "p1", amount: 4.99, payment_method: "Card", date: "2020-09-30" },
    { user_id: "u40", product_id: "p19", amount: 199.99, payment_method: "UPI", date: "2020-08-18" },
    { user_id: "u41", product_id: "p13", amount: 9.99, payment_method: "Net Banking", date: "2020-07-12" },
    { user_id: "u42", product_id: "p6", amount: 19.99, payment_method: "Card", date: "2020-06-04" },
    { user_id: "u43", product_id: "p4", amount: 109.99, payment_method: "UPI", date: "2020-05-18" },
    { user_id: "u44", product_id: "p12", amount: 8.99, payment_method: "Card", date: "2020-04-21" },
    { user_id: "u45", product_id: "p10", amount: 14.99, payment_method: "Net Banking", date: "2020-03-10" },
    { user_id: "u46", product_id: "p3", amount: 39.99, payment_method: "Card", date: "2020-02-01" },
    { user_id: "u47", product_id: "p20", amount: 49.99, payment_method: "UPI", date: "2020-01-14" },
]);


// Insert return requests
const returnRequests = await ReturnRequest.insertMany([
    { transaction_id: transactions[1]._id, reason: 'Wrong item delivered', status: 'Approved' },
    { transaction_id: transactions[3]._id, reason: 'Product damaged on arrival', status: 'Approved' },
    { transaction_id: transactions[5]._id, reason: 'Product did not match description', status: 'Rejected' },
    { transaction_id: transactions[7]._id, reason: 'Wrong color shipped', status: 'Approved' },
    { transaction_id: transactions[9]._id, reason: 'Defective product', status: 'Pending' },
    { transaction_id: transactions[12]._id, reason: 'Product damaged in transit', status: 'Approved' },
    { transaction_id: transactions[14]._id, reason: 'Package arrived empty', status: 'Approved' },
    { transaction_id: transactions[17]._id, reason: 'Wrong item shipped', status: 'Pending' },
    { transaction_id: transactions[22]._id, reason: 'Late delivery', status: 'Rejected' },
    { transaction_id: transactions[25]._id, reason: 'Incorrect model sent', status: 'Rejected' },
]);

// Insert coupons
const coupons = await Coupon.insertMany([
    { code: 'SAVE10', discount_amount: 10, valid_from: '2024-01-01', valid_until: '2024-12-31', max_usage: 5 },
    { code: 'FREESHIP', discount_amount: 5, valid_from: '2024-01-01', valid_until: '2024-12-31', max_usage: 10 },
    { code: 'EXTRA15', discount_amount: 15, valid_from: '2024-02-01', valid_until: '2024-12-31', max_usage: 3 },
    { code: 'SUMMER20', discount_amount: 20, valid_from: '2024-06-01', valid_until: '2024-08-31', max_usage: 2 },
    { code: 'WINTER25', discount_amount: 25, valid_from: '2024-11-01', valid_until: '2025-01-31', max_usage: 1 },
    { code: 'NEWYEAR30', discount_amount: 30, valid_from: '2024-12-20', valid_until: '2025-01-05', max_usage: 5 },
    { code: 'WELCOME5', discount_amount: 5, valid_from: '2024-01-01', valid_until: '2024-03-31', max_usage: 15 },
    { code: 'BULKBUY50', discount_amount: 50, valid_from: '2024-01-01', valid_until: '2024-06-30', max_usage: 1 },
    { code: 'FLASH40', discount_amount: 40, valid_from: '2024-04-01', valid_until: '2024-04-15', max_usage: 10 },
    { code: 'LOYALTY25', discount_amount: 25, valid_from: '2024-01-01', valid_until: '2024-12-31', max_usage: 20 },
]);

console.log('Data seeded successfully!');
        process.exit(0);
    } catch (err) {
        console.error('Error seeding data:', err.message);
        process.exit(1);
    }
};

// Run seeding process
connectDB().then(seedData);