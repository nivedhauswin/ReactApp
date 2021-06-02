import {Request, Response, Router} from 'express';
import {Controller} from '../interfaces'
import {ExportReactComponent1, ExportReactComponent2} from '../Helper/ReactHelper'

export default class ReactController implements Controller{
    public path = '/api/react';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path + "/template1", this.component1);
        this.router.get(this.path + "/template2", this.component2);
    }

    private component1 = async (request: Request, response: Response) => {
        response.send(ExportReactComponent1());
    }

    private component2 = async (request: Request, response: Response) => {
        response.send(ExportReactComponent2());
    }
}