/**
 * Article Content.
 *
 * At the beginnig of the file there is the article text.
 * In the sencond part of the file all steps (paragraphs) are defined.
 * Each step has the following variables:
 * id,
 * aalignment,
 * hidden,
 * title,
 * subtitle,
 * fly,                     Related to how the map should move to this location
 * ease,                    Like fly, but different kind of movement
 * neutral,                 Related to background. If there is a map in background, the chapter has a border
 * location: {},
 * locationMobile: {},
 * bounds: [],              Related to location, used for Desktop
 * callback: '',
 * onChapterEnter: [],      Map layers that need to change of opacity when entering/exiting the chaptes
 * onChapterExit: []
 *
 */
var titolo = 'USA 2020: dalla Georgia passa il controllo del Senato';
var sottotitolo = 'Il voto del 5 gennaio deciderà il controllo del Congresso nei primi due anni della presidenza Biden.';
var intro = 'Mentre l’inauguration day del 20 gennaio si avvicina con non poche difficoltà, tutti gli occhi del mondo e dell’establishment politico americano sono puntati sui ballottaggi per il Senato in programma il prossimo 5 gennaio in Georgia. Un secondo turno che potrebbe assegnare la maggioranza ai democratici (maggioranza che manca dal 2014) o confermare il controllo repubblicano della camera alta del Congresso. Al momento, infatti, i repubblicani avrebbero 50 seggi su 100 e i democratici 48: ai primi basterebbe aggiudicarsi uno solo dei due ballottaggi in Georgia per conservare il controllo del Senato, mentre i secondi dovrebbero vincerli entrambi, finendo 50 e 50 e lasciando i voti decisivi a Kamala Harris, che in qualità di vicepresidente degli Stati Uniti sarà di diritto presidente del Senato con possibilità di voto solo in caso di parità.';
var titolo_Presentazione_Per_Oss = 'Corsa per il mandato intero';
var Presentazione_Per_Oss = 'La prima delle due sfide vede scontrarsi il giornalista Jon Ossoff, già protagonista di un’epica elezione speciale per il sesto distretto della Camera nel 2017, e il senatore in carica David Perdue, noto imprenditore appartenente a un’importante dinastia politica (il Segretario dell’Agricoltura uscente, Sonny Perdue, è cugino di primo grado del senatore). Chi si aggiudicherà il seggio rimarrà in carica sei anni.';
var Risultati_Per_Oss = 'Al primo turno, tenutosi in contemporanea alle elezioni presidenziali, Ossoff ha rimontato grazie ai voti postali scrutinati dopo il 3 novembre, portando Perdue sotto la fatidica soglia del 50% e costringendolo al ballottaggio.';
var titolo_Presentazione_Loe_War = 'Elezione speciale';
var Presentazione_Loe_War = 'Nell’altra competizione prevista martedì, la senatrice repubblicana Kelly Loeffler, nominata dal governatore Kemp per sostituire l’uscente Johnny Isakson, affronterà il pastore afroamericano Raphael Warnock, che ha ottenuto il 33% nel primo turno. Si tratta di elezioni speciali, ovvero convocate in via del tutto eccezionale dopo il ritiro del senatore Isakson. In questo caso, il mandato dura solo due anni.';
var Risultati_Loe_war = 'Come per la prima sfida, nel primo turno si è tenuta una jungle primary, cioè un’elezione aperta a tutti, perfino a più candidati dello stesso partito. A tallonare Loeffler infatti c’era il deputato Doug Collins, che ha tolto parecchi voti alla senatrice, dividendo il consenso repubblicano, e ha permesso a Warnock di ottenere tranquillamente la maggioranza relativa.';
var titolo_Atlanta_res_oss = 'L\'importanza di Atlanta';
var Atlanta_res_oss = 'La città di Atlanta, capitale politica ed economica della Georgia, si è rivelata il cuore pulsante dei democratici alle ultime elezioni. Nei suburbs, le aree più lontane dal centro, Ossoff ha conquistato i voti che gli hanno consentito di raggiungere la percentuale di voti necessaria per andare al ballottaggio.';
var Atlanta_res_war = 'Anche per Warnock il risultato nell’area metropolitana di Atlanta è stato un successo, grazie al sostegno in blocco degli afroamericani che vivono in quelle zone.';
var titolo_Savannah_res_oss = 'Savannah: a casa di MLK';
var Savannah_res_oss = 'Nella parte sud-orientale dello Stato è presente un altro fortino democratico: Savannah. In questa città, la cui composizione demografica eterogenea favorisce i democratici, Ossoff ha tenuto diversi comizi da inizio novembre a oggi e ora punta parecchio sull’alta affluenza.';
var Savannah_res_war = 'Nativo di Savannah è il reverendo Warnock, già pastore della storica Ebenezer Baptist Church, la stessa dove predicava Martin Luther King. Warnock è quindi un simbolo per gli afroamericani di Savannah, che rappresentano il 55% della popolazione che vive nella città.';
var titolo_Risultati_Biden_Oss = 'Dove è andato meglio Biden';
var Risultati_Biden_Oss = 'In numerose contee il senatore democratico Ossoff ha ottenuto meno voti del candidato alla presidenza dello stesso partito. Questo indica che ci sono stati elettori che hanno votato per Joe Biden alla presidenza ma nell’elezione per il Senato hanno votato il GOP o si sono astenuti.';
var gwinnett = 'Alcune contee sono più importanti di altre per quanto riguarda la campagna elettorale. Una di queste è la contea di Gwinnett, sobborgo nord-orientale di Atlanta, che è passata da essere una roccaforte repubblicana (nel 2004 George W. Bush vi ottenne il 65%) a uno dei collegi più swing di tutta quanta la Georgia. In questa contea la maggioranza della popolazione è composta da bianchi, un elettorato decisivo per la vittoria democratica non solo in Georgia ma anche in molti altri Stati, dove la mediocre prestazione tra le minoranze è stata controbilanciata da un sorprendente risultato tra i bianchi.';
var titolo_strategia = 'La strategia dei candidati';
var strategia = 'Per Perdue e Loeffler convincere tutti i repubblicani a recarsi alle urne potrebbe essere la chiave per la vittoria, mentre espandere l’elettorato del primo turno sarà la massima priorità di Ossoff e Warnock. Quest’ultimo, in particolare, ha adottato una strategia comunicativa piuttosto mirata, con l’obiettivo di parlare agli elettori bianchi che non si fidavano del suo passato da pastore in una Black Church. La sua avversaria Kelly Loeffler ha infatti definito la candidatura di Warnock radicale, costringendolo a registrare spot come questo qui.';
var strategia_2 = 'Registro e tattiche diverse quelle di Ossoff e Perdue, che conducono da mesi un botta e risposta sull’operato del senatore repubblicano. Perdue si è trovato sotto indagine federale per aver sfruttato la conoscenza di alcune informazioni riservate sul COVID-19 così da poter tutelare la sua posizione in borsa prima dello scoppio della pandemia. Durante l’unico dibattito di ottobre tra i due candidati, Ossoff l’ha chiamato “corrotto” e da quel momento Perdue si è rifiutato di partecipare ad ulteriori confronti.';
var titolo_soldi = 'I soldi spesi finora in questa campagna elettorale';
var soldi = 'Nonostante i due repubblicani stiano giocando in difesa, i fondi raccolti da entrambe le campagne dimostrano che la posta in palio non è semplicemente un mandato per il seggio di uno Stato del sud: i democratici hanno raccolto centinaia di milioni di dollari grazie agli sforzi del Partito Democratico, mentre i repubblicani stanno spendendo altrettanti milioni messi a disposizione dalle donazioni individuali di importanti finanziatori conservatori, pronti a tutto pur di mantenere il Congresso a guida repubblicana.';
var titoloEv = 'Come stanno votando gli elettori';
var ev1 = 'Il tallone d’Achille dei repubblicani alle ultime elezioni è stato il voto anticipato, soprattutto quello postale, dominato dai democratici. Gli ultimi dati ufficiali sorridono ai dem: più di 3 milioni di persone hanno già votato, pari al 70% degli elettori del primo turno.';
var ev2 = 'Analizzando la suddivisione etnica del voto anticipato, si nota che il 31% degli afroamericani ha già votato: si tratta di un aumento del 4% rispetto a novembre che accresce le speranze dei democratici, convinti di avere un sostegno monolitico tra i neri.';
var ev3 = 'I repubblicani avranno bisogno di un forte risultato il giorno delle elezioni per ribaltare il trend dell’early voting. Al primo turno, il 21% degli elettori ha votato all’election day, dando inizialmente l’illusione di poter tamponare l’onda blu del voto anticipato. Secondo le stime più recenti, il 5 gennaio voterà di persona in media il 10% dell’elettorato totale, una cifra che potrebbe non essere sufficiente per il GOP, ma che dipenderà solamente dall’affluenza degli elettori repubblicani.';
var titolo_sondaggi = 'Cosa dicono i sondaggi';
var sondaggi1 = 'Le ultime tendenze sui ballottaggi mostrano uno scenario in equilibrio: la media di FiveThirtyEight assegna vantaggi pienamente nel margine d’errore. Alcuni sondaggi, come quello condotto dall’analista John Couvillon con un crowdfunding indipendente su Twitter, danno i democratici in vantaggio in entrambe le sfide con un vantaggio che si avvicinerebbe addirittura alla doppia cifra.';
var sondaggi2 = 'Gli istituti più dalla parte del GOP, invece, riducono di molto il divario tra i candidati, ma assegnano comunque la vittoria ai democratici. L’ultima rilevazione del Trafalgar Group vede Ossoff davanti a Perdue di quasi tre punti e Warnock in vantaggio su Loeffler di quasi un punto percentuale.';
var titolo_chiVince = 'Chi vincerà';
var chiVince = 'Dopo aver commesso degli errori - in alcuni casi anche gravi - alle presidenziali, molti sondaggisti sono restii ad analizzare le intenzioni di voto dei ballottaggi in Georgia. Lo stato della corsa è apparso incerto dal primo momento e l’esito finale in uno Stato così diviso sarà influenzato esclusivamente dalla motivazione a votare di uno dei due schieramenti e dalla loro consapevolezza delle conseguenze che i risultati di queste elezioni avranno sugli scenari politici nazionali.';

var durationStandard = 500;
var durationSlow = 2000;

var config = {
    mapbox_style: 'mapbox://styles/mapbox/light-v10',
    style: {
      version: 8,
      sources: {},
      "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
      layers: [
        {
          id: 'background',
          type: 'background',
          paint: {
            'background-color': '#ffffff'
          }
        }
      ]
    },
    accessToken: '### Insert your token here ###',
    theme: 'light',
    chapters: [

        // titolo
        {
            id: 'titolo',
            alignment: 'center',
            hidden: false,
            title: 'USA 2020: Georgia al ballottaggio',
            title: titolo,
            subtitle: sottotitolo,
            description: 'di <a href="https://www.youtrend.it/author/gianluca-lo-nostro/">Gianluca Lo Nostro</a>, <a href="https://www.youtrend.it/author/giacomo-migliore/"">Giacomo Migliore</a>     3 Gennaio 2020',
            fly: false,
            ease: false,
            neutral: false,
            location: {
              center: [-84.49322, 33.76261],
              zoom: 8.84,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-84.78322, 33.7261],
              zoom: 8,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-83.31559840175815, 34.02942820256429],
    						[-85.67084159824071, 33.49495857476701]
            ],
            callback: '',
            onChapterEnter: [
              {
                  layer: 'precinct-fill_War_MOV',
                  opacity: 0.2
              }
            ],
            onChapterExit: [
              {
                  layer: 'precinct-fill_War_MOV',
                  opacity: 0,
                  duration: durationStandard
              }
            ]
        },

        // Intro senato
        {
            id: 'Senato_in_bilico',
            alignment: 'center',
            newStyle: true,
            hidden: false,
            title: '',
            description: intro,
            fly: true,
            ease: false,
            neutral: true,
            location: { // neutro
              center: [-75.67516, -16.30107],
              zoom: 3,
              pitch: 0.00,
              bearing: -0.00
            },
            locationMobile: {
              center: [-75.67516, -16.30107],
              zoom: 3,
              pitch: 0.00,
              bearing: -0.00
            },
            bounds: [
    						[-120, 0],
    						[-30, -40]
            ],
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        // Oss Per
        {
            id: 'Presentazione_Per_Oss',
            alignment: 'center',
            hidden: false,
            title: titolo_Presentazione_Per_Oss,
            flourish: 'visualisation/4694424',
            description: Presentazione_Per_Oss,
            fly: false,
            neutral: true,
            location: {
              center: [-83.14641, 32.80140],
              zoom: 6.6,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-83.44111, 32.75509],
              zoom: 5,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-77.583360138145, 35.710537054448054],
    						[-88.70945986185588, 30.325169393359175]
            ],
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        // Risultati primo turno Oss
        {
            id: 'Risultati_Per_Oss',
            alignment: 'center',
            hidden: false,
            title: '',
            description: Risultati_Per_Oss,
            fly: false,
            ease: false,
            neutral: false,
            location: {
              center: [-83.14641, 32.80140],
              zoom: 6.6,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-83.44111, 32.75509],
              zoom: 5,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-77.583360138145, 35.710537054448054],
    						[-88.70945986185588, 30.325169393359175]
            ],
            callback: '',
            onChapterEnter: [
              {
                  layer: 'county-fill_Oss_MOV',
                  opacity: 0.9,
                  duration: durationStandard
              },{
                  layer: 'precinct-fill_War_MOV',
                  opacity: 0
              },{
                  layer: 'precinct-fill_Oss_MOV',
                  opacity: 0
              },{
                  layer: 'county-fill_War_MOV',
                  opacity: 0
              },{
                  layer: 'Diff_Biden_Oss',
                  opacity: 0
              },{
                  layer: 'atl-line',
                  opacity: 0
              },{
                  layer: 'sav-line',
                  opacity: 0
              },{
                  layer: 'precinct-fill_DEK_GW',
                  opacity: 0
              }
            ],
            onChapterExit: [
                {
                    layer: 'county-fill_Oss_MOV',
                    opacity: 0,
                    duration: durationStandard
                }
            ]
        },

        // Loe War
        {
            id: 'Presentazione_Loe_War',
            alignment: 'center',
            hidden: false,
            title: titolo_Presentazione_Loe_War,
            flourish: 'visualisation/4694444',
            description: Presentazione_Loe_War,
            fly: false,
            ease: false,
            neutral: true,
            location: {
              center: [-83.14641, 32.80140],
              zoom: 6.6,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-83.44111, 32.75509],
              zoom: 5,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-77.583360138145, 35.710537054448054],
    						[-88.70945986185588, 30.325169393359175]
            ],
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        // Risultati primo turno War
        {
            id: 'Risultati_Loe_war',
            alignment: 'center',
            hidden: false,
            fly: false,
            ease: false,
            description: Risultati_Loe_war,
            neutral: false,
            location: {
              center: [-83.14641, 32.80140],
              zoom: 6.6,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-83.44111, 32.75509],
              zoom: 5,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-77.583360138145, 35.710537054448054],
    						[-88.70945986185588, 30.325169393359175]
            ],
            callback: '',
            onChapterEnter: [
              {
                  layer: 'county-fill_War_MOV',
                  opacity: 0.9,
                  duration: durationStandard
              }
            ],
            onChapterExit: [
                {
                    layer: 'county-fill_War_MOV',
                    opacity: 0,
                    duration: durationStandard
                }
            ]
        },

        // Atlanta_res_oss
        {
            id: 'Atlanta_res_oss',
            alignment: 'center',
            hidden: false,
            title: titolo_Atlanta_res_oss,
            description: Atlanta_res_oss,
            fly: true,
            ease: false,
            location: {
              center: [-84.49322, 33.76261],
              zoom: 8.84,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-84.28322, 33.7261],
              zoom: 8,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-83.31559840175815, 34.02942820256429],
    						[-85.67084159824071, 33.49495857476701]
            ],
            callback: '',
            onChapterEnter: [
              {
                  layer: 'precinct-fill_Oss_MOV',
                  opacity: 1,
                  duration: durationStandard
              }
            ],
            onChapterExit: [
              {
                  layer: 'precinct-fill_Oss_MOV',
                  opacity: 0,
                  duration: durationSlow
              }
            ]
        },

        // Atlanta_res_war
        {
            id: 'Atlanta_res_war',
            alignment: 'center',
            hidden: false,
            description: Atlanta_res_war,
            fly: true,
            ease: true,
            location: {
              center: [-84.29322, 33.76261],
              zoom: 8.84,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-84.28322, 33.7261],
              zoom: 8,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-83.31559840175815, 34.02942820256429],
    						[-85.67084159824071, 33.49495857476701]
            ],
            callback: '',
            onChapterEnter: [
              {
                  layer: 'precinct-fill_War_MOV',
                  opacity: 1,
                  duration: durationSlow
              },{
                  layer: 'atl-line',
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'precinct-fill_War_MOV',
                  opacity: 0,
                  duration: durationSlow
              },{
                  layer: 'atl-line',
                  opacity: 0
              }
            ]
        },

        // Savannah_res_oss
        {
            id: 'Savannah_res_oss',
            alignment: 'center',
            hidden: false,
            title: titolo_Savannah_res_oss,
            description: Savannah_res_oss,
            fly: false,
            ease: true,
            location: {
              center: [-81.98215, 31.69166],
              zoom: 8.54,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-81.05883, 32.07626],
              zoom: 8.54,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-80.5323277482913, 32.02778621658307],
    						[-83.4319722517094, 31.35431189510585]
            ],
            callback: '',
            onChapterEnter: [
              {
                  layer: 'precinct-fill_Oss_MOV',
                  opacity: 1,
                  duration: durationSlow
              },{
                  layer: 'sav-line',
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'precinct-fill_Oss_MOV',
                  opacity: 0,
                  duration: durationSlow
              }
            ]
        },

        // Savannah_res_war
        {
            id: 'Savannah_res_war',
            alignment: 'center',
            hidden: false,
            description: Savannah_res_war,
            fly: true,
            ease: false,
            location: {
              center: [-81.98215, 31.69166],
              zoom: 8.54,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-81.05883, 32.07626],
              zoom: 8.54,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
              [-80.5323277482913, 32.02778621658307],
              [-83.4319722517094, 31.35431189510585]
            ],
            callback: '',
            onChapterEnter: [
              {
                  layer: 'precinct-fill_War_MOV',
                  opacity: 1,
                  duration: durationSlow
              },{
                  layer: 'sav-line',
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'precinct-fill_War_MOV',
                  opacity: 0,
                  duration: durationStandard * 2
              },{
                  layer: 'sav-line',
                  opacity: 0
              }
            ]
        },

        // Risultati_Biden_Oss
        {
            id: 'Risultati_Biden_Oss',
            alignment: 'center',
            hidden: false,
            title: titolo_Risultati_Biden_Oss,
            description: Risultati_Biden_Oss,
            fly: true,
            ease: false,
            location: {
              center: [-83.14641, 32.80140],
              zoom: 6.6,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-83.44111, 32.75509],
              zoom: 5,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-77.583360138145, 35.710537054448054],
    						[-88.70945986185588, 30.325169393359175]
            ],
            callback: '',
            onChapterEnter: [
              {
                  layer: 'Diff_Biden_Oss',
                  opacity: 0.8,
                  duration: durationStandard
              }
            ],
            onChapterExit: [
              {
                  layer: 'Diff_Biden_Oss',
                  opacity: 0,
                  duration: durationStandard
              }
            ]
        },

        // gwinnett
        {
            id: 'gwinnett',
            alignment: 'center',
            hidden: false,
            title: titolo_strategia,
            description: gwinnett,
            fly: true,
            ease: false,
            neutral: false,
            location: {
              center: [-84.49322, 33.76261],
              zoom: 8.84,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-84.28322, 33.7261],
              zoom: 8,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-83.31559840175815, 34.02942820256429],
    						[-85.67084159824071, 33.49495857476701]
            ],
            callback: '',
            onChapterEnter: [
              {
                  layer: 'county-fill_War_MOV',
                  opacity: 0.2
              },{
                  layer: 'precinct-fill_DEK_GW',
                  opacity: 1,
                  duration: durationStandard
              }
            ],
            onChapterExit: [
              {
                  layer: 'county-fill_War_MOV',
                  opacity: 0
              },{
                  layer: 'precinct-fill_DEK_GW',
                  opacity: 0,
                  duration: durationStandard
              }
            ]
        },

        // strategia
        {
            id: 'strategia',
            alignment: 'center',
            hidden: false,
            description: strategia,
            fly: true,
            ease: false,
            neutral: true,
            location: {
              center: [-83.14641, 32.80140],
              zoom: 6.6,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-83.44111, 32.75509],
              zoom: 5,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-77.583360138145, 35.710537054448054],
    						[-88.70945986185588, 30.325169393359175]
            ],
            callback: '',
            onChapterEnter: [
              {
                  layer: 'county-fill_War_MOV',
                  opacity: 0
              },{
                  layer: 'precinct-fill_DEK_GW',
                  opacity: 0,
                  duration: durationStandard
              }
            ],
            onChapterExit: []
        },

        // strategia2
        {
            id: 'strategia2',
            alignment: 'center',
            hidden: false,
            description: strategia_2,
            fly: true,
            ease: false,
            neutral: true,
            location: {
              center: [-83.14641, 32.80140],
              zoom: 6.6,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-83.44111, 32.75509],
              zoom: 5,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-77.583360138145, 35.710537054448054],
    						[-88.70945986185588, 30.325169393359175]
            ],
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        // soldi
        {
            id: 'soldi',
            alignment: 'center',
            hidden: false,
            title: titolo_soldi,
            description: soldi,
            fly: true,
            ease: false,
            neutral: true,
            location: {
              center: [-83.14641, 32.80140],
              zoom: 6.6,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-83.44111, 32.75509],
              zoom: 5,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-77.583360138145, 35.710537054448054],
    						[-88.70945986185588, 30.325169393359175]
            ],
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        // Early voting grafico a linee
        {
            id: 'Early_voting',
            alignment: 'center',
            hidden: false,
            title: titoloEv,
            description: ev1,
            fly: false,
            ease: false,
            neutral: true,
            location: {
              center: [-83.14641, 32.80140],
              zoom: 6.6,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-83.44111, 32.75509],
              zoom: 5,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-77.583360138145, 35.710537054448054],
    						[-88.70945986185588, 30.325169393359175]
            ],
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        // Early voting tabella
        {
            id: 'Early_voting2',
            alignment: 'center',
            hidden: false,
            description: ev2 + ev3,
            fly: false,
            ease: false,
            neutral: true,
            location: {
              center: [-83.14641, 32.80140],
              zoom: 6.6,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-83.44111, 32.75509],
              zoom: 5,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-77.583360138145, 35.710537054448054],
    						[-88.70945986185588, 30.325169393359175]
            ],
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        // Sondaggi
        {
            id: 'sondaggi',
            alignment: 'center',
            hidden: false,
            title: titolo_sondaggi,
            description: sondaggi1,
            image: "https://www.youtrend.it/wp-content/uploads/2021/01/GAPolls.png",
            imageMobile: "https://www.youtrend.it/wp-content/uploads/2021/01/GAPollsMobile.png",
            fly: false,
            ease: false,
            neutral: true,
            location: {
              center: [-83.14641, 32.80140],
              zoom: 6.6,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-83.44111, 32.75509],
              zoom: 5,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-77.583360138145, 35.710537054448054],
    						[-88.70945986185588, 30.325169393359175]
            ],
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        // Sondaggi2
        {
            id: 'sondaggi2',
            alignment: 'center',
            hidden: false,
            description: sondaggi2,
            image: "https://www.youtrend.it/wp-content/uploads/2021/01/Trafal.jpeg",
            fly: false,
            ease: false,
            neutral: true,
            location: {
              center: [-83.14641, 32.80140],
              zoom: 6.6,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-83.44111, 32.75509],
              zoom: 5,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-77.583360138145, 35.710537054448054],
    						[-88.70945986185588, 30.325169393359175]
            ],
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        // chiVince
        {
            id: 'chiVince',
            alignment: 'center',
            hidden: false,
            title: titolo_chiVince,
            description: chiVince,
            image: "https://www.youtrend.it/wp-content/uploads/2021/01/capitol.jpg",
            fly: false,
            ease: false,
            neutral: true,
            location: {
              center: [-83.14641, 32.80140],
              zoom: 6.6,
              pitch: 0.00,
              bearing: 0.00
            },
            locationMobile: {
              center: [-83.44111, 32.75509],
              zoom: 5,
              pitch: 0.00,
              bearing: 0.00
            },
            bounds: [
    						[-77.583360138145, 35.710537054448054],
    						[-88.70945986185588, 30.325169393359175]
            ],
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
