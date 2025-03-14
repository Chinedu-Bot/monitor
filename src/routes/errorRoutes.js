const express = require('express');
const router = express.Router();

// POST route to log errors
router.post('/', async (req, res) => {
    const { error } = req.body;

    if (!error) {
        return res.status(400).json({ message: 'Error message is required' });
    }

    console.log('Received error:', error);

    // Here, you can save the error to a database or perform other actions
    // For now, we'll just log it to the console

    res.status(200).json({ message: 'Error logged successfully' });
});

module.exports = router;