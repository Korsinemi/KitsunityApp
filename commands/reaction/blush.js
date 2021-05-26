const Discord = require('discord.js');
const animaction = require('../../util/animaction/index.js');

module.exports = {
    name: 'blush',
    description: "Te sonrojas u//u",
    aliases: ['redden', 'flush'],
    usage: ' [Usuario]',
    cooldown: 2,
    args: 0,
    catergory: 'Reacción',
    async execute(client, message, args) {
        message.react('✨');
            if (message.mentions.members.size === 0) {
                const blush = animaction.blush();
                const botaction = [
                    `**${message.author.username}** se sonrojo >//<`,
                    `**${message.author.username}** se ha sonrojado u//u`
                ]
                randombot = botaction[Math.floor(Math.random() * Math.floor(botaction.length))];
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randombot)
                .setImage(blush)
                return message.channel.send(embed);
            }
            const member = message.mentions.members.first();
            const blush = animaction.blush();
            if (member.user.id === message.author.id) {
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.username}** se ha sonrojado al verse, asi mismo? .n.`)
                .setImage(blush)
                return message.channel.send(embed);
            } else if (member.user.id === client.user.id) {
                const botaction = [
                    `**${message.author.username}** se ha sonrojado al verme o//o`,
                    `**${message.author.username}** por que te sonrojaste conmigo, jaja -w-`
                ]
                randombot = botaction[Math.floor(Math.random() * Math.floor(botaction.length))];
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randombot)
                .setImage(blush)
                return message.channel.send(embed);
            } else {
            const randomaction = [
                `**${message.author.username}** se ha sonrojado al ver a **${member.user.username}** >w<`,
                `**${member.user.username}** hiso sonrojar a **${message.author.username}**!!! ewe`
            ] //Respuestas posibles
            randomsg = randomaction[Math.floor(Math.random() * Math.floor(randomaction.length))];
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(randombot)
            .setImage(blush)
            return message.channel.send(embed);
            }
      }
  };