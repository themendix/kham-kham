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
    xp: 70,
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
        title: "Le mbalax, le Sénégal en rythme",
        blocks: [
          {
            type: "paragraphe",
            text: "À Dakar, le tambour sabar ne suit pas la musique : il la conduit. De sa rencontre avec les guitares électriques et les claviers est né le **mbalax**, dans les années 1970.",
          },
          {
            type: "reperes",
            items: [
              { label: "Pays", valeur: "Sénégal" },
              { label: "Percussion", valeur: "Le tambour sabar" },
              { label: "Voix majeure", valeur: "Youssou N'Dour" },
            ],
          },
          {
            type: "paragraphe",
            text: "**Youssou N'Dour** a porté ce style sur les scènes du monde entier sans en changer la langue : il chante en **wolof**. Son groupe, le Super Étoile de Dakar, joue toujours dans le club qu'il a ouvert chez lui.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **mbalax** naît au Sénégal dans les années 1970",
              "Il repose sur le **sabar**, joué à la main et au bâton",
              "**Youssou N'Dour** l'a fait connaître au monde, en wolof",
            ],
          },
        ],
      },
      {
        id: "lesson-arts-soukous",
        title: "Le soukous et la rumba congolaise",
        blocks: [
          {
            type: "paragraphe",
            text: "Sur les deux rives du fleuve Congo, une danse ancienne appelée nkumba — « les hanches » en kikongo — a donné son nom à la **rumba congolaise**.",
          },
          {
            type: "chiffreCle",
            valeur: "2021",
            legende: "la rumba congolaise entre au patrimoine de l'UNESCO",
          },
          {
            type: "paragraphe",
            text: "De cette rumba est sorti le **soukous**, plus rapide, reconnaissable à ses guitares entrelacées et à ses longues séquences dansées. Franco Luambo et son TPOK Jazz l'ont diffusé dans toute l'Afrique.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **soukous** descend directement de la rumba congolaise",
              "La rumba tient son nom du nkumba, une danse kongo",
              "L'UNESCO l'a inscrite au patrimoine immatériel en 2021",
            ],
          },
          {
            type: "leSavaisTu",
            text: "La rumba a traversé l'Atlantique deux fois : partie d'Afrique centrale avec la traite, elle est revenue de Cuba par les disques que les marins débarquaient à Kinshasa.",
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
      {
        id: "lesson-arts-rai",
        title: "Le raï, la voix d'Oran",
        blocks: [
          {
            type: "paragraphe",
            text: "À Oran, dans les années 1920, des chanteuses de cabaret appelées cheikhates chantaient l'amour et le manque sans rien adoucir. Ce répertoire portait déjà son nom : le **raï**, « l'opinion » en arabe algérien.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1920", texte: "Le raï se forme à Oran et Sidi Bel Abbès" },
              { date: "1980", texte: "Guitares et synthétiseurs : le raï devient pop" },
              { date: "2022", texte: "Inscription au patrimoine immatériel de l'UNESCO" },
            ],
          },
          {
            type: "paragraphe",
            text: "**Cheb Khaled**, Cheb Mami et Rachid Taha l'ont porté hors d'Algérie. Chanté en arabe algérien, le raï a longtemps dérangé chez lui, et plusieurs de ses artistes ont dû quitter le pays.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **raï** naît à Oran et Sidi Bel Abbès dans les années 1920",
              "Il devient un phénomène pop dans les **années 1980**",
              "L'UNESCO l'inscrit au patrimoine immatériel en **2022**",
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
      {
        id: "quiz-arts-5",
        question: "Dans quelle ville algérienne le raï s'est-il formé ?",
        options: ["Alger", "Constantine", "Oran", "Annaba"],
        correctIndex: 2,
        explanation:
          "Le raï se forme à Oran et Sidi Bel Abbès dès les années 1920, avant de devenir un phénomène mondial dans les années 1980. L'UNESCO l'a inscrit à son patrimoine immatériel en 2022.",
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
    xp: 70,
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
            type: "citation",
            texte: "Nous sommes les sacs à paroles, nous sommes les sacs qui renferment des secrets plusieurs fois séculaires.",
            auteur: "Djeli Mamoudou Kouyaté",
          },
          {
            type: "paragraphe",
            text: "Le griot — **djeli** en mandingue — conserve la **généalogie**, l'histoire et les alliances de la famille à laquelle il est attaché, et les récite quand il le faut. Sa parole loue, mais peut aussi rappeler ce qu'on préférerait oublier.",
          },
          {
            type: "aRetenir",
            points: [
              "Le griot, ou **djeli**, conserve la mémoire d'une famille",
              "Il transmet oralement généalogies, histoire et alliances",
              "Sa parole peut louer comme elle peut **rappeler**",
            ],
          },
        ],
      },
      {
        id: "lesson-trad-kora",
        title: "La kora, la harpe à vingt et une cordes",
        blocks: [
          {
            type: "paragraphe",
            text: "Une demi-calebasse tendue de peau, un long manche, et deux rangées de cordes que les pouces et les index font sonner : la **kora** ne ressemble à aucun autre instrument.",
          },
          {
            type: "chiffreCle",
            valeur: "21 cordes",
            legende: "réparties en deux rangées, de part et d'autre du manche",
          },
          {
            type: "paragraphe",
            text: "Elle appartient aux familles de griots mandingues — Kouyaté, Diabaté, Cissokho — qui se la transmettent de père en fils. **Toumani Diabaté** l'a fait entrer dans le jazz et la musique classique sans lui retirer son répertoire d'origine.",
          },
          {
            type: "aRetenir",
            points: [
              "La **kora** compte 21 cordes sur une caisse en calebasse",
              "Elle se transmet dans les familles de griots mandingues",
              "Jouée aux pouces et aux index, jamais avec un archet",
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
      {
        id: "lesson-trad-arbre-a-palabres",
        title: "L'arbre à palabres, un tribunal sans murs",
        blocks: [
          {
            type: "paragraphe",
            text: "Dans beaucoup de villages d'Afrique de l'Ouest, un grand arbre tient lieu de salle commune. Sous son ombre, on règle les **litiges**, on annonce les décisions et on marie.",
          },
          {
            type: "reperes",
            items: [
              { label: "Essence fréquente", valeur: "Le baobab ou le fromager" },
              { label: "Rôle", valeur: "Justice, annonces, délibération" },
              { label: "Principe", valeur: "Parler jusqu'à l'accord" },
            ],
          },
          {
            type: "paragraphe",
            text: "La **palabre** n'a pas de durée fixe : on discute jusqu'à ce qu'un accord tienne, parce qu'il faudra continuer à vivre ensemble après. Les anciens tranchent en dernier, une fois que chacun a parlé.",
          },
          {
            type: "aRetenir",
            points: [
              "L'**arbre à palabres** sert de lieu de justice et d'annonce",
              "Souvent un baobab ou un fromager, au centre du village",
              "On délibère jusqu'à l'accord, pas jusqu'au vote",
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
      {
        id: "quiz-trad-5",
        question: "À quoi sert traditionnellement l'arbre à palabres ?",
        options: [
          "À délimiter la frontière entre deux villages",
          "À régler les litiges et prendre les décisions collectives",
          "À marquer l'emplacement d'un ancien marché",
          "À abriter les récoltes pendant la saison sèche",
        ],
        correctIndex: 1,
        explanation:
          "Sous l'arbre à palabres, souvent un baobab ou un fromager, on règle les différends et on annonce les décisions. On y délibère jusqu'à l'accord, parce que les parties devront continuer à vivre ensemble.",
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
    xp: 70,
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
        id: "lesson-actu-zlecaf",
        title: "La ZLECAf, un marché d'un milliard de personnes",
        blocks: [
          {
            type: "paragraphe",
            text: "Signé à Kigali en 2018, l'accord créant la **ZLECAf** — Zone de libre-échange continentale africaine — engage presque tous les États du continent à baisser leurs droits de douane entre eux.",
          },
          {
            type: "frise",
            evenements: [
              { date: "2018", texte: "Signature de l'accord à Kigali" },
              { date: "2019", texte: "Entrée en vigueur, le 30 mai" },
              { date: "2021", texte: "Début effectif des échanges, le 1er janvier" },
            ],
          },
          {
            type: "paragraphe",
            text: "Le commerce entre pays africains reste faible : la plupart exportent surtout des matières premières vers d'autres continents. La ZLECAf vise à changer cela, mais les **routes** et les postes-frontières manquent autant que les accords.",
          },
          {
            type: "aRetenir",
            points: [
              "La **ZLECAf** est entrée en vigueur le 30 mai 2019",
              "Les échanges n'ont réellement démarré qu'en janvier 2021",
              "Objectif : faire commercer les pays africains entre eux",
            ],
          },
        ],
      },
      {
        id: "lesson-actu-union-africaine",
        title: "L'Union africaine, du rêve panafricain aux institutions",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1963, trente-deux États fraîchement indépendants fondent à Addis-Abeba l'Organisation de l'unité africaine. Le rêve d'un continent uni y rencontre pour la première fois des statuts et un budget.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1963", texte: "Création de l'Organisation de l'unité africaine" },
              { date: "2002", texte: "L'Union africaine lui succède" },
              { date: "2023", texte: "L'UA entre au G20 comme membre permanent" },
            ],
          },
          {
            type: "paragraphe",
            text: "Fondée en 2002 à **Addis-Abeba**, l'**Union africaine** succède à l'OUA et réunit tous les États du continent. Elle déploie des missions de paix, mais ses décisions dépendent du bon vouloir de ses membres.",
          },
          {
            type: "aRetenir",
            points: [
              "L'**Union africaine** naît en 2002, après l'OUA de 1963",
              "Son siège est à **Addis-Abeba**, en Éthiopie",
              "Elle siège au G20 depuis 2023",
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
      {
        id: "lesson-actu-tech-hubs",
        title: "Yaba, Nairobi, Kigali : où se fabrique la tech africaine",
        blocks: [
          {
            type: "paragraphe",
            text: "Le quartier de **Yaba**, à Lagos, tient sur quelques rues : incubateurs, écoles de code et sièges de start-up y sont voisins. On l'a surnommé la « Yabacon Valley ».",
          },
          {
            type: "reperes",
            items: [
              { label: "Lagos", valeur: "Yaba, la Yabacon Valley" },
              { label: "Nairobi", valeur: "La Silicon Savannah" },
              { label: "Kigali", valeur: "Kigali Innovation City" },
            ],
          },
          {
            type: "paragraphe",
            text: "Nairobi doit son surnom au succès de **M-Pesa** : là où l'argent circule déjà par téléphone, les services qui s'y greffent trouvent aussitôt des utilisateurs. Les capitaux, eux, restent concentrés sur une poignée de pays.",
          },
          {
            type: "aRetenir",
            points: [
              "**Yaba**, à Lagos, concentre incubateurs et start-up nigérianes",
              "Nairobi est surnommée la « Silicon Savannah »",
              "Le financement reste concentré sur quelques pays",
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
        question: "Que désigne la ZLECAf, entrée en vigueur en 2019 ?",
        options: [
          "La Zone de libre-échange continentale africaine",
          "La Zone de législation commerciale africaine",
          "La Zone logistique et commerciale africaine",
          "La Zone de lutte contre l'exclusion financière",
        ],
        correctIndex: 0,
        explanation:
          "La Zone de libre-échange continentale africaine, signée à Kigali en 2018, est entrée en vigueur le 30 mai 2019. Les échanges à droits réduits n'ont réellement démarré que le 1er janvier 2021.",
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
      {
        id: "quiz-actu-5",
        question: "Quel surnom donne-t-on à l'écosystème technologique de Nairobi ?",
        options: [
          "La Yabacon Valley",
          "La Silicon Savannah",
          "La Rift Valley numérique",
          "La Sahel Tech",
        ],
        correctIndex: 1,
        explanation:
          "Nairobi est surnommée la « Silicon Savannah », un élan largement né du succès de M-Pesa. Lagos a de son côté sa « Yabacon Valley », dans le quartier de Yaba.",
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
    xp: 70,
    lessons: [
      {
        id: "course-decouverte-01-masques-sculptures-lesson-1",
        title: "À quoi sert un masque africain",
        blocks: [
          {
            type: "paragraphe",
            text: "Chez les **Dogon** du Mali, un masque ne reste pas accroché au mur. On le sort, on le porte, et on danse avec.",
          },
          {
            type: "image",
            alt: "Masque facial baoulé en bois sombre, au visage allongé et aux traits fins.",
            legende: "Masque baoulé, Côte d'Ivoire",
            credit: "The Metropolitan Museum of Art, domaine public (CC0)",
          },
          {
            type: "paragraphe",
            text: "Le masque sort aux moments qui comptent : funérailles, initiations, semailles. Il représente un ancêtre ou une force invisible. Chez les **Baoulé** de Côte d'Ivoire, la fonction est la même.",
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
            text: "Le royaume du Bénin se trouvait dans l'actuel Nigeria. Ses fondeurs coulaient le bronze.",
          },
          {
            type: "image",
            alt: "Plaque de bronze : l'oba à cheval, entouré de serviteurs.",
            legende: "L'oba à cheval, plaque du palais",
            credit: "The Metropolitan Museum of Art, domaine public (CC0)",
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
            text: "Le roi portait le titre d'**oba**. Les plaques étaient coulées à la **cire perdue**, technique qui permet des détails très fins.",
          },
          {
            type: "aRetenir",
            points: [
              "Les bronzes ornaient le palais de l'**oba**",
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
          {
        id: "course-decouverte-01-masques-sculptures-lesson-4",
        title: "Les statues fang du Gabon",
        blocks: [
          {
            type: "paragraphe",
            text: "Chez les **Fang** du Gabon, les crânes des ancêtres étaient conservés dans des boîtes en écorce. Une statue de bois était posée sur le couvercle.",
          },
          {
            type: "image",
            alt: "Statue fang en bois sombre, tête ronde et bras repliés devant le torse.",
            legende: "Statue eyema byeri, gardienne d'une boîte à reliques",
            credit: "The Metropolitan Museum of Art, domaine public (CC0)",
          },
          {
            type: "paragraphe",
            text: "Cette statue est appelée **eyema byeri**. Elle gardait la boîte et son contenu. Les anciens s'en servaient aussi pour enseigner la généalogie du clan aux jeunes.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **byeri** est le culte fang des ancêtres",
              "La statue **eyema byeri** gardait la boîte à reliques",
              "Elle servait à enseigner la généalogie du clan",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-01-masques-sculptures-lesson-5",
        title: "Les restitutions d'œuvres africaines",
        blocks: [
          {
            type: "paragraphe",
            text: "Des milliers d'objets africains sont conservés dans les musées d'Europe et d'Amérique. Depuis quelques années, certains repartent vers leur pays d'origine.",
          },
          {
            type: "frise",
            evenements: [
              { date: "Juillet 2022", texte: "Accord Allemagne-Nigeria sur 1 100 pièces" },
              { date: "Octobre 2022", texte: "Le Smithsonian rend 29 bronzes au Nigeria" },
              { date: "Décembre 2022", texte: "L'Allemagne renvoie ses 20 premiers objets" },
            ],
          },
          {
            type: "paragraphe",
            text: "L'accord entre l'**Allemagne** et le Nigeria porte sur environ 1 100 bronzes. Le **Smithsonian**, aux États-Unis, en a rendu 29. Le débat porte désormais sur la suite : où les exposer, qui en est propriétaire, et à quelles conditions.",
          },
          {
            type: "aRetenir",
            points: [
              "L'**Allemagne** s'est engagée sur environ 1 100 bronzes",
              "Le Smithsonian en a **restitué** 29 en 2022",
              "Le débat porte sur la propriété et l'exposition",
            ],
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
          "Le masque n'est pas conçu pour être exposé : il se porte et se danse, lors de funérailles, d'initiations ou de semailles.",
      },
      {
        id: "quiz-decouverte-01-2",
        question: "Quelle technique était utilisée pour couler les bronzes du Bénin ?",
        options: [
          "Le moulage au sable",
          "La cire perdue",
          "Le martelage à froid",
          "L'électrolyse",
        ],
        correctIndex: 1,
        explanation:
          "La cire perdue permet une très grande finesse de détail : c'est la technique des fondeurs du royaume du Bénin.",
      },
      {
        id: "quiz-decouverte-01-3",
        question: "Que dit-on aujourd'hui de l'influence des sculptures africaines sur Picasso ?",
        options: [
          "Elle est prouvée par ses carnets",
          "Elle est débattue, et Picasso l'a lui-même niée",
          "Elle n'a jamais été évoquée",
          "Elle ne concerne que Matisse",
        ],
        correctIndex: 1,
        explanation:
          "Ces sculptures circulaient bien à Paris vers 1906, mais l'ampleur de la dette de Picasso fait débat, et il l'a lui-même niée.",
      },
      {
        id: "quiz-decouverte-01-4",
        question: "Qu'est-ce que le byeri, chez les Fang du Gabon ?",
        options: [
          "Un type de tambour",
          "Le culte des ancêtres et les objets qui s'y rattachent",
          "Une danse de mariage",
          "Un tissu de raphia",
        ],
        correctIndex: 1,
        explanation:
          "Le byeri désigne le culte des ancêtres fang, ses rites et ses objets, dont les boîtes à reliques et leurs statues gardiennes.",
      },
      {
        id: "quiz-decouverte-01-5",
        question: "Sur combien de bronzes l'Allemagne s'est-elle engagée envers le Nigeria ?",
        options: [
          "Une dizaine",
          "Environ 1 100",
          "Environ 10 000",
          "Aucun",
        ],
        correctIndex: 1,
        explanation:
          "L'accord signé en juillet 2022 porte sur environ 1 100 pièces ; les 20 premières ont été renvoyées en décembre 2022.",
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
    xp: 70,
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
            type: "image",
            alt: "Bandes de kente aux motifs colorés, alignées avant leur assemblage.",
            legende: "Bandes de kente, avant assemblage",
            credit: "Photo Mwintirew, CC BY-SA 4.0, via Wikimedia Commons",
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
            text: "Chaque motif a un nom, et à ce nom correspond un **proverbe**. Porter un kente, c'est afficher une phrase. Réservé autrefois à la cour, il est devenu un symbole panafricain.",
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
            type: "image",
            alt: "Tissu bogolan à motifs géométriques blancs sur fond brun foncé.",
            legende: "Bogolan bamana à motifs géométriques, Mali",
            credit: "Photo Sailko, CC BY-SA 4.0, via Wikimedia Commons",
          },
          {
            type: "chiffreCle",
            valeur: "Bogolanfini",
            legende: "en bambara, tissu fait avec de la boue",
          },
          {
            type: "paragraphe",
            text: "Le coton est d'abord teint aux feuilles. On le peint ensuite à la terre fermentée, qui fixe les motifs en noir profond. Plus à l'est, à **Kano**, les teinturières travaillent l'indigo en fosses.",
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
            text: "Le wax est le tissu emblématique de l'Afrique de l'Ouest. Il a pourtant été inventé aux Pays-Bas.",
          },
          {
            type: "image",
            alt: "Pièce de wax à motif circulaire répété.",
            legende: "Motif de wax nommé « Nsubura », Ghana",
            credit: "Photo Naa2Darkoa, CC BY-SA 4.0, via Wikimedia Commons",
          },
          {
            type: "paragraphe",
            text: "Des industriels **néerlandais** copient le batik de Java au XIXe siècle, sans succès. Ils le vendent sur les côtes africaines, où chaque motif reçoit un **surnom local**.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **wax** imite le batik indonésien",
              "Vendu en Afrique après son échec asiatique",
              "Ses motifs portent des **surnoms** locaux",
            ],
          },
          {
            type: "leSavaisTu",
            text: "À Lomé, les « Nana Benz » ont fait fortune sur le wax dans les années 1970, d'où leur surnom tiré des Mercedes.",
          },
        ],
      },
          {
        id: "course-decouverte-02-tissus-parures-lesson-4",
        title: "L'or des Akan et les poids à peser l'or",
        blocks: [
          {
            type: "paragraphe",
            text: "Chez les **Akan**, au Ghana et en Côte d'Ivoire, on payait en poudre d'or. Pour la peser, on utilisait de petits poids en laiton.",
          },
          {
            type: "image",
            alt: "Poids akan en laiton représentant un tabouret miniature, vu de trois quarts.",
            legende: "Poids à peser l'or en forme de tabouret",
            credit: "The Metropolitan Museum of Art, domaine public (CC0)",
          },
          {
            type: "chiffreCle",
            valeur: "mrammou",
            legende: "nom local des poids à peser l'or akan",
          },
          {
            type: "paragraphe",
            text: "Ces poids sont des miniatures. Certains sont géométriques, d'autres figurent des animaux, des outils ou des scènes. Beaucoup illustrent un **proverbe**.",
          },
          {
            type: "aRetenir",
            points: [
              "Les **Akan** pesaient la poudre d'or en laiton",
              "Les poids sont géométriques ou **figuratifs**",
              "Certains illustrent un proverbe : les poids-proverbes",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-02-tissus-parures-lesson-5",
        title: "Le raphia des Kuba, au Congo",
        blocks: [
          {
            type: "paragraphe",
            text: "Les **Kuba** vivent dans la région du Kasaï, en République démocratique du Congo. Ils tissent la fibre du palmier-raphia.",
          },
          {
            type: "image",
            alt: "Panneau de raphia brodé, à motifs géométriques imbriqués, au relief de velours.",
            legende: "Panneau de raphia brodé, groupe shoowa",
            credit: "Photo Hiart, CC0, via Wikimedia Commons",
          },
          {
            type: "reperes",
            items: [
              { label: "Peuple", valeur: "Kuba, groupe shoowa" },
              { label: "Région", valeur: "Kasaï-Sankuru, RD Congo" },
              { label: "Matière", valeur: "Fibre de palmier-raphia" },
            ],
          },
          {
            type: "paragraphe",
            text: "Le groupe **shoowa** brode ces tissus au point coupé, ce qui donne un relief de velours. Ces étoffes servaient de prestige, de dot et de monnaie d'échange.",
          },
          {
            type: "aRetenir",
            points: [
              "Les **Kuba** tissent la fibre de palmier-raphia",
              "Le groupe shoowa brode au **point coupé**",
              "Ces tissus servaient de prestige, de dot, de monnaie",
            ],
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
          "Les Kuba du Congo",
        ],
        correctIndex: 1,
        explanation:
          "Le kente est tissé en pays ashanti, au Ghana, en bandes étroites ensuite assemblées.",
      },
      {
        id: "quiz-decouverte-02-2",
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
        id: "quiz-decouverte-02-3",
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
        id: "quiz-decouverte-02-4",
        question: "Comment les Akan pesaient-ils la poudre d'or ?",
        options: [
          "Avec de petits poids en laiton, souvent figuratifs",
          "Avec des pierres calibrées",
          "À la main, sans instrument",
          "Avec des coquillages",
        ],
        correctIndex: 0,
        explanation:
          "Les poids akan, ou mrammou, sont des miniatures de laiton ; beaucoup illustrent un proverbe.",
      },
      {
        id: "quiz-decouverte-02-5",
        question: "De quelle matière sont faits les tissus kuba du Kasaï ?",
        options: [
          "De coton",
          "De fibre de palmier-raphia",
          "De laine",
          "De soie",
        ],
        correctIndex: 1,
        explanation:
          "Les Kuba tissent la fibre de palmier-raphia ; le groupe shoowa la brode au point coupé, ce qui donne un relief de velours.",
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
    xp: 70,
    lessons: [
      {
        id: "course-decouverte-03-architectures-terre-lesson-1",
        title: "Djenné, le plus grand édifice en terre du monde",
        blocks: [
          {
            type: "paragraphe",
            text: "À **Djenné**, au Mali, la mosquée est construite en terre. Chaque année, les habitants la recouvrent d'une couche fraîche pour qu'elle ne fonde pas sous la pluie.",
          },
          {
            type: "image",
            alt: "La Grande Mosquée de Djenné et les poutres de palmier qui hérissent ses murs.",
            legende: "La Grande Mosquée de Djenné, au Mali",
            credit: "Photo BluesyPete, CC BY-SA 3.0, via Wikimedia Commons",
          },
          {
            type: "paragraphe",
            text: "C'est le plus grand bâtiment en terre crue du monde. Ses murs sont faits de **banco**, un mélange de terre et de paille. Les poutres servent d'échafaudage pendant les travaux.",
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
            text: "La pierre se conserve des siècles. La terre doit être refaite régulièrement. Cela pose un problème aux gardiens du patrimoine.",
          },
          {
            type: "image",
            alt: "Village dogon aux maisons de terre, adossé à la falaise de Bandiagara.",
            legende: "Village dogon, falaises de Bandiagara",
            credit: "Photo Ondřej Havelka, CC BY-SA 4.0, via Wikimedia Commons",
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
            text: "Ces bâtiments réclament un **entretien annuel** et des maçons formés. L'UNESCO protège donc un **savoir-faire vivant** autant qu'un monument.",
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
          {
        id: "course-decouverte-03-architectures-terre-lesson-4",
        title: "Hassan Fathy et le village de New Gourna",
        blocks: [
          {
            type: "paragraphe",
            text: "**Hassan Fathy** était un architecte égyptien, né en 1900 et mort en 1989. Entre 1946 et 1952, il a construit en terre un village entier près de Louxor.",
          },
          {
            type: "chiffreCle",
            valeur: "1946-1952",
            legende: "construction du village de New Gourna",
          },
          {
            type: "paragraphe",
            text: "Ce village s'appelle **New Gourna**. Fathy voulait loger des familles avec les matériaux et les techniques du lieu, sans béton importé. Le projet a beaucoup inspiré l'architecture dite durable. L'UNESCO a mené un programme de sauvegarde du site entre 2018 et 2021.",
          },
          {
            type: "aRetenir",
            points: [
              "**Hassan Fathy** bâtit New Gourna entre 1946 et 1952",
              "Il utilise les matériaux et techniques **du lieu**",
              "L'UNESCO a mené une sauvegarde de 2018 à 2021",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-03-architectures-terre-lesson-5",
        title: "Francis Kéré, bâtir en terre aujourd'hui",
        blocks: [
          {
            type: "paragraphe",
            text: "**Francis Kéré** est né à Gando, au Burkina Faso. En 2022, il est devenu le premier Africain à recevoir le prix Pritzker, la plus haute distinction en architecture.",
          },
          {
            type: "chiffreCle",
            valeur: "2022",
            legende: "Francis Kéré reçoit le prix Pritzker",
          },
          {
            type: "paragraphe",
            text: "Son premier bâtiment est l'école primaire de **Gando**, achevée en 2001. Il l'a construite en briques de terre, avec les habitants du village. Un toit surélevé laisse circuler l'air et évite la chaleur des tôles. La terre est ici un choix technique.",
          },
          {
            type: "aRetenir",
            points: [
              "**Francis Kéré**, premier Africain lauréat du Pritzker",
              "Son école de **Gando** est achevée en 2001",
              "La terre est un choix technique, pas nostalgique",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "quiz-decouverte-03-1",
        question: "Où se trouve le plus vaste édifice en terre crue du monde ?",
        options: [
          "À Tombouctou, au Mali",
          "À Djenné, au Mali",
          "À Kano, au Nigeria",
          "À Gando, au Burkina Faso",
        ],
        correctIndex: 1,
        explanation:
          "La Grande Mosquée de Djenné, au Mali, est le plus grand bâtiment en terre crue du monde.",
      },
      {
        id: "quiz-decouverte-03-2",
        question: "Quelle propriété rend la terre efficace face à la chaleur ?",
        options: [
          "Sa transparence",
          "Son inertie thermique",
          "Sa conductivité électrique",
          "Sa légèreté",
        ],
        correctIndex: 1,
        explanation:
          "Le jour, le mur absorbe la chaleur ; la nuit, il la restitue. C'est l'inertie thermique.",
      },
      {
        id: "quiz-decouverte-03-3",
        question: "Pourquoi ce patrimoine pose-t-il un problème de conservation particulier ?",
        options: [
          "Il est impossible à dater",
          "Il doit être refait régulièrement pour subsister",
          "Il est trop récent pour être classé",
          "Il ne peut pas être visité",
        ],
        correctIndex: 1,
        explanation:
          "La terre exige un entretien annuel et des maçons formés : l'UNESCO y protège un savoir-faire vivant autant qu'un bâtiment.",
      },
      {
        id: "quiz-decouverte-03-4",
        question: "Qui a conçu le village de New Gourna, en Égypte ?",
        options: [
          "Hassan Fathy",
          "Francis Kéré",
          "Le Corbusier",
          "Jean Nouvel",
        ],
        correctIndex: 0,
        explanation:
          "L'architecte égyptien Hassan Fathy a conçu et bâti New Gourna, près de Louxor, entre 1946 et 1952.",
      },
      {
        id: "quiz-decouverte-03-5",
        question: "Quelle distinction Francis Kéré a-t-il reçue en 2022 ?",
        options: [
          "Le prix Pritzker",
          "Le prix Nobel",
          "La Palme d'or",
          "Le prix Noma",
        ],
        correctIndex: 0,
        explanation:
          "Il est le premier Africain lauréat du prix Pritzker, la plus haute distinction en architecture.",
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
    xp: 70,
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
          {
        id: "course-decouverte-04-photographie-africaine-lesson-4",
        title: "Les Rencontres de Bamako",
        blocks: [
          {
            type: "paragraphe",
            text: "Les Rencontres de **Bamako** sont une biennale de photographie africaine. Elles ont été créées en 1994 au Mali, et se tiennent tous les deux ans.",
          },
          {
            type: "chiffreCle",
            valeur: "1994",
            legende: "première édition des Rencontres de Bamako",
          },
          {
            type: "paragraphe",
            text: "L'initiative revient à la photographe française Françoise **Huguier**. La biennale expose des photographes de tout le continent et de la diaspora. Son premier prix porte le nom de **Seydou Keïta**. Elle est devenue le grand rendez-vous de la photographie africaine.",
          },
          {
            type: "aRetenir",
            points: [
              "Biennale de photographie africaine créée en **1994**",
              "Elle se tient à Bamako, au Mali",
              "Son premier prix porte le nom de **Seydou Keïta**",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-04-photographie-africaine-lesson-5",
        title: "Zanele Muholi et Omar Victor Diop",
        blocks: [
          {
            type: "paragraphe",
            text: "**Zanele Muholi** est sud-africaine, **Omar Victor Diop** est sénégalais. Tous deux se photographient eux-mêmes pour parler des autres.",
          },
          {
            type: "reperes",
            items: [
              { label: "Zanele Muholi", valeur: "Afrique du Sud, autoportraits" },
              { label: "Omar Victor Diop", valeur: "Sénégal, mises en scène historiques" },
              { label: "Point commun", valeur: "L'artiste est son propre modèle" },
            ],
          },
          {
            type: "paragraphe",
            text: "La série **Somnyama Ngonyama** de Muholi, « Salut à toi, lionne noire », est une suite d'autoportraits en noir profond. Diop, dans « Diaspora », se met en scène en personnages africains oubliés de l'histoire européenne, costume et accessoires à l'appui.",
          },
          {
            type: "aRetenir",
            points: [
              "Muholi signe les autoportraits de **Somnyama Ngonyama**",
              "Diop rejoue des personnages oubliés dans « **Diaspora** »",
              "L'artiste devient son propre modèle",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "quiz-decouverte-04-1",
        question: "Quelle ville est associée aux grands studios photo ouest-africains ?",
        options: [
          "Dakar",
          "Bamako",
          "Abidjan",
          "Lagos",
        ],
        correctIndex: 1,
        explanation:
          "Bamako, avec Seydou Keïta et Malick Sidibé, est la capitale des studios photo ouest-africains.",
      },
      {
        id: "quiz-decouverte-04-2",
        question:
          "Quand les galeries occidentales ont-elles redécouvert les portraits des studios de Bamako ?",
        options: [
          "Dans les années 1930",
          "Dans les années 1960",
          "Dans les années 1990",
          "En 2020",
        ],
        correctIndex: 2,
        explanation:
          "La redécouverte par les galeries occidentales date des années 1990, soit trente ans après la prise des clichés.",
      },
      {
        id: "quiz-decouverte-04-3",
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
      {
        id: "quiz-decouverte-04-4",
        question: "En quelle année les Rencontres de Bamako ont-elles été créées ?",
        options: [
          "1974",
          "1994",
          "2004",
          "2014",
        ],
        correctIndex: 1,
        explanation:
          "La biennale africaine de la photographie est née en 1994, d'une initiative de la photographe Françoise Huguier.",
      },
      {
        id: "quiz-decouverte-04-5",
        question: "Que contient la série Somnyama Ngonyama de Zanele Muholi ?",
        options: [
          "Des paysages",
          "Une suite d'autoportraits",
          "Des scènes de rue",
          "Des natures mortes",
        ],
        correctIndex: 1,
        explanation:
          "Somnyama Ngonyama, « Salut à toi, lionne noire », est une suite d'autoportraits en noir profond.",
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
    xp: 70,
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
          {
        id: "course-decouverte-05-cinema-auteur-lesson-4",
        title: "Safi Faye et les réalisatrices africaines",
        blocks: [
          {
            type: "paragraphe",
            text: "**Safi Faye** était sénégalaise, née en 1943 et morte en 2023. Elle est la première Africaine à avoir réalisé un long métrage distribué en salles.",
          },
          {
            type: "chiffreCle",
            valeur: "1975",
            legende: "Kaddu Beykat, le film de Safi Faye",
          },
          {
            type: "paragraphe",
            text: "Son film s'appelle **Kaddu Beykat**. Il est tourné en sérère, dans son village, avec les habitants. **Sarah Maldoror**, née en France de parents guadeloupéens, a filmé de son côté les luttes de libération en Angola et en Guinée-Bissau.",
          },
          {
            type: "aRetenir",
            points: [
              "**Safi Faye**, première Africaine à réaliser un long métrage",
              "Kaddu Beykat est tourné en sérère, en 1975",
              "**Sarah Maldoror** a filmé les luttes de libération",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-05-cinema-auteur-lesson-5",
        title: "Le cinéma africain à l'heure du streaming",
        blocks: [
          {
            type: "paragraphe",
            text: "Depuis 2016, **Netflix** et d'autres plateformes de streaming achètent et produisent des films africains. Le Nigeria est le premier pays concerné.",
          },
          {
            type: "reperes",
            items: [
              { label: "Avantage", valeur: "Une diffusion mondiale immédiate" },
              { label: "Risque", valeur: "Des formats dictés de l'extérieur" },
              { label: "Pays moteur", valeur: "Nigeria, industrie Nollywood" },
            ],
          },
          {
            type: "paragraphe",
            text: "La plateforme offre une diffusion que les salles africaines ne permettaient pas. En échange, elle pèse sur les formats et garde les **droits**. Des chercheurs parlent d'une **plateformisation** de la distribution, c'est-à-dire d'un déplacement du pouvoir vers les plateformes.",
          },
          {
            type: "aRetenir",
            points: [
              "Les plateformes offrent une **diffusion mondiale**",
              "Elles pèsent sur les formats et gardent les **droits**",
              "Le Nigeria est le premier pays concerné",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "quiz-decouverte-05-1",
        question: "Pourquoi Ousmane Sembène tournait-il en wolof ?",
        options: [
          "Pour plaire aux festivals européens",
          "Pour être compris de son public au Sénégal",
          "Parce que le français était interdit",
          "Pour réduire les coûts de production",
        ],
        correctIndex: 1,
        explanation:
          "Ses livres touchaient peu de lecteurs au Sénégal : il choisit le cinéma en wolof, son « école du soir ».",
      },
      {
        id: "quiz-decouverte-05-2",
        question: "Dans quelle ville se tient le FESPACO ?",
        options: [
          "Dakar",
          "Ouagadougou",
          "Tunis",
          "Le Caire",
        ],
        correctIndex: 1,
        explanation:
          "Le FESPACO se tient à Ouagadougou. Né de la Semaine du cinéma africain de 1969, il est institutionnalisé en 1972.",
      },
      {
        id: "quiz-decouverte-05-3",
        question: "Quel film de Djibril Diop Mambéty, tourné en 1973, est devenu un classique ?",
        options: [
          "Touki Bouki",
          "Yeelen",
          "Kaddu Beykat",
          "Sarraounia",
        ],
        correctIndex: 0,
        explanation:
          "Touki Bouki, tourné avec des moyens minimes, est aujourd'hui considéré comme un classique du cinéma mondial.",
      },
      {
        id: "quiz-decouverte-05-4",
        question: "Qui est la première Africaine à avoir réalisé un long métrage distribué en salles ?",
        options: [
          "Safi Faye",
          "Sarah Maldoror",
          "Miriam Makeba",
          "Germaine Acogny",
        ],
        correctIndex: 0,
        explanation:
          "La Sénégalaise Safi Faye (1943-2023) réalise Kaddu Beykat en 1975, tourné en sérère dans son village.",
      },
      {
        id: "quiz-decouverte-05-5",
        question: "Quel effet les plateformes de streaming ont-elles sur le cinéma africain ?",
        options: [
          "Elles offrent une diffusion mondiale mais pèsent sur les formats et les droits",
          "Elles n'ont aucun effet",
          "Elles ne financent que des documentaires",
          "Elles ont fermé toutes les salles",
        ],
        correctIndex: 0,
        explanation:
          "Le gain de diffusion se paie d'une perte de contrôle : des chercheurs parlent d'une plateformisation de la distribution.",
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
    xp: 70,
    lessons: [
      {
        id: "course-decouverte-06-litteratures-africaines-lesson-1",
        title: "Ngugi wa Thiong'o et le choix de la langue",
        blocks: [
          {
            type: "paragraphe",
            text: "**Ngugi wa Thiong'o** est un écrivain kényan. Célèbre pour ses romans en anglais, il a décidé en 1986 d'écrire en gikuyu, sa langue maternelle.",
          },
          {
            type: "image",
            alt: "Ngugi wa Thiong'o lisant devant un micro.",
            legende: "Ngugi wa Thiong'o en lecture publique, 2019",
            credit: "Library of Congress Life, CC0, via Wikimedia Commons",
          },
          {
            type: "chiffreCle",
            valeur: "1986",
            legende: "Decolonising the Mind, de Ngugi wa Thiong'o",
          },
          {
            type: "paragraphe",
            text: "Il l'explique dans un essai, « Decolonising the Mind ». Selon lui, une langue transporte une façon de voir le monde : écrire en anglais, c'est penser dans le cadre du **colonisateur**.",
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
            type: "image",
            alt: "Chinua Achebe pendant une lecture publique.",
            legende: "Chinua Achebe, lecture à Buffalo, 2008",
            credit: "Photo Stuart C. Shapiro, CC BY 3.0, via Wikimedia Commons",
          },
          {
            type: "chiffreCle",
            valeur: "1958",
            legende: "Things Fall Apart, de Chinua Achebe",
          },
          {
            type: "paragraphe",
            text: "Jusque-là, ces récits étaient écrits du point de vue européen. Achebe raconte du point de vue du village. Traduit dans des dizaines de langues, il a ouvert la voie à une **génération d'écrivains**.",
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
            text: "La littérature africaine est aujourd'hui traduite, primée et lue partout. Une question revient pourtant : pour qui écrit-on ?",
          },
          {
            type: "image",
            alt: "Wole Soyinka pendant une conférence.",
            legende: "Wole Soyinka, Nobel de littérature 1986",
            credit: "Photo Frankie Fouganthin, CC BY-SA 4.0, via Wikimedia Commons",
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
            text: "**Wole Soyinka** reçoit le Nobel en 1986, Abdulrazak Gurnah en 2021. Beaucoup de ces auteurs vivent hors d'Afrique : écrivent-ils pour un **lectorat africain** ?",
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
          {
        id: "course-decouverte-06-litteratures-africaines-lesson-4",
        title: "L'épopée de Soundiata, de l'oral à l'écrit",
        blocks: [
          {
            type: "paragraphe",
            text: "L'épopée de **Soundiata** raconte la fondation de l'empire du Mali. Elle a été transmise oralement par les griots pendant des siècles.",
          },
          {
            type: "chiffreCle",
            valeur: "1960",
            legende: "D. T. Niane publie l'épopée en français",
          },
          {
            type: "paragraphe",
            text: "Chaque griot en donnait sa version, avec ses variantes. En 1960, l'historien guinéen **Djibril Tamsir Niane** en publie une version écrite en français. Le texte devient alors fixe, alors que l'oral était **mouvant** par nature, chaque récitation étant une création.",
          },
          {
            type: "aRetenir",
            points: [
              "L'épopée de **Soundiata** fonde l'empire du Mali",
              "Transmise par les griots, en versions **multiples**",
              "D. T. Niane la publie par écrit en 1960",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-06-litteratures-africaines-lesson-5",
        title: "Mariama Bâ et les écrivaines africaines",
        blocks: [
          {
            type: "paragraphe",
            text: "**Mariama Bâ** était sénégalaise. En 1979, elle publie « Une si longue lettre », un roman écrit sous la forme d'une lettre d'une veuve à son amie.",
          },
          {
            type: "image",
            alt: "Mariama Bâ debout au micro, pendant un discours.",
            legende: "Mariama Bâ, discours à l'École normale de Rufisque",
            credit: "Domaine public, via Wikimedia Commons",
          },
          {
            type: "chiffreCle",
            valeur: "1979",
            legende: "Une si longue lettre, de Mariama Bâ",
          },
          {
            type: "paragraphe",
            text: "Le livre paraît à Dakar, aux Nouvelles Éditions Africaines, et reçoit le **prix Noma**. Bâ y parle de polygamie, de veuvage et de la place des femmes.",
          },
          {
            type: "aRetenir",
            points: [
              "**Mariama Bâ** publie « Une si longue lettre » en 1979",
              "Le roman reçoit le **prix Noma**",
              "Il traite de polygamie, de veuvage, du statut des femmes",
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
          "Parce qu'une langue transporte selon lui la vision du monde du colonisateur",
          "Pour vendre davantage de livres",
          "Sur ordre du gouvernement kényan",
        ],
        correctIndex: 1,
        explanation:
          "Il défend cette thèse dans « Decolonising the Mind » (1986) et passe au gikuyu, sa langue maternelle.",
      },
      {
        id: "quiz-decouverte-06-2",
        question: "Quelle est la particularité du roman Things Fall Apart, de Chinua Achebe ?",
        options: [
          "Il raconte l'arrivée des Européens du point de vue africain",
          "Il est écrit en gikuyu",
          "Il se déroule au XXIe siècle",
          "Il n'a jamais été traduit",
        ],
        correctIndex: 0,
        explanation:
          "Achebe renverse le point de vue des récits coloniaux. Le roman paraît en 1958.",
      },
      {
        id: "quiz-decouverte-06-3",
        question: "Qui fut le premier écrivain africain à recevoir le prix Nobel de littérature ?",
        options: [
          "Chinua Achebe",
          "Wole Soyinka",
          "Abdulrazak Gurnah",
          "Mariama Bâ",
        ],
        correctIndex: 1,
        explanation:
          "Le Nigérian Wole Soyinka reçoit le prix Nobel de littérature en 1986 ; Abdulrazak Gurnah le reçoit en 2021.",
      },
      {
        id: "quiz-decouverte-06-4",
        question: "Qui a publié en 1960 une version écrite de l'épopée de Soundiata ?",
        options: [
          "Djibril Tamsir Niane",
          "Chinua Achebe",
          "Mariama Bâ",
          "Wole Soyinka",
        ],
        correctIndex: 0,
        explanation:
          "L'historien guinéen D. T. Niane fixe par écrit, en français, un récit jusque-là transmis oralement par les griots.",
      },
      {
        id: "quiz-decouverte-06-5",
        question: "Quel prix a reçu « Une si longue lettre », de Mariama Bâ ?",
        options: [
          "Le prix Noma",
          "Le prix Nobel",
          "Le prix Goncourt",
          "Le prix Pritzker",
        ],
        correctIndex: 0,
        explanation:
          "Publié à Dakar en 1979 aux Nouvelles Éditions Africaines, le roman reçoit le prix Noma.",
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
    xp: 70,
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
          {
        id: "course-decouverte-07-danses-lesson-4",
        title: "Germaine Acogny et la danse contemporaine",
        blocks: [
          {
            type: "paragraphe",
            text: "**Germaine Acogny** est une chorégraphe franco-sénégalaise. Elle a créé une technique qui mêle mouvements traditionnels africains et danse moderne, enseignée aujourd'hui bien au-delà du Sénégal.",
          },
          {
            type: "chiffreCle",
            valeur: "1996",
            legende: "première pierre de l'École des Sables",
          },
          {
            type: "paragraphe",
            text: "Avec Helmut Vogt, elle fonde l'association Jant-Bi en 1994. Deux ans plus tard, ils posent la première pierre de l'**École des Sables**, à **Toubab Dialaw**, au Sénégal. Des danseurs du monde entier viennent s'y former.",
          },
          {
            type: "aRetenir",
            points: [
              "**Germaine Acogny**, pionnière de la danse africaine contemporaine",
              "Elle fonde l'**École des Sables** à Toubab Dialaw",
              "Une technique mêlant traditions africaines et danse moderne",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-07-danses-lesson-5",
        title: "Le dama, la danse des masques dogon",
        blocks: [
          {
            type: "paragraphe",
            text: "Chez les **Dogon** du Mali, le dama est une cérémonie qui marque la fin du deuil. Les masques sortent alors et dansent dans le village.",
          },
          {
            type: "chiffreCle",
            valeur: "dama",
            legende: "chez les Dogon, la levée du deuil",
          },
          {
            type: "paragraphe",
            text: "Le dama concerne toutes les personnes mortes les années précédentes. La cérémonie peut durer trois jours. Elle est conduite par l'**awa**, une société initiatique masculine. À Sangha, des danseurs évoluent sur de hautes **échasses**.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **dama** marque la levée du deuil chez les Dogon",
              "La cérémonie peut durer trois jours",
              "Elle est conduite par l'**awa**, société initiatique",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "quiz-decouverte-07-1",
        question: "Qu'est-ce que le sabar ?",
        options: [
          "Un masque dogon",
          "Un tambour et une danse du Sénégal",
          "Un tissu ghanéen",
          "Un festival de cinéma",
        ],
        correctIndex: 1,
        explanation:
          "Le sabar désigne à la fois le tambour et la danse sénégalais : le tambour lance un rythme, le danseur y répond.",
      },
      {
        id: "quiz-decouverte-07-2",
        question: "Qu'est-ce que la traite a transmis malgré la déportation ?",
        options: [
          "Des instruments de musique",
          "Des gestes et des structures rythmiques",
          "Des manuscrits",
          "Des vêtements",
        ],
        correctIndex: 1,
        explanation:
          "Le corps a transmis ce qu'on ne pouvait pas confisquer : on en retrouve la trace dans la capoeira, la rumba et le jazz.",
      },
      {
        id: "quiz-decouverte-07-3",
        question: "Quel genre sud-africain s'est diffusé mondialement par la danse ?",
        options: [
          "Le highlife",
          "L'amapiano",
          "Le mbalax",
          "Le soukous",
        ],
        correctIndex: 1,
        explanation:
          "L'amapiano, né dans les townships sud-africains, s'est diffusé mondialement, largement porté par ses danses en vidéo.",
      },
      {
        id: "quiz-decouverte-07-4",
        question: "Qu'est-ce que l'École des Sables, au Sénégal ?",
        options: [
          "Un centre de danse fondé par Germaine Acogny",
          "Un musée d'art contemporain",
          "Une école de cinéma",
          "Un festival de mode",
        ],
        correctIndex: 0,
        explanation:
          "Fondée par Germaine Acogny et Helmut Vogt à Toubab Dialaw, sa première pierre est posée en 1996.",
      },
      {
        id: "quiz-decouverte-07-5",
        question: "Que marque le dama, chez les Dogon ?",
        options: [
          "La levée du deuil",
          "Le début des semailles",
          "Un mariage",
          "Une naissance",
        ],
        correctIndex: 0,
        explanation:
          "Le dama est une cérémonie collective de levée du deuil, où les masques sortent et dansent ; elle peut durer trois jours.",
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
    xp: 70,
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
          {
        id: "course-decouverte-08-mode-creation-lesson-4",
        title: "Les semaines de la mode africaines",
        blocks: [
          {
            type: "paragraphe",
            text: "La **Lagos Fashion Week** a été fondée en 2011 au Nigeria par Omoyemi Akerele. Elle accueille chaque saison des créateurs venus de tout le continent.",
          },
          {
            type: "chiffreCle",
            valeur: "32 pays",
            legende: "organisent une semaine de la mode en Afrique",
          },
          {
            type: "paragraphe",
            text: "Des semaines de la mode se tiennent aujourd'hui dans une trentaine de pays africains, de Casablanca à Nairobi. Elles servent de **vitrine** aux créateurs, mais aussi de lieu de rencontre avec les acheteurs et la presse internationale.",
          },
          {
            type: "aRetenir",
            points: [
              "La **Lagos Fashion Week** est née en 2011",
              "Une trentaine de pays africains ont la leur",
              "Elles servent de **vitrine** et de place de marché",
            ],
          },
        ],
      },
      {
        id: "course-decouverte-08-mode-creation-lesson-5",
        title: "Ce que pèse la mode africaine",
        blocks: [
          {
            type: "paragraphe",
            text: "En octobre 2023, l'**UNESCO** a publié son premier rapport consacré au secteur de la mode en Afrique. Il en fait un secteur économique à part entière.",
          },
          {
            type: "chiffreCle",
            valeur: "2023",
            legende: "premier rapport de l'UNESCO sur la mode africaine",
          },
          {
            type: "paragraphe",
            text: "Le rapport décrit une industrie qui crée des emplois et de la croissance. Il pointe aussi des obstacles : accès au financement, transformation locale du **coton**, contrefaçon, logistique. L'UNESCO y voit un **champion mondial** possible.",
          },
          {
            type: "aRetenir",
            points: [
              "L'**UNESCO** publie son premier rapport mode en 2023",
              "La mode est un vrai secteur d'**emploi** en Afrique",
              "Financement et transformation locale restent des obstacles",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "quiz-decouverte-08-1",
        question: "Qu'est-ce qui est imprimé dans la bordure d'un kanga est-africain ?",
        options: [
          "Un numéro de série",
          "Un proverbe",
          "Le nom du fabricant",
          "Une date",
        ],
        correctIndex: 1,
        explanation:
          "Le kanga porte un proverbe imprimé : on l'offre pour dire quelque chose qu'on ne dirait pas à voix haute.",
      },
      {
        id: "quiz-decouverte-08-2",
        question: "Qu'a fait le créateur malien Chris Seydou avec le bogolan ?",
        options: [
          "Il l'a interdit",
          "Il l'a coupé et traité comme un tissu de haute couture",
          "Il en a inventé la teinture",
          "Il l'a exporté vers l'Indonésie",
        ],
        correctIndex: 1,
        explanation:
          "Chris Seydou (1949-1994) a montré qu'un tissu traditionnel pouvait devenir un vêtement de mode contemporain.",
      },
      {
        id: "quiz-decouverte-08-3",
        question: "Quel est l'effet ambigu de la friperie importée en Afrique ?",
        options: [
          "Elle habille à bas prix mais concurrence les filières locales",
          "Elle est réservée aux touristes",
          "Elle a fait disparaître le wax",
          "Elle est produite localement",
        ],
        correctIndex: 0,
        explanation:
          "Elle habille des millions de personnes à très bas prix, mais concurrence les textiles locaux et laisse des montagnes d'invendus.",
      },
      {
        id: "quiz-decouverte-08-4",
        question: "Quand la Lagos Fashion Week a-t-elle été fondée ?",
        options: [
          "En 1991",
          "En 2001",
          "En 2011",
          "En 2021",
        ],
        correctIndex: 2,
        explanation:
          "Elle a été fondée en 2011 par Omoyemi Akerele ; une trentaine de pays africains ont aujourd'hui leur semaine de la mode.",
      },
      {
        id: "quiz-decouverte-08-5",
        question: "Qu'a publié l'UNESCO en 2023 au sujet de la mode africaine ?",
        options: [
          "Son premier rapport sur le secteur de la mode en Afrique",
          "Une interdiction de la friperie",
          "Un label textile continental",
          "Un concours de jeunes créateurs",
        ],
        correctIndex: 0,
        explanation:
          "Le rapport décrit un secteur créateur d'emplois, tout en pointant le financement et la transformation locale comme obstacles.",
      },
    ],
  },
];
