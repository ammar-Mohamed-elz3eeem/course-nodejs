const express = require("express")
const { always_succed } = require("../middlewares/public_middleware")
const MainRouter = express.Router();
const bodyParser = require("body-parser");

MainRouter.get("/", (req, res) => {
        console.log("Request Objected have been changed from middleware", req.myname);
        res.end("Hello, world!");
});

MainRouter.post("/user", always_succed, (req, res) => {
        res.json({
                error: 0,
                data_submitted: {
                        ...req.body
                }
        })
});

module.exports = MainRouter
