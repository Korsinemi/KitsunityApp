const Util = require('../../util/MitUtil.js');
const db = require('../../util/Database.js');

module.exports = {
  name: 'setprefix',
  description: 'Pone un prefix a un servidor',
  aliases: ['sp'],
  usage: ' <Prefix>',
  cooldown: 2,
  args: 1,
  catergory: 'Configuración',
  async execute(client, message, args) {
    try {
      let ServerPrefix = args[0];
      if (ServerPrefix.length > 5 || ServerPrefix.length < 1) {
        return message.reply("Por favor elije un prefix, debe estar entre 1 a 5 caracteres .w.");
      }

      if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.reply(">.< asegurate que tienes permisos de administrador!")
      }

      await db.set(`${message.guild.id}_prefix`, ServerPrefix);
      return message.channel.send({
        embed: {
          title: "Prefix del servidor",
          description: `Se ha cambiado mi prefix a **${ServerPrefix}**`,
          color: "RANDOM",
          footer: {
            text: "Modificado por " + message.author.tag,
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
