const Util = require('../../util/MitUtil.js');
const Discord = require('discord.js');

module.exports = {
  name: 'avatar',
  description: 'Muestra la foto de perfil del usuario mencionado owo',
  aliases: ['av', 'pfp'],
  usage: ' [Usuario]',
  cooldown: 2,
  args: 0,
  catergory: 'Utilidad',
  async execute(client, message, args) {
    message.react('📷');
    if (message.mentions.members.size === 0) {
          const embed = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setDescription(`Este es tu avatar >w<`)
          .setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
          return message.channel.send(embed);
      } 
      if (message.mentions.members.size !== 0) {
          const member = message.mentions.members.first();
          const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`Avatar de **${member.user.username}** nwn`)
                .setImage(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
          return message.channel.send(embed);
      }
  }
};
