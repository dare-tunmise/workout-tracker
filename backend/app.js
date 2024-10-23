require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT
const app = express();
const workoutRoutes = require('./routes/workouts');

app.use((req, res, next)=>{
    (console.log(req.path, req.method));
    next();
})

app.use('/api/workouts', workoutRoutes);

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
});