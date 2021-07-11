const jwtToken = require("../jwtToken");
const adminModel = require("../models/admin");
const jwt = require('jsonwebtoken')

exports.registerData = async (req, res) => {
  const { email, name, password, confirmPassword } = req.body;
  const data = await adminModel.create({
    email,
    name,
    password,
    confirmPassword,
  });
  res.status(200).json({
    message: "received data from db",
    data,
  });
};

exports.restrictedTo = (...roles)=>{
  return (req,res,next)=>{
    if(!roles.includes(req.user.role)){
      res.status(200).json({
        msg:"must be a admin to post or delete this"
      })
    }
    next()
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(200).json({
      message: "email and password are required fields",
    });
  }
  const user = await adminModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(200).json({
      message: "user not found",
    });
  }
  // const checkPassword = await user.check(password);
  if (password !== user.password) {
    return res.status(200).json({
      message: "password mismatch",
    });
  }
  // res.status(200).json({
  //   message:"successfully logged in"
  // })

  jwtToken(200, user, res);
};
exports.protect = async (req,res,next)=>{
  const {yammuy_cookies}=req.cookies 
  if(!yammuy_cookies){
    return res.status(200).json({
      msg:"need to login first"
    })
  }
 const decodeToken = await jwt.verify(yammuy_cookies,process.env.key)
 if(!decodeToken.id){
   return res.status(200).json({
     msg:"not valid user"
   })
 }
 const user = await adminModel.findById(decodeToken.id)
 if(!user){
   return res.status(200).json({
     msg:"user not found"
   })
 }
 req.user= user
 next()
}

exports.logout = (req,res)=>{
  res.status(200).cookie("yammuy_cookies", null,{expires:new Date(Date.now())}).json({
    msg:"logged out!!! come back soon!!! we will miss you!!!"
  })

}