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

//  Create a new account
function insert(account) {
    return db("accounts").insert(account);
}

//  Update an account
function update(id, account) {
    return db("accounts").where("id", id).update(account);
}

//  Delete account
function remove(id) {
    return db("accounts").where("id", id).del();
}


module.exports = {get, remove, insert, update};
