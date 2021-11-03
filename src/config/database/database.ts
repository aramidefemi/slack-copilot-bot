import { connect, disconnect } from 'mongoose';
import { ENVIRONMENT } from '../secrets';

const config = require('../env');

const env = config[String(ENVIRONMENT)];
async function connectToDb() {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    };
    return connect(process.env.DATABASE_URL, options);
  } catch (error) {
    return error;
  }
}
async function disconnectFromDB() {
  return disconnect();
}
export default { connectToDb, disconnectFromDB };
