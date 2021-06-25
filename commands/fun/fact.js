const Util = require('../../util/MitUtil.js');
const Discord = require('discord.js');
const accionex = require('../../util/accionex/accionex.js');

module.exports = {
  name: 'fact',
  description: "Sabias que este bot tiene nuevos comandos siempre .w.",
  aliases: ['facts' , 'doyouknow'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Entretenimiento',
  async execute(client, message, args) {
      message.react('💎');
      const colorfy = message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 'RANDOM';
      const fact = accionex.facts();
      const embed = new Discord.MessageEmbed()
        .setTitle('Sabias que...')
        .setColor(colorfy)
        .setDescription(fact)
      return message.channel.send(embed);
    }
};
