// set up express
const express = require("express");
const app = express();
const port = 8000;

//Loud the route handlers
const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);

// serve static files using CSS
app.use(express.static(__dirname));


//Start listening for HTTP requests 
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`));