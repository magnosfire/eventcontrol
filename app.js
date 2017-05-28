/**
 * Created by Renan on 28/05/2017.
 */
var express = require("express");
var helmet = require('helmet');

var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(helmet());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

/*
var jobRouter = require("./routes/job")();

app.use("/Job", jobRouter);
*/


var server = app.listen(3000, function () {

    console.log("Server running at http://127.0.0.1:3000/");

});