const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'feed',
    description: "Dale de comer a alguien owo",
    aliases: ['foody', 'saciate'],
    usage: ' [usuario]',
    cooldown: 2,
    args: 0,
    catergory: 'Acción',
    async execute(client, message, args) {
        message.react('✨');
            if (message.mentions.members.size === 0) {
                const GIF = await neko.sfw.feed();
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.username}** se comio una rica comida, yum!!`)
                .setImage(GIF.url)
               return message.channel.send(embed);
            }
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.feed();
            if (member.user.id === message.author.id) {
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.username}** se alimento, asi mism@ ._.???`)
                .setImage(GIF.url)
                message.channel.send(embed);
            } else if (member.user.id === client.user.id) {
                const botaction = [
                    `**${message.author.username}** me dio de comer, ñam nwn -Bate la cola-`,
                    `**${message.author.username}** me ha dejado satisfecha con comida n.n -Sonrie-`
                ]
                randombot = botaction[Math.floor(Math.random() * Math.floor(botaction.length))];
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randombot)
                .setImage(GIF.url)
                return message.channel.send(embed);
            } else {
            const randomaction = [
                `**${message.author.username}** le dio de comer rica comida **${member.username}**, buen provecho nwn`,
                `**${message.author.username}** ha dejado satisfecho a **${member.user.username}** con comida >w<`,
                `**${member.user.username}** tenia hambre y **${message.author.username}** le dio aliemento uwu`
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


