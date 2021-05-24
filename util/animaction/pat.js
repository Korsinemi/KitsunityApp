const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports.run = (bot, message, [user]) => {
        if (!message.guild) return;
        message.react('✨');
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.pat();
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.username}** acaricia el suave viento... espera parece pelicula .w.`)
                .setImage(GIF.url)
                message.channel.send(embed);
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.pat();
            if (member.id === message.author.id) {
                message.send('No puedes acariciarte ati mismo, seria extraño... menciona a alguien >.>')
            } else if (member.id === bot.user.id) {
                const botaction = [
                    `**${message.author.username}** me acaricio nwn -Bate la cola-`,
                    `**${message.author.username}** me da caricias owo, soy buena chica -Se sonroja-`
                ]
                randombot = botaction[Math.floor(Math.random() * Math.floor(botaction.length))];
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(randombot)
                .setImage(GIF.url)
                message.channel.send(embed);
            } else {
            //Constates aleatorias, funcion unica de este bot UwU    
            const randomaction = [
                `**${message.author.username}** acaricio a **${member.user.username}** n.n`,
                `**${message.author.username}** le da caricias a **${member.user.username}** >w<`,
                `**${member.user.username}** a recibido carcias de parte de **${message.author.username}** owo`
            ] //Respuestas posibles
            randomsg = randomaction[Math.floor(Math.random() * Math.floor(randomaction.length))];
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(randomsg)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
        }
        ping();
    }
};

module.exports.help = {
	name: "pat",
	description: "Acaricia a alguien owo",
	usage: `<usuario>`,
	category: "Acción",
};