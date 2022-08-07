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

})

module.exports = mongoose.model('OrdersSchema', orderSchema)