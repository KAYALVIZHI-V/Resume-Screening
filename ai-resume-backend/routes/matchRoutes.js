const express = require("express");
const router = express.Router();

const {
  calculateMatchScore,
  getRankedCandidates,
} = require("../controllers/matchController");

const { protect } = require("../middleware/authMiddleware");

// Logged in users only
router.post("/score", protect, calculateMatchScore);
router.get("/ranked", protect, getRankedCandidates);

module.exports = router;

