const path = require('path');
const showhomepage = (req, res) => {
	res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
};
const showaboutpage = (req, res) => {
	res.status(200).sendFile(path.join(__dirname, '../public/about.html'));
};
const showcontactpage = (req, res) => {
	res.status(200).sendFile(path.join(__dirname, '../public/contact.html'));
};
module.exports = {
	showhomepage,
	showaboutpage,
	showcontactpage,
};
