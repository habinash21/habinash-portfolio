const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main portfolio page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Habinash Yadav - Portfolio'
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Portfolio server is running on http://localhost:${PORT}`);
});
