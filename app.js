const express = require('express');
const app = express();
const userRoutes = require('./routes/signup');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//

app.use("/",userRoutes);


app.use("/",(req,res)=>{
    res.send("Hello");
});

app.use((req,res,next)=>{
res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Header","Origin,X-Requested-With,Content-Type,Accep,Authorization");
if(req.method === "OPTIONS"){
    res.header("Access-Control-Allow-Method","PUT,POST,PATH,DELETE,GET");
    return res.status(200).json({});
}
})
module.exports = app;