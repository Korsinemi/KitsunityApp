const Discord = require('discord.js');

module.exports.run = (bot, message, user) => {
        if (!message.guild) return;
        message.react('✨');
        if (message.mentions.members.size === 0) {
            async function no_ping() {
            const getoptions = [
                    `**${message.author.username}** esta bailando uwu`,
                    `Buenos pasos **${message.author.username}** :D!!`
                ]
            setoptions = getoptions[Math.floor(Math.random() * Math.floor(getoptions.length))];
            const getreactions = [
                'https://imgur.com/fNPemlF.gif',
                'https://imgur.com/ct1Mo2J.gif',
                'https://imgur.com/gcdQvwe.gif',
                'https://imgur.com/0GQ2e1D.gif',
                'https://imgur.com/wJebp6U.gif',
                'https://imgur.com/Mv4zwRl.gif',
                'https://imgur.com/PrR0zlU.gif',
                'https://imgur.com/rOxPc9Z.gif',
                'https://imgur.com/3Ynjn9i.gif'
            ]
            setreactions = getreactions[Math.floor(Math.random() * Math.floor(getreactions.length))];
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(setoptions)
            .setImage(setreactions)
            .setFooter('Pontenciado por cnd.kitsunity.nya')
            message.channel.send(embed);
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
                async function ping() {
                    const member = message.mentions.members.first();
                    if (member.id === message.author.id) {
                        const getoptions = [
                            `**${message.author.username}** esta bailando uwu`,
                            `Buenos pasos **${message.author.username}** :D!!`
                        ]
                        setoptions = getoptions[Math.floor(Math.random() * Math.floor(getoptions.length))];
                        const getreactions = [
                            'https://imgur.com/fNPemlF.gif',
                            'https://imgur.com/ct1Mo2J.gif',
                            'https://imgur.com/gcdQvwe.gif',
                            'https://imgur.com/0GQ2e1D.gif',
                            'https://imgur.com/wJebp6U.gif',
                            'https://imgur.com/Mv4zwRl.gif',
                            'https://imgur.com/PrR0zlU.gif',
                            'https://imgur.com/rOxPc9Z.gif',
                            'https://imgur.com/3Ynjn9i.gif'
                        ]
                        setreactions = getreactions[Math.floor(Math.random() * Math.floor(getreactions.length))];
                        const embed = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setDescription(setoptions)
                        .setImage(setreactions)
                        .setFooter('Pontenciado por cnd.kitsunity.nya')
                        message.channel.send(embed);
                    } else if (member.id === bot.user.id) {
                        const embed = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setDescription(`Bailemos **${message.author.username}** :3`)
                        .setImage(setreactions)
                        .setFooter('Pontenciado por cnd.kitsunity.nya')
                       message.channel.send(embed);
                    }
                }
                ping();
            }
};

module.exports.help = {
	name: "dance",
    aliases: ['moveit'],
	description: "Demuestra tus buenos pasos con este comando owo",
	category: "Reacción",
};