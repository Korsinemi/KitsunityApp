const Discord = require('discord.js');
/*
const animaction = require('../../util/animaction/animaction');
*/

module.exports = {
    name: 'wag',
    description: "Bate la colita UwU",
    aliases: ['whip', 'moveit'],
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
          */
      }
  };