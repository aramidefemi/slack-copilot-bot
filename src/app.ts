import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import mongoSanitize from 'express-mongo-sanitize';
import cors from 'cors';
import MessageRoute from './module/message/route/message.route';
import ResponseRoute from './module/response/route/response.route';

dotenv.config();

class App {
  public app: express.Application;
 
  public messageRoute: MessageRoute = new MessageRoute();
  public responseRoute: ResponseRoute = new ResponseRoute();

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());
    this.config(); 
    this.messageRoute.routes(this.app);
    this.responseRoute.routes(this.app);
    this.app.disable('x-powered-by');
    this.app.get('/', (req, res) => res.send('Hello! Welcome!'));
  }

  private config = (): void => {
    this.app.use(mongoSanitize());
    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use(cors());
  };
}

export default new App().app;
