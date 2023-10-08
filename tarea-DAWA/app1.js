const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/formulario.html');
});

app.post('/procesar', (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    
    // Aquí puedes realizar la lógica de procesamiento de los datos del formulario
    
    res.send(`Nombre: ${nombre}, Email: ${email}`);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
