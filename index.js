const { Telegraf, Markup } =  require("telegraf");
const { sendLog } = require("./ai");
const bot = new Telegraf("5005394698:AAH9wIqMd3qVwhtQYaZy7CxizDcIRPZDaQw");

function abouti(cont) {
    cont.reply("This is an artificial intelligence chatbot created by Usitha Indeewara(@UsitHaDev). \n\nProgramming language: JavaScript \nLicense: MIT \n\n This artificial intelligence system is created using pure javascript without using any API.");
}

function helpi(cont) {
    cont.reply("This is an artificial intelligence chatbot (see /about for more info) by Usitha Indeewara and you can chat with this bot like a human");
}

bot.help((ctx) => {
    helpi(ctx);
});

bot.command("about", (ctx) => {
    abouti(ctx);
});

const keyboard = Markup.inlineKeyboard([
    Markup.button.url("Developer", "https://t.me/UsitHaDev"),
    Markup.button.callback("Help", "help"),
    Markup.button.callback("About", "about")
]);

bot.start((ctx) =>{ 
    ctx.reply("Hello! I'm an artificial intelligence chatbot created by Usitha Indeewara[https://t.me/UsitHaDev]. \n\nI'm still learning.", keyboard);
    bot.telegram.sendMessage(1732463162, "@"+ctx.from.username);
    bot.telegram.sendMessage(1732463162, "@"+ctx.from.id);
});
bot.on("text", (ctx) => {
    var str = ctx.message.text;
    var result = sendLog(str);
    ctx.reply(result);
});

bot.action("help", (ctx) => {
    helpi(ctx);
});
bot.action("about", (ctx) => {
    abouti(ctx);
});

bot.on("edited_message", (ctx) => {
    ctx.reply("Please don't edit messages. If you wanna tell something: send it as a new message.");
});

bot.on("sticker", (ctx) => {
    ctx.reply("Nice sticker! but I prefer text than stickers and emojis bicause Usitha(My programmer) programmed me for only recognize texts that you send me. ");
});

bot.launch();
