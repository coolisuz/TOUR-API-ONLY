const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({ path: './config.env'})
const app = require('./app');


const DB = process.env.DB.replace('<password>', process.env.DB_PASSWORD);
mongoose.connect(DB, {
  useCreateIndex: true, 
  useNewUrlParser: true, 
  useFindAndModify: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => console.log('👞', 'DB connection successful'))



const port = process.env.PORT || 8000
app.listen(port, () => {

  if (process.env.NODE_ENV === 'development') {
    console.log(`👮‍♂️ Server running in development mode on port ${port}`);
  } else {
    console.log(`👮‍♂️ Server running in production mode on port ${port}`);
  }
});


