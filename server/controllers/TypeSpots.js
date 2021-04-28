const db = require('../config/db.config')

const typespot = {}

typespot.create = async (req, res, next) => {
    let {
        title,
        description
    } = req.body
    await db.query(`INSERT INTO typespot (title, description) VALUES ($1, $2)`, [title, description])
        .then(() => {
            res.status(200).json({
                success: true,
                msg: "Successful added typespot",
            });
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

typespot.findAll = async (req, res) => {
    await db.query('SELECT * FROM typespot ')
        .then((typespots) => {
            res.status(200).json(typespots.rows)
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })

}

typespot.findById = async (req, res) => {
    await db.query('SELECT * FROM typespot WHERE id_typespot=$1', [req.params.id])
        .then((typespot) => {
            res.status(200).json(typespot.rows[0])
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
            })
        })

}

typespot.delete = async (req, res) => {
    await db.query('DELETE FROM typespot where id_typespot=$1', [req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull deleted typespot"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

typespot.findByIdAndUpdate = async (req, res) => {
    let {
        title,
        description
    } = req.body
    await db.query('UPDATE typespot SET title=$1, description=$3 where id_typespot=$4', [title, description, req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull updated typespot"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}


module.exports = typespot