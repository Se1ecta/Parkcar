// const Sequelize = require('sequelize');

const Pool = require('pg').Pool


const pool = new Pool({
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: 'Uep541',
    database: 'ParkingSystem',
})

module.exports = pool


// const sequelize = new Sequelize(env.database, env.username, env.password, {
//     HOST: 'localhost',
//     DIALECT: 'postgres',
//     PASSOWORD: 'Uep541',
//     DB: 'ParkingSystem',

//     pool: {
//         max: 5, //maximum number of connection in pool
//         min: 0, // minimum number of connection in pool
//         acquire: 30000, //maximum time, in milliseconds, that a connection can be idle before being released
//         idle: 10000 //maximum time, in milliseconds, that pool will try to get connection before throwing error
//     }
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// //Models/tables
// db.customers = require('../model/customer.model.js')(sequelize, Sequelize);


// module.exports = db;
