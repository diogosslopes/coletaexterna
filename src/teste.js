const Sequelize = require('sequelize')
const Sequelize = new Sequelize('test', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado")
}).catch(function(erro){
    console.log("Erro " + erro)
})