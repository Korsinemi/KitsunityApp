const Util = require('../../util/MitUtil.js');
const db = require('../../util/Database.js');
const { ownerid } = require('../../config.json');
const fs = require('fs');

module.exports = {
    name: 'setdata',
    description: "[OWNER] Modifica o pone un valor en la base de datos",
    aliases: ['dataset', 'dbset', 'setdb'],
    usage: '',
    cooldown: 2,
    args: -1,
    catergory: 'Utilidad [OWNER]',
    hidden: true,
    async execute(client, message, args) {
        try {
            if (message.author.id !== ownerid) return message.channel.send(`Solo mi familia puede utilizar este comando u.u`);

            let Value = await db.get(args[0]);
            await db.set(args[0], args[1]);

            return message.channel.send({
                embed: {
                    title: "[Owner] Poner base de datos",
                    description: `**Previo:** ${Value}\n**Nuevo:** ${args[1]}`,
                    color: "#8B0000",
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
