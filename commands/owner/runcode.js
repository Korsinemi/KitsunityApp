const Util = require('../../util/MitUtil.js');
const db = require('../../util/Database.js');
const { ownerid } = require('../../config.json');
const { inspect } = require('util');
const fs = require('fs');

module.exports = {
    name: 'runcode',
    description: "[OWNER] Corre un codigo en NodeJS",
    aliases: ['node'],
    usage: ' <Codigo>',
    cooldown: 2,
    args: 0,
    catergory: 'Utilidad [OWNER]',
    hidden: true,
    async execute(client, message, args) {
        try {
            if (message.author.id !== ownerid) return message.channel.send(`Solo mi familia puede utilizar este comando u.u`);

            let evaled = await eval(args.join(' '));
            return message.channel.send({
                embed: {
                    title: "Code Evaluation",
                    description: `\`\`\`${inspect(evaled)}\`\`\``,
                    color: "#8B0000",
                    footer: {
                        text: "Requested by " + message.author.tag,
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
