const express = require('express');
const ProductSchema = require('../Model/productModel');
const OrderSchema = require('../Model/orderModel')
const RecordSchema = require('../Model/recordModel')

const router = express.Router()

module.exports = router;


router.post('/postProduct', async (req, res) => {

    try {
        const data = new ProductSchema({
            name: req.body.name,
            price: req.body.price,

        })
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.post('/postOrder', async (req, res) => {

    try {
        const data = new OrderSchema({
            clientName: req.body.clientName,
            productsOrdered: req.body.productsOrdered,
            isComplete: req.body.isComplete
        })
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.post('/postRecord', async (req, res) => {

    try {
        const data = new RecordSchema({
            date: req.body.date,
            ordersRecorded: req.body.ordersRecorded,
            price: req.body.price
        })
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})



router.get('/getAllProducts', async (req, res) => {
    try {
        const data = await ProductSchema.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.get('/getAllOrders', async (req, res) => {
    try {
        const data = await OrderSchema.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.get('/getAllRecords', async (req, res) => {
    try {
        const data = await RecordSchema.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


router.get('/getOneProduct/:id', async (req, res) => {
    try {
        const data = await ProductSchema.findById(req.params.id);
        res.json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.get('/getOneOrder/:id', async (req, res) => {
    try {
        const data = await OrderSchema.findById(req.params.id);
        res.json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.get('/getOneRecord/:id', async (req, res) => {
    try {
        const data = await RecordSchema.findById(req.params.id);
        res.json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})



router.patch('/updateProduct/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = {
            new: true
        };

        const result = await ProductSchema.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.patch('/updateOrder/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = {
            new: true
        };

        const result = await OrderSchema.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.patch('/updateRecord/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = {
            new: true
        };

        const result = await RecordSchema.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})


router.delete('/deleteProduct/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const data = await ProductSchema.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.delete('/deleteOrder/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const data = await OrderSchema.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.delete('/deleteRecord/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await RecordSchema.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})