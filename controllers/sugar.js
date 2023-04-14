var sugar = require('../models/sugar');
// List of all sugars
exports.sugar_list = function (req, res) {
    res.send('NOT IMPLEMENTED: sugar list');
};
// for a specific sugar.
/*exports.sugar_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: sugar detail: ' + req.params.id);
};*/

// for a specific Costume.
exports.sugar_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await sugar.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
/*exports.sugar_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: sugar update PUT' + req.params.id);
};*/

exports.sugar_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await sugar.findById( req.params.id)
    // Do updates of properties
    if(req.body.sugar_type)
    toUpdate.sugar_type = req.body.sugar_type;
    if(req.body.sugar_form) toUpdate.sugar_form = req.body.sugar_form;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
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