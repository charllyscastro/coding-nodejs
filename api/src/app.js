/**
 * Arquivo: app.js
 * Descrição: arquivo responsavel por toda a comunicação entre o server executado no servidor com o restante da aplicação.
 * Data: 27/12/2020
 * Author: Charllys Castro
 */

 const express = require('express');
 const cors = require('cors');

 const app = express();

 // ==> Rotas da API
 const index = require('./routes/index');
 const productRoute = require('./routes/product.routes');

 //quando for fazer alguma req. 
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
 app.use(express.json({ type: 'application/vnd.api+json'}));
 app.use(cors());

 app.use(index);
 app.use('/api/', productRoute); //localhost:3000/api/{rota}

 module.exports = app;