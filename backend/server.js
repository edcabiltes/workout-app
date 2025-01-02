require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutsRouter = require('./routes/workouts');
const e = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

app.use('/api/workouts', workoutsRouter);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to MongoDB and listening on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

