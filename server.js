let express = require("express");
let app = express();
//static html
app.use(express.static(__dirname + "/static"));
//css
app.use(express.static(__dirname + "/css"));
//images
app.use(express.static(__dirname + "/images"));

//routes
app.get("/cars", function (request, response){
    response.render('cars');
});
app.get("/cats", function (request, response){
    response.render('cats');
});
app.get("/cars/new", function (request, response){
    response.render('form');
});

// ejs
app.set('view engine', 'ejs');
//port
app.listen(8000, function() {
    console.log("Listening to 8000");
});