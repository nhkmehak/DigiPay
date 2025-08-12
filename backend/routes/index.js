const express = require("express")
const app = express()
const router = express.Router();
const userrouter = require('./user')
const accountrouter = require("./account")

app.use(express.json());

router.use("/user", userrouter)
router.use("/account", accountrouter)
module.exports=router;
