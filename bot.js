const Discord = require("discord.js");

const bot = new Discord.Client();

var prefix = "-"

var weapons = ["banana", "gun"]

var answers = ["Yes","No","Doubtful","I rely on no","I rely on yes","I don't think so","My instincts say no","My instincts say yes","Definitly","Nope","Yep"]

var a = "="

String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 

function a(b){
return Math.abs(Math.sin(b + 1) * 100 - Math.floor(Math.sin(b + 1)))
}

function checkplayer(plr,msg) {

    var adminRole = msg.guild.roles.find("name", "Administrator");
    var modRole = msg.guild.roles.find("name", "Supreme Overlord");

    if (plr.roles.has(adminRole.id||modRole.id)) {

        return true

    } else {

        return false

    }

}

var cmds = `-kill (Kills the selected user.)
-cmds (This, lol)
-info (Shows info of a player.)
-mineinfo (Search for a player minecraft account.) 
-kms (KYS with a gun or banana)
-report @user reason (Reports user to manofmanytalents)
-8ball (He knows everything)
-tell @user message (Must be admin) (Uses the bot to tell something to a user using bot.)
-say message (Must be admin) (Uses the bot to chat.)
-dicksize (Shows the player dicksize.)`

var nor = `Wrong usage.
-kms (weapon)
banana,gun `

var nol = `Unknown weapon.
Use the following: Banana,Gun in lower case.`

bot.on( "ready", () => {

console.log("Killer bot initialized! No errors found.")

});

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

bot.on( "message", message => {

     var sayin = message.content;

     if (sayin == "-kms") {

       
      message.channel.sendMessage("```" + nor + "```")

     }else{
 
     if (sayin.startsWith(prefix + "kms ")) {
     
      weapon = sayin.substr(5)

      if (!(weapon === "gun"||"banana")) {

            message.channel.sendMessage("```" + nol + "```")

      } else {

            if (weapon === "gun") {
              message.channel.sendMessage(message.author + " just killed himself with a freakin :gun:. Shame on you.")
            }

            if (weapon === "banana" ) {
              message.channel.sendMessage(message.author + " just killed himself with a freakin :banana:. He must have sticked it so far up his ass. lel")
            }

      }
     }

 }

});

bot.on( "message", message => {

    var sayin = message.content;

    if (sayin.startsWith( prefix + "say " )) {

     

      if (checkplayer(message.member,message)) {

        var msg = sayin.substr(5)

        message.channel.send(msg)

        } else {

        message.channel.sendMessage(":star: You do not have access to this command. :star:")

        }

    }

})

bot.on( "message", message => {

    var sayin = message.content;

    if (sayin.startsWith( prefix + "dicksize " )) {

       

        var dick = sayin.substr(10)

        var user = dick.substr(2)

        var rf = user.indexOf(">")

        if (rf) {

        var lil = user.substr(0,rf)

        var lole = bot.users.get(lil)

        if (lole) {

          if (lole.id === "226818219464196096") {

                message.channel.sendMessage(lole + " dicksize: Ɛ=D")

          } else {

               message.channel.sendMessage(lole + " dicksize: Ɛ" + a.repeat(Math.floor(Math.random() * 30) + 1) + "D")

          }

        }

        }

    }

})

bot.on( "message", message => {

    var msg = message.content;

    if (msg.startsWith( prefix + "tell " )) {

       
        if (checkplayer(message.member,message) === true) {
        var findmsg = msg.substr(7).indexOf(" ")
        if (findmsg) {

            var tellp = msg.substr(findmsg + 7)
            var plr = msg.substr(7,findmsg - 1)

        }

        var user = plr.substr(1)
        var finz = bot.users.get(user)

        if (finz) {

            finz.send(tellp)

        } else {

            message.channel.sendMessage(":star: User " + plr + " not found. :star:")

        }

      } else {

         message.channel.sendMessage(":star: You do not have access to this command. :star:")

      }

  }

});

bot.on( "message", message => {

    sayin = message.content;

    if (sayin.startsWith( prefix + "mineinfo ") ) {

      

       user = sayin.substr(10)

       const embed = new Discord.RichEmbed()
  .setTitle("Minecraft User " + user)
  .setAuthor("KillerBot", "https://i.pinimg.com/736x/22/a2/19/22a21941d8e5fce3c6e9e3a8a258cef4--galaxy-cat-hipster-cat.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x2EFF00)
  .setDescription("This account is original.")
  .setFooter("Made by KillerBot", "https://i.pinimg.com/736x/22/a2/19/22a21941d8e5fce3c6e9e3a8a258cef4--galaxy-cat-hipster-cat.jpg")
  .setImage("https://crafatar.com/renders/body/" + user )
  .setThumbnail("https://crafatar.com/avatars/" + user )
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Download skin", "[Download](https://crafatar.com/skins/" + user + ")", true,);

  message.channel.send({embed});

    }

});

bot.on( "message", message => {

    var sayin = message.content;

    if ( sayin.startsWith(prefix + "cmds") ) {

     

        message.author.send("Hi " + message.author + ", here is the list of **commands:**")

        message.author.send("```" + cmds + "```")

    }

});

bot.on( "message", message => {

    var sayin = message.content;

    if ( sayin.startsWith(prefix + "8ball ") ) {

     

        var question = sayin.substr(6)

        var answer = choose(answers)

        var user = bot.users.get(message.member.id)

const embed = new Discord.RichEmbed()
  .setTitle("*" + user.username + "*" + " asked:")
  .setAuthor("Magic 8ball", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/8-Ball_Pool.svg/2000px-8-Ball_Pool.svg.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("**" + question + "**")
  .setFooter("Magic 8ball", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/8-Ball_Pool.svg/2000px-8-Ball_Pool.svg.png")

  .setTimestamp()
  .addField("*Magic 8ball* answered:","**" + answer + "**")

  message.channel.send({embed});

    }

});

bot.on( "message", message => {
    
    var sayin = message.content;

    if (sayin.startsWith(prefix + "report ")) {

       
        var findmsg = sayin.substr(8).indexOf(" ")
        if (findmsg) {

            var tellp = sayin.substr(findmsg + 9)
            var plr = sayin.substr(8,findmsg - 1)

        }

        var user = plr.substr(2)
        var finz = bot.users.get(user)

        if (finz) {

            var man = bot.users.get("320245245914644481")

            man.send("User " + finz + " was reported by " + message.author + " for: **" + tellp + "**")

            message.channel.sendMessage(":star: User " + finz + " was reported successfully! :star:")

        } else {

            message.channel.sendMessage(":star: User " + plr + " not found. :star:")

        }

    }

})

bot.on( "message", message => {

    var sayin = message.content;

    if (sayin === "-rc7status") {

   

    var user = bot.users.get(message.member.id)

   const embed = new Discord.RichEmbed()
  .setTitle("**RC7 Status**")
  .setAuthor("RC7", "https://imgur.com/rhkxmoD.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("**" + user.username + "** just asked for RC7 status")
  .setFooter("What Would You Expect.", "https://imgur.com/rhkxmoD.png")
  .setThumbnail("https://imgur.com/rhkxmoD.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .addField("Updated: ",
    "**No!**")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Stable: ", "**No!**", true);

  message.channel.send({embed});

    }

})

bot.on( "message", message => {

    var sayin = message.content;

    if(sayin.startsWith( prefix + "kill " )) {

       
        var finding = sayin.substr(7)
        var found = finding.substr(1)

        var rf = found.indexOf(">")

        if (rf) {

        console.log(rf)
        var user = found.substr(0,rf)
        console.log(user)

        var finde = bot.users.get(user)

        if (finde) {

            message.channel.sendMessage( ":star: " + message.author + " just killed " + finde + " with a :gun: LOL, get rekt son. :star:")

        } else {

            var finding = sayin.substr(6)
            message.channel.sendMessage(":star: I did not find user " + finding + ". :star:")

        }

        };

    };

});

bot.on( "message", message => {

     var sayin = message.content

     if(sayin.startsWith( prefix + "info " )) {
        
       
        var user = sayin.substr(7)
        var lol = user.substr(1,18)
        if(bot.users.get(lol)) {
        var lel = bot.users.get(lol)

        message.channel.sendMessage(":star: User **" + lel + "** , **Id: " + lel.id + "**, Made on the **" + lel.createdAt + "** :star:")

        } else  {

        var user = sayin.substr(6)
        message.channel.sendMessage(":star: I did not find user " + user + " :star:")}

       };

});

bot.on( "message", message => {

     var sayin = message.content

     if(sayin.startsWith( prefix + "fake " )) {

        var text = sayin.substr(6)

        var ctext = text.replaceAll(" ", "-")

        var url = "http://www.latlmes.com/world/" + ctext + "-3"

        message.channel.send(url)

     }

});

bot.login(process.env.BOT_TOKEN);
