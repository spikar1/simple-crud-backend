import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
const app = express();

// middleware
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/products", productRoutes);
app.use("/users", usersRoutes);

// homepage
app.get("/", (req, res) => res.send("Hello from homepage"));

mongoose
  .connect(
    "mongodb+srv://admin:WSuBzex4H00VIkS9@backenddb.z3kjf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(PORT, () =>
      console.log(`Server running on port: http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.log("Connection failed!", err);
  });
