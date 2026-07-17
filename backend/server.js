import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodrouter from './routes/foodroute.js';


//app config
const app = express();
const port = process.env.PORT || 8000;

mongoose.connection.on('connected', () => console.log('Mongoose connected'));
mongoose.connection.on('error', (err) => console.error('Mongoose connection error:', err));



//middlewares
app.use(express.json());
app.use(cors());
//db connection
connectDB();
import mongoose from "mongoose";

console.log("Mongo State:", mongoose.connection.readyState);

//api endpoints
app.use('/api/food', foodrouter);
app.use('/images', express.static('uploads')); // Serve static files from the 'uploads' directory

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});