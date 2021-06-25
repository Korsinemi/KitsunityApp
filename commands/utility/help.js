const Util = require('../../util/MitUtil.js');
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const { Menu } = require('discord.js-menu');
const db = require('../../util/Database.js');

module.exports = {
    name: 'hlp',
    description: 'Este es mi menù de ayuda nwn',
    aliases: ['help', 'commands', 'cmds'],
    usage: '',
    cooldown: 2,
    args: 0,
    catergory: 'Utilidad',
    hidden: true,
    async execute(client, message, args) {
        // Funciones utiles
        const colorfy = message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 'RANDOM';
        let ServerPrefix = await db.get(`${message.guild.id}_prefix`);
        message.react('839258453917827122');
        const catergoryes = '7';
        let commands = client.commands.array();
        const clientico = client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
        const version = `Kitsunity Versión 1.7.0 | Presiona ❌ para cerrar`;
        const versionx = `Kitsunity Versión 1.7.0`;
        // Aqui van los comandos de cada categoria .w.
        const action = [
            `\`\`\`
comando1        comando5  
comando2        comando6
comando3        comando7
comando4        comando8\`\`\``
        ];
        const reaction = [
            `\`\`\`
comando1        comando5  
comando2        comando6
comando3        comando7
comando4        comando8\`\`\``
        ];
        const utility = [
            `\`\`\`
avatar          invite           timer
botinfo         ping             userinfo
emojis          rules
feedback        serverinfo
info            someone           \`\`\``
        ];
        const fun = [
            `\`\`\`
comando1        comando5  
comando2        comando6
comando3        comando7
comando4        comando8\`\`\``
        ];
        const economy = [
            `\`\`\`
comando1        comando5  
comando2        comando6
comando3        comando7
comando4        comando8\`\`\``
        ];
        // Area lewd 737 - Les explicare una funcion especial ugu
        if (!message.channel.nsfw){
        lewd = [
                `\`\`\`
Para ver estos comandos ve a un canal NSFW u.u\`\`\``
            ]
        } else {
        lewd = [
            `\`\`\`
comando1        comando5  
comando2        comando6
comando3        comando7
comando4        comando8\`\`\``
        ];
    };
        if (args[0] === 'MD' || args[0] === 'md'){
            message.channel.send(`${message.author} mande una lista completa de mis comandos a tus **MD** nwn!`)
            message.delete();
            let commands = client.commands.array();
            let Description = "";
    
            let helpEmbed = new Discord.MessageEmbed()
                .setTitle(`Ayuda | Lista de todos los comandos (${commands.length})`)
                .setColor(colorfy)
                .setFooter(`Escribe ${ServerPrefix}help <Comando> para mas ayuda`);
    
            var catergory = " ";
            commands.sort(function (a, b) {
                if (a.catergory < b.catergory) { return -1; }
                if (a.catergory > b.catergory) { return 1; }
                return 0;
            });
    
            commands.forEach((cmd) => {
                if (cmd.hidden) return;
    
                if (!message.channel.nsfw) {
                    if (cmd.catergory == "NSFW") return;
                }
                
                if (catergory == " ") {
                    catergory = cmd.catergory;
                }
    
                if (cmd.catergory != catergory) {
                    helpEmbed.addField(`<a:kitsunity_sparkling_star:839520700317302825> | ${catergory}`, Description);
                    Description = "";
                    catergory = cmd.catergory;
                }
    
                if (catergory == cmd.catergory) {
                    Description += `\`\`${cmd.name}\`\`, `;
                }
            });
    
    
            helpEmbed.addField(`<a:kitsunity_sparkling_star:839520700317302825> | ${catergory}`, Description);
            return message.author.send(helpEmbed);

        } else if (args[0]) {
            const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(args[0]));
            if (!command) return message.reply(`Ese comando no existe, utiliza \`${ServerPrefix}help\` para ver mis comandos u.u`);
    
            let reply = "**Descripción** " + command.description + "\n";
            reply += "**Categoria:** " + command.catergory + "\n"
            reply += "**Cooldown:** " + command.cooldown + "\n";
            reply += "**Alias:** " + command.aliases + "\n";
            reply += "\n**Uso:** \n" + ServerPrefix + command.name + " " + command.usage + "\n";
    
            const UsageEmbed = new Discord.MessageEmbed()
                .setColor(colorfy)
                .setTitle('Ayuda del comando ' + ServerPrefix + command.name)
                .setDescription(reply)
                .setFooter(versionx, clientico)
     
            return message.channel.send(UsageEmbed);
        } else {    
        let helpMenu = new Menu(message.channel, message.author.id, [
            {
                name: 'main',
                content: new MessageEmbed({
                    author: {
                        name: `Menú de ayuda de ${client.user.username}`,
                        icon_url: clientico,
                    },
                    color: colorfy,
                    fields: [
                        {
                            name: '• Información',
                            value: `**<a:kitsunity_sparkling_star:839520700317302825> | Comandos:** ${commands.length}\n**<a:kitsunity_sparkling_star:839520700317302825> | Categorias:** ${catergoryes}\n**<a:kitsunity_sparkling_star:839520700317302825> | Comandos secretos:** Proximamente!!!`,
                            inline: false,
                        },
                        {
                            name: "• Categorias",
                            value: "**✨ |** Acción\n**😺 |** Reacción\n**🛠 |** Utilidad\n**🕹 |** Diversión\n**💵 |** Economia\n**🔥 |** Lewd",
                            inline: false,
                        },
                        {
                            name: '• Ayuda extra',
                            value: `**<a:kitsunity_sparkling_star:839520700317302825> |** Para ver la lista completa de mis comandos utiliza \`${ServerPrefix}help md\`\n**<a:kitsunity_sparkling_star:839520700317302825> |** Para ayuda detallada de un comando utiliza \`${ServerPrefix}help <Comando>\``,
                            inline: false,
                        },
                        {
                            name: "• Enlaces de ayuda",
                            value: '[Sitio web](https://kitsunity.glitch.me) **|** [Servidor de soporte](https://discord.com/invite/RjeHPJy2GC) **|** [GitHub](https://github.com/KitsuneCode/Kitsunity) **|** [Invitame](https://discord.com/oauth2/authorize?client_id=831865259357896755&permissions=8&scope=bot%20applications.commands)',
                            inline: false,
                        }
                    ],
                    footer: {
                        text: version,
                    },
                }),
                reactions: {
                    '✨': 'action',
                    '😺': 'reaction',
                    '🛠': 'utility',
                    '🕹': 'fun',
                    '💵': 'economy',
                    '🔥': 'lewd',
                    '❌': 'delete',
                }
            },
            {
                name: 'action',
                content: new MessageEmbed({
                    author: {
                        name: `Menú de ayuda de ${client.user.username} | ${commands.length} comandos`,
                        icon_url: clientico,
                    },
                    title: 'Categoria Acción',
                    description: 'Estos comandos muestran una acción en forma de un gif, ideales para el Roleplay UwU',
                    color: colorfy,
                    fields: [
                        {
                            name: '• Ayuda extra',
                            value: `**<a:kitsunity_sparkling_star:839520700317302825> | Prefix del  servidor:** \`${ServerPrefix}\`\n**<a:kitsunity_sparkling_star:839520700317302825> | Servidor de apoyo: [Servidor de soporte](https://discord.com/invite/RjeHPJy2GC)**\n\nPara mas ayuda usa **${ServerPrefix}help <Comando>** o puedes ver otra categoria presionando un boton de abajo`,
                            inline: true,
                        },
                        {
                            name: '• Comandos',
                            value: action,
                            inline: false,
                        },
                    ],
                    footer: {
                        text: version + ' o presiona 🏠 para volver al inicio',
                    },
                }),
                reactions: {
                    '🏠': 'main',
                    '😺': 'reaction',
                    '🛠': 'utility',
                    '🕹': 'fun',
                    '💵': 'economy',
                    '🔥': 'lewd',
                    '❌': 'delete',
                }
            },
                {
                    name: 'reaction',
                    content: new MessageEmbed({
                        author: {
                            name: `Menú de ayuda de ${client.user.username} | ${commands.length} comandos`,
                            icon_url: clientico,
                        },
                        title: 'Categoria Reacción',
                        description: 'Estos comandos muestran una reacción en forma de un gif, ideales para el Roleplay UwU',
                        color: colorfy,
                        fields: [
                            {
                                name: '• Ayuda extra',
                                value: `**<a:kitsunity_sparkling_star:839520700317302825> | Prefix del  servidor:** \`${ServerPrefix}\`\n**<a:kitsunity_sparkling_star:839520700317302825> | Servidor de apoyo: [Servidor de soporte](https://discord.com/invite/RjeHPJy2GC)**\n\nPara mas ayuda usa **${ServerPrefix}help <Comando>** o puedes ver otra categoria presionando un boton de abajo`,
                                inline: false,
                            },
                            {
                                name: '• Comandos',
                                value: reaction,
                                inline: false,
                            },
                        ],
                        footer: {
                            text: version + ' o presiona 🏠 para volver al inicio',
                        },
                    }),
                    reactions: {
                        '🏠': 'main',
                        '✨': 'action',
                        '🛠': 'utility',
                        '🕹': 'fun',
                        '💵': 'economy',
                        '🔥': 'lewd',
                        '❌': 'delete',
                    }
            },
            {
                name: 'utility',
                content: new MessageEmbed({
                    author: {
                        name: `Menú de ayuda de ${client.user.username} | ${commands.length} comandos`,
                        icon_url: clientico,
                    },
                    title: 'Categoria Utilidad',
                    description: 'Estos comandos son para herramientas y funciones >w<',
                    color: colorfy,
                    fields: [
                        {
                            name: '• Ayuda extra',
                            value: `**<a:kitsunity_sparkling_star:839520700317302825> | Prefix del  servidor:** \`${ServerPrefix}\`\n**<a:kitsunity_sparkling_star:839520700317302825> | Servidor de apoyo: [Servidor de soporte](https://discord.com/invite/RjeHPJy2GC)**\n\nPara mas ayuda usa **${ServerPrefix}help <Comando>** o puedes ver otra categoria presionando un boton de abajo\nPara usar estos comandos ve a un canal **NSFW**`,
                            inline: true,
                        },
                        {
                            name: '• Comandos',
                            value: utility,
                            inline: false,
                        },
                    ],
                    footer: {
                        text: version + ' o presiona 🏠 para volver al inicio',
                    },
                }),
                reactions: {
                    '🏠': 'main',
                    '✨': 'action',
                    '😺': 'reaction',
                    '🕹': 'fun',
                    '💵': 'economy',
                    '🔥': 'lewd',
                    '❌': 'delete',
                }
            },
            {
                name: 'fun',
                content: new MessageEmbed({
                    author: {
                        name: `Menú de ayuda de ${client.user.username} | ${commands.length} comandos`,
                        icon_url: clientico,
                    },
                    title: 'Categoria Entretenimiento',
                    description: 'Estos comandos son para divertirse con los demas >w<',
                    color: colorfy,
                    fields: [
                        {
                            name: '• Ayuda extra',
                            value: `**<a:kitsunity_sparkling_star:839520700317302825> | Prefix del  servidor:** \`${ServerPrefix}\`\n**<a:kitsunity_sparkling_star:839520700317302825> | Servidor de apoyo: [Servidor de soporte](https://discord.com/invite/RjeHPJy2GC)**\n\nPara mas ayuda usa **${ServerPrefix}help <Comando>** o puedes ver otra categoria presionando un boton de abajo`,
                            inline: true,
                        },
                        {
                            name: '• Comandos',
                            value: fun,
                            inline: false,
                        },
                    ],
                    footer: {
                        text: version + ' o presiona 🏠 para volver al inicio',
                    },
                }),
                reactions: {
                    '🏠': 'main',
                    '✨': 'action',
                    '😺': 'reaction',
                    '🛠': 'utility',
                    '💵': 'economy',
                    '🔥': 'lewd',
                    '❌': 'delete',
                }
            },
            {
                name: 'economy',
                content: new MessageEmbed({
                    author: {
                        name: `Menú de ayuda de ${client.user.username} | ${commands.length} comandos`,
                        icon_url: clientico,
                    },
                    title: 'Categoria Economia',
                    description: 'Estos comandos muestran una función para ya sea dar información, mostrar datos, o para apoyo nwn',
                    color: colorfy,
                    fields: [
                        {
                            name: '• Ayuda extra',
                            value: `**<a:kitsunity_sparkling_star:839520700317302825> | Prefix del  servidor:** \`${ServerPrefix}\`\n**<a:kitsunity_sparkling_star:839520700317302825> | Servidor de apoyo: [Servidor de soporte](https://discord.com/invite/RjeHPJy2GC)**\n\nPara mas ayuda usa **${ServerPrefix}help <Comando>** o puedes ver otra categoria presionando un boton de abajo`,
                            inline: true,
                        },
                        {
                            name: '• Comandos',
                            value: economy,
                            inline: false,
                        },
                    ],
                    footer: {
                        text: version + ' o presiona 🏠 para volver al inicio',
                    },
                }),
                reactions: {
                    '🏠': 'main',
                    '✨': 'action',
                    '😺': 'reaction',
                    '🛠': 'utility',
                    '🕹': 'fun',
                    '🔥': 'lewd',
                    '❌': 'delete',
                }
            },
            {
                name: 'lewd',
                content: new MessageEmbed({
                    author: {
                        name: `Menú de ayuda de ${client.user.username} | ${commands.length} comandos`,
                        icon_url: clientico,
                    },
                    title: 'Categoria Lewd',
                    description: 'Ehm... >//<',
                    color: colorfy,
                    fields: [
                        {
                            name: '• Ayuda extra',
                            value: `**<a:kitsunity_sparkling_star:839520700317302825> | Prefix del  servidor:** \`${ServerPrefix}\`\n**<a:kitsunity_sparkling_star:839520700317302825> | Servidor de apoyo: [Servidor de soporte](https://discord.com/invite/RjeHPJy2GC)**\n\nPara mas ayuda usa **${ServerPrefix}help <Comando>** o puedes ver otra categoria presionando un boton de abajo`,
                            inline: true,
                        },
                        {
                            name: '• Comandos',
                            value: lewd,
                            inline: false,
                        },
                    ],
                    footer: {
                        text: version + ' o presiona 🏠 para volver al inicio',
                    },
                }),
                reactions: {
                    '🏠': 'main',
                    '✨': 'action',
                    '😺': 'reaction',
                    '🛠': 'utility',
                    '🕹': 'fun',
                    '❌': 'delete',
                }
            }
        ], 300000)

        helpMenu.start()
        }
    }
};

// Aqui tienes un menu de ayuda original, dinamico y super completo ugu, por si no quieres los botones, ya que esta funcion es mas sencilla de utilizar