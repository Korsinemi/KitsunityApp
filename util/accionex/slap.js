const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports.run = (bot, message, args)  => {
        if (!message.guild) return;
        message.react('✨');
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.slap();
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.username}** abofeteo el aire... Ehm... .-.?`)
                .setImage(GIF.url)
                message.channel.send(embed);
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.slap();
            if (member.id === message.author.id) {
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.username}** se abofeteo asi mism@ xD`)
                .setImage(GIF.url)
                message.channel.send(embed);
            } else if (member.id === bot.user.id) {
                const botaction = [
                    `**${message.author.username}** me dio una bofetada D:, que te hice :c -Llora-`,
                    `**${message.author.username}** me abofeteo... ;c -Se aleja lastimada-`
                ]
                randombot = botaction[Math.floor(Math.random() * Math.floor(botaction.length))];
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randombot)
                .setImage(GIF.url)
                message.channel.send(embed);
            } else {
            const randomaction = [
                `**${message.author.username}** abofeteo a **${member.user.username}** >.>`,
                `**${member.user.username}**recibio una buena bofetada de **${message.author.username}** u_u`
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
}

module.exports.help = {
	name: "slap",
	aliases: ['paf'],
	description: "Abofetea a alguien >.<",
	usage: `<usuario>`,
	category: "Acción",
};