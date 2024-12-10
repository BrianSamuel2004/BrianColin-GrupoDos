export async function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Producto 1", price: 10, desc: "Con un diseño limpio y sin adornos innecesarios...", stock:  10, category: "Minimalista" },
        { id: 2, name: "Producto 2", price: 20, desc: "El escritorio cuenta con un sistema de gestión de cables...", stock: 5, category: "Gamer" },
        { id: 3, name: "Producto 3", price: 30, desc: "Este encantador sillón turquesa es una pieza central...", stock: 8, category: "Contemporáneo" },
        { id: 4, name: "Producto 4", price: 40, desc: "Fabricada con materiales de alta calidad...", stock: 3, category: "Gamer" },
        { id: 5, name: "Producto 5", price: 50 , desc: "Este elegante armario está diseñado para aportar funcionalidad...", stock: 12, category: "Moderno" },
      ]);
    }, 2000); 
  });
}
