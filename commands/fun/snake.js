const SnakeGame = require('snakecord');
const snakeGame = new SnakeGame({
    title: 'Serpiente 🐍',
    color: "RANDOM",
    timestamp: true,
    gameOverTitle: "Juego terminado u.u"
});

module.exports = {
  name: 'snake',
  description: "Juega al clasico serpiente",
  aliases: ['snakegame'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Entretenimiento',
  async execute(client, message, args) {
    message.channel.send('Cargando...')
    return snakeGame.newGame(message);
  }
};