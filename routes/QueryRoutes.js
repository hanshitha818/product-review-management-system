const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const Review = require("../models/Review");
const User = require("../models/User");

router.get("/query1", async (req, res) => {
  const { category } = req.query;

  if (!category) {
    return res.status(400).json({ message: "Category is required" });
  }

  try {
    const products = await Product.find({ category });
    const productIds = products.map((product) => product._id);

    const reviews = await Review.find({ product_id: { $in: productIds } });

    const users = await User.find();
    const result = reviews.map((review) => {
      const product = products.find((p) => p._id.equals(review.product_id));
      const user = users.find((u) => u._id.equals(review.user_id));
      return {
        user_name: user?.name,
        user_email: user?.email,
        product_name: product?.name,
        review_comment: review.comment,
        rating: review.rating,
      };
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
});

module.exports = router;
