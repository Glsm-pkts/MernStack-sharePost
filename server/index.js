const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const database = require('./config/database');
const authRouter = require('./routes/auth.js'); 
const postRouter = require('./routes/post.js'); 

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use('/', authRouter);
app.use('/', postRouter);

const PORT = 3000;

database(); 

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
