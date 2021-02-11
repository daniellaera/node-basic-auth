const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config()

const app = express();

const connectionString = `${process.env.ATLAS_URI}`;

mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
)
.then(() => {
    console.log('Mongoose Connected...')
})
.catch(() => {
    console.log('Connection Failed!')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With,Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
});

const userRoutes = require('./routes/user');

app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
})
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));