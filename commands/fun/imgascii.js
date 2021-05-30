const Util = require('../../util/MitUtil.js');
var asciify = require('asciify-image');
var validUrl = require('valid-url');

module.exports = {
    name: 'imgascii',
    description: 'Convierte una imagen en ascii .w.',
    aliases: ['asciify'],
    usage: ' <URL>',
    cooldown: 10,
    args: 1,
    catergory: 'Entretenimiento',
    async execute(client, message, args) {
        try {
            var options = {
                fit: 'box',
                width: 40,
                height: 30,
                color: false
            }

            let URL = args[0];
            if (validUrl.isUri(URL)) {
                asciify(URL, options)
                    .then(function (asciified) {
                        message.channel.send("```" + asciified + "```");
                    })
                    .catch(function (err) {
                        // Print error to console
                        console.error(err);
                        return message.reply("Algo a salido mal!, ¿la URl es de una imagen? -w-");
                    });
            }
            else {
                return message.reply("Something went wrong! Make sure the URL is valid");
            }
        } catch (err) {
            console.log(err);
            return message.reply(`Oh no, an error occurred. Try again later!`);
        }
    }
};
