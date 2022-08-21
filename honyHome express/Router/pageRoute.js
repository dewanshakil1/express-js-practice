const express = require('express');
const path = require('path');

const {
	showhomepage,
	showBlogpage,
	showShoppage,
	showSinglebogpage,
	showUservalupage,
} = require('../Controller/controllerPage');
const route = express.Router();
// route
route.get('/', showhomepage);
route.get('/blog', showBlogpage);
route.get('/shop', showShoppage);
route.get('/singleblog', showSinglebogpage);
route.post('/uservalue', showUservalupage);

module.exports = route;
