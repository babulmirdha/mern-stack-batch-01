const express = require("express");
const db = require("../db"); // Import database connection

const router = express.Router();

router.post("/", (req, res) => {
  const { price, quantity, product_id, customer_id } = req.body;

  db.query(
    "SELECT * FROM orders WHERE customer_id = ? and status = 'pending'",
    [customer_id],
    (err, result) => {
      if (err) {
        res.status(500).json({ status: "error", message: err.message });
      } else if (result.length === 0) {
        // insert a new order

        // No pending order, so create one
        db.query(
          "INSERT INTO orders (customer_id, status) VALUES (?, 'pending')",
          [customer_id],
          (err, insertResult) => {
            if (err) {
              return res
                .status(500)
                .json({ status: "error", message: err.message });
            }

            const orderId = insertResult.insertId;

            insertOrderItem(orderId);
          }
        );

        //end
      } else {
        console.log(result[0]);
        let orderId = result[0].id;

        insertOrderItem(orderId);
      }
    }
  );

  function insertOrderItem(order_id) {
    const sql =
      "INSERT INTO order_items ( price, quantity, product_id, order_id ) VALUES (?,?,?,?)";

    db.query(sql, [price, quantity, product_id, order_id], (err, result) => {
      if (err) {
        res.status(500).json({ status: "error", message: err.message });
      } else {
        res.status(201).json({
          status: "success",
          message: "Order Items added",
          data: {
            id: result.insertId,
            price,
            quantity,
            product_id,
            order_id: order_id,
          },
        });
      }
    });
  }
});

module.exports = router;
