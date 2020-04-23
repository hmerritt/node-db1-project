const express = require("express");
const db = require("./accountsDb");

const router = express.Router();

//  Get all accounts
router.get("/", async (req, res, next) => {
    try {
        const accounts = await db.get();
        res.send(accounts);
    }
    catch (err) {
        next(err);
    }
});

//  Get individial account
router.get("/:id", async (req, res, next) => {
    try {
        const accounts = await db.get(req.params.id);
        res.send(accounts);
    }
    catch (err) {
        next(err);
    }
});

//  Delete an account
router.delete("/:id", async (req, res, next) => {
    try {
        const account = await db.remove(req.params.id);
        if (account) {
            res.json({
                message: `Account {${req.params.id}} deleted successfully`
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
