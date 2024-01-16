const mongoose = require("mongoose") ;
const MySchema =require('../schema/my.schema')

const MyModel = mongoose.model("My", MySchema)
module.exports = MyModel