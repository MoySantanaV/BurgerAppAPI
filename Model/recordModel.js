const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    date: {
        required: true,
        type: String
    },
    ordersRecorded: {
        required: true,
        type: []
    }
    ,
    price: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('RecordsSchema', recordSchema)