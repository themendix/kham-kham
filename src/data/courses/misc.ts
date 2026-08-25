import type { Course } from "@/types";

/**
 * Contenu de la matière « Découverte » (`decouverte`), issue de la fusion des trois anciennes
 * matières Arts & Musique / Traditions & Sociétés / Afrique contemporaine. Les identifiants de
 * cours et de leçon d'origine (`course-arts-…`, `course-trad-…`, `course-actu-…`) sont
 * volontairement conservés : ce sont des clés de `localStorage`, les renommer effacerait la
 * progression des utilisateurs existants pour un gain purement cosmétique.
 *
 * Suffisamment léger pour rester bundlé avec le shell applicatif : pas de découpage par matière
 * ici, contrairement à Histoire/Géographie/Personnalités (`src/data/courses/histoire.ts`,
 * `geographie.ts`, `personnalites.ts`), qui sont chargées à la demande via
 * `src/data/courseContent.ts`. À rebasculer sur un chunk dédié si Découverte grossit du même
 * ordre.
 */
export const MISC_COURSES: Course[] = [
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
          { type: "paragraphe", text: "L'Afrobeat est créé dans les années 1970 par le musicien nigérian Fela Kuti, qui fusionne jazz, funk, highlife et rythmes traditionnels yoruba. Ce genre se distingue par ses morceaux longs et ses cuivres puissants, portés par un fort engagement politique et social." },
        ],
      },
      {
        id: "lesson-arts-mbalax-soukous",
        title: "Mbalax et Soukous : deux courants d'Afrique de l'Ouest et Centrale",
        blocks: [
          { type: "paragraphe", text: "Le Mbalax, né au Sénégal, mêle les percussions sabar traditionnelles à la pop et au jazz ; il a été popularisé dans le monde entier par Youssou N'Dour. Le Soukous, originaire du bassin du Congo, est hérité de la rumba congolaise et se reconnaît à ses guitares entrelacées si caractéristiques." },
        ],
      },
      {
        id: "lesson-arts-amapiano",
        title: "Amapiano : le son sud-africain qui conquiert le monde",
        blocks: [
          { type: "paragraphe", text: "Apparu au milieu des années 2010 dans les townships autour de Pretoria, en Afrique du Sud, l'Amapiano mélange house profonde, jazz et mélodies au piano. Sa basse caractéristique, le « log drum », en fait aujourd'hui l'un des sons africains les plus exportés au monde." },
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
          { type: "paragraphe", text: "En Afrique de l'Ouest, les griots (ou djeli en mandingue) sont des conteurs, généalogistes et musiciens traditionnellement attachés à une famille noble, chargés de transmettre oralement, de génération en génération, l'histoire et la généalogie de leur communauté. Leur instrument emblématique, la kora, une harpe-luth à 21 cordes, accompagne encore aujourd'hui récits et chants de louange." },
        ],
      },
      {
        id: "lesson-trad-rites-passage",
        title: "Rites de passage et sociétés initiatiques",
        blocks: [
          { type: "paragraphe", text: "De nombreuses sociétés africaines organisent le passage à l'âge adulte par des rites d'initiation collectifs. Chez les Maasaï d'Afrique de l'Est, les jeunes hommes deviennent « moran » (guerriers) à l'issue d'un rite marquant leur entrée dans un nouveau groupe d'âge. En Afrique de l'Ouest, les sociétés initiatiques Poro (hommes) et Sandé (femmes) transmettent aux jeunes les savoirs et responsabilités sociales de l'âge adulte." },
        ],
      },
      {
        id: "lesson-trad-ubuntu",
        title: "Ubuntu, une philosophie de l'interdépendance",
        blocks: [
          { type: "paragraphe", text: "Originaire d'Afrique australe, la philosophie Ubuntu se résume par la formule « je suis parce que nous sommes » : l'humanité d'une personne se réalise à travers ses liens avec les autres. Popularisée dans le monde entier par Desmond Tutu et Nelson Mandela, notamment lors du processus de réconciliation post-apartheid, elle continue d'irriguer les valeurs communautaires de nombreuses sociétés africaines." },
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
          { type: "paragraphe", text: "Lancé en 2007 au Kenya par l'opérateur Safaricom, M-Pesa permet d'envoyer, recevoir et stocker de l'argent depuis un simple téléphone mobile, sans compte bancaire. Ce service a rapidement transformé l'inclusion financière sur le continent et inspiré de nombreux services similaires ailleurs en Afrique." },
        ],
      },
      {
        id: "lesson-actu-union-africaine",
        title: "L'Union africaine et l'intégration continentale",
        blocks: [
          { type: "paragraphe", text: "Fondée en 2002 à Addis-Abeba, en Éthiopie, l'Union africaine succède à l'Organisation de l'unité africaine (OUA, créée en 1963). En 2021 entre en vigueur la Zone de libre-échange continentale africaine (ZLECAf), qui vise à créer un marché unique pour les biens et services entre les pays du continent." },
        ],
      },
      {
        id: "lesson-actu-nollywood",
        title: "Nollywood, la puissance du cinéma nigérian",
        blocks: [
          { type: "paragraphe", text: "Née dans les années 1990 de productions tournées rapidement et à petit budget, l'industrie cinématographique nigériane, surnommée Nollywood, est aujourd'hui l'une des plus prolifiques au monde par le nombre de films produits chaque année, rayonnant bien au-delà du Nigeria sur tout le continent et sa diaspora." },
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
];
