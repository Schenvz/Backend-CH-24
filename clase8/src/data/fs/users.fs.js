const fs = require("fs").promises;
const GestorEventos = require("./data/memory/events.memory.js");

class GestorUsuarios {
  constructor(path) {
    this.path = path; // Ruta donde se guardarán los usuarios
    this.usuarios = []; // Array para almacenar los usuarios
    this.inicializar(); // Método para inicializar la lista de usuarios desde el archivo
  }

  // Inicializa el array de usuarios desde el archivo
  inicializar() {
    try {
      const existe = fs.existsSync(this.path);
      if (!existe) {
        const datos = JSON.stringify([], null, 2);
        fs.writeFileSync(this.path, datos);
      } else {
        this.usuarios = JSON.parse(fs.readFileSync(this.path, "utf-8"));
      }
    } catch (error) {
      console.error("Error al inicializar usuarios:", error.message);
    }
  }

  // Crea un nuevo usuario
  async crear(datos) {
    try {
      if (!datos.nombre || !datos.correo) {
        throw new Error("Nombre y correo son obligatorios");
      }
      const usuario = {
        id: GestorEventos.generarIdUnico(), // Generando un ID único desde el gestor de eventos
        nombre: datos.nombre,
        correo: datos.correo,
      };
      this.usuarios.push(usuario);
      await fs.writeFile(this.path, JSON.stringify(this.usuarios, null, 2));
      console.log("Usuario creado:", usuario.id);
      return usuario.id;
    } catch (error) {
      console.error("Error al crear usuario:", error.message);
      return null;
    }
  }

  // Lee un usuario por su ID
  leerUno(id) {
    try {
      const usuario = this.usuarios.find((cada) => cada.id === id);
      if (!usuario) {
        throw new Error(`No existe ningún usuario con id=${id}`);
      }
      console.log("Usuario encontrado:", usuario);
      return usuario;
    } catch (error) {
      console.error("Error al leer usuario:", error.message);
      return null;
    }
  }
}

export default GestorUsuarios;