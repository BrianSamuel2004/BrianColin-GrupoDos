import React, { useState } from "react";

const ItemModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-[#0b0d0f] p-6 rounded-lg max-w-[800px] w-full flex flex-col sm:flex-row border-[1px] border-[rgba(255,255,255,0.1)]">
        {/* Imagen a la izquierda (o arriba en pantallas pequeñas) */}
        <img src={product.img} alt={product.name} className="w-full sm:w-64 h-64 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6" />

        {/* Información del producto a la derecha */}
        <div className="flex flex-col justify-center text-[#e6e8eb] w-full">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-[#aebbc9]">{product.desc}</p>
          <p className="text-xl text-[#aebbc9] mb-4">Precio: {product.price}</p>
      
          
          {/* Sección de cantidad */}
          <div className="flex items-center mb-6">
            <button
              onClick={decreaseQuantity}
              className="px-4 py-2 bg-[#3a4c61] text-white rounded-l-md hover:bg-[#2e3c4d]"
            >
              -
            </button>
            <span className="px-4 py-2 bg-[#1e242d] text-white">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-4 py-2 bg-[#3a4c61] text-white rounded-r-md hover:bg-[#2e3c4d]"
            >
              +
            </button>
          </div>

          {/* Botones: Cerrar y Añadir al carrito */}
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-[#5f81a9] text-white rounded-md hover:bg-[#5f81a9]/80"
            >
              Cerrar
            </button>
            <button
              onClick={() => alert(`Añadido ${quantity} al carrito`)}
              className="px-6 py-3 bg-[#3a4c61] text-white rounded-md hover:bg-[#2e3c4d]"
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
