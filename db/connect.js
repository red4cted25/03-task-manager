require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = () => {
    return mongoose.connect(process.env.MONGOURI, {})
        .then(() => console.log('MongoDB connected...'))
        .catch((err) => console.error('Error connecting to MongoDB:', err));
}

module.exports = connectDB;