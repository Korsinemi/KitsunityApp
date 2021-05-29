const Util = require('../../util/MitUtil.js');

module.exports = {
  name: 'bigtext',
  description: 'Convierte tu texto en numeros',
  aliases: ['btext', 'bigfy'],
  usage: ' <Mensaje>',
  cooldown: 2,
  args: -1,
  catergory: 'Entretenimiento',
  async execute(client, message, args) {
    message.react('<a:kitsunity_numberizing:841438942011719687>')
    let content = args.map((word) => {
    let chars = word.split(''), emojis = "";
    for (let i in chars)
      // Currently only supports letters
      if (chars[i].match(/[a-z]/i)){
        emojis += `:regional_indicator_${chars[i].toLowerCase()}: `;
      } else if (chars[i].match(/[0-9]/i)){
        const numberx = {
          0: ':zero: ',
          1: ':one: ',
          2: ':two: ',
          3: ':three: ',
          4: ':four: ',
          5: ':five: ',
          6: ':six: ',
          7: ':seven: ',
          8: ':eight: ',
          9: ':nine: '
        }
        emojis += numberx;
      }

    return emojis;
  }).join(' ').replace(/(\r\n|\n|\r)/gm,"");

  if (content) message.channel.send(content);
    /*
    if (!args[1]) return message.reply("El texto es demasiado corto u.u").then(m => m.delete(3000));
    */
  }
};