const routes = require('../routes/routes');
const cors = require('cors')

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


const app = express();

app.use(express.json());

app.use(cors({
    origin: '*'
}))

app.get("/api", (req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("server working");
    });

app.listen(4000, () => {
    console.log(`Server Started at ${4000}`)
})

app.use('/api', routes)