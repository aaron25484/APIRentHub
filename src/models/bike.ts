import { Document, Schema, model } from 'mongoose';

export interface IVehicleDocument extends Document {
  name: string;
}

const vehicleSchema = new Schema<IVehicleDocument>(
  {
    name: { type: String, required: true },
  },
  { _id: false } 
);

export interface IBikeTypeDocument extends Document {
  name: string;
  vehicles: Array<IVehicleDocument>;
}

const bikeTypeSchema = new Schema<IBikeTypeDocument>(
  {
    name: { type: String, required: true, unique: true },
    vehicles: [vehicleSchema],
  },
  { timestamps: true, versionKey: false }
);

export const BikeTypeModel = model<IBikeTypeDocument>('BikeType', bikeTypeSchema);
