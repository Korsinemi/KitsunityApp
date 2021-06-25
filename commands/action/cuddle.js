const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'cuddle',
    description: "Acurrucate con alguien nwn",
    aliases: ['snuggle'],
    usage: ' [usuario]',
    cooldown: 2,
    args: 0,
    catergory: 'Acción',
    async execute(client, message, args) {
        message.react('✨');
            if (message.mentions.members.size === 0) {
                const GIF = await neko.sfw.cuddle();
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.username}** se acurruco :P`)
                .setImage(GIF.url)
                .setFooter(`Anime: ${GIF.anime}`)
                return message.channel.send(embed);
            }
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.cuddle();
            if (member.user.id === message.author.id) {
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.username}** se acurruco :P`)
                .setImage(GIF.url)
                return message.channel.send(embed);
            } else if (member.user.id === client.user.id) {
                const botaction = [
                    `**${message.author.username}** se acurruco conmigo >//< -Se sonroja-`,
                    `Ven **${message.author.username}**, acurrucate conmigo UwU -Se acurruca-`
                ]
                randombot = botaction[Math.floor(Math.random() * Math.floor(botaction.length))];
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randombot)
                .setImage(GIF.url)
                return message.channel.send(embed);
            } else {
            const randomaction = [
                `**${message.author.username}** se acurruco con **${member.user.username}** >w<`,
                `**${member.user.username}**, **${message.author.username}** se acurruco contigo uwu`
            ] //Respuestas posibles
            randomsg = randomaction[Math.floor(Math.random() * Math.floor(randomaction.length))];
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(randomsg)
            .setImage(GIF.url)
            return message.channel.send(embed);
            }
    }  
};