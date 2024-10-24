import fs from 'fs';
import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert __dirname to __filename equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();

// Pass the path and the boolean argument
const router = jsonServer.router(path.resolve(__dirname, 'db.json'), true);

server.use(jsonServer.defaults({
    // You can specify custom options here
}));
server.use(jsonServer.bodyParser);

// Simulate a real API with a small delay
server.use(async (req, res, next) => {
    await new Promise((resolve) => {
        setTimeout(resolve, 800);
    });
    next();
});

// Login endpoint
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromBd) {
            return res.json(userFromBd);
        } else {
            return res.status(403).json({ message: 'Invalid username or password' });
        }
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: e.message });
    }
});


// Check if the user is authorized
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});

server.use(router);

// Start the server
server.listen(8000, () => {
    console.log('server is running on port 8000');
});
