const mongoose = require("mongoose") ;

const MySchema = new mongoose.Schema({

    title: String,
    description: String,
    price: Number
})

module.exports = MySchema