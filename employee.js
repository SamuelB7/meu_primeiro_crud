const employeemodel = require('./employeemodel')


module.exports = {
    list(req,res) {
        employeemodel.all(function(employee){
            return res.render('list', {employee})
        })
    },

    post(req,res) {
        const keys = Object.keys(req.body)

        for(key of keys) {
            if(req.body[key] == '') {
                return res.send('Por favor preencha todos os campos')
            }
        }

        employeemodel.create(req.body, function(employee){
            return res.redirect(`/${employee.id}`)
        })
    },

    show(req,res) {
        employeemodel.find(req.params.id,function(employee){
            if(!employee) return res.send('employee not found')

            return res.render('show', {employee})
        })
    },

    edit(req,res) {
        employeemodel.find(req.params.id, function(employee){
            if(!employee) return res.send('employee not found')

            return res.render('edit', {employee})
        })
    },

    put(req, res) {
        const keys = Object.keys(req.body) 

        for(key of keys) {
            if (req.body[key] =='') {
                return res.send('Please, fill all fields')
            }
        }

        employeemodel.update(req.body, function(){
            return res.redirect (`/${req.body.id}`)
        })
    },

    delete(req, res) {
        employeemodel.delete(req.body.id, function(){
            return res.redirect('/')
        })
    }
}


/* exports.list = function(req,res) {
    
    employeemodel.all(function(employee) {
        return res.render('list', {employee})
    })
}


exports.show = function(req,res) {
    employeemodel.find(req.params.id, function(employee){
        if(!employee) return res.send('Employee not found')

        return res.render('show', {employee})
    })   
}


exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == '') {
            return res.send('Por favor preencha todos os campos')
        }
    }

    employeemodel.create(req.body, function(employee) {
        return res.redirect(`/${employee.id}`)
    })
}


exports.edit = function(req,res) {
    return
}


exports.put = function(req, res) {
    const keys = Object.keys(req.body) 

    for(key of keys) {
        if (req.body[key] =='') {
        return res.send('Please, fill all fields')
        }
    }
    return
}


exports.delete = function(req, res)  {
    return
} */