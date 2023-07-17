import mongoose from "mongoose";
require('dotenv').config()

const uri = process.env.DB_URI ? process.env.DB_URI : ''

export const db = async () => {
    try {
        await mongoose.connect(uri);
        console.log(`Database connected`);
        console.log(uri);
    } catch (error) {
        console.log('====================================');
        console.log(uri);
        console.log('====================================');
        console.error(error);
    }
}