import type { Course } from "@/types";

// 54 cours (01 -> 54), triés par numéro de fichier croissant, un pays par cours
export const GEOGRAPHIE_COURSES: Course[] = [
  {
    id: "course-geographie-01-algerie",
    categoryId: "geo",
    emoji: "🇩🇿",
    title: "Algérie",
    description: "Le plus grand pays d'Afrique, tendu entre la Méditerranée et le Sahara. Découvre l'Algérie : son immense désert, ses montagnes de l'Atlas, ses peuples arabes et berbères et ses richesses en hydrocarbures.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-01-algerie-lesson-1",
        title: "Un désert avec une façade maritime",
        blocks: [
          { type: "paragraphe", text: "Le plus grand pays d'Afrique tient presque tout entier dans une seule couleur : le sable. Pourtant, sa frange nord touche la Méditerranée, avec vignes et orangeraies à quelques heures du Sahara." },
          { type: "chiffreCle", valeur: "2,38 M km²", legende: "le plus vaste pays du continent africain" },
          { type: "paragraphe", text: "Deux chaînes de l'**Atlas** séparent la côte fertile du désert. Au cœur du Sahara, le massif du **Hoggar** culmine à 2 900 m. Plus au sud, les grands ergs de dunes cachent des oasis où l'eau souterraine fait vivre les palmeraies." },
          {
            type: "aRetenir",
            points: [
              "Le plus vaste pays d'Afrique : **2,38 millions** de km²",
              "80 % du territoire est couvert par le **Sahara**",
              "L'**Atlas** sépare la côte fertile du désert intérieur",
            ],
          },
          { type: "leSavaisTu", text: "Il y a environ 10 000 ans, le Sahara algérien était vert. Les fresques du **Tassili n'Ajjer** montrent des girafes et des hippopotames peints là où il n'y a plus une goutte d'eau." },
        ],
      },
      {
        id: "course-geographie-01-algerie-lesson-2",
        title: "46 millions collés à la mer",
        blocks: [
          { type: "paragraphe", text: "L'Algérie compte 46 millions d'habitants, mais l'immense majorité vit sur une bande côtière de quelques dizaines de kilomètres de large. Au sud, le Sahara, qui couvre 80 % du pays, reste presque vide." },
          { type: "chiffreCle", valeur: "46 M", legende: "concentrés sur la frange côtière, loin du Sahara vide" },
          { type: "paragraphe", text: "La société mêle Arabes et Berbères — Kabyles, Chaouis, Touaregs du sud. L'arabe et le **tamazight** sont langues officielles, l'islam sunnite la religion de la grande majorité. La **Kabylie**, à l'est d'Alger, reste le foyer vivant de la culture berbère." },
          {
            type: "aRetenir",
            points: [
              "46 millions d'habitants, surtout sur la **côte** nord",
              "Arabes et **Berbères** : Kabyles, Chaouis, Touaregs du Sahara",
              "La **Kabylie** est le principal foyer de la culture berbère",
            ],
          },
          { type: "leSavaisTu", text: "Les Berbères ont leur propre calendrier : le Nouvel An amazigh, **Yennayer**, tombe le 12 janvier et est aujourd'hui un jour férié en Algérie." },
        ],
      },
      {
        id: "course-geographie-01-algerie-lesson-3",
        title: "L'or noir, moteur de l'Algérie",
        blocks: [
          { type: "paragraphe", text: "Le sous-sol algérien fait vivre tout le pays : pétrole et surtout gaz naturel, exploités par la compagnie publique **Sonatrach**, représentent l'essentiel des exportations. Cette richesse reste une dépendance : sans elle, l'économie vacille." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Alger" },
              { label: "Monnaie", valeur: "Dinar algérien (DZD)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "5 juillet 1962" },
            ],
          },
          { type: "paragraphe", text: "Après une guerre longue et meurtrière contre la France, l'Algérie devient indépendante en 1962. Elle pèse aujourd'hui dans les dossiers du Sahel et du Sahara occidental, et garde de superbes vestiges romains à **Timgad** et **Djémila**." },
          {
            type: "aRetenir",
            points: [
              "L'économie dépend du pétrole et du **gaz naturel**",
              "Indépendance obtenue le **5 juillet 1962**, après une longue guerre",
              "Alger la Blanche : sa Casbah est classée à l'**UNESCO**",
            ],
          },
          { type: "leSavaisTu", text: "La devise de l'Algérie, gravée sur les frontons officiels, est simple et directe : « **Par le peuple et pour le peuple** »." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-01-algerie-quiz-1",
        question: "Quel est le plus grand pays d'Afrique par sa superficie ?",
        options: ["Le Nigeria", "L'Algérie", "La RD Congo", "Le Soudan"],
        correctIndex: 1,
        explanation: "Avec environ 2,38 millions de km², soit près de quatre fois la France, l'Algérie est le plus vaste pays du continent africain — même si 80 % de ce territoire est un désert quasi vide.",
      },
      {
        id: "course-geographie-01-algerie-quiz-2",
        question: "Quelle grande chaîne de montagnes traverse le nord de l'Algérie ?",
        options: ["Le Drakensberg", "L'Atlas", "Le Kilimandjaro", "Le Fouta-Djalon"],
        correctIndex: 1,
        explanation: "L'Atlas tellien, près de la côte, et l'Atlas saharien, plus au sud, séparent le littoral méditerranéen fertile de l'immense Sahara, où se dresse plus loin le massif volcanique du Hoggar.",
      },
      {
        id: "course-geographie-01-algerie-quiz-3",
        question: "Quelle est la principale ressource d'exportation de l'Algérie ?",
        options: ["Le cacao", "L'or", "Les hydrocarbures (pétrole et gaz)", "Le café"],
        correctIndex: 2,
        explanation: "L'Algérie est l'un des grands exportateurs de gaz naturel et de pétrole d'Afrique, exploités par la compagnie publique Sonatrach ; son économie en dépend fortement, une fragilité en cas de baisse des prix mondiaux.",
      },
      {
        id: "course-geographie-01-algerie-quiz-4",
        question: "Quelle est la capitale de l'Algérie ?",
        options: ["Alger", "Oran", "Constantine", "Annaba"],
        correctIndex: 0,
        explanation: "Alger, surnommée « Alger la Blanche », est la capitale et principal port du pays, l'une des 58 wilayas qui structurent le territoire algérien ; sa vieille Casbah est classée à l'UNESCO.",
      },
      {
        id: "course-geographie-01-algerie-quiz-5",
        question: "Quel désert couvre la majeure partie du sud de l'Algérie ?",
        options: ["Le Kalahari", "Le Namib", "Le Sahara", "Le désert du Danakil"],
        correctIndex: 2,
        explanation: "Le Sahara occupe plus de 80 % du territoire algérien ; on y trouve le massif du Hoggar, les grands ergs de dunes et des oasis comme celles du Touat, alimentées par les nappes souterraines.",
      },
    ],
  },
  {
    id: "course-geographie-02-egypte",
    categoryId: "geo",
    emoji: "🇪🇬",
    title: "Égypte",
    description: "Un pays-pont entre l'Afrique et l'Asie, façonné par un seul fleuve. Découvre l'Égypte : le Nil, le canal de Suez, ses 100 millions d'habitants et l'héritage des pharaons.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-02-egypte-lesson-1",
        title: "Un fleuve, un ruban de vie",
        blocks: [
          { type: "paragraphe", text: "Sur les quelque 110 millions d'Égyptiens, 95 % vivent sur à peine 5 % du territoire : une mince bande verte que le Nil trace au milieu d'un désert presque total." },
          { type: "chiffreCle", valeur: "5 %", legende: "du territoire porte presque toute la population" },
          { type: "paragraphe", text: "Le **Nil** traverse le pays du sud au nord et concentre toute la vie : vallée et delta forment un long ruban vert au milieu des sables. Au sud, le barrage d'**Assouan** retient le lac Nasser et régule les crues." },
          {
            type: "aRetenir",
            points: [
              "95 % des Égyptiens vivent sur **5 %** du territoire",
              "Le **Nil** traverse le pays du sud au nord",
              "Le barrage d'**Assouan** retient les eaux du lac Nasser",
            ],
          },
          { type: "leSavaisTu", text: "À **Assouan**, il suffit de lever les yeux au bout d'une rue pour voir les falaises du désert : la bande cultivée est parfois large de quelques centaines de mètres à peine." },
        ],
      },
      {
        id: "course-geographie-02-egypte-lesson-2",
        title: "Cent millions serrés sur la rive",
        blocks: [
          { type: "paragraphe", text: "Avec plus de 110 millions d'habitants, l'Égypte est le pays le plus peuplé du monde arabe. Presque tous vivent entassés le long du Nil, dans l'une des densités les plus fortes de la planète." },
          { type: "chiffreCle", valeur: "110 M", legende: "le pays arabe le plus peuplé du monde" },
          { type: "paragraphe", text: "Le **Caire**, mégapole tentaculaire, et Alexandrie, grand port méditerranéen, concentrent l'essentiel de la vie urbaine. La population, très majoritairement musulmane sunnite, compte aussi une importante minorité chrétienne **copte**, l'une des plus anciennes du monde." },
          {
            type: "aRetenir",
            points: [
              "Plus de **110 millions** d'habitants, le record du monde arabe",
              "Presque tous vivent le long du **Nil**",
              "Une minorité chrétienne **copte** parmi les plus anciennes au monde",
            ],
          },
          { type: "leSavaisTu", text: "**Al-Azhar**, fondée au Caire il y a plus de mille ans, reste aujourd'hui l'une des plus anciennes universités encore en activité au monde." },
        ],
      },
      {
        id: "course-geographie-02-egypte-lesson-3",
        title: "Suez, carrefour du commerce mondial",
        blocks: [
          { type: "paragraphe", text: "Un seul canal égyptien relie la Méditerranée à la mer Rouge et fait gagner des semaines de navigation à des milliers de navires chaque année — sans lui, il faudrait contourner toute l'Afrique." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Le Caire" },
              { label: "Monnaie", valeur: "Livre égyptienne (EGP)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "1922 (Royaume-Uni)" },
            ],
          },
          { type: "paragraphe", text: "En **1952**, une révolution renverse la monarchie ; la république naît l'année suivante. L'Égypte a longtemps abrité le siège de la **Ligue arabe** au Caire et pèse depuis des décennies sur la diplomatie régionale." },
          {
            type: "aRetenir",
            points: [
              "Le canal de **Suez** relie Méditerranée et mer Rouge",
              "République née en **1953**, après la révolution de 1952",
              "Le Caire a longtemps abrité le siège de la **Ligue arabe**",
            ],
          },
          { type: "leSavaisTu", text: "Les pyramides de Gizeh sont si anciennes que, du temps de Cléopâtre, elles avaient déjà environ 2 500 ans — plus proches de nous aujourd'hui que Cléopâtre ne l'était des pyramides." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-02-egypte-quiz-1",
        question: "Quel fleuve concentre l'essentiel de la population et de l'agriculture de l'Égypte ?",
        options: ["Le Congo", "Le Nil", "Le Niger", "Le Zambèze"],
        correctIndex: 1,
        explanation: "Presque toute la population égyptienne vit le long de la vallée et du delta du Nil, sur à peine 5 % du territoire national — le reste est un désert quasi vide.",
      },
      {
        id: "course-geographie-02-egypte-quiz-2",
        question: "Quel canal stratégique, situé en Égypte, relie la Méditerranée à la mer Rouge ?",
        options: ["Le canal de Suez", "Le canal de Panama", "Le canal de Corinthe", "Le canal de Kiel"],
        correctIndex: 0,
        explanation: "Le canal de Suez relie la Méditerranée à la mer Rouge et évite aux navires de contourner toute l'Afrique ; c'est une source majeure de revenus pour l'Égypte.",
      },
      {
        id: "course-geographie-02-egypte-quiz-3",
        question: "Quelle est la capitale de l'Égypte ?",
        options: ["Alexandrie", "Le Caire", "Louxor", "Assouan"],
        correctIndex: 1,
        explanation: "Le Caire est la capitale et la plus grande ville du pays, à la lisière du désert et de la vallée du Nil ; une nouvelle capitale administrative a été bâtie à l'est.",
      },
      {
        id: "course-geographie-02-egypte-quiz-4",
        question: "L'Égypte est le pays le plus peuplé de quel ensemble ?",
        options: ["De l'Afrique australe", "Du monde arabe", "De l'Afrique de l'Ouest", "De l'Afrique centrale"],
        correctIndex: 1,
        explanation: "Avec plus de 110 millions d'habitants, presque tous concentrés le long du Nil, l'Égypte est le pays le plus peuplé du monde arabe.",
      },
      {
        id: "course-geographie-02-egypte-quiz-5",
        question: "Quels monuments antiques célèbres se dressent sur le plateau de Gizeh ?",
        options: ["Les temples d'Abou Simbel", "Les pyramides et le Sphinx", "Les ruines de Carthage", "Les églises de Lalibela"],
        correctIndex: 1,
        explanation: "Les pyramides de Gizeh et le Sphinx, vieux de plus de 4 500 ans, comptent parmi les monuments les plus célèbres au monde et attirent des millions de visiteurs chaque année.",
      },
    ],
  },
  {
    id: "course-geographie-03-libye",
    categoryId: "geo",
    emoji: "🇱🇾",
    title: "Libye",
    description: "Un immense pays saharien ouvert sur la Méditerranée, riche en pétrole et marqué par une longue transition politique. Découvre la Libye, ses cités antiques et son désert.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-03-libye-lesson-1",
        title: "Trois pays dans un seul",
        blocks: [
          { type: "paragraphe", text: "La Libye n'a jamais vraiment formé un seul pays : trois régions historiques — la Tripolitaine à l'ouest, la Cyrénaïque à l'est, le Fezzan au sud — se partagent un immense territoire, aux neuf dixièmes désertique." },
          { type: "chiffreCle", valeur: "3 régions", legende: "Tripolitaine, Cyrénaïque et Fezzan, jamais vraiment unies" },
          { type: "paragraphe", text: "Pour boire, le pays puise dans des nappes fossiles profondes grâce à la « **Grande Rivière artificielle** », un réseau de canalisations qui traverse tout le Sahara libyen. Au sud, le massif du **Fezzan** cache quelques oasis, comme Ghadamès." },
          {
            type: "aRetenir",
            points: [
              "Trois régions historiques : **Tripolitaine**, Cyrénaïque, Fezzan",
              "Près de 90 % du territoire est **désertique**",
              "L'eau vient de nappes fossiles, via la Grande Rivière artificielle",
            ],
          },
          { type: "leSavaisTu", text: "La « **Grande Rivière artificielle** » pompe une eau vieille de plus de 10 000 ans, tombée quand le Sahara était encore vert, pour irriguer les villes du littoral." },
        ],
      },
      {
        id: "course-geographie-03-libye-lesson-2",
        title: "Une population repliée sur la côte",
        blocks: [
          { type: "paragraphe", text: "Sur environ 7 millions de Libyens, la quasi-totalité vit sur l'étroite bande côtière, autour de Tripoli et de Benghazi. L'immense intérieur saharien reste presque vide, et la guerre depuis 2011 a renforcé cet exode." },
          { type: "chiffreCle", valeur: "7 M", legende: "presque tous sur la côte, le désert vide" },
          { type: "paragraphe", text: "La population est en majorité arabe et **berbère** (Amazighs), avec des minorités touarègue et toubou dans le grand sud. Ces identités régionales, notamment dans le **Jebel Nefoussa**, restent parfois en tension avec le pouvoir central." },
          {
            type: "aRetenir",
            points: [
              "Environ **7 millions** d'habitants, surtout sur la côte",
              "Population arabe et **berbère**, minorités touarègue et toubou au sud",
              "La guerre depuis **2011** a déplacé des centaines de milliers de personnes",
            ],
          },
          { type: "leSavaisTu", text: "Avant les crises des années 2010, des centaines de milliers de travailleurs d'Afrique subsaharienne vivaient dans une Libye alors comptée parmi les pays les plus riches du continent." },
        ],
      },
      {
        id: "course-geographie-03-libye-lesson-3",
        title: "Un pouvoir toujours divisé en deux",
        blocks: [
          { type: "paragraphe", text: "L'économie libyenne tient presque entièrement au pétrole, dont le pays possède parmi les plus grandes réserves d'Afrique. Depuis la chute de Kadhafi en 2011, le pouvoir reste durablement partagé entre l'est et l'ouest du pays." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Tripoli" },
              { label: "Monnaie", valeur: "Dinar libyen (LYD)" },
              { label: "Régime", valeur: "Transition politique" },
              { label: "Indépendance", valeur: "24 décembre 1951" },
            ],
          },
          { type: "paragraphe", text: "Royaume indépendant en 1951, le pays devient en 1977 la « **Jamahiriya** » sous Mouammar **Kadhafi**, qui dirige 42 ans durant. La révolution de 2011 ouvre une transition toujours inachevée, avec des élections nationales espérées." },
          {
            type: "aRetenir",
            points: [
              "L'économie dépend presque entièrement du **pétrole**",
              "Royaume indépendant en **1951**, puis Jamahiriya dès 1977",
              "Transition politique toujours en cours depuis la révolution de **2011**",
            ],
          },
          { type: "leSavaisTu", text: "La Libye conserve des cités antiques presque intactes — **Leptis Magna**, Sabratha, Cyrène — car le tourisme de masse, contrairement à d'autres pays méditerranéens, n'y a jamais vraiment pris." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-03-libye-quiz-1",
        question: "Quelle est la nature de la majeure partie du territoire libyen ?",
        options: ["La forêt tropicale", "Le désert du Sahara", "La savane humide", "La haute montagne"],
        correctIndex: 1,
        explanation: "Près de 90 % du territoire libyen est couvert par le Sahara ; la vie se concentre sur l'étroite bande côtière, entre Tripoli et Benghazi.",
      },
      {
        id: "course-geographie-03-libye-quiz-2",
        question: "Quelle est la principale ressource économique de la Libye ?",
        options: ["Le cacao", "Le pétrole", "Le coton", "Le tourisme"],
        correctIndex: 1,
        explanation: "La Libye possède parmi les plus grandes réserves de pétrole d'Afrique ; son économie en dépend presque entièrement, une fragilité aggravée par l'instabilité politique depuis 2011.",
      },
      {
        id: "course-geographie-03-libye-quiz-3",
        question: "Quelle est la capitale de la Libye ?",
        options: ["Tripoli", "Benghazi", "Misrata", "Syrte"],
        correctIndex: 0,
        explanation: "Tripoli, sur la côte méditerranéenne, est la capitale et la plus grande ville du pays, cœur de la région historique de Tripolitaine.",
      },
      {
        id: "course-geographie-03-libye-quiz-4",
        question: "Sur quelle mer la Libye possède-t-elle une longue façade ?",
        options: ["La mer Rouge", "La mer Méditerranée", "L'océan Atlantique", "La mer Noire"],
        correctIndex: 1,
        explanation: "Toute la côte libyenne donne sur la Méditerranée, où se concentrent les grandes villes et l'essentiel de la population.",
      },
      {
        id: "course-geographie-03-libye-quiz-5",
        question: "Quel célèbre site antique romain se trouve en Libye ?",
        options: ["Les pyramides de Gizeh", "Leptis Magna", "Le Grand Zimbabwe", "Tombouctou"],
        correctIndex: 1,
        explanation: "Leptis Magna, comme Sabratha et Cyrène, témoigne du riche passé antique de la Libye ; ces sites, remarquablement conservés, sont classés à l'UNESCO.",
      },
    ],
  },
  {
    id: "course-geographie-04-maroc",
    categoryId: "geo",
    emoji: "🇲🇦",
    title: "Maroc",
    description: "Un royaume entre Atlantique, Méditerranée et Sahara, dominé par les montagnes de l'Atlas. Découvre le Maroc, ses villes impériales, ses phosphates et sa culture arabo-berbère.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-04-maroc-lesson-1",
        title: "À 14 kilomètres de l'Europe",
        blocks: [
          { type: "paragraphe", text: "Un simple détroit de 14 kilomètres sépare le Maroc de l'Espagne — par temps clair, on distingue les côtes espagnoles depuis Tanger. Aucun autre pays africain n'est aussi proche de l'Europe." },
          { type: "chiffreCle", valeur: "14 km", legende: "le détroit de Gibraltar, vers l'Espagne" },
          { type: "paragraphe", text: "Le pays est structuré par l'**Atlas** : le Haut Atlas, avec le mont **Toubkal**, plus haut sommet d'Afrique du Nord à plus de 4 000 m, et le Rif au nord. Entre montagnes et océan s'étendent des plaines fertiles ; le Sahara commence au sud-est." },
          {
            type: "aRetenir",
            points: [
              "Seulement **14 km** séparent le Maroc de l'Espagne",
              "Le mont **Toubkal** est le plus haut sommet d'Afrique du Nord",
              "Le Sahara commence au sud-est, après l'Anti-Atlas",
            ],
          },
          { type: "leSavaisTu", text: "La traversée en ferry entre Tanger et l'Espagne prend moins d'une heure : on rejoint l'Europe plus vite qu'on ne traverse le pays du nord au sud." },
        ],
      },
      {
        id: "course-geographie-04-maroc-lesson-2",
        title: "37 millions, entre plaine et exil",
        blocks: [
          { type: "paragraphe", text: "Le Maroc compte environ 37 millions d'habitants, concentrés dans les plaines et les villes de l'Atlantique. Depuis des décennies, une importante diaspora vit en Europe, surtout en France, en Espagne et aux Pays-Bas." },
          { type: "chiffreCle", valeur: "60 %", legende: "des Marocains vivent aujourd'hui en ville" },
          { type: "paragraphe", text: "La société marocaine mêle Arabes et **Berbères** (Amazighs), répartis en trois grandes aires linguistiques dans l'Atlas et le Rif. L'islam sunnite est religion d'État ; le roi porte le titre de « **Commandeur des croyants** »." },
          {
            type: "aRetenir",
            points: [
              "Environ **37 millions** d'habitants, plus de 60 % en ville",
              "Arabes et **Berbères** (Amazighs), trois aires linguistiques",
              "Une importante diaspora vit en **Europe** depuis des décennies",
            ],
          },
          { type: "leSavaisTu", text: "Le Maroc a longtemps abrité l'une des plus grandes communautés juives du monde arabe : ses traces, synagogues et quartiers **mellah**, restent visibles dans plusieurs villes, de Fès à Essaouira." },
        ],
      },
      {
        id: "course-geographie-04-maroc-lesson-3",
        title: "La terre qui nourrit le monde",
        blocks: [
          { type: "paragraphe", text: "Sous le sol marocain dorment l'essentiel des réserves mondiales de phosphates, l'ingrédient de base de la plupart des engrais du monde. Le royaume en est aujourd'hui le premier exportateur mondial." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Rabat" },
              { label: "Monnaie", valeur: "Dirham marocain (MAD)" },
              { label: "Régime", valeur: "Monarchie constitutionnelle" },
              { label: "Indépendance", valeur: "2 mars 1956" },
            ],
          },
          { type: "paragraphe", text: "Indépendant de la France et de l'Espagne depuis **1956**, le Maroc a réintégré l'**Union africaine** en 2017 après plus de trente ans d'absence. Son économie s'appuie aussi sur le tourisme, l'automobile et l'agriculture." },
          {
            type: "aRetenir",
            points: [
              "Premier exportateur mondial de **phosphates**, via l'OCP",
              "Indépendant depuis **1956**, monarchie constitutionnelle",
              "Réintégré l'**Union africaine** en 2017",
            ],
          },
          { type: "leSavaisTu", text: "Fès et Marrakech, deux des villes impériales du Maroc, ont leurs médinas entières classées à l'**UNESCO** — des labyrinthes de ruelles où la voiture ne circule pas." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-04-maroc-quiz-1",
        question: "Quelle grande chaîne de montagnes, avec le mont Toubkal, domine le Maroc ?",
        options: ["Le Drakensberg", "L'Atlas", "Le Rwenzori", "Le Fouta-Djalon"],
        correctIndex: 1,
        explanation: "Le Haut Atlas abrite le mont Toubkal, à plus de 4 000 mètres, le plus haut sommet d'Afrique du Nord ; il sépare les plaines atlantiques du Sahara.",
      },
      {
        id: "course-geographie-04-maroc-quiz-2",
        question: "Quel est le régime politique du Maroc ?",
        options: ["Une république présidentielle", "Une monarchie", "Un régime militaire", "Une fédération"],
        correctIndex: 1,
        explanation: "Le Maroc est une monarchie constitutionnelle : le roi, qui porte le titre de « Commandeur des croyants », partage le pouvoir avec un gouvernement et un parlement élus.",
      },
      {
        id: "course-geographie-04-maroc-quiz-3",
        question: "Le Maroc est le premier exportateur mondial de quelle ressource ?",
        options: ["Le pétrole", "Le cacao", "Les phosphates", "L'or"],
        correctIndex: 2,
        explanation: "Grâce à ses immenses gisements exploités par le groupe public OCP, le Maroc est le premier exportateur mondial de phosphates, matière première des engrais.",
      },
      {
        id: "course-geographie-04-maroc-quiz-4",
        question: "Quelle est la capitale du Maroc ?",
        options: ["Casablanca", "Rabat", "Marrakech", "Fès"],
        correctIndex: 1,
        explanation: "Rabat est la capitale politique du royaume ; Casablanca, plus grande ville et principal port, en est le poumon économique.",
      },
      {
        id: "course-geographie-04-maroc-quiz-5",
        question: "Quel détroit sépare le Maroc de l'Europe ?",
        options: ["Le détroit de Gibraltar", "Le canal de Suez", "Le détroit de Bab-el-Mandeb", "Le détroit de Malacca"],
        correctIndex: 0,
        explanation: "Le détroit de Gibraltar, large d'à peine 14 kilomètres, sépare le Maroc de l'Espagne — le point le plus proche entre l'Afrique et l'Europe.",
      },
    ],
  },
  {
    id: "course-geographie-05-mauritanie",
    categoryId: "geo",
    emoji: "🇲🇷",
    title: "Mauritanie",
    description: "Un trait d'union entre le Maghreb et l'Afrique noire, aux trois quarts saharien, ouvert sur un Atlantique très poissonneux. Découvre la Mauritanie, ses villes caravanières et ses richesses minières.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-05-mauritanie-lesson-1",
        title: "Entre Maghreb et Afrique noire",
        blocks: [
          { type: "paragraphe", text: "La Mauritanie n'est ni tout à fait le Maghreb, ni tout à fait l'Afrique noire : ce grand pays saharien, aux trois quarts désertique, fait la jonction entre les deux, jusqu'à l'Atlantique." },
          { type: "chiffreCle", valeur: "1,03 M km²", legende: "un désert presque aussi grand que l'Égypte" },
          { type: "paragraphe", text: "Sa façade atlantique, au large du **banc d'Arguin**, compte parmi les eaux les plus poissonneuses du monde. Au sud, une mince frange sahélienne longe le **fleuve Sénégal**, seule zone vraiment cultivable du pays." },
          {
            type: "aRetenir",
            points: [
              "Un territoire presque aussi vaste que l'**Égypte**",
              "Le désert couvre les trois quarts du pays",
              "Les eaux du **banc d'Arguin** sont parmi les plus poissonneuses au monde",
            ],
          },
          { type: "leSavaisTu", text: "Dans la ville sainte de **Chinguetti**, en plein désert, des bibliothèques familiales conservent depuis des siècles des milliers de manuscrits anciens, écrits et copiés à la main." },
        ],
      },
      {
        id: "course-geographie-05-mauritanie-lesson-2",
        title: "Une capitale née de rien",
        blocks: [
          { type: "paragraphe", text: "La Mauritanie compte seulement environ 4,9 millions d'habitants, un chiffre modeste pour un si vaste territoire. Nouakchott, la capitale, presque inexistante avant l'indépendance, rassemble aujourd'hui près d'un tiers du pays." },
          { type: "chiffreCle", valeur: "1/3", legende: "des Mauritaniens vivent à Nouakchott, née après 1960" },
          { type: "paragraphe", text: "La société réunit les **Maures** arabo-berbères (Bidhan et Haratines) et des peuples négro-africains (**Halpulaar**, Soninké, Wolof) au sud. Cette dualité, aggravée par l'héritage de l'esclavage, aboli tardivement, continue de peser sur la cohésion nationale." },
          {
            type: "aRetenir",
            points: [
              "Environ **4,9 millions** d'habitants, pour un immense territoire",
              "Maures arabo-berbères au nord, peuples **négro-africains** au sud",
              "Nouakchott rassemble près d'un tiers de la population",
            ],
          },
          { type: "leSavaisTu", text: "**Nouakchott** n'était qu'un village de pêcheurs avant l'indépendance. Devenue capitale en 1960, elle est aujourd'hui l'une des villes qui a grandi le plus vite d'Afrique de l'Ouest." },
        ],
      },
      {
        id: "course-geographie-05-mauritanie-lesson-3",
        title: "Le plus long train du désert",
        blocks: [
          { type: "paragraphe", text: "Chaque jour, un train de plus de 200 wagons et 2,5 kilomètres de long traverse le Sahara mauritanien, chargé de minerai de fer. C'est l'un des trains les plus longs du monde." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Nouakchott" },
              { label: "Monnaie", valeur: "Ouguiya (MRU)" },
              { label: "Régime", valeur: "République islamique" },
              { label: "Indépendance", valeur: "28 novembre 1960" },
            ],
          },
          { type: "paragraphe", text: "Le minerai de fer, extrait par la **SNIM**, reste la première exportation du pays, devant l'or et le cuivre. Un nouveau champ de gaz offshore, **Grand Tortue Ahmeyim**, partagé avec le Sénégal, ouvre une autre source de revenus." },
          {
            type: "aRetenir",
            points: [
              "Le train de **fer**, l'un des plus longs trains du monde",
              "Extrait et exporté par la **SNIM** depuis des décennies",
              "Un nouveau champ de gaz offshore change la donne économique",
            ],
          },
          { type: "leSavaisTu", text: "Le train de la SNIM est si long qu'il faut parfois plusieurs minutes, debout au passage à niveau, pour le voir passer en entier." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-05-mauritanie-quiz-1",
        question: "Quel désert couvre la majeure partie de la Mauritanie ?",
        options: ["Le Kalahari", "Le Sahara", "Le Namib", "Le désert du Danakil"],
        correctIndex: 1,
        explanation: "Le Sahara occupe le nord et le centre du pays, sur un territoire presque aussi vaste que l'Égypte ; seule une frange sahélienne au sud est cultivable.",
      },
      {
        id: "course-geographie-05-mauritanie-quiz-2",
        question: "Quel minerai constitue la principale exportation de la Mauritanie ?",
        options: ["Le cuivre", "Le fer", "La bauxite", "Le diamant"],
        correctIndex: 1,
        explanation: "Le minerai de fer, exploité par la SNIM et transporté par l'un des trains les plus longs du monde, est de longue date la première ressource d'exportation du pays.",
      },
      {
        id: "course-geographie-05-mauritanie-quiz-3",
        question: "Quelle est la monnaie de la Mauritanie ?",
        options: ["Le franc CFA", "L'ouguiya", "Le dirham", "Le naira"],
        correctIndex: 1,
        explanation: "Contrairement à ses voisins d'Afrique de l'Ouest, la Mauritanie n'utilise pas le franc CFA mais sa propre monnaie, l'ouguiya.",
      },
      {
        id: "course-geographie-05-mauritanie-quiz-4",
        question: "Quelle est la capitale de la Mauritanie ?",
        options: ["Nouadhibou", "Nouakchott", "Atar", "Kiffa"],
        correctIndex: 1,
        explanation: "Nouakchott, sur la côte atlantique, presque inexistante avant l'indépendance, est aujourd'hui la capitale et rassemble près d'un tiers de la population du pays.",
      },
      {
        id: "course-geographie-05-mauritanie-quiz-5",
        question: "Quel fleuve marque la frontière sud de la Mauritanie avec le Sénégal ?",
        options: ["Le fleuve Niger", "Le fleuve Gambie", "Le fleuve Sénégal", "Le fleuve Congo"],
        correctIndex: 2,
        explanation: "Le fleuve Sénégal sépare la Mauritanie du Sénégal et permet l'agriculture dans l'étroite frange sahélienne du sud, seule terre vraiment cultivable du pays.",
      },
    ],
  },
  {
    id: "course-geographie-06-soudan",
    categoryId: "geo",
    emoji: "🇸🇩",
    title: "Soudan",
    description: "Un géant sahélien traversé par le Nil, marqué par la sécession du Soudan du Sud et une guerre civile. Découvre le Soudan, la confluence des deux Nils et les pyramides de Méroé.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-06-soudan-lesson-1",
        title: "Deux Nils, deux couleurs, un fleuve",
        blocks: [
          { type: "paragraphe", text: "À Khartoum, deux fleuves aux couleurs différentes se rencontrent : le Nil Bleu, plus sombre, et le Nil Blanc, plus clair, fusionnent pour former le Nil, qui poursuit sa route vers l'Égypte." },
          { type: "chiffreCle", valeur: "1,88 M km²", legende: "le 3ᵉ plus grand pays d'Afrique, après la sécession" },
          { type: "paragraphe", text: "Le nord est désertique, le sud une savane sahélienne. Au-delà du désert de **Nubie**, le Nil trace une étroite bande cultivable. À l'ouest, le massif volcanique du **Jebel Marra**, au Darfour, culmine à plus de 3 000 m." },
          {
            type: "aRetenir",
            points: [
              "Les deux Nils se rejoignent à **Khartoum**",
              "3ᵉ plus grand pays d'Afrique, depuis 2011",
              "Le désert domine au nord, la savane au sud",
            ],
          },
          { type: "leSavaisTu", text: "Le **Jebel Marra**, au Darfour, cache dans son cratère deux lacs volcaniques d'altitude — un paysage inattendu au milieu d'une région marquée par la guerre et la sécheresse." },
        ],
      },
      {
        id: "course-geographie-06-soudan-lesson-2",
        title: "Un peuple poussé sur les routes",
        blocks: [
          { type: "paragraphe", text: "Le Soudan compte environ 48 millions d'habitants, mais la guerre qui ravage le pays depuis 2023 a provoqué l'un des plus grands déplacements de population au monde. Des millions de Soudanais ont dû fuir leur foyer." },
          { type: "chiffreCle", valeur: "2023", legende: "le début d'un conflit qui a vidé Khartoum" },
          { type: "paragraphe", text: "Le pays est une mosaïque de peuples arabes et africains — Nubiens, Beja, populations du **Darfour** — longtemps mal représentés dans le pouvoir centralisé à **Khartoum**. Cette diversité est au cœur des tensions qui opposent aujourd'hui l'armée aux Forces de soutien rapide." },
          {
            type: "aRetenir",
            points: [
              "Environ **48 millions** d'habitants, dont des millions déplacés",
              "Une mosaïque de peuples arabes et africains",
              "Guerre civile entre l'armée et les Forces de soutien rapide depuis **2023**",
            ],
          },
          { type: "leSavaisTu", text: "Depuis 2023, la guerre au Soudan est devenue l'une des plus grandes crises de déplacement de population au monde, selon les agences humanitaires internationales." },
        ],
      },
      {
        id: "course-geographie-06-soudan-lesson-3",
        title: "Plus de pyramides qu'en Égypte",
        blocks: [
          { type: "paragraphe", text: "Le Soudan compte plus de pyramides que l'Égypte — près de 200, héritage du royaume nubien de Koush, autour de Méroé. Elles restent pourtant bien moins connues que celles de Gizeh, malgré leur nombre." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Khartoum" },
              { label: "Monnaie", valeur: "Livre soudanaise (SDG)" },
              { label: "Régime", valeur: "Transition militaire" },
              { label: "Indépendance", valeur: "1ᵉʳ janvier 1956" },
            ],
          },
          { type: "paragraphe", text: "L'agriculture reste centrale, avec la **gomme arabique** : le Soudan en est le premier producteur mondial, devant le sésame et le coton. La guerre civile depuis **2023** a toutefois dévasté une bonne partie de cette économie." },
          {
            type: "aRetenir",
            points: [
              "Premier producteur mondial de **gomme arabique**",
              "Indépendant depuis **1956**, après une succession de coups d'État",
              "A perdu un tiers de son territoire lors de la sécession de **2011**",
            ],
          },
          { type: "leSavaisTu", text: "Les pyramides de **Méroé** sont si peu visitées qu'il est possible d'en faire le tour seul, sans croiser âme qui vive — un luxe impensable à Gizeh." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-06-soudan-quiz-1",
        question: "Quels deux cours d'eau se rejoignent à Khartoum ?",
        options: ["Le Niger et le Bénoué", "Le Nil Blanc et le Nil Bleu", "Le Congo et l'Oubangui", "Le Sénégal et la Falémé"],
        correctIndex: 1,
        explanation: "La rencontre du Nil Bleu, plus sombre, et du Nil Blanc, plus clair, à Khartoum, donne naissance au Nil, qui poursuit sa route vers l'Égypte.",
      },
      {
        id: "course-geographie-06-soudan-quiz-2",
        question: "Le Soudan est le premier producteur mondial de quel produit ?",
        options: ["Le cacao", "La gomme arabique", "Le café", "Le caoutchouc"],
        correctIndex: 1,
        explanation: "La gomme arabique, tirée des acacias, est une exportation emblématique du Soudan, premier producteur mondial, utilisée dans l'industrie agroalimentaire.",
      },
      {
        id: "course-geographie-06-soudan-quiz-3",
        question: "Quelle est la capitale du Soudan ?",
        options: ["Omdourman", "Khartoum", "Port-Soudan", "Nyala"],
        correctIndex: 1,
        explanation: "Khartoum, à la confluence des deux Nils, est la capitale historique du pays, en partie vidée par la guerre depuis 2023.",
      },
      {
        id: "course-geographie-06-soudan-quiz-4",
        question: "Quel nouveau pays a fait sécession du Soudan en 2011 ?",
        options: ["L'Érythrée", "Le Soudan du Sud", "Le Tchad", "La Centrafrique"],
        correctIndex: 1,
        explanation: "En 2011, le Soudan du Sud est devenu indépendant, emportant avec lui une grande partie des réserves de pétrole et près d'un tiers du territoire soudanais.",
      },
      {
        id: "course-geographie-06-soudan-quiz-5",
        question: "Quelles pyramides antiques, héritage du royaume de Koush, se trouvent au Soudan ?",
        options: ["Les pyramides de Gizeh", "Les pyramides de Méroé", "Les pyramides de Teotihuacan", "Les pyramides de Nubie mexicaine"],
        correctIndex: 1,
        explanation: "Le Soudan compte plus de pyramides que l'Égypte, héritage du royaume nubien de Koush à Méroé ; elles sont classées à l'UNESCO mais restent peu visitées.",
      },
    ],
  },
  {
    id: "course-geographie-07-tunisie",
    categoryId: "geo",
    emoji: "🇹🇳",
    title: "Tunisie",
    description: "Le plus petit pays du Maghreb, méditerranéen et cosmopolite, berceau de Carthage et du Printemps arabe. Découvre la Tunisie, ses oliviers, ses sites antiques et son littoral.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-07-tunisie-lesson-1",
        title: "Le nord de tout un continent",
        blocks: [
          { type: "paragraphe", text: "Le point le plus septentrional de tout le continent africain ne se trouve pas en Algérie ni au Maroc, mais en Tunisie, au cap Blanc. C'est pourtant le plus petit pays du Maghreb." },
          { type: "chiffreCle", valeur: "164 000 km²", legende: "le plus petit pays d'Afrique du Nord" },
          { type: "paragraphe", text: "Le nord, prolongement de l'**Atlas** tellien, est montagneux et bien arrosé ; le Sahel côtier est couvert d'oliviers. Vers le sud, les **chotts**, immenses lacs salés, annoncent le Sahara autour des oasis de Tozeur et Nefta." },
          {
            type: "aRetenir",
            points: [
              "Le point le plus au nord de toute l'**Afrique**",
              "Le plus petit pays du Maghreb : 164 000 km²",
              "Du nord montagneux aux chotts salés du sud",
            ],
          },
          { type: "leSavaisTu", text: "Les paysages désertiques autour de Tozeur ont servi de décor à la planète Tatooine dans **Star Wars** — le désert tunisien a ainsi voyagé jusqu'au cinéma du monde entier." },
        ],
      },
      {
        id: "course-geographie-07-tunisie-lesson-2",
        title: "Un code d'avance sur son temps",
        blocks: [
          { type: "paragraphe", text: "La Tunisie compte environ 12 millions d'habitants, très largement urbains : près de sept Tunisiens sur dix vivent en ville, concentrés sur le littoral nord et est, autour de Tunis, Sfax et Sousse." },
          { type: "chiffreCle", valeur: "70 %", legende: "des Tunisiens vivent aujourd'hui en ville" },
          { type: "paragraphe", text: "En **1956**, le nouveau pays adopte le **Code du statut personnel** : il abolit la polygamie et instaure le divorce judiciaire, une avancée rare dans la région. La Tunisie en reste depuis une référence sur les droits des femmes." },
          {
            type: "aRetenir",
            points: [
              "Environ **12 millions** d'habitants, 70 % en ville",
              "Le **Code du statut personnel** de 1956 a aboli la polygamie",
              "Une référence régionale sur les droits des femmes",
            ],
          },
          { type: "leSavaisTu", text: "**Habib Bourguiba**, premier président, a fait de la scolarisation des filles une priorité dès les années 1950 — une politique rare à l'époque dans la région." },
        ],
      },
      {
        id: "course-geographie-07-tunisie-lesson-3",
        title: "Où a commencé le Printemps arabe",
        blocks: [
          { type: "paragraphe", text: "C'est en Tunisie, fin 2010, qu'a démarré la vague de soulèvements appelée « Printemps arabe », qui a ensuite gagné l'Égypte, la Libye et bien d'autres pays. La Tunisie reste le seul à en avoir tiré une transition démocratique durable." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Tunis" },
              { label: "Monnaie", valeur: "Dinar tunisien (TND)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "20 mars 1956" },
            ],
          },
          { type: "paragraphe", text: "L'économie s'appuie sur le tourisme, le textile et l'agriculture : la Tunisie est un grand producteur d'**huile d'olive** et de dattes. Le pays est aussi riche en sites antiques classés à l'UNESCO, de **Carthage** à l'amphithéâtre d'El Jem." },
          {
            type: "aRetenir",
            points: [
              "Berceau du **Printemps arabe**, fin 2010",
              "Grand producteur mondial d'**huile d'olive**",
              "Carthage et El Jem, sites antiques classés à l'UNESCO",
            ],
          },
          { type: "leSavaisTu", text: "Avant sa destruction par Rome, **Carthage** était l'une des plus grandes villes du monde antique — aujourd'hui, ses ruines se visitent en à peine une demi-heure depuis le centre de Tunis." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-07-tunisie-quiz-1",
        question: "Quel est le plus petit pays du Maghreb (Afrique du Nord) ?",
        options: ["Le Maroc", "La Tunisie", "L'Algérie", "La Libye"],
        correctIndex: 1,
        explanation: "Avec environ 164 000 km², la Tunisie est le plus petit pays d'Afrique du Nord ; elle abrite aussi le point le plus septentrional du continent, au cap Blanc.",
      },
      {
        id: "course-geographie-07-tunisie-quiz-2",
        question: "Quelle cité antique célèbre, grande rivale de Rome, s'élevait sur le site de l'actuelle Tunis ?",
        options: ["Alexandrie", "Carthage", "Babylone", "Thèbes"],
        correctIndex: 1,
        explanation: "Carthage, fondée par les Phéniciens, fut l'une des plus grandes puissances méditerranéennes avant sa destruction par Rome ; son site, aux portes de Tunis, est classé à l'UNESCO.",
      },
      {
        id: "course-geographie-07-tunisie-quiz-3",
        question: "Quelle production agricole la Tunisie exporte-t-elle en grande quantité ?",
        options: ["Le cacao", "L'huile d'olive", "Le café", "Le caoutchouc"],
        correctIndex: 1,
        explanation: "La Tunisie figure parmi les grands producteurs mondiaux d'huile d'olive, cultivée notamment dans le Sahel tunisien, la plaine côtière couverte d'oliveraies.",
      },
      {
        id: "course-geographie-07-tunisie-quiz-4",
        question: "Quelle est la capitale de la Tunisie ?",
        options: ["Sfax", "Tunis", "Sousse", "Kairouan"],
        correctIndex: 1,
        explanation: "Tunis, au nord-est du pays, est la capitale et la plus grande ville de Tunisie, à quelques kilomètres seulement du site antique de Carthage.",
      },
      {
        id: "course-geographie-07-tunisie-quiz-5",
        question: "Dans quel pays a débuté le « Printemps arabe » en 2010-2011 ?",
        options: ["En Égypte", "En Libye", "En Tunisie", "En Syrie"],
        correctIndex: 2,
        explanation: "Le soulèvement parti de Tunisie fin 2010 a lancé la vague de révoltes appelée « Printemps arabe » ; la Tunisie reste le seul pays à en avoir tiré une transition démocratique durable.",
      },
    ],
  },
  {
    id: "course-geographie-08-benin",
    categoryId: "geo",
    emoji: "🇧🇯",
    title: "Bénin",
    description: "Un pays étroit du golfe de Guinée, berceau du vaudou et de l'ancien royaume du Dahomey. Découvre le Bénin, ses palais royaux et sa cité lacustre.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-08-benin-lesson-1",
        title: "Une ville entière posée sur l'eau",
        blocks: [
          { type: "paragraphe", text: "À Ganvié, sur la lagune de Cotonou, des dizaines de milliers de personnes vivent dans des maisons sur pilotis, au milieu de l'eau — un village-refuge né de la fuite des chasseurs d'esclaves du Dahomey." },
          { type: "chiffreCle", valeur: "700 km", legende: "du sud humide aux savanes sèches du nord" },
          { type: "paragraphe", text: "Au nord-ouest, le parc de la **Pendjari** abrite éléphants et lions dans une grande réserve de biosphère. Plus loin, la chaîne de l'**Atacora** forme le relief le plus marqué du pays, à la frontière du Togo." },
          {
            type: "aRetenir",
            points: [
              "Ganvié, un village entier construit sur **pilotis**",
              "700 km du nord au sud, plusieurs climats",
              "Le parc de la **Pendjari** abrite éléphants et lions",
            ],
          },
          { type: "leSavaisTu", text: "Le nom **Ganvié** signifierait « la communauté qui a survécu » : ses fondateurs, protégés par un tabou religieux interdisant aux chasseurs d'esclaves d'entrer dans l'eau, y ont échappé à la capture." },
        ],
      },
      {
        id: "course-geographie-08-benin-lesson-2",
        title: "Le pays où naît le vaudou",
        blocks: [
          { type: "paragraphe", text: "Le vaudou, aujourd'hui pratiqué sur plusieurs continents, est né ici, dans le sud du Bénin. Chaque 10 janvier, le pays entier célèbre une fête nationale qui lui est entièrement dédiée." },
          { type: "chiffreCle", valeur: "10 janvier", legende: "jour férié national dédié au vaudou" },
          { type: "paragraphe", text: "Les **Fon**, majoritaires au sud, sont les héritiers directs du royaume du Dahomey. Les Yoruba, à l'est, partagent une culture commune avec le Nigeria voisin ; les **Bariba** et les Peuls dominent au nord." },
          {
            type: "aRetenir",
            points: [
              "Le **vaudou** est né dans le sud du Bénin",
              "Les **Fon** sont les héritiers du royaume du Dahomey",
              "13 à 14 millions d'habitants, concentrés dans le sud",
            ],
          },
          { type: "leSavaisTu", text: "Exporté par la traite négrière, le vaudou béninois a donné naissance au vaudou haïtien et au candomblé brésilien — une religion née ici, aujourd'hui pratiquée sur trois continents." },
        ],
      },
      {
        id: "course-geographie-08-benin-lesson-3",
        title: "Les palais qui racontent le Dahomey",
        blocks: [
          { type: "paragraphe", text: "À Abomey, les palais royaux du Dahomey, aujourd'hui classés à l'UNESCO, racontent trois siècles d'un royaume guerrier et commerçant. Le coton, devenu aujourd'hui la première exportation du Bénin, a remplacé l'ancien commerce d'esclaves." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Porto-Novo (officielle)" },
              { label: "Monnaie", valeur: "Franc CFA (XOF)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "1er août 1960" },
            ],
          },
          { type: "paragraphe", text: "**Cotonou**, bien que non capitale officielle, concentre le gouvernement et l'économie du pays. Son port joue un grand rôle dans le commerce régional, notamment la réexportation de marchandises vers le **Nigeria** voisin." },
          {
            type: "aRetenir",
            points: [
              "Les palais d'**Abomey**, classés à l'UNESCO",
              "Le coton est la première exportation du pays",
              "**Cotonou** concentre gouvernement et économie, malgré son statut",
            ],
          },
          { type: "leSavaisTu", text: "En 1975, le Dahomey a pris le nom de Bénin, en hommage à un empire historique prestigieux — qui se trouvait pourtant entièrement... au Nigeria voisin." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-08-benin-quiz-1",
        question: "Le Bénin est considéré comme le berceau de quelle religion traditionnelle ?",
        options: ["Le rastafarisme", "Le vaudou", "Le zoroastrisme", "Le shintoïsme"],
        correctIndex: 1,
        explanation: "Le vaudou est né dans la région de l'actuel Bénin, où il reste largement pratiqué ; le pays lui consacre même un jour férié national, le 10 janvier.",
      },
      {
        id: "course-geographie-08-benin-quiz-2",
        question: "Quelle est la principale culture d'exportation du Bénin ?",
        options: ["Le cacao", "Le coton", "Le café", "Le thé"],
        correctIndex: 1,
        explanation: "Le coton est la première exportation agricole du Bénin, devant l'ananas et l'anacarde.",
      },
      {
        id: "course-geographie-08-benin-quiz-3",
        question: "Quelle est la capitale officielle du Bénin ?",
        options: ["Cotonou", "Porto-Novo", "Parakou", "Abomey"],
        correctIndex: 1,
        explanation: "Porto-Novo est la capitale officielle ; Cotonou, plus grande et plus dynamique, est le siège du gouvernement et le cœur économique du pays.",
      },
      {
        id: "course-geographie-08-benin-quiz-4",
        question: "Quelle monnaie utilise le Bénin ?",
        options: ["Le franc CFA", "Le naira", "Le cedi", "Le dalasi"],
        correctIndex: 0,
        explanation: "Le Bénin fait partie de la zone du franc CFA d'Afrique de l'Ouest (UEMOA), comme la plupart de ses voisins francophones.",
      },
      {
        id: "course-geographie-08-benin-quiz-5",
        question: "Les palais royaux d'Abomey rappellent quel ancien royaume ?",
        options: ["Le royaume ashanti", "Le royaume du Dahomey", "L'empire du Mali", "Le royaume du Kongo"],
        correctIndex: 1,
        explanation: "Abomey était la capitale du royaume du Dahomey ; ses palais royaux, classés à l'UNESCO, racontent trois siècles d'histoire guerrière et commerçante.",
      },
    ],
  },
  {
    id: "course-geographie-09-burkina-faso",
    categoryId: "geo",
    emoji: "🇧🇫",
    title: "Burkina Faso",
    description: "Un pays sahélien enclavé, « la patrie des hommes intègres », marqué par le panafricanisme et un fort défi sécuritaire. Découvre le Burkina Faso.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-09-burkina-faso-lesson-1",
        title: "À la merci des ports voisins",
        blocks: [
          { type: "paragraphe", text: "Le Burkina Faso n'a pas un seul mètre de côte : tout ce qu'il importe ou exporte doit transiter par les ports d'un pays voisin — Abidjan, Téma, Lomé ou Cotonou, à des centaines de kilomètres." },
          { type: "chiffreCle", valeur: "0 km", legende: "de côte — tout passe par des ports étrangers" },
          { type: "paragraphe", text: "Le relief est globalement plat, sans grand massif : un plateau **sahélien**, aride au nord, un peu plus arrosé au sud. Le pays reste exposé à la désertification et à l'**insécurité** liée au terrorisme." },
          {
            type: "aRetenir",
            points: [
              "Aucun accès à la mer : tout transite par les voisins",
              "Un vaste plateau **sahélien**, plat et aride au nord",
              "L'**insécurité** au nord pousse à l'exode vers les villes",
            ],
          },
          { type: "leSavaisTu", text: "Le parc national du W doit son nom à la forme du fleuve Niger à cet endroit, qui dessine un grand « W » — le parc est partagé entre le Burkina Faso, le Niger et le Bénin." },
        ],
      },
      {
        id: "course-geographie-09-burkina-faso-lesson-2",
        title: "Le roi mossi qui règne encore",
        blocks: [
          { type: "paragraphe", text: "Au cœur du Burkina Faso, un roi traditionnel siège encore aujourd'hui : le souverain mossi de Ouagadougou porte toujours le titre de Moogho Naaba, hérité de royaumes vieux de plusieurs siècles." },
          { type: "chiffreCle", valeur: "23 M", legende: "d'habitants, majoritairement jeunes et ruraux" },
          { type: "paragraphe", text: "Depuis 2019, l'insécurité dans le nord a provoqué des déplacements internes massifs vers les grandes villes, en premier lieu **Ouagadougou** et **Bobo-Dioulasso**, deuxième ville du pays." },
          {
            type: "aRetenir",
            points: [
              "Environ **23 millions** d'habitants, jeunes et ruraux",
              "Le roi mossi, le **Moogho Naaba**, règne encore à Ouagadougou",
              "L'insécurité depuis 2019 a déplacé des millions de personnes",
            ],
          },
          { type: "leSavaisTu", text: "Le **royaume mossi** de Ouagadougou existait déjà bien avant la colonisation française : ses souverains, les Moogho Naaba, se succèdent sans interruption depuis plusieurs siècles, jusqu'à aujourd'hui." },
        ],
      },
      {
        id: "course-geographie-09-burkina-faso-lesson-3",
        title: "La patrie des hommes intègres",
        blocks: [
          { type: "paragraphe", text: "« Burkina Faso » signifie « la patrie des hommes intègres » — un nom choisi en 1984 par Thomas Sankara, jeune capitaine devenu président révolutionnaire, avant d'être renversé et assassiné trois ans plus tard." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Ouagadougou" },
              { label: "Monnaie", valeur: "Franc CFA (XOF)" },
              { label: "Régime", valeur: "Transition militaire" },
              { label: "Indépendance", valeur: "5 août 1960" },
            ],
          },
          { type: "paragraphe", text: "L'or est devenu la première exportation du pays, devant le coton, surnommé « l'or blanc ». Le Burkina Faso a quitté la **CEDEAO** pour former, avec le Mali et le Niger, l'**Alliance des États du Sahel**." },
          {
            type: "aRetenir",
            points: [
              "L'**or** est devenu la première exportation du pays",
              "Le nom signifie « la patrie des hommes intègres »",
              "Membre fondateur de l'**Alliance des États du Sahel**",
            ],
          },
          { type: "leSavaisTu", text: "Tous les deux ans, Ouagadougou accueille le **FESPACO**, le plus grand festival de cinéma d'Afrique — des cinéastes de tout le continent y présentent leurs films devant un public immense." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-09-burkina-faso-quiz-1",
        question: "Le Burkina Faso a-t-il un accès à la mer ?",
        options: ["Oui, sur l'Atlantique", "Non, il est enclavé", "Oui, sur la Méditerranée", "Oui, sur l'océan Indien"],
        correctIndex: 1,
        explanation: "Le Burkina Faso n'a pas un seul mètre de côte ; tout son commerce extérieur transite par les ports de pays voisins, parfois à des centaines de kilomètres.",
      },
      {
        id: "course-geographie-09-burkina-faso-quiz-2",
        question: "Quelle est aujourd'hui la principale ressource d'exportation du Burkina Faso ?",
        options: ["L'or", "Le pétrole", "Le cacao", "Les diamants"],
        correctIndex: 0,
        explanation: "L'or est devenu la première exportation du pays, devant le coton surnommé « l'or blanc » ; l'insécurité fragilise toutefois fortement l'économie.",
      },
      {
        id: "course-geographie-09-burkina-faso-quiz-3",
        question: "Quelle est la capitale du Burkina Faso ?",
        options: ["Bobo-Dioulasso", "Ouagadougou", "Koudougou", "Banfora"],
        correctIndex: 1,
        explanation: "Ouagadougou est la capitale et la plus grande ville du pays, siège aussi du roi traditionnel mossi, le Moogho Naaba.",
      },
      {
        id: "course-geographie-09-burkina-faso-quiz-4",
        question: "Que signifie le nom « Burkina Faso » ?",
        options: ["Le pays du fleuve", "La patrie des hommes intègres", "La terre de l'or", "Le royaume du soleil"],
        correctIndex: 1,
        explanation: "Le nom, adopté en 1984 sous Thomas Sankara, signifie « la patrie des hommes intègres » — Sankara sera renversé et assassiné trois ans plus tard.",
      },
      {
        id: "course-geographie-09-burkina-faso-quiz-5",
        question: "Avec le Mali et le Niger, le Burkina Faso forme quelle alliance ?",
        options: ["L'Union du Maghreb", "L'Alliance des États du Sahel (AES)", "La Communauté d'Afrique de l'Est", "La SADC"],
        correctIndex: 1,
        explanation: "Après avoir quitté la CEDEAO, le Burkina Faso a formé, avec le Mali et le Niger, l'Alliance des États du Sahel (AES).",
      },
    ],
  },
  {
    id: "course-geographie-10-cap-vert",
    categoryId: "geo",
    emoji: "🇨🇻",
    title: "Cap-Vert",
    description: "Un archipel atlantique au large du Sénégal, terre de morna et de grande diaspora. Découvre le Cap-Vert, ses volcans et ses plages.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-10-cap-vert-lesson-1",
        title: "Dix îles, aucune frontière terrestre",
        blocks: [
          { type: "paragraphe", text: "Dix îles volcaniques flottent en plein océan Atlantique, à 570 km des côtes sénégalaises — le Cap-Vert n'a aucun voisin qu'on puisse rejoindre à pied ou en voiture, un cas presque unique en Afrique." },
          { type: "chiffreCle", valeur: "570 km", legende: "au large du Sénégal, dans l'Atlantique" },
          { type: "paragraphe", text: "Les îles sont volcaniques : le **Pico do Fogo**, encore actif, culmine à près de 2 829 m. L'**aridité chronique**, aggravée par des cycles de sécheresse, a longtemps rendu l'agriculture précaire et poussé une partie de la population à émigrer." },
          {
            type: "aRetenir",
            points: [
              "Dix îles volcaniques, aucune frontière terrestre",
              "Le **Pico do Fogo**, volcan actif, culmine à 2 829 m",
              "L'aridité a longtemps poussé les Capverdiens à émigrer",
            ],
          },
          { type: "leSavaisTu", text: "Les deux groupes d'îles portent des noms de marins : Barlavento (« au vent ») au nord, Sotavento (« sous le vent ») au sud, selon leur position face aux alizés." },
        ],
      },
      {
        id: "course-geographie-10-cap-vert-lesson-2",
        title: "Plus de Capverdiens dehors que dedans",
        blocks: [
          { type: "paragraphe", text: "Le Cap-Vert compte environ 525 000 habitants sur ses îles — mais sa diaspora, installée aux États-Unis, au Portugal et en France, est plus nombreuse que la population qui vit sur l'archipel." },
          { type: "chiffreCle", valeur: "525 000", legende: "résidents, moins nombreux que la diaspora" },
          { type: "paragraphe", text: "La population est **créole**, née du métissage entre Africains et Portugais dès le XVe siècle. Le pays est célèbre pour sa musique, la **morna**, popularisée dans le monde entier par Cesária Évora." },
          {
            type: "aRetenir",
            points: [
              "Environ **525 000** habitants, moins que la diaspora",
              "Une population **créole**, née du métissage colonial",
              "La **morna**, musique nationale, rendue célèbre par Cesária Évora",
            ],
          },
          { type: "leSavaisTu", text: "Beaucoup de Capverdiens de la diaspora reviennent chaque année passer leurs vacances sur l'archipel : ce « tourisme de retour » est devenu un pilier discret de l'économie locale." },
        ],
      },
      {
        id: "course-geographie-10-cap-vert-lesson-3",
        title: "Une démocratie qui ne vacille pas",
        blocks: [
          { type: "paragraphe", text: "Dans une région d'Afrique de l'Ouest où les coups d'État se multiplient ces dernières années, le Cap-Vert fait figure d'exception : ses institutions démocratiques, stables depuis l'instauration du multipartisme en 1990, n'ont jamais vacillé." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Praia" },
              { label: "Monnaie", valeur: "Escudo capverdien (CVE)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "5 juillet 1975" },
            ],
          },
          { type: "paragraphe", text: "Pauvre en ressources naturelles, l'archipel vit surtout du **tourisme**, des services et des transferts d'argent de sa diaspora. **Cidade Velha**, première ville coloniale européenne bâtie sous les tropiques, est classée à l'UNESCO." },
          {
            type: "aRetenir",
            points: [
              "Stable et démocratique depuis le multipartisme de 1990",
              "**Cidade Velha**, première ville coloniale d'Europe sous les tropiques",
              "L'économie vit du tourisme et des transferts de la diaspora",
            ],
          },
          { type: "leSavaisTu", text: "Fondée en 1462, **Cidade Velha** est la plus ancienne ville européenne construite sous les tropiques encore habitée aujourd'hui — plus vieille que la plupart des villes coloniales d'Amérique." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-10-cap-vert-quiz-1",
        question: "Le Cap-Vert est géographiquement…",
        options: ["Un pays enclavé", "Un archipel d'îles", "Une péninsule", "Un désert continental"],
        correctIndex: 1,
        explanation: "Le Cap-Vert est un archipel de dix îles volcaniques dans l'Atlantique, sans aucune frontière terrestre — un cas presque unique en Afrique.",
      },
      {
        id: "course-geographie-10-cap-vert-quiz-2",
        question: "Dans quel océan se trouve le Cap-Vert ?",
        options: ["L'océan Indien", "L'océan Atlantique", "L'océan Pacifique", "La mer Méditerranée"],
        correctIndex: 1,
        explanation: "L'archipel se situe dans l'Atlantique, à 570 km au large des côtes sénégalaises.",
      },
      {
        id: "course-geographie-10-cap-vert-quiz-3",
        question: "Quelle est la principale activité économique du Cap-Vert ?",
        options: ["L'extraction pétrolière", "Le tourisme", "L'industrie automobile", "L'exploitation minière"],
        correctIndex: 1,
        explanation: "Le tourisme, notamment balnéaire, est le moteur de l'économie capverdienne, pauvre en ressources naturelles, aux côtés des transferts d'argent de la diaspora.",
      },
      {
        id: "course-geographie-10-cap-vert-quiz-4",
        question: "Quelle est la langue officielle du Cap-Vert ?",
        options: ["Le français", "Le portugais", "L'espagnol", "L'anglais"],
        correctIndex: 1,
        explanation: "Ancienne colonie portugaise, le Cap-Vert a le portugais pour langue officielle ; le créole capverdien, né du métissage colonial, est la langue du quotidien.",
      },
      {
        id: "course-geographie-10-cap-vert-quiz-5",
        question: "Quelle est la capitale du Cap-Vert ?",
        options: ["Mindelo", "Praia", "Sal Rei", "Assomada"],
        correctIndex: 1,
        explanation: "Praia, sur l'île de Santiago, est la capitale du pays et son principal foyer urbain.",
      },
    ],
  },
  {
    id: "course-geographie-11-cote-divoire",
    categoryId: "geo",
    emoji: "🇨🇮",
    title: "Côte d'Ivoire",
    description: "La locomotive économique de l'Afrique de l'Ouest francophone et le premier producteur mondial de cacao. Découvre la Côte d'Ivoire.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-11-cote-divoire-lesson-1",
        title: "Une forêt qui recule vite",
        blocks: [
          { type: "paragraphe", text: "La forêt qui couvrait tout le sud de la Côte d'Ivoire a rétréci vite, rongée par l'expansion des plantations de cacao et de café. Au nord, la savane domine, jusqu'aux frontières du Mali et du Burkina Faso." },
          { type: "chiffreCle", valeur: "80 %", legende: "de la forêt disparue depuis les années 1960" },
          { type: "paragraphe", text: "À l'extrême ouest, les monts **Nimba** et Man portent une forêt montagnarde d'une grande richesse biologique. Les parcs de **Taï** et de la Comoé, classés à l'UNESCO, protègent ce qui reste de cette biodiversité." },
          {
            type: "aRetenir",
            points: [
              "Le sud était couvert de forêt, aujourd'hui très réduite",
              "Les monts **Nimba** et Man, à l'extrême ouest",
              "Les parcs de **Taï** et de la Comoé, classés à l'UNESCO",
            ],
          },
          { type: "leSavaisTu", text: "Le cacaoyer n'est pas originaire d'Afrique : il vient d'Amérique du Sud. Introduit au XIXe siècle, il a pourtant fait de la Côte d'Ivoire le premier producteur mondial de cacao." },
        ],
      },
      {
        id: "course-geographie-11-cote-divoire-lesson-2",
        title: "Venus de partout pour le cacao",
        blocks: [
          { type: "paragraphe", text: "La Côte d'Ivoire compte environ 30 millions d'habitants, mais une bonne partie d'entre eux ne sont pas nés dans le pays : les plantations de cacao et de café ont attiré des travailleurs venus du Burkina Faso, du Mali et de Guinée." },
          { type: "chiffreCle", valeur: "30 M", legende: "dont une forte part venue des pays voisins" },
          { type: "paragraphe", text: "Le pays est une mosaïque d'une soixantaine de groupes : les **Akan** dominent au centre et à l'est, les Krou au sud-ouest, les Mandé et les **Voltaïques** au nord. La question de la nationalité des populations d'origine étrangère a nourri de fortes tensions politiques." },
          {
            type: "aRetenir",
            points: [
              "Environ **30 millions** d'habitants, forte immigration régionale",
              "Une mosaïque de 60 groupes : **Akan**, Krou, Mandé, Voltaïques",
              "La question de la nationalité a nourri des tensions jusqu'en 2011",
            ],
          },
        ],
      },
      {
        id: "course-geographie-11-cote-divoire-lesson-3",
        title: "La moitié du chocolat du monde",
        blocks: [
          { type: "paragraphe", text: "Près de la moitié du cacao mondial pousse en Côte d'Ivoire, premier producteur de la planète. Le port d'Abidjan et une économie diversifiée en font aussi la première puissance économique de l'UEMOA." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Yamoussoukro" },
              { label: "Monnaie", valeur: "Franc CFA (XOF)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "7 août 1960" },
            ],
          },
          { type: "paragraphe", text: "Depuis 1983, **Yamoussoukro** est la capitale politique, où se dresse la basilique Notre-Dame-de-la-Paix, l'une des plus grandes églises du monde. **Abidjan**, bien plus peuplée, reste le poumon économique et la capitale de fait." },
          {
            type: "aRetenir",
            points: [
              "Premier producteur mondial de **cacao**, devant tous les autres",
              "**Yamoussoukro**, capitale politique ; Abidjan, capitale économique",
              "La plus grande économie francophone d'Afrique de l'Ouest",
            ],
          },
          { type: "leSavaisTu", text: "La basilique Notre-Dame-de-la-Paix de Yamoussoukro, achevée en 1989, est plus haute que Saint-Pierre de Rome — construite au milieu d'une savane, loin de toute grande ville." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-11-cote-divoire-quiz-1",
        question: "La Côte d'Ivoire est le premier producteur mondial de quoi ?",
        options: ["De cacao", "De pétrole", "De blé", "De coton"],
        correctIndex: 0,
        explanation: "La Côte d'Ivoire fournit à elle seule près de la moitié du cacao mondial, loin devant tous les autres pays producteurs.",
      },
      {
        id: "course-geographie-11-cote-divoire-quiz-2",
        question: "Quelle est la capitale politique de la Côte d'Ivoire ?",
        options: ["Abidjan", "Yamoussoukro", "Bouaké", "San-Pédro"],
        correctIndex: 1,
        explanation: "Yamoussoukro est la capitale politique depuis 1983 ; Abidjan reste la capitale économique, bien plus peuplée et dynamique.",
      },
      {
        id: "course-geographie-11-cote-divoire-quiz-3",
        question: "Quelle ville est la capitale économique de la Côte d'Ivoire ?",
        options: ["Abidjan", "Korhogo", "Daloa", "Man"],
        correctIndex: 0,
        explanation: "Abidjan, avec son grand port sur la lagune Ébrié, est le cœur économique du pays et l'une des plus grandes villes d'Afrique de l'Ouest.",
      },
      {
        id: "course-geographie-11-cote-divoire-quiz-4",
        question: "Quelle monnaie utilise la Côte d'Ivoire ?",
        options: ["Le franc CFA", "Le cedi", "Le naira", "Le leone"],
        correctIndex: 0,
        explanation: "La Côte d'Ivoire appartient à la zone franc CFA d'Afrique de l'Ouest (UEMOA), dont elle est la première puissance économique.",
      },
      {
        id: "course-geographie-11-cote-divoire-quiz-5",
        question: "De quoi le sud de la Côte d'Ivoire est-il principalement couvert ?",
        options: ["De désert", "De forêt tropicale", "De toundra", "De steppe"],
        correctIndex: 1,
        explanation: "Le sud du pays était couvert de forêt tropicale humide, aujourd'hui très réduite par l'expansion des cultures de cacao et de café ; le nord reste une savane.",
      },
    ],
  },
  {
    id: "course-geographie-12-gambie",
    categoryId: "geo",
    emoji: "🇬🇲",
    title: "Gambie",
    description: "Le plus petit pays d'Afrique continentale : un ruban de terre autour d'un fleuve, enclavé dans le Sénégal. Découvre la Gambie.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-12-gambie-lesson-1",
        title: "Un pays qui est un fleuve",
        blocks: [
          { type: "paragraphe", text: "La Gambie n'est presque rien d'autre qu'un fleuve : une étroite bande de terre qui suit ses deux rives, sur quelques kilomètres de large, enclavée dans le Sénégal de tous côtés sauf vers l'océan." },
          { type: "chiffreCle", valeur: "11 300 km²", legende: "le plus petit pays d'Afrique continentale" },
          { type: "paragraphe", text: "Cette forme singulière vient du tracé colonial britannique, calqué sur le cours du fleuve **Gambie**. Navigable sur presque toute sa longueur, il a longtemps servi de voie de pénétration commerciale, puis de la **traite négrière**." },
          {
            type: "aRetenir",
            points: [
              "Le plus petit pays d'Afrique continentale",
              "Une bande de terre qui suit le **fleuve Gambie**",
              "Presque entièrement enclavée dans le **Sénégal**",
            ],
          },
          { type: "leSavaisTu", text: "Le long du fleuve, les mangroves basses abritent une faune abondante — oiseaux migrateurs et primates trouvent refuge dans plusieurs réserves protégées, à quelques kilomètres seulement de la capitale." },
        ],
      },
      {
        id: "course-geographie-12-gambie-lesson-2",
        title: "La plus petite, la plus dense",
        blocks: [
          { type: "paragraphe", text: "Malgré sa taille minuscule, la Gambie affiche l'une des densités de population les plus élevées de toute l'Afrique continentale : presque tout le monde vit autour de l'estuaire, entre Banjul et Serekunda, sa voisine bien plus peuplée." },
          { type: "chiffreCle", valeur: "2,7 M", legende: "sur un territoire minuscule, très densément peuplé" },
          { type: "paragraphe", text: "On y trouve les mêmes peuples que dans la région : Mandingues, Peuls, Wolofs, Diolas. L'**anglais** est langue officielle, contrairement au Sénégal francophone tout autour. Le pays est surnommé la « **Smiling Coast** », la côte souriante." },
          {
            type: "aRetenir",
            points: [
              "Environ **2,7 millions** d'habitants, très densément regroupés",
              "L'**anglais**, langue officielle, contraste avec le Sénégal francophone",
              "Surnommée la « Smiling Coast », la côte souriante",
            ],
          },
          { type: "leSavaisTu", text: "Malgré l'anglais d'un côté et le français de l'autre, Gambiens et Sénégalais circulent en permanence de part et d'autre de la frontière — familles, commerce et marchés ignorent largement la ligne tracée par les colons." },
        ],
      },
      {
        id: "course-geographie-12-gambie-lesson-3",
        title: "L'île qui a inspiré Racines",
        blocks: [
          { type: "paragraphe", text: "Sur une petite île du fleuve Gambie, l'ancienne prison de Kunta Kinteh a inspiré le roman Racines d'Alex Haley, best-seller mondial qui a fait connaître l'histoire de la traite négrière à des millions de lecteurs." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Banjul" },
              { label: "Monnaie", valeur: "Dalasi (GMD)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "18 février 1965" },
            ],
          },
          { type: "paragraphe", text: "L'arachide reste la principale exportation agricole, aux côtés de la pêche et surtout du **tourisme balnéaire**, qui attire des Européens chaque hiver. Les **cercles mégalithiques de Sénégambie**, partagés avec le Sénégal, sont classés à l'UNESCO." },
          {
            type: "aRetenir",
            points: [
              "L'**arachide** et le tourisme balnéaire portent l'économie",
              "L'île de **Kunta Kinteh** a inspiré le roman Racines",
              "Les cercles mégalithiques de Sénégambie, classés à l'UNESCO",
            ],
          },
          { type: "leSavaisTu", text: "Grâce à son fleuve navigable loin à l'intérieur des terres, la Gambie a été l'un des tout premiers points de contact commercial entre l'Europe et l'Afrique de l'Ouest, dès le XVe siècle." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-12-gambie-quiz-1",
        question: "La Gambie est le plus petit pays de quel ensemble ?",
        options: ["Du monde", "De l'Afrique continentale", "De l'Afrique australe", "Du Maghreb"],
        correctIndex: 1,
        explanation: "Avec environ 11 300 km², la Gambie est le plus petit pays du continent africain, réduite à une bande de terre autour de son fleuve.",
      },
      {
        id: "course-geographie-12-gambie-quiz-2",
        question: "Autour de quel élément géographique le pays est-il entièrement organisé ?",
        options: ["Le fleuve Gambie", "Un grand lac", "Une chaîne de montagnes", "Un volcan"],
        correctIndex: 0,
        explanation: "La Gambie n'est presque rien d'autre qu'un long ruban de terre suivant le fleuve du même nom, navigable sur presque toute sa longueur.",
      },
      {
        id: "course-geographie-12-gambie-quiz-3",
        question: "Quel pays entoure presque entièrement la Gambie ?",
        options: ["La Guinée", "Le Sénégal", "Le Mali", "La Mauritanie"],
        correctIndex: 1,
        explanation: "La Gambie est enclavée dans le Sénégal de tous côtés, sauf par sa courte façade atlantique — un cas presque unique en Afrique.",
      },
      {
        id: "course-geographie-12-gambie-quiz-4",
        question: "Quelle est la langue officielle de la Gambie ?",
        options: ["Le français", "L'anglais", "Le portugais", "L'arabe"],
        correctIndex: 1,
        explanation: "Ancienne colonie britannique, la Gambie a l'anglais pour langue officielle, contrairement à son voisin sénégalais francophone qui l'entoure presque entièrement.",
      },
      {
        id: "course-geographie-12-gambie-quiz-5",
        question: "Quelle est la capitale de la Gambie ?",
        options: ["Serekunda", "Banjul", "Brikama", "Farafenni"],
        correctIndex: 1,
        explanation: "Banjul, à l'embouchure du fleuve, est la capitale du pays ; Serekunda, toute proche, en est la ville la plus peuplée.",
      },
    ],
  },
  {
    id: "course-geographie-13-ghana",
    categoryId: "geo",
    emoji: "🇬🇭",
    title: "Ghana",
    description: "Vitrine démocratique de l'Afrique de l'Ouest anglophone, pays de l'or et du cacao, ancienne « Gold Coast ». Découvre le Ghana.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-13-ghana-lesson-1",
        title: "Au centre du monde",
        blocks: [
          { type: "paragraphe", text: "Le Ghana aime se présenter comme situé « au centre du monde » : le méridien de Greenwich et l'équateur se croisent presque à sa porte, un privilège géographique que peu de pays peuvent revendiquer." },
          { type: "chiffreCle", valeur: "0° / 0°", legende: "méridien de Greenwich et équateur, presque réunis" },
          { type: "paragraphe", text: "Le pays abrite le lac **Volta**, l'un des plus grands lacs artificiels du monde, créé par le barrage d'**Akosombo**. Il fournit l'essentiel de l'électricité du pays et sert aussi de voie de transport intérieur." },
          {
            type: "aRetenir",
            points: [
              "Traversé par le méridien de **Greenwich** et l'équateur",
              "Le lac **Volta**, l'un des plus grands lacs artificiels du monde",
              "Le barrage d'Akosombo fournit l'essentiel de l'électricité du pays",
            ],
          },
          { type: "leSavaisTu", text: "À Tema, près d'Accra, une borne marque l'endroit exact où passe le méridien de Greenwich — les visiteurs peuvent y poser un pied dans chaque hémisphère, est et ouest." },
        ],
      },
      {
        id: "course-geographie-13-ghana-lesson-2",
        title: "Un trône d'or toujours vivant",
        blocks: [
          { type: "paragraphe", text: "Chez les Ashantis, le pouvoir royal repose sur un tabouret d'or sacré, jamais utilisé comme siège : le roi actuel, l'Asantehene, en est le gardien, dans une tradition qui traverse les siècles jusqu'à aujourd'hui." },
          { type: "chiffreCle", valeur: "34 M", legende: "dont une majorité de plus en plus urbaine" },
          { type: "paragraphe", text: "Les peuples **akan** (Ashantis, Fantis) sont les plus nombreux, aux côtés des Ewe, Ga et Dagomba. Le christianisme domine au sud, l'islam au nord. Le pays est aussi connu pour son tissu traditionnel **kente**, tissé à l'origine par les Ashantis et les Ewe." },
          {
            type: "aRetenir",
            points: [
              "Environ **34 millions** d'habitants, de plus en plus urbains",
              "Les **Akan** (Ashantis, Fantis) sont le premier groupe du pays",
              "Le tissu **kente**, tissé par les Ashantis, symbole culturel",
            ],
          },
        ],
      },
      {
        id: "course-geographie-13-ghana-lesson-3",
        title: "Premier à devenir indépendant",
        blocks: [
          { type: "paragraphe", text: "En 1957, le Ghana devient le tout premier pays d'Afrique subsaharienne à accéder à l'indépendance, ouvrant la voie à une vague de décolonisations qui balaiera le continent dans les décennies suivantes." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Accra" },
              { label: "Monnaie", valeur: "Cedi ghanéen (GHS)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "6 mars 1957" },
            ],
          },
          { type: "paragraphe", text: "Le Ghana est l'un des premiers producteurs d'**or** d'Afrique et le deuxième producteur mondial de **cacao**. Les forts et châteaux de la traite négrière — Cape Coast, Elmina — sont classés à l'UNESCO, témoins d'un lourd passé." },
          {
            type: "aRetenir",
            points: [
              "Premier pays d'Afrique subsaharienne indépendant, en **1957**",
              "Grand producteur d'**or** et deuxième producteur mondial de cacao",
              "Les forts de Cape Coast et Elmina, classés à l'UNESCO",
            ],
          },
          { type: "leSavaisTu", text: "Kwame **Nkrumah**, premier président du Ghana, fut aussi l'un des fondateurs de l'Organisation de l'unité africaine en 1963 — l'ancêtre direct de l'actuelle Union africaine." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-13-ghana-quiz-1",
        question: "Le Ghana est l'un des premiers producteurs africains de quel métal précieux ?",
        options: ["L'or", "L'argent", "Le platine", "Le cuivre"],
        correctIndex: 0,
        explanation: "Ancienne « Gold Coast » (Côte de l'Or), le Ghana est l'un des premiers producteurs d'or d'Afrique, aux côtés du cacao et du pétrole offshore.",
      },
      {
        id: "course-geographie-13-ghana-quiz-2",
        question: "Comment s'appelle le grand lac artificiel du Ghana ?",
        options: ["Le lac Tchad", "Le lac Volta", "Le lac Victoria", "Le lac Kariba"],
        correctIndex: 1,
        explanation: "Le lac Volta, créé par le barrage d'Akosombo, est l'un des plus vastes lacs artificiels du monde ; il fournit l'essentiel de l'électricité du pays.",
      },
      {
        id: "course-geographie-13-ghana-quiz-3",
        question: "Quelle est la langue officielle du Ghana ?",
        options: ["Le français", "L'anglais", "Le portugais", "L'arabe"],
        correctIndex: 1,
        explanation: "Ancienne colonie britannique, le Ghana a l'anglais pour langue officielle, comme la plupart des pays du golfe de Guinée qui ne sont pas francophones.",
      },
      {
        id: "course-geographie-13-ghana-quiz-4",
        question: "Quelle est la capitale du Ghana ?",
        options: ["Kumasi", "Accra", "Tamale", "Takoradi"],
        correctIndex: 1,
        explanation: "Accra, sur la côte atlantique, non loin du méridien de Greenwich, est la capitale et le principal foyer urbain du pays.",
      },
      {
        id: "course-geographie-13-ghana-quiz-5",
        question: "En 1957, le Ghana est devenu le premier pays indépendant de quelle région ?",
        options: ["D'Afrique du Nord", "D'Afrique subsaharienne", "D'Afrique australe", "D'Afrique de l'Est"],
        correctIndex: 1,
        explanation: "Sous Kwame Nkrumah, futur cofondateur de l'Organisation de l'unité africaine, le Ghana fut en 1957 le premier État d'Afrique subsaharienne à accéder à l'indépendance.",
      },
    ],
  },
  {
    id: "course-geographie-14-guinee",
    categoryId: "geo",
    emoji: "🇬🇳",
    title: "Guinée",
    description: "Le « château d'eau de l'Afrique de l'Ouest », riche en bauxite, d'où naissent de grands fleuves. Découvre la Guinée.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-14-guinee-lesson-1",
        title: "D'ici naissent trois grands fleuves",
        blocks: [
          { type: "paragraphe", text: "Trois des plus grands fleuves d'Afrique de l'Ouest naissent tous ici, dans le même massif : le Niger, le Sénégal et la Gambie prennent leur source dans le Fouta-Djalon, au cœur de la Guinée." },
          { type: "chiffreCle", valeur: "3 fleuves", legende: "naissent tous dans le massif du Fouta-Djalon" },
          { type: "paragraphe", text: "Le pays se divise en quatre régions naturelles : la Basse-Guinée côtière, la Moyenne-Guinée du **Fouta-Djalon**, la Haute-Guinée de savane et la Guinée forestière. Le **mont Nimba**, à cheval sur trois pays, en est le sommet emblématique." },
          {
            type: "aRetenir",
            points: [
              "Le **Niger**, le Sénégal et la Gambie naissent en Guinée",
              "Quatre régions naturelles, du littoral à la forêt",
              "Le **mont Nimba**, à cheval sur trois pays",
            ],
          },
          { type: "leSavaisTu", text: "Le Fouta-Djalon est surnommé le « château d'eau de l'Afrique de l'Ouest » : au-delà du Niger, du Sénégal et de la Gambie, une dizaine d'autres cours d'eau y prennent aussi leur source." },
        ],
      },
      {
        id: "course-geographie-14-guinee-lesson-2",
        title: "Quatre régions, quatre peuples",
        blocks: [
          { type: "paragraphe", text: "La Guinée compte environ 14 millions d'habitants, répartis entre quatre régions naturelles bien distinctes : chacune a son peuple, sa langue dominante et son histoire propre, de la côte à la forêt." },
          { type: "chiffreCle", valeur: "14 M", legende: "répartis entre quatre régions bien distinctes" },
          { type: "paragraphe", text: "Les **Peuls** du Fouta-Djalon, éleveurs et commerçants, les **Malinkés** de Haute-Guinée, héritiers de l'ancien empire du Mali, et les Soussous de la côte forment les trois grands ensembles culturels, aux côtés de nombreux peuples forestiers au sud-est." },
          {
            type: "aRetenir",
            points: [
              "Environ **14 millions** d'habitants, répartis en quatre régions",
              "Les **Peuls** du Fouta-Djalon, éleveurs et commerçants",
              "Les Malinkés, héritiers directs de l'ancien empire du Mali",
            ],
          },
          { type: "leSavaisTu", text: "Les peuples forestiers du sud-est, comme les Toma et les Guerzé, sont réputés pour leurs masques rituels, aujourd'hui exposés dans les plus grands musées d'art africain du monde." },
        ],
      },
      {
        id: "course-geographie-14-guinee-lesson-3",
        title: "Le pays qui a dit non",
        blocks: [
          { type: "paragraphe", text: "En 1958, seule parmi toutes les colonies françaises d'Afrique, la Guinée vote « non » au référendum du général de Gaulle, sous l'impulsion de Sékou Touré — et obtient son indépendance immédiate, sans transition." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Conakry" },
              { label: "Monnaie", valeur: "Franc guinéen (GNF)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "2 octobre 1958" },
            ],
          },
          { type: "paragraphe", text: "La Guinée détient les plus grandes réserves mondiales de **bauxite**, le minerai de l'aluminium, et en est un premier exportateur. Elle possède aussi de l'or, du diamant et d'énormes gisements de fer au **mont Simandou**." },
          {
            type: "aRetenir",
            points: [
              "Premières réserves mondiales de **bauxite**",
              "A dit « non » à la France en **1958**, seule dans la région",
              "D'immenses gisements de fer au **mont Simandou**",
            ],
          },
          { type: "leSavaisTu", text: "Après le « non » guinéen, la France se retire brutalement en quelques semaines, emportant jusqu'aux dossiers administratifs et parfois le matériel des bureaux — un départ resté dans les mémoires." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-14-guinee-quiz-1",
        question: "Le massif du Fouta-Djalon, en Guinée, est surnommé le…",
        options: ["« Château d'eau de l'Afrique de l'Ouest »", "« Toit de l'Afrique »", "« Grenier de l'Afrique »", "« Poumon de l'Afrique »"],
        correctIndex: 0,
        explanation: "De nombreux grands fleuves d'Afrique de l'Ouest prennent leur source dans le Fouta-Djalon, d'où ce surnom de « château d'eau de l'Afrique de l'Ouest ».",
      },
      {
        id: "course-geographie-14-guinee-quiz-2",
        question: "Quels grands fleuves prennent leur source en Guinée ?",
        options: ["Le Congo et l'Oubangui", "Le Niger, le Sénégal et la Gambie", "Le Nil et le Zambèze", "L'Orange et le Limpopo"],
        correctIndex: 1,
        explanation: "Le Niger, le Sénégal et la Gambie naissent tous dans le massif du Fouta-Djalon, au cœur de la Guinée.",
      },
      {
        id: "course-geographie-14-guinee-quiz-3",
        question: "La Guinée possède les plus grandes réserves mondiales de quel minerai ?",
        options: ["Le pétrole", "La bauxite", "Le charbon", "L'uranium"],
        correctIndex: 1,
        explanation: "La bauxite, dont on tire l'aluminium, est la grande richesse minière de la Guinée, qui en détient les plus grandes réserves mondiales.",
      },
      {
        id: "course-geographie-14-guinee-quiz-4",
        question: "Quelle est la capitale de la Guinée ?",
        options: ["Kankan", "Conakry", "Labé", "Nzérékoré"],
        correctIndex: 1,
        explanation: "Conakry, bâtie sur une presqu'île de la côte atlantique, est la capitale du pays.",
      },
      {
        id: "course-geographie-14-guinee-quiz-5",
        question: "Quelle monnaie utilise la Guinée ?",
        options: ["Le franc CFA", "Le franc guinéen", "Le cedi", "Le dalasi"],
        correctIndex: 1,
        explanation: "Contrairement à plusieurs de ses voisins francophones, la Guinée n'utilise pas le franc CFA mais sa propre monnaie, le franc guinéen — héritage du « non » de 1958.",
      },
    ],
  },
  {
    id: "course-geographie-15-guinee-bissau",
    categoryId: "geo",
    emoji: "🇬🇼",
    title: "Guinée-Bissau",
    description: "Un petit pays lusophone d'estuaires et d'îles, marqué par l'instabilité politique. Découvre la Guinée-Bissau et son archipel des Bijagós.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-15-guinee-bissau-lesson-1",
        title: "Une mer qui grignote la terre",
        blocks: [
          { type: "paragraphe", text: "Un mètre ou deux d'altitude à peine séparent une bonne partie de la Guinée-Bissau de l'océan. Estuaires, mangroves et une trentaine d'îles composent un pays parmi les plus exposés du monde à la montée des eaux." },
          { type: "chiffreCle", valeur: "36 100 km²", legende: "un des plus petits pays du continent" },
          { type: "paragraphe", text: "L'archipel des **Bijagós**, réserve de biosphère de l'UNESCO, abrite une faune remarquable, dont des **hippopotames marins**. Ses îles, difficiles d'accès, ont conservé des pratiques traditionnelles fortes et une riche biodiversité, tortues de mer et lamantins compris." },
          {
            type: "aRetenir",
            points: [
              "Un pays très bas, exposé à la montée des eaux",
              "L'archipel des **Bijagós**, réserve de biosphère de l'UNESCO",
              "Des hippopotames marins vivent dans les eaux salées de l'archipel",
            ],
          },
          { type: "leSavaisTu", text: "Les hippopotames des Bijagós font partie des très rares hippopotames au monde à vivre dans l'eau salée, nageant entre les mangroves et les plages de l'archipel." },
        ],
      },
      {
        id: "course-geographie-15-guinee-bissau-lesson-2",
        title: "Les riziculteurs qui gardent leurs dieux",
        blocks: [
          { type: "paragraphe", text: "Les Balantes, premier peuple du pays, sont avant tout des riziculteurs — et la majorité d'entre eux pratique encore des religions traditionnelles, plutôt que l'islam ou le christianisme, largement majoritaires ailleurs dans la région." },
          { type: "chiffreCle", valeur: "2,1 M", legende: "d'habitants, surtout ruraux et riziculteurs" },
          { type: "paragraphe", text: "Les Peuls et Mandingues du nord et de l'est sont majoritairement musulmans, aux côtés des Papel. Le **créole bissau-guinéen**, plus parlé que le portugais officiel, unit ce pays où l'**armée** a longtemps pesé sur la vie politique." },
          {
            type: "aRetenir",
            points: [
              "Environ **2,1 millions** d'habitants, majoritairement ruraux",
              "Les **Balantes**, riziculteurs, souvent animistes",
              "Le créole bissau-guinéen est plus parlé que le portugais",
            ],
          },
          { type: "leSavaisTu", text: "Depuis son indépendance, la Guinée-Bissau a connu tant de coups d'État que la plupart de ses présidents élus n'ont jamais achevé leur mandat jusqu'au bout." },
        ],
      },
      {
        id: "course-geographie-15-guinee-bissau-lesson-3",
        title: "Une noix fait vivre le pays",
        blocks: [
          { type: "paragraphe", text: "Une seule culture, la noix de cajou, représente l'essentiel des exportations de la Guinée-Bissau — une dépendance risquée pour l'une des économies les plus pauvres et les plus instables d'Afrique de l'Ouest." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Bissau" },
              { label: "Monnaie", valeur: "Franc CFA (XOF)" },
              { label: "Régime", valeur: "Transition politique" },
              { label: "Indépendance", valeur: "24 septembre 1973" },
            ],
          },
          { type: "paragraphe", text: "L'indépendance a été obtenue au terme d'une **guerre de libération** menée par **Amílcar Cabral**, figure majeure de la pensée panafricaine, assassiné peu avant que son pays ne devienne enfin libre." },
          {
            type: "aRetenir",
            points: [
              "La noix de **cajou** est la première exportation du pays",
              "Indépendance obtenue en **1973-1974**, après la lutte de Cabral",
              "Une des économies les plus pauvres et instables de la région",
            ],
          },
          { type: "leSavaisTu", text: "**Amílcar Cabral** est assassiné en janvier 1973, quelques mois seulement avant que la Guinée-Bissau ne proclame unilatéralement son indépendance, qu'il n'aura jamais vue." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-15-guinee-bissau-quiz-1",
        question: "Quel archipel appartient à la Guinée-Bissau ?",
        options: ["Les Canaries", "Les Bijagós", "Les Seychelles", "Zanzibar"],
        correctIndex: 1,
        explanation: "L'archipel des Bijagós, réserve de biosphère de l'UNESCO, abrite une faune remarquable, dont de rares hippopotames capables de vivre en eau salée.",
      },
      {
        id: "course-geographie-15-guinee-bissau-quiz-2",
        question: "Quelle est la principale exportation agricole de la Guinée-Bissau ?",
        options: ["Le cacao", "La noix de cajou", "Le café", "Le coton"],
        correctIndex: 1,
        explanation: "La noix de cajou (anacarde) est de loin la première exportation du pays, une dépendance risquée pour l'une des économies les plus pauvres de la région.",
      },
      {
        id: "course-geographie-15-guinee-bissau-quiz-3",
        question: "Quelle est la langue officielle de la Guinée-Bissau ?",
        options: ["Le français", "Le portugais", "L'anglais", "L'espagnol"],
        correctIndex: 1,
        explanation: "Ancienne colonie portugaise, la Guinée-Bissau a le portugais pour langue officielle ; le créole bissau-guinéen, plus parlé au quotidien, unit les différents peuples du pays.",
      },
      {
        id: "course-geographie-15-guinee-bissau-quiz-4",
        question: "Quelle est la capitale de la Guinée-Bissau ?",
        options: ["Bissau", "Bafatá", "Gabú", "Cacheu"],
        correctIndex: 0,
        explanation: "Bissau donne son nom au pays et en est la capitale, principal foyer urbain et administratif.",
      },
      {
        id: "course-geographie-15-guinee-bissau-quiz-5",
        question: "Quel pays borde la Guinée-Bissau au nord ?",
        options: ["Le Sénégal", "Le Mali", "La Mauritanie", "Le Ghana"],
        correctIndex: 0,
        explanation: "La Guinée-Bissau a le Sénégal pour voisin au nord et la Guinée au sud-est, encadrant un pays très bas, exposé à la montée des eaux.",
      },
    ],
  },
  {
    id: "course-geographie-16-liberia",
    categoryId: "geo",
    emoji: "🇱🇷",
    title: "Liberia",
    description: "La plus ancienne république d'Afrique, fondée par des Afro-Américains affranchis. Découvre le Liberia, ses forêts et son histoire singulière.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-16-liberia-lesson-1",
        title: "La dernière grande forêt intacte",
        blocks: [
          { type: "paragraphe", text: "Le Liberia a été fondé en 1847 par d'anciens esclaves afro-américains, qui ont donné à leur nouvelle capitale le nom d'un président des États-Unis. Le pays conserve aujourd'hui l'une des dernières grandes forêts primaires intactes d'Afrique de l'Ouest." },
          { type: "chiffreCle", valeur: "40 %", legende: "de la forêt guinéenne restante se trouve ici" },
          { type: "paragraphe", text: "Cette forêt abrite des espèces menacées comme le **chimpanzé** ou l'**hippopotame pygmée**. Protégée en partie, elle reste soumise à la pression de l'exploitation du bois et de l'agriculture, qui la grignote peu à peu." },
          {
            type: "aRetenir",
            points: [
              "L'une des dernières grandes forêts primaires d'Afrique de l'Ouest",
              "Refuge du **chimpanzé** et de l'hippopotame pygmée",
              "La forêt recule sous la pression du bois et de l'agriculture",
            ],
          },
          { type: "leSavaisTu", text: "Les guerres civiles des années 1990-2000, en interrompant l'exploitation forestière industrielle, ont paradoxalement contribué à préserver une partie de cette forêt aujourd'hui exceptionnelle." },
        ],
      },
      {
        id: "course-geographie-16-liberia-lesson-2",
        title: "Des Américains devenus Africains",
        blocks: [
          { type: "paragraphe", text: "En 1847, d'anciens esclaves affranchis venus des États-Unis fondent le Liberia et deviennent les « Américo-Libériens » — une minorité qui dominera la vie politique et économique du pays pendant plus d'un siècle après l'indépendance." },
          { type: "chiffreCle", valeur: "5,4 M", legende: "d'habitants, très urbanisés depuis les guerres" },
          { type: "paragraphe", text: "La population mêle des peuples autochtones — **Kpelle**, Bassa, Gio — et les descendants des Américo-Libériens. Cette domination minoritaire a nourri des tensions profondes, comptant parmi les causes des **guerres civiles** des années 1990-2000." },
          {
            type: "aRetenir",
            points: [
              "Environ **5,4 millions** d'habitants, très urbanisés",
              "Fondé par des esclaves affranchis, devenus les Américo-Libériens",
              "Leur domination a nourri les **guerres civiles** des années 1990-2000",
            ],
          },
          { type: "leSavaisTu", text: "Les guerres civiles ont fait affluer à Monrovia tant de réfugiés fuyant les combats dans les comtés de l'intérieur qu'elle en reste, de très loin, la ville la plus peuplée du pays." },
        ],
      },
      {
        id: "course-geographie-16-liberia-lesson-3",
        title: "Un drapeau presque américain",
        blocks: [
          { type: "paragraphe", text: "Le drapeau du Liberia ressemble à s'y méprendre à celui des États-Unis, avec ses bandes et son étoile — un clin d'œil assumé à l'histoire du pays, fondé par des colons venus d'Amérique." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Monrovia" },
              { label: "Monnaie", valeur: "Dollar libérien (LRD)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "26 juillet 1847" },
            ],
          },
          { type: "paragraphe", text: "L'économie repose sur le **caoutchouc**, avec les plantations historiques de Firestone, le minerai de fer et le bois. Le Liberia possède aussi l'un des plus grands **pavillons de complaisance** du monde pour l'immatriculation de navires." },
          {
            type: "aRetenir",
            points: [
              "Fondé en 1847, la plus ancienne république d'**Afrique**",
              "Le **caoutchouc** de Firestone reste un pilier économique",
              "Un des plus grands registres maritimes du monde",
            ],
          },
          { type: "leSavaisTu", text: "**Ellen Johnson Sirleaf**, présidente de 2006 à 2018, fut la première femme élue chef d'État en Afrique. Elle a reçu le prix Nobel de la paix pour son rôle dans la reconstruction du pays." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-16-liberia-quiz-1",
        question: "Le Liberia a été fondé en 1847 par…",
        options: ["Des colons britanniques", "Des esclaves afro-américains affranchis", "Des marchands portugais", "Des explorateurs français"],
        correctIndex: 1,
        explanation: "D'anciens esclaves afro-américains affranchis fondèrent le Liberia en 1847, en donnant à leur capitale le nom d'un président des États-Unis ; c'est la plus ancienne république d'Afrique.",
      },
      {
        id: "course-geographie-16-liberia-quiz-2",
        question: "Quelle est la capitale du Liberia ?",
        options: ["Monrovia", "Gbarnga", "Buchanan", "Kakata"],
        correctIndex: 0,
        explanation: "Monrovia, nommée d'après le président américain James Monroe, est la capitale du pays et sa ville de très loin la plus peuplée.",
      },
      {
        id: "course-geographie-16-liberia-quiz-3",
        question: "Quelle est la langue officielle du Liberia ?",
        options: ["Le français", "L'anglais", "Le portugais", "Le créole"],
        correctIndex: 1,
        explanation: "Le Liberia, lié aux États-Unis par son histoire, a l'anglais pour langue officielle.",
      },
      {
        id: "course-geographie-16-liberia-quiz-4",
        question: "Le drapeau du Liberia s'inspire de celui de quel pays ?",
        options: ["Le Royaume-Uni", "Les États-Unis", "La France", "Le Portugal"],
        correctIndex: 1,
        explanation: "Avec ses bandes et son étoile unique, le drapeau libérien ressemble à s'y méprendre à la bannière étoilée américaine.",
      },
      {
        id: "course-geographie-16-liberia-quiz-5",
        question: "Ellen Johnson Sirleaf fut la première femme à occuper quelle fonction en Afrique ?",
        options: ["Secrétaire générale de l'ONU", "Chef d'État élue", "Présidente de l'Union africaine", "Prix Nobel de littérature"],
        correctIndex: 1,
        explanation: "Élue en 2006, Ellen Johnson Sirleaf fut la première femme élue à la tête d'un État africain ; elle reçut le prix Nobel de la paix pour son rôle dans la reconstruction du pays.",
      },
    ],
  },
  {
    id: "course-geographie-17-mali",
    categoryId: "geo",
    emoji: "🇲🇱",
    title: "Mali",
    description: "Un vaste pays sahélien traversé par le fleuve Niger, héritier des grands empires et de Tombouctou. Découvre le Mali.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-17-mali-lesson-1",
        title: "Un delta qui défie le désert",
        blocks: [
          { type: "paragraphe", text: "Au cœur du Sahel, là où tout devrait être sec, le fleuve Niger crée un immense delta intérieur qui nourrit pêche, riziculture et élevage pour des centaines de milliers de personnes." },
          { type: "chiffreCle", valeur: "1,24 M km²", legende: "dont deux tiers sont sahariens" },
          { type: "paragraphe", text: "Plus au sud, la falaise de **Bandiagara**, en pays dogon, domine un plateau gréseux exceptionnel, à la fois pour son paysage et pour le patrimoine culturel qu'il abrite. Le nord souffre, lui, d'une forte **insécurité** depuis plusieurs années." },
          {
            type: "aRetenir",
            points: [
              "Le fleuve **Niger** crée un delta intérieur unique au Sahel",
              "Deux tiers du pays sont **sahariens**, au nord",
              "La falaise de **Bandiagara** domine le pays dogon",
            ],
          },
          { type: "leSavaisTu", text: "Chaque année, des millions d'oiseaux migrateurs venus d'Europe font escale dans le delta intérieur du Niger, une oasis inattendue au beau milieu du Sahel." },
        ],
      },
      {
        id: "course-geographie-17-mali-lesson-2",
        title: "Le Sahara vide, le fleuve plein",
        blocks: [
          { type: "paragraphe", text: "Le Mali compte environ 23 millions d'habitants, mais presque tout le monde vit le long du fleuve Niger ou dans le sud plus arrosé. Le nord saharien, lui, reste presque vide, et de plus en plus difficile d'accès." },
          { type: "chiffreCle", valeur: "23 M", legende: "concentrés le long du Niger, le nord presque vide" },
          { type: "paragraphe", text: "La société réunit **Bambaras**, Peuls, Songhaïs, Touaregs, Soninkés et Dogons. Le français est officiel, le bambara très parlé. Cette diversité, que la crise sécuritaire du nord et du centre a mise à rude épreuve depuis **2012**, reste la grande richesse du pays." },
          {
            type: "aRetenir",
            points: [
              "Environ **23 millions** d'habitants, concentrés le long du Niger",
              "**Bambaras**, Peuls, Songhaïs, Touaregs, Dogons : une grande diversité",
              "La crise sécuritaire pèse sur cette diversité depuis **2012**",
            ],
          },
        ],
      },
      {
        id: "course-geographie-17-mali-lesson-3",
        title: "La ville aux mille manuscrits",
        blocks: [
          { type: "paragraphe", text: "À Tombouctou, des centaines de milliers de manuscrits anciens dorment encore dans des bibliothèques familiales, certains vieux de plusieurs siècles — un savoir écrit qui a longtemps fait la renommée de la ville dans tout le monde musulman." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Bamako" },
              { label: "Monnaie", valeur: "Franc CFA (XOF)" },
              { label: "Régime", valeur: "Transition militaire" },
              { label: "Indépendance", valeur: "22 septembre 1960" },
            ],
          },
          { type: "paragraphe", text: "L'or est la grande ressource du pays, l'un des plus grands producteurs africains, devant le coton. Le Mali est l'héritier de puissants empires précoloniaux — celui du **Ghana**, du **Mali** de Mansa Moussa, et le Songhaï." },
          {
            type: "aRetenir",
            points: [
              "L'**or** est la grande ressource du pays",
              "Héritier des empires du Ghana, du Mali et du **Songhaï**",
              "**Tombouctou** et Djenné, villes-manuscrits classées à l'UNESCO",
            ],
          },
          { type: "leSavaisTu", text: "La grande mosquée de **Djenné**, plus grand édifice en terre crue du monde, est replâtrée chaque année par toute la ville lors d'une grande fête collective." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-17-mali-quiz-1",
        question: "Quel grand fleuve traverse le Mali et y forme un delta intérieur ?",
        options: ["Le Sénégal", "Le Niger", "Le Congo", "La Volta"],
        correctIndex: 1,
        explanation: "Le fleuve Niger est l'axe vital du Mali ; son delta intérieur, une exception écologique au milieu du Sahel, nourrit pêche, riziculture et élevage pour des centaines de milliers de personnes.",
      },
      {
        id: "course-geographie-17-mali-quiz-2",
        question: "Quelle ville historique malienne, célèbre pour ses manuscrits, est classée à l'UNESCO ?",
        options: ["Tombouctou", "Le Cap", "Lagos", "Nairobi"],
        correctIndex: 0,
        explanation: "Tombouctou fut un grand centre de savoir islamique ; ses centaines de milliers de manuscrits et ses mosquées de terre sont classés à l'UNESCO.",
      },
      {
        id: "course-geographie-17-mali-quiz-3",
        question: "Quelle est la principale ressource minière du Mali ?",
        options: ["Le pétrole", "L'or", "Le cuivre", "Le charbon"],
        correctIndex: 1,
        explanation: "Le Mali est l'un des grands producteurs d'or du continent africain, aux côtés du coton et de l'élevage.",
      },
      {
        id: "course-geographie-17-mali-quiz-4",
        question: "Quelle est la capitale du Mali ?",
        options: ["Ségou", "Bamako", "Sikasso", "Gao"],
        correctIndex: 1,
        explanation: "Bamako, sur le fleuve Niger, est la capitale et la plus grande ville du pays.",
      },
      {
        id: "course-geographie-17-mali-quiz-5",
        question: "Après avoir quitté la CEDEAO, le Mali a formé quelle alliance avec le Burkina et le Niger ?",
        options: ["La SADC", "L'Alliance des États du Sahel (AES)", "L'Union du Maghreb arabe", "La Communauté d'Afrique de l'Est"],
        correctIndex: 1,
        explanation: "Les trois pays sahéliens — Mali, Burkina Faso et Niger — ont créé l'Alliance des États du Sahel après leur retrait de la CEDEAO.",
      },
    ],
  },
  {
    id: "course-geographie-18-niger",
    categoryId: "geo",
    emoji: "🇳🇪",
    title: "Niger",
    description: "Un immense pays sahélien et saharien, traversé au sud-ouest par le fleuve Niger, riche en uranium. Découvre le Niger.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-18-niger-lesson-1",
        title: "Plus des trois quarts de désert",
        blocks: [
          { type: "paragraphe", text: "Plus des trois quarts du Niger sont désertiques — Sahara, massif de l'Aïr, dunes du Ténéré — sur un territoire deux fois grand comme la France. La vie du pays tient sur une mince frange sahélienne au sud." },
          { type: "chiffreCle", valeur: "75 %", legende: "du territoire couvert de désert et de dunes" },
          { type: "paragraphe", text: "Le massif volcanique de l'**Aïr**, îlot montagneux au cœur du Sahara, forme avec les dunes du **Ténéré** un ensemble classé à l'UNESCO — riche en gravures rupestres et en vestiges de dinosaures fossilisés." },
          {
            type: "aRetenir",
            points: [
              "Plus des trois quarts du pays sont **désertiques**",
              "Le massif de l'**Aïr** et les dunes du Ténéré, à l'UNESCO",
              "Des vestiges de dinosaures dorment sous le sable du Sahara",
            ],
          },
          { type: "leSavaisTu", text: "Le désert du Ténéré a livré les squelettes d'un dinosaure unique au monde, le **Nigersaurus**, dont la bouche, large comme un aspirateur, broyait les plantes basses du Sahara d'il y a 110 millions d'années." },
        ],
      },
      {
        id: "course-geographie-18-niger-lesson-2",
        title: "Le plus jeune pays du monde",
        blocks: [
          { type: "paragraphe", text: "Le Niger compte environ 26 à 27 millions d'habitants et affiche l'un des taux de natalité les plus élevés du monde — une population qui double presque tous les vingt ans." },
          { type: "chiffreCle", valeur: "26-27 M", legende: "avec le taux de natalité le plus élevé au monde" },
          { type: "paragraphe", text: "Les **Haoussas** sont majoritaires, aux côtés des Zarma-Songhaïs, Touaregs, Peuls et Kanouris. Cette croissance très rapide, sur un territoire largement désertique, alimente une forte **pression** sur les terres cultivables et l'eau." },
          {
            type: "aRetenir",
            points: [
              "Environ **26 à 27 millions** d'habitants, en forte croissance",
              "Les **Haoussas** sont le premier groupe du pays",
              "La croissance démographique pèse sur l'eau et les terres",
            ],
          },
          { type: "leSavaisTu", text: "Malgré la croissance urbaine rapide de Niamey, une grande partie des Touaregs et des Peuls du Niger restent nomades ou semi-nomades, se déplaçant avec leurs troupeaux au fil des saisons." },
        ],
      },
      {
        id: "course-geographie-18-niger-lesson-3",
        title: "Les dernières girafes de la région",
        blocks: [
          { type: "paragraphe", text: "À Kouré, à quelques kilomètres de Niamey, vivent les toutes dernières girafes sauvages d'Afrique de l'Ouest — disparues presque partout ailleurs dans la région, mais encore visibles ici en pleine nature." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Niamey" },
              { label: "Monnaie", valeur: "Franc CFA (XOF)" },
              { label: "Régime", valeur: "Transition militaire" },
              { label: "Indépendance", valeur: "3 août 1960" },
            ],
          },
          { type: "paragraphe", text: "Le Niger est l'un des grands producteurs mondiaux d'**uranium**, aux côtés de l'or et du pétrole. Malgré ces richesses du sous-sol, c'est aussi l'un des **pays les plus pauvres** du monde, très vulnérable aux sécheresses." },
          {
            type: "aRetenir",
            points: [
              "L'un des grands producteurs mondiaux d'**uranium**",
              "Les girafes de **Kouré**, dernières d'Afrique de l'Ouest",
              "Richesse minière et grande pauvreté coexistent",
            ],
          },
          { type: "leSavaisTu", text: "À Kouré, les girafes ne vivent pas dans une réserve clôturée : elles se déplacent librement parmi les champs et les villages, à quelques pas seulement de la route qui mène à Niamey." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-18-niger-quiz-1",
        question: "Quelle ressource minière fait la richesse du Niger ?",
        options: ["Le diamant", "L'uranium", "Le cuivre", "La bauxite"],
        correctIndex: 1,
        explanation: "Le Niger est l'un des grands producteurs mondiaux d'uranium, utilisé dans le nucléaire, malgré des richesses minières qui contrastent avec une grande pauvreté.",
      },
      {
        id: "course-geographie-18-niger-quiz-2",
        question: "Quel désert couvre la majeure partie du Niger ?",
        options: ["Le Kalahari", "Le Sahara", "Le Namib", "Le désert du Danakil"],
        correctIndex: 1,
        explanation: "Plus des trois quarts du Niger sont désertiques, dont le célèbre Ténéré, qui a notamment livré les squelettes du dinosaure Nigersaurus.",
      },
      {
        id: "course-geographie-18-niger-quiz-3",
        question: "Quelle est la capitale du Niger ?",
        options: ["Zinder", "Niamey", "Maradi", "Agadez"],
        correctIndex: 1,
        explanation: "Niamey, sur le fleuve Niger, est la capitale du pays, à quelques kilomètres seulement des dernières girafes sauvages d'Afrique de l'Ouest.",
      },
      {
        id: "course-geographie-18-niger-quiz-4",
        question: "Quel fleuve arrose le sud-ouest du Niger ?",
        options: ["Le fleuve Niger", "Le Nil", "Le Congo", "Le Sénégal"],
        correctIndex: 0,
        explanation: "Le fleuve Niger arrose le sud-ouest du pays, où se concentre l'essentiel d'une population qui affiche l'un des taux de natalité les plus élevés du monde.",
      },
      {
        id: "course-geographie-18-niger-quiz-5",
        question: "Depuis 2025, le Niger a quitté quelle organisation régionale ?",
        options: ["La CEDEAO", "L'ONU", "L'Union africaine", "L'UNESCO"],
        correctIndex: 0,
        explanation: "Le Niger, avec le Mali et le Burkina Faso, a quitté la CEDEAO et rejoint l'Alliance des États du Sahel (AES).",
      },
    ],
  },
  {
    id: "course-geographie-19-nigeria",
    categoryId: "geo",
    emoji: "🇳🇬",
    title: "Nigeria",
    description: "Le géant de l'Afrique : pays le plus peuplé du continent, grande économie, poids lourd du pétrole et de la culture (Nollywood, afrobeats). Découvre le Nigeria.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-19-nigeria-lesson-1",
        title: "Un delta, un lac qui s'assèche",
        blocks: [
          { type: "paragraphe", text: "Au nord-est du Nigeria, le lac Tchad a perdu l'essentiel de sa surface en quelques décennies — un désastre écologique en cours, pendant qu'au sud, un des plus vastes deltas du monde déborde de vie et de pétrole." },
          { type: "chiffreCle", valeur: "-90 %", legende: "de la surface du lac Tchad perdue en 60 ans" },
          { type: "paragraphe", text: "Le delta du Niger concentre à la fois une biodiversité de mangroves exceptionnelle et l'essentiel de la production **pétrolière** du pays — avec de lourdes conséquences environnementales. Au centre, le plateau de **Jos**, plus frais, tranche avec les basses terres environnantes." },
          {
            type: "aRetenir",
            points: [
              "Le delta du Niger, riche en mangroves et en **pétrole**",
              "Le lac Tchad a perdu 90 % de sa surface",
              "Le plateau de **Jos**, plus frais, contraste avec les basses terres",
            ],
          },
        ],
      },
      {
        id: "course-geographie-19-nigeria-lesson-2",
        title: "Toute l'Afrique de l'Ouest réunie",
        blocks: [
          { type: "paragraphe", text: "Avec plus de 220 millions d'habitants, le Nigeria est presque aussi peuplé, à lui seul, que l'ensemble de l'Afrique de l'Ouest francophone réunie. C'est de loin le pays le plus peuplé du continent." },
          { type: "chiffreCle", valeur: "220 M+", legende: "plus peuplé que toute l'Afrique de l'Ouest francophone" },
          { type: "paragraphe", text: "Le pays réunit plus de **250 groupes ethniques**, dont trois principaux : les **Haoussa-Peuls** au nord, les Yorubas au sud-ouest et les **Igbos** au sud-est. Le nord est majoritairement musulman, le sud chrétien." },
          {
            type: "aRetenir",
            points: [
              "Plus de **220 millions** d'habitants, le record du continent",
              "Plus de 250 groupes : **Haoussa-Peuls**, Yorubas, Igbos en tête",
              "Nord musulman, sud chrétien, une immense diversité religieuse",
            ],
          },
          { type: "leSavaisTu", text: "**Lagos**, mégapole de plus de 15 millions d'habitants, est l'une des villes qui grandissent le plus vite au monde — elle pourrait compter plus de 30 millions d'habitants d'ici 2050." },
        ],
      },
      {
        id: "course-geographie-19-nigeria-lesson-3",
        title: "Plus de films que Hollywood",
        blocks: [
          { type: "paragraphe", text: "Chaque année, Nollywood produit plus de films que Hollywood — seule l'industrie indienne de Bollywood fait mieux au monde. Le Nigeria exporte aussi ses rythmes afrobeats, écoutés bien au-delà du continent africain." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Abuja" },
              { label: "Monnaie", valeur: "Naira (NGN)" },
              { label: "Régime", valeur: "République fédérale" },
              { label: "Indépendance", valeur: "1er octobre 1960" },
            ],
          },
          { type: "paragraphe", text: "Le **pétrole** du delta du Niger est le pilier de l'économie, l'une des deux plus grandes d'Afrique aux côtés de l'Afrique du Sud. Le Nigeria est l'héritier de grands royaumes précoloniaux — **Bénin**, Oyo, les cités-États haoussa." },
          {
            type: "aRetenir",
            points: [
              "**Nollywood** produit plus de films que Hollywood chaque année",
              "Le **pétrole** est le pilier de l'économie nigériane",
              "Héritier des royaumes du Bénin, d'Oyo et des cités haoussa",
            ],
          },
          { type: "leSavaisTu", text: "Nollywood produit plus de 2 500 films chaque année, souvent tournés en quelques semaines à peine — un rythme de production qui en fait l'une des industries cinématographiques les plus prolifiques du monde." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-19-nigeria-quiz-1",
        question: "Quel est le pays le plus peuplé d'Afrique ?",
        options: ["L'Éthiopie", "Le Nigeria", "L'Égypte", "La RD Congo"],
        correctIndex: 1,
        explanation: "Avec plus de 220 millions d'habitants, presque autant que toute l'Afrique de l'Ouest francophone réunie, le Nigeria est de loin le pays le plus peuplé du continent.",
      },
      {
        id: "course-geographie-19-nigeria-quiz-2",
        question: "Quelle est la principale ressource d'exportation du Nigeria ?",
        options: ["Le pétrole", "Le cacao", "L'or", "Le café"],
        correctIndex: 0,
        explanation: "Le pétrole du delta du Niger est la première richesse d'exportation du pays et l'un des deux piliers économiques du continent, avec l'Afrique du Sud.",
      },
      {
        id: "course-geographie-19-nigeria-quiz-3",
        question: "Comment appelle-t-on l'industrie du cinéma nigériane ?",
        options: ["Bollywood", "Nollywood", "Hollywood", "Cinewood"],
        correctIndex: 1,
        explanation: "Nollywood produit chaque année plus de films que Hollywood, seule l'industrie indienne de Bollywood faisant mieux au monde.",
      },
      {
        id: "course-geographie-19-nigeria-quiz-4",
        question: "Quelle est la capitale du Nigeria ?",
        options: ["Lagos", "Abuja", "Kano", "Ibadan"],
        correctIndex: 1,
        explanation: "Abuja, bâtie au centre du pays, est la capitale fédérale ; Lagos, mégapole côtière, reste la plus grande ville et le cœur économique.",
      },
      {
        id: "course-geographie-19-nigeria-quiz-5",
        question: "Quelle est la monnaie du Nigeria ?",
        options: ["Le cedi", "Le naira", "Le franc CFA", "Le dalasi"],
        correctIndex: 1,
        explanation: "Le Nigeria n'utilise pas le franc CFA mais sa propre monnaie, le naira, comme il sied à la première économie démographique du continent.",
      },
    ],
  },
  {
    id: "course-geographie-20-senegal",
    categoryId: "geo",
    emoji: "🇸🇳",
    title: "Sénégal",
    description: "La pointe la plus occidentale de l'Afrique, terre de teranga entre Sahel et Atlantique. Découvre le Sénégal, son histoire et ses paysages.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-20-senegal-lesson-1",
        title: "Le bout de l'Afrique, vers l'ouest",
        blocks: [
          { type: "paragraphe", text: "À la pointe des Almadies, près de Dakar, se trouve l'endroit le plus à l'ouest de tout le continent africain — l'Amérique, de l'autre côté de l'Atlantique, est plus proche qu'on ne le croit." },
          { type: "chiffreCle", valeur: "~3 000 km", legende: "jusqu'au Brésil, la traversée la plus courte" },
          { type: "paragraphe", text: "Le pays entoure presque entièrement l'enclave de la **Gambie**, qui sépare la **Casamance**, au sud, du reste du territoire. Cette discontinuité a longtemps nourri des revendications autonomistes dans cette région du pays." },
          {
            type: "aRetenir",
            points: [
              "Le point le plus à l'ouest de tout le continent",
              "L'enclave de la **Gambie** coupe le pays en deux",
              "La **Casamance**, séparée du reste, a nourri des tensions",
            ],
          },
          { type: "leSavaisTu", text: "Le parc national des oiseaux du Djoudj, dans le delta du fleuve Sénégal, accueille chaque hiver des millions d'oiseaux migrateurs venus d'Europe — l'un des plus importants sanctuaires ornithologiques d'Afrique de l'Ouest." },
        ],
      },
      {
        id: "course-geographie-20-senegal-lesson-2",
        title: "Une confrérie qui bâtit une ville",
        blocks: [
          { type: "paragraphe", text: "À Touba, une confrérie religieuse a bâti depuis un siècle une ville entière autour de sa grande mosquée — aujourd'hui l'une des plus grandes villes du Sénégal, née presque entièrement de la foi." },
          { type: "chiffreCle", valeur: "18 M", legende: "dont un quart vit dans l'agglomération de Dakar" },
          { type: "paragraphe", text: "La **mouridiyya**, confrérie soufie fondée par **Cheikh Ahmadou Bamba**, joue un rôle social, économique et politique de premier plan dans la société sénégalaise, bien au-delà de la seule sphère religieuse." },
          {
            type: "aRetenir",
            points: [
              "Environ **18 millions** d'habitants, un quart à Dakar",
              "La **mouridiyya**, confrérie soufie centrée sur Touba",
              "La teranga (hospitalité) est une fierté nationale",
            ],
          },
          { type: "leSavaisTu", text: "Chaque année, le Grand **Magal** de Touba rassemble plusieurs millions de pèlerins venus de tout le Sénégal et de la diaspora — l'un des plus grands rassemblements religieux d'Afrique." },
        ],
      },
      {
        id: "course-geographie-20-senegal-lesson-3",
        title: "Un lac qui vire au rose",
        blocks: [
          { type: "paragraphe", text: "Le lac Retba, tout près de Dakar, prend une couleur rose surprenante à cause d'une algue microscopique qui prospère dans une eau presque aussi salée que la mer Morte, surtout en saison sèche." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Dakar" },
              { label: "Monnaie", valeur: "Franc CFA (XOF)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "20 août 1960" },
            ],
          },
          { type: "paragraphe", text: "L'économie repose sur l'agriculture, la pêche, les phosphates et, depuis peu, le pétrole et le gaz offshore. L'île de **Gorée**, lieu de mémoire de la traite négrière, et la ville de **Saint-Louis** sont classées à l'UNESCO." },
          {
            type: "aRetenir",
            points: [
              "Le lac **Rose**, coloré par une algue unique",
              "L'île de **Gorée**, lieu de mémoire de la traite négrière",
              "Saint-Louis, ancienne capitale coloniale, classée à l'UNESCO",
            ],
          },
          { type: "leSavaisTu", text: "Pendant des décennies, le lac Rose fut la ligne d'arrivée légendaire du rallye Paris-Dakar, avant que la course ne quitte l'Afrique pour l'Amérique du Sud en 2009." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-20-senegal-quiz-1",
        question: "Quelle est la capitale du Sénégal ?",
        options: ["Dakar", "Thiès", "Saint-Louis", "Ziguinchor"],
        correctIndex: 0,
        explanation: "Dakar, sur la presqu'île du Cap-Vert, est la capitale du Sénégal et le point le plus à l'ouest de tout le continent africain.",
      },
      {
        id: "course-geographie-20-senegal-quiz-2",
        question: "Quel petit pays forme une enclave à l'intérieur du Sénégal ?",
        options: ["La Guinée-Bissau", "La Gambie", "Le Mali", "Le Cap-Vert"],
        correctIndex: 1,
        explanation: "La Gambie, étirée le long de son fleuve, est presque entièrement enclavée dans le Sénégal, séparant la Casamance du reste du territoire.",
      },
      {
        id: "course-geographie-20-senegal-quiz-3",
        question: "Quelle est la devise nationale du Sénégal ?",
        options: ["« Un Peuple, Un But, Une Foi »", "« Liberté, Égalité, Fraternité »", "« Unité, Travail, Progrès »", "« Freedom and Justice »"],
        correctIndex: 0,
        explanation: "La devise du Sénégal est « Un Peuple, Un But, Une Foi ».",
      },
      {
        id: "course-geographie-20-senegal-quiz-4",
        question: "Quelle monnaie utilise le Sénégal ?",
        options: ["Le franc CFA", "Le naira", "Le dalasi", "L'escudo"],
        correctIndex: 0,
        explanation: "Le Sénégal appartient à la zone du franc CFA d'Afrique de l'Ouest (UEMOA).",
      },
      {
        id: "course-geographie-20-senegal-quiz-5",
        question: "Quelle île au large de Dakar est un lieu de mémoire de la traite négrière ?",
        options: ["L'île de Gorée", "L'île de Zanzibar", "L'île de Kunta Kinteh", "L'île de Fadiouth"],
        correctIndex: 0,
        explanation: "L'île de Gorée, classée à l'UNESCO, symbolise la mémoire de la traite négrière atlantique, à quelques encablures seulement du port de Dakar.",
      },
    ],
  },
  {
    id: "course-geographie-21-sierra-leone",
    categoryId: "geo",
    emoji: "🇸🇱",
    title: "Sierra Leone",
    description: "Un pays côtier d'Afrique de l'Ouest, célèbre pour ses diamants et son grand port naturel, reconstruit après la guerre civile. Découvre la Sierra Leone.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-21-sierra-leone-lesson-1",
        title: "Le nom donné depuis un bateau",
        blocks: [
          { type: "paragraphe", text: "Au XVe siècle, des navigateurs portugais aperçoivent depuis la mer les collines boisées qui dominent la baie de Freetown et les baptisent « Serra Leoa », les montagnes du lion. Le nom est resté." },
          { type: "chiffreCle", valeur: "1 900 m", legende: "le mont Bintumani, point culminant du pays" },
          { type: "paragraphe", text: "La côte est faite de mangroves et de plaines ; l'intérieur, plus élevé, culmine au **mont Bintumani**. Le pays est l'un des plus arrosés d'Afrique de l'Ouest, couvert d'une dense **forêt tropicale**." },
          {
            type: "aRetenir",
            points: [
              "Le nom vient des « montagnes du lion » vues depuis la mer",
              "Le **mont Bintumani** culmine à plus de 1 900 m",
              "L'un des pays les plus arrosés d'Afrique de l'Ouest",
            ],
          },
          { type: "leSavaisTu", text: "La baie de Freetown compte parmi les plus grands ports naturels du monde — assez vaste, dit-on, pour accueillir en même temps toute la flotte britannique de l'époque coloniale." },
        ],
      },
      {
        id: "course-geographie-21-sierra-leone-lesson-2",
        title: "Fondée pour libérer des esclaves",
        blocks: [
          { type: "paragraphe", text: "Freetown, la « ville libre », a été fondée à la fin du XVIIIe siècle comme refuge pour des esclaves affranchis venus de plusieurs continents. Leurs descendants, les Krios, ont longtemps dirigé le pays." },
          { type: "chiffreCle", valeur: "8,6 M", legende: "reconstruite après la guerre civile et Ebola" },
          { type: "paragraphe", text: "Les **Temnés**, majoritaires au nord et au centre-ouest, et les Mendés, au sud et à l'est, forment les deux plus grands groupes du pays. Les **Krios**, installés à Freetown depuis la fondation de la colonie, ont longtemps joué un rôle administratif de premier plan." },
          {
            type: "aRetenir",
            points: [
              "Environ **8,6 millions** d'habitants, jeune et rurale",
              "**Temnés** au nord, Mendés au sud, deux grands groupes",
              "Les Krios ont longtemps dirigé l'administration du pays",
            ],
          },
          { type: "leSavaisTu", text: "Le krio, langue née du mélange entre l'anglais et des langues africaines et caribéennes, est aujourd'hui compris par la quasi-totalité des habitants du pays, bien au-delà des seuls descendants krios." },
        ],
      },
      {
        id: "course-geographie-21-sierra-leone-lesson-3",
        title: "Des diamants qui ont coûté cher",
        blocks: [
          { type: "paragraphe", text: "Les diamants de la Sierra Leone ont financé l'une des guerres civiles les plus brutales d'Afrique de l'Ouest, dans les années 1990. Le pays s'est depuis reconstruit, cité en exemple de sortie de crise réussie." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Freetown" },
              { label: "Monnaie", valeur: "Leone (SLE)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "27 avril 1961" },
            ],
          },
          { type: "paragraphe", text: "Au-delà des diamants, le pays exploite aussi l'or, la bauxite et le **rutile** (titane). L'économie s'est reconstruite après la guerre civile et l'épidémie d'**Ebola** de 2014, deux crises qui ont marqué durablement le pays." },
          {
            type: "aRetenir",
            points: [
              "Les **diamants** ont financé la guerre civile des années 1990",
              "Reconstruite après la guerre et l'épidémie d'**Ebola** de 2014",
              "Le nom signifie « les montagnes du lion »",
            ],
          },
          { type: "leSavaisTu", text: "À Freetown, un immense fromager appelé « Cotton Tree » marque, dit-on, l'endroit où les premiers esclaves affranchis se sont rassemblés en 1792 pour célébrer leur liberté retrouvée." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-21-sierra-leone-quiz-1",
        question: "Pour quelle pierre précieuse la Sierra Leone est-elle particulièrement connue ?",
        options: ["Les diamants", "Les émeraudes", "Les rubis", "Les saphirs"],
        correctIndex: 0,
        explanation: "Les diamants de la Sierra Leone ont marqué son histoire, notamment en finançant l'une des guerres civiles les plus brutales d'Afrique de l'Ouest dans les années 1990.",
      },
      {
        id: "course-geographie-21-sierra-leone-quiz-2",
        question: "Que signifie le nom « Sierra Leone » ?",
        options: ["La côte de l'or", "Les montagnes du lion", "La terre des fleuves", "Le pays des forêts"],
        correctIndex: 1,
        explanation: "« Sierra Leone » signifie « les montagnes du lion », nom donné par des navigateurs portugais qui apercevaient les collines de la baie depuis la mer.",
      },
      {
        id: "course-geographie-21-sierra-leone-quiz-3",
        question: "Quelle est la capitale de la Sierra Leone ?",
        options: ["Freetown", "Bo", "Kenema", "Makeni"],
        correctIndex: 0,
        explanation: "Freetown, dotée d'un des plus grands ports naturels du monde, est la capitale du pays.",
      },
      {
        id: "course-geographie-21-sierra-leone-quiz-4",
        question: "Quelle est la langue officielle de la Sierra Leone ?",
        options: ["Le français", "L'anglais", "Le portugais", "L'arabe"],
        correctIndex: 1,
        explanation: "Ancienne colonie britannique, la Sierra Leone a l'anglais pour langue officielle ; le krio, langue née du métissage colonial, est compris par presque tous les habitants.",
      },
      {
        id: "course-geographie-21-sierra-leone-quiz-5",
        question: "Freetown a été fondée à l'origine comme refuge pour…",
        options: ["Des marchands européens", "Des esclaves affranchis", "Des explorateurs", "Des missionnaires"],
        correctIndex: 1,
        explanation: "Freetown, la « ville libre », fut créée pour accueillir des esclaves libérés ; leurs descendants, les Krios, ont longtemps dirigé le pays.",
      },
    ],
  },
  {
    id: "course-geographie-22-togo",
    categoryId: "geo",
    emoji: "🇹🇬",
    title: "Togo",
    description: "Un étroit couloir de terre du golfe de Guinée, du littoral aux savanes du nord, dominé de longue date par la dynastie Gnassingbé. Découvre le Togo.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-22-togo-lesson-1",
        title: "Un couloir de 600 kilomètres",
        blocks: [
          { type: "paragraphe", text: "Le Togo fait **600 km** du nord au sud et parfois moins de **100 km** de large. Un couloir étroit qui traverse, en une journée de route, presque tous les paysages de l'Afrique de l'Ouest." },
          { type: "chiffreCle", valeur: "600 × 100 km", legende: "de la lagune au sud à la savane au nord" },
          { type: "paragraphe", text: "Au sud, cocotiers et lagunes ; au centre, les monts du **Togo** couverts de forêt ; au nord, la savane sèche. La capitale, **Lomé**, est posée à l'extrême sud-ouest, contre la frontière ghanéenne." },
          {
            type: "aRetenir",
            points: [
              "Un ruban de **600 km** du nord au sud",
              "Trois milieux enchaînés : lagune, montagne, savane",
              "Lomé, capitale posée sur la frontière ghanéenne",
            ],
          },
          { type: "leSavaisTu", text: "Depuis le centre de Lomé, on peut marcher jusqu'au Ghana. La frontière passe à quelques centaines de mètres du grand marché." },
        ],
      },
      {
        id: "course-geographie-22-togo-lesson-2",
        title: "Éwé au sud, Kabyè au nord",
        blocks: [
          { type: "paragraphe", text: "Le Togo compte environ 9 millions d'habitants, répartis entre deux grands peuples : les Éwés, majoritaires au sud et plus urbanisés, et les Kabyè, au nord, dans une région plus sèche et plus enclavée." },
          { type: "chiffreCle", valeur: "2 peuples", legende: "Éwé au sud, Kabyè au nord, deux Togo en un" },
          { type: "paragraphe", text: "Le français est langue officielle ; religions traditionnelles comme le **vaudou**, christianisme et islam cohabitent. Depuis **1967**, le pouvoir togolais est resté entre les mains de dirigeants originaires du nord, un déséquilibre longtemps contesté." },
          {
            type: "aRetenir",
            points: [
              "Environ **9 millions** d'habitants, Éwé au sud, Kabyè au nord",
              "Le **vaudou**, le christianisme et l'islam cohabitent",
              "Le pouvoir vient du nord depuis **1967**, un déséquilibre contesté",
            ],
          },
          { type: "leSavaisTu", text: "Le **vaudou**, aujourd'hui pratiqué dans les Amériques et les Caraïbes, trouve ses racines religieuses ici, chez les Éwés et leurs voisins du golfe de Guinée." },
        ],
      },
      {
        id: "course-geographie-22-togo-lesson-3",
        title: "Le port qui nourrit la région",
        blocks: [
          { type: "paragraphe", text: "Le port en eau profonde de Lomé fait du Togo un carrefour commercial pour toute la sous-région, bien au-delà de ses frontières. Les phosphates et l'agriculture complètent une économie tournée vers le transit." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Lomé" },
              { label: "Monnaie", valeur: "Franc CFA (XOF)" },
              { label: "Régime", valeur: "Régime parlementaire" },
              { label: "Indépendance", valeur: "27 avril 1960" },
            ],
          },
          { type: "paragraphe", text: "Ancienne colonie allemande, le « **Togoland** », le pays est indépendant depuis 1960. Il abrite le **Koutammakou**, le pays des Batammariba et de leurs maisons-tours de terre (takienta), classé à l'UNESCO." },
          {
            type: "aRetenir",
            points: [
              "Le port de **Lomé**, hub commercial de toute la sous-région",
              "Indépendant depuis **1960**, ancienne colonie allemande puis française",
              "Le Koutammakou et ses maisons-tours, classé à l'UNESCO",
            ],
          },
          { type: "leSavaisTu", text: "Les maisons-tours **takienta** du Koutammakou n'étaient pas seulement des habitations : leur forme circulaire et leurs greniers surélevés protégeaient autrefois des razzias et des raids esclavagistes." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-22-togo-quiz-1",
        question: "Quelle est la forme du territoire togolais ?",
        options: ["En forme d'île", "Étroit et allongé du nord au sud", "Parfaitement circulaire", "Enclavé, sans aucune côte"],
        correctIndex: 1,
        explanation: "Le Togo est un mince couloir de terre de 600 km, qui s'étire du golfe de Guinée jusqu'aux savanes sèches du nord, à la frontière du Burkina Faso.",
      },
      {
        id: "course-geographie-22-togo-quiz-2",
        question: "Quelle ressource minière est importante pour le Togo ?",
        options: ["Le pétrole", "Les phosphates", "L'uranium", "Le diamant"],
        correctIndex: 1,
        explanation: "Les phosphates comptent parmi les principales ressources d'exportation du Togo, aux côtés du café, du cacao et du coton cultivés sur les plateaux frais du centre.",
      },
      {
        id: "course-geographie-22-togo-quiz-3",
        question: "Quelle est la capitale du Togo ?",
        options: ["Lomé", "Sokodé", "Kara", "Atakpamé"],
        correctIndex: 0,
        explanation: "Lomé, sur la côte, est la capitale et le grand port du pays — si proche du Ghana qu'on peut rejoindre la frontière à pied depuis le centre-ville.",
      },
      {
        id: "course-geographie-22-togo-quiz-4",
        question: "Quel équipement fait de Lomé un grand hub régional ?",
        options: ["Un aéroport spatial", "Un port en eau profonde", "Une gare ferroviaire transsaharienne", "Un barrage géant"],
        correctIndex: 1,
        explanation: "Le port en eau profonde de Lomé sert de plateforme de transit pour toute la sous-région, bien au-delà des frontières togolaises.",
      },
      {
        id: "course-geographie-22-togo-quiz-5",
        question: "Quelle monnaie utilise le Togo ?",
        options: ["Le franc CFA", "Le cedi", "Le naira", "Le leone"],
        correctIndex: 0,
        explanation: "Le Togo appartient à la zone du franc CFA d'Afrique de l'Ouest (UEMOA), comme la plupart de ses voisins directs.",
      },
    ],
  },
  {
    id: "course-geographie-23-angola",
    categoryId: "geo",
    emoji: "🇦🇴",
    title: "Angola",
    description: "Un géant pétrolier lusophone de la côte atlantique, immensément riche en ressources, reconstruit après une longue guerre civile. Découvre l'Angola.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-23-angola-lesson-1",
        title: "Une enclave coupée du pays",
        blocks: [
          { type: "paragraphe", text: "Cabinda, riche en pétrole, fait partie de l'Angola mais n'y touche pas : un couloir de RD Congo sépare cette enclave du reste du pays, une bizarrerie héritée du partage colonial." },
          { type: "chiffreCle", valeur: "1 couloir", legende: "de RD Congo sépare Cabinda du pays" },
          { type: "paragraphe", text: "Le plateau intérieur, plus tempéré grâce à l'altitude, occupe l'essentiel du territoire. Vers le sud, le pays s'assèche jusqu'aux confins du désert du **Namib**, tandis que les chutes de **Kalandula**, parmi les plus impressionnantes d'Afrique, témoignent de l'abondance des eaux du centre." },
          {
            type: "aRetenir",
            points: [
              "L'enclave de **Cabinda**, séparée par un couloir de RD Congo",
              "Le plateau intérieur occupe l'essentiel du pays",
              "Les chutes de **Kalandula**, parmi les plus impressionnantes d'Afrique",
            ],
          },
          { type: "leSavaisTu", text: "Les chutes de Kalandula, hautes d'environ 105 mètres, dépassent largement celles du Niagara — mais restent, faute de routes, bien moins visitées que les cascades les plus célèbres du monde." },
        ],
      },
      {
        id: "course-geographie-23-angola-lesson-2",
        title: "Trois peuples, une guerre longue",
        blocks: [
          { type: "paragraphe", text: "La guerre civile angolaise (1975-2002) a longtemps opposé trois grands mouvements, chacun enraciné dans un peuple et une région du pays : les Ovimbundu du centre, les Ambundu autour de Luanda, les Bakongo au nord." },
          { type: "chiffreCle", valeur: "36 M", legende: "dont Luanda, mégapole depuis la fin de la guerre" },
          { type: "paragraphe", text: "Les **Ovimbundu**, sur les hauts plateaux du centre, les Ambundu, autour de Luanda et du fleuve Kwanza, et les **Bakongo**, au nord, ont chacun pesé différemment dans les rivalités entre MPLA, UNITA et FNLA." },
          {
            type: "aRetenir",
            points: [
              "Environ **36 millions** d'habitants, très urbanisés depuis 2002",
              "**Ovimbundu**, Ambundu et Bakongo, trois grands peuples",
              "Chacun lié à un camp de la guerre civile",
            ],
          },
          { type: "leSavaisTu", text: "Au-delà du portugais, langue officielle, l'Angola compte des dizaines de langues bantoues encore parlées au quotidien, de l'umbundu au kikongo, chacune porteuse d'une identité régionale forte." },
        ],
      },
      {
        id: "course-geographie-23-angola-lesson-3",
        title: "La ville la plus chère d'Afrique",
        blocks: [
          { type: "paragraphe", text: "Luanda a longtemps figuré parmi les villes les plus chères du monde pour les expatriés — un paradoxe pour la capitale d'un pays où l'essentiel de la population reste pauvre, malgré les revenus du pétrole." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Luanda" },
              { label: "Monnaie", valeur: "Kwanza (AOA)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "11 novembre 1975" },
            ],
          },
          { type: "paragraphe", text: "L'Angola est l'un des plus grands producteurs de **pétrole** d'Afrique subsaharienne, aux côtés des diamants. Le pays garde la mémoire de la lutte anticoloniale menée par le **MPLA** et Agostinho Neto, avant la longue guerre civile qui a suivi l'indépendance." },
          {
            type: "aRetenir",
            points: [
              "L'un des grands producteurs de **pétrole** d'Afrique subsaharienne",
              "Indépendant depuis **1975**, après une longue guerre civile",
              "Les chutes de Kalandula et l'enclave de Cabinda, symboles du pays",
            ],
          },
          { type: "leSavaisTu", text: "Malgré des dizaines de milliards de dollars de revenus pétroliers depuis l'indépendance, une grande partie des Angolais vit toujours sans accès régulier à l'eau courante ou à l'électricité." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-23-angola-quiz-1",
        question: "Quelle est la principale ressource d'exportation de l'Angola ?",
        options: ["Le pétrole", "Le cacao", "Le café", "Le coton"],
        correctIndex: 0,
        explanation: "L'Angola est l'un des grands producteurs de pétrole d'Afrique subsaharienne, une richesse qui contraste avec la pauvreté d'une grande partie de la population.",
      },
      {
        id: "course-geographie-23-angola-quiz-2",
        question: "Quelle est la langue officielle de l'Angola ?",
        options: ["Le français", "Le portugais", "L'anglais", "L'espagnol"],
        correctIndex: 1,
        explanation: "Ancienne colonie portugaise, l'Angola a le portugais pour langue officielle.",
      },
      {
        id: "course-geographie-23-angola-quiz-3",
        question: "Quelle est la capitale de l'Angola ?",
        options: ["Luanda", "Lobito", "Huambo", "Benguela"],
        correctIndex: 0,
        explanation: "Luanda, sur la côte atlantique, est la capitale et la plus grande ville du pays, longtemps citée parmi les villes les plus chères du monde.",
      },
      {
        id: "course-geographie-23-angola-quiz-4",
        question: "L'enclave pétrolière de Cabinda est séparée du reste de l'Angola par quel pays ?",
        options: ["La Zambie", "La RD Congo", "La Namibie", "Le Congo-Brazzaville"],
        correctIndex: 1,
        explanation: "Un étroit couloir de la RD Congo sépare Cabinda du reste du territoire angolais.",
      },
      {
        id: "course-geographie-23-angola-quiz-5",
        question: "Sur quel océan l'Angola possède-t-il une façade ?",
        options: ["L'océan Atlantique", "L'océan Indien", "La mer Rouge", "La mer Méditerranée"],
        correctIndex: 0,
        explanation: "Toute la côte angolaise donne sur l'océan Atlantique, jusqu'aux confins du désert du Namib au sud.",
      },
    ],
  },
  {
    id: "course-geographie-24-cameroun",
    categoryId: "geo",
    emoji: "🇨🇲",
    title: "Cameroun",
    description: "« L'Afrique en miniature » : du Sahel au nord à la forêt équatoriale au sud, un pays-charnière entre Afrique de l'Ouest et centrale. Découvre le Cameroun.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-24-cameroun-lesson-1",
        title: "L'Afrique en miniature",
        blocks: [
          { type: "paragraphe", text: "Désert au nord, forêt équatoriale au sud, montagnes à l'ouest : le Cameroun réunit à lui seul presque tous les paysages du continent africain, ce qui lui vaut le surnom d'« Afrique en miniature »." },
          { type: "chiffreCle", valeur: "4 040 m", legende: "le mont Cameroun, plus haut sommet d'Afrique de l'Ouest" },
          { type: "paragraphe", text: "Les hauts plateaux de l'Ouest, autour de Bamenda et Bafoussam, offrent un climat frais et de riches terres volcaniques propices au **café**. Ils tranchent avec le littoral chaud et humide, où le **mont Cameroun** reçoit certaines des précipitations les plus abondantes du continent." },
          {
            type: "aRetenir",
            points: [
              "Surnommé « l'**Afrique en miniature** » pour ses paysages",
              "Le **mont Cameroun**, plus haut sommet d'Afrique de l'Ouest",
              "Les hauts plateaux de l'Ouest, terres volcaniques à café",
            ],
          },
          { type: "leSavaisTu", text: "Le mont Cameroun est l'un des volcans les plus actifs d'Afrique : lors de certaines éruptions récentes, sa lave a coulé jusqu'à atteindre directement l'océan Atlantique." },
        ],
      },
      {
        id: "course-geographie-24-cameroun-lesson-2",
        title: "Un pays, deux langues, une crise",
        blocks: [
          { type: "paragraphe", text: "Le Cameroun est officiellement bilingue, héritage du partage de l'ancien Cameroun allemand entre la France et le Royaume-Uni après 1918. Cette dualité a dégénéré depuis 2016 en une grave crise dans les régions anglophones." },
          { type: "chiffreCle", valeur: "200+", legende: "groupes ethniques, l'une des plus fortes diversités d'Afrique" },
          { type: "paragraphe", text: "La population se concentre entre les métropoles de **Yaoundé** et **Douala** et les hauts plateaux de l'Ouest, densément peuplés, tandis que le grand Nord sahélien reste plus rural et exposé aux effets du recul du lac Tchad." },
          {
            type: "aRetenir",
            points: [
              "Environ **28 millions** d'habitants, plus de 200 groupes ethniques",
              "Bilingue français-anglais, une dualité coloniale rare en Afrique",
              "La **crise anglophone** secoue le Nord-Ouest et le Sud-Ouest depuis 2016",
            ],
          },
          { type: "leSavaisTu", text: "En 1961, un référendum organisé sous supervision de l'ONU a permis au Cameroun britannique de choisir de rejoindre le Cameroun indépendant, donnant naissance à l'actuel État bilingue." },
        ],
      },
      {
        id: "course-geographie-24-cameroun-lesson-3",
        title: "Les Lions qui rugissent au Mondial",
        blocks: [
          { type: "paragraphe", text: "En 1990, les Lions Indomptables du Cameroun deviennent la première équipe africaine à atteindre les quarts de finale d'une Coupe du monde de football — un exploit qui a fait connaître le pays bien au-delà du continent." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Yaoundé" },
              { label: "Monnaie", valeur: "Franc CFA d'Afrique centrale (XAF)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "1er janvier 1960" },
            ],
          },
          { type: "paragraphe", text: "L'économie, diversifiée, repose sur le **pétrole**, le cacao, le café, le coton et le **bois**. Le port de Douala dessert aussi les pays voisins enclavés. Sur le plan politique, le pays est dirigé par le même camp depuis plus de quatre décennies, l'un des plus longs mandats au monde." },
          {
            type: "aRetenir",
            points: [
              "Une économie diversifiée : **pétrole**, cacao, café, bois",
              "Les Lions Indomptables, premiers quart-de-finalistes africains en **1990**",
              "Le port de **Douala** dessert toute la sous-région enclavée",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-24-cameroun-quiz-1",
        question: "Pour sa grande diversité de paysages, le Cameroun est surnommé…",
        options: ["« L'Afrique en miniature »", "« Le toit de l'Afrique »", "« Le grenier de l'Afrique »", "« La perle des Antilles »"],
        correctIndex: 0,
        explanation: "Du désert du nord à la forêt du sud, en passant par les hauts plateaux de l'ouest, le Cameroun résume à lui seul la diversité des paysages du continent.",
      },
      {
        id: "course-geographie-24-cameroun-quiz-2",
        question: "Quelles sont les deux langues officielles du Cameroun ?",
        options: ["Le français et l'espagnol", "Le français et l'anglais", "L'anglais et le portugais", "L'arabe et le français"],
        correctIndex: 1,
        explanation: "Le Cameroun est officiellement bilingue français-anglais, héritage du partage de l'ancien Cameroun allemand entre la France et le Royaume-Uni après 1918.",
      },
      {
        id: "course-geographie-24-cameroun-quiz-3",
        question: "Quelle est la capitale du Cameroun ?",
        options: ["Douala", "Yaoundé", "Garoua", "Bafoussam"],
        correctIndex: 1,
        explanation: "Yaoundé est la capitale politique ; Douala, plus grande, est la capitale économique et le grand port qui dessert aussi les pays voisins enclavés.",
      },
      {
        id: "course-geographie-24-cameroun-quiz-4",
        question: "Quel volcan est le point culminant d'Afrique de l'Ouest ?",
        options: ["Le mont Cameroun", "Le Kilimandjaro", "Le mont Kenya", "Le Toubkal"],
        correctIndex: 0,
        explanation: "Le mont Cameroun, volcan encore actif dépassant 4 000 mètres, est le point culminant d'Afrique de l'Ouest et reçoit certaines des pluies les plus abondantes du continent.",
      },
      {
        id: "course-geographie-24-cameroun-quiz-5",
        question: "Quelle est la devise nationale du Cameroun ?",
        options: ["« Paix, Travail, Patrie »", "« Unité, Travail, Progrès »", "« Un Peuple, Un But, Une Foi »", "« Justice, Paix, Travail »"],
        correctIndex: 0,
        explanation: "La devise du Cameroun est « Paix, Travail, Patrie ».",
      },
    ],
  },
  {
    id: "course-geographie-25-centrafrique",
    categoryId: "geo",
    emoji: "🇨🇫",
    title: "Centrafrique",
    description: "Un pays enclavé au cœur exact du continent, riche en ressources mais fragilisé par les conflits. Découvre la République centrafricaine.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-25-centrafrique-lesson-1",
        title: "Au centre exact du continent",
        blocks: [
          { type: "paragraphe", text: "La République centrafricaine porte bien son nom : elle occupe presque exactement le centre géographique du continent africain. Mais ce centre est aussi l'un des pays les plus enclavés et les plus isolés du monde." },
          { type: "chiffreCle", valeur: "623 000 km²", legende: "presque aussi vaste que la France" },
          { type: "paragraphe", text: "Le nord est fait de savane, le sud de forêt équatoriale, arrosée par l'**Oubangui**, affluent du Congo qui marque la frontière sud. Au sud-ouest, la réserve de **Dzanga-Sangha** abrite l'une des plus fortes concentrations de gorilles de plaine du continent." },
          {
            type: "aRetenir",
            points: [
              "Au centre géographique exact du continent africain",
              "L'**Oubangui** marque la frontière sud, vers le Congo",
              "La réserve de **Dzanga-Sangha**, refuge de gorilles de plaine",
            ],
          },
          { type: "leSavaisTu", text: "Faute de routes praticables toute l'année, certaines régions de l'intérieur du pays restent accessibles seulement par petit avion ou par de longues pistes en saison sèche." },
        ],
      },
      {
        id: "course-geographie-25-centrafrique-lesson-2",
        title: "Une langue née du fleuve",
        blocks: [
          { type: "paragraphe", text: "Le sango est né du commerce fluvial sur l'Oubangui, entre marchands de différents peuples qui ne parlaient pas la même langue. Devenu langue nationale, il est aujourd'hui compris par presque tous les Centrafricains." },
          { type: "chiffreCle", valeur: "5,5 M", legende: "d'habitants, unis par le sango malgré tout" },
          { type: "paragraphe", text: "On y trouve les peuples **Gbaya**, Banda, Mandjia, Sara. Cette fragmentation ethnique et religieuse a nourri les tensions du conflit débuté en **2013**, qui a poussé des centaines de milliers de personnes à fuir vers le Cameroun et le Tchad." },
          {
            type: "aRetenir",
            points: [
              "Environ **5,5 millions** d'habitants, en grande partie ruraux",
              "Le **sango**, langue née du commerce fluvial, unit le pays",
              "Le conflit depuis **2013** a déplacé des centaines de milliers de personnes",
            ],
          },
        ],
      },
      {
        id: "course-geographie-25-centrafrique-lesson-3",
        title: "L'empereur d'un pays très pauvre",
        blocks: [
          { type: "paragraphe", text: "En 1977, le dictateur Bokassa se couronne empereur lors d'une cérémonie fastueuse qui engloutit une bonne part du budget national — dans l'un des pays les plus pauvres du monde. Son « empire » ne durera que deux ans." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Bangui" },
              { label: "Monnaie", valeur: "Franc CFA d'Afrique centrale (XAF)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "13 août 1960" },
            ],
          },
          { type: "paragraphe", text: "Le sous-sol est riche en **diamants**, or, bois et uranium, mais l'agriculture vivrière domine la vie de la plupart des habitants. Depuis 2013, une mission de maintien de la paix de l'**ONU** tente de stabiliser le pays." },
          {
            type: "aRetenir",
            points: [
              "Riche en **diamants**, or et uranium, mais très pauvre",
              "Bokassa s'est couronné empereur en **1977**, pour deux ans",
              "Une mission de l'ONU tente de stabiliser le pays depuis 2013",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-25-centrafrique-quiz-1",
        question: "Où se situe grossièrement la Centrafrique sur le continent ?",
        options: ["Au centre de l'Afrique", "À l'extrême sud", "Sur la côte méditerranéenne", "À la pointe ouest"],
        correctIndex: 0,
        explanation: "Comme son nom l'indique, la Centrafrique occupe le cœur géographique du continent, sur un territoire presque aussi vaste que la France.",
      },
      {
        id: "course-geographie-25-centrafrique-quiz-2",
        question: "La Centrafrique a-t-elle un accès à la mer ?",
        options: ["Oui, sur l'Atlantique", "Non, elle est enclavée", "Oui, sur l'océan Indien", "Oui, sur la mer Rouge"],
        correctIndex: 1,
        explanation: "La République centrafricaine est un pays enclavé, sans façade maritime, ce qui isole fortement son intérieur du reste du monde.",
      },
      {
        id: "course-geographie-25-centrafrique-quiz-3",
        question: "Quelle ressource précieuse la Centrafrique exporte-t-elle ?",
        options: ["Les diamants", "Le pétrole", "Le charbon", "Le gaz naturel"],
        correctIndex: 0,
        explanation: "Les diamants comptent parmi les principales ressources du sous-sol centrafricain, aux côtés de l'or, du bois et de l'uranium.",
      },
      {
        id: "course-geographie-25-centrafrique-quiz-4",
        question: "Quelle est la capitale de la Centrafrique ?",
        options: ["Bangui", "Berbérati", "Bambari", "Bria"],
        correctIndex: 0,
        explanation: "Bangui, sur les rives de l'Oubangui, est la capitale du pays.",
      },
      {
        id: "course-geographie-25-centrafrique-quiz-5",
        question: "Quelle langue nationale, en plus du français, est largement parlée en Centrafrique ?",
        options: ["Le sango", "Le swahili", "Le lingala", "Le wolof"],
        correctIndex: 0,
        explanation: "Le sango, né du commerce fluvial sur l'Oubangui, est la langue véhiculaire nationale, comprise dans tout le pays malgré sa grande diversité ethnique.",
      },
    ],
  },
  {
    id: "course-geographie-26-congo-brazzaville",
    categoryId: "geo",
    emoji: "🇨🇬",
    title: "Congo (Brazzaville)",
    description: "Un pays équatorial pétrolier couvert de forêt, dont la capitale fait face à Kinshasa de l'autre côté du fleuve Congo. Découvre la République du Congo.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-26-congo-brazzaville-lesson-1",
        title: "Face à face avec Kinshasa",
        blocks: [
          { type: "paragraphe", text: "D'une rive à l'autre du fleuve Congo, deux capitales se regardent en permanence : Brazzaville et Kinshasa forment la paire de capitales les plus proches au monde, séparées par un simple aller de pirogue." },
          { type: "chiffreCle", valeur: "≈ 4 km", legende: "séparent Brazzaville de Kinshasa, un record mondial" },
          { type: "paragraphe", text: "Le pays est couvert par la grande forêt équatoriale du bassin du **Congo**, deuxième poumon vert de la planète. Entre Brazzaville et la côte s'étend le **Pool**, une région de savanes qui tranche avec la forêt dominante ailleurs." },
          {
            type: "aRetenir",
            points: [
              "Brazzaville et **Kinshasa**, séparées par quelques kilomètres seulement",
              "Le pays est couvert par la forêt équatoriale du bassin du Congo",
              "Le **Pool**, entre Brazzaville et la côte, est une région de savanes",
            ],
          },
          { type: "leSavaisTu", text: "Dans le parc national d'**Odzala-Kokoua**, au nord du pays, il est possible de croiser des gorilles de plaine directement depuis un ponton posé au cœur de la forêt." },
        ],
      },
      {
        id: "course-geographie-26-congo-brazzaville-lesson-2",
        title: "Trois peuples, un équilibre fragile",
        blocks: [
          { type: "paragraphe", text: "Le Congo compte environ 6 millions d'habitants, mais c'est l'un des pays les plus urbanisés d'Afrique subsaharienne : la grande majorité vit à Brazzaville et Pointe-Noire, laissant la forêt presque vide." },
          { type: "chiffreCle", valeur: "6 M", legende: "surtout urbains, la forêt reste presque vide" },
          { type: "paragraphe", text: "Trois grands ensembles régionaux structurent le pays : les **Kongo**, au sud autour de Brazzaville et Pointe-Noire, les Téké, autour du Pool, et les **Mbochi**, dans le nord. Leur équilibre politique reste un enjeu sensible depuis l'indépendance." },
          {
            type: "aRetenir",
            points: [
              "Environ **6 millions** d'habitants, très majoritairement urbains",
              "Trois ensembles régionaux : **Kongo**, Téké, Mbochi",
              "Le français est officiel, aux côtés du lingala et du kituba",
            ],
          },
          { type: "leSavaisTu", text: "Le **lingala**, langue nationale du Congo, est aussi celle de la rumba congolaise — la musique qui a conquis toute l'Afrique depuis les rives du fleuve Congo." },
        ],
      },
      {
        id: "course-geographie-26-congo-brazzaville-lesson-3",
        title: "Sous la forêt, du pétrole",
        blocks: [
          { type: "paragraphe", text: "L'économie congolaise vit presque entièrement du pétrole offshore, extrait au large de Pointe-Noire, le grand port pétrolier du pays. La forêt qui couvre le reste du territoire produit surtout du bois." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Brazzaville" },
              { label: "Monnaie", valeur: "Franc CFA d'Afrique centrale (XAF)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "15 août 1960" },
            ],
          },
          { type: "paragraphe", text: "Le pays a connu plusieurs guerres civiles dans les **années 1990**, avant un retour à une stabilité relative. Membre de l'Union africaine et de la **CEMAC**, le Congo joue un rôle modeste mais actif dans la diplomatie régionale." },
          {
            type: "aRetenir",
            points: [
              "L'économie dépend presque entièrement du **pétrole offshore**",
              "Indépendant depuis **1960**, plusieurs guerres civiles dans les années 1990",
              "Pointe-Noire est le grand port pétrolier du pays",
            ],
          },
          { type: "leSavaisTu", text: "Le **bassin du Congo**, deuxième forêt tropicale du monde après l'Amazonie, absorbe chaque année d'immenses quantités de carbone — un rôle climatique largement ignoré du grand public." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-26-congo-brazzaville-quiz-1",
        question: "Quelle est la capitale de la République du Congo ?",
        options: ["Brazzaville", "Pointe-Noire", "Dolisie", "Kinshasa"],
        correctIndex: 0,
        explanation: "Brazzaville est la capitale du Congo, posée sur la rive nord du fleuve Congo, juste en face de Kinshasa, capitale de la RD Congo voisine.",
      },
      {
        id: "course-geographie-26-congo-brazzaville-quiz-2",
        question: "Brazzaville fait face, de l'autre côté du fleuve, à quelle capitale ?",
        options: ["Kinshasa", "Libreville", "Bangui", "Yaoundé"],
        correctIndex: 0,
        explanation: "Brazzaville et Kinshasa, séparées par quelques kilomètres à peine sur les rives du fleuve Congo, forment la paire de capitales les plus proches au monde.",
      },
      {
        id: "course-geographie-26-congo-brazzaville-quiz-3",
        question: "Quelle est la principale ressource du Congo-Brazzaville ?",
        options: ["Le pétrole", "Le cacao", "L'or", "Le coton"],
        correctIndex: 0,
        explanation: "Le pétrole offshore, extrait au large de Pointe-Noire, est la principale exportation du pays ; cette dépendance fragilise les finances publiques.",
      },
      {
        id: "course-geographie-26-congo-brazzaville-quiz-4",
        question: "De quoi le Congo-Brazzaville est-il en grande partie couvert ?",
        options: ["De désert", "De forêt équatoriale", "De steppe", "De toundra"],
        correctIndex: 1,
        explanation: "Le pays fait partie du bassin forestier du Congo, deuxième massif forestier tropical du monde après l'Amazonie, abritant gorilles et éléphants de forêt.",
      },
      {
        id: "course-geographie-26-congo-brazzaville-quiz-5",
        question: "Quel grand fleuve sépare les deux Congos ?",
        options: ["Le fleuve Congo", "Le Nil", "Le Niger", "Le Zambèze"],
        correctIndex: 0,
        explanation: "Le fleuve Congo sépare la République du Congo de la République démocratique du Congo, et rapproche leurs deux capitales comme nulle part ailleurs au monde.",
      },
    ],
  },
  {
    id: "course-geographie-27-rd-congo",
    categoryId: "geo",
    emoji: "🇨🇩",
    title: "RD Congo",
    description: "Un géant au cœur de l'Afrique, cœur du bassin du Congo, immensément riche en minerais — un véritable « scandale géologique ». Découvre la RD Congo.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-27-rd-congo-lesson-1",
        title: "Grand comme l'Europe de l'Ouest",
        blocks: [
          { type: "paragraphe", text: "La RD Congo est presque aussi vaste que toute l'Europe de l'Ouest réunie — un territoire si immense que l'État peine à y maintenir une présence uniforme, malgré un découpage en 26 provinces." },
          { type: "chiffreCle", valeur: "2,34 M km²", legende: "le 2ᵉ plus grand pays d'Afrique, après l'Algérie" },
          { type: "paragraphe", text: "Le fleuve **Congo**, deuxième du monde par son débit, structure tout le pays. À l'est, la chaîne des volcans des Virunga, dont le **Nyiragongo**, domine les lacs Kivu, Édouard et Albert dans une région au climat plus frais." },
          {
            type: "aRetenir",
            points: [
              "Le 2ᵉ plus grand pays d'Afrique, après l'**Algérie**",
              "Le fleuve **Congo**, deuxième du monde par son débit",
              "Le **Nyiragongo**, volcan actif, domine les grands lacs de l'est",
            ],
          },
          { type: "leSavaisTu", text: "Le Nyiragongo abrite l'un des plus grands lacs de lave permanents du monde, à l'intérieur d'un cratère si profond qu'il faut parfois plusieurs heures de marche pour l'atteindre." },
        ],
      },
      {
        id: "course-geographie-27-rd-congo-lesson-2",
        title: "Plus peuplé que la France",
        blocks: [
          { type: "paragraphe", text: "Avec environ 105 millions d'habitants, la RD Congo compte plus de monde que la France entière — l'un des pays les plus peuplés d'Afrique, malgré un territoire encore largement recouvert de forêt vide d'hommes." },
          { type: "chiffreCle", valeur: "105 M", legende: "plus que la population de la France entière" },
          { type: "paragraphe", text: "Le pays réunit plus de **200 groupes ethniques**. Quatre grandes langues nationales — lingala, swahili, kikongo, tshiluba — s'ajoutent au français et structurent encore les identités régionales du pays." },
          {
            type: "aRetenir",
            points: [
              "Environ **105 millions** d'habitants, plus que la France",
              "Quatre langues nationales : **lingala**, swahili, kikongo, tshiluba",
              "Plus de 200 groupes ethniques, une immense diversité",
            ],
          },
          { type: "leSavaisTu", text: "**Kinshasa** est aujourd'hui la plus grande ville francophone du monde, devant Paris — un titre que peu de gens connaissent, tant l'expansion démographique de la capitale congolaise a été rapide." },
        ],
      },
      {
        id: "course-geographie-27-rd-congo-lesson-3",
        title: "Le cobalt de nos téléphones",
        blocks: [
          { type: "paragraphe", text: "Le cobalt qui alimente la batterie de ton téléphone vient très probablement de RD Congo : le pays en est le premier producteur mondial, un minerai devenu indispensable à l'ère du numérique." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Kinshasa" },
              { label: "Monnaie", valeur: "Franc congolais (CDF)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "30 juin 1960" },
            ],
          },
          { type: "paragraphe", text: "On parle de « **scandale géologique** » tant le sous-sol est riche : cuivre, coltan, diamant, or, un énorme potentiel hydroélectrique. Pourtant la population reste pauvre, et le pays garde la mémoire douloureuse de l'assassinat de **Patrice Lumumba** en 1961." },
          {
            type: "aRetenir",
            points: [
              "Premier producteur mondial de **cobalt**, clé des batteries",
              "Surnommé le « **scandale géologique** » pour ses richesses minières",
              "Le pays garde la mémoire de **Patrice Lumumba**, assassiné en 1961",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-27-rd-congo-quiz-1",
        question: "La RD Congo est le deuxième plus grand pays d'Afrique, après lequel ?",
        options: ["L'Algérie", "Le Soudan", "La Libye", "Le Nigeria"],
        correctIndex: 0,
        explanation: "Avec environ 2,34 millions de km², presque aussi vaste que toute l'Europe de l'Ouest, la RDC vient juste après l'Algérie par la superficie.",
      },
      {
        id: "course-geographie-27-rd-congo-quiz-2",
        question: "La RD Congo est le premier producteur mondial de quel métal, essentiel aux batteries ?",
        options: ["L'or", "Le cobalt", "Le fer", "L'aluminium"],
        correctIndex: 1,
        explanation: "La RDC fournit l'essentiel du cobalt mondial, indispensable aux batteries des téléphones et voitures électriques — un minerai au cœur de « l'ère du numérique ».",
      },
      {
        id: "course-geographie-27-rd-congo-quiz-3",
        question: "Quelle est la capitale de la RD Congo ?",
        options: ["Kinshasa", "Lubumbashi", "Goma", "Kisangani"],
        correctIndex: 0,
        explanation: "Kinshasa, sur le fleuve Congo, est la capitale et la plus grande ville francophone du monde, devant Paris.",
      },
      {
        id: "course-geographie-27-rd-congo-quiz-4",
        question: "Quel grand fleuve traverse la RD Congo ?",
        options: ["Le fleuve Congo", "Le Nil", "Le Niger", "Le Sénégal"],
        correctIndex: 0,
        explanation: "Le fleuve Congo, deuxième du monde par son débit, structure tout le pays et alimente un immense potentiel hydroélectrique.",
      },
      {
        id: "course-geographie-27-rd-congo-quiz-5",
        question: "Quelle est la langue officielle de la RD Congo ?",
        options: ["Le français", "L'anglais", "Le portugais", "L'espagnol"],
        correctIndex: 0,
        explanation: "Le français est la langue officielle, aux côtés de quatre grandes langues nationales : lingala, swahili, kikongo et tshiluba.",
      },
    ],
  },
  {
    id: "course-geographie-28-gabon",
    categoryId: "geo",
    emoji: "🇬🇦",
    title: "Gabon",
    description: "Un pays équatorial couvert de forêt, pétrolier et pionnier de la protection de la nature. Découvre le Gabon.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-28-gabon-lesson-1",
        title: "Presque tout est forêt ici",
        blocks: [
          { type: "paragraphe", text: "Près de 85 % du Gabon disparaît sous une forêt équatoriale continue, du littoral jusqu'aux confins du pays. Peu de nations sur Terre sont aussi entièrement recouvertes de vert que ce petit pays d'Afrique centrale." },
          { type: "chiffreCle", valeur: "85 %", legende: "du territoire couvert par la forêt équatoriale" },
          { type: "paragraphe", text: "Le fleuve **Ogooué** traverse cette forêt quasi continue d'ouest en est et a longtemps servi de voie de transport du bois. Créé dès 2002, un réseau de 13 parcs nationaux — dont **Lopé** et Ivindo — a valu au Gabon une réputation de pionnier africain de la conservation." },
          {
            type: "aRetenir",
            points: [
              "**85 %** du pays est couvert de forêt équatoriale",
              "Le fleuve **Ogooué** traverse le pays d'ouest en est",
              "13 parcs nationaux créés dès 2002, dont Lopé et Ivindo",
            ],
          },
        ],
      },
      {
        id: "course-geographie-28-gabon-lesson-2",
        title: "Peu nombreux, presque tous urbains",
        blocks: [
          { type: "paragraphe", text: "Le Gabon compte à peine 2,4 millions d'habitants pour un territoire immense — mais près de 90 % d'entre eux vivent en ville, laissant l'essentiel de la forêt presque totalement inhabitée." },
          { type: "chiffreCle", valeur: "90 %", legende: "des Gabonais vivent en ville, la forêt presque vide" },
          { type: "paragraphe", text: "Les principaux peuples sont les **Fang**, au nord, en lien culturel avec le Cameroun et la Guinée équatoriale voisins, et les Punu et Nzebi, au sud, dont les traditions musicales et rituelles, comme le **bwiti**, sont reconnues bien au-delà du pays." },
          {
            type: "aRetenir",
            points: [
              "Environ **2,4 millions** d'habitants, dont 90 % en ville",
              "Les **Fang** au nord, les Punu et Nzebi au sud",
              "Le **bwiti**, tradition rituelle, rayonne bien au-delà du Gabon",
            ],
          },
        ],
      },
      {
        id: "course-geographie-28-gabon-lesson-3",
        title: "Un pionnier de la nature protégée",
        blocks: [
          { type: "paragraphe", text: "En 2002, le Gabon a classé d'un coup 13 parcs nationaux, sur près de 11 % de son territoire — un geste rare à l'échelle du continent, qui en a fait un pionnier africain de la conservation." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Libreville" },
              { label: "Monnaie", valeur: "Franc CFA d'Afrique centrale (XAF)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "17 août 1960" },
            ],
          },
          { type: "paragraphe", text: "L'économie repose sur le **pétrole**, longtemps pilier du pays, le **manganèse** et le bois précieux (okoumé). Le revenu par habitant est parmi les plus élevés d'Afrique subsaharienne, mais les inégalités restent fortes. Une même famille a dirigé le pays pendant 56 ans, jusqu'en 2023." },
          {
            type: "aRetenir",
            points: [
              "L'économie repose sur le **pétrole** et le manganèse",
              "13 parcs nationaux classés en 2002, pionnier de la conservation",
              "Une même famille a dirigé le pays pendant **56 ans**",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-28-gabon-quiz-1",
        question: "Quelle part du territoire gabonais est couverte de forêt ?",
        options: ["Environ 10 %", "Environ 30 %", "Environ 50 %", "Environ 85 %"],
        correctIndex: 3,
        explanation: "Le Gabon est l'un des pays les plus forestiers du monde, avec près de 85 % de forêt équatoriale continue.",
      },
      {
        id: "course-geographie-28-gabon-quiz-2",
        question: "Quelles sont les principales ressources du Gabon ?",
        options: ["Le pétrole et le manganèse", "Le cacao et le café", "L'or et les diamants", "Le coton et l'arachide"],
        correctIndex: 0,
        explanation: "Le pétrole et le manganèse sont les deux piliers de l'économie gabonaise, aux côtés du bois précieux comme l'okoumé.",
      },
      {
        id: "course-geographie-28-gabon-quiz-3",
        question: "Quelle est la capitale du Gabon ?",
        options: ["Libreville", "Port-Gentil", "Franceville", "Oyem"],
        correctIndex: 0,
        explanation: "Libreville, sur la côte atlantique, est la capitale du pays.",
      },
      {
        id: "course-geographie-28-gabon-quiz-4",
        question: "Sur quelle ligne imaginaire le Gabon est-il situé ?",
        options: ["L'équateur", "Le tropique du Cancer", "Le cercle polaire", "Le méridien de Greenwich"],
        correctIndex: 0,
        explanation: "Le Gabon est traversé par l'équateur, d'où son climat équatorial humide et sa forêt dense toute l'année.",
      },
      {
        id: "course-geographie-28-gabon-quiz-5",
        question: "Quelle monnaie utilise le Gabon ?",
        options: ["Le franc CFA", "Le kwanza", "Le naira", "Le cedi"],
        correctIndex: 0,
        explanation: "Le Gabon appartient à la zone du franc CFA d'Afrique centrale (CEMAC).",
      },
    ],
  },
  {
    id: "course-geographie-29-guinee-equatoriale",
    categoryId: "geo",
    emoji: "🇬🇶",
    title: "Guinée équatoriale",
    description: "Un petit État pétrolier hispanophone, à cheval entre le continent et des îles du golfe de Guinée. Découvre la Guinée équatoriale.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-29-guinee-equatoriale-lesson-1",
        title: "Un pays fait de deux morceaux",
        blocks: [
          { type: "paragraphe", text: "La Guinée équatoriale n'est pas un seul territoire mais deux : une partie continentale, le Río Muni, et des îles volcaniques, dont Bioko, où siège la capitale — à des dizaines de kilomètres l'une de l'autre." },
          { type: "chiffreCle", valeur: "3 000 m", legende: "le pic Basilé, volcan qui domine l'île de Bioko" },
          { type: "paragraphe", text: "L'île de **Bioko**, dominée par le pic Basilé, bénéficie de pluies parmi les plus abondantes d'Afrique. Le **Río Muni** continental, lui, prolonge la grande forêt équatoriale partagée avec le Gabon et le Cameroun voisins." },
          {
            type: "aRetenir",
            points: [
              "Deux territoires : le continent (**Río Muni**) et les îles",
              "Le pic Basilé, sur **Bioko**, culmine à plus de 3 000 m",
              "La forêt équatoriale couvre l'essentiel du Río Muni",
            ],
          },
          { type: "leSavaisTu", text: "Bioko, où vit la capitale, est séparée du Río Muni continental par plus de 150 km d'océan — là où vit pourtant la majorité des Équato-Guinéens." },
        ],
      },
      {
        id: "course-geographie-29-guinee-equatoriale-lesson-2",
        title: "Le seul pays hispanophone d'Afrique",
        blocks: [
          { type: "paragraphe", text: "La Guinée équatoriale est le seul pays d'Afrique continentale à avoir l'espagnol pour langue officielle, aux côtés du français et du portugais — un héritage tout à fait unique de la colonisation espagnole." },
          { type: "chiffreCle", valeur: "1,7 M", legende: "d'habitants, entre continent et île de Bioko" },
          { type: "paragraphe", text: "Les **Fang** dominent sur le continent, les **Bubis** sur l'île de Bioko. La découverte du pétrole dans les années 1990 a accéléré l'urbanisation et attiré une importante main-d'œuvre étrangère venue de toute la région." },
          {
            type: "aRetenir",
            points: [
              "Environ **1,7 million** d'habitants, entre continent et île",
              "**Fang** sur le continent, Bubis sur l'île de Bioko",
              "Le pétrole des années 1990 a attiré une main-d'œuvre étrangère",
            ],
          },
          { type: "leSavaisTu", text: "Avec environ 1,7 million d'habitants seulement, la Guinée équatoriale affiche l'un des revenus pétroliers par tête les plus élevés d'Afrique — mais cette richesse reste très mal partagée entre les habitants." },
        ],
      },
      {
        id: "course-geographie-29-guinee-equatoriale-lesson-3",
        title: "Une capitale neuve dans la jungle",
        blocks: [
          { type: "paragraphe", text: "Sur le continent, en pleine forêt, la Guinée équatoriale construit depuis plusieurs années une toute nouvelle capitale, Ciudad de la Paz — pour quitter Malabo, isolée sur son île de Bioko." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Malabo" },
              { label: "Monnaie", valeur: "Franc CFA d'Afrique centrale (XAF)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "12 octobre 1968" },
            ],
          },
          { type: "paragraphe", text: "La découverte de **pétrole** et de gaz dans les années 1990 a fait bondir le PIB par habitant, l'un des plus élevés d'Afrique. Le même dirigeant est au pouvoir depuis **1979** — l'un des plus longs règnes du continent." },
          {
            type: "aRetenir",
            points: [
              "Le **pétrole** des années 1990 a transformé l'économie",
              "L'un des plus longs règnes politiques du continent, depuis **1979**",
              "Une nouvelle capitale, Ciudad de la Paz, en construction",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-29-guinee-equatoriale-quiz-1",
        question: "Quelle est la langue officielle de la Guinée équatoriale ?",
        options: ["Le français", "L'espagnol", "Le portugais", "L'anglais"],
        correctIndex: 1,
        explanation: "La Guinée équatoriale est le seul pays d'Afrique continentale à avoir l'espagnol pour langue officielle, un héritage unique de la colonisation espagnole.",
      },
      {
        id: "course-geographie-29-guinee-equatoriale-quiz-2",
        question: "Quelle ressource a enrichi la Guinée équatoriale à partir des années 1990 ?",
        options: ["Le pétrole", "Le cacao", "L'or", "Le coton"],
        correctIndex: 0,
        explanation: "La découverte du pétrole dans les années 1990 a fait de la Guinée équatoriale l'un des pays au PIB par habitant les plus élevés d'Afrique, même si cette richesse reste mal répartie.",
      },
      {
        id: "course-geographie-29-guinee-equatoriale-quiz-3",
        question: "Sur quelle île se trouve la capitale Malabo ?",
        options: ["L'île de Bioko", "L'île de Zanzibar", "L'île de Gorée", "L'île de Madagascar"],
        correctIndex: 0,
        explanation: "Malabo est située sur l'île volcanique de Bioko, séparée de plus de 150 km du Río Muni continental, où vit pourtant la majorité de la population.",
      },
      {
        id: "course-geographie-29-guinee-equatoriale-quiz-4",
        question: "Quelle est la capitale de la Guinée équatoriale ?",
        options: ["Malabo", "Bata", "Ebebiyín", "Mongomo"],
        correctIndex: 0,
        explanation: "Malabo, sur l'île de Bioko, est la capitale ; une nouvelle capitale, Ciudad de la Paz, se construit sur le continent.",
      },
      {
        id: "course-geographie-29-guinee-equatoriale-quiz-5",
        question: "Quelle monnaie utilise la Guinée équatoriale ?",
        options: ["Le franc CFA", "L'euro", "Le kwanza", "Le naira"],
        correctIndex: 0,
        explanation: "La Guinée équatoriale appartient à la zone du franc CFA d'Afrique centrale (CEMAC).",
      },
    ],
  },
  {
    id: "course-geographie-30-sao-tome-et-principe",
    categoryId: "geo",
    emoji: "🇸🇹",
    title: "São Tomé-et-Príncipe",
    description: "Le pays le moins peuplé d'Afrique : un archipel équatorial lusophone de cacao et de forêt. Découvre São Tomé-et-Príncipe.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-30-sao-tome-et-principe-lesson-1",
        title: "Une aiguille volcanique géante",
        blocks: [
          { type: "paragraphe", text: "Le Pico Cão Grande jaillit de la forêt comme une aiguille de pierre, vestige d'un ancien volcan. Ce petit archipel équatorial abrite une biodiversité comparable, pour sa taille, à celle des Galápagos." },
          { type: "chiffreCle", valeur: "370 m", legende: "de roche verticale, un pic vertigineux" },
          { type: "paragraphe", text: "Le point culminant de l'archipel, le **Pico de São Tomé**, dépasse 2 000 m et porte une **forêt de nuages** unique, riche en espèces d'oiseaux et de plantes qu'on ne trouve nulle part ailleurs." },
          {
            type: "aRetenir",
            points: [
              "Le **Pico Cão Grande**, aiguille volcanique spectaculaire",
              "Le point culminant dépasse 2 000 m, sous une forêt de nuages",
              "Une biodiversité comparable, pour sa taille, aux Galápagos",
            ],
          },
          { type: "leSavaisTu", text: "Le Pico Cão Grande est l'une des aiguilles volcaniques les plus difficiles à escalader au monde — un défi qui attire chaque année une poignée de grimpeurs expérimentés venus du monde entier." },
        ],
      },
      {
        id: "course-geographie-30-sao-tome-et-principe-lesson-2",
        title: "Le pays le moins peuplé d'Afrique",
        blocks: [
          { type: "paragraphe", text: "Avec environ 230 000 habitants, São Tomé-et-Príncipe est le pays le plus discret d'Afrique — la quasi-totalité de sa population tient sur une seule des deux îles, São Tomé, la plus grande." },
          { type: "chiffreCle", valeur: "230 000", legende: "la plus faible population de tout le continent" },
          { type: "paragraphe", text: "L'île de **Príncipe**, beaucoup plus petite et isolée, ne compte que quelques milliers d'habitants. La société **créole**, née dès le XVe siècle du brassage entre colons portugais et esclaves africains, hérite des plantations de canne à sucre puis de cacao." },
          {
            type: "aRetenir",
            points: [
              "Environ **230 000** habitants, la plus faible population d'Afrique",
              "Presque tous sur **São Tomé**, la plus grande des deux îles",
              "Une société **créole**, héritière des plantations coloniales",
            ],
          },
          { type: "leSavaisTu", text: "La culture créole de São Tomé est si proche de celle du Cap-Vert, à des milliers de kilomètres de là, que les deux archipels partagent des traditions musicales et culinaires étonnamment semblables." },
        ],
      },
      {
        id: "course-geographie-30-sao-tome-et-principe-lesson-3",
        title: "Les îles chocolat, stables et discrètes",
        blocks: [
          { type: "paragraphe", text: "Longtemps surnommées les « îles chocolat » pour leurs plantations de cacao, ces deux petites îles comptent aussi parmi les démocraties les plus stables d'Afrique, avec des alternances pacifiques régulières depuis 1990." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "São Tomé" },
              { label: "Monnaie", valeur: "Dobra (STN)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "12 juillet 1975" },
            ],
          },
          { type: "paragraphe", text: "L'économie repose sur le **cacao**, culture historique, la pêche et un tourisme naissant ; un potentiel pétrolier offshore reste à l'étude. C'est l'une des plus petites économies d'Afrique, mais l'une des plus **stables** politiquement." },
          {
            type: "aRetenir",
            points: [
              "Le **cacao**, culture historique des « îles chocolat »",
              "L'une des démocraties les plus stables d'Afrique depuis 1990",
              "Une petite économie insulaire, tournée vers le tourisme naissant",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-30-sao-tome-et-principe-quiz-1",
        question: "São Tomé-et-Príncipe est géographiquement…",
        options: ["Un archipel d'îles", "Un pays enclavé", "Une péninsule désertique", "Un haut plateau continental"],
        correctIndex: 0,
        explanation: "Le pays est un archipel de deux îles principales dans le golfe de Guinée, dominé par le Pico Cão Grande, une spectaculaire aiguille volcanique.",
      },
      {
        id: "course-geographie-30-sao-tome-et-principe-quiz-2",
        question: "Quelle culture a fait la réputation de São Tomé-et-Príncipe ?",
        options: ["Le cacao", "Le café", "Le coton", "Le thé"],
        correctIndex: 0,
        explanation: "Les « îles chocolat » sont depuis longtemps réputées pour leur cacao, culture historique héritée des plantations coloniales portugaises.",
      },
      {
        id: "course-geographie-30-sao-tome-et-principe-quiz-3",
        question: "Quelle est la langue officielle de São Tomé-et-Príncipe ?",
        options: ["Le français", "Le portugais", "L'espagnol", "L'anglais"],
        correctIndex: 1,
        explanation: "Ancienne colonie portugaise, l'archipel a le portugais pour langue officielle.",
      },
      {
        id: "course-geographie-30-sao-tome-et-principe-quiz-4",
        question: "Quelle est la capitale du pays ?",
        options: ["São Tomé", "Príncipe", "Trindade", "Neves"],
        correctIndex: 0,
        explanation: "La ville de São Tomé, sur l'île principale, est la capitale du pays, où vit la quasi-totalité de la population.",
      },
      {
        id: "course-geographie-30-sao-tome-et-principe-quiz-5",
        question: "São Tomé-et-Príncipe est le pays africain le plus…",
        options: ["Le moins peuplé", "Le plus peuplé", "Le plus vaste", "Le plus montagneux du continent"],
        correctIndex: 0,
        explanation: "Avec environ 230 000 habitants, c'est le pays le moins peuplé d'Afrique.",
      },
    ],
  },
  {
    id: "course-geographie-31-tchad",
    categoryId: "geo",
    emoji: "🇹🇩",
    title: "Tchad",
    description: "Un vaste pays enclavé, du désert saharien au lac Tchad, charnière entre le Sahel et l'Afrique centrale. Découvre le Tchad.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-31-tchad-lesson-1",
        title: "Des lacs éternels en plein désert",
        blocks: [
          { type: "paragraphe", text: "En plein cœur du Sahara, dans le désert du Tibesti, des lacs d'eau douce existent depuis des millénaires sans jamais s'assécher — un miracle géologique au milieu de l'un des déserts les plus arides du monde." },
          { type: "chiffreCle", valeur: "3 415 m", legende: "l'Emi Koussi, plus haut sommet de tout le Sahara" },
          { type: "paragraphe", text: "Le massif du **Tibesti**, au nord, culmine à l'**Emi Koussi**. Les lacs d'**Ounianga**, permanents et classés à l'UNESCO, ponctuent ce désert. Plus au sud, le climat s'adoucit du sahélien à la savane." },
          {
            type: "aRetenir",
            points: [
              "Les lacs d'**Ounianga**, permanents, classés à l'UNESCO",
              "L'**Emi Koussi**, à plus de 3 400 m, toit du Sahara",
              "Du désert saharien au nord à la savane au sud",
            ],
          },
          { type: "leSavaisTu", text: "Les lacs d'Ounianga ne sont pas alimentés par la pluie, quasi inexistante ici, mais par une nappe souterraine fossile — et certains d'entre eux affichent des couleurs très différentes, du vert au rouge." },
        ],
      },
      {
        id: "course-geographie-31-tchad-lesson-2",
        title: "Un pays coupé en deux mondes",
        blocks: [
          { type: "paragraphe", text: "Le Tchad compte environ 18 millions d'habitants, partagés entre un nord musulman et un sud chrétien et animiste — une opposition géographique, religieuse et ethnique qui structure la vie politique du pays depuis l'indépendance." },
          { type: "chiffreCle", valeur: "18 M", legende: "concentrés dans le sud, plus arrosé et cultivable" },
          { type: "paragraphe", text: "Le pays réunit plus de **200 groupes ethniques**. Le français et l'arabe sont les deux langues officielles. Cette opposition nord-sud a nourri des rébellions et des guerres civiles récurrentes depuis l'**indépendance**." },
          {
            type: "aRetenir",
            points: [
              "Environ **18 millions** d'habitants, surtout dans le sud",
              "Plus de **200 groupes ethniques**, français et arabe officiels",
              "L'opposition nord-sud a nourri des rébellions depuis l'indépendance",
            ],
          },
          { type: "leSavaisTu", text: "Les Toubous, peuple nomade du Tibesti, comptent parmi les rares habitants permanents de cette région saharienne — l'une des plus reculées et des plus hostiles de la planète." },
        ],
      },
      {
        id: "course-geographie-31-tchad-lesson-3",
        title: "Les nomades du toit du Sahara",
        blocks: [
          { type: "paragraphe", text: "Dans les hauteurs arides du Tibesti, au pied de l'Emi Koussi, les Toubous mènent depuis des siècles une vie nomade au sommet du Sahara — l'un des modes de vie les plus rudes du continent." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "N'Djamena" },
              { label: "Monnaie", valeur: "Franc CFA d'Afrique centrale (XAF)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "11 août 1960" },
            ],
          },
          { type: "paragraphe", text: "Le **pétrole**, exploité depuis les années 2000, est devenu la principale exportation, aux côtés du coton et de la **gomme arabique**. C'est pourtant l'un des pays les plus pauvres du monde, très vulnérable aux sécheresses." },
          {
            type: "aRetenir",
            points: [
              "Les **Toubous**, nomades du Tibesti, vivent au sommet du Sahara",
              "Le **pétrole** est la principale exportation depuis les années 2000",
              "Un des pays les plus pauvres du monde, malgré le pétrole",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-31-tchad-quiz-1",
        question: "Le Tchad a-t-il un accès à la mer ?",
        options: ["Oui, sur l'Atlantique", "Non, il est enclavé", "Oui, sur la Méditerranée", "Oui, sur la mer Rouge"],
        correctIndex: 1,
        explanation: "Le Tchad est un vaste pays enclavé, sans façade maritime, au cœur du continent africain.",
      },
      {
        id: "course-geographie-31-tchad-quiz-2",
        question: "Quel lac, en fort recul, borde le sud-ouest du Tchad ?",
        options: ["Le lac Tchad", "Le lac Victoria", "Le lac Malawi", "Le lac Tanganyika"],
        correctIndex: 0,
        explanation: "Le lac Tchad, qui donne son nom au pays, a perdu une grande partie de sa surface en quelques décennies, à la frontière du Nigeria, du Niger et du Cameroun.",
      },
      {
        id: "course-geographie-31-tchad-quiz-3",
        question: "Quelle est la principale ressource d'exportation du Tchad ?",
        options: ["Le pétrole", "Le cacao", "L'or", "La bauxite"],
        correctIndex: 0,
        explanation: "Depuis les années 2000, le pétrole est la première exportation du Tchad, aux côtés du coton et de la gomme arabique.",
      },
      {
        id: "course-geographie-31-tchad-quiz-4",
        question: "Quelles sont les deux langues officielles du Tchad ?",
        options: ["Le français et l'arabe", "Le français et l'anglais", "L'arabe et le portugais", "L'anglais et le swahili"],
        correctIndex: 0,
        explanation: "Le Tchad a deux langues officielles : le français et l'arabe, reflet de son opposition géographique et culturelle nord-sud.",
      },
      {
        id: "course-geographie-31-tchad-quiz-5",
        question: "Quelle est la capitale du Tchad ?",
        options: ["N'Djamena", "Moundou", "Sarh", "Abéché"],
        correctIndex: 0,
        explanation: "N'Djamena, près du lac Tchad, est la capitale du pays.",
      },
    ],
  },
  {
    id: "course-geographie-32-burundi",
    categoryId: "geo",
    emoji: "🇧🇮",
    title: "Burundi",
    description: "Un petit pays des Grands Lacs, densément peuplé, réputé pour ses tambours sacrés. Découvre le Burundi.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-32-burundi-lesson-1",
        title: "Des collines cultivées jusqu'au sommet",
        blocks: [
          { type: "paragraphe", text: "Au Burundi, les collines sont cultivées jusqu'à leur sommet : il ne reste presque plus un mètre carré de terre sauvage dans ce petit pays parmi les plus densément peuplés d'Afrique." },
          { type: "chiffreCle", valeur: "1 470 m", legende: "la profondeur du lac Tanganyika, un record mondial" },
          { type: "paragraphe", text: "La crête **Congo-Nil**, qui traverse le pays du nord au sud, sépare les bassins du Congo et du Nil. Le pays laisse peu de place aux espaces naturels préservés, à l'exception de quelques réserves autour du lac **Tanganyika**." },
          {
            type: "aRetenir",
            points: [
              "Les collines sont cultivées jusqu'à leur sommet",
              "La crête **Congo-Nil** sépare les bassins du Congo et du Nil",
              "Le lac **Tanganyika**, l'un des plus profonds lacs du monde",
            ],
          },
          { type: "leSavaisTu", text: "Le lac Tanganyika contiendrait à lui seul environ 16 % de toute l'eau douce liquide disponible à la surface de la Terre — un volume presque impossible à imaginer pour un seul lac." },
        ],
      },
      {
        id: "course-geographie-32-burundi-lesson-2",
        title: "Chaque colline a ses habitants",
        blocks: [
          { type: "paragraphe", text: "Le Burundi compte environ 13 millions d'habitants sur un territoire minuscule : c'est l'un des pays les plus densément peuplés d'Afrique, où chaque colline porte son lot de familles et de champs." },
          { type: "chiffreCle", valeur: "13 M", legende: "sur seulement 27 800 km², une densité record" },
          { type: "paragraphe", text: "On y trouve les **Hutus**, les Tutsis et les Twa. Cette composition ethnique, partagée avec le Rwanda voisin, a nourri des cycles de violence depuis l'indépendance, dont l'assassinat du président Ndadaye en **1993** a déclenché la plus longue guerre civile du pays." },
          {
            type: "aRetenir",
            points: [
              "Environ **13 millions** d'habitants, une densité record",
              "**Hutus**, Tutsis et Twa se partagent le pays",
              "La guerre civile de **1993-2005** a marqué le pays",
            ],
          },
          { type: "leSavaisTu", text: "Contrairement à la plupart des pays africains, le Burundi ne compte quasiment qu'une seule langue maternelle, le kirundi, parlée et comprise par la quasi-totalité de la population." },
        ],
      },
      {
        id: "course-geographie-32-burundi-lesson-3",
        title: "Les tambours qui parlent aux ancêtres",
        blocks: [
          { type: "paragraphe", text: "Les tambours royaux du Burundi ne sont pas de simples instruments : ils étaient réservés aux cérémonies du pouvoir, jugés si sacrés que leur usage restait longtemps interdit aux femmes et aux non-initiés." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Gitega (politique)" },
              { label: "Monnaie", valeur: "Franc burundais (BIF)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "1er juillet 1962" },
            ],
          },
          { type: "paragraphe", text: "L'économie repose sur une agriculture de subsistance et l'exportation de **café** et de thé. **Bujumbura**, sur les rives du lac Tanganyika, reste la capitale économique, tandis que Gitega porte le pouvoir politique depuis 2019." },
          {
            type: "aRetenir",
            points: [
              "Les tambours sacrés, inscrits au patrimoine de l'UNESCO",
              "L'économie repose sur le **café** et le thé",
              "**Bujumbura**, capitale économique ; Gitega, capitale politique depuis 2019",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-32-burundi-quiz-1",
        question: "Dans quelle région des lacs se trouve le Burundi ?",
        options: ["Les Grands Lacs", "Les Grands Lacs d'Amérique", "La région des chotts", "Le bassin du Tchad"],
        correctIndex: 0,
        explanation: "Le Burundi appartient à la région des Grands Lacs d'Afrique de l'Est, un pays de collines cultivées jusqu'à leur sommet.",
      },
      {
        id: "course-geographie-32-burundi-quiz-2",
        question: "Quel grand lac borde le Burundi au sud-ouest ?",
        options: ["Le lac Tanganyika", "Le lac Victoria", "Le lac Tchad", "Le lac Malawi"],
        correctIndex: 0,
        explanation: "Le lac Tanganyika, l'un des plus profonds du monde, longe le Burundi et contiendrait à lui seul une part considérable de l'eau douce disponible sur Terre.",
      },
      {
        id: "course-geographie-32-burundi-quiz-3",
        question: "Quelles sont les principales exportations du Burundi ?",
        options: ["Le café et le thé", "Le pétrole et le gaz", "Le cacao et le caoutchouc", "L'or et les diamants"],
        correctIndex: 0,
        explanation: "Le café et le thé sont les grandes exportations agricoles du Burundi, dans un pays où l'agriculture de subsistance domine.",
      },
      {
        id: "course-geographie-32-burundi-quiz-4",
        question: "Quelle est la capitale politique du Burundi ?",
        options: ["Bujumbura", "Gitega", "Ngozi", "Rumonge"],
        correctIndex: 1,
        explanation: "Gitega est devenue la capitale politique en 2019 ; Bujumbura, sur le lac Tanganyika, reste la capitale économique.",
      },
      {
        id: "course-geographie-32-burundi-quiz-5",
        question: "Le Burundi a-t-il un accès à la mer ?",
        options: ["Oui, sur l'océan Indien", "Non, il est enclavé", "Oui, sur l'Atlantique", "Oui, sur la mer Rouge"],
        correctIndex: 1,
        explanation: "Le Burundi est un pays enclavé, sans façade maritime.",
      },
    ],
  },
  {
    id: "course-geographie-33-comores",
    categoryId: "geo",
    emoji: "🇰🇲",
    title: "Comores",
    description: "Un archipel volcanique de l'océan Indien, « les îles de la Lune », entre l'Afrique et Madagascar. Découvre les Comores.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-33-comores-lesson-1",
        title: "Les îles de la Lune",
        blocks: [
          { type: "paragraphe", text: "Les Comores tirent leur nom de l'arabe « Qamar », la Lune. Un archipel volcanique surgi de l'océan Indien, entre l'Afrique et Madagascar, que l'on surnomme depuis toujours « les îles de la Lune »." },
          { type: "chiffreCle", valeur: "2 300 m", legende: "le Karthala, volcan encore actif sur la Grande Comore" },
          { type: "paragraphe", text: "Le **Karthala**, sur la Grande Comore, entre régulièrement en éruption et façonne les paysages de l'île la plus vaste de l'archipel. Le climat tropical, tempéré par les alizés, favorise la culture de plantes à parfum comme l'**ylang-ylang**, le girofle et la vanille." },
          {
            type: "aRetenir",
            points: [
              "Surnommées « les îles de la Lune », depuis l'arabe Qamar",
              "Le **Karthala**, volcan actif, domine la Grande Comore",
              "Terre de plantes à parfum : **ylang-ylang**, girofle, vanille",
            ],
          },
          { type: "leSavaisTu", text: "Le cratère du Karthala compte parmi les plus vastes calderas volcaniques du monde — plus de 3 km de diamètre, visible depuis l'espace lors de ses éruptions." },
        ],
      },
      {
        id: "course-geographie-33-comores-lesson-2",
        title: "Un peuple entre Afrique et Arabie",
        blocks: [
          { type: "paragraphe", text: "La population comorienne, d'origine swahilie, arabe et africaine, s'est formée au fil de siècles de commerce à travers l'océan Indien — un pont culturel entre le monde swahili côtier et le monde arabe." },
          { type: "chiffreCle", valeur: "850 000", legende: "habitants, parmi les densités les plus fortes d'Afrique" },
          { type: "paragraphe", text: "Le **comorien** (shikomori), l'arabe et le français sont langues officielles ; l'islam est très majoritaire. Une forte émigration, notamment vers la France et vers **Mayotte**, entretient des liens économiques et familiaux étroits malgré la séparation politique." },
          {
            type: "aRetenir",
            points: [
              "Environ **850 000** habitants, une très forte densité",
              "Identité **swahilie**, arabe et africaine mêlées",
              "Une forte émigration vers la France et **Mayotte**",
            ],
          },
        ],
      },
      {
        id: "course-geographie-33-comores-lesson-3",
        title: "L'île qui a choisi de rester",
        blocks: [
          { type: "paragraphe", text: "En 1974, lors du référendum d'indépendance, les habitants de Mayotte ont voté pour rester français, tandis que les trois autres îles choisissaient l'indépendance — une séparation que les Comores n'ont jamais acceptée." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Moroni" },
              { label: "Monnaie", valeur: "Franc comorien (KMF)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "6 juillet 1975" },
            ],
          },
          { type: "paragraphe", text: "L'agriculture domine l'économie : les Comores sont un grand producteur mondial d'**ylang-ylang**, cette fleur utilisée en parfumerie. Le pays a connu depuis l'indépendance de nombreuses tentatives de coups d'État et de sécession, notamment sur l'île d'**Anjouan**." },
          {
            type: "aRetenir",
            points: [
              "Grand producteur mondial d'**ylang-ylang**, fleur à parfum",
              "**Mayotte**, restée française, reste revendiquée par les Comores",
              "De nombreux coups d'État et tentatives de sécession depuis 1975",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-33-comores-quiz-1",
        question: "Les Comores sont géographiquement…",
        options: ["Un archipel de l'océan Indien", "Un pays enclavé", "Une péninsule", "Un haut plateau continental"],
        correctIndex: 0,
        explanation: "Les Comores sont un archipel volcanique situé dans le canal du Mozambique, surnommé « les îles de la Lune ».",
      },
      {
        id: "course-geographie-33-comores-quiz-2",
        question: "Quelle plante à parfum les Comores produisent-elles en grande quantité ?",
        options: ["La lavande", "L'ylang-ylang", "Le jasmin", "La rose"],
        correctIndex: 1,
        explanation: "Les Comores sont l'un des grands producteurs mondiaux d'ylang-ylang, très utilisé en parfumerie, aux côtés du girofle et de la vanille.",
      },
      {
        id: "course-geographie-33-comores-quiz-3",
        question: "Quelle religion est très majoritaire aux Comores ?",
        options: ["Le christianisme", "L'islam", "L'hindouisme", "Le bouddhisme"],
        correctIndex: 1,
        explanation: "L'islam est la religion de la très grande majorité des Comoriens, dans un pays au carrefour du monde swahili et du monde arabe.",
      },
      {
        id: "course-geographie-33-comores-quiz-4",
        question: "Quelle est la capitale des Comores ?",
        options: ["Moroni", "Mutsamudu", "Fomboni", "Mamoudzou"],
        correctIndex: 0,
        explanation: "Moroni, sur la Grande Comore, est la capitale du pays, dominée par le volcan Karthala.",
      },
      {
        id: "course-geographie-33-comores-quiz-5",
        question: "Quelle île de l'archipel des Comores est restée française ?",
        options: ["Mayotte", "Anjouan", "Mohéli", "La Grande Comore"],
        correctIndex: 0,
        explanation: "Mayotte a voté en 1974 pour rester française, une séparation que les Comores contestent toujours.",
      },
    ],
  },
  {
    id: "course-geographie-34-djibouti",
    categoryId: "geo",
    emoji: "🇩🇯",
    title: "Djibouti",
    description: "Un petit pays stratégique à l'entrée de la mer Rouge, carrefour maritime et grande base militaire mondiale. Découvre Djibouti.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-34-djibouti-lesson-1",
        title: "Le point le plus bas d'Afrique",
        blocks: [
          { type: "paragraphe", text: "À Djibouti, le lac Assal se trouve à environ 155 mètres sous le niveau de la mer — le point le plus bas de tout le continent africain, au creux d'un désert de sel étincelant." },
          { type: "chiffreCle", valeur: "-155 m", legende: "le lac Assal, point le plus bas d'Afrique" },
          { type: "paragraphe", text: "Le pays se situe au point de rencontre de **trois plaques tectoniques** — africaine, arabique et somalienne —, ce qui en fait une zone volcanique active, à l'origine de paysages spectaculaires comme le **lac Abbé**, aux cheminées de calcaire fumantes." },
          {
            type: "aRetenir",
            points: [
              "Le lac **Assal**, point le plus bas d'Afrique, à -155 m",
              "Trois plaques tectoniques se rejoignent sous le pays",
              "Le lac **Abbé**, aux cheminées de calcaire fumantes",
            ],
          },
          { type: "leSavaisTu", text: "L'eau du lac Assal est si salée qu'il est presque impossible d'y couler : comme dans la mer Morte, le corps y flotte tout seul, porté par la densité du sel." },
        ],
      },
      {
        id: "course-geographie-34-djibouti-lesson-2",
        title: "Afars et Issas se partagent l'État",
        blocks: [
          { type: "paragraphe", text: "Djibouti compte environ 1,1 million d'habitants, dont plus des deux tiers vivent dans la seule capitale. Le pouvoir se partage traditionnellement entre deux communautés, les Afars et les Issas, chacune occupant des fonctions clés de l'État." },
          { type: "chiffreCle", valeur: "2/3", legende: "de la population vit dans la seule capitale" },
          { type: "paragraphe", text: "Les **Afars**, présents aussi en Érythrée et en Éthiopie, et les **Issas**, apparentés aux Somalis, structurent la vie politique du pays depuis l'indépendance. L'arabe et le français sont langues officielles ; l'islam est très majoritaire." },
          {
            type: "aRetenir",
            points: [
              "Environ **1,1 million** d'habitants, très concentrés en ville",
              "**Afars** et Issas se partagent traditionnellement le pouvoir",
              "L'arabe et le français, langues officielles, islam majoritaire",
            ],
          },
        ],
      },
      {
        id: "course-geographie-34-djibouti-lesson-3",
        title: "Louer sa position au monde entier",
        blocks: [
          { type: "paragraphe", text: "Djibouti n'a presque aucune ressource naturelle, mais loue sa position stratégique à plusieurs grandes puissances : la France, les États-Unis et la Chine y possèdent chacun une base militaire, à quelques kilomètres les unes des autres." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Djibouti" },
              { label: "Monnaie", valeur: "Franc djiboutien (DJF)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "27 juin 1977" },
            ],
          },
          { type: "paragraphe", text: "Le pays est un grand port de transit, débouché maritime de l'**Éthiopie** enclavée. Il se situe aussi près du détroit de **Bab-el-Mandeb**, l'un des passages maritimes les plus fréquentés du monde, entre la mer Rouge et l'océan Indien." },
          {
            type: "aRetenir",
            points: [
              "Aucune ressource naturelle, mais une position unique",
              "Débouché maritime de l'**Éthiopie**, pays enclavé voisin",
              "Le détroit de **Bab-el-Mandeb**, passage maritime mondial majeur",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-34-djibouti-quiz-1",
        question: "Djibouti se situe à l'entrée de quelle mer ?",
        options: ["La mer Rouge", "La mer Noire", "La mer Caspienne", "La Méditerranée"],
        correctIndex: 0,
        explanation: "Djibouti contrôle l'accès sud de la mer Rouge, près du détroit de Bab-el-Mandeb, l'un des passages maritimes les plus fréquentés du monde.",
      },
      {
        id: "course-geographie-34-djibouti-quiz-2",
        question: "Quel lac de Djibouti est le point le plus bas d'Afrique ?",
        options: ["Le lac Assal", "Le lac Tana", "Le lac Turkana", "Le lac Albert"],
        correctIndex: 0,
        explanation: "Le lac Assal, salé et si dense qu'on y flotte sans effort, se trouve à environ 155 m sous le niveau de la mer.",
      },
      {
        id: "course-geographie-34-djibouti-quiz-3",
        question: "Qu'est-ce qui fait surtout la richesse de Djibouti ?",
        options: ["Sa position stratégique (port, bases militaires)", "Ses gisements de pétrole", "Ses forêts tropicales", "Ses terres agricoles"],
        correctIndex: 0,
        explanation: "Djibouti vit de son port de transit et de sa position stratégique, louée à plusieurs grandes puissances qui y installent des bases militaires.",
      },
      {
        id: "course-geographie-34-djibouti-quiz-4",
        question: "Quelle est la capitale de Djibouti ?",
        options: ["Djibouti", "Tadjoura", "Ali Sabieh", "Obock"],
        correctIndex: 0,
        explanation: "La ville de Djibouti porte le même nom que le pays et en est la capitale, où vit plus des deux tiers de la population.",
      },
      {
        id: "course-geographie-34-djibouti-quiz-5",
        question: "Quelles langues sont officielles à Djibouti ?",
        options: ["L'arabe et le français", "L'anglais et le swahili", "Le portugais et le français", "L'amharique et l'arabe"],
        correctIndex: 0,
        explanation: "Djibouti, ancienne colonie française, a l'arabe et le français comme langues officielles.",
      },
    ],
  },
  {
    id: "course-geographie-35-erythree",
    categoryId: "geo",
    emoji: "🇪🇷",
    title: "Érythrée",
    description: "Un pays de la Corne de l'Afrique sur la mer Rouge, discret et très fermé. Découvre l'Érythrée.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-35-erythree-lesson-1",
        title: "Du frais plateau à la fournaise",
        blocks: [
          { type: "paragraphe", text: "L'Érythrée bascule d'un extrême à l'autre : Asmara, sur les hauts plateaux, culmine à plus de 2 300 m dans un climat tempéré, tandis que la dépression du Danakil, plus bas, compte parmi les endroits les plus chauds de la planète." },
          { type: "chiffreCle", valeur: "2 300 m", legende: "Asmara, perchée sur les hauts plateaux frais" },
          { type: "paragraphe", text: "L'archipel des **Dahlak**, dans la mer Rouge, ajoute une dimension maritime à cette diversité de milieux. La longue façade maritime, avec les ports de **Massaoua** et Assab, a longtemps été un enjeu stratégique lors de la guerre d'indépendance." },
          {
            type: "aRetenir",
            points: [
              "Asmara, sur les hauts plateaux, à plus de 2 300 m",
              "La dépression du **Danakil**, parmi les lieux les plus chauds au monde",
              "L'archipel des **Dahlak**, dans la mer Rouge",
            ],
          },
        ],
      },
      {
        id: "course-geographie-35-erythree-lesson-2",
        title: "Personne ne sait vraiment combien",
        blocks: [
          { type: "paragraphe", text: "L'Érythrée est si fermée que personne ne connaît avec certitude sa propre population : les estimations varient largement, faute de recensement fiable et à cause d'une émigration massive et continue depuis les années 2000." },
          { type: "chiffreCle", valeur: "3,5 M", legende: "environ, selon des estimations incertaines" },
          { type: "paragraphe", text: "Les principaux groupes sont les **Tigrinya**, Tigré et Afars. L'émigration, notamment vers l'Éthiopie, le Soudan et l'Europe, a vidé une partie de la population jeune et active depuis les années 2000, en grande partie pour fuir le **service militaire illimité**." },
          {
            type: "aRetenir",
            points: [
              "Une population estimée à environ **3,5 millions**, incertaine",
              "**Tigrinya**, Tigré et Afars, principaux groupes du pays",
              "Une forte émigration pour fuir le service militaire illimité",
            ],
          },
        ],
      },
      {
        id: "course-geographie-35-erythree-lesson-3",
        title: "Une capitale Art déco oubliée",
        blocks: [
          { type: "paragraphe", text: "Asmara conserve l'un des plus beaux ensembles d'architecture Art déco italienne au monde, presque figé depuis les années 1930 — une capitale oubliée du reste du monde, dans l'un des pays les plus fermés de la planète." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Asmara" },
              { label: "Monnaie", valeur: "Nakfa (ERN)" },
              { label: "Régime", valeur: "Parti unique" },
              { label: "Indépendance", valeur: "24 mai 1993" },
            ],
          },
          { type: "paragraphe", text: "L'économie, très fermée, repose sur l'agriculture, l'élevage et les mines. L'indépendance, obtenue en 1991 après **trente ans de guerre** contre l'**Éthiopie**, n'a jamais été suivie d'élections nationales." },
          {
            type: "aRetenir",
            points: [
              "**Asmara**, capitale à l'architecture Art déco unique",
              "Indépendante depuis **1991**, après trente ans de guerre",
              "Aucune élection nationale depuis l'indépendance",
            ],
          },
          { type: "leSavaisTu", text: "Faute de développement économique et à cause de son isolement, Asmara a conservé son architecture des années 1930 presque intacte — un « musée urbain » que l'UNESCO a classé en 2017." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-35-erythree-quiz-1",
        question: "Sur quelle mer l'Érythrée possède-t-elle une longue façade ?",
        options: ["La mer Rouge", "La Méditerranée", "L'océan Atlantique", "La mer Noire"],
        correctIndex: 0,
        explanation: "Toute la façade maritime de l'Érythrée donne sur la mer Rouge, avec l'archipel des Dahlak au large.",
      },
      {
        id: "course-geographie-35-erythree-quiz-2",
        question: "De quel pays l'Érythrée est-elle devenue indépendante en 1993 ?",
        options: ["L'Éthiopie", "Le Soudan", "Le Kenya", "La Somalie"],
        correctIndex: 0,
        explanation: "L'Érythrée a obtenu son indépendance de l'Éthiopie en 1991, après trente ans de guerre, officialisée par référendum en 1993.",
      },
      {
        id: "course-geographie-35-erythree-quiz-3",
        question: "Quelle est la capitale de l'Érythrée, connue pour son architecture Art déco ?",
        options: ["Asmara", "Massaoua", "Keren", "Assab"],
        correctIndex: 0,
        explanation: "Asmara et son architecture Art déco italienne, quasiment intacte depuis les années 1930, sont classées au patrimoine mondial de l'UNESCO depuis 2017.",
      },
      {
        id: "course-geographie-35-erythree-quiz-4",
        question: "La dépression du Danakil, en Érythrée, est connue pour être…",
        options: ["Parmi les lieux les plus chauds du monde", "Le plus haut sommet d'Afrique", "La plus grande forêt du continent", "Le plus grand lac d'Afrique"],
        correctIndex: 0,
        explanation: "La dépression du Danakil compte parmi les endroits les plus chauds et les plus arides de la planète, à l'opposé des hauts plateaux frais où se trouve Asmara.",
      },
      {
        id: "course-geographie-35-erythree-quiz-5",
        question: "Quelle est la monnaie de l'Érythrée ?",
        options: ["Le nakfa", "Le birr", "Le shilling", "Le franc CFA"],
        correctIndex: 0,
        explanation: "La monnaie érythréenne est le nakfa, dans un pays si fermé que même sa population reste incertaine.",
      },
    ],
  },
  {
    id: "course-geographie-36-ethiopie",
    categoryId: "geo",
    emoji: "🇪🇹",
    title: "Éthiopie",
    description: "Un géant des hauts plateaux, berceau de l'humanité et seul pays africain jamais colonisé, deuxième le plus peuplé du continent. Découvre l'Éthiopie.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-36-ethiopie-lesson-1",
        title: "Le toit de l'Afrique",
        blocks: [
          { type: "paragraphe", text: "Les hauts plateaux éthiopiens sont si vastes et si élevés qu'on les surnomme le « toit de l'Afrique » — un continent en soi, entaillé par la vallée du Rift et parsemé de lacs volcaniques." },
          { type: "chiffreCle", valeur: "Nil Bleu", legende: "prend sa source au lac Tana, sur les hauts plateaux" },
          { type: "paragraphe", text: "Le **Rift** éthiopien traverse le pays du nord-est au sud-ouest et sépare les hauts plateaux en deux blocs, ponctués de lacs volcaniques. Au lac **Tana**, le plus grand du pays, prend sa source le Nil Bleu, qui rejoindra le Nil à Khartoum." },
          {
            type: "aRetenir",
            points: [
              "Les hauts plateaux, surnommés le « **toit de l'Afrique** »",
              "Le **Nil Bleu** prend sa source au lac Tana",
              "Le Rift traverse le pays du nord-est au sud-ouest",
            ],
          },
        ],
      },
      {
        id: "course-geographie-36-ethiopie-lesson-2",
        title: "Deuxième plus peuplé d'Afrique",
        blocks: [
          { type: "paragraphe", text: "Avec environ 130 millions d'habitants, l'Éthiopie est le deuxième pays le plus peuplé du continent, juste derrière le Nigeria — une mosaïque de peuples organisée en un système fédéral unique en Afrique." },
          { type: "chiffreCle", valeur: "130 M", legende: "le 2ᵉ pays le plus peuplé du continent" },
          { type: "paragraphe", text: "C'est une mosaïque de peuples : **Oromos**, Amharas, Tigréens, Somalis. L'amharique sert de langue de travail fédérale, parmi de nombreuses autres. La guerre du **Tigré** (2020-2022) a mis à l'épreuve l'équilibre fédéral du pays." },
          {
            type: "aRetenir",
            points: [
              "Environ **130 millions** d'habitants, 2ᵉ pays le plus peuplé d'Afrique",
              "Une mosaïque de peuples : **Oromos**, Amharas, Tigréens",
              "La guerre du **Tigré** (2020-2022) a fragilisé l'équilibre fédéral",
            ],
          },
        ],
      },
      {
        id: "course-geographie-36-ethiopie-lesson-3",
        title: "Sept ans de retard, ou d'avance ?",
        blocks: [
          { type: "paragraphe", text: "L'Éthiopie vit selon son propre calendrier, décalé d'environ sept ans par rapport au calendrier grégorien, et selon sa propre horloge, qui fait démarrer le jour au lever du soleil. Le pays a aussi son propre alphabet." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Addis-Abeba" },
              { label: "Monnaie", valeur: "Birr (ETB)" },
              { label: "Régime", valeur: "République fédérale" },
              { label: "Indépendance", valeur: "Jamais colonisée (victoire d'Adoua, 1896)" },
            ],
          },
          { type: "paragraphe", text: "L'Éthiopie est le berceau du **café** et possède le premier cheptel d'Afrique. Seul pays africain jamais colonisé, elle a vaincu l'Italie à **Adoua** en 1896. Le fossile de Lucy et les églises rupestres de Lalibela rappellent qu'elle est aussi un berceau de l'humanité." },
          {
            type: "aRetenir",
            points: [
              "Berceau du **café**, jamais colonisée par une puissance européenne",
              "Victoire d'**Adoua** contre l'Italie en 1896",
              "Le fossile de Lucy et les églises de Lalibela, berceaux de l'humanité",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-36-ethiopie-quiz-1",
        question: "L'Éthiopie est le deuxième pays le plus peuplé d'Afrique, après lequel ?",
        options: ["Le Nigeria", "L'Égypte", "La RD Congo", "L'Afrique du Sud"],
        correctIndex: 0,
        explanation: "Avec environ 130 millions d'habitants, l'Éthiopie vient juste après le Nigeria, dans un pays organisé en un système fédéral unique en Afrique.",
      },
      {
        id: "course-geographie-36-ethiopie-quiz-2",
        question: "Quelle boisson a pour berceau l'Éthiopie ?",
        options: ["Le café", "Le thé", "Le cacao", "Le maté"],
        correctIndex: 0,
        explanation: "Le caféier est originaire des hauts plateaux éthiopiens, le « toit de l'Afrique » ; le café y est une véritable institution.",
      },
      {
        id: "course-geographie-36-ethiopie-quiz-3",
        question: "Quelle est la capitale de l'Éthiopie, siège de l'Union africaine ?",
        options: ["Addis-Abeba", "Nairobi", "Asmara", "Khartoum"],
        correctIndex: 0,
        explanation: "Addis-Abeba abrite le siège de l'Union africaine.",
      },
      {
        id: "course-geographie-36-ethiopie-quiz-4",
        question: "Quelle particularité historique distingue l'Éthiopie sur le continent ?",
        options: ["Elle n'a jamais été colonisée", "Elle fut la première république d'Afrique", "Elle est le plus petit pays d'Afrique", "Elle n'a pas de langue officielle"],
        correctIndex: 0,
        explanation: "L'Éthiopie a conservé son indépendance, notamment grâce à la victoire d'Adoua contre l'Italie en 1896 — un cas unique sur le continent.",
      },
      {
        id: "course-geographie-36-ethiopie-quiz-5",
        question: "L'Éthiopie a-t-elle un accès à la mer ?",
        options: ["Oui, sur la mer Rouge", "Non, elle est enclavée", "Oui, sur l'océan Indien", "Oui, sur l'Atlantique"],
        correctIndex: 1,
        explanation: "L'Éthiopie est devenue enclavée après l'indépendance de l'Érythrée en 1993, perdant ainsi son accès direct à la mer Rouge.",
      },
    ],
  },
  {
    id: "course-geographie-37-kenya",
    categoryId: "geo",
    emoji: "🇰🇪",
    title: "Kenya",
    description: "Terre de safaris et carrefour économique de l'Afrique de l'Est, à cheval sur l'équateur. Découvre le Kenya.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-37-kenya-lesson-1",
        title: "À cheval sur l'équateur",
        blocks: [
          { type: "paragraphe", text: "Le Kenya est coupé en deux par l'équateur, qui traverse le pays d'est en ouest. Entre l'océan Indien et le lac Victoria, il aligne côte tropicale, hauts plateaux, vallée du Rift et savanes à perte de vue." },
          { type: "chiffreCle", valeur: "5 199 m", legende: "le mont Kenya, deuxième sommet d'Afrique" },
          { type: "paragraphe", text: "La vallée du **Rift**, qui traverse le pays du nord au sud, est ponctuée de lacs alcalins : le lac **Nakuru**, réputé pour ses flamants roses, et le lac Turkana, l'un des plus grands lacs désertiques du monde et un site majeur de fossiles humains." },
          {
            type: "aRetenir",
            points: [
              "L'équateur traverse le pays d'est en ouest",
              "Le mont **Kenya**, à plus de 5 000 m, 2ᵉ sommet d'Afrique",
              "Le lac **Turkana**, immense lac désertique et site de fossiles",
            ],
          },
        ],
      },
      {
        id: "course-geographie-37-kenya-lesson-2",
        title: "Les Massaï, une culture mondiale",
        blocks: [
          { type: "paragraphe", text: "Le Kenya compte environ 55 millions d'habitants et une quarantaine de groupes ethniques. Les Massaï, minoritaires en nombre, sont pourtant l'un des peuples africains les plus connus dans le monde entier." },
          { type: "chiffreCle", valeur: "40+", legende: "groupes ethniques, dont Kikuyu, Luo et Massaï" },
          { type: "paragraphe", text: "Les **Kikuyu**, plus nombreux et souvent influents en politique et en affaires, comptent parmi la quarantaine de groupes du pays, aux côtés des Luo, Luhya et Kalenjin. Les **Massaï** incarnent une culture pastorale traditionnelle encore vivace dans le sud." },
          {
            type: "aRetenir",
            points: [
              "Environ **55 millions** d'habitants, une quarantaine de groupes",
              "Les **Kikuyu**, premier groupe, influents en politique",
              "Les **Massaï**, minoritaires mais mondialement connus",
            ],
          },
        ],
      },
      {
        id: "course-geographie-37-kenya-lesson-3",
        title: "L'argent mobile inventé ici",
        blocks: [
          { type: "paragraphe", text: "Bien avant que les paiements par téléphone ne se généralisent ailleurs, le Kenya a inventé M-Pesa, un système d'argent mobile devenu si populaire qu'il a transformé l'économie quotidienne de tout le pays." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Nairobi" },
              { label: "Monnaie", valeur: "Shilling kenyan (KES)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "12 décembre 1963" },
            ],
          },
          { type: "paragraphe", text: "Le Kenya est un grand exportateur de **thé** et de café, ainsi que de fleurs. Le tourisme de safari et Nairobi, hub technologique surnommé « **Silicon Savannah** », font aussi sa force. Le pays est réputé pour ses grands marathoniens." },
          {
            type: "aRetenir",
            points: [
              "Grand exportateur de **thé**, de café et de fleurs",
              "Nairobi, surnommée « **Silicon Savannah** », hub technologique",
              "Une nation de grands marathoniens de renommée mondiale",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-37-kenya-quiz-1",
        question: "Quelle boisson le Kenya exporte-t-il en grande quantité ?",
        options: ["Le thé", "Le vin", "Le cacao", "La bière"],
        correctIndex: 0,
        explanation: "Le Kenya est l'un des plus grands exportateurs de thé du monde, aux côtés du café et des fleurs.",
      },
      {
        id: "course-geographie-37-kenya-quiz-2",
        question: "Sur quelle ligne imaginaire le Kenya est-il situé ?",
        options: ["L'équateur", "Le tropique du Capricorne", "Le cercle polaire", "Le méridien de Greenwich"],
        correctIndex: 0,
        explanation: "L'équateur traverse le Kenya d'est en ouest, ce qui explique la diversité de ses climats, de la côte tropicale aux hauts plateaux.",
      },
      {
        id: "course-geographie-37-kenya-quiz-3",
        question: "Quelle est la capitale du Kenya ?",
        options: ["Nairobi", "Mombasa", "Kisumu", "Nakuru"],
        correctIndex: 0,
        explanation: "Nairobi, surnommée « Silicon Savannah » pour son dynamisme technologique, est la capitale et le grand hub économique de l'Afrique de l'Est.",
      },
      {
        id: "course-geographie-37-kenya-quiz-4",
        question: "Quelle réserve kényane est célèbre pour la grande migration des gnous ?",
        options: ["Le Masai Mara", "Le Serengeti", "Le Kruger", "Le Chobe"],
        correctIndex: 0,
        explanation: "Le Masai Mara accueille chaque année la spectaculaire migration des gnous depuis le Serengeti voisin, dans le sud du pays où vivent les Massaï.",
      },
      {
        id: "course-geographie-37-kenya-quiz-5",
        question: "Quelles langues sont officielles au Kenya ?",
        options: ["Le swahili et l'anglais", "Le français et l'arabe", "Le portugais et le swahili", "L'amharique et l'anglais"],
        correctIndex: 0,
        explanation: "Le Kenya a deux langues officielles : le swahili et l'anglais.",
      },
    ],
  },
  {
    id: "course-geographie-38-madagascar",
    categoryId: "geo",
    emoji: "🇲🇬",
    title: "Madagascar",
    description: "La « grande île » de l'océan Indien, sanctuaire unique de biodiversité, peuplée d'un métissage afro-asiatique. Découvre Madagascar.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-38-madagascar-lesson-1",
        title: "Le huitième continent",
        blocks: [
          { type: "paragraphe", text: "Séparée du continent africain depuis environ 90 millions d'années, Madagascar a évolué seule si longtemps que les naturalistes la surnomment le « huitième continent » : près de 90 % de ses espèces n'existent nulle part ailleurs." },
          { type: "chiffreCle", valeur: "90 %", legende: "des espèces malgaches n'existent nulle part ailleurs" },
          { type: "paragraphe", text: "Les **tsingy de Bemaraha**, dans l'ouest, forment un extraordinaire massif calcaire aux aiguilles rocheuses tranchantes, classé à l'UNESCO. L'allée des **baobabs**, près de Morondava, et les forêts humides de l'est complètent cette mosaïque de paysages uniques au monde." },
          {
            type: "aRetenir",
            points: [
              "Séparée de l'Afrique depuis environ 90 millions d'années",
              "**90 %** des espèces sont endémiques, uniques au monde",
              "Les **tsingy de Bemaraha**, aiguilles calcaires classées à l'UNESCO",
            ],
          },
          { type: "leSavaisTu", text: "On connaît aujourd'hui plus d'une centaine d'espèces de lémuriens à Madagascar — et de nouvelles espèces continuent d'être découvertes dans les forêts encore mal explorées de l'île." },
        ],
      },
      {
        id: "course-geographie-38-madagascar-lesson-2",
        title: "Venus d'Asie, installés en Afrique",
        blocks: [
          { type: "paragraphe", text: "Fait unique en Afrique : les Malgaches descendent d'un métissage entre des marins venus d'Asie du Sud-Est et des populations d'Afrique de l'Est, arrivés par vagues successives il y a 1 500 à 2 000 ans." },
          { type: "chiffreCle", valeur: "30 M", legende: "un peuplement venu d'Asie et d'Afrique" },
          { type: "paragraphe", text: "Ce peuplement a donné naissance à une dix-huitaine de groupes ethniques — **Merina**, Betsileo, Sakalava — partageant pourtant une même langue, le **malgache**, un cas rare d'unité linguistique sur un territoire aussi vaste." },
          {
            type: "aRetenir",
            points: [
              "Environ **30 millions** d'habitants, métissage asiatique et africain",
              "Une dix-huitaine de groupes, dont **Merina**, Betsileo, Sakalava",
              "Une seule langue, le malgache, partagée par tous",
            ],
          },
        ],
      },
      {
        id: "course-geographie-38-madagascar-lesson-3",
        title: "La vanille qui vient d'ici",
        blocks: [
          { type: "paragraphe", text: "La vanille qui parfume tant de desserts dans le monde entier vient très probablement de Madagascar : le pays en est le premier producteur mondial, malgré une économie parmi les plus pauvres de la planète." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Antananarivo" },
              { label: "Monnaie", valeur: "Ariary (MGA)" },
              { label: "Régime", valeur: "Transition militaire" },
              { label: "Indépendance", valeur: "26 juin 1960" },
            ],
          },
          { type: "paragraphe", text: "Le riz, le girofle, le nickel et le cobalt complètent les ressources, aux côtés d'un tourisme tourné vers la nature. Depuis l'indépendance, le pays a connu plusieurs **crises politiques** et transitions de pouvoir hors du cadre constitutionnel, la plus récente en 2025." },
          {
            type: "aRetenir",
            points: [
              "Premier producteur mondial de **vanille**",
              "Riz, girofle, nickel et cobalt complètent l'économie",
              "Plusieurs transitions de pouvoir hors cadre constitutionnel, la dernière en **2025**",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-38-madagascar-quiz-1",
        question: "Madagascar est la plus grande île de quel continent ?",
        options: ["L'Afrique", "L'Asie", "L'Océanie", "L'Amérique"],
        correctIndex: 0,
        explanation: "Madagascar est la plus grande île du continent africain et la quatrième du monde, séparée de l'Afrique depuis environ 90 millions d'années.",
      },
      {
        id: "course-geographie-38-madagascar-quiz-2",
        question: "Quel animal emblématique ne vit à l'état sauvage qu'à Madagascar ?",
        options: ["Le lémurien", "Le gorille", "Le tigre", "Le kangourou"],
        correctIndex: 0,
        explanation: "Les lémuriens sont endémiques de Madagascar : on ne les trouve nulle part ailleurs à l'état sauvage, parmi plus d'une centaine d'espèces connues.",
      },
      {
        id: "course-geographie-38-madagascar-quiz-3",
        question: "Madagascar est le premier producteur mondial de quoi ?",
        options: ["La vanille", "Le cacao", "Le café", "Le coton"],
        correctIndex: 0,
        explanation: "Madagascar fournit l'essentiel de la vanille mondiale, dans l'une des économies les plus pauvres de la planète.",
      },
      {
        id: "course-geographie-38-madagascar-quiz-4",
        question: "Quelle est la capitale de Madagascar ?",
        options: ["Antananarivo", "Toamasina", "Mahajanga", "Antsirabe"],
        correctIndex: 0,
        explanation: "Antananarivo, surnommée « Tana », est la capitale sur les hauts plateaux, où se concentre l'essentiel de la population du pays.",
      },
      {
        id: "course-geographie-38-madagascar-quiz-5",
        question: "Quel océan entoure Madagascar ?",
        options: ["L'océan Indien", "L'océan Atlantique", "L'océan Pacifique", "L'océan Arctique"],
        correctIndex: 0,
        explanation: "Madagascar se trouve dans l'océan Indien, séparée du continent africain par le canal du Mozambique.",
      },
    ],
  },
  {
    id: "course-geographie-39-maurice",
    categoryId: "geo",
    emoji: "🇲🇺",
    title: "Maurice",
    description: "Un modèle de réussite et de diversité dans l'océan Indien, célèbre pour son dodo disparu et ses lagons. Découvre l'île Maurice.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-39-maurice-lesson-1",
        title: "Le territoire",
        blocks: [
          { type: "paragraphe", text: "**Situation territoriale.** Maurice est une île volcanique de l'océan Indien, à l'est de Madagascar, au sein de l'archipel des Mascareignes (avec Rodrigues). Petite (environ 2 040 km²), elle n'a aucune frontière terrestre." },
          { type: "paragraphe", text: "L'île principale et l'île de Rodrigues, plus petite et plus isolée à environ 560 km à l'est, ainsi que plusieurs îlots dispersés dans l'océan Indien, forment ensemble le territoire mauricien, ce qui donne au pays une zone économique maritime bien plus vaste que ne le laisserait supposer sa surface terrestre." },
          { type: "paragraphe", text: "**Le milieu.** L'île, volcanique, associe un plateau central, des montagnes et une ceinture de lagons et de récifs coralliens. Le climat est tropical. C'est ici que vivait le dodo, oiseau devenu le symbole des espèces disparues." },
          { type: "paragraphe", text: "Le plateau central, plus frais en altitude, contraste avec les plaines côtières chaudes et humides, entièrement ceinturées par une barrière de corail qui crée les lagons calmes et transparents faisant la réputation touristique de l'île." },
        ],
      },
      {
        id: "course-geographie-39-maurice-lesson-2",
        title: "Population et société",
        blocks: [
          { type: "paragraphe", text: "**Population.** Maurice compte environ 1,3 million d'habitants (2024), sur un territoire très densément peuplé." },
          { type: "paragraphe", text: "Cette forte densité, l'une des plus élevées d'Afrique, résulte de l'histoire de peuplement de l'île, entièrement construite par la colonisation et l'immigration successive, sans population autochtone préalable — un cas unique sur le continent." },
          { type: "paragraphe", text: "**Société.** La population est une mosaïque unique de descendants d'Indiens, d'Africains, de Chinois et d'Européens. L'anglais (officiel de fait), le français et le créole mauricien sont largement utilisés ; hindouisme majoritaire, christianisme et islam." },
          { type: "paragraphe", text: "Les descendants de travailleurs sous contrat venus d'Inde après l'abolition de l'esclavage au XIXe siècle forment aujourd'hui la majorité de la population, aux côtés des Créoles d'origine africaine et malgache, d'une minorité sino-mauricienne et de Franco-Mauriciens, dans un modèle de cohabitation souvent cité en exemple." },
        ],
      },
      {
        id: "course-geographie-39-maurice-lesson-3",
        title: "Économie, politique et repères",
        blocks: [
          { type: "paragraphe", text: "**Économie et ressources.** Maurice a l'une des économies les plus prospères et diversifiées d'Afrique : tourisme haut de gamme, services financiers (place offshore), textile, sucre (canne à sucre) et technologies." },
          { type: "paragraphe", text: "**Institutions et politique.** Régime : république à régime parlementaire. Chef du gouvernement (2026) : le Premier ministre Navin Ramgoolam (depuis novembre 2024) ; la présidence de la République (Dharam Gokhool) est un rôle protocolaire. Monnaie : la roupie mauricienne (MUR). Devise nationale : « Stella Clavisque Maris Indici » (L'étoile et la clé de l'océan Indien)." },
          { type: "paragraphe", text: "Le pays est indépendant du Royaume-Uni depuis le 12 mars 1968. Membre de l'Union africaine et du Commonwealth, il est régulièrement cité comme l'une des démocraties les plus stables et l'une des économies les plus performantes d'Afrique." },
          { type: "paragraphe", text: "**Repères et singularités.** Capitale : Port-Louis. Le dodo (symbole national disparu), Le Morne Brabant (mémoire de l'esclavage, UNESCO) et l'Aapravasi Ghat (immigration engagée, UNESCO) témoignent de son histoire ; ses plages et lagons attirent le monde entier." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-39-maurice-quiz-1",
        question: "Dans quel océan se situe l'île Maurice ?",
        options: ["L'océan Indien", "L'océan Atlantique", "L'océan Pacifique", "La mer Méditerranée"],
        correctIndex: 0,
        explanation: "Maurice fait partie des Mascareignes, dans l'océan Indien, à l'est de Madagascar.",
      },
      {
        id: "course-geographie-39-maurice-quiz-2",
        question: "Quel oiseau disparu est le symbole de l'île Maurice ?",
        options: ["Le dodo", "Le pingouin", "L'autruche", "Le calao"],
        correctIndex: 0,
        explanation: "Le dodo, endémique de Maurice, a disparu au XVIIᵉ siècle et symbolise les extinctions.",
      },
      {
        id: "course-geographie-39-maurice-quiz-3",
        question: "Quels sont les grands piliers de l'économie mauricienne ?",
        options: ["Le tourisme et les services financiers", "Le pétrole et le gaz", "Les mines de cuivre", "L'élevage nomade"],
        correctIndex: 0,
        explanation: "Maurice s'est développée grâce au tourisme, à la finance offshore, au textile et au sucre.",
      },
      {
        id: "course-geographie-39-maurice-quiz-4",
        question: "Quelle est la capitale de Maurice ?",
        options: ["Port-Louis", "Curepipe", "Quatre Bornes", "Vacoas"],
        correctIndex: 0,
        explanation: "Port-Louis, sur la côte nord-ouest, est la capitale et le grand port de l'île.",
      },
      {
        id: "course-geographie-39-maurice-quiz-5",
        question: "Quelle culture agricole traditionnelle marque le paysage mauricien ?",
        options: ["La canne à sucre", "Le blé", "La vigne", "Le riz"],
        correctIndex: 0,
        explanation: "Les champs de canne à sucre couvrent une grande partie de l'île depuis l'époque coloniale.",
      },
    ],
  },
  {
    id: "course-geographie-40-ouganda",
    categoryId: "geo",
    emoji: "🇺🇬",
    title: "Ouganda",
    description: "« La perle de l'Afrique », pays équatorial des sources du Nil et des gorilles de montagne. Découvre l'Ouganda.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-40-ouganda-lesson-1",
        title: "Le territoire",
        blocks: [
          { type: "paragraphe", text: "**Situation territoriale.** L'Ouganda est un pays enclavé d'Afrique de l'Est, à cheval sur l'équateur. Sur environ 241 550 km², il est bordé par le Kenya, le Soudan du Sud, la RD Congo, le Rwanda et la Tanzanie, et longé au sud par le lac Victoria." },
          { type: "paragraphe", text: "Le pays est découpé en une centaine de districts autour de Kampala, la capitale, sur les rives du lac Victoria. Sa position aux sources du Nil, au cœur de la région des Grands Lacs, en a longtemps fait un territoire convoité, notamment par le Royaume-Uni au XIXe siècle." },
          { type: "paragraphe", text: "**Le milieu.** C'est un plateau vert et fertile, riche en lacs. Le Nil Blanc sort du lac Victoria à Jinja. À l'ouest, les monts Rwenzori (« montagnes de la Lune ») portent des neiges à l'équateur. Le climat est tempéré par l'altitude." },
          { type: "paragraphe", text: "Cette abondance de lacs et de terres fertiles, associée à un climat tempéré par l'altitude malgré la position équatoriale, vaut au pays sa réputation de « perle de l'Afrique » ; les monts Rwenzori, aux neiges éternelles rarissimes sous l'équateur, comptent parmi les curiosités géographiques les plus spectaculaires du continent." },
        ],
      },
      {
        id: "course-geographie-40-ouganda-lesson-2",
        title: "Population et société",
        blocks: [
          { type: "paragraphe", text: "**Population.** L'Ouganda compte environ 48 millions d'habitants (2024), une population très jeune." },
          { type: "paragraphe", text: "Avec l'un des taux de natalité les plus élevés du monde, la population ougandaise est parmi les plus jeunes de la planète, ce qui crée à la fois un potentiel de croissance économique et une forte pression sur l'éducation et l'emploi." },
          { type: "paragraphe", text: "**Société.** Les Bagandas (royaume du Buganda) et de nombreux autres peuples composent la nation. L'anglais et le swahili sont officiels, le luganda répandu ; le christianisme est majoritaire, avec une minorité musulmane." },
          { type: "paragraphe", text: "Le royaume du Buganda, dont le roi (le Kabaka) conserve un rôle culturel et cérémoniel important autour de Kampala, illustre la survie de plusieurs royaumes traditionnels ougandais aux côtés de l'État moderne, un système de rois constitutionnels particulier en Afrique de l'Est." },
        ],
      },
      {
        id: "course-geographie-40-ouganda-lesson-3",
        title: "Économie, politique et repères",
        blocks: [
          { type: "paragraphe", text: "**Économie et ressources.** L'économie repose sur l'agriculture — le café est la principale exportation, avec le thé —, la pêche et un secteur pétrolier en développement autour du lac Albert. Le tourisme (gorilles de montagne) est prometteur." },
          { type: "paragraphe", text: "**Institutions et politique.** Régime : république. Chef de l'État (2026) : Yoweri Museveni, réélu en janvier 2026, au pouvoir depuis 1986. Monnaie : le shilling ougandais (UGX). Devise nationale : « For God and My Country » (Pour Dieu et mon pays)." },
          { type: "paragraphe", text: "Le pays est indépendant du Royaume-Uni depuis le 9 octobre 1962. Membre de l'Union africaine et de la Communauté d'Afrique de l'Est, il a connu la sanglante dictature d'Idi Amin Dada (1971-1979) avant de se stabiliser sous la présidence, désormais très longue, de Yoweri Museveni." },
          { type: "paragraphe", text: "**Repères et singularités.** Capitale : Kampala. La source du Nil Blanc à Jinja, les gorilles de montagne de la forêt de Bwindi (UNESCO), les monts Rwenzori et le royaume traditionnel du Buganda font la richesse du pays." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-40-ouganda-quiz-1",
        question: "Quel surnom célèbre est donné à l'Ouganda ?",
        options: ["« La perle de l'Afrique »", "« Le toit du monde »", "« Le grenier du Sahel »", "« La corne d'abondance »"],
        correctIndex: 0,
        explanation: "Winston Churchill surnomma l'Ouganda « la perle de l'Afrique » pour sa nature verdoyante.",
      },
      {
        id: "course-geographie-40-ouganda-quiz-2",
        question: "Quel grand lac borde l'Ouganda au sud ?",
        options: ["Le lac Victoria", "Le lac Tchad", "Le lac Malawi", "Le lac Assal"],
        correctIndex: 0,
        explanation: "Le lac Victoria, plus grand lac d'Afrique, borde l'Ouganda ; le Nil Blanc en sort à Jinja.",
      },
      {
        id: "course-geographie-40-ouganda-quiz-3",
        question: "Quelle est la principale exportation de l'Ouganda ?",
        options: ["Le café", "Le pétrole", "Le coton", "L'or"],
        correctIndex: 0,
        explanation: "Le café est de longue date la première exportation agricole ougandaise.",
      },
      {
        id: "course-geographie-40-ouganda-quiz-4",
        question: "Quelle est la capitale de l'Ouganda ?",
        options: ["Kampala", "Entebbe", "Jinja", "Gulu"],
        correctIndex: 0,
        explanation: "Kampala, près du lac Victoria, est la capitale et la plus grande ville du pays.",
      },
      {
        id: "course-geographie-40-ouganda-quiz-5",
        question: "Quel animal rare attire les touristes dans la forêt de Bwindi ?",
        options: ["Le gorille de montagne", "Le panda", "L'ours polaire", "Le tigre"],
        correctIndex: 0,
        explanation: "La forêt impénétrable de Bwindi abrite une grande partie des gorilles de montagne du monde.",
      },
    ],
  },
  {
    id: "course-geographie-41-rwanda",
    categoryId: "geo",
    emoji: "🇷🇼",
    title: "Rwanda",
    description: "Le « pays des mille collines », modèle de propreté et de reconstruction après le génocide de 1994. Découvre le Rwanda.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-41-rwanda-lesson-1",
        title: "Le territoire",
        blocks: [
          { type: "paragraphe", text: "**Situation territoriale.** Le Rwanda est un petit pays enclavé de la région des Grands Lacs. Sur environ 26 300 km², il est bordé par l'Ouganda, la Tanzanie, le Burundi et la RD Congo." },
          { type: "paragraphe", text: "Le pays est découpé en cinq provinces autour de Kigali, la capitale, au centre du territoire. Sa petite taille, associée à un relief très accidenté, en fait l'un des pays les plus densément peuplés et les plus intensément cultivés d'Afrique." },
          { type: "paragraphe", text: "**Le milieu.** Surnommé le « pays des mille collines », il est fait de collines et de montagnes, avec les volcans des Virunga au nord-ouest et le lac Kivu à l'ouest. Le climat est tempéré par l'altitude." },
          { type: "paragraphe", text: "Les volcans des Virunga, dont certains encore actifs, culminent à plus de 4 500 m et abritent, avec la forêt de montagne environnante, l'un des derniers refuges des gorilles de montagne au monde. Le lac Kivu, l'un des grands lacs du Rift, offre un climat plus doux sur ses rives." },
        ],
      },
      {
        id: "course-geographie-41-rwanda-lesson-2",
        title: "Population et société",
        blocks: [
          { type: "paragraphe", text: "**Population.** Le Rwanda compte environ 14 millions d'habitants (2024) et figure parmi les pays les plus densément peuplés d'Afrique." },
          { type: "paragraphe", text: "Cette très forte densité, l'une des plus élevées du continent, s'accompagne d'une pression foncière considérable, que l'État rwandais gère par une politique volontariste d'aménagement du territoire et d'urbanisation planifiée, en particulier à Kigali." },
          { type: "paragraphe", text: "**Société.** On y trouve les Hutus, les Tutsis et les Twa. Le kinyarwanda, le français, l'anglais et le swahili sont officiels ; le christianisme est majoritaire. Le pays reste profondément marqué par le génocide des Tutsis de 1994." },
          { type: "paragraphe", text: "Depuis 1994, l'État rwandais a fait le choix de ne plus mentionner l'appartenance ethnique sur les documents officiels, dans une politique de réconciliation nationale volontariste qui reste, plus de trente ans après le génocide, un pilier central du discours politique du pays." },
        ],
      },
      {
        id: "course-geographie-41-rwanda-lesson-3",
        title: "Économie, politique et repères",
        blocks: [
          { type: "paragraphe", text: "**Économie et ressources.** L'économie repose sur le café, le thé, un tourisme haut de gamme (gorilles de montagne) et les services. Kigali est réputée pour sa propreté et sa sécurité, et le pays connaît une croissance soutenue." },
          { type: "paragraphe", text: "**Institutions et politique.** Régime : république. Chef de l'État (2026) : Paul Kagame, président depuis 2000 (réélu en 2024). Monnaie : le franc rwandais (RWF). Devise nationale : « Unité, Travail, Patriotisme »." },
          { type: "paragraphe", text: "Le pays est indépendant de la Belgique depuis le 1er juillet 1962. Membre de l'Union africaine et de la Communauté d'Afrique de l'Est, il s'est reconstruit depuis le génocide de 1994 en misant sur la gouvernance, les technologies et le tourisme, devenant un modèle de développement souvent cité en exemple malgré des critiques sur les libertés politiques." },
          { type: "paragraphe", text: "**Repères et singularités.** Capitale : Kigali, l'une des villes les plus propres d'Afrique. Le parc des Volcans (gorilles de montagne), le lac Kivu et la mémoire du génocide de 1994 marquent le pays, surnommé « le pays des mille collines »." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-41-rwanda-quiz-1",
        question: "Quel est le surnom du Rwanda ?",
        options: ["« Le pays des mille collines »", "« Le grenier de l'Afrique »", "« La perle du désert »", "« Le toit du monde »"],
        correctIndex: 0,
        explanation: "Son relief de collines vaut au Rwanda le surnom de « pays des mille collines ».",
      },
      {
        id: "course-geographie-41-rwanda-quiz-2",
        question: "Quel événement tragique a marqué le Rwanda en 1994 ?",
        options: ["Le génocide des Tutsis", "Un séisme majeur", "Une éruption volcanique", "Une invasion étrangère"],
        correctIndex: 0,
        explanation: "En 1994, le génocide des Tutsis a fait environ 800 000 à un million de morts en quelques mois.",
      },
      {
        id: "course-geographie-41-rwanda-quiz-3",
        question: "Quelle est la capitale du Rwanda, réputée pour sa propreté ?",
        options: ["Kigali", "Butare", "Gisenyi", "Ruhengeri"],
        correctIndex: 0,
        explanation: "Kigali est régulièrement citée parmi les capitales les plus propres et les plus sûres d'Afrique.",
      },
      {
        id: "course-geographie-41-rwanda-quiz-4",
        question: "Quel animal rare attire les touristes au parc des Volcans ?",
        options: ["Le gorille de montagne", "Le lion", "L'éléphant de mer", "Le manchot"],
        correctIndex: 0,
        explanation: "Le parc des Volcans, dans les Virunga, protège une partie des gorilles de montagne du monde.",
      },
      {
        id: "course-geographie-41-rwanda-quiz-5",
        question: "Le Rwanda a-t-il un accès à la mer ?",
        options: ["Oui, sur l'océan Indien", "Non, il est enclavé", "Oui, sur l'Atlantique", "Oui, sur la mer Rouge"],
        correctIndex: 1,
        explanation: "Le Rwanda est un pays enclavé de la région des Grands Lacs.",
      },
    ],
  },
  {
    id: "course-geographie-42-seychelles",
    categoryId: "geo",
    emoji: "🇸🇨",
    title: "Seychelles",
    description: "Un archipel paradisiaque de l'océan Indien, au PIB par habitant le plus élevé d'Afrique. Découvre les Seychelles.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-42-seychelles-lesson-1",
        title: "Le territoire",
        blocks: [
          { type: "paragraphe", text: "**Situation territoriale.** Les Seychelles forment un archipel de 115 îles dans l'océan Indien, au nord-est de Madagascar. Très petit (environ 455 km²), c'est le plus petit État d'Afrique par la superficie ; il n'a aucune frontière terrestre." },
          { type: "paragraphe", text: "L'immense majorité de la population et de l'activité se concentre sur les trois principales îles granitiques (Mahé, Praslin, La Digue), tandis que les nombreuses îles coralliennes éloignées, comme l'atoll d'Aldabra, sont largement inhabitées et vouées à la conservation de la nature." },
          { type: "paragraphe", text: "**Le milieu.** On distingue des îles granitiques (Mahé, Praslin, La Digue) et des îles coralliennes plus basses. Plages, forêts et récifs abritent une biodiversité unique : tortues géantes d'Aldabra et coco de mer. Le climat est tropical." },
          { type: "paragraphe", text: "Les îles granitiques, uniques parmi les îles océaniques du monde par leur origine géologique continentale plutôt que volcanique ou corallienne, abritent des forêts primaires reliques, dont la vallée de Mai, à Praslin, où pousse le coco de mer, la plus grosse graine du règne végétal." },
        ],
      },
      {
        id: "course-geographie-42-seychelles-lesson-2",
        title: "Population et société",
        blocks: [
          { type: "paragraphe", text: "**Population.** Les Seychelles comptent environ 130 000 habitants (2024)." },
          { type: "paragraphe", text: "La quasi-totalité de la population vit sur l'île de Mahé, où se trouve la capitale Victoria, faisant des Seychelles l'un des pays les plus concentrés géographiquement d'Afrique, malgré l'étendue de sa zone maritime." },
          { type: "paragraphe", text: "**Société.** La population est créole, issue d'un métissage africain, européen et asiatique. Le créole seychellois, l'anglais et le français sont officiels ; le christianisme est majoritaire." },
          { type: "paragraphe", text: "Cette société créole, née de la colonisation française puis britannique et de l'arrivée d'esclaves africains puis de travailleurs indiens et chinois, partage des racines culturelles communes avec Maurice et La Réunion voisines, tout en ayant développé une identité seychelloise propre." },
        ],
      },
      {
        id: "course-geographie-42-seychelles-lesson-3",
        title: "Économie, politique et repères",
        blocks: [
          { type: "paragraphe", text: "**Économie et ressources.** L'économie repose sur le tourisme haut de gamme et la pêche au thon. Grâce à eux, les Seychelles affichent le PIB par habitant le plus élevé d'Afrique." },
          { type: "paragraphe", text: "**Institutions et politique.** Régime : république. Chef de l'État (2026) : Patrick Herminie, élu en octobre 2025 (il a succédé à Wavel Ramkalawan). Monnaie : la roupie seychelloise (SCR). Devise nationale : « Finis Coronat Opus » (La fin couronne l'œuvre)." },
          { type: "paragraphe", text: "Le pays est indépendant du Royaume-Uni depuis le 29 juin 1976. Membre de l'Union africaine et du Commonwealth, il a fait de la préservation de son environnement exceptionnel un pilier de sa stratégie économique et diplomatique, notamment sur les enjeux de protection des océans." },
          { type: "paragraphe", text: "**Repères et singularités.** Capitale : Victoria, l'une des plus petites capitales du monde. L'atoll d'Aldabra (tortues géantes, UNESCO) et la vallée de Mai (coco de mer, UNESCO) sont des trésors naturels, tout comme les plages d'Anse Source d'Argent." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-42-seychelles-quiz-1",
        question: "Les Seychelles sont géographiquement…",
        options: ["Un archipel de l'océan Indien", "Un pays enclavé", "Une péninsule désertique", "Un haut plateau"],
        correctIndex: 0,
        explanation: "Les Seychelles sont un archipel de 115 îles dans l'océan Indien.",
      },
      {
        id: "course-geographie-42-seychelles-quiz-2",
        question: "Quels sont les deux piliers de l'économie seychelloise ?",
        options: ["Le tourisme et la pêche au thon", "Le pétrole et le gaz", "Les mines et l'industrie lourde", "L'élevage et la vigne"],
        correctIndex: 0,
        explanation: "Le tourisme haut de gamme et la pêche au thon soutiennent l'économie des Seychelles.",
      },
      {
        id: "course-geographie-42-seychelles-quiz-3",
        question: "Quelle est la capitale des Seychelles ?",
        options: ["Victoria", "Praslin", "Anse Royale", "Beau Vallon"],
        correctIndex: 0,
        explanation: "Victoria, sur l'île de Mahé, est l'une des plus petites capitales du monde.",
      },
      {
        id: "course-geographie-42-seychelles-quiz-4",
        question: "Quel animal géant emblématique vit à l'atoll d'Aldabra ?",
        options: ["La tortue géante", "L'éléphant", "Le gorille", "Le rhinocéros"],
        correctIndex: 0,
        explanation: "L'atoll d'Aldabra abrite une immense population de tortues géantes, classée à l'UNESCO.",
      },
      {
        id: "course-geographie-42-seychelles-quiz-5",
        question: "Les Seychelles ont le PIB par habitant le plus…",
        options: ["Élevé d'Afrique", "Faible d'Afrique", "Faible du monde", "Instable du monde"],
        correctIndex: 0,
        explanation: "Grâce au tourisme et à la pêche, les Seychelles ont le revenu par habitant le plus élevé du continent.",
      },
    ],
  },
  {
    id: "course-geographie-43-somalie",
    categoryId: "geo",
    emoji: "🇸🇴",
    title: "Somalie",
    description: "Le pays de la Corne de l'Afrique à la plus longue côte du continent, marqué par des décennies d'instabilité. Découvre la Somalie.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-43-somalie-lesson-1",
        title: "Le territoire",
        blocks: [
          { type: "paragraphe", text: "**Situation territoriale.** La Somalie forme la pointe est de la Corne de l'Afrique. Sur environ 638 000 km², elle possède la plus longue côte d'Afrique continentale (sur l'océan Indien et le golfe d'Aden) et voisine avec Djibouti, l'Éthiopie et le Kenya." },
          { type: "paragraphe", text: "Le pays est officiellement divisé en dix-huit régions, mais son autorité centrale ne s'exerce que partiellement sur le territoire : le Somaliland, au nord-ouest, se gouverne comme un État indépendant de facto depuis 1991, et le Puntland, au nord-est, bénéficie d'une large autonomie." },
          { type: "paragraphe", text: "**Le milieu.** Le pays est fait de plateaux semi-arides et de savanes sèches, au climat chaud et aride. Deux rivières, le Jubba et le Shabelle, arrosent le sud, plus fertile." },
          { type: "paragraphe", text: "Cette position à la pointe de la Corne de l'Afrique, entre le golfe d'Aden et l'océan Indien, fait de la Somalie un point de passage stratégique du commerce maritime mondial, un atout largement compromis ces dernières décennies par la piraterie et l'insécurité." },
        ],
      },
      {
        id: "course-geographie-43-somalie-lesson-2",
        title: "Population et société",
        blocks: [
          { type: "paragraphe", text: "**Population.** La Somalie compte environ 18 millions d'habitants (2024), en partie nomades pasteurs." },
          { type: "paragraphe", text: "Cette tradition pastorale et nomade, encore vivace dans de vastes régions du pays, cohabite avec une urbanisation croissante autour de Mogadiscio et d'une importante diaspora, l'une des plus nombreuses d'Afrique rapportée à la population totale, installée notamment au Kenya, dans la péninsule Arabique, en Europe et en Amérique du Nord." },
          { type: "paragraphe", text: "**Société.** Fait rare en Afrique, la population est très homogène : un même peuple somali, une même langue, une même religion. Le somali et l'arabe sont officiels ; l'islam est religion d'État. La société est organisée en clans." },
          { type: "paragraphe", text: "Cette organisation clanique, qui structure aussi bien la vie sociale que la vie politique, a paradoxalement compté parmi les facteurs de la fragmentation du pays après la chute de l'État central en 1991, les rivalités entre clans ayant alimenté des décennies de conflit." },
        ],
      },
      {
        id: "course-geographie-43-somalie-lesson-3",
        title: "Économie, politique et repères",
        blocks: [
          { type: "paragraphe", text: "**Économie et ressources.** L'économie repose sur l'élevage (exportation de bétail vers la péninsule Arabique), l'agriculture, la pêche et les transferts de la diaspora. Des décennies de guerre civile et l'insécurité (Al-Shabaab) l'ont profondément désorganisée." },
          { type: "paragraphe", text: "**Institutions et politique.** Régime : république fédérale (en reconstruction). Chef de l'État (2026) : Hassan Sheikh Mohamud, président depuis 2022. Le Somaliland, au nord, est une région séparatiste non reconnue internationalement. Monnaie : le shilling somalien (SOS). Devise nationale : la Somalie n'a pas de devise nationale officielle consacrée." },
          { type: "paragraphe", text: "Le pays est indépendant depuis le 1er juillet 1960, né de la fusion du Somaliland britannique et de la Somalie italienne. Membre de l'Union africaine et de la Ligue arabe, il tente depuis les années 2010 de reconstruire un État fédéral après l'effondrement de l'État central en 1991 et des décennies de guerre civile." },
          { type: "paragraphe", text: "**Repères et singularités.** Capitale : Mogadiscio, sur l'océan Indien. Le pays possède la plus longue côte du continent et une importante diaspora ; la région était liée dans l'Antiquité au commerce de l'encens (« pays de Pount »)." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-43-somalie-quiz-1",
        question: "La Somalie possède la plus longue… d'Afrique continentale.",
        options: ["Côte", "Chaîne de montagnes", "Frontière terrestre", "Voie ferrée"],
        correctIndex: 0,
        explanation: "La Somalie a la plus longue façade maritime de tous les pays continentaux d'Afrique.",
      },
      {
        id: "course-geographie-43-somalie-quiz-2",
        question: "Dans quelle région se trouve la Somalie ?",
        options: ["La Corne de l'Afrique", "Le Maghreb", "L'Afrique australe", "Le Sahel occidental"],
        correctIndex: 0,
        explanation: "La Somalie occupe la pointe est du continent, la Corne de l'Afrique.",
      },
      {
        id: "course-geographie-43-somalie-quiz-3",
        question: "Quelle activité domine l'économie somalienne ?",
        options: ["L'élevage", "L'extraction pétrolière", "L'industrie automobile", "La viticulture"],
        correctIndex: 0,
        explanation: "L'élevage et l'exportation de bétail vers la péninsule Arabique sont au cœur de l'économie.",
      },
      {
        id: "course-geographie-43-somalie-quiz-4",
        question: "Quelle est la capitale de la Somalie ?",
        options: ["Mogadiscio", "Hargeisa", "Kismayo", "Baidoa"],
        correctIndex: 0,
        explanation: "Mogadiscio, sur l'océan Indien, est la capitale du pays.",
      },
      {
        id: "course-geographie-43-somalie-quiz-5",
        question: "Quelle langue, avec l'arabe, est officielle en Somalie ?",
        options: ["Le somali", "Le swahili", "L'amharique", "Le français"],
        correctIndex: 0,
        explanation: "Le somali est la langue nationale, parlée par la quasi-totalité de la population.",
      },
    ],
  },
  {
    id: "course-geographie-44-soudan-du-sud",
    categoryId: "geo",
    emoji: "🇸🇸",
    title: "Soudan du Sud",
    description: "Le plus jeune pays du monde, né en 2011, riche en pétrole mais fragilisé par les conflits. Découvre le Soudan du Sud.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-44-soudan-du-sud-lesson-1",
        title: "Le territoire",
        blocks: [
          { type: "paragraphe", text: "**Situation territoriale.** Le Soudan du Sud est un pays enclavé d'Afrique de l'Est. Sur environ 620 000 km², il est bordé par le Soudan, l'Éthiopie, le Kenya, l'Ouganda, la RD Congo et la Centrafrique, et traversé par le Nil Blanc." },
          { type: "paragraphe", text: "Le pays est découpé en dix États depuis sa naissance en 2011. Cet enclavement au cœur d'une région elle-même instable, cumulé à un réseau routier quasi inexistant en dehors de Juba, rend l'accès à une grande partie du territoire particulièrement difficile." },
          { type: "paragraphe", text: "**Le milieu.** De vastes plaines et savanes couvrent le pays. Le Sudd, immense marécage sur le Nil Blanc, est l'une des plus grandes zones humides du monde. Le climat est tropical, avec une saison des pluies marquée." },
          { type: "paragraphe", text: "Le Sudd, qui s'étend sur des dizaines de milliers de km² au gré des crues du Nil Blanc, ralentit considérablement le débit du fleuve par évaporation et abrite l'une des dernières grandes migrations de grands mammifères d'Afrique, encore mal connue faute d'accès sécurisé pour l'étudier." },
        ],
      },
      {
        id: "course-geographie-44-soudan-du-sud-lesson-2",
        title: "Population et société",
        blocks: [
          { type: "paragraphe", text: "**Population.** Le Soudan du Sud compte environ 11 millions d'habitants (2024)." },
          { type: "paragraphe", text: "La population, en grande partie rurale et agropastorale, a été durement affectée par la guerre civile de 2013-2018 et par des violences intercommunautaires persistantes, à l'origine d'importants déplacements internes et de flux de réfugiés vers les pays voisins." },
          { type: "paragraphe", text: "**Société.** Les principaux peuples sont les Dinka, les Nuer et les Shilluk. L'anglais est la langue officielle. Le christianisme et les religions traditionnelles dominent — une différence avec le Soudan majoritairement musulman, à l'origine de la séparation." },
          { type: "paragraphe", text: "La rivalité entre Dinka et Nuer, les deux plus grands groupes du pays, a directement alimenté la guerre civile qui a suivi l'indépendance, illustrant la fragilité des équilibres politiques et ethniques du plus jeune État du monde." },
        ],
      },
      {
        id: "course-geographie-44-soudan-du-sud-lesson-3",
        title: "Économie, politique et repères",
        blocks: [
          { type: "paragraphe", text: "**Économie et ressources.** L'économie dépend presque entièrement du pétrole, qui fournit l'essentiel des revenus de l'État, complété par l'élevage. C'est l'un des pays les plus pauvres du monde, ravagé par une guerre civile (2013-2018) et une grande fragilité." },
          { type: "paragraphe", text: "**Institutions et politique.** Régime : république. Chef de l'État (2026) : Salva Kiir Mayardit, président depuis l'indépendance de 2011 ; les élections y sont sans cesse reportées. Monnaie : la livre sud-soudanaise (SSP). Devise nationale : « Justice, Liberté, Prospérité »." },
          { type: "paragraphe", text: "Le pays est né le 9 juillet 2011 d'un référendum d'autodétermination approuvé par la quasi-totalité de la population du sud, mettant fin à des décennies de guerre avec le Soudan. Membre de l'Union africaine, il reste l'un des États les plus jeunes et les plus fragiles du monde." },
          { type: "paragraphe", text: "**Repères et singularités.** Capitale : Juba, sur le Nil Blanc. Le marais du Sudd et, surtout, l'indépendance obtenue en juillet 2011 — qui en fait le plus jeune État reconnu par l'ONU — marquent son identité." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-44-soudan-du-sud-quiz-1",
        question: "En quelle année le Soudan du Sud est-il devenu indépendant ?",
        options: ["En 2011", "En 1960", "En 1994", "En 2020"],
        correctIndex: 0,
        explanation: "Le Soudan du Sud est devenu indépendant en juillet 2011, ce qui en fait le plus jeune pays reconnu par l'ONU.",
      },
      {
        id: "course-geographie-44-soudan-du-sud-quiz-2",
        question: "De quel pays le Soudan du Sud a-t-il fait sécession ?",
        options: ["Le Soudan", "L'Éthiopie", "Le Kenya", "L'Ouganda"],
        correctIndex: 0,
        explanation: "Le Soudan du Sud s'est séparé du Soudan, notamment pour des raisons religieuses et politiques.",
      },
      {
        id: "course-geographie-44-soudan-du-sud-quiz-3",
        question: "Quelle est la principale ressource du Soudan du Sud ?",
        options: ["Le pétrole", "Le cacao", "L'or", "Le coton"],
        correctIndex: 0,
        explanation: "Le pétrole fournit l'essentiel des revenus de l'État sud-soudanais.",
      },
      {
        id: "course-geographie-44-soudan-du-sud-quiz-4",
        question: "Quelle est la capitale du Soudan du Sud ?",
        options: ["Juba", "Malakal", "Wau", "Bor"],
        correctIndex: 0,
        explanation: "Juba, sur le Nil Blanc, est la capitale du pays.",
      },
      {
        id: "course-geographie-44-soudan-du-sud-quiz-5",
        question: "Quel grand fleuve traverse le Soudan du Sud ?",
        options: ["Le Nil Blanc", "Le Niger", "Le Congo", "Le Zambèze"],
        correctIndex: 0,
        explanation: "Le Nil Blanc traverse le pays et y forme l'immense marécage du Sudd.",
      },
    ],
  },
  {
    id: "course-geographie-45-tanzanie",
    categoryId: "geo",
    emoji: "🇹🇿",
    title: "Tanzanie",
    description: "Terre du Kilimandjaro, du Serengeti et de Zanzibar, joyau naturel de l'Afrique de l'Est. Découvre la Tanzanie.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-45-tanzanie-lesson-1",
        title: "Le territoire",
        blocks: [
          { type: "paragraphe", text: "**Situation territoriale.** La Tanzanie s'ouvre sur l'océan Indien, en Afrique de l'Est. Sur environ 945 000 km², elle est bordée par huit pays et comprend l'archipel de Zanzibar. Elle borde trois grands lacs : Victoria, Tanganyika et Malawi." },
          { type: "paragraphe", text: "Le pays est né en 1964 de l'union du Tanganyika continental et de l'archipel de Zanzibar, qui conserve un gouvernement et un président propres au sein de la République unie. Cette structure fédérale particulière, associée à une position au carrefour de huit voisins, fait de la Tanzanie un pays-charnière de l'Afrique de l'Est." },
          { type: "paragraphe", text: "**Le milieu.** Des plateaux et de vastes savanes (Serengeti) entourent le Kilimandjaro (environ 5 895 m, plus haut sommet d'Afrique). La vallée du Rift et les grands lacs complètent des paysages spectaculaires. Le climat est tropical, chaud sur la côte." },
          { type: "paragraphe", text: "Les gorges d'Olduvai, dans le Rift, comptent parmi les sites paléontologiques les plus importants au monde pour l'étude des origines de l'humanité. Le plateau du Serengeti, prolongé par le Masai Mara kényan, accueille chaque année la plus grande migration terrestre d'animaux sauvages de la planète." },
        ],
      },
      {
        id: "course-geographie-45-tanzanie-lesson-2",
        title: "Population et société",
        blocks: [
          { type: "paragraphe", text: "**Population.** La Tanzanie compte environ 67 millions d'habitants (2024)." },
          { type: "paragraphe", text: "La population se concentre sur la côte, autour de Dar es Salaam, ainsi que sur les hauts plateaux fertiles du nord et de l'ouest, tandis que les vastes espaces de savane et de brousse restent, hors zones touristiques, peu peuplés." },
          { type: "paragraphe", text: "**Société.** Le pays réunit plus de 120 groupes ethniques, mais avec une forte unité nationale. Le swahili, langue nationale unificatrice, et l'anglais sont officiels ; christianisme et islam sont pratiqués à parts proches (Zanzibar est musulmane)." },
          { type: "paragraphe", text: "Cette remarquable unité nationale, rare dans une Afrique de l'Est autrement marquée par des tensions ethniques fortes, doit beaucoup à la politique linguistique et sociale menée après l'indépendance sous le président Julius Nyerere, qui a fait du swahili un puissant ciment national au-dessus des appartenances ethniques." },
        ],
      },
      {
        id: "course-geographie-45-tanzanie-lesson-3",
        title: "Économie, politique et repères",
        blocks: [
          { type: "paragraphe", text: "**Économie et ressources.** L'économie repose sur le tourisme (safaris, Kilimandjaro, plages de Zanzibar), l'agriculture (café, coton, noix de cajou, girofle de Zanzibar), l'or et le gaz naturel." },
          { type: "paragraphe", text: "**Institutions et politique.** Régime : république unie (Tanganyika et Zanzibar semi-autonome). Chef de l'État (2026) : Samia Suluhu Hassan, réélue en octobre 2025 (première femme présidente du pays, arrivée au pouvoir en 2021). Monnaie : le shilling tanzanien (TZS). Devise nationale : « Uhuru na Umoja » (Liberté et Unité)." },
          { type: "paragraphe", text: "Le Tanganyika est indépendant du Royaume-Uni depuis le 9 décembre 1961, Zanzibar depuis 1963 ; les deux territoires fusionnent en 1964 pour former la Tanzanie. Membre de l'Union africaine et de la Communauté d'Afrique de l'Est, le pays est réputé pour sa stabilité politique relative depuis l'indépendance." },
          { type: "paragraphe", text: "**Repères et singularités.** Capitale officielle : Dodoma ; Dar es Salaam est la capitale économique. Le Kilimandjaro, le Serengeti (grande migration), l'île de Zanzibar (Stone Town, UNESCO) et les gorges d'Olduvai (fossiles humains) sont mondialement célèbres." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-45-tanzanie-quiz-1",
        question: "Quel est le plus haut sommet d'Afrique, situé en Tanzanie ?",
        options: ["Le Kilimandjaro", "Le mont Kenya", "Le mont Cameroun", "Le Toubkal"],
        correctIndex: 0,
        explanation: "Le Kilimandjaro, à environ 5 895 m, est le point culminant du continent africain.",
      },
      {
        id: "course-geographie-45-tanzanie-quiz-2",
        question: "Quel célèbre parc tanzanien accueille la grande migration des gnous ?",
        options: ["Le Serengeti", "Le Kruger", "Le Chobe", "Le parc des Volcans"],
        correctIndex: 0,
        explanation: "Le Serengeti est le théâtre de la spectaculaire migration annuelle des gnous et des zèbres.",
      },
      {
        id: "course-geographie-45-tanzanie-quiz-3",
        question: "Quel archipel touristique fait partie de la Tanzanie ?",
        options: ["Zanzibar", "Les Comores", "Les Seychelles", "Cap-Vert"],
        correctIndex: 0,
        explanation: "Zanzibar, île aux épices et à la vieille ville classée (Stone Town), appartient à la Tanzanie.",
      },
      {
        id: "course-geographie-45-tanzanie-quiz-4",
        question: "Quelle langue nationale unifie la Tanzanie ?",
        options: ["Le swahili", "Le zoulou", "L'amharique", "Le haoussa"],
        correctIndex: 0,
        explanation: "Le swahili, langue nationale, est un puissant facteur d'unité en Tanzanie.",
      },
      {
        id: "course-geographie-45-tanzanie-quiz-5",
        question: "Quelle est la capitale officielle de la Tanzanie ?",
        options: ["Dodoma", "Dar es Salaam", "Arusha", "Mwanza"],
        correctIndex: 0,
        explanation: "Dodoma est la capitale officielle ; Dar es Salaam reste la capitale économique et le grand port.",
      },
    ],
  },
  {
    id: "course-geographie-46-afrique-du-sud",
    categoryId: "geo",
    emoji: "🇿🇦",
    title: "Afrique du Sud",
    description: "La nation « arc-en-ciel », première puissance industrielle du continent, aux trois capitales. Découvre l'Afrique du Sud.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-46-afrique-du-sud-lesson-1",
        title: "Un pays qui encercle un royaume",
        blocks: [
          { type: "paragraphe", text: "L'Afrique du Sud a une frontière presque parfaitement circulaire quelque part au milieu de son territoire : elle encercle entièrement le Lesotho, un royaume souverain, une configuration presque unique au monde." },
          { type: "chiffreCle", valeur: "9 000+", legende: "espèces de fynbos, une flore unique au cap" },
          { type: "paragraphe", text: "Le **Drakensberg**, la plus haute chaîne d'Afrique australe, sépare le Highveld intérieur des plaines côtières. Au cap de Bonne-Espérance, la rencontre des courants froids et chauds de l'Atlantique et de l'Indien crée un écosystème marin unique, à l'origine du **fynbos**, une flore d'une richesse exceptionnelle." },
          {
            type: "aRetenir",
            points: [
              "Le pays entoure entièrement le royaume du **Lesotho**",
              "Le **Drakensberg**, plus haute chaîne d'Afrique australe",
              "Le **fynbos** du Cap, une flore unique au monde",
            ],
          },
        ],
      },
      {
        id: "course-geographie-46-afrique-du-sud-lesson-2",
        title: "Onze langues pour une nation",
        blocks: [
          { type: "paragraphe", text: "L'Afrique du Sud reconnaît onze langues officielles — un record mondial — pour représenter toutes les composantes de la « nation arc-en-ciel », née en 1994 de la fin de l'apartheid et de l'élection de Nelson Mandela." },
          { type: "chiffreCle", valeur: "11", legende: "langues officielles, un record mondial" },
          { type: "paragraphe", text: "Les **townships**, quartiers créés par l'apartheid en périphérie des villes pour y reléguer la population noire, comme **Soweto** près de Johannesburg, restent des lieux de mémoire et symboles à la fois des inégalités persistantes et de la résistance." },
          {
            type: "aRetenir",
            points: [
              "**Onze** langues officielles, un record mondial",
              "L'apartheid, aboli en **1994**, a marqué durablement le pays",
              "**Soweto** et les townships, lieux de mémoire majeurs",
            ],
          },
        ],
      },
      {
        id: "course-geographie-46-afrique-du-sud-lesson-3",
        title: "Trois villes, une seule nation",
        blocks: [
          { type: "paragraphe", text: "L'Afrique du Sud est l'un des rares pays au monde à avoir trois capitales : Pretoria pour le gouvernement, Le Cap pour le Parlement, Bloemfontein pour la justice — un héritage direct des négociations d'union de 1910." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Pretoria (exécutif)" },
              { label: "Monnaie", valeur: "Rand (ZAR)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "1910 (union), république en 1961" },
            ],
          },
          { type: "paragraphe", text: "C'est l'économie la plus industrialisée d'Afrique : mines d'or, de **platine** — premier producteur mondial —, de diamants et de charbon. Membre du G20 et des BRICS, le pays reste l'une des deux premières puissances économiques du continent depuis les élections de **1994**." },
          {
            type: "aRetenir",
            points: [
              "Trois capitales : Pretoria, Le Cap et Bloemfontein",
              "Premier producteur mondial de **platine**",
              "L'une des deux premières puissances économiques d'Afrique",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-46-afrique-du-sud-quiz-1",
        question: "Combien de capitales l'Afrique du Sud possède-t-elle ?",
        options: ["Trois", "Une", "Deux", "Quatre"],
        correctIndex: 0,
        explanation: "Pretoria (exécutif), Le Cap (législatif) et Bloemfontein (judiciaire) se partagent les fonctions de capitale, un héritage des négociations d'union de 1910.",
      },
      {
        id: "course-geographie-46-afrique-du-sud-quiz-2",
        question: "L'Afrique du Sud est le premier producteur mondial de quel métal précieux ?",
        options: ["Le platine", "L'aluminium", "Le fer", "Le zinc"],
        correctIndex: 0,
        explanation: "L'Afrique du Sud domine la production mondiale de platine et reste un grand producteur d'or, au cœur de la plus grande économie industrialisée d'Afrique.",
      },
      {
        id: "course-geographie-46-afrique-du-sud-quiz-3",
        question: "Quel système de ségrégation raciale a été aboli en 1994 ?",
        options: ["L'apartheid", "La ségrégation scolaire", "Le servage", "La colonisation"],
        correctIndex: 0,
        explanation: "L'apartheid a pris fin en 1994 avec les premières élections multiraciales et l'élection de Nelson Mandela, ouvrant l'ère de la « nation arc-en-ciel ».",
      },
      {
        id: "course-geographie-46-afrique-du-sud-quiz-4",
        question: "Quelle ville est la capitale administrative (siège de l'exécutif) ?",
        options: ["Pretoria", "Le Cap", "Johannesburg", "Durban"],
        correctIndex: 0,
        explanation: "Pretoria abrite le gouvernement (exécutif) ; Le Cap accueille le Parlement.",
      },
      {
        id: "course-geographie-46-afrique-du-sud-quiz-5",
        question: "Combien de langues officielles compte l'Afrique du Sud ?",
        options: ["Onze", "Deux", "Cinq", "Une"],
        correctIndex: 0,
        explanation: "L'Afrique du Sud reconnaît onze langues officielles, un record mondial, symbole de sa diversité.",
      },
    ],
  },
  {
    id: "course-geographie-47-botswana",
    categoryId: "geo",
    emoji: "🇧🇼",
    title: "Botswana",
    description: "Un modèle de stabilité démocratique, pays du désert du Kalahari, des diamants et du delta de l'Okavango. Découvre le Botswana.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-47-botswana-lesson-1",
        title: "Un delta sans aucune mer",
        blocks: [
          { type: "paragraphe", text: "Au Botswana, le fleuve Okavango ne rejoint jamais l'océan : il se jette dans le désert du Kalahari et s'y évapore, créant chaque année un delta intérieur explosif de vie sauvage au milieu de l'aridité." },
          { type: "chiffreCle", valeur: "Okavango", legende: "un delta qui se perd dans le sable du Kalahari" },
          { type: "paragraphe", text: "Près du Zambèze, le Botswana touche ses voisins en un point de rencontre unique avec **quatre pays**. Le delta de l'**Okavango**, classé à l'UNESCO, crée chaque saison des crues une explosion de vie sauvage malgré l'aridité environnante." },
          {
            type: "aRetenir",
            points: [
              "Le fleuve **Okavango** se perd dans le sable du Kalahari",
              "Un point de rencontre rare entre quatre pays, près du Zambèze",
              "Le delta, classé à l'**UNESCO**, explose de vie à la saison des crues",
            ],
          },
        ],
      },
      {
        id: "course-geographie-47-botswana-lesson-2",
        title: "Le peuple le plus ancien d'Afrique",
        blocks: [
          { type: "paragraphe", text: "Le Botswana compte environ 2,7 millions d'habitants, en majorité tswana — mais il abrite aussi les San, l'un des peuples les plus anciens d'Afrique australe, longtemps chasseurs-cueilleurs dans le désert du Kalahari central." },
          { type: "chiffreCle", valeur: "2,7 M", legende: "sur un territoire immense, l'une des plus faibles densités" },
          { type: "paragraphe", text: "Une partie des **San** a longtemps vécu de chasse et de cueillette dans le Kalahari central, un mode de vie aujourd'hui menacé par les restrictions d'accès aux réserves naturelles. Le pays est une démocratie stable depuis son indépendance en **1966**." },
          {
            type: "aRetenir",
            points: [
              "Environ **2,7 millions** d'habitants, très faible densité",
              "Les **San**, parmi les plus anciens peuples d'Afrique australe",
              "Une démocratie stable et continue depuis **1966**",
            ],
          },
        ],
      },
      {
        id: "course-geographie-47-botswana-lesson-3",
        title: "Des diamants bien gérés, une rareté",
        blocks: [
          { type: "paragraphe", text: "Là où ailleurs les diamants ont souvent alimenté guerres et corruption, le Botswana en a fait un modèle rare de gestion transparente — l'un des meilleurs revenus par habitant d'Afrique, sans avoir sombré dans la malédiction des ressources." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Gaborone" },
              { label: "Monnaie", valeur: "Pula (BWP)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "30 septembre 1966" },
            ],
          },
          { type: "paragraphe", text: "Le pays a connu en **2024** sa première alternance politique après des décennies de pouvoir d'un même parti, sans troubles ni contestation. Le tourisme, avec l'Okavango et les grandes concentrations d'éléphants du parc de **Chobe**, complète l'économie." },
          {
            type: "aRetenir",
            points: [
              "Le diamant, géré avec une rare transparence",
              "Première alternance politique pacifique en **2024**",
              "Le parc de **Chobe**, immenses troupeaux d'éléphants",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-47-botswana-quiz-1",
        question: "Quel désert couvre une grande partie du Botswana ?",
        options: ["Le Kalahari", "Le Sahara", "Le Namib", "Le désert du Danakil"],
        correctIndex: 0,
        explanation: "Le désert semi-aride du Kalahari occupe une large part du territoire botswanais, ne laissant qu'une frange habitable au sud-est.",
      },
      {
        id: "course-geographie-47-botswana-quiz-2",
        question: "Quelle ressource fait la prospérité du Botswana ?",
        options: ["Les diamants", "Le pétrole", "Le cacao", "Le café"],
        correctIndex: 0,
        explanation: "Le Botswana est l'un des plus grands producteurs de diamants au monde, géré avec une transparence rare qui en a fait un modèle de bonne gouvernance.",
      },
      {
        id: "course-geographie-47-botswana-quiz-3",
        question: "Quel célèbre delta intérieur se trouve au Botswana ?",
        options: ["Le delta de l'Okavango", "Le delta du Nil", "Le delta du Niger", "Le delta du Gange"],
        correctIndex: 0,
        explanation: "Le delta de l'Okavango, où le fleuve se perd dans les sables du Kalahari plutôt que de rejoindre l'océan, est un sanctuaire de faune classé à l'UNESCO.",
      },
      {
        id: "course-geographie-47-botswana-quiz-4",
        question: "Quelle est la capitale du Botswana ?",
        options: ["Gaborone", "Francistown", "Maun", "Kanye"],
        correctIndex: 0,
        explanation: "Gaborone, au sud-est du pays, en est la capitale.",
      },
      {
        id: "course-geographie-47-botswana-quiz-5",
        question: "Le Botswana a-t-il un accès à la mer ?",
        options: ["Oui, sur l'Atlantique", "Non, il est enclavé", "Oui, sur l'océan Indien", "Oui, sur la mer Rouge"],
        correctIndex: 1,
        explanation: "Le Botswana est un pays enclavé d'Afrique australe, entre quatre voisins qui se rencontrent en un point unique près du Zambèze.",
      },
    ],
  },
  {
    id: "course-geographie-48-eswatini",
    categoryId: "geo",
    emoji: "🇸🇿",
    title: "Eswatini",
    description: "L'une des dernières monarchies absolues du monde, petit royaume enclavé d'Afrique australe. Découvre l'Eswatini.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-48-eswatini-lesson-1",
        title: "Presque avalé par son voisin",
        blocks: [
          { type: "paragraphe", text: "En quelques dizaines de kilomètres à peine, l'Eswatini passe du Highveld frais et montagneux, à l'ouest, au Lowveld chaud et sec, à l'est — une diversité climatique rare pour l'un des plus petits pays du continent." },
          { type: "chiffreCle", valeur: "Highveld", legende: "frais et pluvieux, à l'ouest du pays" },
          { type: "paragraphe", text: "Le relief passe du **Highveld** montagneux et frais, à l'ouest, au **Lowveld** chaud et savanicole, à l'est, plus proche du climat du Mozambique voisin. Cette gradation crée une diversité climatique remarquable sur un territoire pourtant réduit." },
          {
            type: "aRetenir",
            points: [
              "Presque entièrement entouré par l'**Afrique du Sud**",
              "Du **Highveld** frais à l'ouest au Lowveld chaud à l'est",
              "L'un des plus petits pays du continent africain",
            ],
          },
        ],
      },
      {
        id: "course-geographie-48-eswatini-lesson-2",
        title: "La danse qui honore le roi",
        blocks: [
          { type: "paragraphe", text: "Chaque année, des dizaines de milliers de jeunes femmes swazies participent à l'Umhlanga, la danse des roseaux, une cérémonie spectaculaire qui rend hommage à la reine mère et à la monarchie." },
          { type: "chiffreCle", valeur: "1,2 M", legende: "habitants, une société très homogène" },
          { type: "paragraphe", text: "La population **swazie** est remarquablement homogène, un cas rare en Afrique australe. Le **siSwati** et l'anglais sont langues officielles ; l'attachement à la monarchie et aux traditions royales structure encore la vie sociale du royaume." },
          {
            type: "aRetenir",
            points: [
              "Environ **1,2 million** d'habitants, une société homogène",
              "L'**Umhlanga**, danse des roseaux, honore la reine mère",
              "Le **siSwati** et l'anglais, langues officielles",
            ],
          },
        ],
      },
      {
        id: "course-geographie-48-eswatini-lesson-3",
        title: "Le roi qui règne encore seul",
        blocks: [
          { type: "paragraphe", text: "L'Eswatini est l'une des toutes dernières monarchies absolues du monde : les partis politiques y restent interdits, et le roi gouverne sans partage, malgré des mouvements réguliers réclamant des réformes démocratiques." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Mbabane (administrative)" },
              { label: "Monnaie", valeur: "Lilangeni (SZL)" },
              { label: "Régime", valeur: "Monarchie absolue" },
              { label: "Indépendance", valeur: "6 septembre 1968" },
            ],
          },
          { type: "paragraphe", text: "L'économie repose sur le sucre, principale exportation, ainsi que le bois et le textile — très dépendante de l'**Afrique du Sud**, dont le rand fixe la valeur de sa monnaie. Le pays, longtemps appelé Swaziland, a été rebaptisé **Eswatini** en 2018." },
          {
            type: "aRetenir",
            points: [
              "Le sucre est la principale exportation du royaume",
              "Une des dernières **monarchies absolues** du monde",
              "Rebaptisé **Eswatini** en 2018, anciennement le Swaziland",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-48-eswatini-quiz-1",
        question: "Quel régime politique caractérise l'Eswatini ?",
        options: ["Une monarchie absolue", "Une république présidentielle", "Un régime militaire", "Une fédération"],
        correctIndex: 0,
        explanation: "L'Eswatini est l'une des dernières monarchies absolues du monde, où les partis politiques restent interdits.",
      },
      {
        id: "course-geographie-48-eswatini-quiz-2",
        question: "Quel grand pays entoure presque entièrement l'Eswatini ?",
        options: ["L'Afrique du Sud", "Le Mozambique", "Le Botswana", "Le Zimbabwe"],
        correctIndex: 0,
        explanation: "L'Eswatini est presque totalement enclavé dans l'Afrique du Sud, avec une petite frontière avec le Mozambique.",
      },
      {
        id: "course-geographie-48-eswatini-quiz-3",
        question: "Quel était l'ancien nom de l'Eswatini ?",
        options: ["Le Swaziland", "Le Basutoland", "Le Bechuanaland", "La Rhodésie"],
        correctIndex: 0,
        explanation: "Le pays s'appelait Swaziland jusqu'à son changement de nom en Eswatini en 2018.",
      },
      {
        id: "course-geographie-48-eswatini-quiz-4",
        question: "Quelle est la principale exportation agricole de l'Eswatini ?",
        options: ["Le sucre", "Le cacao", "Le café", "Le coton"],
        correctIndex: 0,
        explanation: "La canne à sucre et le sucre sont les principales exportations du royaume.",
      },
      {
        id: "course-geographie-48-eswatini-quiz-5",
        question: "L'Eswatini a-t-il un accès à la mer ?",
        options: ["Oui, sur l'océan Indien", "Non, il est enclavé", "Oui, sur l'Atlantique", "Oui, sur la mer Rouge"],
        correctIndex: 1,
        explanation: "L'Eswatini est un petit pays enclavé, sans façade maritime.",
      },
    ],
  },
  {
    id: "course-geographie-49-lesotho",
    categoryId: "geo",
    emoji: "🇱🇸",
    title: "Lesotho",
    description: "Le « royaume dans le ciel », entièrement entouré par l'Afrique du Sud, le pays le plus haut du monde. Découvre le Lesotho.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-49-lesotho-lesson-1",
        title: "Le royaume dans le ciel",
        blocks: [
          { type: "paragraphe", text: "Aucun point du Lesotho ne descend sous **1 400 mètres**. C'est le seul pays au monde dans ce cas — et il est entièrement encerclé par un unique voisin, l'Afrique du Sud." },
          { type: "chiffreCle", valeur: "1 400 m", legende: "son point le plus bas — un record mondial" },
          { type: "paragraphe", text: "Les monts **Maloti** structurent tout : le climat, les routes, la vie. Il y neige en hiver. Cette altitude, longtemps un handicap, est devenue une ressource — l'eau descend vers l'Afrique du Sud et se vend." },
          {
            type: "aRetenir",
            points: [
              "Enclavé dans un seul pays : l'**Afrique du Sud**",
              "Aucun point sous **1 400 m**, unique au monde",
              "L'eau des montagnes est sa principale exportation",
            ],
          },
          { type: "leSavaisTu", text: "Le poney du Basotho est encore un vrai moyen de transport : dans les villages de montagne, il passe là où aucune route ne monte." },
        ],
      },
      {
        id: "course-geographie-49-lesotho-lesson-2",
        title: "Vivre à 2 000 mètres",
        blocks: [
          { type: "paragraphe", text: "Le Lesotho compte environ 2,3 millions d'habitants, presque tous installés au-dessus de 1 500 mètres d'altitude — un pays où même les villages les plus modestes vivent la tête dans les nuages." },
          { type: "chiffreCle", valeur: "2,3 M", legende: "d'habitants, tous au-dessus de 1 000 m" },
          { type: "paragraphe", text: "La population **basotho** est très homogène. Le sesotho et l'anglais sont langues officielles. Le **cheval basotho**, introduit au XIXe siècle, reste un moyen de transport essentiel dans les régions les plus reculées du royaume." },
          {
            type: "aRetenir",
            points: [
              "Environ **2,3 millions** d'habitants, tous en altitude",
              "Une population **basotho** très homogène",
              "Le **cheval basotho** reste essentiel dans les montagnes",
            ],
          },
          { type: "leSavaisTu", text: "La couverture basotho, portée par-dessus les vêtements par temps froid, est devenue un symbole national si fort qu'elle est portée lors des grandes cérémonies officielles, y compris par le roi lui-même." },
        ],
      },
      {
        id: "course-geographie-49-lesotho-lesson-3",
        title: "Vendre son eau au voisin",
        blocks: [
          { type: "paragraphe", text: "Le Lesotho n'a presque aucune industrie, mais il vend à l'Afrique du Sud sa ressource la plus précieuse : l'eau de ses montagnes, captée et acheminée par un immense réseau de barrages et de tunnels." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Maseru" },
              { label: "Monnaie", valeur: "Loti (LSL)" },
              { label: "Régime", valeur: "Monarchie constitutionnelle" },
              { label: "Indépendance", valeur: "4 octobre 1966" },
            ],
          },
          { type: "paragraphe", text: "Le **Lesotho Highlands Water Project** exporte l'eau des montagnes vers l'Afrique du Sud, aux côtés du textile, des diamants et des transferts des Basotho travaillant chez le voisin. Surnommé le « royaume dans le ciel », le pays est aussi le **château d'eau** de l'Afrique australe." },
          {
            type: "aRetenir",
            points: [
              "L'eau des montagnes est vendue à l'**Afrique du Sud**",
              "Surnommé le « **royaume dans le ciel** »",
              "Le **château d'eau** de l'Afrique australe",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-49-lesotho-quiz-1",
        question: "Quel pays entoure entièrement le Lesotho ?",
        options: ["L'Afrique du Sud", "Le Botswana", "Le Mozambique", "La Namibie"],
        correctIndex: 0,
        explanation: "Le Lesotho est entièrement enclavé dans l'Afrique du Sud, un cas très rare dans le monde — partagé avec seulement deux autres pays (Saint-Marin et le Vatican, tous deux enclavés en Italie).",
      },
      {
        id: "course-geographie-49-lesotho-quiz-2",
        question: "Quel surnom donne-t-on au Lesotho ?",
        options: ["« Le royaume dans le ciel »", "« La perle de l'Afrique »", "« Le cœur chaud de l'Afrique »", "« Le grenier de l'Afrique »"],
        correctIndex: 0,
        explanation: "En raison de sa haute altitude — tout le pays est au-dessus de 1 000 m —, le Lesotho est surnommé « le royaume dans le ciel ».",
      },
      {
        id: "course-geographie-49-lesotho-quiz-3",
        question: "Quelle ressource le Lesotho exporte-t-il vers l'Afrique du Sud ?",
        options: ["L'eau", "Le pétrole", "Le gaz", "Le charbon"],
        correctIndex: 0,
        explanation: "Grâce à ses montagnes et ses barrages, le Lesotho vend de l'eau à l'Afrique du Sud, sa principale ressource d'exportation.",
      },
      {
        id: "course-geographie-49-lesotho-quiz-4",
        question: "Quelle est la capitale du Lesotho ?",
        options: ["Maseru", "Teyateyaneng", "Leribe", "Mafeteng"],
        correctIndex: 0,
        explanation: "Maseru, à la frontière sud-africaine, est la capitale du royaume.",
      },
      {
        id: "course-geographie-49-lesotho-quiz-5",
        question: "Quel régime politique le Lesotho a-t-il ?",
        options: ["Une monarchie (constitutionnelle)", "Une république présidentielle", "Un régime militaire", "Une fédération"],
        correctIndex: 0,
        explanation: "Le Lesotho est une monarchie constitutionnelle, avec un roi au rôle protocolaire et un Premier ministre à la tête du gouvernement.",
      },
    ],
  },
  {
    id: "course-geographie-50-malawi",
    categoryId: "geo",
    emoji: "🇲🇼",
    title: "Malawi",
    description: "« Le cœur chaud de l'Afrique », pays du grand lac Malawi, densément peuplé et agricole. Découvre le Malawi.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-50-malawi-lesson-1",
        title: "Le lac aux mille poissons",
        blocks: [
          { type: "paragraphe", text: "Le lac Malawi abrite plus d'espèces de poissons que n'importe quel autre lac au monde — des centaines de cichlidés aux couleurs éclatantes, uniques à ces eaux, qui en font un site d'étude mondial pour l'évolution." },
          { type: "chiffreCle", valeur: "3 000 m", legende: "le mont Mulanje, isolé au milieu des plaines" },
          { type: "paragraphe", text: "La vallée du **Rift**, des plateaux et de hauts reliefs composent le paysage. Le lac Malawi, troisième plus grand lac d'Afrique, occupe une grande partie de la frontière est, tandis que le **mont Mulanje**, isolé au sud, culmine à plus de 3 000 m." },
          {
            type: "aRetenir",
            points: [
              "Le lac Malawi abrite plus d'espèces de poissons que tout autre lac",
              "Le **mont Mulanje**, isolé, culmine à plus de 3 000 m",
              "Le lac Malawi, 3ᵉ plus grand lac d'Afrique",
            ],
          },
        ],
      },
      {
        id: "course-geographie-50-malawi-lesson-2",
        title: "Le cœur chaud de l'Afrique",
        blocks: [
          { type: "paragraphe", text: "Le Malawi est surnommé « le cœur chaud de l'Afrique » pour la légendaire hospitalité de ses habitants, malgré une forte densité de population qui pèse sur des terres agricoles déjà rares." },
          { type: "chiffreCle", valeur: "21 M", legende: "sur un petit territoire, une très forte densité" },
          { type: "paragraphe", text: "Les **Chewa**, majoritaires au centre et au sud, les Yao, souvent musulmans, et les Tumbuka, au nord, forment les grands ensembles culturels du pays. Le **chichewa** et l'anglais sont langues officielles." },
          {
            type: "aRetenir",
            points: [
              "Environ **21 millions** d'habitants, forte densité",
              "**Chewa**, Yao et Tumbuka, grands peuples du pays",
              "Réputé pour son hospitalité, le « cœur chaud de l'Afrique »",
            ],
          },
        ],
      },
      {
        id: "course-geographie-50-malawi-lesson-3",
        title: "Une économie qui vit du tabac",
        blocks: [
          { type: "paragraphe", text: "Le tabac reste, de très loin, la première exportation du Malawi — une dépendance à une seule culture qui fragilise l'économie de l'un des pays les plus pauvres du monde, malgré une vie démocratique stable." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Lilongwe" },
              { label: "Monnaie", valeur: "Kwacha malawite (MWK)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "6 juillet 1964" },
            ],
          },
          { type: "paragraphe", text: "Le thé, le sucre et le maïs, ainsi que la pêche dans le **lac Malawi**, complètent les ressources. Le pays, appelé **Nyassaland** jusqu'à l'indépendance, reste l'un des plus pauvres du monde malgré une vie démocratique relativement stable depuis les années 1990." },
          {
            type: "aRetenir",
            points: [
              "Le **tabac**, de très loin la première exportation",
              "Anciennement le **Nyassaland**, sous domination britannique",
              "L'un des pays les plus pauvres, malgré une démocratie stable",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-50-malawi-quiz-1",
        question: "Quel grand lac domine le Malawi ?",
        options: ["Le lac Malawi", "Le lac Victoria", "Le lac Tchad", "Le lac Turkana"],
        correctIndex: 0,
        explanation: "Le lac Malawi occupe une grande partie du pays et abrite plus d'espèces de poissons que n'importe quel autre lac au monde.",
      },
      {
        id: "course-geographie-50-malawi-quiz-2",
        question: "Quel est le surnom du Malawi ?",
        options: ["« Le cœur chaud de l'Afrique »", "« La perle de l'Afrique »", "« Le royaume dans le ciel »", "« Le grenier de l'Afrique »"],
        correctIndex: 0,
        explanation: "Le Malawi est surnommé « le cœur chaud de l'Afrique » pour l'hospitalité légendaire de ses habitants.",
      },
      {
        id: "course-geographie-50-malawi-quiz-3",
        question: "Quelle est la principale exportation agricole du Malawi ?",
        options: ["Le tabac", "Le cacao", "Le café", "Le coton"],
        correctIndex: 0,
        explanation: "Le tabac est de longue date la première exportation du Malawi, une dépendance à une seule culture qui fragilise l'économie.",
      },
      {
        id: "course-geographie-50-malawi-quiz-4",
        question: "Quelle est la capitale du Malawi ?",
        options: ["Lilongwe", "Blantyre", "Mzuzu", "Zomba"],
        correctIndex: 0,
        explanation: "Lilongwe est la capitale ; Blantyre est la grande ville économique.",
      },
      {
        id: "course-geographie-50-malawi-quiz-5",
        question: "Le Malawi a-t-il un accès à la mer ?",
        options: ["Oui, sur l'océan Indien", "Non, il est enclavé", "Oui, sur l'Atlantique", "Oui, sur la mer Rouge"],
        correctIndex: 1,
        explanation: "Le Malawi est un pays enclavé ; son grand lac lui tient toutefois lieu de vaste étendue d'eau.",
      },
    ],
  },
  {
    id: "course-geographie-51-mozambique",
    categoryId: "geo",
    emoji: "🇲🇿",
    title: "Mozambique",
    description: "Un long pays côtier lusophone de l'océan Indien, riche en gaz et en plages. Découvre le Mozambique.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-51-mozambique-lesson-1",
        title: "Un pays étiré face à l'océan",
        blocks: [
          { type: "paragraphe", text: "Le Mozambique s'étire sur des milliers de kilomètres le long de l'océan Indien — l'une des plus longues façades maritimes d'Afrique — mais cette même position l'expose de plein fouet aux cyclones tropicaux les plus dévastateurs du continent." },
          { type: "chiffreCle", valeur: "2 500 km", legende: "de côte, l'une des plus longues d'Afrique" },
          { type: "paragraphe", text: "Le **Zambèze**, qui coupe le pays d'ouest en est, y forme le lac de retenue du barrage de **Cahora Bassa**, l'un des plus grands d'Afrique, avant de se jeter dans l'océan Indien par un vaste delta." },
          {
            type: "aRetenir",
            points: [
              "Une des plus longues façades maritimes d'Afrique",
              "Le **Zambèze** forme le lac de barrage de **Cahora Bassa**",
              "L'un des territoires les plus vulnérables aux cyclones",
            ],
          },
        ],
      },
      {
        id: "course-geographie-51-mozambique-lesson-2",
        title: "Le nord swahili, le sud austral",
        blocks: [
          { type: "paragraphe", text: "Le Mozambique compte environ 34 millions d'habitants, partagés entre deux mondes : le nord, tourné vers la côte swahilie et le monde arabo-musulman, et le sud, plus proche de l'Afrique du Sud et davantage christianisé." },
          { type: "chiffreCle", valeur: "34 M", legende: "partagés entre nord swahili et sud austral" },
          { type: "paragraphe", text: "De nombreux peuples — **Makhuwa**, Tsonga, Sena — composent la nation. Le portugais est langue officielle. Le nord, plus isolé, est touché depuis **2017** par une insurrection armée qui a provoqué d'importants déplacements de population." },
          {
            type: "aRetenir",
            points: [
              "Environ **34 millions** d'habitants, nord et sud très différents",
              "**Makhuwa**, Tsonga et Sena, principaux peuples du pays",
              "Une insurrection armée touche le nord depuis **2017**",
            ],
          },
        ],
      },
      {
        id: "course-geographie-51-mozambique-lesson-3",
        title: "Le gaz qui change tout",
        blocks: [
          { type: "paragraphe", text: "Au large du Cabo Delgado, dans le nord du Mozambique, dorment d'immenses gisements de gaz naturel découverts récemment — une richesse promise à transformer l'un des pays les plus pauvres du monde." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Maputo" },
              { label: "Monnaie", valeur: "Metical (MZN)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "25 juin 1975" },
            ],
          },
          { type: "paragraphe", text: "Le pays est indépendant depuis 1975, à l'issue d'une guerre de libération menée par le **FRELIMO**. Une longue guerre civile (1977-1992) a ensuite ravagé le pays, avant sa stabilisation puis la découverte des réserves de **gaz** au large de Cabo Delgado." },
          {
            type: "aRetenir",
            points: [
              "D'immenses réserves de **gaz** découvertes au Cabo Delgado",
              "Indépendance obtenue en **1975**, menée par le FRELIMO",
              "Une guerre civile (1977-1992) a ravagé le pays",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-51-mozambique-quiz-1",
        question: "Sur quel océan le Mozambique possède-t-il une longue façade ?",
        options: ["L'océan Indien", "L'océan Atlantique", "L'océan Pacifique", "La mer Méditerranée"],
        correctIndex: 0,
        explanation: "Toute la façade maritime du Mozambique donne sur l'océan Indien, face à Madagascar — l'une des plus longues côtes d'Afrique.",
      },
      {
        id: "course-geographie-51-mozambique-quiz-2",
        question: "Quelle ressource énergétique fait la richesse récente du nord du Mozambique ?",
        options: ["Le gaz naturel", "Le charbon de bois", "L'énergie éolienne", "Le pétrole de schiste"],
        correctIndex: 0,
        explanation: "D'immenses gisements de gaz naturel ont été découverts au large du Cabo Delgado, une richesse promise à transformer l'économie du pays.",
      },
      {
        id: "course-geographie-51-mozambique-quiz-3",
        question: "Quelle langue est officielle au Mozambique ?",
        options: ["Le portugais", "Le français", "L'anglais", "L'espagnol"],
        correctIndex: 0,
        explanation: "Ancienne colonie portugaise, le Mozambique a le portugais pour langue officielle.",
      },
      {
        id: "course-geographie-51-mozambique-quiz-4",
        question: "Quelle est la capitale du Mozambique ?",
        options: ["Maputo", "Beira", "Nampula", "Matola"],
        correctIndex: 0,
        explanation: "Maputo, tout au sud, est la capitale et le grand port du pays.",
      },
      {
        id: "course-geographie-51-mozambique-quiz-5",
        question: "Quel grand fleuve traverse le Mozambique ?",
        options: ["Le Zambèze", "Le Nil", "Le Congo", "Le Niger"],
        correctIndex: 0,
        explanation: "Le Zambèze traverse le Mozambique, où le barrage de Cahora Bassa produit de l'électricité avant que le fleuve ne rejoigne l'océan Indien par un vaste delta.",
      },
    ],
  },
  {
    id: "course-geographie-52-namibie",
    categoryId: "geo",
    emoji: "🇳🇦",
    title: "Namibie",
    description: "Un pays de déserts spectaculaires et de faune, à la plus faible densité de population d'Afrique. Découvre la Namibie.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-52-namibie-lesson-1",
        title: "Le plus vieux désert du monde",
        blocks: [
          { type: "paragraphe", text: "Le désert du Namib serait le plus vieux désert du monde, aride depuis peut-être 55 millions d'années. Le long de sa côte brumeuse, des dizaines d'épaves de navires rouillent depuis des décennies, échouées sans jamais avoir pu repartir." },
          { type: "chiffreCle", valeur: "Côte des Squelettes", legende: "brumeuse, jonchée d'épaves de navires" },
          { type: "paragraphe", text: "Cette **côte des Squelettes** doit son climat particulier à la rencontre du désert brûlant et du courant froid de **Benguela**, remonté de l'Antarctique. Les dunes de Sossusvlei, parmi les plus hautes du monde, comptent parmi les paysages les plus photographiés d'Afrique." },
          {
            type: "aRetenir",
            points: [
              "Le **Namib**, sans doute le plus vieux désert du monde",
              "La côte des Squelettes, jonchée d'épaves de navires",
              "Les dunes de **Sossusvlei**, parmi les plus hautes du monde",
            ],
          },
        ],
      },
      {
        id: "course-geographie-52-namibie-lesson-2",
        title: "Presque personne à perte de vue",
        blocks: [
          { type: "paragraphe", text: "La Namibie affiche l'une des plus faibles densités de population au monde : à peine 3 millions d'habitants pour un territoire deux fois plus grand que l'Allemagne, laissant d'immenses étendues désertiques presque vides." },
          { type: "chiffreCle", valeur: "3 M", legende: "sur un territoire deux fois grand comme l'Allemagne" },
          { type: "paragraphe", text: "Les **Ovambo**, très largement majoritaires, dominent le nord du pays. Les Herero et les Nama, durement touchés par le génocide colonial allemand du début du XXe siècle, et une minorité **San**, parmi les plus anciens peuples d'Afrique australe, complètent la mosaïque." },
          {
            type: "aRetenir",
            points: [
              "Environ **3 millions** d'habitants, très faible densité",
              "Les **Ovambo**, largement majoritaires, dominent le nord",
              "Les Herero et Nama, marqués par le génocide colonial allemand",
            ],
          },
        ],
      },
      {
        id: "course-geographie-52-namibie-lesson-3",
        title: "La première présidente du pays",
        blocks: [
          { type: "paragraphe", text: "En 2025, la Namibie a élu la première femme à sa présidence — un tournant historique dans un pays où les inégalités héritées de la colonisation allemande puis sud-africaine restent parmi les plus fortes du monde." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Windhoek" },
              { label: "Monnaie", valeur: "Dollar namibien (NAD)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "21 mars 1990" },
            ],
          },
          { type: "paragraphe", text: "L'économie repose sur les mines — diamants, **uranium**, dont la Namibie est un grand producteur — ainsi que sur le tourisme du désert et du parc d'**Etosha**. L'indépendance, obtenue en 1990, a suivi une longue lutte de libération menée par la SWAPO." },
          {
            type: "aRetenir",
            points: [
              "Première femme élue présidente en **2025**",
              "Grand producteur mondial d'**uranium** et de diamants",
              "Indépendante depuis **1990**, après la lutte de la SWAPO",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-52-namibie-quiz-1",
        question: "Quel désert longe la côte de la Namibie ?",
        options: ["Le Namib", "Le Sahara", "Le désert de Gobi", "Le désert d'Atacama"],
        correctIndex: 0,
        explanation: "Le Namib, considéré comme le plus vieux désert du monde, borde la côte atlantique namibienne, avec ses dunes de Sossusvlei parmi les plus hautes du monde.",
      },
      {
        id: "course-geographie-52-namibie-quiz-2",
        question: "La Namibie a l'une des plus faibles… d'Afrique.",
        options: ["Densités de population", "Réserves d'or", "Longueurs de côte", "Superficies"],
        correctIndex: 0,
        explanation: "Avec ses vastes déserts, la Namibie est l'un des pays les moins densément peuplés du monde, sur un territoire deux fois plus grand que l'Allemagne.",
      },
      {
        id: "course-geographie-52-namibie-quiz-3",
        question: "Quel minerai radioactif la Namibie produit-elle en grande quantité ?",
        options: ["L'uranium", "Le cuivre", "La bauxite", "Le fer"],
        correctIndex: 0,
        explanation: "La Namibie est l'un des grands producteurs mondiaux d'uranium, aux côtés des diamants.",
      },
      {
        id: "course-geographie-52-namibie-quiz-4",
        question: "Quelle est la capitale de la Namibie ?",
        options: ["Windhoek", "Swakopmund", "Walvis Bay", "Rundu"],
        correctIndex: 0,
        explanation: "Windhoek, au centre du pays, est la capitale de la Namibie.",
      },
      {
        id: "course-geographie-52-namibie-quiz-5",
        question: "En 2025, la Namibie a élu sa première femme à quelle fonction ?",
        options: ["Présidente", "Secrétaire générale de l'ONU", "Reine", "Présidente de l'Union africaine"],
        correctIndex: 0,
        explanation: "En 2025, la Namibie a élu la première femme à sa présidence, un tournant historique pour le pays.",
      },
    ],
  },
  {
    id: "course-geographie-53-zambie",
    categoryId: "geo",
    emoji: "🇿🇲",
    title: "Zambie",
    description: "Pays du cuivre et des chutes Victoria, au cœur de l'Afrique australe. Découvre la Zambie.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-53-zambie-lesson-1",
        title: "Un pays en forme de papillon",
        blocks: [
          { type: "paragraphe", text: "Sur la carte, la Zambie dessine une forme de papillon aux ailes déployées — un territoire entouré de huit pays, au carrefour de presque toutes les routes commerciales d'Afrique australe, du Zambèze au Congo." },
          { type: "chiffreCle", valeur: "8 voisins", legende: "un record de frontières pour l'Afrique australe" },
          { type: "paragraphe", text: "Le lac de **Kariba**, l'un des plus grands lacs artificiels du monde, est né d'un barrage construit sur le **Zambèze** dans les années 1950-1960, partagé avec le Zimbabwe. Le fleuve y forme aussi les chutes Victoria, plus en amont." },
          {
            type: "aRetenir",
            points: [
              "Une forme en papillon, entourée de **huit** pays",
              "Le lac de **Kariba**, l'un des plus grands lacs artificiels du monde",
              "Les chutes Victoria, partagées avec le Zimbabwe",
            ],
          },
        ],
      },
      {
        id: "course-geographie-53-zambie-lesson-2",
        title: "Stable au milieu des tempêtes",
        blocks: [
          { type: "paragraphe", text: "La Zambie compte plus de 70 groupes ethniques, mais n'a connu, depuis son indépendance, aucune guerre civile majeure — un contraste frappant avec plusieurs de ses huit voisins, souvent marqués par des conflits prolongés." },
          { type: "chiffreCle", valeur: "70+", legende: "groupes ethniques, une stabilité politique rare" },
          { type: "paragraphe", text: "Plus de 70 groupes ethniques — **Bemba**, Tonga, Nyanja — composent la nation. La population se concentre le long de l'axe économique central, du **Copperbelt** minier au nord à Lusaka au sud." },
          {
            type: "aRetenir",
            points: [
              "Environ **20 millions** d'habitants, plus de 70 groupes",
              "Aucune guerre civile majeure depuis l'indépendance",
              "La population se concentre entre **Copperbelt** et Lusaka",
            ],
          },
        ],
      },
      {
        id: "course-geographie-53-zambie-lesson-3",
        title: "Le Copperbelt, cœur du pays",
        blocks: [
          { type: "paragraphe", text: "Le cuivre est la grande richesse de la Zambie, l'un des principaux producteurs africains, extrait dans la région minière du Copperbelt qui a façonné l'économie et l'histoire moderne du pays." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Lusaka" },
              { label: "Monnaie", valeur: "Kwacha zambien (ZMW)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "24 octobre 1964" },
            ],
          },
          { type: "paragraphe", text: "Le cobalt, l'agriculture, le tourisme des **chutes Victoria** et l'hydroélectricité de **Kariba** complètent l'économie, très dépendante du cours du cuivre. La Zambie est régulièrement citée pour la stabilité de sa vie politique et ses alternances pacifiques." },
          {
            type: "aRetenir",
            points: [
              "Le **cuivre** du Copperbelt, grande richesse du pays",
              "Les chutes **Victoria** et le lac de Kariba, atouts touristiques",
              "Une stabilité politique rare, saluée dans toute la région",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-53-zambie-quiz-1",
        question: "Quel métal fait la richesse de la Zambie ?",
        options: ["Le cuivre", "L'or", "Le fer", "L'aluminium"],
        correctIndex: 0,
        explanation: "La Zambie est l'un des grands producteurs africains de cuivre, concentré dans la région minière du Copperbelt qui a façonné son histoire moderne.",
      },
      {
        id: "course-geographie-53-zambie-quiz-2",
        question: "Quelles célèbres chutes la Zambie partage-t-elle avec le Zimbabwe ?",
        options: ["Les chutes Victoria", "Les chutes du Niagara", "Les chutes d'Iguazú", "Les chutes de Tugela"],
        correctIndex: 0,
        explanation: "Les chutes Victoria, sur le Zambèze, sont partagées entre la Zambie et le Zimbabwe.",
      },
      {
        id: "course-geographie-53-zambie-quiz-3",
        question: "Quel grand fleuve borde le sud de la Zambie ?",
        options: ["Le Zambèze", "Le Nil", "Le Congo", "L'Orange"],
        correctIndex: 0,
        explanation: "Le Zambèze marque le sud du pays et y forme les chutes Victoria, avant de créer le lac de Kariba en aval.",
      },
      {
        id: "course-geographie-53-zambie-quiz-4",
        question: "Quelle est la capitale de la Zambie ?",
        options: ["Lusaka", "Ndola", "Kitwe", "Livingstone"],
        correctIndex: 0,
        explanation: "Lusaka, au centre-sud, est la capitale de la Zambie.",
      },
      {
        id: "course-geographie-53-zambie-quiz-5",
        question: "La Zambie a-t-elle un accès à la mer ?",
        options: ["Oui, sur l'océan Indien", "Non, elle est enclavée", "Oui, sur l'Atlantique", "Oui, sur la mer Rouge"],
        correctIndex: 1,
        explanation: "La Zambie est un pays enclavé, entouré de huit voisins, dessinant sur la carte une forme de papillon.",
      },
    ],
  },
  {
    id: "course-geographie-54-zimbabwe",
    categoryId: "geo",
    emoji: "🇿🇼",
    title: "Zimbabwe",
    description: "Pays des chutes Victoria et du Grand Zimbabwe, riche en minerais, à l'histoire mouvementée. Découvre le Zimbabwe.",
    xp: 50,
    lessons: [
      {
        id: "course-geographie-54-zimbabwe-lesson-1",
        title: "Entre deux fleuves, un plateau",
        blocks: [
          { type: "paragraphe", text: "Le Zimbabwe est encadré par deux grands fleuves, le Zambèze au nord et le Limpopo au sud, avec au centre un haut plateau frais, le Highveld, qui a longtemps fait sa richesse agricole." },
          { type: "chiffreCle", valeur: "2 fleuves", legende: "le Zambèze au nord, le Limpopo au sud" },
          { type: "paragraphe", text: "Le **Highveld**, aux sols volcaniques fertiles, a longtemps été la principale région agricole du pays. Au nord-ouest, le Zambèze forme les chutes Victoria ; le parc de **Hwange** abrite l'une des plus importantes populations d'éléphants d'Afrique." },
          {
            type: "aRetenir",
            points: [
              "Encadré par le **Zambèze** au nord et le Limpopo au sud",
              "Le **Highveld**, plateau fertile, cœur agricole du pays",
              "Le parc de **Hwange**, immenses populations d'éléphants",
            ],
          },
        ],
      },
      {
        id: "course-geographie-54-zimbabwe-lesson-2",
        title: "Shonas et Ndebele, deux histoires",
        blocks: [
          { type: "paragraphe", text: "Le Zimbabwe compte environ 16 millions d'habitants : les Shonas, très largement majoritaires, et les Ndebele, héritiers d'un royaume du XIXe siècle concentré autour de Bulawayo, forment les deux grandes composantes de la nation." },
          { type: "chiffreCle", valeur: "16", legende: "langues officielles reconnues, un record continental" },
          { type: "paragraphe", text: "Une importante diaspora vit en Afrique du Sud et au Royaume-Uni, conséquence des crises économiques des années 2000. Les relations entre **Shonas** et **Ndebele** ont parfois été tendues, notamment lors des violences des années 1980, le Gukurahundi." },
          {
            type: "aRetenir",
            points: [
              "Environ **16 millions** d'habitants, Shonas majoritaires",
              "16 langues officielles reconnues, un record continental",
              "Une diaspora importante, née des crises des années 2000",
            ],
          },
        ],
      },
      {
        id: "course-geographie-54-zimbabwe-lesson-3",
        title: "D'où vient le nom du pays",
        blocks: [
          { type: "paragraphe", text: "Le nom Zimbabwe vient d'une cité de pierre médiévale, le Grand Zimbabwe, dont les immenses murailles construites sans mortier laissent encore aujourd'hui les archéologues perplexes sur les techniques utilisées il y a plusieurs siècles." },
          {
            type: "reperes",
            items: [
              { label: "Capitale", valeur: "Harare" },
              { label: "Monnaie", valeur: "ZiG (Zimbabwe Gold)" },
              { label: "Régime", valeur: "République" },
              { label: "Indépendance", valeur: "18 avril 1980" },
            ],
          },
          { type: "paragraphe", text: "Le sous-sol est riche en or, platine, chrome et **lithium**, mais l'économie a été fragilisée par des décennies de crise et une **hyperinflation** historique parmi les pires jamais enregistrées au monde. L'indépendance, en 1980, a suivi une longue guerre contre le régime blanc de Rhodésie." },
          {
            type: "aRetenir",
            points: [
              "Le **Grand Zimbabwe**, cité de pierre qui a donné son nom au pays",
              "Une **hyperinflation** parmi les pires jamais enregistrées",
              "Indépendant depuis **1980**, après la guerre contre la Rhodésie",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-geographie-54-zimbabwe-quiz-1",
        question: "De quel célèbre site antique le Zimbabwe tire-t-il son nom ?",
        options: ["Le Grand Zimbabwe", "Les pyramides de Méroé", "Carthage", "Tombouctou"],
        correctIndex: 0,
        explanation: "Le Grand Zimbabwe, cité de pierre médiévale aux murailles construites sans mortier, a donné son nom au pays.",
      },
      {
        id: "course-geographie-54-zimbabwe-quiz-2",
        question: "Quelles chutes le Zimbabwe partage-t-il avec la Zambie ?",
        options: ["Les chutes Victoria", "Les chutes d'Iguazú", "Les chutes du Niagara", "Les chutes Murchison"],
        correctIndex: 0,
        explanation: "Les chutes Victoria, sur le Zambèze, sont partagées entre le Zimbabwe et la Zambie.",
      },
      {
        id: "course-geographie-54-zimbabwe-quiz-3",
        question: "Quels sont les deux fleuves qui encadrent le Zimbabwe ?",
        options: ["Le Zambèze et le Limpopo", "Le Nil et le Congo", "Le Niger et le Sénégal", "L'Orange et le Vaal"],
        correctIndex: 0,
        explanation: "Le Zambèze borde le nord du pays et le Limpopo le sud, encadrant le haut plateau fertile du Highveld.",
      },
      {
        id: "course-geographie-54-zimbabwe-quiz-4",
        question: "Quelle est la capitale du Zimbabwe ?",
        options: ["Harare", "Bulawayo", "Mutare", "Gweru"],
        correctIndex: 0,
        explanation: "Harare est la capitale et la plus grande ville du Zimbabwe.",
      },
      {
        id: "course-geographie-54-zimbabwe-quiz-5",
        question: "Le Zimbabwe a-t-il un accès à la mer ?",
        options: ["Oui, sur l'océan Indien", "Non, il est enclavé", "Oui, sur l'Atlantique", "Oui, sur la mer Rouge"],
        correctIndex: 1,
        explanation: "Le Zimbabwe est un pays enclavé d'Afrique australe, entre l'Afrique du Sud et la Zambie.",
      },
    ],
  },
];
