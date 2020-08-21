const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { db } = require('./db');

const app = express();
const port = process.env.PORT ? process.env.PORT : 4000;

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

// Error Catching Endware
app.use((err, req, res, next) => {
    console.error(err, typeof next);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

const init = async() => {
    try {
        await db.sync();
        app.listen(port, () => {
            console.log(`App listening on PORT ${port}`);
        });
    } catch (err) {
        console.error('ERROR: ', err);
    }
}

init();