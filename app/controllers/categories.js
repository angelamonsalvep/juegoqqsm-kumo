const { httpError } = require('../helpers/handleError')
const categoryModel = require('../models/category')
const getItems = async (req, res) => {
    try {
        const listAll = await categoryModel.find({})
        res.send({ data: listAll })

    } catch (e) {
        httpError(res, e)
    }
}

const getItem = (req, res) => {
   
}

const createItem = async (req, res) => {
    try {
        const { description } = req.body
        const resDetail = await categoryModel.create({
            description
        })
        res.send({ data: resDetail })

    } catch (e) {
        httpError(res, e)
    }
}

const updateItem = (req, res) => {
    
}

const deleteItem = (req, rest) => {
    
}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }