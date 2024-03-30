const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const apiRouter = require('./router')

const app = express();
const PORT = 3000;
const User = require("./models/userModel");

app.use(cors({ origin: "http://localhost:4200", credentials: true }));
app.use(express.json());

app.use('/api', apiRouter);



mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));




// app.get("/api/climates/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const clima = await ClimateSchema.findById(id);
//     if (!clima) {
//       return res.sendStatus(404).json({ message: "Climate not found" });
//     }
//     res.send(clima);
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.post("/api/climates", async (req, res) => {
//   try {
//     // Извличане на данните от тялото на заявката
//     const {
//       brand,
//       model,
//       coolingCapacity,
//       heatingCapacity,
//       energyEfficiencyRating,
//       price,
//       description,
//       imageUrl,
//     } = req.body;

//     const climate = new ClimateSchema({
//       brand,
//       model,
//       coolingCapacity,
//       heatingCapacity,
//       energyEfficiencyRating,
//       price,
//       description,
//       imageUrl,
//     });

//     // Записване на данните в базата данни
//     const result = await climate.save();
//     res.send(result);

//     // Връщане на статус код 204, което означава, че заявката е успешна, но няма съдържание за връщане
//     res.sendStatus(204);
//   } catch (error) {
//     console.log(error);
//   }
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}`));

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
