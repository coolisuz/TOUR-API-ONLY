#by console logging we can get the environment we're in
console.log(app.get('env')) # by default its development




#process.env is available globally throughout the project by nodejs.
#to start in development mode in terminal run the following: 
NODE_ENV=development nodemon server.js.

COMMUNITY CONVENTION is to create config.env file in root directory 
of the project.
/config.env

npm install dotenv
/server.js
    const dotenv = require('dotenv');
    dotenv.config({ path: './config.env'})

whatever we write in config.env file will be available globally. Follow syntax:
    NODE_ENV=development
    process.env.WHATEVER

#now globally app runs in development mode.
/
package.json include following:
     "scripts": {
    "start:dev": "nodemon server.js",
    "start:prod": "NODE_ENV=production nodemon server.js"
  },
  npm run start:dev
  npm run start:prod
