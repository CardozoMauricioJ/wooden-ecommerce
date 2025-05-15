import React from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  // Datos de prueba (reemplazar con datos del servidor)
  const products = [
    {
      id: 1,
      name: 'ELES',
      price: 25.99,
      image: '/images/eles.jpg',
      description: 'Juego de encastre de madera.'
    },
    {
      id: 2,
      name: 'Bloques Arco Iris',
      price: 39.99,
      image: '/images/bloques_arco_iris.jpg',
      description: 'Bloques de construcción de madera.'
    },
    {
      id: 3,
      name: 'Camionetas y Autitos',
      price: 29.99,
      image: '/images/camionetas_y_autitos.jpg',
      description: 'Vehículos de madera.'
    },
    // ... Agrega más productos de tu catálogo
  ];

  return (
    <div>
      <h2>Productos</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ objectFit: 'cover', height: '200px' }} // Ajusta la altura de la imagen
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Precio: ${product.price}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-primary mt-auto"
                >
                  Ver Detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;