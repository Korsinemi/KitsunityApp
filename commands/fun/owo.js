const Util = require('../../util/MitUtil.js');
const owo = require('owofy');

module.exports = {
  name: 'owo',
  description: "Owofica tu texto owo",
  aliases: ['owofy'],
  usage: ' <Mensaje>',
  cooldown: 2,
  args: -1,
  catergory: 'Entretenimiento',
  async execute(client, message, args) {
      let OwOText = args.join(" ");
      let Message = `${owo(OwOText)}`;
      message.react('<:kitsunity_owocat:841463988956037170>')
      return message.channel.send(Message);
  }
};
