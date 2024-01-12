import { Router } from "express"
import ManagerUser  from "../../data/fs/user.fs.js"
import propsUser from "../../middlewares/propsUser.js";
const usersRouter = Router()

usersRouter.post("/", propsUser, async (req, res, next) => {
    try {
      const data = req.body;
      const response = await ManagerUser.create(data);
      
        return res.json({
          statusCode: 201,
          response,
        });
      
    } catch (error) {
        return next(error);
    }
  });

  usersRouter.get ('/', async (req,res, next)=>{
    try {
        const users = await ManagerUser.read()
        if(users){
            return res.json({
                statusCode: 200,
                response: users
            })
        }else{
            return res.json({
                statusCode: 404,
                message: "Not found!"
            })
        }
        
    } catch (error) {
        return next(error);
    }
    
})

usersRouter.get ('/:uid', async (req,res, next)=>{
    try {
        const {uid} = req.params
        const user =await ManagerUser.readOne(uid)
        if(user){
            return res.json({
                statusCode: 200,
                response: user
            })
        }else{
            return res.json({
                statusCode: 404,
                message: "Not found!"
            })
        }
        
    } catch (error) {
        return next(error);
    }
    
})

usersRouter.put('/:uid', async (req,res, next)=>{
    try {
        const {uid} = req.params
        const data = req.body;
        const user = await ManagerUser.update(uid,data)
        if(user){
            return res.json({
                statusCode: 200,
                response: user
            })
        }else{
            return res.json({
                statusCode: 404,
                message: "Not found!"
            })
        }
        
    } catch (error) {
        return next(error);
    }
})

usersRouter.delete('/:uid', async (req,res, next)=>{
    try {
        const {uid} = req.params
        const user = await ManagerUser.destroy(uid)
        if(user){
            return res.json({
                statusCode: 200,
                response: user
            })
        }else{
            return res.json({
                statusCode: 404,
                message: "Not found!"
            })
        }
        
    } catch (error) {
        return next(error);
    }
})


export default usersRouter