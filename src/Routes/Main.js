const express = require("express")
const { always_succed } = require("../middlewares/public_middleware")
const MainRouter = express.Router();
const bodyParser = require("body-parser");

MainRouter.get("/", (req, res) => {
        console.log("Request Objected have been changed from middleware", req.myname);
        res.end("Hello, world!");
});

MainRouter.post("/user", bodyParser.json(), always_succed, (req, res) => {
        res.json({
                error: 0,
                data_submitted: {
                        ...req.body
                }
        })
});

MainRouter.get("*", (req, res) => {
        console.log("Request Objected have been changed from middleware", req.myname);
        res.status(404).json({
                error: "Page not found", 
                status_code: 404, 
                fun_message: "You love to get errros"
        });
});

module.exports = MainRouter
