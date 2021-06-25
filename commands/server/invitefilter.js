const Util = require('../../util/MitUtil.js');
const db = require('../../util/Database.js');

module.exports = {
  name: 'invitefilter',
  description: 'Evita que se envien links de invitación al servidor .w.',
  aliases: ['if', 'antiinvite'],
  usage: ' <on/off>',
  cooldown: 2,
  args: 1,
  catergory: 'Configuración',
  async execute(client, message, args) {
    try {
      let Toggle = args[0].toLowerCase();
      if (Toggle != "off" && Toggle != "on") {
        return message.reply("Elije una opcion **on** o **off**");
      }

      if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.reply("Asegurate que tienes permisos de administrador >.<!")
      }

      db.set(`${message.guild.id}_invitefilter`, Toggle);
      return message.channel.send({
        embed: {
          title: "Server Anti-Invitaciones",
          description: `**Estatus:** ${Toggle}`,
          color: "#8B0000",
          footer: {
            text: "Utilizado por " + message.author.tag,
            icon_url: message.author.displayAvatarURL()
          },
          timestamp: new Date()
        }
      });
    }
    catch (err) {
      console.log(err);
      return message.reply(`Oh no, an error occurred. Try again later!`);
    }
  }
};
