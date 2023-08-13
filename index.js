const express = require("express");

const app = express();

app.use("/login", (req, res) => {
  res.send("Hello World!");
});
const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);
