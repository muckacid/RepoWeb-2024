const conn = require('../connection.js');

const TABLA = "persons";

function getAll() {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${TABLA}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function getOneBy(id) {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${TABLA} WHERE id = ?`, id, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}


module.exports = { getAll, getOneBy };
