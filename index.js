const TelegramBot = require('node-telegram-bot-api');
const config = require('config');
const token = config.get('telegram.api');
const bot = new TelegramBot(token, {polling: true});

var commander = require('./routes/controllers/command.js');

bot.onText(/\/start/, (msg, match) => {
  bot.sendMessage(msg.chat.id, 'start guide');
});

bot.onText(/\/help/ , (msg, match) => {
  bot.sendMessage(msg.chat.id, 'help guide');
});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // calling bot
  if (msg.text.toLowerCase().includes('lyse')) {

    if (msg.text.toLowerCase().includes('task') ||
          msg.text.toLowerCase().includes('todo')){
      console.log(commander.task(msg));
    }

    bot.sendMessage(chatId, 'Yes Boss?');
  }
});
