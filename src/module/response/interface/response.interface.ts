import { Document } from 'mongoose';

export interface IResponse extends Document {
  userId: String;
  user: Object;
  data: any;
  responses: any;
}
