const statuses = {
  online: "Online",
  idle: "Alejado",
  dnd: "No molestar",
  offline: "Desconectado"
};
/*
const ptype = {
  LISTENING: "Escuchando",
  WATCHING: "Viendo",
  COMPETING: "Compitiendo en",
  PLAYING: "Jugando a",
  STREAMING: "Transmitiendo en Twitch"
};
*/


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
          title: `Información del usuario`,
          color: "RANDOM",
          thumbnail: {
            url: member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }),
          },
          fields: [{
            name: '• Nombre',
            value: member.user.tag,
            inline: false,
          },
          {
            name: '• Apodo',
            value: `${member.nickname !== null ? `${member.nickname}` : 'No tiene'}`,
            inline: false,
          },
          {
            name: '• ID',
            value: member.id,
            inline: false,
          },
          {
            name: '• Fecha de ingreso a Discord',
            value: `${member.user.createdAt.toDateString()} (Hace ${days} dias!)`,
            inline: false,
          },
          {
            name: '• Fecha de ingreso al servidor',
            value: `${member.joinedAt.toDateString()} (Hace ${joinedDays} dias!)`,
            inline: false,
          },
          {
            name: '• Estatus',
            value: statuses[member.presence.status],
            inline: false,
          },
          {
            name: '• Presencia',
            value: `${member.presence.game ? member.presence.game.name : 'No tiene actividad'}`,
            inline: false,
          },
          {
            name: '• Bot',
            value: member.user.bot ? "Si" : "No",
            inline: false,
          },
          {
            name: '• Rol mas alto',
            value: member.roles.cache.size > 1 ? member.roles.highest.name : "Ninguno",
            inline: false,
          },
          /*
          {
            name: '• Roles',
            value: member.roles.map(roles => `${roles}`).join(' | ') ? null : "No tiene roles",
            inline: false,
          }
          */
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
