const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

require('dotenv').config()

const userRoutes = require('./controllers/user.controller.js')
app.use( userRoutes)

mongoose.connect('mongodb://localhost:27017/mahasiswa');

// Menetapkan koneksi
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Database terhubung.");
});

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Successfully served on port: ${PORT}.`);
})