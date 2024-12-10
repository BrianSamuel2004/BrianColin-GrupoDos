import React from "react";
import useCartStore from "../../Store/CartStore";

const Cart = () => {
  const { cart, removeFromCart, addToCart, clearCart } = useCartStore();

  const handleIncrease = (product) => {
    addToCart({ ...product, quantity: 1 });
  };

  const handleDecrease = (product) => {
    if (product.quantity > 1) {
      removeFromCart(product.id);
      addToCart({ ...product, quantity: product.quantity - 1 });
    } else {
      removeFromCart(product.id);
    }
  };

  if (cart.length === 0) {
    // Mensaje centrado si el carrito está vacío
    return (
      <div className="flex items-center justify-center min-h-screen text-center bg-[#0b0d0f]">
        <h2 className="text-3xl text-[#e6e8eb] font-bold">
          Tu carrito está vacío
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#e6e8eb] text-center mb-8">Carrito</h1>

      <div className="space-y-4">
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between bg-[#131518] p-4 rounded-lg border border-[rgba(255,255,255,0.1)]"
          >
            <div className="flex items-center space-x-4">
              <img
                src={product.img}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-[#e6e8eb]">
                  {product.name}
                </h3>
                <p className="text-[#aebbc9]">Precio: ${product.price}</p>
                <p className="text-[#aebbc9]">Cantidad: {product.quantity}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleDecrease(product)}
                className="px-4 py-2 bg-[#3a4c61] text-white rounded-md hover:bg-[#2e3c4d]"
              >
                -
              </button>
              <button
                onClick={() => handleIncrease(product)}
                className="px-4 py-2 bg-[#3a4c61] text-white rounded-md hover:bg-[#2e3c4d]"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(product.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-8">
        <button
          onClick={clearCart}
          className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-500"
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
