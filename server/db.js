const mongoose = require('mongoose');
require('dotenv').config({ path: require('path').join(__dirname, '.env') });

// Cache connection across serverless function invocations
let cached = global._mongooseCache;
if (!cached) {
  cached = global._mongooseCache = { conn: null, promise: null, error: null };
}

const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      cached.error = 'MONGODB_URI environment variable is not set';
      throw new Error(cached.error);
    }

    cached.promise = mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 10000,
    }).then(m => {
      cached.error = null;
      console.log('MongoDB connected');
      return m;
    }).catch(err => {
      cached.promise = null;
      cached.error = err.message;
      console.error('MongoDB connection error:', err.message);
      throw err;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

connectDB.getConnectionError = () => cached.error;

module.exports = connectDB;
