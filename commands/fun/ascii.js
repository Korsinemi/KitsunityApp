const db = require('../../util/Database.js');

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
            let typing = args.join("+").split(",");
            if (typing.length < 2) {
                return message.reply(`Como genero el texto en ascii??, prueba esto ``${ServerPrefix}ascii Kitsunity,5lineoblique``, para ver las fuentes validas usa el comando ``${ServerPrefix}scripts```)
            }
            Typeface = typing[0];
            Font = typing[1];

            if (Typeface > 23){
                message.channel.send('Para una visualización perfecta se recomienda tener menos de 23 letras .w.')
            }

            EndResult = `https://artii.herokuapp.com/make?text=${Typeface}&font=${Font}`

            message.channel.send(EndResult, { code: true });
        } catch (err) {
    console.log(err);
    return message.reply(`Oh no, an error occurred. Try again later!`);
}
    }
};