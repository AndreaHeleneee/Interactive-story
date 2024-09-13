export let newStory = [
    //0 Missionen
    {
      header: "Missionen",
      imgUrl: "Missionen.jpg",
      description: "Du er på en tophemmelig mission. PET har for nylig fået nys om at nogen vil prøve at stjæle kronjuvelerne fra Rosenborg i aften! Derfor har de hyret dig for at prøve at forhindre røveriet. Det første du må gøre, er at komme fra DMJX hen til Rosenborg, men hvordan?",
      choices: [
        {text: "Tag metroen", nextState: 1},
        {text: "Snup cyklen", nextState: 2},
        {text: "Nup bilen", nextState: 3}],
    },
    //1 Metroen
    {
      header: "Metroen",
      imgUrl: "Rosenborg.jpg",
      description: "Du gik hen i metroen ved DR-byen, missede den første metro, da du skulle tanke dit rejsekort op, men nu er du godt på vej mod Nørreport. Du sætter høretelefonerne i ørene og læner dig tilbage i sædet. Da du når Nørreport går du mod Rosenborg i rask tempo. Du når Rosenborg, men hvordan kommer du ind uden at vække opsigt?",
      choices: [
        {text: "Køb billet", nextState: 4},
        {text: "Snig dig forbi vagterne", nextState: 5},
        {text: "Spørg vagterne", nextState: 6}]
    },
    //2 Cyklen
    {
      header: "Cyklen",
      imgUrl: "RosenborgCykel.jpg",
      description: "Du løber ned af trappen til din cykel og svinger dig i sadlen på vej mod indre by! Efter en hurtig cykeltur når du Rosenborg, men hvordan kommer du ind uden at vække opsigt?",
      choices: [
        {text: "Køb billet", nextState: 4},
        {text: "Snig dig forbi vagterne", nextState: 5},
        {text: "Spørg vagterne", nextState: 6}]
    },
    //3 Bilen
    {
      header: "Bilen",
      imgUrl: "Car.jpg",
      description: "Du sætter dig ind i bilen, men kommer pludselig i tanke om hvor svært det bliver at finde en parkeringsplads i indre by, for slet ikke at tale om hvad parkering koster derinde! Måske du hellere skulle vælge et andet transportmiddel...",
      choices: [
        {text: "Tag metroen", nextState: 1},
        {text: "Snup cyklen", nextState: 2},]
    },
    //4 Billetkøb
    {
      header: "Billetkøb",
      imgUrl: "døren.jpg",
      description: "Du køber en billet (med studierabat blev det kun 90 kr) og får adgang til slottet. Du går direkte mod skatkammeret, da du ved at det er der de har Kronjuvelerne. Men da du når til døren til skatkammeret er den låst! Du hiver i døren, men den giver sig slet ikke! Hvad gør du nu?",
      choices: [
        {text: "Spark døren op", nextState: 7},
        {text: "Forsøg at dirke låsen op", nextState: 8},
        {text: "Tilkald vagterne", nextState: 9}]
    },
    //5 Snigeren
    {
      header: "Snigeren",
      imgUrl: "sneak.jpg",
      description: "Du prøver at snige dig forbi vagterne, men de ser dig og råber dig an 'Halloo! Du skal altså have billet for at komme derind!'. Du må vist hellere bare købe en billet...",
      choices: [
        {text: "Køb billet", nextState: 4}]
    },
    //6 Forklaringen
    {
      header: "Forklaringen",
      imgUrl: "snakmvagt.jpg",
      description: "Du går hen til en vagt som ser venlig ud og prøver diskret at forklare at du kommer fra PET og faktisk har brug for at komme ind for at passe på Kronjuvelerne. Vagten fortæller at det har de altså styr på, men at de gerne giver dig adgang, så du kan se hvor sikre juvelerne er. Hm, vil du tage imod tilbuddet?",
      choices: [
        {text: "Tag imod vagtens tilbud", nextState: 10},
        {text: "Køb din egen billet", nextState: 4}]
    },
    //7 Sparket
    {
      header: "Sparket",
      imgUrl: "sparket.jpg",
      description: "Du sparker så hårdt du kan til døren, men den er urokkelig! Da du sparker til døren lyder der uroligheder på den anden side og du råber de skal lukke op med det samme! Det gør de selvfølgelig ikke, men hvad gør du så?",
      choices: [ 
        {text: "Forsøg at dirke låsen op", nextState: 8},
        {text: "Tilkald vagterne", nextState: 9}]
    },
    //8 Låsen
    {
      header: "Låsen",
      imgUrl: "lockpicking.jpg",
      description: "Du har øvet dig meget og efter kun to forsøg går låsen op med et lille klik. For at tyvene ikke skal se dig, skubber du langsomt døren op. De er travlt beskæftiget med at få fat i kronjuvelerne og ænser ikke du er kommet ind af døren. Hvad gør du?",
      choices: [
        {text: "Råb 'hænderne op eller bukserne ned!'", nextState: 11},
        {text: "Tilkald vagterne for assistance", nextState: 12}]
    },
    //9 Assistance
    {
      header: "Assistance",
      imgUrl: "Anholdelsen.jpg",
      description: "Du får hurtigt tilkaldt vagterne som har nøgler til døren. De låser den op og bag den står tyvene i fuld gang med at fylde deres tasker med de uvurderlige kronjuveler! I får hurtigt lagt dem alle ned og arresteret dem. Mega godt arbejde i dag! De siger tak og at du endelig må komme igen:)",
      choices: [
        {text: "Yayy, jeg gjorde det!", nextState: 14}]
    },
    //10 Tilbuddet
    {
      header: "Tilbuddet",
      imgUrl: "Dørenmvagt.jpg",
      description: "Du følges med vagten gennem slottet til skatkammeret, men da I når skatkammeret er døren låst! Vagten du følges med, har heldigvis en nøgle. Der står I så, ansigt til ansigt med tyvene, som er i fuld gang med at fylde taskerne. I kigger på hinanden, hvad gør i nu?",
      choices: [
      {text: "Tilkald assistance fra de andre vagter", nextState: 12},
      {text: "Anholde dem selv bare jer to", nextState: 13}]
    },
    //11 Anholdelsen
    {
      header: "Anholdelsen",
      imgUrl: "Anholdelsen.jpg",
      description: "'Hænderne op eller bukserne ned!' får du råbt. Tyvene vender sig om og kigger på dig. Du kunne godt have sagt noget sejere, men nu er det for sent. Vagterne har hørt uroen og kommer løbende, men takker dig for at stoppe tyvene inden de nåede væk. Godt arbejde! :)",
      choices: [
        {text: "Yayy, jeg gjorde det!", nextState: 14}]
    },
    //12 Vagtens vener
    {
      header: "Vagtens venner",
      imgUrl: "Anholdelsen.jpg",
      description: "Det er altid godt med assistance! I får tyvene anholdt sammen – de siger mange tak og at du endelig må komme igen en anden dag! :)",
      choices: [
        {text: "Yayy, jeg gjorde det!", nextState: 14}]
    },
    //13 Vi kan selv
    {
      header: "Vi kan selv!",
      imgUrl: "Anholdelsen.jpg",
      description: "'Stoopp!! - I er anholdt!' I får hurtigt indfanget tyvene, og som I giver den sidste håndjern på kommer de andre vagter løbende på grund af larmen - 'Wow! Virkelig godt arbejde venner!' siger de og klapper jer på ryggen. :)",
      choices: [
        {text: "Yayy, jeg gjorde det!", nextState: 14}]
    },
    // 14 En gang til?
    {
      header: "En gang til?",
      imgUrl: "Celebrating.jpg",
      description: "Yay! Super flot spillet! Vil du spille igen?",
      choices: [
        {text: "Ja! en gang til!", nextState: 15}]
    },
    // 15 Start
    {
        header: "Velkommen",
        imgUrl: "Velkommen.jpg",
        description: "Velkomment til 'Spillet om Kronjuvelerne'. Klik start for at begynde.",
        choices: [
          {text: "Start", nextState: 0}]
      }
  ]