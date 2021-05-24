const Util = require('../../util/MitUtil.js');
const Discord = require('discord.js');
const animaction = require('../../util/animaction');

module.exports = {
  name: 'fact',
  description: "Sabias que este bot tiene nuevos comandos siempre .w.",
  aliases: ['facts' , 'doyouknow'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Diversión',
  async execute(client, message, args) {
        message.react('💎');
        const fact = animaction.facts();
        const animaction_embed = new Discord.MessageEmbed()
            .setTitle('Sabias que...')
            .setColor('RANDOM')
            .setDescription(fact)
            .setFooter('Potenciado por animaction de KitsuneCode');
        return message.channel.send(animaction_embed);
    }
};
