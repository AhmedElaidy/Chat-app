import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import messageRoutes from "./routes/message.routes";
import connectToMongoDB from "./db/connectToMongoDB";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// app.get("/", (req: any, res: any) => {
//   res.send("Hello World!");
// });

app.listen(PORT, () => {
  connectToMongoDB(), console.log(`app listening on port ${PORT}`);
});
