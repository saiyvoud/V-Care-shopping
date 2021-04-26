const app = require('./app')
const connectDB = require('./database/connection');

connectDB();
const Port = process.env.Port||3000;
app.listen(Port,console.log('server on Localhost',Port));
