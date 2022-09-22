
const users = require("../index");

module.exports.getAllUser = (req, res) => {
    const limit = req.query.limit;
    res.send(users.users.slice(0, limit));
}