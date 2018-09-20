const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

/*
//Popular Songs

app.get('/artist/:id', function(req, res) {
  res.redirect('http://localhost:3003/artist/:id');
});

*/



//Related Artist

app.get('/relatedArtists/id/artist', function(req, res) {
  var redirectUrl = `http://localhost:3002${req.url}`;
  res.redirect(redirectUrl);
});




//Header

app.get('/artists/:artistID', function(req, res) {
  var redirectUrl = `http://localhost:3004${req.url}`;
  res.redirect(redirectUrl);
});





//AlbumListMusicPlayer

app.get('/artists/albums/:artistID', function(req, res) {
  var redirectUrl = `http://localhost:3001${req.url}`;
  res.redirect(redirectUrl);
});





app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});