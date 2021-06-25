const Util = require('../../util/MitUtil.js');
const db = require('../../util/Database.js');
const { ownerid } = require('../../config.json');
const fs = require('fs');

module.exports = {
    name: 'getdata',
    description: "[OWNER] Obtiene un valor de la base de datos",
    aliases: ['dataget', 'dbget', 'getdb'],
    usage: '',
    cooldown: 2,
    args: -1,
    catergory: 'Utilidad [OWNER]',
    hidden: true,
    async execute(client, message, args) {
        try {
            if (message.author.id !== ownerid) return message.channel.send(`Solo mi familia puede utilizar este comando u.u`);

            let Value = await db.get(args[0]);

            return message.channel.send({
                embed: {
                    title: "[Owner] Obtiene la base de datos",
                    description: `**Valor:** ${Value}`,
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
