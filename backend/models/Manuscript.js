const mongoose = require("mongoose");

const manuscriptSchema = new mongoose.Schema(
  {
    // --- CORE IDENTIFIER ---
    id: { type: String, required: true, unique: true },

    // --- AUTHOR DETAILS ---
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    institution: { type: String },
    coAuthors: { type: String },

    // --- MANUSCRIPT DETAILS ---
    title: { type: String, required: true },
    abstract: { type: String, required: true },
    keywords: { type: String, required: true },

    // --- EDITORIAL TRACKING (Admin Portal) ---
    status: { type: String, default: "Screening" },
    content: { type: String },
    footnotes: { type: String },
    submittedAt: { type: Date, default: Date.now },

    // ==========================================
    // --- NEW: PUBLICATION PLACEMENT ---
    // ==========================================
    volume: { type: String, default: "01" },
    issue: { type: String, default: "01" },

    // --- ORIGINAL FILE PATHS (Multer Uploads) ---
    manuscriptFile: { type: String, required: true },
    authorInfoFile: { type: String, required: true },
    declarationFile: { type: String, required: true },
    photographFile: { type: String },

    // --- EDITORIAL REVISION FIELDS ---
    feedback: { type: String },
    reviewedFile: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Manuscript", manuscriptSchema);