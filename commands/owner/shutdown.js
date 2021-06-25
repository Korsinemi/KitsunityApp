const Util = require('../../util/MitUtil.js');
const db = require('../../util/Database.js');
const config = require('../../config.json');

module.exports = {
    name: 'shutdown',
    description: "[OWNER] Apaga el bot",
    aliases: ['exit', 'off', 'turnoff'],
    usage: ' ',
    cooldown: 2,
    args: 0,
    catergory: 'Utilidad [OWNER]',
    hidden: true,
    async execute(client, message, args) {
      if (message.author.id !== ownerid) return message.channel.send(`Solo mi familia puede utilizar este comando u.u`);

        try {
            await message.reply('[SHUTDOWN] El apagado manual ha sido activado');
            process.exit(0);
        } catch {
            process.exit(0);
        }
  }
};
