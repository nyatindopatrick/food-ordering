/* eslint-disable import/prefer-default-export */
import Order from '../models/orders';
import Menu from '../models/menu';
import sendMessage from '../utils/sms';

export const createOrder = async (req, res) => {
  const { menuItemId, userPhoneNumber } = req.body;
  try {
    const menuItem = await Menu.findById(menuItemId);
    if (menuItem) {
      const newOrder = new Order({
        menuItemId,
        userPhoneNumber,
      });
      await newOrder.save();
      const msg = `Your order for ${menuItem.name} has been created successfully!`;
      sendMessage(userPhoneNumber, msg);
      res.status(200).send(newOrder);
    } else {
      res.status(400).send({ message: 'menu item not found!' });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
