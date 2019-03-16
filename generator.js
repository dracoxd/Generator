const discord = require ('discord.js'); 

 var client = new discord.Client();

const cooldowns = new Set();

const coolguy = new Set();

const coolguys = new Set();

const cooldude = new Set();

const cooldudes = new Set();

const coolbro = new Set();

 client.on ("ready", () => {
     console.log ("ready!");

     client.user.setActivity ("Watching 3 Server | +Help");
     
     

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
    
    let a = ['acatao1999@gmail.com:brasil10', 'psilvacaeiro@gmail.com:maquinas01', 'coltonharris1991@gmail.com:colton14', 'Antonioalborea@gmail.com:scandone94', 'brucesutton4@gmail.com:prickle4', 'thomasjllobmx@gmail.com:thomasbmx1', 'hitscity514@gmail.com:montreal514', 'racinemathieu77@gmail.com:football972', 'amartincek@gmail.com:31051992am', 'Omarhediya@gmail.com:callofduty99', 'josericardo19942804@gmail.com:lidiane2805', 'jenifertorres12345@gmail.com:wuapa789', 'ostliej@gmail.com:bitch117', 'Dorso.wd@gmail.com:soyrevago7', 'mahdi.alkhabbaz9@gmail.com:123789456R', 'flowesflow@gmail.com:Putoner123', 'aserral@gmail.com:inicio14', 'maggotkai@gmail.com:kaique07', 'se2h1979@gmail.com:Hermanas2', 'marcusbertolino@gmail.com:abra2905', 'magnus54michael@gmail.com:mike67800', 'vaka46@gmail.com:Vaka7380', 'christianr2922@gmail.com:pendejo85', 'h.almusawa@gmail.com:hussain00', 'ysadre8@gmail.com:carvanho007', 'yardensap2000@gmail.com:yarden2000', 'baleeghsm@gmail.com:Baleegh83',
 'carlosforosco@gmail.com:sarita97', 'salinarramos@gmail.com:bfranco340', 'kdbramwell@gmail.com:Zergling2', 'adrianjrentka@gmail.com:adibadi21', 'crapaezgi6@gmail.com:ccaappgg666', 'Antonioalborea@gmail.com:scandone94', 'netromrex@gmail.com:uvb6xahy']

    let b = ['chris.g.counts@gmail.com:Monica55', 'coigmaria@gmail.com:medic1na', 'chanoalbo10@gmail.com:catalina13', 'fabio.fernandezv@gmail.com:slpmex26', 'julien.serrano77@gmail.com:maison324', 'andyziv17@gmail.com:walter16', 'paarthdave1@gmail.com:zxcvbnm231', 'jaimefernandezgomez8@gmail.com:montenegro0', 'moenia420@gmail.com:lerma1976', 'matias.torocabrera19@gmail.com:matias.1995', 'andersond@gmail.com:unit0174', 'alessandrofiore20973511@gmail.com:sucazzi97', 'eduardo.espinoza16@gmail.com:thelalox1992', 'emilia.jalaja@gmail.com:gryffindor16', 'griduda@gmail.com:q1w2e3r4', 'theharoontv@gmail.com:google91', 'pezzottaandrea8@gmail.com:andrea123', 'emilioparedez@gmail.com:emilio4864', 'raghav288@gmail.com:jyothi288', 'joaofcsouza@gmail.com:laralaf21', 'briandomi89@gmail.com:lunita89', 'tommyjurgensen@gmail.com:davidvilla7', 'sebastianmartinmenendez@gmail.com:bautista2008', 'ibrainm@gmail.com:id21507', 'ivandelahozkipke@gmail.com:kaki1100', 'caio.quinilato@gmail.com:elfos123', 
'naderfuad7@gmail.com:nn123456', 'qumberali1@gmail.com:moneyrocks1', 'nassemom@gmail.com:omom7070', 'pelael87@gmail.com:nare2015', 'matyy102@gmail.com:indiana102', 'gabriel.jacy@gmail.com:gabriel26554368', 'alejandromztjr@gmail.com:chivas123', 'giovanniromeo251@gmail.com:giovivale99', 'burkiemartin29@gmail.com:warrior36', 'mcaronti@gmail.com:napoleon10', 'aayushirgamji@gmail.com:Aayushi99', 'colinbradley96@gmail.com:numbers1', 'jasigala13@gmail.com:131351Ja', 'baxterbarni@gmail.com:Sulim1967', 'cleberlm@gmail.com:zeber1681']
    
    let c = ['kellyoklein@hotmail.com:baskets1 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'lucasrs90@hotmail.com:08021990 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'eronoliveira1@hotmail.com:45181903 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'liggy2009@hotmail.com:Liverpool2011 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'carlamf_60@hotmail.com:1HappyDay | Subscription: Premium | Recurring date: | Status:Premium for Family',
'sbray2000@hotmail.com:meesha3283 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'michdr@hotmail.com:browneyez83 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'northworld@hotmail.com:jademan32 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'zebraatje@hotmail.com:tiger007 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'ner54@hotmail.com:rosario1 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'stacialotta@hotmail.com:stacialotta | Subscription: Premium | Recurring date: | Status:Premium for Family',
'youri.b11@hotmail.com:sara1212 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'lucashoogeveen@hotmail.com:welkom01 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'achilton2@hotmail.com:u70jyqr5 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'darrinhoskins@hotmail.com:bible777 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'ndaian@hotmail.com:papa1234 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'rotulcenter_lbn@hotmail.com:jovb3Pe4 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'tammygerber@hotmail.com:peperabbit | Subscription: Premium | Recurring date: | Status:Premium for Family',
'vince.football@hotmail.com:arsenal91 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'marnicgom@hotmail.com:100495 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'carlo_bunda@hotmail.com:huzanama41 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'tiandrefc@hotmail.com:71917191 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'hlhopkins@hotmail.com:wwjd4110 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'daniavasquez@hotmail.com:carlos2903 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'fernandabonvini@hotmail.com:91930902 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'rorro_santos@hotmail.com:parasaurolophus | Subscription: Premium | Recurring date: | Status:Premium for Family',
'c_peltz@hotmail.com:Poacheggs1187 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'g.h.coutinho@hotmail.com:130506 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'jammersgirl@hotmail.com:iwakuni09 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'accfconti@uol.com.br:ort123 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'cristina_leigh@hotmail.com:espritv8 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'no14yy@gmail.com:thomasblue1 | Subscription: Premium | Recurring date: | Status:Premium for Family',
's.r8@hotmail.com:8sinamin | Subscription: Premium | Recurring date: | Status:Premium for Family',
'dominic@peterbaer.de:texas0304 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'dfbartlett@gmail.com:31db6996 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'sama_276@hotmail.com:sgarc408 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'pkiew22@gmail.com:Parker22 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'derpygamer1@yahoo.com:Knocksteady01 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'traceytana@hotmail.com:fordf150 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'lucresio23@gmail.com:lucresio23 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'matildahilda@hotmail.co.uk:Smiles12 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'aan1992@gmail.com:nokian93i | Subscription: Premium | Recurring date: | Status:Premium for Family',
'Citariley@hotmail.co.uk:rose135 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'traore.dhia@hotmail.fr:asia8asia | Subscription: Premium | Recurring date: | Status:Premium for Family',
'c-harman@live.com.au:HOTwosabe80 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'ctigges@gmail.com:tigwoman64 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'inskeep.r@gmail.com:goldfish | Subscription: Premium | Recurring date: | Status:Premium for Family',
'NanaShahatit@comcast.net:081303nz | Subscription: Premium | Recurring date: | Status:Premium for Family',
'tazdev1@gmail.com:taz16939 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'kellyleestuber@gmail.com:247powder | Subscription: Premium | Recurring date: | Status:Premium for Family',
'tennison541@gmail.com:hearts | Subscription: Premium | Recurring date: | Status:Premium for Family',
'brittanyblackwell07@gmail.com:iloveme07 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'amandaevelyn9900@gmail.com:Nikoli343 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'bjkarcher@gmail.com:v3allstar | Subscription: Premium | Recurring date: | Status:Premium for Family',
'randallhanegraaf@gmail.com:Tafellakens44 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'sydney.jennette2@gmail.com:camille17 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'auir31@gmail.com:shitson3 | Subscription: Premium | Recurring date:3/20/19 | Status:Spotify Premium',
'tomvdelzen@gmail.com:t6909672 | Subscription: Premium | Recurring date:3/25/19 | Status:Spotify Premium',
'meliss8833@gmail.com:kerfuffle124 | Subscription: Premium | Recurring date:3/28/19 | Status:Spotify Premium with Hulu',
'pabloandemma@gmail.com:02310044 | Subscription: Premium | Recurring date:3/25/19 | Status:',
'cristina.gizzi@gmail.com:icelol123 | Subscription: Premium | Recurring date:3/21/19 | Status:Spotify Premium',
'tomatodea@gmail.com:skater400 | Subscription: Premium | Recurring date:3/14/19 | Status:Spotify Premium',
'Jessieayon@gmail.com:Rocklee23 | Subscription: Premium | Recurring date:4/1/19 | Status:Spotify Premium',
'nikjoekiller@gmail.com:nick9541 | Subscription: Premium | Recurring date:3/12/19 | Status:Spotify Premium',
'adriana.filaber@gmail.com:misiek | Subscription: Premium | Recurring date:3/14/19 | Status:Premium for Family',
'raouljurchela@gmail.com:dnclip1234 | Subscription: Premium | Recurring date:3/15/19 | Status:Spotify Premium',
'bonjovi.castro@gmail.com:jaydub | Subscription: Premium | Recurring date:3/17/19 | Status:Spotify Premium with Hulu',
'samphilip.r@gmail.com:08111518 | Subscription: Premium | Recurring date: | Status:Spotify Premium',
'colmkellehercbk7@gmail.com:Icerice7 | Subscription: Premium | Recurring date:3/14/19 | Status:Spotify Premium',
'alex.michaelson12@gmail.com:dominic | Subscription: Premium | Recurring date:3/9/19 | Status:Premium for Students + Headspace',
'nicksuber53@gmail.com:saddad123 | Subscription: Premium | Recurring date:4/2/19 | Status:Spotify Premium',
'gabrielj.velezc@gmail.com:1020418698 | Subscription: Premium | Recurring date:3/21/19 | Status:Spotify Premium',
'lindsaal@gmail.com:122185 | Subscription: Premium | Recurring date:3/28/19 | Status:Spotify Premium',
'noel.enriqueziii@gmail.com:maverick812 | Subscription: Premium | Recurring date:3/31/19 | Status:Spotify Premium',
'rmcfarland10@gmail.com:zeldas | Subscription: Premium | Recurring date:3/23/19 | Status:',
'donna.surprenant@gmail.com:jumper63 | Subscription: Premium | Recurring date:3/22/19 | Status:Spotify Premium',
'francois.israel@gmail.com:karateryo | Subscription: Premium | Recurring date:4/4/19 | Status:Spotify Premium',
'cristin0409@gmail.com:leighanna1 | Subscription: Premium | Recurring date:3/19/19 | Status:Spotify Premium',
'supermanfeb4@gmail.com:redcape | Subscription: Premium | Recurring date:3/30/19 | Status:Spotify Premium',
'scot.w.beattie@gmail.com:sherpa85 | Subscription: Premium | Recurring date:4/8/19 | Status:Spotify Premium',
'bepetie@gmail.com:y5ehiv | Subscription: Premium | Recurring date:3/13/19 | Status:Spotify Premium',
'm.picun@gmail.com:elchino87 | Subscription: Premium | Recurring date:3/15/19 | Status:Spotify Premium',
'm.d.broos@gmail.com:99682176 | Subscription: Premium | Recurring date:3/30/19 | Status:Spotify Premium',
'juliokon@gmail.com:procedure | Subscription: Premium | Recurring date:3/11/19 | Status:Spotify Premium',
'cebible@gmail.com:ryley123 | Subscription: Premium | Recurring date:3/16/19 | Status:Spotify Premium',
'kushi.lai@gmail.com:181019976 | Subscription: Premium | Recurring date:3/24/19 | Status:',
'pnmougel@gmail.com:fwRise | Subscription: Premium | Recurring date:3/31/19 | Status:Spotify Premium',
'zdanhauer@gmail.com:huskerpower | Subscription: Premium | Recurring date:3/27/19 | Status:Spotify Premium',
'DianaM2010@gmail.com:dm040592 | Subscription: Premium | Recurring date:3/29/19 | Status:Spotify Premium',
'trastknapmiller@gmail.com:162877 | Subscription: Premium | Recurring date:4/4/19 | Status:Spotify Premium',
'aaliyah.linsey@gmail.com:aaliyah143 | Subscription: Premium | Recurring date:3/24/19 | Status:Spotify Premium',
'lhcooper13@gmail.com:lillyloo1 | Subscription: Premium | Recurring date:3/11/19 | Status:Spotify Premium',
'tomwright507@gmail.com:biskit123 | Subscription: Premium | Recurring date:4/4/19 | Status:Spotify Premium',
'ruoripelle1@gmail.com:munkissa | Subscription: Premium | Recurring date:3/12/19 | Status:Spotify Premium',
'muveszdernacht@gmail.com:kumquat23 | Subscription: Premium | Recurring date:3/11/19 | Status:Spotify Premium with Hulu',
'anonymousbrew@gmail.com:Omniware1 | Subscription: Premium | Recurring date:3/15/19 | Status:Spotify Premium',
'bmarci2009@gmail.com:marci2009 | Subscription: Premium | Recurring date:3/22/19 | Status:Spotify Premium',
'carlosgrrng@gmail.com:Metallica1 | Subscription: Premium | Recurring date:4/3/19 | Status:Spotify Premium with Hulu',
'barbrags@gmail.com:rags6931 | Subscription: Premium | Recurring date:4/2/19 | Status:Spotify Premium',
'lcpriori@gmail.com:colorado | Subscription: Premium | Recurring date:4/6/19 | Status:Spotify Premium',]
    
    let d = ['avel.isupov@gmail.com:blaze1123 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'jcassidy32@gmail.com:buffett | Subscription: Premium | Recurring date: | Status:Premium for Family',
'keg230@gmail.com:Babykitty88 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'sodanyhy@gmail.com:071490sh | Subscription: Premium | Recurring date: | Status:Premium for Family',
'ranmadu@gmail.com:twilight0 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'djtobin11@gmail.com:glando11 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'ammoses3@gmail.com:michael | Subscription: Premium | Recurring date: | Status:Premium for Family',
'marektabor1@gmail.com:lol123 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'wfriedma@gmail.com:Q1W2e3r4 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'wishmonger@gmail.com:windance | Subscription: Premium | Recurring date: | Status:Premium for Family',
'kojo9999999999@gmail.com:ognik007 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'yvonne.dabreo@gmail.com:asv994 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'mhmh4444@gmail.com:martini602 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'richardrose@gmail.com:ez073187 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'lukasjoshuap@gmail.com:potongbebek | Subscription: Premium | Recurring date: | Status:Premium for Family',
'johnathan.hollis@gmail.com:leolove7 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'mvkmauro@gmail.com:maurolok1 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'gilles.flebus12@gmail.com:Maximus1 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'egidijus.misevicius@gmail.com:829876790 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'Cmburden9212@gmail.com:jorysteve11 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'alexjamesbrett@gmail.com:quin0304 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'chuamengloongkevin2@gmail.com:3odpcj4h | Subscription: Premium | Recurring date: | Status:Premium for Family',
'Ticky09@gmail.com:williams09 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'ktvdesigns@gmail.com:jktslv | Subscription: Premium | Recurring date: | Status:Premium for Family',
'joshkong1@gmail.com:snake88 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'cameronalandrysdale@gmail.com:awesome | Subscription: Premium | Recurring date: | Status:Premium for Family',
'gearheadette@gmail.com:iron830 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'garnett555@gmail.com:64358109 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'jlw2288@gmail.com:Reece2288 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'thebqlv@gmail.com:8selo8 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'zpwhynot@gmail.com:lakeland13 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'lmwfy2@gmail.com:daniel1 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'makstasmin@gmail.com:placek1 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'mcianfar@gmail.com:CIANFARANI6 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'benoit.marchand10@gmail.com:darney | Subscription: Premium | Recurring date: | Status:Premium for Family',
'gsnafu@gmail.com:q12we34r | Subscription: Premium | Recurring date: | Status:Premium for Family',
'silly.lil.d@gmail.com:dslca637 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'divermindy@gmail.com:jerseyboy | Subscription: Premium | Recurring date: | Status:Premium for Family',
'sarah.faye100@gmail.com:j2h2tu | Subscription: Premium | Recurring date: | Status:Premium for Family',
'galmary28@gmail.com:mary4316 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'alvaredo00@gmail.com:alva2340 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'brysonberan@gmail.com:case123 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'earlcannon99@gmail.com:cannon99 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'maliq1000@gmail.com:poopee123123 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'heatherqs@gmail.com:riffrandall | Subscription: Premium | Recurring date: | Status:Premium for Family',
'sam.piechota@gmail.com:pippy1 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'michaeldheberlein@gmail.com:chels32 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'anitacu1982@gmail.com:sujetadores | Subscription: Premium | Recurring date: | Status:Premium for Family',
'laurenwebnar@gmail.com:georgie55 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'kyndraq@gmail.com:ftpickett | Subscription: Premium | Recurring date: | Status:Premium for Family',
'ayetnobby2710@gmail.com:ayet1234 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'zamulera@gmail.com:5624937678 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'jestevez@gmail.com:0123456789 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'xsoandsox@gmail.com:katies | Subscription: Premium | Recurring date: | Status:Premium for Family',
'jeewonshops@gmail.com:pomona | Subscription: Premium | Recurring date: | Status:Premium for Family',
'mkpugliese@gmail.com:katieloo | Subscription: Premium | Recurring date: | Status:Premium for Family',
'eddy381@gmail.com:onet666 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'shtormeg@gmail.com:4850468 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'dwyer74@gmail.com:wyatt2010 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'ryanfraga@gmail.com:9993gref | Subscription: Premium | Recurring date: | Status:Premium for Family',
'Sydney.Vins111@gmail.com:terrajack | Subscription: Premium | Recurring date: | Status:Premium for Family',
'gambasco1997@gmail.com:rossini97 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'yagulan01@gmail.com:webkinz | Subscription: Premium | Recurring date: | Status:Premium for Family',
'mchintan@gmail.com:chintan010 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'livisage@gmail.com:livi9765 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'moterry06@gmail.com:megesa28 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'spberg82@gmail.com:nyyankees23 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'katponi@gmail.com:chloerae | Subscription: Premium | Recurring date: | Status:Premium for Family',
'dopey352@gmail.com:blahblah8764 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'sarahkjos@gmail.com:Baby27moon | Subscription: Premium | Recurring date: | Status:Premium for Family',
'litinglou@gmail.com:1996dec21 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'mate.kolozsvari@gmail.com:futurisztikus | Subscription: Premium | Recurring date: | Status:Premium for Family',
'mitchell.martin93@gmail.com:soccer40 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'lbhoover@gmail.com:reigirl | Subscription: Premium | Recurring date: | Status:Premium for Family',
'RaquelT.Rivera@gmail.com:Tere2425 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'gary.katzenmaier@gmail.com:13016108 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'hewillneverhaveagirlfriend@gmail.com:dragoniano | Subscription: Premium | Recurring date: | Status:Premium for Family',
'Brandy.brannon@gmail.com:Gaetano2 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'Randybiggs.spsd@gmail.com:1234qwerasdf | Subscription: Premium | Recurring date: | Status:Premium for Family',
'waltaney@gmail.com:durry101 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'taco.oosten@gmail.com:maurits1998 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'vmoreira0304@gmail.com:mmjosue9 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'jschrack@gmail.com:granite1 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'renato.perezzz@gmail.com:tonare | Subscription: Premium | Recurring date: | Status:Premium for Family',
'mark1998790@gmail.com:21911128 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'nirajdadoo@gmail.com:sept1997 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'therealmjfox@gmail.com:spr9cket | Subscription: Premium | Recurring date: | Status:Premium for Family',
'ljcawesome@gmail.com:pegasus5 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'Sarahstowne@gmail.com:karmadog1 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'brandi1foster@gmail.com:faith2me | Subscription: Premium | Recurring date: | Status:Premium for Family',
'kpacor@gmail.com:skooks82 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'brandon.visser@gmail.com:qwdfas34 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'trcavanah@gmail.com:Travel101 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'alexei47@gmail.com:pingu103 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'jlmcculloch@gmail.com:061282 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'kwellis75@gmail.com:ciena123 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'texassoutherngirl@gmail.com:5379919g | Subscription: Premium | Recurring date: | Status:Premium for Family',
'lucasfrancolima@gmail.com:ll1123581321 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'cnarna@gmail.com:cnarna | Subscription: Premium | Recurring date: | Status:Premium for Family',
'javier.granifo@gmail.com:javier1734 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'itbsemp@gmail.com:bas2002 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'josh.reid089@gmail.com:prisonpod | Subscription: Premium | Recurring date: | Status:Premium for Family',
'onkelola89@gmail.com:gudrun76 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'Skidmorespeech@gmail.com:skiddles | Subscription: Premium | Recurring date: | Status:Premium for Family',
'togjones@gmail.com:timnp2008 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'summers.stephanie32@gmail.com:damian32 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'lindsey.rearic@gmail.com:hogwarts3 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'tadbliss@gmail.com:thaddeus | Subscription: Premium | Recurring date: | Status:Premium for Family',
'jpaterno01@gmail.com:river21 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'njsolaun@gmail.com:jose7117 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'imelia2000@gmail.com:2badtz22 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'ejo.duffek@gmail.com:Pago6378 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'melanie467@gmail.com:mnbvcxz | Subscription: Premium | Recurring date: | Status:Premium for Family',
'blackhawksfan725@gmail.com:pinhead11 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'secamps1@gmail.com:taylor11 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'kagarrison@gmail.com:savannah | Subscription: Premium | Recurring date: | Status:Premium for Family',
'rickst02@gmail.com:bunnyks11 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'bice.tiffany@gmail.com:uscc0cks | Subscription: Premium | Recurring date: | Status:Premium for Family',
'neeleytanner@gmail.com:mustang | Subscription: Premium | Recurring date: | Status:Premium for Family',
'sosek108@gmail.com:1fqra4 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'hectorotero123@gmail.com:supersk73 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'jmlittle82@gmail.com:Leedee123 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'meins131@gmail.com:beni1999 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'nandoskn@gmail.com:joaQu1na | Subscription: Premium | Recurring date: | Status:Premium for Family',
'diegogalcantara@gmail.com:diegoa88 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'bridgetdadams@gmail.com:1bridget | Subscription: Premium | Recurring date: | Status:Premium for Family',
'bob.barrett@gmail.com:honeykim | Subscription: Premium | Recurring date: | Status:Premium for Family',
'diego.pinaka@gmail.com:promo2010 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'jojosjoy@gmail.com:mslg1020 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'knhenry10@gmail.com:Kh122585 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'melissa.labadie.ot@gmail.com:gabriel1 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'paulandemilyharris@gmail.com:SWEET18 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'GPGilbert@gmail.com:almaone1 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'karen.j.rios@gmail.com:rios4649 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'nickyt512@gmail.com:abbey0812 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'iamsupernerdwheeler@gmail.com:treetree | Subscription: Premium | Recurring date: | Status:Premium for Family',
'shawn.huenefeldt@gmail.com:easy123 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'nrjaster@gmail.com:bbaggins | Subscription: Premium | Recurring date: | Status:Premium for Family',
'sebasmontes11@gmail.com:felix25 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'hirdagor@gmail.com:36573657 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'tngo8190@gmail.com:mdrxd100 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'atfischer28@gmail.com:jackwhite3 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'jhembree8452@gmail.com:1q2w3e4r | Subscription: Premium | Recurring date: | Status:Premium for Family',
'otwmacgyver@gmail.com:porter2455 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'guilhermeconversani@gmail.com:asd741 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'marina.daumas@gmail.com:87778997 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'stephen.w.more@gmail.com:luckylab | Subscription: Premium | Recurring date: | Status:Premium for Family',
'eschrier2@gmail.com:blue4848 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'cbotha20@gmail.com:Manutd11 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'choirgeek2@gmail.com:gumzer | Subscription: Premium | Recurring date: | Status:Premium for Family',
'kevin.m.therrien.2000@gmail.com:CookieDough1 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'flarback@gmail.com:1femton5 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'cmrueff@gmail.com:Ta3kw0nd0 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'samuel.e.morris@gmail.com:rougesam | Subscription: Premium | Recurring date: | Status:Premium for Family',
'leahpaige219@gmail.com:cupcake33 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'joanievc@gmail.com:brubro1210 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'jazzbassjesse@gmail.com:IOU1K9 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'bondlouis@gmail.com:6c6d6862 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'dirk.spierings98@gmail.com:QWErty123 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'Felix.telvik@gmail.com:shadows4 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'Caxale@gmail.com:magic2004 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'dextarspam@gmail.com:fuckoff | Subscription: Premium | Recurring date: | Status:Premium for Family',
'ejlanfear@gmail.com:fudgie03 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'gonzaloruiz106@yahoo.es:cris1301 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'rfguijosa@yahoo.es:pollito26 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'lucas.domenech@yahoo.es:pato1997 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'las_cumbres@hotmail.es:12358132134 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'joan_gonsales@hotmail.es:rhcp13 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'jpdafonsecca@yahoo.com.br:1q2w3e4r | Subscription: Premium | Recurring date: | Status:Premium for Family',
'nikkihughes04@aol.com:bailey | Subscription: Premium | Recurring date: | Status:Premium for Family',
'cuddleykitty@aol.com:michael11 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'waselewskij@aol.com:fred7627 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'amanda4389@aol.com:gbfs4ever | Subscription: Premium | Recurring date: | Status:Premium for Family',
'cheri73@aol.com:crCS2012 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'jj.wolff@aol.com:dragon2000 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'Karmiew@aol.com:bobby56 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'vicadrian@aol.com:adrian87 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'Kam1026hall@aol.com:EmmaG616 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'slsham97@aol.com:cherry | Subscription: Premium | Recurring date: | Status:Premium for Family',
'camnica@aol.com:randy3310 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'nervesrbad@aol.com:palmtree55 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'dicenzog@aol.com:gasser | Subscription: Premium | Recurring date: | Status:Premium for Family',
'slepnir71@aol.com:travis13 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'mlr3887@aol.com:brown3507 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'courtneysharma@aol.com:harris00 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'fabmart3@hotmail.com:dirtyweaz75 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'aurora.firstlight@gmail.com:otpbdh2001 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'firefightinboy21@aol.com:mdw1187jr | Subscription: Premium | Recurring date: | Status:Premium for Family',
'gml0330@gmail.com:arab1dom | Subscription: Premium | Recurring date: | Status:Premium for Family',
'hansson88@hotmail.com:m3j7ve | Subscription: Premium | Recurring date: | Status:Premium for Family',
'yayo_sq@hotmail.com:yayo4444 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'etienne.athea@gmail.com:cayousse | Subscription: Premium | Recurring date: | Status:Premium for Family',
'sightwithoutjudgement@yahoo.com:Stephen1990 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'rita.zaaliite@gmail.com:r1i9t8a8 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'ljhead93@yahoo.com:nita0106 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'pkannel@yahoo.com:dannydog1 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'shannaharms@yahoo.com:gabriel303 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'sjtaylor1@yahoo.com:SpYro9411 | Subscription: Premium | Recurring date: | Status:Premium for Family',
'millsthomasm@yahoo.com:Off2ndr | Subscription: Premium | Recurring date: | Status:Premium for Family',
'knight444166@hotmail.com:46986414 | Subscription: Premium | Recurring date: | Status:Premium for Family',]
    
    let e = []

    let f = []
 

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
       embed = new discord.RichEmbed ()
       .setDescription (`You Have To Wait ${time} Seconds Before Using This Command Again, ${user.tag}`)
       .setColor ("FF00FF")
       message.channel.send (embed);
      }      

      function skanherooo(user, time) {
        coolguy.add(user);
        setTimeout(() => coolguy.delete(user), time * 1000);
       embed = new discord.RichEmbed ()
       .setDescription (`You Have To Wait ${time} Seconds Before Using This Command Again, ${user.tag}`)
       .setColor ("FF00FF")
       message.channel.send (embed);
      }      
  
function clusive(user, time) {
        coolguys.add(user);
        setTimeout(() => coolguys.delete(user), time * 1000);
       embed = new discord.RichEmbed ()
       .setDescription (`You Have To Wait ${time} Seconds Before Using This Command Again, ${user.tag}`)
       .setColor ("FF00FF")
       message.channel.send (embed);
      }      

  function clusives(user, time) {
        cooldude.add(user);
        setTimeout(() => cooldude.delete(user), time * 1000);
       embed = new discord.RichEmbed ()
       .setDescription (`You Have To Wait ${time} Seconds Before Using This Command Again, ${user.tag}`)
       .setColor ("FF00FF")
       message.channel.send (embed);
      }      
  
    function skan(user, time) {
        cooldude.add(user);
        setTimeout(() => cooldudes.delete(user), time * 1000);
       embed = new discord.RichEmbed ()
       .setDescription (`You Have To Wait ${time} Seconds Before Using This Command Again, ${user.tag}`)
       .setColor ("FF00FF")
       message.channel.send (embed);
      }      
  
      function skanhero(user, time) {
        cooldude.add(user);
        setTimeout(() => coolbro.delete(user), time * 1000);
       embed = new discord.RichEmbed ()
       .setDescription (`You Have To Wait ${time} Seconds Before Using This Command Again, ${user.tag}`)
       .setColor ("FF00FF")
       message.channel.send (embed);
      }      
  
    if (msg.startsWith (prefix + "hello")) {
        message.reply ("Hi!");
    }
  
      if (msg.startsWith("+stock")) {
        embed = new discord.RichEmbed ()
        .setAuthor("Accounts That Are In Stock")
        .setDescription("__**Fortnite**__: Will Be Restocking Soon \n __**Spotify**__: 400")
        .setFooter("We Will Be Adding Accounts Everyday!")
        .setColor("#FF00FF")
        message.channel.send(embed);
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

        if (message.content.startsWith ("+gen fortnite") && message.member.hasPermission ("VIEW_AUDIT_LOG")) {
            if (message.channel.id !== '551484524941410334') return
            if (message.author.bot || coolguy.has(message.author)) return
            mention.send('**Your Fortnite Account Is: **' + a[Math.floor(Math.random() * 34)])
            embed = new discord.RichEmbed ()
            .setDescription ("I Have Successfully Sent You The Fortnite Account ! Please Check Your DMs:thumbup:")
            .setColor ("#FF00FF")
            message.channel.send(embed);
          skanherooo(message.author, 300);
        }
  
              if (message.content.startsWith ("+pgen fortnite") && message.member.hasPermission ("USE_EXTERNAL_EMOJIS")) {
                if (message.channel.id !== '551484526262747144') return
                if (message.author.bot || cooldowns.has(message.author)) return
                mention.send('**Your Premuim Fortnite Account Is: **' + b[Math.floor(Math.random() * 40)])
                embed = new discord.RichEmbed ()
                    .setDescription ("I Have Successfully Sent You The Premuim Fortnite Account ! Please Check Your DMs:thumbup:")
                    .setColor ("#FF00FF")
                    message.channel.send(embed);
              cooldown(message.author, 180);
                } 
  
            if (message.content.startsWith ("+gen spotify") && message.member.hasPermission ("VIEW_AUDIT_LOG")) {
            if (message.channel.id !== '551484524941410334') return
            if (message.author.bot || coolguys.has(message.author)) return
            mention.send('**Your Spotify Account Is: **' + c[Math.floor(Math.random() * 100)])
            embed = new discord.RichEmbed ()
            .setDescription ("I Have Successfully Sent You The Spotify Account ! Please Check Your DMs:thumbup:")
            .setColor ("#FF00FF")
            message.channel.send(embed);
          clusive(message.author, 300);
            }

                if (message.content.startsWith ("+pgen spotify") && message.member.hasPermission ("USE_EXTERNAL_EMOJIS")) {
                if (message.channel.id !== '551484526262747144') return
                if (message.author.bot || cooldude.has(message.author)) return
                mention.send('**Your Premuim Spotify Account Is: **' + d[Math.floor(Math.random() * 200)])
                embed = new discord.RichEmbed ()
                    .setDescription ("I Have Successfully Sent You The Premuim Spotify Account ! Please Check Your DMs:thumbup:")
                    .setColor ("#FF00FF")
                    message.channel.send(embed);
              clusives(message.author, 180);
                } 

            if (message.content.startsWith ("+gen origin") && message.member.hasPermission ("VIEW_AUDIT_LOG")) {
            if (message.channel.id !== '551484524941410334') return
            if (message.author.bot || cooldudes.has(message.author)) return
            mention.send('**Your Origin Account Is: **' + e[Math.floor(Math.random() * 100)])
            embed = new discord.RichEmbed ()
            .setDescription ("I Have Successfully Sent You The Spotify Account ! Please Check Your DMs:thumbup:")
            .setColor ("#FF00FF")
            message.channel.send(embed);
          skan(message.author, 300);
            }

                if (message.content.startsWith ("+pgen origin") && message.member.hasPermission ("USE_EXTERNAL_EMOJIS")) {
                if (message.channel.id !== '551484526262747144') return
                if (message.author.bot || coolbro.has(message.author)) return
                mention.send('**Your Premuim Origin Account Is: **' + f[Math.floor(Math.random() * 200)])
                embed = new discord.RichEmbed ()
                    .setDescription ("I Have Successfully Sent You The Premuim Spotify Account ! Please Check Your DMs:thumbup:")
                    .setColor ("#FF00FF")
                    message.channel.send(embed);
              skanhero(message.author, 180);
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
