const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());

const mongoDBUrl = 'mongodb://localhost:27017/mydatabase/plants'; // Replace with your database URL
mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

const Plant = require('../ethno-app/src/app/plant.model'); // Replace with your model

app.get('/plants', async (req, res) => {
  try {
    const plants = await Plant.find({});
    res.json(plants);
  } catch (err) {
    console.error('Error retrieving plants', err);
    res.status(500).json({ error: 'Error retrieving plants' });
  }
});