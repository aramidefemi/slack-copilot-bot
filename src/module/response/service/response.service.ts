import { IResponse } from '../interface/response.interface';
import Model from '../entity/response.model';

interface ICreateResponse {
  _id?: IResponse['_id'];
  user?: IResponse['user'];
  userId?: IResponse['userId'];
  data?: IResponse['data'];
  responses?: IResponse['responses'];
}

interface IFindResponse {
  _id?: IResponse['_id'];
  userId: IResponse['userId'];
}

class ResponseService {
  public static async create(data: ICreateResponse) {
    try {
      return await Model.create(data);
    } catch (e) {
      return e;
    }
  }

  public static async find(data: IFindResponse) {
    try {
      return await Model.findOne(data);
    } catch (e) {
      return e;
    }
  }
  public static async fetch() {
    try {
      return await Model.find();
    } catch (e) {
      return e;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static async update(query: IFindResponse, param: ICreateResponse) {
    try {
      const model = await Model.findOne(query);
      return await model?.updateOne(param);
    } catch (e) {
      return e;
    }
  }
} 
export default ResponseService;
