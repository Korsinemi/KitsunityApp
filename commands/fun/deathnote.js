const Discord = require('discord.js');
const Util = require('../../util/MitUtil.js');
const dnop = [
  `https://i.imgur.com/Ot6887K.gif`,
  `https://i.imgur.com/IVU6T4x.gif`,
  `https://i.imgur.com/Hc3yphw.gif`,
  `https://i.imgur.com/5SHJ4qx.gif`,
  `https://i.imgur.com/k3osp0Y.gif`,
  `https://i.imgur.com/9EFOLSy.gif`,
  `https://i.imgur.com/VdNpYLF.gif`,
  `https://i.imgur.com/Zz1xhx5.gif`,
  `https://i.imgur.com/EAB3cX7.gif`
];
const anime = '🍚 Anime | DeathNote';

module.exports = {
    name: 'deathnote',
    description: "Matas a un usuario con la deathnote u.u",
    aliases: ['dn'],
    usage: ' <Usuario>',
    cooldown: 10,
    args: 0,
    catergory: 'Entretenimiento',
    async execute(client, message, args) {
        const colorfy = message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 'RANDOM';
        let deth = args.join("").split(",");
        death = deth[0] && message.mentions.members.first();
        time = deth[1];
        if (isNaN(time)) {
          time = 25
        }
        const dnb = Math.floor((Math.random() * dnop.length));
        const dna = Math.floor((Math.random() * dnop.length));
        if (!death) return message.channel.send('A quien vas a matar?, menciona a alguien u.u') 
        if (death.user.id === message.author.id) return message.channel.send('Te vas a matar ati mismo, pues no lo permitire!!!, menciona a alguien mas u.u')
        if (death.user.id === client.user.id) return message.channel.send('No te... no te atrevas a escribir mi nombre ;c, menciona a alguien mas u.u')
        const typings = [
          `Algo inusual esta siendo escrito por **${message.author.username}**!! o.O`,
          `Algo sospechoso es escrito por **${message.author.username}**...`,
          `**${message.author.username}** esta escribiendo algo...`
        ];
        message.react('857644275188367441');
        const result = Math.floor((Math.random() * typings.length));
        const embed = new Discord.MessageEmbed()
            .setDescription(typings[result])
            .setColor(colorfy)
            .setFooter(anime)
            .setImage(dnop[dnb])
        await message.channel.send(embed)
        await Util.delay(time * 1000);
        const embedin = new Discord.MessageEmbed()
            .setDescription(`**${death.user.username}** ha muerto...`)
            .setColor(colorfy)
            .setImage(dnop[dna])
            .setFooter(anime)
        return message.channel.send(embedin)
  }
};