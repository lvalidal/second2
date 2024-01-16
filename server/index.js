const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 7070;

app.use(express.json())
app.use(cors())
app.listen(PORT, () => {
    console.log("Local Running");
})

mongoose.connect("mongodb+srv://Aysun:Aysun123@app.b62igom.mongodb.net/?retryWrites=true&w=majority").then(()=> {

    console.log("Mongo Connected");
})