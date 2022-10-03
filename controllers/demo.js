exports.getDemo = async (req,res,next)=>{
    try{
        res.status(200).send("Welcome to Demo route for backend");
    }catch(e){
        res.status(404).send("some error occured");
    }
}