# Task-01-FreshSales-CRM-API

You are required to develop a CRUD (Create – Read – Update – Delete) application in NodeJs using ExpressJS framework in this round. Basically, you will use FreshSales CRM API to create a Contact in FreshSales CRM, Retrieve Contact, Update Contact, Delete Contact.

### Required Resources/ Documentation

- FreshSales API Or (Zoho CRM API) documentation [FreshSales API Documentation](https://developer.freshsales.io/api/#create_contact) (Create a sample account with some dummy data for FREE [here](https://www.freshsales.io/signup) and get the API Key from the settings)
- NodeJS server [NodeJS Documentation](https://nodejs.org/en/docs/guides/getting-started-guide/)
- ExpressJS [ExpressJS Documentation](https://expressjs.com/)

## Data format for all the endpoints should be in JSON

1. **Create one endpoint [POST /createContact] to create a new contact in CRM or Database.**

   - Accept the following parameters in the REST API call:
     - `first_name`
     - `last_name`
     - `email`
     - `mobile_number`
     - `data_store` (possible values: 'CRM' or 'DATABASE')
   - Based on the `data_store` value, create the contact in either 'CRM' or 'DATABASE'.

   **API:**

   ```markdown
   POST /createContact(first_name, last_name, email, mobile_number, data_store)
   ```

2. **Create one endpoint [GET /getContact] to retrieve the contact for a given `contact_id`.**

   - Accept the following parameters in the REST API call:
     - `contact_id`
     - `data_store` (possible values: 'CRM' or 'DATABASE')
   - Based on the `data_store` value, get the contact from either 'CRM' or 'DATABASE'.

   **API:**

   ```markdown
   POST /getContact(contact_id, data_store)
   ```

3. **Create one endpoint [POST /updateContact] for a given `contact_id` to update its `email` and `mobile_number`.**

   - Accept the following parameters in the REST API call:
     - `contact_id`
     - `new_email`
     - `new_mobile_number`
     - `data_store` (possible values: 'CRM' or 'DATABASE')
   - Based on the `data_store` value, update the contact in either 'CRM' or 'DATABASE'.

   **API:**

   ```markdown
   POST /updateContact(contact_id, new_email, new_mobile_number, data_store)
   ```

4. **Create one endpoint [POST /deleteContact] for a given `contact_id`.**

   - Accept the following parameters in the REST API call:
     - `contact_id`
     - `data_store` (possible values: 'CRM' or 'DATABASE')
   - Based on the `data_store` value, delete the contact from either 'CRM' or 'DATABASE'.

   **API:**

   ```markdown
   POST /deleteContact(contact_id, data_store)
   ```
