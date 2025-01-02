const express = require('express');
const Workout = require('../models/workoutModel');

const router = express.Router();

// get all workouts
router.get('/', (req, res) => {
    res.json({ message: 'get all workouts' });
});

// get a single workout
router.get('/:id', (req, res) => {
    res.json({ message: 'get a single workout' });
});

// create a workout
router.post('/', async (req, res) => {
    const { exercise, sets, reps, weight } = req.body;

    try {
        const workout = await Workout.create({
            exercise,
            sets,
            reps,
            weight
        });
        res.status(200).json(workout);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

// update a workout
router.patch('/:id', (req, res) => {
    res.json({ message: 'update a workout' });
});

// delete a workout
router.delete('/:id', (req, res) => {
    res.json({ message: 'delete a workout' });
});

module.exports = router;