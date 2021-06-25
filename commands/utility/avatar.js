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
    const colorify = message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 'RANDOM';
    if (message.mentions.members.size === 0) {
      const avatarcl = message.author.displayAvatarURL();
          const embed = new Discord.MessageEmbed()
          .setColor(colorify)
          .setDescription(`Este es tu avatar >w<\nSi no carga clickea [**aqui**](${avatarcl})`)
          .setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
          return message.channel.send(embed);
      } 
      if (message.mentions.members.size !== 0) {
          const member = message.mentions.members.first();
          const avatarmr = member.user.displayAvatarURL();
          const embed = new Discord.MessageEmbed()
          .setColor(colorify)
          .setDescription(`Avatar de **${member.user.username}** nwn\nSi no carga miralo [**aqui**](${avatarmr})`)
          .setImage(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
          return message.channel.send(embed);
      }
  }
};
