/**
 * Arquivo: server.js
 * Descrição: arquivo responsavel por toda a configuração e execução da aplicação.
 * Data: 27/12/2020
 * Author: Charllys Castro
 */

 const app = require('./src/app');
 const port = process.env.PORT || 3000;

 app.listen(port, () => {
    console.log('Aplicação executando na porta ', port);
 });
