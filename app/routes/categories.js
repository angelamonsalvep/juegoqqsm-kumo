const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/categories')

//TODO: localhost/categories/ ---> LISTA
router.get('/', getItems)

//TODO: localhost/categories/:id ---> DETALLE
router.get('/:id', getItem)

router.post('/', checkOrigin, createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)

module.exports = router