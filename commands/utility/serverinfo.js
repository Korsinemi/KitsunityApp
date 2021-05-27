const Util = require('../../util/MitUtil.js');

module.exports = {
  name: 'serverinfo',
  description: 'Muestra información de un servidor >w<',
  aliases: ['server'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Utilidad',
  async execute(message, args, client) {
    try {
      let sicon = message.guild.iconURL;
      return message.channel.send({
        embed: {
          title: "Información del servidor",
          color: "RANDOM",
          footer: {
            text: "Pedido por " + message.author.tag,
            icon_url: message.author.displayAvatarURL()
          },
          thumbnail: {
            url: sicon,
          },
          fields: [
            {
              name: '• Nombre',
              value: message.guild.name,
              inline: false,
            },
            {
              name: '• ID',
              value: message.guild.id,
              inline: false,
            },
            {
              name: '• Dueñ@',
              value: message.guild.owner,
              inline: false,
            },
            {
              name: '• Región',
              value: message.guild.region.toUpperCase(),
              inline: false,
            },
            {
              name: '• Miembros',
              value: message.guild.memberCount,
              inline: false,
            },
            {
              name: '• Fecha de creación',
              value: "```" + message.guild.createdAt + "```",
              inline: false,
            }
          ],
          timestamp: new Date()
        }
      });
    } catch (err) {
      console.log(err);
      return message.reply(`Oh no, an error occurred. Try again later!`);
    }
  }
};
