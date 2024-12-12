const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

//Middlewares
app.use(cors());
app.use(express.json());

// Server response
app.get("/", (req, res) => {
    res.send("Mos Media Server is Running");
  });
  
  app.listen(port, () => {
    console.log(`Mos Media Server is running on port: ${port}`);
  });