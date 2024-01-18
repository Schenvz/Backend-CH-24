const fs = require("fs").promises;
const crypto = require("crypto");

class GestorUsuarios {
  constructor(path = "./fs/files/users.json") {
    this.path = path;
    this.usuarios = [];
    this.inicializar();
  }

  // Inicializa la lista de usuarios desde el archivo
  async inicializar() {
    try {
      const data = await fs.readFile(this.path, "utf8");
      this.usuarios = JSON.parse(data);
    } catch (error) {
      console.error("Error al inicializar usuarios:", error);
    }
  }

  // Guarda los usuarios en el archivo
  async guardarUsuariosEnArchivo() {
    try {
      await fs.writeFile(this.path, JSON.stringify(this.usuarios, null, 2));
      console.log("Usuarios guardados con éxito");
    } catch (error) {
      console.error("Error guardando usuarios:", error);
    }
  }

  // Crea un nuevo usuario
  async crearUsuario(datosUsuario) {
    try {
      if (!datosUsuario.nombre || !datosUsuario.correo) {
        throw new Error("El nombre y el correo son obligatorios");
      }
      const usuario = {
        id: crypto.randomBytes(12).toString("hex"),
        nombre: datosUsuario.nombre,
        correo: datosUsuario.correo,
      };
      this.usuarios.push(usuario);
      await this.guardarUsuariosEnArchivo();
      console.log("Usuario creado:", usuario.id);
      return usuario.id;
    } catch (error) {
      console.error("Error al crear usuario:", error.message);
      return null;
    }
  }

  // Obtiene un usuario por su ID
  obtenerUsuarioPorId(id) {
    const usuario = this.usuarios.find((u) => u.id === id);
    if (!usuario) {
      console.error(`No existe ningún usuario con ID: ${id}`);
      return null;
    }
    return usuario;
  }

  // Actualiza un usuario por su ID
  async actualizarUsuario(id, datosActualizados) {
    const indiceUsuario = this.usuarios.findIndex((u) => u.id === id);
    if (indiceUsuario !== -1) {
      this.usuarios[indiceUsuario] = {
        ...this.usuarios[indiceUsuario],
        ...datosActualizados,
      };
      await this.guardarUsuariosEnArchivo();
      return this.usuarios[indiceUsuario];
    }
    return null;
  }

  // Elimina un usuario por su ID
  async eliminarUsuario(id) {
    this.usuarios = this.usuarios.filter((u) => u.id !== id);
    await this.guardarUsuariosEnArchivo();
  }
}

module.exports = GestorUsuarios;
