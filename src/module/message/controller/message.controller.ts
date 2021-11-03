import HttpStatus from 'http-status-codes';
import { Request, Response } from 'express';
import ResponseHandler from '../../../utils/responseHandler';
import Http from '../../../utils/http.helper';
import {
  WELCOME_MESSAGE,
  HOBBIES_MESSAGE,
  THANK_YOU_MESSAGE,
  ERROR_MESSAGE,
} from '../messages/reply';
import ResponseController from '../../response/controller/response.controller';

class MessageController {
  public resolveMessage = async (req: Request, res: Response) => {
    if (req.body) {
      let body = req.body.text;
      if (typeof body === 'undefined') {
        const action = JSON.parse(req.body.payload);
        body = action.actions[0].action_id;
        let answer;

        switch (body) {
          case 'mood-select': 
            answer = action?.actions[0]?.selected_option?.value;
            await ResponseController.saveResponses(action, {
              questionOne: answer,
            });
            await Http.sendReply(action.response_url, HOBBIES_MESSAGE);
            break;
          case 'hoobies-select': 
            answer = action?.actions[0]?.selected_options;
             await ResponseController.saveResponses(
               action,
               { questionTwo: answer }, 
             );
            break;
          case 'hoobies-submit':
            await Http.sendReply(action.response_url, THANK_YOU_MESSAGE);
            break;
          default:
            await Http.sendReply(action.response_url, THANK_YOU_MESSAGE);
            break;
        }

        return ResponseHandler.SuccessResponse(res, HttpStatus.OK);
      } else {
        if (body.toLowerCase() === 'hello')
          return ResponseHandler.SuccessResponse(
            res,
            HttpStatus.OK,
            WELCOME_MESSAGE,
          );
        return ResponseHandler.SuccessResponse(
          res,
          HttpStatus.OK,
          ERROR_MESSAGE,
        );
      }
    }
    
    return ResponseHandler.ErrorResponse(res, HttpStatus.NOT_ACCEPTABLE);
  };
}
export default MessageController;
