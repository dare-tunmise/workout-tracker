require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT

const app = express();

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
});

app.get('/', (req, res)=> {
    res.json({msg: "update guys"})
})