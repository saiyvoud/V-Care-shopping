
const bcrypt = require('bcryptjs');
const Signup = require('../models/Login');
//create new user or sign up
exports.singUpNewUser = (req,res,next)=>{
    Signup.find({name:req.body.name,call:req.body.call,password:bcrypt.hash,comfirm:bcrypt.hash})
    .exec()
    .then(user=>{
        if(user.length>=1){
            return res.status(409).json({
                messsage:"Call exists"
            });
        }else{
             bcrypt.hash(req.body.password,10,(err,hash)=>{
                   if(err){
                       return res.status(500).json({
                           error: err
                       });
                   }else{
                       const signup = new Signup({
                       
                           name:req.body.name,
                           call:req.body.call,
                           password:hash,
                           comfirm:hash,
                       });
                       signup.save()
                       .then(result=>{
                           console.log(result);
                           res.status(201).json({
                               messsage:"User created successfuly...!..."
                           });
                       })
                       .catch(err =>{
                           console.log(err);
                           res.status(500).json({
                               error:err
                           });
                       })
                   }
             })
        }
    })
}
