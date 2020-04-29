const express = require('express');
const router = express.Router();

// router also has use method just like app but it is specific to this router

// Instead of app we'll use router for more modular purpose
router.get('/', (req,res,next) => {
    res.json({
        msg: 'Router works!'
    });
});

module.exports = router;