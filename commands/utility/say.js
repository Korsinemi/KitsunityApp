const Util = require('../../util/MitUtil.js');

module.exports = {
  name: 'say',
  description: 'Repetire lo que me digas uwu',
  aliases: ['repeat'],
  usage: ' <Texto>',
  cooldown: 2,
  args: -1,
  catergory: 'Utilidad',
  async execute(client, message, args) {
    if (args[0]) {
      return message.channel.send('Que se supone que debo repetir u.u?')
    }
    message.channel.send(message.content.split(' ').slice(1).join(' '));
    message.delete();
  }
};
