const { Message } = require("discord.js");
const db = require('../../util/Database.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'audead',
  description : 'Marca un jugados como **muerto** y lo silencia en la llamada >w<',
  aliases: ['amongdead', 'aukill'],
  usage: '',
  cooldown: 2,
  args: 1,
  catergory: 'Among Us',
  async execute(client, message, args) {
    const role = message.guild.roles.cache.find((r) => r.name === 'AmongUs-Admin')
    //--------------------------------------------------------------------------------------------------------
    let ServerPrefix = await db.get(`${message.guild.id}_prefix`);
    if (!role) return message.channel.send(`El juego no ha sido establecido, utiliza \`${ServerPrefix}ausetup\` para poder iniciar un nuevo Among Us uwu`)
    if (!message.member.roles.cache.has(role.id)) return message.channel.send(new MessageEmbed()
        .setDescription(`This command can only be used by members that has ${role}, role.`).setColor('RED')
    )
    const target = message.mentions.members.first();

    if (!target) return message.channel.send("No se menciono a nadie o el usuario no estaba u.u");

    await target.voice.setMute(true);
    message.channel.send(
      `. 　　　。　　　　•　 　ﾟ　　。 　　.\n\n　　　.　　　 　　.　　　　　。　　 。　. 　\n\n.　　 。　　　ﾟ　　<:cyan:760091234882027520>。 . 　　 • 　　　　•\n\n'　　ﾟ　　           **${target.displayName}** was ejected 　 。　•\n\n　.　　　'　　　。　　ﾟ。　　ﾟ。　　ﾟ。　　ﾟ\n\n　　。　　ﾟ　　　•　　　. 　ﾟ　　　　'　 .`
    )
  },
};
