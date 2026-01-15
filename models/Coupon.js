const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    discount_amount: { type: Number, required: true },
    valid_from: { type: Date, required: true },
    valid_until: { type: Date, required: true },
    max_usage: { type: Number, default: 1 },
});

module.exports = mongoose.model('Coupon', couponSchema);
