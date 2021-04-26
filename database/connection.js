const mongoose = require('mongoose')
const URI = "mongodb+srv://DeeDee:DeeDee@cluster0.rvclg.mongodb.net/delivery?retryWrites=true&w=majority";
const connectDB = async()=>{
    await mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true, 
        useCreateIndex:true
});
console.log('Connection establishe successfull');
};
module.exports =connectDB;