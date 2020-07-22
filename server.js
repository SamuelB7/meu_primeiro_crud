const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

const server = express()

server.use(express.urlencoded({ extended:true})) //necessário para fazer funcionar o req.body
server.use(express.static('public'))
server.use(methodOverride('_method')) //Method override precisa vir antes da rota
server.use(routes)

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(7100, function(){
    console.log('server OK!')
})