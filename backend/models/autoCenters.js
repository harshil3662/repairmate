const mongoose = require('mongoose')

const autoCenterSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    owner: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    location: String,
    since: {
        type: Number,
        default: new Date().now()
    },
    services: {
        type: [Number],
        required: true
    },
    experties: {
        type: [Number],
        required: true
    },
    rating : {
        type: Number,
        default: 0
    },
    dateOfRegistration: {
      type: Number,
      default: new Date().now()
    }
});

const AutoCenter = mongoose.model('AutoCenters', userSchema);

module.exports = AutoCenter;