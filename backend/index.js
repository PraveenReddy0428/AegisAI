const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('AegisAI backend is running');
});
app.listen(PORT, () => {
    console.log(`AegisAI server running on port ${PORT}`);
});