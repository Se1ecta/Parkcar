// const Sequelize = require("sequelize");

// const dbConfig = require('../config/db.config')

// const sequelize = new Sequelize(dbConfig.HOST, dbConfig.USER, dbConfig.PASSOWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     operatorsAliases: false,

//     pool: {
//         max: dbConfig.pool.max,
//         min: dbConfig.pool.min,
//         acquire: dbConfig.pool.acquire,
//         idle: dbConfig.pool.idle
//     }
// })

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.customer = require("./Customer.js")(sequelize, Sequelize);

// module.exports = db;