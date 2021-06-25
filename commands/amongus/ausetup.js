const db = require('../../util/Database.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ausetup',
  description: "Configura el juego de Among Us c:",
  aliases: ['aucreate', 'amongsetup'],
  usage: '',
  cooldown: 15,
  args: 0,
  catergory: 'Among Us',
  async execute(client, message, args) {
        const role = message.guild.roles.cache.find((r) => r.name === 'AmongUs-Admin')
        //--------------------------------------------------------------------------------------------------------
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You need ` MANAGE_MESSAGES ` permission to use this command.')
        if(!message.guild.me.hasPermission('ADMINISTRATOR')) return message.channel.send('I need ` ADMINISTRATOR ` permissions to continue.')
        if(!role) {
        let auRole = await message.guild.roles.create({
            data: {
              name: 'AmongUs-Admin'
            }
          })
          message.channel.send(new MessageEmbed()
            .setTitle('Among Us inicializado correctamente')
            .setDescription('Command List -> https://github.com/reconlx/amongus-discord-bot/').setColor('GREEN')
          )
        } else {
            message.channel.send('` El Rol Among-Us  ` ya fue creado >.<, en su lugar usa austart!')
        }
    }
}
