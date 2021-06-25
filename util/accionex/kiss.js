const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports.run = (bot, message, [user]) => {
        if (!message.guild) return;
        message.react('✨');
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.kiss();
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.username}** beso el aire xDD`)
                .setImage(GIF.url)
                message.channel.send(embed);
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.kiss();
            if (member.id === message.author.id) {
                message.send('Wow, como te besas ati mismo ._., Menciona a alguien')
            } else if (member.id === bot.user.id) {
                const GIF = await neko.sfw.hug();
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.username}** me beso... o//o`)
                .setImage(GIF.url)
                message.channel.send(embed);
            } else {
                //Constates aleatorias, funcion unica de este bot UwU    
                const randomaction = [
                    `**${message.author.username}** beso a **${member.user.username}** n-n`,
                    `**${message.author.username}** le da un beso con amor a **${member.user.username}** >w<`,
                    `**${member.user.username}** recibe un beso de **${message.author.username}** uwu`
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
	name: "kiss",
	description: "Besa a alguien nwn",
	usage: `<usuario>`,
	category: "Acción",
};

