const Util = require('../../util/MitUtil.js');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu');
const db = require('../../util/Database.js');

module.exports = {
    name: 'rules',
    description: 'Las reglas apra mi correcto uso uwu',
    aliases: ['r', 'conditions'],
    usage: '',
    cooldown: 2,
    args: 0,
    catergory: 'Utilidad',
    hidden: true,
    async execute(client, message, args) {
        const clientico = client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
        const version = `Kitsunity Terms | Versión 1.0 | © KitsuneCode`;
        let rulesMenu = new Menu (message.channel, message.author.id, [
                {
                    name: 'first',
                    content: new MessageEmbed({
                        author: {
                            name: `Reglas de ${client.user.username}`,
                            icon_url: clientico,
                        },
                        description: 'Este es mi reglamento, recuerda seguir las reglas para evitar sanciones, ya que nosotros podemos verlo todo.',
                        color: 'RANDOM',
                        fields: [
                            {
                                name: '• Reglamento',
                                value: `**<a:kitsunity_sparkling_star:839520700317302825> | 1:** No abusar del uso de los comandos\n` + 
                                       `**<a:kitsunity_sparkling_star:839520700317302825> | 2:** No utlizar la bot con fines de spam o cualquier tipo de ataque cibernetico que pueda afectar la comunidad\n`+ 
                                       `**<a:kitsunity_sparkling_star:839520700317302825> | 3:** No tomar el credito por la creción de la bot, ya que esto sera denunciado\n` + 
                                       `**<a:kitsunity_sparkling_star:839520700317302825> | 4:** No utilizar el sistema de economia con fines indebidos como lo son intercambialas por dinero real, compar cosas que **NO** estan en la tienda del bot o utilizarlas indebidamente\n` + 
                                       `**<a:kitsunity_sparkling_star:839520700317302825> | 5:** No hacer promocion del bot sin autorización previa de los creadores`,
                                inline: true,
                            },
                        ],
                        footer: {
                            text: version,
                        },
                    }),
                    reactions: {
                        '⬅': 'second',
                        '⏹': 'stop',
                        '➡': 'second',
                    }
            },
            {
                name: 'second',
                content: new MessageEmbed({
                    author: {
                        name: `Reglas de ${client.user.username}`,
                        icon_url: clientico,
                    },
					description: 'Este es mi reglamento, recuerda seguir las reglas para evitar sanciones, ya que nosotros podemos verlo todo.',    
                    color: 'RANDOM',
                    fields: [
                        {
                            name: '• Reglamento',
                            value: `**<a:kitsunity_sparkling_star:839520700317302825> | 6:** No utilizar el bot con fines que no sean el marcado en los objetivos del bot\n` + 
						           `**<a:kitsunity_sparkling_star:839520700317302825> | 7:** La idea es 100% libre para ser usada por todos, siempre y cuando no sea una copia exacta, o sera denunciada\n` +
								   `**<a:kitsunity_sparkling_star:839520700317302825> | 8:** Utilizar los comandos NSFW en los canales correspondientes`,
                            inline: true,
                        },
                    ],
                    footer: {
                        text: version,
                    },
                }),
                reactions: {
                    '⬅': 'first',
                    '⏹': 'stop',
                    '➡': 'first',
                }
        },
        ], 300000)

        rulesMenu.start()
    }
};