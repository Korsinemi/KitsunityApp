const Util = require('../../util/MitUtil.js');

module.exports = {
  name: 'purge',
  description: 'Purges 2 - 100 messages in the channel',
  aliases: ['deletemessage', 'delete', 'clean', 'purify'],
  usage: ' <Numero entre 3 y 100>',
  cooldown: 2,
  args: 1,
  catergory: 'Moderación',
  async execute(client, message, args) {
    try {
      let DeleteMessage = args[0];
      if (isNaN(DeleteMessage)) {
        return message.reply("Please make sure you enter a valid number");
      }

      if (DeleteMessage > 100 || DeleteMessage < 2) {
        return message.reply("Please make sure the range is 3 - 100 messages")
      }

      if (!message.member.hasPermission('ADMINISTRATOR') ||
        !message.member.hasPermission('MANAGE_MESSAGES')) {
        return message.reply("Asegurate de tener permisos de administrador o administrar mensajes >.<!")
      }

      await message.channel.bulkDelete(DeleteMessage).catch(error => message.reply(`No pude eliminar los mensajes: ${error}`));
    } catch (err) {
      console.log(err);
      return message.reply(`Oh no, an error occurred. Try again later!`);
    }
  }
};
