// import express
const express = require('express')
const dataService = require('./services/data.service')

// create an app using express
const app = express()

// to parse json
app.use(express.json())

// resolve http rqst from client
// GET -to read data
app.get('/',(req,res)=>{
   res.status(401).send("It's a GET Method") 
})
// POST-to create data
app.post('/',(req,res)=>{
    res.send("It's a post Method") 
 })
//  PUT -to update/modify data
app.put('/',(req,res)=>{
    res.send("It's a put Method") 
 })
//  PATCH-to modify partially data
app.patch('/',(req,res)=>{
    res.send("It's a patch Method") 
 })
//  DELETE -to delete data
 app.delete('/',(req,res)=>{
    res.send("It's a delete Method") 
 })

// bank app API

// register API
app.post('/register',(req,res)=>{
 const result = dataService.register(req.body.acno,req.body.password,req.body.uname)
 res.status(result.statusCode).json(result)
})


// login API
app.post('/login',(req,res)=>{
   const result = dataService.Login(req.body.acno,req.body.password)
   res.status(result.statusCode).json(result)
  })

  // deposit API
app.post('/deposit',(req,res)=>{
   const result = dataService.deposit(req.body.acno,req.body.password,req.body.amt)
   res.status(result.statusCode).json(result)
  })

  



// setup the port number
app.listen(3000,()=>{
    console.log("server started at port number:3000 ");
})