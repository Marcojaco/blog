const e = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/post.html");
});

app.listen(port, () => {
    console.log("blog tá rodando a todo vapor")
});