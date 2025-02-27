const express = require("express");
const router = express.Router();
const userRouter = require('./userAuth');


router.get('/', (req, res) => {
    res.send("From Router")
})

//all routes will be prefixed with /api/v1
router.use('/user', userRouter);

module.exports = router;