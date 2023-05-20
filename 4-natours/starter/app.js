const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./dev-data/routes/tourRoutes.js');
const userRouter = require('./dev-data/routes/userRouts.js');
const app = express();
// 1)) MIDDLEWARES
if ((process.env.NODE_ENV = 'development')) {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  console.log('Hello from the middleware ');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getOneTour);
// app.post('/api/v1/tours', postTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

/// 3 ROUTES

// tourRouter.route('/').get(getAllTours).post(postTour);
// tourRouter.route('/:id').get(getOneTour).patch(updateTour).delete(deleteTour);

// userRouter.route('/').get(getAllUsers).post(createUser);
// userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
// 4 )) START SERVER
module.exports = app;
