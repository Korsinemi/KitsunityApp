const Util = require('../../util/MitUtil.js');
const cpuStat = require("cpu-stat");
const os = require('os');
const db = require('../../util/Database.js');
const moment = require('moment');
const Discord = require('discord.js');
const { version } = require("discord.js");

module.exports = {
  name: 'botinfo',
  description: 'Muestra información sobre mi .w.',
  aliases: ['bot', 'uptime'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Utilidad',
  async execute(client, message, args) {
      let TotalCommands = await db.get(`botstats_totalcommand`);
      let ServerPrefix = await db.get(`${message.guild.id}_prefix`);
      cpuStat.usagePercent(function (err, percent, seconds) {
        if (err) {
          return console.log(err);
        }
      const catg = "7";
      let Uptime = Util.msToTime(client.uptime);
      const date = moment(Uptime).format('DD [Dias] h [Horas] mm [Minutos] ss [Segundos]');
      const clientico = client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
      const embed = new Discord.MessageEmbed()
        .setTitle('Información de Kitsunity', clientico)
        .setColor('RANDOM')
        .setThumbnail(clientico)
        .addField('• Estadisticas generales', `**<:Kitsunity_Codigo:848628754523881483> | Versión:** 1.6.3\n**<:Kitsunity_Codigo:848628754523881483> | Tiempo en linea:** ${date}\n**<:Kitsunity_Codigo:848628754523881483> | Memoria:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\n**<:Kitsunity_Codigo:848628754523881483> | CPU:** ${percent.toFixed(2)}%\n**<:Kitsunity_Codigo:848628754523881483> | Versión de NPM:** ${process.version}\n**<:Kitsunity_Codigo:848628754523881483> | Versión de Discord.js:** v${version}\n**<:Kitsunity_Codigo:848628754523881483> | Prefix del servidor:** ${ServerPrefix}\n**<:Kitsunity_Codigo:848628754523881483> | Leguajes:** JS y Python`, true)
        .addField('• Datos', `**<:Kitsunity_Codigo:848628754523881483> | Usuarios:** ${client.users.cache.size}\n**<:Kitsunity_Codigo:848628754523881483> | Servidores: ${client.guilds.cache.size}\n**<:Kitsunity_Codigo:848628754523881483> | Comandos totales:** ${client.commands.size}\n**<:Kitsunity_Codigo:848628754523881483> | Categorias totales:** ${catg}\n**<:Kitsunity_Codigo:848628754523881483> | N. de veces usados:** ${TotalCommands}`, false)
        .addField('• Enlaces Utiles', `**[Sitio web](https://kitsunity.glitch.me) | [Servidor de soporte](https://discord.gg/r3SPkEjNjC) | [GitHub](https://github.com/KitsuneCode/Kitsunity)**`, false)
        .setFooter('Hecho con ❤ por KitsuneCode#5011')
      return message.channel.send(embed);
    });
  }
};
      /*

              {
                name: '• Canales',
                value: `${client.channels.cache.size}`,
                inline: false,
              },
              {
                name: '• CPU',
                value: `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,
                inline: false,
              },
              {
                name: '• Uso de CPU',
                value: `\`${percent.toFixed(2)}%\``,
                inline: false,
              },
              {
                name: '• Arquitectura',
                value: `\`${os.arch()}\``,
                inline: false,
              },
              {
                name: '• Plataforma',
                value: `\`\`${os.platform()}\`\``,
                inline: false,
              },
              {
                name: '• Clusters',
                value: `💎 (27/48)`,
                inline: false,
              },
              {
                name: '• Host',
                value: `✨ kitsunity.herokuapp - host://100627`,
                inline: false,
              },
              {
                name: '• Ubicación del Host',
                value: `:flag_es: España`,
                inline: false,
              },
              {
                name: '• Staff',
                value: `Para ver los miembros usa \`\`k=credits\`\``,
                inline: false,
              }
            ],
            timestamp: new Date()
          }
          */
