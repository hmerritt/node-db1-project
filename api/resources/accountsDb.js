const db = require("../../data/dbConfig");


//  Get an account
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


//  Validators

//  Check if account id exists
function validateId() {
    return (req, res, next) => {
        get((req.params.id || null))
            .then((account) => {
                //  Check if account exists
                if (account) {
                    //  All good -> continue
                    //  Add account to request object
                    req.account = account;
                    next();
                } else {
                    res.status(400).json({
                        message: "invalid account id",
                    });
                }
            })
            .catch((error) => {
                next(error);
            });
    };
}

//  Validate the request body
function validateBody() {
    return (req, res, next) => {
        //  Check that the request body exists
        if (req.body) {
            //  Check for the required keys
            if (req.body.name || req.body.budget) {
                //  Add account body to request
                req.accountBody = {
                    name: req.body.name,
                    budget: req.body.budget
                };
                next();
            } else {
                res.status(400).json({
                    message: "missing required fields; name,budget",
                });
            }
        } else {
            res.status(400).json({
                message: "missing account data",
            });
        }
    };
}


module.exports = {get, remove, insert, update, validateId, validateBody};
