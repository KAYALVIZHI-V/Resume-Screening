const mongoose = require("mongoose");

const matchResultSchema = new mongoose.Schema(
  {
    // 🔹 Link result to logged-in user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tempuser", // ⚠️ Must match your User model name
      required: true,
    },

    resumeText: {
      type: String,
      required: true,
    },

    jobDescription: {
      type: String,
      required: true,
    },

    matchPercentage: {
      type: Number,
      required: true,
    },

    matchedSkills: {
      type: [String],
      default: [],
    },

    missingSkills: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MatchResult", matchResultSchema);