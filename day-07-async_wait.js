async function test_db(age) {
        return new Promise((resolve, reject) => {
                if (age > 16) {
                        resolve("Welcome Man");
                } else if (age > 0) {
                        resolve("Welcome Kid");
                } else {
                        reject("age can't be 0 or negative number");
                }
        })
}