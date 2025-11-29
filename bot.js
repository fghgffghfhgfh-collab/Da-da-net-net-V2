const { Telegraf } = require('telegraf');
const bot = new Telegraf('8242775699:AAGkMtfFgroB8MqJ3trpIZ9CHpuHguuVSAg'); // токен, который вы получили от BotFather

bot.start((ctx) => {
  ctx.reply('Открыть миниаппу', {
    reply_markup: {
      keyboard: [
        [{ text: 'Открыть', web_app: { url: 'https://dadanetnet.vercel.app/' } }]
      ],
      resize_keyboard: true
    }
  });
});

bot.launch();