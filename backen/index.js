import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});
connectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});