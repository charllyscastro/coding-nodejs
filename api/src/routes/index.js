/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsavel pela chamada da(s) API's da aplicação.
 * Data: 27/12/2020
 * Author: Charllys Castro
 */

 const express = require('express');
 const router = express.Router();

 router.get('/api', (req, res)=>{
  res.status(200).send({
    success:  'true',
    message: 'Seja bem vindo(a)',
    version: '1.0.0'
  })
 });

 module.exports = router;