const express = require('express')
const router = express.Router()

const typepayment = require('../../controllers/typepayments')


router.post('/', typepayment.create)

router.get('/', typepayment.findAll)

router.get('/:id', typepayment.findById)

router.delete('/:id', typepayment.delete)

router.put('/:id', typepayment.findByIdAndUpdate)


module.exports = router