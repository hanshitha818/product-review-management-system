const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Review = require('../models/Review');
const User = require('../models/User');

// Route to get reviews for a product in a specific category with user details
router.get('/product-reviews/:category', async (req, res) => {
    const category = req.params.category;

    try {
        const result = await Product.aggregate([
            { $match: { category } }, // Filter by category
            {
                $lookup: {
                    from: 'reviews',
                    localField: '_id',
                    foreignField: 'product_id',
                    as: 'reviews'
                }
            },
            { $unwind: "$reviews" },
            {
                $lookup: {
                    from: 'users',
                    localField: 'reviews.user_id',
                    foreignField: '_id',
                    as: 'user_details'
                }
            },
            {
                $project: {
                    product_name: "$name",
                    review_comment: "$reviews.comment",
                    rating: "$reviews.rating",
                    user_name: { $arrayElemAt: ["$user_details.name", 0] },
                    user_email: { $arrayElemAt: ["$user_details.email", 0] }
                }
            }
        ]);

        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;
