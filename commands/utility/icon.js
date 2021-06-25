const Util = require('../../util/MitUtil.js');
const Discord = require('discord.js');

module.exports = {
  name: 'icon',
  description: 'Muestra el icono del servidor .w.',
  aliases: ['svicon', 'icon'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Utilidad',
  async execute(client, message, args) {
    message.react('📷');
    const colorfy = message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 'RANDOM';
    const sicon = message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 });
    const embed = new Discord.MessageEmbed()
      .setColor(colorfy)
      .setDescription(`Icono de **${message.guild.name}**\nSi no carga clickea [**aqui**](${sicon})`)
      .setImage(sicon)
    return message.channel.send(embed);
  } 
};