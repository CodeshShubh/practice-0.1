import mongoose from "mongoose";
import jwt from "jsonwebtoken";


 const schema = new mongoose.Schema({
   name:{
    type:String,
    required:[true, "Please fill the Name"]
   },
   email:{
    type:String,
    required:[true, "Please fill the Email"],
    unique:true,
   },
   password:{
    type:String,
    required:[true, "Please fill the password"],
    minlength:[6, "password should be in 6 digit"],
   }
   
});


schema.methods.getJWTToken = function(){
  return jwt.sign({_id:this._id}, process.env.SECRET_KEY, {
    expiresIn:"15d",
  })
}



export const UserModel = mongoose.model("UserModel", schema)




