const fs = require("fs").promises;

class ProductManager {
  constructor(path = "./tickets.cbs.json") {
    this.path = path;
    this.products = [];
  }

  setPath(path) {
    this.path = path;
  }

  async saveProductsToFile() {
    try {
      await fs.writeFile(this.path, JSON.stringify(this.products, null, 2));
      console.log("Productos guardados con éxito");
    } catch (error) {
      console.error("Error guardando productos:", error);
    }
  }

  async getAllProducts() {
    try {
      const data = await fs.readFile(this.path, "utf8");
      const products = JSON.parse(data);
      console.log(products);
      return products;
    } catch (error) {
      console.error("Error leyendo productos:", error);
      return [];
    }
  }

  async addProduct(productData) {
    const product = {
      id: this.products.length + 1,
      title: productData.title || "Lapices",
      description: productData.description || "",
      price: productData.price || 0,
      thumbnail: productData.thumbnail || "",
      code: productData.code || "",
      stock: productData.stock || 0,
    };
    this.products.push(product);
    await this.saveProductsToFile();
    return product;
  }

  async getProductById(id) {
    const products = await this.getAllProducts();
    return products.find((product) => product.id === id);
  }

  async updateProduct(id, updatedData) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );
    if (productIndex !== -1) {
      this.products[productIndex] = {
        ...this.products[productIndex],
        ...updatedData,
      };
      await this.saveProductsToFile();
      return this.products[productIndex];
    }
    return null;
  }

  async deleteProduct(id) {
    this.products = this.products.filter((product) => product.id !== id);
    await this.saveProductsToFile();
  }
}

module.exports = ProductManager;
