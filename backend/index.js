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
app.get('/scan', (req, res) => {
    const scanResults = [
        { id: 1, type: 'Port Scan', target: '192.168.1.10', status: 'Open', severity: 'Medium' },
        { id: 2, type: 'Vulnerabbility', target: '192.168.1.20', status: 'Missing Patch', severity: 'High' },
        { id: 3, type: 'Configuration', target: 'Server XYZ', status: 'Weak Password Policy', severity: 'High' }
    ];
    res.json({
        service: 'AegisAI',
        scanDate: new Date(),
        results: scanResults 
    });
});
app.listen(PORT, () => {
    console.log(`AegisAI server running on port ${PORT}`);
});