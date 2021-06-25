const Util = require('../../util/MitUtil.js');
const accionex = require('../../util/accionex/accionex.js');
const Discord = require('discord.js');

module.exports = {
    name: 'catfacts',
    description: "Responde con un dato sobre los gatos .w.",
    aliases: ['catfact'],
    usage: '',
    cooldown: 2,
    args: 0,
    catergory: 'Entretenimiento',
    async execute(client, message, args) {
        message.react('🐈');
        const colorfy = message.guild.me.displayHexColor!=='#000000' ?message.guild.me.displayHexColor : 'RANDOM';
        const catfact = accionex.catfacts();
        const embed = new Discord.MessageEmbed()
            .setTitle('Datos sobre los gatos')
            .setColor(colorfy)
            .setDescription(catfact)
        return message.channel.send(aembed);
    }
};
