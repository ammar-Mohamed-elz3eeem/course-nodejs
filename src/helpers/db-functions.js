const db = require("../../mysql-connector");

function run_query(query, data = []) {
        return new Promise((resolve, reject) => {   
                if (data.length > 0) {
                        var q = db.query(query, data)
                } else {
                        var q = db.query(query)
                }
                q.then( ([rows]) => resolve(rows)).catch((err) => reject(err))
        })
}

function done(msg) {
        return {
                status: 200,
                msg
        }
}

function create_error_object(err, msg) {
        return {
                status: 500,
                err_code: err,
                err_msg: msg
        }
}

module.exports = {
        query_runner: run_query,
        create_error_object,
        done
}