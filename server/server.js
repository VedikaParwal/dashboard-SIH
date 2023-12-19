const express = require("express");
const app = express();

//import the routes
const textgen = require("./routes/Textgen");

const PORT = process.env.PORT || 4000;

app.use(express.json());

//set up the paths for the API
app.use("/api", textgen);

// default route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// Run the server using the command: node server.js
