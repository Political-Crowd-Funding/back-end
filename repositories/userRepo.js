const db = require('../dbConfig');
const TABLE_NAME = 'users';

const getAll = () =>{
    return db(TABLE_NAME)
}


module.exports = {getAll};