const { MessageType, Mimetype } = require("@adiwajshing/baileys");

module.exports.command = () => {
  let cmd = ["helpa"];

  return { cmd, handler };
};

const handler = async (sock, msg, from, args, msgInfoObj) => {
  let { prefix } = msgInfoObj;
  const more = String.fromCharCode(8206);
  const readMore = more.repeat(4001);

  let text = `*─「 🔥 <{AIB}> BOT 🔥 」─*
  ${readMore}
_Admin commands only!_

📛 *${prefix}add <phone number>*
  - _Add new member!_
 [or tag message of removed member with *${prefix}add*]
 
📛 *${prefix}kick <mention>*
  - _Kick member from group!_
 [or tag message of member with *${prefix}kick*]

📛 *${prefix}mute | ${prefix}unmute*
  - _Mute and Unmute the group!_

📛 *${prefix}tagadmins*
  - _Tag all the admins!_
Alias: *${prefix}ta*

📛 *${prefix}AIB*
  - _Get stats of all groups message!_
  
📛 *${prefix}AIBN*
  - _Get stats of member messages of current group!_
  
📛 *${prefix}AIBT <number>*
  - _Get top member stats of all groups!_

📛 *${prefix}AIB5*
  - _Get top 5 member stats of all groups!_

📛 *${prefix}AIB10*
  - _Get top 10 member stats of all groups!_

📛 *${prefix}zero*
  - _Get numbers with 0 message of current group!_
  
📛 *${prefix}AIB STATES*
  - _Get stats of AIB groups!_

📛 *${prefix}rt*
  - _Tag a random member!_  

📛 *${prefix}warning*
  - _Give warning to user!_

📛 *${prefix}blacklist*
  - _Get blacklist numbers!_ 

📛 *${prefix}blacklistadd*
  - _Add number to blacklist!_
Alias: *${prefix}bla*

📛 *${prefix}blacklistremove*
  - Remove number from blacklist!_  
Alias: *${prefix}blr*

✔️ more cool commands coming...`;

  sock.sendMessage(from, { text }, { quoted: msg });
};
