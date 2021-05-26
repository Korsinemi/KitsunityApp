const Util = require('../../util/MitUtil.js');
const request = require('node-superfetch');

module.exports = {
    name: 'qrcode',
    description: 'Genera un codigo QR de tu texto o link .w.',
    aliases: ['codeqr', 'createqr'],
    usage: ' <Texto/URL>',
    cooldown: 2,
    args: -1,
    catergory: 'Utilidad',
    async execute(client, message, args) {
        try {
            let text = args.join(" ");
            const { body } = await request
                .get('https://api.qrserver.com/v1/create-qr-code/')
                .query({ data: text });

            return message.channel.send({
                embed: {
                    title: "Codigo QR",
                    image: {
                        url: 'attachment://qr-code.png',
                    },
                    color: "RANDOM",
                    footer: {
                        text: "Requested by " + message.author.tag,
                        icon_url: message.author.displayAvatarURL()
                    },
                    timestamp: new Date()
                },
                files: [{
                    attachment: body,
                    name: `qr-code.png`
                }]
            });
        } catch (err) {
            console.log(err);
            return message.reply(`Oh no, an error occurred. Try again later!`);
        }
    }
};
