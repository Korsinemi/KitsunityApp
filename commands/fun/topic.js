const Util = require('../../util/MitUtil.js');
const animaction = require('../../util/animaction');
const Discord = require('discord.js')

module.exports = {
  name: 'topic',
  description: "Obten un tema para hablar por si no sabes nwn",
  aliases: ['topics'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Diversión',
  async execute(client, message, args) {
    message.react('✨');
    const topics = animaction.topics();
    const animaction_embed = new Discord.MessageEmbed()
        .setTitle('Prueba hablar sobre esto .w.')
        .setColor('RANDOM')
        .setDescription(topics)
        .setFooter('Potenciado por animaction de KitsuneCode');
    return message.channel.send(animaction_embed);
}
};
