const db = require('../config/db.config')

const parkingspot = {}

parkingspot.create = async (req, res) => {
    let {
        numberspot,
        type,
    } = req.body
    await db.query('INSERT INTO parkingspot (numberspot, type) VALUES($1, $2)', [numberspot, type])
        .then(() => {
            res.status(200).json({
                msg: "Succefull added parkingspot"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: 'An error has ocured',
                err
            })
        })
}

parkingspot.findAll = async (req, res) => {
    db.query(`SELECT id_parkingspot, numberspot, typespot.title as type from parkingspot INNER JOIN typespot on typespot.id_typespot=parkingspot.type_`)
        .then((data) => {
            res.status(200).json({
                msg: "Succefull get parking spots",
                parkingspots: data.rows
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

parkingspot.findById = async (req, res) => {
    await db.query('SELECT * FROM parkingspot WHERE id_parkingspot=$1', [req.params.id])
        .then((parkingspot) => {
            res.status(200).json(parkingspot.rows[0])
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

parkingspot.delete = async (req, res) => {
    await db.query('DELETE FROM parkingspot where id_parkingspot=$1', [req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull deleted parkingspot"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

parkingspot.findByIdAndUpdate = async (req, res) => {
    let {
        numberspot,
        type,
    } = req.body
    await db.query('UPDATE parkingspot SET numberspot=$1, type=$2, where id_parkingspot=$3', [numberspot, type, req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull updated parkingspot"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

module.exports = parkingspot