const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
// Create the server
const app = express();

// Connecting to the database
connectDB();
app.use(cors())

app.use(express.json());

app.use('/api/products', require('./routes/product'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
});