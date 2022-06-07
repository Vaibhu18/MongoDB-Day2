const BookModel= require("./userModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allUsers= await BookModel.find()
    res.send({msg: allUsers})
}

const booklist= async function (req, res) {
    let allUsers= await BookModel.find().select( { BookName: 1, AuthorName: 1, _id: 0})
    res.send({msg: allUsers})
}

const getBooksInYear= async function (req, res) {
    let allUsers= await BookModel.find({ 
             $or: [  {  "publishedYear": 2020 }]})
    res.send({msg: allUsers})
}

const getParticularBooks= async function (req, res) {
    let allUsers= await BookModel.find( { BookName:  /.*saga.*/i  })
    res.send({msg: allUsers})
}

const getIINRBooks= async function (req, res) {
    let allUsers= await BookModel.find( { 
             $or: [  {  "prices": "₹ 300" }]})
    res.send({msg: allUsers})
}

const getRandomBooks= async function (req, res) {
    let allUsers= await BookModel.find ({     $and: [{stockAvailable : "true"} , {totalPages:  {$gt: 500}}]    })
    res.send({msg: allUsers})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.booklist = booklist
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getIINRBooks = getIINRBooks
module.exports.getRandomBooks = getRandomBooks