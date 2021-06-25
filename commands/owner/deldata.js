const Util = require('../../util/MitUtil.js');
const db = require('../../util/Database.js');
const { ownerid } = require('../../config.json');
const fs = require('fs');

module.exports = {
    name: 'deldata',
    description: "[OWNER] Elimina un dato de la base de datos",
    aliases: ['datadel', 'dbdel', 'dbdelete'],
    usage: '',
    cooldown: 2,
    args: -1,
    catergory: 'Utilidad [OWNER]',
    hidden: true,
    async execute(client, message, args) {
        try {
            if (message.author.id !== ownerid) return message.channel.send(`Solo mi familia puede utilizar este comando u.u`);

            await db.del(args[0]);
            return message.channel.send({
                embed: {
                    title: "[Owner] Dato de la base de datos eliminado",
                    color: "RANDOM",
                    footer: {
                        text: "Utilizado por " + message.author.tag,
                        icon_url: message.author.displayAvatarURL()
                    },
                    timestamp: new Date()
                }
            });

        } catch (e) {
            console.error(e)
        }
    }
};
