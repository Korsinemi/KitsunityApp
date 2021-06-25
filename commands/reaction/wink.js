const Discord = require('discord.js');
let winkop = [
  {
    name: "Himōto! Umaru-chan",
    url: "https://i.imgur.com/KWSYMUK.gif"
  },
  {
    name: "Gabriel DropOut",
    url: "https://i.imgur.com/hT5p1dn.gif"
  },
  {
    name: "Tamako Market",
    url: "https://i.imgur.com/0tUfHZQ.gif"
  },
  {
    name: "Kara no Kyōkai",
    url: "https://i.imgur.com/tBy3vZf.gif"
  },
  {
    name: "Kyōkai no Kanata",
    url: "https://i.imgur.com/fhy50yC.gif"
  },
  {
    name: "Love Live!",
    url: "https://i.imgur.com/WNLy66U.gif"
  },
  {
    name: "Noragami",
    url: "https://i.imgur.com/oZEH65E.gif"
  },
  {
    name: "Darling In The Franxx",
    url: "https://i.imgur.com/epbE1WP.gif"
  },
  {
    name: "Urara Meirochō",
    url: "https://i.imgur.com/UjQelyT.gif"
  },
  {
    name: "Love Lab",
    url: "https://i.imgur.com/QoD2AJr.gif"
  },
  {
    name: "YuruYuri",
    url: "https://i.imgur.com/cO3GkM9.gif"
  },
  {
    name: "Hanasaku Iroha",
    url: "https://i.imgur.com/YimGaP3.gif"
  },
  {
    name: "Monogatari (Series)",
    url: "https://i.imgur.com/21avHMG.gif"
  },
  {
	name: "Love Live!",
	url: "https://i.imgur.com/2P67TSh.gif"
  },
  {
	name: "Takanashi Rikka Kai: Chuunibyou demo Koi ga Shitai! Movie",
	url: "https://i.imgur.com/qEKtTjJ.gif"
  },
  {
	name: "Yahari Ore no Seishun LoveCome wa Machigatte Iru. Zoku",
	url: "https://i.imgur.com/6BLQYCe.gif"
  },
  {
	name: "Free!",
	url: "https://i.imgur.com/BGM5bjI.gif"
  },
  {
	name: "Love Live!",
	url: "https://i.imgur.com/xdkpP7p.gif"
  },
  {
	name: "Princess Connect! Re:Dive",  //Tener en cuenta uwu
	url: "https://i.imgur.com/mhrroS0.gif"
  },
  {
	name: "iDOLM@STER (Series)",
	url: "https://i.imgur.com/yRMVP6w.gif"
  },
  {
	name: "YuruYuri",
	url: "https://i.imgur.com/uSkhcC1.gif"
  },
  {
	name: "Rakki ☆ Suta",
	url: "https://i.imgur.com/kCAlYta.gif"
  },
  {
	name: "Pokèmon",
	url: "https://i.imgur.com/Fgm57Ut.gif"
  }
];

module.exports = {
    name: 'wink',
    description: "Guiño >.*",
    aliases: ['blink', 'yaw'],
    usage: ' [Usuario]',
    cooldown: 2,
    args: 0,
    catergory: 'Reacción',
    async execute(client, message, args) {
            message.react('✨');
            if (message.mentions.members.size === 0) {
                let wink = winkop[Math.floor(Math.random()*winkop.length)];
                const botaction = [
                    `**${message.author.username}** guiña el ojo >u<`,
                    `**${message.author.username}** *guiño*`
                ]
                randombot = botaction[Math.floor(Math.random() * Math.floor(botaction.length))];
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randombot)
                .setImage(wink.url)
                .setFooter(`🍚 Anime | ${wink.name}`)
                return message.channel.send(embed);
            }
            const member = message.mentions.members.first();
            let wink = winkop[Math.floor(Math.random()*winkop.length)];
            if (member.user.id === message.author.id) {
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.username}** se esta guiñando el ojo -.n`,)
                .setImage(wink.url)
                .setFooter(`🍚 Anime | ${wink.name}`)
                return message.channel.send(embed);
            } else if (member.user.id === client.user.id) {
                const botaction = [
                    `**${message.author.username}** me guiña el ojo uwu`,
                    `**${message.author.username}** me esta guiñando el ojo .w.`
                ]
                randombot = botaction[Math.floor(Math.random() * Math.floor(botaction.length))];
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randombot)
                .setImage(wink.url)
                .setFooter(`🍚 Anime | ${wink.name}`)
                return message.channel.send(embed);
            } else {
            const randomaction = [
                `**${message.author.username}** le guiño el ojo a **${member.user.username}** >w<`,
                `**${message.author.username}** esta guiñandole el ojo a **${member.user.username}**!!!`
            ] //Respuestas posibles
            randomsg = randomaction[Math.floor(Math.random() * Math.floor(randomaction.length))];
            const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randomsg)
                .setImage(wink.url)
                .setFooter(`🍚 Anime | ${wink.name}`)
            return message.channel.send(embed);
            }
    }
};