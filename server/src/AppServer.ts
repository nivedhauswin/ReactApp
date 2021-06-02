import * as bodyParser from 'body-parser'
import {Controller} from './interfaces'
import express = require('express');
import cors = require('cors');

const options: cors.CorsOptions = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: "http://localhost:3000",
    preflightContinue: false,
};

class AppServer {
    public app: express.Application;
  
    constructor(controllers: Controller[]) {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }
  
    public listen(port: number) {
        this.app.listen(port, () => {
            console.log(`App listening on the port ${port}`);
        });
    }
  
    public getServer() {
      return this.app;
    }
  
    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(cors(options));
    }
  

    private initializeControllers(controllers: Controller[]) {
        
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
        this.app.options('*', cors(options));
    }
}
  
export default AppServer;
