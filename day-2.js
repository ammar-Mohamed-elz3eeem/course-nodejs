// var obj2 = {
//         age: 50,
//         calc_age: function () {
//                 return this.age - 10;
//         }
// }

// var obj = {
//         hoppies: ['swimming', 'playing', 'ay habal'],
//         print_hoppies1: function () {
//                 console.log(this)
//         },
//         print_hoppies2: function () {
//                 return () => {
//                         console.log(this)
//                 }
//         },
//         print_hoppies3: function () {
//                 return () => {
//                         console.log(obj2.calc_age())
//                         console.log(this.hoppies)
//                 }
//         },
//         print_hoppies4: () => {
//                 console.log("I am arrow function: ", this)
//         }
// }

// obj.print_hoppies1()
// obj.print_hoppies2()()
// obj.print_hoppies3()()
// obj.print_hoppies4()

// function calc(a, b, func) {
//         console.log(func(a, b))
// }

// var op = function (a, b) {
//         return a + b;
// }

// calc(5, 3, op)

// calc(5, 3, function (a, b) {
//         return a - b;
// })
// calc(5, 3, function (a, b) {
//         return a * b;
// })
// calc(5, 3, function (a, b) {
//         return a / b;
// })


// var obj = {
//         name: "Ahmed",
//         age: "96",
//         hoppies: ['swimming', 'playing', 'watching tv'],
//         operations: {
//                 eatArrow() {
//                         return () => {
//                                 console.log("I am eating");
//                                 return this
//                         }
//                 },
//                 eatFunc() {
//                         var parent = this
//                         return function () {
//                                 console.log("I am eating");
//                                 return parent
//                         }
//                 },
//                 sleep() {
//                         console.log("I am sleeping");
//                         return this
//                 },
//                 coding() {
//                         console.log("I am coding");
//                         return this
//                 },
//                 repeat() {
//                         console.log("I am reapting the steps mentioned above");
//                         return this
//                 },
//                 nothing: false
//         }
// }

// obj.operations.eatFunc()().eatArrow()().coding().sleep().repeat().nothing
// obj.operations.eatFunc()().eatArrow()().coding().sleep().repeat().nothing


// JSON.parse()

// var ammar = {
//         name: "ammar",
//         age: 30,
//         hoppies: ["ay haga", 'ay haga2', "ay haga3"]
// }

// var ahmed = {
//         name: "ahmed",
//         age: 30,
//         hoppies: ["ay hagat", 'hagat', "ayhagat"]
// }

// ["ahmed", 30, ["ay hagat", 'hagat', "ayhagat"]]
// ["ahmed", ["ay hagat", 'hagat', "ayhagat"], 30]

// var o1 = 1
// var o2 = 2
// var o3 = 3
// var o4 = 4
// var o5 = 5
// var o6 = 6
// var o7 = 7
// var o8 = 8
// var o9 = 9

// [1,2,3,4,5,6,7,8,9]

// var obje = {
//         error: "I love errors",
//         error_types: {
//                 404: "Not Found Page",
//                 500: "Internal Server Error",
//                 300: "Redirection",
//                 200: "OK"
//         }
// }

// var objeStr = JSON.stringify(obje);

// console.log(typeof obje)
// console.log(typeof objeStr)
// console.log(typeofJSON.parse(objeStr));

// const axios = require("axios")

// var api = ("https://api.publicapis.org/entries", true)
// api.then((data) => {
//         console.log(data);
// })


// code below runs only on browser
// var api = fetch("https://api.publicapis.org/entries")
// api.then(data => {
//         return data.json()
// }).then(data => {
//         console.log(data)
// })

