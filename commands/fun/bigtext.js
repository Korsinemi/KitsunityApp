const emoji = require('discord-emoji-convert');

module.exports = {
  name: 'bigtext',
  description: 'Convierte tu texto a emojis uwu',
  aliases: ['btext', 'bigfy'],
  usage: ' <Mensaje>',
  cooldown: 2,
  args: 0,
  catergory: 'Entretenimiento',
  async execute(client, message, args) {
    let emojify = args.slice(0).join(" ");
    message.channel.send(emoji.convert(emojify));
  }
};