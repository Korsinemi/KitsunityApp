const Discord = require('discord.js');
const db = require('../../util/Database.js');
const moment = require('moment');
const { version } = require('../../config.json');

module.exports = {
  name: 'info',
  description: 'Información sobre mi nwn',
  aliases: ['about'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Utilidad',
  async execute(client, message, args) {
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
  
        if (days >= 30){
          return "Hace un mes | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 60){
          return "Hace dos meses  | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 90){
          return "Hace tres meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 120){
          return "Hace cuatro meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 150){
          return "Hace cinco meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 180){
          return "Hace seis meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 210){
          return "Hace siete meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 240){
          return "Hace ocho meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 270){
          return "Hace nueve meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 300){
          return "Hace diez meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 330){
          return "Hace once meses | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 365){
          return "Hace un año | " + days + (days == 1 ? " dia" : " dias");
        } else if (days >= 730){
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
    .setDescription(`Holi, mi nombre es **Kitsunity**, fui creada gracias a KitsuneCode, mi proposito es el de entretener y darle un estilo nuevo a los servidores, recibo actualizaciones a dirario y siempre voy enfocada en la inovación, ademas si posees alguna idea genial hasla saber usando el comando **${ServerPrefix}suggest**`)
    .addFiels('• Desarollo', '<a:kitsunity_sparkling_star:839520700317302825>|KitsuneCode#5011 [Owner]', true)
    .addField('• Diseño', '<a:kitsunity_sparkling_star:839520700317302825>|KitsuneCode#5011\n<a:kitsunity_sparkling_star:839520700317302825>|🌹🌕•カカシ•🌑🌸#0002', true)
    .addField('• Agradecimientos', '<a:kitsunity_sparkling_star:839520700317302825>|🌹🌕•カカシ•🌑🌸#0002\n<a:kitsunity_sparkling_star:839520700317302825>|★彡𝓑𝓸𝔂𝓯𝓻𝓲𝓮𝓷𝓭彡★#9220', false)
    .addField('• Servidores de apoyo', '<a:kitsunity_sparkling_star:839520700317302825>|Ꮯꮮꮜᏼ Ꮻꭲꭺꮶꮜ Ꮐꭺꮇꭼ\n<a:kitsunity_sparkling_star:839520700317302825>|Anime no Sekai\n<a:kitsunity_sparkling_star:839520700317302825>|⚡¡̷H̷I̷B̷R̷Y̷D̷!̷⚡', true)
    .addField('• Cumpleaños', `<:Kitsunity_Pastel:848438243191816242> | ${kitsunitydate} ${checkDays(client.user.createdAt)}`, false)
    .addField('• Enlaces utiles', `🌐|[Sitio web](https://kitsunity.glitch.me) | [Servidor de soporte](https://discord.gg/r3SPkEjNjC) | [GitHub](https://github.com/KitsuneCode/Kitsunity) | [Invitame](https://discord.com/oauth2/authorize?client_id=831865259357896755&permissions=8&scope=bot%20applications.commands)`, false)
    return message.channel.send(embed)
  }
};
