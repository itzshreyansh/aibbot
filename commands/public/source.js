const { MessageType, Mimetype } = require("@adiwajshing/baileys");

module.exports.command = () => {
  let cmd = ["source"];

  return { cmd, handler };
};

const handler = async (sock, msg, from, args, msgInfoObj) => {
  let { prefix } = msgInfoObj;
  let text = `*─「 <{AIB}> BOT 」 ─*
  sock.sendMessage(from, { text }, { quoted: msg });
};
