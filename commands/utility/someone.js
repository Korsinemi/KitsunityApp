const Util = require('../../util/MitUtil.js');

module.exports = {
  name: 'someone',
  description: 'Elije un usuario aleatorio',
  aliases: ['something', 'randompick', 'person'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Utilidad',
  async execute(client, message, args) {
    try {
      const member = message.guild.members.cache.random(1)[0];
      return message.channel.send({
        embed: {
          title: "Se ha elejido un usuario al azar",
          color: "RANDOM",
          fields: [{
            name: '• Usuario',
            value: member.user.username,
            inline: false,
          },
          {
            name: '• Apodo',
            value: member.user.discriminator,
            inline: false,
          },
          {
            name: '• ID',
            value: member.user.id,
            inline: false,
          }
          ],
          thumbnail: {
            url: member.user.displayAvatarURL(),
          },
          footer: {
            text: "Requested by " + message.author.tag,
            icon_url: message.author.displayAvatarURL()
          },
          timestamp: new Date()
        }
      });
    }
    catch (err) {
      console.log(err);
      return message.reply(`Oh no, an error occurred. Try again later!`);
    }
  }
};
