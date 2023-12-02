import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  await mongoose.connect('mongodb://localhost:27017/miMicroservicio');
  console.log('Connected to MongoDB');
};

export default connectDB;