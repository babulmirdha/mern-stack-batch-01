const db = require("./db"); // Import your database connection

const createTables = () => {
  db.query(
    `
    CREATE TABLE IF NOT EXISTS categories (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      description TEXT
    )
  `,
    (err) => {
      if (err) console.error("Error creating categories table:", err.message);
      else console.log("Categories table is ready.");
    }
  );

  db.query(
    `
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      price DECIMAL(10,2) NOT NULL,
      description TEXT
    )
  `,
    (err) => {
      if (err) console.error("Error creating products table:", err.message);
      else console.log("Products table is ready.");
    }
  );

  db.query(
    `
    CREATE TABLE IF NOT EXISTS product_categories (
      id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT NOT NULL,
      category_id INT NOT NULL,
      FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
      FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
      UNIQUE KEY (product_id, category_id)
    )
  `,
    (err) => {
      if (err) console.error("Error creating cart table:", err.message);
      else console.log("Cart table is ready.");
    }
  );

  db.query(
    `
    CREATE TABLE IF NOT EXISTS customers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      mobile VARCHAR(20) UNIQUE NOT NULL,
      address TEXT
    )
  `,
    (err) => {
      if (err) console.error("Error creating customers table:", err.message);
      else console.log("Customers table is ready.");
    }
  );

  db.query(
    `
    CREATE TABLE IF NOT EXISTS orders (
      id INT AUTO_INCREMENT PRIMARY KEY,
      customer_id INT NOT NULL,
      order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      total_price DECIMAL(10,2) NOT NULL,
      status ENUM('pending', 'completed', 'canceled') DEFAULT 'pending',
      FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
    )
  `,
    (err) => {
      if (err) console.error("Error creating orders table:", err.message);
      else console.log("Orders table is ready.");
    }
  );

  db.query(
    `
    CREATE TABLE IF NOT EXISTS order_items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      order_id INT NOT NULL,
      product_id INT NOT NULL,
      quantity INT NOT NULL CHECK (quantity > 0),
      price DECIMAL(10,2) NOT NULL,
      FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
      FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
      UNIQUE KEY (order_id, product_id)
    )
  `,
    (err) => {
      if (err) console.error("Error creating order_items table:", err.message);
      else console.log("Order Items table is ready.");
    }
  );
};

createTables();
