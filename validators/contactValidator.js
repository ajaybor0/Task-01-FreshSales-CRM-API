import { body } from 'express-validator';
const createContactValidator = [
  body('first_name').trim().notEmpty().withMessage('First name is Required'),
  body('last_name').trim().notEmpty().withMessage('Last name is Required'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is Required')
    .bail()
    .isEmail()
    .withMessage('Please enter a valid email address.'),
  body('mobile_number')
    .trim()
    .notEmpty()
    .withMessage('Mobile number is Required')
    .bail()
    .isMobilePhone('any', { strictMode: false })
    .withMessage('Please enter a valid mobile number.'),
  body('data_store')
    .trim()
    .notEmpty()
    .withMessage('Invalid data_store value. Use CRM.')
];

const getContactValidator = [
  body('contact_id').trim().notEmpty().withMessage('Contact ID is required.'),
  body('data_store')
    .trim()
    .notEmpty()
    .withMessage('Invalid data_store value. Use CRM.')
];

const updateContactValidator = [
  body('contact_id').trim().notEmpty().withMessage('Contact ID is required.'),
  body('new_email')
    .trim()
    .optional()
    .isEmail()
    .withMessage('Please enter a valid new email address.'),
  body('new_mobile_number')
    .trim()
    .optional()
    .isMobilePhone('any', { strictMode: false })
    .withMessage('Please enter a valid new mobile number.'),
  body('data_store')
    .trim()
    .notEmpty()
    .withMessage('Invalid data_store value. Use CRM.')
];

const deleteContactValidator = [
  body('contact_id').trim().notEmpty().withMessage('Contact ID is required.'),
  body('data_store')
    .trim()
    .notEmpty()
    .withMessage('Invalid data_store value. Use CRM.')
];

export {
  createContactValidator,
  updateContactValidator,
  deleteContactValidator,
  getContactValidator
};
