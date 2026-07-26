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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "L'Algérie occupe le centre du Maghreb, en Afrique du Nord, avec une façade méditerranéenne au nord. Avec près de 2,38 millions de km², c'est le plus grand pays d'Afrique par la superficie. Elle partage ses frontières avec le Maroc, la Tunisie, la Libye, le Niger, le Mali, la Mauritanie et le Sahara occidental. Le Sahara couvre à lui seul plus de 80 % du territoire.\n\n" +
      "Le pays est organisé en 58 wilayas (l'équivalent de provinces), dont dix ont été créées dans le grand sud saharien pour mieux administrer un territoire immense et peu peuplé. La capitale, Alger, et les grandes villes côtières (Oran à l'ouest, Constantine et Annaba à l'est) concentrent l'essentiel de l'activité économique et administrative, loin devant les wilayas sahariennes du sud.\n\n" +
      "#### 2. Le milieu\n" +
      "Le nord, méditerranéen, connaît des hivers doux et pluvieux ; le sud, saharien, est brûlant et aride. Deux chaînes de l'Atlas (l'Atlas tellien près de la côte, l'Atlas saharien plus au sud) séparent le littoral fertile du désert. Au cœur du Sahara se dresse le massif volcanique du Hoggar, dont le mont Tahat culmine à environ 2 900 m.\n\n" +
      "Entre les deux chaînes de l'Atlas s'étendent les Hauts Plateaux, une steppe semi-aride vouée à l'élevage ovin. Plus au sud, le Sahara algérien alterne grands ergs de dunes (Grand Erg occidental, Grand Erg oriental), regs caillouteux et oasis, comme celles du Touat ou de Ouargla, où les palmeraies vivent grâce aux nappes souterraines. Le réseau hydrographique permanent y est quasi inexistant, en dehors des oueds qui ne coulent qu'après de fortes pluies.",
      },
      {
        id: "course-geographie-01-algerie-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "L'Algérie compte environ 46 millions d'habitants (2024). La population, jeune, se concentre très largement sur la bande côtière du nord, où le climat et les terres sont plus favorables, tandis que l'immense Sahara reste peu peuplé.\n\n" +
      "Cette concentration s'est encore renforcée avec l'urbanisation : la majorité des Algériens vivent désormais en ville, notamment dans l'agglomération d'Alger et sur le littoral d'Oran à Annaba. La population reste marquée par sa jeunesse, avec une part importante de moins de 30 ans, ce qui pèse sur les besoins en logement, en emploi et en éducation.\n\n" +
      "#### 2. Société\n" +
      "La société algérienne est composée d'Arabes et de Berbères (Kabyles, Chaouis, Mozabites, Touaregs du sud). L'arabe et le tamazight (berbère) sont langues officielles ; le français reste très présent dans l'enseignement et les affaires. L'islam sunnite est la religion de la grande majorité et la religion d'État.\n\n" +
      "La Kabylie, région montagneuse à l'est d'Alger, est le principal foyer de la culture et de la langue berbères, avec une forte identité régionale. La société algérienne reste marquée par la mémoire de la guerre d'indépendance (1954-1962) et par des solidarités familiales et villageoises fortes, y compris au sein de l'importante diaspora installée en France et ailleurs en Europe.",
      },
      {
        id: "course-geographie-01-algerie-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'économie algérienne repose massivement sur les hydrocarbures : le pays est l'un des grands producteurs et exportateurs de pétrole et surtout de gaz naturel du continent, exploités par la compagnie publique Sonatrach. L'agriculture (céréales, agrumes, dattes, vigne) et l'industrie complètent le tableau, mais la dépendance au pétrole et au gaz reste une fragilité.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Abdelmadjid Tebboune. Monnaie : le dinar algérien (DZD). Devise nationale : « Par le peuple et pour le peuple ».\n\n" +
      "L'Algérie a accédé à l'indépendance le 5 juillet 1962, au terme d'une guerre longue et meurtrière contre la France. Elle est membre de l'Union africaine, de la Ligue arabe, de l'Union du Maghreb arabe et de l'OPEP, et joue un rôle diplomatique de premier plan sur les dossiers régionaux (Sahel, Sahara occidental).\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Alger, surnommée « Alger la Blanche », dont la vieille Casbah est classée au patrimoine mondial de l'UNESCO. Le pays conserve de superbes ruines romaines (Timgad, Djémila) et l'art rupestre du Tassili n'Ajjer en plein Sahara. L'Algérie garde une mémoire forte de sa guerre d'indépendance contre la France (1954-1962).",
      },
    ],
    quiz: [
      {
        id: "course-geographie-01-algerie-quiz-1",
        question: "Quel est le plus grand pays d'Afrique par sa superficie ?",
        options: ["Le Nigeria", "L'Algérie", "La RD Congo", "Le Soudan"],
        correctIndex: 1,
        explanation: "Avec environ 2,38 millions de km², l'Algérie est le plus vaste pays du continent africain.",
      },
      {
        id: "course-geographie-01-algerie-quiz-2",
        question: "Quelle grande chaîne de montagnes traverse le nord de l'Algérie ?",
        options: ["Le Drakensberg", "L'Atlas", "Le Kilimandjaro", "Le Fouta-Djalon"],
        correctIndex: 1,
        explanation: "L'Atlas tellien et l'Atlas saharien séparent le littoral méditerranéen fertile de l'immense Sahara.",
      },
      {
        id: "course-geographie-01-algerie-quiz-3",
        question: "Quelle est la principale ressource d'exportation de l'Algérie ?",
        options: ["Le cacao", "L'or", "Les hydrocarbures (pétrole et gaz)", "Le café"],
        correctIndex: 2,
        explanation: "L'Algérie est l'un des grands exportateurs de gaz naturel et de pétrole d'Afrique ; son économie en dépend fortement.",
      },
      {
        id: "course-geographie-01-algerie-quiz-4",
        question: "Quelle est la capitale de l'Algérie ?",
        options: ["Alger", "Oran", "Constantine", "Annaba"],
        correctIndex: 0,
        explanation: "Alger, surnommée « Alger la Blanche », est la capitale et le principal port du pays ; sa Casbah est classée à l'UNESCO.",
      },
      {
        id: "course-geographie-01-algerie-quiz-5",
        question: "Quel désert couvre la majeure partie du sud de l'Algérie ?",
        options: ["Le Kalahari", "Le Namib", "Le Sahara", "Le désert du Danakil"],
        correctIndex: 2,
        explanation: "Le Sahara occupe plus de 80 % du territoire algérien ; on y trouve le massif du Hoggar et le Tassili n'Ajjer.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "L'Égypte occupe l'angle nord-est de l'Afrique et déborde sur l'Asie par la péninsule du Sinaï : c'est un véritable pont entre les deux continents. Sur environ 1 million de km², elle est bordée par la Méditerranée au nord et la mer Rouge à l'est, et voisine avec la Libye, le Soudan et Israël. Le canal de Suez, qui relie la Méditerranée à la mer Rouge, en fait un carrefour stratégique du commerce mondial.\n\n" +
      "Le pays est découpé en 27 gouvernorats. En dehors de la vallée et du delta du Nil, le territoire égyptien comprend deux grands déserts : le désert Occidental (Libyque), qui prolonge le Sahara, et le désert Oriental (Arabique), qui borde la mer Rouge, de part et d'autre du fleuve qui traverse le pays du sud au nord.\n\n" +
      "#### 2. Le milieu\n" +
      "Le pays est presque entièrement désertique, mais le Nil le traverse du sud au nord et concentre toute la vie : la vallée et le vaste delta forment un long ruban vert au milieu des sables. Le climat est aride, très chaud en été. Au sud, le haut barrage d'Assouan retient le lac Nasser et régule les crues du fleuve.\n\n" +
      "Le désert Occidental abrite plusieurs oasis (Siwa, Kharga, Dakhla) où l'eau souterraine permet cultures et habitat permanent. Le désert Oriental, plus montagneux près de la mer Rouge, contraste avec les plages et récifs coralliens très fréquentés par le tourisme balnéaire, autour de villes comme Hurghada ou Charm el-Cheikh dans le Sinaï.",
      },
      {
        id: "course-geographie-02-egypte-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Avec plus de 110 millions d'habitants (2024), l'Égypte est le pays le plus peuplé du monde arabe et l'un des plus peuplés d'Afrique. La quasi-totalité de cette population vit entassée le long du Nil et dans le delta, sur une petite fraction du territoire.\n\n" +
      "Cette densité extrême, l'une des plus fortes du monde le long d'un fleuve, s'accompagne d'une urbanisation rapide : Le Caire et sa région forment l'une des plus grandes agglomérations d'Afrique et du monde arabe, tandis qu'Alexandrie reste le grand port et la deuxième ville du pays. La population égyptienne est jeune, avec une natalité qui continue d'alimenter une forte croissance démographique.\n\n" +
      "#### 2. Société\n" +
      "La population est majoritairement arabe ; l'arabe est la langue officielle. L'islam sunnite est la religion dominante, aux côtés d'une importante minorité chrétienne copte, l'une des plus anciennes communautés chrétiennes du monde. Le Caire est un grand foyer culturel et religieux du monde arabe.\n\n" +
      "Al-Azhar, au Caire, est l'une des plus anciennes et des plus prestigieuses institutions d'enseignement religieux sunnite au monde. La société égyptienne, très attachée à la vallée du Nil comme source de vie depuis l'Antiquité, reste également fière de sa culture populaire (cinéma, musique, presse) qui a longtemps rayonné dans tout le monde arabophone.",
      },
      {
        id: "course-geographie-02-egypte-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'économie repose sur l'agriculture du Nil (coton, riz, blé), le tourisme, les revenus du canal de Suez, le gaz naturel et les transferts d'argent des Égyptiens travaillant à l'étranger. La forte croissance démographique pèse sur l'emploi et les ressources.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Abdel Fattah al-Sissi. Monnaie : la livre égyptienne (EGP). Devise nationale : l'Égypte n'a pas de devise officielle consacrée.\n\n" +
      "L'Égypte est une république depuis 1953, après le renversement de la monarchie lors de la révolution de 1952. Elle est membre de la Ligue arabe, dont elle a longtemps abrité le siège au Caire, et de l'Union africaine, et a joué un rôle pivot dans la diplomatie régionale, notamment sur les dossiers israélo-arabe et libyen.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Le Caire, mégapole de la vallée du Nil (une nouvelle capitale administrative a été bâtie à l'est). L'Égypte abrite parmi les monuments les plus célèbres du monde : les pyramides de Gizeh et le Sphinx, les temples de Louxor et Karnak. Son drapeau rouge-blanc-noir porte l'aigle de Saladin.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-02-egypte-quiz-1",
        question: "Quel fleuve concentre l'essentiel de la population et de l'agriculture de l'Égypte ?",
        options: ["Le Congo", "Le Nil", "Le Niger", "Le Zambèze"],
        correctIndex: 1,
        explanation: "Presque toute la population égyptienne vit le long de la vallée et du delta du Nil, au milieu d'un territoire désertique.",
      },
      {
        id: "course-geographie-02-egypte-quiz-2",
        question: "Quel canal stratégique, situé en Égypte, relie la Méditerranée à la mer Rouge ?",
        options: ["Le canal de Suez", "Le canal de Panama", "Le canal de Corinthe", "Le canal de Kiel"],
        correctIndex: 0,
        explanation: "Le canal de Suez est l'une des grandes voies du commerce maritime mondial et une source majeure de revenus pour l'Égypte.",
      },
      {
        id: "course-geographie-02-egypte-quiz-3",
        question: "Quelle est la capitale de l'Égypte ?",
        options: ["Alexandrie", "Le Caire", "Louxor", "Assouan"],
        correctIndex: 1,
        explanation: "Le Caire est la capitale et la plus grande ville du pays ; une nouvelle capitale administrative a été construite à proximité.",
      },
      {
        id: "course-geographie-02-egypte-quiz-4",
        question: "L'Égypte est le pays le plus peuplé de quel ensemble ?",
        options: ["De l'Afrique australe", "Du monde arabe", "De l'Afrique de l'Ouest", "De l'Afrique centrale"],
        correctIndex: 1,
        explanation: "Avec plus de 110 millions d'habitants, l'Égypte est le pays le plus peuplé du monde arabe.",
      },
      {
        id: "course-geographie-02-egypte-quiz-5",
        question: "Quels monuments antiques célèbres se dressent sur le plateau de Gizeh ?",
        options: ["Les temples d'Abou Simbel", "Les pyramides et le Sphinx", "Les ruines de Carthage", "Les églises de Lalibela"],
        correctIndex: 1,
        explanation: "Les pyramides de Gizeh et le Sphinx comptent parmi les monuments les plus célèbres au monde et attirent des millions de visiteurs.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "La Libye s'étend en Afrique du Nord, avec une longue façade sur la Méditerranée. Avec près de 1,76 million de km², c'est l'un des plus vastes pays du continent, mais près de 90 % de son territoire est désertique. Elle est entourée par la Tunisie, l'Algérie, le Niger, le Tchad, le Soudan et l'Égypte.\n\n" +
      "Le pays se divise traditionnellement en trois grandes régions historiques : la Tripolitaine à l'ouest (autour de Tripoli), la Cyrénaïque à l'est (autour de Benghazi) et le Fezzan au sud, vaste espace désertique et peu peuplé. Cette division régionale a beaucoup pesé sur la vie politique du pays, notamment depuis 2011.\n\n" +
      "#### 2. Le milieu\n" +
      "Le Sahara domine le paysage : climat aride, très peu de cours d'eau permanents et de terres cultivables. Une étroite bande côtière, plus tempérée, concentre l'essentiel des cultures. Pour s'alimenter en eau, le pays puise dans des nappes fossiles profondes grâce au vaste réseau de la « Grande Rivière artificielle ».\n\n" +
      "Au sud, le désert libyen comprend quelques reliefs isolés, comme les contreforts du massif du Tibesti près de la frontière tchadienne et les hauteurs du Fezzan, ainsi que des oasis comme Ghadamès ou Koufra. La quasi-absence de relief élevé et de précipitations en fait l'un des espaces les plus arides du continent.",
      },
      {
        id: "course-geographie-03-libye-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "La Libye compte environ 7 millions d'habitants (2024), massés sur le littoral, autour de Tripoli et de Benghazi. L'immense intérieur désertique est presque vide.\n\n" +
      "Cette concentration côtière fait de la Libye l'un des pays les plus urbanisés d'Afrique du Nord : la grande majorité de la population vit en ville, la vie rurale et nomade dans le Sahara ayant fortement reculé. La population reste jeune, et les années de conflit depuis 2011 ont provoqué d'importants déplacements internes vers les grandes villes côtières.\n\n" +
      "#### 2. Société\n" +
      "La population est en majorité arabe et berbère (Amazighs), avec des minorités touarègue et toubou dans le sud saharien. L'arabe est la langue officielle et l'islam sunnite la religion de la quasi-totalité des habitants.\n\n" +
      "Les minorités berbérophones, notamment dans le Jebel Nefoussa et à Zouara, ainsi que les Touaregs et Toubous du grand sud, entretiennent des identités régionales fortes, parfois en tension avec le pouvoir central. Avant les crises des années 2010, la Libye accueillait aussi une importante population de travailleurs migrants venus d'Afrique subsaharienne et d'Égypte.",
      },
      {
        id: "course-geographie-03-libye-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'économie libyenne dépend presque entièrement du pétrole : le pays possède parmi les plus importantes réserves d'Afrique. Cette mono-dépendance et l'instabilité politique, qui a perturbé la production, laissent peu de place à la diversification.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Le pays est en transition depuis la chute de Mouammar Kadhafi en 2011, avec un pouvoir longtemps divisé entre l'est et l'ouest. Régime : transition politique. Chef de l'État (2026) : Mohamed al-Menfi, président du Conseil présidentiel reconnu internationalement ; Premier ministre du gouvernement d'union : Abdelhamid Dbeibah. Des élections nationales sont annoncées pour février 2027. Monnaie : le dinar libyen (LYD). Devise nationale : pas de devise officielle consacrée.\n\n" +
      "Avant 2011, la Libye avait été un royaume indépendant à partir de 1951, avant de devenir en 1977 la « Jamahiriya » (l'État des masses) sous Mouammar Kadhafi. Elle est membre de l'Union africaine, de la Ligue arabe et de l'Union du Maghreb arabe.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Tripoli. La Libye conserve des sites antiques exceptionnels — les cités romaines de Leptis Magna et Sabratha, la cité grecque de Cyrène — inscrites au patrimoine mondial de l'UNESCO. Le pays reste marqué par les 42 ans de pouvoir de Kadhafi (1969-2011) et par la révolution de 2011.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-03-libye-quiz-1",
        question: "Quelle est la nature de la majeure partie du territoire libyen ?",
        options: ["La forêt tropicale", "Le désert du Sahara", "La savane humide", "La haute montagne"],
        correctIndex: 1,
        explanation: "Près de 90 % de la Libye est couverte par le Sahara ; la vie se concentre sur l'étroite bande côtière.",
      },
      {
        id: "course-geographie-03-libye-quiz-2",
        question: "Quelle est la principale ressource économique de la Libye ?",
        options: ["Le cacao", "Le pétrole", "Le coton", "Le tourisme"],
        correctIndex: 1,
        explanation: "La Libye possède parmi les plus grandes réserves de pétrole d'Afrique ; son économie en dépend presque entièrement.",
      },
      {
        id: "course-geographie-03-libye-quiz-3",
        question: "Quelle est la capitale de la Libye ?",
        options: ["Tripoli", "Benghazi", "Misrata", "Syrte"],
        correctIndex: 0,
        explanation: "Tripoli, sur la côte méditerranéenne, est la capitale et la plus grande ville du pays.",
      },
      {
        id: "course-geographie-03-libye-quiz-4",
        question: "Sur quelle mer la Libye possède-t-elle une longue façade ?",
        options: ["La mer Rouge", "La mer Méditerranée", "L'océan Atlantique", "La mer Noire"],
        correctIndex: 1,
        explanation: "Toute la côte libyenne donne sur la Méditerranée, où se concentrent les grandes villes.",
      },
      {
        id: "course-geographie-03-libye-quiz-5",
        question: "Quel célèbre site antique romain se trouve en Libye ?",
        options: ["Les pyramides de Gizeh", "Leptis Magna", "Le Grand Zimbabwe", "Tombouctou"],
        correctIndex: 1,
        explanation: "Leptis Magna, comme Sabratha et Cyrène, témoigne du riche passé antique de la Libye ; ces sites sont classés à l'UNESCO.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Maroc occupe l'extrémité nord-ouest de l'Afrique, à la fois atlantique et méditerranéenne. Il est séparé de l'Europe par le seul détroit de Gibraltar, large d'une quinzaine de kilomètres. Sur environ 446 000 km² (hors Sahara occidental, dont il contrôle l'essentiel), il partage ses frontières avec l'Algérie et, au sud, la Mauritanie.\n\n" +
      "Le royaume est organisé en 12 régions administratives, de Tanger-Tétouan-Al Hoceïma au nord à Dakhla-Oued Ed-Dahab au sud. Casablanca, sur la façade atlantique, est de loin la plus grande ville et le principal port du pays, loin devant Rabat, la capitale politique.\n\n" +
      "#### 2. Le milieu\n" +
      "Le pays est structuré par les chaînes de l'Atlas : le Haut Atlas, avec le mont Toubkal (environ 4 167 m), plus haut sommet d'Afrique du Nord, et le Rif au nord. Entre les montagnes et l'océan s'étendent des plaines atlantiques fertiles ; le Sahara commence au sud-est. Le climat va du méditerranéen, au nord, à l'aride, au sud.\n\n" +
      "Entre le Haut Atlas et l'Anti-Atlas, plus au sud, s'étendent des vallées présahariennes comme celle du Drâa, réputées pour leurs palmeraies et leurs kasbahs en pisé. Le littoral atlantique, long de plus d'un millier de kilomètres, alterne plages, falaises et grandes plaines céréalières comme la Chaouia.",
      },
      {
        id: "course-geographie-04-maroc-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Le Maroc compte environ 37 millions d'habitants (2024), répartis surtout dans les plaines de l'ouest et les grandes villes du littoral atlantique.\n\n" +
      "Plus de 60 % des Marocains vivent aujourd'hui en ville, une urbanisation portée par l'axe Casablanca-Rabat-Kénitra. La population reste jeune, même si la natalité a fortement baissé depuis les années 1980, et l'émigration vers l'Europe, notamment la France, l'Espagne et les Pays-Bas, a constitué depuis des décennies une importante diaspora.\n\n" +
      "#### 2. Société\n" +
      "La société marocaine mêle Arabes et Berbères (Amazighs). L'arabe et l'amazighe sont langues officielles ; le français reste très utilisé. L'islam sunnite est la religion d'État, le roi portant le titre de « Commandeur des croyants ».\n\n" +
      "Les Berbères se répartissent en trois grandes aires linguistiques (tarifit au nord, tamazight au centre, tachelhit au sud) et représentent une part importante de la population, notamment dans les montagnes de l'Atlas et du Rif. Le pays compte aussi une petite minorité chrétienne et une communauté juive marocaine historique, aujourd'hui très réduite mais dont l'héritage culturel reste visible dans plusieurs villes.",
      },
      {
        id: "course-geographie-04-maroc-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "Le Maroc est le premier exportateur mondial de phosphates (via le groupe public OCP), matière première des engrais. Son économie s'appuie aussi sur l'agriculture, le tourisme, une industrie automobile et aéronautique en plein essor, le textile et la pêche.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : monarchie constitutionnelle. Chef de l'État (2026) : le Roi Mohammed VI. Monnaie : le dirham marocain (MAD). Devise nationale : « Dieu, la Patrie, le Roi ».\n\n" +
      "Le Maroc est indépendant de la France et de l'Espagne depuis 1956. Membre de la Ligue arabe et de l'Union du Maghreb arabe, il a réintégré l'Union africaine en 2017 après plus de trente ans d'absence, liée au différend sur le Sahara occidental.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Rabat. Le pays est célèbre pour ses villes impériales et leurs médinas classées à l'UNESCO — Fès et Marrakech — tandis que Casablanca est le poumon économique. Son drapeau rouge porte une étoile verte à cinq branches. Artisanat, thé à la menthe et culture berbère font partie de son identité.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-04-maroc-quiz-1",
        question: "Quelle grande chaîne de montagnes, avec le mont Toubkal, domine le Maroc ?",
        options: ["Le Drakensberg", "L'Atlas", "Le Rwenzori", "Le Fouta-Djalon"],
        correctIndex: 1,
        explanation: "Le Haut Atlas abrite le mont Toubkal (environ 4 167 m), plus haut sommet d'Afrique du Nord.",
      },
      {
        id: "course-geographie-04-maroc-quiz-2",
        question: "Quel est le régime politique du Maroc ?",
        options: ["Une république présidentielle", "Une monarchie", "Un régime militaire", "Une fédération"],
        correctIndex: 1,
        explanation: "Le Maroc est une monarchie constitutionnelle dirigée par le roi Mohammed VI.",
      },
      {
        id: "course-geographie-04-maroc-quiz-3",
        question: "Le Maroc est le premier exportateur mondial de quelle ressource ?",
        options: ["Le pétrole", "Le cacao", "Les phosphates", "L'or"],
        correctIndex: 2,
        explanation: "Grâce à ses immenses gisements exploités par l'OCP, le Maroc domine le marché mondial des phosphates.",
      },
      {
        id: "course-geographie-04-maroc-quiz-4",
        question: "Quelle est la capitale du Maroc ?",
        options: ["Casablanca", "Rabat", "Marrakech", "Fès"],
        correctIndex: 1,
        explanation: "Rabat est la capitale politique ; Casablanca est la plus grande ville et le centre économique.",
      },
      {
        id: "course-geographie-04-maroc-quiz-5",
        question: "Quel détroit sépare le Maroc de l'Europe ?",
        options: ["Le détroit de Gibraltar", "Le canal de Suez", "Le détroit de Bab-el-Mandeb", "Le détroit de Malacca"],
        correctIndex: 0,
        explanation: "Le détroit de Gibraltar, large d'une quinzaine de kilomètres, sépare le Maroc de l'Espagne.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "La Mauritanie se situe à la charnière du Maghreb et de l'Afrique de l'Ouest, avec une façade atlantique. Sur environ 1,03 million de km², en grande partie saharien, elle est bordée par le Sahara occidental, l'Algérie, le Mali et, au sud, le Sénégal — dont la frontière est marquée par le fleuve Sénégal.\n\n" +
      "Le pays est découpé en une quinzaine de régions, dont Nouakchott, la capitale, forme à elle seule un district particulier sur la côte atlantique. La quasi-totalité de la vie économique et administrative se concentre dans cette étroite bande littorale et sahélienne du sud, tant l'intérieur saharien reste vide.\n\n" +
      "#### 2. Le milieu\n" +
      "Le Sahara couvre le nord et le centre du pays ; seule une frange sahélienne au sud, le long du fleuve Sénégal, permet l'agriculture. Le climat est aride et le pays est très exposé à la désertification. Sa côte atlantique, au niveau du banc d'Arguin, compte parmi les eaux les plus poissonneuses du monde.\n\n" +
      "À l'intérieur des terres, le plateau de l'Adrar et les massifs du Tagant portent d'anciennes cités caravanières bâties autour d'oasis, seuls points d'eau permanents dans un océan de dunes et de regs. Le parc national du Banc d'Arguin, sur la côte, protège à la fois les eaux poissonneuses et un vaste site de reproduction pour les oiseaux migrateurs.",
      },
      {
        id: "course-geographie-05-mauritanie-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "La Mauritanie compte environ 4,9 millions d'habitants (2024), une population relativement faible pour un territoire aussi vaste.\n\n" +
      "Cette population se concentre presque entièrement dans le sud et sur la frange côtière : Nouakchott, ville quasiment inexistante avant l'indépendance, a connu une croissance urbaine fulgurante et rassemble aujourd'hui près d'un tiers des Mauritaniens. À l'inverse, l'immense intérieur saharien ne compte plus que de rares communautés nomades ou semi-nomades.\n\n" +
      "#### 2. Société\n" +
      "La société réunit les Maures arabo-berbères (Bidhan et Haratines) et des populations négro-africaines (Halpulaar, Soninké, Wolof). L'arabe est langue officielle, aux côtés du pular, du soninké et du wolof reconnus. C'est une République islamique, l'islam étant religion d'État ; la société reste marquée par la question de l'esclavage, aboli tardivement.\n\n" +
      "Cette dualité entre Maures du nord et populations négro-africaines du sud, aggravée par l'héritage de l'esclavage et des tensions intercommunautaires des années 1980-1990, continue de peser sur la cohésion nationale. La société mauritanienne reste très majoritairement rurale ou récemment urbanisée, avec des solidarités tribales et claniques encore fortes.",
      },
      {
        id: "course-geographie-05-mauritanie-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'économie repose sur le minerai de fer (principale exportation, via la SNIM), l'or et le cuivre, sur une pêche abondante et sur l'élevage. Le pays est aussi devenu producteur de gaz naturel offshore avec le champ Grand Tortue Ahmeyim (GTA), partagé avec le Sénégal.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : République islamique. Chef de l'État (2026) : Mohamed Ould Ghazouani. Monnaie : l'ouguiya (MRU). Devise nationale : « Honneur, Fraternité, Justice ».\n\n" +
      "La Mauritanie est indépendante de la France depuis le 28 novembre 1960. Elle est membre de l'Union africaine et de la Ligue arabe, mais a quitté la CEDEAO en 2000 pour se rapprocher du Maghreb ; elle appartient aujourd'hui à l'Union du Maghreb arabe.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Nouakchott. La Mauritanie abrite d'anciennes villes caravanières du désert — Ouadane, Chinguetti, Tichitt et Oualata — inscrites à l'UNESCO ; Chinguetti est une ville sainte réputée pour ses bibliothèques de manuscrits. Le banc d'Arguin est un sanctuaire majeur pour les oiseaux migrateurs.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-05-mauritanie-quiz-1",
        question: "Quel désert couvre la majeure partie de la Mauritanie ?",
        options: ["Le Kalahari", "Le Sahara", "Le Namib", "Le désert du Danakil"],
        correctIndex: 1,
        explanation: "Le Sahara occupe le nord et le centre du pays ; seule une frange sahélienne au sud est cultivable.",
      },
      {
        id: "course-geographie-05-mauritanie-quiz-2",
        question: "Quel minerai constitue la principale exportation de la Mauritanie ?",
        options: ["Le cuivre", "Le fer", "La bauxite", "Le diamant"],
        correctIndex: 1,
        explanation: "Le minerai de fer, exploité par la SNIM, est de longue date la première ressource d'exportation du pays.",
      },
      {
        id: "course-geographie-05-mauritanie-quiz-3",
        question: "Quelle est la monnaie de la Mauritanie ?",
        options: ["Le franc CFA", "L'ouguiya", "Le dirham", "Le naira"],
        correctIndex: 1,
        explanation: "Contrairement à ses voisins d'Afrique de l'Ouest, la Mauritanie n'utilise pas le franc CFA mais l'ouguiya.",
      },
      {
        id: "course-geographie-05-mauritanie-quiz-4",
        question: "Quelle est la capitale de la Mauritanie ?",
        options: ["Nouadhibou", "Nouakchott", "Atar", "Kiffa"],
        correctIndex: 1,
        explanation: "Nouakchott, sur la côte atlantique, est la capitale et la plus grande ville du pays.",
      },
      {
        id: "course-geographie-05-mauritanie-quiz-5",
        question: "Quel fleuve marque la frontière sud de la Mauritanie avec le Sénégal ?",
        options: ["Le fleuve Niger", "Le fleuve Gambie", "Le fleuve Sénégal", "Le fleuve Congo"],
        correctIndex: 2,
        explanation: "Le fleuve Sénégal sépare la Mauritanie du Sénégal et permet l'agriculture dans la frange sahélienne du sud.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Soudan s'étend dans le nord-est de l'Afrique sur environ 1,88 million de km², ce qui en fait le troisième plus grand pays du continent depuis l'indépendance du Soudan du Sud en 2011. Il possède une façade sur la mer Rouge et voisine avec l'Égypte, la Libye, le Tchad, la Centrafrique, le Soudan du Sud, l'Éthiopie et l'Érythrée. C'est à Khartoum, la capitale, que le Nil Blanc et le Nil Bleu se rejoignent pour former le Nil.\n\n" +
      "Le pays est divisé en 18 États (wilayat), héritage d'un très vaste territoire longtemps administré depuis Khartoum. Le Darfour, à l'ouest, et le Kordofan, au centre, forment de vastes régions semi-arides longtemps marginalisées par rapport à la vallée du Nil.\n\n" +
      "#### 2. Le milieu\n" +
      "Le nord est désertique, le sud est une savane sahélienne ; le Nil constitue l'axe vital du pays. Le climat, aride à semi-aride, devient un peu plus humide vers le sud, où tombent les rares pluies.\n\n" +
      "Au-delà du désert de Nubie au nord, le pays conserve, le long du Nil, une étroite bande cultivable héritée de la civilisation nubienne antique. Vers l'est, les monts de la mer Rouge dominent une côte aride ; vers l'ouest, le massif volcanique du Jebel Marra, au Darfour, culmine à plus de 3 000 m et constitue l'un des rares points d'eau de la région.",
      },
      {
        id: "course-geographie-06-soudan-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Le Soudan compte environ 48 millions d'habitants (2024), une population lourdement affectée par la guerre, qui a provoqué depuis 2023 des déplacements massifs parmi les plus importants du monde.\n\n" +
      "Avant la guerre, la population se concentrait déjà fortement le long du Nil et autour de Khartoum, la plus grande agglomération du pays ; les combats depuis 2023 ont vidé une partie de la capitale et poussé des millions de personnes vers l'est du pays, l'Égypte, le Tchad et le Soudan du Sud.\n\n" +
      "#### 2. Société\n" +
      "C'est une mosaïque de peuples arabes et africains : Arabes soudanais, Nubiens, Beja, populations du Darfour (Four)… L'arabe et l'anglais sont langues officielles ; l'islam est la religion majoritaire.\n\n" +
      "Cette diversité ethnique, longtemps mal représentée dans le pouvoir centralisé à Khartoum, est au cœur des tensions qui ont marqué le pays depuis l'indépendance : guerre civile avec le Sud chrétien et animiste jusqu'en 2005, puis conflit du Darfour à partir de 2003, aujourd'hui guerre entre l'armée et les Forces de soutien rapide.",
      },
      {
        id: "course-geographie-06-soudan-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'agriculture est centrale : le Soudan est le premier producteur mondial de gomme arabique, en plus du sésame, du coton et du sorgho ; l'or et l'élevage complètent ses ressources. La guerre civile a toutefois dévasté l'économie.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Le pays est sous régime militaire de transition et plongé dans une guerre civile depuis avril 2023, qui oppose l'armée régulière aux Forces de soutien rapide (FSR). Chef de l'État de facto (2026) : le général Abdel Fattah al-Burhan, président du Conseil de souveraineté (Premier ministre : Kamel Idris). Monnaie : la livre soudanaise (SDG). Devise nationale : « La victoire est à nous ».\n\n" +
      "Le Soudan est indépendant du Royaume-Uni et de l'Égypte depuis le 1ᵉʳ janvier 1956. Membre de la Ligue arabe et de l'Union africaine, il a connu depuis l'indépendance une succession quasi ininterrompue de coups d'État et de guerres civiles, dont la sécession du Soudan du Sud en 2011 reste l'épisode le plus marquant.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Khartoum, à la confluence des deux Nils. Le Soudan abrite les pyramides de Méroé, héritage du royaume nubien de Koush, classées au patrimoine mondial de l'UNESCO. Le pays reste marqué par le conflit du Darfour et par la sécession du Soudan du Sud en 2011, qui lui a fait perdre l'essentiel de son pétrole.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-06-soudan-quiz-1",
        question: "Quels deux cours d'eau se rejoignent à Khartoum ?",
        options: ["Le Niger et le Bénoué", "Le Nil Blanc et le Nil Bleu", "Le Congo et l'Oubangui", "Le Sénégal et la Falémé"],
        correctIndex: 1,
        explanation: "La rencontre du Nil Blanc et du Nil Bleu à Khartoum donne naissance au Nil, qui poursuit sa route vers l'Égypte.",
      },
      {
        id: "course-geographie-06-soudan-quiz-2",
        question: "Le Soudan est le premier producteur mondial de quel produit ?",
        options: ["Le cacao", "La gomme arabique", "Le café", "Le caoutchouc"],
        correctIndex: 1,
        explanation: "La gomme arabique, tirée des acacias, est une exportation emblématique du Soudan, utilisée dans l'industrie agroalimentaire.",
      },
      {
        id: "course-geographie-06-soudan-quiz-3",
        question: "Quelle est la capitale du Soudan ?",
        options: ["Omdourman", "Khartoum", "Port-Soudan", "Nyala"],
        correctIndex: 1,
        explanation: "Khartoum, à la confluence des deux Nils, est la capitale historique du pays.",
      },
      {
        id: "course-geographie-06-soudan-quiz-4",
        question: "Quel nouveau pays a fait sécession du Soudan en 2011 ?",
        options: ["L'Érythrée", "Le Soudan du Sud", "Le Tchad", "La Centrafrique"],
        correctIndex: 1,
        explanation: "En 2011, le Soudan du Sud est devenu indépendant, emportant avec lui une grande partie des réserves de pétrole.",
      },
      {
        id: "course-geographie-06-soudan-quiz-5",
        question: "Quelles pyramides antiques, héritage du royaume de Koush, se trouvent au Soudan ?",
        options: ["Les pyramides de Gizeh", "Les pyramides de Méroé", "Les pyramides de Teotihuacan", "Les pyramides de Nubie mexicaine"],
        correctIndex: 1,
        explanation: "Les pyramides de Méroé, plus nombreuses que celles d'Égypte, témoignent de la civilisation nubienne de Koush ; elles sont classées à l'UNESCO.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "La Tunisie occupe la pointe nord-est du Maghreb, avec une longue façade méditerranéenne. Sur environ 164 000 km², c'est le plus petit pays d'Afrique du Nord. Elle est bordée par l'Algérie à l'ouest et la Libye au sud-est ; le cap Blanc, en Tunisie, est le point le plus septentrional de l'Afrique.\n\n" +
      "Le pays compte 24 gouvernorats, dont celui de Tunis, la capitale, au cœur d'une agglomération qui concentre à elle seule une part importante de la population et de la richesse nationale, loin devant les régions intérieures et le sud désertique.\n\n" +
      "#### 2. Le milieu\n" +
      "Le nord, prolongement de l'Atlas tellien, est montagneux et bien arrosé ; les plaines côtières, comme le Sahel tunisien, sont couvertes d'oliviers. Vers le sud apparaissent les chotts (lacs salés) puis le Sahara. Le climat passe du méditerranéen, au nord, à l'aride, au sud.\n\n" +
      "Le point culminant du pays, le Jebel Chambi (environ 1 544 m), se trouve dans le centre-ouest montagneux, non loin de la frontière algérienne. Plus au sud, le chott el-Jérid, immense lac salé asséché une grande partie de l'année, annonce les premières dunes du Sahara et les oasis de Tozeur et Nefta.",
      },
      {
        id: "course-geographie-07-tunisie-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "La Tunisie compte environ 12 millions d'habitants (2024), concentrés sur le littoral nord et est, autour de Tunis, Sfax et Sousse.\n\n" +
      "Le pays est très majoritairement urbain, avec près de sept Tunisiens sur dix vivant en ville. Le grand Tunis, à lui seul, rassemble environ un quart de la population nationale, tandis que l'intérieur du pays et le sud, moins développés, connaissent un exode vers le littoral et vers l'étranger, notamment la France et l'Italie.\n\n" +
      "#### 2. Société\n" +
      "La population est majoritairement arabo-berbère ; l'arabe est la langue officielle et le français très répandu. L'islam sunnite domine. La Tunisie est réputée pour son Code du statut personnel (1956), particulièrement avancé sur les droits des femmes dans la région.\n\n" +
      "Adopté sous la présidence de Habib Bourguiba au lendemain de l'indépendance, ce code a aboli la polygamie et instauré le divorce judiciaire, faisant longtemps de la Tunisie une référence régionale sur les droits des femmes. La société tunisienne, largement alphabétisée et scolarisée, reste marquée par un fort attachement à l'éducation.",
      },
      {
        id: "course-geographie-07-tunisie-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'économie repose sur le tourisme (plages et sites antiques), le textile, l'agriculture — la Tunisie est un grand producteur d'huile d'olive, de dattes (Deglet Nour) et d'agrumes —, les phosphates et les industries manufacturières.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Kaïs Saïed. Monnaie : le dinar tunisien (TND). Devise nationale : « Liberté, Ordre, Justice ».\n\n" +
      "La Tunisie est indépendante de la France depuis le 20 mars 1956 ; Habib Bourguiba, premier président, proclame la république l'année suivante. Membre de la Ligue arabe et de l'Union du Maghreb arabe, elle reste, depuis 2010-2011, le seul pays du Printemps arabe à avoir engagé une transition démocratique durable, bien que le pouvoir se soit depuis reconcentré autour de la présidence.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Tunis. Le pays est riche en sites classés à l'UNESCO : l'antique Carthage, l'amphithéâtre romain d'El Jem, la ville sainte de Kairouan, sans oublier le village bleu et blanc de Sidi Bou Saïd. C'est en Tunisie qu'a débuté le Printemps arabe en 2010-2011.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-07-tunisie-quiz-1",
        question: "Quel est le plus petit pays du Maghreb (Afrique du Nord) ?",
        options: ["Le Maroc", "La Tunisie", "L'Algérie", "La Libye"],
        correctIndex: 1,
        explanation: "Avec environ 164 000 km², la Tunisie est le plus petit des pays d'Afrique du Nord.",
      },
      {
        id: "course-geographie-07-tunisie-quiz-2",
        question: "Quelle cité antique célèbre, grande rivale de Rome, s'élevait sur le site de l'actuelle Tunis ?",
        options: ["Alexandrie", "Carthage", "Babylone", "Thèbes"],
        correctIndex: 1,
        explanation: "Carthage, fondée par les Phéniciens, fut une grande puissance méditerranéenne avant sa destruction par Rome ; son site est classé à l'UNESCO.",
      },
      {
        id: "course-geographie-07-tunisie-quiz-3",
        question: "Quelle production agricole la Tunisie exporte-t-elle en grande quantité ?",
        options: ["Le cacao", "L'huile d'olive", "Le café", "Le caoutchouc"],
        correctIndex: 1,
        explanation: "La Tunisie figure parmi les grands producteurs mondiaux d'huile d'olive, cultivée notamment dans le Sahel tunisien.",
      },
      {
        id: "course-geographie-07-tunisie-quiz-4",
        question: "Quelle est la capitale de la Tunisie ?",
        options: ["Sfax", "Tunis", "Sousse", "Kairouan"],
        correctIndex: 1,
        explanation: "Tunis, au nord-est du pays, est la capitale et la plus grande ville de Tunisie.",
      },
      {
        id: "course-geographie-07-tunisie-quiz-5",
        question: "Dans quel pays a débuté le « Printemps arabe » en 2010-2011 ?",
        options: ["En Égypte", "En Libye", "En Tunisie", "En Syrie"],
        correctIndex: 2,
        explanation: "Le soulèvement parti de Tunisie fin 2010 a lancé la vague de révoltes appelée « Printemps arabe » dans le monde arabe.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Bénin est un pays d'Afrique de l'Ouest, étroit et allongé du nord au sud, avec une petite façade sur le golfe de Guinée. Sur environ 114 800 km², il est bordé par le Togo, le Nigeria, le Niger et le Burkina Faso.\n\n" +
      "Le pays est découpé en douze départements, de l'Atlantique et du Littoral au sud à l'Alibori et à l'Atacora au nord. Cette forme allongée fait traverser au Bénin plusieurs zones climatiques et culturelles très différentes sur une distance nord-sud d'environ 700 km.\n\n" +
      "#### 2. Le milieu\n" +
      "Le paysage passe d'un sud humide (côte, lagunes, palmeraies) à un nord plus sec de savanes. Le climat est tropical. Au nord-ouest, le parc de la Pendjari est une grande réserve de faune (éléphants, lions), inscrite dans une réserve de biosphère.\n\n" +
      "Le littoral, rectiligne et sableux, est doublé d'un chapelet de lagunes côtières, dont celle de Cotonou, où s'est développée la cité lacustre de Ganvié. Vers le nord, la chaîne de l'Atacora forme le relief le plus marqué du pays, à la frontière du Togo.",
      },
      {
        id: "course-geographie-08-benin-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Le Bénin compte environ 13 à 14 millions d'habitants (2024), concentrés dans le sud, autour de Cotonou et de Porto-Novo.\n\n" +
      "La population est jeune et en croissance rapide, avec une urbanisation qui s'accélère le long du corridor côtier reliant Cotonou à Porto-Novo puis à Lagos, au Nigeria. Le nord du pays, plus rural, reste nettement moins peuplé que le sud.\n\n" +
      "#### 2. Société\n" +
      "La société réunit de nombreux peuples : Fon, Yoruba, Bariba, Adja… Le français est la langue officielle, aux côtés de langues nationales (fon, yoruba). On y pratique le christianisme, l'islam et le vaudou, religion traditionnelle née précisément dans cette région.\n\n" +
      "Les Fon, majoritaires au sud, sont les héritiers directs du royaume du Dahomey ; les Yoruba, présents au sud-est, partagent une culture commune avec leurs voisins du Nigeria ; les Bariba et les Peuls dominent au nord. Le vaudou, loin d'être marginal, structure encore de nombreuses pratiques sociales et festives, notamment lors de la fête nationale qui lui est dédiée chaque 10 janvier.",
      },
      {
        id: "course-geographie-08-benin-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'économie repose sur l'agriculture, en particulier le coton (principale exportation), l'ananas et l'anacarde. Le port de Cotonou joue un grand rôle dans le commerce régional, notamment la réexportation vers le Nigeria voisin.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Romuald Wadagni, élu en avril 2026, succédant à Patrice Talon. Monnaie : le franc CFA (XOF). Devise nationale : « Fraternité, Justice, Travail ».\n\n" +
      "Le Bénin est indépendant de la France depuis le 1er août 1960, sous le nom de Dahomey jusqu'en 1975. Membre de l'UEMOA et de la CEDEAO, il partage le franc CFA avec ses voisins ouest-africains francophones.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale officielle : Porto-Novo ; mais Cotonou est le siège du gouvernement et la capitale économique. Les palais royaux d'Abomey (UNESCO) rappellent le puissant royaume du Dahomey, et la cité lacustre de Ganvié est bâtie sur pilotis. Le Bénin est reconnu comme le berceau du vaudou.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-08-benin-quiz-1",
        question: "Le Bénin est considéré comme le berceau de quelle religion traditionnelle ?",
        options: ["Le rastafarisme", "Le vaudou", "Le zoroastrisme", "Le shintoïsme"],
        correctIndex: 1,
        explanation: "Le vaudou est né dans la région de l'actuel Bénin ; il y est encore largement pratiqué.",
      },
      {
        id: "course-geographie-08-benin-quiz-2",
        question: "Quelle est la principale culture d'exportation du Bénin ?",
        options: ["Le cacao", "Le coton", "Le café", "Le thé"],
        correctIndex: 1,
        explanation: "Le coton est la première exportation agricole du Bénin.",
      },
      {
        id: "course-geographie-08-benin-quiz-3",
        question: "Quelle est la capitale officielle du Bénin ?",
        options: ["Cotonou", "Porto-Novo", "Parakou", "Abomey"],
        correctIndex: 1,
        explanation: "Porto-Novo est la capitale officielle ; Cotonou, plus grande, est le siège du gouvernement et le cœur économique.",
      },
      {
        id: "course-geographie-08-benin-quiz-4",
        question: "Quelle monnaie utilise le Bénin ?",
        options: ["Le franc CFA", "Le naira", "Le cedi", "Le dalasi"],
        correctIndex: 0,
        explanation: "Le Bénin fait partie de la zone du franc CFA d'Afrique de l'Ouest (UEMOA).",
      },
      {
        id: "course-geographie-08-benin-quiz-5",
        question: "Les palais royaux d'Abomey rappellent quel ancien royaume ?",
        options: ["Le royaume ashanti", "Le royaume du Dahomey", "L'empire du Mali", "Le royaume du Kongo"],
        correctIndex: 1,
        explanation: "Abomey était la capitale du royaume du Dahomey ; ses palais sont classés à l'UNESCO.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Burkina Faso est un pays enclavé d'Afrique de l'Ouest, sans accès à la mer. Sur environ 274 200 km², il est entouré par le Mali, le Niger, le Bénin, le Togo, le Ghana et la Côte d'Ivoire.\n\n" +
      "Le pays est organisé en treize régions administratives autour de la capitale, Ouagadougou, au centre du territoire. Son enclavement, partagé avec le Mali et le Niger, pèse lourdement sur son commerce extérieur, dépendant des ports du golfe de Guinée (Abidjan, Téma, Lomé, Cotonou) pour ses importations et exportations.\n\n" +
      "#### 2. Le milieu\n" +
      "C'est un vaste plateau sahélien, au climat tropical sec : le nord est aride, le sud un peu plus arrosé. Trois grands cours d'eau le traversent (le Mouhoun ou Volta noire, le Nakambé, le Nazinon). Le pays est exposé à la désertification et, depuis quelques années, à l'insécurité liée au terrorisme dans le nord.\n\n" +
      "Le relief burkinabè est globalement plat, sans grand massif montagneux, dominé par un plateau latéritique peu élevé. Le sud-ouest, plus arrosé, concentre l'essentiel des terres cultivables et des réserves de faune, comme le parc national du W, partagé avec le Niger et le Bénin.",
      },
      {
        id: "course-geographie-09-burkina-faso-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Le Burkina Faso compte environ 23 millions d'habitants (2024).\n\n" +
      "La population est jeune et majoritairement rurale, même si l'insécurité dans le nord a provoqué depuis 2019 des déplacements internes massifs vers les grandes villes, en premier lieu Ouagadougou et Bobo-Dioulasso, deuxième ville du pays.\n\n" +
      "#### 2. Société\n" +
      "Le peuple mossi est majoritaire, aux côtés des Peuls, Gourmantché, Bobo et d'autres. Le français est officiel, le mooré très parlé. L'islam est majoritaire, avec des chrétiens et des religions traditionnelles.\n\n" +
      "Les Mossis, historiquement organisés autour de royaumes dont celui de Ouagadougou, dont le souverain porte toujours le titre de Moogho Naaba, forment le socle culturel du centre du pays. Les Peuls, éleveurs souvent transhumants, et les Bobo, à l'ouest, complètent cette mosaïque, dans un pays où les identités régionales restent fortes malgré la crise sécuritaire.",
      },
      {
        id: "course-geographie-09-burkina-faso-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'or est devenu la première exportation (le pays est l'un des grands producteurs d'Afrique), aux côtés du coton (surnommé « l'or blanc ») et de l'élevage. L'insécurité fragilise fortement l'économie.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : transition militaire. Chef de l'État (2026) : le capitaine Ibrahim Traoré, au pouvoir depuis septembre 2022. Le Burkina Faso a quitté la CEDEAO (officialisé en janvier 2025) et forme, avec le Mali et le Niger, l'Alliance des États du Sahel (AES). Monnaie : le franc CFA (XOF). Devise nationale : « Unité, Progrès, Justice ».\n\n" +
      "Le pays, indépendant de la France depuis le 5 août 1960 sous le nom de Haute-Volta, l'a rebaptisé Burkina Faso en 1984 sous la présidence du révolutionnaire panafricaniste Thomas Sankara, avant que celui-ci ne soit renversé et assassiné en 1987.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Ouagadougou. Le pays abrite les ruines de Loropéni (UNESCO) et accueille le FESPACO, plus grand festival de cinéma d'Afrique. Il garde la mémoire de Thomas Sankara. Le nom « Burkina Faso » signifie « la patrie des hommes intègres ».",
      },
    ],
    quiz: [
      {
        id: "course-geographie-09-burkina-faso-quiz-1",
        question: "Le Burkina Faso a-t-il un accès à la mer ?",
        options: ["Oui, sur l'Atlantique", "Non, il est enclavé", "Oui, sur la Méditerranée", "Oui, sur l'océan Indien"],
        correctIndex: 1,
        explanation: "Le Burkina Faso est un pays enclavé, entièrement entouré de terres.",
      },
      {
        id: "course-geographie-09-burkina-faso-quiz-2",
        question: "Quelle est aujourd'hui la principale ressource d'exportation du Burkina Faso ?",
        options: ["L'or", "Le pétrole", "Le cacao", "Les diamants"],
        correctIndex: 0,
        explanation: "L'or est devenu la première exportation du pays, devant le coton.",
      },
      {
        id: "course-geographie-09-burkina-faso-quiz-3",
        question: "Quelle est la capitale du Burkina Faso ?",
        options: ["Bobo-Dioulasso", "Ouagadougou", "Koudougou", "Banfora"],
        correctIndex: 1,
        explanation: "Ouagadougou est la capitale et la plus grande ville du pays.",
      },
      {
        id: "course-geographie-09-burkina-faso-quiz-4",
        question: "Que signifie le nom « Burkina Faso » ?",
        options: ["Le pays du fleuve", "La patrie des hommes intègres", "La terre de l'or", "Le royaume du soleil"],
        correctIndex: 1,
        explanation: "Le nom, adopté en 1984 sous Thomas Sankara, signifie « la patrie des hommes intègres ».",
      },
      {
        id: "course-geographie-09-burkina-faso-quiz-5",
        question: "Avec le Mali et le Niger, le Burkina Faso forme quelle alliance ?",
        options: ["L'Union du Maghreb", "L'Alliance des États du Sahel (AES)", "La Communauté d'Afrique de l'Est", "La SADC"],
        correctIndex: 1,
        explanation: "Après avoir quitté la CEDEAO, les trois pays sahéliens ont formé l'Alliance des États du Sahel.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Cap-Vert est un archipel de dix îles volcaniques au milieu de l'océan Atlantique, à environ 570 km à l'ouest du Sénégal. Petit par la taille (environ 4 000 km²), il n'a aucune frontière terrestre.\n\n" +
      "L'archipel se divise en deux groupes : les îles du Vent (Barlavento) au nord, dont Santo Antão et Sal, et les îles du Sous-le-Vent (Sotavento) au sud, dont Santiago, la plus peuplée, et Fogo. Chaque île forme une petite économie et une identité culturelle propres, malgré la petite taille de l'ensemble.\n\n" +
      "#### 2. Le milieu\n" +
      "Les îles sont volcaniques : le Pico do Fogo, volcan encore actif, culmine à environ 2 829 m. Le climat est sec, de type sahélien océanique, et l'eau douce est rare. Certaines îles sont montagneuses (Santo Antão), d'autres plates et sableuses (Sal, Boa Vista) avec de belles plages.\n\n" +
      "Cette aridité chronique, aggravée par des cycles réguliers de sécheresse, a longtemps rendu l'agriculture vivrière précaire et poussé une partie de la population à émigrer. Le relief volcanique et montagneux de certaines îles crée en revanche des microclimats plus humides en altitude, propices à de petites cultures en terrasses.",
      },
      {
        id: "course-geographie-10-cap-vert-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Le Cap-Vert compte environ 525 000 habitants (2024) ; fait notable, sa diaspora est plus nombreuse que la population résidente.\n\n" +
      "Cette diaspora, installée notamment aux États-Unis, au Portugal, en France et aux Pays-Bas, entretient des liens économiques et culturels étroits avec l'archipel, à travers les transferts d'argent et un tourisme de retour. À l'intérieur du pays, la population se concentre surtout à Praia et sur l'île de Santiago.\n\n" +
      "#### 2. Société\n" +
      "La population est créole, née du métissage entre Africains et Portugais. Le portugais est la langue officielle, le créole capverdien la langue du quotidien. Le christianisme est majoritaire. Le pays est célèbre pour sa musique, la morna, popularisée par Cesária Évora.\n\n" +
      "Cette identité créole, forgée dès la colonisation portugaise à partir du XVe siècle par le brassage entre colons et esclaves africains, fait du Cap-Vert un cas particulier en Afrique de l'Ouest : ni tout à fait africain, ni tout à fait lusophone au sens strict, mais un carrefour culturel atlantique à part entière.",
      },
      {
        id: "course-geographie-10-cap-vert-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "Pauvre en ressources naturelles, le Cap-Vert vit surtout du tourisme (plages de Sal et Boa Vista), des services, de la pêche et des transferts d'argent de sa diaspora.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république (démocratie stable et reconnue). Chef de l'État (2026) : le président José Maria Neves ; Premier ministre Ulisses Correia e Silva. Monnaie : l'escudo capverdien (CVE). Devise nationale : « Unité, Travail, Progrès ».\n\n" +
      "Le Cap-Vert est indépendant du Portugal depuis le 5 juillet 1975. Membre de l'Union africaine et de la CEDEAO, il fait figure d'exception régionale par la stabilité de ses institutions démocratiques depuis l'instauration du multipartisme en 1990.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Praia (sur l'île de Santiago). Cidade Velha, première ville coloniale européenne bâtie sous les tropiques, est classée à l'UNESCO, tout comme la morna au patrimoine immatériel. Le volcan de Fogo est l'un des symboles de l'archipel.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-10-cap-vert-quiz-1",
        question: "Le Cap-Vert est géographiquement…",
        options: ["Un pays enclavé", "Un archipel d'îles", "Une péninsule", "Un désert continental"],
        correctIndex: 1,
        explanation: "Le Cap-Vert est un archipel de dix îles volcaniques dans l'Atlantique.",
      },
      {
        id: "course-geographie-10-cap-vert-quiz-2",
        question: "Dans quel océan se trouve le Cap-Vert ?",
        options: ["L'océan Indien", "L'océan Atlantique", "L'océan Pacifique", "La mer Méditerranée"],
        correctIndex: 1,
        explanation: "L'archipel se situe dans l'Atlantique, au large des côtes sénégalaises.",
      },
      {
        id: "course-geographie-10-cap-vert-quiz-3",
        question: "Quelle est la principale activité économique du Cap-Vert ?",
        options: ["L'extraction pétrolière", "Le tourisme", "L'industrie automobile", "L'exploitation minière"],
        correctIndex: 1,
        explanation: "Le tourisme, notamment balnéaire, est le moteur de l'économie capverdienne.",
      },
      {
        id: "course-geographie-10-cap-vert-quiz-4",
        question: "Quelle est la langue officielle du Cap-Vert ?",
        options: ["Le français", "Le portugais", "L'espagnol", "L'anglais"],
        correctIndex: 1,
        explanation: "Ancienne colonie portugaise, le Cap-Vert a le portugais pour langue officielle ; le créole est parlé au quotidien.",
      },
      {
        id: "course-geographie-10-cap-vert-quiz-5",
        question: "Quelle est la capitale du Cap-Vert ?",
        options: ["Mindelo", "Praia", "Sal Rei", "Assomada"],
        correctIndex: 1,
        explanation: "Praia, sur l'île de Santiago, est la capitale du pays.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "La Côte d'Ivoire s'ouvre sur le golfe de Guinée, avec une façade atlantique au sud. Sur environ 322 500 km², elle est bordée par le Liberia, la Guinée, le Mali, le Burkina Faso et le Ghana.\n\n" +
      "Le pays est organisé en treize districts et une trentaine de régions. Abidjan, sur la lagune Ébrié, en est de loin la plus grande ville et le poumon économique, tandis que Yamoussoukro, plus au centre, est la capitale politique depuis 1983.\n\n" +
      "#### 2. Le milieu\n" +
      "Le sud est couvert de forêt tropicale humide, le nord de savane. Le climat est équatorial au sud, plus sec au nord. Le littoral est bordé de lagunes, et les parcs de Taï et de la Comoé (UNESCO) protègent une riche biodiversité.\n\n" +
      "Le relief est globalement peu élevé, à l'exception des monts Nimba et Man à l'extrême ouest, à la frontière guinéo-libérienne, qui portent une forêt montagnarde d'une grande richesse biologique. La déforestation liée à l'expansion des cultures de cacao et de café a toutefois fortement réduit le couvert forestier original du sud du pays.",
      },
      {
        id: "course-geographie-11-cote-divoire-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "La Côte d'Ivoire compte environ 30 millions d'habitants (2024), avec une forte immigration venue des pays voisins.\n\n" +
      "Cette immigration, en particulier depuis le Burkina Faso, le Mali et la Guinée, attirée historiquement par les plantations de cacao et de café, fait de la Côte d'Ivoire l'un des pays les plus cosmopolites d'Afrique de l'Ouest ; Abidjan, mégapole de plusieurs millions d'habitants, en est le principal foyer urbain.\n\n" +
      "#### 2. Société\n" +
      "C'est une mosaïque d'une soixantaine de groupes (Akan, Baoulé, Bété, Sénoufo, Malinké…). Le français est la langue officielle. Christianisme, islam et religions traditionnelles cohabitent.\n\n" +
      "Les Akan (dont les Baoulé) dominent au centre et à l'est, les Krou (dont les Bété) au sud-ouest, les Mandé au nord-ouest et les Voltaïques (dont les Sénoufo) au nord. Cette diversité régionale et religieuse, conjuguée à la question de la nationalité des populations d'origine étrangère, a nourri des tensions politiques marquées depuis les années 1990, jusqu'à la crise post-électorale de 2010-2011.",
      },
      {
        id: "course-geographie-11-cote-divoire-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "La Côte d'Ivoire est le premier producteur mondial de cacao, mais aussi un grand producteur de café, d'hévéa (caoutchouc), d'anacarde et d'huile de palme. Le port d'Abidjan et une économie diversifiée en font la puissance de l'UEMOA.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Alassane Ouattara, réélu en octobre 2025 pour un quatrième mandat. Monnaie : le franc CFA (XOF). Devise nationale : « Union, Discipline, Travail ».\n\n" +
      "Le pays est indépendant de la France depuis le 7 août 1960, sous la présidence fondatrice de Félix Houphouët-Boigny jusqu'en 1993. Membre de l'UEMOA et de la CEDEAO, il en est aujourd'hui la première économie francophone d'Afrique de l'Ouest.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale politique : Yamoussoukro, où se dresse la basilique Notre-Dame-de-la-Paix, l'une des plus grandes églises du monde ; Abidjan est la capitale économique. La ville historique de Grand-Bassam est classée à l'UNESCO.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-11-cote-divoire-quiz-1",
        question: "La Côte d'Ivoire est le premier producteur mondial de quoi ?",
        options: ["De cacao", "De pétrole", "De blé", "De coton"],
        correctIndex: 0,
        explanation: "La Côte d'Ivoire fournit à elle seule une grande partie du cacao mondial.",
      },
      {
        id: "course-geographie-11-cote-divoire-quiz-2",
        question: "Quelle est la capitale politique de la Côte d'Ivoire ?",
        options: ["Abidjan", "Yamoussoukro", "Bouaké", "San-Pédro"],
        correctIndex: 1,
        explanation: "Yamoussoukro est la capitale politique ; Abidjan reste la capitale économique et la plus grande ville.",
      },
      {
        id: "course-geographie-11-cote-divoire-quiz-3",
        question: "Quelle ville est la capitale économique de la Côte d'Ivoire ?",
        options: ["Abidjan", "Korhogo", "Daloa", "Man"],
        correctIndex: 0,
        explanation: "Abidjan, avec son grand port, est le cœur économique du pays.",
      },
      {
        id: "course-geographie-11-cote-divoire-quiz-4",
        question: "Quelle monnaie utilise la Côte d'Ivoire ?",
        options: ["Le franc CFA", "Le cedi", "Le naira", "Le leone"],
        correctIndex: 0,
        explanation: "La Côte d'Ivoire appartient à la zone franc CFA d'Afrique de l'Ouest (UEMOA).",
      },
      {
        id: "course-geographie-11-cote-divoire-quiz-5",
        question: "De quoi le sud de la Côte d'Ivoire est-il principalement couvert ?",
        options: ["De désert", "De forêt tropicale", "De toundra", "De steppe"],
        correctIndex: 1,
        explanation: "Le sud du pays est couvert de forêt tropicale humide, tandis que le nord est une savane.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "La Gambie est le plus petit pays d'Afrique continentale (environ 11 300 km²). C'est une étroite bande de terre qui suit de part et d'autre le fleuve Gambie, presque entièrement enclavée dans le Sénégal, sauf par sa courte façade atlantique.\n\n" +
      "Cette forme singulière, héritée du tracé colonial britannique calqué sur le cours du fleuve, fait de la Gambie une enclave presque totale à l'intérieur du Sénégal, avec lequel elle entretient des liens économiques et culturels très étroits malgré la frontière.\n\n" +
      "#### 2. Le milieu\n" +
      "Tout le pays s'organise autour du fleuve Gambie, navigable, qui en est l'axe de vie et de transport. Le climat est tropical ; on y trouve savane et mangroves le long du fleuve.\n\n" +
      "Le fleuve, navigable sur presque toute sa longueur en territoire gambien, a longtemps servi de voie de pénétration commerciale vers l'intérieur du continent, d'abord pour le commerce précolonial puis pour la traite négrière. Ses rives basses, couvertes de mangroves, abritent une faune abondante, notamment des oiseaux et des primates, protégée dans plusieurs réserves.",
      },
      {
        id: "course-geographie-12-gambie-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "La Gambie compte environ 2,7 millions d'habitants (2024).\n\n" +
      "Malgré sa petite taille, le pays affiche l'une des densités de population les plus élevées d'Afrique continentale : la population se concentre surtout autour de l'estuaire, entre Banjul et la ville voisine de Serekunda, de loin la plus peuplée du pays.\n\n" +
      "#### 2. Société\n" +
      "On y trouve les mêmes peuples que dans la région : Mandingues, Peuls, Wolofs, Diolas… L'anglais est la langue officielle (ancienne colonie britannique) et l'islam est très majoritaire. Le pays est surnommé la « Smiling Coast » (la côte souriante).\n\n" +
      "Cette proximité culturelle avec le Sénégal environnant, malgré des langues coloniales différentes (anglais contre français), se traduit par une intense circulation des personnes, des biens et des familles de part et d'autre de la frontière. Le surnom de « Smiling Coast » reflète la réputation d'accueil et de convivialité du pays, un atout revendiqué pour son tourisme.",
      },
      {
        id: "course-geographie-12-gambie-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'économie repose sur l'agriculture (l'arachide est la principale exportation), la pêche et surtout le tourisme balnéaire, qui attire des Européens durant l'hiver ; les transferts de la diaspora comptent aussi.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Adama Barrow, président depuis 2017. Monnaie : le dalasi (GMD). Devise nationale : « Progress, Peace, Prosperity » (Progrès, Paix, Prospérité).\n\n" +
      "La Gambie est indépendante du Royaume-Uni depuis le 18 février 1965. Membre du Commonwealth (dont elle s'est brièvement retirée entre 2013 et 2017 sous la présidence de Yahya Jammeh) et de la CEDEAO, elle reste l'un des rares pays anglophones enclavés dans un ensemble francophone.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Banjul. L'île de Kunta Kinteh (ancienne James Island, UNESCO), liée au roman Racines d'Alex Haley, rappelle la traite négrière. Les cercles mégalithiques de Sénégambie (UNESCO) sont partagés avec le Sénégal.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-12-gambie-quiz-1",
        question: "La Gambie est le plus petit pays de quel ensemble ?",
        options: ["Du monde", "De l'Afrique continentale", "De l'Afrique australe", "Du Maghreb"],
        correctIndex: 1,
        explanation: "Avec environ 11 300 km², la Gambie est le plus petit pays du continent africain.",
      },
      {
        id: "course-geographie-12-gambie-quiz-2",
        question: "Autour de quel élément géographique le pays est-il entièrement organisé ?",
        options: ["Le fleuve Gambie", "Un grand lac", "Une chaîne de montagnes", "Un volcan"],
        correctIndex: 0,
        explanation: "La Gambie n'est qu'un long ruban de terre suivant le fleuve du même nom.",
      },
      {
        id: "course-geographie-12-gambie-quiz-3",
        question: "Quel pays entoure presque entièrement la Gambie ?",
        options: ["La Guinée", "Le Sénégal", "Le Mali", "La Mauritanie"],
        correctIndex: 1,
        explanation: "La Gambie est enclavée dans le Sénégal, sauf par sa façade atlantique.",
      },
      {
        id: "course-geographie-12-gambie-quiz-4",
        question: "Quelle est la langue officielle de la Gambie ?",
        options: ["Le français", "L'anglais", "Le portugais", "L'arabe"],
        correctIndex: 1,
        explanation: "Ancienne colonie britannique, la Gambie a l'anglais pour langue officielle, contrairement à son voisin sénégalais.",
      },
      {
        id: "course-geographie-12-gambie-quiz-5",
        question: "Quelle est la capitale de la Gambie ?",
        options: ["Serekunda", "Banjul", "Brikama", "Farafenni"],
        correctIndex: 1,
        explanation: "Banjul, à l'embouchure du fleuve, est la capitale du pays.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Ghana borde le golfe de Guinée, avec une façade atlantique au sud. Sur environ 238 500 km², il est entouré par la Côte d'Ivoire, le Burkina Faso et le Togo. Il est traversé par le méridien de Greenwich, tout près de l'équateur.\n\n" +
      "Le pays est découpé en seize régions, dont celle du Grand Accra, autour de la capitale, forme le principal pôle urbain et économique du pays. Le Ghana revendique une position symbolique particulière : proche à la fois de l'équateur et du méridien d'origine, il se présente souvent comme situé « au centre du monde ».\n\n" +
      "#### 2. Le milieu\n" +
      "Le sud est forestier, le nord couvert de savane. Le pays abrite le lac Volta, l'un des plus grands lacs artificiels du monde, créé par le barrage d'Akosombo. Le climat est tropical.\n\n" +
      "Le lac Volta, qui s'étend sur une grande partie du pays du sud au centre, fournit l'essentiel de l'électricité hydroélectrique du Ghana et sert aussi de voie de transport intérieur. Le littoral, ponctué de lagunes et d'anciens forts coloniaux, cède progressivement la place, vers l'intérieur, à la forêt puis à la savane soudanienne du nord.",
      },
      {
        id: "course-geographie-13-ghana-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Le Ghana compte environ 34 millions d'habitants (2024).\n\n" +
      "La population est jeune et de plus en plus urbaine, concentrée dans le sud du pays autour d'Accra et de Kumasi, capitale historique du royaume ashanti. Le nord, plus sec et moins industrialisé, reste davantage rural et connaît une migration interne vers le sud.\n\n" +
      "#### 2. Société\n" +
      "Les peuples akan (Ashantis, Fantis) sont les plus nombreux, aux côtés des Ewe, Ga et Dagomba. L'anglais est la langue officielle. Le christianisme domine au sud, l'islam au nord.\n\n" +
      "Le royaume ashanti, dont le souverain (l'Asantehene) conserve aujourd'hui encore un rôle cérémoniel et social important depuis son trône d'or, structure fortement l'identité culturelle du centre du pays. Le Ghana est aussi connu pour son tissu traditionnel kente, tissé à l'origine par les Ashantis et les Ewe, devenu un symbole de fierté culturelle bien au-delà de ses frontières.",
      },
      {
        id: "course-geographie-13-ghana-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "Le Ghana est l'un des premiers producteurs d'or d'Afrique et le deuxième producteur mondial de cacao. Il exploite aussi du pétrole offshore. Son économie est relativement diversifiée et dynamique.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république (démocratie stable, connue pour ses alternances pacifiques). Chef de l'État (2026) : John Dramani Mahama, élu en décembre 2024. Monnaie : le cedi ghanéen (GHS). Devise nationale : « Freedom and Justice » (Liberté et Justice).\n\n" +
      "Le Ghana, ancienne colonie britannique de la « Gold Coast », est indépendant depuis le 6 mars 1957 sous la direction de Kwame Nkrumah, figure majeure du panafricanisme et premier président du pays. Membre fondateur de l'Union africaine (alors OUA, fondée en 1963) et de la CEDEAO, il est aujourd'hui considéré comme l'une des démocraties les plus stables du continent.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Accra. Les forts et châteaux de la traite négrière (Cape Coast, Elmina) sont classés à l'UNESCO. Le Ghana est l'héritier de l'empire ashanti et fut, avec Kwame Nkrumah, le premier pays d'Afrique subsaharienne à devenir indépendant, en 1957.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-13-ghana-quiz-1",
        question: "Le Ghana est l'un des premiers producteurs africains de quel métal précieux ?",
        options: ["L'or", "L'argent", "Le platine", "Le cuivre"],
        correctIndex: 0,
        explanation: "Ancienne « Gold Coast » (Côte de l'Or), le Ghana est un grand producteur d'or.",
      },
      {
        id: "course-geographie-13-ghana-quiz-2",
        question: "Comment s'appelle le grand lac artificiel du Ghana ?",
        options: ["Le lac Tchad", "Le lac Volta", "Le lac Victoria", "Le lac Kariba"],
        correctIndex: 1,
        explanation: "Le lac Volta, créé par le barrage d'Akosombo, est l'un des plus vastes lacs artificiels du monde.",
      },
      {
        id: "course-geographie-13-ghana-quiz-3",
        question: "Quelle est la langue officielle du Ghana ?",
        options: ["Le français", "L'anglais", "Le portugais", "L'arabe"],
        correctIndex: 1,
        explanation: "Ancienne colonie britannique, le Ghana a l'anglais pour langue officielle.",
      },
      {
        id: "course-geographie-13-ghana-quiz-4",
        question: "Quelle est la capitale du Ghana ?",
        options: ["Kumasi", "Accra", "Tamale", "Takoradi"],
        correctIndex: 1,
        explanation: "Accra, sur la côte atlantique, est la capitale du pays.",
      },
      {
        id: "course-geographie-13-ghana-quiz-5",
        question: "En 1957, le Ghana est devenu le premier pays indépendant de quelle région ?",
        options: ["D'Afrique du Nord", "D'Afrique subsaharienne", "D'Afrique australe", "D'Afrique de l'Est"],
        correctIndex: 1,
        explanation: "Sous Kwame Nkrumah, le Ghana fut le premier État d'Afrique subsaharienne à accéder à l'indépendance.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "La Guinée (Guinée-Conakry) donne sur l'océan Atlantique. Sur environ 246 000 km², elle est bordée par la Guinée-Bissau, le Sénégal, le Mali, la Côte d'Ivoire, le Liberia et la Sierra Leone.\n\n" +
      "Le pays est découpé en huit régions administratives autour de la capitale, Conakry, bâtie sur une presqu'île de la côte atlantique. Sa forme en croissant, de la côte au Fouta-Djalon puis à la Haute-Guinée intérieure, en fait un carrefour entre plusieurs aires géographiques ouest-africaines.\n\n" +
      "#### 2. Le milieu\n" +
      "Le pays se divise en quatre régions naturelles : la Basse-Guinée côtière, la Moyenne-Guinée du Fouta-Djalon, la Haute-Guinée de savane et la Guinée forestière. Le massif du Fouta-Djalon est le « château d'eau » de l'Afrique de l'Ouest : c'est là que naissent le Niger, le Sénégal et la Gambie. Le climat est tropical humide.\n\n" +
      "La Guinée forestière, au sud-est, prolonge la forêt guinéenne partagée avec le Liberia et la Côte d'Ivoire, l'un des points chauds de biodiversité les plus riches d'Afrique de l'Ouest. Le mont Nimba, à cheval sur les trois pays, en est le sommet emblématique et un site UNESCO.",
      },
      {
        id: "course-geographie-14-guinee-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "La Guinée compte environ 14 millions d'habitants (2024).\n\n" +
      "La population se répartit entre les quatre régions naturelles du pays, avec une forte concentration à Conakry, dont la croissance urbaine rapide contraste avec le peuplement plus dispersé du Fouta-Djalon et de la Guinée forestière. L'exode rural vers la capitale reste un phénomène marquant depuis l'indépendance.\n\n" +
      "#### 2. Société\n" +
      "Les principaux peuples sont les Peuls (Fouta-Djalon), les Malinkés et les Soussous. Le français est la langue officielle et l'islam très majoritaire.\n\n" +
      "Les Peuls du Fouta-Djalon, éleveurs et commerçants de tradition, les Malinkés de Haute-Guinée, héritiers de l'ancien empire du Mali, et les Soussous de la côte forment les trois grands ensembles culturels du pays, auxquels s'ajoutent de nombreux peuples forestiers au sud-est (Kissi, Toma, Guerzé). Cette diversité régionale a souvent pesé sur la vie politique guinéenne depuis l'indépendance.",
      },
      {
        id: "course-geographie-14-guinee-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "La Guinée détient les plus grandes réserves mondiales de bauxite (minerai de l'aluminium) et en est un premier exportateur. Elle possède aussi de l'or, du diamant et d'énormes gisements de fer (mont Simandou), ainsi qu'un fort potentiel hydroélectrique.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république (Ve République). Chef de l'État (2026) : le général Mamadi Doumbouya, arrivé au pouvoir par un coup d'État en 2021, puis élu président en décembre 2025 et investi en janvier 2026. Monnaie : le franc guinéen (GNF). Devise nationale : « Travail, Justice, Solidarité ».\n\n" +
      "La Guinée est indépendante de la France depuis le 2 octobre 1958, seul territoire de l'Afrique-Occidentale française à avoir voté « non » au référendum proposé par le général de Gaulle, sous l'impulsion de Sékou Touré, qui en devint le premier président. Membre de l'Union africaine et de la CEDEAO, le pays a depuis connu plusieurs coups d'État.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Conakry. Le massif du Fouta-Djalon et la réserve du mont Nimba (UNESCO, à la frontière) sont des joyaux naturels. La Guinée est la patrie de Sékou Touré, qui dit « non » à la France en 1958 pour obtenir l'indépendance immédiate.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-14-guinee-quiz-1",
        question: "Le massif du Fouta-Djalon, en Guinée, est surnommé le…",
        options: ["« Château d'eau de l'Afrique de l'Ouest »", "« Toit de l'Afrique »", "« Grenier de l'Afrique »", "« Poumon de l'Afrique »"],
        correctIndex: 0,
        explanation: "De nombreux grands fleuves prennent leur source dans le Fouta-Djalon, d'où ce surnom.",
      },
      {
        id: "course-geographie-14-guinee-quiz-2",
        question: "Quels grands fleuves prennent leur source en Guinée ?",
        options: ["Le Congo et l'Oubangui", "Le Niger, le Sénégal et la Gambie", "Le Nil et le Zambèze", "L'Orange et le Limpopo"],
        correctIndex: 1,
        explanation: "Le Niger, le Sénégal et la Gambie naissent tous dans le massif du Fouta-Djalon.",
      },
      {
        id: "course-geographie-14-guinee-quiz-3",
        question: "La Guinée possède les plus grandes réserves mondiales de quel minerai ?",
        options: ["Le pétrole", "La bauxite", "Le charbon", "L'uranium"],
        correctIndex: 1,
        explanation: "La bauxite, dont on tire l'aluminium, est la grande richesse minière de la Guinée.",
      },
      {
        id: "course-geographie-14-guinee-quiz-4",
        question: "Quelle est la capitale de la Guinée ?",
        options: ["Kankan", "Conakry", "Labé", "Nzérékoré"],
        correctIndex: 1,
        explanation: "Conakry, sur la côte atlantique, est la capitale du pays.",
      },
      {
        id: "course-geographie-14-guinee-quiz-5",
        question: "Quelle monnaie utilise la Guinée ?",
        options: ["Le franc CFA", "Le franc guinéen", "Le cedi", "Le dalasi"],
        correctIndex: 1,
        explanation: "Contrairement à plusieurs de ses voisins, la Guinée n'utilise pas le franc CFA mais le franc guinéen.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "La Guinée-Bissau borde l'Atlantique, en Afrique de l'Ouest. Sur environ 36 100 km², elle est encadrée par le Sénégal au nord et la Guinée au sud-est, et comprend l'archipel des Bijagós (une trentaine d'îles).\n\n" +
      "C'est l'un des plus petits pays du continent, découpé en huit régions et un secteur autonome autour de Bissau, la capitale. Sa taille modeste et son relief très bas en font un pays particulièrement exposé à la montée du niveau de la mer.\n\n" +
      "#### 2. Le milieu\n" +
      "La côte est très découpée, faite d'estuaires et de mangroves, sur des terres basses. L'archipel des Bijagós, réserve de biosphère de l'UNESCO, abrite une faune remarquable (dont des hippopotames marins). Le climat est tropical humide.\n\n" +
      "Les mangroves et les rizières côtières occupent une place centrale dans le paysage et dans l'économie vivrière du pays. Les îles Bijagós, difficiles d'accès, ont conservé des pratiques traditionnelles fortes et une biodiversité marine remarquable, notamment des tortues de mer et des lamantins.",
      },
      {
        id: "course-geographie-15-guinee-bissau-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "La Guinée-Bissau compte environ 2,1 millions d'habitants (2024).\n\n" +
      "La population reste majoritairement rurale, concentrée sur le continent plutôt que sur les îles Bijagós, peu peuplées. Bissau, la capitale, concentre l'essentiel de l'activité urbaine et administrative du pays.\n\n" +
      "#### 2. Société\n" +
      "On y trouve les peuples balante, peul, mandingue, papel… Le portugais est la langue officielle, mais le créole bissau-guinéen est le plus parlé (ancienne colonie portugaise). Islam, religions traditionnelles et christianisme cohabitent.\n\n" +
      "Les Balantes, principal groupe du pays, sont surtout riziculteurs et pratiquent largement des religions traditionnelles ; les Peuls et Mandingues du nord et de l'est sont majoritairement musulmans. Cette diversité ethnique et religieuse cohabite dans un pays où l'armée a longtemps joué un rôle politique central, à l'origine d'une instabilité chronique depuis l'indépendance.",
      },
      {
        id: "course-geographie-15-guinee-bissau-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'économie repose sur l'agriculture, surtout la noix de cajou (anacarde), première exportation dont le pays est l'un des plus gros producteurs, ainsi que la pêche et le riz. C'est l'une des économies les plus pauvres, fragilisée par l'instabilité et le narcotrafic.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : transition, à la suite du coup d'État de novembre 2025. Chef de l'État (2026) : le général Horta N'Tam, président de la transition (investi en novembre 2025 après la destitution d'Umaro Sissoco Embaló) ; des élections sont annoncées pour décembre 2026. Monnaie : le franc CFA (XOF). Devise nationale : « Unité, Lutte, Progrès ».\n\n" +
      "La Guinée-Bissau est indépendante du Portugal depuis le 24 septembre 1973 (reconnue en 1974), au terme d'une guerre de libération menée par Amílcar Cabral, assassiné peu avant. Membre de l'Union africaine et de la CEDEAO, le pays a connu depuis l'indépendance de très nombreux coups d'État et tentatives de coups d'État.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Bissau. L'archipel des Bijagós est le grand trésor naturel du pays. La Guinée-Bissau garde la mémoire de la lutte de libération menée par Amílcar Cabral contre le Portugal.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-15-guinee-bissau-quiz-1",
        question: "Quel archipel appartient à la Guinée-Bissau ?",
        options: ["Les Canaries", "Les Bijagós", "Les Seychelles", "Zanzibar"],
        correctIndex: 1,
        explanation: "L'archipel des Bijagós, réserve de biosphère de l'UNESCO, fait partie de la Guinée-Bissau.",
      },
      {
        id: "course-geographie-15-guinee-bissau-quiz-2",
        question: "Quelle est la principale exportation agricole de la Guinée-Bissau ?",
        options: ["Le cacao", "La noix de cajou", "Le café", "Le coton"],
        correctIndex: 1,
        explanation: "La noix de cajou (anacarde) est de loin la première exportation du pays.",
      },
      {
        id: "course-geographie-15-guinee-bissau-quiz-3",
        question: "Quelle est la langue officielle de la Guinée-Bissau ?",
        options: ["Le français", "Le portugais", "L'anglais", "L'espagnol"],
        correctIndex: 1,
        explanation: "Ancienne colonie portugaise, la Guinée-Bissau a le portugais pour langue officielle ; le créole est le plus parlé.",
      },
      {
        id: "course-geographie-15-guinee-bissau-quiz-4",
        question: "Quelle est la capitale de la Guinée-Bissau ?",
        options: ["Bissau", "Bafatá", "Gabú", "Cacheu"],
        correctIndex: 0,
        explanation: "Bissau donne son nom au pays et en est la capitale.",
      },
      {
        id: "course-geographie-15-guinee-bissau-quiz-5",
        question: "Quel pays borde la Guinée-Bissau au nord ?",
        options: ["Le Sénégal", "Le Mali", "La Mauritanie", "Le Ghana"],
        correctIndex: 0,
        explanation: "La Guinée-Bissau a le Sénégal pour voisin au nord et la Guinée au sud-est.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Liberia borde l'Atlantique, en Afrique de l'Ouest. Sur environ 111 400 km², il est entouré par la Sierra Leone, la Guinée et la Côte d'Ivoire.\n\n" +
      "Le pays est découpé en quinze comtés, dont celui de Montserrado, autour de Monrovia, concentre l'essentiel de la population et de l'activité économique. Le tracé de ses frontières porte encore la marque de son histoire singulière de colonie de peuplement fondée au XIXe siècle.\n\n" +
      "#### 2. Le milieu\n" +
      "Le pays est couvert d'une dense forêt tropicale humide, vestige important de la forêt guinéenne (grande biodiversité), et connaît de très fortes pluies. Le climat est équatorial, la côte bordée de plaines.\n\n" +
      "Le Liberia conserve l'une des dernières grandes étendues de forêt primaire d'Afrique de l'Ouest, refuge pour des espèces menacées comme le chimpanzé ou l'hippopotame pygmée. Cette forêt, en partie protégée, reste toutefois soumise à la pression de l'exploitation du bois et de l'agriculture.",
      },
      {
        id: "course-geographie-16-liberia-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Le Liberia compte environ 5,4 millions d'habitants (2024).\n\n" +
      "La population, jeune, s'est fortement urbanisée pendant et après les guerres civiles, Monrovia ayant vu affluer des populations fuyant les combats dans les comtés de l'intérieur ; elle en reste aujourd'hui la ville de très loin la plus peuplée.\n\n" +
      "#### 2. Société\n" +
      "La population mêle des peuples autochtones (Kpelle, Bassa, Gio…) et les descendants des « Américo-Libériens », esclaves affranchis venus des États-Unis qui fondèrent le pays en 1847. L'anglais est la langue officielle ; le christianisme est majoritaire, avec une minorité musulmane.\n\n" +
      "Les Américo-Libériens, minoritaires en nombre, ont dominé la vie politique et économique du pays pendant plus d'un siècle après l'indépendance, une domination qui a nourri des tensions avec les peuples autochtones et compté parmi les causes profondes des guerres civiles des années 1990-2000.",
      },
      {
        id: "course-geographie-16-liberia-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'économie repose sur le caoutchouc (hévéa, avec les plantations historiques de Firestone), le minerai de fer, l'or, le diamant et le bois. Le Liberia possède aussi l'un des plus grands pavillons de complaisance du monde (immatriculation de navires). Deux guerres civiles (1989-2003) ont durablement affaibli le pays.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Joseph Boakai, président depuis janvier 2024. Monnaie : le dollar libérien (LRD). Devise nationale : « The love of liberty brought us here » (L'amour de la liberté nous a conduits ici).\n\n" +
      "Fondé en 1847 par la Société américaine de colonisation, le Liberia est la plus ancienne république d'Afrique. Membre de l'Union africaine et de la CEDEAO, il a mis en place, après les guerres civiles, une Commission Vérité et Réconciliation pour tenter de dépasser les divisions du passé.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Monrovia, nommée d'après le président américain James Monroe. Son drapeau ressemble à celui des États-Unis. Ellen Johnson Sirleaf, présidente de 2006 à 2018, fut la première femme élue chef d'État en Afrique et reçut le prix Nobel de la paix.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-16-liberia-quiz-1",
        question: "Le Liberia a été fondé en 1847 par…",
        options: ["Des colons britanniques", "Des esclaves afro-américains affranchis", "Des marchands portugais", "Des explorateurs français"],
        correctIndex: 1,
        explanation: "Des Afro-Américains affranchis fondèrent le Liberia, ce qui en fait la plus ancienne république d'Afrique.",
      },
      {
        id: "course-geographie-16-liberia-quiz-2",
        question: "Quelle est la capitale du Liberia ?",
        options: ["Monrovia", "Gbarnga", "Buchanan", "Kakata"],
        correctIndex: 0,
        explanation: "Monrovia, nommée d'après le président américain Monroe, est la capitale du pays.",
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
        explanation: "Avec ses bandes et son étoile, le drapeau libérien rappelle la bannière étoilée américaine.",
      },
      {
        id: "course-geographie-16-liberia-quiz-5",
        question: "Ellen Johnson Sirleaf fut la première femme à occuper quelle fonction en Afrique ?",
        options: ["Secrétaire générale de l'ONU", "Chef d'État élue", "Présidente de l'Union africaine", "Prix Nobel de littérature"],
        correctIndex: 1,
        explanation: "Élue en 2006, Ellen Johnson Sirleaf fut la première femme élue à la tête d'un État africain ; elle reçut le prix Nobel de la paix.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Mali est un grand pays enclavé d'Afrique de l'Ouest. Sur environ 1,24 million de km², il est bordé par l'Algérie, le Niger, le Burkina Faso, la Côte d'Ivoire, la Guinée, le Sénégal et la Mauritanie.\n\n" +
      "Le pays est organisé en dix régions et un district, celui de Bamako, la capitale. Cet enclavement, partagé avec plusieurs de ses voisins sahéliens, rend le Mali dépendant des ports du Sénégal et de la Côte d'Ivoire pour son commerce extérieur.\n\n" +
      "#### 2. Le milieu\n" +
      "Le nord est saharien (les deux tiers du pays), le centre sahélien, le sud plus arrosé de type soudanien. Le fleuve Niger est l'axe vital du pays et forme un vaste delta intérieur. Le Mali souffre de la désertification et, depuis quelques années, d'une forte insécurité au nord et au centre.\n\n" +
      "Le delta intérieur du Niger, vaste zone humide saisonnière, est une exception écologique majeure au milieu du Sahel : il nourrit pêche, riziculture et élevage transhumant pour des centaines de milliers de personnes. Plus au sud, la falaise de Bandiagara, en pays dogon, domine un plateau gréseux exceptionnel à la fois pour son paysage et pour le patrimoine culturel qu'il abrite.",
      },
      {
        id: "course-geographie-17-mali-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Le Mali compte environ 23 millions d'habitants (2024).\n\n" +
      "La population se concentre le long du fleuve Niger et dans le sud plus arrosé, autour de Bamako, Sikasso et Ségou, tandis que le nord saharien reste très faiblement peuplé, en particulier depuis que l'insécurité y a limité les activités économiques et les déplacements.\n\n" +
      "#### 2. Société\n" +
      "La société réunit Bambaras, Peuls, Songhaïs, Touaregs, Soninkés, Dogons… Le français est la langue officielle, le bambara très parlé. L'islam est très majoritaire.\n\n" +
      "Les Bambaras, majoritaires au centre-sud, les Peuls, éleveurs présents dans tout le pays, les Songhaïs et Touaregs du nord, et les Dogons du plateau de Bandiagara, connus pour leur cosmogonie et leur art, illustrent la grande diversité culturelle du Mali — une diversité que la crise sécuritaire du nord et du centre a mise à rude épreuve depuis 2012.",
      },
      {
        id: "course-geographie-17-mali-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'or est la grande ressource (le Mali est un important producteur africain), avec le coton et l'élevage. L'agriculture se concentre le long du Niger. L'insécurité fragilise l'ensemble de l'économie.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : transition militaire. Chef de l'État (2026) : le général Assimi Goïta, au pouvoir depuis 2021. Le Mali a quitté la CEDEAO (officialisé en janvier 2025) et forme, avec le Burkina Faso et le Niger, l'Alliance des États du Sahel (AES). Monnaie : le franc CFA (XOF). Devise nationale : « Un Peuple, Un But, Une Foi ».\n\n" +
      "Le pays est indépendant de la France depuis le 22 septembre 1960. Héritier de puissants empires précoloniaux (Ghana, Mali, Songhaï), il a connu depuis 2012 une crise sécuritaire persistante dans le nord et le centre, à l'origine de plusieurs coups d'État militaires.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Bamako. Les villes historiques de Tombouctou et Djenné (mosquées de terre, manuscrits, UNESCO) rappellent la grandeur des empires du Ghana, du Mali (Soundiata, Mansa Moussa) et Songhaï. La falaise de Bandiagara, en pays dogon, est un site naturel et culturel majeur.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-17-mali-quiz-1",
        question: "Quel grand fleuve traverse le Mali et y forme un delta intérieur ?",
        options: ["Le Sénégal", "Le Niger", "Le Congo", "La Volta"],
        correctIndex: 1,
        explanation: "Le fleuve Niger est l'axe vital du Mali ; son delta intérieur est une vaste zone humide.",
      },
      {
        id: "course-geographie-17-mali-quiz-2",
        question: "Quelle ville historique malienne, célèbre pour ses manuscrits, est classée à l'UNESCO ?",
        options: ["Tombouctou", "Le Cap", "Lagos", "Nairobi"],
        correctIndex: 0,
        explanation: "Tombouctou fut un grand centre de savoir islamique ; ses manuscrits et mosquées sont classés à l'UNESCO.",
      },
      {
        id: "course-geographie-17-mali-quiz-3",
        question: "Quelle est la principale ressource minière du Mali ?",
        options: ["Le pétrole", "L'or", "Le cuivre", "Le charbon"],
        correctIndex: 1,
        explanation: "Le Mali est l'un des grands producteurs d'or du continent africain.",
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
        explanation: "Les trois pays sahéliens ont créé l'Alliance des États du Sahel après leur retrait de la CEDEAO.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Niger est un grand pays enclavé d'Afrique de l'Ouest, l'un des plus vastes de la région (environ 1,27 million de km²). Il est bordé par l'Algérie, la Libye, le Tchad, le Nigeria, le Bénin, le Burkina Faso et le Mali.\n\n" +
      "Le pays compte huit régions autour de la capitale, Niamey, à l'extrême sud-ouest du territoire. Sa position à la charnière de l'Afrique du Nord et de l'Afrique de l'Ouest, avec des frontières partagées avec sept pays, en fait un carrefour aussi bien géographique que sécuritaire.\n\n" +
      "#### 2. Le milieu\n" +
      "Plus des trois quarts du territoire sont désertiques (Sahara, massif de l'Aïr, désert du Ténéré). Seule une frange sahélienne au sud est habitable, arrosée par le fleuve Niger au sud-ouest. Le climat est très chaud et aride, et le pays très exposé aux sécheresses et à la désertification.\n\n" +
      "Le massif volcanique de l'Aïr, îlot montagneux au cœur du Sahara nigérien, forme avec les dunes du Ténéré un ensemble classé à l'UNESCO, riche en gravures rupestres et en vestiges paléontologiques de dinosaures. Cette immensité désertique explique que l'essentiel de la vie du pays se concentre sur une bande sahélienne étroite au sud.",
      },
      {
        id: "course-geographie-18-niger-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Le Niger compte environ 26 à 27 millions d'habitants (2024) et connaît l'un des taux de natalité les plus élevés du monde.\n\n" +
      "Cette croissance démographique très rapide, combinée à un territoire largement désertique, concentre la population sur une frange sahélienne étroite, ce qui alimente une forte pression sur les terres cultivables et les ressources en eau.\n\n" +
      "#### 2. Société\n" +
      "Les Haoussas sont majoritaires, aux côtés des Zarma-Songhaïs, Touaregs, Peuls et Kanouris. Le français est officiel, le haoussa très parlé. L'islam est très majoritaire.\n\n" +
      "Les Haoussas, présents surtout dans le centre et l'est, partagent une langue et une culture communes avec leurs voisins du nord du Nigeria ; les Zarma-Songhaïs dominent autour du fleuve Niger et de Niamey ; Touaregs et Peuls, souvent nomades ou semi-nomades, occupent les marges sahariennes et sahéliennes du pays.",
      },
      {
        id: "course-geographie-18-niger-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "Le Niger est l'un des grands producteurs mondiaux d'uranium, et exploite aussi de l'or et du pétrole. L'agriculture et l'élevage vivriers dominent. C'est l'un des pays les plus pauvres du monde, très vulnérable aux sécheresses.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : transition militaire. Chef de l'État (2026) : le général Abdourahamane Tiani, au pouvoir après le coup d'État de juillet 2023. Le Niger a quitté la CEDEAO (officialisé en janvier 2025) et forme, avec le Mali et le Burkina Faso, l'Alliance des États du Sahel (AES). Monnaie : le franc CFA (XOF). Devise nationale : « Fraternité, Travail, Progrès ».\n\n" +
      "Le pays est indépendant de la France depuis le 3 août 1960. Membre de l'Union africaine, il a connu depuis l'indépendance de nombreuses transitions militaires, la dernière en date renversant en 2023 le président élu Mohamed Bazoum.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Niamey. Le désert du Ténéré et le massif de l'Aïr (réserves naturelles classées à l'UNESCO) sont d'immenses espaces sahariens. Les girafes de Kouré sont les dernières d'Afrique de l'Ouest, et le Sahara nigérien est un haut lieu de la paléontologie (dinosaures).",
      },
    ],
    quiz: [
      {
        id: "course-geographie-18-niger-quiz-1",
        question: "Quelle ressource minière fait la richesse du Niger ?",
        options: ["Le diamant", "L'uranium", "Le cuivre", "La bauxite"],
        correctIndex: 1,
        explanation: "Le Niger est l'un des grands producteurs mondiaux d'uranium, utilisé dans le nucléaire.",
      },
      {
        id: "course-geographie-18-niger-quiz-2",
        question: "Quel désert couvre la majeure partie du Niger ?",
        options: ["Le Kalahari", "Le Sahara", "Le Namib", "Le désert du Danakil"],
        correctIndex: 1,
        explanation: "Plus des trois quarts du Niger sont désertiques, dont le célèbre Ténéré.",
      },
      {
        id: "course-geographie-18-niger-quiz-3",
        question: "Quelle est la capitale du Niger ?",
        options: ["Zinder", "Niamey", "Maradi", "Agadez"],
        correctIndex: 1,
        explanation: "Niamey, sur le fleuve Niger, est la capitale du pays.",
      },
      {
        id: "course-geographie-18-niger-quiz-4",
        question: "Quel fleuve arrose le sud-ouest du Niger ?",
        options: ["Le fleuve Niger", "Le Nil", "Le Congo", "Le Sénégal"],
        correctIndex: 0,
        explanation: "Le fleuve Niger arrose le sud-ouest du pays, où se concentre la population.",
      },
      {
        id: "course-geographie-18-niger-quiz-5",
        question: "Depuis 2025, le Niger a quitté quelle organisation régionale ?",
        options: ["La CEDEAO", "L'ONU", "L'Union africaine", "L'UNESCO"],
        correctIndex: 0,
        explanation: "Le Niger, avec le Mali et le Burkina, a quitté la CEDEAO et rejoint l'Alliance des États du Sahel.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Nigeria s'ouvre sur le golfe de Guinée. Sur environ 924 000 km², il est bordé par le Bénin, le Niger, le Tchad et le Cameroun, et se prolonge au sud par le vaste delta du Niger.\n\n" +
      "Le pays est organisé en 36 États fédérés et un territoire de la capitale fédérale, Abuja. Cette structure fédérale, l'une des plus complexes du continent, reflète l'immense diversité géographique et humaine d'un pays presque aussi peuplé, à lui seul, que l'ensemble de l'Afrique de l'Ouest francophone.\n\n" +
      "#### 2. Le milieu\n" +
      "Le pays passe d'un sud forestier et humide (delta, mangroves) à un nord de savane sahélienne. Les fleuves Niger et Bénoué se rejoignent au centre du pays. Au nord-est, le lac Tchad, en fort recul, illustre les défis environnementaux de la région.\n\n" +
      "Le delta du Niger, l'un des plus vastes deltas du monde, concentre à la fois une biodiversité de mangroves exceptionnelle et l'essentiel de la production pétrolière du pays, avec de lourdes conséquences environnementales sur les zones d'extraction. Au centre, le plateau de Jos, plus frais en altitude, tranche avec les basses terres environnantes.",
      },
      {
        id: "course-geographie-19-nigeria-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Avec plus de 220 millions d'habitants (2024), le Nigeria est le pays le plus peuplé d'Afrique.\n\n" +
      "La population, très jeune, se concentre dans les grandes métropoles du sud, au premier rang desquelles Lagos, mégapole de plus de 15 millions d'habitants et l'une des villes à la croissance la plus rapide du monde, ainsi que dans le nord densément peuplé autour de Kano.\n\n" +
      "#### 2. Société\n" +
      "Le pays réunit plus de 250 groupes ethniques, dont trois principaux : les Haoussa-Peuls (nord), les Yorubas (sud-ouest) et les Igbos (sud-est). L'anglais est officiel. Le nord est majoritairement musulman, le sud chrétien.\n\n" +
      "Cette diversité ethnique et religieuse, gérée par un savant équilibre fédéral entre les 36 États, reste une source de tensions récurrentes, illustrée par la guerre du Biafra (1967-1970), tentative de sécession de la région igbo, ou par l'insurrection de Boko Haram dans le nord-est depuis 2009.",
      },
      {
        id: "course-geographie-19-nigeria-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "Le Nigeria est l'une des deux plus grandes économies d'Afrique. Le pétrole du delta du Niger en est le pilier (grand exportateur), avec le gaz et l'agriculture. Sa culture rayonne : Nollywood (deuxième industrie du cinéma au monde par le nombre de films) et la musique afrobeats.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république fédérale (36 États). Chef de l'État (2026) : Bola Ahmed Tinubu, président depuis mai 2023. Monnaie : le naira (NGN). Devise nationale : « Unity and Faith, Peace and Progress » (Unité et Foi, Paix et Progrès).\n\n" +
      "Le pays est indépendant du Royaume-Uni depuis le 1er octobre 1960. Membre fondateur de l'Union africaine et de la CEDEAO, il en est la première puissance démographique et l'une des deux premières économies, aux côtés de l'Afrique du Sud.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Abuja, ville construite au centre du pays. Lagos, mégapole côtière, est l'une des plus grandes villes d'Afrique et le cœur économique. Le Nigeria est l'héritier de grands royaumes (Bénin, Oyo, cités haoussa).",
      },
    ],
    quiz: [
      {
        id: "course-geographie-19-nigeria-quiz-1",
        question: "Quel est le pays le plus peuplé d'Afrique ?",
        options: ["L'Éthiopie", "Le Nigeria", "L'Égypte", "La RD Congo"],
        correctIndex: 1,
        explanation: "Avec plus de 220 millions d'habitants, le Nigeria est de loin le pays le plus peuplé du continent.",
      },
      {
        id: "course-geographie-19-nigeria-quiz-2",
        question: "Quelle est la principale ressource d'exportation du Nigeria ?",
        options: ["Le pétrole", "Le cacao", "L'or", "Le café"],
        correctIndex: 0,
        explanation: "Le pétrole du delta du Niger est la première richesse d'exportation du pays.",
      },
      {
        id: "course-geographie-19-nigeria-quiz-3",
        question: "Comment appelle-t-on l'industrie du cinéma nigériane ?",
        options: ["Bollywood", "Nollywood", "Hollywood", "Cinewood"],
        correctIndex: 1,
        explanation: "Nollywood est la deuxième industrie cinématographique du monde par le nombre de films produits.",
      },
      {
        id: "course-geographie-19-nigeria-quiz-4",
        question: "Quelle est la capitale du Nigeria ?",
        options: ["Lagos", "Abuja", "Kano", "Ibadan"],
        correctIndex: 1,
        explanation: "Abuja, bâtie au centre du pays, est la capitale ; Lagos est la plus grande ville et le cœur économique.",
      },
      {
        id: "course-geographie-19-nigeria-quiz-5",
        question: "Quelle est la monnaie du Nigeria ?",
        options: ["Le cedi", "Le naira", "Le franc CFA", "Le dalasi"],
        correctIndex: 1,
        explanation: "Le Nigeria n'utilise pas le franc CFA mais sa propre monnaie, le naira.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Sénégal s'ouvre sur l'Atlantique, en Afrique de l'Ouest. Sur environ 196 700 km², il est bordé par la Mauritanie, le Mali, la Guinée et la Guinée-Bissau, et entoure presque entièrement l'enclave de la Gambie. La pointe des Almadies, à Dakar, est l'extrémité ouest du continent africain.\n\n" +
      "Le pays est découpé en quatorze régions, de Dakar, la capitale, à Ziguinchor, au sud, en Casamance, séparée du reste du territoire par l'enclave gambienne. Cette discontinuité territoriale a longtemps nourri des revendications autonomistes dans cette région du sud.\n\n" +
      "#### 2. Le milieu\n" +
      "Le climat est sahélien au nord et plus humide au sud, en Casamance. Le pays est arrosé par les fleuves Sénégal, Gambie, Casamance et Saloum. Savane et mangroves abritent de grands sanctuaires : le parc du Niokolo-Koba et celui des oiseaux du Djoudj (UNESCO).\n\n" +
      "La Casamance, au climat plus humide et à la végétation plus dense, tranche nettement avec le nord sahélien, autour du fleuve Sénégal, où l'agriculture irriguée s'est développée dans la vallée. Le parc national du Djoudj, delta du fleuve Sénégal, est l'un des plus importants sanctuaires d'oiseaux migrateurs d'Afrique de l'Ouest.",
      },
      {
        id: "course-geographie-20-senegal-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Le Sénégal compte environ 18 millions d'habitants (2024), une population jeune, concentrée sur le littoral et dans l'agglomération de Dakar.\n\n" +
      "L'agglomération de Dakar, sur la presqu'île du Cap-Vert, concentre à elle seule environ un quart de la population du pays, loin devant les autres villes comme Touba, Thiès ou Saint-Louis, ce qui en fait l'une des zones urbaines les plus densément peuplées d'Afrique de l'Ouest.\n\n" +
      "#### 2. Société\n" +
      "Le pays réunit Wolofs, Peuls, Sérères, Diolas, Mandingues… Le français est officiel, le wolof largement parlé. L'islam est très majoritaire (confréries mouride et tijane), avec une minorité chrétienne ; la culture de la teranga (hospitalité) est une fierté nationale.\n\n" +
      "Les confréries soufies, en particulier la mouridiyya fondée par Cheikh Ahmadou Bamba et centrée sur la ville sainte de Touba, jouent un rôle social, économique et politique de premier plan dans la société sénégalaise, bien au-delà de la seule sphère religieuse.",
      },
      {
        id: "course-geographie-20-senegal-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'économie repose sur l'agriculture (arachide, mil), la pêche, les phosphates, l'or et le tourisme. Depuis peu, le Sénégal est devenu producteur de pétrole et de gaz offshore, dont le champ gazier Grand Tortue Ahmeyim (GTA), partagé avec la Mauritanie.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république (démocratie reconnue pour ses alternances pacifiques). Chef de l'État (2026) : Bassirou Diomaye Faye, élu en mars 2024. Monnaie : le franc CFA (XOF). Devise nationale : « Un Peuple, Un But, Une Foi ».\n\n" +
      "Le pays est indépendant de la France depuis le 20 août 1960, après une brève fédération du Mali (avec l'actuel Mali) ; Léopold Sédar Senghor, poète et chantre de la négritude, en fut le premier président. Membre de l'UEMOA et de la CEDEAO, il est réputé pour la stabilité de ses institutions démocratiques depuis l'indépendance.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Dakar. L'île de Gorée (mémoire de la traite négrière, UNESCO), le lac Rose (Retba), la Grande Mosquée de Touba (haut lieu du mouridisme) et la ville de Saint-Louis (UNESCO) comptent parmi ses sites emblématiques.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-20-senegal-quiz-1",
        question: "Quelle est la capitale du Sénégal ?",
        options: ["Dakar", "Thiès", "Saint-Louis", "Ziguinchor"],
        correctIndex: 0,
        explanation: "Dakar, sur la presqu'île du Cap-Vert, est la capitale du Sénégal et le point le plus à l'ouest du continent.",
      },
      {
        id: "course-geographie-20-senegal-quiz-2",
        question: "Quel petit pays forme une enclave à l'intérieur du Sénégal ?",
        options: ["La Guinée-Bissau", "La Gambie", "Le Mali", "Le Cap-Vert"],
        correctIndex: 1,
        explanation: "La Gambie, étirée le long de son fleuve, est presque entièrement enclavée dans le Sénégal.",
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
        explanation: "L'île de Gorée, classée à l'UNESCO, symbolise la mémoire de la traite négrière atlantique.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "La Sierra Leone borde l'Atlantique, en Afrique de l'Ouest. Sur environ 71 700 km², elle est entourée par la Guinée et le Liberia. La presqu'île de Freetown abrite l'un des plus grands ports naturels du monde.\n\n" +
      "Le pays compte cinq régions, dont celle de l'Ouest, autour de Freetown, la capitale, bâtie au pied de collines boisées qui dominent directement la baie. Ce relief particulier a valu son nom au pays, donné par les navigateurs portugais du XVe siècle.\n\n" +
      "#### 2. Le milieu\n" +
      "La côte est faite de mangroves et de plaines ; l'intérieur, plus élevé, est fait de collines et de montagnes. Le pays est l'un des plus arrosés d'Afrique de l'Ouest, couvert de forêt tropicale ; le climat est équatorial.\n\n" +
      "À l'est, les monts Loma culminent avec le mont Bintumani, point culminant du pays à plus de 1 900 m, au cœur d'une réserve forestière protégée. Ces fortes précipitations, parmi les plus abondantes de la sous-région, expliquent la densité de la forêt tropicale qui couvre encore une bonne partie du territoire.",
      },
      {
        id: "course-geographie-21-sierra-leone-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "La Sierra Leone compte environ 8,6 millions d'habitants (2024).\n\n" +
      "La population, jeune et majoritairement rurale, s'est reconstituée progressivement après la guerre civile et l'épidémie d'Ebola, deux crises qui ont chacune provoqué d'importants déplacements vers Freetown, de loin la plus grande ville du pays.\n\n" +
      "#### 2. Société\n" +
      "On y trouve les peuples temné, mendé et les Krios (descendants d'esclaves affranchis). L'anglais est officiel, le krio (créole) très parlé. L'islam est majoritaire, avec une minorité chrétienne. Freetown fut fondée comme refuge d'esclaves libérés.\n\n" +
      "Les Temnés, majoritaires au nord et au centre-ouest, et les Mendés, au sud et à l'est, forment les deux plus grands groupes du pays ; les Krios, installés à Freetown et sur la presqu'île depuis la fondation de la colonie à la fin du XVIIIe siècle, ont longtemps joué un rôle culturel et administratif de premier plan.",
      },
      {
        id: "course-geographie-21-sierra-leone-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "La Sierra Leone est connue pour ses diamants (tristement associés aux « diamants de sang » de la guerre), ainsi que l'or, la bauxite et le rutile (titane). L'agriculture (riz, cacao) et la pêche comptent aussi. L'économie s'est reconstruite après la guerre civile (1991-2002) et l'épidémie d'Ebola (2014).\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Julius Maada Bio, président réélu en 2023. Monnaie : le leone (SLE). Devise nationale : « Unity, Freedom, Justice » (Unité, Liberté, Justice).\n\n" +
      "Le pays est indépendant du Royaume-Uni depuis le 27 avril 1961. Membre de l'Union africaine et de la CEDEAO, il a mis en place un processus de vérité et réconciliation après la guerre civile, et reste régulièrement cité comme exemple de sortie de crise réussie en Afrique de l'Ouest.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Freetown, dont le célèbre « Cotton Tree » est un symbole historique. L'île de Bunce rappelle la traite négrière. Le nom « Sierra Leone » signifie « les montagnes du lion ».",
      },
    ],
    quiz: [
      {
        id: "course-geographie-21-sierra-leone-quiz-1",
        question: "Pour quelle pierre précieuse la Sierra Leone est-elle particulièrement connue ?",
        options: ["Les diamants", "Les émeraudes", "Les rubis", "Les saphirs"],
        correctIndex: 0,
        explanation: "Les diamants de la Sierra Leone ont marqué son histoire, notamment durant la guerre civile.",
      },
      {
        id: "course-geographie-21-sierra-leone-quiz-2",
        question: "Que signifie le nom « Sierra Leone » ?",
        options: ["La côte de l'or", "Les montagnes du lion", "La terre des fleuves", "Le pays des forêts"],
        correctIndex: 1,
        explanation: "« Sierra Leone » signifie « les montagnes du lion », nom donné par les explorateurs portugais.",
      },
      {
        id: "course-geographie-21-sierra-leone-quiz-3",
        question: "Quelle est la capitale de la Sierra Leone ?",
        options: ["Freetown", "Bo", "Kenema", "Makeni"],
        correctIndex: 0,
        explanation: "Freetown, dotée d'un grand port naturel, est la capitale du pays.",
      },
      {
        id: "course-geographie-21-sierra-leone-quiz-4",
        question: "Quelle est la langue officielle de la Sierra Leone ?",
        options: ["Le français", "L'anglais", "Le portugais", "L'arabe"],
        correctIndex: 1,
        explanation: "Ancienne colonie britannique, la Sierra Leone a l'anglais pour langue officielle ; le krio est très parlé.",
      },
      {
        id: "course-geographie-21-sierra-leone-quiz-5",
        question: "Freetown a été fondée à l'origine comme refuge pour…",
        options: ["Des marchands européens", "Des esclaves affranchis", "Des explorateurs", "Des missionnaires"],
        correctIndex: 1,
        explanation: "Freetown, la « ville libre », fut créée pour accueillir des esclaves libérés.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Togo est un pays étroit et allongé du nord au sud, avec une courte façade sur le golfe de Guinée. Sur environ 56 800 km², il est bordé par le Ghana, le Bénin et le Burkina Faso.\n\n" +
      "Le pays est découpé en cinq régions, de la région Maritime au sud, autour de Lomé, la capitale, à la région des Savanes au nord, à la frontière du Burkina Faso. Cette forme allongée, comparable à celle du Bénin voisin, fait traverser au pays plusieurs zones climatiques sur une distance nord-sud d'environ 600 km.\n\n" +
      "#### 2. Le milieu\n" +
      "Du sud (littoral, lagunes, plateaux) au nord (savanes), le pays est traversé en diagonale par la chaîne de l'Atakora. Le climat est tropical ; le lac Togo borde le littoral.\n\n" +
      "La chaîne de l'Atakora, appelée localement monts Togo, culmine au pic d'Agou, point culminant du pays à un peu plus de 980 m, dans une région de plateaux frais propice à la culture du café et du cacao. Plus au nord, la savane cède la place à un paysage plus sec, proche de celui du Sahel.",
      },
      {
        id: "course-geographie-22-togo-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Le Togo compte environ 9 millions d'habitants (2024).\n\n" +
      "La population se concentre dans le sud, autour de Lomé et des plateaux agricoles, tandis que le nord, plus sec et plus enclavé, reste davantage rural et moins densément peuplé.\n\n" +
      "#### 2. Société\n" +
      "Les principaux peuples sont les Éwés (sud) et les Kabyè (nord), aux côtés des Tem et d'autres. Le français est la langue officielle. Religions traditionnelles (vaudou), christianisme et islam cohabitent.\n\n" +
      "Cette distinction régionale entre Éwés du sud, plus urbanisés et christianisés, et Kabyè du nord, dont sont originaires les dirigeants du pays depuis 1967, a longtemps structuré la vie politique togolaise et alimenté des tensions autour de la répartition du pouvoir.",
      },
      {
        id: "course-geographie-22-togo-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'économie repose sur les phosphates (une des principales ressources), l'agriculture (café, cacao, coton) et surtout le port en eau profonde de Lomé, grand hub de transit pour la sous-région.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Le Togo est passé à un régime parlementaire avec la nouvelle Constitution de 2024. Homme fort et chef de l'exécutif (2026) : Faure Gnassingbé, Président du Conseil des ministres (fonction occupée depuis mai 2025), au pouvoir depuis 2005 ; la présidence de la République est devenue un rôle protocolaire. La famille Gnassingbé dirige le pays depuis 1967. Monnaie : le franc CFA (XOF). Devise nationale : « Travail, Liberté, Patrie ».\n\n" +
      "Le pays est indépendant de la France depuis le 27 avril 1960, après avoir été un territoire sous mandat puis sous tutelle de la SDN puis de l'ONU, hérité de l'ancien « Togoland » allemand. Membre de l'UEMOA et de la CEDEAO, il reste l'un des rares pays africains dirigés par la même famille depuis près de six décennies.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Lomé, sur la côte. Ancienne colonie allemande (le « Togoland »), le pays abrite le Koutammakou, pays des Batammariba et de leurs maisons-tours de terre (takienta), classé à l'UNESCO.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-22-togo-quiz-1",
        question: "Quelle est la forme du territoire togolais ?",
        options: ["En forme d'île", "Étroit et allongé du nord au sud", "Parfaitement circulaire", "Enclavé, sans aucune côte"],
        correctIndex: 1,
        explanation: "Le Togo est un mince couloir de terre s'étirant du golfe de Guinée jusqu'aux savanes du nord.",
      },
      {
        id: "course-geographie-22-togo-quiz-2",
        question: "Quelle ressource minière est importante pour le Togo ?",
        options: ["Le pétrole", "Les phosphates", "L'uranium", "Le diamant"],
        correctIndex: 1,
        explanation: "Les phosphates comptent parmi les principales ressources d'exportation du Togo.",
      },
      {
        id: "course-geographie-22-togo-quiz-3",
        question: "Quelle est la capitale du Togo ?",
        options: ["Lomé", "Sokodé", "Kara", "Atakpamé"],
        correctIndex: 0,
        explanation: "Lomé, sur la côte, est la capitale et le grand port du pays.",
      },
      {
        id: "course-geographie-22-togo-quiz-4",
        question: "Quel équipement fait de Lomé un grand hub régional ?",
        options: ["Un aéroport spatial", "Un port en eau profonde", "Une gare ferroviaire transsaharienne", "Un barrage géant"],
        correctIndex: 1,
        explanation: "Le port en eau profonde de Lomé sert de plateforme de transit pour toute la sous-région.",
      },
      {
        id: "course-geographie-22-togo-quiz-5",
        question: "Quelle monnaie utilise le Togo ?",
        options: ["Le franc CFA", "Le cedi", "Le naira", "Le leone"],
        correctIndex: 0,
        explanation: "Le Togo appartient à la zone du franc CFA d'Afrique de l'Ouest (UEMOA).",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "L'Angola s'étend sur la côte atlantique de l'Afrique. Sur environ 1,25 million de km², il est bordé par la RD Congo, la Zambie et la Namibie. Son enclave de Cabinda, riche en pétrole, est séparée du reste du pays par un couloir de la RD Congo.\n\n" +
      "Le pays est organisé en 21 provinces, dont celle de Luanda, autour de la capitale, concentre l'essentiel de l'activité économique. Cette configuration territoriale, avec l'enclave de Cabinda séparée du reste du pays, a longtemps alimenté des tensions séparatistes localisées.\n\n" +
      "#### 2. Le milieu\n" +
      "Une plaine côtière borde un vaste plateau intérieur de savanes et de forêts. Le pays est arrosé par de nombreuses rivières (Kwanza, Cunene). Le climat est tropical au nord et devient aride au sud-ouest, où commence le désert du Namib.\n\n" +
      "Le plateau intérieur, qui occupe l'essentiel du territoire, offre un climat plus tempéré que la côte grâce à l'altitude, propice à l'agriculture. Vers le sud, le pays s'assèche progressivement jusqu'aux confins du désert du Namib, partagé avec la Namibie, tandis que les chutes de Kalandula, parmi les plus impressionnantes d'Afrique, témoignent de l'abondance des cours d'eau du centre du pays.",
      },
      {
        id: "course-geographie-23-angola-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "L'Angola compte environ 36 millions d'habitants (2024).\n\n" +
      "La population, jeune et en forte croissance, s'est fortement urbanisée depuis la fin de la guerre civile en 2002 : Luanda, la capitale, est devenue une mégapole de plusieurs millions d'habitants, l'une des villes à la croissance la plus rapide d'Afrique australe.\n\n" +
      "#### 2. Société\n" +
      "La société réunit les peuples Ovimbundu, Ambundu, Bakongo et d'autres. Le portugais est la langue officielle et le christianisme la religion majoritaire.\n\n" +
      "Les Ovimbundu, majoritaires sur les hauts plateaux du centre, les Ambundu autour de Luanda et du fleuve Kwanza, et les Bakongo au nord, proches de la RD Congo voisine, ont chacun pesé différemment dans les rivalités politiques de la guerre civile, structurée autour du MPLA, de l'UNITA et du FNLA.",
      },
      {
        id: "course-geographie-23-angola-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'Angola est l'un des plus grands producteurs de pétrole d'Afrique subsaharienne et un important producteur de diamants. Son économie reste très dépendante du pétrole. Le pays s'est reconstruit après une longue guerre civile (1975-2002).\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : João Lourenço, président depuis 2017. Monnaie : le kwanza (AOA). Devise nationale : l'Angola n'a pas de devise nationale officielle consacrée.\n\n" +
      "Le pays est indépendant du Portugal depuis le 11 novembre 1975, sous la présidence fondatrice d'Agostinho Neto, mais une guerre civile éclate aussitôt entre le MPLA au pouvoir et l'UNITA, et ne s'achève qu'en 2002. Membre de l'Union africaine, l'Angola est aujourd'hui l'une des principales puissances pétrolières du continent.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Luanda, régulièrement citée parmi les villes les plus chères du monde. L'enclave pétrolière de Cabinda, les chutes de Kalandula et la mémoire de la lutte anticoloniale menée par le MPLA et Agostinho Neto marquent l'identité du pays.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-23-angola-quiz-1",
        question: "Quelle est la principale ressource d'exportation de l'Angola ?",
        options: ["Le pétrole", "Le cacao", "Le café", "Le coton"],
        correctIndex: 0,
        explanation: "L'Angola est l'un des grands producteurs de pétrole d'Afrique subsaharienne.",
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
        explanation: "Luanda, sur la côte atlantique, est la capitale et la plus grande ville du pays.",
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
        explanation: "Toute la côte angolaise donne sur l'océan Atlantique.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Cameroun se trouve au fond du golfe de Guinée, à la charnière de l'Afrique de l'Ouest et de l'Afrique centrale. Sur environ 475 000 km², il est bordé par le Nigeria, le Tchad, la Centrafrique, le Congo, le Gabon et la Guinée équatoriale.\n\n" +
      "Le pays est organisé en dix régions, de l'Extrême-Nord sahélien au Sud équatorial, en passant par l'Ouest montagneux et anglophone. Cette position charnière entre deux grandes zones du continent explique en partie l'extrême diversité de paysages et de peuples du Cameroun.\n\n" +
      "#### 2. Le milieu\n" +
      "On le surnomme « l'Afrique en miniature » tant ses paysages sont variés : forêt équatoriale et côte au sud, hauts plateaux à l'ouest, savane et zone sahélienne (lac Tchad) au nord. Le mont Cameroun, volcan actif d'environ 4 040 m, est le point culminant d'Afrique de l'Ouest.\n\n" +
      "Les hauts plateaux de l'Ouest, autour de Bamenda et Bafoussam, offrent un climat frais et de riches terres volcaniques propices au café ; ils tranchent avec les plaines chaudes et humides du littoral, où le mont Cameroun reçoit certaines des précipitations les plus abondantes du continent.",
      },
      {
        id: "course-geographie-24-cameroun-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Le Cameroun compte environ 28 millions d'habitants (2024).\n\n" +
      "La population, jeune et de plus en plus urbaine, se concentre entre les métropoles de Yaoundé et Douala et les hauts plateaux de l'Ouest, densément peuplés, tandis que le grand Nord sahélien reste plus rural et exposé aux effets du recul du lac Tchad.\n\n" +
      "#### 2. Société\n" +
      "Le pays réunit plus de 200 groupes ethniques. Il est bilingue français et anglais (héritage des colonisations française et britannique) — une dualité à l'origine de la « crise anglophone » dans les régions du Nord-Ouest et du Sud-Ouest. Christianisme au sud, islam au nord.\n\n" +
      "Cette dualité linguistique, héritée du partage de l'ancien Cameroun allemand entre la France et le Royaume-Uni après la Première Guerre mondiale, a dégénéré depuis 2016 en une crise sécuritaire dans les régions anglophones, où une partie de la population réclame davantage d'autonomie, voire l'indépendance.",
      },
      {
        id: "course-geographie-24-cameroun-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'économie, diversifiée, repose sur le pétrole, le cacao, le café, le coton, le bois et la banane. Le port de Douala dessert aussi les pays voisins enclavés.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Paul Biya, réélu en octobre 2025 pour un huitième mandat, au pouvoir depuis 1982. Monnaie : le franc CFA d'Afrique centrale (XAF). Devise nationale : « Paix, Travail, Patrie ».\n\n" +
      "Le Cameroun est indépendant de la France depuis le 1er janvier 1960 ; le Cameroun britannique le rejoint par référendum en 1961, formant l'État bilingue actuel. Membre de l'Union africaine et de la CEMAC, le pays est dirigé par le même président depuis plus de quatre décennies, l'un des plus longs mandats au monde.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Yaoundé ; Douala est la capitale économique. Le pays est célèbre pour le mont Cameroun, sa grande diversité culturelle (Bamiléké, Peuls, Bantous…) et son équipe de football, les Lions Indomptables.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-24-cameroun-quiz-1",
        question: "Pour sa grande diversité de paysages, le Cameroun est surnommé…",
        options: ["« L'Afrique en miniature »", "« Le toit de l'Afrique »", "« Le grenier de l'Afrique »", "« La perle des Antilles »"],
        correctIndex: 0,
        explanation: "Du désert du nord à la forêt du sud, le Cameroun résume à lui seul la diversité du continent.",
      },
      {
        id: "course-geographie-24-cameroun-quiz-2",
        question: "Quelles sont les deux langues officielles du Cameroun ?",
        options: ["Le français et l'espagnol", "Le français et l'anglais", "L'anglais et le portugais", "L'arabe et le français"],
        correctIndex: 1,
        explanation: "Le Cameroun est officiellement bilingue français-anglais, héritage de son histoire coloniale.",
      },
      {
        id: "course-geographie-24-cameroun-quiz-3",
        question: "Quelle est la capitale du Cameroun ?",
        options: ["Douala", "Yaoundé", "Garoua", "Bafoussam"],
        correctIndex: 1,
        explanation: "Yaoundé est la capitale politique ; Douala est la capitale économique et le grand port.",
      },
      {
        id: "course-geographie-24-cameroun-quiz-4",
        question: "Quel volcan est le point culminant d'Afrique de l'Ouest ?",
        options: ["Le mont Cameroun", "Le Kilimandjaro", "Le mont Kenya", "Le Toubkal"],
        correctIndex: 0,
        explanation: "Le mont Cameroun, encore actif, dépasse 4 000 m et domine la côte.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "La République centrafricaine se situe pratiquement au centre du continent africain et est enclavée (sans accès à la mer). Sur environ 623 000 km², elle est bordée par le Tchad, le Soudan, le Soudan du Sud, la RD Congo, le Congo et le Cameroun.\n\n" +
      "Le pays est divisé en 16 préfectures autour de Bangui, la capitale, sur l'Oubangui. Cet enclavement au cœur du continent, cumulé à un réseau routier très limité, isole fortement l'intérieur du pays et fragilise l'acheminement de l'aide humanitaire.\n\n" +
      "#### 2. Le milieu\n" +
      "Le pays est fait de plateaux de savane au nord et de forêt équatoriale au sud. Il est arrosé par des rivières, dont l'Oubangui, affluent du Congo, qui marque la frontière sud. Le climat est tropical.\n\n" +
      "Au sud-ouest, la réserve de Dzanga-Sangha prolonge le grand massif forestier du bassin du Congo et abrite l'une des plus fortes concentrations de gorilles de plaine et d'éléphants de forêt du continent. Le nord du pays, plus sec, s'apparente davantage à la savane sahélienne du Tchad voisin.",
      },
      {
        id: "course-geographie-25-centrafrique-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "La Centrafrique compte environ 5,5 millions d'habitants (2024).\n\n" +
      "La population, en grande partie rurale, a été durement affectée par les cycles de violence des années 2010, qui ont provoqué d'importants déplacements internes et poussé des centaines de milliers de personnes à fuir vers les pays voisins, notamment le Cameroun et le Tchad.\n\n" +
      "#### 2. Société\n" +
      "On y trouve les peuples Gbaya, Banda, Mandjia, Sara… Le français est officiel, mais le sango est la langue nationale largement parlée par tous. Christianisme majoritaire, avec une minorité musulmane.\n\n" +
      "Le sango, langue véhiculaire née du commerce fluvial sur l'Oubangui, joue un rôle unificateur rare dans un pays autrement fragmenté en de nombreux groupes ethniques et religieux, une fragmentation qui a nourri les tensions intercommunautaires du conflit débuté en 2013.",
      },
      {
        id: "course-geographie-25-centrafrique-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "Le sous-sol est riche en diamants, or, bois et uranium, mais l'agriculture vivrière domine. C'est l'un des pays les plus pauvres du monde, longtemps déchiré par des conflits armés.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Faustin-Archange Touadéra, réélu en décembre 2025 (après un référendum de 2023 ayant supprimé la limite des mandats). Monnaie : le franc CFA d'Afrique centrale (XAF). Devise nationale : « Unité, Dignité, Travail ».\n\n" +
      "Le pays est indépendant de la France depuis le 13 août 1960. Membre de l'Union africaine et de la CEMAC, il reste l'un des États les plus fragiles du continent, marqué depuis 2013 par un conflit opposant plusieurs groupes armés, malgré le déploiement d'une mission de maintien de la paix de l'ONU.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Bangui, sur l'Oubangui. La réserve de Dzanga-Sangha (forêt, gorilles et éléphants de forêt, UNESCO) est un joyau naturel. Le pays garde le souvenir de l'éphémère « empire » de Bokassa (1976-1979).",
      },
    ],
    quiz: [
      {
        id: "course-geographie-25-centrafrique-quiz-1",
        question: "Où se situe grossièrement la Centrafrique sur le continent ?",
        options: ["Au centre de l'Afrique", "À l'extrême sud", "Sur la côte méditerranéenne", "À la pointe ouest"],
        correctIndex: 0,
        explanation: "Comme son nom l'indique, la Centrafrique occupe le cœur du continent.",
      },
      {
        id: "course-geographie-25-centrafrique-quiz-2",
        question: "La Centrafrique a-t-elle un accès à la mer ?",
        options: ["Oui, sur l'Atlantique", "Non, elle est enclavée", "Oui, sur l'océan Indien", "Oui, sur la mer Rouge"],
        correctIndex: 1,
        explanation: "La République centrafricaine est un pays enclavé, sans façade maritime.",
      },
      {
        id: "course-geographie-25-centrafrique-quiz-3",
        question: "Quelle ressource précieuse la Centrafrique exporte-t-elle ?",
        options: ["Les diamants", "Le pétrole", "Le charbon", "Le gaz naturel"],
        correctIndex: 0,
        explanation: "Les diamants comptent parmi les principales ressources du sous-sol centrafricain.",
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
        explanation: "Le sango est la langue véhiculaire nationale, comprise dans tout le pays.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "La République du Congo, dite Congo-Brazzaville, s'étend à cheval sur l'équateur avec une courte façade atlantique. Sur environ 342 000 km², elle est bordée par le Gabon, le Cameroun, la Centrafrique, la RD Congo et l'enclave angolaise de Cabinda. Sa capitale, Brazzaville, fait face à Kinshasa (RDC) de l'autre côté du fleuve : ce sont les deux capitales les plus proches du monde.\n\n" +
      "Le pays est découpé en douze départements, entre Brazzaville, la capitale politique à l'intérieur des terres, et Pointe-Noire, le grand port pétrolier sur la façade atlantique, reliées par un axe ferroviaire historique.\n\n" +
      "#### 2. Le milieu\n" +
      "Le pays est couvert d'une vaste forêt équatoriale (bassin du Congo, deuxième poumon vert de la planète), avec des plaines côtières et des savanes. Le fleuve Congo et son affluent l'Oubangui le bordent à l'est. Le climat est équatorial humide.\n\n" +
      "Le nord du pays, autour du parc national d'Odzala-Kokoua, prolonge le grand massif forestier du bassin du Congo et abrite une faune exceptionnelle de gorilles de plaine et d'éléphants de forêt. Entre Brazzaville et la côte s'étend le Pool, une région de savanes et de plateaux qui tranche avec la forêt dominante ailleurs dans le pays.",
      },
      {
        id: "course-geographie-26-congo-brazzaville-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Le Congo compte environ 6 millions d'habitants (2024), fortement urbanisés à Brazzaville et Pointe-Noire.\n\n" +
      "C'est l'un des pays les plus urbanisés d'Afrique subsaharienne : la grande majorité de la population vit en ville, l'essentiel des terres forestières et rurales restant très peu peuplé, à l'exception de quelques zones agricoles autour des grands axes de communication.\n\n" +
      "#### 2. Société\n" +
      "Les peuples Kongo, Téké et Mbochi sont les plus nombreux. Le français est officiel, le lingala et le kituba sont des langues nationales. Le christianisme est majoritaire.\n\n" +
      "Les Kongo, présents dans le sud autour de Brazzaville et Pointe-Noire, les Téké, autour du Pool, et les Mbochi, dans le nord, forment les trois grands ensembles régionaux du pays, dont l'équilibre politique reste un enjeu sensible depuis l'indépendance.",
      },
      {
        id: "course-geographie-26-congo-brazzaville-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'économie repose largement sur le pétrole offshore, principale exportation, complété par le bois. Cette dépendance au pétrole fragilise les finances du pays.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Denis Sassou Nguesso, réélu en mars 2026 pour un cinquième mandat, au pouvoir sur la plupart des décennies depuis 1979. Monnaie : le franc CFA d'Afrique centrale (XAF). Devise nationale : « Unité, Travail, Progrès ».\n\n" +
      "Le pays est indépendant de la France depuis le 15 août 1960. Membre de l'Union africaine et de la CEMAC, il a connu plusieurs guerres civiles dans les années 1990, avant un retour au pouvoir de Denis Sassou Nguesso qui le dirige depuis, avec une brève interruption, depuis 1979.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Brazzaville (face à Kinshasa). Pointe-Noire est le grand port pétrolier. Le parc national d'Odzala et la forêt du bassin du Congo abritent une faune remarquable (gorilles, éléphants de forêt).",
      },
    ],
    quiz: [
      {
        id: "course-geographie-26-congo-brazzaville-quiz-1",
        question: "Quelle est la capitale de la République du Congo ?",
        options: ["Brazzaville", "Pointe-Noire", "Dolisie", "Kinshasa"],
        correctIndex: 0,
        explanation: "Brazzaville est la capitale du Congo ; Kinshasa est celle de la RD Congo voisine.",
      },
      {
        id: "course-geographie-26-congo-brazzaville-quiz-2",
        question: "Brazzaville fait face, de l'autre côté du fleuve, à quelle capitale ?",
        options: ["Kinshasa", "Libreville", "Bangui", "Yaoundé"],
        correctIndex: 0,
        explanation: "Brazzaville et Kinshasa, séparées par le fleuve Congo, sont les deux capitales les plus proches du monde.",
      },
      {
        id: "course-geographie-26-congo-brazzaville-quiz-3",
        question: "Quelle est la principale ressource du Congo-Brazzaville ?",
        options: ["Le pétrole", "Le cacao", "L'or", "Le coton"],
        correctIndex: 0,
        explanation: "Le pétrole offshore est la principale exportation du pays.",
      },
      {
        id: "course-geographie-26-congo-brazzaville-quiz-4",
        question: "De quoi le Congo-Brazzaville est-il en grande partie couvert ?",
        options: ["De désert", "De forêt équatoriale", "De steppe", "De toundra"],
        correctIndex: 1,
        explanation: "Le pays fait partie du bassin forestier du Congo, deuxième massif forestier tropical du monde.",
      },
      {
        id: "course-geographie-26-congo-brazzaville-quiz-5",
        question: "Quel grand fleuve sépare les deux Congos ?",
        options: ["Le fleuve Congo", "Le Nil", "Le Niger", "Le Zambèze"],
        correctIndex: 0,
        explanation: "Le fleuve Congo sépare la République du Congo de la République démocratique du Congo.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "La République démocratique du Congo occupe le cœur de l'Afrique centrale. Sur environ 2,34 millions de km², c'est le deuxième plus grand pays d'Afrique après l'Algérie. Presque enclavée (elle n'a qu'un minuscule accès à l'Atlantique par l'embouchure du Congo), elle a neuf pays voisins.\n\n" +
      "Le pays est découpé en 26 provinces depuis le redécoupage de 2015, contre onze auparavant, dans le but de rapprocher l'administration d'un territoire aussi vaste que l'Europe de l'Ouest. Cet immense territoire et son enclavement quasi total expliquent en grande partie la difficulté à y assurer une présence étatique uniforme.\n\n" +
      "#### 2. Le milieu\n" +
      "Le pays est dominé par l'immense bassin du fleuve Congo, couvert de la deuxième plus grande forêt tropicale du monde. À l'est se dressent les montagnes du Rift, des volcans (le Nyiragongo) et de grands lacs. Le fleuve Congo est le deuxième du monde par son débit. Le climat est équatorial.\n\n" +
      "À l'est, la chaîne des volcans des Virunga, dont le Nyiragongo, l'un des volcans les plus actifs d'Afrique, domine les lacs Kivu, Édouard et Albert, dans une région montagneuse au climat plus frais que le bassin forestier central. Cette zone du Rift albertin est l'un des points chauds de biodiversité les plus riches du continent.",
      },
      {
        id: "course-geographie-27-rd-congo-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "La RD Congo compte environ 105 millions d'habitants (2024), l'un des pays les plus peuplés d'Afrique. Le français est la langue officielle.\n\n" +
      "La population se concentre à l'ouest, autour de Kinshasa, mégapole de plusieurs millions d'habitants, ainsi que dans les provinces minières du Katanga et du Kasaï et dans les Kivus densément peuplés à l'est, tandis que la grande forêt centrale reste très faiblement occupée.\n\n" +
      "#### 2. Société\n" +
      "Le pays réunit plus de 200 groupes ethniques. Quatre grandes langues nationales — lingala, swahili, kikongo, tshiluba — s'ajoutent au français. Le christianisme est très majoritaire.\n\n" +
      "Cette immense diversité ethnique et linguistique, répartie sur un territoire-continent, a favorisé l'émergence de quatre langues véhiculaires régionales (lingala à l'ouest et dans l'armée, swahili à l'est, kikongo au sud-ouest, tshiluba au centre-sud), qui structurent encore aujourd'hui les identités régionales du pays.",
      },
      {
        id: "course-geographie-27-rd-congo-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "On parle de « scandale géologique » tant le sous-sol est riche : cuivre, cobalt (la RDC est le premier producteur mondial, clé des batteries), coltan, diamant, or, plus un énorme potentiel hydroélectrique (barrage d'Inga). Pourtant, la population reste pauvre et l'est du pays est ravagé par les conflits (offensive du M23).\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Félix Tshisekedi, président depuis 2019 (réélu en 2023). Depuis 2025, l'est du pays traverse une grave crise sécuritaire (prise de Goma par le M23). Monnaie : le franc congolais (CDF). Devise nationale : « Justice, Paix, Travail ».\n\n" +
      "Le pays est indépendant de la Belgique depuis le 30 juin 1960, à l'issue d'une décolonisation précipitée qui a débouché sur une grave crise politique dès les premiers mois, marquée par l'assassinat du Premier ministre Patrice Lumumba. Rebaptisé Zaïre sous la dictature de Mobutu (1965-1997), le pays a repris son nom actuel après sa chute.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Kinshasa, l'une des plus grandes villes d'Afrique et la plus grande ville francophone du monde. Les parcs des Virunga et de Kahuzi-Biega (gorilles, UNESCO), le fleuve Congo et la mémoire de Patrice Lumumba et du Zaïre de Mobutu marquent son histoire.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-27-rd-congo-quiz-1",
        question: "La RD Congo est le deuxième plus grand pays d'Afrique, après lequel ?",
        options: ["L'Algérie", "Le Soudan", "La Libye", "Le Nigeria"],
        correctIndex: 0,
        explanation: "Avec environ 2,34 millions de km², la RDC vient juste après l'Algérie par la superficie.",
      },
      {
        id: "course-geographie-27-rd-congo-quiz-2",
        question: "La RD Congo est le premier producteur mondial de quel métal, essentiel aux batteries ?",
        options: ["L'or", "Le cobalt", "Le fer", "L'aluminium"],
        correctIndex: 1,
        explanation: "La RDC fournit l'essentiel du cobalt mondial, indispensable aux batteries des téléphones et voitures électriques.",
      },
      {
        id: "course-geographie-27-rd-congo-quiz-3",
        question: "Quelle est la capitale de la RD Congo ?",
        options: ["Kinshasa", "Lubumbashi", "Goma", "Kisangani"],
        correctIndex: 0,
        explanation: "Kinshasa, sur le fleuve Congo, est la capitale et la plus grande ville francophone du monde.",
      },
      {
        id: "course-geographie-27-rd-congo-quiz-4",
        question: "Quel grand fleuve traverse la RD Congo ?",
        options: ["Le fleuve Congo", "Le Nil", "Le Niger", "Le Sénégal"],
        correctIndex: 0,
        explanation: "Le fleuve Congo, deuxième du monde par son débit, structure tout le pays.",
      },
      {
        id: "course-geographie-27-rd-congo-quiz-5",
        question: "Quelle est la langue officielle de la RD Congo ?",
        options: ["Le français", "L'anglais", "Le portugais", "L'espagnol"],
        correctIndex: 0,
        explanation: "Le français est la langue officielle, aux côtés de quatre grandes langues nationales.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Gabon s'étend sur la côte atlantique, à cheval sur l'équateur. Sur environ 268 000 km², il est bordé par la Guinée équatoriale, le Cameroun et le Congo.\n\n" +
      "Le pays est découpé en neuf provinces autour de Libreville, la capitale, sur l'estuaire du Gabon. Son faible peuplement rapporté à sa superficie en fait l'un des territoires les moins densément occupés d'Afrique centrale.\n\n" +
      "#### 2. Le milieu\n" +
      "Près de 85 % du territoire est couvert de forêt équatoriale (bassin du Congo). Le pays est arrosé par le fleuve Ogooué et compte un vaste réseau de 13 parcs nationaux (dont la Lopé et Ivindo, UNESCO). Le climat est équatorial humide.\n\n" +
      "Le fleuve Ogooué, principal cours d'eau du pays, traverse cette forêt quasi continue d'ouest en est et a longtemps servi de voie de pénétration et de transport du bois vers la côte. Ce réseau exceptionnel de parcs nationaux, créé dès 2002, a valu au Gabon une réputation de pionnier africain de la conservation.",
      },
      {
        id: "course-geographie-28-gabon-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Le Gabon compte environ 2,4 millions d'habitants (2024), une population faible pour un si vaste territoire, et très urbanisée.\n\n" +
      "Près de 90 % des Gabonais vivent en ville, en premier lieu à Libreville et Port-Gentil, ce qui laisse l'essentiel du territoire forestier quasiment inhabité — une situation rare en Afrique, qui a facilité la préservation de vastes espaces naturels.\n\n" +
      "#### 2. Société\n" +
      "Les principaux peuples sont les Fang, Punu et Nzebi. Le français est la langue officielle et le christianisme la religion majoritaire.\n\n" +
      "Les Fang, présents surtout au nord, entretiennent des liens culturels avec leurs voisins du Cameroun et de la Guinée équatoriale ; les Punu et Nzebi, au sud, ont développé des traditions musicales et rituelles, comme le bwiti, reconnues bien au-delà des frontières du pays.",
      },
      {
        id: "course-geographie-28-gabon-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'économie repose sur le pétrole (longtemps le pilier), le manganèse (le Gabon est un grand producteur) et le bois précieux (okoumé). Le revenu par habitant est parmi les plus élevés d'Afrique subsaharienne, mais les inégalités restent fortes.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Brice Clotaire Oligui Nguema, arrivé au pouvoir par un coup d'État en 2023, puis élu président en avril 2025. Monnaie : le franc CFA d'Afrique centrale (XAF). Devise nationale : « Union, Travail, Justice ».\n\n" +
      "Le pays est indépendant de la France depuis le 17 août 1960. Membre de l'Union africaine et de la CEMAC, il a été dirigé pendant 56 ans par la famille Bongo (1967-2023), jusqu'au coup d'État de 2023 qui a ouvert une nouvelle période politique.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Libreville. Le pays est réputé pour ses parcs nationaux et sa faune (éléphants de forêt, gorilles) ; le parc de la Lopé est classé à l'UNESCO. L'élection de 2025 a mis fin à la longue dynastie Bongo (1967-2023).",
      },
    ],
    quiz: [
      {
        id: "course-geographie-28-gabon-quiz-1",
        question: "Quelle part du territoire gabonais est couverte de forêt ?",
        options: ["Environ 10 %", "Environ 30 %", "Environ 50 %", "Environ 85 %"],
        correctIndex: 3,
        explanation: "Le Gabon est l'un des pays les plus forestiers du monde, avec près de 85 % de forêt.",
      },
      {
        id: "course-geographie-28-gabon-quiz-2",
        question: "Quelles sont les principales ressources du Gabon ?",
        options: ["Le pétrole et le manganèse", "Le cacao et le café", "L'or et les diamants", "Le coton et l'arachide"],
        correctIndex: 0,
        explanation: "Le pétrole et le manganèse sont les deux piliers de l'économie gabonaise.",
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
        explanation: "Le Gabon est traversé par l'équateur, d'où son climat équatorial humide.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "La Guinée équatoriale est faite de deux ensembles : une partie continentale (le Río Muni, entre le Cameroun et le Gabon) et des îles, dont Bioko, où se trouve la capitale Malabo. Sur environ 28 000 km², c'est le seul pays d'Afrique continentale ayant l'espagnol pour langue officielle.\n\n" +
      "Le pays est divisé en huit provinces, dont deux insulaires (Bioko Nord et Sud) et six continentales sur le Río Muni. Cette double nature, continentale et insulaire, est unique en Afrique centrale et a longtemps rendu l'administration du pays plus complexe que sa petite taille ne le laisserait supposer.\n\n" +
      "#### 2. Le milieu\n" +
      "Le continent est couvert de forêt équatoriale ; les îles, comme Bioko, sont volcaniques. Le climat est équatorial humide.\n\n" +
      "L'île de Bioko, dominée par le pic Basilé, un volcan culminant à plus de 3 000 m, bénéficie de pluies parmi les plus abondantes d'Afrique, tandis que le Río Muni continental prolonge la grande forêt équatoriale partagée avec le Gabon et le Cameroun voisins.",
      },
      {
        id: "course-geographie-29-guinee-equatoriale-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "La Guinée équatoriale compte environ 1,7 million d'habitants (2024).\n\n" +
      "La population se répartit entre le Río Muni continental, où vit la majorité des habitants, et l'île de Bioko, où se concentre la capitale Malabo ; la découverte du pétrole dans les années 1990 a accéléré l'urbanisation et attiré une importante main-d'œuvre étrangère.\n\n" +
      "#### 2. Société\n" +
      "Les Fang dominent sur le continent, les Bubis sur l'île de Bioko. L'espagnol est la langue officielle (avec le français et le portugais). Le christianisme est majoritaire. C'est une ancienne colonie espagnole.\n\n" +
      "Les Bubis, peuple autochtone de Bioko, ont vu leur poids démographique et politique décliner face aux Fang du continent, majoritaires dans le pays et au pouvoir depuis l'indépendance, une situation qui a nourri des tensions régionales récurrentes.",
      },
      {
        id: "course-geographie-29-guinee-equatoriale-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "La découverte de pétrole et de gaz dans les années 1990 a fait bondir le PIB par habitant, l'un des plus élevés d'Afrique — mais cette richesse est très mal répartie. Le bois et le cacao complètent les ressources.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Teodoro Obiang Nguema Mbasogo, au pouvoir depuis 1979 — c'est le plus ancien chef d'État en exercice au monde. Monnaie : le franc CFA d'Afrique centrale (XAF). Devise nationale : « Unité, Paix, Justice ».\n\n" +
      "Le pays est indépendant de l'Espagne depuis le 12 octobre 1968. Membre de l'Union africaine et de la CEMAC, il est dirigé sans interruption par Teodoro Obiang depuis qu'il a renversé son oncle Francisco Macías Nguema en 1979.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Malabo, sur l'île de Bioko. Une nouvelle capitale, Ciudad de la Paz (Djibloho), est en construction sur le continent. Le pic Basilé est un volcan emblématique de l'île.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-29-guinee-equatoriale-quiz-1",
        question: "Quelle est la langue officielle de la Guinée équatoriale ?",
        options: ["Le français", "L'espagnol", "Le portugais", "L'anglais"],
        correctIndex: 1,
        explanation: "La Guinée équatoriale est le seul pays d'Afrique continentale à avoir l'espagnol pour langue officielle.",
      },
      {
        id: "course-geographie-29-guinee-equatoriale-quiz-2",
        question: "Quelle ressource a enrichi la Guinée équatoriale à partir des années 1990 ?",
        options: ["Le pétrole", "Le cacao", "L'or", "Le coton"],
        correctIndex: 0,
        explanation: "La découverte du pétrole a fait de la Guinée équatoriale l'un des pays au PIB par habitant les plus élevés d'Afrique.",
      },
      {
        id: "course-geographie-29-guinee-equatoriale-quiz-3",
        question: "Sur quelle île se trouve la capitale Malabo ?",
        options: ["L'île de Bioko", "L'île de Zanzibar", "L'île de Gorée", "L'île de Madagascar"],
        correctIndex: 0,
        explanation: "Malabo est située sur l'île volcanique de Bioko, au large du Cameroun.",
      },
      {
        id: "course-geographie-29-guinee-equatoriale-quiz-4",
        question: "Quelle est la capitale de la Guinée équatoriale ?",
        options: ["Malabo", "Bata", "Ebebiyín", "Mongomo"],
        correctIndex: 0,
        explanation: "Malabo, sur l'île de Bioko, est la capitale ; une nouvelle capitale se construit sur le continent.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "São Tomé-et-Príncipe est un archipel de deux îles principales (São Tomé et Príncipe) et d'îlots, dans le golfe de Guinée, sur l'équateur, au large du Gabon. Avec environ 1 000 km², c'est le pays le moins peuplé du continent africain.\n\n" +
      "Le pays se divise en deux régions autonomes, São Tomé et Príncipe, cette dernière disposant depuis 1995 d'un statut d'autonomie renforcée avec son propre gouvernement régional. Les deux îles principales, distantes d'environ 150 km, forment avec plusieurs îlots une chaîne volcanique alignée sur une même faille géologique.\n\n" +
      "#### 2. Le milieu\n" +
      "Les îles sont volcaniques et montagneuses, couvertes d'une forêt tropicale luxuriante. Le climat est équatorial humide. Le Pico Cão Grande, aiguille volcanique spectaculaire, est un symbole du pays.\n\n" +
      "Le point culminant de l'archipel, le Pico de São Tomé, dépasse 2 000 m et porte une forêt de nuages unique, riche en espèces endémiques d'oiseaux et de plantes. Cette végétation luxuriante et cet isolement insulaire en ont fait un haut lieu de biodiversité pour sa taille, comparable à celui d'autres archipels tropicaux comme les Galápagos.",
      },
      {
        id: "course-geographie-30-sao-tome-et-principe-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "L'archipel compte environ 230 000 habitants (2024), la plus faible population d'Afrique.\n\n" +
      "La quasi-totalité de la population vit sur l'île de São Tomé, autour de la capitale du même nom ; l'île de Príncipe, beaucoup plus petite et isolée, ne compte que quelques milliers d'habitants, concentrés autour de sa capitale régionale, Santo António.\n\n" +
      "#### 2. Société\n" +
      "La population est créole et lusophone. Le portugais est la langue officielle et le christianisme la religion majoritaire. C'est une ancienne colonie portugaise.\n\n" +
      "Cette société créole s'est formée à partir du XVe siècle par le brassage entre colons portugais et esclaves africains amenés pour travailler dans les plantations de canne à sucre puis de cacao, laissant un héritage culturel et linguistique très proche de celui du Cap-Vert.",
      },
      {
        id: "course-geographie-30-sao-tome-et-principe-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'économie repose sur le cacao (culture historique — on parle des « îles chocolat »), la pêche et un tourisme naissant ; un potentiel pétrolier offshore est à l'étude. C'est une petite économie insulaire.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Carlos Vila Nova, réélu en juillet 2026 pour un deuxième mandat. Monnaie : la dobra (STN). Devise nationale : « Unité, Discipline, Travail ».\n\n" +
      "Le pays est indépendant du Portugal depuis le 12 juillet 1975. Membre de l'Union africaine, il est considéré comme l'une des démocraties les plus stables d'Afrique, avec des alternances pacifiques régulières depuis l'instauration du multipartisme en 1990.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : São Tomé. Le Pico Cão Grande, les anciennes plantations (roças) de cacao et une nature préservée font le charme de l'archipel.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-30-sao-tome-et-principe-quiz-1",
        question: "São Tomé-et-Príncipe est géographiquement…",
        options: ["Un archipel d'îles", "Un pays enclavé", "Une péninsule désertique", "Un haut plateau continental"],
        correctIndex: 0,
        explanation: "Le pays est un archipel de deux îles principales dans le golfe de Guinée.",
      },
      {
        id: "course-geographie-30-sao-tome-et-principe-quiz-2",
        question: "Quelle culture a fait la réputation de São Tomé-et-Príncipe ?",
        options: ["Le cacao", "Le café", "Le coton", "Le thé"],
        correctIndex: 0,
        explanation: "Les « îles chocolat » sont depuis longtemps réputées pour leur cacao.",
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
        explanation: "La ville de São Tomé, sur l'île principale, est la capitale du pays.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Tchad est un vaste pays enclavé au cœur du continent. Sur environ 1,28 million de km², c'est l'un des plus grands pays d'Afrique. Il est bordé par la Libye, le Soudan, la Centrafrique, le Cameroun, le Nigeria et le Niger.\n\n" +
      "Le pays est découpé en 23 provinces autour de N'Djamena, la capitale, à l'extrême sud-ouest du territoire. Cet enclavement au centre du continent, conjugué à l'immensité du désert saharien au nord, rend l'accès aux régions les plus septentrionales particulièrement difficile.\n\n" +
      "#### 2. Le milieu\n" +
      "Le nord est saharien, avec le massif du Tibesti et son point culminant, l'Emi Koussi (environ 3 415 m, plus haut sommet du Sahara). Le centre est sahélien, le sud une savane plus arrosée. Au sud-ouest, le lac Tchad (partagé avec plusieurs voisins) est en fort recul. Le climat va de l'aride au tropical.\n\n" +
      "Les lacs d'Ounianga, dans le désert du Tibesti, forment un ensemble unique de lacs permanents au cœur du Sahara, classé à l'UNESCO. Le lac Tchad, qui a perdu environ 90 % de sa surface depuis les années 1960 sous l'effet du changement climatique et de la surexploitation de l'eau, illustre l'un des grands défis environnementaux de la région.",
      },
      {
        id: "course-geographie-31-tchad-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Le Tchad compte environ 18 millions d'habitants (2024).\n\n" +
      "La population se concentre très largement dans le sud sahélien et soudanien, plus arrosé et cultivable, tandis que le nord saharien, immense mais aride, n'abrite plus que de rares communautés, notamment les Toubous du Tibesti.\n\n" +
      "#### 2. Société\n" +
      "Le pays réunit plus de 200 groupes ethniques. Le français et l'arabe sont les deux langues officielles. Le nord est majoritairement musulman, le sud chrétien et animiste.\n\n" +
      "Cette opposition nord-sud, à la fois géographique, religieuse et ethnique, a structuré une grande partie de la vie politique tchadienne depuis l'indépendance, marquée par des rébellions et des guerres civiles récurrentes entre groupes du nord et du sud.",
      },
      {
        id: "course-geographie-31-tchad-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'économie repose surtout sur le pétrole (principale exportation depuis les années 2000), le coton, l'élevage et la gomme arabique. C'est l'un des pays les plus pauvres du monde, très vulnérable aux sécheresses.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Mahamat Idriss Déby Itno, arrivé au pouvoir en 2021 à la mort de son père Idriss Déby, puis élu président en 2024. Monnaie : le franc CFA d'Afrique centrale (XAF). Devise nationale : « Unité, Travail, Progrès ».\n\n" +
      "Le pays est indépendant de la France depuis le 11 août 1960. Membre de l'Union africaine et de la CEMAC, il a connu depuis l'indépendance une succession quasi continue de rébellions et de guerres civiles, la famille Déby dirigeant le pays depuis 1990.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : N'Djamena. Le massif du Tibesti et les lacs d'Ounianga (UNESCO) sont des merveilles sahariennes ; le lac Tchad et les Toubous du nord font aussi partie de l'identité du pays.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-31-tchad-quiz-1",
        question: "Le Tchad a-t-il un accès à la mer ?",
        options: ["Oui, sur l'Atlantique", "Non, il est enclavé", "Oui, sur la Méditerranée", "Oui, sur la mer Rouge"],
        correctIndex: 1,
        explanation: "Le Tchad est un vaste pays enclavé, sans façade maritime.",
      },
      {
        id: "course-geographie-31-tchad-quiz-2",
        question: "Quel lac, en fort recul, borde le sud-ouest du Tchad ?",
        options: ["Le lac Tchad", "Le lac Victoria", "Le lac Malawi", "Le lac Tanganyika"],
        correctIndex: 0,
        explanation: "Le lac Tchad, qui donne son nom au pays, a perdu une grande partie de sa surface en quelques décennies.",
      },
      {
        id: "course-geographie-31-tchad-quiz-3",
        question: "Quelle est la principale ressource d'exportation du Tchad ?",
        options: ["Le pétrole", "Le cacao", "L'or", "La bauxite"],
        correctIndex: 0,
        explanation: "Depuis les années 2000, le pétrole est la première exportation du Tchad.",
      },
      {
        id: "course-geographie-31-tchad-quiz-4",
        question: "Quelles sont les deux langues officielles du Tchad ?",
        options: ["Le français et l'arabe", "Le français et l'anglais", "L'arabe et le portugais", "L'anglais et le swahili"],
        correctIndex: 0,
        explanation: "Le Tchad a deux langues officielles : le français et l'arabe.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Burundi est un petit pays enclavé de la région des Grands Lacs, en Afrique de l'Est. Sur environ 27 800 km², il est bordé par le Rwanda, la Tanzanie et la RD Congo, et longé au sud-ouest par le lac Tanganyika.\n\n" +
      "Le pays est découpé en 18 provinces autour de Bujumbura, la capitale économique, sur les rives du lac Tanganyika. Sa petite taille et son relief accidenté rapprochent fortement le Burundi de son voisin rwandais, avec lequel il partage une grande partie de son histoire.\n\n" +
      "#### 2. Le milieu\n" +
      "Comme son voisin rwandais, c'est un pays de collines et de hauts plateaux. Le climat tropical est tempéré par l'altitude. Le lac Tanganyika, l'un des plus profonds du monde, borde le pays à l'ouest.\n\n" +
      "Le relief burundais, fait de collines cultivées jusqu'aux sommets, laisse peu de place aux espaces naturels préservés, à l'exception de quelques réserves autour du lac Tanganyika et de la crête Congo-Nil, qui traverse le pays du nord au sud et sépare les bassins du Congo et du Nil.",
      },
      {
        id: "course-geographie-32-burundi-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Le Burundi compte environ 13 millions d'habitants (2024) et figure parmi les pays les plus densément peuplés d'Afrique.\n\n" +
      "Cette densité, l'une des plus fortes du continent rapportée à la surface disponible, exerce une pression considérable sur des terres agricoles déjà rares, dans un pays où la population reste très majoritairement rurale malgré la croissance de Bujumbura.\n\n" +
      "#### 2. Société\n" +
      "On y trouve les Hutus, les Tutsis et les Twa. Le kirundi, le français et l'anglais sont langues officielles ; le christianisme est majoritaire. Le pays a été marqué par une guerre civile (1993-2005).\n\n" +
      "Cette composition ethnique, partagée avec le Rwanda voisin, a nourri des cycles de violence intercommunautaire depuis l'indépendance, dont l'assassinat du président Ndadaye en 1993 a déclenché la plus longue et la plus meurtrière guerre civile de l'histoire du pays.",
      },
      {
        id: "course-geographie-32-burundi-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'économie repose sur une agriculture de subsistance et sur l'exportation de café et de thé. Le Burundi est l'un des pays les plus pauvres du monde ; il possède aussi du nickel.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Évariste Ndayishimiye, président depuis 2020. Monnaie : le franc burundais (BIF). Devise nationale : « Unité, Travail, Progrès ».\n\n" +
      "Le pays est indépendant de la Belgique depuis le 1er juillet 1962, en même temps que le Rwanda voisin dont il partageait alors l'administration coloniale. Membre de l'Union africaine et de la Communauté d'Afrique de l'Est, il s'est progressivement stabilisé depuis la fin de la guerre civile en 2005.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale politique : Gitega (depuis 2019) ; Bujumbura, sur le lac Tanganyika, reste la capitale économique. Les tambours sacrés du Burundi sont inscrits au patrimoine immatériel de l'UNESCO.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-32-burundi-quiz-1",
        question: "Dans quelle région des lacs se trouve le Burundi ?",
        options: ["Les Grands Lacs", "Les Grands Lacs d'Amérique", "La région des chotts", "Le bassin du Tchad"],
        correctIndex: 0,
        explanation: "Le Burundi appartient à la région des Grands Lacs d'Afrique de l'Est.",
      },
      {
        id: "course-geographie-32-burundi-quiz-2",
        question: "Quel grand lac borde le Burundi au sud-ouest ?",
        options: ["Le lac Tanganyika", "Le lac Victoria", "Le lac Tchad", "Le lac Malawi"],
        correctIndex: 0,
        explanation: "Le lac Tanganyika, l'un des plus profonds du monde, longe le Burundi.",
      },
      {
        id: "course-geographie-32-burundi-quiz-3",
        question: "Quelles sont les principales exportations du Burundi ?",
        options: ["Le café et le thé", "Le pétrole et le gaz", "Le cacao et le caoutchouc", "L'or et les diamants"],
        correctIndex: 0,
        explanation: "Le café et le thé sont les grandes exportations agricoles du Burundi.",
      },
      {
        id: "course-geographie-32-burundi-quiz-4",
        question: "Quelle est la capitale politique du Burundi ?",
        options: ["Bujumbura", "Gitega", "Ngozi", "Rumonge"],
        correctIndex: 1,
        explanation: "Gitega est devenue la capitale politique en 2019 ; Bujumbura reste la capitale économique.",
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
        title: "Le territoire",
        content:
      "#### 1. Situation territoriale\n" +
      "Les Comores forment un archipel de l'océan Indien, dans le canal du Mozambique, entre le Mozambique et Madagascar. Sur environ 1 860 km², le pays compte trois îles (Grande Comore, Anjouan, Mohéli) ; la quatrième, Mayotte, est restée française.\n\n" +
      "Le pays est organisé en trois îles autonomes dotées chacune d'un gouvernorat, sous une présidence fédérale tournante entre les îles. La séparation de Mayotte lors du référendum d'indépendance de 1974 reste une plaie ouverte de l'histoire nationale comorienne.\n\n" +
      "#### 2. Le milieu\n" +
      "Les îles sont volcaniques ; le Karthala, sur la Grande Comore, est un volcan encore actif. Le climat est tropical humide. Le pays est réputé pour ses plantes à parfum.\n\n" +
      "Le Karthala, qui culmine à plus de 2 300 m, entre régulièrement en éruption et façonne les paysages de la Grande Comore, île la plus vaste et la plus peuplée de l'archipel. Le climat tropical humide, tempéré par les alizés, favorise la culture de plantes à parfum comme l'ylang-ylang, le girofle et la vanille.",
      },
      {
        id: "course-geographie-33-comores-lesson-2",
        title: "Population et société",
        content:
      "#### 1. Population\n" +
      "Les Comores comptent environ 850 000 habitants (2024).\n\n" +
      "C'est l'un des pays les plus densément peuplés d'Afrique rapporté à sa surface, avec une forte émigration, notamment vers la France et vers Mayotte, qui entretient des liens économiques et familiaux étroits malgré la séparation politique.\n\n" +
      "#### 2. Société\n" +
      "La population, d'origine swahilie, arabe et africaine, parle le comorien (shikomori) ; l'arabe et le français sont aussi officiels. L'islam est très majoritaire.\n\n" +
      "Cette identité swahilie et arabo-africaine, façonnée par des siècles de commerce à travers l'océan Indien, rapproche les Comores autant du monde swahili côtier d'Afrique de l'Est que du monde arabe, une double appartenance qui se retrouve dans l'architecture et les traditions locales.",
      },
      {
        id: "course-geographie-33-comores-lesson-3",
        title: "Économie, politique et repères",
        content:
      "#### 1. Économie et ressources\n" +
      "L'agriculture domine : vanille, girofle et surtout ylang-ylang (les Comores sont un grand producteur mondial de cette fleur utilisée en parfumerie). La pêche et les transferts de la diaspora complètent une économie fragile.\n\n" +
      "#### 2. Institutions et politique\n" +
      "Régime : république (avec une présidence tournante entre les îles). Chef de l'État (2026) : Azali Assoumani. Monnaie : le franc comorien (KMF). Devise nationale : « Unité, Solidarité, Développement ».\n\n" +
      "Le pays est indépendant de la France depuis le 6 juillet 1975, à l'exception de Mayotte, qui a choisi par référendum de rester française. Membre de l'Union africaine et de la Ligue arabe, il a connu depuis l'indépendance de nombreuses tentatives de coups d'État et de sécession, notamment sur l'île d'Anjouan.\n\n" +
      "#### 3. Repères et singularités\n" +
      "Capitale : Moroni (sur la Grande Comore). Le volcan Karthala domine l'archipel. La question de Mayotte, revendiquée par les Comores mais département français, reste sensible. On surnomme le pays « les îles de la Lune ».",
      },
    ],
    quiz: [
      {
        id: "course-geographie-33-comores-quiz-1",
        question: "Les Comores sont géographiquement…",
        options: ["Un archipel de l'océan Indien", "Un pays enclavé", "Une péninsule", "Un haut plateau continental"],
        correctIndex: 0,
        explanation: "Les Comores sont un archipel volcanique situé dans le canal du Mozambique.",
      },
      {
        id: "course-geographie-33-comores-quiz-2",
        question: "Quelle plante à parfum les Comores produisent-elles en grande quantité ?",
        options: ["La lavande", "L'ylang-ylang", "Le jasmin", "La rose"],
        correctIndex: 1,
        explanation: "Les Comores sont l'un des grands producteurs mondiaux d'ylang-ylang, très utilisé en parfumerie.",
      },
      {
        id: "course-geographie-33-comores-quiz-3",
        question: "Quelle religion est très majoritaire aux Comores ?",
        options: ["Le christianisme", "L'islam", "L'hindouisme", "Le bouddhisme"],
        correctIndex: 1,
        explanation: "L'islam est la religion de la très grande majorité des Comoriens.",
      },
      {
        id: "course-geographie-33-comores-quiz-4",
        question: "Quelle est la capitale des Comores ?",
        options: ["Moroni", "Mutsamudu", "Fomboni", "Mamoudzou"],
        correctIndex: 0,
        explanation: "Moroni, sur la Grande Comore, est la capitale du pays.",
      },
      {
        id: "course-geographie-33-comores-quiz-5",
        question: "Quelle île de l'archipel des Comores est restée française ?",
        options: ["Mayotte", "Anjouan", "Mohéli", "La Grande Comore"],
        correctIndex: 0,
        explanation: "Mayotte a choisi de rester française et est un département d'outre-mer, ce que les Comores contestent.",
      },
    ],
  },
  {
    id: "course-geographie-34-djibouti",
    categoryId: "geo",
    emoji: "🇩🇯",
    title: "Djibouti",
    description: "Un petit pays stratégique à l'entrée de la mer Rouge, carrefour maritime et grande base militaire mondiale. Découvre Djibouti.",
    xp: 30,
    lessons: [
      {
        id: "course-geographie-34-djibouti-lesson-1",
        title: "Djibouti",
        content:
      "#### 1. Situation territoriale\n" +
      "Djibouti se situe dans la Corne de l'Afrique, à l'entrée sud de la mer Rouge (près du détroit de Bab-el-Mandeb), face au Yémen. Petit (environ 23 200 km²), il est bordé par l'Érythrée, l'Éthiopie et la Somalie.\n\n" +
      "#### 2. Le milieu\n" +
      "Le pays est désertique et volcanique, avec une chaleur extrême. Le lac Assal, à environ 155 m sous le niveau de la mer, est le point le plus bas d'Afrique ; c'est un lac salé. Les terres cultivables sont rares.\n\n" +
      "#### 3. Population\n" +
      "Djibouti compte environ 1,1 million d'habitants (2024), très concentrés dans la capitale.\n\n" +
      "#### 4. Société\n" +
      "Les deux principaux groupes sont les Afars et les Issas (Somalis). L'arabe et le français sont langues officielles ; l'islam est très majoritaire.\n\n" +
      "#### 5. Économie et ressources\n" +
      "Djibouti tire sa richesse de sa position stratégique : c'est un grand port de transit (débouché maritime de l'Éthiopie enclavée) et un centre logistique, qui accueille de nombreuses bases militaires étrangères (France, États-Unis, Chine…). Le pays a peu de ressources naturelles.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Ismaïl Omar Guelleh, réélu en avril 2026, au pouvoir depuis 1999. Monnaie : le franc djiboutien (DJF). Devise nationale : « Unité, Égalité, Paix ».\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Djibouti. Le lac Assal (point le plus bas d'Afrique) et le détroit de Bab-el-Mandeb, l'un des passages maritimes les plus fréquentés du monde, font la singularité du pays.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-34-djibouti-quiz-1",
        question: "Djibouti se situe à l'entrée de quelle mer ?",
        options: ["La mer Rouge", "La mer Noire", "La mer Caspienne", "La Méditerranée"],
        correctIndex: 0,
        explanation: "Djibouti contrôle l'accès sud de la mer Rouge, près du détroit de Bab-el-Mandeb.",
      },
      {
        id: "course-geographie-34-djibouti-quiz-2",
        question: "Quel lac de Djibouti est le point le plus bas d'Afrique ?",
        options: ["Le lac Assal", "Le lac Tana", "Le lac Turkana", "Le lac Albert"],
        correctIndex: 0,
        explanation: "Le lac Assal, salé, se trouve à environ 155 m sous le niveau de la mer.",
      },
      {
        id: "course-geographie-34-djibouti-quiz-3",
        question: "Qu'est-ce qui fait surtout la richesse de Djibouti ?",
        options: ["Sa position stratégique (port, bases militaires)", "Ses gisements de pétrole", "Ses forêts tropicales", "Ses terres agricoles"],
        correctIndex: 0,
        explanation: "Djibouti vit de son port de transit et de sa position stratégique à l'entrée de la mer Rouge.",
      },
      {
        id: "course-geographie-34-djibouti-quiz-4",
        question: "Quelle est la capitale de Djibouti ?",
        options: ["Djibouti", "Tadjoura", "Ali Sabieh", "Obock"],
        correctIndex: 0,
        explanation: "La ville de Djibouti porte le même nom que le pays et en est la capitale.",
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
    xp: 30,
    lessons: [
      {
        id: "course-geographie-35-erythree-lesson-1",
        title: "L'Érythrée",
        content:
      "#### 1. Situation territoriale\n" +
      "L'Érythrée occupe la Corne de l'Afrique avec une longue façade sur la mer Rouge. Sur environ 117 600 km², elle est bordée par le Soudan, l'Éthiopie et Djibouti, et fait face à la péninsule Arabique. L'archipel des Dahlak lui appartient.\n\n" +
      "#### 2. Le milieu\n" +
      "Des hauts plateaux centraux dominent des plaines côtières très chaudes, dont la dépression du Danakil, parmi les lieux les plus chauds de la planète. Le climat est aride.\n\n" +
      "#### 3. Population\n" +
      "L'Érythrée compte environ 3,5 millions d'habitants (2024), selon des estimations incertaines.\n\n" +
      "#### 4. Société\n" +
      "Les principaux groupes sont les Tigrinya, Tigré et Afars. Le tigrinya, l'arabe et l'anglais sont d'usage courant. Le christianisme orthodoxe et l'islam sont pratiqués à parts proches.\n\n" +
      "#### 5. Économie et ressources\n" +
      "L'économie, très fermée, repose sur l'agriculture, l'élevage et les mines (or, potasse). Un long service militaire obligatoire et l'isolement du pays nourrissent une forte émigration.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république à parti unique (sans élections nationales). Chef de l'État (2026) : Isaias Afwerki, au pouvoir depuis l'indépendance (1991-1993). Monnaie : le nakfa (ERN). Devise nationale : l'Érythrée n'a pas de devise nationale officielle consacrée.\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Asmara, réputée pour son architecture Art déco italienne (UNESCO). L'Érythrée est devenue indépendante de l'Éthiopie en 1993, après une longue guerre de libération.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-35-erythree-quiz-1",
        question: "Sur quelle mer l'Érythrée possède-t-elle une longue façade ?",
        options: ["La mer Rouge", "La Méditerranée", "L'océan Atlantique", "La mer Noire"],
        correctIndex: 0,
        explanation: "Toute la façade maritime de l'Érythrée donne sur la mer Rouge.",
      },
      {
        id: "course-geographie-35-erythree-quiz-2",
        question: "De quel pays l'Érythrée est-elle devenue indépendante en 1993 ?",
        options: ["L'Éthiopie", "Le Soudan", "Le Kenya", "La Somalie"],
        correctIndex: 0,
        explanation: "L'Érythrée a obtenu son indépendance de l'Éthiopie en 1993 après une longue guerre.",
      },
      {
        id: "course-geographie-35-erythree-quiz-3",
        question: "Quelle est la capitale de l'Érythrée, connue pour son architecture Art déco ?",
        options: ["Asmara", "Massaoua", "Keren", "Assab"],
        correctIndex: 0,
        explanation: "Asmara et son architecture Art déco italienne sont classées au patrimoine mondial de l'UNESCO.",
      },
      {
        id: "course-geographie-35-erythree-quiz-4",
        question: "La dépression du Danakil, en Érythrée, est connue pour être…",
        options: ["Parmi les lieux les plus chauds du monde", "Le plus haut sommet d'Afrique", "La plus grande forêt du continent", "Le plus grand lac d'Afrique"],
        correctIndex: 0,
        explanation: "La dépression du Danakil compte parmi les endroits les plus chauds et les plus arides de la planète.",
      },
      {
        id: "course-geographie-35-erythree-quiz-5",
        question: "Quelle est la monnaie de l'Érythrée ?",
        options: ["Le nakfa", "Le birr", "Le shilling", "Le franc CFA"],
        correctIndex: 0,
        explanation: "La monnaie érythréenne est le nakfa.",
      },
    ],
  },
  {
    id: "course-geographie-36-ethiopie",
    categoryId: "geo",
    emoji: "🇪🇹",
    title: "Éthiopie",
    description: "Un géant des hauts plateaux, berceau de l'humanité et seul pays africain jamais colonisé, deuxième le plus peuplé du continent. Découvre l'Éthiopie.",
    xp: 30,
    lessons: [
      {
        id: "course-geographie-36-ethiopie-lesson-1",
        title: "L'Éthiopie",
        content:
      "#### 1. Situation territoriale\n" +
      "L'Éthiopie occupe le cœur de la Corne de l'Afrique. Enclavée (elle a perdu son accès à la mer avec l'indépendance de l'Érythrée), elle s'étend sur environ 1,1 million de km² et voisine avec l'Érythrée, Djibouti, la Somalie, le Kenya, le Soudan du Sud et le Soudan.\n\n" +
      "#### 2. Le milieu\n" +
      "De vastes hauts plateaux (le « toit de l'Afrique ») sont entaillés par la vallée du Rift. Le Nil Bleu y prend sa source, au lac Tana. Le climat est tempéré en altitude et brûlant dans les basses terres (Danakil).\n\n" +
      "#### 3. Population\n" +
      "Avec environ 130 millions d'habitants (2024), l'Éthiopie est le deuxième pays le plus peuplé d'Afrique, après le Nigeria.\n\n" +
      "#### 4. Société\n" +
      "C'est une mosaïque de peuples (Oromos, Amharas, Tigréens, Somalis…). L'amharique sert de langue de travail fédérale, parmi de nombreuses langues. Le christianisme orthodoxe, très ancien, et l'islam dominent. Le pays a son propre alphabet et son propre calendrier.\n\n" +
      "#### 5. Économie et ressources\n" +
      "L'Éthiopie est le berceau du café et possède le premier cheptel d'Afrique. Le grand barrage de la Renaissance (GERD) sur le Nil Bleu doit fournir de l'électricité. La croissance a été forte, malgré des tensions internes (guerre du Tigré, 2020-2022).\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république fédérale parlementaire. Homme fort (2026) : le Premier ministre Abiy Ahmed, chef du gouvernement et prix Nobel de la paix 2019 ; la présidence de la République (Taye Atske Selassie) est un rôle protocolaire. Monnaie : le birr (ETB). Devise nationale : l'Éthiopie n'a pas de devise nationale officielle consacrée.\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Addis-Abeba, siège de l'Union africaine. Les églises rupestres de Lalibela, la ville d'Aksoum et le fossile de Lucy rappellent que le pays est un berceau de l'humanité. L'Éthiopie est le seul pays africain à n'avoir jamais été colonisé (victoire d'Adoua, 1896).",
      },
    ],
    quiz: [
      {
        id: "course-geographie-36-ethiopie-quiz-1",
        question: "L'Éthiopie est le deuxième pays le plus peuplé d'Afrique, après lequel ?",
        options: ["Le Nigeria", "L'Égypte", "La RD Congo", "L'Afrique du Sud"],
        correctIndex: 0,
        explanation: "Avec environ 130 millions d'habitants, l'Éthiopie vient juste après le Nigeria.",
      },
      {
        id: "course-geographie-36-ethiopie-quiz-2",
        question: "Quelle boisson a pour berceau l'Éthiopie ?",
        options: ["Le café", "Le thé", "Le cacao", "Le maté"],
        correctIndex: 0,
        explanation: "Le caféier est originaire des hauts plateaux éthiopiens ; le café y est une véritable institution.",
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
        explanation: "L'Éthiopie a conservé son indépendance, notamment grâce à la victoire d'Adoua contre l'Italie en 1896.",
      },
      {
        id: "course-geographie-36-ethiopie-quiz-5",
        question: "L'Éthiopie a-t-elle un accès à la mer ?",
        options: ["Oui, sur la mer Rouge", "Non, elle est enclavée", "Oui, sur l'océan Indien", "Oui, sur l'Atlantique"],
        correctIndex: 1,
        explanation: "L'Éthiopie est devenue enclavée après l'indépendance de l'Érythrée en 1993.",
      },
    ],
  },
  {
    id: "course-geographie-37-kenya",
    categoryId: "geo",
    emoji: "🇰🇪",
    title: "Kenya",
    description: "Terre de safaris et carrefour économique de l'Afrique de l'Est, à cheval sur l'équateur. Découvre le Kenya.",
    xp: 30,
    lessons: [
      {
        id: "course-geographie-37-kenya-lesson-1",
        title: "Le Kenya",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Kenya s'ouvre sur l'océan Indien, à cheval sur l'équateur, en Afrique de l'Est. Sur environ 580 000 km², il est bordé par l'Éthiopie, la Somalie, le Soudan du Sud, l'Ouganda et la Tanzanie, et longé à l'ouest par le lac Victoria.\n\n" +
      "#### 2. Le milieu\n" +
      "Une côte tropicale, de hauts plateaux centraux traversés par la vallée du Rift, le mont Kenya (environ 5 199 m, deuxième sommet d'Afrique) et de grandes savanes (Masai Mara) composent des paysages très variés.\n\n" +
      "#### 3. Population\n" +
      "Le Kenya compte environ 55 millions d'habitants (2024).\n\n" +
      "#### 4. Société\n" +
      "Le pays réunit de nombreux peuples (Kikuyu, Luo, Luhya, Kalenjin, Massaï…). Le swahili et l'anglais sont langues officielles ; le christianisme est majoritaire.\n\n" +
      "#### 5. Économie et ressources\n" +
      "Le Kenya est un grand exportateur de thé et de café, ainsi que de fleurs (horticulture). Le tourisme (safaris) et surtout Nairobi, hub financier et technologique (« Silicon Savannah », paiement mobile M-Pesa), font sa force.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : William Ruto, président depuis 2022. Monnaie : le shilling kenyan (KES). Devise nationale : « Harambee » (« Tous ensemble »).\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Nairobi. La réserve du Masai Mara (grande migration des gnous), le mont Kenya et la région du lac Turkana (fossiles humains) sont mondialement connus ; le pays est aussi la patrie de grands marathoniens.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-37-kenya-quiz-1",
        question: "Quelle boisson le Kenya exporte-t-il en grande quantité ?",
        options: ["Le thé", "Le vin", "Le cacao", "La bière"],
        correctIndex: 0,
        explanation: "Le Kenya est l'un des plus grands exportateurs de thé du monde.",
      },
      {
        id: "course-geographie-37-kenya-quiz-2",
        question: "Sur quelle ligne imaginaire le Kenya est-il situé ?",
        options: ["L'équateur", "Le tropique du Capricorne", "Le cercle polaire", "Le méridien de Greenwich"],
        correctIndex: 0,
        explanation: "L'équateur traverse le Kenya, ce qui explique la diversité de ses climats.",
      },
      {
        id: "course-geographie-37-kenya-quiz-3",
        question: "Quelle est la capitale du Kenya ?",
        options: ["Nairobi", "Mombasa", "Kisumu", "Nakuru"],
        correctIndex: 0,
        explanation: "Nairobi est la capitale et le grand hub économique de l'Afrique de l'Est.",
      },
      {
        id: "course-geographie-37-kenya-quiz-4",
        question: "Quelle réserve kényane est célèbre pour la grande migration des gnous ?",
        options: ["Le Masai Mara", "Le Serengeti", "Le Kruger", "Le Chobe"],
        correctIndex: 0,
        explanation: "Le Masai Mara accueille chaque année la spectaculaire migration des gnous depuis le Serengeti voisin.",
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
    xp: 30,
    lessons: [
      {
        id: "course-geographie-38-madagascar-lesson-1",
        title: "Madagascar",
        content:
      "#### 1. Situation territoriale\n" +
      "Madagascar est la plus grande île d'Afrique et la quatrième plus grande île du monde, dans l'océan Indien, séparée du continent par le canal du Mozambique. Elle s'étend sur environ 587 000 km².\n\n" +
      "#### 2. Le milieu\n" +
      "Des hauts plateaux centraux séparent une côte est humide et forestière d'un ouest plus sec. L'île abrite une biodiversité unique au monde : lémuriens, baobabs, caméléons — près de 90 % des espèces y sont endémiques. La déforestation est un défi majeur.\n\n" +
      "#### 3. Population\n" +
      "Madagascar compte environ 30 millions d'habitants (2024).\n\n" +
      "#### 4. Société\n" +
      "Fait unique : la population malgache est issue d'un métissage austronésien (venu d'Asie) et africain. Le malgache et le français sont langues officielles ; christianisme et religions traditionnelles cohabitent.\n\n" +
      "#### 5. Économie et ressources\n" +
      "Madagascar est le premier producteur mondial de vanille, avec le riz, le girofle, le nickel et le cobalt, et un tourisme tourné vers la nature. C'est l'un des pays les plus pauvres du monde.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : transition militaire depuis le coup d'État d'octobre 2025, qui a renversé le président Andry Rajoelina. Chef de l'État (2026) : le colonel Michael Randrianirina, président de la transition (investi en octobre 2025) ; une élection présidentielle est envisagée vers fin 2027. Monnaie : l'ariary (MGA). Devise nationale : « Fitiavana, Tanindrazana, Fandrosoana » (Amour, Patrie, Progrès).\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Antananarivo (« Tana »). L'allée des baobabs, les lémuriens, les forêts humides de l'Atsinanana (UNESCO) et les tsingy de Bemaraha font la réputation naturelle de l'île.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-38-madagascar-quiz-1",
        question: "Madagascar est la plus grande île de quel continent ?",
        options: ["L'Afrique", "L'Asie", "L'Océanie", "L'Amérique"],
        correctIndex: 0,
        explanation: "Madagascar est la plus grande île du continent africain et la quatrième du monde.",
      },
      {
        id: "course-geographie-38-madagascar-quiz-2",
        question: "Quel animal emblématique ne vit à l'état sauvage qu'à Madagascar ?",
        options: ["Le lémurien", "Le gorille", "Le tigre", "Le kangourou"],
        correctIndex: 0,
        explanation: "Les lémuriens sont endémiques de Madagascar : on ne les trouve nulle part ailleurs à l'état sauvage.",
      },
      {
        id: "course-geographie-38-madagascar-quiz-3",
        question: "Madagascar est le premier producteur mondial de quoi ?",
        options: ["La vanille", "Le cacao", "Le café", "Le coton"],
        correctIndex: 0,
        explanation: "Madagascar fournit l'essentiel de la vanille mondiale.",
      },
      {
        id: "course-geographie-38-madagascar-quiz-4",
        question: "Quelle est la capitale de Madagascar ?",
        options: ["Antananarivo", "Toamasina", "Mahajanga", "Antsirabe"],
        correctIndex: 0,
        explanation: "Antananarivo, surnommée « Tana », est la capitale sur les hauts plateaux.",
      },
      {
        id: "course-geographie-38-madagascar-quiz-5",
        question: "Quel océan entoure Madagascar ?",
        options: ["L'océan Indien", "L'océan Atlantique", "L'océan Pacifique", "L'océan Arctique"],
        correctIndex: 0,
        explanation: "Madagascar se trouve dans l'océan Indien, à l'est du continent africain.",
      },
    ],
  },
  {
    id: "course-geographie-39-maurice",
    categoryId: "geo",
    emoji: "🇲🇺",
    title: "Maurice",
    description: "Un modèle de réussite et de diversité dans l'océan Indien, célèbre pour son dodo disparu et ses lagons. Découvre l'île Maurice.",
    xp: 30,
    lessons: [
      {
        id: "course-geographie-39-maurice-lesson-1",
        title: "Maurice",
        content:
      "#### 1. Situation territoriale\n" +
      "Maurice est une île volcanique de l'océan Indien, à l'est de Madagascar, au sein de l'archipel des Mascareignes (avec Rodrigues). Petite (environ 2 040 km²), elle n'a aucune frontière terrestre.\n\n" +
      "#### 2. Le milieu\n" +
      "L'île, volcanique, associe un plateau central, des montagnes et une ceinture de lagons et de récifs coralliens. Le climat est tropical. C'est ici que vivait le dodo, oiseau devenu le symbole des espèces disparues.\n\n" +
      "#### 3. Population\n" +
      "Maurice compte environ 1,3 million d'habitants (2024), sur un territoire très densément peuplé.\n\n" +
      "#### 4. Société\n" +
      "La population est une mosaïque unique de descendants d'Indiens, d'Africains, de Chinois et d'Européens. L'anglais (officiel de fait), le français et le créole mauricien sont largement utilisés ; hindouisme majoritaire, christianisme et islam.\n\n" +
      "#### 5. Économie et ressources\n" +
      "Maurice a l'une des économies les plus prospères et diversifiées d'Afrique : tourisme haut de gamme, services financiers (place offshore), textile, sucre (canne à sucre) et technologies.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république à régime parlementaire. Chef du gouvernement (2026) : le Premier ministre Navin Ramgoolam (depuis novembre 2024) ; la présidence de la République (Dharam Gokhool) est un rôle protocolaire. Monnaie : la roupie mauricienne (MUR). Devise nationale : « Stella Clavisque Maris Indici » (L'étoile et la clé de l'océan Indien).\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Port-Louis. Le dodo (symbole national disparu), Le Morne Brabant (mémoire de l'esclavage, UNESCO) et l'Aapravasi Ghat (immigration engagée, UNESCO) témoignent de son histoire ; ses plages et lagons attirent le monde entier.",
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
    xp: 30,
    lessons: [
      {
        id: "course-geographie-40-ouganda-lesson-1",
        title: "L'Ouganda",
        content:
      "#### 1. Situation territoriale\n" +
      "L'Ouganda est un pays enclavé d'Afrique de l'Est, à cheval sur l'équateur. Sur environ 241 550 km², il est bordé par le Kenya, le Soudan du Sud, la RD Congo, le Rwanda et la Tanzanie, et longé au sud par le lac Victoria.\n\n" +
      "#### 2. Le milieu\n" +
      "C'est un plateau vert et fertile, riche en lacs. Le Nil Blanc sort du lac Victoria à Jinja. À l'ouest, les monts Rwenzori (« montagnes de la Lune ») portent des neiges à l'équateur. Le climat est tempéré par l'altitude.\n\n" +
      "#### 3. Population\n" +
      "L'Ouganda compte environ 48 millions d'habitants (2024), une population très jeune.\n\n" +
      "#### 4. Société\n" +
      "Les Bagandas (royaume du Buganda) et de nombreux autres peuples composent la nation. L'anglais et le swahili sont officiels, le luganda répandu ; le christianisme est majoritaire, avec une minorité musulmane.\n\n" +
      "#### 5. Économie et ressources\n" +
      "L'économie repose sur l'agriculture — le café est la principale exportation, avec le thé —, la pêche et un secteur pétrolier en développement autour du lac Albert. Le tourisme (gorilles de montagne) est prometteur.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Yoweri Museveni, réélu en janvier 2026, au pouvoir depuis 1986. Monnaie : le shilling ougandais (UGX). Devise nationale : « For God and My Country » (Pour Dieu et mon pays).\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Kampala. La source du Nil Blanc à Jinja, les gorilles de montagne de la forêt de Bwindi (UNESCO), les monts Rwenzori et le royaume traditionnel du Buganda font la richesse du pays.",
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
    xp: 30,
    lessons: [
      {
        id: "course-geographie-41-rwanda-lesson-1",
        title: "Le Rwanda",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Rwanda est un petit pays enclavé de la région des Grands Lacs. Sur environ 26 300 km², il est bordé par l'Ouganda, la Tanzanie, le Burundi et la RD Congo.\n\n" +
      "#### 2. Le milieu\n" +
      "Surnommé le « pays des mille collines », il est fait de collines et de montagnes, avec les volcans des Virunga au nord-ouest et le lac Kivu à l'ouest. Le climat est tempéré par l'altitude.\n\n" +
      "#### 3. Population\n" +
      "Le Rwanda compte environ 14 millions d'habitants (2024) et figure parmi les pays les plus densément peuplés d'Afrique.\n\n" +
      "#### 4. Société\n" +
      "On y trouve les Hutus, les Tutsis et les Twa. Le kinyarwanda, le français, l'anglais et le swahili sont officiels ; le christianisme est majoritaire. Le pays reste profondément marqué par le génocide des Tutsis de 1994.\n\n" +
      "#### 5. Économie et ressources\n" +
      "L'économie repose sur le café, le thé, un tourisme haut de gamme (gorilles de montagne) et les services. Kigali est réputée pour sa propreté et sa sécurité, et le pays connaît une croissance soutenue.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Paul Kagame, président depuis 2000 (réélu en 2024). Monnaie : le franc rwandais (RWF). Devise nationale : « Unité, Travail, Patriotisme ».\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Kigali, l'une des villes les plus propres d'Afrique. Le parc des Volcans (gorilles de montagne), le lac Kivu et la mémoire du génocide de 1994 marquent le pays, surnommé « le pays des mille collines ».",
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
    xp: 30,
    lessons: [
      {
        id: "course-geographie-42-seychelles-lesson-1",
        title: "Les Seychelles",
        content:
      "#### 1. Situation territoriale\n" +
      "Les Seychelles forment un archipel de 115 îles dans l'océan Indien, au nord-est de Madagascar. Très petit (environ 455 km²), c'est le plus petit État d'Afrique par la superficie ; il n'a aucune frontière terrestre.\n\n" +
      "#### 2. Le milieu\n" +
      "On distingue des îles granitiques (Mahé, Praslin, La Digue) et des îles coralliennes plus basses. Plages, forêts et récifs abritent une biodiversité unique : tortues géantes d'Aldabra et coco de mer. Le climat est tropical.\n\n" +
      "#### 3. Population\n" +
      "Les Seychelles comptent environ 130 000 habitants (2024).\n\n" +
      "#### 4. Société\n" +
      "La population est créole, issue d'un métissage africain, européen et asiatique. Le créole seychellois, l'anglais et le français sont officiels ; le christianisme est majoritaire.\n\n" +
      "#### 5. Économie et ressources\n" +
      "L'économie repose sur le tourisme haut de gamme et la pêche au thon. Grâce à eux, les Seychelles affichent le PIB par habitant le plus élevé d'Afrique.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Patrick Herminie, élu en octobre 2025 (il a succédé à Wavel Ramkalawan). Monnaie : la roupie seychelloise (SCR). Devise nationale : « Finis Coronat Opus » (La fin couronne l'œuvre).\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Victoria, l'une des plus petites capitales du monde. L'atoll d'Aldabra (tortues géantes, UNESCO) et la vallée de Mai (coco de mer, UNESCO) sont des trésors naturels, tout comme les plages d'Anse Source d'Argent.",
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
    xp: 30,
    lessons: [
      {
        id: "course-geographie-43-somalie-lesson-1",
        title: "La Somalie",
        content:
      "#### 1. Situation territoriale\n" +
      "La Somalie forme la pointe est de la Corne de l'Afrique. Sur environ 638 000 km², elle possède la plus longue côte d'Afrique continentale (sur l'océan Indien et le golfe d'Aden) et voisine avec Djibouti, l'Éthiopie et le Kenya.\n\n" +
      "#### 2. Le milieu\n" +
      "Le pays est fait de plateaux semi-arides et de savanes sèches, au climat chaud et aride. Deux rivières, le Jubba et le Shabelle, arrosent le sud, plus fertile.\n\n" +
      "#### 3. Population\n" +
      "La Somalie compte environ 18 millions d'habitants (2024), en partie nomades pasteurs.\n\n" +
      "#### 4. Société\n" +
      "Fait rare en Afrique, la population est très homogène : un même peuple somali, une même langue, une même religion. Le somali et l'arabe sont officiels ; l'islam est religion d'État. La société est organisée en clans.\n\n" +
      "#### 5. Économie et ressources\n" +
      "L'économie repose sur l'élevage (exportation de bétail vers la péninsule Arabique), l'agriculture, la pêche et les transferts de la diaspora. Des décennies de guerre civile et l'insécurité (Al-Shabaab) l'ont profondément désorganisée.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république fédérale (en reconstruction). Chef de l'État (2026) : Hassan Sheikh Mohamud, président depuis 2022. Le Somaliland, au nord, est une région séparatiste non reconnue internationalement. Monnaie : le shilling somalien (SOS). Devise nationale : la Somalie n'a pas de devise nationale officielle consacrée.\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Mogadiscio, sur l'océan Indien. Le pays possède la plus longue côte du continent et une importante diaspora ; la région était liée dans l'Antiquité au commerce de l'encens (« pays de Pount »).",
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
    xp: 30,
    lessons: [
      {
        id: "course-geographie-44-soudan-du-sud-lesson-1",
        title: "Le Soudan du Sud",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Soudan du Sud est un pays enclavé d'Afrique de l'Est. Sur environ 620 000 km², il est bordé par le Soudan, l'Éthiopie, le Kenya, l'Ouganda, la RD Congo et la Centrafrique, et traversé par le Nil Blanc.\n\n" +
      "#### 2. Le milieu\n" +
      "De vastes plaines et savanes couvrent le pays. Le Sudd, immense marécage sur le Nil Blanc, est l'une des plus grandes zones humides du monde. Le climat est tropical, avec une saison des pluies marquée.\n\n" +
      "#### 3. Population\n" +
      "Le Soudan du Sud compte environ 11 millions d'habitants (2024).\n\n" +
      "#### 4. Société\n" +
      "Les principaux peuples sont les Dinka, les Nuer et les Shilluk. L'anglais est la langue officielle. Le christianisme et les religions traditionnelles dominent — une différence avec le Soudan majoritairement musulman, à l'origine de la séparation.\n\n" +
      "#### 5. Économie et ressources\n" +
      "L'économie dépend presque entièrement du pétrole, qui fournit l'essentiel des revenus de l'État, complété par l'élevage. C'est l'un des pays les plus pauvres du monde, ravagé par une guerre civile (2013-2018) et une grande fragilité.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Salva Kiir Mayardit, président depuis l'indépendance de 2011 ; les élections y sont sans cesse reportées. Monnaie : la livre sud-soudanaise (SSP). Devise nationale : « Justice, Liberté, Prospérité ».\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Juba, sur le Nil Blanc. Le marais du Sudd et, surtout, l'indépendance obtenue en juillet 2011 — qui en fait le plus jeune État reconnu par l'ONU — marquent son identité.",
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
    xp: 30,
    lessons: [
      {
        id: "course-geographie-45-tanzanie-lesson-1",
        title: "La Tanzanie",
        content:
      "#### 1. Situation territoriale\n" +
      "La Tanzanie s'ouvre sur l'océan Indien, en Afrique de l'Est. Sur environ 945 000 km², elle est bordée par huit pays et comprend l'archipel de Zanzibar. Elle borde trois grands lacs : Victoria, Tanganyika et Malawi.\n\n" +
      "#### 2. Le milieu\n" +
      "Des plateaux et de vastes savanes (Serengeti) entourent le Kilimandjaro (environ 5 895 m, plus haut sommet d'Afrique). La vallée du Rift et les grands lacs complètent des paysages spectaculaires. Le climat est tropical, chaud sur la côte.\n\n" +
      "#### 3. Population\n" +
      "La Tanzanie compte environ 67 millions d'habitants (2024).\n\n" +
      "#### 4. Société\n" +
      "Le pays réunit plus de 120 groupes ethniques, mais avec une forte unité nationale. Le swahili, langue nationale unificatrice, et l'anglais sont officiels ; christianisme et islam sont pratiqués à parts proches (Zanzibar est musulmane).\n\n" +
      "#### 5. Économie et ressources\n" +
      "L'économie repose sur le tourisme (safaris, Kilimandjaro, plages de Zanzibar), l'agriculture (café, coton, noix de cajou, girofle de Zanzibar), l'or et le gaz naturel.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république unie (Tanganyika et Zanzibar semi-autonome). Chef de l'État (2026) : Samia Suluhu Hassan, réélue en octobre 2025 (première femme présidente du pays, arrivée au pouvoir en 2021). Monnaie : le shilling tanzanien (TZS). Devise nationale : « Uhuru na Umoja » (Liberté et Unité).\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale officielle : Dodoma ; Dar es Salaam est la capitale économique. Le Kilimandjaro, le Serengeti (grande migration), l'île de Zanzibar (Stone Town, UNESCO) et les gorges d'Olduvai (fossiles humains) sont mondialement célèbres.",
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
    xp: 30,
    lessons: [
      {
        id: "course-geographie-46-afrique-du-sud-lesson-1",
        title: "L'Afrique du Sud",
        content:
      "#### 1. Situation territoriale\n" +
      "L'Afrique du Sud occupe la pointe sud du continent, où se rejoignent les océans Atlantique et Indien. Sur environ 1,22 million de km², elle est bordée par la Namibie, le Botswana, le Zimbabwe, le Mozambique et l'Eswatini, et entoure entièrement le Lesotho.\n\n" +
      "#### 2. Le milieu\n" +
      "Un vaste haut plateau intérieur (Highveld) est bordé par la chaîne du Drakensberg et des plaines côtières ; on y trouve aussi le désert du Karoo et une frange du Kalahari. Le climat est varié ; le cap de Bonne-Espérance marque la pointe sud-ouest.\n\n" +
      "#### 3. Population\n" +
      "L'Afrique du Sud compte environ 62 millions d'habitants (2024).\n\n" +
      "#### 4. Société\n" +
      "C'est la nation « arc-en-ciel », aux onze langues officielles (zoulou, xhosa, afrikaans, anglais…). La majorité est noire (Zoulous, Xhosas…), avec des minorités blanche, métisse et indienne. Le pays reste marqué par l'apartheid, aboli en 1994 avec Nelson Mandela.\n\n" +
      "#### 5. Économie et ressources\n" +
      "C'est l'économie la plus industrialisée et diversifiée d'Afrique : mines (or, platine — 1er producteur mondial —, diamants, charbon), industrie, finance (Johannesburg), vin et agriculture.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république (démocratie parlementaire). Chef de l'État (2026) : Cyril Ramaphosa, président à la tête d'un gouvernement d'union nationale depuis 2024. Monnaie : le rand (ZAR). Devise nationale : « ǃke e꞉ ǀxarra ǁke » (« Unité dans la diversité », en langue khoïsan).\n\n" +
      "#### 7. Repères et singularités\n" +
      "Le pays a trois capitales : Pretoria (exécutif), Le Cap (législatif) et Bloemfontein (judiciaire). Table Mountain, Robben Island (où Mandela fut emprisonné, UNESCO), Soweto et le parc Kruger sont emblématiques.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-46-afrique-du-sud-quiz-1",
        question: "Combien de capitales l'Afrique du Sud possède-t-elle ?",
        options: ["Trois", "Une", "Deux", "Quatre"],
        correctIndex: 0,
        explanation: "Pretoria (exécutif), Le Cap (législatif) et Bloemfontein (judiciaire) se partagent les fonctions de capitale.",
      },
      {
        id: "course-geographie-46-afrique-du-sud-quiz-2",
        question: "L'Afrique du Sud est le premier producteur mondial de quel métal précieux ?",
        options: ["Le platine", "L'aluminium", "Le fer", "Le zinc"],
        correctIndex: 0,
        explanation: "L'Afrique du Sud domine la production mondiale de platine et reste un grand producteur d'or.",
      },
      {
        id: "course-geographie-46-afrique-du-sud-quiz-3",
        question: "Quel système de ségrégation raciale a été aboli en 1994 ?",
        options: ["L'apartheid", "La ségrégation scolaire", "Le servage", "La colonisation"],
        correctIndex: 0,
        explanation: "L'apartheid a pris fin en 1994 avec les premières élections multiraciales et l'élection de Nelson Mandela.",
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
        explanation: "L'Afrique du Sud reconnaît onze langues officielles, symbole de sa diversité.",
      },
    ],
  },
  {
    id: "course-geographie-47-botswana",
    categoryId: "geo",
    emoji: "🇧🇼",
    title: "Botswana",
    description: "Un modèle de stabilité démocratique, pays du désert du Kalahari, des diamants et du delta de l'Okavango. Découvre le Botswana.",
    xp: 30,
    lessons: [
      {
        id: "course-geographie-47-botswana-lesson-1",
        title: "Le Botswana",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Botswana est un pays enclavé d'Afrique australe. Sur environ 582 000 km², il est bordé par la Namibie, l'Afrique du Sud, le Zimbabwe et la Zambie (avec un point de rencontre quadruple près du Zambèze).\n\n" +
      "#### 2. Le milieu\n" +
      "Le désert du Kalahari (semi-aride) couvre une grande partie du pays. Au nord-ouest s'épanouit le magnifique delta de l'Okavango, un delta intérieur (le fleuve se perd dans les sables) riche en faune, classé à l'UNESCO. Le climat est aride à semi-aride.\n\n" +
      "#### 3. Population\n" +
      "Le Botswana compte environ 2,7 millions d'habitants (2024), avec une faible densité.\n\n" +
      "#### 4. Société\n" +
      "La majorité est tswana. L'anglais (officiel) et le setswana sont parlés ; le christianisme est majoritaire. Le pays est une démocratie stable depuis son indépendance (1966).\n\n" +
      "#### 5. Économie et ressources\n" +
      "Le diamant est le socle de la prospérité (le Botswana est l'un des plus grands producteurs mondiaux), avec le tourisme (Okavango, safaris) et l'élevage. Le pays affiche l'un des meilleurs revenus par habitant d'Afrique et une bonne gouvernance.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Duma Boko, président depuis novembre 2024 (première alternance après des décennies de pouvoir d'un même parti). Monnaie : le pula (BWP). Devise nationale : « Pula » (« Pluie »).\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Gaborone. Le delta de l'Okavango, le désert du Kalahari et les grandes concentrations d'éléphants (parc de Chobe) font sa réputation, tout comme sa gestion exemplaire des diamants.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-47-botswana-quiz-1",
        question: "Quel désert couvre une grande partie du Botswana ?",
        options: ["Le Kalahari", "Le Sahara", "Le Namib", "Le désert du Danakil"],
        correctIndex: 0,
        explanation: "Le désert semi-aride du Kalahari occupe une large part du territoire botswanais.",
      },
      {
        id: "course-geographie-47-botswana-quiz-2",
        question: "Quelle ressource fait la prospérité du Botswana ?",
        options: ["Les diamants", "Le pétrole", "Le cacao", "Le café"],
        correctIndex: 0,
        explanation: "Le Botswana est l'un des plus grands producteurs de diamants au monde, socle de son développement.",
      },
      {
        id: "course-geographie-47-botswana-quiz-3",
        question: "Quel célèbre delta intérieur se trouve au Botswana ?",
        options: ["Le delta de l'Okavango", "Le delta du Nil", "Le delta du Niger", "Le delta du Gange"],
        correctIndex: 0,
        explanation: "Le delta de l'Okavango, où le fleuve se perd dans les sables, est un sanctuaire de faune classé à l'UNESCO.",
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
        explanation: "Le Botswana est un pays enclavé d'Afrique australe.",
      },
    ],
  },
  {
    id: "course-geographie-48-eswatini",
    categoryId: "geo",
    emoji: "🇸🇿",
    title: "Eswatini",
    description: "L'une des dernières monarchies absolues du monde, petit royaume enclavé d'Afrique australe. Découvre l'Eswatini.",
    xp: 30,
    lessons: [
      {
        id: "course-geographie-48-eswatini-lesson-1",
        title: "L'Eswatini",
        content:
      "#### 1. Situation territoriale\n" +
      "L'Eswatini est un petit pays enclavé d'Afrique australe (environ 17 400 km²). Il est presque entièrement entouré par l'Afrique du Sud, avec une frontière à l'est avec le Mozambique.\n\n" +
      "#### 2. Le milieu\n" +
      "Le relief passe du Highveld montagneux à l'ouest au Lowveld chaud à l'est. Le climat est varié ; les paysages verdoyants et les réserves de faune sont réputés.\n\n" +
      "#### 3. Population\n" +
      "L'Eswatini compte environ 1,2 million d'habitants (2024).\n\n" +
      "#### 4. Société\n" +
      "La population swazie est très homogène. Le siSwati et l'anglais sont officiels ; le christianisme, mêlé de traditions, est majoritaire. La culture est vivace, avec des cérémonies comme l'Umhlanga (danse des roseaux).\n\n" +
      "#### 5. Économie et ressources\n" +
      "L'économie repose sur le sucre (canne à sucre, principale exportation), le bois et le textile. Elle est très dépendante de l'Afrique du Sud, et sa monnaie est liée au rand.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : monarchie absolue (l'une des dernières au monde). Chef de l'État (2026) : le Roi Mswati III. Monnaie : le lilangeni (SZL), à parité avec le rand sud-africain. Devise nationale : « Siyinqaba » (« Nous sommes une forteresse »).\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitales : Mbabane (administrative) et Lobamba (royale et législative). La cérémonie de l'Umhlanga (danse des roseaux) est célèbre. Le pays, longtemps appelé Swaziland, a été rebaptisé Eswatini en 2018.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-48-eswatini-quiz-1",
        question: "Quel régime politique caractérise l'Eswatini ?",
        options: ["Une monarchie absolue", "Une république présidentielle", "Un régime militaire", "Une fédération"],
        correctIndex: 0,
        explanation: "L'Eswatini est l'une des dernières monarchies absolues du monde, dirigée par le roi Mswati III.",
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
    xp: 30,
    lessons: [
      {
        id: "course-geographie-49-lesotho-lesson-1",
        title: "Le Lesotho",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Lesotho est un pays enclavé, entièrement entouré par l'Afrique du Sud — l'un des rares « États-enclaves » au monde. Il s'étend sur environ 30 355 km².\n\n" +
      "#### 2. Le milieu\n" +
      "C'est un pays de haute montagne (les monts Maloti, prolongement du Drakensberg) : tout son territoire se situe au-dessus de 1 000 m d'altitude, ce qui en fait le pays le plus « haut » du monde. Il connaît un climat frais, avec de la neige en hiver, et abrite la source du fleuve Orange.\n\n" +
      "#### 3. Population\n" +
      "Le Lesotho compte environ 2,3 millions d'habitants (2024).\n\n" +
      "#### 4. Société\n" +
      "La population basotho est très homogène. Le sesotho et l'anglais sont officiels ; le christianisme est majoritaire. La culture du cheval et la fameuse couverture basotho font partie de l'identité nationale.\n\n" +
      "#### 5. Économie et ressources\n" +
      "L'eau est une ressource clé, exportée vers l'Afrique du Sud (Lesotho Highlands Water Project). S'y ajoutent le textile, les diamants, l'élevage et les transferts des Basotho travaillant en Afrique du Sud.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : monarchie constitutionnelle. Chef de l'État (2026) : le Roi Letsie III (rôle protocolaire) ; le chef du gouvernement est le Premier ministre (Sam Matekane). Monnaie : le loti (LSL), à parité avec le rand. Devise nationale : « Khotso, Pula, Nala » (Paix, Pluie, Prospérité).\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Maseru. Surnommé le « royaume dans le ciel », le Lesotho est le château d'eau de l'Afrique australe. Ses cavaliers basotho et leurs couvertures colorées sont emblématiques.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-49-lesotho-quiz-1",
        question: "Quel pays entoure entièrement le Lesotho ?",
        options: ["L'Afrique du Sud", "Le Botswana", "Le Mozambique", "La Namibie"],
        correctIndex: 0,
        explanation: "Le Lesotho est entièrement enclavé dans l'Afrique du Sud, un cas très rare dans le monde.",
      },
      {
        id: "course-geographie-49-lesotho-quiz-2",
        question: "Quel surnom donne-t-on au Lesotho ?",
        options: ["« Le royaume dans le ciel »", "« La perle de l'Afrique »", "« Le cœur chaud de l'Afrique »", "« Le grenier de l'Afrique »"],
        correctIndex: 0,
        explanation: "En raison de sa haute altitude, le Lesotho est surnommé « le royaume dans le ciel ».",
      },
      {
        id: "course-geographie-49-lesotho-quiz-3",
        question: "Quelle ressource le Lesotho exporte-t-il vers l'Afrique du Sud ?",
        options: ["L'eau", "Le pétrole", "Le gaz", "Le charbon"],
        correctIndex: 0,
        explanation: "Grâce à ses montagnes et ses barrages, le Lesotho vend de l'eau à l'Afrique du Sud.",
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
        explanation: "Le Lesotho est une monarchie constitutionnelle, avec un roi (Letsie III) et un Premier ministre.",
      },
    ],
  },
  {
    id: "course-geographie-50-malawi",
    categoryId: "geo",
    emoji: "🇲🇼",
    title: "Malawi",
    description: "« Le cœur chaud de l'Afrique », pays du grand lac Malawi, densément peuplé et agricole. Découvre le Malawi.",
    xp: 30,
    lessons: [
      {
        id: "course-geographie-50-malawi-lesson-1",
        title: "Le Malawi",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Malawi est un pays enclavé d'Afrique australe. Sur environ 118 500 km², il est bordé par la Tanzanie, le Mozambique et la Zambie. Le lac Malawi occupe une grande partie de sa frontière est.\n\n" +
      "#### 2. Le milieu\n" +
      "Le lac Malawi, l'un des plus grands d'Afrique, très riche en poissons colorés endémiques (cichlidés), est classé à l'UNESCO. La vallée du Rift, des plateaux et de hauts reliefs (mont Mulanje) composent le paysage. Le climat est tropical.\n\n" +
      "#### 3. Population\n" +
      "Le Malawi compte environ 21 millions d'habitants (2024), avec une forte densité.\n\n" +
      "#### 4. Société\n" +
      "Les peuples Chewa, Yao et Tumbuka sont les plus nombreux. Le chichewa et l'anglais sont officiels ; le christianisme est majoritaire, avec une minorité musulmane. Le pays est réputé pour son accueil.\n\n" +
      "#### 5. Économie et ressources\n" +
      "L'agriculture domine : le tabac est la principale exportation, avec le thé, le sucre et le maïs ; la pêche dans le lac complète les ressources. C'est l'un des pays les plus pauvres du monde.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Peter Mutharika, élu en septembre 2025 (il a battu le président sortant Lazarus Chakwera). Monnaie : le kwacha malawite (MWK). Devise nationale : « Unity and Freedom » (Unité et Liberté).\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Lilongwe. Le lac Malawi (plongée, poissons cichlidés) et le mont Mulanje sont ses grands atouts. Le pays est surnommé « le cœur chaud de l'Afrique ».",
      },
    ],
    quiz: [
      {
        id: "course-geographie-50-malawi-quiz-1",
        question: "Quel grand lac domine le Malawi ?",
        options: ["Le lac Malawi", "Le lac Victoria", "Le lac Tchad", "Le lac Turkana"],
        correctIndex: 0,
        explanation: "Le lac Malawi occupe une grande partie du pays et regorge de poissons endémiques.",
      },
      {
        id: "course-geographie-50-malawi-quiz-2",
        question: "Quel est le surnom du Malawi ?",
        options: ["« Le cœur chaud de l'Afrique »", "« La perle de l'Afrique »", "« Le royaume dans le ciel »", "« Le grenier de l'Afrique »"],
        correctIndex: 0,
        explanation: "Le Malawi est surnommé « le cœur chaud de l'Afrique » pour l'accueil de ses habitants.",
      },
      {
        id: "course-geographie-50-malawi-quiz-3",
        question: "Quelle est la principale exportation agricole du Malawi ?",
        options: ["Le tabac", "Le cacao", "Le café", "Le coton"],
        correctIndex: 0,
        explanation: "Le tabac est de longue date la première exportation du Malawi.",
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
    xp: 30,
    lessons: [
      {
        id: "course-geographie-51-mozambique-lesson-1",
        title: "Le Mozambique",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Mozambique s'étire le long d'une très longue façade sur l'océan Indien (canal du Mozambique, face à Madagascar). Sur environ 801 000 km², il est bordé par la Tanzanie, le Malawi, la Zambie, le Zimbabwe, l'Afrique du Sud et l'Eswatini ; le fleuve Zambèze le traverse.\n\n" +
      "#### 2. Le milieu\n" +
      "Le pays associe une longue côte de plages et de mangroves, des plaines côtières et des plateaux à l'intérieur. Le Zambèze et le barrage de Cahora Bassa fournissent de l'énergie. Le climat est tropical, exposé aux cyclones.\n\n" +
      "#### 3. Population\n" +
      "Le Mozambique compte environ 34 millions d'habitants (2024).\n\n" +
      "#### 4. Société\n" +
      "De nombreux peuples (Makhuwa, Tsonga, Sena…) composent la nation. Le portugais est la langue officielle ; christianisme et islam (côte swahilie au nord) cohabitent. C'est une ancienne colonie portugaise.\n\n" +
      "#### 5. Économie et ressources\n" +
      "Le gaz naturel offshore (immenses gisements du Cabo Delgado, au nord) est une richesse d'avenir, avec le charbon, l'aluminium, l'agriculture (noix de cajou, crevettes) et l'hydroélectricité. Le pays fait toutefois face à une insurrection au nord et à la pauvreté.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Daniel Chapo, président depuis janvier 2025. Monnaie : le metical (MZN). Devise nationale : le Mozambique n'a pas de devise nationale officielle consacrée.\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Maputo. L'Ilha de Moçambique (UNESCO) et l'archipel de Bazaruto (plages) sont ses joyaux. Le pays garde la mémoire de la lutte anticoloniale (FRELIMO) et de Samora Machel.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-51-mozambique-quiz-1",
        question: "Sur quel océan le Mozambique possède-t-il une longue façade ?",
        options: ["L'océan Indien", "L'océan Atlantique", "L'océan Pacifique", "La mer Méditerranée"],
        correctIndex: 0,
        explanation: "Toute la façade maritime du Mozambique donne sur l'océan Indien, face à Madagascar.",
      },
      {
        id: "course-geographie-51-mozambique-quiz-2",
        question: "Quelle ressource énergétique fait la richesse récente du nord du Mozambique ?",
        options: ["Le gaz naturel", "Le charbon de bois", "L'énergie éolienne", "Le pétrole de schiste"],
        correctIndex: 0,
        explanation: "D'immenses gisements de gaz naturel ont été découverts au large du Cabo Delgado.",
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
        explanation: "Le Zambèze traverse le Mozambique, où le barrage de Cahora Bassa produit de l'électricité.",
      },
    ],
  },
  {
    id: "course-geographie-52-namibie",
    categoryId: "geo",
    emoji: "🇳🇦",
    title: "Namibie",
    description: "Un pays de déserts spectaculaires et de faune, à la plus faible densité de population d'Afrique. Découvre la Namibie.",
    xp: 30,
    lessons: [
      {
        id: "course-geographie-52-namibie-lesson-1",
        title: "La Namibie",
        content:
      "#### 1. Situation territoriale\n" +
      "La Namibie s'étend sur la côte atlantique d'Afrique australe. Sur environ 825 000 km², elle est bordée par l'Angola, la Zambie, le Botswana et l'Afrique du Sud ; la fine bande de Caprivi s'étire au nord-est.\n\n" +
      "#### 2. Le milieu\n" +
      "Le pays est marqué par deux déserts : le Namib (le plus vieux désert du monde, avec les dunes de Sossusvlei) le long de la côte, et le Kalahari à l'est. La côte des Squelettes et un climat aride en font l'un des pays les moins densément peuplés du monde.\n\n" +
      "#### 3. Population\n" +
      "La Namibie compte environ 3 millions d'habitants (2024), avec une très faible densité.\n\n" +
      "#### 4. Société\n" +
      "De nombreux peuples (Ovambo, Herero, Nama, San, minorité germanophone) composent la nation. L'anglais est la langue officielle ; l'afrikaans et l'allemand sont présents (héritage colonial). Le christianisme est majoritaire.\n\n" +
      "#### 5. Économie et ressources\n" +
      "L'économie repose sur les mines : diamants, uranium (la Namibie est un grand producteur), or et zinc, ainsi que l'élevage, la pêche et le tourisme (Namib, faune d'Etosha). C'est un pays à revenu intermédiaire, mais très inégalitaire.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Netumbo Nandi-Ndaitwah, première femme présidente de la Namibie (depuis mars 2025). Monnaie : le dollar namibien (NAD), à parité avec le rand. Devise nationale : « Unity, Liberty, Justice » (Unité, Liberté, Justice).\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Windhoek. Les dunes de Sossusvlei (désert du Namib), le parc d'Etosha et la côte des Squelettes sont mondialement connus. La Namibie est devenue indépendante de l'Afrique du Sud en 1990.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-52-namibie-quiz-1",
        question: "Quel désert longe la côte de la Namibie ?",
        options: ["Le Namib", "Le Sahara", "Le désert de Gobi", "Le désert d'Atacama"],
        correctIndex: 0,
        explanation: "Le Namib, considéré comme le plus vieux désert du monde, borde la côte atlantique namibienne.",
      },
      {
        id: "course-geographie-52-namibie-quiz-2",
        question: "La Namibie a l'une des plus faibles… d'Afrique.",
        options: ["Densités de population", "Réserves d'or", "Longueurs de côte", "Superficies"],
        correctIndex: 0,
        explanation: "Avec ses vastes déserts, la Namibie est l'un des pays les moins densément peuplés du monde.",
      },
      {
        id: "course-geographie-52-namibie-quiz-3",
        question: "Quel minerai radioactif la Namibie produit-elle en grande quantité ?",
        options: ["L'uranium", "Le cuivre", "La bauxite", "Le fer"],
        correctIndex: 0,
        explanation: "La Namibie est l'un des grands producteurs mondiaux d'uranium.",
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
        explanation: "Netumbo Nandi-Ndaitwah est devenue la première femme présidente de la Namibie.",
      },
    ],
  },
  {
    id: "course-geographie-53-zambie",
    categoryId: "geo",
    emoji: "🇿🇲",
    title: "Zambie",
    description: "Pays du cuivre et des chutes Victoria, au cœur de l'Afrique australe. Découvre la Zambie.",
    xp: 30,
    lessons: [
      {
        id: "course-geographie-53-zambie-lesson-1",
        title: "La Zambie",
        content:
      "#### 1. Situation territoriale\n" +
      "La Zambie est un pays enclavé d'Afrique australe. Sur environ 752 000 km², elle est entourée par huit pays (RD Congo, Tanzanie, Malawi, Mozambique, Zimbabwe, Botswana, Namibie, Angola) ; le fleuve Zambèze la borde au sud.\n\n" +
      "#### 2. Le milieu\n" +
      "Ce sont surtout de hauts plateaux de savane. Le Zambèze y forme les spectaculaires chutes Victoria (partagées avec le Zimbabwe, UNESCO). De grandes rivières, des lacs et le barrage de Kariba complètent le tableau. Le climat est tropical à saisons.\n\n" +
      "#### 3. Population\n" +
      "La Zambie compte environ 20 millions d'habitants (2024).\n\n" +
      "#### 4. Société\n" +
      "Plus de 70 groupes ethniques (Bemba, Tonga, Nyanja…) composent la nation. L'anglais est la langue officielle ; le christianisme est très majoritaire.\n\n" +
      "#### 5. Économie et ressources\n" +
      "Le cuivre est la grande richesse (la Zambie est l'un des principaux producteurs africains, dans la région du « Copperbelt »), avec le cobalt, l'agriculture, le tourisme (chutes Victoria) et l'hydroélectricité (Kariba). L'économie reste très dépendante du cours du cuivre.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Hakainde Hichilema, président depuis 2021. Monnaie : le kwacha zambien (ZMW). Devise nationale : « One Zambia, One Nation » (Une Zambie, une nation).\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Lusaka. Les chutes Victoria (« Mosi-oa-Tunya », la fumée qui gronde), la région minière du Copperbelt et le lac de barrage de Kariba sont les grands repères du pays.",
      },
    ],
    quiz: [
      {
        id: "course-geographie-53-zambie-quiz-1",
        question: "Quel métal fait la richesse de la Zambie ?",
        options: ["Le cuivre", "L'or", "Le fer", "L'aluminium"],
        correctIndex: 0,
        explanation: "La Zambie est l'un des grands producteurs africains de cuivre, concentré dans le « Copperbelt ».",
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
        explanation: "Le Zambèze marque le sud du pays et y forme les chutes Victoria.",
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
        explanation: "La Zambie est un pays enclavé, entouré de huit voisins.",
      },
    ],
  },
  {
    id: "course-geographie-54-zimbabwe",
    categoryId: "geo",
    emoji: "🇿🇼",
    title: "Zimbabwe",
    description: "Pays des chutes Victoria et du Grand Zimbabwe, riche en minerais, à l'histoire mouvementée. Découvre le Zimbabwe.",
    xp: 30,
    lessons: [
      {
        id: "course-geographie-54-zimbabwe-lesson-1",
        title: "Le Zimbabwe",
        content:
      "#### 1. Situation territoriale\n" +
      "Le Zimbabwe est un pays enclavé d'Afrique australe. Sur environ 391 000 km², il est bordé par la Zambie, le Mozambique, l'Afrique du Sud et le Botswana, entre les fleuves Zambèze (au nord) et Limpopo (au sud).\n\n" +
      "#### 2. Le milieu\n" +
      "Un haut plateau central (Highveld) domine le pays. Au nord-ouest, le Zambèze forme les chutes Victoria ; le Limpopo marque le sud. Le climat, tropical, est tempéré par l'altitude. Le parc de Hwange abrite une faune abondante.\n\n" +
      "#### 3. Population\n" +
      "Le Zimbabwe compte environ 16 millions d'habitants (2024).\n\n" +
      "#### 4. Société\n" +
      "Les Shonas (majoritaires) et les Ndebele forment les principaux peuples. L'anglais, le shona et le ndebele sont officiels (le pays reconnaît 16 langues) ; le christianisme est majoritaire.\n\n" +
      "#### 5. Économie et ressources\n" +
      "Le sous-sol est riche : or, platine, chrome, lithium (ressource montante) et diamants ; s'y ajoutent le tabac et l'agriculture. L'économie a toutefois été fragilisée par des décennies de crise et une hyperinflation historique.\n\n" +
      "#### 6. Institutions et politique\n" +
      "Régime : république. Chef de l'État (2026) : Emmerson Mnangagwa, président depuis 2017 (réélu en 2023). Monnaie : le pays utilise le ZiG (Zimbabwe Gold), une monnaie adossée à l'or lancée récemment. Devise nationale : « Unité, Liberté, Travail ».\n\n" +
      "#### 7. Repères et singularités\n" +
      "Capitale : Harare. Les ruines du Grand Zimbabwe — cité de pierre médiévale qui a donné son nom au pays (UNESCO) — et les chutes Victoria sont ses grands symboles. Le pays a tourné la page de l'ère Mugabe (1980-2017).",
      },
    ],
    quiz: [
      {
        id: "course-geographie-54-zimbabwe-quiz-1",
        question: "De quel célèbre site antique le Zimbabwe tire-t-il son nom ?",
        options: ["Le Grand Zimbabwe", "Les pyramides de Méroé", "Carthage", "Tombouctou"],
        correctIndex: 0,
        explanation: "Le Grand Zimbabwe, cité de pierre médiévale, a donné son nom au pays.",
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
        explanation: "Le Zambèze borde le nord du pays et le Limpopo le sud.",
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
        explanation: "Le Zimbabwe est un pays enclavé d'Afrique australe.",
      },
    ],
  },
];
