// const mongoose = require('mongoose');
// const express = require('express');
// const router = require('./routes/routes')
// const env = require ('dotenv')

// const app = express();

// const port = 5000;
// const DB = 'mongodb+srv://priyanshusharma8608:7QoxJahhl3CRUbyg@cluster0.bq0qt.mongodb.net/';

// mongoose.connect(DB)
//     .then(() => { console.log("mongoDB connected"); })
//     .catch((e) => { console.log(e); });

// app.use('/', router)

// app.listen(port, ()=> { console.log('Running properly ${port}'); })

const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes');
require('dotenv').config()
const app = express();
app.use(express.json())
const port = 5000;
mongoose.connect(process.env.MongoDB)
    .then(() => { console.log('Server Successfully Connected') })
    .catch((err) => { console.log(err) })
// app.use('/', router)
app.listen(port, () => { console.log(`Server is Running port - ${port}`) })









