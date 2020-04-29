const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.json({
        msg: 'User works!'
    });
});

module.exports = router;