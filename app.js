// Node.js is a javascript run time environment builts on chromes v8 engine  that executes javascript code outside a web browser

// Express is a framework which is used to create backend application

const express=require("express");   //importing express

const app=express();   //creating server

app.get('/text',function(req,res){
 res.send(JSON.stringify("hello world"));    //text response
})

app.get('/html',function(req,res){
res.send(JSON.stringify("<h1>welcome </h1>"));   //html response
})

app.get('/json',function(req,res){
const detail=[{name:"A",age:24}]
    res.send(JSON.stringify(detail));     //JSON response
   })

app.listen(8000,()=>{
    console.log("successful");
});