const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("build"));

app.post("/api/saveData", (req, res) => {
  fs.writeFile(
    "UserResponse.json",
    JSON.stringify(req.body, null, 2),
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("An error occurred while writing to the file.");
      } else {
        res.status(200).send("Data successfully written to file.");
      }
    }
  );
});

app.listen(3000, () => console.log("Server running on port 3000"));
