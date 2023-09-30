const mongoose=require("mongoose");
const colors=require("colors");
const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://tani:tani1234@cluster0.buqbqui.mongodb.net/expense-management")
        console.log(`server running on ${mongoose.connection.host}`.bgCyan.white)

    }catch(error){
        console.log(error);
    }
}
module.exports=connectDB;