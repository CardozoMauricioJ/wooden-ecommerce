import React, { useState } from 'react';

function Cart() {
  // Datos de prueba del carrito (reemplazar con la lógica real del carrito)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'ELES', price: 25.99, quantity: 2 },
    { id: 2, name: 'Bloques Arco Iris', price: 39.99, quantity: 1 },
  ]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="form-control"
                    />
                  </td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Total: ${totalPrice.toFixed(2)}</h4>
          <button className="btn btn-success">Finalizar Compra</button>
        </div>
      )}
    </div>
  );
}

export default Cart;