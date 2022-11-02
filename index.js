//Question1:How do you create a simple Express.js application?

const express = require("express");

//Question4:Implement CORS.
const cors = require("cors");

const app = express();
app.use(cors());

app.get('/',(req,res) => {
    res.send("working");
})

//Question2:Implementation of all type of exports in backend application.




const {addition,subtraction,multiplication} = require('./Operations')
console.log(addition(2,4));
console.log(subtraction(12,4));
console.log(multiplication(3,8));


//Question3:Create a middleware which will be applicable to all the routes.

const middlewareOne = (req,res,next) => {
    console.log(" middlewareOne");
    next();
}

const middlewareTwo = (req,res,next) => {
    console.log("middlewareTwo");
    next();
}

app.use(middlewareOne)

app.get('/about',(req,res) => {
    res.send("hello world")
})

app.get('/contact',middlewareTwo,(req,res) => {
    res.send("hiiii")
})


app.listen('8080',() => {
    console.log("Running on Port number 8080");
})