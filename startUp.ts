import * as express from 'express';
import dataBase from './infra/db';
import * as  bodyParser from 'body-parser';

import NewsController from './controller/newsController'

class StartUp {
    public app: express.Application;
    private _db:  dataBase; 
    private bodyParser;

    constructor(){
        this.app = express();
        this._db = new dataBase();
        this._db.createConnection();
        this.routes();
        this.middler();
    }

    routes(){
        this.app.route('/').get((req,res) => {
            res.send({versao: '0.0.1'});
        });

        this.app.route("/api/v1/news").get(NewsController.get);
        this.app.route("/api/v1/news/:id").get(NewsController.getById);
        this.app.route("/api/v1/news").post(NewsController.create);
        this.app.route("/api/v1/news/:id").put(NewsController.update);
        this.app.route("/api/v1/news/:id").delete(NewsController.delete);
    }

    middler(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

}

export default new StartUp();