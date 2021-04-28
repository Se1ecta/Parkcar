const express = require('express')
const router = express.Router()

const car = require('../../controllers/Cars')

router.post('/', car.create)

router.get('/', car.findAll)

router.get('/:id', car.findById)

router.put('/:id', car.findByIdAndUpdate)

router.delete('/:id', car.delete)

module.exports = router