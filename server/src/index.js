const express = require('express');
const mongoose = require('mongoose');
const core = require('cors')
const router = require('./routes/routes');
require('dotenv').config()

const app = express();
app.use(core())
app.use(express.json())

const port = 5000 || process.env.port;

mongoose.connect(process.env.MongoDB)
    .then(() => { console.log('Server Successfully Connected') })
    .catch((err) => { console.log(err) })

app.use('/', router)

app.listen(port, () => { console.log(`Server is Running port - ${port}`) })