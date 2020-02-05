let express = require("express");

let app = express();

//Set up template engine
app.set("view engine", "ejs");

//Static files
app.use(express.static("./public"));

//listen to port
app.listen(3000);
console.log("You are listening to port 3000");
