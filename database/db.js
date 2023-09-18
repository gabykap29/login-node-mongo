import mongoose from "mongoose";

const MONGODBURL = 'mongodb://127.0.0.1:27017/test';


export const connectDB = async ()=>{
    try {
        await mongoose.connect(MONGODBURL);
        console.log('base de datos conectada!');
    } catch (error) {
        console.log('error al conectar la base de datos ',error);
    }
};

