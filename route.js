const express = require('express');
const router = express.Router();
const UserModel= require("./userModel.js")
const UserController= require("./userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", UserController.createBook  )

router.get("/getBooksData", UserController.getBooksData)
router.get("/booklist", UserController.booklist)
router.get("/getBooksInYear", UserController.getBooksInYear)
router.get("/getParticularBooks", UserController.getParticularBooks)
router.get("/getIINRBooks", UserController.getIINRBooks)
router.get("/getRandomBooks", UserController.getRandomBooks)


module.exports = router;