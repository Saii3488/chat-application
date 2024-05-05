import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messages.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app,io,server } from "./socket/socket.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const PORT=process.env.PORT||5000
dotenv.config()
app.use(express.json())//to parse the incoming requests with json payload
app.use(cookieParser())
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.get("/",(req,res)=>{
    res.send("hello world sai")
})

server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});
