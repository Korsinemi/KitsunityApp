const premiumuser = require('../../config.json');
const moment = require('moment');
const Discord = require('discord.js');
const statuses = {
  online: "Online",
  idle: "Alejado",
  dnd: "No molestar",
  offline: "Desconectado"
};
/*
const ptype = {
  LISTENING: "Escuchando",
  WATCHING: "Viendo",
  COMPETING: "Compitiendo en",
  PLAYING: "Jugando a",
  STREAMING: "Transmitiendo en Twitch"
};
*/


module.exports = {
  name: 'userinfo',
  description: "Muestra informacion sobre un usuario .w.",
  aliases: ['ui', 'user'],
  usage: ' [Usuario]',
  cooldown: 2,
  args: 0,
  catergory: 'Utilidad',
  async execute(client, message, args) {
      let member = message.guild.member(message.author);
      if (message.mentions.users.first()) {
        member = message.guild.member(message.mentions.users.first());
      }
      function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
  
        if (days >= 30 && days < 59){
          return "Hace un mes | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 60 && days < 89){
          return "Hace dos meses  | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 90 && days < 119){
          return "Hace tres meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 120 && days < 149){
          return "Hace cuatro meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 150 && days < 179){
          return "Hace cinco meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 180 && days < 209){
          return "Hace seis meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 210 && days < 239){
          return "Hace siete meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 240 && days < 269){
          return "Hace ocho meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 270 && days < 299){
          return "Hace nueve meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 300 && days < 329){
          return "Hace diez meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 330 && days < 364){
          return "Hace ocho meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 365 && days < 729){
          return "Hace un año | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 730 && days < 1094){
          return "Hace dos años | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 1095) {
        return "Hace tres años o mas | " + days + (days == 1 ? " dia" : " dias");
        } else {
          return "Hace " + days + (days == 1 ? " dia" : " dias");
        }
      };
      const usericon = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
      const days = moment(member.user.createdAt).format("DD/MM/YYYY - h:mm A");
      const joinedDays = moment(member.joinedAt).format("DD/MM/YYYY - h:mm A");
      const nick = `${member.nickname !== null ? `${member.nickname}` : 'No tiene .w.'}`;
      const itsbot = member.user.bot ? "Si" : "No";
      const servername = message.guild.name;
      const rolemax = member.roles.cache.size > 1 ? member.roles.highest : "Ninguno u.u";
      const rolemin = member.roles.cache.size > 1 ? member.roles.lower : "Ninguno u.u";
      const roles = member.roles.cache.size > 1 ? member.roles.cache.sort((a, b) => a.position - b.position).map(r => `${r}`).join(' **|** ') : 'No hay roles aqui .w.';
      const embed = new Discord.MessageEmbed()
      .setAuthor(`Información de ${member.user.tag}`, usericon)
      .setThumbnail(usericon)
      .setColor('RANDOM')
      .addField(`• Información general`, `**<a:kitsunity_sparkling_star:839520700317302825> | Nick:** ${nick}\n**<a:kitsunity_sparkling_star:839520700317302825> | ID:** ${member.id}\n**<a:kitsunity_sparkling_star:839520700317302825> | Bot:** ${itsbot}\n**<a:kitsunity_sparkling_star:839520700317302825> | Estatus:** ${statuses[member.presence.status]}`, true)
      .addField(`• Fecha de ingreso a Discord`, `**<a:kitsunity_sparkling_star:839520700317302825> |** ${days} (${checkDays(member.user.createdAt)})`, false)
      .addField(`• Fecha de ingreso a ${servername}`, `**<a:kitsunity_sparkling_star:839520700317302825> |** ${joinedDays} (${checkDays(member.joinedAt)})`, false)
      .addField(`• Información adicional`, `**<a:kitsunity_sparkling_star:839520700317302825> | Rol mas alto:** ${rolemax}\n**<a:kitsunity_sparkling_star:839520700317302825> | Rol mas bajo:** ${rolemin}\n**<a:kitsunity_sparkling_star:839520700317302825> | Roles:** ${roles}`, false)
      return message.channel.send(embed);
  }
};
