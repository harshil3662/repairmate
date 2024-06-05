var express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
var bodyParser = require('body-parser')
const mechanicModel = require('./middleware/database')

require('dotenv').config({ path: "../.env" })
const mongoString2 = process.env.MONGO_STRING_2
mongoose.connect(mongoString2)
const db = mongoose.connection
db.on('error', (error) => {
   console.log(error)
})
db.once('connected', () => {
   console.log('Database Connected to repairmate.')
})

var app = express()

app.use( bodyParser.json())       
app.use(bodyParser.urlencoded({     
  extended: true
}))
app.use(cors({
   origin: ['http://localhost:3000','http://localhost:3001'],
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
   credentials: true,
}))

app.get("/garages", async function (req, res) {
   var data = await mechanicModel.find({})
   const garages = {list:data}
   res.json(garages)
})

app.listen(8080, function () {
})