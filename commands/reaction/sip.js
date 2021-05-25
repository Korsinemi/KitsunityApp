const Discord = require('discord.js');
const animaction = require('../../util/animaction/index.js');

module.exports = {
    name: 'sip',
    description: "Bebe algo nwn",
    aliases: ['gulp'],
    usage: ' [Usuario]',
    cooldown: 2,
    args: 0,
    catergory: 'Reacción',
    async execute(client, message, args) {
        message.react('✨');
            if (message.mentions.members.size === 0) {
                const sip = animaction.sip();
                const botaction = [
                    `**${message.author.username}** esta bebiendo/tomando algo :3`,
                    `**${message.author.username}** esta disfrutando de una bebida .w.`
                ]
                randombot = botaction[Math.floor(Math.random() * Math.floor(botaction.length))];
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randombot)
                .setImage(sip)
                return message.channel.send(embed);
            }
            const member = message.mentions.members.first();
            const sip = animaction.sip();
            if (member.user.id === message.author.id) {
                return message.channel.send(`**${message.author.username}** no puedes beberte ati mismo, suena muy raro ._.`);
            } else if (member.user.id === client.user.id) {
                const botaction = [
                    `**${message.author.username}**, te apetece tomar algo refrescante?, jeje .w.`,
                    `**${message.author.username}** comparte conmigo esta bebida nwn`
                ]
                randombot = botaction[Math.floor(Math.random() * Math.floor(botaction.length))];
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randombot)
                .setImage(sip)
                return message.channel.send(embed);
            } else {
            const randomaction = [
                `**${message.author.username}** esta bebiendo/tomando algo con **${member.user.username}** nwn`,
                `**${message.author.username}** se fue a beber/tomar algo con **${member.user.username}** :3`
            ] //Respuestas posibles
            randomsg = randomaction[Math.floor(Math.random() * Math.floor(randomaction.length))];
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(randombot)
            .setImage(sip)
            return message.channel.send(embed);
            }
      }
  };