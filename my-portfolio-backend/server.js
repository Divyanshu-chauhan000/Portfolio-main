//external module
const express =  require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoutes');
const contactRouter = require('./routes/Contact');
require('dotenv').config();

// instance 
const app =  express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

connectDB();
// middlewares and Routes

app.use("/test" , userRouter);
app.use("/" , contactRouter);

//Port
const PORT = 3000;
app.listen((PORT) , () =>{
  console.log(`Server is running on port http://localhost:${PORT}`)
})