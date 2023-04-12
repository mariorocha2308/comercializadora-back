'use strict';
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require('morgan')
const routerConfig = require('./modules/route');
const config = require('./config/config');
const sequelize = require('./models/index.js')
const initModerators = require('./helpers/initModerators')

// var whitelist = ['http://localhost:3001']
const configCors = {
  origin: '*' 
  // origin: function (origin, callback) {
  //   if (whitelist.indexOf(origin) !== -1) {
  //     callback(null, true)
  //   } else {
  //     callback(new Error('Not allowed by CORS'))
  //   }
  // }
}

const init = () => {
  // *** express instance *** //
  const app = express();
  // Configuraing the standard middlewares.
  setupStandardMiddlewares(app);
  configureApiEndpoints(app);
  app.listen(config.SERVER_PORT);
  console.log(`Listening on port ${config.SERVER_PORT} in ${config.NODE_ENV} mode`);
};

const setupStandardMiddlewares = (app) => {
  // parse requests of content-type - application/json
  app.use(bodyParser.json());
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors(configCors));
  app.use(morgan('dev'))
  return;
};

sequelize.sync({force: true})
.then(async () => {
  await initModerators()
  console.log("Database is ready to use!")
})

const configureApiEndpoints = (app) => {
  app.use("/api/v1/", routerConfig.init());
  // routerConfig.init(app);
  // define a route handler for the default home page
  app.get( "/", (req, res) => {
    res.send( "Welcome to express-create application! " );
  });
};

init();
