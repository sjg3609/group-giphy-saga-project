const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "favorites"`;
  pool.query(queryText).then((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log(`Error in GET /favorites:, ${error}`);
    res.sendStatus(500);
  })
  
});

// add a new favorite
router.post('/', (req, res) => {
  const queryText = `INSERT INTO favorites ("url") VALUES ($1);`;
  pool.query(queryText, [req.body]).then((result) => {
    res.sendStatus(200);
  }).catch(error => {
    console.log(`Error in POST /favorites: ${error}`);
    res.sendStatus(500);
  });
  
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const favoriteGif = req.body
  console.log(req.body);
  const queryText = `UPDATE favorites SET category_id = $1`
  const queryValues = favoriteGif.category_id;
  pool.query(queryText, queryValues).then(() => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log(`Error in completing Update in favorites query: ${error}`);
    res.sendStatus(500);
  })
  
});

// delete a favorite
router.delete('/', (req, res) => {
  const queryText = `DELETE from favorites WHERE id=$1`;
  pool.query(queryText, [req.params.id]).then(() => {
     res.sendStatus(200);
  }).catch((error) => {
    console.log(`Error in delete query for favorites: ${error}`);
    res.sendStatus(500);
  })
 
});

module.exports = router;
