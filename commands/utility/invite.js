const Util = require('../../util/MitUtil.js');
const Discord = require('discord.js');

module.exports = {
  name: 'invite',
  description: 'Envia una invitacion del bot UwU',
  aliases: ['link'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Utilidad',
  async execute(client, message, args) {
    message.react('💜');
    const creator = '824760675586932766'
    const embed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/KitsuneCode')
    .setDescription('**[💖 Añademe dando click aqui!!](https://discord.com/oauth2/authorize?client_id=831865259357896755&permissions=8&scope=bot%20applications.commands)**\nAl invitarla a tu servidor me ayudas a seguir mejorando mi proyecto y seguir actualizandola UwU')
    .setColor('RANDOM')
    .setImage('https://kitsunityx.glitch.me/api/sfw/wag/wag1.gif')
    .setFooter('Hecho con 💖 por KitsuneCode#5011, nyah nwn')
    return message.author.send(embed);
  }
};
