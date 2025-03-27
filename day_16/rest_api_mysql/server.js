const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/products"); // Import product routes
const categoriesRoutes = require("./routes/categories");

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// use category routes
app.use("/categories", categoriesRoutes);

// Use Product Routes
app.use("/products", productRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
