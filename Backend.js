const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/log', (req, res) => {
    const logData = req.body;
    // Here, you can process and log the received data to a file or database
    console.log('Received visitor log:', logData);
    res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
