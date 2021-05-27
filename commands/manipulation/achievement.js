const Util = require('../../util/MitUtil.js');
const request = require('node-superfetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'achievement',
    description: `Logro obtenido!!`,
    aliases: ['minecrafttext'],
    usage: ' <Icono 1-40><Texto 1><Texto 2>',
    cooldown: 2,
    args: -1,
    catergory: 'Generadores',
    async execute(client, message, args) {
        try {
            let icon, yellow, text;
            let typing = args.join(" ").split(",");
            if (typing.length < 2) {
                return message.reply("Como genero el logro??, prueba esto ``k=archievement 4,Logro obtenido,Ser la mejor``")
            }
            icon = typing[0];
            yellow = typing[1].join("%20");
            text = typing[2].join("%20");
            

            if (icon != 1 || icon != 2 || icon != 3 || icon != 4 || icon != 5 || icon != 6 || icon != 7 || icon != 8 || 
                icon != 9 || icon != 10 || icon != 11 ||icon != 12 || icon != 13 || icon != 14 || icon != 15 || icon != 16 ||
                icon != 17 || icon != 18 || icon != 19 || icon != 20 || icon != 21 || icon != 22 || icon != 23 || icon != 24 || 
                icon != 25 || icon != 26 || icon != 27 || icon != 28 || icon != 29 || icon != 30 || icon != 31 || icon != 32 || 
                icon != 33 || icon != 34 || icon != 35 || icon != 36 || icon != 37 || icon != 38 || icon != 39 || icon != 40){
                return message.reply("Ingresa un numero valido entre 1 y 40 >.<")
                }
            
            if (yellow.length() < 3 || yellow.length() > 20){
                return message.reply('El texto debe tener mas de 3 caracteres y menos de 20 caracteres')
            }

            if (text.length() < 3 || text.length() > 20){
                return message.reply('El texto debe tener mas de 3 caracteres y menos de 20 caracteres')
            }

			return message.channel.send({// Numero max de letras 20 | numero minimo de letras 3
                embed: {
                    title: "Logro obtenido!!!",
                    image: {
                        url: `http://mcgen.herokuapp.com/a.php?i=${icon}&h=${yellow}&t=${text}`
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
