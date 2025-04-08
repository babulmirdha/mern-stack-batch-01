const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// Import product routes
const productRoutes = require("./routes/products");
// Import category routes
const categoriesRoutes = require("./routes/categories");
// Import product category routes
const productCategoriesRoutes = require("./routes/product_categories");

const app = express();
const HOST = process.env.SERVER_IP || "127.0.0.1";
const PORT = process.env.SERVER_PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// use category routes
app.use("/categories", categoriesRoutes);

// Use Product Routes
app.use("/products", productRoutes);
3;

// Use Product Category Routes
app.use("/product-categories", productCategoriesRoutes);

// Start Server
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
