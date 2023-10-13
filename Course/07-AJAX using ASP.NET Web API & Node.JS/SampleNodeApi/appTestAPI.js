const express = require("express")
const cors = require("cors")
const appTest = express()

appTest.use(cors())

const router = express.Router()

router.get("/Sum", function (req, res) {
    const a = req.query.a
    const b = req.query.b
    const c = parseInt(a) + parseInt(b)

    res.status(200).json(c)
})

appTest.use("/", router)

appTest.listen("4467", function () {
    console.log("Started listening at 4467...")
})