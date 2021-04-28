const express = require('express')
const router = express.Router()

const parkingspot = require('../../controllers/ParkingSpots')

router.post('/', parkingspot.create)

router.get('/', parkingspot.findAll)

router.get('/:id', parkingspot.findById)

router.delete('/:id', parkingspot.delete)

router.put('/:id', parkingspot.findByIdAndUpdate)


module.exports = router