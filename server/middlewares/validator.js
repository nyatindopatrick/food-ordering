/* eslint-disable import/prefer-default-export */
const capitalize = (str) => str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

const createErrors = (fields, body) => {
  const errors = [];
  fields.forEach((item) => {
    const obj = {};
    if (!body[item]) {
      obj[item] = `${capitalize(item)} is required!`;
      errors.push(obj);
    }
  });
  return errors;
};

export const newMenu = (req, res, next) => {
  const { body } = req;
  const fields = ['name', 'price'];

  const errors = createErrors(fields, body);

  return errors.length === 0 ? next() : res.status(400).send(errors);
};

export const newOrder = (req, res, next) => {
  const { body } = req;
  const fields = ['menuItemId', 'userPhoneNumber'];

  const errors = createErrors(fields, body);

  return errors.length === 0 ? next() : res.status(400).send(errors);
};
