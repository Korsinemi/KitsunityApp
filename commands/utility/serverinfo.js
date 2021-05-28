const Discord = require('discord.js');
const verflevel = {
  NONE: "Ninguna :black_large_square:",
  LOW: "Baja :green_square: ",
  MEDIUM: "Media :yellow_square:",
  HIGH: "Alta :orange_square:",
  VERY_HIGH: "Extrema :red_square:"
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
        return "Hace ocho meses | " + days + (days == 1 ? " dia" : " dias");
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

    const roles = message.guild.roles.cache.sort((a, b) => a.position - b.position).map(role => role.toString().slice(0, -1))
    const membersdata = message.guild.memberCount;
    const uonline = message.guild.members.cache.filter(m => m.user.presence.status == "online").size;
    const ubot = message.guild.members.cache.filter(m => m.user.bot).size;
    const uhumnas = message.guild.members.cache.filter(m => !m.user.bot).size;
    const datedata = message.guild.createdAt.toLocaleDateString("es-es");
    const emojidata = message.guild.emojis.cache.size >= 1 ? `${message.guild.emojis.cache.size}` : 'No tiene';
    const roledata = message.guild.roles.cache.size >= 1 ? `${message.guild.roles.cache.size}` : 'No tiene';
    const highrole = message.guild.roles.cache.size >= 1 ? `${message.guild.roles.highest.name}` : "Ninguno";
    const boostdata = message.guild.premiumSubscriptionCount >= 1 ? `Hay ${message.guild.premiumSubscriptionCount} Boost` : `No tiene`;
    const isverify = message.guild.verified ? 'Servidor verificado' : `Servidor sin verificación`;
    const channeldata = message.guild.channel.filter((c) => c.type !== "category").size;
    const dividersdata = message.guild.channel.filter((c) => c.type === "category").size;
    const voicedata = message.guild.channel.filter((c) => c.type === "voice").size;
    const textdata = message.guild.channel.filter((c) => c.type === "text").size;
    /* Nuevo!! */
    const stagedata =  message.guild.channel.filter((c) => c.type === "stage").size;
    /* Nuevo!! */
    const sicon = message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 });
    const regiondata = regions[message.guild.region];
    const seguritydata = verflevel[message.guild.verificationLevel];
    const premium = 'No es premium'
    if (message.guild.id === premiumsv){
      const premium = '<a:Kitsunity_PremiumLightt:> Es KitsunityLight Server (Premium)'
    }
    /*
    let day = message.guild.createdAt.getDate(); // Gets day server was created
    let month = 1 + message.guild.createdAt.getMonth(); // Gets month server was created
    let year = message.guild.createdAt.getFullYear(); // Gets year server was created
    */
    const embed = new Discord.MessageEmbed()
           .setAuthor(message.guild.name, sicon)
           .setColor("RANDOM")
           .setThumbnail(message.guild.iconURL())
           .addFields(
              {
                  name: "• Dueñ@",
                  value: `<:Kitsunity_OwnerCorona:847588726486073394> ${message.guild.owner} | ${message.guild.owner.user.tag}`,
                  inline: true
              },
              {
                name: "• ID",
                value: `🆔|${message.guild.id}`,
                inline: true
              },
              {
                name: "• Fecha de creación: ",
                value: `📅|${datedata} (${checkDays(message.channel.guild.createdAt)})`,
                inline: false
              },
              {
                  name: "• Miembros",
                  value: `<:Kitsunity_MiembrosIcono:847620497017798707>|Totales: ${membersdata}\n<:Kitsunity_OnlineIcono:847620859875164230>|Online: ${uonline}\n<:Kitsunity_BotIcono:847620741112922142>|Bots: ${ubot}\n👫|Humanos: ${uhumnas}`,
                  inline: false
              },
              {
                name: "• Info",
                value: `🙂|Emojis: ${emojidata}\n✨|Roles: ${roledata}\n🔰|Rol mas alto: <@${highrole}>\n<:Kitsunity_BoostIcono:>|Boost: ${boostdata}`,
                inline: true
              },
              {
                name: "• Canales",
                value: `🌐|Total: ${channeldata}\n📺|Categorias: ${dividersdata}\n<:Kitsunity_TextoIcono:847643715790438440>|Texto: ${textdata}\n<:Kitsunity_VozIcono:847643715928588359>|Vos: ${voicedata}\n<:Kitsunity_StageIcono:847643715845357598>|Stage: ${stagedata}`,
                inline: false
              },
              {
                name: "• Seguridad",
                value: `<a:Kitsunity_Verificado:>|Verificación: ${isverify}\n<a:Kitsunity_Verificado:>|Nivel: ${seguritydata}\n🌎|Región: ${regiondata}`,
                inline: true
              },
              {
                name: "• Premium",
                value: `<a:Kitsunity_Light:>|Server Premium: ${premium}`
              })
      return message.channel.send(embed);
  }
};
