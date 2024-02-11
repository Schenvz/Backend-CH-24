import { model, Schema } from "mongoose";

const collection = "events";
const schema = new Schema(
  {
    name: { type: String, required: true },
    poster: {
      type: String,
      default: "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg",
    },
    place: { type: String, required: true },
    price: { type: Number, default: 10 },
    capacity: { type: Number, default: 50 },
    date: { type: Date, default: new Date() },
  },
  {
    timestamps: true,
  }
);

const Event = model(collection, schema);
export default Event;
