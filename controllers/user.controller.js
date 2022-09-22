

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


// delete user 

module.exports.deleteUser = (req, res) => {
    const id = Number(req.params.id);
    const data = JSON.parse(fs.readFileSync('user.json'));

    const deleteUser = data.filter(user => user.id !== id);


    if (data.length === deleteUser.length) {
        res.send("No found")

    } else if (data.length > deleteUser.length) {
        res.send("delete success");

        const newArry = [...deleteUser];
        const userString = JSON.stringify(newArry)

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


}

