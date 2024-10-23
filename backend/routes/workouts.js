const express = require('express');

const router = express.Router();


// GET all workouts
router.get('/', (req, res)=>{
    res.json({mssg: 'GET all workoust'});
})

//GET a single workouts

router.get('/:id', (req, res)=> {
    const id = req.params.id;
    
})


module.exports = router;