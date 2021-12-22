const express = require('express');

const customersRouter = require('./customers.router');
const usersRouter = require('./users.router');
const dataXlsRouter = require('./dataxls.router');
const authRouter = require('./auth.router');
const profileRouter = require('./profile.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/customers', customersRouter);
  router.use('/users', usersRouter);
  router.use('/dataload', dataXlsRouter);
  router.use('/auth', authRouter);
  router.use('/profile', profileRouter);

}

module.exports = routerApi;
