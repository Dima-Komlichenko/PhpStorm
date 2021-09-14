const mongoose = require("mongoose");
const  Schema = mongoose.Schema;

const ModelName = new Schema({
    //TODO описать поля в коллекции
        name:String
    // описание полей не имеет  значения
    // JS создает обьект динамически
    });

module.exports = mongoose.model("ModelName", ModelName);
