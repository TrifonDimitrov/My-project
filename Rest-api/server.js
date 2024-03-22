const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ClimateSchema = require("./models/climaModel");

const app = express();

app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true, //access-control-allow-credentials:true
  })
);
app.use(express.static(__dirname + "/public"));

mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.get("/api/climates", async (req, res) => {
  const data = await ClimateSchema.find();
  res.send(data);
});

app.post("/api/climates", async (req, res) => {
  const climate = new ClimateSchema({
      owner: "5f9b3e4e4e0d3f3d3c3c3c3c",
      brand: "Mitsubishi",
      model: "MSZ-LN25VG",
      coolingCapacity: 2.5,
      heatingCapacity: 3.2,
      energyEfficiencyRating: "A++",
      price: 1000,
      description: "A+++",
      imageUrl: "https://www.google.com",
  });
  const result = await climate.save();
  res.send(result);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

// app.post("/api/climates", async (req, res) => {
//   const climate = new ClimateSchema({
//       owner: "5f9b3e4e4e0d3f3d3c3c3c3c",
//       brand: "Mitsubishi",
//       model: "MSZ-LN25VG",
//       coolingCapacity: 2.5,
//       heatingCapacity: 3.2,
//       energyEfficiencyRating: "A++",
//       price: 1000,
//       description: "A+++",
//       imageUrl: "https://www.google.com",
//   });
//   const result = await climate.save();
//   res.send(result);
// });