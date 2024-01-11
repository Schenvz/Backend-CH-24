const fs = require("fs").promises; // Importando el módulo 'fs' con promesas
const crypto = require("crypto"); // Importando el módulo 'crypto'

class GestorEventos {
  constructor(path) {
    this.path = path; // Ruta donde se guardarán los eventos
    this.eventos = []; // Array para almacenar los eventos
    this.inicializar(); // Método para inicializar la lista de eventos desde el archivo
  }

  // Inicializa el array de eventos desde el archivo
  async inicializar() {
    try {
      const data = await fs.readFile(this.path, "utf8");
      this.eventos = JSON.parse(data);
    } catch (error) {
      console.error("Error al inicializar eventos:", error);
    }
  }

  // Guarda los eventos en el archivo
  async guardarEventosEnArchivo() {
    try {
      await fs.writeFile(this.path, JSON.stringify(this.eventos, null, 2));
      console.log("Eventos guardados con éxito");
    } catch (error) {
      console.error("Error guardando eventos:", error);
    }
  }

  // Obtiene todos los eventos
  async obtenerTodosLosEventos() {
    try {
      const data = await fs.readFile(this.path, "utf8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error leyendo eventos:", error);
      return [];
    }
  }

  // Añade un nuevo evento
  async agregarEvento(datosEvento) {
    const evento = {
      id: crypto.randomBytes(12).toString("hex"), // Genera un ID único para el evento
      titulo: datosEvento.titulo || "Incendio",
      descripcion: datosEvento.descripcion || "Evento normal",
      fecha: datosEvento.fecha || "2002/05/27",
      ubicacion: datosEvento.ubicacion || "Estambul",
    };
    this.eventos.push(evento);
    await this.guardarEventosEnArchivo();
    return evento;
  }

  // Obtiene un evento por su ID
  async obtenerEventoPorId(id) {
    const eventos = await this.obtenerTodosLosEventos();
    return eventos.find((evento) => evento.id === id);
  }

  // Actualiza un evento por su ID con nuevos datos
  async actualizarEvento(id, datosActualizados) {
    const indiceEvento = this.eventos.findIndex((evento) => evento.id === id);
    if (indiceEvento !== -1) {
      this.eventos[indiceEvento] = {
        ...this.eventos[indiceEvento],
        ...datosActualizados,
      };
      await this.guardarEventosEnArchivo();
      return this.eventos[indiceEvento];
    }
    return null;
  }

  // Elimina un evento por su ID
  async eliminarEvento(id) {
    this.eventos = this.eventos.filter((evento) => evento.id !== id);
    await this.guardarEventosEnArchivo();
  }
}

module.exports = GestorEventos;
