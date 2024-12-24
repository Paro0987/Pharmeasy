const mongoose = require('mongoose');

// Set the `strictQuery` option to prepare for Mongoose 7
mongoose.set('strictQuery', false); // or true, depending on your preference

// Always use separate creds for authentication. This provides you flexibility on changing them as per environment.
module.exports = () => {
    return mongoose.connect("mongodb+srv://mistryparomita97:n7T1U4p2dWFmBZ0b@cluster0.zjl1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.error('MongoDB connection error:', err));
};
