const express = require('express');
const app = express();
const cors = require('cors');
const contactRouter = require('./router/contact.router');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use('/', contactRouter);

module.exports = app;