const express = require('express');
const Workout = require('../models/WorkoutModel')

const router = express.Router();


// GET all workouts
router.get('/', (req, res)=>{
    res.json({mssg: 'GET all workoust'});
})

//GET a single workouts
router.get('/:id', (req, res)=> {
    // const id = req.params.id;
    res.json({mssg: 'GET a single workout'}) 
})

//POST  a new workout
router.post('/', async (req, res)=> {
    const workout = new Workout({
        title: "pushups",
        reps: 200,
        load: 40
    })
    workout.save()
        .then((result)=> {
            res.send(result)
        })
        .catch((err)=> {
            console.log(err)
        })
    // res.json({mssg: "POST a new workout"})
})

//DELETE  a new workout
router.delete('/:id', (req, res)=> {
    res.json({mssg: "DELETE a workout"})
})

//UPDATE  a new workout
router.patch('/:id', (req, res)=> {
    res.json({mssg: "UPDATE a workout"})
})

module.exports = router;