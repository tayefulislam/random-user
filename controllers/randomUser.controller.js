const users = require("./../index")

const ranNum = () => {
    return Math.floor(0 + Math.random() * 100) || 0;
};

module.exports.getRandomUser = (req, res) => {
    // console.log(users.users)
    const user = users.users.find(user => user.id == ranNum());
    res.send(user);
}



