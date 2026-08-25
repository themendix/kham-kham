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
        title: "À quoi sert un masque africain",
        blocks: [
          {
            type: "paragraphe",
            text: "Chez les **Dogon** du Mali, un masque ne reste pas accroché au mur. On le sort, on le porte, et on danse avec, au son des tambours.",
          },
          {
            type: "chiffreCle",
            valeur: "Dogon",
            legende: "peuple sculpteur des falaises de Bandiagara",
          },
          {
            type: "paragraphe",
            text: "Le masque sort aux moments qui comptent : funérailles, initiations, semailles. Il représente un ancêtre ou une force invisible. Chez les **Baoulé** de Côte d'Ivoire, la fonction est la même. La cérémonie finie, le masque est rangé.",
          },
          {
            type: "aRetenir",
            points: [
              "Le masque africain se porte et se **danse**",
              "Il sort pour les funérailles, initiations et semailles",
              "Dogon du Mali et **Baoulé** de Côte d'Ivoire",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-01-masques-sculptures-lesson-2",
        title: "Les bronzes du royaume du Bénin",
        blocks: [
          {
            type: "paragraphe",
            text: "Le royaume du Bénin se trouvait dans l'actuel Nigeria. Ses artisans coulaient le bronze depuis des siècles, et leurs œuvres ornaient le palais du roi.",
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
            text: "Le roi portait le titre d'**oba**. Les fondeurs travaillaient à la **cire perdue**, une technique qui permet des détails très fins. En 1897, une expédition britannique pilla le palais. Des milliers de pièces partirent dans les musées d'Europe et d'Amérique.",
          },
          {
            type: "aRetenir",
            points: [
              "Les bronzes ornaient le palais de l'**oba**, à Benin City",
              "Ils étaient coulés à la **cire perdue**",
              "Pillés en 1897, ils sont aujourd'hui **restitués**",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-01-masques-sculptures-lesson-3",
        title: "Les sculptures africaines et les peintres de Paris",
        blocks: [
          {
            type: "paragraphe",
            text: "Vers 1906, des sculptures africaines arrivent dans les musées et les ateliers de Paris. **Picasso**, Matisse et Derain vont les voir.",
          },
          {
            type: "chiffreCle",
            valeur: "1907",
            legende: "Picasso peint Les Demoiselles d'Avignon",
          },
          {
            type: "paragraphe",
            text: "Ces artistes cherchaient une autre façon de représenter un visage. Ont-ils copié ces sculptures ? Le débat dure encore, et Picasso l'a lui-même nié. À l'époque, on parlait d'**art nègre** : ce mot effaçait les royaumes, les siècles et les sculpteurs.",
          },
          {
            type: "aRetenir",
            points: [
              "Ces sculptures circulent à Paris vers **1906**",
              "L'influence sur Picasso reste **débattue**",
              "Le mot « art nègre » effaçait leurs auteurs",
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
        title: "Le kente ghanéen, un tissu qui porte des proverbes",
        blocks: [
          {
            type: "paragraphe",
            text: "Le kente est tissé au **Ghana**, en pays ashanti. Il est fait de bandes étroites, cousues ensemble une fois tissées.",
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
            text: "Chaque motif de kente a un nom. À ce nom correspond un **proverbe**. Porter un kente, c'est donc afficher une phrase. Longtemps réservé à la cour royale, il est aujourd'hui porté comme un symbole panafricain, jusque dans les universités américaines.",
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
        title: "Le bogolan et l'indigo : teindre avec la terre",
        blocks: [
          {
            type: "paragraphe",
            text: "Au **Mali**, on teint le coton avec de la boue. Le tissu obtenu s'appelle le bogolan.",
          },
          {
            type: "chiffreCle",
            valeur: "Bogolanfini",
            legende: "en bambara, tissu fait avec de la boue",
          },
          {
            type: "paragraphe",
            text: "Le coton est d'abord teint avec des feuilles. On le peint ensuite à la terre fermentée, qui fixe les motifs en noir profond. Plus à l'ouest, à **Kano** au Nigeria, les teinturières plongent les étoffes dans des fosses d'indigo. Ce savoir se transmet entre femmes depuis des siècles.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **bogolan** malien est peint à la terre fermentée",
              "L'**indigo** se teint en fosses, à Kano notamment",
              "Deux techniques nommées d'après leur matière",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-02-tissus-parures-lesson-3",
        title: "Le wax, une invention européenne devenue africaine",
        blocks: [
          {
            type: "paragraphe",
            text: "Le wax est le tissu le plus associé à l'Afrique de l'Ouest. Il a pourtant été inventé aux Pays-Bas, pour le marché indonésien.",
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
            text: "Des industriels **néerlandais** copient le batik de Java au XIXe siècle. Le produit échoue en Indonésie. Ils le vendent alors sur les côtes africaines, où il est adopté. Chaque motif y reçoit un surnom local, et le **wax** devient un tissu africain.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **wax** imite le batik indonésien",
              "Vendu en Afrique après un échec en Indonésie",
              "Ses motifs portent des **surnoms** locaux",
            ],
          },
          {
            type: "leSavaisTu",
            text: "À Lomé, les commerçantes surnommées « Nana Benz » ont bâti des fortunes sur le wax dans les années 1970 — leur surnom venait des Mercedes qu'elles conduisaient.",
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
        title: "Djenné, le plus grand édifice en terre du monde",
        blocks: [
          {
            type: "paragraphe",
            text: "À **Djenné**, au Mali, la mosquée est construite en terre. Chaque année, les habitants la recouvrent d'une nouvelle couche pour qu'elle ne fonde pas sous la pluie.",
          },
          {
            type: "chiffreCle",
            valeur: "Djenné",
            legende: "au Mali, plus vaste édifice en terre crue",
          },
          {
            type: "paragraphe",
            text: "C'est le plus grand bâtiment en terre crue du monde. Ses murs sont faits de **banco**, un mélange de terre et de paille. Sa forme actuelle date de 1907. Les poutres de palmier qui dépassent des murs servent d'échafaudage pendant les travaux.",
          },
          {
            type: "aRetenir",
            points: [
              "**Djenné** abrite le plus grand édifice en terre crue",
              "Le **banco** mêle terre et paille",
              "Les poutres servent d'échafaudage au recrépissage annuel",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-03-architectures-terre-lesson-2",
        title: "Pourquoi les murs de terre rafraîchissent",
        blocks: [
          {
            type: "paragraphe",
            text: "Un mur de terre épais garde la maison fraîche en pleine chaleur. Le matériau agit comme un régulateur de température.",
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
            text: "Le jour, le mur absorbe la chaleur. La nuit, il la restitue. On appelle cela l'**inertie thermique**. Les **ksour** du Sahara et les cases à impluvium de Casamance utilisent le même principe, avec des formes très différentes.",
          },
          {
            type: "aRetenir",
            points: [
              "L'**inertie thermique** régule la température intérieure",
              "Le mur absorbe la chaleur le jour, la rend la nuit",
              "Ksour sahariens et cases à impluvium, même principe",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-03-architectures-terre-lesson-3",
        title: "Conserver un patrimoine qu'il faut reconstruire",
        blocks: [
          {
            type: "paragraphe",
            text: "La pierre se conserve pendant des siècles. La terre doit être refaite régulièrement. Cela pose un problème particulier aux gardiens du patrimoine.",
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
            text: "Ces bâtiments réclament un **entretien annuel** et des maçons formés. L'UNESCO protège donc ici un **savoir-faire vivant** autant qu'un monument. Si les artisans disparaissent, le bâtiment disparaît avec eux.",
          },
          {
            type: "aRetenir",
            points: [
              "La terre exige un **entretien annuel**",
              "L'UNESCO protège un **savoir-faire**, pas qu'un bâtiment",
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
        title: "Les studios de Bamako : Seydou Keïta et Malick Sidibé",
        blocks: [
          {
            type: "paragraphe",
            text: "**Seydou Keïta** et **Malick Sidibé** tenaient des studios photo à Bamako, au Mali. Dans les années 1950 et 1960, toute la ville venait s'y faire tirer le portrait.",
          },
          {
            type: "chiffreCle",
            valeur: "Bamako",
            legende: "capitale des studios photo ouest-africains",
          },
          {
            type: "paragraphe",
            text: "Le client choisissait sa pose, son décor et ses accessoires. Beaucoup empruntaient une montre, une radio ou un scooter pour la photo. Ces portraits montrent une jeunesse qui décide de son image.",
          },
          {
            type: "aRetenir",
            points: [
              "**Seydou Keïta** et Malick Sidibé, studios de Bamako",
              "Le client choisit sa pose, son décor, ses accessoires",
              "Des portraits d'une jeunesse qui décide de son image",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-04-photographie-africaine-lesson-2",
        title: "Du studio de quartier aux collections internationales",
        blocks: [
          {
            type: "paragraphe",
            text: "Ces photos étaient des commandes ordinaires, payées quelques francs. Elles se vendent aujourd'hui très cher dans les ventes internationales.",
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
            text: "Les galeries occidentales ont redécouvert ces images dans les années 1990, soit trente ans après. Cette reconnaissance tardive pose deux questions : qui touche l'argent, et qui décide de ce qui fait **œuvre** ? Plusieurs photographes sont morts avant de voir la valeur prise par leurs **négatifs**.",
          },
          {
            type: "aRetenir",
            points: [
              "Des commandes de quartier devenues **œuvres** de collection",
              "Redécouvertes par les galeries dans les années 1990",
              "La question des **droits** sur les négatifs reste vive",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-04-photographie-africaine-lesson-3",
        title: "Image coloniale contre portrait choisi",
        blocks: [
          {
            type: "paragraphe",
            text: "Pendant un siècle, les photographies d'Afrique ont été prises par des Européens. Les studios africains ont changé qui tient l'appareil.",
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
            text: "Sur les images coloniales, les personnes sont alignées, anonymes, classées par « type ». Dans le studio, le modèle décide de tout. Des photographes contemporains comme **Zanele Muholi** ou **Omar Victor Diop** ont fait de ce renversement leur sujet.",
          },
          {
            type: "aRetenir",
            points: [
              "L'image coloniale classait des sujets **anonymes**",
              "Dans le studio, le modèle décide de tout",
              "Muholi et Omar Victor Diop poursuivent ce **renversement**",
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
        title: "Ousmane Sembène, de l'écriture au cinéma",
        blocks: [
          {
            type: "paragraphe",
            text: "**Ousmane Sembène** était sénégalais. Il a été docker à Marseille, puis écrivain, avant de devenir cinéaste à plus de quarante ans.",
          },
          {
            type: "chiffreCle",
            valeur: "1966",
            legende: "La Noire de…, premier long métrage de Sembène",
          },
          {
            type: "paragraphe",
            text: "Ses livres touchaient peu de lecteurs au Sénégal, où beaucoup ne lisaient pas le français. Il choisit donc le cinéma, et tourne en **wolof**. Il filme les humiliations du quotidien. Il appelait le cinéma son « école du soir ».",
          },
          {
            type: "aRetenir",
            points: [
              "**Ousmane Sembène**, pionnier du cinéma sénégalais",
              "Il tourne en **wolof** pour être compris chez lui",
              "Le cinéma comme « école du soir » populaire",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-05-cinema-auteur-lesson-2",
        title: "Le FESPACO, grand rendez-vous du cinéma africain",
        blocks: [
          {
            type: "paragraphe",
            text: "Le FESPACO est un festival de cinéma qui se tient à **Ouagadougou**, au Burkina Faso. Il a lieu tous les deux ans.",
          },
          {
            type: "chiffreCle",
            valeur: "1969",
            legende: "première Semaine du cinéma africain, à Ouagadougou",
          },
          {
            type: "paragraphe",
            text: "Tout commence en 1969 avec une Semaine du cinéma africain. Le festival est institutionnalisé en **1972** sous le nom de FESPACO. C'est aujourd'hui le plus grand festival de cinéma du continent. Il a permis aux films africains de circuler entre pays africains.",
          },
          {
            type: "aRetenir",
            points: [
              "Le FESPACO se tient à **Ouagadougou**, tous les deux ans",
              "Né d'une Semaine du cinéma en 1969, institutionnalisé en **1972**",
              "Il fait circuler les films entre pays africains",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-05-cinema-auteur-lesson-3",
        title: "Faire du cinéma sans industrie ni financement",
        blocks: [
          {
            type: "paragraphe",
            text: "Un film coûte cher. En Afrique, il n'existe pas de grande industrie du cinéma pour le financer.",
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
            text: "Pendant longtemps, il fallait convaincre des guichets européens pour tourner. Ces financiers décidaient donc en partie des sujets. **Djibril Diop Mambéty** a choisi l'autre voie : tourner avec très peu, et gagner en **liberté de forme**.",
          },
          {
            type: "aRetenir",
            points: [
              "Le financement venait surtout de guichets **européens**",
              "**Mambéty** tournait avec très peu de moyens",
              "La contrainte a produit une esthétique propre",
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
          "Le FESPACO se tient à Ouagadougou, au Burkina Faso. Né de la Semaine du cinéma africain de 1969, il est institutionnalisé en 1972.",
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
        title: "Ngugi wa Thiong'o et le choix de la langue",
        blocks: [
          {
            type: "paragraphe",
            text: "**Ngugi wa Thiong'o** est un écrivain kényan. Célèbre pour ses romans en anglais, il a décidé en 1986 d'écrire désormais en gikuyu, sa langue maternelle.",
          },
          {
            type: "chiffreCle",
            valeur: "1986",
            legende: "Decolonising the Mind, de Ngugi wa Thiong'o",
          },
          {
            type: "paragraphe",
            text: "Il explique son choix dans un essai, « Decolonising the Mind ». Selon lui, une langue transporte une façon de voir le monde. Écrire en anglais reviendrait donc à penser dans le cadre du colonisateur. Ce choix a réduit son **lectorat immédiat**.",
          },
          {
            type: "aRetenir",
            points: [
              "**Ngugi wa Thiong'o** écrit en gikuyu depuis 1986",
              "Une langue transporte une façon de voir le monde",
              "Un choix politique, au prix du **lectorat**",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-06-litteratures-africaines-lesson-2",
        title: "Chinua Achebe renverse le récit colonial",
        blocks: [
          {
            type: "paragraphe",
            text: "**Chinua Achebe** était nigérian. En 1958, il publie « Things Fall Apart », un roman sur l'arrivée des Européens dans un village igbo.",
          },
          {
            type: "chiffreCle",
            valeur: "1958",
            legende: "Things Fall Apart, de Chinua Achebe",
          },
          {
            type: "paragraphe",
            text: "Jusque-là, les récits coloniaux racontaient cette rencontre du point de vue européen. Achebe la raconte du point de vue du village. Le roman est traduit dans des dizaines de langues. Il ouvre la voie à toute une **génération d'écrivains** africains.",
          },
          {
            type: "aRetenir",
            points: [
              "**Achebe** publie « Things Fall Apart » en 1958",
              "Il raconte la colonisation du point de vue africain",
              "Un livre fondateur pour la **génération** suivante",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-06-litteratures-africaines-lesson-3",
        title: "Prix Nobel, traductions et écrivains de la diaspora",
        blocks: [
          {
            type: "paragraphe",
            text: "La littérature africaine est aujourd'hui traduite, primée et lue dans le monde entier. Une question revient pourtant : pour qui écrit-on ?",
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
            text: "**Wole Soyinka**, nigérian, reçoit le prix Nobel en 1986. Abdulrazak Gurnah, tanzanien, le reçoit en 2021. Beaucoup de ces auteurs vivent et publient hors d'Afrique. Écrivent-ils pour un **lectorat africain** ou pour les jurys du Nord ?",
          },
          {
            type: "aRetenir",
            points: [
              "**Soyinka** en 1986, Gurnah en 2021 : deux Nobel",
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
        title: "La danse comme rite, pas comme spectacle",
        blocks: [
          {
            type: "paragraphe",
            text: "Au **Sénégal**, le sabar désigne à la fois un tambour et une danse. Les deux vont ensemble : le tambour lance un rythme, le danseur y répond.",
          },
          {
            type: "chiffreCle",
            valeur: "Sabar",
            legende: "au Sénégal, tambour et danse indissociables",
          },
          {
            type: "paragraphe",
            text: "La danse accompagne un mariage, une récolte ou une initiation. Elle a une **fonction précise** dans la cérémonie. Le public et les danseurs se mélangent, et chacun peut entrer dans le cercle à son tour.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **sabar** unit un tambour et une danse",
              "La danse a une fonction dans la cérémonie",
              "Public et danseurs se mélangent dans le cercle",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-07-danses-lesson-2",
        title: "Ce que la traite a transporté : capoeira, rumba, jazz",
        blocks: [
          {
            type: "paragraphe",
            text: "Les personnes déportées par la traite arrivaient sans aucun bien. Elles emportaient en revanche des gestes, des rythmes et des chants.",
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
            text: "La **capoeira** brésilienne, la rumba cubaine et le jazz de la Nouvelle-Orléans gardent des structures rythmiques venues d'Afrique. Ces formes ont été transmises par le **corps**, de génération en génération, sans écrit ni instrument à conserver.",
          },
          {
            type: "aRetenir",
            points: [
              "La traite a transporté des **rythmes** avec les personnes",
              "Capoeira, rumba et jazz en gardent la trace",
              "Une transmission par le **corps**, sans écrit",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-07-danses-lesson-3",
        title: "Pantsula, azonto, amapiano : les danses en ligne",
        blocks: [
          {
            type: "paragraphe",
            text: "Le **pantsula** vient d'Afrique du Sud, l'**azonto** du Ghana. Ces danses circulent aujourd'hui par vidéo, et sont reprises partout dans le monde.",
          },
          {
            type: "chiffreCle",
            valeur: "Amapiano",
            legende: "genre sud-africain diffusé mondialement par la danse",
          },
          {
            type: "paragraphe",
            text: "Une chorégraphie née dans une cour de township peut être reprise à Séoul deux semaines plus tard. Cette diffusion rapide soulève une question : qui est crédité pour le pas, et qui gagne l'argent ? Les créateurs sont souvent oubliés.",
          },
          {
            type: "aRetenir",
            points: [
              "Pantsula, azonto et amapiano circulent par **vidéo**",
              "Une danse peut faire le tour du monde en jours",
              "Les créateurs sont rarement **crédités**",
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
        title: "Boubou, kanga, shweshwe : le vêtement comme message",
        blocks: [
          {
            type: "paragraphe",
            text: "Le **kanga** est un pagne imprimé d'Afrique de l'Est. Un proverbe est imprimé dans sa bordure, et c'est ce proverbe qui compte.",
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
            text: "On offre un kanga pour dire quelque chose qu'on ne dirait pas à voix haute. Ailleurs, le boubou d'Afrique de l'Ouest et le **shweshwe** d'Afrique australe suivent d'autres codes. Dans les trois cas, la coupe et le tissu situent celui qui les porte.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **kanga** porte un proverbe dans sa bordure",
              "On l'offre pour faire passer un message",
              "Boubou, kanga et shweshwe, trois codes distincts",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-08-mode-creation-lesson-2",
        title: "Chris Seydou et la naissance d'une mode africaine",
        blocks: [
          {
            type: "paragraphe",
            text: "**Chris Seydou** était un styliste malien, né en 1949 et mort en 1994. Il a coupé le bogolan comme un tissu de haute couture.",
          },
          {
            type: "chiffreCle",
            valeur: "Chris Seydou",
            legende: "le Malien qui coupe le bogolan en couture",
          },
          {
            type: "paragraphe",
            text: "Avant lui, les grandes maisons européennes citaient l'Afrique comme une « inspiration », sans nommer de créateurs africains. Il a montré qu'un tissu traditionnel pouvait devenir un vêtement de mode. Après lui, **Alphadi** et Imane Ayissi ont installé une mode africaine sur les circuits internationaux.",
          },
          {
            type: "aRetenir",
            points: [
              "**Chris Seydou** fait entrer le bogolan en haute couture",
              "Styliste malien, 1949-1994",
              "**Alphadi** et Imane Ayissi ont prolongé cette voie",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-08-mode-creation-lesson-3",
        title: "La friperie importée et ses effets",
        blocks: [
          {
            type: "paragraphe",
            text: "Chaque semaine, des tonnes de vêtements usagés d'Europe et d'Amérique arrivent dans les ports africains. Le marché de **Kantamanto**, à Accra, en est une plaque tournante.",
          },
          {
            type: "chiffreCle",
            valeur: "Kantamanto",
            legende: "marché d'Accra, plaque tournante de la friperie",
          },
          {
            type: "paragraphe",
            text: "Cette **friperie** habille des millions de personnes à très bas prix. Elle concurrence aussi les filières textiles locales, et laisse des montagnes d'invendus. Plusieurs pays d'Afrique de l'Est ont voulu la limiter, sous forte pression commerciale.",
          },
          {
            type: "aRetenir",
            points: [
              "La **friperie** importée habille à très bas prix",
              "Elle concurrence les filières textiles locales",
              "Les tentatives de restriction se heurtent au commerce",
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
