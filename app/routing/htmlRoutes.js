var express = require("express");
var path = require("path")
//var app = express();

var router = express.Router()
//var PORT = 3000;

router.get("/:survey",function(req, res){

    if(req.params.survey === "survey"){
        //show survey page
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    
    }
    else{
        //show home page
        res.sendFile(path.join(__dirname, "../public/home.html"));
    }

});

router.get("/",function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
})

module.exports = router;
