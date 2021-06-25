const Discord = require('discord.js');
/*
const animaction = require('../../util/animaction/animaction');
*/

module.exports = {
    name: 'sip',
    description: "Bebe algo nwn",
    aliases: ['gulp'],
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
          */
      }
  };