import dotenv from 'dotenv';

dotenv.config();

const {
  MONGO_URI, SMS_USERNAME, SMS_API_KEY, PORT,
} = process.env;

const config = {
  mongoURI: MONGO_URI,
  smsUserName: SMS_USERNAME,
  smsAPIKey: SMS_API_KEY,
  port: PORT || 8080,
};

export default config;
