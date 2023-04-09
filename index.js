

// // function code_This() {
// //         var number = 0;
// //         return function add (a, b) {
// //                 number += 1;
// //                 return a + b + number;
// //         };
// // }

// // number = 0;

// // function code1(a, b) {
// //         number += 1;
// //         return a + b + number;
// // }

// // console.log(code1(2, 3))
// // console.log(code1(2, 3))
// // console.log(code1(2, 3))
// // console.log(code1(2, 3))

// // var adder = code_This();

// // console.log(adder(2, 3));
// // console.log(adder(2, 3));
// // console.log(adder(2, 3));
// // console.log(adder(2, 3));
// // console.log(adder(2, 3));
// // console.log(adder(2, 3));
// // console.log(adder(2, 3));

// // var adder = code_This();

// // console.log(adder(2, 3));
// // console.log(adder(2, 3));
// // console.log(adder(2, 3));

// // var number = 45;

// // they are exactly the same
// // var show_number1 = (a, b) => a + b;
// // var show_number2 = (a, b) => { 
// //         return a + b 
// // };

// // console.log(show_number1(2, 3));
// // console.log(show_number2(2, 3));

// // function show_number() {
// //         var number = 2;
// //         if (number < 5) {
// //                 const num = 4;
// //                 let sum = 4;
// //                 var div = 5;
// //         }
// //         // console.log(num);
// //         // console.log(sum);
// //         console.log(div);
// //         return number;
// // }

// // console.log(show_number());
// // show_number();
// // console.log("I am from Global scobe: ",number);

// // const port = 8080;
// // const hostname = 'localhost';
// // const http = require("http");

// // const requestListner = function (req, res) {
// //         res.statusCode = 200;
// //         res.setHeader("Content-Type", "text/json");
// //         res.end(JSON.stringify(["name", "ammar"]));
// // }

// // const server = http.createServer(requestListner);

// // server.listen(port, hostname, function () {
// //         console.log("Server is up & running")
// // })

const express = require("express")
const bodyParser = require("body-parser");
const multer = require("multer");
const HomeRouter = require("./src/Routes/Main");
const forms = multer();
const app = express();
const users = require("./src/Routes/Authors/Authors");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(forms.array());
app.use(HomeRouter);
app.use("/users", users);

app.get("*", (req, res) => {
        console.log("Request Objected have been changed from middleware", req.myname);
        res.status(404).json({
                error: "Page not found", 
                status_code: 404, 
                fun_message: "You love to get errros"
        });
});

app.listen(8080, 'localhost', function () {
        console.log("server is up & running")
})

module.exports = app
