const ms = require('ms');
const Discord = require('discord.js');
var generator = require('generate-password');

module.exports = {
    name: 'hack',
    description: "Hackeas a un usuario",
    aliases: ['forcehack', 'hacking', 'bruteforce'],
    usage: ' <Usuario>',
    cooldown: 10,
    args: 0,
    catergory: 'Entretenimiento',
    async execute(client, message, args) {
        message.react('857642974841012244');
        const guild = message.guild.name;
        const colorfy = message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 'RANDOM';
        if (message.mentions.members.size === 0) return message.channel.send('A quien vas a hackear?, o te hackeo yo ati? uwu') 
        const hacked = message.mentions.members.first()
        const email = [
          '@gmail.com',
          '@hotmail.com',
          '@yahoo.com',
          '@outlook.com',
          '@osakana.nya',
          '@discord.gg',
          `@${guild}.net`
        ];
        const result = Math.floor((Math.random() * email.length));
        var password = generator.generate({
          length: 10,
          numbers: true,
          symbols: true,
          uppercase: true,
          lowercase: true
        }); 
        var password2 = generator.generate({
          length: 10,
          numbers: true,
          symbols: true,
          uppercase: true,
          lowercase: true
        });               
        let emailrs = hacked.user.username + email[result];
        if (hacked.user.id === message.author.id) return message.channel.send('No te puedes hackear ati mismo!!! >.<')
        if (hacked.user.id === client.user.id) return message.channel.send('BAKA!!!, ami no me hackees >:C, menciona a alguien mas u.u')
        let msg = await message.channel.send(`**<a:OsakanaCarga:857642974841012244> |** Iniciando hackeo a **${hacked.user.username}**... nya!!`)
        let time = '3s';
        setTimeout(function() {
          msg.edit(`**<a:OsakanaCarga:857642974841012244> |** Obteniendo email de **${hacked.user.username}**...`)
        }, ms(time));
        let time1 = '6s';
        setTimeout(function() {
          msg.edit(`**<a:OsakanaCarga:857642974841012244> |** Email: ${emailrs}...`)
        }, ms(time1));
        let time2 = '9s';
        setTimeout(function() {
          msg.edit(`**<a:OsakanaCarga:857642974841012244> |** Contraseña: ${password}`)
        }, ms(time2));
        let time3 = '12s';
        setTimeout(function() {
          msg.edit(`**<a:OsakanaCarga:857642974841012244> |** Buscando mas informacion...`)
        }, ms(time3));
        let time4 = '15s';
        setTimeout(function() {
          msg.edit(`**<a:OsakanaCarga:857642974841012244> |** Obteniendo informacion de Steam...`)
        }, ms(time4));
        let time5 = '18s';
        setTimeout(function() {
          msg.edit(`**<a:OsakanaCarga:857642974841012244> |** Usuario: ${hacked.user.username}`)
        }, ms(time5));
        let time6 = '21s';
        setTimeout(function() {
          msg.edit(`**<a:OsakanaCarga:857642974841012244> |** Contraseña: ${password2}`)
        }, ms(time6));
        let time7 = '24s';
        setTimeout(function() {
          msg.edit(`**<a:OsakanaCarga:857642974841012244> |** Se encontraron productos en la Epic Store...`)
        }, ms(time7));
        let time8 = '27s';
        setTimeout(function() {
          msg.edit(`**<a:OsakanaCarga:857642974841012244> |** Importando productos desde **${hacked.user.username}** a la cuenta de **${message.author.username}**`)
        }, ms(time8));
        let time9 = '30s';
        setTimeout(function() {
          msg.edit(`**<a:OsakanaCarga:857642974841012244> |** Recopilando datos...`)
        }, ms(time9));
        let time10 = '33s';
        setTimeout(function() {
          msg.edit(`**<a:OsakanaCarga:857642974841012244> |** Pingeando a <@${hacked.id}>...`)
        }, ms(time10));
        let time11 = '36s';
        setTimeout(function() {
          msg.edit(`**<a:OsakanaCarga:857642974841012244> |** Terminado proceso...`)
        }, ms(time11));
        let time12 = '39s';
        setTimeout(function() {
          msg.edit(`**<a:OsakanaCarga:857642974841012244> |** Enviando datos al remitente...`)
          const embedin = new Discord.MessageEmbed()
            .setColor(colorfy)
            .setTitle('Datos recopilados!!!')
            .setDescription(`Email: ${emailrs}\nContraseña: ${password}\nUsuario de Steam: ${hacked.user.username}\nContraseña: ${password2}`)
          message.author.send(embedin)
        }, ms(time12));
        let time13 = '41s';
        setTimeout(function() {
          msg.edit(`**<a:OsakanaVisto:857640645408849920> |** Hackeo finalizado correctamente!! nwn`)
        }, ms(time13));
  }
};