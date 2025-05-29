const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (index.html)
app.use(express.static(__dirname));

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    res.send(`
        <html>
            <body>
                <h1>Form Submitted</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <a href="/">Go Back</a>
            </body>
        </html>
    `);
});

// Handle 404 error
app.use((req, res) => {
    res.status(404).send(`
        <html>
            <body>
                <h2 style="color:red;">The page you requested is not available</h2>
            </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
