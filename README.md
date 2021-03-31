# 06-node-restServer

This is an excellent base of an express server to start my next projects.

## Content
In this project you will find an express server configuration.
This project need a doc with environment configurations to can start. (.env)
Into src directory:
    *config
        * Into this directory we will find configurations that we need in some files of the server.
    *controllers
        * Into controllers, we will find the functions with the responses to pass to an path of the API.
    *loaders
        * Logger it's a dependency to create logs of information about the server when he is running.
        * Server into this directory we have a class ExpressServer and this contains all the configurations to start the server and every middleware we need to use.
        * Swagger it's a dependency to create the documentation of the API visually and professionally.
        * index.js this is the file who calls to the ExpressServer class and create an instance of the server.
    *routes
        * Into this directory we define the routes and the functions that we use in each endpoint of the API.
    *index.js
        * This file is the root of the project, into this we call the index file of the loaders directory and starts the server.

## Documentation
You can read the documentation about the endpoints in this starter template of an Express server in:
#colocar link de server heroku


## Installation
To install and run this project just type and execute
```bash
npm install
```
## Running the application
* In the base path you will find an .env.example in this doc you have to complete your environment variables.

To run this app
```bash
npm run dev
```

### Notes
If you want to learn like me about express and the backend development with node.js I recommend these resources:

[Node js | backend specialist training by Fernando Valdez](https://www.youtube.com/channel/UCl7vmtaxLQQksBnxfBbtUZw)