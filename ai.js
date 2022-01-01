
const usr = {
    hello: ["hello", "howdy", "hola"],
    howareyou: ["how are you", "how about you"],
    bye: ["bye", "see you later", "see you soon"],
    whoareyou: ["who are you", "what is your name", "what are you"],
    fine: ["fine", "good", "great", "not so bad", "not bad"],
    notfine: ["not fine", "not good", "bad", "not so good"],
    happy: ["glad to hear", "good job", "i am happy"],
    nothappy: ["i am not happy", "sad to hear", "i am so sad", "not in a good mood"],
    sorry: ["i'm sorry", "sorry", "forgive me"],
    myname: ["my name is"],
    iama: ["i am a"],
    ilive: ["i live in"],
    whereyou: ["where are you ", "where do you live"],
    usitha: ["usitha", "indeewara"]
}
const bot = {
    hello: ["Hello! How are you? ", "Hi! Nice to meet you. "],
    howareyou: ["I'm fine! Thank you for asking. "],
    bye: ["OK, See you later. "],
    whoareyou: ["I'm an artificial intelligence chatbot created by Usitha Indeewara."],
    fine: ["Super! ", "OK! Good :) "],
    notfine: ["Oh, What's wrong? "],
    sorry: ["Hey! Don't wanna be sorry. That's not your fault. ", "I can forgive you anytime. "],
    myname: ["Nice! What does it mean? ", "Nice name! :) "],
    iama: ["Super!"],
    ilive: ["Super! I like to visit you whenever. "],
    whereyou: ["I live in Usitha's computer. "],
    usitha: ["Usitha created me. He is a programmer. "],
    happy: ["I like to see you happy! ", ":) "],
    nothappy: ["What's wrong? ", ":/"]
}
const alt = ["OK", "Sorry, I didn't understand that!", "Let's change the subject"];


var user = "";

function c(arr) {
    var found = false;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (user.includes(element)) {
            found = true;
            break;
        } else {
            continue;
        }
    }
    if(found) {
        return true;
    }
} 

function rdm(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function mainDef() {
    var res = "";
    if (c(usr.hello)) {
        res += rdm(bot.hello);
    }
    if (c(usr.howareyou)) {
        res += rdm(bot.howareyou);
    }
    if (c(usr.bye)) {
        res += rdm(bot.bye);
    }
    if (c(usr.whoareyou)) {
        res += rdm(bot.whoareyou);
    }
    if (c(usr.notfine)) {
        res += rdm(bot.notfine);
    } else if (c(usr.fine)) {
        res += rdm(bot.notfine);
    }
    if (c(usr.sorry)) {
        res += rdm(bot.sorry);
    }
    if (c(usr.iama)) {
        res += rdm(bot.iama);
    }
    if (c(usr.ilive)) {
        res += rdm(bot.ilive);
    }
    if (c(usr.nothappy)) {
        res += rdm(bot.nothappy);
    } else if (c(usr.happy)) {
        res += rdm(bot.happy);
    }
    if (c(usr.usitha)) {
        res += rdm(bot.usitha);
    }
    //
    return res;
}

exports.sendLog = function(userinput) {
    user = userinput;
    user = user.toLowerCase().replace(/[^\w\s]/gi, "").trim();
    if(mainDef()) {
        return mainDef();
    } else if(user == "hi") {
        return rdm(usr.hello);
    } else {
        return rdm(alt);
    }
}