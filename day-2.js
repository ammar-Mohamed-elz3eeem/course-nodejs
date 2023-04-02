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

