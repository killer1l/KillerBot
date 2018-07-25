const Discord = require("discord.js");

const bot = new Discord.Client();

var prefix = "."

function checkplayer(plr,msg,name) {

    var adminRole = msg.guild.roles.find("name", name);

    if (plr.roles.has(adminRole.id)) {
        return true
     } else {
        return false
    }
}

function checkchannel(message, name) {
  if (message.channel.name === name) {
    return true
  } else {
    return false
  }
}

bot.on( "ready", () => {

console.log("RC7 Bot has been activated.")
bot.user.setGame('with idiots')

});

bot.on('guildMemberAdd', (guildMember) => {
  guildMember.user.send("Welcome to the unofficial RC7 server <@" + guildMember.user.id + ">! To get verified, go to the #Verify channel and type: .verify")
});

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

bot.on( "message", message => {

  var sayin = message.content;

    if (sayin.startsWith(prefix)) {
      if (sayin.startsWith(prefix + "verify")) {
        if (checkchannel(message, "verify")) {
          if (checkplayer(message.member, message, "Authenticated")) {
            if (checkplayer(message.member, message, "Moderator") || checkplayer(message.member, message, "Server Owners")) {
              if (message.mentions.members.first()) {
                if (checkplayer(message.mentions.members.first(), message, "Authenticated")) {
                  message.channel.send("User " + message.mentions.members.first().user.username + " is alredy Authenticated.")
                } else {
                  message.channel.send("Successfully Authenticated user " + message.mentions.members.first().user.username + "!")
                  message.mentions.members.first().addRole(message.guild.roles.find("name", "Authenticated").id)
                  message.mentions.members.first().removeRole(message.guild.roles.find("name", "Unauthenticated").id)
                }
              } else { 
                message.channel.send("Wrong usage. Use: !verify @UserName")
              }
            } else {
              message.channel.send("Hello <@" + message.author.id + ">, you're alredy Authenticated.")
            }
          } else {
            message.author.send("Hello <@" + message.author.id + ">! In order to verify you must first read rules. After that pm an admin with the proof. After the admin accepted you. You will be Authenticated.")
            message.channel.send("Hello <@" + message.author.id + ">! Please check your private messages in order to be Authenticated.")
          }
        }
      }

      if (sayin.startsWith(prefix + "unverify")) {
        if (checkplayer(message.member, message, "Moderator") || checkplayer(message.member, message, "Server Owners")) {
          if (message.mentions.members.first()) {
            if (checkplayer(message.mentions.members.first(), message, "Authenticated")) {
              message.channel.send("Successfully Unauthenticated user " + message.mentions.members.first().user.username + "!")
              message.mentions.members.first().removeRole(message.guild.roles.find("name", "Authenticated").id)
              message.mentions.members.first().addRole(message.guild.roles.find("name", "Unauthenticated").id)
            } else {
              message.channel.send("User is alredy Unauthenticated")
            }
          } else {
            message.channel.send("Wrong usage. Use: !unverify @UserName")
          }
        } else {
          message.channel.send("Insuficient permissions.")
        }
      }
    }

});

bot.login(process.env.BOT_TOKEN);
