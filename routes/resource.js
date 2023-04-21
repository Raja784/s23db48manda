var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var sugar_controller = require('../controllers/sugar');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// sugar ROUTES ///
// POST request for creating a sugar.
router.post('/sugars', sugar_controller.sugar_create_post);
// DELETE request to delete sugar.
router.delete('/sugars/:id', sugar_controller.sugar_delete);
// PUT request to update sugar.
router.put('/sugars/:id', sugar_controller.sugar_update_put);
// GET request for one sugar.
router.get('/sugars/:id', sugar_controller.sugar_detail);
// GET request for list of all sugar items.
router.get('/sugars', sugar_controller.sugar_list);
module.exports = router;