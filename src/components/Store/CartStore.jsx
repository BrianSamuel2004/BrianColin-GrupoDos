import { create } from "zustand";

const useCartStore = create((set) => ({
  products: [],
  cart: [],

  initializeProducts: (productList) => {
    const initializedProducts = productList.map((product) => ({
      ...product,
      originalStock: product.stock, // Guardamos el stock original
    }));
    set({ products: initializedProducts });

    // Guardar en localStorage
    localStorage.setItem("products", JSON.stringify(initializedProducts));
  },

  addToCart: (product, quantity) =>
    set((state) => {
      const updatedProducts = state.products.map((p) =>
        p.id === product.id
          ? { ...p, stock: p.stock - quantity }
          : p
      );

      const existingProduct = state.cart.find((item) => item.id === product.id);
      const updatedCart = existingProduct
        ? state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [...state.cart, { ...product, quantity }];

      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return { products: updatedProducts, cart: updatedCart };
    }),

  removeFromCart: (productId, quantity) =>
    set((state) => {
      const updatedProducts = state.products.map((p) =>
        p.id === productId
          ? { ...p, stock: p.stock + quantity }
          : p
      );

      const updatedCart = state.cart.filter((item) => item.id !== productId);

      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return { products: updatedProducts, cart: updatedCart };
    }),

  clearCart: () =>
    set((state) => {
      const restoredProducts = state.products.map((p) => ({
        ...p,
        stock: p.originalStock, // Restaurar el stock original
      }));

      localStorage.setItem("products", JSON.stringify(restoredProducts));
      return { cart: [], products: restoredProducts };
    }),
}));

export default useCartStore;
