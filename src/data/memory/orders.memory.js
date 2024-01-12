
import crypto from "crypto";

class OrdersManager {
  static #orders = [];

  constructor() {
    
  }

  create(data) {
    try {
      if (!data.pid || !data.uid || !data.quantity || !data.state) {
        throw new Error(
          "Los campos pid, uid, quantity, state son obligatorias"
        );
      }
      const newOrder = {
        id: crypto.randomBytes(12).toString("hex"),
        pid: data.pid,
        uid: data.uid,
        quantity: data.quantity,
        state: data.state,
      };

      OrdersManager.#orders.push(newOrder);

      return "orden creado";
    } catch (error) {
      return error.message;
    }
  }

  read() {
    try {
      if (OrdersManager.#orders.length === 0) {
        throw new Error("No se encontraron ordenes de compra!");
      } else {
        return OrdersManager.#orders;
      }
    } catch (error) {
      return error.message;
    }
  }

  readOne(uid) {
    try {
      const order = OrdersManager.#orders.filter((orders) => orders.uid === uid);
      if (!order) {
        throw new Error("No se encontro el orden de usuario!");
      } else {
        return order;
      }
    } catch (error) {
      return error.message;
    }
  }

  destroy(oid) {
    try {
      const order = OrdersManager.#orders.find((order) => order.id === oid);
      if (!order) {
        throw new Error("No se encontro orden!");
      } else {
        const index = OrdersManager.#orders.indexOf(order);
        OrdersManager.#orders.splice(index, 1);
        
        return "Orden eliminado";
      }
    } catch (error) {
      return error.message;
    }
  }

  update(oid,quantity,state) {
    try {
      const one = OrdersManager.#orders.find((order) => order.id === oid)
      if(!one){
        throw new Error("No se encontro orden!")
      }else{
        const index = OrdersManager.#orders.indexOf(one);
        one.quantity = quantity;
        one.state = state
        OrdersManager.#orders[index] = one
        return "Orden actualizada"
      }
      

    } catch (error) {
      return error.message;
    }
  }
}

const ManagerOrders = new OrdersManager();

