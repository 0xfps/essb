const express = require("express")
const chatRouter = express.Router()
const chatController = require("./chatcontroller")

chatRouter.post("/", chatController)

module.exports = chatRouter