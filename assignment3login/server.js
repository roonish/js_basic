const express = require('express');
// enables interacting with the file system 
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
const DB_FILE = path.join(__dirname, 'mydb.txt');

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'clientside' folder
app.use(express.static(path.join(__dirname, 'clientside')));

// Function to read database
const readDatabase = () => {
    if (!fs.existsSync(DB_FILE)) return [];
    return fs.readFileSync(DB_FILE, 'utf8')
        .split('\n')
        .filter(line => line.trim() !== "")
        .map(line => {
            const [username, password] = line.split(',');
            return { username: username.trim(), password: password.trim() };
        });
};

// Function to write to database
const writeDatabase = (users) => {
    const data = users.map(user => `${user.username},${user.password}`).join('\n');
    fs.writeFileSync(DB_FILE, data, 'utf8');
};

// **Register API**
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Username and password are required.');
    }

    let users = readDatabase();
    
    // Check if username exists
    if (users.some(user => user.username === username)) {
        return res.status(400).send('Username already exists.');
    }

    users.push({ username, password });
    writeDatabase(users);

    res.send('Registration successful. You can now log in.');
});

// **Login API**
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    let users = readDatabase();

    const user = users.find(user => user.username === username && user.password === password);
    
    if (!user) {
        return res.status(400).send('Invalid username or password.');
    }

    res.send(`Welcome, ${username}!`);
});

// **Serve Home Page**
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'clientside', 'index.html'));
});

// **Start Server**
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
