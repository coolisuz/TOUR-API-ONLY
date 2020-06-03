const express = require('express');
const morgan = require('morgan');
const app = express()

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// adds body to the incoming request. So we can access the body of the req
app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"));
}

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next()
})

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);



module.exports = app