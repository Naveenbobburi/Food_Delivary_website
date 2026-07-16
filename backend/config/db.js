import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://naveenbobburi1_db_user:naveen2005@cluster0.bqayx4b.mongodb.net/?appName=Cluster0').then(()=>console.log('MongoDB connected')).catch((err)=>console.log("DB connection")); 
}