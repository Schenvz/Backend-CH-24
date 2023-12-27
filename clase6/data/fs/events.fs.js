const fs = require("fs");
const crypto = require("crypto");

class EventManager {
  constructor(path = "./events.db.json") {
    this.path = path;
    this.events = [];
  }

  setPath(path) {
    this.path = path;
  }

  async saveEventsToFile() {
    try {
      await fs.promises.writeFile(this.path, JSON.stringify(this.events, null, 2));
      console.log("Eventos guardados con éxito");
    } catch (error) {
      console.error("Error guardando eventos:", error);
    }
  }

  async getAllEvents() {
    try {
      const data = await fs.promises.readFile(this.path, "utf8");
      const events = JSON.parse(data);
      console.log(events);
      return events;
    } catch (error) {
      console.error("Error leyendo eventos:", error);
      return [];
    }
  }

  async addEvent(eventData) {
    const event = {
      id: this.events.length + 1,
      title: eventData.title || "Evento",
      description: eventData.description || "",
      date: eventData.date || "",
      location: eventData.location || "",
      // Puedes agregar más propiedades según las necesidades de tu aplicación.
    };
    this.events.push(event);
    await this.saveEventsToFile();
    return event;
  }

  async getEventById(id) {
    const events = await this.getAllEvents();
    return events.find((event) => event.id === id);
  }

  async updateEvent(id, updatedData) {
    const eventIndex = this.events.findIndex(
      (event) => event.id === id
    );
    if (eventIndex !== -1) {
      this.events[eventIndex] = {
        ...this.events[eventIndex],
        ...updatedData,
      };
      await this.saveEventsToFile();
      return this.events[eventIndex];
    }
    return null;
  }

  async deleteEvent(id) {
    this.events = this.events.filter((event) => event.id !== id);
    await this.saveEventsToFile();
  }
}

module.exports = EventManager;
