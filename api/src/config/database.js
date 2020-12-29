/**
 * Arquivo: src/config/database.js
 * Descrição: arquivo responsavel pela conection string da aplicação, comunicação da apli. com o postgres.
 * Data: 27/12/2020
 * Author: Charllys Castro
 */

 const { Pool } = require('pg');
 const dotenv = require('dotenv');

 dotenv.config();

// ==> conexão com a Base de Dados (PostgresSQL)
 const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
 });

 pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
 });

 module.exports = {
  query: (text, params) => pool.query(text, params),
 };