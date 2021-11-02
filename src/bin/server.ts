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


// // Initialize Bolt app, using the default HTTPReceiver
// const app = new App({
//   token: process.env.SLACK_BOT_TOKEN,
//   signingSecret: process.env.SLACK_SIGNING_SECRET,
//   customRoutes: [
//     {
//       path: '/health-check',
//       method: ['GET'],
//       handler: (req, res) => {
//         res.writeHead(200);
//         res.end('Health check information displayed here!');
//       },
//     },
//   ],
// });

// // The echo command simply echoes on command
// app.command('/bot', async ({ command, ack, respond }) => {
//   // Acknowledge command request
//   await ack();

//   await respond(`Welcome. How are you doing? ${command.text}`);
// });
// (async () => {
//   await app.start(APP_PORT);
//     database
//       .connectToDb()
//       .then(() => {
//         logger.info('connected');
//         // logger.info(`Bot is listening on port ${APP_PORT}`);
//       })
//       .catch(() => logger.error('Internal server error happened'));
//   console.log('⚡️ Bolt app started');
// })();