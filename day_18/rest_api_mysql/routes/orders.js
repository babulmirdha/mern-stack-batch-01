const express = require("express");
const db = require("../db"); // Import database connection

const router = express.Router();

router.post("/", (req, res) => {
  const { customer_id } = req.body;

  order_status = "pending";
  total_price = "0";
  order_date = new Date();

  const sql =
    "INSERT INTO orders ( status, total_price, order_date, customer_id ) VALUES (?,?,?,?)";

  db.query(
    sql,
    [order_status, total_price, order_date, customer_id],
    (err, result) => {
      if (err) {
        res.status(500).json({ status: "error", message: err.message });
      } else {
        res.status(201).json({
          status: "success",
          message: "Customer added",
          data: {
            id: result.insertId,
            order_status,
            total_price,
            order_date,
            customer_id,
          },
        });
      }
    }
  );
});

router.get("/", (req, res) => {
  db.query("SELECT * FROM orders", (err, results) => {
    if (err) {
      res.status(500).json({ status: "error", message: err.message });
    } else {
      res.json({
        status: "success",
        message: "Orders retrieved",
        data: results,
      });
    }
  });
});

module.exports = router;
