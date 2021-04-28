const db = require('../config/db.config')

const employee = {}

employee.create = async (req, res, next) => {
    let {
        name,
        surname,
        phone,
        address
    } = req.body
    await db.query(`INSERT INTO employee (name, surname, phone, address) VALUES ($1, $2, $3, $4, $5)`, [name, surname, phone, address])
        .then(() => {
            res.status(200).json({
                success: true,
                msg: "Successful added employee",
            });
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

employee.findAll = async (req, res) => {
    await db.query('SELECT * FROM employee ')
        .then((employees) => {
            res.status(200).json(employees.rows)
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })

}

employee.findById = async (req, res) => {
    await db.query('SELECT * FROM employee WHERE id_employee=$1', [req.params.id])
        .then((employee) => {
            res.status(200).json(employee.rows[0])
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
            })
        })

}

employee.delete = async (req, res) => {
    await db.query('DELETE FROM employee where id_employee=$1', [req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull deleted employee"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}

employee.findByIdAndUpdate = async (req, res) => {
    let {
        name,
        surname,
        phone,
        address
    } = req.body
    await db.query('UPDATE employee SET name=$1, surname=$3, phone=$4,  address=$5 where id_employee=$6', [name, surname, phone, address, req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull updated employee"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })
}


module.exports = employee