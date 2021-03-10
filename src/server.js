//tudo o q for importar tem q usar 'require'
//esta buscando na pasta 'node-modules'
//se fosse pra buscar um arquivo fora da pasta 'node-modules', tem q ser 'require(./nome-da-pasta/nome-da-pasta)'

const express = require('express');
const server = express();
const pageLanding = require('./app');

/*const nunjuncks = require('nunjucks')
nunjuncks.configure('/src', {
    express: server,
    noCache: true
})*/

server
.use(express.urlencoded({extended: true}))
.use(express.static("public"))
.use(express.static('images'))
.get('/', pageLanding)
//rotas
.listen(5000);