const express = require("express");

const app = express();

/**
 * Express routes and middlewares
 */

app.get("/", (req, res) => {
  res.send("API is running");
});
/**
 * Server
 */

app.listen(5010, console.log("server listening on 5010"));
