const express = require('express')
const router = express.Router()

const employee = require('../../controllers/employees')


router.post('/', employee.create)

router.get('/', employee.findAll)

router.get('/:id', employee.findById)

router.delete('/:id', employee.delete)

router.put('/:id', employee.findByIdAndUpdate)


module.exports = router