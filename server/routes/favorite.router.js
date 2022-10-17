const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log('in the get router')
  const queryText= `SELECT * FROM "favorites" `;
  pool.query(queryText)
  .then((result) => {
    res.send(result.rows)
  })
  .catch((error) => {
    console.log(`error in the get ${error}`);
    res.sendStatus(500);
  })
});

// add a new favorite
router.post('/', (req, res) => {
  console.log('POST req.body in favorite.router', req.body.gifUrl);
  let queryText = 'INSERT INTO "favorites" ("gif_url") VALUES ($1)';

  pool.query(queryText, [req.body.gifUrl])
  .then((result) => {
    res.sendStatus(200);
  }).catch((err) => {
    console.log('error in favorite.router PUT',(err));
    res.sendStatus(500);
  })
});




// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image

});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
