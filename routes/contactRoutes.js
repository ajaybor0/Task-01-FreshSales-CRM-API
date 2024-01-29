import express from 'express';
import {
  createContact,
  getContact,
  updateContact,
  deleteContact
} from '../controllers/contactController.js';
import runValidation from '../validators/index.js';
import {
  createContactValidator,
  updateContactValidator,
  getContactValidator,
  deleteContactValidator
} from '../validators/contactValidator.js';

const router = express.Router();

router.post(
  '/createContact',
  createContactValidator,
  runValidation,
  createContact
);
router.post(
  '/updateContact',
  updateContactValidator,
  runValidation,
  updateContact
);
router.post(
  '/deleteContact',
  deleteContactValidator,
  runValidation,
  deleteContact
);
router.get('/getContact', getContactValidator, runValidation, getContact);

export default router;
