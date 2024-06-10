import { Document, Schema, model, Types } from "mongoose";
import { IBookingDocument } from "./booking";
import { IVehicle } from "./booking";

export interface IUserDocument extends Document {
  name: string;
  email: string;
  password: string;
  bookings: Types.Array<IBookingDocument["_id"]>;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUserDocument>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    bookings: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
  },
  { timestamps: true, versionKey: false }
);

export const userModel = model<IUserDocument>("User", userSchema);
