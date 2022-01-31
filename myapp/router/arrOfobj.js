const express = require("express");
const arrOfObj = require("../user/arrOfObj");
const router = express.Router()


router.post("/postArray", async (req, res) => {
    const arrayofObj = new arrOfObj({
        array: req.body.array
    })
    let savedArray = await arrayofObj.save();
    res.status(200).json({ savedArray })
})



module.exports = router