import { Telegraf, Markup } from "telegraf";
import { config } from "dotenv";
import { chatBot } from "./ai";

config();
const bot = new Telegraf(process.env.BOT_TOKEN as string);

bot.command('about', (ctx) => {
    ctx.reply("his is an artificial intelligence chatbot created by Usitha Indeewara(@UsitHaDev). \n\nProgramming language: JavaScript \nLicense: MIT \n\n This artificial intelligence system is created using pure javascript without using any API.", Markup.inlineKeyboard([
        [{text: "Join our Updates channel", url: "https://t.me/usithadevinfo"}]
    ]))
})

bot.command('help', (ctx) => {
    ctx.reply("This is an artificial intelligence chatbot (see /about for more info) by Usitha Indeewara and you can chat with this bot like a human");
})

const keyboard = Markup.inlineKeyboard([
    [{text: "Developer", url: "https://t.me/UsitHaDev"}],
    [{text: "Help", callback_data: "help"}, {text: "About", callback_data: "about"}],
    [{text: "Updates channel", url: "https://t.me/usithadevinfo"}]
]);

bot.action('help', (ctx) => {
    ctx.answerCbQuery("Getting help content");
    ctx.reply("This is an artificial intelligence chatbot (see /about for more info) by Usitha Indeewara and you can chat with this bot like a human");
})

bot.action('about', (ctx) => {
    ctx.answerCbQuery("Getting about content...");
    ctx.reply("his is an artificial intelligence chatbot created by Usitha Indeewara(@UsitHaDev). \n\nProgramming language: JavaScript \nLicense: MIT \n\n This artificial intelligence system is created using pure javascript without using any API.", Markup.inlineKeyboard([
        [{text: "Join our Updates channel", url: "https://t.me/usithadevinfo"}]
    ]))
})

bot.start((ctx) =>{ 
    ctx.reply("Hello! I'm an artificial intelligence chatbot created by Usitha Indeewara ( @UsitHaDev ). \n\nI'm still learning.", keyboard);
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