var express         = require('express'),
    app             = express();

app.get("/", function(req, res){
    res.render('index.ejs');
});

app.listen(3000, 'localhost', function(){
    console.log("The server has started!");
});