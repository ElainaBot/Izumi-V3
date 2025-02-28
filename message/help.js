const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} 」 ──*
	
  _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

    Library : *Baileys-MD*.
    Prefix : ( ${prefix} )
    Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
    Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

	Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
	Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
	Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
	Balance : $${toCommas(getBalance(sender, balance))}
  Note : *_Bot Ini Masih Dalam Pengembangan Jika Ada Fitur Yang Eror Silakan Hubungi Owner!!!_*
  
  _Ada Bug? Ketik ${prefix}report Bug mu_
  ${readmore}
  *❒ Main Menu ❒*
  ✾ ${prefix}menu
  ✾ ${prefix}owner
  ✾ ${prefix}donasi
  ✾ ${prefix}speed
  ✾ ${prefix}runtime
  ✾ ${prefix}rules
  ✾ ${prefix}izumi *text*
  ✾ ${prefix}simi *text*

  *❒ Converter/Tools*
  ✾ ${prefix}stiker *ReplyGambar/Caption*
  ✾ ${prefix}toimg *ReplyStiker*
  ✾ ${prefix}tovid *ReplyStiker*

  *❒ Downloader (MediaFire Dalam Perbaikan)*
  ✾ ${prefix}play *Query*
  ✾ ${prefix}youtube *LinkYT*
  ✾ ${prefix}ytmp4 *LinkYT*
  ✾ ${prefix}ytmp3 *LinkYT*
  ✾ ${prefix}ytmp3vn *LinkYT*
  ✾ ${prefix}getvideo
  ✾ ${prefix}getmusic
  ✾ ${prefix}igv *Instagram Video/Reels*
  ✾ ${prefix}igf *Instagram Image*
  ✾ ${prefix}facebook *LinkFb*
  ✾ ${prefix}mediafire *LinkMediaFire*
  
  *❒ Random Menu ❒*
  ✾ ${prefix}quotes
  ✾ ${prefix}gombalan
  ✾ ${prefix}katagalau
  ✾ ${prefix}cecan
  ✾ ${prefix}cogan
  ✾ ${prefix}naruto
  ✾ ${prefix}loli
  ✾ ${prefix}waifu
  ✾ ${prefix}husbu

  *❒ Store Menu*
  ✾ ${prefix}allstore
  ✾ ${prefix}payment
  ✾ ${prefix}formatorder
  
  *❒ Stalker Menu (Ig Stalk Eror)*
  ✾ ${prefix}igstalk *username*
  ✾ ${prefix}ghstalk *username*
  
  *❒ Other Menu ❒*
  ✾ ${prefix}shortlink *Link*
  ✾ ${prefix}ssweb *Link*
  ✾ ${prefix}ssdesktop *Link*
  ✾ ${prefix}sshpfull *Link*
  ✾ ${prefix}kbbi *Kata*
  ✾ ${prefix}faktaunik
  ✾ ${prefix}ppcp
  ✾ ${prefix}darkjokes
  ✾ ${prefix}meme
  ✾ ${prefix}covid19
  ✾ ${prefix}cerpen
  ✾ ${prefix}cersex
  ✾ ${prefix}wiki *Query*
  ✾ ${prefix}igstalk *Username*
  ✾ ${prefix}say *text*
  ✾ ${prefix}qr *text*
  ✾ ${prefix}readmore *text|text*
  ✾ ${prefix}hitungmundur 12 10 2022
  ✾ ${prefix}translate *from* *to*
  ✾ ${prefix}lirik *Judul*
  ✾ ${prefix}grupwa *Pencarian*
  ✾ ${prefix}wame *Nomor*
  ✾ ${prefix}ytsearch *Pencarian*
  ✾ ${prefix}pinterest *Querry*
  ✾ ${prefix}getpp

  *❒ Islamic Menu ❒*
  ✾ ${prefix}quran *nomer*
  ✾ ${prefix}quranaudio *surah* *ayat*
  ✾ ${prefix}listquran *nomer*
  ✾ ${prefix}kisahnabi *Nama Nabi*

  *❒ Nulis Menu ❒*
  ✾ ${prefix}nuliskanan *text*
  ✾ ${prefix}foliokiri *text*
  
  *❒ Game & Fun Menu ❒*
  ✾ ${prefix}tictactoe @tag
  ✾ ${prefix}delttc
  ✾ ${prefix}suit
  ✾ ${prefix}slot
  ✾ ${prefix}tebakgambar
  ✾ ${prefix}apakah *Query*
  ✾ ${prefix}kapankah *Query*
  ✾ ${prefix}rate *Query*
  ✾ ${prefix}gantecek *Nama*
  ✾ ${prefix}cantikcek *Nama*
  ✾ ${prefix}gimana *Query*
  ✾ ${prefix}bisakah *Query*
  ✾ ${prefix}cekme
  ✾ ${prefix}dadu

  *❒ Group Menu ❒*
  ✾ ${prefix}antilink *enable/disable*
  ✾ ${prefix}antiwame *enable/disable*
  ✾ ${prefix}linkgrup
  ✾ ${prefix}setppgrup
  ✾ ${prefix}setnamegc
  ✾ ${prefix}setdesc
  ✾ ${prefix}group *Open/Close*
  ✾ ${prefix}revoke
  ✾ ${prefix}hidetag *text*
  ✾ ${prefix}kick *@tag*
  ✾ ${prefix}add *@tag*
  
  *❒ Owner Menu ❒*
  > evalcode
  x evalcode-2
  $ executor
  ✾ ${prefix}setppbot
  ✾ ${prefix}exif
  ✾ ${prefix}textchat
  ✾ ${prefix}leave
  ✾ ${prefix}masuk
  ✾ ${prefix}addprem
  ✾ ${prefix}delprem
  ✾ ${prefix}broadcast

  *THANKS TO*
  - My God
  - Baileys-Md (Adiwa Jshing)
  - @irfann._x (Iyan)
  - @arsrfi.jpg (Arasya)
  - M Hadi Firmansya (Hadi Api)
  - @melcanz_ (Amel)
  - @chris.tianid (Christian ID)
  - @hardianto.xyz (Anto)`
}
