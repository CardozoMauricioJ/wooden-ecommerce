import React from 'react';

function Home() {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Wooden - La Madera Hecha Juguete</h1>
        <p className="lead">
          Bienvenido a nuestro mundo de juguetes artesanales de madera, donde la
          calidad, la seguridad y la diversión se unen.
        </p>
        <hr className="my-4" />
        <p>
          Descubre nuestra colección de juguetes diseñados para estimular la
          imaginación y el desarrollo de los niños.
        </p>
        <a className="btn btn-primary btn-lg" href="/products" role="button">
          Ver Productos
        </a>
      </div>

    </div>
  );
}

export default Home;