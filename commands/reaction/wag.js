const Discord = require('discord.js');
const animaction = require('../../util/animaction/index.js');

module.exports = {
    name: 'wag',
    description: "Bate la colita UwU",
    aliases: ['whip', 'moveit'],
    usage: ' [Usuario]',
    cooldown: 2,
    args: 0,
    catergory: 'Reacción',
    async execute(client, message, args) {
        message.react('✨');
            if (message.mentions.members.size === 0) {
                const wag = animaction.wag();
                const botaction = [
                    `**${message.author.username}** bate la colita UwU`,
                    `**${message.author.username}** esta batiendo la cola nwn`
                ]
                randombot = botaction[Math.floor(Math.random() * Math.floor(botaction.length))];
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randombot)
                .setImage(wag)
                return message.channel.send(embed);
            }
            const member = message.mentions.members.first();
            const wag = animaction.wag();
            if (member.user.id === message.author.id) {
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.username}** se bate la cola, asi mismo???`)
                .setImage(wag)
                return message.channel.send(embed);
            } else if (member.user.id === client.user.id) {
                const botaction = [
                    `**${message.author.username}** me esta batiendo la cola, buen chic@ nwn`,
                    `**${message.author.username}** me bate la cola,de seguro quiere afecto uwu`
                ]
                randombot = botaction[Math.floor(Math.random() * Math.floor(botaction.length))];
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randombot)
                .setImage(wag)
                return message.channel.send(embed);
            } else {
            const randomaction = [
                `**${message.author.username}** le esta batiendo la cola a **${member.user.username}** >w<`,
                `**${message.author.username}** esta batiendole la cola a **${member.user.username}**!!! OwO`
            ] //Respuestas posibles
            randomsg = randomaction[Math.floor(Math.random() * Math.floor(randomaction.length))];
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(randombot)
            .setImage(wag)
            return message.channel.send(embed);
            }
      }
  };