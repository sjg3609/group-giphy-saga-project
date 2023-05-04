const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT favorites.id, favorites.url, category.name FROM favorites
  JOIN category ON favorites.category_id = category.id;`;
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error in GET /favorites:, ${error}`);
    res.sendStatus(500);
  })
  
});

// add a new favorite
router.post('/', (req, res) => {
  const queryText = `INSERT INTO favorites ("url", "category_id") VALUES ($1, 1);`;
  pool.query(queryText, [req.body.url]).then((result) => {
    res.sendStatus(200);
  }).catch(error => {
    console.log(`Error in POST /favorites: ${error}`);
    res.sendStatus(500);
  });
  
});

// update given favorite with a category id
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const favoriteGif = req.body
  const categoryId = req.params.id;
  console.log(req.body);
  console.log(req.params.id);
  const queryText = `UPDATE favorites SET category_id = $1 WHERE id = ${categoryId}`
  const queryValues = favoriteGif.category;
  pool.query(queryText, [queryValues]).then(() => {
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
