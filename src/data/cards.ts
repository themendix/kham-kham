import type { SwipeCard } from "@/types";

/** Cartes du fil Home, réparties sur les 6 catégories (3 par matière). */
export const CARDS: SwipeCard[] = [
  {
    id: "card-empire-mali",
    categoryId: "histoire",
    emoji: "👑",
    title: "L'empire du Mali",
    teaser:
      "Au XIVe siècle, sous Mansa Moussa, le Mali devint l'un des États les plus riches de l'histoire.",
    content:
      "Fondé au XIIIe siècle, l'empire du Mali atteint son apogée sous Mansa Moussa (r. 1312-1337). Son pèlerinage à La Mecque en 1324, où il distribua tant d'or qu'il en fit chuter le cours au Caire, reste l'un des voyages les plus célèbres de l'histoire médiévale. Tombouctou devint alors un grand centre commercial et intellectuel.",
  },
  {
    id: "card-fleuve-nil",
    categoryId: "geo",
    emoji: "🌊",
    title: "Le fleuve Nil",
    teaser: "Le plus long fleuve d'Afrique, environ 6 650 km.",
    content:
      "Le Nil relie l'Afrique de l'Est et du Nord-Est sur près de 6 650 km, traversant onze pays dont l'Ouganda, le Soudan et l'Égypte. Ses deux principaux affluents, le Nil Bleu et le Nil Blanc, se rejoignent à Khartoum avant de se jeter dans la Méditerranée via un vaste delta.",
  },
  {
    id: "card-wangari-maathai",
    categoryId: "perso",
    emoji: "🌳",
    title: "Wangari Maathai",
    teaser:
      "Première femme africaine à recevoir le prix Nobel de la paix (2004).",
    content:
      "Biologiste et militante écologiste kényane, Wangari Maathai a fondé en 1977 le Green Belt Movement, qui a permis de planter des dizaines de millions d'arbres en Afrique. En 2004, elle devient la première femme africaine lauréate du prix Nobel de la paix, récompensant son combat pour l'environnement, la démocratie et les droits des femmes.",
  },
  {
    id: "card-fela-kuti",
    categoryId: "arts",
    emoji: "🎺",
    title: "L'Afrobeat de Fela Kuti",
    teaser: "Genre né au Nigeria dans les années 1970.",
    content:
      "Fela Kuti invente l'Afrobeat au Nigeria dans les années 1970, en fusionnant highlife, jazz, funk et rythmes traditionnels yoruba. Au-delà de la musique, ses textes engagés dénoncent la corruption et les régimes militaires, faisant de lui une figure majeure de la contestation politique africaine.",
  },
  {
    id: "card-griot",
    categoryId: "trad",
    emoji: "🪕",
    title: "Le griot",
    teaser: "Gardien de la mémoire, conteur et musicien en Afrique de l'Ouest.",
    content:
      "Le griot (ou djeli en mandingue) occupe une place centrale dans les sociétés d'Afrique de l'Ouest : historien oral, généalogiste, musicien et conseiller, il transmet de génération en génération l'histoire des familles et des royaumes à travers le chant et le récit.",
  },
  {
    id: "card-silicon-savannah",
    categoryId: "actu",
    emoji: "📱",
    title: 'La « Silicon Savannah »',
    teaser: "Nairobi, l'un des pôles technologiques du continent.",
    content:
      "Surnommée la « Silicon Savannah », Nairobi s'est imposée comme un pôle technologique majeur en Afrique, porté notamment par le succès de M-Pesa, le service de paiement mobile lancé en 2007 qui a révolutionné l'inclusion financière sur le continent.",
  },
  {
    id: "card-reine-nzinga",
    categoryId: "histoire",
    emoji: "🛡️",
    title: "La reine Nzinga",
    teaser: "Reine d'Angola qui résista près de 40 ans aux colons portugais.",
    content:
      "Reine du Ndongo puis du Matamba (actuel Angola), Nzinga Mbande mène pendant près de quatre décennies, au XVIIe siècle, une résistance diplomatique et militaire face à la colonisation portugaise. Habile stratège, elle négocie des alliances et prend elle-même la tête de ses armées, restant aujourd'hui une figure majeure de la résistance africaine à la colonisation.",
  },
  {
    id: "card-pyramides-nubie",
    categoryId: "histoire",
    emoji: "🔺",
    title: "Les pyramides de Nubie",
    teaser: "Le royaume de Koush compte plus de pyramides que l'Égypte.",
    content:
      "Situé le long du Nil, au sud de l'Égypte, l'ancien royaume de Koush (actuel Soudan) a fait construire plus de 200 pyramides, plus nombreuses mais plus petites et plus pentues que les pyramides égyptiennes. Vers 700 av. J.-C., les pharaons koushites règnent même sur l'Égypte, formant la XXVe dynastie.",
  },
  {
    id: "card-sahara",
    categoryId: "geo",
    emoji: "🏜️",
    title: "Le Sahara",
    teaser: "Le plus grand désert chaud du monde, environ 9 millions de km².",
    content:
      "Le Sahara s'étend sur environ 9 millions de km², soit presque la superficie des États-Unis, à travers une dizaine de pays d'Afrique du Nord. Loin d'être uniquement une mer de sable, il abrite aussi des massifs montagneux, comme le Hoggar en Algérie, et des oasis qui permettent la vie humaine depuis des millénaires.",
  },
  {
    id: "card-chutes-victoria",
    categoryId: "geo",
    emoji: "💦",
    title: "Les chutes Victoria",
    teaser: "Sur le Zambèze, l'une des plus grandes chutes d'eau du monde.",
    content:
      "Situées à la frontière entre la Zambie et le Zimbabwe, les chutes Victoria sont nommées « Mosi-oa-Tunya », soit « la fumée qui gronde », en raison du nuage d'embruns visible à des kilomètres. Avec près de 1,7 km de large et une chute de 108 mètres, elles comptent parmi les plus grandes chutes d'eau du monde.",
  },
  {
    id: "card-nelson-mandela",
    categoryId: "perso",
    emoji: "✊",
    title: "Nelson Mandela",
    teaser: "Symbole mondial de la lutte contre l'apartheid, prix Nobel de la paix en 1993.",
    content:
      "Emprisonné pendant 27 ans pour son combat contre l'apartheid, Nelson Mandela devient en 1994 le premier président noir d'Afrique du Sud élu au suffrage universel. Prix Nobel de la paix en 1993 avec Frederik de Klerk, il œuvre à la réconciliation nationale après des décennies de ségrégation raciale.",
  },
  {
    id: "card-miriam-makeba",
    categoryId: "perso",
    emoji: "🎤",
    title: "Miriam Makeba",
    teaser: '« Mama Africa », voix sud-africaine qui a porté le combat anti-apartheid dans le monde.',
    content:
      "Chanteuse sud-africaine surnommée « Mama Africa », Miriam Makeba popularise la musique africaine à l'international dès les années 1960, notamment avec le titre « Pata Pata ». Exilée pour son opposition à l'apartheid, elle devient une voix incontournable de la lutte pour les droits civiques sur la scène mondiale.",
  },
  {
    id: "card-sculptures-nok",
    categoryId: "arts",
    emoji: "🗿",
    title: "Les terres cuites Nok",
    teaser: "Une des plus anciennes traditions de sculpture d'Afrique subsaharienne.",
    content:
      "La culture Nok, apparue au Nigeria actuel entre environ 1500 av. J.-C. et 500 apr. J.-C., est connue pour ses terres cuites représentant des figures humaines et animales aux traits stylisés. Elle témoigne d'une maîtrise artistique et technique précoce, bien avant l'essor des grands royaumes ouest-africains ultérieurs.",
  },
  {
    id: "card-tissu-kente",
    categoryId: "arts",
    emoji: "🧵",
    title: "Le kente",
    teaser: "Étoffe tissée ghanéenne, aux motifs porteurs de sens.",
    content:
      "Le kente est un tissu traditionnel tissé à la main par les peuples akan et ewe du Ghana, reconnaissable à ses bandes colorées et ses motifs géométriques. Chaque couleur et chaque motif porte une signification précise, liée à des valeurs, des proverbes ou des événements, et le tissu était historiquement réservé à la royauté et aux grandes occasions.",
  },
  {
    id: "card-arbre-a-palabres",
    categoryId: "trad",
    emoji: "🗣️",
    title: "L'arbre à palabres",
    teaser: "Le baobab, lieu traditionnel de rassemblement et de dialogue.",
    content:
      "Dans de nombreuses sociétés africaines, un grand arbre du village, souvent un baobab, sert d'« arbre à palabres » : un lieu public où se règlent les conflits, se prennent les décisions collectives et où les anciens transmettent leurs conseils à la communauté, dans une tradition de dialogue et de démocratie participative.",
  },
  {
    id: "card-masques-dogons",
    categoryId: "trad",
    emoji: "🎭",
    title: "Les masques dogons",
    teaser: "Chez les Dogons du Mali, des danses masquées rythment les grandes cérémonies.",
    content:
      "Le peuple dogon, au Mali, est réputé pour ses masques sculptés en bois portés lors de danses cérémonielles, notamment à l'occasion du Sigui, une cérémonie majeure célébrée tous les 60 ans. Chaque masque, associé à un esprit ou une figure symbolique, s'accompagne de danses et de chants transmis de génération en génération.",
  },
  {
    id: "card-barrage-renaissance",
    categoryId: "actu",
    emoji: "🏗️",
    title: "Le Grand barrage de la Renaissance",
    teaser: "Le plus grand barrage hydroélectrique d'Afrique, sur le Nil Bleu.",
    content:
      "Construit par l'Éthiopie sur le Nil Bleu, le Grand barrage de la Renaissance éthiopienne (GERD) est le plus grand ouvrage hydroélectrique d'Afrique. Ce projet, porteur d'espoirs de développement énergétique pour l'Éthiopie, a aussi suscité des tensions régionales avec l'Égypte et le Soudan sur la gestion des eaux du Nil.",
  },
  {
    id: "card-satellite-kenyan",
    categoryId: "actu",
    emoji: "🛰️",
    title: "Le premier satellite kényan",
    teaser: "En 2018, des étudiants kényans envoient leur premier satellite dans l'espace.",
    content:
      "En 2018, l'Université de Nairobi lance 1KUNS-PF, le premier satellite conçu par des étudiants kényans, symbole de l'essor du secteur spatial africain. Plusieurs pays du continent, dont l'Égypte, le Nigeria, l'Afrique du Sud et le Rwanda, développent aujourd'hui leurs propres programmes spatiaux.",
  },
];
