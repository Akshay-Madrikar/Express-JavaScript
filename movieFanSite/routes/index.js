var express = require('express');
const request = require('request');
var router = express.Router();

const apiKey = '1fb720b97cc13e580c2c35e1138f90f8';
//const apiKey = '123456789';
const apiBaseUrl = 'http://api.themoviedb.org/3';
//const apiBaseUrl = 'http://localhost:3030';
const nowPlayingUrl = `${apiBaseUrl}/movie/popular?api_key=${apiKey}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

router.use((req,res,next) => {
  res.locals.imageBaseUrl = imageBaseUrl;
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  // request.get takes 2 args:
  // 1. it takes the URl to http'get'
  // 2. the callback to run when http response is back. It has 3 args:
  //      2.1. error(if any)
  //      2.2. http response
  //      2.3. json/data the server sent back  
  request.get(nowPlayingUrl,( error, response, movieData ) => {
    const parsedData = JSON.parse(movieData);
     res.render('index', {
       parsedData: parsedData.results
     });
  });
});

router.get('/movie/:id', (req,res,next) => {
  //res.json(req.params.id);
  const movieId = req.params.id;
  const thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}`;
  //res.send(thisMovieUrl);
  request.get(thisMovieUrl,( error, response, movieData ) => {
    const parsedData = JSON.parse(movieData);
     res.render('single-movie', {
       parsedData
     });
  });
});

router.post('/search',(req,res,next) => {
  //res.send("Sanity Check");
  const userSearchTerm = encodeURI(req.body.movieSearch);
  const cat = req.body.cat;
  const movieUrl = `${apiBaseUrl}/search/${cat}?query=${userSearchTerm}&api_key=${apiKey}`;
  request.get(movieUrl,( error, response, movieData ) => {
    let parsedData = JSON.parse(movieData);

    if(cat === 'person'){
      parsedData.results = parsedData.results[0].known_for;
    }
     res.render('index', {
       parsedData: parsedData.results
     });
  });
});

module.exports = router;
