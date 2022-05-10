const express = require("express");

const app = express();

app.use(express.static("./dist/gatefoldr"));

app.get("/*", (_,res) =>
 res.sendFile("index.html", {root: "dist/gatefoldr"})
 );

 app.listen(process.env.PORT || 8080);
