const express = require("express");
const db = require("../db"); // Import database connection

const router = express.Router();

// 📌 Create a Product
router.post("/", (req, res) => {
  const { name, description } = req.body;
  const sql = "INSERT INTO categories (name, description) VALUES (?, ?)";
  db.query(sql, [name, description], (err, result) => {
    if (err) {
      res.status(500).json({ status: "error", message: err.message });
    } else {
      res.status(201).json({
        status: "success",
        message: "Catgory added",
        data: { id: result.insertId, name, description },
      });
    }
  });
});

// 📌 Read All Products
router.get("/", (req, res) => {
  db.query("SELECT * FROM categories", (err, results) => {
    if (err) {
      res.status(500).json({ status: "error", message: err.message });
    } else {
      res.json({
        status: "success",
        message: "Categories retrieved",
        data: results,
      });
    }
  });
});

// 📌 Read Single Product
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM categories WHERE id = ?", [id], (err, result) => {
    if (err) {
      res.status(500).json({ status: "error", message: err.message });
    } else if (result.length === 0) {
      res.status(404).json({ status: "error", message: "Product not found" });
    } else {
      res.json({
        status: "success",
        message: "Category retrieved",
        data: result[0],
      });
    }
  });
});

// 📌 Update a Product
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  const sql = "UPDATE categories SET name = ?, description = ? WHERE id = ?";
  db.query(sql, [name, description, id], (err, result) => {
    if (err) {
      res.status(500).json({ status: "error", message: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ status: "error", message: "Cagegory not found" });
    } else {
      res.json({
        status: "success",
        message: "Category updated",
        data: { id, name, price, description },
      });
    }
  });
});

// 📌 Delete a Product
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM categories WHERE id = ?", [id], (err, result) => {
    if (err) {
      res.status(500).json({ status: "error", message: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ status: "error", message: "Product not found" });
    } else {
      res.json({ status: "success", message: "Category deleted" });
    }
  });
});

module.exports = router;
