const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'neko',
    description: "Nekos UwU",
    aliases: ['catgirl'],
    usage: '',
    cooldown: 2,
    args: 0,
    catergory: 'Imagenes',
    async execute(client, message, args) {
        message.react('🐱');

        var superagent = require('superagent')

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'neko'}).end((err, response) => {
                
            async function nekof() {
                const GIF = await neko.sfw.neko();
                const GUF = await neko.sfw.nekoGif();
                const randomaction = [
                    GIF.url,
                    GUF.url,
                    response.body.message
                ] //Respuestas posibles
                
                randomsg = randomaction[Math.floor(Math.random() * Math.floor(randomaction.length))];
            const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`Nya, nyah!!! UwU`)
                .setImage(randomaction)
            return message.channel.send(embed);
            }
            nekof();
        });
    }
};