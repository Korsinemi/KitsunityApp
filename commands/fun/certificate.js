const Util = require('../../util/MitUtil.js');
const { createCanvas, loadImage, registerFont } = require('canvas');
const moment = require('moment');

module.exports = {
    name: 'certificate',
    description: "Genera un certificado con tu texto nwn",
    aliases: ['award', 'cert'],
    usage: ' <Nombre>,<Mensaje>',
    cooldown: 2,
    args: -1,
    catergory: 'Entretenimiento',
    async execute(client, message, args) {
        try {
            message.react('🥇')
            let Full = args.join(" ");
            let Split = Full.split(",");

            let name = Split[0];
            let reason = Split[1];

            const base = await loadImage(`./include/assets/images/certificate.png`);
            registerFont("./include/assets/fonts/cattino.otf", { family: 'Cattino' });

            const canvas = createCanvas(base.width, base.height);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(base, 0, 0);
            ctx.font = '30px Cattino';
            ctx.textBaseline = 'top';
            ctx.textAlign = 'center';
            ctx.fillText(reason, 518, 273);
            ctx.fillText(name, 518, 419);
            ctx.fillText(moment().format('MM/DD/YYYY'), 309, 503);

            return message.channel.send({
                embed: {
                    title: "Ten tu certificado!!!",
                    image: {
                        url: 'attachment://certificate.png',
                    },
                    color: "RANDOM"
                },
                files: [{
                    attachment: canvas.toBuffer(),
                    name: `certificate.png`
                }]
            });
        } catch (err) {
            console.log(err);
            return message.reply(`Oh no, an error occurred. Try again later!`);
        }
    }
};
