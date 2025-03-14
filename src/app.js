const express = require('express');
const errorRoutes = require('./routes/errorRoutes');
const path = require('path');

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Set up EJS as the templating engine (optional)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/log-error', errorRoutes);

// Home route (optional)
app.get('/', (req, res) => {
    res.render('index'); // Render the index.ejs file
});

module.exports = app;