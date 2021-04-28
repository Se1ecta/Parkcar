const db = require('../config/db.config')

const mark = {}

mark.create = async (req, res) => {
    let {
        title,
        model,
        description
    } = req.body
    await db.query('INSERT INTO mark (title, model, description) VALUES($1, $2, $3)', [title, model, description])
        .then(() => {
            res.status(200).json({
                msg: "Succefull added mark"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: 'An error has ocured',
                err
            })
        })
}

mark.findAll = async (req, res) => {
    db.query('SELECT * FROM mark')
        .then((data) => {
            res.status(200).json({
                msg: "Succefull",
                marks: data.rows
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: 'An error has ocured',
                err
            })
        })
}

mark.findById = async (req, res) => {
    await db.query('SELECT * FROM mark WHERE id_mark=$1', [req.params.id])
        .then((mark) => {
            res.status(200).json(mark.rows[0])
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

mark.delete = async (req, res) => {
    await db.query('DELETE FROM mark where id_mark=$1', [req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull deleted mark"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

mark.findByIdAndUpdate = async (req, res) => {
    let {
        title,
        model,
        description
    } = req.body
    await db.query('UPDATE mark SET title=$1, model=$2, description=$3 where id_mark=$4', [title, model, description, req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull updated mark"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

module.exports = mark