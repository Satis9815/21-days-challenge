import { Schema, model, models } from "mongoose";
const DaySchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    markdown: { type: String, required: true },
    problems: [{ type: Schema.Types.ObjectId, ref: "Problem" }],
  },
  {
    timestamps: true,
  }
);
const Day = models.Day || model("Day", DaySchema);
export default Day;
