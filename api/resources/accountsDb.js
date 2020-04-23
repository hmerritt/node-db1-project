const db = require("../../data/dbConfig");


function get(id=null) {
    if (id)
    {
        return db("accounts").where("name", `account-${id}`).first();
    }
    else
    {
        return db("accounts");
    }
}


module.exports = {get};
