class ProductManager {
  static #products = [];

  constructor() {
    this.products = [];
  }

  addProduct(productData) {
    const product = {
      id: this.products.length + 1,
      title: productData.title || "Lapices",
      photo: productData.photo || "https://i.pdata:image/2Q==ravatar.cc/300",
      price: productData.price || 10,
      stock: productData.stock || 203,
    };

    this.products.push(product);
    ProductManager.#products.push(product);
    return product;
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find((product) => product.id === id);
  }

  updateProduct(id, updatedData) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );

    if (productIndex !== -1) {
      this.products[productIndex] = {
        ...this.products[productIndex],
        ...updatedData,
      };
      return this.products[productIndex];
    }

    return null; // Indica que no se encontró el producto con el ID especificado
  }

  deleteProduct(id) {
    this.products = this.products.filter((product) => product.id !== id);
    ProductManager.#products = ProductManager.#products.filter(
      (product) => product.id !== id
    );
  }
}

// Ejemplo de uso
const productManager = new ProductManager();

productManager.addProduct({
  title: "Lapices",
  photo: "https://i.pdata:image/2Q==ravatar.cc/300",
  price: 11,
  stock: 287,
});

productManager.addProduct({
  title: "Hojas de papel",
  photo: "https://i.pdata:image/2Q==ravatar.cc/300",
  price: 5,
  stock: 3000,
});

console.log("Todos los productos:", productManager.getAllProducts());

const productId = 2;
console.log(
  `Producto con ID ${productId}:`,
  productManager.getProductById(productId)
);

const updatedData = { price: 7, stock: 2500 };
console.log(
  `Producto actualizado:`,
  productManager.updateProduct(productId, updatedData)
);

console.log(
  "Productos después de la actualización:",
  productManager.getAllProducts()
);

productManager.deleteProduct(productId);
console.log(
  "Productos después de la eliminación:",
  productManager.getAllProducts()
);
