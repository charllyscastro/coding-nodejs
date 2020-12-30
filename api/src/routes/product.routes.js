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

// ==> Rota responsavel por selecionar um 'Product' pelo 'Id': (GET): localhost:3000/api/products/:id
router.get('/products/:id', productController.findProductById);

// ==> Rota responsavel por atualizar um 'product' pelo 'Id': (POST): localhost:3000/api/products/:id
router.put('/products/:id', productController.updateProductById);

// ==> Rota responsavel excluir um 'product' pelo 'Id': (POST): localhost:3000/api/products/:id
router.delete('/products/:id', productController.deleteProductById);
module.exports = router;