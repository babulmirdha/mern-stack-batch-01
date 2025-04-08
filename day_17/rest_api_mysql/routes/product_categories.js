const express = require("express");
const db = require("../db"); // Import database connection

const router = express.Router();

// 📌 Create a Product
router.post("/", (req, res) => {
  const { product_id, category_id } = req.body;
  const sql =
    "INSERT INTO product_categories (product_id, category_id) VALUES (?, ?)";
  db.query(sql, [product_id, category_id], (err, result) => {
    if (err) {
      res.status(500).json({ status: "error", message: err.message });
    } else {
      res.status(201).json({
        status: "success",
        message: "product category added",
        data: { id: result.insertId, product_id, category_id },
      });
    }
  });
});

module.exports = router;
