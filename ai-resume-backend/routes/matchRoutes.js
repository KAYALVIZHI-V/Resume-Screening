const express = require("express");
const router = express.Router();

const {
  calculateMatchScore,
  getRankedCandidates,
} = require("../controllers/matchController");

const {
  protect,
  recruiterOnly,
} = require("../middleware/authMiddleware");

// Candidate / Recruiter – must be logged in
router.post("/score", protect, calculateMatchScore);

// Recruiter only – ranking
router.get("/ranked", protect, getRankedCandidates);

module.exports = router;
