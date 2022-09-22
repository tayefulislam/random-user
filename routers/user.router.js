const express = require("express");

const router = express.Router();
const userController = require("../controllers/user.controller");
const randomUserController = require("../controllers/randomUser.controller")

router.route('/user/random').get(randomUserController.getRandomUser);
router.route('/user/all').get(userController.getAllUser);


module.exports = router;