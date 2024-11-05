
export async function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Producto 1", price: "$10", img: 'https://i.pinimg.com/550x/39/37/b8/3937b8f1e23316af9039ff95155856de.jpg', desc: "Con un diseño limpio y sin adornos innecesarios, este mueble refleja la esencia del estilo minimalista, donde la forma sigue a la función. Fabricado con una estructura de madera de alta calidad, su acabado en blanco mate o negro mate aporta un toque de modernidad que se adapta a cualquier espacio.", stock: 10 },
        { id: 2, name: "Producto 2", price: "$20", img: 'https://www.aguilamuebles.cl/tienda/wp-content/uploads/2021/08/S1932-2-1-600x600.png', desc:"El escritorio cuenta con un sistema de gestión de cables que ayuda a mantener el espacio de trabajo organizado y libre de desorden, asegurando que los cables no interfieran con la experiencia de juego. Las patas ajustables garantizan estabilidad en cualquier superficie, mientras que el diseño minimalista proporciona suficiente espacio para el movimiento y la concentración.", stock: 5 },
        { id: 3, name: "Producto 3", price: "$30", img: 'https://imcesa.com.pe/wp-content/uploads/2023/09/muebles-en-lima-de-sala-1-scaled.webp', desc:"Este encantador sillón turquesa es una pieza central que irradia frescura y modernidad en cualquier habitación. Su diseño contemporáneo presenta líneas limpias y una estructura elegante que se adapta perfectamente a una variedad de estilos decorativos, desde minimalista hasta bohemio.", stock: 8 },
        { id: 4, name: "Producto 4", price: "$40", img: 'https://pegasum.cl/wp-content/uploads/2022/02/cru-nr2-600x900.jpg', desc: "Fabricada con materiales de alta calidad, incluye un revestimiento de cuero sintético resistente al desgaste, disponible en una variedad de colores vibrantes y elegantes detalles en costura. Los cojines de espuma viscoelástica garantizan una experiencia de asiento cómoda y adaptable", stock: 3 },
        { id: 5, name: "Producto 5", price: "$50", img: 'https://interimobel.mx/cdn/shop/products/ARMARIOCHILE.png?v=1650485010&width=2048', desc: "Este elegante armario está diseñado para aportar funcionalidad y estilo a cualquier espacio. Con un acabado de madera de roble claro, su estructura combina la calidez de los tonos naturales con un diseño moderno y minimalista. Sus dimensiones son generosas, proporcionando amplio espacio de almacenamiento con una combinación de estantes ajustables", stock: 12 },
      ]);
    }, 2000); 
  });
}

  
