const express = require('express');

const app = express();

// listen for requests
app.listen(3000); // returns the instance of a server, and you can store in a const

// respond to requests
app.get('/', (req, res) => {
  // res.send('<p>Home Page</p>'); // more intuitive than server.js file - don't need to set up header or status codes
  res.sendFile('./views/index.html', { root: __dirname}); //default is an absolute path, so second arg needs to set the dirnmae
})

//respond to get requests
app.get('/about', (req, res) => {
  // res.send('<p>About Page</p>'); 
  res.sendFile('./views/about.html', { root: __dirname});
})

// redirects
app.get('/about-us', (req,res) => {
  res.redirect('/about');
})

// 404
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname});
})