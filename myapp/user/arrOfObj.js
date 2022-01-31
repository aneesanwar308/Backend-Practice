const mongoose = require("mongoose");

const arrObjSchema = new mongoose.Schema({
    array: {
        type: Array
    }
})

module.exports = mongoose.model("arrOfObj", arrObjSchema)