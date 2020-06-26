const mysql = require('mysql');
const util = require('util');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'Aldrich',
    password : 'neil1804',
    database : 'susilobid',
    port : 3306
});

const dba = util.promisify(db.query).bind(db);

module.exports = {
    db,
    dba
};
