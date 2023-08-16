import mongoose from "mongoose";
require('dotenv').config()

// const uri = process.env.DB_URI ? process.env.DB_URI : ''
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@oliviacluster.w2lhg7r.mongodb.net/?retryWrites=true&w=majority`

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