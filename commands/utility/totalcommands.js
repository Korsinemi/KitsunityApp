const Util = require('../../util/MitUtil.js');
const Discord = require("discord.js");
const db = require('../../util/Database.js');

module.exports = {
    name: 'totalcommands',
    description: 'Muestra la cantidad de comandos y categorias del bot',
    aliases: ['totalcommand'],
    usage: '',
    cooldown: 2,
    args: 0,
    hidden: true,
    catergory: 'Utilidad',
    async execute(client, message, args) {
        try {
            let commands = client.commands.array();
            let categories = '7';
            let ServerPrefix = await db.get(`${message.guild.id}_prefix`);
            let helpEmbed = new Discord.MessageEmbed()
                .setTitle(`Comandos totales`)
                .setColor("RANDOM")
                .setDescription(`Kitsunity tiene un total de ${commands.length} comandos divididos en ${categories} categorias nwn!`)
                .setFooter(`Utiliza ${ServerPrefix}help para mas información .w.`);

            return message.channel.send(helpEmbed);
        } catch (err) {
            console.log(err);
            return message.reply(`Oh no, an error occurred. Try again later!`);
        }
    }
};
