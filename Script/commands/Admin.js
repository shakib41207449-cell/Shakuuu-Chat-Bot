const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
 name: "admin",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "𝐒𝐢𝐭𝐡𝐢𝐥 𝐀𝐡𝐦𝐞𝐝 𝐒𝐡𝐚𝐤𝐢𝐛",
 description: "Show Owner Info",
 commandCategory: "info",
 usages: "admin",
 cooldowns: 2
};

module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

 const callback = () => api.sendMessage({
 body: `
┌───────────────⭓
│ 𝗢𝗪𝗡𝗘𝗥 𝗗𝗘𝗧𝗔𝗜𝗟𝗦
├───────────────
│ 👤 𝐍𝐚𝐦𝐞 : 𝐒𝐢𝐭𝐡𝐢𝐥 𝐀𝐡𝐦𝐞𝐝 𝐒𝐡𝐚𝐤𝐢𝐛
│ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫 : 𝐌𝐚𝐥𝐞
│ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧 : 𝐒𝐢𝐧𝐠𝐥𝐞
│ 🎂 𝐀𝐠𝐞 : 𝟏𝟖+
│ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧 : 𝐈𝐬𝐥𝐚𝐦
│ 🎓 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐒𝐒𝐂 (2024)
│ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : 𝐊𝐡𝐚𝐠𝐫𝐚𝐜𝐡𝐡𝐚𝐫𝐢
└───────────────❁
 `,
 attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner.jpg"));

 return request("https://i.imgur.com/idyXtoO.jpeg")
 .pipe(fs.createWriteStream(__dirname + '/cache/owner.jpg'))
 .on('close', () => callback());
};
