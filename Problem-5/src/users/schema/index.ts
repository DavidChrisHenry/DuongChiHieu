/** @format */

import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  country: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  country: { type: String, required: true },
});

const User = model<IUser>("User", userSchema);

export default User;
