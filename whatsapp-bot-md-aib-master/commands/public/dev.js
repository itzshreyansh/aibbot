const { MessageType, Mimetype } = require("@adiwajshing/baileys");

module.exports.command = () => {
  let cmd = ["dev"];

  return { cmd, handler };
};

const handler = async (sock, msg, from, args, msgInfoObj) => {
  let { prefix } = msgInfoObj;
  let text = `*─「 <{AIB}> BOT 」 ─*\n\n_Message https://t.me/aibhunter in telegram to report any bug or to give new ideas/features for this bot!_ `;

  sock.sendMessage(from, { text }, { quoted: msg });
};
