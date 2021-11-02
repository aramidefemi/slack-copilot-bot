import { Application } from 'express';
import resolver from '../../../utils/resolver';
import { MESSAGE_URL } from '../message.url';
import MessageController from '../controller/message.controller';

class MessageRoute {
  public messageController: MessageController = new MessageController();

  public routes = (app: Application): void => {
    app.route(MESSAGE_URL).post(resolver(this.messageController.resolveMessage));
  };
}
export default MessageRoute;
