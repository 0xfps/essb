const mongoose = require("mongoose")

const dbSchema = new mongoose.Schema({
    regNo: {
        type: mongoose.SchemaTypes.Number
    },
    firstName: {
        type: mongoose.SchemaTypes.String
    },
    lastName: {
        type: mongoose.SchemaTypes.String
    }
})

module.exports = mongoose.model("db", dbSchema)