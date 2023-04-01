

// function code_This() {
//         var number = 0;
//         return function add (a, b) {
//                 number += 1;
//                 return a + b + number;
//         };
// }

// number = 0;

// function code1(a, b) {
//         number += 1;
//         return a + b + number;
// }

// console.log(code1(2, 3))
// console.log(code1(2, 3))
// console.log(code1(2, 3))
// console.log(code1(2, 3))

// var adder = code_This();

// console.log(adder(2, 3));
// console.log(adder(2, 3));
// console.log(adder(2, 3));
// console.log(adder(2, 3));
// console.log(adder(2, 3));
// console.log(adder(2, 3));
// console.log(adder(2, 3));

// var adder = code_This();

// console.log(adder(2, 3));
// console.log(adder(2, 3));
// console.log(adder(2, 3));

// var number = 45;

// they are exactly the same
// var show_number1 = (a, b) => a + b;
// var show_number2 = (a, b) => { 
//         return a + b 
// };

// console.log(show_number1(2, 3));
// console.log(show_number2(2, 3));

// function show_number() {
//         var number = 2;
//         if (number < 5) {
//                 const num = 4;
//                 let sum = 4;
//                 var div = 5;
//         }
//         // console.log(num);
//         // console.log(sum);
//         console.log(div);
//         return number;
// }

// console.log(show_number());
// show_number();
// console.log("I am from Global scobe: ",number);

// const port = 8080
// const hostname = 'localhost';
// const http = require("http");

// const requestListner = (req, res) => {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/json");
//         res.end(JSON.stringify(["name", "ammar"]));
// }
// http.createServer(requestListner).listen(port, hostname)
