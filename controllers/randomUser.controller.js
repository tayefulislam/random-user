

const fs = require("fs");
const data = JSON?.parse(fs.readFileSync('user.json'));
const ranNum = () => {
    return Math.floor(0 + Math.random() * data.length || 100) || 0;
};

module.exports.getRandomUser = async (req, res) => {
    // console.log(users.users)

    const user = await data.find(user => user.id === ranNum());

    res.send(user);
}



