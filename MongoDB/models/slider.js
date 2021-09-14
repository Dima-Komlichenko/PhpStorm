const mongoose = require("mongoose");
const  Schema = mongoose.Schema;

const Slide = new Schema({
    name:String,
    msg1:String,
    msg2:String,
    msg3:String,
    msg4:String,
    url:String,
    imgUrl:String,
    linkText:String
});

module.exports = mongoose.model("Slide", Slide);