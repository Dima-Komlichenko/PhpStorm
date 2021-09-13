// npm install express в terminal для установки модуля npm
// создаем новый файл package.json и пишем "express": "^4.17.1" в dependencies

const express = require("express");
//создадим обьект приложения (сервера)
const  app = express();
app.get("/", function (request, response) {
    response.send("Hello Express");
});

app.listen(3000);

//в терминале выйти из дериктории cd..
// зайти в директорию cd [Name]