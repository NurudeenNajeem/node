const express = require('express');
const router = express.Router();
const path = require('path');



// sendFile will go here i.e to render html file
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });


  module.exports = router;