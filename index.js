const express = require("express");
const app = express();
const product = require("./api/product");

app.use(express.json({ extended: false }));

app.use("/api/product", (req, res) => {
  try {
    res.send("Hello!");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }

});

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);


// app.use("/login", (req, res) => {
//   res.send("Hello World!");
// });

