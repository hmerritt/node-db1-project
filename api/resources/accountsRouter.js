const express = require("express");
const db = require("./accountsDb");

const router = express.Router();

//  Get all accounts
router.get("/", db.validateId(), async (req, res, next) => {
    res.send(req.account);
});

//  Get individial account
router.get("/:id", db.validateId(), async (req, res, next) => {
    res.send(req.account);
});

//  Create a new account
router.post("/", db.validateBody(), async (req, res, next) => {
    try {
        const [account_id] = await db.insert(req.accountBody);
        res.json({
            id: account_id,
            ...req.accountBody
        });
    }
    catch (err) {
        next(err);
    }
});

//  Update an account
router.put("/:id", db.validateBody(), db.validateId(), async (req, res, next) => {
    try {
        const account = await db.update(req.account.id, req.accountBody);
        res.json({
            id: req.account.id,
            ...req.accountBody
        });
    }
    catch (err) {
        next(err);
    }
});

//  Delete an account
router.delete("/:id", db.validateId(), async (req, res, next) => {
    try {
        const account = await db.remove(req.account.id);
        if (account) {
            res.json({
                message: `Account {${req.account.id}} deleted successfully`
            });
        }
        else
        {
            next(err);
        }
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;
