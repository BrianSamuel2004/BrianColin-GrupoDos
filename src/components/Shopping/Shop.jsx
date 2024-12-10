import React, { useState, useEffect } from "react";
import ItemModal from "./ItemModal";
import { ClipLoader } from "react-spinners"; 
import { getProducts } from "../Data/AsyncMock";
import useCartStore from "../../Store/CartStore";

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { products, initializeProducts, addToCart } = useCartStore();
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  useEffect(() => {
    const fetchAndInitializeProducts = async () => {
      const storedProducts = JSON.parse(localStorage.getItem("products"));
      let fetchedProducts;

      if (storedProducts) {
        console.log("Productos del localStorage:", storedProducts);
        fetchedProducts = storedProducts;
      } else {
        fetchedProducts = await getProducts();
        console.log("Productos obtenidos de la API simulada:", fetchedProducts);
      }

      // Reemplazar imágenes según el ID del producto
      const updatedProducts = fetchedProducts.map((product) => {
        switch (product.id) {
          case 1:
            product.img = "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
            break;
          case 2:
            product.img = "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
            break;
          case 3:
            product.img = "https://images.pexels.com/photos/18920421/pexels-photo-18920421/free-photo-of-pared-muro-planta-mesa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
            break;
          case 4:
            product.img = "https://images.pexels.com/photos/7862491/pexels-photo-7862491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
            break;
          case 5:
            product.img = "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
            break;
          default:
            break;
        }
        return product;
      });

      initializeProducts(updatedProducts);
      setLoading(false);
    };

    fetchAndInitializeProducts();
  }, [initializeProducts]);

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product, quantity) => {
    if (product.stock >= quantity) {
      addToCart(product, quantity);
      setSelectedProduct(null); 
    } else {
      alert("Stock insuficiente");
    }
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#e6e8eb] text-center mb-8">Tienda</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => setSelectedCategory("Todos")}
          className="px-4 py-2 bg-[#5f81a9] text-white rounded-md hover:bg-[#5f81a9]/80 text-sm"
        >
          Todos
        </button>
        <button
          onClick={() => setSelectedCategory("Minimalista")}
          className="px-4 py-2 bg-[#5f81a9] text-white rounded-md hover:bg-[#5f81a9]/80 text-sm"
        >
          Minimalista
        </button>
        <button
          onClick={() => setSelectedCategory("Gamer")}
          className="px-4 py-2 bg-[#5f81a9] text-white rounded-md hover:bg-[#5f81a9]/80 text-sm"
        >
          Gamer
        </button>
        <button
          onClick={() => setSelectedCategory("Contemporáneo")}
          className="px-4 py-2 bg-[#5f81a9] text-white rounded-md hover:bg-[#5f81a9]/80 text-sm"
        >
          Contemporáneo
        </button>
        <button
          onClick={() => setSelectedCategory("Moderno")}
          className="px-4 py-2 bg-[#5f81a9] text-white rounded-md hover:bg-[#5f81a9]/80 text-sm"
        >
          Moderno
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <ClipLoader color="#5f81a9" size={50} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#131518] rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4 w-full sm:w-[280px]"
            >
              <img
                src={product.img}
                alt={product.name}
                className="h-32 sm:h-40 w-full object-cover mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#e6e8eb] text-center">
                {product.name}
              </h3>
              <p className="text-sm sm:text-base text-[#aebbc9] text-center">
                ${product.price}
              </p>
              <p className="text-sm sm:text-base text-[#aebbc9] text-center">
                Stock: {product.stock}
              </p>
              <button
                onClick={() => handleBuyClick(product)}
                className="w-full mt-4 px-4 py-2 bg-[#5f81a9] text-white rounded-md hover:bg-[#5f81a9]/80 text-sm sm:text-base"
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedProduct && (
        <ItemModal
          product={selectedProduct}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default Shop;
