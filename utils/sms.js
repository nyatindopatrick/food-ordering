import keys from '../config/keys';

const { smsUserName, smsAPIKey } = keys;

const credentials = {
  apiKey: smsAPIKey,
  username: smsUserName,
};

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

const sms = AfricasTalking.SMS;

async function sendMessage(PhoneNumber, message) {
  const options = {
    to: PhoneNumber,

    message,
  };
  const sent = await sms.send(options);

  console.log(sent);
}

export default sendMessage;
