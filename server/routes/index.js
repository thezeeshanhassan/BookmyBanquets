const express = require("express");
const router = express.Router();
const userRouter = require('./userAuth');
const hallRouter = require('./hallRoutes');


router.get('/', (req, res) => {
    res.send("From Router")
})

//all routes will be prefixed with /api/v1
router.use('/user', userRouter);
router.use('/hall', hallRouter);

module.exports = router;