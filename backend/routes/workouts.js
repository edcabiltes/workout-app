const express = require('express');
const {
    getWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController');

const router = express.Router();

// get all workouts
router.get('/', getWorkouts);

// get a single workout
router.get('/:id', getWorkoutById);

// create a workout
router.post('/', createWorkout);

// update a workout
router.patch('/:id', updateWorkout);

// delete a workout
router.delete('/:id', deleteWorkout);

module.exports = router;