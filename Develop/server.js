const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, function (req, res) {
  console.log("App listening on PORT: " + PORT);
});
