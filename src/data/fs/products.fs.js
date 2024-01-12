import fs from "fs";
import crypto from "crypto";

class ProductManager {
  static #products = [];

  constructor() {
    this.path = "./src/data/fs/files/products.json";
    this.conf = "utf-8";
    this.init();
  }

  init() {
    const exist = fs.existsSync(this.path);
    if (exist) {
      ProductManager.#products = JSON.parse(
        fs.readFileSync(this.path, this.conf)
      );
    } else {
      fs.writeFileSync(this.path, JSON.stringify([], null, 2));
    }
  }

  create(data) {
    try {
      
      const newProduct = {
        id: crypto.randomBytes(12).toString("hex"),
        title: data.title,
        photo: data.photo,
        price: data.price,
        stock: data.stock,
      };

      ProductManager.#products.push(newProduct);

      fs.writeFileSync(
        this.path,
        JSON.stringify(ProductManager.#products, null, 2)
      );
      return "Producto creado";
    } catch (error) {
      return error.message;
    }
  }

  read() {
    try {
      if (ProductManager.#products.length === 0) {
        throw new Error("No se encontraron productos!");
      } else {
        return ProductManager.#products;
      }
    } catch (error) {
      return error.message;
    }
  }

  readOne(id) {
    try {
      const product = ProductManager.#products.find(
        (product) => product.id === id
      );
      if (!product) {
        throw new Error("No se encontro producto!");
      } else {
        return product;
      }
    } catch (error) {
      return error.message;
    }
  }

  destroy(id){
    try {
      const product = ProductManager.#products.find(
        (product) => product.id === id
      );
      if (!product) {
        throw new Error("No se encontro producto!");
      } else {
        const index = ProductManager.#products.indexOf(product);
        ProductManager.#products.splice(index, 1);
        fs.writeFileSync(
          this.path,
          JSON.stringify(ProductManager.#products, null, 2)
        );
        return "Producto eliminado";
      }
    } catch (error) {
      return error.message;
    }
  }

  update(id,data){
    try {
     const one= this.readOne(id);

      if(!one){
        throw new Error("No se encontro producto!")
      }else{
          one.title= data.title || one.title,
          one.photo= data.photo || one.photo,
          one.price= data.price || one.price,
          one.stock= data.stock || one.stock,

        fs.writeFileSync(
          this.path,
          JSON.stringify(ProductManager.#products, null, 2)
        );

        return "producto actualizada"
      }

    } catch (error) {
      return error.message;
    }
  }
}

const ManagerProduct = new ProductManager();
export default ManagerProduct;
