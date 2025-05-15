const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql2');

// Middleware para analizar el cuerpo de las solicitudes (para POST, PUT, etc.)
app.use(express.json());

// Datos de prueba 
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'wooden_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Rutas de la API (simuladas)
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

// Servir archivos estáticos desde la carpeta "client/build"
app.use(express.static(path.join(__dirname, 'client/build')));

// Ruta de inicio (sirve la aplicación React)
app.get(/^\/(?!api\/)(.*)$/, (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});