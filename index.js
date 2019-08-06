const botgram = require("botgram")
const bot = botgram("")

bot.command("start", "help", (msg, reply) =>
  reply.text("To schedule an alert, do: /alert <seconds> <text>"))

bot.command("alert", (msg, reply, next) => {
  var [ seconds, text ] = msg.args(2)
  if (!seconds.match(/^\d+$/) || !text) return next()

  setTimeout(() => reply.text(text), Number(seconds) * 1000)
})


bot.command("lyse", (msg, reply) => {
  if (msg.text.toString().toLowerCase().includes('task') || msg.text.toString().toLowerCase().includes('todo')) {
    console.log("Get user's username: " + msg.from.username); //works for individual
    console.log("Get chat type: " + msg.chat.type);
    //msg.from.first_name -- display name of user
    //if group need to get confirmation if want to display task to group
    //retrieve information
  }
})

bot.command((msg, reply) =>
  reply.text("Invalid command."))
