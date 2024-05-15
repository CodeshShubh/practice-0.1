import mongoose from "mongoose";


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

export const UserModel = mongoose.model("UserModel", schema)




