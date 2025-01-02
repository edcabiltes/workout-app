require('dotenv').config();

const express = require('express');
const workoutsRouter = require('./routes/workouts');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

app.use('/api/workouts', workoutsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});