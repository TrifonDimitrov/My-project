const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const modelShema = require('./models/climaModel');

const app = express();

// app.use(cors({
   // origin: // 'http://localhost:4200', // Angular

//}));

mongoose.connect('mongodb://localhost:27017/mydb')
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB", err));



app.get('/api/data', async (req, res) => {
    const data = await modelShema.find();
    res.send(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));