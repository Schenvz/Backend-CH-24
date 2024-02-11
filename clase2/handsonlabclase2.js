class EventManager {
    // Propiedades de la clase
    static events = [];
    static #perGain = 0.3;
    static #totalGain = 0;
  
    constructor(data) {
      this.id =
        EventManager.events.length === 0
          ? 1
          : EventManager.events[EventManager.events.length - 1].id + 1;
      this.name = data.name;
      this.place = data.place;
      this.price = data.price || 10;
      this.capacity = data.capacity || 50;
      this.date = data.date || new Date();
      EventManager.events.push(this);
    }
  
    static create(data) {
      const event = {
        id:
          EventManager.events.length === 0
            ? 1
            : EventManager.events[EventManager.events.length - 1].id + 1,
        name: data.name,
        place: data.place,
        price: data.price || 10,
        capacity: data.capacity || 50,
        date: data.date || new Date(),
      };
      EventManager.events.push(event);
    }
  
    static read() {
      return EventManager.events;
    }
  }
  
  // Crear instancias de EventManager
  const events = new EventManager({
    name: "Harry Potter 1",
    place: "showcase",
  });
  
  // Usar el método estático create para agregar eventos
  EventManager.create({
    name: "Harry Potter 2",
    place: "showcase",
  });
  
  EventManager.create({
    name: "Harry Potter 3",
    place: "showcase",
  });
  
  EventManager.create({
    name: "Harry Potter 4",
    place: "showcase",
  });
  
  // Mostrar eventos en la consola
  console.log(EventManager.read());
  