const Util = require('../../util/MitUtil.js');
const {
  prefix,
  token,
  ownerid,
  logchannelid
} = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
  name: 'feedback',
  description: 'Envia una sugerencia a los desarrolladores de Kitsunity nwn',
  aliases: ['support', 'suggest', 'idea'],
  usage: ' <Mensaje>',
  cooldown: 10,
  args: 0,
  catergory: 'Utilidad',
  async execute(client, message, args) {
    const colorfy = message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 'RANDOM';
    const suggery = args.slice(0).join(" ");
    const embedin = new Discord.MessageEmbed()
    .setTitle('• Sugerencia enviada >w<')
    .setDescription(`Se ha enviado tu sugerencia. Haz un buen uso del comando ya que el maluso llevara al baneo del bot`)
    .addField('Sugerencia:', `\n\`\`\`${suggery}\`\`\``, false)
    .setThumbnail('https://media.giphy.com/media/3o6Mbfsf4DI4Cds5Ms/giphy.gif')
    .setTimestamp()
    .setColor(colorfy)
    message.channel.send(embedin);

    const embedon = new Discord.MessageEmbed()
        .setTitle('• Nueva sugerencia')
        .setDescription('>w< Hay una nueva sugerencia para Kitsunity!!')
        .addField('Servidor:', message.guild.name, true)
        .addField('Usuario:', message.author.tag, true)
        .addField('ID:', message.author.id, true)
        .addField('Sugerencia:', `\n\`\`\`${suggery}\`\`\``, false)
        .setThumbnail('https://media.giphy.com/media/NFA61GS9qKZ68/giphy.gif')
        .setTimestamp()
        .setColor(colorfy)
    client.users.cache.get(ownerid).send(embedon);
  }
};
