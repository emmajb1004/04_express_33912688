//Create a new router
const express = require("express");
const path = require("path");
const router = express.Router();

//handle the main routes
router.get("/", (req, res) => res.send("Hello World!"));

//route for about page, accessed via http://localhost:8000/about
router.get("/about", (req,res) => res.send("<h1>This is the about page</h1>"));

//route for contact page, accessed via http://localhost:8000/contact
router.get('/contact', (req,res) => res.send("<h1>This is the contact page</h1>"));

//route for date page, accessed via http://localhost:8000/date
router.get('/date', (req,res) => res.send('<h1>This is the date page</h1>'));

//route for welcome page, accessed via http://localhost:8000/welcome/yourName
router.get('/welcome/:nameId', (req,res) => res.send(`<h1>Welcome ${req.params.nameId}</h1>`));

//chaining route handlers
const handler1 = function (req,res,next) {
    console.log('Hello From Handler 1');
    next();
}

const handler2 = function (req,res,next) {
    console.log('Hello From Handler 2');
    next();
}

router.get('/chain', [handler1, handler2], (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
  }, (req, res) => {
    res.send('Hello from handlers!')
  })
   
//serve an html file from views folder, accessed via http://localhost:8000/file
router.get('/file', (req,res) => res.sendFile(path.join(__dirname, '../views/a.html')));

//Export router object so index.js can access it
module.exports = router;