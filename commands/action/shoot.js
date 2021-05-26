const Discord = require('discord.js');
const animaction = require('../../util/animaction/index.js');

module.exports = {
    name: 'shoot',
    description: "Disparale a alguien >:D",
    aliases: ['gun', 'hit'],
    usage: ' [Usuario]',
    cooldown: 2,
    args: 0,
    catergory: 'Acción',
    async execute(client, message, args) {
        message.react('✨');
            if (message.mentions.members.size === 0) {
                const shoot = animaction.shoot();
                const botaction = [
                    `**${message.author.username}** le dispara al aire xD`,
                    `**${message.author.username}** esta lanzando tiros al aire`
                ]
                randombot = botaction[Math.floor(Math.random() * Math.floor(botaction.length))];
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randombot)
                .setImage(shoot)
                return message.channel.send(embed);
            }
            const member = message.mentions.members.first();
            const shoot = animaction.shoot();
            if (member.user.id === message.author.id) {
                if (!message.channel.nsfw) return message.react('839289314411806740'), message.channel.send('<a:nsfw_kitsunity_alert:839289312956383232> | No te permito hacer eso en este canal >:c, valora tu vida y todo ira bien, aunque igual no te detendre -n-')
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.username}** se ha disparado asi mismo...`)
                .setImage(shoot)
                return message.channel.send(embed);
            } else if (member.user.id === client.user.id) {
                return message.channel.send(`Woah!!!, te me calmas o te disparo yo >:/?`);
            } else {
            const randomaction = [
                `**${message.author.username}** le disparo a **${member.user.username}** D:`,
                `**${message.author.username}** le ha disparado a **${member.user.username}**... :o`
            ] //Respuestas posibles
            randomsg = randomaction[Math.floor(Math.random() * Math.floor(randomaction.length))];
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(randombot)
            .setImage(shoot)
            return message.channel.send(embed);
            }
      }
  };