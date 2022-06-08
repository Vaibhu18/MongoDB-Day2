const BD= require("./modules/model1")
const AD= require("./modules/model")


const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AD.create(data)
    res.send({msg: savedData})
}

const createBook= async function (req, res) {
  let data= req.body
  let savedData= await BD.create(data)
  res.send({msg: savedData})
}

const getBooksbyChetanBhagat= async function (req, res) {
    let data= await AD.find({author_name:"Chetan Bhagat"}).select("author_id")
    let bookData = await BD.find({author_id:data[0].author_id})
    res.send(bookData)
}

const authorofBook= async function (req, res) {
    let data=await BD.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let data1 = await BD.find({name:"Two states"})
    let and = await AD.find({author_id:data1[0].author_id})
       res.send( { msg: data,and})
  }

const getBooksData = async function (req, res) {
  let data=await BD.find( {price : { $gte: 50, $lte: 100} })
data.forEach(element => {
  AD.find({author_id:element.author_id}).then((data)=>{
    console.log(data)
  })
})
}

module.exports.createAuthor= createAuthor
 module.exports.createBook= createBook
module.exports.getBooksbyChetanBhagat= getBooksbyChetanBhagat
module.exports.authorofBook= authorofBook
module.exports.getBooksData= getBooksData

