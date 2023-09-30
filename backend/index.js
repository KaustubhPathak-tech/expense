const express=require("express");
const cors=require("cors");
const morgan=require("morgan");
const dotenv=require("dotenv");
const colors=require("colors");
const connectDB = require("./config/connectDB");
// const path=require("path");

//config dot env file
dotenv.config();

//db calll
connectDB();

//rest objects
const app=express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


//static files
// app.use(express.static(path.join(__dirname,"./clients/build")));

//routes
//user routes
app.use("/api/v1/users",require("./routes/userRoute"));

//transaction routes
app.use("/api/v1/transactions",require("./routes/transactionRoutes"));

// app.get("*",function(req,res){
//     res.sendFile(path.join(__dirname,"./clients/build/index.html"));
// })
//port
const PORT=5000 || process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})

