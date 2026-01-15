const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    transaction_date: { type: Date, default: Date.now },
    quantity: { type: Number, required: true },
    total_amount: { type: Number, required: true },
    payment_method: { type: String, enum: ['Credit Card', 'PayPal', 'UPI'], required: true },
});

module.exports = mongoose.model('Transaction', transactionSchema);
