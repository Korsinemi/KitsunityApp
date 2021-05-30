const db = require('../../util/Database.js');
const figlet = require('figlet');

module.exports = {
    name: 'asciitext',
    description: `Logro obtenido!!`,
    aliases: ['ascii'],
    usage: ' <Icono|1-39>,<Texto 1>,<Texto 2>',
    cooldown: 2,
    args: -1,
    catergory: 'Entretenimiento',
    async execute(client, message, args) {
        try {
            message.react('🏆');
            let ServerPrefix = await db.get(`${message.guild.id}_prefix`);
            let typing = args.join(" ").split(",");
            if (typing.length < 1) {
                return message.reply(`Como genero el texto en ascii??, prueba esto ``${ServerPrefix}ascii Kitsunity,5lineoblique``, para ver las fuentes validas usa el comando ``${ServerPrefix}scripts```)
            }
            Typeface = typing[0];
            Font = typing[1];

            if (typing[0].lengh > 23){
                message.channel.send('Para una visualización perfecta se recomienda tener menos de 23 letras .w.')
            }

            if (typing[1].lengh == 0){
                Font === 'Standard'
            }

            figlet(`${Typeface}`, {font: `${Font}`}, (err, rendered) => {
                if (err) {
                    console.log('k...');
                    console.dir(err);
                    return;
                }

                message.react('🌟'),
                message.channel.send(`${rendered}`, {code: 'AsciiArt'});
              });
        } catch (err) {
            console.log(err);
            return message.reply(`Oh no, an error occurred. Try again later!`);
        }
    }
};