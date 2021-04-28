const express = require('express')
const router = express.Router()

const registration = require('../../controllers/registration')

router.post('/', registration.create)

router.get('/', registration.findAll)

router.get('/:id', registration.findById)

router.delete('/:id', registration.delete)

router.put('/:id', registration.findByIdAndUpdate)


module.exports = router