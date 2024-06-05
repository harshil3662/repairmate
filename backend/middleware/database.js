const mongoose = require('mongoose')
require('dotenv').config({ path: "../.env" })
const mongoString = process.env.MONGO_STRING_1

mongoose.connect(mongoString)
const db = mongoose.connection

db.on('error', (error) => {
   console.log(error)
})

db.once('connected', () => {
   console.log('Database Connected')
})

const mechanic = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone_no: {
      type: String,
      required: true,
    },
    location: {
       type: String,
       required: true,
     },
     availability: {
      type: String,
      required: true,
    }
  })
 
 const mechanicModel = mongoose.model('Mechanics', mechanic)

 module.exports = mechanicModel