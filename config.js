import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = '';
global.confirmCode = '';

global.owner = [
  ['18294868853', '𝐃𝐢𝐨𝐧𝐞𝐢𝐛𝐢', true],
  ['595972157130', '𝐂𝐫𝐞𝐚𝐝𝐨𝐫', true],
  ['593939005387', '𝙅𝙤𝙨𝙩𝙞𝙣🍊🔧', true]
];

global.mods = ['18294868853', '595972157130', '51950148255'];
global.suittag = ['595972157130'];
global.prems = [];

global.packsticker = `♾ ━━━━━━━━
├ ɓσƭ:
├ ρяοριєταяιο:
├ ƒєϲнα ∂є ϲяєαϲιόи:
├ нοяα:
♾━━━━━━━━`;
global.packname = `ᘜOKᑌ-ᗷᒪ̀AᑕK-ᗷOT-ᗰᗪ-ᒪITᗴ🪼`;
global.author = `♾━━━━━━━━
𝐆𝐨𝐤𝐮-𝐁𝐥𝐚𝐜𝐤-𝐁𝐨𝐭-𝐌𝐃-𝐋𝐢𝐭𝐞
𝑰𝒗𝒂𝒏
⇝ ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}
⇝ ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}
♾━━━━━━━━

ѕτιϲκєя ϐγ: 𝑮𝒐𝒌𝒖-𝑩𝒍𝒂𝒄𝒌-𝑩𝒐𝒕-𝑴𝑫-𝑳𝒊𝒕𝒆`;

global.wm = '𝗚𝗼𝗸𝘂-𝗕𝗹𝗮𝗰𝗸-𝗕𝗼𝘁-𝗠𝗗-𝗟𝗶𝘁𝗲';
global.titulowm = '𝖦𝗈𝗄𝗎-𝖡𝗅𝖺𝖼𝗄-𝖡𝗈𝗍-𝖬𝖣-𝖫𝗂𝗍𝖾';
global.titulowm2 = 'ＧＯＫＵ-ＢＬＡＣＫ-ＢＯＴ-ＭＤ-ＬＩＴＥ';
global.igfg = 'ᥫᩣɢᴏᴋᴜ-ʙʟᴀᴄᴋ-ʙᴏᴛ-ᴍᴅ-ʟɪᴛᴇ🪐';
global.botname = 'ꍌꄲꀘ꒤-ꃳ꒒ꋬꉔꀘ-ꃳꄲ꓄-ꂵ꒯-꒒꒐꓄ꏂ 🪻';
global.dev = 'gσкυ-вℓα¢к-вσт-м∂-ℓιтє🐦‍⬛';
global.textbot = '𝐆𝐎𝐊𝐔-𝐁𝐋𝐀𝐂𝐊-𝐁𝐎𝐓-𝐌𝐃-𝐋𝐈𝐓𝐄';
global.gt = '𝔾𝕆𝕂𝕌-𝔹𝕃𝔸ℂ𝕂-𝔹𝕆𝕋-𝕄𝔻-𝕃𝕀𝕋𝔼';
global.namechannel = 'ꍌꄲꀘ꒤-ꃳ꒒ꋬꉔꀘ-ꃳꄲ꓄-ꂵ꒯-꒒꒐꓄ꏂ';

global.gp4 = 'https://chat.whatsapp.com/GD0al1LF7Ux2dmPF0fDFYZ';
global.gp1 = 'https://chat.whatsapp.com/GD0al1LF7Ux2dmPF0fDFYZ';
global.gp2 = 'https://chat.whatsapp.com/LJKcR8QBJgu37bVFWuhRVn';
global.comunidad1 = 'https://chat.whatsapp.com/GPEtINYPyIB6a6S55ZJcAO';
global.channel = 'https://whatsapp.com/channel/0029VaYh3Zm4dTnQKQ3VLT0h';
global.Black = '⪛✰ 𝐆𝐨𝐤𝐮 𝐁𝐥𝐚𝐜𝐤 𝐁𝐨𝐭 - 𝐌𝐃 ✰⪜';
global.paypal = 'Comunicate conmigo al wa.me/593939005387';
global.yt = 'https://youtube.com/@davidchian4957';
global.md = 'https://github.com/Ivanmods15/Goku-Black-Bot-MD-Lite';
global.correo = 'noisebot@gmail.com';
global.cn = 'https://whatsapp.com/channel/0029VaYh3Zm4dTnQKQ3VLT0h';

const ase = new Date();
let hour = ase.getHours();
let saludoTexto;

switch (true) {
  case hour >= 0 && hour < 10:
    saludoTexto = 'Linda Mañana';
    break;
  case hour >= 10 && hour < 14:
    saludoTexto = 'Lindo Día';
    break;
  case hour >= 14 && hour < 18:
    saludoTexto = 'Linda Tarde';
    break;
  default:
    saludoTexto = 'Linda Noche';
    break;
}

global.saludo = `🍭 ${saludoTexto}`;
global.bottime = moment.tz('America/Mexico_City').format('HH:mm:ss');

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright(`🔄 Se actualizó '${file}'`));
  import(`${file}?update=${Date.now()}`);
});
