/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsavel pelas rotas da api relacionada a classe 'Product'.
 * Data: 27/12/2020
 * Author: Charllys Castro
 */

 const router = require('express-promise-router')();
 const productController = require('../controllers/product.controllers');

//  ==> Definindo as rotas do CRUD - 'Product'
// ==> Rota responsavem por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/products', productController.createProduct);

// ==> Rota responsavel por selecionar todos os 'Products': (GET): localhost:3000/api/products
router.get('/products', productController.listAllProducts);

module.exports = router;