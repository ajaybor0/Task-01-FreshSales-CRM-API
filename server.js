import express from 'express';
import 'dotenv/config';

import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/', contactRoutes);

//-------------------------------------
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
