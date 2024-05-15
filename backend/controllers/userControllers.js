import { UserModel } from "../model/userModel.js";


export const register = async(req, res, next)=>{

    const { name, email, password} = req.body;

    if(!name || !email || !password)
        return next("Please Enter All Fildes", 400)

    let Email = await UserModel.findOne({email})

    if(Email) return next("User Already Exist", 409)
     
   let user = await UserModel.create({
        name,
        email,
        password
    })


    res.status(200).json({
        success:true,
        user,
    })

    
}