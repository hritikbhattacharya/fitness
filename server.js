const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("build"));

app.post("/api/saveData", (req, res) => {
  fs.readFile("UserResponse.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .send("An error occurred while reading from the file.");
    }

    let existingData = JSON.parse(data || "[]");

    existingData.push(req.body);

    fs.writeFile(
      "UserResponse.json",
      JSON.stringify(existingData, null, 2),
      (err) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .send("An error occurred while writing to the file.");
        }

        res.status(200).send("Data successfully written to file.");
      }
    );
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
