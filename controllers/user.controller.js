

const fs = require("fs");

module.exports.getAllUser = (req, res) => {
    const limit = req.query.limit;
    res.send(users.users.slice(0, limit));
};


// save new user
module.exports.saveUser = (req, res) => {

    const newUser = req.body;
    const data = fs.readFileSync('user.json');

    var myObject = JSON.parse(data);
    newUser.id = myObject.length + 1;
    const newUsers = [...myObject, newUser];
    const userString = JSON.stringify(newUsers)

    fs.writeFile('user.json', userString, (err) => {
        if (err) {
            res.write("faild to save");
            res.end();
        } else {
            res.write("write successfull");
            res.end();
        }

    })

}

