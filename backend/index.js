const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('AegisAI backend is running');
});
app.get('/status', (req, res) => {
    res.json({
        service:'AegisAI',
        version: '0.0.1',
        status: 'running'
    });
});
app.listen(PORT, () => {
    console.log(`AegisAI server running on port ${PORT}`);
});