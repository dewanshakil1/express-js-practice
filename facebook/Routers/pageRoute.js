const express = require('express');
const path = require('path');
const {
	showhomepage,
	showaboutpage,
	showcontactpage,
} = require('../Controllers/conPage');
const { showcheak, showagecheak } = require('../Controllers/helperContolar');

// init router
const router = express.Router();

// router
router.get('/', showhomepage);
router.get('/about', showaboutpage);
router.get('/contact', showcontactpage);
router.post('/cheack_age', showagecheak);
router.get('/check/:dollor/:type', showcheak);

// export router
module.exports = router;
