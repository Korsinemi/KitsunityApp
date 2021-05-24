const Util = require('../../util/MitUtil.js');

module.exports = {
  name: 'claptext',
  description: "Añade 👏 en medio de cada palabra uwu",
  aliases: ['clapmsg'],
  usage: ' [mensaje]',
  cooldown: 2,
  args: -1,
  catergory: 'Diversión',
  async execute(client, message, args) {
    message.react('👏')
      let claptxt = args.join(" 👏 ");
      return message.channel.send(claptxt);
  }
};