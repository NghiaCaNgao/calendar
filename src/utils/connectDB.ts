import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0:27017/student");

export default connectMongo;