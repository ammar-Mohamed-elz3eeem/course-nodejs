const Router = require("express").Router();
const db = require("../../../mysql-connector");
const { query_runner, create_error_object, done } = require("../../helpers/db-functions");

Router.get("/", (req, res) => {
        query_runner("SELECT * FROM author")
                .then(rows => res.status(200).render("users", {users: rows, page_title: "Users Page"}))
                .catch(err => res.status(500).json(create_error_object("db_error", err.message)))
});

Router.post("/", (req, res) => {
        const data = [
                req.body.name,
                req.body.age,
                req.body.email,
                req.body.username,
                req.body.password,
                req.body.role
        ];
        query_runner("INSERT INTO author \
        (name, age, email, username, password, role) \
        VALUES (?, ?, ?, ?, ?, ?)", data)
                .then(row => res.status(200).json(row))
                .catch(err => res.status(500).json(create_error_object("db_error", err.message)))
        console.log("i ma here");
});

Router.delete("/:id", (req, res) => {
        query_runner("DELETE FROM author WHERE id > ?", [req.params.id])
                .then( ({affectedRows}) => res.status(200).json(affectedRows > 0 
                                                                        ? done("user deleted successfully") 
                                                                        : done("user doesn't exist")))
                .catch(err => res.status(500)
                                        .json(create_error_object("db_error", err.message)));
})

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