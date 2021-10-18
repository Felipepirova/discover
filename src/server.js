const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()
server.set('view engine', 'ejs') //quem é o view engine
server.use(express.static('public'))
server.set('views', path.join(__dirname, 'views'))
server.use(express.urlencoded({ extended: true }))
server.use(route) //usar router

server.listen(3000, () => console.log('----rodando'))
