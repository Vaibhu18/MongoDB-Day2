const mongoose = require('mongoose')
const BookSchema = new mongoose.Schema({
    name : {
        type : String,
        require: true,
        unique : true
    },
    author_id : {
        type : Number
    },
    price: {
        type : Number
    },
    ratings : {
        type : Number

    }
})
const BD = mongoose.model("BD", BookSchema)
module.exports = BD