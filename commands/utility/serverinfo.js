const Discord = require('discord.js');
const moment = require('moment');
const db = require('../../util/Database.js');
const verflevel = {
  NONE: "Ninguna <:Kiysuniy_ModNulo:848436821650178068>",
  LOW: "Baja <:Kitsunity_ModBajo:848437569455783957> ",
  MEDIUM: "Media <:Kitsunity_ModMedio:848436821733670932>",
  HIGH: "Alta <:Kitsunity_ModAlto:848436821922807808>",
  VERY_HIGH: "Extrema <:Kitsunity_ModExtremo:848436821746516018>"
};
const regions = {
  brazil: ":flag_br: Brasil",
  india: ":flag_in: India",
  europe: "flag_eu: Europa",
  "eu-central": ":flag_eu: Europa Central",
  "eu-west": ":flag_eu: Europa Occidental",
  singapore: ":flag_sg: Singapur",
  sydney: ":flag_au: Sidney",
  london: ":flag_gb: Londres",
  amsterdam: ":flag_nl: Amsterdam",
  hongkong: ":flag_hk: Hong Kong",
  russia: ":flag_ru: Rusia",
  southafrica: ":flag_za: Sudafrica",
  japan: ":flag_jp: Japón",
  "us-central": ":flag_us: EE.UU. Central",
  "us-east": ":flag_us: EE.UU. Oriental",
  "us-south": ":flag_us: EE.UU. Sur",
  "us-west": ":flag_us: EE.UU. Occidental",
  "vip-us-east": ":flag_us: **VIP** EE.UU. Oriental"
};
const premiumsv = require('../../config.json');

module.exports = {
  name: 'serverinfo',
  description: 'Muestra información de un servidor >w<',
  aliases: ['server'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Utilidad',
  async execute(client, message, args) {
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

    const roles = message.guild.roles.cache.sort((a, b) => a.position - b.position).map(role => role.toString().slice(0, -1))
    const membersdata = message.guild.memberCount;
    const uonline = message.guild.members.cache.filter(m => m.user.presence.status !== "offline").size;
    const ubot = message.guild.members.cache.filter(m => m.user.bot).size;
    const uhumnas = message.guild.members.cache.filter(m => !m.user.bot).size;
    const datedata = moment(message.guild.createdAt).format("DD/MM/YYYY - h:mm A"); // message.guild.createdAt.toLocaleDateString("es-es");
    const emojidata = message.guild.emojis.cache.size >= 1 ? `${message.guild.emojis.cache.size}` : 'No tiene';
    const roledata = message.guild.roles.cache.size >= 1 ? `${message.guild.roles.cache.size}` : 'No tiene';
    const highrole = message.guild.roles.cache.size >= 1 ? `${message.guild.roles.highest.name}` : "Ninguno";
    const boostdata = message.guild.premiumSubscriptionCount >= 1 ? `Hay ${message.guild.premiumSubscriptionCount} Boost` : `No tiene`;
    const isverify = message.guild.verified ? 'Servidor verificado' : `Servidor sin verificación`;
    const channeldata = message.guild.channels.cache.filter(c => c.type !== "category").size;
    const dividersdata = message.guild.channels.cache.filter(c => c.type === "category").size;
    const voicedata = message.guild.channels.cache.filter(c => c.type === "voice").size;
    const textdata = message.guild.channels.cache.filter(c => c.type === "text").size;
    /* Nuevo!! */
    const stagedata =  message.guild.channels.cache.filter(c => c.type === "stage").size;
    /* Nuevo!! */
    const sicon = message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 });
    const regiondata = regions[message.guild.region];
    const seguritydata = verflevel[message.guild.verificationLevel];
    /*
    let day = message.guild.createdAt.getDate(); // Gets day server was created
    let month = 1 + message.guild.createdAt.getMonth(); // Gets month server was created
    let year = message.guild.createdAt.getFullYear(); // Gets year server was created
    */
    let ServerPrefix = await db.get(`${message.guild.id}_prefix`);
    const embed = new Discord.MessageEmbed()
           .setAuthor(message.guild.name, sicon)
           .setColor("RANDOM")
           .setThumbnail(sicon)
           .addField("• Dueñ@", `<:Kitsunity_OwnerCorona:847588726486073394> | ${message.guild.owner}`, true)
           .addField("• ID", `**🆔 |** ${message.guild.id}`, true)
           .addField("• Fecha de creación: ", `**📅 |** ${datedata} (${checkDays(message.channel.guild.createdAt)})`,false)
           .addField("• Miembros", `**<:Kitsunity_MiembrosIcono:847620497017798707> | Totales:** ${membersdata}\n**<:Kitsunity_OnlineIcono:847620859875164230> | Online:** ${uonline}\n**<:Kitsunity_BotIcono:847620741112922142> | Bots:** ${ubot}\n**👫 | Humanos:** ${uhumnas}`, false)
           .addField("• Seguridad", `**<:Kitsunity_Verificado:848555172661559296> | Verificación:** ${isverify}\n**<:Kitsunity_VerificacionTipo:848555700368179240> | Nivel:** ${seguritydata}\n**<:Kitunity_Mapa:848561794867658812> | Región:** ${regiondata}`, false)
           .addField("• Info", `**🙂 | Emojis:** ${emojidata}\n**<:Kitsunity_Roles:848438058030333952> | Roles:** ${roledata}\n**🔰 | Rol mas alto:** @${highrole}\n**<:Kitsunity_Boost:848553562983759882> | Boost:** ${boostdata}\n**🔸 | Prefix del servidor:** ${ServerPrefix}`, false)
           .addField("• Canales", `**🌐 | Total:** ${channeldata}\n**<:Kitsunity_CategoriasCanal:848438137474515014> | Categorias:** ${dividersdata}\n**<:Kitsunity_TextoIcono:847643715790438440> | Texto:** ${textdata}\n**<:Kitsunity_VozIcono:847643715928588359> | Voz:** ${voicedata}\n**<:Kitsunity_StageIcono:847643715845357598> | Stage:** ${stagedata}`, false)
           
    /* const premium = message.guild.id = premiumsv ? '<a:Kitsunity_PremiumLightt:847643557502124062> Es KitsunityLight Server (Premium)' : 'No es premium';
           embed.addField("• Premium", `<a:Kitsunity_PremiumLightt:847643557502124062> | Server Premium: ${premium}`, false)*/
      return message.channel.send(embed);
  }
};
