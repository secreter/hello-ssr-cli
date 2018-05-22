
const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';

module.exports = {
    root: path.normalize(path.join(__dirname)),
    isProduction: isProduction,
    port: process.env.PORT || 3002,
};
