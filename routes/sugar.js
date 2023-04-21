var express = require('express');
const sugar_controllers= require('../controllers/sugar');
var router = express.Router();

/* GET home page. */


router.get('/sugar/:id', sugar_controllers.sugar_detail);
router.get('/detail', sugar_controllers.sugar_view_one_Page);
router.get('/create', sugar_controllers.sugar_create_Page);
router.get('/update', sugar_controllers.sugar_update_Page);

router.get('/delete', sugar_controllers.sugar_delete_Page);

module.exports = router;
