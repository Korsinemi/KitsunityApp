const Util = require('../../util/MitUtil.js');
const Discord = require('discord.js');
var randomnumber = require('random-number');

module.exports = {
  name: 'iq',
  description: "Mira cual es tu nivel de coeficiete intelectual .w.",
  aliases: ['aptitude'],
  usage: ' [usuario - Opcional]',
  cooldown: 2,
  args: 0,
  catergory: 'Diversión',
  async execute(client, message, args) {
      var options = { min: 20, max: 170, integer: true }
      const RandomIQ = randomnumber(options);

      let Message = "Tu IQ es de " + RandomIQ + " :brain:";
      message.react('🧠');
      if (message.mentions.members.size === 0) {
        const embed = new Discord.MessageEmbed()
          .setAuthor("Medidor de IQ")
          .setColor('RANDOM')
          .setDescription(Message)
        return message.channel.send(embed);
      }
      const member = message.mentions.members.first();
      if (member.user.id === message.author.id) {
        const embed = new Discord.MessageEmbed()
          .setAuthor("Medidor de IQ")
          .setColor('RANDOM')
          .setDescription(Message)
        return message.channel.send(embed);
      } else if (member.user.id === client.user.id) {
        const embed = new Discord.MessageEmbed()
          .setAuthor("Medidor de IQ")
          .setColor('RANDOM')
          .setDescription("Mi IQ es de 900 uwu :brain:")
        return message.channel.send(embed);
      } else {
        Message = "El IQ de " + member.user.username + " es de " + RandomIQ + " :brain:";
        const embed = new Discord.MessageEmbed()
          .setAuthor("Medidor de IQ")
          .setColor('RANDOM')
          .setDescription(Message)
        return message.channel.send(embed);
      }
  }
};
