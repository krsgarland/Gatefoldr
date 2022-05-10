const express = require("express");
const { get } = require("http");

const app = express();

app.use(express.static("./dist/gatefoldr"));

app/get("/*", (_res) =>
 resizeBy.sendFile("index.html", {root: "dist/gatefoldr"})
 );

 app.listen(process.env.PORT || 8080);
