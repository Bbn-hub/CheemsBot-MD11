//base by Demzzy
//re-upload? recode? copy code? give credit ya :)
//YouTube: @Demzzy
//Instagram: Demzzy
//Telegram: t.me/Demzzy
//GitHub: @Demzzy
//WhatsApp: +2349091878122 
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Demzzy" //ur yt chanel name
global.socialm = "GitHub: Demzzy" //ur github or insta name
global.location = "Africa, Nigeria, Lagos" //ur location

//new
global.botname = 'Demzzybugbot_md' //ur bot name
global.ownernumber = '2349091878122' //ur owner number
global.ownername = '🗿Demzzy' //ur owner name
global.websitex = "null"
global.wagc = "https://wa.me/2349091878122"
global.themeemoji = '🥇❤️‍🩹'
global.wm = "Demzzy bot incorporation."
global.botscript = 'https://github.com/Bbn-hub/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "🗿Demzzy\n\n+2349091878122"
global.creator = "2349091878122@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2349091878122"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
