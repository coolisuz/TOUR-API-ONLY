const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DB.replace('<password>', process.env.DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful'));

// console.log(app.get('env'))
// console.log(process.env)
const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log('listening on port 3000'));

process.on('unhandledRejection', err => {
  console.log('UNCAUGHT REJECTION');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
