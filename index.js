require('dotenv').config();
const express = require('express');
const cors = require("cors");
const connectDB = require('./config/db');

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS middleware
app.use(express.json()); // Parse incoming JSON requests

// Database connection
connectDB();

// Root Route
app.get('/', (req, res) => {
    res.send('Amazon Review System API is running...');
});

// API Routes
app.use('/api/users', require('./routes/UserRoutes'));
app.use('/api/products', require('./routes/ProductRoutes'));
app.use('/api/reviews', require('./routes/ReviewRoutes'));
app.use('/api/transactions', require('./routes/TransactionRoutes'));
app.use('/api/return-requests', require('./routes/ReturnRequestRoutes'));
app.use('/api/coupons', require('./routes/CouponRoutes'));

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
