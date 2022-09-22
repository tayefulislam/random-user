const express = require("express");
const app = express();
const fs = require("fs");
// const router = require("./routers/user.router");
const routerUser = require("./routers/user.router");
const port = 5000 || process.env.PORT;



app.use("/", routerUser);

app.use(express.json())


const user = JSON.parse(fs.readFileSync(__dirname + "/user.json"));



app.get('/', (req, res) => {
    res.send(user);
})

app.listen(port, () => {
    console.log("server is rannig at ", port);
})


// export user jon file
module.exports.users = JSON.parse(fs.readFileSync(__dirname + "/user.json"));
