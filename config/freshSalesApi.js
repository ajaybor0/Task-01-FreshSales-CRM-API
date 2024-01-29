import axios from 'axios';

const freshSalesApiKey = process.env.FRESH_SALES_API_KEY;
const freshSalesDomain = process.env.FRESH_SALES_DOMAIN;

// Axios instance for making requests to FreshSales API
const freshSalesApi = axios.create({
  baseURL: `https://${freshSalesDomain}/api`,
  headers: {
    Authorization: `Token token=${freshSalesApiKey}`,
    'Content-Type': 'application/json'
  }
});

export default freshSalesApi;
