const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
    name: 'react1',
    description: 'Prueba',
    aliases: [],
    usage: '',
    cooldown: 2,
    args: 0,
    category: 'Utilidad',
    async execute(client, message, args){
        const embed1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Prueba 1')
        .setDescription('Funciona :D')

        const btn1 = new MessageButton()
        .setStyle('green')
        .setLabel('Si uwu')
        .setID('0001')

        const btn2 = new MessageButton()
        .setStyle('red')
        .setLabel('No unu')
        .setID('0002')

        const compo = new MessageActionRow()
        .addComponent(btn1)
        .addComponent(btn2)

        message.channel.send({
            embed: embed1,
            component: compo
        })
    }
};