const db = require('../config/db.config')

const registration = {}

registration.create = async (req, res) => {
    let {
        car,
        parkingspot
    } = req.body
    await db.query('INSERT INTO registration(car, parkingspot) VALUES ($1, $2)', [car, parkingspot])
        .then(() => {
            res.status(200).json({
                msg: "Successful added registration",
            });
        })
        .catch((err) => {
            if (err.routine == "_bt_check_unique") {
                res.status(404).json({
                    msg: "The parking space or car is already registered",
                })
            }
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

registration.findAll = async (req, res) => {
    await db.query('select * from registration \
                    INNER JOIN car on car.id_car=registration.car \
                    INNER JOIN parkingspot on parkingspot.id_parkingspot = registration.parkingspot')
        .then((data) => {
            res.status(200).json({
                msg: "Succefull get registrations",
                registrations: data.rows
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })

}

registration.findById = async (req, res) => {
    await db.query('SELECT * FROM registration WHERE id_registration=$1', [req.params.id])
        .then((data) => {
            res.status(200).json({
                msg:"Succefull get customer",
                registration:data.rows[0]
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

registration.delete = async (req, res) => {
    await db.query('DELETE FROM registration where id_registration=$1', [req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull deleted registration"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}


registration.findByIdAndUpdate = async (req, res) => {
    let {
        car,
        parkingspot,
        date_of_entry,
        date_of_depature,
    } = req.body
    await db.query('UPDATE registration SET car=$1, parkingspot=$2, date_of_entry=$3 ,date_of_depature=$4 where id_registration=$5',
        [car, parkingspot, date_of_entry, date_of_depature, req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull updated registration"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

module.exports = registration