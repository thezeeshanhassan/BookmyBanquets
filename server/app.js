const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const apiRouter = require('./routes/index');
const dotenv = require('dotenv');


dotenv.config();
const app = express();


app.get('/', async (req, res) => {
  res.send("Server Runing")
});


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', apiRouter);
app.listen(process.env.PORT, () => {
  console.log('Server is running on http://localhost:3000');
});
