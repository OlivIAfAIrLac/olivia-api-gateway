import mongoose from "mongoose";
require('dotenv').config()

const uri = process.env.DB_URI ? process.env.DB_URI : ''

export const db = async () => {
    try {
        await mongoose.connect(uri);
    } catch (error) {
        console.error(error);
    }
}