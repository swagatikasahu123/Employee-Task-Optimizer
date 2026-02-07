const express = require("express");
const router = express.Router();

const { calculateTaxForEmployees } = require("../controllers/taxController");

router.post("/calculate", calculateTaxForEmployees);

module.exports = router;
