const express = require('express')
const router = express.Router()

const typespot = require('../../controllers/typespots')


router.post('/', typespot.create)

router.get('/', typespot.findAll)

router.get('/:id', typespot.findById)

router.delete('/:id', typespot.delete)

router.put('/:id', typespot.findByIdAndUpdate)


module.exports = router