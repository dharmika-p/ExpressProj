const express = require('express');
const homeRouter = express.Router();
const path = require('path');


// Serve index.html for root or /index
homeRouter.get(/^\/$|^\/index(\.html)?/, (req, res) => {
    res.sendFile(path.join(__dirname,'..','views','index.html'));
});

module.exports = homeRouter