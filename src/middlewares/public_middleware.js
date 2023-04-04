module.exports = {
        always_succed(req, res, next) {
                if (req.body.username != 'ali') {
                        return res.status(400).end("Error: User not allowed");
                }
                return next();
        },
        name: "script",
        action: "middleware"
}