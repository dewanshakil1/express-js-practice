const path = require('path');
const showhomepage = (req, res) => {
	res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
};
const showBlogpage = (req, res) => {
	res.status(200).sendFile(path.join(__dirname, '../public/blog.html'));
};
const showShoppage = (req, res) => {
	res.status(200).sendFile(path.join(__dirname, '../public/shop.html'));
};
const showSinglebogpage = (req, res) => {
	res.status(200).sendFile(path.join(__dirname, '../public/singleblog.html'));
};
const showHome2page = (req, res) => {
	res
		.status(200)
		.sendFile(path.join(__dirname, '../public/index-2#price.html'));
};
const showUservalupage = (req, res) => {
	res.status(200).join(req.body);
};

module.exports = {
	showhomepage,
	showBlogpage,
	showShoppage,
	showSinglebogpage,
	showHome2page,
	showUservalupage,
};
