const Discord = require("discord.js");

const bot = new Discord.Client();

var prefix = "-"

var weapons = ["banana", "gun"]

var cmds = `-kill (Kills the selected user.)
-cmds (This, lol)
-info (Shows info of a player.)
-mineinfo (Search for a player minecraft account.) 
-kms (Gun. (banana,gun))
-report @user reason [reports user to man]`

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

        message.delete()
     	message.channel.sendMessage("```" + nor + "```")

     }else{
 
     if (sayin.startsWith(prefix + "kms ")) {
     	message.delete()
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

    sayin = message.content;

    if (sayin.startsWith( prefix + "mineinfo ") ) {

       message.delete()

       user = sayin.substr(10)

       const embed = new Discord.RichEmbed()
  .setTitle("Minecraft User " + user)
  .setAuthor("KillerBot", "https://i.pinimg.com/736x/22/a2/19/22a21941d8e5fce3c6e9e3a8a258cef4--galaxy-cat-hipster-cat.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x2EFF00)
  .setDescription("This account is over 200 days old.")
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

    	message.delete()

        message.author.send("Hi " + message.author + ", here is the list of **commands:**")

        message.author.send("```" + cmds + "```")

    }

});

bot.on( "message", message => {
    
    var sayin = message.content;

    if (sayin.startsWith(prefix + "report ")) {

        message.delete()
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

        message.delete()

        message.channel.sendMessage("http://i.imgur.com/izP9OYM.png")
        message.channel.sendMessage("Obvious?")

    }

})

bot.on( "message", message => {

    var sayin = message.content;

    if(sayin.startsWith( prefix + "kill " )) {

        message.delete()
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
        
        message.delete()
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

bot.login(process.env.BOT_TOKEN);
