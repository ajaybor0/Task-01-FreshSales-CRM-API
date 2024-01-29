import freshSalesApi from '../config/freshSalesApi.js';

// @desc     Create a contact
// @method   POST
// @endpoint /createContact
const createContact = async (req, res, next) => {
  try {
    const { first_name, last_name, email, mobile_number, data_store } =
      req.body;

    if (data_store !== 'CRM') {
      res.statusCode = 400;
      throw new Error('Invalid data_store value. Use CRM.');
    }

    const response = await freshSalesApi.post('/contacts', {
      contact: {
        first_name,
        last_name,
        email,
        mobile_number
      }
    });

    res.json(response.data);
  } catch (error) {
    next(error);
  }
};

// @desc     Get contact
// @method   GET
// @endpoint /getContact
const getContact = async (req, res, next) => {
  try {
    const { contact_id, data_store } = req.body;

    if (data_store !== 'CRM') {
      res.statusCode = 400;
      throw new Error('Invalid data_store value. Use CRM.');
    }

    const response = await freshSalesApi.get(`/contacts/${contact_id}`);

    res.json(response.data);
  } catch (error) {
    next(error);
  }
};

// @desc     Update contact
// @method   POST
// @endpoint /updateContact
const updateContact = async (req, res, next) => {
  try {
    const { contact_id, new_email, new_mobile_number, data_store } = req.body;

    if (data_store !== 'CRM') {
      res.statusCode = 400;
      throw new Error('Invalid data_store value. Use CRM.');
    }

    const response = await freshSalesApi.put(`/contacts/${contact_id}`, {
      contact: {
        email: new_email,
        mobile_number: new_mobile_number
      }
    });

    res.json(response.data);
  } catch (error) {
    next(error);
  }
};

// @desc     Delete contact
// @method   POST
// @endpoint /deleteContact
const deleteContact = async (req, res, next) => {
  try {
    const { contact_id, data_store } = req.body;

    if (data_store !== 'CRM') {
      res.statusCode = 400;
      throw new Error('Invalid data_store value. Use CRM.');
    }

    const response = await freshSalesApi.delete(`/contacts/${contact_id}`);

    res.json(response.data);
  } catch (error) {
    next(error);
  }
};

export { createContact, getContact, updateContact, deleteContact };
