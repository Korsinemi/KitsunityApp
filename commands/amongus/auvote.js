const db = require('../../util/Database.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'auvote',
  description: "Desensordece a los usuarios del chat de vos",
  aliases: ['amongvote'],
  usage: '',
  cooldown: 15,
  args: 0,
  catergory: 'Among Us',
  async execute(client, message, args) {
        const role = message.guild.roles.cache.find((r) => r.name === 'AmongUs-Admin')
        //--------------------------------------------------------------------------------------------------------
    let ServerPrefix = await db.get(`${message.guild.id}_prefix`);
    if (!role) return message.channel.send(`El juego no ha sido establecido, utiliza \`${ServerPrefix}ausetup\` para poder iniciar un nuevo Among Us uwu`)
        if (!message.member.roles.cache.has(role.id)) return message.channel.send(new MessageEmbed()
            .setDescription(`This command can only be used by members that has ${role}, role.`).setColor('RED')
        )
        let channel = message.member.voice.channel;
        for (let member of channel.members.filter((member) => !member.user.bot)) {
          await member[1].voice.setDeaf(false);
        }
        message.channel.send(
          new MessageEmbed()
            .setTitle("Voting session")
            .setTimestamp()
            .setDescription("Who is the impostor?")
            .setColor("RANDOM")
            .setFooter('Created by recon#0001')
        );

    }
}
