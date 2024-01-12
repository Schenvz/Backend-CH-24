import crypto from "crypto";

class ProductManager {
  static #products = [];
  constructor() {
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

      if (data.title && data.photo && data.price && data.stock) {
        ProductManager.#products.push(newProduct);
        return newProduct;
      } else {
        throw new Error(
          "Los campos title, photo, price, stock son obligatorias"
        );
      }
    } catch (error) {
      return error.message;
    }
  }

  read() {
    try {
      if(ProductManager.#products.length === 0){
        throw new Error("No se encontro ningun producto")
      }else{
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

      if(product){
        return product
      }else{
        throw new Error("No encontrado")
      }
    } catch (error) {
      return error.message
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

        const index = ProductManager.#products.indexOf(one);
          one.title= data.title || one.title,
          one.photo= data.photo || one.photo,
          one.price= data.price || one.price,
          one.stock= data.stock || one.stock,

          ProductManager.#products[index] = one;
          

        return "producto actualizada"
      }

    } catch (error) {
      return error.message;
    }
  }
}

const Manager = new ProductManager();

console.log(Manager.create({ photo: "https://picsum.photos/200", price: 100, stock: 10 })); 

console.log(Manager.read());
