const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
	
Asena.addCommand({pattern: 'textimg', fromMe: true, deleteCommand: false,}, (async (message, match) => {

	        var r_text = new Array ();

        r_text[1] = "https://telegra.ph/file/0d5425a8dd1b5ad3e3d81.jpg";
        r_text[2] ="https://telegra.ph/file/4efb53aba19b0f1ccad12.jpg";
        r_text[3] ="https://telegra.ph/file/7e18f85e60d0fe643c5d4.jpg";
        r_text[4] ="https://telegra.ph/file/7b068a15a9b0adb97064d.jpg";
        r_text[5] ="https://telegra.ph/file/b92174516f031df6ebd26.jpg";

var i = Math.floor(06*Math.random())
var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '╔════════════════╗\n╠*▷  Neotro Logo Pack🎭*◁╣\n╚════════════════╝\n\n*▷මෙය පහසුවෙන්ම විවිධ LoGo සාදයි කළයුතු වන්නෙ පහත විධානයකට ඉදිරියෙන් ඔබේ අකුරු දමන්න පමණි.*\n🙇උදා: .ninjalogo Neotrox\n\n*🌀විධානය:* ●▷ .bcwall\n*🧞විස්තරය:* _එය වෝල් ආර්ට් එකක් ලෙස අකුරු පරිවර්තනය කරයි\n\n*🌀විධානය:* ●▷ .ninjalogo\n*🧞විස්තරය:* එය Ninja ආකාරයේ Logo සාදයි\n\n*🌀විධානය:* ●▷ .buttonyt\n*🧞විස්තරය:* මෙය Youtube Golden බටනයට ඔබේ අකුරු යොදයි.\n\n*🌀විධානය:* ●▷ .glitch\n*🧞විස්තරය:* glitch අකාරයට අකුරු ඡායාරූප කරයි\n\n*🌀විධානය:* ●▷.freefire\n*🧞විස්තරය:* freefire gaming ලෝගෝ සාදයි\n\n*🌀විධානය:* ●▷ .cfire\n*🧞විස්තරය:* gaming ලෝගෝ සාදයි\n\n*🌀විධානය:* ●▷ .light\n*🧞විස්තරය:* අකුරු Neon text ලෙස පරිවර්තනය කරයි\n\n*🌀විධානය:* ●▷ .cslogo\n*🧞විස්තරය:* gaming ලෝගෝ සාදයි\n\n*🌀විධානය:* ●▷ .nlogo\n*🧞විස්තරය:*  ඔබෙ අකුරු ලෝගෝ එකක් ලෙස සකසයි\n\n*🌀විධානය:* ●▷ .s3d\n*🧞විස්තරය:* අකුරු 3D Box ලෙස සකසයි\n\n*🌀විධානය:* ●▷ .blackpink\n*🧞විස්තරය:* ඔබෙ අකුරු blackpink ලෝගෝ ලෙස සකසයි.\n\n*🌀විධානය:* ●▷.pornhub\n*🧞විස්තරය:* ඔබේ අකුරු Pornhub Logo ලෙස සකසයි\n\n*🌀විධානය:* ●▷.neolight\n*🧞විස්තරය:* .එය අකුරු Neoncube එකක් තුල සකසයි\n\n*🌀විධානය:* ●▷ .blood\n*🧞විස්තරය:* අකුරු ලේ සහිත ඡායාරූප ලෙස සකසයි\n\n*🌀විධානය:* ●▷.3dtext\n*🧞විස්තරය:* අකුරු 3D ලෙස සකසයි\n\n*🌀විධානය:* ●▷ .nsky\n*🧞විස්තරය:* අකුරු අහසේ ඇදි ලෙස ඡායාරූප බවට පත් කරයි.\n\n*🌀විධානය:* ●▷.nleaves\n*🧞විස්තරය:* අකුරු දීප්තිමත් තණකොළ මත ලියයි.\n\n*🌀විධානය:* ●▷.nglow\n*🧞විස්තරය:* Neon ලෙස සකසයි\n\n*🌀විධානය:* ●▷.nfire\n*🧞විස්තරය:* එය දීප්තිමත් ලෙස අකුරු ඡායාරූප කරයි.\n\n*🌀විධානය:* ●▷.anony\n*🧞විස්තරය:* එය Anonymous hacker වරුන්ගෙ චායාරූපයකට ඔබේ අකුරු පරිවර්තනය කරයි.\n*🌀විධානය* : .ptext\n*💠විස්තරය* : ```එය අකුරු Video බවට හරවයි```\n\n*🌀විධානය* : .colortext\n*💠විස්තරය* : ```එය අකුරු දේදුන්නක වර්ණ ලෙස video බවට හරවයි```\n\n*🌀විධානය* : .vtext\n*💠විස්තරය* : ```එය අකුරු video බවට හරවයි.```\n\n '})
    }));
}
else if (Config.WORKTYPE == 'public') {
	
	Asena.addCommand({pattern: 'textimg', fromMe: false, deleteCommand: false,}, (async (message, match) => {

	        var r_text = new Array ();

                r_text[1] = "https://telegra.ph/file/7e18f85e60d0fe643c5d4.jpg";
        r_text[2] ="https://telegra.ph/file/b92174516f031df6ebd26.jpg";
        r_text[3] ="https://telegra.ph/file/7b068a15a9b0adb97064d.jpg";
        r_text[4] ="https://telegra.ph/file/4efb53aba19b0f1ccad12.jpg";
        r_text[5] ="https://telegra.ph/file/0d5425a8dd1b5ad3e3d81.jpg";

var i = Math.floor(06*Math.random())
var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '╔════════════════╗\n╠*▷  Neotro Logo Pack🎭*◁╣\n╚════════════════╝\n\n*▷මෙය පහසුවෙන්ම විවිධ LoGo සාදයි කළයුතු වන්නෙ පහත විධානයකට ඉදිරියෙන් ඔබේ අකුරු දමන්න පමණි.*\n🙇උදා: .ninjalogo Neotrox\n\n*🌀විධානය:* ●▷ .bcwall\n*🧞විස්තරය:* _එය වෝල් ආර්ට් එකක් ලෙස අකුරු පරිවර්තනය කරයි\n\n*🌀විධානය:* ●▷ .ninjalogo\n*🧞විස්තරය:* එය Ninja ආකාරයේ Logo සාදයි\n\n*🌀විධානය:* ●▷ .buttonyt\n*🧞විස්තරය:* මෙය Youtube Golden බටනයට ඔබේ අකුරු යොදයි.\n\n*🌀විධානය:* ●▷ .glitch\n*🧞විස්තරය:* glitch අකාරයට අකුරු ඡායාරූප කරයි\n\n*🌀විධානය:* ●▷.freefire\n*🧞විස්තරය:* freefire gaming ලෝගෝ සාදයි\n\n*🌀විධානය:* ●▷ .cfire\n*🧞විස්තරය:* gaming ලෝගෝ සාදයි\n\n*🌀විධානය:* ●▷ .light\n*🧞විස්තරය:* අකුරු Neon text ලෙස පරිවර්තනය කරයි\n\n*🌀විධානය:* ●▷ .cslogo\n*🧞විස්තරය:* gaming ලෝගෝ සාදයි\n\n*🌀විධානය:* ●▷ .nlogo\n*🧞විස්තරය:*  ඔබෙ අකුරු ලෝගෝ එකක් ලෙස සකසයි\n\n*🌀විධානය:* ●▷ .s3d\n*🧞විස්තරය:* අකුරු 3D Box ලෙස සකසයි\n\n*🌀විධානය:* ●▷ .blackpink\n*🧞විස්තරය:* ඔබෙ අකුරු blackpink ලෝගෝ ලෙස සකසයි.\n\n*🌀විධානය:* ●▷.pornhub\n*🧞විස්තරය:* ඔබේ අකුරු Pornhub Logo ලෙස සකසයි\n\n*🌀විධානය:* ●▷.neolight\n*🧞විස්තරය:* .එය අකුරු Neoncube එකක් තුල සකසයි\n\n*🌀විධානය:* ●▷ .blood\n*🧞විස්තරය:* අකුරු ලේ සහිත ඡායාරූප ලෙස සකසයි\n\n*🌀විධානය:* ●▷.3dtext\n*🧞විස්තරය:* අකුරු 3D ලෙස සකසයි\n\n*🌀විධානය:* ●▷ .nsky\n*🧞විස්තරය:* අකුරු අහසේ ඇදි ලෙස ඡායාරූප බවට පත් කරයි.\n\n*🌀විධානය:* ●▷.nleaves\n*🧞විස්තරය:* අකුරු දීප්තිමත් තණකොළ මත ලියයි.\n\n*🌀විධානය:* ●▷.nglow\n*🧞විස්තරය:* Neon ලෙස සකසයි\n\n*🌀විධානය:* ●▷.nfire\n*🧞විස්තරය:* එය දීප්තිමත් ලෙස අකුරු ඡායාරූප කරයි.\n\n*🌀විධානය:* ●▷.anony\n*🧞විස්තරය:* එය Anonymous hacker වරුන්ගෙ චායාරූපයකට ඔබේ අකුරු පරිවර්තනය කරයි.\n*🌀විධානය* : .ptext\n*💠විස්තරය* : ```එය අකුරු Video බවට හරවයි```\n\n*🌀විධානය* : .colortext\n*💠විස්තරය* : ```එය අකුරු දේදුන්නක වර්ණ ලෙස video බවට හරවයි```\n\n*🌀විධානය* : .vtext\n*💠විස්තරය* : ```එය අකුරු video බවට හරවයි.```\n\n'})
    }));
}
