const mongoose = require('mongoose');

const returnRequestSchema = new mongoose.Schema({
    transaction_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction', required: true },
    reason: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    request_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ReturnRequest', returnRequestSchema);
