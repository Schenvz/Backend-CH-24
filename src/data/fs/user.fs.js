import fs from "fs";
import crypto from "crypto";

class UserManager{
    static #user=[]

    constructor() {
      this.path = "./src/data/fs/files/user.json";
      this.conf = "utf-8";
      this.init();
    }

    init() {
      const exist = fs.existsSync(this.path);
      if (exist) {
        UserManager.#user = JSON.parse(
          fs.readFileSync(this.path, this.conf)
        );
      } else {
        fs.writeFileSync(this.path, JSON.stringify([], null, 2));
      }
    }

    create(data){
        try {
          
          const newUser = {
            id: crypto.randomBytes(12).toString("hex"),
            name: data.name,
            photo: data.photo,
            email: data.email,
          };

          UserManager.#user.push(newUser);
          fs.writeFileSync(
            this.path,
            JSON.stringify(UserManager.#user, null, 2)
          );
          return "Usuario creado";
        } catch (error) {
          return error.message;
        }
    }

    read(){
      try {
        if (UserManager.#user.length === 0) {
          throw new Error("No se encontraron usuarios!");
        } else {
          return UserManager.#user;
        }
      } catch (error) {
        return error.message;
      }
    }

    readOne(id){
      try {
        const user =UserManager.#user.find(
          (user) => user.id === id
        );
        if (!user) {
          throw new Error("No se encontro usuario!");
        } else {
          return user;
        }
      } catch (error) {
        return error.message;
      }
    }

    destroy(id){
      try {
        const user = UserManager.#user.find(
          (product) => product.id === id
        );
        if (!user) {
          throw new Error("No se encontro usuario!");
        } else {
          const index = UserManager.#user.indexOf(user);
          UserManager.#user.splice(index, 1);
          fs.writeFileSync(
            this.path,
            JSON.stringify(UserManager.#user, null, 2)
          );
          return "Usuario eliminado";
        }
      } catch (error) {
        return error.message;
      }
    }

    update(id,data){
      try {
       const one= this.readOne(id);
  
        if(!one){
          throw new Error("No se encontro usuario!")
        }else{
          one.name= data.name || one.name,
          one.photo= data.photo || one.photo,
          one.email= data.email || one.email,
  
          fs.writeFileSync(
            this.path,
            JSON.stringify(UserManager.#user, null, 2)
          );
  
          return "usuario actualizada"
        }
  
      } catch (error) {
        return error.message;
      }
    }
  }


const ManagerUser = new UserManager();
export default ManagerUser