import { Schema, model, models } from "mongoose";

const ProblemSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    category: { type: String, required: true },
    solution: { type: String, required: true },
  },
  { timestamps: true }
);

const Problem = models.Problem || model("Problem", ProblemSchema);
export default Problem;
