const express = require("express");
const db = require("./accountsDb");

const router = express.Router();

//  Get all accounts
router.get("/", async (req, res, next) => {
    try {
        const accounts = await db.get_all();
        res.send(accounts);
    }
    catch (err) {
        next(err);
    }
});

//  Get all accounts
router.get("/:id", async (req, res, next) => {
    try {
        const accounts = await db.get(req.params.id);
        res.send(accounts);
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;
