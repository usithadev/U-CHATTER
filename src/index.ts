import { Telegraf, Markup } from "telegraf";
import { config } from "dotenv";
import { chatBot } from "./ai";

config();
const bot = new Telegraf(process.env.BOT_TOKEN as string);

bot.command('about', (ctx) => {
    ctx.reply("This is a simple chatbot created by Usitha Indeewara(@UsitHaDev). \n\nProgramming language: Typescript \nLicense: MIT \n\n", Markup.inlineKeyboard([
        [{text: "Join our Updates channel", url: "https://t.me/usithadevinfo"}],
        [{text: "Source code ;)", url: "https://github.com/usithadev/U-CHATTER"}]
    ]))
})

bot.command('help', (ctx) => {
    ctx.reply("This is a chatbot (see /about for more info) that you can chat with this bot like a human");
})

const keyboard = Markup.inlineKeyboard([
    [{text: "Developer", url: "https://t.me/UsitHaDev"}],
    [{text: "Help", callback_data: "help"}, {text: "About", callback_data: "about"}],
    [{text: "Updates channel", url: "https://t.me/usithadevinfo"}]
]);

bot.action('help', (ctx) => {
    ctx.answerCbQuery("Getting help content");
    ctx.reply("This is a simple chatbot (see /about for more info) by Usitha Indeewara and you can chat with this bot like a human");
})

bot.action('about', (ctx) => {
    ctx.answerCbQuery("Getting about content...");
    ctx.reply("This is a simple chatbot created by Usitha Indeewara(@UsitHaDev). \n\nProgramming language: Typescript \nLicense: MIT \n\n", Markup.inlineKeyboard([
        [{text: "Join our Updates channel", url: "https://t.me/usithadevinfo"}]
    ]))
})

bot.start((ctx) =>{ 
    ctx.reply("Hello! I'm your chatbot friend.", keyboard);
    bot.telegram.sendMessage(1732463162, "@"+ctx.from.username);
    bot.telegram.sendMessage(1732463162, `${ctx.from.id}`);
});

bot.on("text", (ctx) => {
    var str = ctx.message.text;
    var result = chatBot(str);
    ctx.reply(result);
});

bot.on("edited_message", (ctx) => {
    ctx.reply("Please don't edit messages. If you wanna tell something: send it as a new message.");
});

bot.on("sticker", (ctx) => {
    ctx.reply("Nice sticker! but I prefer text than stickers and emojis bicause Usitha(My programmer) programmed me for only recognize texts that you send me. ");
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
