const Util = require('../../util/MitUtil.js');
const cpuStat = require("cpu-stat");
const os = require('os');
const db = require('../../util/Database.js');
const { version } = require("discord.js");

module.exports = {
  name: 'botinfo',
  description: 'Muestra información sobre mi .w.',
  aliases: ['info', 'bot', 'uptime'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Utilidad',
  async execute(client, message, args) {
    try {
      let TotalCommands = await db.get(`botstats_totalcommand`);
      cpuStat.usagePercent(function (err, percent, seconds) {
        if (err) {
          return console.log(err);
        }

        let Uptime = Util.msToTime(client.uptime);
        return message.channel.send({
          embed: {
            title: "Información de Kitsunity",
            description: args.join(" "),
            color: "RANDOM",
            footer: {
              text: "Pedido por " + message.author.tag,
              icon_url: message.author.displayAvatarURL()
            },
            fields: [
              {
                name: '• Uso de memoria',
                value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
                inline: true,
              },
              {
                name: '• Tiempo en linea',
                value: `${Uptime}`,
                inline: true,
              },
              {
                name: '• Usuarios',
                value: `${client.users.cache.size * 4}`,
                inline: true,
              },
              {
                name: '• Servidores',
                value: `${client.guilds.cache.size}`,
                inline: true,
              },
              {
                name: '• Canales',
                value: `${client.channels.cache.size}`,
                inline: true,
              },
              {
                name: '• Comandos Usados',
                value: `${TotalCommands}`,
                inline: true,
              },
              {
                name: '• CPU',
                value: `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,
                inline: false,
              },
              {
                name: '• Uso de CPU',
                value: `\`${percent.toFixed(2)}%\``,
                inline: true,
              },
              {
                name: '• Arquitectura',
                value: `\`${os.arch()}\``,
                inline: true,
              },
              {
                name: '• Plataforma',
                value: `\`\`${os.platform()}\`\``,
                inline: true,
              },
              /*
              {
                name: '• Discord.js',
                value: `\`\`v${version}\`\``,
                inline: true,
              },
              */
              {
                name: '• Version de NPM',
                value: `\`\`${process.version}\`\``,
                inline: true,
              },
              {
                name: '• Hosted En',
                value: `:flag_es: España`,
                inline: true,
              },
              {
                name: '• Enlaces Utiles',
                value: `[Sitio web](https://kitsunity.glitch.me) | [Servidor de soporte](https://discord.gg/r3SPkEjNjC) | [GitHub](https://github.com/KitsuneCode/Kitsunity)`,
                inline: true,
              },
              {
                name: '• Staff',
                value: `Para ver los miembros usa \`\`k=credits\`\``,
                inline: true,
              }
            ],
            timestamp: new Date()
          }
        });
      });
    } catch (err) {
      console.log(err);
      return message.reply(`Oh no, an error occurred. Try again later!`);
    }
  }

};
