const Util = require('../../util/MitUtil.js');
const db = require('../../util/Database.js');
const { ownerid } = require('../../config.json');
const fs = require('fs');

module.exports = {
    name: 'restartcommands',
    description: "[OWNER] Actualiza los comandos",
    aliases: ['restartcommand', 'resetcommands', 'commandsreset', 'refreshcommands', 'rcmd'],
    usage: '',
    cooldown: 2,
    args: 0,
    catergory: 'Utilidad [OWNER]',
    hidden: true,
    async execute(client, message, args) {
        try {
            if (message.author.id !== ownerid) return message.channel.send(`Solo mi familia puede utilizar este comando u.u`);

            let rawdata = fs.readFileSync('./include/assets/json/game.json');
            let Game = JSON.parse(rawdata);

            let ListOfFiles = Game.data["filecommands"];

            for (let i = 0; i < ListOfFiles.length; i++) {
                const commandFiles = fs.readdirSync(`./commands/${ListOfFiles[i]}/`).filter(file => file.endsWith('.js'));
                for (const file of commandFiles) {
                    delete require.cache[require.resolve(`../${ListOfFiles[i]}/${file}`)];
                    const command = require(`../${ListOfFiles[i]}/${file}`);
                    client.commands.set(command.name, command);
                }
            }

            return message.channel.send({
                embed: {
                    title: "[Owner] Se han refrescado los comandos correctamente n.n!!!",
                    color: "RED",
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
