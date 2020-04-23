const db = require("../../data/dbConfig");


function get_all() {
    return db("accounts");
}

function get(id) {
    return db("accounts").where("name", `account-${id}`).first();
}


module.exports = {get_all, get};
