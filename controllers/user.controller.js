
const fs = require("fs");

module.exports.getAllUser = (req, res) => {
    const limit = req.query.limit;
    res.send(users.users.slice(0, limit));
};


// save new user
module.exports.saveUser = (req, res) => {
    const user = {
        "id": 83,
        "photoUrl": "http://placehold.it/32x32",
        "name": "Sims Rich",
        "gender": "male",
        "contact": "+1 (945) 574-2507",
        "address": "666 Oakland Place, Clinton, Colorado, 3336"
    }

    const data = fs.readFileSync('user.json');

    var myObject = JSON.parse(data);
    const newUsers = [...myObject, user];
    const userString = JSON.stringify(newUsers)
    console.log(myObject)

    // fs.writeFileSync('/user.json', userString);

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

