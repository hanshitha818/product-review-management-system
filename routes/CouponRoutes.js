const express = require('express');
const router = express.Router();
const Coupon = require('../models/Coupon');

// GET all coupons
router.get('/', async (req, res) => {
    try {
        const coupons = await Coupon.find();
        res.status(200).json(coupons);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching coupons', error: err.message });
    }
});

// POST a new coupon
router.post('/', async (req, res) => {
    try {
        const coupon = new Coupon(req.body);
        await coupon.save();
        res.status(201).json(coupon);
    } catch (err) {
        res.status(400).json({ message: 'Error creating coupon', error: err.message });
    }
});

// PUT (update) a coupon by ID
router.put('/:id', async (req, res) => {
    try {
        const coupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!coupon) return res.status(404).json({ message: 'Coupon not found' });
        res.status(200).json(coupon);
    } catch (err) {
        res.status(400).json({ message: 'Error updating coupon', error: err.message });
    }
});

// DELETE a coupon by ID
router.delete('/:id', async (req, res) => {
    try {
        const coupon = await Coupon.findByIdAndDelete(req.params.id);
        if (!coupon) return res.status(404).json({ message: 'Coupon not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: 'Error deleting coupon', error: err.message });
    }
});

module.exports = router;
