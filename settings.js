const fs = require('fs')
const chalk = require('chalk')

/*      bot name NANOBOT-XMD developed by ARNOLD CHIRCHIR new latest version follow instructions Don't      change not belong for user only dev will fix the      debug for my bot please contact us at https://wa.me/254703110780       */



//contact details
global.onwername = "NANOBOT-XMD"
global.onwernumber = '254703110780' 
global.BotName = 'NANOBOT-XMD'
global.ytname = "YT: Kylan Dylan"
global.socialm = "GitHub: arnold6001"
global.location = "Kenya, Kericho, city"
global.packname = 'NANOBOT-XMD'
global.author = 'NANOBOT-XMD'
// Notice copy and follow official channel
global.channel_link = 'https://whatsapp.com/channel/0029VbAwhrYChq6JPHOMOT0L'
//custom prefix
global.prefa = ['','!','.','#','&']
//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.chatbot = false
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = true //auto view status/story
global.iconictechMenu = 'v1'

global.codewave_contact = 'https://codewave-unit.zone.id/support/contact-us'
//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}
global.thumb = fs.readFileSync('./SpaceMedia/spacelogo.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})


/*        Contact us https://wa.me/254703110780.         support/contact-us 
    Developed by Arnold Chirchir.                            */
  
