import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    menuItemId: { type: Schema.Types.ObjectId, ref: 'Menu', required: true },
    userPhoneNumber: { type: Number, required: true },
  },
  { timestamps: true },
);

export default model('Order', orderSchema);
