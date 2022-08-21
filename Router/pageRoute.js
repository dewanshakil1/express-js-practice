const express = require('express');
const path = require('path');
const {
	showHomepage,
	showMenupage,
	showLocationpage,
	showarchivepage,
	showReservationpage,
	showStaffpage,
	showNewspage,
	showGallerypage,
} = require('../Controllers/pageControlar');

const router = express.Router();
// router
router.get('/', showHomepage);
router.get('/menu', showMenupage);
router.get('/location', showLocationpage);
router.get('/archive', showarchivepage);
router.get('/reservation', showReservationpage);
router.get('/staff', showStaffpage);
router.get('/news', showNewspage);
router.get('/gallery', showGallerypage);
module.exports = router;
