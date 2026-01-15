const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// GET all transactions
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find().populate('user_id product_id');
        res.status(200).json(transactions);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching transactions', error: err.message });
    }
});

// POST a new transaction
router.post('/', async (req, res) => {
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    } catch (err) {
        res.status(400).json({ message: 'Error creating transaction', error: err.message });
    }
});

// PUT (update) a transaction by ID
router.put('/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
        res.status(200).json(transaction);
    } catch (err) {
        res.status(400).json({ message: 'Error updating transaction', error: err.message });
    }
});

// DELETE a transaction by ID
router.delete('/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: 'Error deleting transaction', error: err.message });
    }
});

module.exports = router;
