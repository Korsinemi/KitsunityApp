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
            let Icon, Yellow, Texts;
            let typing = args.join("%20").split(",");
            if (typing.length < 3) {
                return message.reply("Como genero el logro??, prueba esto ``k=achievement 4,Logro obtenido,Ser la mejor``")
            }
            Icon = typing[0];
            Yellow = typing[1];
            Texts = typing[2];
            

            if (Icon < 1 || Icon > 40){
                return message.reply("Ingresa un numero valido entre 1 y 40 >.<")
                }
            
            if (typing[1].length < 3 || typing[1].length > 22){
                return message.reply('El texto debe tener mas de 3 caracteres y menos de 20 caracteres')
            }

            if (typing[2].length < 3 || typing[2].length > 22){
                return message.reply('El texto debe tener mas de 3 caracteres y menos de 20 caracteres')
            }

			return message.channel.send({// Numero max de letras 20 | numero minimo de letras 3
                embed: {
                    title: "Logro obtenido!!!",
                    image: {
                        url: `http://mcgen.herokuapp.com/a.php?i=${Icon}&h=${Yellow}&t=${Texts}`
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
