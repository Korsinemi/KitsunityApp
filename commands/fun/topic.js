const Util = require('../../util/MitUtil.js');
const accionex = require('../../util/accionex/accionex.js');
const Discord = require('discord.js')

module.exports = {
  name: 'topic',
  description: "Obten un tema para hablar por si no sabes de que conversar nwn",
  aliases: ['topics'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Entretenimiento',
  async execute(client, message, args) {
    message.react('💬');
    const colorfy = message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 'RANDOM';
    const topics = accionex.topics();
    const embed = new Discord.MessageEmbed()
        .setTitle('Prueba hablar sobre esto .w.')
        .setColor(colorfy)
        .setDescription(topics)
    return message.channel.send(embed);
    }
};
