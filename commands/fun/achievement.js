const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'achievement',
    description: `Logro obtenido!!`,
    aliases: ['minecrafttext'],
    usage: ' <Icono|1-39>,<Texto 1>,<Texto 2>',
    cooldown: 2,
    args: -1,
    catergory: 'Entretenimiento',
    async execute(client, message, args) {
        try {
            message.react('🏆');
            let typing = args.join("%20").split(",");
            if (typing.length < 3) {
                return message.reply("Como genero el logro??, prueba esto ``k=achievement 4,Logro obtenido,Ser la mejor``")
            }
            Icon = typing[0];
            Yellow = typing[1];
            Texts = typing[2];
            
            if (Icon < 1 || Icon > 39){
                return message.reply("ingresa un numero valido entre 1 y 39 >.<")
            }
            
            if (typing[1].length < 3 || typing[1].length > 25){
                return message.reply('el primer texto debe tener mas de 3 caracteres y menos de 20 caracteres u.u!')
            }

            if (typing[2].length < 3 || typing[2].length > 25){
                return message.reply('el segundo texto debe tener mas de 3 caracteres y menos de 20 caracteres >.<!')
            }

			return message.channel.send({// Numero max de letras 20 | numero minimo de letras 3
                embed: {
                    title: "Logro obtenido!!!",
                    image: {
                        url: `https://minecraftskinstealer.com/achievement/${Icon}/${Yellow}/${Texts}`
                    },
                    color: "RANDOM"
                }
            });
		} catch (err) {
            console.log(err);
            return message.reply(`Oh no, an error occurred. Try again later!`);
		}
    }
};
