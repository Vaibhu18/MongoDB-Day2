const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    author_id : {
        type : Number,
        
        require: true
    },
    author_name :{
        type: String,
        require:true
    },
    age :{
        type : Number
    },
    address :{
        type : String
    }
},{timestapms : true})


const AD =  mongoose.model('AD', AuthorSchema)

module.exports = AD