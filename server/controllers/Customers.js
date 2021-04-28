
const db = require('../config/db.config')

const customer = {}

customer.create = async (req, res) => {
    let {
        name,
        surname,
        phone
    } = req.body;
    try {
        await db.query(
            `INSERT INTO customer (name, surname, phone) VALUES ($1, $2, $3)`,
            [name, surname, phone]
        );
        res.status(200).json({
            msg: "Successful registred customer",
            customer: { name, surname, phone },
        });
    } catch (error) {


    }
}

customer.findAll = async (req, res) => {
    await db.query(`SELECT * FROM customer`)
        .then((customers) => {
            res.status(200).json({
                msg: "Succefull get customers",
                customers: customers.rows
            })
        })
        .catch((err) => {
            res.status(500).json({
                msg: 'An error has ocured',
                err
            })
        })

}

customer.findById = async (req, res) => {
    db.query('SELECT * FROM customer WHERE id_customer=$1', [req.params.id])
        .then((data) => {
            res.status(200).json({
                msg: "Success get customer",
                customer: data.rows[0]
            })
        })
}

customer.delete = async (req, res) => {
    await db.query('DELETE FROM customer WHERE id_customer = $1', [req.params.id])
        .then(() => {
            res.status(200).json({
                msg: "Succefull deleted customer"
            })
        })
        .catch((err) => {
            res.status(404).json({
                msg: "An erroor has ocured",
                err
            })
        })

}

customer.update = async (req, res) => {
    const id = req.params.id
    const {
        name,
        surname,
        phone
    } = req.body
    await db.query("UPDATE customer SET name = $1, surname = $2, phone = $3 where id_customer = $4", [name, surname, phone, id])
        .then((data) => {
            res.status(200).json({
                msg: 'Succeful updated customer',
                data: data
            })
                .catch((err) => {
                    if (err.routine == '_bt_check_unique') {
                        res.status(404).json({
                            msg: 'Number phone already registered',
                            err
                        })
                    }
                    res.status(500).json({
                        msg: 'An error has ocured',
                        err
                    })
                })
        })
}
module.exports = customer