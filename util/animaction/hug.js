const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports.run = (bot, message, [user]) => {

        if (!message.guild) return;
        message.react('✨');
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.hug();
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.username}** abrazo a un ser invisible O.o`)
                .setImage(GIF.url)
                message.channel.send(embed);
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
                const GIF = await neko.sfw.hug();
                const member = message.mentions.members.first();
                if (member.id === message.author.id) {
                    message.send('Te abrazaras ati mismo ._.? ... No, no puedes >.<, menciona a alguien')
                } else if (member.id === bot.user.id) {
                    const GIF = await neko.sfw.hug();
                    const embed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription(`**${message.author.username}** me abrazo nwn`)
                    .setImage(GIF.url)
                    message.channel.send(embed);
                } else {
                    //Constates aleatorias, funcion unica de este bot UwU    
                    const randomaction = [
                        `**${message.author.username}** abrazo a **${member.user.username}** nwn`,
                        `**${message.author.username}** le da un calido abrazo a **${member.user.username}** >w<`,
                        `**${member.user.username}** a recibido un abrazo de **${message.author.username}** ugu`
                    ] //Respuestas posibles
                    
                    randomsg = randomaction[Math.floor(Math.random() * Math.floor(randomaction.length))];

                    const embed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription(randomsg)
                    .setImage(GIF.url)
                    message.channel.send(embed);
                }
            }
            ping();
    }
 };

module.exports.help = {
	name: "hug",
	description: "Abraza a alguien nwn",
	usage: `<usuario>`,
	category: "Acción",
};
