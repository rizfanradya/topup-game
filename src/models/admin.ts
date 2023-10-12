import mongoose, { Schema, models } from "mongoose";

const adminSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const adminModel = models.adminModel || mongoose.model("admin", adminSchema);
export default adminModel;
