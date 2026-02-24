require("dotenv").config({path:"./.env"});
const { Socket } = require("dgram");
const app=require("./app")
const connectDB=require("./config/db");
const http=require("http");
const {Server}=require("socket.io");
const { log } = require("console");
const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
});
io.on("connection",(socket)=>{
    console.log("user connected",socket.id);
    socket.on("disconnect",()=>{
    console.log("User disconnected",socket.id)
    });
});
server.listen(process.env.PORT || 5000,()=>{
    console.log("server running at port 5000");
});