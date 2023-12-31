const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://0.0.0.0:27017/api');

app.use(express.urlencoded());
app.use(express.json());

// définition des routes
const launchesRoute = require(`./routes/launchesRoute`);
app.use('/launches', launchesRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});