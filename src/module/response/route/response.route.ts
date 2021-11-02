import { Application } from 'express';
import resolver from '../../../utils/resolver';
import ResponseController from '../controller/response.controller';
import { FETCH_RESPONSE_URL } from '../response.url';

class ResponseRoute {
  public responseController: ResponseController = new ResponseController();

  public routes = (app: Application): void => {
    app
      .route(FETCH_RESPONSE_URL)
      .get(resolver(this.responseController.fetchResponses));
  };
}
export default ResponseRoute;
