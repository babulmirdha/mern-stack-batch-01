const express = require("express"); // Import the express module
const bodyParser = require("body-parser"); // Import the body-parser module
const cors = require("cors"); // Import the cors module

const fs = require("fs"); // Import the fs module

const path = require("path"); // Import the path module
const { type } = require("os");

console.log("dir", __dirname);

const dbFilePath = path.join(__dirname, "db.json"); // Set the path to the database file

const app = express(); // Create an express application
const PORT = 3000; // Set the port number

// Helper function to write data to db.json
const writeDataToFile = (data) => {
  try {
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error writing to file:", err.message);
  }
};

// Helper function to read data from db.json
const readDataFromFile = () => {
  try {
    const data = fs.readFileSync(dbFilePath);
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading from file:", err.message);
    return { products: [] };
  }
};

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies. This is equivalent to express.json()
app.use(cors()); // Enable CORS

// Routes
app.get("/products", (req, res) => {
  const data = readDataFromFile();
  res.json(data);
});

// Read Single Product
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const data = readDataFromFile();
  const product = data.products.find((p) => p.id === parseInt(id));

  if (product) {
    responseData = {
      id: product.id,
      type: "product",
      attributes: product,
    };
    res.json(responseData);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

// Create a Product
app.post("/products", (req, res) => {
  // receive data
  const { name, price, description } = req.body;

  //read data form db.json
  const data = readDataFromFile();

  //create product object
  const newProduct = {
    id: data.products.length + 1,
    name,
    price,
    description,
  };

  data.products.push(newProduct);

  writeDataToFile(data);
  res.status(201).json(newProduct);
});

// Update a Product
app.put("/products/:id", (req, res) => {
  // receive data
  const { id } = req.params;

  const { name, price, description } = req.body;
  const data = readDataFromFile();
  const productIndex = data.products.findIndex((p) => p.id === parseInt(id));

  if (productIndex === -1) {
    res.status(404).json({ error: "Product not found" });
  } else {
    const updatedProduct = {
      id: parseInt(id),
      name,
      price,
      description,
    };
    data.products[productIndex] = updatedProduct;
    writeDataToFile(data);

    res.json(updatedProduct);
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
