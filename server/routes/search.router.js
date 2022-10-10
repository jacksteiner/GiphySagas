const express = require('express');
const router = express.Router();
const axios = require('axios');


// Client makes a request to /search
router.get('/:string', (req, res) => {
    const string = req.params.string;
    // Make a request to the GIPHY API
    // axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&tag=${tag}`)
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${string}&limit=2`)
         .then((response) => {
             // Send the response from GIPHY to the client
             res.send(response.data);
         })
         .catch((e) => {
             console.log(e);
             res.sendStatus(500);
         });
});

module.exports = router;