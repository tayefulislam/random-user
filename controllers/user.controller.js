

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


// update 

module.exports.updateUser = (req, res) => {
    const updateUser = req.body;
    console.log(Number(updateUser.id));


    const data = JSON?.parse(fs.readFileSync('user.json'));
    const newArr = [...data]
    const checkAvility = newArr?.findIndex(user => user.id === updateUser?.id);


    if (checkAvility === -1) {
        res.send("id not match with any user id");
    }
    else if (updateUser > newArr.length) {
        res.send("error")
    }
    else {


        newArr[checkAvility] = updateUser;
        const stringData = JSON.stringify(newArr);

        fs.writeFile('user.json', stringData, (err) => {
            if (err) {
                res.write("UPDATE FAIL");
                res.end();
            } else {
                res.write("Update succesful");
                res.end();
            };
        });

    };


}



// nluk update


module.exports.blukUsersUpdate = (req, res) => {

    const updateUser = req.body;
    console.log(updateUser);

    const data = JSON?.parse(fs.readFileSync('user.json'));
    let newArr = [...data];

    newArr.map(user => {
        for (const upUser of updateUser) {

            if (user.id === upUser.id) {
                const checkAvility = newArr?.findIndex(user => user.id === upUser?.id);
                newArr[checkAvility] = upUser;
            }

        }

    })

    const stringArray = JSON.stringify(newArr);

    fs.writeFile('user.json', stringArray, (err) => {

        if (err) {
            res.write("Error");
            res.end();
        } else {
            res.write("Succfuly update");
            res.end();
        }

    });



}
