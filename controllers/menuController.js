/* eslint-disable import/prefer-default-export */
import Menu from '../models/menu';

export const createMenu = async (req, res) => {
  try {
    const newMenu = new Menu({
      ...req.body,
    });

    await newMenu.save();
    res.status(200).send(newMenu);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
