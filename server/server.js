const express = require("express");
const app = express();

//import the routes
const textgen = require("./routes/Textgen");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors(
  {
      origin: ["http://localhost:3000"],
      //this means that the requests originating from the above mentioned origins will be allowed
      credentials: true,
  }
));

//set up the paths for the API
app.use("/api", textgen);

// const corsOptions = {
//   origin: "http://localhost:3000", // replace with the actual origin of your client app
//   methods: "POST", // or specify the methods you need
//   allowedHeaders: [
    
//   ],
// };

// // Enable CORS using custom options
// app.use(cors(corsOptions));


// default route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// Run the server using the command: node server.js
