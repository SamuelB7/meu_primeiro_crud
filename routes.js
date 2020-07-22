const express = require('express')
const routes = express.Router()
const employee = require('./employee')

routes.get('/', function(req,res){
    return res.render('main.njk')
})

//Necessário para receber dados do front-end, o "main" vem to action no html
routes.post('/main', employee.post)

routes.get('/list', employee.list)

routes.get('/:id', employee.show)

routes.get('/:id/edit', employee.edit)

routes.put('/main', employee.put)

routes.delete('/main', employee.delete)

module.exports = routes