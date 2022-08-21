const path = require('path');
const showHomepage = (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
};
const showMenupage = (req, res) => {
	res.sendFile(path.join(__dirname, '../public/menu.html'));
};
const showLocationpage = (req, res) => {
	res.sendFile(path.join(__dirname, '../public/location.html'));
};
const showarchivepage = (req, res) => {
	res.sendFile(path.join(__dirname, '../public/archive.html'));
};
const showReservationpage = (req, res) => {
	res.sendFile(path.join(__dirname, '../public/reservation.html'));
};
const showStaffpage = (req, res) => {
	res.sendFile(path.join(__dirname, '../public/staff.html'));
};
const showNewspage = (req, res) => {
	res.sendFile(path.join(__dirname, '../public/news.html'));
};
const showGallerypage = (req, res) => {
	res.sendFile(path.join(__dirname, '../public/gallery.html'));
};

module.exports = {
	showHomepage,
	showMenupage,
	showLocationpage,
	showarchivepage,
	showReservationpage,
	showStaffpage,
	showNewspage,
	showGallerypage,
};
