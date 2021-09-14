//TODO: подключить нужную модель
const model = require("../models/template");

// Create => POST
exports.post = function (req, res){
    console.log("Post start");

    const element = new model (req.body);

    element.save(function (err) {
        if(err) console.log(err);return err;
        return res.sendStatus(201);}
)};

// Read => GET
exports.get = function (req, res){
    console.log("Get start");
    model.find({},
        function (err, data){
        if(err) {console.log(err);return err;
            res.json(data);
        }
})};

//Update  => UPDATE
exports.put = function (req, res){

};

//Delete => DELETE
exports.post = function (req, res) {

};
