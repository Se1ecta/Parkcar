const db = require('../config/db.config')

const car = {}

car.create = async (req, res) => {
    let {
        customer,
        mark,
        numbercar
    } = req.body
    await db.query('INSERT INTO car(customer, mark, numbercar) VALUES($1, $2, $3)', [customer, mark, numbercar])
        .then(() => {
            res.status(200).json({
                msg: "Succefull added car"
            })
        })
        .catch((err) => {
            if (err.routine == '_bt_check_unique') {
                res.status(404).json({
                    msg: 'Number car already registered',
                    err
                })
            }
            res.status(404).json({
                msg: 'An error has ocured',
                err
            })
        })
}

car.findAll = async (req, res) => {
    await db.query('SELECT * FROM car \
      JOIN  customer on customer.id_customer= car.customer\
      JOIN  mark on mark.id_mark = car.mark')
        .then((data) => {
            res.status(200).json({
                msg: 'Succefull get cars',
                cars: data.rows
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: 'An error has ocured',
                err
            })
        })
}

car.findById = async (req, res) => {
    await db.query('SELECT * FROM car where id_car=$1', [req.params.id])
        .then((data) => {
            res.status(200).json({
                car: data.rows[0]
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: 'An error has ocured',
                err
            })
        })
}

car.delete = async (req, res) => {
    db.query('DELETE FROM car where id_car=$1', [req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull deleted car"
            })
        })
        .catch((err) => {
            if (err.routine = 'ri_ReportViolation') {
                res.status(404).json({
                    msg: "You cannot delete this car while it is on the list of registered",
                    err
                })
            }
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

car.findByIdAndUpdate = async (req, res) => {
    let {
        customer,
        mark,
        numbercar
    } = req.body
    db.query('UPDATE car SET customer=$1, mark=$2, numbercar=$3 where id_car=$4', [customer, mark, numbercar, req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull updated car"
            })
        })
        .catch((err) => {
            if (err.routine == '_bt_check_unique') {
                res.status(404).json({
                    msg: 'Number car already registered',
                    err
                })
            }
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

module.exports = car