const express = require("express");
const app = express();

const controller = require("./controllers/simpleController");

// Установить каталог для статических файлов
app.use(express.static("public"));

app.route("/1") // обработка такого-то запроса
    .get(controller.get)
    .post(controller.post);

app.listen(3000);


