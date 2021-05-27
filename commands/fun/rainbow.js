const { createCanvas, loadImage } = require('canvas');

module.exports = {
    name: 'rainbow',
    description: 'Pone un arcoiris sobre el avatar de alguien UwU',
    aliases: ['gayimage', 'gayfy'],
    usage: ' [Usuario]',
    cooldown: 2,
    args: 0,
    catergory: 'Entretenimiento',
    async execute(client, message, args) {
        try {
            message.react('🌈');
            let member = message.guild.member(message.author);
            if (message.mentions.users.first()) {
                member = message.guild.member(message.mentions.users.first());
            }

            const base = await loadImage("./include/assets/images/rainbow.png");
            const data = await loadImage(member.user.displayAvatarURL({ size: 4096, format: 'jpg' }));
            const canvas = createCanvas(data.width, data.height);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(data, 0, 0);
            ctx.drawImage(base, 0, 0, data.width, data.height);
            const attachment = canvas.toBuffer();
            if (Buffer.byteLength(attachment) > 8e+6) return message.reply('La imagen final resulto mayor a 8MB >.<!!');

            return message.channel.send({
                embed: {
                    title: "Arcoiris!!!",
                    image: {
                        url: 'attachment://rainbow.png',
                    },
                    color: "RANDOM",
                },
                files: [{
                    attachment: canvas.toBuffer(),
                    name: `rainbow.png`
                }]
            });
        } catch (err) {
            console.log(err);
            return message.reply(`Oh no, an error occurred. Try again later!`);
        }
    }
};
