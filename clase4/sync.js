const fs = require("fs");

const ruta = "./tickets.cbs.json";
const datos = JSON.stringify(
  [{ title: "hp1" }, { title: "hp2", place: "showcase" }],
  null,
  2
);

// para crear un archivo de forma síncrona
fs.writeFileSync(ruta, datos);

let configuracion = "utf-8";

// para leer un archivo síncrona
const datosLeidos = fs.readFileSync(ruta, configuracion);
const datosParseados = JSON.parse(datosLeidos);
console.log(datosParseados);

// para verificar que un archivo existe de forma síncrona
const existeAntes = fs.existsSync(ruta);
console.log(existeAntes);

// para eliminar un archivo de forma síncrona
fs.unlinkSync(ruta);

// para verificar que un archivo exista de forma asíncrona
fs.exists(ruta, (existe) => {
  console.log(existe);
});
