import mongoose from "mongoose";

const connectMongoDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connect to MongoDB");
    }catch (error){
        console.log("Error connect DB",error.message);
    }
}

export default connectMongoDB;