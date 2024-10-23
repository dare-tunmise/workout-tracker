require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workouts');
const { default: mongoose } = require('mongoose');
const PORT = process.env.PORT
const dbURI = process.env.dbURI
//invoke express
const app = express();

//connect to the database
mongoose.connect(dbURI)
    .then((result)=> {
        app.listen(PORT, ()=>{
            console.log(`listening on port ${PORT}`)
        });
    })
    .catch((err)=> {
        console.log(err);
    })

//set up middleware

app.use(express.json())
app.use((req, res, next)=>{
    (console.log(req.path, req.method));
    next();
})

//routes
app.use('/api/workouts', workoutRoutes);
