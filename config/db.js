const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }),
        console.log('Database connected successfully')
    } catch(error) {
        console.log(error);
        process.exit(1); // Stop the application
    }
}

module.exports = connectDB;