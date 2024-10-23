require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workouts');
const PORT = process.env.PORT

//invoke express
const app = express();

//set up middleware

app.use(express.json())
app.use((req, res, next)=>{
    (console.log(req.path, req.method));
    next();
})

//routes
app.use('/api/workouts', workoutRoutes);

//listen for requests
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
});