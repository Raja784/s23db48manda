var sugar = require('../models/sugar');
// List of all sugars
exports.sugar_list = async function(req, res) {

 try{
    thesugar = await sugar.find();
    res.send(thesugar);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// for a specific sugar.
/*
exports.sugar_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: sugar detail: ' + req.params.id);
};*/
// Handle sugar create on POST.
// Handle sugar create on POST.
exports.sugar_create_post = async function(req, res) {
    console.log(req.body)
    let document = new sugar();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"sugar_type":"goat", "cost":12, "size":"large"}
    document.sugar_Name = req.body.sugar_Name;
    document.sugar_form = req.body.sugar_form;
    document.Cost = req.body.Cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    


// Handle sugar delete form on DELETE.
/*
exports.sugar_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: sugar delete DELETE ' + req.params.id);
};*/
exports.sugar_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await sugar.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle sugar update form on PUT.
/*
exports.sugar_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: sugar update PUT' + req.params.id);
};*/

//Handle sugar update form on PUT.
exports.sugar_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await sugar.findById( req.params.id)
// Do updates of properties
if(req.body.sugar_Name) toUpdate.sugar_Name = req.body.sugar_Name;
if(req.body.sugar_form) toUpdate.sugar_form = req.body.sugar_form;
if(req.body.Cost) toUpdate.Cost = req.body.Cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// VIEWS
// Handle a show all view
exports.sugar_view_all_Page = async function(req, res) {
    try{
    thesugar = await sugar.find();
    res.render('sugar', { title: 'sugar Search Results', results: thesugar });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // Handle a show one view with id specified by query
exports.sugar_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await sugar.findById( req.query.id)
    res.render('sugardetail',
   { title: 'sugar Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
  
   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.sugar_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('sugarcreate', { title: 'sugar Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a costume.
// query provides the id
 exports.sugar_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await sugar.findById(req.query.id)
    res.render('sugarupdate', { title: 'sugar Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
      

   // for a specific sugar.
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

  // Handle a delete one view with id from query
exports.sugar_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await sugar.findById(req.query.id)
    res.render('sugardelete', { title: 'sugar Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    
