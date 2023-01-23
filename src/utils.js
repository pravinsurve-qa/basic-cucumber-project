var fs = require('fs');
var dir = './reports';

module.exports.createReportsDir = () => {
    try {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    } catch (err) {
        console.error(err);
    }
}
