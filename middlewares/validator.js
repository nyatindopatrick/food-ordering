/* eslint-disable import/prefer-default-export */
const capitalize = (str) => str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

export const newMenu = (req, res, next) => {
  const { body } = req;
  const fields = ['name', 'price'];

  const errors = [];
  fields.forEach((item) => {
    const obj = {};
    if (!body[item]) {
      obj[item] = `${capitalize(item)} is required!`;
      errors.push(obj);
    }
  });
  return errors.length === 0 ? next() : res.status(400).send(errors);
};
