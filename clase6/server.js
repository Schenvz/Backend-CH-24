import express from "express"

const server = express()

const PORT = 8080;
const ready = ()=>console.log("server ready on port" + PORT)

//middlewares: son funciones
server.use(express.urlencoded({ extended: true}))
//obliga al servidor a utilizar la función encargada de recibir url complejas
//me habilita el manejo de queries (consultas) y params (parámetros)

server.listen(PORT, ready);

//endpoints
const ruta ="/";
const funcionQueVaAleer = (requerimientos, respuesta) => {
    //requerimientos: objeto con todas las necesidades de la función
    //respuesta: objeto a enviar al cliente
    return respuesta.status(200).send("MY FIRST SERVER");
};
server.get(ruta, funcionQueVaAleer);
//defino una ruta de tipo GET
//con la palabra "/"
//para que ejecute la funcion definida
//que en ese caso SIMPLEMENTE envia ese string a la vista

const ruta2 = "/events"
const funcion2 = (req,res)=> {
    const all = ["aca","deberian","estar","todos","los","eventos"]
    return res.status(200).send(all)
    //pot ahora usemos send() para enviar cadenas de texto
}
server.get(ruta2,funcion2)

const ruta3 = "/api/users"
//endpoints en ingles, en plural, y en lo posible con MINUSCULAS!!!!
//endpoints representativos del recurso que van a operar
const funcion3 = (req,res)=> {
    const all = ["array","de","usuarios","del","archivo"]
    return res.status(200).json(all)
    //usemos json() para enviar objetos,arrays, etc
};

server.get(ruta3,funcion3)
//cuando el cliente me llama
//con la ruta3 se ejecuta la funcion3

const rutaConParans = "api/products/:pid"
//con la ruta tiene el parametro pid
//debido a los :
const cbParans1 = (req, res) => {
    const { pid } = req.parans;
    return res.status(200).send("el id del producto a filtrar es: "+pid);
};
server.get(rutaConParans, cbParans1);

const rutaConParans2 = "api/products/:title/:category/:price/:stock";
//definí un endpoint con 4 params (NO hay límites!!!)
const cbParams2 = (req, res) => {
  const { title, category, price, stock } = req.params;
  return res.status(200).json({
      title,
      category,
  });
};
server.get(rutaConParans2, cbParans2);



