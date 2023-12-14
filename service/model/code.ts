import { TVerificationCodes } from "@/types";
import { Model, Schema, model, models } from "mongoose";

const CodeSchema = new Schema<TVerificationCodes>({
  type: String,
  contact: String,
  code: String,
  createdTime: Number,
});

export const CodeModel: Model<TVerificationCodes> =
  models["code"] || model("code", CodeSchema);
