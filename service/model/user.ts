import { UserModelSchema } from "@/types/user";
import { Model, Schema, model, models } from "mongoose";
import { hashPassword } from "../utils/tool";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    // password: {
    //   type: String,
    //   required: true,
    //   set: (val: string) => hashPassword(val),
    //   get: (val: string) => hashPassword(val),
    //   select: false,
    // },
    avatar: {
      type: String,
      require: true,
    },
    github: {
      type: String,
    },
    emmail: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const UserModel: Model<UserModelSchema> =
  models["user"] || model("user", UserSchema);
