// console.log("Alaa")
// console.log("Ameer")

// setTimeout(() => { // event loop
//         console.log("Ali")
// }, 1000)

// setTimeout(() => { // event loop
//         console.log("Abeer")
// }, 1000)

// setTimeout(() => { // event loop
//         console.log("Abeer")
// }, 1000)

// setTimeout(() => { // event loop
//         console.log("Abeer")
// }, 1000)

// console.log("Hassan")

// const axios = require("axios").default;
// axios.get("https://api.publicapis.org/entries")

// console.log("Ammar");

// const request1 = new Promise(function (resolve, reject) {
//         resolve("I have finsihed Promise NO.1");
//         // reject("I don't like promises, I am Promise NO.1");
// })

// request1.then(value => console.log(value))
//         .catch(err => console.log(err))

// const request2 = new Promise(function (resolve, reject) {
//         // resolve("I have finsihed Promise NO.2");
//         // reject("I don't like promises")
//         reject("I don't like promises, I am Promise NO.2");
// })

// const request3 = new Promise(function (resolve, reject) {
//         // resolve("I have finsihed Promise NO.3");
//         // reject("I don't like promises")
//         reject("I don't like promises, I am Promise NO.3");
// })

// const request4 = new Promise(function (resolve, reject) {
//         resolve("I have finsihed Promise NO.4");
//         // reject("I don't like promises")
// })

// Promise.all([request1, request2, request3, request4]).then((value) => {
//         console.log("THEN Block: ", value)
// }).catch(err => {
//         console.log(err)
// })

// console.log("Shady")


/**
 * Alternative way to promise to all but using async/await
 */

// const request1 = new Promise(function (resolve, reject) {
//         // resolve("I have finsihed Promise NO.1");
//         reject("I don't like promises, I am Promise NO.1");
// })

// const request2 = new Promise(function (resolve, reject) {
//         resolve("I have finsihed Promise NO.2");
//         // reject("I don't like promises")
//         reject("I don't like promises, I am Promise NO.2");
// })

// async function waitforrequest(...requests) {
//         const res = await requests[0];
//         const res2 = await requests[1];
//         return [res, res2]
// }


// waitforrequest(request1, request2).then(data => console.log(data))
//                                         .catch(err => console.log(err))

// TASKS 

// 1- Search how to create environment variable
// 2- write a program to do binary searching for specifiec element on array using JULIA prgramming language
// 3- create database school with the following tables using command line (
        // teacher table contain fields (id, name, email, age, subject), 
        // student table (id, name, email, age, grade), 
        // grades table (id, grade_name), 
        // subjects table (id, name, full_mark, fail_mark), 
        // exam_result table (id, name, teacher_id, student_id)
// )
