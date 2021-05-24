const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports.run = (bot, message, [user]) => {
        if (!message.guild) return;
        message.react('✨');
        if (message.mentions.members.size === 0) {
            async function no_ping() {
            const GIF = await neko.sfw.baka();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**${message.author.username}** eres demasiado tont@ -.-`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
                async function ping() {
                    const member = message.mentions.members.first();
                    const GIF = await neko.sfw.baka();
                    if (member.id === message.author.id) {
                        message.channel.send(`**${message.author.username}** eres demasiado tont@ como para admitirlo u.u`)
                    } else if (member.id === bot.user.id) {
                        const botaction = [
                            `EH... BAKA!!!!, No seas ignorante >:c`,
                            `Ven **${message.author.username}**, dejame mostrarte quien es idiota u.u`
                        ]
                        message.channel.send(botaction);
                    }
                }
                ping();
            }
};

module.exports.help = {
	name: "baka",
	description: "Demuestra lo tont@ que eres con este comando u.u",
	category: "Reacción",
};