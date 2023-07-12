const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const URI = process.env.NOT_LIVE == "true" ? process.env.MONGO_TEST_URI : process.env.MONGO_LIVE_URI

mongoose
    .connect(URI)
    .then(() => {
        console.log(`Connected to database at ${URI}`)
    })
    .catch((error) => {
        throw error
    })