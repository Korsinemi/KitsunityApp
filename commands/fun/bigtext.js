const Util = require('../../util/MitUtil.js');
const map = {
//Letras
  a: ':regional_indicator_a:',
  A: ':regional_indicator_a:',
  b: ':regional_indicator_b:',
  B: ':regional_indicator_b:',
  c: ':regional_indicator_c:',
  C: ':regional_indicator_c:',
  D: ':regional_indicator_d:',
  d: ':regional_indicator_d:',
  e: ':regional_indicator_e:',
  E: ':regional_indicator_e:',
  f: ':regional_indicator_f:',
  F: ':regional_indicator_f:',
  g: ':regional_indicator_g:',
  G: ':regional_indicator_g:',
  h: ':regional_indicator_h:',
  H: ':regional_indicator_h:',
  i: ':regional_indicator_i:',
  I: ':regional_indicator_i:',
  j: ':regional_indicator_j:',
  J: ':regional_indicator_j:',
  k: ':regional_indicator_k:',
  K: ':regional_indicator_k:',
  l: ':regional_indicator_l:',
  L: ':regional_indicator_l:',
  m: ':regional_indicator_m:',
  M: ':regional_indicator_m:',
  n: ':regional_indicator_n:',
  N: ':regional_indicator_n:',
  o: ':regional_indicator_o:',
  O: ':regional_indicator_o:',
  p: ':regional_indicator_p:',
  P: ':regional_indicator_p:',
  q: ':regional_indicator_q:',
  Q: ':regional_indicator_q:',
  r: ':regional_indicator_r:',
  R: ':regional_indicator_r:',
  s: ':regional_indicator_s:',
  S: ':regional_indicator_s:',
  t: ':regional_indicator_t:',
  T: ':regional_indicator_t:',
  u: ':regional_indicator_u:',
  U: ':regional_indicator_u:',
  v: ':regional_indicator_v:',
  V: ':regional_indicator_v:',
  x: ':regional_indicator_x:',
  X: ':regional_indicator_x:',
  y: ':regional_indicator_y:',
  Y: ':regional_indicator_y:',
  z: ':regional_indicator_z:',
  Z: ':regional_indicator_z:',
//Numeros
  0: ':zero:',
  1: ':one:',
  2: ':two:',
  3: ':three:',
  4: ':four:',
  5: ':five:',
  6: ':six:',
  7: ':seven:',
  8: ':eight:',
  9: ':nine:',
//Otros simbolos
  ñ: ':regional_indicator_n:',
  Ñ: ':regional_indicator_n:'
}

module.exports = {
  name: 'bigtext',
  description: 'Convierte tu texto en numeros',
  aliases: ['btext', 'bigfy'],
  usage: ' <Mensaje>',
  cooldown: 2,
  args: -1,
  catergory: 'Entretenimiento',
  async execute(client, message, args) {/*
    if (!args[1]) return message.reply("El texto es demasiado corto u.u").then(m => m.delete(3000));
    */
      message.react('<a:kitsunity_numberizing:841438942011719687>')
      let content = args.join(" ");
      for (const y in map) {
        content = content.replace(new RegExp(y, 'g'), map[y])
      }
      return message.channel.send(content);
    }
};