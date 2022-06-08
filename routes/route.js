const express = require('express');
const router = express.Router();
const UserModel= require("../modules/model")
const UserController= require("../userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", UserController.createAuthor  )
router.post("/createBook", UserController.createBook)
router.get("/getBooksbyChetanBhagat", UserController.getBooksbyChetanBhagat)
router.get("/authorofBook", UserController.authorofBook)
router.get("/getBooksData", UserController.getBooksData)





module.exports = router