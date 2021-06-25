const Discord = require('discord.js');

module.exports = {
    name: 'deredere',
    description: "KaBoom!!",
    aliases: [],
    usage: '',
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
    }
};