const Util = require('../../util/MitUtil.js');
const db = require('../../util/Database.js');

let Heads = ['caras', 'cara', 'cr', 'arriba'];
let Tails = ['colas', 'cola', 'cl', 'abajo'];
let Links = ['https://i.imgur.com/gQScntb.png', 'https://i.imgur.com/bJUdOOa.png'];

module.exports = {
    name: 'coinflip',
    description: "GIra la moneda y gana dinero uwu",
    aliases: ['flip', 'coin'],
    usage: ' [caras/colas] [cantidad de dinero]',
    cooldown: 2,
    args: -1,
    catergory: 'Economia',
    async execute(message, args, client) {
        try {
            message.react('839516730056769546')
            let Side = "cr";
            if (isNaN(args[0])) {
                Side = args[0].toLowerCase();
            }
            else {
                return message.reply("Please use the proper usage for this command: ``coinflip heads 500``")
            }

            let Balance = await db.get(`${message.author.id}_balance`);
            let Amount = args[1];
            if (isNaN(Amount)) {
                if (Amount.toLowerCase() == "all" || Amount.toLowerCase() == "a") {
                    Amount = Balance;
                }
                else {
                    Amount = 1;
                }
            }
            else {
                Amount = Util.NotNumberCheck(Amount);
                if (Amount > Balance) {
                    Amount = Balance;
                }
            }

            if (Heads.indexOf(Side) > -1) {
                Side = 1;
            }
            else if (Tails.indexOf(Side) > -1) {
                Side = 0;
            }
            else {
                return message.reply("Please make sure you selected a proper side [heads/tails]!")
            }

            let Message = "";
            let EndedSide = Math.round(Math.random());
            if (EndedSide == Side) {
                if (Amount > 100) {
                    Amount = Math.round(Amount / 100 * 50);
                }

                db.add(`${message.author.id}_balance`, Amount);
                Message = `<:kitsunity_coin:839516730056769546> Has ganado **${Util.moneyFormat(Amount)}**, Bien hecho >w<!!!`
            }
            else {
                db.subtract(`${message.author.id}_balance`, Amount);
                Message = `<:kitsunity_coin:839516730056769546> Has perdido **${Util.moneyFormat(Amount)}**, Suerte la proxima u.u!!!`
            }

            return message.channel.send({
                embed: {
                    title: `Giraste la moneda...`,
                    description: Message,
                    image: {
                        url: Links[EndedSide],
                    },
                    color: "#8B0000",
                    footer: {
                        text: "Requested by " + message.author.tag,
                        icon_url: message.author.displayAvatarURL()
                    },
                    timestamp: new Date()
                }
            });
        } catch (err) {
            console.log(err);
            return message.reply(`Oh no, an error occurred. Try again later!`);
        }
    }
};
