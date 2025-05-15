const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Servir archivos estáticos desde la carpeta "client/build"
app.use(express.static(path.join(__dirname, 'client/build')));

// Ruta de inicio (sirve la aplicación React)
app.get(/^\/(?!api\/)(.*)$/, (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});