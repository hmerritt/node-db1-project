const db = require("../../data/dbConfig");


function get_all() {
    return db("accounts");
}


module.exports = {get_all};
