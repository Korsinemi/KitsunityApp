const Discord = require('discord.js');
let smileop = [
  {
    name: 'Nagi no Asukara',
    url: 'https://i.imgur.com/hAtjozW.gif',
  },
  {
    name: 'Tonari no Kaibutsu-Kun',
    url: 'https://i.imgur.com/pAnqbWL.gif',
  },
  {
    name: 'Tonari no Kaibutsu-Kun',
    url: 'https://i.imgur.com/Wo2ziqG.gif',
  },
  {
    name: 'iDOLM@STER (Series)',
    url: 'https://i.imgur.com/TUpszhG.gif',
  },
  {
    name: 'Hyouka',
    url: 'https://i.imgur.com/onscM36.gif',
  },
  {
    name: 'Amaama to Inazuma',
    url: 'https://i.imgur.com/VP7TVaO.gif',
  },
  {
    name: 'Hyouka',
    url: 'https://i.imgur.com/ak3yfFv.gif',
  },
  {
    name: 'Nisekoi',
    url: 'https://i.imgur.com/pUJ0cJE.gif',
  },
  {
    name: 'Jibaku Shōnen Hanako-Kun',
    url: 'https://i.imgur.com/cU0ucOV.gif',
  },
  {
    name: 'Himōto! Umaru-Chan',
    url: 'https://i.imgur.com/7OXhZON.gif',
  },
  {
    name: 'Hige wo Soru. Soshite Joshi Kōsei wo Hirou',
    url: 'https://i.imgur.com/0TaRhze.gif',
  },
  {
    name: 'Hyouka',
    url: 'https://i.imgur.com/yLZ5Z8N.gif',
  },
  {
    name: 'Kimetsu no Yaiba',
    url: 'https://i.imgur.com/xzDIwYw.gif',
  },
  {
    name: 'Zombie Land Saga',
    url: 'https://i.imgur.com/pPAA4gY.gif',
  },
  {
    name: 'Sewayaki Kitsune no Senko-San',
    url: 'https://i.imgur.com/KZnEx8x.gif',
  },
  {
    name: 'Koe no Katachi',
    url: 'https://i.imgur.com/TCwqLGS.gif',
  },
  {
    name: 'Fairy Tail',
    url: 'https://i.imgur.com/da8wPnX.gif',
  },
  {
    name: 'Hina Logic from Luck & Logic',
    url: 'https://i.imgur.com/ZlSqgPy.gif',
  },
  {
    name: 'Darker than Black',
    url: 'https://i.imgur.com/p07V3CW.gif',
  },
  {
    name: 'Denpa Onna to Seishun Otoko',
    url: 'https://i.imgur.com/nrrnbr4.gif',
  },
  {
    name: 'Gabriel DropOut',
    url: 'https://i.imgur.com/CmMRBTC.gif',
  },
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
    name: 'smile',
    description: "Sonrie :D",
    aliases: ['smiling', 'beam'],
    usage: ' [Usuario]',
    cooldown: 2,
    args: 0,
    catergory: 'Reacción',
    async execute(client, message, args) {
            message.react('✨');
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
            return message.channel.send(embed);
            }
    }
};