var express = require('express');
const sugar_controllers= require('../controllers/sugar');
var router = express.Router();
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */

router.get('/',sugar_controllers.sugar_view_all_Page );
router.get('/sugar/:id', sugar_controllers.sugar_detail);
router.get('/detail', sugar_controllers.sugar_view_one_Page);
router.get('/create', sugar_controllers.sugar_create_Page);
//router.get('/update', sugar_controllers.sugar_update_Page);
router.get('/update', secured,sugar_controllers.sugar_update_Page);


router.get('/delete', sugar_controllers.sugar_delete_Page);

module.exports = router;
