const Discord = require('discord.js');
/*
const animaction = require('../../util/animaction/animaction');
*/

module.exports = {
    name: 'dance',
    description: "Muestra tus pasos owo",
    aliases: ['jig', 'prance'],
    usage: ' [Usuario]',
    cooldown: 2,
    args: 0,
    catergory: 'Reacción',
    async execute(client, message, args) {
      message.react('848437798292946956');
      const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(`https://cdn.discordapp.com/emojis/848437798292946956.gif?v=1`)
        .setDescription('Hola nwn, soy **KitsuneCode**, al parecer este comando aun esta en construcción, pero si gustas ayudarme con gifs para estas acciones sientete libre de contactarme [aqui](https://discord.gg/r3SPkEjNjC)')
        .setImage(`https://media.discordapp.net/attachments/839297635890102272/850836563772047371/proximamente.gif`)
        .setFooter('Anime: Kono Subarashii Sekai ni Shukufuku wo!')
      return message.channel.send(embed);
      /*
        message.react('✨');
            if (message.mentions.members.size === 0) {
                const dance = animaction.dance();
                const botaction = [
                    `**${message.author.username}** esta bailando :3`,
                    `**${message.author.username}** muestra sus grandes pasos!! .w.`
                ]
                randombot = botaction[Math.floor(Math.random() * Math.floor(botaction.length))];
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randombot)
                .setImage(dance)
                return message.channel.send(embed);
            }
            const member = message.mentions.members.first();
            const dance = animaction.dance();
            if (member.user.id === message.author.id) {
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.username}** esta bailando frente a un espejo .w.`)
                .setImage(dance)
                return message.channel.send(embed);
            } else if (member.user.id === client.user.id) {
                const botaction = [
                    `**${message.author.username}** esta bailando conmigo, grandes pasos amig@ .w.`,
                    `**${message.author.username}** se puso a bailar conmigo -Se alegra- nwn`
                ]
                randombot = botaction[Math.floor(Math.random() * Math.floor(botaction.length))];
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randombot)
                .setImage(dance)
                return message.channel.send(embed);
            } else {
            const randomaction = [
                `**${message.author.username}** se puso a bailar con **${member.user.username}** >w<`,
                `**${message.author.username}** demuestra sus pasos a **${member.user.username}**!!! :D`
            ] //Respuestas posibles
            randomsg = randomaction[Math.floor(Math.random() * Math.floor(randomaction.length))];
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(randombot)
            .setImage(dance)
            return message.channel.send(embed);
            }
          */
    }
};