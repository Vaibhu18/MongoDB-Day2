const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();
const port = 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://vaibhu:vaibhu123@cluster0.p6j4vkz.mongodb.net/Vaibhu", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb  is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.listen(port, () => { console.log('Express app running on port ' + port)})