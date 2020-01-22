const express = require('express'); //requiero el modulo de express. Todos los módulos devuelven un objeto literal. 
const app = express(); //Más informacion en https://www.npmjs.com/ o https://expressjs.com

app.listen(3000, () => console.log("Servidor Corriendo en el puerto 3000"));//metodo del objeto literal que devuelve ejecutar express.