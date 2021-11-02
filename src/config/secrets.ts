import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('.env')) { 
  dotenv.config({ path: '.env' });
}

export const ENVIRONMENT = process.env.NODE_ENV;
export const {
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_HOST,
  DATABASE_PORT,
} = process.env;
