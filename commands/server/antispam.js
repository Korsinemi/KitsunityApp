const Util = require('../../util/MitUtil.js');
const db = require('../../util/Database.js');

module.exports = {
  name: 'antispam',
  description: 'Activa el Anti-Spam en el servidor',
  aliases: ['as', 'spam'],
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

      db.set(`${message.guild.id}_antispam`, Toggle);
      return message.channel.send({
        embed: {
          title: "Server Anti-Spam",
          description: `**Estatus:** ${Toggle}`,
          color: "#8B0000",
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
