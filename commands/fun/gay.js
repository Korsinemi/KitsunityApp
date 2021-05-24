const Util = require('../../util/MitUtil.js');
const Discord = require('discord.js');
var randomnumber = require('random-number');

module.exports = {
  name: 'gay',
  description: "Mira que tan gay es alguien .w.",
  aliases: ['gayrate', 'howgay'],
  usage: ' [usuario - Opcional]',
  cooldown: 2,
  args: 0,
  catergory: 'Diversión',
  async execute(client, message, args) {
      var options = { min: 0, max: 100, integer: true }
      let GayRate = randomnumber(options) + "% gay :rainbow_flag:";

      let Message = "Tu eres " + GayRate;
      message.react('🌈');
        if (message.mentions.members.size === 0) {
          const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(Message)
          return message.channel.send(embed);
        }
        const member = message.mentions.members.first();
        if (member.user.id === message.author.id) {
          const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(Message)
          return message.channel.send(embed);
        } else if (member.user.id === client.user.id) {
          return message.channel.send('BAKA!!!, ¿como voy a ser gay si soy mujer? menciona a otra persona u.u!!!');
        } else {
          Message = member.user.username + " es " + GayRate;
          const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(Message)
          return message.channel.send(embed);
        }
    }
};
