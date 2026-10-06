import mongoose from "mongoose";


export const connectDB = async () => {
    console.log("Mongo URI:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI).then(()=>console.log('MongoDB connected')).catch((err)=>console.log("DB connection")); 
    
}