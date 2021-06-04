//console.log("Hello Peter");
require('dotenv').config()
const express = require('express')
const server = express()
const path = require('path')
const cors = require('cors')

server.use(express.json())
server.use(cors())
server.use(express.static(path.join(__dirname,'mywork/build')))// static assets

console.log(process.env.USER)
console.log(process.env.SHELL)

if (process.env.NODE_ENV === 'production'){
    console.log('this means the code is deployed')
}

const PORT =process.env.PORT || 5000

console.log('Port is ', PORT)

server.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'mywork/build','index.html'))
})

server.get('/api',(req,res)=>{
    res.json({message : `${process.env.COHORT}`})
})
server.use((req, res)=>{
    res.status(404).json({message:'Not found sorry'})
})

server.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})