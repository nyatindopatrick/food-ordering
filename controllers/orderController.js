/* eslint-disable import/prefer-default-export */
import Order from '../models/orders';

export const createOrder = async (req, res) => {
  try {
    const newOrder = new Order({
      ...req.body,
    });
    await newOrder.save();
    res.status(200).send(newOrder);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
