import mongoose, { Schema, models } from "mongoose";

const adminSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

let adminModel: any;
if (models.admin) {
  adminModel = mongoose.model("admin");
} else {
  adminModel = mongoose.model("admin", adminSchema);
}

export default adminModel;
