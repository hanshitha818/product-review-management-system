const express = require('express');
const router = express.Router();
const ReturnRequest = require('../models/ReturnRequest');

// GET all return requests
router.get('/', async (req, res) => {
    try {
        const returnRequests = await ReturnRequest.find().populate('transaction_id');
        res.status(200).json(returnRequests);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching return requests', error: err.message });
    }
});

// POST a new return request
router.post('/', async (req, res) => {
    try {
        const returnRequest = new ReturnRequest(req.body);
        await returnRequest.save();
        res.status(201).json(returnRequest);
    } catch (err) {
        res.status(400).json({ message: 'Error creating return request', error: err.message });
    }
});

// PUT (update) a return request by ID
router.put('/:id', async (req, res) => {
    try {
        const returnRequest = await ReturnRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!returnRequest) return res.status(404).json({ message: 'Return request not found' });
        res.status(200).json(returnRequest);
    } catch (err) {
        res.status(400).json({ message: 'Error updating return request', error: err.message });
    }
});

// DELETE a return request by ID
router.delete('/:id', async (req, res) => {
    try {
        const returnRequest = await ReturnRequest.findByIdAndDelete(req.params.id);
        if (!returnRequest) return res.status(404).json({ message: 'Return request not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: 'Error deleting return request', error: err.message });
    }
});

module.exports = router;
