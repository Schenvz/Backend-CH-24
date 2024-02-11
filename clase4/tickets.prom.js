const fs = require("fs");

const ruta = "./events.prom.json";
const contenido = JSON.stringify([{ title: "hp1" }], null, 2);

fs.promises
  .writeFile(ruta, contenido)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

  let configuracion = "utf-8";
  fs.promises
    .readFile(ruta, configuracion)
    .then((resultado) => {
      if (resultado) {
        console.log(JSON.parse(resultado));
      } else {
        console.log("El archivo está vacío.");
      }
    })
    .catch((error) => console.log(error));

fs.promises
    .unlink(ruta)
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));
