var sugar = require('../models/sugar');
// List of all sugars
exports.sugar_list = function (req, res) {
    res.send('NOT IMPLEMENTED: sugar list');
};
// for a specific sugar.
exports.sugar_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: sugar detail: ' + req.params.id);
};
// Handle sugar create on POST.
exports.sugar_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: sugar create POST');
};
// Handle sugar delete form on DELETE.
exports.sugar_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: sugar delete DELETE ' + req.params.id);
};
// Handle sugar update form on PUT.
exports.sugar_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: sugar update PUT' + req.params.id);
};


// List of all Sugars
exports.sugar_list = async function (req, res) {
    try {
        theSugars = await sugar.find();
        res.send(theSugars);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// VIEWS
// Handle a show all view
exports.sugar_view_all_Page = async function (req, res) {
    try {
        theSugars = await sugar.find();
        res.render('sugar', { title: 'sugar Search Results', results: theSugars });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}

exports.sugar_create_post = async function (req, res) {

    console.log(req.body)

    let document = new sugar();

    document.sugar_name = req.body.sugar_name;

    document.sugar_form = req.body.sugar_form;

    document.cost = req.body.cost;

    try {
        let result = await document.save();
        res.send(result);
    }

    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }

};