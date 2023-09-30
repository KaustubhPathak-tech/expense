const mongoose=require("mongoose");

//schema design
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]

    },
    email:{
        type:String,
        required:[true,"email required and should be unique"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"passowrd is required"]
    }

},{timestamps:true})

const userModel=mongoose.model("users",userSchema);
module.exports=userModel;