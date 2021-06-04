//console.log("Hello Peter");
require('dotenv').config()
const express = require('express')
const server = express()

console.log(process.env.USER)
console.log(process.env.SHELL)

if (process.env.NODE_ENV === 'production'){
    console.log('this means the code is deployed')
}

const PORT =process.env.PORT || 5000

console.log('Port is ', PORT)

server.get('/api',(req,res)=>{
    res.json({message : `${process.env.COHORT}`})
})

server.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})