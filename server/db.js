const mongoose = require('mongoose');
require('dotenv').config({ path: require('path').join(__dirname, '.env') });

let connectionError = null;

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/onlinestudyhub';
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
    connectionError = null;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    connectionError = error.message;
  }
};

connectDB.getConnectionError = () => connectionError;

module.exports = connectDB;
