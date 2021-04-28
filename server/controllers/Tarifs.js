const db = require('../config/db.config')

const tarif = {}

tarif.create = async (req, res, next) => {
    let {
        title,
        price,
        description
    } = req.body
    await db.query(`INSERT INTO tarif (title, price, description) VALUES ($1, $2, $3)`, [title, price, description])
        .then(() => {
            res.status(200).json({
                success: true,
                msg: "Successful added tarif",
            });
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

tarif.findAll = async (req, res) => {
    await db.query('SELECT * FROM tarif ')
        .then((data) => {
            res.status(200).json({
                msg:"Successful geted tarifs",
                tarifs: data.rows
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })

}

tarif.findById = async (req, res) => {
    await db.query('SELECT * FROM tarif WHERE id_tarif=$1', [req.params.id])
        .then((tarif) => {
            res.status(200).json(tarif.rows[0])
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

tarif.delete = async (req, res) => {
    await db.query('DELETE FROM tarif where id_tarif=$1', [req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull deleted tarif"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

tarif.findByIdAndUpdate = async (req, res) => {
    let {
        title,
        price,
        description
    } = req.body
    await db.query('UPDATE tarif SET title=$1, price=$2, description=$3 where id_tarif=$4', [title, price, description, req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull updated tarif"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

module.exports = tarif