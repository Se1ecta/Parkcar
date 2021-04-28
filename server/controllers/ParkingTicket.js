const db = require('../config/db.config')

const parkingticket = {}

parkingticket.create = async (req, res) => {
    let {
        customer,
        mark,
        numberparkingticket
    } = req.body
    await db.query('INSERT INTO parkingticket(customer, mark, numberparkingticket) VALUES($1, $2, $3)', [customer, mark, numberparkingticket])
        .then(() => {
            res.status(200).json({
                msg: "Succefull added parkingticket"
            })
        })
        .catch((err) => {
            if (err.routine == '_bt_check_unique') {
                res.status(404).json({
                    msg: 'Number parkingticket must be unique',
                    err
                })
            }
            res.status(404).json({
                msg: 'An error has ocured',
                err
            })
        })
}

parkingticket.findAll = async (req, res) => {
    await db.query('SELECT * FROM parkingticket  \
                        INNER JOIN customer on customer.id_customer = parkingticket.customer\
                        INNER JOIN mark on mark.id_mark = parkingticket.mark')
        .then((data) => {
            res.status(200).json({
                msg: 'Succefull get parkingtickets',
                parkingtickets: data.rows
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: 'An error has ocured',
                err
            })
        })
}

parkingticket.findById = async (req, res) => {
    await db.query('SELECT * FROM parkingticket where id_parkingticket=$1', [req.params.id])
        .then((data) => {
            res.status(200).json({
                data: data.rows
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: 'An error has ocured',
                err
            })
        })
}

parkingticket.delete = async (req, res) => {
    db.query('DELETE FROM parkingticket where id_parkingticket=$1', [req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull deleted parkingticket"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

parkingticket.findByIdAndUpdate = async (req, res) => {
    let {
        customer,
        mark,
        numberparkingticket
    } = req.body
    db.query('UPDATE parkingticket SET customer=$1, mark=$2, numberparkingticket=$3 where id_parkingticket=$4', [customer, mark, numberparkingticket, req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull updated parkingticket"
            })
        })
        .catch((err) => {
            if (err.routine == '_bt_check_unique') {
                res.status(404).json({
                    msg: 'Number parkingticket already registered',
                    err
                })
            }
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

module.exports = parkingticket