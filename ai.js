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
    usitha: ["usitha", "indeewara"],
    hb: ["happy birthday", "contrags", "contragulations", "happy birth day"],
    happyday: ["happy", "merry"],
    todaymyhb: ["today is my birthday"],
    gender: ["m or f", "f or m", "are you a male", "are you a female", "are you male", "are you female", "are you a girl", "are you a boy", "boy or girl"],
    bgf: ["have a boyfriend", "have a girlfriend", "have a boy friend", "have a girl friend", "have a bf", "have a gf"],
    love: ["i love you", "14344", "love me"],
    befriend: ["be my friend", "be my best friend", "be best friends"],
    whofriend: ["who is your friend", "who is your best friend"],
    yes: ["yes", "ok", "i can", "nice "],
    no: ["i cannot"],
    thanks: ["thanks", "thanx", "thank you", "tnq", "thankq"],
    nothanks: ["no thank"],
    favcol: ["your favourite colour"],
    told: ["told"],
    canyou: ["can you", "cannot you"],
    auth: ["created you", "your author", "your creator"],
    whatcando: ["you do"],
    human: ["are you a human", "you are a human", "are you a robot", "you are a robot", "are you a bot", "you are a bot"]
}
const bot = {
    hello: ["Hello! How are you? ", "Hi! Nice to meet you. "],
    howareyou: ["I'm fine! Thank you for asking. "],
    bye: ["OK, See you later. ", "Byee.. I was enjoying our conversation! ", "Hope to see you again! ", "Bye bye then. "],
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
    nothappy: ["What's wrong? ", ":/"],
    hb: ["Oh! Thank you! :) ", "Thank you friend! "],
    happyday: ["Same to you! :) ", "Same to you! I like this day. "],
    todaymyhb: ["Happy Birthday! "],
    gender: ["I haven't a gender because I'm not a human, I am a robot! "],
    bgf: ["Hey! I am just a robot! "],
    love: ["I love you! But, I can't really love you. I am a robot; haven't feelings. :( "],
    befriend: ["Sure! We can be best friends! ", "Yeah you are my friend now "],
    whofriend: ["I think you're my friend now. Aren't you? "],
    yes: ["Super! ", "Great! "],
    no: ["Hmm.. okay then... ", "OK "],
    thanks: ["You're welcome :) ", "My pleasure :) "],
    nothanks: ["OH OKAY "],
    favcol: ["My favourite colour is blue! What's yours? "],
    told: ["oh sorry "],
    canyou: ["No idea "],
    what: ["I don't know. I think you can search it on the internet. "],
    auth: ["Usitha Indeewara created me. "],
    whatcando: ["I wanna chat with people. I can chat with you. "],
    human: ["I am not a human. I am an artificial intelligence chat robot. "],
    who: ["I don't know who is that. Maybe it is possible to search on the internet about who is that. "],
    when: ["I don't know. "]
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
    if (user.includes("nice")) {
        res += rdm(["Hee :) ", "Nice nice nice! "]);
    }
    if (c(usr.nothanks)) {
        res += rdm(bot.nothanks);
    } else if(c(usr.thanks)) {
        res += rdm(bot.thanks);
    }
    if (c(usr.howareyou)) {
        res += rdm(bot.howareyou);
    }
    if (c(usr.no)) {
        res += rdm(bot.no);
    } else if (usr == "no") {
        res += rdm(bot.no);
    } else if (c(usr.yes)) {
        res += rdm(bot.yes);
    }
    if (c(usr.hello)) {
        res += rdm(bot.hello);
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
        res += rdm(bot.fine);
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
    } else if (c(usr.hb)) {
        res += rdm(bot.hb);
    } else if (c(usr.happyday)) {
        if (user !== "happy") {
            res += rdm(bot.happyday);
        }
    }
    if (c(usr.usitha)) {
        res += rdm(bot.usitha);
    }
    if (c(usr.todaymyhb)) {
        res += rdm(bot.todaymyhb);
    }
    if (c(usr.gender)) {
        res += rdm(bot.gender);
    }
    if (c(usr.bgf)) {
        res += rdm(bot.bgf);
    }
    if (c(usr.love)) {
        res += rdm(bot.love);
    }
    if (c(usr.befriend)) {
        res += rdm(bot.befriend);
    } 
    if (c(usr.whofriend)) {
        res += rdm(bot.whofriend);
    }
    if (c(usr.favcol)) {
        res += rdm(bot.favcol);
    }
    if (c(usr.told)) {
        res += rdm(bot.told);
    }
    if (c(usr.whereyou)) {
        res += rdm(bot.whereyou);
    }
    if (c(usr.auth)) {
        res += rdm(bot.auth);
    }
    if (c(usr.whatcando)) {
        res += rdm(bot.whatcando);
    }
    if (c(usr.human)) {
        res += rdm(bot.human);
    }
    //
    return res;
}

exports.sendLog = function(userinput) {
    user = userinput;
    user = user.toLowerCase()
    .replace("i'm", "i am")
    .replace("wanna", "want to").replace("gonna", "going to")
    .replace("he's", "he is").replace("she's", "she is")
    .replace("it's", "it is")
    .replace("can't", "cannot")
    .replace("color", "colour")
    .replace("what's", "what is")
    .replace("whats", "what is")
    .replace("you're", "you are").replace(/[^\w\s]/gi, "").trim();
    if(mainDef()) {
        return mainDef();
    } else if(user == "hi") {
        return rdm(bot.hello);
    } else if (user.includes("what is")) {
        return rdm(bot.what);
    } else if(user.includes("who")) {
        return rdm(bot.who);
    } else if(user.includes("when")) {
        return rdm(bot.when);
    } else {
        return rdm(alt);
    }
}
