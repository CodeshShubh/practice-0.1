import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { UserModel } from "../model/userModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";


export const register = catchAsyncError(async(req, res, next)=>{

    const { name, email, password} = req.body;
    console.log(req.body);

    if(!name || !email || !password)
        return next(new ErrorHandler("Please Enter All Fildes", 400))

    let Email = await UserModel.findOne({email})

    if(Email) return next(new ErrorHandler("User Already Exist", 409))
     
   let user = new UserModel({
        name,
        email,
        password
    });

    await user.save();


    sendToken(res, user, "User SuccesFully Created", 201)

    
})


export const login = catchAsyncError(async(req, res, next)=>{
    const {email, password}= req.body;
   
    if(!email || !password)
       return next(new ErrorHandler("please enter all field", 400 ))
   
    const user = await UserModel.findOne({email}).select("+password");
   
    if(!user) return next(new ErrorHandler("Incorrect Email and password", 401));
   
    const isMatch = await user.compairPassword(password);
   
    if(!isMatch) 
       return next(new ErrorHandler("Incorrect Email or passowrd", 401));
   
    sendToken(res, user, `Welcome back, ${user.name}` , 200)
   
   })


   export const logout = catchAsyncError((req, res, next)=>{

    res.status(200).cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly:true,
        secure: true,
        sameSite: "none",
    }).json({
        success:true,
        message:"Logout Successfully"
    })

   })