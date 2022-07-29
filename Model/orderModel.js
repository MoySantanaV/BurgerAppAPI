const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    clientName: {
        required: true,
        type: String
    },
    productsOrdered: {
        required: true,
        type: []
    }
    ,
    isComplete: {
        required: true,
        type: Boolean
    }
})

module.exports = mongoose.model('OrdersSchema', orderSchema)