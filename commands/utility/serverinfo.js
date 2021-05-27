const Util = require('../../util/MitUtil.js');

module.exports = {
  name: 'serverinfo',
  description: 'Muestra información de un servidor >w<',
  aliases: ['server'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Utilidad',
  async execute(client, message, args) {
    try {
      let day = message.guild.createdAt.getDate(); // Gets day server was created
      let month = 1 + message.guild.createdAt.getMonth(); // Gets month server was created
      let year = message.guild.createdAt.getFullYear(); // Gets year server was created
      let sicon = message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 });
      let bots = message.guild.memberCount.bots;
      let humans = message.guild.memberCount.humans;
      return message.channel.send({
        embed: {
          title: "Información del servidor",
          color: "RANDOM",
          footer: {
            text: `Fecha de creación del servidor • ${day}.${month}.${year}`
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
              value: message.guild.owner.user.tag,
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
              name: '• Bots',
              value: bots,
              inline: false,
            },
            {
              name: '• Humanos',
              value: humans,
              inline: false,
            },
            {
              name: '• Roles',
              value: message.guild.roles.cache.size,
              inline: false,
            },
            {
              name: '• Rol mas alto',
              value: message.guild.roles.cache.size > 1 ? message.guild.roles.highest.name : "Ninguno",
              inline: false,
            }
          ],
        }
      });
    } catch (err) {
      console.log(err);
      return message.reply(`Oh no, an error occurred. Try again later!`);
    }
  }
};
