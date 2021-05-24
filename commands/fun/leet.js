const Util = require('../../util/MitUtil.js');
const map = {
  a: '4',
  e: '3',
  f: 'ph',
  l: '1',
  b: '8',
  o: '0',
  s: '5',
  t: '7',
  y: '`/'
}

module.exports = {
  name: 'leet',
  description: 'Convierte tu texto en numeros',
  aliases: ['leetspeak', 'leetspeech', 'l33t'],
  usage: ' [mensaje]',
  cooldown: 2,
  args: -1,
  catergory: 'Diversión',
  async execute(client, message, args) {
      message.react('<a:kitsunity_numberizing:841438942011719687>')
      let content = args.join(" ");
      for (const y in map) {
        content = content.replace(new RegExp(y, 'g'), map[y])
      }
      return message.channel.send(content);
    }
};
