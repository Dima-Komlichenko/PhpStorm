const model = require("../models/slider");

//Create => POST
exports.post = function (req, res) {
    console.log("POST start");
    const  element = new model (req.body);
    console.log(element);
    element.save(function (err) {
        if(err) {console.log(err);return err;}
        return  res.sendStatus(201);
    });

}

exports.get = function (req, res) {

}

exports.put = function (req, res){
    console.log("PUT start");
    const element = new model(req.body);
    model.findByIdAndUpdate(
        req.body._id,
        element,
        {},
        function (err,res){
            if(err) {console.log(err); res.send(res);}
            res.send(res);
        }
    )
    //model.findOneAndUpdate();
}

exports.delete = function (req, res) {
    console.log(req.body._id);
    model.findByIdAndDelete(req.body._id);
}