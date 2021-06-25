const Discord = require('discord.js');
let smileop = [
  {
    name: 'Shinryaku! Ika Musume',
    url: 'https://i.imgur.com/GTxqBDA.gif',
  },
  {
    name: 'Dangan Ronpa',
    url: 'https://i.imgur.com/xd3G7iE.gif',
  }
];

module.exports = {
    name: 'testid',
    description: "Test ID",
    aliases: [],
    usage: ' [Usuario]',
    cooldown: 2,
    args: 0,
    catergory: 'Reacción',
    hidden: true,
    async execute(client, message, args) {
            message.react('✨');
            const idtype = args[0];
            const idmember = `<@${idtype}>`;
            if (message.mentions.members.size === 0) {
                let smile = smileop[Math.floor(Math.random()*smileop.length)];
                const botaction = [
                    `**${message.author.username}** esta sonriendo c:`,
                    `**${message.author.username}** se siente muy alegre`
                ]
                randombot = botaction[Math.floor(Math.random() * Math.floor(botaction.length))];
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randombot)
                .setImage(smile.url)
                .setFooter(`🍚 Anime | ${smile.name}`)
                return message.channel.send(embed);
            } else if (idmember) {
              return message.channel.send(`**${idmember.user.username}** ha sido mencionado!!`)
            }
            const member = message.mentions.members.first();
            let smile = smileop[Math.floor(Math.random()*smileop.length)];
            if (member.user.id === message.author.id) {
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.username}** sonrie en frente de un espejo :D`,)
                .setImage(smile.url)
                .setFooter(`🍚 Anime | ${smile.name}`)
                return message.channel.send(embed);
            } else if (member.user.id === client.user.id) {
                const botaction = [
                    `**${message.author.username}** me sonrie .w.`,
                    `**${message.author.username}** me esta sonriendo c:`
                ]
                randombot = botaction[Math.floor(Math.random() * Math.floor(botaction.length))];
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randombot)
                .setImage(smile.url)
                .setFooter(`🍚 Anime | ${smile.name}`)
                return message.channel.send(embed);
            } else {
            const randomaction = [
                `**${message.author.username}** le sonrie a **${member.user.username}** >w<`,
                `**${message.author.username}** muestra su sonrisa a **${member.user.username}**!!!`
            ] //Respuestas posibles
            randomsg = randomaction[Math.floor(Math.random() * Math.floor(randomaction.length))];
            const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randomsg)
                .setImage(smile.url)
                .setFooter(`🍚 Anime | ${smile.name}`)
            message.channel.send(embed);
            }
            // Mencionar usando ID - Funcion en pruebas
    }
};