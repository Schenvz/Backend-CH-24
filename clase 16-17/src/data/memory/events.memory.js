const fs = require("fs").promises;

class GestorEventos {
  constructor(path = "./events.db.json") {
    this.path = path;
    this.eventos = [];
    this.inicializar();
  }

  // Inicializa la lista de eventos desde el archivo
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
      const eventos = JSON.parse(data);
      console.log(eventos);
      return eventos;
    } catch (error) {
      console.error("Error leyendo eventos:", error);
      return [];
    }
  }

  // Añade un nuevo evento
  async agregarEvento(datosEvento) {
    const evento = {
      id: this.eventos.length + 1,
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

  // Actualiza un evento por su ID
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
