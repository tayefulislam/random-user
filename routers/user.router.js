const express = require("express");

const router = express.Router();
router.use(express.json())
const userController = require("../controllers/user.controller");
const randomUserController = require("../controllers/randomUser.controller")

router.route('/user/random').get(randomUserController.getRandomUser);
router.route('/user/all').get(userController.getAllUser);
router.route('/user/save').post(userController.saveUser);
router.route('/user/delete/:id').delete(userController.deleteUser);
router.route('/user/update').patch(userController.updateUser);
router.route('/user/bulk-update').patch(userController.blukUsersUpdate);


module.exports = router;