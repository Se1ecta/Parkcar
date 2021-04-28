const db = require('../config/db.config')

const typepayment = {}

typepayment.create = async (req, res, next) => {
    let {
        title,
    } = req.body
    await db.query(`INSERT INTO typepayment (title) VALUES ($1)`, [title])
        .then(() => {
            res.status(200).json({
                success: true,
                msg: "Successful added typepayment",
            });
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

typepayment.findAll = async (req, res) => {
    await db.query('SELECT * FROM typepayment ')
        .then((typepayments) => {
            res.status(200).json(typepayments.rows)
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })

}

typepayment.findById = async (req, res) => {
    await db.query('SELECT * FROM typepayment WHERE id_typepayment=$1', [req.params.id])
        .then((typepayment) => {
            res.status(200).json(typepayment.rows[0])
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

typepayment.delete = async (req, res) => {
    await db.query('DELETE FROM typepayment where id_typepayment=$1', [req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull deleted typepayment"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

typepayment.findByIdAndUpdate = async (req, res) => {
    let {
        title,
    } = req.body
    await db.query('UPDATE typepayment SET title=$1 where id_typepayment=$4', [title, req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull updated typepayment"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

module.exports = typepayment