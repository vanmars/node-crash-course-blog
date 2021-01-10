const express = require('express');
const app = express();

//register view engine
app.set('view engine', 'ejs');  // looks in views folder by default

// listen for requests
app.listen(3000); // returns the instance of a server, and you can store in a const

// respond to requests
app.get('/', (req, res) => {
  const blogs = [
    {title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur"},
    {title: "Mario finds starts", snippet: "Lorem ipsum dolor sit amet consectetur" },
    {title: "How to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur"},
  ]
  res.render('index', {title: "Home", blogs})
})

app.get('/about', (req, res) => {
  res.render('about', {title: "About"})
})

// redirects
app.get('/blogs/create', (req,res) => {
  res.render('create', {title: "Create a New Blog"})
})

// 404
app.use((req, res) => {
  res.status(404).render('404', {title: "404"})
})