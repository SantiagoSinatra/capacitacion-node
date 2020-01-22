const express = require('express'); //requiero el modulo de express. Todos los módulos devuelven un objeto literal. 
const app = express(); //Más informacion en https://www.npmjs.com/ o https://expressjs.com

app.get('/', (req, res) => {
    res.send('Estoy en la página de inicio.');
});

app.get('/acerca-de', (req, res) => {
    res.send('Estoy en la página de acerca-de');
});

app.get('/contacto', (req, res) => {
    res.send('Estoy en la página de contacto.');
});

// Siempre poner esto al final. Las rutas más especificas van arriba y las otras abajo. 
app.get('*', (req, res) => {
    res.send('Esa pagina no existe amiwo!');
});

//Microdesafio:
// - Armar las rutas para "acerca-de" y "contacto";

app.listen(3000, () => console.log("Servidor Corriendo en el puerto 3000"));//metodo del objeto literal que devuelve ejecutar express.