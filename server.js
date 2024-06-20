const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/routes");
require("dotenv").config(); 
const app = express();

const corOptions = {
  origin: "https://roxiler-frontend-vte2.onrender.com",
};

app.use(cors(corOptions))


app.use(express.json());
const PORT = process.env.PORT || 3000;
const PASSWORD = process.env.PASSWORD;

mongoose
  .connect(`mongodb+srv://jay:${PASSWORD}@cluster0.qgs52h0.mongodb.net/productDb`)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api", router);

app.listen("3000", () => {
  console.log("App is running on port 3000");
});
