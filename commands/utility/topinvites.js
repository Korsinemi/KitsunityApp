const Util = require('../../util/MitUtil.js');

module.exports = {
  name: 'topinvite',
  description: "Se ordenaran en lista las invitaciones del servidor .w.",
  aliases: ['ti', 'topinvites', 'invites'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Utilidad',
  async execute(client, message, args) {
    try {
      const invites = await message.guild.fetchInvites();
      const topTen = invites.filter((inv) => inv.uses > 0).sort((a, b) => b.uses - a.uses).first(10);

      let Description = "No hay invitaciones aqui u.u";
      if (topTen.length) {
        Description = topTen.map((inv) => `•El codigo de invitacion ${inv.code} de **${inv.inviter.username}** tiene **${inv.uses.toLocaleString()}** usos!!`).join("\n");
      }

      return message.channel.send({
        embed: {
          title: "Top Invites",
          description: Description,
          color: "#8B0000",
          footer: {
            text: "Requested by " + message.author.tag,
            icon_url: message.author.displayAvatarURL()
          },
          timestamp: new Date()
        }
      });
    } catch (err) {
      console.log(err);
      return message.reply(`Oh no, an error occurred. Try again later!`);
    }
  }
};
