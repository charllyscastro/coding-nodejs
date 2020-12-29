/**
 * Arquivo: src/controllers/product.controllers.js
 * Descrição: arquivo responsavel pela logica do CRUD da API 'Product'.
 * Data: 27/12/2020
 * Author: Charllys Castro
 */

 const db = require('../config/database');

 // ==> Método responsavel por criar um novo 'Product'
 exports.createProduct = async (req, res) => {
   const { product_name, quatity, price } = req.body;
   const response = await db.query(
      'INSERT INTO products (product_name, quatity, price) VALUES ($1, $2, $3)',
      [product_name, quatity, price] 
   );

   res.status(201).send({
     message: 'Product added successfully',
     body: {
       product: {product_name, quatity, price}
     },
   });
 };

 // ==> Método responsavel por listas todos os 'Products'
 exports.listAllProducts = async (req, res) => {
    const response = await db.query('SELECT * FROM products ORDER BY product_name ASC');
    res.status(200).send(response.rows);
 }
