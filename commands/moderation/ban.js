const Util = require('../../util/MitUtil.js');

module.exports = {
  name: 'ban',
  description: 'Banea a un usuario especifico u.u',
  aliases: ['bar', 'outlaw'],
  usage: '<usuario>',
  cooldown: 2,
  args: -1,
  catergory: 'Moderación',
  async execute(client, message, args) {
    try {
      let BanMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      const usericon = BanMember.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
      if (!BanMember) {
        return message.reply("asegurate que es un usuario valido >.<");
      }

      if (!BanMember.bannable) {
        return message.reply("no puedo banear a ese usuario por que tiene un rol mas alto que el mio o caresco de permisos >.<");
      }

      if (!message.member.hasPermission('BAN_MEMBERS')) {
        return message.reply("careces de los permisos requeridos: **Banear miembros** u.u")
      }

      let reason = args.slice(1).join(' ');
      if (!reason) reason = "No se ha dado una razón";

      BanMember.ban({ reason: reason }).catch(error => message.channel.send(`Perdon ${message.author}, no pude banear al usuario u.u`));
      return message.channel.send({
        embed: {
          title: "Usuario baneado",
          description: `**${BanMember.user.tag}** ha sido baneado`,
          fields: [{
            name: '• Razón',
            value: reason,
            inline: false,
          },
          {
            name: '• Admin responsable',
            value: `${message.author}`,
            inline: false,
          }],
          color: "RANDOM",
          thumbnail: usericon,
          timestamp: new Date()
        }
      });
    } catch (err) {
      console.log(err);
      return message.reply(`asegurate de que estas utilizando bien el comando`);
    }
  }
};
