const remixController=require("../controllers/remixController.js");

const db=require('../models/index.js')

const router10 = require("express").Router();

router10.post("/add_users", remixController.addUser);

router10.get("/get_users", remixController.getAllStore);
router10.get("/:user_id", remixController.getOneUser);

// router10.get("/:product_Id", remixController.getOneStore);

router10.put("/updateUsers/:user_id", remixController.updateUser);

router10.delete("/deleteUser/:user_id", remixController.deleteUser);

module.exports = router10;