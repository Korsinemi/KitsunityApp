const Util = require('../../util/MitUtil.js');
const db = require('../../util/Database.js');

module.exports = {
    name: 'timer',
    description: "Pone un recordatorio que puede ir hasta los 10 minutos uwu",
    aliases: ['delay', 'remind'],
    usage: ' <Tiempo (s)>',
    cooldown: 2,
    args: 1,
    catergory: 'Utilidad',
    async execute(client, message, args) {
        try {
            let time = args[0];
            if (isNaN(time)) {
                return message.reply("Asegurate de poner un numero valido en segundos >.<!");
            }

            const display = time > 59 ? `${time / 60} minutos` : `${time} segundos`;
            await message.channel.send(`🕰️ Se a puesto el recordatorio en **${display}**.`);
            await Util.delay(time * 1000);
            return message.channel.send(`🕰️ Tus **${display}** han terminado ${message.author}nwn!`);
        } catch (err) {
            console.log(err);
            return message.reply(`Oh no, an error occurred. Try again later!`);
        }
    }
};
