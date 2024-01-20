const { pool } = require('../../data');

exports.index = async (page, size) => {
    const offset = (page -1) * size;
}