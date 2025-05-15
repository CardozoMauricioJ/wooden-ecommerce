const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Middleware para analizar el cuerpo de las solicitudes (para POST, PUT, etc.)
app.use(express.json());

// Datos de prueba (simulando la base de datos)
const products = [
  {
    id: 1,
    name: 'ELES',
    price: 25.99,
    image: '/images/eles.jpg',
    description:
      'Juego de encastre de madera. Ideal para desarrollar la motricidad fina y la coordinación mano-ojo.',
    details:
      'Contiene 12 piezas de diferentes formas y colores. Fabricado con madera de pino y pinturas no tóxicas.',
  },
  {
    id: 2,
    name: 'Bloques Arco Iris',
    price: 39.99,
    image: '/images/bloques_arco_iris.jpg',
    description: 'Bloques de construcción de madera para estimular la imaginación.',
    details:
      'Incluye 36 bloques de diferentes tamaños y colores. Madera de haya y tintes naturales.',
  },
  {
    id: 3,
    name: 'Camionetas y Autitos',
    price: 29.99,
    image: '/images/camionetas_y_autitos.jpg',
    description: 'Vehículos de madera.',
    details: 'Set de 4 camionetas y autitos de madera.',
  },
  // ... Agrega más productos de tu catálogo
];

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