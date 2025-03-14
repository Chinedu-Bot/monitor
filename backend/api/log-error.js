
const express = require('express');
const app = express();
app.use(express.json());

let errors = [];

// Log Error Endpoint
app.post('/log-error', (req, res) => {
    const { message, error, timestamp, level } = req.body;
    const errorData = { message, error, timestamp, level };
    errors.push(errorData);
    console.log(`[${timestamp}] [${level}] ${message} - ${error}`);
    res.status(200).send({ status: "Success", message: "Error logged" });
});

// Get Errors Endpoint
app.get('/get-errors', (req, res) => {
    res.status(200).json({ errors });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
