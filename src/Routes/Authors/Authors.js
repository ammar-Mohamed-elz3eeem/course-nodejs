const Router = require("express").Router();
const db = require("../../../mysql-connector");
const { query_runner, create_error_object, done } = require("../../helpers/db-functions");


Router.patch("/:id", (req, res) => {
        const data = [req.body.username, req.body.email]
        db.query("UPDATE author SET username = ?, email = ? WHERE id = ?", [...data, req.params.id], (err, result) => {
                if (!err) {
                        console.log(result)
                        res.status(200).json({
                                error: 0,
                                status: "operation done"
                        });
                        return;
                }
                res.status(500).json({
                        error: "user with that id is not found on db"
                })
        })
})

module.exports = Router;