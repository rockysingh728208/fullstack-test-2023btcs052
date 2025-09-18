import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoute.js';
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/user",userRouter)
app.get('/', (req, res) => {
  res.send('API is running');
});

connectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});