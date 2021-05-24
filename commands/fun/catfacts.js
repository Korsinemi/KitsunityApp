const Util = require('../../util/MitUtil.js');
const animaction = require('../../util/animaction/index.js');
const Discord = require('discord.js');

module.exports = {
    name: 'catfacts',
    description: "Responde con un dato sobre los gatos .w.",
    aliases: ['catfact'],
    usage: '',
    cooldown: 2,
    args: 0,
    catergory: 'Diversión',
    async execute(client, message, args) {
        message.react('🐈');
        const catfact = animaction.catfacts();
        const animaction_embed = new Discord.MessageEmbed()
            .setTitle('Datos sobre los gatos')
            .setColor('RANDOM')
            .setDescription(catfact)
            .setFooter('Potenciado por animaction');
        return message.channel.send(animaction_embed);
    }
};
