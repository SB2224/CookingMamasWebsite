const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // Enable CORS for all routes
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'POST' && req.url === '/api/recipes') {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            try {
                const recipeData = JSON.parse(data);
                console.log('Received Recipe:', recipeData);

                // You can add database storage logic here if needed

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, message: 'Recipe submitted successfully' }));
            } catch (error) {
                console.error('Error parsing JSON:', error);

                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: 'Invalid JSON' }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Not Found' }));
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
