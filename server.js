/*eslint no-unused-vars: "off"*/
'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./api/config');

mongoose
  .connect(config.db)
  .then(() => {
    console.log('Conexión a la base de datos establecida...');
    app.listen(config.port, () => {
      console.log(`API REST corriendo en http://localhost:${config.port}`);
    });
  })
  .catch((err) => {
    return console.log(`Error al conectar a la base de datos: ${err}`);
  });
