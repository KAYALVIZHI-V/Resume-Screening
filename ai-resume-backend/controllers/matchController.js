const MatchResult = require("../models/MatchResult");

const skillsList = [
  "react",
  "node",
  "javascript",
  "mongodb",
  "express",
  "html",
  "css",
  "java",
  "python",
];


// ===============================
// POST: Calculate Match Score
// ===============================
exports.calculateMatchScore = async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;

    if (!resumeText || !jobDescription) {
      return res.status(400).json({
        success: false,
        message: "Resume text and Job Description are required",
      });
    }

    const resumeLower = resumeText.toLowerCase();
    const jobLower = jobDescription.toLowerCase();

    // Skills required by job
    const requiredSkills = skillsList.filter(skill =>
      jobLower.includes(skill)
    );

    // Skills matched in resume
    const matchedSkills = requiredSkills.filter(skill =>
      resumeLower.includes(skill)
    );

    // Missing skills
    const missingSkills = requiredSkills.filter(
      skill => !matchedSkills.includes(skill)
    );

    const matchPercentage =
      requiredSkills.length === 0
        ? 0
        : Math.round((matchedSkills.length / requiredSkills.length) * 100);

    // Save result in DB
    const savedResult = await MatchResult.create({
      resumeText,
      jobDescription,
      matchPercentage,
      matchedSkills,
      missingSkills,
    });

    res.status(200).json({
      success: true,
      data: savedResult,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};


// ===============================
// GET: Ranked Candidates
// ===============================
exports.getRankedCandidates = async (req, res) => {
  try {
    const results = await MatchResult.find()
      .sort({ matchPercentage: -1 });

    res.status(200).json({
      success: true,
      count: results.length,
      data: results,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch ranked candidates",
    });
  }
};
