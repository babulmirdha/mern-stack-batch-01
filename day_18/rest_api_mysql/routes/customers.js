const express = require("express");
const db = require("../db"); // Import database connection

const router = express.Router();

router.post("/", (req, res) => {
  const { address, mobile, email, name } = req.body;

  const sql =
    "INSERT INTO customers ( address, mobile, email, name ) VALUES (?,?,?,?)";

  db.query(sql, [address, mobile, email, name], (err, result) => {
    if (err) {
      res.status(500).json({ status: "error", message: err.message });
    } else {
      res.status(201).json({
        status: "success",
        message: "Customer added",
        data: { id: result.insertId, name, address, mobile, email },
      });
    }
  });
});

router.get("/", (req, res) => {
  db.query("SELECT * FROM customers", (err, results) => {
    if (err) {
      res.status(500).json({ status: "error", message: err.message });
    } else {
      res.json({
        status: "success",
        message: "Customers retrieved",
        data: results,
      });
    }
  });
});

module.exports = router;
