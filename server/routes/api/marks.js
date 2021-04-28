const express = require('express')
const router = express.Router()

const mark = require('../../controllers/Marks')

router.post('/', mark.create)

router.get('/', mark.findAll)

router.get('/:id', mark.findById)

router.delete('/:id', mark.delete)

router.put('/:id', mark.findByIdAndUpdate)


module.exports = router