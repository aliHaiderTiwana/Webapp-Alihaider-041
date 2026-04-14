const express = require('express');
const path = require('path');
const app = express();

// Use the environment port provided by Azure, or default to 8080
const port = process.env.PORT || 8080;

// Serve static files (like your style.css) from the current directory
app.use(express.static(path.join(__dirname)));

// Send the index.html file when someone visits the website
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});