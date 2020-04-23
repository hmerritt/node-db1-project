const db = require("../../data/dbConfig");


//
function get(id=null) {
    if (id)
    {
        //  Get individial account
        return db("accounts").where("id", id).first();
    }
    else
    {
        //  Get all accounts
        return db("accounts");
    }
}

//  Delete account
function remove(id) {
    return db("accounts").where("id", id).del();
}


module.exports = {get, remove};
