const Router = require("express").Router();
const db = require("../../../mysql-connector");

Router.get("/", (req, res) => {
        db.query("SELECT * FROM author", (err, result) => {
                if (!err) {
                        res.status(200).json(result);
                        return;
                }
                res.status(500).json({
                        error: "error happned on db server"
                })
        })
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

        db.query("INSERT INTO author \
        (name, age, email, username, password, role) \
        VALUES (?, ?, ?, ?, ?, ?)", data, (err, result) => {
                if (!err) {
                        console.log(result)
                        res.status(200).json({
                                error: 0,
                                data_submitted: {
                                        ...req.body
                                }
                        });
                        return;
                }
                res.status(500).json({
                        error: "can't add user to db"
                })
        })
});

Router.delete("/:id", (req, res) => {
        db.query("DELETE FROM author WHERE id = ?", [req.params.id], (err, result) => {
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