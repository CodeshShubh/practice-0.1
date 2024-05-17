export const catchAsyncError = (passedfunction)=>(req, res, next)=>{

   return  Promise.resolve(passedfunction(req, res, next)).catch(next)
}