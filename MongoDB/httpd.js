const express = require("express");
const path = require("path");
const app = express();

//добавили "mongoose": "^6.0.5",
//     "body-parser": "^1.19.0"

app.use(express.static(path.join(__dirname,"public")));

//установим модуль для разборки запросов
const  bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

//настройка соединения с базой
const  mongoUri = "mongodb+srv://User1:User1@cluster0.bz76v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoose = require("mongoose");


mongoose.connect(//соединиться с базой
    mongoUri,
    { useNewUrlParser: true, useUnifiedTopology: true }, //обязательные параметры
    function (err){ //после соединения обработать результат
        if(err){console.log(err);return;} //если ощиюка = вывести и остановить запуск
        app.listen(3000); // если все ок - запускаем
    }
)


/*
app.listen(3000);*/
