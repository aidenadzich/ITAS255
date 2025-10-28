# Folder Structure For express App

```
sample-server-architecture/
├── .env.example
├── .env.development
├── .gitignore
├── package.json
├── README.md
├── server.js
├── log/                           # gitignored
├── docs/                          # API documentation
│   └── api.md
├── public/                        # Static assets (if needed)
├── tests/
└── src/
    ├── configs/
    │   ├── database.config.js
    │   ├── express.config.js
    │   ├── logger.config.js
    │   └── index.js               # Optional config aggregator
    ├── controllers/
    │   └── examples.controller.js
    ├── middlewares/
    │   ├── errorHandler.js
    │   ├── validation.js
    │   ├── auth.js
    │   ├── rateLimit.js
    │   └── custommiddleware.js
    ├── models/
    │   ├── databaseModel.js
    │   └── ormFile.js
    ├── routes/
    │   ├── index.js              # Optional aggregate all routes
    │   └── examples.route.js
    ├── services/
    │   ├── db.service.js         # Database connection
    │   └── examples.service.js
    ├── utils/
    │   ├── constants.js
    │   ├── errorHandler.js       # Custom error classes
    │   ├── formatJson.js
    │   └── logger.js
    └── validators/
        └── examples.validator.js
```

## client
Contains the React Client application. This is where all the React code will be stored. This is a standard create-react-app application so you can use all the standard create-react-app commands such as `npm start` and `npm run build`. This will run in its own docker container.

## log
Will hold all the log files. This folder is included in .gitignore so won't be tracked by git.

## src
Contains all the parts of the express server. It is broken down into a number of subfolders. All subfolders are pluralized.

### configs
Contains any configuration files that are needed. These should all be called something.env (like config.env or database.env) and should be included in .gitignore so they are not tracked by git. This is where you would store things like database connection information, API keys, etc.

### controllers
A separate file for each controller. There is a controller file that corresponds to each route (and routes file) and each separate command. The controller file looks after controlling the communication between the routes and the models. It is the controller that will call the appropriate model function and then send the response back to the client.

### middlewares
This folder contains any custom middleware that we might write for the application. I expect it to be empty, but provided it in case we come up with something we need.

### models
Any model or ORM files that are needed.

### routes
A separate file for each route. Each routes file instantiates the router class from express module and adds a separate router command for each HTTP verbs used by this route. If there are parameters on the route they are included here as well. Each route command calls the appropriate controller function. Each route command must be exported to be accessible.

### services
A separate file for each service. Each service file contains a separate function that is exported. The service function is called by the controller and is responsible for doing the actual work of the controller. This is where all business logic that is needed goes. Depending on the complexity each service function may call one or more model functions.

### utils
Any utilities needed by the application. This is where you would put things like validators, formatters, etc.

### validators
Any place where validation logic is the same between two controllers or two services. You can have separate validators for each controller/service.

## server.js
This is the main file for the express server. It is responsible for starting the server and connecting to the database. It also sets up the middleware for logging and anything else we might need. Particularly this file imports the routes for the application. It is the only file that should be run by node. All other files are imported through this file (or the files it imports).  The server file is actually quite simple as it imports the routes and then "uses" them.