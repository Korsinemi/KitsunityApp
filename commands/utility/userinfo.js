const Util = require('../../util/MitUtil.js');
const statuses = {
  online: "Online",
  idle: "Alejado",
  dnd: "No molestar",
  offline: "Desconectado"
};

module.exports = {
  name: 'userinfo',
  description: "Muestra informacion sobre un usuario .w.",
  aliases: ['ui', 'user'],
  usage: ' [Usuario]',
  cooldown: 2,
  args: 0,
  catergory: 'Utilidad',
  async execute(client, message, args) {
    try {
      let member = message.guild.member(message.author);
      if (message.mentions.users.first()) {
        member = message.guild.member(message.mentions.users.first());
      }

      const days = Math.floor((new Date() - member.user.createdAt) / (1000 * 60 * 60 * 24));
      const joinedDays = Math.floor((new Date() - member.joinedAt) / (1000 * 60 * 60 * 24));

      let DateNow = new Date();
      return message.channel.send({
        embed: {
          title: `Información de ${member.user.username}`,
          color: "RANDOM",
          thumbnail: {
            url: member.user.displayAvatarURL({
              size: 512
            }),
          },
          fields: [{
            name: '• Nombre',
            value: member.user.tag,
            inline: true,
          },
          {
            name: '• ID',
            value: member.id,
            inline: true,
          },
          {
            name: '• Fecha de ingreso a Discord',
            value: `${member.user.createdAt.toDateString()} ( ${days} days ago! )`,
            inline: true,
          },
          {
            name: '• Fecha de ingreso al servidor',
            value: `${member.joinedAt.toDateString()} ( ${joinedDays} days ago! )`,
            inline: true,
          },
          {
            name: '• Estatus',
            value: statuses[member.presence.status],
            inline: true,
          },
          {
            name: '• Bot',
            value: member.user.bot ? "Yes" : "No",
            inline: true,
          },
          {
            name: '• Rol mas alto',
            value: member.roles.cache.size > 1 ? member.roles.highest.name : "None",
            inline: true,
          },
          {
            name: '• Rol mas bajo',
            value: member.roles.hoist ? member.roles.hoist.name : "None",
            inline: true,
          }
          ],
          footer: {
            text: "Pedido por " + message.author.tag,
            icon_url: message.author.displayAvatarURL()
          },
          timestamp: new Date()
        }
      });
    } catch (err) {
      console.log(err);
      return message.reply(`Oh no, an error occurred. Try again later!`);
    }
  }
};
