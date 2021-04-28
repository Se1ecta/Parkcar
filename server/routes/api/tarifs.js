const express = require('express')
const router = express.Router()

const tarif = require('../../controllers/Tarifs')


router.post('/', tarif.create)

router.get('/', tarif.findAll)

router.get('/:id', tarif.findById)

router.delete('/:id', tarif.delete)

router.put('/:id', tarif.findByIdAndUpdate)


module.exports = router