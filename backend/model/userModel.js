import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"


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
schema.pre("save", async function(next){
  if(!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
})

schema.methods.compairPassword = async function(password){
 return await bcrypt.compare(password, this.password)
}




export const UserModel = mongoose.model("UserModel", schema)




