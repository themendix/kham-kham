import type { Course } from "@/types";

/**
 * Contenu de la matière « Découverte » (`decouverte`), issue de la fusion des trois anciennes
 * matières Arts & Musique / Traditions & Sociétés / Afrique contemporaine. Les identifiants de
 * cours et de leçon d'origine (`course-arts-…`, `course-trad-…`, `course-actu-…`) sont
 * volontairement conservés : ce sont des clés de `localStorage`, les renommer effacerait la
 * progression des utilisateurs existants pour un gain purement cosmétique.
 *
 * Chargé à la demande via `src/data/courseContent.ts`, comme les trois autres matières : la
 * montée en charge prévue (3 → 30 cours) rendait intenable de garder ce fichier bundlé avec le
 * shell applicatif, ce qu'il était tant qu'il ne portait que 3 cours. Voir
 * docs/ARCHITECTURE.md § Découpage du bundle.
 */
export const DECOUVERTE_COURSES: Course[] = [
  {
    id: "course-arts-rythmes-continent",
    categoryId: "decouverte",
    emoji: "🎶",
    title: "Rythmes du continent",
    description:
      "De l'Afrobeat à l'Amapiano : un voyage à travers les grands courants musicaux qui ont façonné le son de l'Afrique.",
    xp: 50,
    lessons: [
      {
        id: "lesson-arts-afrobeat",
        title: "Afrobeat : la voix rebelle du Nigeria",
        blocks: [
          {
            type: "paragraphe",
            text: "Un musicien nigérian a proclamé l'indépendance de sa propre maison. La police a fini par y entrer de force.",
          },
          {
            type: "chiffreCle",
            valeur: "1970",
            legende: "la décennie où naît l'afrobeat, à Lagos",
          },
          {
            type: "paragraphe",
            text: "**Fela Kuti** fond le jazz, le funk, le highlife et les rythmes yoruba en un genre neuf. Ses morceaux dépassent le quart d'heure, portés par des cuivres massifs, et dénoncent la dictature militaire depuis son club, le **Shrine**.",
          },
          {
            type: "aRetenir",
            points: [
              "**Fela Kuti** crée l'afrobeat à Lagos dans les années 1970",
              "Un mélange de jazz, funk, highlife et rythmes yoruba",
              "Une musique ouvertement **politique**, contre la dictature",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Fela a proclamé l'indépendance de sa maison-studio sous le nom de « République de Kalakuta » — un État dans l'État, qu'il défendait contre la police.",
          },
        ],
      },
      {
        id: "lesson-arts-mbalax-soukous",
        title: "Mbalax et soukous, deux courants majeurs",
        blocks: [
          {
            type: "paragraphe",
            text: "Deux styles, deux fleuves, deux façons de faire danser un continent entier — et deux histoires qui se répondent.",
          },
          {
            type: "reperes",
            items: [
              { label: "Mbalax", valeur: "Sénégal, percussions sabar" },
              { label: "Soukous", valeur: "Bassin du Congo, guitares entrelacées" },
              { label: "Racine commune", valeur: "Rumba congolaise et highlife" },
            ],
          },
          {
            type: "paragraphe",
            text: "Au Sénégal, le **mbalax** marie les percussions sabar aux claviers et au jazz ; Youssou N'Dour l'a porté sur les scènes du monde entier. Le **soukous** descend de la rumba congolaise et se reconnaît à ses guitares entrelacées.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **mbalax** sénégalais repose sur les percussions sabar",
              "Le **soukous** congolais est hérité de la rumba",
              "Deux styles exportés bien au-delà de leurs frontières",
            ],
          },
        ],
      },
      {
        id: "lesson-arts-amapiano",
        title: "Amapiano, le son qui conquiert le monde",
        blocks: [
          {
            type: "paragraphe",
            text: "Une basse qu'aucun instrument connu ne produisait : c'est par là que le son sud-africain s'est imposé partout.",
          },
          {
            type: "chiffreCle",
            valeur: "2010s",
            legende: "la décennie de naissance de l'amapiano",
          },
          {
            type: "paragraphe",
            text: "Née dans les townships autour de **Pretoria**, cette house lente mêle piano jazzy et nappes profondes sur une basse percussive appelée **log drum**. Portée par les réseaux et les diasporas, elle s'est imposée en quelques années jusque dans les clubs de Londres.",
          },
          {
            type: "aRetenir",
            points: [
              "L'amapiano naît dans les townships près de **Pretoria**",
              "Sa signature est le **log drum**, une basse percussive",
              "L'un des sons africains les plus exportés aujourd'hui",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "quiz-arts-1",
        question: "Qui est le créateur de l'Afrobeat ?",
        options: ["Youssou N'Dour", "Fela Kuti", "Franco Luambo", "Miriam Makeba"],
        correctIndex: 1,
        explanation:
          "Fela Kuti, musicien nigérian, a créé l'Afrobeat en fusionnant jazz, funk, highlife et rythmes yoruba.",
      },
      {
        id: "quiz-arts-2",
        question: "De quel pays est originaire le Mbalax ?",
        options: ["Le Mali", "Le Sénégal", "Le Congo", "Le Ghana"],
        correctIndex: 1,
        explanation:
          "Le Mbalax est né au Sénégal et a été popularisé dans le monde entier par Youssou N'Dour.",
      },
      {
        id: "quiz-arts-3",
        question: "De quel style musical le Soukous est-il directement issu ?",
        options: ["Le highlife", "La rumba congolaise", "Le mbalax", "La musique gnaoua"],
        correctIndex: 1,
        explanation:
          "Le Soukous s'est développé à partir de la rumba congolaise, avec ses guitares entrelacées caractéristiques.",
      },
      {
        id: "quiz-arts-4",
        question: "Où est né l'Amapiano ?",
        options: [
          "À Lagos, au Nigeria",
          "Au Cap, en Afrique du Sud",
          "Dans les townships près de Pretoria, en Afrique du Sud",
          "À Nairobi, au Kenya",
        ],
        correctIndex: 2,
        explanation:
          "L'Amapiano est apparu au milieu des années 2010 dans les townships autour de Pretoria, en Afrique du Sud.",
      },
    ],
  },
  {
    id: "course-trad-griots-sagesses",
    categoryId: "decouverte",
    emoji: "🪘",
    title: "Griots et sagesses ancestrales",
    description:
      "Griots, rites de passage, philosophie Ubuntu : voyage au cœur des traditions qui structurent encore les sociétés africaines aujourd'hui.",
    xp: 50,
    lessons: [
      {
        id: "lesson-trad-griots",
        title: "Les griots, gardiens de la mémoire",
        blocks: [
          {
            type: "paragraphe",
            text: "Avant les archives et les registres, une famille entière confiait son histoire à la mémoire d'un seul homme.",
          },
          {
            type: "chiffreCle",
            valeur: "21 cordes",
            legende: "la kora, harpe-luth emblématique des griots",
          },
          {
            type: "paragraphe",
            text: "Le griot — **djeli** en mandingue — conserve la généalogie, l'histoire et les alliances de la famille à laquelle il est attaché, et les récite quand il le faut. Sa parole loue, mais peut aussi rappeler ce qu'on préférerait oublier. La **kora** l'accompagne.",
          },
          {
            type: "aRetenir",
            points: [
              "Le griot, ou **djeli**, conserve la mémoire d'une famille",
              "Il transmet oralement généalogies, histoire et alliances",
              "La **kora** est son instrument emblématique",
            ],
          },
        ],
      },
      {
        id: "lesson-trad-rites-passage",
        title: "Rites de passage et sociétés initiatiques",
        blocks: [
          {
            type: "paragraphe",
            text: "Devenir adulte ne se décrète pas : dans beaucoup de sociétés africaines, cela s'organise, et jamais tout seul.",
          },
          {
            type: "reperes",
            items: [
              { label: "Maasaï", valeur: "Classes d'âge, passage moran" },
              { label: "Poro", valeur: "Société initiatique masculine" },
              { label: "Sandé", valeur: "Société initiatique féminine" },
            ],
          },
          {
            type: "paragraphe",
            text: "Chez les **Maasaï**, les jeunes hommes entrent ensemble dans la classe d'âge des **moran** et en sortiront ensemble. En Afrique de l'Ouest, les sociétés Poro et Sandé encadrent la même transition : retrait, apprentissage des savoirs réservés, retour transformé.",
          },
          {
            type: "aRetenir",
            points: [
              "Le passage à l'âge adulte se fait en **groupe**",
              "Les Maasaï organisent des classes d'âge solidaires à vie",
              "Poro et Sandé initient hommes et femmes séparément",
            ],
          },
        ],
      },
      {
        id: "lesson-trad-ubuntu",
        title: "Ubuntu, une philosophie de l'interdépendance",
        blocks: [
          {
            type: "paragraphe",
            text: "Une formule d'Afrique australe tient en quelques mots ce que la philosophie occidentale discute depuis des siècles.",
          },
          {
            type: "citation",
            texte: "Une personne est une personne à travers les autres personnes.",
            auteur: "Proverbe nguni",
          },
          {
            type: "paragraphe",
            text: "**Ubuntu** : l'individu n'existe pleinement qu'à travers ses liens aux autres. **Desmond Tutu** en a fait la clé de la Commission vérité et réconciliation sud-africaine — réparer plutôt que punir, et restaurer le lien social plutôt que le trancher.",
          },
          {
            type: "aRetenir",
            points: [
              "**Ubuntu** : l'humanité se réalise par les liens aux autres",
              "Une formule nguni d'Afrique australe",
              "Au cœur de la **réconciliation** sud-africaine post-apartheid",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "quiz-trad-1",
        question: "Quel est le rôle traditionnel du griot en Afrique de l'Ouest ?",
        options: [
          "Chef militaire",
          "Gardien de la mémoire orale, généalogiste et musicien",
          "Guérisseur traditionnel",
          "Chef religieux",
        ],
        correctIndex: 1,
        explanation:
          "Le griot transmet oralement l'histoire et la généalogie de sa communauté, en musicien et conteur attaché à une famille noble.",
      },
      {
        id: "quiz-trad-2",
        question: "Quel instrument à cordes, harpe-luth à 21 cordes, est emblématique des griots mandingues ?",
        options: ["Le djembé", "La kora", "Le balafon", "Le n'goni"],
        correctIndex: 1,
        explanation: "La kora, harpe-luth à 21 cordes, accompagne traditionnellement les récits et chants des griots.",
      },
      {
        id: "quiz-trad-3",
        question: "Que désignent les sociétés Poro et Sandé en Afrique de l'Ouest ?",
        options: [
          "Des guildes de commerçants",
          "Des sociétés initiatiques traditionnelles, pour les hommes et les femmes",
          "Des conseils de chefferie",
          "Des associations agricoles",
        ],
        correctIndex: 1,
        explanation:
          "Le Poro (hommes) et le Sandé (femmes) sont des sociétés initiatiques qui transmettent aux jeunes les savoirs de l'âge adulte.",
      },
      {
        id: "quiz-trad-4",
        question: "Que signifie approximativement la philosophie Ubuntu, originaire d'Afrique australe ?",
        options: [
          "La loi du plus fort",
          "Je suis parce que nous sommes",
          "Le respect exclusif des ancêtres",
          "La supériorité du chef",
        ],
        correctIndex: 1,
        explanation:
          "Ubuntu affirme que l'humanité d'une personne se réalise à travers ses liens avec les autres — popularisée par Desmond Tutu et Nelson Mandela.",
      },
    ],
  },
  {
    id: "course-actu-afrique-qui-innove",
    categoryId: "decouverte",
    emoji: "🌍",
    title: "L'Afrique qui innove",
    description:
      "Mobile money, intégration continentale, cinéma : trois visages d'une Afrique contemporaine en pleine transformation.",
    xp: 50,
    lessons: [
      {
        id: "lesson-actu-mobile-money",
        title: "La révolution du mobile money",
        blocks: [
          {
            type: "paragraphe",
            text: "Envoyer de l'argent par SMS, sans banque et sans agence : l'idée devait seulement servir à rembourser des microcrédits.",
          },
          {
            type: "chiffreCle",
            valeur: "2007",
            legende: "lancement de M-Pesa au Kenya",
          },
          {
            type: "paragraphe",
            text: "L'opérateur kényan Safaricom lance **M-Pesa** et le service devient une monnaie du quotidien. Des millions de personnes exclues du système bancaire accèdent enfin à un service financier, et le modèle essaime sur tout le continent : l'Afrique de l'Est fait aujourd'hui référence en **inclusion financière**.",
          },
          {
            type: "aRetenir",
            points: [
              "**M-Pesa** est lancé au Kenya en 2007 par Safaricom",
              "Il permet de payer sans compte bancaire",
              "Un modèle d'**inclusion financière** repris dans le monde",
            ],
          },
        ],
      },
      {
        id: "lesson-actu-union-africaine",
        title: "L'Union africaine et l'intégration continentale",
        blocks: [
          {
            type: "paragraphe",
            text: "Un marché unique d'un milliard de personnes existe sur le papier depuis 2021. Le faire exister vraiment est le chantier du siècle.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1963", texte: "Création de l'Organisation de l'unité africaine" },
              { date: "2002", texte: "L'Union africaine lui succède" },
              { date: "2021", texte: "Entrée en vigueur de la ZLECAf" },
            ],
          },
          {
            type: "paragraphe",
            text: "Fondée en 2002 à **Addis-Abeba**, l'Union africaine succède à l'OUA née en 1963 et réunit tous les États du continent. La **ZLECAf** vise à créer entre eux une zone de libre-échange continentale.",
          },
          {
            type: "aRetenir",
            points: [
              "L'Union africaine naît en 2002, après l'OUA de 1963",
              "Son siège est à **Addis-Abeba**, en Éthiopie",
              "La **ZLECAf** vise un marché continental unique",
            ],
          },
        ],
      },
      {
        id: "lesson-actu-nollywood",
        title: "Nollywood, la puissance du cinéma nigérian",
        blocks: [
          {
            type: "paragraphe",
            text: "Pas de subvention, pas de studio, pas d'attente : on tourne en quelques jours et on vend sur le marché.",
          },
          {
            type: "chiffreCle",
            valeur: "2e mondial",
            legende: "par le nombre de films produits chaque année",
          },
          {
            type: "paragraphe",
            text: "Dans les années 1990 à Lagos, les films se vendent en **cassettes**. Trente ans plus tard, **Nollywood** est l'une des premières industries du monde par le volume, emploie des centaines de milliers de personnes et rayonne dans toute la diaspora.",
          },
          {
            type: "aRetenir",
            points: [
              "**Nollywood** naît à Lagos dans les années 1990",
              "Un modèle économique direct, sans subventions",
              "L'une des premières industries mondiales par le **volume**",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "quiz-actu-1",
        question: "Dans quel pays le service de mobile money M-Pesa a-t-il été lancé en 2007 ?",
        options: ["Le Nigeria", "Le Kenya", "L'Afrique du Sud", "Le Ghana"],
        correctIndex: 1,
        explanation: "M-Pesa a été lancé au Kenya en 2007 par l'opérateur Safaricom.",
      },
      {
        id: "quiz-actu-2",
        question: "Que désigne la ZLECAf, entrée en vigueur en 2021 ?",
        options: [
          "La Zone de libre-échange continentale africaine",
          "La Zone de législation commerciale africaine",
          "La Zone logistique et commerciale africaine",
          "La Zone de lutte contre l'exclusion financière",
        ],
        correctIndex: 0,
        explanation:
          "La ZLECAf vise à créer un marché unique pour les biens et services entre les pays africains.",
      },
      {
        id: "quiz-actu-3",
        question: "En quelle année l'Union africaine a-t-elle été fondée, succédant à l'OUA ?",
        options: ["1963", "1994", "2002", "2010"],
        correctIndex: 2,
        explanation:
          "L'Union africaine est fondée en 2002 à Addis-Abeba, succédant à l'Organisation de l'unité africaine créée en 1963.",
      },
      {
        id: "quiz-actu-4",
        question: "Nollywood désigne l'industrie cinématographique de quel pays ?",
        options: ["Le Ghana", "L'Afrique du Sud", "Le Nigeria", "Le Kenya"],
        correctIndex: 2,
        explanation:
          "Nollywood est le surnom de l'industrie cinématographique nigériane, l'une des plus prolifiques au monde.",
      },
    ],
  },
  {
    id: "course-decouverte-01-masques-sculptures",
    categoryId: "decouverte",
    emoji: "🎭",
    title: "Masques et sculptures",
    description:
      "Un masque africain dans une vitrine ne fait plus rien. Découvre ce qu'il faisait vraiment, d'où viennent les bronzes du Bénin, et comment ces formes ont retourné l'art européen.",
    xp: 50,
    lessons: [
      {
        id: "course-decouverte-01-masques-sculptures-lesson-1",
        title: "Le masque n'est pas un objet",
        blocks: [
          {
            type: "paragraphe",
            text: "Dans une vitrine de musée, il ne se passe rien. Le masque africain n'existe vraiment que porté, dansé, entouré de tambours et de chants.",
          },
          {
            type: "chiffreCle",
            valeur: "Dogon",
            legende: "peuple sculpteur des falaises de Bandiagara",
          },
          {
            type: "paragraphe",
            text: "Chez les **Dogon** du Mali comme chez les **Baoulé** de Côte d'Ivoire, le masque sort aux moments qui comptent : funérailles, initiations, semailles. Il donne un visage à un ancêtre ou à une force qu'on ne voit pas.",
          },
          {
            type: "aRetenir",
            points: [
              "Le masque est **dansé**, jamais seulement exposé",
              "Il intervient aux rites : funérailles, initiations, semailles",
              "Dogon et Baoulé, deux grandes traditions sculptées",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-01-masques-sculptures-lesson-2",
        title: "Les bronzes du Bénin",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1897, une colonne britannique quitte un palais d'Afrique de l'Ouest avec des milliers de bronzes. Ils sont toujours en Europe.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XIIIe s.", texte: "Premiers bronzes coulés à Benin City" },
              { date: "1897", texte: "Sac du palais par une expédition britannique" },
              { date: "1950-1970", texte: "Les bronzes entrent dans les grands musées" },
              { date: "2022", texte: "Premières restitutions au Nigeria" },
            ],
          },
          {
            type: "paragraphe",
            text: "Au royaume du Bénin, dans l'actuel Nigeria, on coule le bronze à la **cire perdue** depuis des siècles. Plaques et têtes ornaient le palais de l'**oba** et racontaient l'histoire de la dynastie.",
          },
          {
            type: "aRetenir",
            points: [
              "Bronzes coulés à la **cire perdue**, à Benin City",
              "Ils ornaient le palais de l'**oba** et racontaient la dynastie",
              "Pillés en 1897, ils font l'objet de **restitutions**",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-01-masques-sculptures-lesson-3",
        title: "Ce que Picasso a vu",
        blocks: [
          {
            type: "paragraphe",
            text: "Vers 1906, un peintre espagnol découvre à Paris des sculptures sans nom d'auteur. L'art européen ne s'en remettra pas.",
          },
          {
            type: "chiffreCle",
            valeur: "1907",
            legende: "Les Demoiselles d'Avignon, marquées par ces formes",
          },
          {
            type: "paragraphe",
            text: "**Picasso**, Matisse et Derain y trouvent une liberté qu'ils cherchaient : un visage n'a plus à ressembler, il peut signifier. On parlera longtemps d'**art nègre**, terme daté qui effaçait royaumes, siècles et sculpteurs.",
          },
          {
            type: "aRetenir",
            points: [
              "Les sculptures africaines nourrissent le **cubisme** naissant",
              "Picasso, Matisse et Derain s'en inspirent ouvertement",
              "Le terme « art nègre » effaçait leurs véritables auteurs",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Ces œuvres étaient exposées sans nom d'auteur ni date. On connaissait le nom du collectionneur européen, jamais celui du sculpteur africain.",
          },
        ],
      },
    ],
    quiz: [
      {
        id: "quiz-decouverte-01-1",
        question: "Qu'est-ce qui distingue un masque africain d'un objet de musée ?",
        options: [
          "Il est toujours en métal précieux",
          "Il n'a de sens que porté et dansé, dans un rite",
          "Il est fabriqué en série",
          "Il ne représente jamais de visage",
        ],
        correctIndex: 1,
        explanation:
          "Le masque n'est pas conçu pour être exposé : il n'existe pleinement que porté et dansé, lors de funérailles, d'initiations ou de semailles.",
      },
      {
        id: "quiz-decouverte-01-2",
        question: "Quel peuple du Mali sculpte le long des falaises de Bandiagara ?",
        options: ["Les Baoulé", "Les Dogon", "Les Ashanti", "Les Zoulous"],
        correctIndex: 1,
        explanation:
          "Les Dogon, installés le long des falaises de Bandiagara, comptent parmi les grandes traditions sculptées du continent.",
      },
      {
        id: "quiz-decouverte-01-3",
        question: "Quelle technique était utilisée pour couler les bronzes du Bénin ?",
        options: ["Le moulage au sable", "La cire perdue", "Le martelage à froid", "L'électrolyse"],
        correctIndex: 1,
        explanation:
          "La cire perdue permet une très grande finesse de détail : c'est la technique des fondeurs du royaume du Bénin.",
      },
      {
        id: "quiz-decouverte-01-4",
        question: "Que s'est-il passé au palais de l'oba du Bénin en 1897 ?",
        options: [
          "Il a été fondé",
          "Il a été pillé par une expédition britannique",
          "Il a été inscrit au patrimoine mondial",
          "Il a été reconstruit en bronze",
        ],
        correctIndex: 1,
        explanation:
          "Une expédition britannique a mis à sac le palais en 1897, dispersant des milliers de pièces dans les musées occidentaux.",
      },
      {
        id: "quiz-decouverte-01-5",
        question: "Quel mouvement artistique européen s'est nourri des formes sculpturales africaines ?",
        options: ["L'impressionnisme", "Le cubisme", "Le romantisme", "Le néoclassicisme"],
        correctIndex: 1,
        explanation:
          "Picasso, Matisse et Derain y ont trouvé une liberté formelle qui a nourri le cubisme naissant, à partir de 1906-1907.",
      },
    ],
  },
  {
    id: "course-decouverte-02-tissus-parures",
    categoryId: "decouverte",
    emoji: "🧵",
    title: "Tissus et parures",
    description:
      "Kente, bogolan, indigo, wax : quatre étoffes qui portent des proverbes, des savoir-faire et une histoire commerciale bien plus retorse qu'il n'y paraît.",
    xp: 50,
    lessons: [
      {
        id: "course-decouverte-02-tissus-parures-lesson-1",
        title: "Le kente se lit",
        blocks: [
          {
            type: "paragraphe",
            text: "Chez les Ashanti, on ne choisit pas un tissu pour sa couleur. On le choisit pour ce qu'il dit.",
          },
          {
            type: "reperes",
            items: [
              { label: "Origine", valeur: "Pays ashanti, Ghana" },
              { label: "Technique", valeur: "Tissage en bandes étroites" },
              { label: "Usage", valeur: "Cérémonies, fêtes, distinctions" },
            ],
          },
          {
            type: "paragraphe",
            text: "Le **kente** est tissé en bandes étroites, assemblées ensuite. Chaque motif porte un nom et un **proverbe** : s'habiller, c'est afficher une phrase. Longtemps réservé à la cour royale, il est devenu un symbole panafricain.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **kente** est tissé en bandes puis assemblé",
              "Chaque motif porte un nom et un **proverbe**",
              "D'un tissu de cour à un symbole panafricain",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-02-tissus-parures-lesson-2",
        title: "Teindre avec de la terre",
        blocks: [
          {
            type: "paragraphe",
            text: "Un vêtement qui sort littéralement du sol : au Mali, la boue n'est pas une salissure, c'est la teinture.",
          },
          {
            type: "chiffreCle",
            valeur: "Bogolanfini",
            legende: "en bambara, tissu fait avec de la boue",
          },
          {
            type: "paragraphe",
            text: "Le coton est d'abord teint aux feuilles, puis peint à la terre fermentée qui fixe les motifs en noir profond. Plus à l'ouest, les teinturières de **Kano** travaillent l'**indigo** en fosses, un savoir transmis entre femmes depuis des siècles.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **bogolan** malien est peint à la terre fermentée",
              "L'**indigo** se teint en fosses, savoir-faire souvent féminin",
              "Deux techniques nommées d'après leur matière première",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-02-tissus-parures-lesson-3",
        title: "Le wax n'est pas ce qu'on croit",
        blocks: [
          {
            type: "paragraphe",
            text: "Le tissu le plus identifié à l'Afrique de l'Ouest a été inventé aux Pays-Bas, pour le marché indonésien, et n'y a jamais marché.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XIXe s.", texte: "Imitation industrielle du batik javanais" },
              { date: "1900-1960", texte: "Le wax s'impose en Afrique de l'Ouest" },
              { date: "Aujourd'hui", texte: "Concurrence des impressions asiatiques" },
            ],
          },
          {
            type: "paragraphe",
            text: "Des industriels **néerlandais** copient le batik javanais, échouent là-bas, et trouvent preneur sur les côtes africaines. Adopté, renommé, chargé de sens locaux, le **wax** y est devenu profondément africain.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **wax** vient d'une copie européenne du batik indonésien",
              "Il a été **approprié** et renommé en Afrique de l'Ouest",
              "Ses motifs portent des surnoms connus de tous",
            ],
          },
          {
            type: "leSavaisTu",
            text: "À Lomé, les commerçantes surnommées « Nana Benz » ont bâti des fortunes sur le wax — leur surnom venait des Mercedes qu'elles conduisaient.",
          },
        ],
      },
    ],
    quiz: [
      {
        id: "quiz-decouverte-02-1",
        question: "De quel peuple le kente est-il originaire ?",
        options: [
          "Les Dogon du Mali",
          "Les Ashanti du Ghana",
          "Les Yoruba du Nigeria",
          "Les Zoulous d'Afrique du Sud",
        ],
        correctIndex: 1,
        explanation:
          "Le kente est tissé en pays ashanti, au Ghana, en bandes étroites ensuite assemblées.",
      },
      {
        id: "quiz-decouverte-02-2",
        question: "Que porte chaque motif de kente, en plus de son dessin ?",
        options: [
          "Un numéro de série",
          "Un nom et un proverbe",
          "Une date de fabrication",
          "Le nom du roi régnant",
        ],
        correctIndex: 1,
        explanation:
          "Chaque motif a un nom et un proverbe associé : porter un kente, c'est afficher un message.",
      },
      {
        id: "quiz-decouverte-02-3",
        question: "À quoi le bogolan malien doit-il son nom ?",
        options: [
          "À la boue utilisée pour le teindre",
          "Au village où il est tissé",
          "À un roi bambara",
          "Au coton dont il est fait",
        ],
        correctIndex: 0,
        explanation:
          "« Bogolanfini » signifie en bambara « tissu fait avec de la boue » : le coton est peint à la terre fermentée.",
      },
      {
        id: "quiz-decouverte-02-4",
        question: "Quelle est l'origine réelle du tissu wax ?",
        options: [
          "Une invention ghanéenne du XVIIIe siècle",
          "Une imitation industrielle européenne du batik indonésien",
          "Un tissage traditionnel yoruba",
          "Une création de la période des indépendances",
        ],
        correctIndex: 1,
        explanation:
          "Des industriels néerlandais ont copié le batik javanais au XIXe siècle avant de trouver leur marché en Afrique de l'Ouest.",
      },
      {
        id: "quiz-decouverte-02-5",
        question: "Qui étaient les « Nana Benz » de Lomé ?",
        options: [
          "Des reines traditionnelles",
          "Des commerçantes enrichies par le négoce du wax",
          "Des tisserandes de kente",
          "Des chanteuses togolaises",
        ],
        correctIndex: 1,
        explanation:
          "Ces commerçantes togolaises ont bâti des fortunes sur le wax ; leur surnom venait des Mercedes qu'elles conduisaient.",
      },
    ],
  },
  {
    id: "course-decouverte-03-architectures-terre",
    categoryId: "decouverte",
    emoji: "🕌",
    title: "Architectures de terre",
    description:
      "Le plus vaste édifice en terre crue du monde est africain, et il faut le refaire chaque année pour qu'il tienne. Découvre une architecture qui vit de son entretien.",
    xp: 50,
    lessons: [
      {
        id: "course-decouverte-03-architectures-terre-lesson-1",
        title: "Une mosquée qu'on recrépit à la main",
        blocks: [
          {
            type: "paragraphe",
            text: "Chaque année, la ville entière escalade sa mosquée pour la recouvrir de terre fraîche. Sans ce geste collectif, elle finirait par fondre.",
          },
          {
            type: "chiffreCle",
            valeur: "Djenné",
            legende: "au Mali, plus vaste édifice en terre crue",
          },
          {
            type: "paragraphe",
            text: "La Grande Mosquée de **Djenné** est bâtie en **banco**, mélange de terre et de paille. Les poutres de palmier qui hérissent ses murs ne sont pas un décor : ce sont les échafaudages permanents de son entretien annuel.",
          },
          {
            type: "aRetenir",
            points: [
              "**Djenné** abrite le plus vaste édifice en terre crue",
              "Le **banco** mêle terre et paille",
              "Les poutres servent d'échafaudage à l'entretien annuel",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-03-architectures-terre-lesson-2",
        title: "Bâtir contre la chaleur",
        blocks: [
          {
            type: "paragraphe",
            text: "Bien avant la climatisation, on savait faire des murs qui rafraîchissent. La terre est le plus ancien de ces dispositifs.",
          },
          {
            type: "reperes",
            items: [
              { label: "Matériau", valeur: "Terre crue, banco, pisé" },
              { label: "Atout", valeur: "Forte inertie thermique" },
              { label: "Contrainte", valeur: "Entretien régulier obligatoire" },
            ],
          },
          {
            type: "paragraphe",
            text: "Un mur de terre épais absorbe la chaleur du jour et la restitue la nuit : c'est l'**inertie thermique**. Des **ksour** sahariens aux cases à impluvium de Casamance, la même contrainte a produit des formes très différentes.",
          },
          {
            type: "aRetenir",
            points: [
              "L'**inertie thermique** de la terre régule la température",
              "Le climat, pas la mode, dicte les formes",
              "Des ksour sahariens aux cases à impluvium casamançaises",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-03-architectures-terre-lesson-3",
        title: "Un patrimoine qu'il faut refaire",
        blocks: [
          {
            type: "paragraphe",
            text: "Un monument qui doit être refait pour durer pose une question inédite : que protège-t-on au juste, la matière ou le geste ?",
          },
          {
            type: "frise",
            evenements: [
              { date: "1988", texte: "Djenné inscrite au patrimoine mondial" },
              { date: "1989", texte: "Falaises de Bandiagara inscrites à leur tour" },
              { date: "2001", texte: "Tombes des rois du Buganda inscrites" },
            ],
          },
          {
            type: "paragraphe",
            text: "Ces édifices ne se conservent pas comme la pierre : ils exigent un **entretien annuel** et des artisans formés. L'UNESCO y protège donc autant un **savoir-faire vivant** qu'un bâtiment.",
          },
          {
            type: "aRetenir",
            points: [
              "La terre exige un **entretien annuel**, pas une simple conservation",
              "C'est un **savoir-faire** autant qu'un monument",
              "Djenné, Bandiagara et les tombes du Buganda sont classées",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "quiz-decouverte-03-1",
        question: "Où se trouve le plus vaste édifice en terre crue du monde ?",
        options: ["À Tombouctou, au Mali", "À Djenné, au Mali", "À Kano, au Nigeria", "À Ouidah, au Bénin"],
        correctIndex: 1,
        explanation:
          "La Grande Mosquée de Djenné, au Mali, est le plus vaste édifice en terre crue du monde.",
      },
      {
        id: "quiz-decouverte-03-2",
        question: "Qu'est-ce que le banco ?",
        options: [
          "Un mélange de terre et de paille",
          "Une pierre volcanique",
          "Un bois imputrescible",
          "Un ciment importé",
        ],
        correctIndex: 0,
        explanation:
          "Le banco est un mélange de terre et de paille, matériau de base de l'architecture de terre sahélienne.",
      },
      {
        id: "quiz-decouverte-03-3",
        question: "À quoi servent les poutres de palmier qui dépassent des murs de Djenné ?",
        options: [
          "À soutenir la toiture",
          "À servir d'échafaudage lors du recrépissage annuel",
          "À évacuer l'eau de pluie",
          "À marquer les heures de prière",
        ],
        correctIndex: 1,
        explanation:
          "Elles forment un échafaudage permanent, indispensable au recrépissage collectif de la mosquée chaque année.",
      },
      {
        id: "quiz-decouverte-03-4",
        question: "Quelle propriété rend la terre efficace face à la chaleur ?",
        options: ["Sa transparence", "Son inertie thermique", "Sa conductivité électrique", "Sa légèreté"],
        correctIndex: 1,
        explanation:
          "Un mur de terre épais absorbe la chaleur du jour et la restitue la nuit : c'est l'inertie thermique.",
      },
      {
        id: "quiz-decouverte-03-5",
        question: "Pourquoi ce patrimoine pose-t-il un problème de conservation particulier ?",
        options: [
          "Il est impossible à dater",
          "Il doit être refait régulièrement pour subsister",
          "Il est trop récent pour être classé",
          "Il ne peut pas être visité",
        ],
        correctIndex: 1,
        explanation:
          "La terre exige un entretien annuel : l'UNESCO y protège un savoir-faire vivant autant qu'un bâtiment.",
      },
    ],
  },
  {
    id: "course-decouverte-04-photographie-africaine",
    categoryId: "decouverte",
    emoji: "📷",
    title: "La photographie africaine",
    description:
      "Dans les studios de Bamako, une jeunesse a choisi comment elle voulait être vue. Découvre comment le portrait africain a renversé un siècle de regard extérieur.",
    xp: 50,
    lessons: [
      {
        id: "course-decouverte-04-photographie-africaine-lesson-1",
        title: "Le studio de Bamako",
        blocks: [
          {
            type: "paragraphe",
            text: "Dans le Bamako des années 1960, on ne va pas chez le photographe pour garder un souvenir. On y va pour se montrer tel qu'on veut être.",
          },
          {
            type: "chiffreCle",
            valeur: "Bamako",
            legende: "capitale des studios photo ouest-africains",
          },
          {
            type: "paragraphe",
            text: "**Seydou Keïta** et **Malick Sidibé** photographient une jeunesse qui danse, s'habille, pose avec une montre ou un scooter emprunté. Leurs portraits en noir et blanc disent une modernité africaine choisie, et non subie.",
          },
          {
            type: "aRetenir",
            points: [
              "**Seydou Keïta** et Malick Sidibé, figures des studios de Bamako",
              "Le modèle choisit sa pose, son décor, ses accessoires",
              "Une modernité africaine revendiquée, pas subie",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-04-photographie-africaine-lesson-2",
        title: "Du studio au musée",
        blocks: [
          {
            type: "paragraphe",
            text: "Ces images ont d'abord été des commandes payées quelques francs. Elles valent aujourd'hui des fortunes dans les ventes internationales.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1950-1970", texte: "Âge d'or des studios ouest-africains" },
              { date: "Années 1990", texte: "Redécouverte par les galeries occidentales" },
              { date: "Aujourd'hui", texte: "Pièces majeures des collections internationales" },
            ],
          },
          {
            type: "paragraphe",
            text: "La reconnaissance tardive a posé une question dérangeante : qui touche l'argent, et qui décide de ce qui fait **œuvre** ? Plusieurs de ces photographes sont morts avant d'avoir vu la valeur prise par leurs **négatifs**.",
          },
          {
            type: "aRetenir",
            points: [
              "Des commandes ordinaires devenues **œuvres** de collection",
              "La reconnaissance est venue tard, et d'ailleurs",
              "La question des **droits** et des négatifs reste sensible",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-04-photographie-africaine-lesson-3",
        title: "Photographier chez soi",
        blocks: [
          {
            type: "paragraphe",
            text: "Pendant un siècle, l'Afrique a surtout été photographiée par d'autres. Le studio a renversé le point de vue.",
          },
          {
            type: "reperes",
            items: [
              { label: "Image coloniale", valeur: "Sujets anonymes, alignés, classés" },
              { label: "Portrait de studio", valeur: "Pose, décor et accessoires choisis" },
              { label: "Aujourd'hui", valeur: "Scène contemporaine internationale" },
            ],
          },
          {
            type: "paragraphe",
            text: "Aux images coloniales répondent des portraits où le modèle décide de tout. La photographie africaine contemporaine, de **Zanele Muholi** à **Omar Victor Diop**, a fait de ce renversement son sujet même.",
          },
          {
            type: "aRetenir",
            points: [
              "L'image coloniale classait ; le studio laisse **choisir**",
              "Le renversement du regard est devenu un sujet",
              "Muholi et Omar Victor Diop en sont deux figures actuelles",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "quiz-decouverte-04-1",
        question: "Quelle ville est associée aux grands studios photo ouest-africains ?",
        options: ["Dakar", "Bamako", "Abidjan", "Lagos"],
        correctIndex: 1,
        explanation:
          "Bamako, avec Seydou Keïta et Malick Sidibé, est la capitale des studios photo ouest-africains.",
      },
      {
        id: "quiz-decouverte-04-2",
        question: "Que montrent avant tout les portraits de studio des années 1960 ?",
        options: [
          "Des scènes de guerre",
          "Une jeunesse qui choisit son image et sa modernité",
          "Des paysages ruraux",
          "Des cérémonies royales",
        ],
        correctIndex: 1,
        explanation:
          "Le modèle choisit sa pose, son décor et ses accessoires : c'est une modernité revendiquée, pas subie.",
      },
      {
        id: "quiz-decouverte-04-3",
        question: "Quand ces photographies ont-elles été redécouvertes par les galeries occidentales ?",
        options: ["Dans les années 1930", "Dans les années 1960", "Dans les années 1990", "En 2020"],
        correctIndex: 2,
        explanation:
          "La redécouverte par les galeries occidentales date des années 1990, longtemps après la prise des clichés.",
      },
      {
        id: "quiz-decouverte-04-4",
        question: "Quelle question la reconnaissance tardive de ces photographes a-t-elle soulevée ?",
        options: [
          "Celle de la datation des clichés",
          "Celle des droits et de la propriété des négatifs",
          "Celle du choix du noir et blanc",
          "Celle du format des tirages",
        ],
        correctIndex: 1,
        explanation:
          "Plusieurs photographes sont morts avant d'avoir vu la valeur prise par leurs négatifs : la question des droits reste sensible.",
      },
      {
        id: "quiz-decouverte-04-5",
        question: "Qu'est-ce qui distingue le portrait de studio de l'image coloniale ?",
        options: [
          "Le modèle y choisit sa pose et son décor",
          "Il est toujours en couleur",
          "Il est pris en extérieur",
          "Il ne montre jamais de visage",
        ],
        correctIndex: 0,
        explanation:
          "L'image coloniale classait des sujets anonymes ; dans le studio, le modèle décide de tout.",
      },
    ],
  },
  {
    id: "course-decouverte-05-cinema-auteur",
    categoryId: "decouverte",
    emoji: "🎬",
    title: "Le cinéma d'auteur africain",
    description:
      "Un docker devenu écrivain, puis cinéaste parce que ses livres n'atteignaient pas ceux dont il parlait. Découvre Sembène, le FESPACO et un cinéma né sans industrie.",
    xp: 50,
    lessons: [
      {
        id: "course-decouverte-05-cinema-auteur-lesson-1",
        title: "Le père du cinéma africain",
        blocks: [
          {
            type: "paragraphe",
            text: "Il fut docker à Marseille, puis écrivain reconnu. Il s'est finalement mis au cinéma en constatant que ses livres n'atteignaient jamais ceux dont il parlait.",
          },
          {
            type: "chiffreCle",
            valeur: "1966",
            legende: "La Noire de…, premier long métrage subsaharien",
          },
          {
            type: "paragraphe",
            text: "**Ousmane Sembène**, sénégalais, tourne en wolof pour être compris chez lui et filme les humiliations ordinaires du quotidien plutôt que les grands récits héroïques. Le cinéma devient son « **école du soir** ».",
          },
          {
            type: "aRetenir",
            points: [
              "**Ousmane Sembène**, pionnier du cinéma subsaharien",
              "Il tourne en **wolof**, pour être compris chez lui",
              "Le cinéma comme « école du soir » populaire",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-05-cinema-auteur-lesson-2",
        title: "Le FESPACO",
        blocks: [
          {
            type: "paragraphe",
            text: "Tous les deux ans, une capitale sahélienne devient pendant une semaine entière le centre du cinéma de tout un continent.",
          },
          {
            type: "chiffreCle",
            valeur: "1969",
            legende: "première édition du FESPACO, à Ouagadougou",
          },
          {
            type: "paragraphe",
            text: "Le **FESPACO** de **Ouagadougou** est le plus grand festival de cinéma d'Afrique. Il a fait exister une circulation des films entre pays africains, là où les salles de cinéma diffusaient presque uniquement des productions importées d'Europe, d'Inde et des États-Unis.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **FESPACO** se tient à Ouagadougou depuis 1969",
              "Plus grand festival de cinéma du continent",
              "Il fait **circuler** les films entre pays africains",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-05-cinema-auteur-lesson-3",
        title: "Filmer sans industrie",
        blocks: [
          {
            type: "paragraphe",
            text: "Faire un film coûte cher, et les guichets sont ailleurs. Cette contrainte a façonné une esthétique autant qu'une économie.",
          },
          {
            type: "reperes",
            items: [
              { label: "Financement", valeur: "Longtemps des fonds européens" },
              { label: "Conséquence", valeur: "Un regard extérieur sur les projets" },
              { label: "Réponse", valeur: "Formes libres, tournages légers" },
            ],
          },
          {
            type: "paragraphe",
            text: "Financer un film africain a longtemps supposé convaincre des guichets du Nord. Des cinéastes comme **Djibril Diop Mambéty** ont fait de la **rareté des moyens** une liberté de forme plutôt qu'un handicap.",
          },
          {
            type: "aRetenir",
            points: [
              "Le financement extérieur pèse sur les projets",
              "**Mambéty** a fait de la contrainte une liberté formelle",
              "Une esthétique née de l'absence d'**industrie**",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Mambéty n'a réalisé que deux longs métrages en trente ans. Touki Bouki, tourné en 1973 avec presque rien, est aujourd'hui un classique mondial.",
          },
        ],
      },
    ],
    quiz: [
      {
        id: "quiz-decouverte-05-1",
        question: "Qui est considéré comme le père du cinéma d'Afrique subsaharienne ?",
        options: ["Djibril Diop Mambéty", "Ousmane Sembène", "Souleymane Cissé", "Med Hondo"],
        correctIndex: 1,
        explanation:
          "Ousmane Sembène, docker puis écrivain, s'est tourné vers le cinéma pour toucher un public que ses livres n'atteignaient pas.",
      },
      {
        id: "quiz-decouverte-05-2",
        question: "Pourquoi Sembène tournait-il en wolof ?",
        options: [
          "Pour plaire aux festivals européens",
          "Pour être compris de son public au Sénégal",
          "Parce que le français était interdit",
          "Pour réduire les coûts de production",
        ],
        correctIndex: 1,
        explanation:
          "Tourner en wolof lui permettait d'être compris chez lui : il voyait le cinéma comme une « école du soir » populaire.",
      },
      {
        id: "quiz-decouverte-05-3",
        question: "Dans quelle ville se tient le FESPACO ?",
        options: ["Dakar", "Ouagadougou", "Tunis", "Le Caire"],
        correctIndex: 1,
        explanation:
          "Le FESPACO se tient à Ouagadougou, au Burkina Faso, depuis 1969. C'est le plus grand festival de cinéma du continent.",
      },
      {
        id: "quiz-decouverte-05-4",
        question: "Quel a été l'apport principal du FESPACO ?",
        options: [
          "Financer les studios de Nollywood",
          "Faire circuler les films entre pays africains",
          "Imposer le format numérique",
          "Former les techniciens du son",
        ],
        correctIndex: 1,
        explanation:
          "Il a créé une circulation des films entre pays africains, là où les salles diffusaient surtout des productions importées.",
      },
      {
        id: "quiz-decouverte-05-5",
        question: "Quel film de Djibril Diop Mambéty, tourné en 1973, est devenu un classique ?",
        options: ["Touki Bouki", "Yeelen", "Xala", "Sarraounia"],
        correctIndex: 0,
        explanation:
          "Touki Bouki, tourné avec des moyens minimes, est aujourd'hui considéré comme un classique du cinéma mondial.",
      },
    ],
  },
  {
    id: "course-decouverte-06-litteratures-africaines",
    categoryId: "decouverte",
    emoji: "📚",
    title: "Littératures africaines",
    description:
      "Un écrivain kényan a cessé d'écrire en anglais au sommet de sa notoriété. Découvre pourquoi la question de la langue traverse toute la littérature africaine.",
    xp: 50,
    lessons: [
      {
        id: "course-decouverte-06-litteratures-africaines-lesson-1",
        title: "Écrire dans la langue de l'autre",
        blocks: [
          {
            type: "paragraphe",
            text: "Un écrivain kényan a cessé d'écrire en anglais au sommet de sa notoriété. Ce n'était pas un caprice, c'était une thèse.",
          },
          {
            type: "chiffreCle",
            valeur: "1986",
            legende: "Decolonising the Mind, de Ngugi wa Thiong'o",
          },
          {
            type: "paragraphe",
            text: "**Ngugi wa Thiong'o** soutient que la langue porte une vision du monde : écrire en anglais, c'est penser dans le cadre du colonisateur. Il passe au **gikuyu**, sa langue maternelle, quitte à réduire fortement son lectorat immédiat.",
          },
          {
            type: "aRetenir",
            points: [
              "**Ngugi wa Thiong'o** abandonne l'anglais pour le gikuyu",
              "La langue porte une **vision du monde**, pas seulement des mots",
              "Un choix politique assumé, au prix du lectorat",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-06-litteratures-africaines-lesson-2",
        title: "Le roman qui répond",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1958, un romancier nigérian entreprend de raconter l'arrivée des Européens du point de vue de ceux qui les voient débarquer.",
          },
          {
            type: "chiffreCle",
            valeur: "1958",
            legende: "Things Fall Apart, de Chinua Achebe",
          },
          {
            type: "paragraphe",
            text: "**Chinua Achebe** écrit contre une bibliothèque entière de récits coloniaux où l'Africain n'a pas la parole. Traduit dans des dizaines de langues et lu dans le monde entier, son roman a ouvert la voie à toute une **génération d'écrivains** africains.",
          },
          {
            type: "aRetenir",
            points: [
              "**Achebe** renverse le point de vue du récit colonial",
              "Things Fall Apart paraît en **1958**",
              "Un livre fondateur pour la génération suivante",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-06-litteratures-africaines-lesson-3",
        title: "Prix, traductions et diaspora",
        blocks: [
          {
            type: "paragraphe",
            text: "La littérature africaine contemporaine se vend, se traduit et gagne des prix. Elle se demande aussi depuis où elle parle.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1986", texte: "Wole Soyinka, premier Nobel africain de littérature" },
              { date: "2007", texte: "Chimamanda Ngozi Adichie s'impose à l'international" },
              { date: "2021", texte: "Abdulrazak Gurnah reçoit le prix Nobel" },
            ],
          },
          {
            type: "paragraphe",
            text: "Une part de ces auteurs vit et publie hors du continent, ce qui nourrit un débat ancien : écrit-on pour un **lectorat africain** ou pour les jurys du Nord ? La **diaspora** rend la question plus vive encore.",
          },
          {
            type: "aRetenir",
            points: [
              "Soyinka en 1986, **Gurnah** en 2021 : deux prix Nobel",
              "Beaucoup d'auteurs publient depuis la diaspora",
              "Le débat sur le **lectorat visé** reste ouvert",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "quiz-decouverte-06-1",
        question: "Pourquoi Ngugi wa Thiong'o a-t-il cessé d'écrire en anglais ?",
        options: [
          "Parce qu'il ne le maîtrisait plus",
          "Parce que la langue porte selon lui la vision du monde du colonisateur",
          "Pour vendre davantage de livres",
          "Sur ordre du gouvernement kényan",
        ],
        correctIndex: 1,
        explanation:
          "Il défend dans Decolonising the Mind l'idée que la langue porte une vision du monde, et passe au gikuyu.",
      },
      {
        id: "quiz-decouverte-06-2",
        question: "Dans quelle langue Ngugi wa Thiong'o a-t-il choisi d'écrire ?",
        options: ["Le swahili", "Le gikuyu", "Le haoussa", "L'amharique"],
        correctIndex: 1,
        explanation:
          "Il est passé au gikuyu, sa langue maternelle, quitte à réduire fortement son lectorat immédiat.",
      },
      {
        id: "quiz-decouverte-06-3",
        question: "Quelle est la particularité du roman Things Fall Apart de Chinua Achebe ?",
        options: [
          "Il raconte l'arrivée des Européens du point de vue africain",
          "Il est écrit en gikuyu",
          "Il se déroule au XXIe siècle",
          "Il n'a jamais été traduit",
        ],
        correctIndex: 0,
        explanation:
          "Achebe renverse le point de vue des récits coloniaux, où l'Africain n'avait pas la parole. Le roman paraît en 1958.",
      },
      {
        id: "quiz-decouverte-06-4",
        question: "Qui fut le premier écrivain africain à recevoir le prix Nobel de littérature ?",
        options: ["Chinua Achebe", "Wole Soyinka", "Léopold Sédar Senghor", "Naguib Mahfouz"],
        correctIndex: 1,
        explanation:
          "Le Nigérian Wole Soyinka reçoit le prix Nobel de littérature en 1986.",
      },
      {
        id: "quiz-decouverte-06-5",
        question: "Quel débat traverse la littérature africaine contemporaine ?",
        options: [
          "Le choix entre poésie et roman",
          "La question du lectorat visé : africain ou occidental",
          "L'abandon de la fiction",
          "Le refus des traductions",
        ],
        correctIndex: 1,
        explanation:
          "Beaucoup d'auteurs publient depuis la diaspora : écrit-on pour un lectorat africain ou pour les jurys du Nord ?",
      },
    ],
  },
  {
    id: "course-decouverte-07-danses",
    categoryId: "decouverte",
    emoji: "💃",
    title: "Danses et corps en mouvement",
    description:
      "Pas de scène, pas de public assis : la danse africaine fait quelque chose plutôt qu'elle ne représente. Découvre ce que le corps a transporté jusqu'aux Amériques.",
    xp: 50,
    lessons: [
      {
        id: "course-decouverte-07-danses-lesson-1",
        title: "La danse n'est pas un spectacle",
        blocks: [
          {
            type: "paragraphe",
            text: "Dans bien des contextes africains, personne ne regarde la danse assis. Il n'y a pas de scène, et donc pas vraiment de public.",
          },
          {
            type: "chiffreCle",
            valeur: "Sabar",
            legende: "au Sénégal, tambour et danse indissociables",
          },
          {
            type: "paragraphe",
            text: "La danse accompagne un mariage, une récolte, une initiation : elle **fait** quelque chose plutôt qu'elle ne représente. Le tambour dialogue avec le danseur, qui lui répond — le **sabar** sénégalais en est l'exemple le plus net.",
          },
          {
            type: "aRetenir",
            points: [
              "La danse **agit** dans un rite, elle ne représente pas",
              "Ni scène ni public : tout le monde participe",
              "Le **sabar** fait dialoguer tambour et danseur",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-07-danses-lesson-2",
        title: "Ce que le corps a gardé",
        blocks: [
          {
            type: "paragraphe",
            text: "Déportées sans rien, des millions de personnes ont emporté ce qu'on ne peut pas confisquer : des gestes et des rythmes.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XVIIe-XIXe s.", texte: "La traite déporte des millions de personnes" },
              { date: "XIXe s.", texte: "La capoeira se structure au Brésil" },
              { date: "XXe s.", texte: "Jazz, samba et rumba essaiment" },
            ],
          },
          {
            type: "paragraphe",
            text: "La **capoeira** brésilienne, la rumba cubaine et les danses de la Nouvelle-Orléans gardent des structures rythmiques venues d'Afrique. La **transmission par le corps** a survécu là où tout le reste avait été arraché.",
          },
          {
            type: "aRetenir",
            points: [
              "La traite a transporté des **rythmes** avec les personnes",
              "Capoeira, rumba et jazz en gardent la trace",
              "Le **corps** a transmis ce que l'écrit ne pouvait pas",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-07-danses-lesson-3",
        title: "Des cours aux écrans",
        blocks: [
          {
            type: "paragraphe",
            text: "Une chorégraphie née dans une cour d'Afrique du Sud peut être reprise à Séoul quinze jours plus tard.",
          },
          {
            type: "chiffreCle",
            valeur: "Amapiano",
            legende: "genre sud-africain diffusé mondialement par la danse",
          },
          {
            type: "paragraphe",
            text: "Le pantsula sud-africain, l'**azonto** ghanéen et les danses de l'**amapiano** circulent désormais par vidéo. La reprise mondiale pose la question devenue habituelle : qui est crédité, et qui gagne de l'argent ?",
          },
          {
            type: "aRetenir",
            points: [
              "Les danses circulent aujourd'hui par **vidéo**",
              "Pantsula, azonto et amapiano se sont mondialisés",
              "La question du **crédit** aux créateurs reste posée",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Plusieurs chorégraphes africains ont dû réclamer publiquement d'être crédités après la reprise de leurs pas par des stars internationales.",
          },
        ],
      },
    ],
    quiz: [
      {
        id: "quiz-decouverte-07-1",
        question: "Qu'est-ce qui distingue la danse dans son contexte rituel africain ?",
        options: [
          "Elle se joue sur une scène",
          "Elle agit dans un rite plutôt qu'elle ne représente",
          "Elle est toujours silencieuse",
          "Elle est réservée aux enfants",
        ],
        correctIndex: 1,
        explanation:
          "Il n'y a ni scène ni public assis : la danse accompagne un mariage, une récolte ou une initiation, et fait quelque chose.",
      },
      {
        id: "quiz-decouverte-07-2",
        question: "Qu'est-ce que le sabar ?",
        options: [
          "Un masque dogon",
          "Un tambour et une danse du Sénégal",
          "Un tissu ghanéen",
          "Un festival de cinéma",
        ],
        correctIndex: 1,
        explanation:
          "Le sabar désigne à la fois le tambour et la danse sénégalais, indissociables l'un de l'autre.",
      },
      {
        id: "quiz-decouverte-07-3",
        question: "Dans quel pays la capoeira s'est-elle structurée ?",
        options: ["À Cuba", "Au Brésil", "En Haïti", "En Jamaïque"],
        correctIndex: 1,
        explanation:
          "La capoeira s'est structurée au Brésil, à partir de pratiques transportées par les personnes déportées d'Afrique.",
      },
      {
        id: "quiz-decouverte-07-4",
        question: "Qu'est-ce que la traite a transmis malgré la déportation ?",
        options: [
          "Des instruments de musique",
          "Des gestes et des structures rythmiques",
          "Des manuscrits",
          "Des vêtements",
        ],
        correctIndex: 1,
        explanation:
          "Le corps a transmis ce qu'on ne pouvait pas confisquer : des gestes et des rythmes, qu'on retrouve dans la capoeira, la rumba et le jazz.",
      },
      {
        id: "quiz-decouverte-07-5",
        question: "Quel genre sud-africain s'est diffusé mondialement par la danse dans les années 2010 ?",
        options: ["Le highlife", "L'amapiano", "Le mbalax", "Le soukous"],
        correctIndex: 1,
        explanation:
          "L'amapiano, né dans les townships sud-africains, s'est diffusé mondialement, largement porté par ses danses en vidéo.",
      },
    ],
  },
  {
    id: "course-decouverte-08-mode-creation",
    categoryId: "decouverte",
    emoji: "👗",
    title: "Mode et création contemporaine",
    description:
      "Un pagne qui porte un proverbe, un créateur malien qui coupe le bogolan en haute couture, et des montagnes de friperie importée. Découvre les trois faces de la mode africaine.",
    xp: 50,
    lessons: [
      {
        id: "course-decouverte-08-mode-creation-lesson-1",
        title: "S'habiller, c'est se situer",
        blocks: [
          {
            type: "paragraphe",
            text: "Un boubou n'est jamais neutre. La coupe, le tissu et la façon de le porter disent d'où l'on vient et ce qu'on veut signifier.",
          },
          {
            type: "reperes",
            items: [
              { label: "Boubou", valeur: "Ample, Afrique de l'Ouest" },
              { label: "Kanga", valeur: "Pagne imprimé, Afrique de l'Est" },
              { label: "Shweshwe", valeur: "Coton imprimé, Afrique australe" },
            ],
          },
          {
            type: "paragraphe",
            text: "Le **kanga** est-africain porte un proverbe imprimé dans sa bordure : on l'offre pour dire ce qu'on ne dirait pas à voix haute. Le vêtement fonctionne ici comme un **message**.",
          },
          {
            type: "aRetenir",
            points: [
              "Le vêtement **situe** celui qui le porte",
              "Le **kanga** porte un proverbe imprimé",
              "Boubou, kanga et shweshwe, trois traditions distinctes",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-08-mode-creation-lesson-2",
        title: "Des créateurs, pas des inspirations",
        blocks: [
          {
            type: "paragraphe",
            text: "Pendant des décennies, l'Afrique a été créditée comme « inspiration » par les grandes maisons de mode européennes. Rarement comme créatrice à part entière.",
          },
          {
            type: "chiffreCle",
            valeur: "Chris Seydou",
            legende: "le Malien qui coupe le bogolan en couture",
          },
          {
            type: "paragraphe",
            text: "**Chris Seydou** a traité le bogolan comme un tissu de couture, non comme un folklore. Après lui, des créateurs comme **Alphadi** ou Imane Ayissi ont fait exister une mode africaine de création sur les grands circuits internationaux.",
          },
          {
            type: "aRetenir",
            points: [
              "**Chris Seydou** fait entrer le bogolan en haute couture",
              "L'Afrique passe d'**inspiration** à créatrice",
              "Alphadi et Imane Ayissi prolongent cette voie",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-08-mode-creation-lesson-3",
        title: "L'envers du décor",
        blocks: [
          {
            type: "paragraphe",
            text: "Chaque semaine, des tonnes de vêtements usagés venus d'Europe et d'Amérique arrivent dans les ports africains.",
          },
          {
            type: "chiffreCle",
            valeur: "Kantamanto",
            legende: "marché d'Accra, plaque tournante de la friperie",
          },
          {
            type: "paragraphe",
            text: "La **friperie** importée habille des millions de personnes à bas prix, mais concurrence les filières textiles locales et laisse des montagnes d'invendus. Plusieurs pays d'Afrique de l'Est ont tenté de la **restreindre**, sous forte pression commerciale.",
          },
          {
            type: "aRetenir",
            points: [
              "La **friperie** importée habille à bas prix",
              "Elle concurrence les filières **textiles** locales",
              "Les tentatives de restriction se heurtent aux pressions commerciales",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Le marché de Kantamanto, à Accra, reçoit chaque semaine des millions de vêtements de seconde main. Une part importante finit en décharge ou sur les plages.",
          },
        ],
      },
    ],
    quiz: [
      {
        id: "quiz-decouverte-08-1",
        question: "Qu'est-ce qui est imprimé dans la bordure d'un kanga est-africain ?",
        options: ["Un numéro de série", "Un proverbe", "Le nom du fabricant", "Une date"],
        correctIndex: 1,
        explanation:
          "Le kanga porte un proverbe imprimé : on l'offre pour dire quelque chose qu'on ne dirait pas à voix haute.",
      },
      {
        id: "quiz-decouverte-08-2",
        question: "De quelle région le shweshwe est-il originaire ?",
        options: ["Afrique de l'Ouest", "Afrique australe", "Afrique de l'Est", "Afrique du Nord"],
        correctIndex: 1,
        explanation:
          "Le shweshwe est un coton imprimé d'Afrique australe, distinct du boubou ouest-africain et du kanga est-africain.",
      },
      {
        id: "quiz-decouverte-08-3",
        question: "Qu'a fait le créateur malien Chris Seydou avec le bogolan ?",
        options: [
          "Il l'a interdit",
          "Il l'a coupé et traité comme un tissu de haute couture",
          "Il en a inventé la teinture",
          "Il l'a exporté vers l'Indonésie",
        ],
        correctIndex: 1,
        explanation:
          "Chris Seydou a traité le bogolan comme un tissu de couture, non comme un folklore, ouvrant la voie à une mode africaine.",
      },
      {
        id: "quiz-decouverte-08-4",
        question: "Quel est l'effet ambigu de la friperie importée en Afrique ?",
        options: [
          "Elle habille à bas prix mais concurrence les filières locales",
          "Elle est réservée aux touristes",
          "Elle a fait disparaître le wax",
          "Elle est produite localement",
        ],
        correctIndex: 0,
        explanation:
          "Elle habille des millions de personnes à bas prix, mais concurrence les textiles locaux et laisse des montagnes d'invendus.",
      },
      {
        id: "quiz-decouverte-08-5",
        question: "Où se trouve le marché de Kantamanto, plaque tournante de la friperie ?",
        options: ["À Lagos", "À Accra", "À Nairobi", "À Dakar"],
        correctIndex: 1,
        explanation:
          "Kantamanto, à Accra au Ghana, reçoit chaque semaine des millions de vêtements de seconde main.",
      },
    ],
  },
];
