const path = require('path');
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express');
const app = express();
const Joi = require('joi');

const logger = require('./middleware/logger');
// MIDDLEWARE FUNCTION
app.use('/api/courses', courses);
app.use('/',home);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(logger);

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listen to Port  ${port}`))
return;