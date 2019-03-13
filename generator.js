const discord = require ('discord.js'); 

 var client = new discord.Client();

const cooldowns = new Set();

const coolguy = new Set();

 client.on ("ready", () => {
     console.log ("ready!");

     client.user.setActivity ("Watching 1 Server | +Help");
     
     

     answered = true;
     cAnswer = "";
     userAnswer = "";
     });

 const fs = require("fs"); 
 client.msgs = require ("./msgs.json");

 client.on ("guildMemberAdd", member => {

    var role = member.guild.roles.find ("name", "Members");
    member.addRole (role);

 })

 client.on('guildMemberAdd' , member => {
     const channel = member.guild.channels.find ('name', 'welcome');
     if (!channel) return;
    channel.send(`:wave: Welcome to the server, :smile: ${member} :smile:`);
    });
 
client.on('guildMemberRemove' , member => {
    const channel = member.guild.channels.find ('name', 'welcome');
    if (!channel) return;
    channel.send(`:wave: Bye We will miss you ,:sob: ${member} :sob:`);
});

 const prefix = "+";
 client.on ("message", (message) => {

    if (message.author.bot) return;

    msg = message.content.toLowerCase();

    let mention = message.mentions.users.first() || message.author

    if (msg.startsWith (prefix + "send")) {
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (8)
        mention.send (mentionMessage);
        message.channel.send ("Message has been sent!");
    }

    if (answered == false) {
        userAnswer = msg;
        if (userAnswer == cAnswer) {
            message.reply ("got it right! :smile:");
        }
        else {
            message.reply ("got it wrong :sob:");
        }
        answered = true; cAnswer = ""; userAnswer = "";
    }

    if (msg.startsWith(prefix + "quiz")) {
        number = 3;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send ("How amazing is Ibbe: \n`A ) Godly \nB ) Amazing \nC ) Okay \nD ) Meh`"); cAnswer = "a"; break;
            case 2: message.channel.send ("How many dogs live on the moon?"); cAnswer = "0"; break;
            case 3: message.channel.send ("When was Kilroy created?"); cAnswer = "1940"; break;
        }
        answered = false;
    }

        function cooldown(user, time) {
        cooldowns.add(user);
        setTimeout(() => cooldowns.delete(user), time * 1000);
       console.log(`You Have To Wait ${time} Seconds Before Using This Command Again :slight_smile:`);
      }  
      

      function skanherooo(user, time) {
        coolguy.add(user);
        setTimeout(() => coolguy.delete(user), time * 1000);
       console.log(`You Have To Wait ${time} Seconds Before Using This Command Again :slight_smile:`);
      }
  
    if (msg.startsWith (prefix + "hello")) {
        message.reply ("Hi!");
    }
  
    if (msg.startsWith (prefix + "infosss")) {
        embed = new discord.RichEmbed ()
            .setAuthor ("?? INVITE REWARDS ??")
            .setDescription ("These are the invite rewards ! \n 2: Random account (1+ skin) \n --More income..")
            .setFooter ("This invite rewards was created by Ibbe")
            .setThumbnail ("https://cdn.discordapp.com/attachments/554413918231986244/554444981985607709/a.png")
            .setColor ("00ff00")

        message.channel.send (embed);    
    }

    if (msg.startsWith (prefix + "help")) {
        embed2 = new discord.RichEmbed ()
            .setAuthor ("Commands To Know")
            .setDescription ("+gen Fortnite \n +pgen Fortnite \n +gen Spotify \n +pgen Spotify \n +gen Origin \n +pgen Origin")
            .setFooter ("This command was created by Clusive.")
            .setThumbnail ("https://cdn.discordapp.com/attachments/554413918231986244/554444981985607709/a.png")
            .setColor ("00ff00")

        message.channel.send (embed2);
    } 

    if (msg.startsWith (prefix + "creator")) {
        embed = new discord.RichEmbed ()
        .setAuthor ("Creator of Generator") 
        .setDescription ("Credits to Clusive for : \n coding and creating me !")
        .setFooter ("Thank Clusive#2851 for creating me!")
        .setThumbnail ("https://cdn.discordapp.com/attachments/554413918231986244/555429332034519082/a.png")
        .setColor ("00ff00")
        message.channel.send (embed);
    }

    if (msg.startsWith (prefix + "kick")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        if (mention == null) return;
        if (message.guild.member(mention).hasPermission("KICK_MEMBERS")) return;
        let reason = message.content.slice (prefix.length + mention.toString().length + 5);
        message.channel.send (mention.username + " has been kicked for" + reason);
        mention.send ("You have been kicked because: \n" + reason).then (d_msg => {
            message.guild.member(mention).kick(reason);
        })
            
    }


    if (msg.startsWith (prefix + "ban")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        if (mention == null) return;
        if (message.guild.member(mention).hasPermission("BAN_MEMBERS")) return;
        let reason = message.content.slice (prefix.length + mention.toString().length + 5);
        message.channel.send (mention.username + " has been banned for " + reason);
        mention.send ("You have been banned because: \n" + reason).then (d_msg => {
            message.guild.member(mention).ban(reason);
        })
            
    }

    if (msg.startsWith (prefix + "crole") && message.member.hasPermission ("MANAGE_ROLES")) {
        messageSplit = message.content.split (" ", 3);
        roleName = messageSplit[1];
        roleColor = messageSplit[2].toUpperCase();
        addRolePerson = message.member;
        if (mention != null) { addRolePerson = message.guild.member(mention);}
        message.guild.createRole ( { 
            name: roleName,
            color: roleColor,
            mentionable: true,
         }).then (role => addRolePerson.addRole(role));
         message.channel.send ("**The Role** " + roleName + " **has been added.**").then (d_msg => d_msg.delete(3000));
         message.delete(3000);
    }

    if(message.content.startsWith(`${prefix}createchannel`)) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        const args = message.content.slice(15);
        message.guild.createChannel(`${args}`).then(channel => {
            channel.setTopic(`This is Ibbe channel!`)
        })
    }

    if (msg.startsWith ("+founder")) {
        message.channel.send ("This Guy Is The Founder ! Clusive#2851", {files: ["https://cdn.discordapp.com/attachments/554413918231986244/554444981985607709/a.png"]});
    }

  client.on('message', (message) => {
          if (message.channel.id !== '551484524941410334') return 
          if (message.author.bot || cooldowns.has(message.author)) return;
          if (message.content.startsWith ("+gen fortnite") && message.member.hasPermission ("VIEW_AUDIT_LOG")) {
        number = 34;
        var random2 = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random2) {
            case 1: mention.send ("acatao1999@gmail.com:brasil10"); break;  
            case 2: mention.send ("psilvacaeiro@gmail.com:maquinas01"); break;  
            case 3: mention.send ("coltonharris1991@gmail.com:colton14"); break;  
            case 4: mention.send ("Antonioalborea@gmail.com:scandone94"); break;  
            case 5: mention.send ("brucesutton4@gmail.com:prickle4"); break;  
            case 6: mention.send ("thomasjllobmx@gmail.com:thomasbmx1"); break;  
            case 7: mention.send ("hitscity514@gmail.com:montreal514"); break;
            case 8: mention.send ("racinemathieu77@gmail.com:football972"); break;  
            case 9: mention.send ("amartincek@gmail.com:31051992am"); break;  
            case 10: mention.send ("Omarhediya@gmail.com:callofduty99"); break;  
            case 11: mention.send ("josericardo19942804@gmail.com:lidiane2805"); break;  
            case 12: mention.send ("jenifertorres12345@gmail.com:wuapa789"); break;  
            case 13: mention.send ("ostliej@gmail.com:bitch117"); break;  
            case 14: mention.send ("Dorso.wd@gmail.com:soyrevago7"); break;  
            case 15: mention.send ("mahdi.alkhabbaz9@gmail.com:123789456R"); break;  
            case 16: mention.send ("flowesflow@gmail.com:Putoner123"); break;  
            case 17: mention.send ("aserral@gmail.com:inicio14"); break;  
            case 18: mention.send ("maggotkai@gmail.com:kaique07"); break;  
            case 19: mention.send ("se2h1979@gmail.com:Hermanas2"); break; 
            case 20: mention.send ("marcusbertolino@gmail.com:abra2905"); break;  
            case 21: mention.send ("magnus54michael@gmail.com:mike67800"); break;  
            case 22: mention.send ("vaka46@gmail.com:Vaka7380"); break;  
            case 23: mention.send ("christianr2922@gmail.com:pendejo85"); break;  
            case 24: mention.send ("h.almusawa@gmail.com:hussain00"); break; 
            case 25: mention.send ("ysadre8@gmail.com:carvanho007"); break; 
            case 26: mention.send ("yardensap2000@gmail.com:yarden2000"); break;  
            case 27: mention.send ("baleeghsm@gmail.com:Baleegh83"); break;
            case 28: mention.send ("carlosforosco@gmail.com:sarita97"); break;
            case 29: mention.send ("salinarramos@gmail.com:bfranco340"); break;
            case 30: mention.send ("kdbramwell@gmail.com:Zergling2"); break;
            case 31: mention.send ("adrianjrentka@gmail.com:adibadi21"); break;
            case 32: mention.send ("crapaezgi6@gmail.com:ccaappgg666"); break;
            case 33: mention.send ("Antonioalborea@gmail.com:scandone94"); break;
            case 34: mention.send ("netromrex@gmail.com:uvb6xahy"); break;
            }
        if (mention == null) return; 
        message.delete();
        mentionMessage = message.content.slice (8)
        mention.send ();
        embed = new discord.RichEmbed()
        .setDescription("I Have Successfully Sent You The Fortnite Account, Please Check Your DM's :thumbup: (Wait 5 Minutes Before Using This Command Again)")
        .setColor("00FF00")
        message.channel.send(embed);
        cooldown(message.author, 300);
        }
      });
    
  client.on('message', (message) => { 
          if (message.channel.id !== '551484526262747144') return
          if (message.author.bot || coolguy.has(message.author)) return;
          if (message.content.startsWith ("+pgen fortnite") && message.member.hasPermission ("USE_EXTERNAL_EMOJIS")) {
            number = 40;
            var random3 = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            switch (random3) {
                case 1: mention.send ("chris.g.counts@gmail.com:Monica55"); break;
                case 1: mention.send ("coigmaria@gmail.com:medic1na"); break;
                case 2: mention.send ("chanoalbo10@gmail.com:catalina13"); break;  
                case 3: mention.send ("fabio.fernandezv@gmail.com:slpmex26"); break;  
                case 4: mention.send ("julien.serrano77@gmail.com:maison324"); break;  
                case 5: mention.send ("andyziv17@gmail.com:walter16"); break;
                case 6: mention.send ("paarthdave1@gmail.com:zxcvbnm231"); break;  
                case 7: mention.send ("jaimefernandezgomez8@gmail.com:montenegro0"); break;  
                case 8: mention.send ("moenia420@gmail.com:lerma1976"); break;
                case 9: mention.send ("matias.torocabrera19@gmail.com:matias.1995"); break;
                case 10: mention.send ("andersond@gmail.com:unit0174"); break;  
                case 11: mention.send ("alessandrofiore20973511@gmail.com:sucazzi97"); break;  
                case 12: mention.send ("eduardo.espinoza16@gmail.com:thelalox1992"); break;  
                case 13: mention.send ("emilia.jalaja@gmail.com:gryffindor16"); break;  
                case 14: mention.send ("griduda@gmail.com:q1w2e3r4"); break;  
                case 15: mention.send ("theharoontv@gmail.com:google91"); break;  
                case 16: mention.send ("pezzottaandrea8@gmail.com:andrea123"); break;  
                case 17: mention.send ("emilioparedez@gmail.com:emilio4864"); break;  
                case 18: mention.send ("raghav288@gmail.com:jyothi288"); break;  
                case 19: mention.send ("joaofcsouza@gmail.com:laralaf21"); break; 
                case 20: mention.send ("briandomi89@gmail.com:lunita89"); break;
                case 21: mention.send ("tommyjurgensen@gmail.com:davidvilla7"); break;  
                case 22: mention.send ("sebastianmartinmenendez@gmail.com:bautista2008"); break;  
                case 23: mention.send ("ibrainm@gmail.com:id21507"); break;
                case 24: mention.send ("ivandelahozkipke@gmail.com:kaki1100"); break;
                case 25: mention.send ("caio.quinilato@gmail.com:elfos123"); break;
                case 26: mention.send ("naderfuad7@gmail.com:nn123456"); break;  
                case 27: mention.send ("qumberali1@gmail.com:moneyrocks1"); break;  
                case 28: mention.send ("nassemom@gmail.com:omom7070"); break;  
                case 29: mention.send ("pelael87@gmail.com:nare2015"); break;  
                case 30: mention.send ("matyy102@gmail.com:indiana102"); break;
                case 31: mention.send ("gabriel.jacy@gmail.com:gabriel26554368"); break;
                case 32: mention.send ("alejandromztjr@gmail.com:chivas123"); break; 
                case 33: mention.send ("giovanniromeo251@gmail.com:giovivale99"); break;  
                case 34: mention.send ("burkiemartin29@gmail.com:warrior36"); break;  
                case 35: mention.send ("mcaronti@gmail.com:napoleon10"); break;
                case 36: mention.send ("aayushirgamji@gmail.com:Aayushi99"); break;  
                case 37: mention.send ("colinbradley96@gmail.com:numbers1"); break;  
                case 38: mention.send ("jasigala13@gmail.com:131351Ja"); break;  
                case 39: mention.send ("baxterbarni@gmail.com:Sulim1967"); break;  
                case 40: mention.send ("cleberlm@gmail.com:zeber1681"); break;  
                }
            if (mention == null) return; 
            message.delete();
            mentionMessage = message.content.slice (8)
            mention.send ();
            embed = new discord.RichEmbed()
            .setDescription("I Have Successfully Sent You The Premium Fortnite Account, Please Check Your DM's :thumbup: (Wait 3 Minutes Before Using This Command Again)")
            .setColor("00FF00")
            message.channel.send(embed); 
            skanherooo(message.author, 180);
            }
          });
  
    if (msg.startsWith (prefix + "gen spotify") && message.member.hasPermission ("VIEW_AUDIT_LOG")) {
        number = 30;
        var random4 = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random4) {
            case 1: mention.send ("sennette@gmail.com:texasexes2003"); break;
            case 2: mention.send ("msubills63@yahoo.com:Msdawg64"); break;
            case 3: mention.send ("aishwaryya.sarkar@gmail.com:lph23986769"); break;
            case 4: mention.send ("r1qwer1r@gmail.com:1qfghjo0"); break;
            case 5: mention.send ("bill_melendez@msn.com:ma9n0lia"); break;
            case 6: mention.send ("wgjames2@gmail.com:4808scar"); break;
            case 7: mention.send ("damiox@gmail.com:Riverplate"); break;
            case 8: mention.send ("gabrdz19@gmail.com:peewee18"); break;
            case 9: mention.send ("nikkicarlin@gmail.com:nikki1969"); break;
            case 10: mention.send ("nikkicarlin@gmail.com:nikki1969"); break;
            case 11: mention.send ("kevincrozier@me.com:Lindzo29"); break;
            case 12: mention.send ("cheyannenikolaus@hotmail.com:chacha1987"); break;
            case 13: mention.send ("stegoego@gmail.com:Mamaego13142"); break;
            case 14: mention.send ("unreinmj@gmail.com:abbybell01"); break;
            case 15: mention.send ("tre9696@yahoo.com:Chsbears14"); break;
            case 16: mention.send ("bpodhajsky@yahoo.com:bentley123"); break;
            case 17: mention.send ("nachorq@hotmail.com:29580942"); break;
            case 18: mention.send ("brandon.berry01@gmail.com:volcom55"); break;
            case 19: mention.send ("etritsch84@gmail.com:jayhawks84"); break;
            case 20: mention.send ("adondevai@gmail.com:terapia123"); break;
            }
        if (mention == null) return;
        message.delete();
        mentionMessage = message.content.slice (8)
        mention.send ();
        embed = new discord.RichEmbed()
        .setDescription("I Have Successfully Sent You The Spotify Account ! Please Check Your DMs:thumbup:")
        .setColor("00FF00")
        message.channel.send(embed);
    }

    if (msg.startsWith (prefix + "pgen spotify") && message.member.hasPermission ("USE_EXTERNAL_EMOJIS")) {
        number = 20;
        var random5 = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random5) {
            case 1: mention.send ("sennette@gmail.com:texasexes2003"); break;
            case 2: mention.send ("msubills63@yahoo.com:Msdawg64"); break;
            case 3: mention.send ("aishwaryya.sarkar@gmail.com:lph23986769"); break;
            case 4: mention.send ("r1qwer1r@gmail.com:1qfghjo0"); break;
            case 5: mention.send ("bill_melendez@msn.com:ma9n0lia"); break;
            case 6: mention.send ("wgjames2@gmail.com:4808scar"); break;
            case 7: mention.send ("damiox@gmail.com:Riverplate"); break;
            case 8: mention.send ("gabrdz19@gmail.com:peewee18"); break;
            case 9: mention.send ("nikkicarlin@gmail.com:nikki1969"); break;
            case 10: mention.send ("nikkicarlin@gmail.com:nikki1969"); break;
            case 11: mention.send ("kevincrozier@me.com:Lindzo29"); break;
            case 12: mention.send ("cheyannenikolaus@hotmail.com:chacha1987"); break;
            case 13: mention.send ("stegoego@gmail.com:Mamaego13142"); break;
            case 14: mention.send ("unreinmj@gmail.com:abbybell01"); break;
            case 15: mention.send ("tre9696@yahoo.com:Chsbears14"); break;
            case 16: mention.send ("bpodhajsky@yahoo.com:bentley123"); break;
            case 17: mention.send ("nachorq@hotmail.com:29580942"); break;
            case 18: mention.send ("brandon.berry01@gmail.com:volcom55"); break;
            case 19: mention.send ("etritsch84@gmail.com:jayhawks84"); break;
            case 20: mention.send ("adondevai@gmail.com:terapia123"); break;
            }
        if (mention == null) return;
        message.delete();
        mentionMessage = message.content.slice (8)
        mention.send ();
        embed = new discord.RichEmbed()
        .setDescription("I Have Successfully Sent You The Spotify Account ! Please Check Your DMs:thumbup:")
        .setColor("00FF00")
        message.channel.send(embed);
    }

    if (msg.startsWith (prefix + "gen origin") && message.member.hasPermission ("VIEW_AUDIT_LOG")) {
        number = 20;
        var random6 = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random6) {
            case 1: mention.send ("sennette@gmail.com:texasexes2003"); break;
            case 2: mention.send ("msubills63@yahoo.com:Msdawg64"); break;
            case 3: mention.send ("aishwaryya.sarkar@gmail.com:lph23986769"); break;
            case 4: mention.send ("r1qwer1r@gmail.com:1qfghjo0"); break;
            case 5: mention.send ("bill_melendez@msn.com:ma9n0lia"); break;
            case 6: mention.send ("wgjames2@gmail.com:4808scar"); break;
            case 7: mention.send ("damiox@gmail.com:Riverplate"); break;
            case 8: mention.send ("gabrdz19@gmail.com:peewee18"); break;
            case 9: mention.send ("nikkicarlin@gmail.com:nikki1969"); break;
            case 10: mention.send ("nikkicarlin@gmail.com:nikki1969"); break;
            case 11: mention.send ("kevincrozier@me.com:Lindzo29"); break;
            case 12: mention.send ("cheyannenikolaus@hotmail.com:chacha1987"); break;
            case 13: mention.send ("stegoego@gmail.com:Mamaego13142"); break;
            case 14: mention.send ("unreinmj@gmail.com:abbybell01"); break;
            case 15: mention.send ("tre9696@yahoo.com:Chsbears14"); break;
            case 16: mention.send ("bpodhajsky@yahoo.com:bentley123"); break;
            case 17: mention.send ("nachorq@hotmail.com:29580942"); break;
            case 18: mention.send ("brandon.berry01@gmail.com:volcom55"); break;
            case 19: mention.send ("etritsch84@gmail.com:jayhawks84"); break;
            case 20: mention.send ("adondevai@gmail.com:terapia123"); break;
            }
        if (mention == null) return; 
        message.delete();
        mentionMessage = message.content.slice (8)
        mention.send ();
        embed = new discord.RichEmbed()
        .setDescription("I Have Successfully Sent You The Origin Account ! Please Check Your DMs:thumbup:")
        .setColor("00FF00")
        message.channel.send(embed);
    }

    if (msg.startsWith (prefix + "pgen origin") && message.member.hasPermission ("USE_EXTERNAL_EMOJIS")) {
        number = 20;
        var random7 = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random7) {
            case 1: mention.send ("sennette@gmail.com:texasexes2003"); break;
            case 2: mention.send ("msubills63@yahoo.com:Msdawg64"); break;
            case 3: mention.send ("aishwaryya.sarkar@gmail.com:lph23986769"); break;
            case 4: mention.send ("r1qwer1r@gmail.com:1qfghjo0"); break;
            case 5: mention.send ("bill_melendez@msn.com:ma9n0lia"); break;
            case 6: mention.send ("wgjames2@gmail.com:4808scar"); break;
            case 7: mention.send ("damiox@gmail.com:Riverplate"); break;
            case 8: mention.send ("gabrdz19@gmail.com:peewee18"); break;
            case 9: mention.send ("nikkicarlin@gmail.com:nikki1969"); break;
            case 10: mention.send ("nikkicarlin@gmail.com:nikki1969"); break;
            case 11: mention.send ("kevincrozier@me.com:Lindzo29"); break;
            case 12: mention.send ("cheyannenikolaus@hotmail.com:chacha1987"); break;
            case 13: mention.send ("stegoego@gmail.com:Mamaego13142"); break;
            case 14: mention.send ("unreinmj@gmail.com:abbybell01"); break;
            case 15: mention.send ("tre9696@yahoo.com:Chsbears14"); break;
            case 16: mention.send ("bpodhajsky@yahoo.com:bentley123"); break;
            case 17: mention.send ("nachorq@hotmail.com:29580942"); break;
            case 18: mention.send ("brandon.berry01@gmail.com:volcom55"); break;
            case 19: mention.send ("etritsch84@gmail.com:jayhawks84"); break;
            case 20: mention.send ("adondevai@gmail.com:terapia123"); break;
            }
        if (mention == null) return; 
        message.delete();
        mentionMessage = message.content.slice (8)
        mention.send ();
        embed = new discord.RichEmbed()
        .setDescription("I Have Successfully Sent You The Origin Account ! Please Check Your DMs:thumbup:")
        .setColor("00FF00") 
        message.channel.send(embed);
    }

    if (msg.startsWith ("!write")) {
        editedmessage = message.content.slice (6);

        client.msgs [message.author.username] = {
            message: editedmessage
        }
fs.writeFile ("./msgs.json", JSON.stringify (client.msgs, null, 4), err => {
            if (err) throw err;
            message.channel.send ("Message written!");
        });

    }

    if (msg.startsWith ("!get")) {
        let _message = client.msgs[message.author.username].message;
        message.channel.send ("" + _message);
    }


    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "nice")) {
              if (!message.member.hasPermission("ADMINISTRATOR"))  return;

              if (!args[1]) {

                     let embed3 = new discord.RichEmbed()
                         .setDescription(":white_check_mark: | Nice")
                           .setColor("#FF00FF")
                              message.channel.send (embed3);
                              message.delete();

                            } else {


                               let embed4 = new discord.RichEmbed()
                                                .setDescription(':white_check_mark: | Hello..')
                                                    .setColor("#99999")

                                                    message.channel.send (embed4);
                                          message.delete();
                }
              }
});


client.on('message', message => {
    if (message.content.split(' ')[0] == '!dm')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
           member.send(message.content.substr(3));
                                                      message.delete();

                                                    });

                                                  });




client.login(process.env.TOKENN);
