 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
//═══════[Required Variables]════════\\
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "https://i.ibb.co/MG5dm85/1450.jpg";
global.email = "ms.excelamadi@yahoo.com";
global.location = "EmbilipitiyaN

⚡age ,Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Excelsama/BOT-X";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.website = process.env.GURL || " https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/jTJDVYj/Leonardo-Phoenix-A-vibrant-animestyle-illustration-of-a-young-2.jpg";
global.devs = "94767748006";
global.sudo = process.env.SUDO || "94767748006";
global.owner = process.env.OWNER_NUMBER || "94767748006";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVBFUkNZZzcxMW13QmVxSjVUb0pPYTQ0RjgwMzNyaTZWYmx4N0tYUzczVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzQxSVpKRnVVdzlxS21Qd1dHekpvVmJMTlZQK2lhRHFMT2hxaE9QQlpIST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhT09CUldoWGZXU2orYzV6ek91bkZVZjJjRnltRERUV2lOa0JnbWV0WEg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDeEdoaThjQTVxUFRSYTNUMnJQcUdNU0pHTDhVZTFGSG5Dem02bkFhekJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVFaU8veVQxYjNMcTY5aTMyVEFDajVvY2d0aHVzaUN2UkpSYks2ODdXSEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNMSllpbm1HdlI1clFHVVA5ZXVJWkUyWGNPUjFscStGbmtFQ2ovSHpBU3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUURmM1NPQ1F1V2QzR3VDYXFsV0tXcTUyS3ZIVUJTRUt0eXBSM2EyRHJGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZ2eENDaHBwYnZrQnpqdFVvTlpWYi9EOUlYbjNxdkFvQm1kOXRaZ2ZEbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhjRUxYY3M2bytQdXpjSFhmY01ZVE15VWU2UElwNzFvbklNVm9qeUN3RXZ5LzF1M2J0bmZ6emFkZXlma1QrQ254NVNjb1p1VUhjR0pQS2NxUEEzd2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMwLCJhZHZTZWNyZXRLZXkiOiJTU2htMkpIdHMyVzJLVnA3azZxb1ZNam85OHVTbjBmY2VidktCZWJEZmdVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPZ0ozR0ZXZ1F5ZWh1NnRYOURjcEtRIiwicGhvbmVJZCI6IjBkNTMxZGM5LTAxNzEtNDdhZC05NjIxLTAwNjUwN2JhYzZmMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5UHl2Ri9QcThQbEZyYnd0UHNyUVZUWXFaY2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2laWU4rd3FLVVk0NG43UXoyMDJjUjZZMTF3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpBNDk5MUxZIiwibWUiOnsiaWQiOiI5NDc2Nzc0ODAwNjozNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLkupfwnZebICDwnZeYIPCdl6Yg8J2XmyDwnZeUIPCdl6Hwkoac4Ly776O/In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMZkZnSTBHRVBpOWo3c0dHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3RmcvTlR3WFFYZDhnSEZoSHFZWWc4all3QjJLdFV5dVp0Z2NMSGdtbTNnPSIsImFjY291bnRTaWduYXR1cmUiOiI4SzNPOUYzWDVPMlAvb1RuWmozYXR3L2hzUE9qdXRqdlZhYWFLOFdsOGEzT2hxSEpxdU9NVjl0aWNwVlBndlVjN1lUQ210R0x0S2lTN21uOVh0K25CUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVk50a1RTdHE0MDNTdHBCRndDZHZhUjhoclc2Z1lvUFJXVk1xNWtEUFU4eXMzMkV6RWdyelFET0s1RUJQb1BVajJsKy9aeWtBZ2R2NHBGaFZCRGUxaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2Nzc0ODAwNjozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJleFlQelU4RjBGM2ZJQnhZUjZtR0lQSTJNQWRpclZNcm1iWUhDeDRKcHQ0In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0NTk4NDA1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUN6YSJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BOT-X ™`",
  author: process.env.PACK_AUTHER || "Xcelsama",
  packname: process.env.PACK_NAME || "BOT-X",
  botname: process.env.BOT_NAME || "BOT-X",
  ownername: process.env.OWNER_NAME || "Xcelsama",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.UI|| "BOT-X.UI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
