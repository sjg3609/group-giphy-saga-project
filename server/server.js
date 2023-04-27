require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5008;

// Route includes
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

app.get('/api/search/:id', (req, res) => {
  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.params.id}&limit=25&offset=0&rating=g&lang=en`).then((response) => {
    res.send(response.data);
  }).catch((error) => {
    console.log(error);
    res.sendStatus(500);
  })
})

// Routes
app.use('/api/favorite', favoriteRouter);
app.use('/api/category', categoryRouter);

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
