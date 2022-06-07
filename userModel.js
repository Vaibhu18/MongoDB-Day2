const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    BookName : {
        type : String,
        unique : true,
        require: true
    },
    AuthorName :{
        type: String,
        require:true
    },
    publishedYear :{
        type : Number,
        require: true
    },

    prices: {
        indianPrice: String,
        europePrice: String,
    },
   
    totalPages : Number,
    stockAvailable : Boolean 

},{timestapms : true})

module.exports = mongoose.model('Book', userSchema)