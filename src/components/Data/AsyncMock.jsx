export async function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Producto 1", price: 10, img: 'https://i.pinimg.com/550x/39/37/b8/3937b8f1e23316af9039ff95155856de.jpg', desc: "Con un diseño limpio y sin adornos innecesarios...", stock:  10, category: "Minimalista" },
        { id: 2, name: "Producto 2", price: 20, img: 'https://www.aguilamuebles.cl/tienda/wp-content/uploads/2021/08/S1932-2-1-600x600.png', desc: "El escritorio cuenta con un sistema de gestión de cables...", stock: 5, category: "Gamer" },
        { id: 3, name: "Producto 3", price: 30, img: 'https://imcesa.com.pe/wp-content/uploads/2023/09/muebles-en-lima-de-sala-1-scaled.webp', desc: "Este encantador sillón turquesa es una pieza central...", stock: 8, category: "Contemporáneo" },
        { id: 4, name: "Producto 4", price: 40, img: 'https://pegasum.cl/wp-content/uploads/2022/02/cru-nr2-600x900.jpg', desc: "Fabricada con materiales de alta calidad...", stock: 3, category: "Gamer" },
        { id: 5, name: "Producto 5", price: 50 , img: 'https://interimobel.mx/cdn/shop/products/ARMARIOCHILE.png?v=1650485010&width=2048', desc: "Este elegante armario está diseñado para aportar funcionalidad...", stock: 12, category: "Moderno" },
      ]);
    }, 2000); 
  });
}
