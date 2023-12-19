const ProductManager = require('./ProductManager');
const manager = new ProductManager();

async function testProductManager() {
  await manager.addProduct({
    title: "Lapiz",
    description: "Un simple lápiz xd",
    price: 9,
    thumbnail: "lapiz2.jpg",
    code: "LP1001",
    stock: 1021,
  });

  const products = await manager.getAllProducts();
  console.log(products);
}

testProductManager();
