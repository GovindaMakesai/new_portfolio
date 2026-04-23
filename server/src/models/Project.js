const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    liveUrl: { type: String, required: true },
    image: { type: String, required: true },
    videoPreview: { type: String, required: true },
    category: { type: String, enum: ["Web Design", "Development"], required: true },
    summary: { type: String, required: true },
    stack: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
