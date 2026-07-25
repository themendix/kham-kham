import type { Course } from "@/types";
import { HISTOIRE_COURSES } from "@/data/courses/histoire";
import { GEOGRAPHIE_COURSES } from "@/data/courses/geographie";

/**
 * Cours de démonstration pour la Biblio.
 * Le catalogue complet sera enrichi dans une phase suivante.
 */
export const COURSES: Course[] = [
  ...HISTOIRE_COURSES,
  ...GEOGRAPHIE_COURSES,
  {
    id: "course-perso-voix-plumes-afrique",
    categoryId: "perso",
    emoji: "✍️",
    title: "Voix et plumes d'Afrique",
    description:
      "Des pionniers du Nobel aux voix contemporaines : cinq écrivains qui ont porté la littérature africaine sur la scène mondiale.",
    xp: 70,
    lessons: [
      {
        id: "lesson-perso-pionniers-nobel",
        title: "Les pionniers du Nobel",
        content:
          "Wole Soyinka, dramaturge et écrivain nigérian, devient en 1986 le premier Africain à recevoir le prix Nobel de littérature, notamment pour son théâtre engagé. Deux ans plus tard, en 1988, l'Égyptien Naguib Mahfouz, auteur de la Trilogie du Caire, devient le premier écrivain de langue arabe distingué par ce prix.",
      },
      {
        id: "lesson-perso-peres-fondateurs",
        title: "Pères fondateurs de la littérature africaine moderne",
        content:
          "Le Nigérian Chinua Achebe publie en 1958 « Le monde s'effondre », roman fondateur de la littérature africaine moderne en langue anglaise. Au Sénégal, Léopold Sédar Senghor, poète et premier président du pays, cofonde le mouvement de la Négritude et devient en 1983 le premier Africain élu à l'Académie française.",
      },
      {
        id: "lesson-perso-nouvelle-generation",
        title: "Une nouvelle génération de voix",
        content:
          "Chimamanda Ngozi Adichie, romancière nigériane, s'impose avec des œuvres comme « Americanah » et « L'autre moitié du soleil ». Sa conférence TED « Le danger de l'histoire unique » a marqué durablement les discussions sur la représentation de l'Afrique dans le monde.",
      },
    ],
    quiz: [
      {
        id: "quiz-perso-1",
        question: "Qui fut le premier Africain à recevoir le prix Nobel de littérature, en 1986 ?",
        options: ["Chinua Achebe", "Wole Soyinka", "Naguib Mahfouz", "Léopold Sédar Senghor"],
        correctIndex: 1,
        explanation: "Wole Soyinka, dramaturge nigérian, a reçu le Nobel de littérature en 1986.",
      },
      {
        id: "quiz-perso-2",
        question: "Quel mouvement littéraire et culturel Léopold Sédar Senghor a-t-il cofondé ?",
        options: ["Le panafricanisme", "La Négritude", "La Renaissance africaine", "L'Ubuntu"],
        correctIndex: 1,
        explanation:
          "La Négritude, cofondée avec Aimé Césaire et Léon-Gontran Damas, valorise l'identité et la culture noires.",
      },
      {
        id: "quiz-perso-3",
        question: "Quel roman fondateur a été écrit par Chinua Achebe ?",
        options: ["Americanah", "Le monde s'effondre", "L'enfant noir", "Une si longue lettre"],
        correctIndex: 1,
        explanation:
          "« Le monde s'effondre » (1958) est considéré comme le roman fondateur de la littérature africaine moderne en anglais.",
      },
      {
        id: "quiz-perso-4",
        question: "De quel pays est originaire Naguib Mahfouz, Nobel de littérature 1988 ?",
        options: ["Le Maroc", "L'Égypte", "L'Algérie", "La Tunisie"],
        correctIndex: 1,
        explanation:
          "Naguib Mahfouz, auteur égyptien de la Trilogie du Caire, fut le premier écrivain de langue arabe à recevoir le Nobel de littérature.",
      },
    ],
  },
  {
    id: "course-arts-rythmes-continent",
    categoryId: "arts",
    emoji: "🎶",
    title: "Rythmes du continent",
    description:
      "De l'Afrobeat à l'Amapiano : un voyage à travers les grands courants musicaux qui ont façonné le son de l'Afrique.",
    xp: 70,
    lessons: [
      {
        id: "lesson-arts-afrobeat",
        title: "Afrobeat : la voix rebelle du Nigeria",
        content:
          "L'Afrobeat est créé dans les années 1970 par le musicien nigérian Fela Kuti, qui fusionne jazz, funk, highlife et rythmes traditionnels yoruba. Ce genre se distingue par ses morceaux longs et ses cuivres puissants, portés par un fort engagement politique et social.",
      },
      {
        id: "lesson-arts-mbalax-soukous",
        title: "Mbalax et Soukous : deux courants d'Afrique de l'Ouest et Centrale",
        content:
          "Le Mbalax, né au Sénégal, mêle les percussions sabar traditionnelles à la pop et au jazz ; il a été popularisé dans le monde entier par Youssou N'Dour. Le Soukous, originaire du bassin du Congo, est hérité de la rumba congolaise et se reconnaît à ses guitares entrelacées si caractéristiques.",
      },
      {
        id: "lesson-arts-amapiano",
        title: "Amapiano : le son sud-africain qui conquiert le monde",
        content:
          "Apparu au milieu des années 2010 dans les townships autour de Pretoria, en Afrique du Sud, l'Amapiano mélange house profonde, jazz et mélodies au piano. Sa basse caractéristique, le « log drum », en fait aujourd'hui l'un des sons africains les plus exportés au monde.",
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
    categoryId: "trad",
    emoji: "🪘",
    title: "Griots et sagesses ancestrales",
    description:
      "Griots, rites de passage, philosophie Ubuntu : voyage au cœur des traditions qui structurent encore les sociétés africaines aujourd'hui.",
    xp: 70,
    lessons: [
      {
        id: "lesson-trad-griots",
        title: "Les griots, gardiens de la mémoire",
        content:
          "En Afrique de l'Ouest, les griots (ou djeli en mandingue) sont des conteurs, généalogistes et musiciens traditionnellement attachés à une famille noble, chargés de transmettre oralement, de génération en génération, l'histoire et la généalogie de leur communauté. Leur instrument emblématique, la kora, une harpe-luth à 21 cordes, accompagne encore aujourd'hui récits et chants de louange.",
      },
      {
        id: "lesson-trad-rites-passage",
        title: "Rites de passage et sociétés initiatiques",
        content:
          "De nombreuses sociétés africaines organisent le passage à l'âge adulte par des rites d'initiation collectifs. Chez les Maasaï d'Afrique de l'Est, les jeunes hommes deviennent « moran » (guerriers) à l'issue d'un rite marquant leur entrée dans un nouveau groupe d'âge. En Afrique de l'Ouest, les sociétés initiatiques Poro (hommes) et Sandé (femmes) transmettent aux jeunes les savoirs et responsabilités sociales de l'âge adulte.",
      },
      {
        id: "lesson-trad-ubuntu",
        title: "Ubuntu, une philosophie de l'interdépendance",
        content:
          "Originaire d'Afrique australe, la philosophie Ubuntu se résume par la formule « je suis parce que nous sommes » : l'humanité d'une personne se réalise à travers ses liens avec les autres. Popularisée dans le monde entier par Desmond Tutu et Nelson Mandela, notamment lors du processus de réconciliation post-apartheid, elle continue d'irriguer les valeurs communautaires de nombreuses sociétés africaines.",
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
    categoryId: "actu",
    emoji: "🌍",
    title: "L'Afrique qui innove",
    description:
      "Mobile money, intégration continentale, cinéma : trois visages d'une Afrique contemporaine en pleine transformation.",
    xp: 70,
    lessons: [
      {
        id: "lesson-actu-mobile-money",
        title: "La révolution du mobile money",
        content:
          "Lancé en 2007 au Kenya par l'opérateur Safaricom, M-Pesa permet d'envoyer, recevoir et stocker de l'argent depuis un simple téléphone mobile, sans compte bancaire. Ce service a rapidement transformé l'inclusion financière sur le continent et inspiré de nombreux services similaires ailleurs en Afrique.",
      },
      {
        id: "lesson-actu-union-africaine",
        title: "L'Union africaine et l'intégration continentale",
        content:
          "Fondée en 2002 à Addis-Abeba, en Éthiopie, l'Union africaine succède à l'Organisation de l'unité africaine (OUA, créée en 1963). En 2021 entre en vigueur la Zone de libre-échange continentale africaine (ZLECAf), qui vise à créer un marché unique pour les biens et services entre les pays du continent.",
      },
      {
        id: "lesson-actu-nollywood",
        title: "Nollywood, la puissance du cinéma nigérian",
        content:
          "Née dans les années 1990 de productions tournées rapidement et à petit budget, l'industrie cinématographique nigériane, surnommée Nollywood, est aujourd'hui l'une des plus prolifiques au monde par le nombre de films produits chaque année, rayonnant bien au-delà du Nigeria sur tout le continent et sa diaspora.",
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

export function getCourse(id: string): Course | undefined {
  return COURSES.find((c) => c.id === id);
}
