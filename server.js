require('dotenv').config({path : "./config.env"});
const express = require('express');

const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
}
const PORT = process.env.PORT || 5000;

connectDB();
// middleware to parse json 
app.use(express.json());
app.use(cors({}));

app.use("/api/v1",require("./routes/index"))

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});