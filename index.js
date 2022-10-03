const express=require("express");
const app=express();


const PORT=5000;

app.get("/",(req,res)=>{
    res.send("server is running");
})

app.listen(5000,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})