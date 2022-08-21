const express = require('express');
const dotenv = require('dotenv');
const nodemon = require('dotenv');
const colos = require('colors');
const path = require('path');
const pageRoute = require('./Router/pageRoute');
const { showHomepage } = require('./Router/pageRoute');

// config dotenv
dotenv.config();
const PORT = process.env.PORT || 3000;
// init express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// static file
app.use('/public', express.static('public'));

// app.get('/reservation', (req, res) => {
// 	res.sendFile(path.join(__dirname, '/public/reservation.html'));
// });
// app.get('/staff', (req, res) => {
// 	res.sendFile(path.join(__dirname, '/public/staff.html'));
// });
// app.get('/news', (req, res) => {
// 	res.sendFile(path.join(__dirname, '/public/news.html'));
// });
// app.get('/gallery', (req, res) => {
// 	res.sendFile(path.join(__dirname, '/public/gallery.html'));
// });
app.post('/regervation', (req, res) => {
	res.status(200).json(req.body);
});
app.use(pageRoute);

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`.bgBlue.black);
});
