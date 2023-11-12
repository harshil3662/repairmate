var express = require('express')
const mechanicModel = require('./middleware/database')
var app = express()
const cors = require('cors')
var bodyParser = require('body-parser')
app.use( bodyParser.json() )       
app.use(bodyParser.urlencoded({     
  extended: true
}))

app.use(cors({
   origin: 'http://localhost:3000',
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
   credentials: true,
}))

app.get("/garages", async function (req, res) {
   var data = await mechanicModel.find({})
   const garages = {list:data}
   res.json(garages)
})

app.post("/addGarage", async function (req, res) {
   await mechanicModel.create({
      name : req.body["name"],
      email : req.body["email"],
      phone_no : req.body["phone_no"],
      location : req.body["location"],
      availability : req.body["availability"]
   })
   res.redirect("/garages")
})

app.post("/edit", async function (req, res) {
   try {
      const updatedMechanic = await mechanicModel.updateOne(
         { email: req.body["oldEmail"] },
         {
            name: req.body["name"],
            email: req.body["email"],
            phone_no: req.body["phone_no"],
            location: req.body["location"]
         }
      )

      res.redirect("/garages");
   } catch (error) {
      console.error("Error while updating mechanic:", error)
      res.status(500).send("Internal Server Error")
   }
})

app.listen(8080, function () {
})