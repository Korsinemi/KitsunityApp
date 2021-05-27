const Util = require('../../util/MitUtil.js');

module.exports = {
  name: 'say',
  description: 'Repetire lo que me digas uwu',
  aliases: ['repeat'],
  usage: ' <Texto>',
  cooldown: 2,
  args: -1,
  catergory: 'Entretenimiento',
  async execute(client, message, args) {
    message.channel.send(message.content.split(' ').slice(1).join(' '));
    message.delete();
  }
};
