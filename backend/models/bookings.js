const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    customerName: String,
    customerNumber: Number,
    plan: [Number],
    autoCenter: mongoose.Schema.Types.ObjectId,
    services: [Number],
    bookingDate: Number,
    toeingDate: Number,
    payment: {
        id: mongoose.Schema.Types.ObjectId,
        card: Number,
        total: mongoose.Schema.Types.Decimal128
    }
});

const Booking = mongoose.model('Bookings', bookingSchema);

module.exports = Booking;