import HttpStatus from 'http-status-codes';
import async from 'async';
import { Request, Response } from 'express'; 
import ResponseHandler from '../../../utils/responseHandler';
import ResponseService from '../service/response.service';

class ResponseController {
  public fetchResponses = async (req: Request, res: Response) => {
     const data = await ResponseService.fetch();
    return ResponseHandler.SuccessResponse(res, HttpStatus.OK, data );
  };
  public static saveResponses = async (action: any, result: any) => {
    const user = await ResponseService.find({
      userId: action.user.id,
    });
    if (user) {
      await ResponseService.update(
        {
          userId: action.user.id,
        },
        {
          ...result,
        },
      );
    } else {
      await ResponseService.create({
        user: action.user,
        userId: action.user.id,
        data: action,
        ...result,
      });
    }
  };
}
export default ResponseController;
