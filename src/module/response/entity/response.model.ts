import { Schema, model, Types } from 'mongoose';
import { IResponse } from '../interface/response.interface';

const ResponseSchema = new Schema(
  {
    userId: String,
    user: {
      username: String,
      name: String,
      team_id: String,
    },
    data: Schema.Types.Mixed,
    questionOne: String,
    questionTwo: Schema.Types.Array,
  },
  { timestamps: true },
);

export default model<IResponse>('Response', ResponseSchema);
