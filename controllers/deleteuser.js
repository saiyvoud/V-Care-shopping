
const User = require('../models/Login');
exports.deleteuser =  (req,res,next)=>{
    User.remove({_id:req.params.userId})
    .exec()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            message:"User delete"
        })
    })
    .catch(err =>{
        console.log(err)
        res.status(500).json({
            error:err
        });
    });
}