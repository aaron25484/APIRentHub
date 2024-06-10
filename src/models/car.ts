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

export interface ICarTypeDocument extends Document {
  name: string;
  vehicles: Array<IVehicleDocument>;
}

const carTypeSchema = new Schema<ICarTypeDocument>(
  {
    name: { type: String, required: true, unique: true },
    vehicles: [vehicleSchema],
  },
  { timestamps: true, versionKey: false }
);

export const CarTypeModel = model<ICarTypeDocument>('CarType', carTypeSchema);
