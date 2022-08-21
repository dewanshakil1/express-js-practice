const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const nodemon = require('nodemon');
const path = require('path');
const pageRoute = require('./Routers/pageRoute');

dotenv.config();
const port = process.env.PORT || 5000;
// init express
const app = express();
// manage data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// state folder
app.use(express.static('public'));
// router

app.use(pageRoute);

app.listen(port, () => {
	console.log(`server is running on port ${port}`.bgBlue.black);
});
