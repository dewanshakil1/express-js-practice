const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const nodemon = require('nodemon');
const pageRoute = require('./Router/pageRoute');
const { urlencoded } = require('express');

dotenv.config();
const port = process.env.PORT || 3000;
// init express
const app = express();
// state folder
app.use(express.static('public'));
//router import
app.use(pageRoute);
// form value get
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
	console.log(`surver is running on ${port}`.bgBlue.black);
});
