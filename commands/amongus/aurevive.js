const { prefix } = require('../../config.json')
const db = require('../../util/Database.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'aurevive',
  description: '**Revive** a todos los jugadores :D',
  aliases: ['amongrevive'],
  usage: '',
  cooldown: 2,
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
            await member[1].voice.setDeaf(false).then(member[1].voice.setMute(false));
        }
        message.channel.send('Reset Complete')
    }
}
