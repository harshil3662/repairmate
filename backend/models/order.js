const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    customerName: String,
    customerNumber: Number,
    plan: [Number],
    autoCenter: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    services: [Number],
    bookingDate: Number,
    tooingDate: Number,
    payment: {
        id: mongoose.Schema.Types.ObjectId,
        card: Number,
        total: mongoose.Schema.Types.Decimal128
    }
});

const Order = mongoose.model('Orders', orderSchema);

module.exports = Order;