const db = require('../../util/Database.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'austart',
  description: "Inicia el juego de Among Us :3",
  aliases: ['auplay', 'amongstart'],
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
            await member[1].voice.setDeaf(true);
        }
        message.channel.send(
            new MessageEmbed()
                .setTitle("The Game Starts!")
                .setDescription(
                    "Los usuarios en el canal de voz han sido ensordecidos, nadie puede escucharte :3\nJuega bien :)))))))."
                )
                .setColor("GREEN")
                .setThumbnail("https://i.imgur.com/vKF42bH.png")
                .setFooter("Comandos creados por KitsuneCode#0016 y recon#0001")
                .setTimestamp()
        );

    }
}
