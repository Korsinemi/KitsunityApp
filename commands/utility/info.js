const Discord = require('discord.js');
const db = require('../../util/Database.js');
const moment = require('moment');
const { version } = require('../../config.json');

module.exports = {
  name: 'info',
  description: 'Información sobre mi nwn',
  aliases: ['kitsunity', 'you', 'credits'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Utilidad',
  async execute(client, message, args) {
    const colorfy = message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 'RANDOM';
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

    let ServerPrefix = await db.get(`${message.guild.id}_prefix`);
    const kitsunitydate = moment(client.user.createdAt).format("DD/MM/YYYY - h:mm A");
    const authoricon = client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Kitsunity`, authoricon)
    .setColor(colorfy)
    .setDescription(`Holi, mi nombre es **Kitsunity**, soy hija de **KitsuneCode#5011**, mi proposito es el de entretener y darle un estilo nuevo a los servidores, recibo actualizaciones a diario y siempre voy enfocada en la inovación, consiguiendo siempre comandos nuevos, ademas, siempre acepto nuevas sugerencias para mejorar mi desempeño, por ende si posees alguna idea genial hasla saber usando el comando **${ServerPrefix}suggest** y sera bienvenida uwu`)
    .addField('• Desarollo', '**<a:kitsunity_sparkling_star:839520700317302825> | KitsuneCode#5011 [Owner]**', true)
    .addField('• Diseño', '**<a:kitsunity_sparkling_star:839520700317302825> | KitsuneCode#5011\n<a:kitsunity_sparkling_star:839520700317302825> | 🌹🌕•カカシ•🌑🌸#0002**', true)
    .addField('• Cumpleaños', `<:Kitsunity_Pastel:848438243191816242> | ${kitsunitydate} (${checkDays(client.user.createdAt)})`, false)
    .addField('• Agradecimientos', '**<a:kitsunity_sparkling_star:839520700317302825> | 🌹🌕•カカシ•🌑🌸#0002\n<a:kitsunity_sparkling_star:839520700317302825> | ★彡chara彡★#9220\n<a:kitsunity_sparkling_star:839520700317302825> | Ichiro 『👑』#1630\n<a:kitsunity_sparkling_star:839520700317302825> | TheSkeleRock48#0048**', true)
    .addField('• Servidores de apoyo', '**<a:kitsunity_sparkling_star:839520700317302825> | Ꮯꮮꮜᏼ Ꮻꭲꭺꮶꮜ Ꮐꭺꮇꭼ\n<a:kitsunity_sparkling_star:839520700317302825> | Anime no Sekai\n<a:kitsunity_sparkling_star:839520700317302825> | ⚡¡̷H̷I̷B̷R̷Y̷D̷!̷⚡\n<a:kitsunity_sparkling_star:839520700317302825> | 🍞ღPANADERIAღ🍞\n<a:kitsunity_sparkling_star:839520700317302825> | La Cafeteria de DayRetro**', true)
    .addField('• Enlaces utiles', `**[Sitio web](https://kitsunity.glitch.me) | [Servidor de soporte](https://discord.gg/r3SPkEjNjC) | [GitHub](https://github.com/KitsuneCode/Kitsunity) | [Invitame](https://discord.com/oauth2/authorize?client_id=831865259357896755&permissions=8&scope=bot%20applications.commands)**`, false)
    return message.channel.send(embed)
  }
};
