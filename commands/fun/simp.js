const Util = require('../../util/MitUtil.js');
const Discord = require('discord.js')
var randomnumber = require('random-number');

module.exports = {
  name: 'simp',
  description: "Intenta adiviar que tan simp es alguien .w.",
  aliases: ['simprate'],
  usage: ' [Usuario]',
  cooldown: 2,
  args: 0,
  catergory: 'Entretenimiento',
  async execute(client, message, args) {
      var options = { min: 0, max: 100, integer: true }
      let SimpRate = randomnumber(options) + "%";

      let Message = "Tu eres " + SimpRate + " simp <:kitsunity_simp:841447241537421352>";
      message.react('<:kitsunity_simp:841447241537421352>');
      if (message.mentions.members.size === 0) {
        const embed = new Discord.MessageEmbed()
          .setAuthor("Simp-metro")
          .setColor('RANDOM')
          .setDescription(Message)
        return message.channel.send(embed);
      }
      const member = message.mentions.members.first();
      if (member.user.id === message.author.id) {
        const embed = new Discord.MessageEmbed()
          .setAuthor("Simp-metro")
          .setColor('RANDOM')
          .setDescription(Message)
        return message.channel.send(embed);
      } else if (member.user.id === client.user.id) {
        const embed = new Discord.MessageEmbed()
        return message.channel.send('Baka!!! yo no soy simp >:c, menciona a otra persona');
      } else {
        Message = member.user.username + " es " + SimpRate + " simp <:kitsunity_simp:841447241537421352>";
        const embed = new Discord.MessageEmbed()
          .setAuthor("Simp-metro")
          .setColor('RANDOM')
          .setDescription(Message)
        return message.channel.send(embed);
      }
    }
};
