const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// File imports
const routes = require('./routes');
const db = require('../db');

const port = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use('/api', routes);

// Server Initialization
db.fridge.sync({force: true});
db.users.sync({force: true})
  .then(() => {
    db.messageInfo.sync({force: true});
    db.fridgeItems.sync({force: true})
      .then(() => {
        app.listen(port, () => {
          console.log('Listening on Port: ', port);
        });
      })
      .catch(err => {
        console.log('Error syncing FridgeItems table: ', err);
      });
  })
  .catch(err => {
    console.log('Error syncing Users table: ', err);
  });