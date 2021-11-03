import app from '../app';
// import { App } from '@slack/bolt';
import database from '../config/database/database';
import logger from '../config/logger';

if (!process.env.PORT) {
  process.exit(1);
}
const APP_PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
app.listen(APP_PORT, () => {
  database
    .connectToDb()
    .then(() => {
      logger.info('connected');
      logger.info(`Bot is listening on port ${APP_PORT}`);
    })
    .catch(() => logger.error('Internal server error happened'));
});
