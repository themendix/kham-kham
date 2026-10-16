import type { Course } from "@/types";

// 40 cours (01 → 40), triés par numéro de fichier croissant
export const HISTOIRE_COURSES: Course[] = [
  {
    id: "course-histoire-01-egypte-antique",
    categoryId: "histoire",
    emoji: "🏺",
    title: "Égypte antique",
    description: "Au bord du Nil, l'une des plus anciennes civilisations du monde est née en Afrique. Pharaons, pyramides, hiéroglyphes : découvre l'Égypte antique et ses liens profonds avec le reste du continent.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-01-egypte-antique-lesson-1",
        title: "Une civilisation née sur le Nil",
        blocks: [
          {
            type: "paragraphe",
            text: "La crue annuelle du Nil déposait un limon fertile. Les Égyptiens nommaient leur pays **Kemet**, « la terre noire ».",
          },
          {
            type: "chiffreCle",
            valeur: "3100 av. J.-C.",
            legende: "l'unification de l'Égypte",
          },
          {
            type: "paragraphe",
            text: "L'unification de la Haute-Égypte au sud et de la Basse-Égypte au nord est attribuée à **Narmer**. Sur sa palette, observe les couronnes : blanche à gauche, rouge à droite, chacune associée à une région.",
          },
          {
            type: "image",
            alt: "Narmer coiffé différemment sur chaque face sculptée.",
            legende: "Palette de Narmer, deux faces, vers 3100 av. J.-C.",
            credit: "Wikimedia Commons, domaine public",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Narmer_Palette.jpg",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "Le limon du Nil rend l'agriculture possible",
              "**Narmer** : unification vers 3100 av. J.-C.",
              "Une civilisation **africaine**",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Le désert autour de Kemet s'appelait **Deshret**, « la terre rouge ».",
          },
        ],
      },
      {
        id: "course-histoire-01-egypte-antique-lesson-2",
        title: "Un dieu vivant à la tête de l'État",
        blocks: [
          {
            type: "paragraphe",
            text: "Le pharaon garantit la **Maât**, l'ordre juste du monde. Son pouvoir est aussi religieux.",
          },
          {
            type: "frise",
            unite: "av. J.-C.",
            evenements: [
              { date: "2700", texte: "Ancien Empire : l'âge des pyramides" },
              { date: "2050", texte: "Moyen Empire : la reconstruction" },
              { date: "1550", texte: "Nouvel Empire : Hatchepsout, Ramsès II" },
            ],
          },
          {
            type: "paragraphe",
            text: "Les **scribes** comptent, taxent et enregistrent. Avec les vizirs et gouverneurs, ils rendent possibles les grands chantiers.",
          },
          {
            type: "image",
            alt: "Ramsès III présente Maât au dieu Osiris.",
            legende: "Ramsès III offrant Maât à Osiris, tombe KV11.",
            credit: "Wikimedia Commons, domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Rameses_III_offering_Maat_to_Osiris_(KV11).jpg",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "Le pharaon garantit la **Maât**",
              "Trois grands Empires sur 3 000 ans",
              "Les **scribes** administrent l'État",
            ],
          },
          { type: "leSavaisTu", text: "Un texte scolaire vante le scribe : il ne se salit jamais les mains." },
        ],
      },
      {
        id: "course-histoire-01-egypte-antique-lesson-3",
        title: "Le secret des hiéroglyphes",
        blocks: [
          {
            type: "paragraphe",
            text: "Les hiéroglyphes sont restés illisibles pendant plus de quatorze siècles. Une pierre fournit la clé.",
          },
          { type: "chiffreCle", valeur: "1822", legende: "Champollion déchiffre les hiéroglyphes" },
          {
            type: "paragraphe",
            text: "En **1822**, **Champollion** utilise la pierre de Rosette : un même texte en hiéroglyphes, démotique et grec.",
          },
          {
            type: "image",
            alt: "Pierre gravée en trois zones d'écritures différentes.",
            legende: "La pierre de Rosette et ses trois écritures.",
            credit: "Hans Hillewaert, CC BY-SA 4.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Rosetta_Stone.JPG",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "**Champollion** déchiffre les hiéroglyphes en 1822",
              "Les scribes maîtrisaient l'écriture",
              "Médecine, mathématiques et astronomie étaient développées",
            ],
          },
          { type: "leSavaisTu", text: "Le calendrier de **365 jours** suivait la crue et le lever de Sirius." },
        ],
      },
      {
        id: "course-histoire-01-egypte-antique-lesson-4",
        title: "Peser le cœur du défunt",
        blocks: [
          {
            type: "paragraphe",
            text: "Pour les Égyptiens, mourir ouvre un passage vers l'éternité. Le défunt doit réussir un jugement.",
          },
          {
            type: "citation",
            texte: "Je n'ai privé personne de nourriture, je n'ai fait pleurer personne, je n'ai pas menti.",
            auteur: "Livre des Morts, formule 125",
          },
          {
            type: "paragraphe",
            text: "**Osiris** règne sur les morts ; **Anubis** veille à la pesée du cœur. La momification préserve le corps.",
          },
          {
            type: "image",
            alt: "Anubis surveille une balance pesant le cœur d'Ani.",
            legende: "La pesée du cœur d'Ani, fac-similé publié en 1902.",
            credit: "TIMEA / Rice University, CC BY-SA 2.5, WebP",
            sourceUrl:
              "https://commons.wikimedia.org/wiki/File:The_Heart_of_Ani_Being_Weighed_in_the_Balance._(1902)_-_TIMEA.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: ["**Osiris**, maître des morts", "La momification préserve le corps", "Le cœur est jugé après la mort"],
          },
          { type: "leSavaisTu", text: "Face à la plume de **Maât**, un cœur trop lourd est dévoré." },
        ],
      },
      {
        id: "course-histoire-01-egypte-antique-lesson-5",
        title: "L'Égypte, en dialogue avec l'Afrique",
        blocks: [
          {
            type: "paragraphe",
            text: "Au sud, la **Nubie** partage le Nil avec l'Égypte : partenaire, rivale, puis puissance conquérante.",
          },
          {
            type: "frise",
            unite: "av. J.-C.",
            evenements: [
              { date: "3100", texte: "Unification de l'Égypte" },
              { date: "2600", texte: "Échanges d'or et d'ivoire avec la Nubie" },
              { date: "730", texte: "Des rois nubiens conquièrent l'Égypte" },
            ],
          },
          {
            type: "paragraphe",
            text: "Au VIIIᵉ siècle av. J.-C., ses rois fondent la **XXVᵉ dynastie**. Le royaume de Koush gouverne l'Égypte depuis Napata.",
          },
          {
            type: "image",
            alt: "Sphinx à visage royal du souverain nubien Taharqa.",
            legende: "Sphinx de Taharqa, roi nubien devenu pharaon, VIIᵉ siècle av. J.-C.",
            credit: "Prioryman, CC BY-SA 4.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Sphinx_of_Taharqo.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "Échanges d'or et d'ivoire avec la Nubie",
              "Des rois nubiens gouvernent l'Égypte",
              "Une civilisation pleinement **africaine**",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-01-egypte-antique-quiz-1",
        question: "Quel fleuve est au cœur de la civilisation égyptienne antique ?",
        options: ["Le Congo", "Le Niger", "Le Nil", "Le Zambèze"],
        correctIndex: 2,
        explanation: "Le Nil traversait l'Égypte du sud au nord et, par sa crue annuelle, déposait le limon fertile qui rendait l'agriculture possible. La vie quotidienne suivait ce rythme : semailles après la décrue, récoltes, puis nouvelle crue l'année suivante.",
      },
      {
        id: "course-histoire-01-egypte-antique-quiz-2",
        question: "Vers quelle date la Haute et la Basse-Égypte ont-elles été unifiées ?",
        options: ["Vers 3100 av. J.-C.", "Vers 500 av. J.-C.", "Vers l'an 1000 de notre ère", "Vers 1500 av. J.-C."],
        correctIndex: 0,
        explanation: "L'unification des deux royaumes, vers 3100 av. J.-C., est traditionnellement attribuée au roi Narmer (souvent identifié à Ménès). Elle ouvre près de 3 000 ans d'histoire pharaonique.",
      },
      {
        id: "course-histoire-01-egypte-antique-quiz-3",
        question: "Comment appelle-t-on l'écriture des anciens Égyptiens ?",
        options: ["Le cunéiforme", "Les hiéroglyphes", "L'alphabet latin", "Les idéogrammes chinois"],
        correctIndex: 1,
        explanation: "Les hiéroglyphes étaient gravés dans la pierre ou écrits sur papyrus. Ils furent déchiffrés en 1822 par Champollion grâce à la pierre de Rosette, gravée du même texte en trois écritures.",
      },
      {
        id: "course-histoire-01-egypte-antique-quiz-4",
        question: "Quelle pratique les Égyptiens utilisaient-ils pour préparer le corps à la vie après la mort ?",
        options: ["La crémation", "La momification", "L'enterrement en mer", "L'exposition au soleil"],
        correctIndex: 1,
        explanation: "Croyant en une vie après la mort, les Égyptiens momifiaient les corps. Cette croyance explique aussi les grandes réalisations funéraires : les pyramides de Giza, les tombes de la Vallée des Rois, et les temples de Karnak et Louxor.",
      },
      {
        id: "course-histoire-01-egypte-antique-quiz-5",
        question: "Quel voisin du sud de l'Égypte a même fourni des rois qui régnèrent sur elle (la XXVᵉ dynastie) ?",
        options: ["Carthage", "La Grèce", "La Nubie (royaume de Koush)", "La Perse"],
        correctIndex: 2,
        explanation: "Au VIIIᵉ siècle av. J.-C., des rois nubiens (koushites) conquirent l'Égypte et fondèrent la XXVᵉ dynastie. C'est l'un des liens forts entre l'Égypte et le reste de l'Afrique mis en avant par l'UNESCO.",
      },
    ],
  },
  {
    id: "course-histoire-02-koush-meroe",
    categoryId: "histoire",
    emoji: "🏹",
    title: "Koush et Méroé",
    description: "Au sud de l'Égypte, le long du Nil, un puissant royaume africain a rivalisé avec les pharaons, régné sur l'Égypte, puis brillé par son fer et son écriture : le royaume de Koush.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-02-koush-meroe-lesson-1",
        title: "Le pays de l'arc",
        blocks: [
          {
            type: "paragraphe",
            text: "Les Égyptiens nommaient la Nubie **Ta-Séti**, « pays de l'arc », tant ses archers étaient redoutés.",
          },
          { type: "chiffreCle", valeur: "2500 av. J.-C.", legende: "Kerma, première grande capitale du royaume de Koush" },
          {
            type: "paragraphe",
            text: "Autour de **Kerma**, Koush développe sa civilisation. Or, ivoire et ébène attirent les marchands de son voisin égyptien.",
          },
          {
            type: "image",
            alt: "Figurines de soldats nubiens armés d'arcs.",
            legende: "Archers nubiens : réplique du modèle funéraire de Mesehti.",
            credit: "Marsupium, CC BY 4.0, WebP",
            sourceUrl:
              "https://commons.wikimedia.org/wiki/File:Replica_of_the_Nubian_Archers_from_the_Tomb_of_Mesehti_-_Nubian_Museum_04.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by/4.0",
          },
          {
            type: "aRetenir",
            points: [
              "**Ta-Séti** signifie « pays de l'arc »",
              "Kerma, capitale dès le IIIᵉ millénaire av. J.-C.",
              "Or, ivoire et ébène nourrissent les échanges",
            ],
          },
          { type: "leSavaisTu", text: "L'Égypte recrutait aussi des archers nubiens comme mercenaires." },
        ],
      },
      {
        id: "course-histoire-02-koush-meroe-lesson-2",
        title: "Les pharaons noirs de Napata",
        blocks: [
          {
            type: "paragraphe",
            text: "Depuis **Napata**, les rois de Koush conquièrent l'Égypte et fondent la XXVᵉ dynastie.",
          },
          { type: "chiffreCle", valeur: "747 av. J.-C.", legende: "le roi Piânkhy conquiert l'Égypte" },
          {
            type: "paragraphe",
            text: "**Taharqa** bâtit des temples en Égypte et en Nubie. Les Assyriens finissent par repousser Koush vers le sud.",
          },
          {
            type: "image",
            alt: "Petit Taharqa protégé entre les pattes du bélier d'Amon.",
            legende: "Taharqa sous la protection d'Amon, VIIᵉ siècle av. J.-C.",
            credit: "M0tty, CC BY-SA 3.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Granite_ram_of_Amun_with_King_Taharqa_-_British_Museum.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "**Piânkhy** conquiert l'Égypte : XXVᵉ dynastie",
              "**Taharqa**, souverain bâtisseur",
              "Les Assyriens repoussent Koush vers le sud",
            ],
          },
          { type: "leSavaisTu", text: "Ces souverains nubiens sont aujourd'hui surnommés les « pharaons noirs »." },
        ],
      },
      {
        id: "course-histoire-02-koush-meroe-lesson-3",
        title: "Méroé, la cité du fer",
        blocks: [
          {
            type: "paragraphe",
            text: "**Méroé**, la « Birmingham de l’Afrique », prospère grâce au **fer**.",
          },
          {
            type: "frise",
            evenements: [
              { date: "IIIᵉ s. av. J.-C.", texte: "Méroé devient la nouvelle capitale" },
              { date: "Iᵉʳ siècle", texte: "Apogée : fer, commerce, agriculture" },
              { date: "IVᵉ siècle", texte: "Fin de l'âge d'or de Méroé" },
            ],
          },
          {
            type: "paragraphe",
            text: "Agriculture et commerce complètent sa richesse. À Hamadab, les scories témoignent de cette métallurgie.",
          },
          {
            type: "aRetenir",
            points: [
              "Méroé, surnommée « la Birmingham de l'Afrique », pour son fer",
              "Un carrefour commercial entre Afrique, mer Rouge, Inde et Rome",
              "Apogée entre le **IIIᵉ siècle av. J.-C.** et le IVᵉ siècle",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Les scories sont des résidus de métallurgie.",
          },
        ],
      },
      {
        id: "course-histoire-02-koush-meroe-lesson-4",
        title: "Une écriture, des dieux, des reines",
        blocks: [
          {
            type: "paragraphe",
            text: "À Méroé, les **Candaces** gouvernent en leur nom propre : le pouvoir royal appartient aussi aux femmes.",
          },
          { type: "chiffreCle", valeur: "200+", legende: "pyramides bâties à Méroé, plus qu'en Égypte" },
          {
            type: "paragraphe",
            text: "Koush crée l'écriture **méroïtique** et honore **Apédémak**, dieu-lion guerrier, aux côtés d'Amon.",
          },
          {
            type: "image",
            alt: "La reine Amanishakhéto entourée de deux divinités sur une stèle.",
            legende: "Amanishakhéto avec Amésémi et Apédémak, Ier siècle av. J.-C.",
            credit: "Khruner, CC BY-SA 4.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Relief_Amanishakheto_Munich.JPG",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "Le méroïtique reste partiellement indéchiffré",
              "**Apédémak**, dieu-lion guerrier",
              "Les Candaces règnent en leur nom propre",
            ],
          },
          { type: "leSavaisTu", text: "On connaît les sons du méroïtique, mais sa langue reste mal comprise." },
        ],
      },
      {
        id: "course-histoire-02-koush-meroe-lesson-5",
        title: "Déclin et héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Au **IVᵉ siècle**, Méroé décline tandis qu'**Aksoum** prend une place croissante dans le commerce.",
          },
          {
            type: "frise",
            evenements: [
              { date: "2500 av. J.-C.", texte: "Kerma, naissance du royaume de Koush" },
              { date: "747 av. J.-C.", texte: "Piânkhy conquiert l'Égypte" },
              { date: "IVᵉ siècle", texte: "Déclin de Méroé face à Aksoum" },
            ],
          },
          {
            type: "paragraphe",
            text: "Fer, écriture et monuments témoignent du savoir-faire de Koush. Ses sites sont aujourd'hui classés par l'UNESCO.",
          },
          {
            type: "image",
            alt: "Pyramides nubiennes aux pentes abruptes dans le désert.",
            legende: "Les pyramides de Méroé, patrimoine du royaume de Koush.",
            credit: "Ola.m tbe, CC BY-SA 4.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:A_wonderful_picture_of_the_pyramids_of_Meroe_in_Sudan.png",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          },
          { type: "citation", texte: "Celui qui a bu l'eau du Nil y reviendra toujours.", auteur: "Proverbe nubien" },
          {
            type: "aRetenir",
            points: [
              "Koush maîtrisait fer, écriture et architecture",
              "Méroé décline face à **Aksoum**",
              "Ses sites sont classés par l'UNESCO",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-02-koush-meroe-quiz-1",
        question: "Comment appelait-on la capitale du fer et du commerce du royaume de Koush ?",
        options: ["Kerma", "Napata", "Méroé", "Thèbes"],
        correctIndex: 2,
        explanation: "Après la perte de l'Égypte, la capitale fut déplacée au sud à Méroé, grand centre de production du fer et carrefour commercial reliant l'Afrique centrale, la mer Rouge, l'Inde et Rome.",
      },
      {
        id: "course-histoire-02-koush-meroe-quiz-2",
        question: "Qu'ont fait les rois koushites de Napata au VIIIᵉ siècle av. J.-C. ?",
        options: ["Ils ont conquis l'Égypte (XXVᵉ dynastie)", "Ils ont détruit Carthage", "Ils ont fondé Rome", "Ils se sont convertis au christianisme"],
        correctIndex: 0,
        explanation: "Vers 747 av. J.-C., le roi Piânkhy conquit l'Égypte et fonda la XXVᵉ dynastie, celle des « pharaons noirs ». Son successeur Taharqa bâtit des temples des deux côtés de la frontière.",
      },
      {
        id: "course-histoire-02-koush-meroe-quiz-3",
        question: "Comment appelait-on les reines qui régnaient dans le royaume de Méroé ?",
        options: ["Les pharaonnes", "Les Candaces (Kandakè)", "Les impératrices", "Les sultanes"],
        correctIndex: 1,
        explanation: "Des femmes régnèrent en leur nom propre à Méroé ; on les désignait par le titre de Candace (Kandakè).",
      },
      {
        id: "course-histoire-02-koush-meroe-quiz-4",
        question: "Quel métal a fait la renommée industrielle de Méroé ?",
        options: ["L'or", "Le bronze", "Le fer", "L'argent"],
        correctIndex: 2,
        explanation: "Méroé fut un grand centre de production du fer, ce qui lui a valu le surnom de « Birmingham de l'Afrique » ; ses scories forment encore des collines visibles sur le site.",
      },
      {
        id: "course-histoire-02-koush-meroe-quiz-5",
        question: "Qu'est-ce que le méroïtique ?",
        options: ["Une langue et une écriture propres à Koush", "Un dieu égyptien", "Un type de pyramide", "Une route commerciale"],
        correctIndex: 0,
        explanation: "Les Koushites développèrent leur propre écriture, le méroïtique, distincte des hiéroglyphes égyptiens et encore partiellement indéchiffrée : on en connaît les sons, mais pas toujours le sens.",
      },
    ],
  },
  {
    id: "course-histoire-03-aksoum",
    categoryId: "histoire",
    emoji: "⛪",
    title: "Royaume d'Aksoum",
    description: "Sur les hauts plateaux d'Éthiopie et d'Érythrée, Aksoum fut l'une des grandes puissances du monde antique, carrefour entre l'Afrique, l'Arabie et Rome — et l'un des premiers États chrétiens de l'histoire.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-03-aksoum-lesson-1",
        title: "Un pont entre trois mondes",
        blocks: [
          {
            type: "paragraphe",
            text: "Au IIIᵉ siècle, Mani compte **Aksoum** parmi quatre grandes puissances : Rome, Perse, Chine et ce royaume africain.",
          },
          {
            type: "frise",
            evenements: [
              { date: "Iᵉʳ siècle", texte: "Naissance du royaume d'Aksoum" },
              { date: "IIIᵉ siècle", texte: "Compté parmi les 4 grandes puissances (Mani)" },
              { date: "VIIᵉ siècle", texte: "Fin de l'apogée d'Aksoum" },
            ],
          },
          {
            type: "paragraphe",
            text: "Par **Adoulis**, Aksoum échange ivoire, or et encens avec la Méditerranée, l'Arabie et l'Inde.",
          },
          {
            type: "image",
            alt: "Fondations de pierre du port antique d'Adoulis.",
            legende: "Vestiges d'Adoulis, port d'Aksoum sur la mer Rouge.",
            credit: "David Stanley, CC BY 2.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Adulis_(8529061940).jpg",
            licenseUrl: "https://creativecommons.org/licenses/by/2.0",
          },
          {
            type: "aRetenir",
            points: [
              "Hauts plateaux d'Éthiopie et d'Érythrée",
              "**Adoulis**, port sur la mer Rouge",
              "Un pont commercial entre trois mondes",
            ],
          },
        ],
      },
      {
        id: "course-histoire-03-aksoum-lesson-2",
        title: "Aksoum, royaume qui frappait monnaie",
        blocks: [
          {
            type: "paragraphe",
            text: "**Aksoum** frappe des monnaies en or, argent et bronze : un signe de puissance économique.",
          },
          { type: "chiffreCle", valeur: "350", legende: "Aksoum conquiert son rival, le royaume de Méroé" },
          {
            type: "paragraphe",
            text: "Sous **Ezana**, au IVᵉ siècle, le royaume contrôle le commerce. Nom et portrait royaux voyagent sur chaque pièce.",
          },
          {
            type: "image",
            alt: "Deux faces d'une monnaie portant le portrait du roi Ezana.",
            legende: "Monnaie d'Ezana, IVᵉ siècle : portrait royal et symboles.",
            credit: "CNG Coins, CC BY-SA 3.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:AXUM._Ezanas._Circa_330-360.jpg",
            licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "Monnaies d'or, d'argent et de bronze",
              "**Ezana** mène Aksoum à son apogée",
              "Vers 350, Aksoum conquiert Méroé",
            ],
          },
          { type: "leSavaisTu", text: "La monnaie diffuse le nom du roi au-delà de ses frontières." },
        ],
      },
      {
        id: "course-histoire-03-aksoum-lesson-3",
        title: "L'un des premiers États chrétiens",
        blocks: [
          {
            type: "paragraphe",
            text: "Au **IVᵉ siècle**, le roi **Ezana** adopte le christianisme : Aksoum devient un des premiers États chrétiens.",
          },
          { type: "chiffreCle", valeur: "IVᵉ siècle", legende: "le roi Ezana convertit Aksoum au christianisme" },
          {
            type: "paragraphe",
            text: "Cet héritage perdure dans l'Église orthodoxe éthiopienne. Le **guèze**, langue liturgique, porte une riche tradition de manuscrits.",
          },
          {
            type: "image",
            alt: "Saint Luc peint sur une page d'évangile éthiopien.",
            legende: "Évangile éthiopien du XVe siècle : l'héritage chrétien d'Aksoum.",
            credit: "Cleveland Museum of Art, CC0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Clevelandart_1999.212.jpg",
            licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "**Ezana** adopte le christianisme au IVᵉ siècle",
              "L'Église éthiopienne reste vivante",
              "Le **guèze** porte le patrimoine écrit",
            ],
          },
        ],
      },
      {
        id: "course-histoire-03-aksoum-lesson-4",
        title: "Les stèles géantes d'Aksoum",
        blocks: [
          {
            type: "paragraphe",
            text: "Taillées d'un seul bloc, certaines stèles d'**Aksoum** dépassent **30 mètres** : un défi sans machines modernes.",
          },
          { type: "chiffreCle", valeur: "30 m", legende: "hauteur des plus grandes stèles d'Aksoum" },
          {
            type: "paragraphe",
            text: "Dressées au-dessus des tombes royales, elles imitent des tours. Observe leurs fausses portes et fenêtres.",
          },
          {
            type: "image",
            alt: "Grandes stèles sculptées et blocs renversés dans le site d'Aksoum.",
            legende: "Les stèles royales d'Aksoum, sculptées comme des tours.",
            credit: "Rod Waddington, CC BY-SA 2.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Stelae,_Aksum_(8140296506).jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
          },
          {
            type: "aRetenir",
            points: [
              "Des monuments funéraires royaux en granit",
              "Certaines dépassent **30 mètres**",
              "Le site est classé par l'UNESCO",
            ],
          },
        ],
      },
      {
        id: "course-histoire-03-aksoum-lesson-5",
        title: "Déclin et héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Dès le **VIIᵉ siècle**, les échanges de la mer Rouge se déplacent. Aksoum perd sa puissance commerciale.",
          },
          {
            type: "frise",
            evenements: [
              { date: "Iᵉʳ siècle", texte: "Naissance du royaume d'Aksoum" },
              { date: "IVᵉ siècle", texte: "Apogée : monnaie, christianisme, Ezana" },
              { date: "VIIᵉ-VIIIᵉ siècle", texte: "Déclin, isolement du commerce" },
            ],
          },
          {
            type: "paragraphe",
            text: "L'écriture **guèze**, le christianisme et la tradition impériale perdurent. La légende de Saba nourrit aussi cet héritage.",
          },
          {
            type: "image",
            alt: "Inscription gravée sur la pierre du roi Ezana.",
            legende: "La pierre d'Ezana, IVᵉ siècle : un témoignage écrit d'Aksoum.",
            credit: "Rod Waddington, CC BY-SA 2.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Ezana_Stone,_Aksum_(6183743976).jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
            fit: "contain",
          },
          {
            type: "citation",
            texte: "De la reine de Saba descend la lignée des rois d'Éthiopie.",
            auteur: "Kebra Nagast (Gloire des Rois)",
          },
          {
            type: "aRetenir",
            points: [
              "Déclin commercial dès le **VIIᵉ siècle**",
              "Héritage écrit, chrétien et impérial",
              "La reine de **Saba**, figure légendaire",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-03-aksoum-quiz-1",
        question: "Où se situait le royaume d'Aksoum ?",
        options: ["Sur les hauts plateaux d'Éthiopie et d'Érythrée", "Au bord de l'océan Atlantique", "Dans le désert du Sahara central", "Sur les rives du fleuve Congo"],
        correctIndex: 0,
        explanation: "Aksoum s'est développé sur les hauts plateaux de l'actuelle Éthiopie et de l'Érythrée. Au IIIᵉ siècle, le prophète perse Mani le comptait parmi les quatre plus grandes puissances du monde, avec Rome, la Perse et la Chine.",
      },
      {
        id: "course-histoire-03-aksoum-quiz-2",
        question: "Qu'est-ce qui, à Aksoum, témoignait d'un État particulièrement puissant et développé ?",
        options: ["La construction de pyramides", "La frappe de sa propre monnaie", "L'usage des hiéroglyphes", "La domestication du cheval"],
        correctIndex: 1,
        explanation: "Aksoum était l'un des rares royaumes africains de l'Antiquité à frapper sa propre monnaie (or, argent, bronze), gravée du nom de ses souverains.",
      },
      {
        id: "course-histoire-03-aksoum-quiz-3",
        question: "Quel roi a converti Aksoum au christianisme au IVᵉ siècle ?",
        options: ["Taharqa", "Hannibal", "Ezana", "Mansa Moussa"],
        correctIndex: 2,
        explanation: "Le roi Ezana se convertit au christianisme au IVᵉ siècle, faisant d'Aksoum l'un des premiers États chrétiens du monde, presque en même temps que Rome.",
      },
      {
        id: "course-histoire-03-aksoum-quiz-4",
        question: "Pour quels monuments Aksoum est-il particulièrement célèbre ?",
        options: ["Ses stèles (obélisques) géantes", "Ses arènes romaines", "Ses mosquées de terre", "Ses temples grecs"],
        correctIndex: 0,
        explanation: "Aksoum est connu pour ses immenses stèles de granit, dont certaines dépassaient 30 mètres et imitaient des tours à plusieurs étages, classées au patrimoine mondial de l'UNESCO.",
      },
      {
        id: "course-histoire-03-aksoum-quiz-5",
        question: "Quel port reliait Aksoum au commerce international ?",
        options: ["Alexandrie", "Adoulis", "Carthage", "Zanzibar"],
        correctIndex: 1,
        explanation: "Le port d'Adoulis, sur la mer Rouge, reliait Aksoum à Rome, à l'Égypte, à l'Arabie et jusqu'à l'Inde.",
      },
    ],
  },
  {
    id: "course-histoire-04-carthage-afrique-du-nord",
    categoryId: "histoire",
    emoji: "⚓",
    title: "Carthage antique",
    description: "Fondée par des marchands venus d'Orient, Carthage devint une superpuissance méditerranéenne face à Rome. Autour d'elle, l'Afrique du Nord vit naître de puissants royaumes berbères.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-04-carthage-afrique-du-nord-lesson-1",
        title: "Une fondation venue d'Orient",
        blocks: [
          { type: "paragraphe", text: "La légende raconte l'exil de **Didon**, fondatrice de Carthage, aussi appelée Élissa." },
          { type: "chiffreCle", valeur: "814 av. J.-C.", legende: "fondation de Carthage par des marchands phéniciens" },
          {
            type: "paragraphe",
            text: "Des marchands de **Tyr**, au Liban actuel, s'établissent sur la côte tunisienne. Ce comptoir méditerranéen devient une métropole indépendante.",
          },
          {
            type: "image",
            alt: "Comptoirs phéniciens répartis autour de la Méditerranée.",
            legende: "Tyr et Carthage dans le réseau des comptoirs phéniciens.",
            credit: "Bourrichon, CC BY-SA 3.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Routes_commerciales_des_Ph%C3%A9niciens-fr.svg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "Fondation phénicienne vers **814 av. J.-C.**",
              "Des marchands viennent de **Tyr**",
              "Didon, fondatrice dans la légende",
            ],
          },
        ],
      },
      {
        id: "course-histoire-04-carthage-afrique-du-nord-lesson-2",
        title: "Un empire commercial et maritime",
        blocks: [
          {
            type: "paragraphe",
            text: "Les navires de **Carthage** relient l'Espagne à la Sicile. Les ports soutiennent sa puissance commerciale.",
          },
          { type: "chiffreCle", valeur: "~670 ans", legende: "de sa fondation à sa chute face à Rome" },
          {
            type: "paragraphe",
            text: "Métaux, artisanat et récoltes africaines alimentent les échanges. Cette domination maritime entraîne une rivalité croissante avec **Rome**.",
          },
          {
            type: "image",
            alt: "Bassin circulaire des anciens ports puniques de Carthage.",
            legende: "Les ports puniques de Carthage, photographiés en 2024.",
            credit: "Sharon Hahn Darlin, CC BY 2.0, WebP",
            sourceUrl:
              "https://commons.wikimedia.org/wiki/File:Punic_Ports_(Ports_Puniques)_of_Carthage,_Tunisia_January_2024_-_2.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by/2.0",
          },
          {
            type: "aRetenir",
            points: [
              "Une flotte active en **Méditerranée**",
              "Un arrière-pays africain fertile",
              "**Rome** devient sa grande rivale",
            ],
          },
        ],
      },
      {
        id: "course-histoire-04-carthage-afrique-du-nord-lesson-3",
        title: "Les guerres puniques contre Rome",
        blocks: [
          {
            type: "paragraphe",
            text: "En **218 av. J.-C.**, Hannibal traverse les Alpes avec ses éléphants pour attaquer Rome en Italie.",
          },
          { type: "chiffreCle", valeur: "218 av. J.-C.", legende: "Hannibal franchit les Alpes avec ses éléphants" },
          {
            type: "paragraphe",
            text: "Trois guerres puniques opposent **Carthage** à Rome. Malgré les victoires d'Hannibal, Rome détruit Carthage en 146 av. J.-C.",
          },
          {
            type: "image",
            alt: "Itinéraire d'Hannibal depuis l'Espagne, à travers les Alpes, vers l'Italie.",
            legende: "Le trajet d'Hannibal vers l'Italie en 218 av. J.-C.",
            credit: "Pinpin, CC BY-SA 3.0, adaptation française, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Hannibal_route_of_invasion-en.svg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "Trois guerres : **264–146 av. J.-C.**",
              "**Hannibal** franchit les Alpes en 218",
              "Carthage est détruite en 146",
            ],
          },
          { type: "leSavaisTu", text: "Hannibal perd la majeure partie de ses éléphants pendant la traversée." },
        ],
      },
      {
        id: "course-histoire-04-carthage-afrique-du-nord-lesson-4",
        title: "Les royaumes berbères de Numidie",
        blocks: [
          {
            type: "paragraphe",
            text: "L'Afrique du Nord antique comprend aussi des États amazighs, dont la **Numidie**, voisine de Carthage.",
          },
          { type: "chiffreCle", valeur: "IIe av. J.-C.", legende: "Massinissa unifie le royaume de Numidie" },
          {
            type: "paragraphe",
            text: "**Massinissa** l'unifie et bâtit un royaume prospère. Plus tard, **Jugurtha** résiste à la conquête romaine.",
          },
          {
            type: "image",
            alt: "Profil royal frappé sur une monnaie numide.",
            legende: "Monnaie attribuée à Massinissa, souverain de Numidie.",
            credit: "Michel-georges bernard, CC BY-SA 3.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Massinissa_monnaie.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "La Numidie est un royaume **amazigh**",
              "**Massinissa** l'unifie au IIᵉ siècle av. J.-C.",
              "**Jugurtha** résiste à Rome",
            ],
          },
        ],
      },
      {
        id: "course-histoire-04-carthage-afrique-du-nord-lesson-5",
        title: "L'Afrique romaine et l'héritage",
        blocks: [
          { type: "paragraphe", text: "Après Carthage, l'Afrique du Nord devient une riche région de l'**Empire romain**." },
          {
            type: "frise",
            evenements: [
              { date: "814 av. J.-C.", texte: "Fondation de Carthage" },
              { date: "146 av. J.-C.", texte: "Chute de Carthage face à Rome" },
              { date: "IVᵉ-Vᵉ siècle", texte: "Augustin d'Hippone, penseur de l'Afrique romaine" },
            ],
          },
          {
            type: "paragraphe",
            text: "Blé et huile en font un « grenier de Rome ». **Timgad** illustre ses villes ; l'héritage amazigh perdure.",
          },
          {
            type: "image",
            alt: "Rues et vestiges de la cité romaine de Timgad.",
            legende: "Ruines de Timgad, cité romaine fondée en 100, en Algérie.",
            credit: "Yelles, CC BY-SA 3.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Timgad_Ruins_Panorama.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
          },
          {
            type: "citation",
            texte: "Notre cœur est sans repos tant qu'il ne repose en Toi.",
            auteur: "Augustin d'Hippone, Confessions",
          },
          {
            type: "aRetenir",
            points: [
              "L'Afrique du Nord nourrit **Rome**",
              "**Augustin d'Hippone**, penseur de l'Afrique romaine",
              "Le fond amazigh reste vivant",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-04-carthage-afrique-du-nord-quiz-1",
        question: "Quel peuple a fondé Carthage vers 814 av. J.-C. ?",
        options: ["Les Romains", "Les Grecs", "Les Phéniciens", "Les Égyptiens"],
        correctIndex: 2,
        explanation: "Carthage fut fondée par des marchands phéniciens venus de Tyr, sur la côte de l'actuelle Tunisie. La légende attribue sa fondation à la reine Didon, aussi appelée Élissa.",
      },
      {
        id: "course-histoire-04-carthage-afrique-du-nord-quiz-2",
        question: "Quel général carthaginois a franchi les Alpes avec des éléphants ?",
        options: ["Hannibal", "Massinissa", "Jules César", "Taharqa"],
        correctIndex: 0,
        explanation: "Hannibal franchit les Alpes en 218 av. J.-C. et infligea de lourdes défaites aux Romains sur leur propre sol, durant la deuxième guerre punique.",
      },
      {
        id: "course-histoire-04-carthage-afrique-du-nord-quiz-3",
        question: "Contre quelle puissance Carthage a-t-elle mené les guerres puniques ?",
        options: ["La Perse", "Rome", "L'Égypte", "Aksoum"],
        correctIndex: 1,
        explanation: "Les trois guerres puniques (264-146 av. J.-C.) opposèrent Carthage à Rome pour la Méditerranée occidentale. Rome finit par l'emporter et rasa Carthage en 146 av. J.-C.",
      },
      {
        id: "course-histoire-04-carthage-afrique-du-nord-quiz-4",
        question: "Qui était Massinissa ?",
        options: ["Un pharaon égyptien", "Un roi berbère qui unifia la Numidie", "Un empereur romain", "Un dieu carthaginois"],
        correctIndex: 1,
        explanation: "Massinissa unifia le royaume berbère de Numidie au IIᵉ siècle av. J.-C. Plus tard, le roi Jugurtha résista longuement, lui aussi, à la conquête romaine.",
      },
      {
        id: "course-histoire-04-carthage-afrique-du-nord-quiz-5",
        question: "Quel surnom l'Afrique du Nord romaine a-t-elle reçu ?",
        options: ["Le « toit du monde »", "La « côte de l'or »", "Le « grenier de Rome »", "La « porte de l'Orient »"],
        correctIndex: 2,
        explanation: "Grâce à son blé et son huile, l'Afrique du Nord était surnommée le « grenier de Rome ». C'est de cette Afrique romaine qu'est issu le grand penseur Augustin d'Hippone.",
      },
    ],
  },
  {
    id: "course-histoire-05-empire-du-ghana",
    categoryId: "histoire",
    emoji: "🥇",
    title: "Empire du Ghana",
    description: "Bien avant le pays qui porte aujourd'hui son nom, l'empire du Ghana dominait le Sahel ouest-africain grâce à l'or et au commerce transsaharien. Les Arabes l'appelaient « le pays de l'or ».",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-05-empire-du-ghana-lesson-1",
        title: "Wagadou, pas le Ghana d'aujourd'hui",
        blocks: [
          {
            type: "paragraphe",
            text: "L'empire du Ghana ne correspond pas au pays actuel. Les **Soninké** le nommaient **Wagadou**.",
          },
          { type: "chiffreCle", valeur: "IVe-XIIIe s.", legende: "l'empire du Ghana domine le Sahel ouest-africain" },
          {
            type: "paragraphe",
            text: "Il s'étendait entre Mauritanie et Mali, autour de **Koumbi Saleh**. « Ghana » était d'abord un titre royal : « chef de guerre ».",
          },
          {
            type: "image",
            alt: "Carte situant l'ancien Ghana autour de Koumbi Saleh.",
            legende: "Le Ghana médiéval : territoire indicatif entre Mauritanie et Mali.",
            credit: "Barada-nikto, CC BY-SA 4.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Ghana_empire_map-fr.png",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "**Wagadou**, empire fondé par les Soninké",
              "**Koumbi Saleh**, entre Mauritanie et Mali",
              "Ghana désignait d'abord le souverain",
            ],
          },
          { type: "leSavaisTu", text: "Le Ghana actuel a repris ce nom sans partager le territoire médiéval." },
        ],
      },
      {
        id: "course-histoire-05-empire-du-ghana-lesson-2",
        title: "L'or et le sel",
        blocks: [
          { type: "paragraphe", text: "Sur les routes du **Sahara**, l'or du sud rencontre le sel des mines du nord." },
          { type: "chiffreCle", valeur: "XIe siècle", legende: "al-Bakri décrit la richesse de la cour du Ghana" },
          {
            type: "paragraphe",
            text: "Le roi taxe les marchandises qui entrent et sortent. **Al-Bakri** décrit au XIᵉ siècle la richesse de sa cour.",
          },
          {
            type: "image",
            alt: "Plaques de sel saharien empilées pour le commerce.",
            legende: "Plaques de sel saharien à Mopti, photographie contemporaine.",
            credit: "Taguelmoust at French Wikipedia, CC BY-SA 3.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Mopti_sel.jpg",
            licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
          },
          {
            type: "aRetenir",
            points: [
              "Or du sud, sel du **Sahara**",
              "Les taxes enrichissent le souverain",
              "**Al-Bakri** décrit la cour du Ghana",
            ],
          },
          { type: "leSavaisTu", text: "Au sud, le sel pouvait s'échanger presque à poids égal contre l'or." },
        ],
      },
      {
        id: "course-histoire-05-empire-du-ghana-lesson-3",
        title: "Deux villes pour un royaume",
        blocks: [
          {
            type: "paragraphe",
            text: "**Al-Bakri** décrit deux villes à **Koumbi Saleh** : l'une royale, l'autre marchande et musulmane.",
          },
          {
            type: "citation",
            texte: "Derrière le roi se tiennent dix pages, portant boucliers et épées garnis d'or.",
            auteur: "Al-Bakri, XIe siècle",
          },
          {
            type: "paragraphe",
            text: "Le roi rend la justice au milieu d'une cour fastueuse.",
          },
          {
            type: "aRetenir",
            points: [
              "Une cité royale et une cité marchande",
              "Le roi rend lui-même la **justice**",
              "Une cour décrite par **al-Bakri**",
            ],
          },
        ],
      },
      {
        id: "course-histoire-05-empire-du-ghana-lesson-4",
        title: "Islam et commerce",
        blocks: [
          {
            type: "paragraphe",
            text: "Les marchands traversant le Sahara apportent aussi l'**islam** et des savoirs administratifs.",
          },
          {
            type: "frise",
            evenements: [
              { date: "VIIIe s.", texte: "Les marchands du nord introduisent l'islam" },
              { date: "XIe s.", texte: "Lettrés musulmans intégrés à l'administration" },
              { date: "XIe-XIIIe s.", texte: "Les rois restent fidèles à la religion traditionnelle" },
            ],
          },
          {
            type: "paragraphe",
            text: "Les rois du **Ghana** gardent longtemps leur religion, tout en employant des lettrés musulmans pour le commerce et la diplomatie.",
          },
          {
            type: "image",
            alt: "Routes commerciales reliant le royaume du Ghana au nord du Sahara.",
            legende: "Routes transsahariennes, XIe–XVe siècles : échanges et diffusion de l’islam.",
            credit: "Siyajkak, CC0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Trans-Saharan_routes_early.svg",
            licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "L'**islam** circule avec les marchands",
              "Des lettrés musulmans administrent le royaume",
              "Les religions coexistent dans le Sahel",
            ],
          },
        ],
      },
      {
        id: "course-histoire-05-empire-du-ghana-lesson-5",
        title: "Déclin et héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Affaibli par les rivalités et le déplacement du commerce, le **Ghana** laisse place au **Mali**.",
          },
          {
            type: "frise",
            evenements: [
              { date: "IVe s.", texte: "Naissance de l'empire du Ghana (Wagadou)" },
              { date: "XIe-XIIIe s.", texte: "Déclin face aux rivalités et à l'essor du Mali" },
              { date: "1957", texte: "Le Ghana moderne reprend son nom" },
            ],
          },
          {
            type: "paragraphe",
            text: "En 1957, le Ghana moderne reprend le nom de l'empire : un choix de mémoire et de fierté.",
          },
          {
            type: "image",
            alt: "Timbre commémorant l'indépendance avec le portrait de Kwame Nkrumah.",
            legende: "Timbre commémorant l'indépendance du Ghana, le 6 mars 1957.",
            credit: "Paasikivi, CC BY-SA 4.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:KwameNkrumahOnGhanianIndependenceDay6March1957PostageStamp.JPG",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "Déclin médiéval, essor du **Mali**",
              "Un modèle d'empire fondé sur le commerce",
              "**1957** : le nom Ghana renaît",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-05-empire-du-ghana-quiz-1",
        question: "Comment le peuple soninké appelait-il l'empire du Ghana ?",
        options: ["Wagadou", "Koush", "Aksoum", "Songhaï"],
        correctIndex: 0,
        explanation: "Les Soninké, fondateurs de l'empire, l'appelaient Wagadou ; « Ghana » était à l'origine le titre du roi, « chef de guerre », avant de nommer tout le royaume.",
      },
      {
        id: "course-histoire-05-empire-du-ghana-quiz-2",
        question: "Sur quel commerce reposait la richesse du Ghana ?",
        options: ["Le commerce de la soie", "Le commerce de l'or et du sel", "Le commerce des épices", "Le commerce du café"],
        correctIndex: 1,
        explanation: "Le Ghana contrôlait le commerce transsaharien de l'or (venu du sud) et du sel (venu du Sahara), taxé à l'entrée comme à la sortie du royaume.",
      },
      {
        id: "course-histoire-05-empire-du-ghana-quiz-3",
        question: "L'empire du Ghana se situait-il dans l'actuel pays du Ghana ?",
        options: ["Oui, exactement au même endroit", "Non, il était plus au nord-ouest (Mali/Mauritanie actuels)", "Non, il était en Afrique de l'Est", "Non, il était en Afrique du Nord"],
        correctIndex: 1,
        explanation: "L'empire se trouvait à cheval sur le sud de la Mauritanie et l'ouest du Mali actuels, avec Koumbi Saleh pour capitale — pas dans le Ghana moderne.",
      },
      {
        id: "course-histoire-05-empire-du-ghana-quiz-4",
        question: "Quelle était la capitale de l'empire du Ghana ?",
        options: ["Tombouctou", "Gao", "Koumbi Saleh", "Niani"],
        correctIndex: 2,
        explanation: "La capitale de l'empire du Ghana était Koumbi Saleh, qui comprenait une ville royale et une ville marchande reliées entre elles.",
      },
      {
        id: "course-histoire-05-empire-du-ghana-quiz-5",
        question: "Quel empire a succédé au Ghana en Afrique de l'Ouest ?",
        options: ["L'empire du Mali", "L'empire romain", "Le royaume du Kongo", "Le royaume d'Aksoum"],
        correctIndex: 0,
        explanation: "L'affaiblissement du Ghana ouvrit la voie à l'empire du Mali, fondé par Soundiata Keïta, que nous découvrons dans le prochain cours.",
      },
    ],
  },
  {
    id: "course-histoire-06-soundiata-mali",
    categoryId: "histoire",
    emoji: "🦁",
    title: "Soundiata et le Mali",
    description: "De prince exilé à fondateur d'empire, Soundiata Keïta a uni les Mandingues, bâti le Mali et donné à l'Afrique de l'Ouest l'une de ses plus anciennes chartes.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-06-soundiata-mali-lesson-1",
        title: "L'ombre du roi du Sosso",
        blocks: [
          {
            type: "paragraphe",
            text: "Après le Ghana, des royaumes rivaux se partagent la région. **Soumaoro Kanté**, roi du Sosso, devient redouté.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XIIIe s.", texte: "Chute du Ghana, morcellement régional" },
              { date: "avant 1235", texte: "Soumaoro Kanté domine le Sosso" },
              { date: "1235", texte: "Naissance de l'empire du Mali" },
            ],
          },
          {
            type: "paragraphe",
            text: "Autour de **Kangaba**, sur le haut Niger, les Mandingues vivent sous sa menace. **Soundiata Keïta** émerge dans ce contexte.",
          },
          {
            type: "image",
            alt: "Carte des royaumes issus du morcellement de l'ancien Ghana.",
            legende: "Après le Ghana : royaumes rivaux vers 1200, territoires indicatifs.",
            credit: "T L Miles, CC BY-SA 3.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Ghana_successor_map_1200.png",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "Morcellement après le **Ghana**",
              "**Soumaoro** domine le Sosso",
              "Les Mandingues vivent autour de **Kangaba**",
            ],
          },
        ],
      },
      {
        id: "course-histoire-06-soundiata-mali-lesson-2",
        title: "Soundiata, l'enfant qui ne marchait pas",
        blocks: [
          {
            type: "paragraphe",
            text: "Selon l'épopée, **Soundiata** ne marche pas enfant. Il se relève par un effort devenu légendaire.",
          },
          { type: "chiffreCle", valeur: "~800 ans", legende: "l'épopée transmise oralement par les griots" },
          {
            type: "paragraphe",
            text: "Exilé face aux rivalités de cour, il se forme puis revient libérer son peuple. Les **griots** transmettent cette histoire.",
          },
          {
            type: "aRetenir",
            points: [
              "Une enfance fragile dans l'**épopée**",
              "L'exil prépare son retour",
              "Les **griots** transmettent oralement son histoire",
            ],
          },
          { type: "leSavaisTu", text: "Aucun récit écrit de l'époque ne raconte cette épopée." },
        ],
      },
      {
        id: "course-histoire-06-soundiata-mali-lesson-3",
        title: "La bataille de Kirina",
        blocks: [
          {
            type: "paragraphe",
            text: "De retour parmi les siens, Soundiata rassemble les clans mandingues. Une seule bataille va sceller le sort de toute la région.",
          },
          {
            type: "chiffreCle",
            valeur: "1235",
            legende: "Soundiata vainc Soumaoro à la bataille de Kirina",
          },
          {
            type: "paragraphe",
            text: "Soundiata affronte **Soumaoro Kanté** et remporte la décisive bataille de **Kirina**, mettant fin à la domination du Sosso. Il prend le titre de mansa (roi des rois) et établit sa capitale à Niani.",
          },
          {
            type: "aRetenir",
            points: [
              "**1235** : victoire de Soundiata à Kirina sur Soumaoro Kanté",
              "Naissance de l'empire du Mali, capitale à Niani",
              "Soundiata prend le titre de mansa, « roi des rois »",
            ],
          },
        ],
      },
      {
        id: "course-histoire-06-soundiata-mali-lesson-4",
        title: "La Charte du Manden",
        blocks: [
          { type: "paragraphe", text: "Vers **1236**, une assemblée à **Kurukan Fuga** proclame la Charte du Manden." },
          { type: "chiffreCle", valeur: "1236", legende: "proclamation de la Charte du Manden à Kurukan Fuga" },
          {
            type: "paragraphe",
            text: "Elle organise les clans et énonce solidarité et respect de la vie. Les **griots** la transmettent ; l'UNESCO reconnaît ce patrimoine oral.",
          },
          {
            type: "image",
            alt: "Assemblée de personnages représentée par une illustration contemporaine.",
            legende: "Assemblée du Manden : illustration contemporaine, pas un document de 1236.",
            credit: "Morganb73, CC BY-SA 3.0, WebP",
            sourceUrl:
              "https://commons.wikimedia.org/wiki/File:Assembl%C3%A9e_constitutive_de_l%27empire_du_Mand%C3%A9_(les_chefs_de_guerre).jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            fit: "contain",
          },
          { type: "citation", texte: "Toute vie humaine est une vie.", auteur: "Charte du Manden, Kurukan Fuga (1236)" },
          {
            type: "aRetenir",
            points: [
              "**1236** : Charte du Manden",
              "Des principes de vie et de solidarité",
              "Un patrimoine oral reconnu par l'**UNESCO**",
            ],
          },
        ],
      },
      {
        id: "course-histoire-06-soundiata-mali-lesson-5",
        title: "Les fondations d'un empire prospère",
        blocks: [
          {
            type: "paragraphe",
            text: "**Soundiata** pose les bases d'un empire prospère, au-delà de ses seules victoires militaires.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XIIIe s.", texte: "Chute du Ghana, essor de Soumaoro Kanté" },
              { date: "1235", texte: "Victoire de Kirina, naissance du Mali" },
              { date: "1236", texte: "Charte du Manden à Kurukan Fuga" },
            ],
          },
          {
            type: "paragraphe",
            text: "Le Mali contrôle l'or, cultive la vallée du **Niger** et rassemble des peuples. Son successeur Mansa Moussa mène l'empire à l'apogée.",
          },
          {
            type: "image",
            alt: "Carte du Mali reliant ses régions aux principaux axes commerciaux.",
            legende: "L'empire du Mali après Soundiata, au début du XIVe siècle.",
            credit: "HetmanTheResearcher, CC BY 4.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Map_of_the_Mali_Empire.png",
            licenseUrl: "https://creativecommons.org/licenses/by/4.0",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "Or et agriculture soutiennent le **Mali**",
              "Soundiata rassemble les peuples",
              "**Mansa Moussa** poursuit cette prospérité",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-06-soundiata-mali-quiz-1",
        question: "Qui est le fondateur de l'empire du Mali ?",
        options: ["Soundiata Keïta", "Mansa Moussa", "Soumaoro Kanté", "Askia Mohammed"],
        correctIndex: 0,
        explanation: "Soundiata Keïta fonda l'empire du Mali après sa victoire de Kirina, en 1235, et établit sa capitale à Niani.",
      },
      {
        id: "course-histoire-06-soundiata-mali-quiz-2",
        question: "Quelle bataille a marqué la naissance de l'empire du Mali (vers 1235) ?",
        options: ["La bataille d'Adoua", "La bataille de Kirina", "La bataille des Pyramides", "La bataille de Zama"],
        correctIndex: 1,
        explanation: "Vers 1235, Soundiata vainquit Soumaoro Kanté à Kirina, fondant l'empire du Mali et prenant le titre de mansa, « roi des rois ».",
      },
      {
        id: "course-histoire-06-soundiata-mali-quiz-3",
        question: "Comment appelle-t-on la charte proclamée sous Soundiata, inscrite au patrimoine de l'UNESCO ?",
        options: ["La Charte du Manden (Kurukan Fuga)", "La Grande Charte", "Le Code de Hammurabi", "La Charte de Tombouctou"],
        correctIndex: 0,
        explanation: "La Charte du Manden (Kurukan Fuga), transmise oralement par les griots, est inscrite au patrimoine immatériel de l'UNESCO comme l'une des plus anciennes « constitutions » d'Afrique.",
      },
      {
        id: "course-histoire-06-soundiata-mali-quiz-4",
        question: "Qui transmettait l'histoire de Soundiata de génération en génération ?",
        options: ["Les scribes", "Les moines", "Les griots", "Les marchands"],
        correctIndex: 2,
        explanation: "Les griots, gardiens de la tradition orale, ont transmis l'épopée de Soundiata : aucun texte écrit de l'époque ne la raconte.",
      },
      {
        id: "course-histoire-06-soundiata-mali-quiz-5",
        question: "Quel roi cruel Soundiata a-t-il vaincu ?",
        options: ["Jugurtha", "Soumaoro Kanté", "Taharqa", "Hannibal"],
        correctIndex: 1,
        explanation: "Soundiata vainquit Soumaoro Kanté, roi du Sosso réputé invincible, à la bataille de Kirina.",
      },
    ],
  },
  {
    id: "course-histoire-07-mansa-moussa",
    categoryId: "histoire",
    emoji: "👑",
    title: "Mansa Moussa",
    description: "Souvent présenté comme l'homme le plus riche de l'histoire, Mansa Moussa a fait rayonner le Mali de Tombouctou jusqu'à La Mecque, et inscrit l'Afrique de l'Ouest sur les cartes du monde.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-07-mansa-moussa-lesson-1",
        title: "Le plus riche souverain du monde",
        blocks: [
          {
            type: "paragraphe",
            text: "**Mansa Moussa** règne sur un vaste empire ouest-africain et contrôle de riches régions aurifères.",
          },
          { type: "chiffreCle", valeur: "1312-1337", legende: "le règne de Mansa Moussa sur l'empire du Mali" },
          {
            type: "paragraphe",
            text: "Son titre, **mansa**, signifie « roi des rois ». L'or du Mali explique sa fortune et la réputation du souverain.",
          },
          {
            type: "image",
            alt: "Mansa Moussa représenté avec couronne, sceptre et or.",
            legende: "Mansa Moussa dans l'Atlas catalan de 1375, détail.",
            credit: "Abraham Cresques (attribué), domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Catalan_Atlas_BNF_Sheet_6_Mansa_Musa_(cropped).jpg",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "**1312–1337** : règne de Mansa Moussa",
              "Un vaste empire de l'Atlantique au Niger",
              "L'**or** fonde sa puissance",
            ],
          },
          { type: "leSavaisTu", text: "Il est aussi nommé Kankou Moussa, d'après sa mère Kankou." },
        ],
      },
      {
        id: "course-histoire-07-mansa-moussa-lesson-2",
        title: "Le pèlerinage à La Mecque",
        blocks: [
          {
            type: "paragraphe",
            text: "En **1324**, Mansa Moussa part à La Mecque avec une immense caravane et beaucoup d'or.",
          },
          { type: "chiffreCle", valeur: "1324", legende: "le pèlerinage de Mansa Moussa à La Mecque" },
          {
            type: "paragraphe",
            text: "Au **Caire**, ses dons et dépenses font baisser la valeur de l'or pendant des années, selon les chroniqueurs.",
          },
          {
            type: "image",
            alt: "Un souverain et son escorte représentés en voyage.",
            legende: "Le pèlerinage de Moussa, représentation tardive publiée en 1903.",
            credit: "Artiste inconnu, domaine public, WebP",
            sourceUrl:
              "https://commons.wikimedia.org/wiki/File:Mansa-Musa-on-his-way-to-Mecca-Credit-Print-Collector-Getty-images-1536x790.jpg",
            fit: "contain",
          },
          { type: "citation", texte: "La main qui donne est au-dessus de la main qui reçoit.", auteur: "Tradition islamique" },
          {
            type: "aRetenir",
            points: [
              "**1324** : pèlerinage à La Mecque",
              "L'or distribué bouleverse le **Caire**",
              "Le voyage révèle la richesse du Mali",
            ],
          },
        ],
      },
      {
        id: "course-histoire-07-mansa-moussa-lesson-3",
        title: "Une renommée mondiale",
        blocks: [
          { type: "paragraphe", text: "L'**Atlas catalan** de **1375** représente Mansa Moussa couronné, tenant de l'or." },
          { type: "chiffreCle", valeur: "1375", legende: "l'Atlas catalan représente Mansa Moussa" },
          {
            type: "paragraphe",
            text: "Cette carte méditerranéenne donne une place visible au Mali. Le souverain y incarne la richesse de l'Afrique occidentale.",
          },
          {
            type: "image",
            alt: "Mansa Moussa figure au milieu des toponymes d'une carte médiévale.",
            legende: "L'Atlas catalan de 1375 situe Moussa dans l'Afrique occidentale.",
            credit: "Abraham Cresques (attribué), domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "**1375** : l'Atlas catalan représente Moussa",
              "Le souverain tient de l'**or**",
              "Le Mali figure sur une carte méditerranéenne",
            ],
          },
        ],
      },
      {
        id: "course-histoire-07-mansa-moussa-lesson-4",
        title: "Tombouctou, cité du savoir",
        blocks: [
          {
            type: "paragraphe",
            text: "Après son pèlerinage, **Mansa Moussa** fait venir savants et architectes, dont **Es-Sahéli**.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1324", texte: "Retour du pèlerinage avec savants et architectes" },
              { date: "XIVe s.", texte: "Construction de la mosquée Djinguereber" },
              { date: "XIVe-XVe s.", texte: "Essor de l'université de Sankoré" },
            ],
          },
          {
            type: "paragraphe",
            text: "La mosquée **Djinguereber** participe au rayonnement de Tombouctou. Avec Djenné, la ville développe bibliothèques, enseignement et manuscrits.",
          },
          {
            type: "image",
            alt: "Façade de terre de la mosquée Djinguereber à Tombouctou.",
            legende: "Djinguereber à Tombouctou, fondée au temps de Mansa Moussa.",
            credit: "upyernoz, CC BY 2.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Djinguereber_Mosque,_Timbuktu.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by/2.0",
          },
          {
            type: "aRetenir",
            points: [
              "**Djinguereber**, liée à Mansa Moussa",
              "Tombouctou et Djenné deviennent des centres savants",
              "Des bibliothèques conservent les manuscrits",
            ],
          },
        ],
      },
      {
        id: "course-histoire-07-mansa-moussa-lesson-5",
        title: "Héritage",
        blocks: [
          { type: "paragraphe", text: "**Mansa Moussa** symbolise la richesse et le savoir de l'Afrique médiévale." },
          {
            type: "frise",
            evenements: [
              { date: "1312", texte: "Mansa Moussa devient empereur du Mali" },
              { date: "1324", texte: "Pèlerinage à La Mecque, renommée mondiale" },
              { date: "1337", texte: "Fin du règne, Tombouctou rayonne" },
            ],
          },
          {
            type: "paragraphe",
            text: "Son Mali rivalise avec de grandes puissances. Après lui, le déclin ouvre la voie au **Songhaï**, tandis que le patrimoine savant perdure.",
          },
          {
            type: "image",
            alt: "Pages manuscrites de savoirs astronomiques et mathématiques.",
            legende: "Manuscrits de Tombouctou : un héritage savant conservé.",
            credit: "Elias Altmimi, domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Timbuktu-manuscripts-astronomy-mathematics.jpg",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "Richesse et savoir de l'**Afrique médiévale**",
              "Un empire de rayonnement international",
              "Le **Songhaï** succède au Mali dominant",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-07-mansa-moussa-quiz-1",
        question: "De quel empire Mansa Moussa était-il le souverain ?",
        options: ["L'empire du Ghana", "L'empire du Mali", "L'empire Songhaï", "Le royaume d'Aksoum"],
        correctIndex: 1,
        explanation: "Mansa Moussa régna sur l'empire du Mali, d'environ 1312 à 1337, aussi sous le nom de Kankou Moussa (du nom de sa mère).",
      },
      {
        id: "course-histoire-07-mansa-moussa-quiz-2",
        question: "En quelle année Mansa Moussa a-t-il effectué son célèbre pèlerinage à La Mecque ?",
        options: ["En 1324", "En 1235", "En 1492", "En 1000"],
        correctIndex: 0,
        explanation: "Son pèlerinage (hajj) eut lieu en 1324, accompagné d'une immense caravane, et marqua les mémoires par son faste.",
      },
      {
        id: "course-histoire-07-mansa-moussa-quiz-3",
        question: "Que se passa-t-il lorsque Mansa Moussa distribua son or au Caire ?",
        options: ["Rien de particulier", "La valeur de l'or y chuta pour plusieurs années", "Il fut emprisonné", "Il fut couronné empereur d'Égypte"],
        correctIndex: 1,
        explanation: "Ses dépenses en or furent si massives qu'elles firent baisser la valeur du métal au Caire pendant des années, selon les chroniqueurs.",
      },
      {
        id: "course-histoire-07-mansa-moussa-quiz-4",
        question: "Quelle ville est devenue, sous et après Mansa Moussa, un grand centre du savoir ?",
        options: ["Carthage", "Le Caire", "Tombouctou", "Kirina"],
        correctIndex: 2,
        explanation: "Tombouctou (comme Djenné) devint un centre majeur de savoir islamique, avec la mosquée Djinguereber et l'université de Sankoré.",
      },
      {
        id: "course-histoire-07-mansa-moussa-quiz-5",
        question: "Quel document européen de 1375 a représenté Mansa Moussa avec une pépite d'or ?",
        options: ["La Bible de Gutenberg", "L'Atlas catalan", "La carte de Ptolémée", "La tapisserie de Bayeux"],
        correctIndex: 1,
        explanation: "L'Atlas catalan (1375) le montre sur son trône, tenant une pépite d'or — la première fois qu'un empire d'Afrique de l'Ouest figure sur une carte européenne.",
      },
    ],
  },
  {
    id: "course-histoire-08-empire-songhai",
    categoryId: "histoire",
    emoji: "🐟",
    title: "Empire songhaï",
    description: "Sur les rives du Niger, le Songhaï devint le plus vaste empire de l'histoire ouest-africaine, avec Gao pour capitale et de grands souverains réformateurs.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-08-empire-songhai-lesson-1",
        title: "Gao et la montée du Songhaï",
        blocks: [
          { type: "paragraphe", text: "Longtemps vassal du Mali, le **Songhaï** profite de son déclin pour s'émanciper." },
          {
            type: "frise",
            evenements: [
              { date: "XIe s.", texte: "Le royaume songhaï existe autour de Gao" },
              { date: "XIVe s.", texte: "Vassal de l'empire du Mali" },
              { date: "XVe s.", texte: "Émancipation et essor du Songhaï" },
            ],
          },
          {
            type: "paragraphe",
            text: "Autour de **Gao**, le **Niger** soutient transports et commerce. Cette position permet de rayonner vers Tombouctou et Djenné.",
          },
          {
            type: "image",
            alt: "Pirogues sur le fleuve Niger à Gao.",
            legende: "Le Niger à Gao, axe fluvial de l'ancien Songhaï.",
            credit: "Ryszard Vorbrich, CC BY-SA 3.0 pl, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:%C5%81odzie_rybackie_na_rzece_Niger_-_Gao_-_001208s.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/pl/deed.en",
          },
          {
            type: "aRetenir",
            points: [
              "**Gao**, centre du royaume songhaï",
              "Émancipation face au déclin du **Mali**",
              "Le Niger relie les cités marchandes",
            ],
          },
        ],
      },
      {
        id: "course-histoire-08-empire-songhai-lesson-2",
        title: "Sonni Ali Ber, le conquérant",
        blocks: [
          {
            type: "paragraphe",
            text: "**Sonni Ali Ber** est un conquérant redouté, dont les lettrés gardent un souvenir sévère.",
          },
          { type: "chiffreCle", valeur: "1464-1492", legende: "le règne de Sonni Ali Ber" },
          {
            type: "paragraphe",
            text: "Sa cavalerie et sa flotte sur le **Niger** lui permettent de conquérir Tombouctou puis Djenné. Le Songhaï devient dominant.",
          },
          {
            type: "image",
            alt: "Gao, Tombouctou et Djenné sur une carte de l'empire Songhaï.",
            legende: "Le Songhaï à son apogée : Gao, Tombouctou et Djenné.",
            credit: "Roke / Astrokey44, CC BY-SA 3.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:SONGHAI_empire_map.PNG",
            licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "**1464–1492** : règne de Sonni Ali",
              "Une cavalerie et une flotte fluviale",
              "Conquête de **Tombouctou** et Djenné",
            ],
          },
        ],
      },
      {
        id: "course-histoire-08-empire-songhai-lesson-3",
        title: "Askia Mohammed, le réformateur",
        blocks: [
          {
            type: "paragraphe",
            text: "Après Sonni Ali, **Askia Mohammed** réorganise l'empire et accomplit un pèlerinage à **La Mecque**.",
          },
          { type: "chiffreCle", valeur: "1493-1528", legende: "le règne d'Askia Mohammed, « Askia le Grand »" },
          {
            type: "paragraphe",
            text: "Gouverneurs, administration centralisée, armée permanente, poids et mesures unifiés : ces réformes soutiennent l'apogée du Songhaï.",
          },
          {
            type: "image",
            alt: "Monument pyramidal en terre du tombeau des Askia à Gao.",
            legende: "Le tombeau des Askia à Gao, construit en 1495.",
            credit: "Taguelmoust, CC BY-SA 3.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Askia.jpg",
            licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
          },
          {
            type: "citation",
            texte: "Un chef est le berger de son peuple, il est responsable de son troupeau.",
            auteur: "Tradition islamique",
          },
          {
            type: "aRetenir",
            points: [
              "**1493–1528** : règne d'Askia Mohammed",
              "Provinces, gouverneurs et armée permanente",
              "Apogée du **Songhaï**",
            ],
          },
        ],
      },
      {
        id: "course-histoire-08-empire-songhai-lesson-4",
        title: "Un empire vaste et savant",
        blocks: [
          { type: "paragraphe", text: "Le **Songhaï** devient le plus vaste empire de l'histoire de l'Afrique de l'Ouest." },
          { type: "chiffreCle", valeur: "~35 ans", legende: "la durée de l'apogée politique et culturelle du Songhaï" },
          {
            type: "paragraphe",
            text: "Administration, armée et commerce transsaharien soutiennent sa puissance. **Tombouctou** et Djenné rayonnent par leurs écoles et bibliothèques.",
          },
          {
            type: "image",
            alt: "Mosquée de Sankoré sur une ancienne carte postale.",
            legende: "Sankoré à Tombouctou, photographie ancienne d'Edmond Fortier.",
            credit: "Edmond Fortier, domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Fortier_368_Timbuktu_Sankore_Mosque.jpg",
          },
          {
            type: "aRetenir",
            points: [
              "Un très vaste empire **ouest-africain**",
              "Administration et commerce soutiennent sa puissance",
              "**Tombouctou** et Djenné diffusent le savoir",
            ],
          },
        ],
      },
      {
        id: "course-histoire-08-empire-songhai-lesson-5",
        title: "La chute de 1591",
        blocks: [
          {
            type: "paragraphe",
            text: "En **1591**, l'armée marocaine bat le Songhaï à **Tondibi**, grâce notamment à ses armes à feu.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XVe s.", texte: "Émancipation du Songhaï, essor sous Sonni Ali Ber" },
              { date: "1493-1528", texte: "Réformes d'Askia Mohammed, apogée de l'empire" },
              { date: "1591", texte: "Défaite de Tondibi face au Maroc" },
            ],
          },
          {
            type: "paragraphe",
            text: "La défaite brise la puissance impériale. Les foyers savants de Tombouctou et Djenné continuent pourtant leur histoire.",
          },
          {
            type: "aRetenir",
            points: [
              "**1591** : défaite de Tondibi",
              "Les armes à feu font la différence",
              "Fin de la puissance impériale **songhaï**",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-08-empire-songhai-quiz-1",
        question: "Quelle était la capitale de l'empire Songhaï ?",
        options: ["Gao", "Koumbi Saleh", "Niani", "Ngazargamu"],
        correctIndex: 0,
        explanation: "L'empire Songhaï avait pour capitale Gao, sur la boucle du Niger, un axe de communication et de commerce majeur.",
      },
      {
        id: "course-histoire-08-empire-songhai-quiz-2",
        question: "Qui fut le grand conquérant fondateur de la puissance songhaï ?",
        options: ["Askia Mohammed", "Sonni Ali Ber", "Soundiata Keïta", "Mansa Moussa"],
        correctIndex: 1,
        explanation: "Sonni Ali Ber (1464-1492) conquit Tombouctou et Djenné grâce à sa cavalerie et sa flotte de guerre naviguant sur le Niger.",
      },
      {
        id: "course-histoire-08-empire-songhai-quiz-3",
        question: "Quel souverain a réorganisé l'empire en provinces et administration centralisée ?",
        options: ["Sonni Ali Ber", "Idris Alooma", "Askia Mohammed", "Ezana"],
        correctIndex: 2,
        explanation: "Askia Mohammed « le Grand » (1493-1528) réforma en profondeur l'administration de l'empire : provinces, gouverneurs, armée permanente, poids et mesures unifiés.",
      },
      {
        id: "course-histoire-08-empire-songhai-quiz-4",
        question: "Qu'est-ce qui a permis au Maroc de vaincre le Songhaï en 1591 ?",
        options: ["Une flotte plus nombreuse", "Les armes à feu", "Une alliance avec le Mali", "Une famine"],
        correctIndex: 1,
        explanation: "À la bataille de Tondibi (1591), les armes à feu marocaines, encore inconnues dans la région, écrasèrent l'armée songhaï traditionnelle.",
      },
      {
        id: "course-histoire-08-empire-songhai-quiz-5",
        question: "Que représente la chute du Songhaï dans l'histoire de l'Afrique de l'Ouest ?",
        options: ["Le début de l'Antiquité", "La fin des grands empires sahéliens", "Le début du commerce de l'or", "La naissance de l'islam"],
        correctIndex: 1,
        explanation: "La chute de 1591 marque la fin de l'ère des grands empires sahéliens (Ghana, Mali, Songhaï), même si le rayonnement intellectuel de Tombouctou et Djenné, lui, perdure.",
      },
    ],
  },
  {
    id: "course-histoire-09-tombouctou-djenne",
    categoryId: "histoire",
    emoji: "📚",
    title: "Tombouctou et Djenné",
    description: "Deux villes de la boucle du Niger sont devenues des phares mondiaux de la connaissance, avec leurs universités, leurs bibliothèques de manuscrits et une architecture de terre unique au monde.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-09-tombouctou-djenne-lesson-1",
        title: "Du commerce au savoir",
        blocks: [
          {
            type: "paragraphe",
            text: "L'or et le sel enrichissent **Tombouctou** et **Djenné**, entre caravanes sahariennes et commerce fluvial.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XIe-XIIe s.", texte: "Tombouctou et Djenné, carrefours commerciaux" },
              { date: "XIVe s.", texte: "Essor sous Mansa Moussa" },
              { date: "XVe-XVIe s.", texte: "Apogée intellectuelle sous le Songhaï" },
            ],
          },
          {
            type: "paragraphe",
            text: "Cette prospérité attire marchands, lettrés et étudiants. Les villes deviennent aussi des carrefours de savoir.",
          },
          {
            type: "image",
            alt: "Routes vers Tombouctou et Djenné et régions aurifères.",
            legende: "Routes transsahariennes, XIe–XVe siècles : villes, sel et régions aurifères.",
            credit: "Aa77zz, CC0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Trans-Saharan_routes_early.svg",
            licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "Deux carrefours commerciaux **sahéliens**",
              "L'or et le sel fondent leur richesse",
              "Le commerce favorise le **savoir**",
            ],
          },
        ],
      },
      {
        id: "course-histoire-09-tombouctou-djenne-lesson-2",
        title: "L'université de Sankoré",
        blocks: [
          {
            type: "paragraphe",
            text: "À **Sankoré**, des étudiants étudient droit, théologie, grammaire, astronomie, mathématiques et médecine.",
          },
          { type: "chiffreCle", valeur: "6", legende: "disciplines enseignées à l'université de Sankoré" },
          {
            type: "paragraphe",
            text: "Les ouvrages de savants comme **Ahmed Baba** circulent dans le monde islamique. Tombouctou devient une cité renommée du savoir.",
          },
          {
            type: "image",
            alt: "Minaret et façade en terre de la mosquée de Sankoré.",
            legende: "Sankoré à Tombouctou, ancien foyer d'enseignement.",
            credit: "Ondřej Havelka, CC BY-SA 4.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Sankore_Madrasah.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            fit: "contain",
          },
          { type: "citation", texte: "Cherche le savoir du berceau jusqu'à la tombe.", auteur: "Tradition islamique" },
          {
            type: "aRetenir",
            points: [
              "**Six disciplines**, du droit à l'astronomie",
              "**Ahmed Baba**, savant de Tombouctou",
              "Un rayonnement dans le monde islamique",
            ],
          },
        ],
      },
      {
        id: "course-histoire-09-tombouctou-djenne-lesson-3",
        title: "Les manuscrits de Tombouctou",
        blocks: [
          {
            type: "paragraphe",
            text: "Des bibliothèques familiales conservent les manuscrits de **Tombouctou**, transmis de génération en génération.",
          },
          { type: "chiffreCle", valeur: "100 000+", legende: "manuscrits conservés à Tombouctou" },
          {
            type: "paragraphe",
            text: "Religion, droit, histoire, sciences et **astronomie** : ces pages témoignent d'une tradition écrite savante en Afrique de l'Ouest.",
          },
          {
            type: "image",
            alt: "Tables de calcul astronomique dans un manuscrit de Tombouctou.",
            legende: "Tables astronomiques conservées à Tombouctou, manuscrit de l'Institut Ahmed-Baba.",
            credit: "Ahmed Baba Institute / Wikimedia Commons, domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Timbuktu-manuscripts-astronomy-tables.jpg",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "Des bibliothèques **familiales**",
              "Des textes dans de nombreuses disciplines",
              "Une tradition écrite **ouest-africaine**",
            ],
          },
        ],
      },
      {
        id: "course-histoire-09-tombouctou-djenne-lesson-4",
        title: "L'architecture de terre",
        blocks: [
          { type: "paragraphe", text: "La Grande Mosquée de **Djenné** est un immense édifice en terre crue." },
          { type: "chiffreCle", valeur: "N° 1 mondial", legende: "plus vaste édifice en terre crue du monde" },
          {
            type: "paragraphe",
            text: "Les habitants renouvellent ensemble son enduit chaque année. À **Tombouctou**, Djinguereber témoigne du même savoir-faire architectural.",
          },
          {
            type: "image",
            alt: "Grande Mosquée de Djenné et ses poutres de bois saillantes.",
            legende: "Grande Mosquée de Djenné, édifice actuel reconstruit en 1907.",
            credit: "BluesyPete, CC BY-SA 3.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:MaliDjenn%C3%A9Mosqu%C3%A9e.JPG",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
          },
          {
            type: "aRetenir",
            points: [
              "La **terre crue**, matériau monumental",
              "Une réfection annuelle collective",
              "Djenné et **Djinguereber**, patrimoine de l'UNESCO",
            ],
          },
        ],
      },
      {
        id: "course-histoire-09-tombouctou-djenne-lesson-5",
        title: "Héritage et préservation",
        blocks: [
          {
            type: "paragraphe",
            text: "En **2012**, des mausolées sont détruits à Tombouctou. Des habitants mettent les manuscrits à l'abri.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XIe-XVIe s.", texte: "Âge d'or intellectuel de Tombouctou et Djenné" },
              { date: "2012", texte: "Destruction de mausolées, manuscrits mis à l'abri" },
              { date: "XXIe s.", texte: "Protection et numérisation du patrimoine" },
            ],
          },
          {
            type: "paragraphe",
            text: "Communautés locales et **UNESCO** soutiennent conservation et numérisation. Protéger ces documents préserve la mémoire écrite du continent.",
          },
          {
            type: "image",
            alt: "Manuscrits conservés par l'association SAVAMA-DCI à Tombouctou.",
            legende: "Manuscrits conservés par SAVAMA-DCI, au Mali.",
            credit: "Lazare Eloundou, CC BY-SA 3.0 igo, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Timbuktu-139078.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/igo/deed.en",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "**2012** : destructions et sauvetage des manuscrits",
              "Des habitants protègent leur patrimoine",
              "Conservation et **numérisation** préservent la mémoire",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-09-tombouctou-djenne-quiz-1",
        question: "Quelle célèbre université-mosquée se trouvait à Tombouctou ?",
        options: ["Sankoré", "Al-Azhar", "La Sorbonne", "Karaouiyine"],
        correctIndex: 0,
        explanation: "La mosquée-université de Sankoré, à Tombouctou, accueillait des milliers d'étudiants et enseignait six disciplines, du droit à l'astronomie.",
      },
      {
        id: "course-histoire-09-tombouctou-djenne-quiz-2",
        question: "Que prouvent les manuscrits de Tombouctou ?",
        options: ["Que l'Afrique n'avait pas d'écriture", "Que l'Afrique de l'Ouest avait une riche tradition écrite", "Que la ville était inhabitée", "Qu'il n'y avait pas de commerce"],
        correctIndex: 1,
        explanation: "Les plus de cent mille manuscrits, conservés dans des bibliothèques familiales, attestent d'une tradition savante et écrite en Afrique de l'Ouest.",
      },
      {
        id: "course-histoire-09-tombouctou-djenne-quiz-3",
        question: "Quelle particularité a la Grande Mosquée de Djenné ?",
        options: ["Elle est en marbre grec", "C'est le plus vaste édifice en terre crue du monde", "Elle est entièrement souterraine", "Elle est faite de verre"],
        correctIndex: 1,
        explanation: "La Grande Mosquée de Djenné est le plus grand bâtiment en briques de terre crue du monde.",
      },
      {
        id: "course-histoire-09-tombouctou-djenne-quiz-4",
        question: "Que font chaque année les habitants de Djenné pour leur mosquée ?",
        options: ["Ils la repeignent en or", "Ils participent à sa réfection en terre", "Ils la démolissent", "Ils la déplacent"],
        correctIndex: 1,
        explanation: "Chaque année, la population enduit à nouveau la mosquée de terre lors d'une grande fête communautaire.",
      },
      {
        id: "course-histoire-09-tombouctou-djenne-quiz-5",
        question: "Quel savant réputé de Tombouctou enseignait à l'université de Sankoré ?",
        options: ["Ibn Battuta", "Ahmed Baba", "Champollion", "Al-Bakri"],
        correctIndex: 1,
        explanation: "Ahmed Baba est l'un des grands savants de Tombouctou, auteur d'ouvrages diffusés dans le monde musulman depuis l'université de Sankoré.",
      },
    ],
  },
  {
    id: "course-histoire-10-kanem-bornou",
    categoryId: "histoire",
    emoji: "🐫",
    title: "Kanem-Bornou",
    description: "Autour du lac Tchad, un empire a duré près de mille ans, reliant l'Afrique centrale au monde méditerranéen par le commerce, la diplomatie et l'islam.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-10-kanem-bornou-lesson-1",
        title: "Mille ans d'une seule dynastie",
        blocks: [
          { type: "paragraphe", text: "Le **Kanem** émerge vers le IXᵉ siècle, à l'est et au nord du lac Tchad." },
          { type: "chiffreCle", valeur: "~1000 ans", legende: "le règne de la dynastie Sayfawa au Kanem" },
          {
            type: "paragraphe",
            text: "Peuplé notamment de Kanouri, il est gouverné par les **Sayfawa**. Cette dynastie traverse près de mille ans d'histoire.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **Kanem** naît vers le IXᵉ siècle",
              "Les **Sayfawa**, une dynastie durable",
              "Le lac Tchad est un repère central",
            ],
          },
        ],
      },
      {
        id: "course-histoire-10-kanem-bornou-lesson-2",
        title: "L'essor du Kanem et l'islam",
        blocks: [
          {
            type: "paragraphe",
            text: "Le **Kanem** contrôle des routes transsahariennes reliant l'Afrique centrale au Maghreb et à l'Égypte.",
          },
          { type: "chiffreCle", valeur: "XIe siècle", legende: "les mai du Kanem adoptent l'islam" },
          {
            type: "paragraphe",
            text: "Au XIᵉ siècle, ses souverains, les **mai**, adoptent l'islam. Commerce et diplomatie renforcent leurs liens avec le monde musulman.",
          },
          {
            type: "image",
            alt: "Routes sahariennes reliant notamment le lac Tchad à l'Afrique du Nord.",
            legende: "Routes transsahariennes vers 1400, dont celles du Kanem-Bornou.",
            credit: "T L Miles, domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Niger_saharan_medieval_trade_routes.PNG",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "Routes vers le Maghreb et l'Égypte",
              "Les **mai** adoptent l'islam au XIᵉ siècle",
              "Commerce et religion renforcent les échanges",
            ],
          },
        ],
      },
      {
        id: "course-histoire-10-kanem-bornou-lesson-3",
        title: "Le déplacement vers le Bornou",
        blocks: [
          {
            type: "paragraphe",
            text: "Après des crises, le pouvoir quitte le Kanem pour le **Bornou**, au sud-ouest du lac Tchad.",
          },
          {
            type: "frise",
            evenements: [
              { date: "IXe s.", texte: "Naissance du royaume du Kanem" },
              { date: "XIVe s.", texte: "Crises internes, pressions extérieures" },
              { date: "XVe s.", texte: "Renaissance sous le nom de Kanem-Bornou" },
            ],
          },
          {
            type: "paragraphe",
            text: "La nouvelle capitale, **Ngazargamu**, devient le centre du Kanem-Bornou. Ce déplacement ouvre une nouvelle période de prospérité.",
          },
          {
            type: "aRetenir",
            points: [
              "Le pouvoir passe au **Bornou**",
              "**Ngazargamu**, nouvelle capitale",
              "Le royaume retrouve la prospérité",
            ],
          },
        ],
      },
      {
        id: "course-histoire-10-kanem-bornou-lesson-4",
        title: "L'apogée sous Idris Alooma",
        blocks: [
          {
            type: "paragraphe",
            text: "Sous **Idris Alooma**, le Bornou connaît son apogée à la fin du XVIe siècle. Ce souverain associe réformes militaires, diplomatie et justice.",
          },
          {
            type: "chiffreCle",
            valeur: "fin XVIe s.",
            legende: "l'apogée du Kanem-Bornou sous Idris Alooma",
          },
          {
            type: "paragraphe",
            text: "Il modernise l’armée avec des armes à feu et échange avec l’Empire **ottoman**. Ses réformes renforcent l’État et la justice islamique. Elles montrent un royaume connecté aux réseaux du monde musulman, capable de mobiliser les ressources du commerce et de développer ses relations extérieures.",
          },
          {
            type: "citation",
            texte: "Ô vous qui croyez, soyez fermes pour la justice.",
            auteur: "Coran, sourate 4",
          },
          {
            type: "aRetenir",
            points: [
              "**Idris Alooma** modernise l'armée avec des armes à feu",
              "Relations diplomatiques avec l'Empire ottoman",
              "Une justice renforcée, fondée sur la loi islamique",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Ses échanges avec Istanbul témoignent de l'ouverture diplomatique du Bornou.",
          },
        ],
      },
      {
        id: "course-histoire-10-kanem-bornou-lesson-5",
        title: "Longévité et héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Le **Kanem-Bornou** perdure jusqu'au XIXᵉ siècle : une longévité remarquable dans le Soudan central.",
          },
          {
            type: "frise",
            evenements: [
              { date: "IXe s.", texte: "Naissance du Kanem, dynastie Sayfawa" },
              { date: "XVe s.", texte: "Renaissance sous le nom de Kanem-Bornou" },
              { date: "XIXe s.", texte: "Fin de près de mille ans d'histoire" },
            ],
          },
          {
            type: "paragraphe",
            text: "Commerce, **islam** et stabilité politique montrent que les grands États africains dépassaient le seul Sahel de l'Ouest.",
          },
          {
            type: "image",
            alt: "Réception d'une mission devant le souverain du Bornou.",
            legende: "La cour du Bornou, gravure publiée en 1826.",
            credit: "Edward Francis Finden / Dixon Denham, domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Council_of_the_Sultan_of_Bornou_1826.jpg",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "Un État durable jusqu'au **XIXᵉ siècle**",
              "Commerce et diffusion de l'**islam**",
              "Une puissance du Soudan central",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-10-kanem-bornou-quiz-1",
        question: "Autour de quel lac s'est développé l'empire du Kanem-Bornou ?",
        options: ["Le lac Victoria", "Le lac Tchad", "Le lac Tanganyika", "Le lac Malawi"],
        correctIndex: 1,
        explanation: "L'empire s'est développé autour du lac Tchad, au cœur du Soudan central, à partir du IXᵉ siècle.",
      },
      {
        id: "course-histoire-10-kanem-bornou-quiz-2",
        question: "Qu'a de remarquable la dynastie des Sayfawa ?",
        options: ["Elle a régné près de mille ans", "Elle n'a duré que dix ans", "Elle était grecque", "Elle refusait le commerce"],
        correctIndex: 0,
        explanation: "La dynastie Sayfawa est l'une des plus durables de l'histoire mondiale, avec près de mille ans de règne — Europe et Asie comprises.",
      },
      {
        id: "course-histoire-10-kanem-bornou-quiz-3",
        question: "Sous quel souverain l'empire du Kanem-Bornou a-t-il atteint son apogée ?",
        options: ["Sonni Ali Ber", "Idris Alooma", "Ezana", "Soundiata"],
        correctIndex: 1,
        explanation: "Le mai Idris Alooma, à la fin du XVIᵉ siècle, marqua l'apogée du Kanem-Bornou, y compris par ses relations diplomatiques avec l'Empire ottoman.",
      },
      {
        id: "course-histoire-10-kanem-bornou-quiz-4",
        question: "Quelle innovation militaire Idris Alooma a-t-il introduite ?",
        options: ["Les chars de guerre", "Les armes à feu (mousquetaires)", "Les éléphants de combat", "Les navires de guerre"],
        correctIndex: 1,
        explanation: "Idris Alooma modernisa l'armée en introduisant des mousquetaires et des armes à feu, aux côtés d'une justice renforcée par la loi islamique.",
      },
      {
        id: "course-histoire-10-kanem-bornou-quiz-5",
        question: "Quelle religion les souverains du Kanem ont-ils adoptée vers le XIᵉ siècle ?",
        options: ["Le christianisme", "L'islam", "Le judaïsme", "Le bouddhisme"],
        correctIndex: 1,
        explanation: "Vers le XIᵉ siècle, les mai du Kanem adoptèrent l'islam, renforçant leurs liens avec le monde musulman.",
      },
    ],
  },
  {
    id: "course-histoire-11-cites-etats-haoussa",
    categoryId: "histoire",
    emoji: "🏙️",
    title: "Cités haoussa",
    description: "Dans le nord de l'actuel Nigeria, un réseau de cités marchandes prospères — Kano, Katsina, Zaria — a rayonné par le commerce, l'artisanat et le savoir, sans jamais former un empire unique.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-11-cites-etats-haoussa-lesson-1",
        title: "Sept cités, aucun empire",
        blocks: [
          {
            type: "paragraphe",
            text: "Les **Haoussa** bâtissent des cités fortifiées, indépendantes et rivales.",
          },
          {
            type: "chiffreCle",
            valeur: "7",
            legende: "cités-États haoussa (Hausa Bakwai)",
          },
          {
            type: "paragraphe",
            text: "**Kano**, Katsina et Zaria appartiennent aux sept États traditionnels. Chaque cité possède son souverain, le sarki.",
          },
          {
            type: "image",
            alt: "Ancienne porte dans les fortifications de Kano.",
            legende: "Ancienne porte de Kano, photographie de 2008.",
            credit: "Eugene Kim, CC BY 2.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Old_Kano_Gate_(2626710967).jpg",
            licenseUrl: "https://creativecommons.org/licenses/by/2.0",
          },
          {
            type: "aRetenir",
            points: [
              "**7** cités-États : les « vrais États haoussa » (Hausa Bakwai)",
              "**Kano**, Katsina, Zaria : parmi les plus connues",
              "Chaque cité fortifiée, gouvernée par un sarki",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Contrairement au Ghana, au Mali ou au Songhaï, les Haoussa n'ont jamais formé un empire unique — leur force venait de ce réseau de cités indépendantes.",
          },
        ],
      },
      {
        id: "course-histoire-11-cites-etats-haoussa-lesson-2",
        title: "Le commerce et l'artisanat",
        blocks: [
          {
            type: "paragraphe",
            text: "À **Kano**, des fosses de teinture séculaires servent encore aujourd'hui.",
          },
          {
            type: "chiffreCle",
            valeur: "3",
            legende: "savoir-faire qui firent la réputation de Kano",
          },
          {
            type: "paragraphe",
            text: "Entre le Sahara et les régions forestières, les cités haoussa prospèrent grâce au commerce. Kano est réputée pour ses textiles, son cuir et sa teinture à l'**indigo**.",
          },
          {
            type: "image",
            alt: "Artisans battant des tissus teints à Kano.",
            legende: "Artisans de Kano battant des tissus teints, photographie de 2018.",
            credit: "Solasly, CC BY-SA 4.0, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Kofar_Mata_Dye_pit_workers_beating_dye_clothes.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
          },
          {
            type: "aRetenir",
            points: [
              "**Kano** : textiles, cuir, teinture à l'indigo",
              "Une position charnière entre Sahara et régions forestières",
              "Des produits haoussa recherchés dans tout le Soudan",
            ],
          },
        ],
      },
      {
        id: "course-histoire-11-cites-etats-haoussa-lesson-3",
        title: "Islam et savoir",
        blocks: [
          {
            type: "paragraphe",
            text: "L'islam n'a pas conquis les cités **haoussa** par les armes. Il s'est installé, siècle après siècle, dans les écoles et les cours royales.",
          },
          {
            type: "chiffreCle",
            valeur: "XIVe siècle",
            legende: "l'islam se diffuse parmi les élites haoussa",
          },
          {
            type: "paragraphe",
            text: "Les cités deviennent des centres d'administration et de **savoir islamique**, avec leurs écoles et leurs lettrés. La religion nouvelle se mêle longtemps aux croyances traditionnelles, avant de s'imposer plus fortement.",
          },
          {
            type: "citation",
            texte: "Lis, au nom de ton Seigneur qui a créé.",
            auteur: "Coran, sourate 96 (Iqra)",
          },
          {
            type: "aRetenir",
            points: [
              "**XIVᵉ siècle** : l'islam se diffuse parmi les élites",
              "Des écoles et des lettrés dans les cités haoussa",
              "Longue coexistence entre islam et croyances traditionnelles",
            ],
          },
        ],
      },
      {
        id: "course-histoire-11-cites-etats-haoussa-lesson-4",
        title: "Rivalités et rayonnement culturel",
        blocks: [
          {
            type: "paragraphe",
            text: "Les cités haoussa rivalisent pour contrôler les échanges. Leur autonomie varie selon les rapports de force avec les empires voisins.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XVe-XVIe s.", texte: "Domination songhaïe sur certaines cités" },
              { date: "XVIe-XVIIe s.", texte: "Influence du Kanem-Bornou" },
              { date: "XXIe s.", texte: "Le haoussa, langue de commerce vivante" },
            ],
          },
          {
            type: "paragraphe",
            text: "Le **Songhaï** et le **Kanem-Bornou** exercent leur influence sur ces villes. Au-delà des changements de domination, les réseaux marchands diffusent la langue haoussa, comprise sur de vastes territoires : cet héritage commercial relie durablement les populations de l'Afrique de l'Ouest.",
          },
          {
            type: "aRetenir",
            points: [
              "Dominées tour à tour par le Songhaï et le Kanem-Bornou",
              "Une grande vitalité culturelle malgré les rivalités",
              "Le haoussa, langue de commerce sur de vastes territoires",
            ],
          },
        ],
      },
      {
        id: "course-histoire-11-cites-etats-haoussa-lesson-5",
        title: "Le jihad de 1804",
        blocks: [
          {
            type: "paragraphe",
            text: "Au début du XIXᵉ siècle, un seul homme unifie par la réforme religieuse ce que des siècles de rivalité n'avaient jamais réuni.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XIVe s.", texte: "L'islam s'installe dans les cités haoussa" },
              { date: "1804", texte: "Jihad d'Ousman dan Fodio" },
              { date: "XIXe s.", texte: "Califat de Sokoto, nouvel ensemble politique" },
            ],
          },
          {
            type: "paragraphe",
            text: "Le réformateur peul **Ousman dan Fodio** lance en 1804 un jihad qui unifie une grande partie du pays haoussa dans un vaste État : le califat de **Sokoto**. Leur héritage — langue, culture urbaine, artisanat — reste central dans le Nigeria contemporain.",
          },
          {
            type: "aRetenir",
            points: [
              "**1804** : jihad d'Ousman dan Fodio",
              "Naissance du califat de Sokoto",
              "Un héritage toujours vivant : langue, culture urbaine, artisanat",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-11-cites-etats-haoussa-quiz-1",
        question: "Comment étaient organisés les Haoussa ?",
        options: ["En un seul grand empire centralisé", "En plusieurs cités-États rivales", "En tribus nomades sans villes", "En royaume insulaire"],
        correctIndex: 1,
        explanation: "Les Haoussa formaient un réseau de sept cités-États (Kano, Katsina, Zaria…), pas un empire unique — à la différence du Ghana, du Mali ou du Songhaï.",
      },
      {
        id: "course-histoire-11-cites-etats-haoussa-quiz-2",
        question: "Pour quel artisanat la ville de Kano est-elle réputée ?",
        options: ["La sculpture sur glace", "Les textiles et la teinture à l'indigo", "La porcelaine", "La construction navale"],
        correctIndex: 1,
        explanation: "Kano était réputée pour ses textiles, son cuir et ses fosses de teinture à l'indigo, encore visibles aujourd'hui.",
      },
      {
        id: "course-histoire-11-cites-etats-haoussa-quiz-3",
        question: "Dans quelle région se trouvaient les cités haoussa ?",
        options: ["Le nord de l'actuel Nigeria", "Le sud de l'Égypte", "La côte swahilie", "L'Afrique australe"],
        correctIndex: 0,
        explanation: "Les cités haoussa se situaient dans le nord de l'actuel Nigeria et du Niger.",
      },
      {
        id: "course-histoire-11-cites-etats-haoussa-quiz-4",
        question: "Qui a lancé le jihad de 1804 qui aboutit au califat de Sokoto ?",
        options: ["Askia Mohammed", "Ousman dan Fodio", "Soundiata Keïta", "Idris Alooma"],
        correctIndex: 1,
        explanation: "Le réformateur peul Ousman dan Fodio lança le jihad de 1804, fondant le califat de Sokoto et unifiant une grande partie du pays haoussa.",
      },
      {
        id: "course-histoire-11-cites-etats-haoussa-quiz-5",
        question: "Quel rôle particulier joue la langue haoussa ?",
        options: ["C'est une langue morte", "C'est une grande langue de commerce", "C'est une langue uniquement religieuse", "C'est une langue européenne"],
        correctIndex: 1,
        explanation: "Le haoussa est devenu une importante langue de commerce, comprise sur de vastes territoires — un rôle qu'il joue encore aujourd'hui.",
      },
    ],
  },
  {
    id: "course-histoire-12-royaume-benin-bronzes",
    categoryId: "histoire",
    emoji: "🎭",
    title: "Royaume du Bénin",
    description: "Dans la forêt de l'actuel Nigeria, le royaume du Bénin a produit un art de cour d'une finesse exceptionnelle : les célèbres bronzes du Bénin, aujourd'hui au cœur d'un grand débat sur la restitution.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-12-royaume-benin-bronzes-lesson-1",
        title: "Pas la République du Bénin",
        blocks: [
          {
            type: "paragraphe",
            text: "Il porte le même nom qu'un pays voisin, mais n'a jamais eu de frontière commune avec lui. Le royaume du Bénin, c'est une tout autre histoire.",
          },
          {
            type: "chiffreCle",
            valeur: "XIe-XIIIe s.",
            legende: "fondation du royaume du Bénin (peuple Edo)",
          },
          {
            type: "paragraphe",
            text: "Il s'agit du royaume du peuple **Edo**, situé dans le sud de l'actuel Nigeria, autour de sa capitale **Benin City**. Ce royaume de la forêt était célèbre pour ses immenses remparts et fossés de terre, parmi les plus vastes ouvrages de ce type au monde.",
          },
          {
            type: "aRetenir",
            points: [
              "Le royaume du Bénin (Edo) : différent de la République du Bénin",
              "Capitale : **Benin City**, dans le sud du Nigeria actuel",
              "Des remparts et fossés de terre, parmi les plus vastes au monde",
            ],
          },
        ],
      },
      {
        id: "course-histoire-12-royaume-benin-bronzes-lesson-2",
        title: "L'Oba et la cour",
        blocks: [
          {
            type: "paragraphe",
            text: "L’**Oba** est à la fois souverain politique et figure sacrée.",
          },
          {
            type: "chiffreCle",
            valeur: "XVe-XVIIe s.",
            legende: "l'apogée du royaume du Bénin",
          },
          {
            type: "paragraphe",
            text: "Sa cour rassemble des artisans organisés en corporations. Sous **Ewuare le Grand**, réformes et conquêtes renforcent le royaume.",
          },
          {
            type: "image",
            alt: "Plaque de bronze : l'oba à cheval, entouré de serviteurs.",
            legende: "Plaque du Bénin représentant l’Oba à cheval, XVIᵉ–XVIIᵉ siècles.",
            credit: "The Metropolitan Museum of Art, CC0, WebP",
            sourceUrl: "https://www.metmuseum.org/art/collection/search/310752",
            licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "L'**Oba** : roi à la fois politique et sacré",
              "**Ewuare le Grand** : réformateur et conquérant",
              "Un État centralisé, organisé et puissant",
            ],
          },
        ],
      },
      {
        id: "course-histoire-12-royaume-benin-bronzes-lesson-3",
        title: "Les bronzes du Bénin",
        blocks: [
          {
            type: "paragraphe",
            text: "La **cire perdue** permet de couler le **laiton**.",
          },
          {
            type: "chiffreCle",
            valeur: "Laiton",
            legende: "le vrai métal des « bronzes » du Bénin",
          },
          {
            type: "paragraphe",
            text: "Ces œuvres du palais représentaient rois et courtisans. Les fondeurs transmettaient leur savoir-faire.",
          },
          {
            type: "citation",
            texte: "Benvenuto Cellini lui-même n'aurait pu réaliser un meilleur moulage.",
            auteur: "Felix von Luschan, ethnologue allemand",
          },
          {
            type: "image",
            alt: "Plaque en laiton montrant un chef guerrier et ses accompagnateurs.",
            legende: "Plaque en laiton du Bénin, chef guerrier et accompagnateurs, XVIᵉ siècle.",
            credit: "The Metropolitan Museum of Art, CC0, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Plaque-_Warrior_and_Attendants_MET_DT1231.jpg",
            licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "Des « bronzes » en réalité surtout en **laiton**",
              "Réalisés selon la technique de la cire perdue",
              "Un savoir-faire transmis de génération en génération de fondeurs",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Ces œuvres servaient aussi d'archives visuelles du royaume.",
          },
        ],
      },
      {
        id: "course-histoire-12-royaume-benin-bronzes-lesson-4",
        title: "Le commerce avec les Européens",
        blocks: [
          {
            type: "paragraphe",
            text: "Dès la fin du **XVᵉ siècle**, des navires européens accostent sur les côtes du Bénin. Le royaume, lui, impose ses propres règles du jeu.",
          },
          {
            type: "chiffreCle",
            valeur: "fin XVe s.",
            legende: "début du commerce entre le Bénin et le Portugal",
          },
          {
            type: "paragraphe",
            text: "Le Bénin commerce avec les **Portugais**, puis d'autres Européens : poivre, ivoire, objets d'art, mais aussi, malheureusement, des êtres humains réduits en esclavage. Le royaume, puissant, contrôle les termes de ces échanges et reste maître chez lui.",
          },
          {
            type: "aRetenir",
            points: [
              "Commerce avec les **Portugais** dès la fin du XVᵉ siècle",
              "Poivre, ivoire, objets d'art — et, tragiquement, des captifs",
              "Le Bénin contrôle les termes de l'échange, reste maître chez lui",
            ],
          },
        ],
      },
      {
        id: "course-histoire-12-royaume-benin-bronzes-lesson-5",
        title: "Le pillage de 1897",
        blocks: [
          {
            type: "paragraphe",
            text: "En **1897**, une expédition militaire britannique met à sac Benin City. Des milliers d'œuvres d'art quittent alors le royaume, de force.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XIe-XIIIe s.", texte: "Fondation du royaume du Bénin" },
              { date: "1897", texte: "Pillage de Benin City par les Britanniques" },
              { date: "XXIe s.", texte: "Débats et premières restitutions" },
            ],
          },
          {
            type: "paragraphe",
            text: "Ce pillage est aujourd'hui au cœur d'un grand débat sur la **restitution** des œuvres d'art africaines : certaines pièces ont récemment été rendues. Les bronzes du Bénin restent un symbole du génie artistique africain et des injustices de la période coloniale.",
          },
          {
            type: "aRetenir",
            points: [
              "**1897** : pillage de Benin City par une expédition britannique",
              "Des milliers de bronzes dispersés dans les musées occidentaux",
              "Un symbole du génie africain, et du débat sur la restitution",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-12-royaume-benin-bronzes-quiz-1",
        question: "Où se situait le royaume du Bénin (Edo) ?",
        options: ["Dans l'actuelle République du Bénin", "Dans le sud de l'actuel Nigeria", "En Afrique du Sud", "Au bord du lac Tchad"],
        correctIndex: 1,
        explanation: "Le royaume du Bénin (peuple Edo, capitale Benin City) se trouvait dans le sud de l'actuel Nigeria, à ne pas confondre avec la République du Bénin.",
      },
      {
        id: "course-histoire-12-royaume-benin-bronzes-quiz-2",
        question: "Comment appelait-on le roi du Bénin ?",
        options: ["L'Oba", "Le Mansa", "Le Pharaon", "L'Alaafin"],
        correctIndex: 0,
        explanation: "Le souverain du royaume du Bénin portait le titre d'Oba ; le royaume atteignit son apogée sous l'Oba Ewuare le Grand.",
      },
      {
        id: "course-histoire-12-royaume-benin-bronzes-quiz-3",
        question: "Selon quelle technique les bronzes du Bénin étaient-ils réalisés ?",
        options: ["Le soufflage du verre", "La cire perdue", "La sculpture sur bois", "La poterie tournée"],
        correctIndex: 1,
        explanation: "Les bronzes (en réalité surtout en laiton) étaient coulés selon la technique de la cire perdue, un savoir-faire transmis de génération en génération.",
      },
      {
        id: "course-histoire-12-royaume-benin-bronzes-quiz-4",
        question: "Que s'est-il passé à Benin City en 1897 ?",
        options: ["La ville fut agrandie", "Une expédition britannique la pilla", "Elle devint la capitale du Mali", "Elle fut engloutie par la mer"],
        correctIndex: 1,
        explanation: "En 1897, une expédition punitive britannique mit à sac la ville et pilla des milliers de bronzes, aujourd'hui dispersés dans les musées occidentaux.",
      },
      {
        id: "course-histoire-12-royaume-benin-bronzes-quiz-5",
        question: "De quel grand débat actuel les bronzes du Bénin sont-ils le symbole ?",
        options: ["Le débat sur la restitution des œuvres d'art africaines", "Le débat sur le climat", "Le débat sur l'espace", "Le débat sur l'agriculture"],
        correctIndex: 0,
        explanation: "Les bronzes du Bénin sont au cœur du débat sur la restitution des œuvres pillées durant la colonisation ; certaines pièces ont récemment été rendues.",
      },
    ],
  },
  {
    id: "course-histoire-13-empire-oyo-yoruba",
    categoryId: "histoire",
    emoji: "🐴",
    title: "Oyo et les Yoruba",
    description: "Puissance de cavalerie de l'Afrique de l'Ouest, l'empire Oyo domina le pays yoruba grâce à un système politique équilibré et à une culture d'une richesse mondiale.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-13-empire-oyo-yoruba-lesson-1",
        title: "Le pays yoruba",
        blocks: [
          {
            type: "paragraphe",
            text: "Selon la tradition, le monde yoruba serait né à **Ilé-Ifè**.",
          },
          {
            type: "chiffreCle",
            valeur: "2",
            legende: "matières des célèbres têtes d'Ifè (terre cuite, bronze)",
          },
          {
            type: "paragraphe",
            text: "Les **Yoruba**, au sud-ouest du Nigeria et à l'est du Bénin actuels, s'organisent en cités et royaumes. Ilé-Ifè en est le cœur spirituel, célèbre aussi pour ses têtes sculptées.",
          },
          {
            type: "image",
            alt: "Tête masculine d’Ifè en terre cuite, avec des lignes incisées sur le visage.",
            legende: "Tête d’Ifè en terre cuite, XIIᵉ–XIVᵉ siècles, photographiée au musée.",
            credit: "Jastrow, domaine public, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Ife_sculpture_Inv.A96-1-4.jpg",
            licenseUrl: "https://commons.wikimedia.org/wiki/File:Ife_sculpture_Inv.A96-1-4.jpg#Licensing",
          },
          {
            type: "aRetenir",
            points: [
              "**Ilé-Ifè** : le cœur spirituel du monde yoruba",
              "Des têtes de terre cuite et de bronze, d'un réalisme saisissant",
              "Les Yoruba, organisés en de nombreuses cités et royaumes",
            ],
          },
        ],
      },
      {
        id: "course-histoire-13-empire-oyo-yoruba-lesson-2",
        title: "La montée d'Oyo",
        blocks: [
          {
            type: "paragraphe",
            text: "Oyo s’impose grâce à sa **cavalerie**, entre les XVe et XVIIe siècles.",
          },
          {
            type: "chiffreCle",
            valeur: "XVe-XVIIe s.",
            legende: "Oyo s'impose comme la grande puissance yoruba",
          },
          {
            type: "paragraphe",
            text: "Les chevaux viennent du nord. Depuis **Oyo-Ilé**, l’empire domine les plaines de savane et contrôle des routes commerciales.",
          },
          {
            type: "image",
            alt: "Plan situant Oyo-Ilé et le secteur royal de Bara.",
            legende: "Oyo-Ilé et Bara : plan archéologique du centre politique d’Oyo.",
            credit: "Akinwumi Ogundiran, CC0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Map_of_the_metropolitan_area_of_the_Oyo_Empire_showing_Oyo-Ile_and_Old_Bara_(the_royal_suburb).png",
            licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
          },
          {
            type: "aRetenir",
            points: [
              "**XVe-XVIIe siècle** : Oyo, grande puissance yoruba",
              "Une cavalerie, arme rare dans la région forestière",
              "Capitale : **Oyo-Ilé**",
            ],
          },
        ],
      },
      {
        id: "course-histoire-13-empire-oyo-yoruba-lesson-3",
        title: "Un pouvoir équilibré",
        blocks: [
          {
            type: "paragraphe",
            text: "Un roi qui peut être destitué par ses propres conseillers : dans l'Afrique de l'Ouest précoloniale, Oyo avait déjà inventé la limitation du pouvoir.",
          },
          {
            type: "citation",
            texte: "Un roi n'est fort que par le conseil de son peuple.",
            auteur: "Proverbe yoruba",
          },
          {
            type: "paragraphe",
            text: "Le roi, l'**Alaafin**, ne gouverne pas seul : il est contrôlé par un conseil de notables, l'**Oyo Mesi**, et par des sociétés comme les Ogboni. Le chef du conseil, le Bashorun, peut même contraindre un roi jugé mauvais à abdiquer.",
          },
          {
            type: "aRetenir",
            points: [
              "L'**Alaafin** ne gouverne pas seul, contrôlé par l'Oyo Mesi",
              "Le Bashorun peut contraindre un roi mauvais à abdiquer",
              "Un exemple précoce de limitation du pouvoir royal",
            ],
          },
        ],
      },
      {
        id: "course-histoire-13-empire-oyo-yoruba-lesson-4",
        title: "Puissance et commerce",
        blocks: [
          {
            type: "paragraphe",
            text: "Grâce à son armée et à sa position, un empire de l'intérieur des terres a fini par imposer sa loi jusque sur la côte.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XVIIe s.", texte: "Oyo contrôle les routes commerciales de l'intérieur" },
              { date: "XVIIIe s.", texte: "Le Dahomey devient tributaire d'Oyo" },
              { date: "XVIIIe-XIXe s.", texte: "Oyo, acteur du commerce atlantique" },
            ],
          },
          {
            type: "paragraphe",
            text: "Grâce à son armée et à sa position, Oyo contrôle d'importantes **routes commerciales** et étend son influence jusqu'à la côte, faisant même du royaume voisin du **Dahomey** un tributaire à certaines périodes.",
          },
          {
            type: "aRetenir",
            points: [
              "Oyo contrôle d'importantes routes commerciales de l'intérieur",
              "Le **Dahomey**, tributaire d'Oyo à certaines périodes",
              "Une participation au commerce régional et atlantique",
            ],
          },
        ],
      },
      {
        id: "course-histoire-13-empire-oyo-yoruba-lesson-5",
        title: "Déclin et héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Un empire peut s'effondrer. Une culture, elle, peut traverser un océan et continuer de vivre, des siècles plus tard, à des milliers de kilomètres.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XVe-XVIIe s.", texte: "Apogée d'Oyo, grande puissance yoruba" },
              { date: "début XIXe s.", texte: "Déclin : guerres civiles, pression des jihads" },
              { date: "XIXe-XXe s.", texte: "La culture yoruba rayonne via la diaspora" },
            ],
          },
          {
            type: "paragraphe",
            text: "Au début du **XIXᵉ siècle**, Oyo décline, miné par des guerres civiles et la pression des jihads venus du nord. Mais la **culture yoruba** ne disparaît pas : elle rayonne dans le monde entier, notamment à travers la diaspora issue de la traite, jusqu'aux Amériques.",
          },
          {
            type: "aRetenir",
            points: [
              "**XIXᵉ siècle** : déclin d'Oyo, guerres civiles et jihads",
              "La culture yoruba rayonne à travers la diaspora",
              "Religion et arts yoruba, encore bien vivants aux Amériques",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-13-empire-oyo-yoruba-quiz-1",
        question: "Quelle ville est considérée comme le berceau spirituel du monde yoruba ?",
        options: ["Ilé-Ifè", "Kumasi", "Abomey", "Gao"],
        correctIndex: 0,
        explanation: "Ilé-Ifè est le cœur spirituel des Yoruba et un grand centre artistique (têtes de bronze et terre cuite d'un réalisme saisissant).",
      },
      {
        id: "course-histoire-13-empire-oyo-yoruba-quiz-2",
        question: "Sur quelle force militaire reposait la puissance d'Oyo ?",
        options: ["La marine de guerre", "La cavalerie", "Les éléphants de combat", "Les archers à pied"],
        correctIndex: 1,
        explanation: "La cavalerie d'Oyo, montée sur des chevaux venus du nord, lui permettait de dominer les plaines de savane depuis sa capitale, Oyo-Ilé.",
      },
      {
        id: "course-histoire-13-empire-oyo-yoruba-quiz-3",
        question: "Comment s'appelait le roi d'Oyo ?",
        options: ["L'Oba", "L'Alaafin", "Le Mansa", "L'Asantehene"],
        correctIndex: 1,
        explanation: "Le souverain d'Oyo portait le titre d'Alaafin.",
      },
      {
        id: "course-histoire-13-empire-oyo-yoruba-quiz-4",
        question: "Qu'est-ce qui rend le système politique d'Oyo remarquable ?",
        options: ["Le roi avait tous les pouvoirs sans contrôle", "Le pouvoir du roi était limité par un conseil (Oyo Mesi)", "Il n'y avait pas de roi du tout", "Le pouvoir était héréditaire chez les marchands"],
        correctIndex: 1,
        explanation: "L'Alaafin était contrôlé par l'Oyo Mesi et les sociétés Ogboni ; le Bashorun pouvait même l'obliger à abdiquer — un exemple précoce de limitation du pouvoir.",
      },
      {
        id: "course-histoire-13-empire-oyo-yoruba-quiz-5",
        question: "Comment la culture yoruba a-t-elle survécu au déclin d'Oyo ?",
        options: ["Elle a totalement disparu", "Elle a rayonné dans le monde via la diaspora", "Elle a été interdite partout", "Elle s'est limitée à une seule ville"],
        correctIndex: 1,
        explanation: "La culture yoruba (religion, arts) s'est diffusée mondialement, notamment via la diaspora issue de la traite, jusqu'aux Amériques.",
      },
    ],
  },
  {
    id: "course-histoire-14-royaume-ashanti",
    categoryId: "histoire",
    emoji: "🪙",
    title: "Royaume ashanti",
    description: "Au cœur de l'actuel Ghana, la confédération ashanti a bâti un puissant royaume de l'or, uni par un symbole sacré : le Tabouret d'or.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-14-royaume-ashanti-lesson-1",
        title: "La naissance de la confédération",
        blocks: [
          {
            type: "paragraphe",
            text: "Des clans dispersés, un seul roi, et une capitale nouvelle : en quelques années, un peuple change complètement d'échelle.",
          },
          {
            type: "chiffreCle",
            valeur: "fin XVIIe s.",
            legende: "Osei Tutu unifie les clans ashanti",
          },
          {
            type: "paragraphe",
            text: "Les **Ashanti** (Asante), un peuple akan, vivent au centre de l'actuel Ghana. Le roi **Osei Tutu** unifie les différents clans en une puissante confédération, avec pour capitale **Kumasi**.",
          },
          {
            type: "aRetenir",
            points: [
              "**Osei Tutu** unifie les clans ashanti, fin XVIIᵉ siècle",
              "Capitale : **Kumasi**",
              "L'un des États les plus organisés et redoutés de la région",
            ],
          },
        ],
      },
      {
        id: "course-histoire-14-royaume-ashanti-lesson-2",
        title: "Le Tabouret d'or",
        blocks: [
          {
            type: "paragraphe",
            text: "Un trône que personne, pas même le roi, n'a le droit de toucher. Ce paradoxe est au cœur de l'unité ashanti.",
          },
          {
            type: "chiffreCle",
            valeur: "0",
            legende: "personne ne peut s'asseoir sur le Tabouret d'or",
          },
          {
            type: "paragraphe",
            text: "Selon la tradition, le **Tabouret d'or** (Sika Dwa) descendit du ciel, invoqué par le prêtre **Okomfo Anokye**, pour incarner l'âme même de la nation ashanti. Ce tabouret unit spirituellement tout le peuple : y toucher, c'est toucher à l'existence de la nation.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **Tabouret d'or** (Sika Dwa) incarne l'âme de la nation",
              "Selon la tradition, invoqué du ciel par Okomfo Anokye",
              "Nul, pas même le roi, ne peut s'y asseoir",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Le Tabouret d'or n'est ni un trône ni un objet de pouvoir personnel : c'est un symbole si sacré qu'il possède, dans la tradition ashanti, sa propre âme.",
          },
        ],
      },
      {
        id: "course-histoire-14-royaume-ashanti-lesson-3",
        title: "L'or et le commerce",
        blocks: [
          {
            type: "paragraphe",
            text: "Les Européens nomment cette région la Côte de l'Or.",
          },
          {
            type: "chiffreCle",
            valeur: "Côte de l'Or",
            legende: "surnom européen de la région, riche en or",
          },
          {
            type: "paragraphe",
            text: "Les Ashanti commercent l'or et des captifs avec les Européens du littoral. Leur royaume possède administration, armée et culture de cour : étoffes **kente**, symboles **adinkra** et objets en or.",
          },
          {
            type: "image",
            alt: "Ornement royal ashanti en or, en forme de lion.",
            legende: "Lion en or, ornement royal ashanti du XIXᵉ siècle.",
            credit: "The Metropolitan Museum of Art, CC0, Commons",
            sourceUrl: "https://www.metmuseum.org/art/collection/search/312428",
            licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "La région surnommée « Côte de l'Or » par les Européens",
              "Or, mais aussi, comme d'autres États côtiers, des captifs",
              "Une riche culture de cour : kente, symboles adinkra",
            ],
          },
        ],
      },
      {
        id: "course-histoire-14-royaume-ashanti-lesson-4",
        title: "Les guerres anglo-ashanti",
        blocks: [
          {
            type: "paragraphe",
            text: "Les **Ashanti** résistent longtemps aux ambitions coloniales britanniques.",
          },
          {
            type: "chiffreCle",
            valeur: "XIXe siècle",
            legende: "les guerres anglo-ashanti",
          },
          {
            type: "paragraphe",
            text: "Les **Britanniques** convoitent leur territoire. Plusieurs guerres les opposent au royaume, qui inflige parfois de lourdes pertes à l’envahisseur avant de céder devant sa supériorité militaire.",
          },
          {
            type: "aRetenir",
            points: [
              "**XIXᵉ siècle** : une série de guerres anglo-ashanti",
              "Une résistance farouche, pendant des décennies",
              "La supériorité militaire britannique finit par l'emporter",
            ],
          },
        ],
      },
      {
        id: "course-histoire-14-royaume-ashanti-lesson-5",
        title: "Yaa Asantewaa et l'héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "En **1900**, alors que les hommes hésitaient, une reine-mère a pris seule la tête d'un dernier soulèvement.",
          },
          {
            type: "frise",
            evenements: [
              { date: "fin XVIIe s.", texte: "Naissance de la confédération ashanti" },
              { date: "XIXe s.", texte: "Guerres anglo-ashanti" },
              { date: "1900", texte: "Yaa Asantewaa mène la guerre du Tabouret d'or" },
            ],
          },
          {
            type: "paragraphe",
            text: "La reine-mère **Yaa Asantewaa** prend la tête d'un ultime soulèvement, la « guerre du Tabouret d'or ». Malgré la défaite et l'annexion, l'identité ashanti n'a jamais disparu : l'Asantehene (roi) et le Tabouret d'or restent au cœur du Ghana moderne.",
          },
          {
            type: "citation",
            texte: "Si vous, hommes ashanti, refusez d'avancer, alors nous le ferons. Nous, les femmes, combattrons les hommes blancs.",
            auteur: "Yaa Asantewaa, 1900",
          },
          {
            type: "aRetenir",
            points: [
              "**1900** : Yaa Asantewaa mène la « guerre du Tabouret d'or »",
              "Malgré la défaite, l'identité ashanti n'a jamais disparu",
              "Le Tabouret d'or et l'Asantehene, toujours au cœur du Ghana",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-14-royaume-ashanti-quiz-1",
        question: "Qui a unifié les clans ashanti à la fin du XVIIᵉ siècle ?",
        options: ["Osei Tutu", "Béhanzin", "Afonso Iᵉʳ", "Askia Mohammed"],
        correctIndex: 0,
        explanation: "Le roi Osei Tutu unifia les clans en une confédération, avec Kumasi pour capitale.",
      },
      {
        id: "course-histoire-14-royaume-ashanti-quiz-2",
        question: "Que représente le Tabouret d'or pour les Ashanti ?",
        options: ["Un simple siège pour le roi", "L'âme de la nation", "Une monnaie", "Un instrument de musique"],
        correctIndex: 1,
        explanation: "Le Tabouret d'or (Sika Dwa), invoqué du ciel selon la tradition par le prêtre Okomfo Anokye, incarne l'âme de la nation ashanti ; nul ne peut s'y asseoir.",
      },
      {
        id: "course-histoire-14-royaume-ashanti-quiz-3",
        question: "Quel surnom les Européens ont-ils donné à la région ashanti, riche en or ?",
        options: ["La Côte des Épices", "La Côte de l'Or", "La Côte des Esclaves", "La Côte d'Ivoire"],
        correctIndex: 1,
        explanation: "La richesse en or valut à la région le nom de « Côte de l'Or ».",
      },
      {
        id: "course-histoire-14-royaume-ashanti-quiz-4",
        question: "Qui a dirigé la résistance ashanti de 1900 ?",
        options: ["La reine-mère Yaa Asantewaa", "La reine de Saba", "La Candace de Méroé", "La reine Amina"],
        correctIndex: 0,
        explanation: "La reine-mère Yaa Asantewaa mena la « guerre du Tabouret d'or » en 1900, appelant les femmes à combattre là où les hommes hésitaient.",
      },
      {
        id: "course-histoire-14-royaume-ashanti-quiz-5",
        question: "Quelle étoffe traditionnelle est associée aux Ashanti ?",
        options: ["Le kente", "Le tweed", "La soie de Chine", "Le lin égyptien"],
        correctIndex: 0,
        explanation: "Le kente, étoffe tissée aux couleurs vives, est emblématique de la culture ashanti, aux côtés des symboles adinkra.",
      },
    ],
  },
  {
    id: "course-histoire-15-royaume-dahomey",
    categoryId: "histoire",
    emoji: "⚔️",
    title: "Royaume du Dahomey",
    description: "État militaire redouté du golfe de Guinée, le royaume du Dahomey s'est distingué par son armée — dont un célèbre corps de femmes soldats.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-15-royaume-dahomey-lesson-1",
        title: "Un royaume militaire",
        blocks: [
          {
            type: "paragraphe",
            text: "Fondé au XVIIᵉ siècle, ce royaume n'a jamais caché ce qu'il était : un État bâti, dès l'origine, pour la guerre.",
          },
          {
            type: "chiffreCle",
            valeur: "XVIIe siècle",
            legende: "fondation du royaume du Dahomey par le peuple Fon",
          },
          {
            type: "paragraphe",
            text: "Le royaume du Dahomey se situe dans l'actuelle **République du Bénin**. Fondé par le peuple **Fon**, avec pour capitale **Abomey**, c'est un État très centralisé et militarisé. Ses palais royaux, ornés de bas-reliefs, sont aujourd'hui classés au patrimoine mondial de l'UNESCO.",
          },
          {
            type: "aRetenir",
            points: [
              "Le Dahomey, fondé au **XVIIᵉ siècle** par le peuple Fon",
              "Capitale : **Abomey**, dans l'actuelle République du Bénin",
              "Un État très centralisé et militarisé",
            ],
          },
        ],
      },
      {
        id: "course-histoire-15-royaume-dahomey-lesson-2",
        title: "Les « Amazones » du Dahomey",
        blocks: [
          {
            type: "paragraphe",
            text: "Le Dahomey dispose d'un corps de femmes soldats d'élite : les **Agojie**.",
          },
          {
            type: "chiffreCle",
            valeur: "Agojie",
            legende: "le nom réel des guerrières surnommées « Amazones »",
          },
          {
            type: "paragraphe",
            text: "Surnommées « Amazones » par les Européens, ces guerrières entraînées et redoutées forment une part importante de l'**armée royale**.",
          },
          {
            type: "image",
            alt: "Anciennes combattantes du Dahomey sur une carte postale.",
            legende: "Vétéranes du Dahomey à Abomey, carte postale colorisée, 1908.",
            credit: "François-Edmond Fortier, domaine public, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:The_c%C3%A9l%C3%A9bration_at_Abomey(1908)._-_The_veteran_amazones(_AHOSI_)_of_the_Fon_king_B%C3%A9hanzin,_Son_of_Roi_G%C3%A9l%C3%A9.jpg",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "Les **Agojie**, corps de femmes soldats d'élite",
              "Surnommées « Amazones » par les Européens",
              "Un corps militaire féminin extrêmement rare dans l'histoire",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Leur entraînement exigeant stupéfiait les observateurs européens.",
          },
        ],
      },
      {
        id: "course-histoire-15-royaume-dahomey-lesson-3",
        title: "Le roi et le pouvoir",
        blocks: [
          {
            type: "paragraphe",
            text: "À **Abomey**, les murs des palais racontent les règnes.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XVIIIe s.", texte: "Règnes d'Agaja puis de Ghézo" },
              { date: "XIXe s.", texte: "Règne de Glèlè" },
              { date: "fin XIXe s.", texte: "Règne de Béhanzin" },
            ],
          },
          {
            type: "paragraphe",
            text: "Agaja, **Ghézo**, Glèlè et Béhanzin dirigent une monarchie puissante. Les bas-reliefs évoquent les hauts faits des souverains et servent d’archives visuelles.",
          },
          {
            type: "citation",
            texte: "Le roi voit avec les yeux du peuple.",
            auteur: "Proverbe fon",
          },
          {
            type: "image",
            alt: "Mur d’un palais royal d’Abomey avec décors en relief.",
            legende: "Mur d’un palais royal d’Abomey, photographie contemporaine.",
            credit: "Willem Heerbaart, CC BY 2.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Abomey_royal_palace_wall.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by/2.0",
          },
          {
            type: "aRetenir",
            points: [
              "Une monarchie absolue, avec de grandes cérémonies annuelles",
              "Rois marquants : Agaja, Ghézo, Glèlè, **Béhanzin**",
              "Les bas-reliefs d'Abomey, des archives murales du royaume",
            ],
          },
        ],
      },
      {
        id: "course-histoire-15-royaume-dahomey-lesson-4",
        title: "La traite et l'économie",
        blocks: [
          {
            type: "paragraphe",
            text: "Une part de l'économie du royaume a longtemps reposé sur un commerce dont l'histoire reste douloureuse et controversée.",
          },
          {
            type: "chiffreCle",
            valeur: "Ouidah",
            legende: "le port par lequel transitait la traite atlantique",
          },
          {
            type: "paragraphe",
            text: "Une part de l'économie du royaume repose, pendant une période, sur la traite atlantique, via le port de **Ouidah**. Plus tard, le Dahomey se tourne vers le commerce de l'**huile de palme**.",
          },
          {
            type: "aRetenir",
            points: [
              "**Ouidah** : le port par lequel transitait la traite atlantique",
              "Un passé qui rappelle la complexité de cette époque",
              "Plus tard, le royaume se tourne vers l'huile de palme",
            ],
          },
        ],
      },
      {
        id: "course-histoire-15-royaume-dahomey-lesson-5",
        title: "Résistance et héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "À la fin du XIXᵉ siècle, un roi résiste à la conquête française. Sa défaite ne clôt pas l'histoire — elle la transforme.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XVIIe s.", texte: "Fondation du royaume du Dahomey" },
              { date: "1894", texte: "Défaite de Béhanzin, colonisation française" },
              { date: "2021", texte: "Restitution de trésors royaux par la France" },
            ],
          },
          {
            type: "paragraphe",
            text: "Le roi **Béhanzin** résiste à la conquête française, mais est vaincu en 1894 et le Dahomey devient une colonie française. En **2021**, la France restitue au Bénin des trésors royaux pillés durant la conquête. Nous retrouverons Béhanzin dans le cours sur les résistances à la colonisation.",
          },
          {
            type: "aRetenir",
            points: [
              "**1894** : défaite de Béhanzin, colonisation française",
              "**2021** : la France restitue des trésors royaux au Bénin",
              "Les palais d'Abomey, protégés par l'UNESCO",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-15-royaume-dahomey-quiz-1",
        question: "Dans quel pays actuel se trouvait le royaume du Dahomey ?",
        options: ["La République du Bénin", "Le Nigeria", "Le Ghana", "Le Soudan"],
        correctIndex: 0,
        explanation: "Le royaume du Dahomey (peuple Fon, capitale Abomey) se situait dans l'actuelle République du Bénin.",
      },
      {
        id: "course-histoire-15-royaume-dahomey-quiz-2",
        question: "Par quel corps militaire particulier le Dahomey est-il célèbre ?",
        options: ["Ses archers à cheval", "Son corps de femmes soldats (Agojie)", "Sa marine de guerre", "Ses éléphants de combat"],
        correctIndex: 1,
        explanation: "Les Agojie, femmes soldats d'élite surnommées « Amazones » par les Européens, formaient une part importante de l'armée.",
      },
      {
        id: "course-histoire-15-royaume-dahomey-quiz-3",
        question: "Quelle était la capitale du Dahomey ?",
        options: ["Ouidah", "Abomey", "Kumasi", "Benin City"],
        correctIndex: 1,
        explanation: "La capitale du royaume était Abomey, dont les palais ornés de bas-reliefs sont classés par l'UNESCO.",
      },
      {
        id: "course-histoire-15-royaume-dahomey-quiz-4",
        question: "Quel roi du Dahomey a résisté à la conquête française ?",
        options: ["Béhanzin", "Osei Tutu", "Ezana", "Sonni Ali"],
        correctIndex: 0,
        explanation: "Le roi Béhanzin résista aux Français avant d'être vaincu en 1894.",
      },
      {
        id: "course-histoire-15-royaume-dahomey-quiz-5",
        question: "Qu'a fait la France en 2021 concernant le Dahomey ?",
        options: ["Elle a recolonisé la région", "Elle a restitué des trésors royaux pillés", "Elle a détruit les palais d'Abomey", "Elle a interdit la langue fon"],
        correctIndex: 1,
        explanation: "En 2021, la France a restitué au Bénin des trésors royaux pillés durant la conquête de 1894.",
      },
    ],
  },
  {
    id: "course-histoire-16-royaume-kongo",
    categoryId: "histoire",
    emoji: "✝️",
    title: "Royaume du Kongo",
    description: "Vaste et bien organisé, le royaume du Kongo fut l'un des premiers États africains à nouer des relations diplomatiques d'égal à égal avec l'Europe — avant d'être miné par la traite.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-16-royaume-kongo-lesson-1",
        title: "Un grand royaume d'Afrique centrale",
        blocks: [
          {
            type: "paragraphe",
            text: "Le **Kongo** est un État organisé avant l’arrivée des Européens.",
          },
          {
            type: "chiffreCle",
            valeur: "XIVe siècle",
            legende: "fondation du royaume du Kongo",
          },
          {
            type: "paragraphe",
            text: "Autour du bas **Congo**, il couvre des territoires des actuels Angola, Congo et RD Congo. Sa capitale est Mbanza-Kongo ; ses provinces utilisent notamment les coquillages nzimbu comme monnaie.",
          },
          {
            type: "image",
            alt: "Carte ancienne du royaume du Kongo et de ses provinces.",
            legende: "Le royaume du Kongo sur une carte de 1648.",
            credit: "Nerika, CC BY-SA 3.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Lossy-page1-1171px-Kongo_1648_coloured.png",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
          },
          {
            type: "aRetenir",
            points: [
              "Fondé vers le **XIVᵉ siècle**, autour du fleuve Congo",
              "Capitale : **Mbanza-Kongo**, classée par l'UNESCO",
              "Une monnaie de coquillages, les nzimbu",
            ],
          },
        ],
      },
      {
        id: "course-histoire-16-royaume-kongo-lesson-2",
        title: "La rencontre avec le Portugal",
        blocks: [
          {
            type: "paragraphe",
            text: "Un premier contact entre l'Afrique centrale et l'Europe qui ne commence ni par une bataille, ni par une conquête — mais par une ambassade.",
          },
          {
            type: "chiffreCle",
            valeur: "1483",
            legende: "des navigateurs portugais atteignent le royaume du Kongo",
          },
          {
            type: "paragraphe",
            text: "Contrairement à une simple conquête, s'établissent d'abord des relations diplomatiques. Le roi du **Kongo** échange ambassades et courriers avec le souverain du **Portugal**, entamant une relation d'État à État.",
          },
          {
            type: "aRetenir",
            points: [
              "**1483** : des navigateurs portugais atteignent le Kongo",
              "Des relations diplomatiques, pas une conquête immédiate",
              "Échanges d'ambassades et de courriers, d'État à État",
            ],
          },
        ],
      },
      {
        id: "course-histoire-16-royaume-kongo-lesson-3",
        title: "Afonso Iᵉʳ et le christianisme",
        blocks: [
          {
            type: "paragraphe",
            text: "Sous **Afonso Ier**, le christianisme prend une place centrale.",
          },
          {
            type: "chiffreCle",
            valeur: "1509-1543",
            legende: "le règne d'Afonso Iᵉʳ (Nzinga Mbemba)",
          },
          {
            type: "paragraphe",
            text: "Le roi échange avec le Portugal et Rome. Des artistes **kongo** adaptent les formes chrétiennes, comme ce crucifix.",
          },
          {
            type: "image",
            alt: "Crucifix en métal réalisé dans le royaume du Kongo.",
            legende: "Crucifix kongo, XVIᵉ–XVIIᵉ siècles, collection du Met.",
            credit: "The Metropolitan Museum of Art, CC0, WebP",
            sourceUrl: "https://www.metmuseum.org/art/collection/search/318323",
            licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
          },
          {
            type: "aRetenir",
            points: [
              "**Afonso Iᵉʳ** (1509-1543) fait du christianisme la religion d'État",
              "Correspond d'égal à égal avec le Portugal et le pape",
              "Envoie des jeunes Kongo étudier en Europe",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Afonso Iᵉʳ ne s'est pas contenté d'adopter le christianisme : il l'a fait sien, au point de discuter théologie directement avec le pape.",
          },
        ],
      },
      {
        id: "course-histoire-16-royaume-kongo-lesson-4",
        title: "La traite et les tensions",
        blocks: [
          {
            type: "paragraphe",
            text: "Le même roi qui avait construit des églises finit par écrire au Portugal pour dénoncer ce que son propre partenaire faisait subir à son peuple.",
          },
          {
            type: "citation",
            texte: "Chaque jour, les marchands enlèvent nos gens, jusqu'aux enfants de nos propres nobles et de notre famille.",
            auteur: "Afonso Iᵉʳ, lettre au roi du Portugal (1526)",
          },
          {
            type: "paragraphe",
            text: "La demande croissante des Portugais en captifs déstabilise le royaume. **Afonso** écrit plusieurs lettres pour protester contre les ravages de la traite sur son peuple. Les tensions s'aggravent, jusqu'à la bataille de **Mbwila** en 1665.",
          },
          {
            type: "aRetenir",
            points: [
              "**Afonso** proteste par lettres contre les ravages de la traite",
              "Les tensions s'aggravent avec les Portugais",
              "**1665** : bataille de Mbwila, le royaume se fragmente",
            ],
          },
        ],
      },
      {
        id: "course-histoire-16-royaume-kongo-lesson-5",
        title: "Héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Le **Kongo** a montré qu'un État africain pouvait dialoguer d'égal à égal avec l'Europe — avant d'être emporté par la **traite** qu'il avait lui-même dénoncée.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XIVe s.", texte: "Fondation du royaume du Kongo" },
              { date: "1483", texte: "Premiers contacts diplomatiques avec le Portugal" },
              { date: "1665", texte: "Bataille de Mbwila, fragmentation du royaume" },
            ],
          },
          {
            type: "paragraphe",
            text: "Le Kongo montre qu'un État africain a su dialoguer diplomatiquement avec l'Europe et adopter le christianisme selon ses propres termes. Son déclin illustre l'impact destructeur de la traite. Sa culture a profondément marqué l'Afrique centrale et, via la diaspora, une partie des Amériques.",
          },
          {
            type: "aRetenir",
            points: [
              "Un dialogue diplomatique d'égal à égal avec l'Europe",
              "Un déclin qui illustre l'impact destructeur de la traite",
              "Une culture qui a marqué l'Afrique centrale et les Amériques",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-16-royaume-kongo-quiz-1",
        question: "Autour de quel fleuve s'est développé le royaume du Kongo ?",
        options: ["Le Nil", "Le fleuve Congo", "Le Niger", "Le Zambèze"],
        correctIndex: 1,
        explanation: "Le royaume du Kongo s'étendait autour du bas cours du fleuve Congo, avec Mbanza-Kongo pour capitale.",
      },
      {
        id: "course-histoire-16-royaume-kongo-quiz-2",
        question: "Quel roi du Kongo s'est converti au christianisme et correspondait avec le pape ?",
        options: ["Afonso Iᵉʳ", "Béhanzin", "Ezana", "Idris Alooma"],
        correctIndex: 0,
        explanation: "Afonso Iᵉʳ (Nzinga Mbemba) fit du christianisme la religion d'État et correspondait d'égal à égal avec le Portugal et le pape.",
      },
      {
        id: "course-histoire-16-royaume-kongo-quiz-3",
        question: "Quelle monnaie utilisait le royaume du Kongo ?",
        options: ["Des pièces d'or", "Des coquillages (nzimbu)", "Du papier-monnaie", "Des lingots de fer"],
        correctIndex: 1,
        explanation: "Le Kongo utilisait des coquillages, les nzimbu, comme monnaie.",
      },
      {
        id: "course-histoire-16-royaume-kongo-quiz-4",
        question: "Contre quoi le roi Afonso Iᵉʳ a-t-il protesté dans ses lettres ?",
        options: ["Les ravages de la traite des esclaves", "Le climat", "Les impôts sur l'or", "La construction d'églises"],
        correctIndex: 0,
        explanation: "Afonso Iᵉʳ protesta, dans plusieurs lettres au roi du Portugal, contre l'impact destructeur de la traite atlantique sur son peuple.",
      },
      {
        id: "course-histoire-16-royaume-kongo-quiz-5",
        question: "Que s'est-il passé à la bataille de Mbwila en 1665 ?",
        options: ["Le Kongo conquit le Portugal", "Les Portugais vainquirent et tuèrent le roi du Kongo", "Le royaume fut agrandi", "La traite fut abolie"],
        correctIndex: 1,
        explanation: "À Mbwila (1665), les Portugais vainquirent et tuèrent le roi ; le royaume se fragmenta ensuite.",
      },
    ],
  },
  {
    id: "course-histoire-17-grand-zimbabwe",
    categoryId: "histoire",
    emoji: "🪨",
    title: "Grand Zimbabwe",
    description: "En Afrique australe, une cité de pierre monumentale, bâtie sans mortier, témoigne d'un puissant royaume de l'or et du commerce — et dément les préjugés coloniaux.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-17-grand-zimbabwe-lesson-1",
        title: "Une cité de pierre",
        blocks: [
          {
            type: "paragraphe",
            text: "Certaines murailles du **Grand Zimbabwe** atteignent onze mètres, sans mortier.",
          },
          {
            type: "chiffreCle",
            valeur: "11 m",
            legende: "hauteur de certaines murailles du Grand Zimbabwe",
          },
          {
            type: "paragraphe",
            text: "Bâtie par les ancêtres des **Shona**, cette cité connaît son apogée entre les XIᵉ et XVᵉ siècles. Son nom vient de dzimba dza mabwe, « les maisons de pierre ».",
          },
          {
            type: "image",
            alt: "Tour conique du Grand Zimbabwe, bâtie en pierres sèches.",
            legende: "Tour du Grand Zimbabwe, photographie contemporaine des vestiges médiévaux.",
            credit: "Andrew Moore, CC BY-SA 2.0, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Conical_Tower_-_Great_Enclosure_IV_(47561215932).jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
          },
          {
            type: "aRetenir",
            points: [
              "Apogée entre les **XIᵉ-XVᵉ siècles**",
              "Bâti par les ancêtres du peuple **Shona**",
              "Les plus vastes structures anciennes d'Afrique subsaharienne australe",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Les pierres sont taillées et assemblées pour tenir sans mortier.",
          },
        ],
      },
      {
        id: "course-histoire-17-grand-zimbabwe-lesson-2",
        title: "Un royaume de l'or",
        blocks: [
          {
            type: "paragraphe",
            text: "Des porcelaines chinoises retrouvées au Grand Zimbabwe révèlent des échanges à très longue distance. La cité est reliée aux réseaux marchands de l'océan Indien.",
          },
          {
            type: "chiffreCle",
            valeur: "Sofala",
            legende: "le port par lequel l'or rejoignait l'océan Indien",
          },
          {
            type: "paragraphe",
            text: "La richesse du Grand Zimbabwe repose sur le bétail et surtout sur le commerce de l'**or**, acheminé jusqu'à la côte swahilie puis vers tout le monde de l'océan Indien. Les fouilles y ont retrouvé de la **porcelaine chinoise** et du verre persan.",
          },
          {
            type: "aRetenir",
            points: [
              "L'or, acheminé jusqu'à **Sofala** puis l'océan Indien",
              "Porcelaine chinoise et verre persan retrouvés sur le site",
              "Une richesse aussi fondée sur le bétail",
            ],
          },
        ],
      },
      {
        id: "course-histoire-17-grand-zimbabwe-lesson-3",
        title: "Une capitale organisée",
        blocks: [
          {
            type: "paragraphe",
            text: "La **Grande Enceinte** structure cette capitale de pierre.",
          },
          {
            type: "chiffreCle",
            valeur: "18 000",
            legende: "habitants estimés à l'apogée du Grand Zimbabwe",
          },
          {
            type: "paragraphe",
            text: "Le complexe de la colline complète la cité. Ses oiseaux sculptés en **stéatite** sont devenus un emblème national.",
          },
          {
            type: "image",
            alt: "Grande muraille de pierres sèches entourant le complexe du Grand Zimbabwe.",
            legende: "Mur oriental de la Grande Enceinte du Grand Zimbabwe.",
            credit: "Andrew Moore, CC BY-SA 2.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:East_Wall_Great_Enclosure_(47614139601).jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
          },
          {
            type: "aRetenir",
            points: [
              "**18 000** habitants, peut-être, à l'apogée de la cité",
              "La **Grande Enceinte** et le complexe de la colline",
              "Les oiseaux du Zimbabwe, sculptés en stéatite",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Ces oiseaux en stéatite figurent aujourd'hui sur le drapeau du Zimbabwe : un emblème national né d'une sculpture vieille de plusieurs siècles.",
          },
        ],
      },
      {
        id: "course-histoire-17-grand-zimbabwe-lesson-4",
        title: "Un mythe colonial démenti",
        blocks: [
          {
            type: "paragraphe",
            text: "Pendant plus d'un siècle, des colonisateurs ont refusé de croire que des Africains aient pu bâtir cette cité. L'**archéologie** leur a donné tort.",
          },
          {
            type: "citation",
            texte: "Ce que la pierre a vu, le vent ne peut l'effacer.",
            auteur: "Proverbe shona",
          },
          {
            type: "paragraphe",
            text: "L'archéologie a depuis clairement établi que le Grand Zimbabwe fut construit par les populations **shona** locales. Cet exemple est essentiel pour déconstruire les préjugés racistes sur les capacités des sociétés africaines.",
          },
          {
            type: "aRetenir",
            points: [
              "Les colonisateurs ont longtemps nié une origine africaine",
              "L'archéologie a établi l'origine **shona** du site",
              "Un exemple clé contre les préjugés coloniaux",
            ],
          },
        ],
      },
      {
        id: "course-histoire-17-grand-zimbabwe-lesson-5",
        title: "Déclin et héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Le Grand Zimbabwe s'éteint peu à peu au XVᵉ siècle. Mais son nom, lui, renaîtra cinq siècles plus tard, porté par toute une nation.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XIe-XVe s.", texte: "Apogée du Grand Zimbabwe" },
              { date: "XVe s.", texte: "Déclin, essor du royaume du Mutapa" },
              { date: "1980", texte: "Indépendance du Zimbabwe, nom repris avec fierté" },
            ],
          },
          {
            type: "paragraphe",
            text: "Le Grand Zimbabwe décline vers le **XVᵉ siècle**, sans doute à cause de l'épuisement des ressources et du déplacement des routes commerciales, laissant la place au royaume du **Mutapa**. Classé au patrimoine mondial de l'UNESCO, il donne son nom à la nation moderne.",
          },
          {
            type: "aRetenir",
            points: [
              "Déclin au **XVᵉ siècle**, place au royaume du Mutapa",
              "Classé au patrimoine mondial de l'UNESCO",
              "**1980** : le Zimbabwe indépendant reprend fièrement ce nom",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-17-grand-zimbabwe-quiz-1",
        question: "Comment les murailles du Grand Zimbabwe ont-elles été construites ?",
        options: ["En béton armé", "En pierres sèches, sans mortier", "En briques de terre cuite", "En bois"],
        correctIndex: 1,
        explanation: "Les murailles, hautes de plusieurs mètres (jusqu'à 11 m), furent bâties en pierres sèches, sans mortier.",
      },
      {
        id: "course-histoire-17-grand-zimbabwe-quiz-2",
        question: "Quel peuple a bâti le Grand Zimbabwe ?",
        options: ["Les ancêtres des Shona", "Les Romains", "Les Phéniciens", "Les Égyptiens"],
        correctIndex: 0,
        explanation: "Le site fut construit par les ancêtres du peuple shona, comme l'a démontré l'archéologie, malgré les théories coloniales d'origine étrangère.",
      },
      {
        id: "course-histoire-17-grand-zimbabwe-quiz-3",
        question: "Sur quel commerce reposait la richesse du Grand Zimbabwe ?",
        options: ["Le commerce de la soie", "Le commerce de l'or", "Le commerce du café", "Le commerce du sel"],
        correctIndex: 1,
        explanation: "L'or, exporté via le port de Sofala vers la côte swahilie et l'océan Indien, faisait la richesse du royaume.",
      },
      {
        id: "course-histoire-17-grand-zimbabwe-quiz-4",
        question: "Qu'a-t-on retrouvé sur le site, prouvant des échanges lointains ?",
        options: ["De la porcelaine chinoise", "Des pièces romaines uniquement", "Rien du tout", "Des outils en plastique"],
        correctIndex: 0,
        explanation: "De la porcelaine chinoise et du verre persan y ont été trouvés, preuve de vastes échanges via l'océan Indien.",
      },
      {
        id: "course-histoire-17-grand-zimbabwe-quiz-5",
        question: "Qu'a démontré l'archéologie face au mythe colonial ?",
        options: ["Que le site fut bâti par des étrangers", "Que le site fut bâti par les populations africaines locales", "Que le site est naturel", "Que le site est récent"],
        correctIndex: 1,
        explanation: "L'archéologie a prouvé que le Grand Zimbabwe fut bâti par les Shona locaux, déconstruisant les préjugés coloniaux sur les capacités des sociétés africaines.",
      },
    ],
  },
  {
    id: "course-histoire-18-monomotapa-mutapa",
    categoryId: "histoire",
    emoji: "👑",
    title: "Monomotapa",
    description: "Héritier du Grand Zimbabwe, l'empire du Mutapa domina l'Afrique australe et fascina les Portugais par la légende de ses mines d'or.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-18-monomotapa-mutapa-lesson-1",
        title: "L'héritier du Grand Zimbabwe",
        blocks: [
          {
            type: "paragraphe",
            text: "Quand le Grand Zimbabwe décline, un chef shona ne laisse pas mourir son héritage : il fonde, plus au nord, un nouveau royaume.",
          },
          {
            type: "chiffreCle",
            valeur: "XVe siècle",
            legende: "Nyatsimba Mutota fonde le royaume du Mutapa",
          },
          {
            type: "paragraphe",
            text: "Un chef shona nommé **Nyatsimba Mutota** fonde ce nouveau royaume, que les Européens appellent **Monomotapa**. Il s'étend entre les fleuves Zambèze et Limpopo. Le titre du souverain, **Mwene Mutapa**, signifie « seigneur des terres conquises ».",
          },
          {
            type: "aRetenir",
            points: [
              "**Nyatsimba Mutota** fonde le Mutapa au XVᵉ siècle",
              "Entre les fleuves Zambèze et Limpopo",
              "**Mwene Mutapa** : « seigneur des terres conquises »",
            ],
          },
        ],
      },
      {
        id: "course-histoire-18-monomotapa-mutapa-lesson-2",
        title: "L'or et l'océan Indien",
        blocks: [
          {
            type: "paragraphe",
            text: "L’**or** du Mutapa rejoint les circuits de l’océan Indien.",
          },
          {
            type: "chiffreCle",
            valeur: "Sofala",
            legende: "le port par lequel l'or du Mutapa rejoignait l'océan Indien",
          },
          {
            type: "paragraphe",
            text: "Par **Sofala** et la côte swahilie circulent or et ivoire. Marchands arabes et swahilis apportent tissus, perles et porcelaines en échange des richesses de l’intérieur.",
          },
          {
            type: "image",
            alt: "Port de Sofala dans une gravure ancienne.",
            legende: "Vue de Sofala, détail d’une gravure de Coronelli.",
            credit: "Vincenzo Coronelli, domaine public, extrait WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:(Text_Page_to)_Isolario_del_P._Coronelli._(with)_Isola,_e_citta_di_Sofala._(to_accompany)_Isolario_descrittione_geografico-historica_(IA_dr_text-page-to-isolario-del-p-coronelli-with-isola-e-citta-di-sofala-11391099).jpg",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "L'or et l'ivoire acheminés vers **Sofala**",
              "Des marchands arabes et swahilis viennent y échanger",
              "Tissus, perles, porcelaines contre les richesses de l'intérieur",
            ],
          },
        ],
      },
      {
        id: "course-histoire-18-monomotapa-mutapa-lesson-3",
        title: "Les Portugais et le mythe",
        blocks: [
          {
            type: "paragraphe",
            text: "Des Portugais croient trouver en Afrique australe le pays biblique d'**Ophir**.",
          },
          {
            type: "chiffreCle",
            valeur: "XVIe siècle",
            legende: "les Portugais s'installent, fascinés par l'or du Mutapa",
          },
          {
            type: "paragraphe",
            text: "Fascinés par l'or du **Monomotapa**, ils s'installent sur la côte au XVIᵉ siècle. Pour contrôler ce commerce, ils cherchent à intervenir dans les affaires du royaume.",
          },
          {
            type: "image",
            alt: "Carte ancienne situant le Monomotapa en Afrique australe.",
            legende: "Monomotapa sur une carte gravée européenne de Willem Blaeu, 1635.",
            credit: "Willem Blaeu, domaine public, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Monomotapa_Map.jpg",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "**XVIᵉ siècle** : les Portugais s'installent sur la côte",
              "Certains croient reconnaître le pays biblique d'**Ophir**",
              "Ils cherchent à s'immiscer dans les affaires du royaume",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Ophir, source d'or du roi Salomon selon la Bible, n'a jamais été localisé avec certitude.",
          },
        ],
      },
      {
        id: "course-histoire-18-monomotapa-mutapa-lesson-4",
        title: "Tensions et déclin",
        blocks: [
          {
            type: "paragraphe",
            text: "Les **Portugais** rêvaient de richesses fabuleuses. Le Mutapa, lui, ne leur offrit jamais que des dettes et des rivalités.",
          },
          {
            type: "citation",
            texte: "On ne cueille pas la richesse d'un arbre qu'on n'a pas planté.",
            auteur: "Proverbe shona",
          },
          {
            type: "paragraphe",
            text: "Aux XVIᵉ et XVIIᵉ siècles, les ingérences portugaises, l'envoi de missionnaires et les guerres affaiblissent progressivement le **Mutapa**. Le royaume devient de plus en plus dépendant, puis se fragmente, sans jamais livrer aux Européens les richesses qu'ils imaginaient.",
          },
          {
            type: "aRetenir",
            points: [
              "**XVIᵉ-XVIIᵉ siècles** : ingérences, missionnaires, guerres affaiblissent le Mutapa",
              "Le royaume devient dépendant, puis se fragmente",
              "Les Européens n'obtiennent jamais les richesses fabuleuses espérées",
            ],
          },
        ],
      },
      {
        id: "course-histoire-18-monomotapa-mutapa-lesson-5",
        title: "Héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Deux royaumes, une seule et même histoire : celle d'une civilisation d'Afrique australe restée puissante pendant près de sept siècles.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XIe-XVe s.", texte: "Le Grand Zimbabwe, premier grand État shona" },
              { date: "XVe-XVIIe s.", texte: "Le Mutapa prend le relais" },
              { date: "XVIIe s.", texte: "Fragmentation face aux ingérences portugaises" },
            ],
          },
          {
            type: "paragraphe",
            text: "L'histoire du **Grand Zimbabwe** puis du **Mutapa** montre la continuité d'une puissante civilisation d'Afrique australe, bâtie sur l'or, le bétail et le commerce à longue distance. Ces royaumes shona rappellent que la région fut, bien avant la colonisation, le siège d'États organisés et prospères.",
          },
          {
            type: "aRetenir",
            points: [
              "Grand Zimbabwe puis Mutapa : une même civilisation shona",
              "Bâtie sur l'or, le bétail, le commerce à longue distance",
              "Des États organisés, bien avant la colonisation",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-18-monomotapa-mutapa-quiz-1",
        question: "De quel grand site le royaume du Mutapa est-il l'héritier ?",
        options: ["Du Grand Zimbabwe", "de Carthage", "d'Aksoum", "de Tombouctou"],
        correctIndex: 0,
        explanation: "Le Mutapa fut fondé par Nyatsimba Mutota alors que le Grand Zimbabwe déclinait, dans la continuité de la civilisation shona.",
      },
      {
        id: "course-histoire-18-monomotapa-mutapa-quiz-2",
        question: "Comment appelait-on le souverain du Mutapa ?",
        options: ["Le Mwene Mutapa", "L'Oba", "Le Kabaka", "Le Négus"],
        correctIndex: 0,
        explanation: "Le titre du souverain était Mwene Mutapa, « seigneur des terres conquises », d'où le nom « Monomotapa » donné par les Européens.",
      },
      {
        id: "course-histoire-18-monomotapa-mutapa-quiz-3",
        question: "Vers quel port l'or du Mutapa était-il acheminé ?",
        options: ["Alexandrie", "Sofala", "Ouidah", "Carthage"],
        correctIndex: 1,
        explanation: "L'or partait vers la côte swahilie, notamment le port de Sofala, et l'océan Indien.",
      },
      {
        id: "course-histoire-18-monomotapa-mutapa-quiz-4",
        question: "Qu'est-ce qui fascinait les Portugais dans le Monomotapa ?",
        options: ["Ses mines d'or", "Ses volcans", "Ses forêts de bambous", "Ses glaciers"],
        correctIndex: 0,
        explanation: "Les Portugais étaient fascinés par la légende des mines d'or, qu'ils associaient parfois au pays biblique d'Ophir.",
      },
      {
        id: "course-histoire-18-monomotapa-mutapa-quiz-5",
        question: "Entre quels deux fleuves s'étendait le Mutapa ?",
        options: ["Le Nil et le Niger", "Le Zambèze et le Limpopo", "Le Congo et l'Ogooué", "Le Sénégal et la Gambie"],
        correctIndex: 1,
        explanation: "Le royaume s'étendait entre le Zambèze et le Limpopo (actuels Zimbabwe et Mozambique).",
      },
    ],
  },
  {
    id: "course-histoire-19-royaumes-grands-lacs",
    categoryId: "histoire",
    emoji: "🌊",
    title: "Royaumes des Grands Lacs",
    description: "Autour des grands lacs d'Afrique de l'Est, des royaumes prospères — Buganda, Rwanda, Bunyoro — développèrent des États centralisés et des sociétés élaborées.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-19-royaumes-grands-lacs-lesson-1",
        title: "Une région de royaumes",
        blocks: [
          {
            type: "paragraphe",
            text: "Des hauts plateaux si fertiles qu'ils ont permis à des royaumes entiers de prospérer, serrés les uns contre les autres, autour de trois grands lacs.",
          },
          {
            type: "chiffreCle",
            valeur: "5",
            legende: "grands royaumes (Buganda, Bunyoro, Rwanda, Burundi, Ankole)",
          },
          {
            type: "paragraphe",
            text: "En Afrique de l’Est, la région des Grands Lacs, dans les actuels Ouganda, Rwanda, Burundi et Tanzanie, est une zone de hauts plateaux fertiles. Cette richesse agricole permet de fortes densités de population et l'émergence de royaumes centralisés : **Buganda**, Bunyoro, **Rwanda**, Burundi ou encore Ankole.",
          },
          {
            type: "aRetenir",
            points: [
              "Des hauts plateaux fertiles, autour des lacs Victoria, Kivu, Tanganyika",
              "Une forte densité de population, favorable aux royaumes",
              "**5** royaumes centralisés : Buganda, Bunyoro, Rwanda, Burundi, Ankole",
            ],
          },
        ],
      },
      {
        id: "course-histoire-19-royaumes-grands-lacs-lesson-2",
        title: "Le royaume du Buganda",
        blocks: [
          {
            type: "paragraphe",
            text: "Routes, armée, flotte de pirogues : le **Buganda** est un État organisé.",
          },
          {
            type: "chiffreCle",
            valeur: "XVIIIe-XIXe s.",
            legende: "l'apogée du royaume du Buganda",
          },
          {
            type: "paragraphe",
            text: "Dans l'actuel Ouganda, le **Kabaka** dirige ce puissant royaume, à son apogée aux XVIIIᵉ et XIXᵉ siècles. Une administration de chefs et une flotte sur le lac Victoria soutiennent son pouvoir.",
          },
          {
            type: "image",
            alt: "Bâtiment funéraire royal en chaume sur le site de Kasubi.",
            legende: "Tombeaux royaux de Kasubi, photographie de 2007 avant l’incendie de 2010.",
            credit: "UNESCO / Lazare Eloundou Assomo, CC BY-SA 3.0 IGO, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Tombs_of_Buganda_Kings_at_Kasubi-114316.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/igo/",
          },
          {
            type: "aRetenir",
            points: [
              "Le **Kabaka**, roi du Buganda, à la tête d'un État organisé",
              "Administration de chefs, routes, armée, flotte de pirogues",
              "Apogée aux **XVIIIᵉ et XIXᵉ siècles**",
            ],
          },
        ],
      },
      {
        id: "course-histoire-19-royaumes-grands-lacs-lesson-3",
        title: "Le Rwanda et l'organisation sociale",
        blocks: [
          {
            type: "paragraphe",
            text: "Au Rwanda précolonial, des catégories sociales existaient — mais elles n'avaient pas encore le sens rigide qu'on leur donnera plus tard.",
          },
          {
            type: "chiffreCle",
            valeur: "3",
            legende: "catégories sociales fluides : Hutu, Tutsi, Twa",
          },
          {
            type: "paragraphe",
            text: "Le royaume du **Rwanda** est dirigé par le **Mwami** (roi) et se distingue par une organisation politique très élaborée. Le bétail y joue un rôle central, dans l'économie comme dans les relations sociales. Ces catégories, alors surtout sociales et fluides, seront plus tard figées et instrumentalisées par les colonisateurs.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **Mwami**, roi du Rwanda, à la tête d'un État élaboré",
              "Le bétail, central dans l'économie et les relations sociales",
              "Des catégories sociales fluides, plus tard figées par la colonisation",
            ],
          },
        ],
      },
      {
        id: "course-histoire-19-royaumes-grands-lacs-lesson-4",
        title: "Économie et culture",
        blocks: [
          {
            type: "paragraphe",
            text: "Les **tambours royaux** donnent une forme sonore au pouvoir.",
          },
          {
            type: "citation",
            texte: "Le tambour ne parle pas seul, il parle pour tout le royaume.",
            auteur: "Proverbe ganda",
          },
          {
            type: "paragraphe",
            text: "Agriculture, notamment la **banane**, et élevage soutiennent ces royaumes. Traditions orales, cérémonies et cultures de cour se transmettent encore, comme au Burundi.",
          },
          {
            type: "image",
            alt: "Tambourinaires autour de grands tambours au sanctuaire de Gishora.",
            legende: "Tambourinaires de Gishora, au Burundi, photographie de 2024.",
            credit: "NSENGIYUMVA Joseph, CC BY-SA 4.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Les_tambourinaires_de_Gitega.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          },
          {
            type: "aRetenir",
            points: [
              "Agriculture (banane) et élevage, bases de l'économie",
              "Les **tambours royaux**, symboles majeurs du pouvoir",
              "Des sociétés riches en traditions, « loin d'être sans histoire »",
            ],
          },
        ],
      },
      {
        id: "course-histoire-19-royaumes-grands-lacs-lesson-5",
        title: "Colonisation et héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "À la fin du **XIXᵉ siècle**, des puissances européennes se partagent la région. Elles transforment, au passage, des catégories sociales autrefois fluides en frontières rigides.",
          },
          {
            type: "frise",
            evenements: [
              { date: "avant XIXe s.", texte: "Royaumes centralisés, catégories sociales fluides" },
              { date: "fin XIXe s.", texte: "Domination allemande, puis britannique et belge" },
              { date: "XXe-XXIe s.", texte: "Un héritage culturel toujours vivant" },
            ],
          },
          {
            type: "paragraphe",
            text: "Les colonisateurs rigidifient les **identités sociales** et exploitent les rivalités, préparant de futurs conflits. Malgré tout, l'héritage de ces royaumes — leurs cultures, leurs langues, leurs institutions — reste très vivant dans l'Afrique de l'Est d'aujourd'hui.",
          },
          {
            type: "aRetenir",
            points: [
              "Fin **XIXᵉ siècle** : domination allemande, puis britannique et belge",
              "Des identités sociales rigidifiées, aux conséquences dramatiques",
              "Un héritage culturel toujours vivant en Afrique de l'Est",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-19-royaumes-grands-lacs-quiz-1",
        question: "Dans quelle partie de l'Afrique se trouve la région des Grands Lacs ?",
        options: ["En Afrique de l'Est", "En Afrique du Nord", "En Afrique de l'Ouest", "Au Sahara"],
        correctIndex: 0,
        explanation: "La région des Grands Lacs se situe en Afrique de l'Est (Ouganda, Rwanda, Burundi, Tanzanie), autour des lacs Victoria, Kivu et Tanganyika.",
      },
      {
        id: "course-histoire-19-royaumes-grands-lacs-quiz-2",
        question: "Comment appelait-on le roi du Buganda ?",
        options: ["Le Kabaka", "Le Mwami", "L'Oba", "Le Mansa"],
        correctIndex: 0,
        explanation: "Le souverain du Buganda portait le titre de Kabaka ; celui du Rwanda portait le titre de Mwami.",
      },
      {
        id: "course-histoire-19-royaumes-grands-lacs-quiz-3",
        question: "Quel animal jouait un rôle central dans l'économie et la société du Rwanda ?",
        options: ["Le chameau", "Le bétail (les vaches)", "L'éléphant", "Le cheval"],
        correctIndex: 1,
        explanation: "Le bétail était central dans l'économie et les relations sociales du royaume du Rwanda.",
      },
      {
        id: "course-histoire-19-royaumes-grands-lacs-quiz-4",
        question: "Qu'ont fait les colonisateurs des identités sociales de la région ?",
        options: ["Ils les ont ignorées", "Ils les ont figées et instrumentalisées", "Ils les ont supprimées", "Ils les ont inventées de toutes pièces sans effet"],
        correctIndex: 1,
        explanation: "Les colonisateurs rigidifièrent des catégories sociales (Hutu, Tutsi, Twa) auparavant fluides, avec des conséquences dramatiques.",
      },
      {
        id: "course-histoire-19-royaumes-grands-lacs-quiz-5",
        question: "Quel objet symbolisait le pouvoir royal dans les royaumes des Grands Lacs ?",
        options: ["Les tambours royaux", "Les couronnes de diamant", "Les sceptres de verre", "Les navires"],
        correctIndex: 0,
        explanation: "Les tambours royaux étaient des symboles majeurs du pouvoir dans les royaumes des Grands Lacs.",
      },
    ],
  },
  {
    id: "course-histoire-20-ethiopie-medievale-lalibela",
    categoryId: "histoire",
    emoji: "⛪",
    title: "Éthiopie médiévale",
    description: "Héritière d'Aksoum, l'Éthiopie chrétienne médiévale a taillé dans le roc des églises extraordinaires et maintenu, en plein cœur de l'Afrique, une civilisation unique.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-lesson-1",
        title: "L'héritière d'Aksoum",
        blocks: [
          {
            type: "paragraphe",
            text: "Quand Aksoum décline, sa civilisation ne meurt pas. Elle se retire sur les hauts plateaux, et continue son histoire pendant plusieurs siècles de plus.",
          },
          {
            type: "chiffreCle",
            valeur: "1270",
            legende: "la dynastie salomonienne prend le pouvoir en Éthiopie",
          },
          {
            type: "paragraphe",
            text: "Deux grandes dynasties marquent le Moyen Âge : la dynastie **Zagwé** (XIIᵉ-XIIIᵉ siècle), puis la dynastie dite **salomonienne**, qui prétend descendre du roi Salomon et de la reine de Saba. L'Éthiopie reste ainsi un royaume chrétien continu, cas unique en Afrique.",
          },
          {
            type: "aRetenir",
            points: [
              "La civilisation chrétienne éthiopienne prolonge celle d'Aksoum",
              "Dynastie Zagwé, puis dynastie **salomonienne** (dès 1270)",
              "Un royaume chrétien continu, cas unique en Afrique",
            ],
          },
        ],
      },
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-lesson-2",
        title: "Les églises de Lalibela",
        blocks: [
          {
            type: "paragraphe",
            text: "À **Lalibela**, onze églises sont taillées directement dans la roche.",
          },
          {
            type: "chiffreCle",
            valeur: "11",
            legende: "églises monolithes taillées dans la roche à Lalibela",
          },
          {
            type: "paragraphe",
            text: "Le roi Lalibela, de la dynastie Zagwé, fait aménager cette « Nouvelle Jérusalem » vers les XIIᵉ-XIIIᵉ siècles. Toujours en activité, les églises sont classées par l'**UNESCO** et accueillent les pèlerins.",
          },
          {
            type: "image",
            alt: "Toit cruciforme de Bete Giyorgis, taillé dans la roche.",
            legende: "Bete Giyorgis à Lalibela, photographiée en 2012.",
            credit: "Bernard Gagnon, CC BY-SA 3.0, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Bete_Giyorgis_01.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
          },
          {
            type: "aRetenir",
            points: [
              "**11** églises monolithes, taillées directement dans la roche",
              "Conçues comme une « Nouvelle Jérusalem » par le roi Lalibela",
              "Toujours en activité, classées par l'UNESCO",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Les bâtisseurs taillent la roche vers le bas pour dégager murs et ouvertures.",
          },
        ],
      },
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-lesson-3",
        title: "Un christianisme unique",
        blocks: [
          {
            type: "paragraphe",
            text: "Le christianisme éthiopien conserve ses propres traditions.",
          },
          {
            type: "chiffreCle",
            valeur: "15+ siècles",
            legende: "l'ancienneté de l'Église orthodoxe éthiopienne",
          },
          {
            type: "paragraphe",
            text: "Le **guèze** sert à la liturgie. Monastères, calendrier propre et **manuscrits enluminés** témoignent d’une tradition religieuse ancienne et originale, dont cet évangile du XVe siècle.",
          },
          {
            type: "image",
            alt: "Saint Luc peint sur une page d'évangile éthiopien.",
            legende: "Évangile éthiopien du XVe siècle : une tradition chrétienne enluminée.",
            credit: "Cleveland Museum of Art, CC0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Clevelandart_1999.212.jpg",
            licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "Le **guèze**, langue liturgique propre à l'Éthiopie",
              "Un calendrier propre, des monastères, des manuscrits enluminés",
              "Plus de **15 siècles** de traditions originales",
            ],
          },
        ],
      },
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-lesson-4",
        title: "Un État qui a résisté",
        blocks: [
          {
            type: "paragraphe",
            text: "Un texte sacré relie les empereurs d'Éthiopie à un roi biblique — et la tradition affirme qu'un trésor plus sacré encore repose à Aksoum.",
          },
          {
            type: "citation",
            texte: "Celui qui n'a pas d'ancêtres n'a pas d'avenir.",
            auteur: "Proverbe éthiopien",
          },
          {
            type: "paragraphe",
            text: "Gouvernée par des empereurs (les **négus**), l'Éthiopie médiévale sait se maintenir face aux changements et aux menaces. Son épopée nationale, le **Kebra Nagast** (« la Gloire des rois »), relie la dynastie à Salomon et à la reine de Saba.",
          },
          {
            type: "aRetenir",
            points: [
              "Gouvernée par des empereurs, les **négus**",
              "Le **Kebra Nagast** relie la dynastie à Salomon et Saba",
              "La tradition situe l'Arche d'Alliance à Aksoum",
            ],
          },
        ],
      },
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-lesson-5",
        title: "Héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "L'Éthiopie n'a jamais connu, comme le reste du continent, la rupture d'une colonisation durable. Son histoire, elle, ne s'est jamais interrompue.",
          },
          {
            type: "frise",
            evenements: [
              { date: "IVe s.", texte: "Aksoum se convertit au christianisme" },
              { date: "1270", texte: "Dynastie salomonienne, continuité chrétienne" },
              { date: "1896", texte: "Victoire d'Adoua sur l'Italie" },
            ],
          },
          {
            type: "paragraphe",
            text: "L'Éthiopie est unique en Afrique : elle n'a jamais été durablement colonisée, allant jusqu'à vaincre l'Italie à **Adoua** en **1896** (que nous découvrons dans un prochain cours). Lalibela, ses manuscrits et son Église orthodoxe témoignent de cette exceptionnelle profondeur historique.",
          },
          {
            type: "aRetenir",
            points: [
              "Jamais durablement colonisée, victoire d'**Adoua** en 1896",
              "Une civilisation chrétienne continue depuis Aksoum",
              "Lalibela et l'Église orthodoxe, témoins de cette profondeur",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-quiz-1",
        question: "De quelle civilisation antique l'Éthiopie médiévale est-elle l'héritière ?",
        options: ["D'Aksoum", "de Carthage", "du Grand Zimbabwe", "du Mali"],
        correctIndex: 0,
        explanation: "L'Éthiopie chrétienne médiévale prolonge la civilisation d'Aksoum sur les hauts plateaux, après le déclin de celle-ci.",
      },
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-quiz-2",
        question: "Qu'ont de particulier les églises de Lalibela ?",
        options: ["Elles sont taillées directement dans la roche", "Elles sont construites en verre", "Elles flottent sur un lac", "Elles sont en briques de terre"],
        correctIndex: 0,
        explanation: "Les onze églises de Lalibela sont monolithes, taillées directement dans le roc, conçues comme une « Nouvelle Jérusalem ».",
      },
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-quiz-3",
        question: "Quelle est la langue liturgique de l'Église orthodoxe éthiopienne ?",
        options: ["Le latin", "Le guèze", "L'arabe", "Le grec"],
        correctIndex: 1,
        explanation: "Le guèze est la langue liturgique ancienne de l'Église orthodoxe éthiopienne, qui a aussi son propre calendrier.",
      },
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-quiz-4",
        question: "En quelle année la dynastie salomonienne prit-elle le pouvoir ?",
        options: ["En 1270", "En 1896", "En 330", "En 1591"],
        correctIndex: 0,
        explanation: "La dynastie dite salomonienne prit le pouvoir en 1270, se disant issue de Salomon et de la reine de Saba, comme le raconte le Kebra Nagast.",
      },
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-quiz-5",
        question: "Qu'est-ce qui rend l'histoire de l'Éthiopie unique en Afrique ?",
        options: ["Elle n'a jamais été durablement colonisée", "Elle n'a jamais eu de roi", "Elle n'a pas d'écriture", "Elle a disparu au Moyen Âge"],
        correctIndex: 0,
        explanation: "L'Éthiopie n'a jamais été durablement colonisée (victoire d'Adoua en 1896) et a maintenu une civilisation chrétienne continue.",
      },
    ],
  },
  {
    id: "course-histoire-21-commerce-transsaharien",
    categoryId: "histoire",
    emoji: "🐪",
    title: "Commerce transsaharien",
    description: "Pendant près de mille ans, des caravanes ont traversé le Sahara, reliant l'Afrique de l'Ouest au monde méditerranéen et faisant la fortune des grands empires du Sahel.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-21-commerce-transsaharien-lesson-1",
        title: "Traverser le désert",
        blocks: [
          {
            type: "paragraphe",
            text: "Le **Sahara** devient une route commerciale grâce au chameau.",
          },
          {
            type: "chiffreCle",
            valeur: "Ier s.",
            legende: "le chameau, introduit dans la région saharienne",
          },
          {
            type: "paragraphe",
            text: "Introduit aux premiers siècles de notre ère, le **chameau** permet aux caravanes de traverser d'oasis en oasis. Certaines comptent des milliers de bêtes. Les pistes relient le Sahel aux cités d'Afrique du Nord.",
          },
          {
            type: "image",
            alt: "Caravane de dromadaires chargés de sel à Tombouctou.",
            legende: "Caravane de sel à Tombouctou, début du XXe siècle.",
            credit: "François-Edmond Fortier, domaine public, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Tombouctou-Arriv%C3%A9e_d%27une_caravane_de_sel_(AOF).jpg",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "Le **chameau** rend possible la traversée du Sahara",
              "Des caravanes de parfois des milliers de bêtes",
              "Les pistes relient le Sahel à l'Afrique du Nord",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Le chameau permet le développement des grandes caravanes commerciales.",
          },
        ],
      },
      {
        id: "course-histoire-21-commerce-transsaharien-lesson-2",
        title: "L'or contre le sel",
        blocks: [
          {
            type: "paragraphe",
            text: "Sur les routes du Sahara, l’**or** s’échange contre le **sel**.",
          },
          {
            type: "chiffreCle",
            valeur: "1:1",
            legende: "l'or et le sel, parfois échangés à poids égal",
          },
          {
            type: "paragraphe",
            text: "Le sel des mines du nord rejoint le Sahel. Les caravanes transportent aussi tissus, cuivre et autres marchandises ; leurs échanges enrichissent royaumes et villes-carrefours.",
          },
          {
            type: "image",
            alt: "Plaques de sel saharien empilées pour le commerce.",
            legende: "Plaques de sel saharien à Mopti, photographie contemporaine.",
            credit: "Taguelmoust at French Wikipedia, CC BY-SA 3.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Mopti_sel.jpg",
            licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
          },
          {
            type: "aRetenir",
            points: [
              "L'or du sud (Bambouk, Bouré) monte vers le nord",
              "Le sel du Sahara (Taghaza, Taoudenni) descend vers le sud",
              "Cuivre, tissus, chevaux, livres — et, tragiquement, des captifs",
            ],
          },
        ],
      },
      {
        id: "course-histoire-21-commerce-transsaharien-lesson-3",
        title: "Les villes-carrefours",
        blocks: [
          {
            type: "paragraphe",
            text: "Contrôler une route commerciale, c'était contrôler une fortune. Des villes entières sont nées de ce seul principe.",
          },
          {
            type: "frise",
            evenements: [
              { date: "VIIIe-IXe s.", texte: "Sijilmassa, porte nord du Sahara" },
              { date: "XIe s.", texte: "Oualata, étape caravanière majeure" },
              { date: "XIVe-XVIe s.", texte: "Tombouctou, Djenné, Gao : cités du sud" },
            ],
          },
          {
            type: "paragraphe",
            text: "Ce commerce fait naître de riches villes-étapes : **Sijilmassa** au nord, **Oualata**, Tombouctou, Djenné et Gao à la lisière sud du désert. Les grands empires bâtissent leur puissance en taxant les marchandises qui traversent leur territoire.",
          },
          {
            type: "aRetenir",
            points: [
              "**Sijilmassa**, porte nord du grand commerce saharien",
              "Tombouctou, Djenné, Gao : cités-étapes à la lisière sud",
              "Contrôler les routes, c'était contrôler la richesse",
            ],
          },
        ],
      },
      {
        id: "course-histoire-21-commerce-transsaharien-lesson-4",
        title: "Bien plus que des marchandises",
        blocks: [
          {
            type: "paragraphe",
            text: "Les caravanes ne transportaient pas que des sacs de sel et d'or. Elles transportaient aussi des idées — et celles-ci ont changé un continent.",
          },
          {
            type: "citation",
            texte: "Celui qui ne voyage pas ne connaît pas la valeur des hommes.",
            auteur: "Proverbe touareg",
          },
          {
            type: "paragraphe",
            text: "C'est par les caravanes que l'**islam**, l'écriture arabe, les savants, les livres et de nouvelles techniques architecturales pénètrent en **Afrique de l'Ouest**. Le commerce transsaharien est aussi un grand échange culturel et religieux.",
          },
          {
            type: "aRetenir",
            points: [
              "L'islam et l'écriture arabe voyagent avec les marchandises",
              "Savants, livres, techniques architecturales : un échange culturel",
              "Le commerce transsaharien, aussi un vecteur religieux",
            ],
          },
        ],
      },
      {
        id: "course-histoire-21-commerce-transsaharien-lesson-5",
        title: "Le déclin",
        blocks: [
          {
            type: "paragraphe",
            text: "Pendant près de mille ans, le désert a relié l'Afrique au monde. Puis l'océan a pris le relais.",
          },
          {
            type: "frise",
            evenements: [
              { date: "VIIIe s.", texte: "Essor du grand commerce transsaharien" },
              { date: "XIe-XVIe s.", texte: "Apogée : Ghana, Mali, Songhaï" },
              { date: "XVe-XVIe s.", texte: "Essor du commerce maritime européen" },
            ],
          },
          {
            type: "paragraphe",
            text: "À partir des **XVe-XVIe siècles**, l'essor du commerce maritime européen le long des côtes atlantiques détourne peu à peu les échanges des routes du désert. Mais pendant près d'un millénaire, ce commerce avait relié l'**Afrique** au reste du monde.",
          },
          {
            type: "aRetenir",
            points: [
              "**XVe-XVIe siècles** : le commerce maritime détourne les échanges",
              "Les grandes cités caravanières déclinent peu à peu",
              "Près d'un millénaire de lien entre l'Afrique et le monde",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-21-commerce-transsaharien-quiz-1",
        question: "Grâce à quel animal les caravanes traversaient-elles le Sahara ?",
        options: ["Le cheval", "Le chameau", "L'âne", "L'éléphant"],
        correctIndex: 1,
        explanation: "Le chameau, introduit dans les premiers siècles de notre ère, rendit possible la traversée du désert d'oasis en oasis.",
      },
      {
        id: "course-histoire-21-commerce-transsaharien-quiz-2",
        question: "Quelles étaient les deux marchandises principales du commerce transsaharien ?",
        options: ["L'or et le sel", "Le thé et la soie", "Le café et le cacao", "Le fer et le bois"],
        correctIndex: 0,
        explanation: "L'or venu du sud (Bambouk, Bouré) et le sel venu du Sahara (Taghaza, Taoudenni) étaient au cœur du commerce transsaharien, parfois échangés à poids égal.",
      },
      {
        id: "course-histoire-21-commerce-transsaharien-quiz-3",
        question: "Comment les empires du Sahel s'enrichissaient-ils grâce au commerce transsaharien ?",
        options: ["En interdisant le commerce", "En taxant les marchandises qui traversaient leur territoire", "En fabriquant des chameaux", "En cultivant du blé"],
        correctIndex: 1,
        explanation: "Ghana, Mali et Songhaï taxaient les marchandises en transit, source majeure de leur richesse : contrôler les routes, c'était contrôler la richesse.",
      },
      {
        id: "course-histoire-21-commerce-transsaharien-quiz-4",
        question: "Qu'est-ce que le commerce transsaharien a aussi diffusé, outre les marchandises ?",
        options: ["L'islam et l'écriture arabe", "Le christianisme et le latin", "Rien d'autre", "Le bouddhisme"],
        correctIndex: 0,
        explanation: "Les caravanes véhiculaient aussi des idées : l'islam, l'écriture arabe, les livres, les savants et de nouvelles techniques architecturales.",
      },
      {
        id: "course-histoire-21-commerce-transsaharien-quiz-5",
        question: "Qu'est-ce qui a provoqué le déclin du commerce transsaharien ?",
        options: ["Une glaciation du Sahara", "L'essor du commerce maritime européen sur les côtes", "La disparition des chameaux", "Une interdiction de l'or"],
        correctIndex: 1,
        explanation: "À partir des XVᵉ-XVIᵉ siècles, le commerce maritime atlantique détourna les échanges des routes du désert, après près d'un millénaire de commerce transsaharien.",
      },
    ],
  },
  {
    id: "course-histoire-22-islamisation-afrique-ouest",
    categoryId: "histoire",
    emoji: "☪️",
    title: "Islam en Afrique de l'Ouest",
    description: "Porté par le commerce plutôt que par la conquête, l'islam s'est diffusé progressivement en Afrique de l'Ouest, se mêlant aux cultures locales pour donner un islam profondément africain.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-22-islamisation-afrique-ouest-lesson-1",
        title: "Une religion venue par le commerce",
        blocks: [
          {
            type: "paragraphe",
            text: "Des marchands diffusent l’**islam** le long des routes transsahariennes.",
          },
          {
            type: "chiffreCle",
            valeur: "IXe-XIe s.",
            legende: "diffusion pacifique de l'islam par les marchands",
          },
          {
            type: "paragraphe",
            text: "La religion progresse par les échanges, les migrations et les réseaux de lettrés. Les contacts entre **Maghreb** et Sahel accompagnent cette diffusion, sans conversion immédiate de toutes les populations.",
          },
          {
            type: "image",
            alt: "Routes commerciales reliant le royaume du Ghana au nord du Sahara.",
            legende: "Routes transsahariennes médiévales : axes de commerce et de diffusion religieuse.",
            credit: "Siyajkak, CC0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Trans-Saharan_routes_early.svg",
            licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "L'islam se diffuse par le commerce, pas la conquête",
              "**IXᵉ-XIᵉ siècles** : diffusion pacifique et progressive",
              "Les marchands transsahariens, premiers vecteurs de la religion",
            ],
          },
        ],
      },
      {
        id: "course-histoire-22-islamisation-afrique-ouest-lesson-2",
        title: "L'adoption par les élites",
        blocks: [
          {
            type: "paragraphe",
            text: "La religion nouvelle a d'abord conquis les palais, avant de conquérir les cœurs. Les deux mondes ont longtemps coexisté.",
          },
          {
            type: "citation",
            texte: "Nulle contrainte en religion.",
            auteur: "Coran, sourate 2",
          },
          {
            type: "paragraphe",
            text: "L'islam est d'abord adopté par les **marchands** puis par les **souverains** et leurs cours : la religion facilite le commerce et la diplomatie. Mais une grande partie de la population conserve longtemps ses religions traditionnelles.",
          },
          {
            type: "aRetenir",
            points: [
              "Les marchands puis les souverains adoptent l'islam en premier",
              "Le peuple garde longtemps ses religions traditionnelles",
              "Une coexistence caractéristique des grands empires sahéliens",
            ],
          },
        ],
      },
      {
        id: "course-histoire-22-islamisation-afrique-ouest-lesson-3",
        title: "Les grands foyers du savoir",
        blocks: [
          {
            type: "paragraphe",
            text: "À **Tombouctou** et **Djenné**, mosquées, écoles et lettrés font circuler le savoir.",
          },
          {
            type: "chiffreCle",
            valeur: "2 villes",
            legende: "Tombouctou et Djenné, foyers de savoir islamique",
          },
          {
            type: "paragraphe",
            text: "Ces cités deviennent des foyers de savoir islamique. Le pèlerinage de Mansa Moussa à La Mecque, en 1324, illustre aussi l'ancrage de l'islam au sommet de l'État malien.",
          },
          {
            type: "aRetenir",
            points: [
              "Tombouctou et Djenné, brillants foyers de savoir islamique",
              "Mosquées, écoles coraniques et lettrés dans ces cités",
              "**1324** : le pèlerinage de Mansa Moussa illustre cet ancrage",
            ],
          },
        ],
      },
      {
        id: "course-histoire-22-islamisation-afrique-ouest-lesson-4",
        title: "Un islam africain",
        blocks: [
          {
            type: "paragraphe",
            text: "En s'enracinant loin de ses terres d'origine, l'**islam** n'a pas effacé les traditions locales. Il s'y est mêlé.",
          },
          {
            type: "frise",
            evenements: [
              { date: "IXe-XIe s.", texte: "Premiers contacts, diffusion pacifique" },
              { date: "XIe-XVIe s.", texte: "Coexistence avec les traditions locales" },
              { date: "XVIIIe-XIXe s.", texte: "Mouvements de réforme plus stricts" },
            ],
          },
          {
            type: "paragraphe",
            text: "En s'enracinant, l'islam se mêle aux coutumes locales, donnant des pratiques originales et diverses. Longtemps, il cohabite avec les traditions africaines plutôt que de les remplacer. Cet islam « **africanisé** » est l'une des grandes richesses de la région.",
          },
          {
            type: "aRetenir",
            points: [
              "L'islam se mêle aux coutumes locales, sans les effacer",
              "Un islam « africanisé », original et divers",
              "Une richesse culturelle et spirituelle propre à la région",
            ],
          },
        ],
      },
      {
        id: "course-histoire-22-islamisation-afrique-ouest-lesson-5",
        title: "Réformes et jihads",
        blocks: [
          {
            type: "paragraphe",
            text: "Aux XVIIIᵉ et XIXᵉ siècles, la coexistence tranquille des débuts ne suffit plus à certains réformateurs, qui veulent un islam plus strict.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1804", texte: "Jihad d'Ousman dan Fodio, califat de Sokoto" },
              { date: "XIXe s.", texte: "El Hadj Oumar Tall fonde un vaste empire" },
              { date: "XXIe s.", texte: "L'islam au cœur de l'identité ouest-africaine" },
            ],
          },
          {
            type: "paragraphe",
            text: "**Ousman dan Fodio** crée le califat de Sokoto ; **El Hadj Oumar Tall** fonde un vaste empire. Ces mouvements imposent un islam plus strict, par la réforme et le jihad. Aujourd'hui, l'islam est au cœur de l'identité de l'Afrique de l'Ouest, dans une forme qui lui est propre.",
          },
          {
            type: "aRetenir",
            points: [
              "**1804** : jihad d'Ousman dan Fodio, califat de Sokoto",
              "**El Hadj Oumar Tall** fonde un vaste empire réformateur",
              "L'islam, aujourd'hui au cœur de l'identité ouest-africaine",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-22-islamisation-afrique-ouest-quiz-1",
        question: "Comment l'islam s'est-il principalement diffusé en Afrique de l'Ouest ?",
        options: ["Par la conquête militaire", "Par le commerce, de façon pacifique", "Par la mer uniquement", "Il ne s'y est jamais diffusé"],
        correctIndex: 1,
        explanation: "L'islam s'est répandu surtout grâce aux marchands transsahariens, à partir des IXᵉ-XIᵉ siècles, de manière progressive et pacifique.",
      },
      {
        id: "course-histoire-22-islamisation-afrique-ouest-quiz-2",
        question: "Qui a adopté l'islam en premier en Afrique de l'Ouest ?",
        options: ["Les paysans des campagnes", "Les marchands et les souverains", "Les enfants", "Personne"],
        correctIndex: 1,
        explanation: "L'islam fut d'abord adopté par les marchands puis les cours royales, utile au commerce et à la diplomatie, tandis que le peuple gardait longtemps ses religions traditionnelles.",
      },
      {
        id: "course-histoire-22-islamisation-afrique-ouest-quiz-3",
        question: "Quelle ville fut un grand foyer de savoir islamique ?",
        options: ["Tombouctou", "Carthage", "Le Grand Zimbabwe", "Kilwa"],
        correctIndex: 0,
        explanation: "Tombouctou (comme Djenné) fut un centre majeur de savoir islamique en Afrique de l'Ouest, avec ses mosquées et ses écoles coraniques.",
      },
      {
        id: "course-histoire-22-islamisation-afrique-ouest-quiz-4",
        question: "Qu'est-ce qui caractérise longtemps l'islam en Afrique de l'Ouest ?",
        options: ["Sa coexistence avec les religions traditionnelles", "L'interdiction totale des traditions", "L'absence de mosquées", "Le rejet du commerce"],
        correctIndex: 0,
        explanation: "L'islam a longtemps coexisté avec les croyances traditionnelles, donnant un islam « africanisé », original et divers.",
      },
      {
        id: "course-histoire-22-islamisation-afrique-ouest-quiz-5",
        question: "Qui a lancé un jihad et fondé le califat de Sokoto au XIXᵉ siècle ?",
        options: ["Mansa Moussa", "Ousman dan Fodio", "Soundiata Keïta", "Ezana"],
        correctIndex: 1,
        explanation: "Ousman dan Fodio mena le jihad de 1804 et fonda le califat de Sokoto ; El Hadj Oumar Tall fonda un autre vaste empire réformateur.",
      },
    ],
  },
  {
    id: "course-histoire-23-cote-swahilie",
    categoryId: "histoire",
    emoji: "⛵",
    title: "Côte swahilie",
    description: "Le long de la côte est-africaine, des cités marchandes florissantes ont fait le lien entre l'Afrique, l'Arabie, la Perse, l'Inde et la Chine, donnant naissance à la civilisation swahilie.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-23-cote-swahilie-lesson-1",
        title: "Un chapelet de cités",
        blocks: [
          {
            type: "paragraphe",
            text: "Le littoral de l’Afrique orientale forme un réseau de cités.",
          },
          {
            type: "chiffreCle",
            valeur: "VIIIe siècle",
            legende: "essor des cités-États swahilies sur la côte est",
          },
          {
            type: "paragraphe",
            text: "**Lamu**, Mombasa, Zanzibar et **Kilwa** relient leur arrière-pays à l’océan Indien. Leurs habitants développent une culture urbaine swahilie, façonnée par des siècles d’échanges.",
          },
          {
            type: "image",
            alt: "Rue bordée de maisons dans la vieille ville de Lamu.",
            legende: "Rue de Lamu, cité swahilie du littoral kényan.",
            credit: "Mzein04, CC BY-SA 4.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Lamu_old_town_street.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          },
          {
            type: "aRetenir",
            points: [
              "**VIIIᵉ siècle** : essor des cités-États swahilies",
              "Kilwa, Mombasa, Zanzibar : des ports tournés vers l'océan Indien",
              "Une prospérité fondée sur le commerce maritime",
            ],
          },
        ],
      },
      {
        id: "course-histoire-23-cote-swahilie-lesson-2",
        title: "Le commerce de l'océan Indien",
        blocks: [
          {
            type: "paragraphe",
            text: "Deux fois par an, le vent change de sens sur l'océan Indien — et avec lui, le sens du commerce tout entier.",
          },
          {
            type: "chiffreCle",
            valeur: "2",
            legende: "saisons de mousson qui rythment la navigation",
          },
          {
            type: "paragraphe",
            text: "Ces cités exportent or, ivoire, bois précieux — et des captifs — et importent tissus, porcelaine chinoise, épices et verre. Les marins utilisent les vents de la **mousson** pour naviguer vers l'Arabie et l'Inde et en revenir. **Kilwa**, qui contrôle l'or de Sofala, devient particulièrement riche.",
          },
          {
            type: "aRetenir",
            points: [
              "Or, ivoire, bois précieux exportés ; tissus, épices importés",
              "Les vents de **mousson** rythment les allers-retours",
              "**Kilwa**, enrichie par le contrôle de l'or de Sofala",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Les marins swahilis exploitaient un rythme que l'océan leur offrait gratuitement : les moussons soufflent dans un sens, puis dans l'autre, comme une horloge naturelle.",
          },
        ],
      },
      {
        id: "course-histoire-23-cote-swahilie-lesson-3",
        title: "La naissance de la culture swahilie",
        blocks: [
          {
            type: "paragraphe",
            text: "Ni tout à fait africaine, ni tout à fait arabe : une civilisation nouvelle est née de la rencontre entre deux mondes que l'océan reliait.",
          },
          {
            type: "chiffreCle",
            valeur: "3",
            legende: "influences venues d'Arabie, de Perse et d'Inde",
          },
          {
            type: "paragraphe",
            text: "De la rencontre entre les racines africaines (bantoues) et ces influences naît une civilisation originale : la culture **swahilie**. Sa langue, le **swahili**, est une langue bantoue enrichie de nombreux mots arabes. Musulmane et urbaine, elle bâtit des villes de pierre de corail.",
          },
          {
            type: "aRetenir",
            points: [
              "Racines bantoues + influences arabes, persanes, indiennes",
              "Le **swahili** : une langue bantoue enrichie de mots arabes",
              "Des villes de pierre de corail, musulmanes et urbaines",
            ],
          },
        ],
      },
      {
        id: "course-histoire-23-cote-swahilie-lesson-4",
        title: "Kilwa et l'apogée",
        blocks: [
          {
            type: "paragraphe",
            text: "Au XIVᵉ siècle, **Ibn Battuta** admire la richesse de Kilwa.",
          },
          {
            type: "citation",
            texte: "Kilwa est l'une des plus belles et des mieux bâties villes du monde.",
            auteur: "Ibn Battuta, XIVe siècle",
          },
          {
            type: "paragraphe",
            text: "**Kilwa Kisiwani**, riche cité swahilie, frappe monnaie et possède le palais de Husuni Kubwa. Son site, dont la Grande Mosquée, est aujourd'hui classé par l'UNESCO.",
          },
          {
            type: "image",
            alt: "Arcades ruinées de la Grande Mosquée de Kilwa Kisiwani.",
            legende: "Ruines de la Grande Mosquée de Kilwa, photographiées en 2016.",
            credit: "Janetmpurdy, CC BY-SA 4.0, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Great_Mosque_Kilwa_Kisiwani_Tanzania.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
          },
          {
            type: "aRetenir",
            points: [
              "**Kilwa Kisiwani**, la plus riche des cités swahilies",
              "Une monnaie propre et le palais de Husuni Kubwa",
              "Classée aujourd'hui au patrimoine mondial de l'UNESCO",
            ],
          },
        ],
      },
      {
        id: "course-histoire-23-cote-swahilie-lesson-5",
        title: "L'arrivée des Portugais",
        blocks: [
          {
            type: "paragraphe",
            text: "Vers 1500, des navires venus d'Europe changèrent en quelques années l'équilibre d'un commerce vieux de sept cents ans.",
          },
          {
            type: "frise",
            evenements: [
              { date: "VIIIe s.", texte: "Naissance des cités-États swahilies" },
              { date: "XIVe s.", texte: "Apogée de Kilwa, admirée par Ibn Battuta" },
              { date: "1500", texte: "Arrivée des Portugais, début du déclin" },
            ],
          },
          {
            type: "paragraphe",
            text: "Vers 1500, les **Portugais** (Vasco de Gama) attaquent et prennent le contrôle des cités côtières, provoquant leur déclin. Plus tard, les Arabes omanais s'imposent à **Zanzibar**. Malgré tout, l'héritage swahili demeure : sa langue est aujourd'hui parlée par plus de cent millions de personnes.",
          },
          {
            type: "aRetenir",
            points: [
              "**1500** : les Portugais prennent le contrôle des cités côtières",
              "Plus tard, les Arabes omanais s'imposent à Zanzibar",
              "Le swahili : plus de 100 millions de locuteurs aujourd'hui",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-23-cote-swahilie-quiz-1",
        question: "Où se situait la côte swahilie ?",
        options: ["Sur la côte est-africaine", "Sur la côte atlantique", "Au bord de la Méditerranée", "Au milieu du Sahara"],
        correctIndex: 0,
        explanation: "La côte swahilie longeait l'Afrique de l'Est (Kenya, Tanzanie, Mozambique), face à l'océan Indien, avec des ports comme Kilwa, Mombasa et Zanzibar.",
      },
      {
        id: "course-histoire-23-cote-swahilie-quiz-2",
        question: "Qu'utilisaient les marins pour naviguer sur l'océan Indien ?",
        options: ["Des moteurs à vapeur", "Les vents de la mousson", "Des rames uniquement", "Des courants souterrains"],
        correctIndex: 1,
        explanation: "Les vents de la mousson, qui changent de sens deux fois par an, permettaient d'aller vers l'Arabie et l'Inde et d'en revenir.",
      },
      {
        id: "course-histoire-23-cote-swahilie-quiz-3",
        question: "De quel mélange est née la culture swahilie ?",
        options: ["De racines africaines (bantoues) et d'influences arabes, persanes, indiennes", "De cultures uniquement européennes", "D'aucun mélange", "De cultures amérindiennes"],
        correctIndex: 0,
        explanation: "Le swahili est une culture bantoue enrichie d'apports arabes, persans et indiens ; sa langue en porte encore la trace.",
      },
      {
        id: "course-histoire-23-cote-swahilie-quiz-4",
        question: "Quelle cité swahilie, admirée par Ibn Battuta, était la plus riche ?",
        options: ["Le Caire", "Kilwa", "Tombouctou", "Carthage"],
        correctIndex: 1,
        explanation: "Kilwa Kisiwani, qui contrôlait l'or de Sofala, était la plus riche ; Ibn Battuta la décrivit comme l'une des plus belles villes du monde.",
      },
      {
        id: "course-histoire-23-cote-swahilie-quiz-5",
        question: "Qui a provoqué le déclin des cités swahilies vers 1500 ?",
        options: ["Les Portugais", "Les Romains", "Les Mongols", "Les Aztèques"],
        correctIndex: 0,
        explanation: "Vers 1500, les Portugais (Vasco de Gama) prirent le contrôle des cités côtières ; les Arabes omanais s'imposèrent plus tard à Zanzibar.",
      },
    ],
  },
  {
    id: "course-histoire-24-traite-negriere-transatlantique",
    categoryId: "histoire",
    emoji: "⛓️",
    title: "Traite transatlantique",
    description: "Du XVIᵉ au XIXᵉ siècle, des millions d'Africains furent déportés vers les Amériques. C'est l'une des plus grandes tragédies de l'histoire humaine, reconnue comme un crime contre l'humanité.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-24-traite-negriere-transatlantique-lesson-1",
        title: "Un commerce triangulaire",
        blocks: [
          {
            type: "paragraphe",
            text: "Du XVIᵉ au XIXᵉ siècle, la **traite atlantique** relie trois continents.",
          },
          {
            type: "chiffreCle",
            valeur: "3 continents",
            legende: "reliés par le commerce triangulaire",
          },
          {
            type: "paragraphe",
            text: "Des marchandises européennes arrivent en Afrique. Des personnes réduites en esclavage sont déportées vers les Amériques : la « **traversée du milieu** ». Sucre, coton et tabac des plantations repartent vers l'Europe.",
          },
          {
            type: "image",
            alt: "Plan du Brookes montrant les personnes captives entassées.",
            legende: "Le Brookes : plan abolitionniste d'un navire négrier du XVIIIe siècle.",
            credit: "James Phillips, British Library, domaine public, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Brookes_slave_ship,_British_Library_(cropped).jpg",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "Un commerce entre trois continents, sur trois siècles",
              "La « traversée du milieu » : Afrique vers les Amériques",
              "Sucre, coton, tabac : le troisième trajet, vers l'Europe",
            ],
          },
        ],
      },
      {
        id: "course-histoire-24-traite-negriere-transatlantique-lesson-2",
        title: "L'ampleur de la déportation",
        blocks: [
          {
            type: "paragraphe",
            text: "Douze millions de personnes : c'est le nombre estimé d'Africains déportés de force à travers l'Atlantique, entre le XVIᵉ et le XIXᵉ siècle.",
          },
          {
            type: "chiffreCle",
            valeur: "12 millions",
            legende: "personnes déportées à travers l'Atlantique",
          },
          {
            type: "paragraphe",
            text: "Entassées à bord des navires, entre **un million et demi** et **deux millions** de personnes meurent durant la seule traversée. La plupart des personnes déportées viennent d'Afrique de l'Ouest et d'Afrique centrale.",
          },
          {
            type: "aRetenir",
            points: [
              "**12 millions** de personnes déportées à travers l'Atlantique",
              "Entre 1,5 et 2 millions meurent pendant la traversée",
              "La majorité vient d'Afrique de l'Ouest et centrale",
            ],
          },
        ],
      },
      {
        id: "course-histoire-24-traite-negriere-transatlantique-lesson-3",
        title: "Les conséquences pour l'Afrique",
        blocks: [
          {
            type: "paragraphe",
            text: "La traite ne déplace pas seulement des personnes. Elle transforme en profondeur les sociétés qui restent sur le continent, pendant des générations.",
          },
          {
            type: "chiffreCle",
            valeur: "4",
            legende: "effets majeurs sur les sociétés africaines",
          },
          {
            type: "paragraphe",
            text: "**Dépeuplement**, **guerres** menées pour capturer des prisonniers, déstabilisation des sociétés et des États, distorsions économiques : les effets touchent tout le continent. Des royaumes côtiers sont eux-mêmes entraînés dans ce système.",
          },
          {
            type: "aRetenir",
            points: [
              "Dépeuplement et guerres menées pour capturer des prisonniers",
              "Déstabilisation durable des sociétés et des États",
              "Des royaumes côtiers eux-mêmes entraînés dans le système",
            ],
          },
        ],
      },
      {
        id: "course-histoire-24-traite-negriere-transatlantique-lesson-4",
        title: "Résistances et abolitions",
        blocks: [
          {
            type: "paragraphe",
            text: "Les personnes asservies résistent par les fuites et les révoltes.",
          },
          {
            type: "citation",
            texte: "Il repoussera par les racines, car elles sont profondes et nombreuses.",
            auteur: "Paroles attribuées à Toussaint Louverture",
          },
          {
            type: "paragraphe",
            text: "La **révolution haïtienne** aboutit à l’indépendance en **1804**.",
          },
          {
            type: "image",
            alt: "Combats autour du fort de la Crête-à-Pierrot.",
            legende: "La Crête-à-Pierrot, 1802 : gravure d’après Auguste Raffet.",
            credit: "Auguste Raffet / Ernst Hébert, domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Combat_et_prise_de_la_Cr%C3%AAte-%C3%A0-Pierrot_-_Auguste_Raffet.jpg",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "Révoltes, fuites (marronnage), préservation des cultures : la résistance continue",
              "**1791-1804** : la révolution de Haïti, première république noire indépendante",
              "Abolitions progressives au XIXᵉ siècle, sous la pression abolitionniste",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Le marronnage — la fuite vers des zones reculées — a permis à des communautés de personnes libres de se maintenir, durant des générations.",
          },
        ],
      },
      {
        id: "course-histoire-24-traite-negriere-transatlantique-lesson-5",
        title: "Mémoire et héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "L'UNESCO a lancé le projet « La Route de l'esclave » pour étudier cette histoire et en entretenir la mémoire.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1807", texte: "Abolition de la traite au Royaume-Uni" },
              { date: "1848", texte: "Abolition de l'esclavage en France" },
              { date: "1865", texte: "Abolition de l'esclavage aux États-Unis" },
              { date: "1888", texte: "Abolition de l'esclavage au Brésil" },
            ],
          },
          {
            type: "paragraphe",
            text: "La **diaspora africaine** a profondément façonné les Amériques : musique, religion, cultures. Des lieux comme **Gorée**, Ouidah ou Elmina portent aujourd'hui cette mémoire.",
          },
          {
            type: "aRetenir",
            points: [
              "Le projet « La Route de l'esclave » entretient la mémoire",
              "**Gorée**, Ouidah, Elmina : des lieux de mémoire",
              "La diaspora a façonné les Amériques : musique, religion, cultures",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Reconnue aujourd'hui comme un crime contre l'humanité, la traite transatlantique impose, pour l'UNESCO comme pour de nombreux pays, un devoir de mémoire toujours actif.",
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-24-traite-negriere-transatlantique-quiz-1",
        question: "Comment appelle-t-on souvent l'organisation de la traite atlantique ?",
        options: ["Le commerce triangulaire", "Le commerce transsaharien", "La route de la soie", "Le troc local"],
        correctIndex: 0,
        explanation: "La traite atlantique est souvent décrite comme un commerce triangulaire entre l'Europe, l'Afrique et les Amériques, reliant trois continents sur trois trajets successifs.",
      },
      {
        id: "course-histoire-24-traite-negriere-transatlantique-quiz-2",
        question: "Combien d'Africains furent, selon les estimations, déportés à travers l'Atlantique ?",
        options: ["Quelques milliers", "Environ 12 millions", "Environ 500", "Aucun"],
        correctIndex: 1,
        explanation: "On estime qu'au moins douze millions d'Africains furent déportés vers les Amériques ; entre 1,5 et 2 millions moururent durant la seule traversée.",
      },
      {
        id: "course-histoire-24-traite-negriere-transatlantique-quiz-3",
        question: "Quelle a été une conséquence majeure de la traite pour l'Afrique ?",
        options: ["Un enrichissement général", "Le dépeuplement et la déstabilisation des sociétés", "Une longue période de paix", "Aucune conséquence"],
        correctIndex: 1,
        explanation: "La traite provoqua dépeuplement, guerres menées pour capturer des prisonniers, et déstabilisation durable des sociétés et des États africains, y compris des royaumes côtiers.",
      },
      {
        id: "course-histoire-24-traite-negriere-transatlantique-quiz-4",
        question: "Quelle révolution aboutit à la première république noire indépendante ?",
        options: ["La révolution de Haïti", "La révolution française", "La révolution russe", "La révolution américaine"],
        correctIndex: 0,
        explanation: "La révolution de Haïti (1791-1804), née d'une révolte d'esclaves menée entre autres par Toussaint Louverture, donna la première république noire indépendante.",
      },
      {
        id: "course-histoire-24-traite-negriere-transatlantique-quiz-5",
        question: "Quel projet de l'UNESCO entretient la mémoire de la traite ?",
        options: ["« La Route de l'esclave »", "« La Route de la soie »", "« Le Grand Nil »", "« Mémoire du désert »"],
        correctIndex: 0,
        explanation: "Le projet « La Route de l'esclave » de l'UNESCO étudie cette histoire et en entretient la mémoire, autour de lieux comme Gorée, Ouidah et Elmina.",
      },
    ],
  },
  {
    id: "course-histoire-25-conference-berlin",
    categoryId: "histoire",
    emoji: "🗺️",
    title: "Conférence de Berlin",
    description: "En 1884-1885, les puissances européennes se réunirent à Berlin pour se partager l'Afrique — sans un seul Africain à la table. Ses conséquences pèsent encore aujourd'hui.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-25-conference-berlin-lesson-1",
        title: "La « course à l'Afrique »",
        blocks: [
          {
            type: "paragraphe",
            text: "À la fin du **XIXᵉ siècle**, les puissances européennes se lancent dans une compétition pour s'emparer de territoires africains.",
          },
          {
            type: "chiffreCle",
            valeur: "fin XIXe s.",
            legende: "début de la « course à l'Afrique »",
          },
          {
            type: "paragraphe",
            text: "Chaque puissance veut s'emparer de territoires pour leurs **ressources**, leurs marchés et le prestige. Cette rivalité entre pays européens menace de dégénérer en conflits directs entre eux.",
          },
          {
            type: "aRetenir",
            points: [
              "Fin du **XIXᵉ siècle** : rivalité européenne pour l'Afrique",
              "Ressources, marchés, prestige : les moteurs de cette course",
              "Un risque de conflit direct entre puissances européennes",
            ],
          },
        ],
      },
      {
        id: "course-histoire-25-conference-berlin-lesson-2",
        title: "La conférence de Berlin",
        blocks: [
          {
            type: "paragraphe",
            text: "En **1884-1885**, des puissances se réunissent à Berlin. Aucun Africain n'y représente le continent.",
          },
          {
            type: "chiffreCle",
            valeur: "0",
            legende: "représentant africain présent à la conférence de Berlin",
          },
          {
            type: "paragraphe",
            text: "**Bismarck** convoque la conférence, qui fixe notamment le principe d'« occupation effective ». Le bassin du Congo passe sous le contrôle personnel du roi belge Léopold II.",
          },
          {
            type: "image",
            alt: "Gravure des délégués à Berlin devant une carte d'Afrique.",
            legende: "La conférence de Berlin, gravure de 1884.",
            credit: "Adalbert von Roessler, domaine public, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Kongokonferenz.jpg",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "**1884-1885** : conférence de Berlin, convoquée par Bismarck",
              "Le principe d'« occupation effective » fixe les règles du partage",
              "Le bassin du Congo attribué à titre personnel à Léopold II",
            ],
          },
        ],
      },
      {
        id: "course-histoire-25-conference-berlin-lesson-3",
        title: "Des frontières artificielles",
        blocks: [
          {
            type: "paragraphe",
            text: "Les frontières coloniales traversent souvent des sociétés et des territoires anciens.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1884-1885", texte: "Conférence de Berlin, tracé des zones d'influence" },
              { date: "1885-1914", texte: "Frontières imposées par la conquête militaire" },
              { date: "XXe-XXIe s.", texte: "Conflits frontaliers hérités de ce découpage" },
            ],
          },
          {
            type: "paragraphe",
            text: "La carte de **1914** montre le résultat des conquêtes, bien après **Berlin**.",
          },
          {
            type: "citation",
            texte: "Quand les éléphants se battent, c'est l'herbe qui souffre.",
            auteur: "Proverbe swahili",
          },
          {
            type: "image",
            alt: "Carte des possessions coloniales et des États indépendants en Afrique.",
            legende: "L’Afrique en 1914 : carte des dominations coloniales.",
            credit: "Hogweard, domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Africa_map_1914.svg",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "Des frontières tracées à la règle, sans égard aux peuples",
              "Communautés séparées, groupes rivaux réunis de force",
              "La plupart des frontières africaines actuelles datent de ce découpage",
            ],
          },
        ],
      },
      {
        id: "course-histoire-25-conference-berlin-lesson-4",
        title: "La conquête",
        blocks: [
          {
            type: "paragraphe",
            text: "Entre 1885 et 1914, la conférence de Berlin est suivie d'une conquête militaire. À la veille de la Première Guerre mondiale, presque tout le continent est colonisé.",
          },
          {
            type: "chiffreCle",
            valeur: "2",
            legende: "pays restés à peu près indépendants en 1914 (Éthiopie, Liberia)",
          },
          {
            type: "paragraphe",
            text: "La conférence est suivie d'une conquête militaire entre 1885 et 1914. Seuls l'**Éthiopie** et le **Liberia** restent à peu près indépendants. La conquête est souvent brutale, comme les atrocités de l'« État indépendant du Congo » de Léopold II.",
          },
          {
            type: "aRetenir",
            points: [
              "**1885-1914** : conquête militaire de presque tout le continent",
              "Seuls l'Éthiopie et le Liberia restent à peu près indépendants",
              "Des atrocités documentées, notamment au Congo de Léopold II",
            ],
          },
        ],
      },
      {
        id: "course-histoire-25-conference-berlin-lesson-5",
        title: "Des conséquences durables",
        blocks: [
          {
            type: "paragraphe",
            text: "**Frontières artificielles**, économies d'exploitation, sociétés bouleversées : les effets du partage de Berlin se font encore sentir aujourd'hui.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1884-1885", texte: "Conférence de Berlin" },
              { date: "1885-1914", texte: "Conquête coloniale de l'Afrique" },
              { date: "XXe-XXIe s.", texte: "Conflits frontaliers, peuples divisés" },
            ],
          },
          {
            type: "paragraphe",
            text: "Les effets du partage de Berlin se font encore sentir aujourd'hui : **conflits frontaliers**, peuples divisés. La conférence de Berlin reste le symbole d'une Afrique dont le sort fut décidé sans les Africains.",
          },
          {
            type: "aRetenir",
            points: [
              "Frontières artificielles, économies d'exploitation, sociétés bouleversées",
              "Des effets encore sensibles aujourd'hui : conflits, peuples divisés",
              "Le symbole d'un continent dont le sort fut décidé sans lui",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-25-conference-berlin-quiz-1",
        question: "Comment appelle-t-on la ruée européenne sur l'Afrique à la fin du XIXᵉ siècle ?",
        options: ["La « course à l'Afrique »", "La « route de la soie »", "La « paix des braves »", "La « ruée vers l'or »"],
        correctIndex: 0,
        explanation: "Cette ruée est appelée la « course à l'Afrique » (Scramble for Africa) ; chaque puissance y cherche ressources, marchés et prestige.",
      },
      {
        id: "course-histoire-25-conference-berlin-quiz-2",
        question: "Qui participait à la conférence de Berlin de 1884-1885 ?",
        options: ["Les puissances européennes, sans aucun Africain", "Uniquement des rois africains", "Les Nations unies", "Des représentants de chaque peuple africain"],
        correctIndex: 0,
        explanation: "Seules les puissances européennes y participaient, convoquées par le chancelier allemand Bismarck ; aucun représentant africain ne fut convié.",
      },
      {
        id: "course-histoire-25-conference-berlin-quiz-3",
        question: "Comment les frontières coloniales ont-elles été tracées en Afrique ?",
        options: ["Selon les peuples et royaumes existants", "À la règle sur des cartes, en ignorant les réalités locales", "Par des votes populaires", "Selon les fleuves uniquement"],
        correctIndex: 1,
        explanation: "Les frontières furent tracées arbitrairement, ignorant peuples, royaumes et réalités ethniques ou linguistiques.",
      },
      {
        id: "course-histoire-25-conference-berlin-quiz-4",
        question: "Quels pays africains restaient à peu près indépendants vers 1914 ?",
        options: ["L'Éthiopie et le Liberia", "Le Mali et le Ghana", "L'Égypte et le Maroc", "Aucun"],
        correctIndex: 0,
        explanation: "À la veille de 1914, seuls l'Éthiopie et le Liberia demeuraient à peu près indépendants ; le reste du continent était colonisé.",
      },
      {
        id: "course-histoire-25-conference-berlin-quiz-5",
        question: "À qui le bassin du Congo fut-il attribué à titre personnel ?",
        options: ["Au roi Léopold II de Belgique", "À la reine Victoria", "À Bismarck", "Au sultan ottoman"],
        correctIndex: 0,
        explanation: "Le bassin du Congo fut attribué personnellement au roi belge Léopold II, sous le nom d'« État indépendant du Congo ».",
      },
    ],
  },
  {
    id: "course-histoire-26-resistances-colonisation",
    categoryId: "histoire",
    emoji: "✊",
    title: "Résister à la colonisation",
    description: "Partout, les Africains ont résisté à la conquête coloniale — par les armes, la diplomatie ou la révolte. Des figures d'héroïsme trop souvent oubliées.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-26-resistances-colonisation-lesson-1",
        title: "Une conquête contestée",
        blocks: [
          {
            type: "paragraphe",
            text: "La colonisation ne s'est pas faite sans **résistance**. Partout sur le continent, des peuples se sont opposés à la conquête.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1880s-1900s", texte: "Résistance « primaire » à la conquête coloniale" },
              { date: "1904-1908", texte: "Répression herero et nama en Namibie" },
              { date: "1905-1907", texte: "Révolte Maji Maji au Tanganyika" },
            ],
          },
          {
            type: "paragraphe",
            text: "Partout, les **Africains** résistent, militairement, diplomatiquement et spirituellement. On distingue une résistance « primaire », contre la conquête elle-même, puis des révoltes une fois l'occupation installée. L'idée d'une Afrique passive face à l'Europe est un mythe.",
          },
          {
            type: "aRetenir",
            points: [
              "Une résistance militaire, diplomatique et spirituelle, partout",
              "Résistance « primaire », puis révoltes une fois l'occupation installée",
              "Le mythe d'une Afrique passive, définitivement contredit",
            ],
          },
        ],
      },
      {
        id: "course-histoire-26-resistances-colonisation-lesson-2",
        title: "Samory Touré",
        blocks: [
          {
            type: "paragraphe",
            text: "**Samory Touré** construit un État puissant en Afrique de l’Ouest.",
          },
          {
            type: "chiffreCle",
            valeur: "~17 ans",
            legende: "la résistance de Samory Touré face aux Français",
          },
          {
            type: "paragraphe",
            text: "Il résiste longtemps à l’expansion française grâce à son armée, ses déplacements stratégiques et la diplomatie. Capturé en **1898**, il est déporté au Gabon.",
          },
          {
            type: "image",
            alt: "Portrait photographique de Samori Touré.",
            legende: "Samory Touré, portrait photographique ancien.",
            credit: "Photographe inconnu, domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Almamy_Samory_Tour%C3%A9.jpg",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "**Samory Touré**, fondateur de l'empire du Wassoulou",
              "Une guerre de mouvement, des armes fabriquées sur place",
              "Capturé en **1898**, après près de 17 ans de résistance",
            ],
          },
        ],
      },
      {
        id: "course-histoire-26-resistances-colonisation-lesson-3",
        title: "Béhanzin et les autres rois",
        blocks: [
          {
            type: "paragraphe",
            text: "Plusieurs souverains affrontent la conquête coloniale.",
          },
          {
            type: "chiffreCle",
            valeur: "1904-1908",
            legende: "répression allemande des Herero et Nama, reconnue comme un génocide",
          },
          {
            type: "paragraphe",
            text: "**Béhanzin** résiste au Dahomey, les Ashanti aux Britanniques, et **Lat Dior** à la France. En Namibie, les Allemands répriment les Herero et Nama par un génocide.",
          },
          {
            type: "aRetenir",
            points: [
              "**Béhanzin**, les Ashanti, Lat Dior : des résistances à travers le continent",
              "**1904-1908** : répression allemande des Herero et Nama en Namibie",
              "Une répression reconnue aujourd'hui comme un génocide",
            ],
          },
        ],
      },
      {
        id: "course-histoire-26-resistances-colonisation-lesson-4",
        title: "Révoltes et résistances populaires",
        blocks: [
          {
            type: "paragraphe",
            text: "Une fois la conquête achevée, la résistance ne s'arrête pas. Elle continue, sous d'autres formes, partout où l'ordre colonial s'installe.",
          },
          {
            type: "chiffreCle",
            valeur: "1905-1907",
            legende: "la révolte Maji Maji au Tanganyika",
          },
          {
            type: "paragraphe",
            text: "La révolte **Maji Maji** (Tanganyika, **1905-1907**) soulève de nombreux peuples contre les Allemands. Ailleurs, la résistance passe par des prophètes, des mouvements religieux et le refus quotidien de l'ordre colonial.",
          },
          {
            type: "aRetenir",
            points: [
              "La révolte **Maji Maji** (1905-1907) soulève le Tanganyika",
              "Des prophètes et mouvements religieux portent aussi la résistance",
              "Le refus quotidien de l'ordre colonial, une résistance discrète",
            ],
          },
        ],
      },
      {
        id: "course-histoire-26-resistances-colonisation-lesson-5",
        title: "Un héritage de dignité",
        blocks: [
          {
            type: "paragraphe",
            text: "Militairement, la plupart de ces résistances furent vaincues. Mais elles n'ont pas disparu : elles ont nourri ce qui allait suivre.",
          },
          {
            type: "citation",
            texte: "Un arbre qu'on abat peut repousser de ses racines.",
            auteur: "Proverbe ouest-africain",
          },
          {
            type: "paragraphe",
            text: "Militairement, ces résistances sont le plus souvent vaincues, en raison de la supériorité des **armes européennes**. Mais elles prouvent que les Africains n'ont jamais été passifs, et elles nourrissent les futurs **mouvements nationalistes** et la marche vers l'indépendance.",
          },
          {
            type: "aRetenir",
            points: [
              "Vaincues militairement, face à la supériorité des armes européennes",
              "La preuve que les Africains n'ont jamais été passifs",
              "Un terreau pour le nationalisme et les indépendances à venir",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Ces figures de résistance, longtemps passées sous silence dans les récits coloniaux, sont aujourd'hui célébrées comme des héros à travers tout le continent et sa diaspora.",
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-26-resistances-colonisation-quiz-1",
        question: "La colonisation de l'Afrique s'est-elle faite sans résistance ?",
        options: ["Oui, sans aucune résistance", "Non, les Africains ont résisté partout", "Seuls quelques villages ont résisté", "La résistance fut uniquement diplomatique"],
        correctIndex: 1,
        explanation: "Les Africains ont résisté partout, par les armes, la diplomatie et la révolte, contredisant le mythe d'une Afrique passive.",
      },
      {
        id: "course-histoire-26-resistances-colonisation-quiz-2",
        question: "Combien de temps Samory Touré a-t-il résisté aux Français ?",
        options: ["Près de dix-sept ans", "Une semaine", "Cinquante ans", "Six mois"],
        correctIndex: 0,
        explanation: "Samory Touré, fondateur de l'empire du Wassoulou, tint tête aux Français pendant près de dix-sept ans, jusqu'à sa capture en 1898.",
      },
      {
        id: "course-histoire-26-resistances-colonisation-quiz-3",
        question: "Quel roi du Dahomey a résisté aux Français ?",
        options: ["Béhanzin", "Osei Tutu", "Ménélik II", "Afonso Iᵉʳ"],
        correctIndex: 0,
        explanation: "Le roi Béhanzin du Dahomey combattit les Français entre 1890 et 1894.",
      },
      {
        id: "course-histoire-26-resistances-colonisation-quiz-4",
        question: "Quelle grande révolte souleva des peuples contre les Allemands en Afrique de l'Est ?",
        options: ["La révolte Maji Maji", "La révolution de Haïti", "La bataille de Kirina", "La guerre du Tabouret d'or"],
        correctIndex: 0,
        explanation: "La révolte Maji Maji (1905-1907) souleva de nombreux peuples du Tanganyika contre les Allemands.",
      },
      {
        id: "course-histoire-26-resistances-colonisation-quiz-5",
        question: "Quel a été l'héritage des résistances africaines à la colonisation ?",
        options: ["Elles ont nourri les futurs mouvements d'indépendance", "Elles ont été oubliées sans effet", "Elles ont renforcé la colonisation", "Elles n'ont jamais existé"],
        correctIndex: 0,
        explanation: "Bien que souvent vaincues militairement, ces résistances ont nourri le nationalisme et la marche vers l'indépendance.",
      },
    ],
  },
  {
    id: "course-histoire-27-bataille-adoua",
    categoryId: "histoire",
    emoji: "🦅",
    title: "Bataille d'Adoua",
    description: "En 1896, l'Éthiopie infligea à l'Italie une défaite retentissante — la plus grande victoire d'un État africain contre une puissance coloniale européenne.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-27-bataille-adoua-lesson-1",
        title: "L'Éthiopie menacée",
        blocks: [
          {
            type: "paragraphe",
            text: "À la fin du XIXᵉ siècle, un désaccord sur un traité met le feu aux poudres entre l'Italie et l'Éthiopie.",
          },
          {
            type: "chiffreCle",
            valeur: "1889",
            legende: "le traité de Wuchale, à l'origine du conflit",
          },
          {
            type: "paragraphe",
            text: "L'**Italie** cherche à coloniser l'Éthiopie. Le conflit naît d'un désaccord sur le traité de **Wuchale** (1889) : la version italienne prétend établir un protectorat sur l'Éthiopie, ce que celle-ci refuse catégoriquement.",
          },
          {
            type: "aRetenir",
            points: [
              "L'Italie cherche à coloniser l'Éthiopie, fin XIXᵉ siècle",
              "**1889** : désaccord sur le traité de Wuchale",
              "L'Éthiopie refuse catégoriquement le protectorat italien",
            ],
          },
        ],
      },
      {
        id: "course-histoire-27-bataille-adoua-lesson-2",
        title: "Ménélik II",
        blocks: [
          {
            type: "paragraphe",
            text: "**Ménélik II** prépare la défense de l’Éthiopie.",
          },
          {
            type: "citation",
            texte: "Une seule main ne peut applaudir.",
            auteur: "Proverbe amharique",
          },
          {
            type: "paragraphe",
            text: "Il rassemble des forces, modernise l’armement et mobilise les chefs régionaux. Sa diplomatie sert l’indépendance face à l’**Italie**, dont les ambitions conduisent à la guerre.",
          },
          {
            type: "image",
            alt: "Portrait photographique de l’empereur Ménélik II.",
            legende: "Ménélik II, empereur d’Éthiopie, photographie ancienne.",
            credit: "Unknown, CC BY-SA 4.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Portrait_of_Menelik_II.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          },
          {
            type: "aRetenir",
            points: [
              "**Ménélik II** unit les forces éthiopiennes, modernise l'armée",
              "Achat d'armes modernes, ralliement des seigneurs régionaux",
              "L'impératrice **Taytu**, rôle de premier plan dans la résistance",
            ],
          },
        ],
      },
      {
        id: "course-histoire-27-bataille-adoua-lesson-3",
        title: "La bataille d'Adoua",
        blocks: [
          {
            type: "paragraphe",
            text: "Le **1er mars 1896**, l’armée éthiopienne affronte les envahisseurs italiens.",
          },
          {
            type: "chiffreCle",
            valeur: "100 000",
            legende: "soldats éthiopiens engagés à la bataille d'Adoua",
          },
          {
            type: "paragraphe",
            text: "À **Adoua**, les forces réunies par Ménélik II remportent une victoire décisive. Cette défaite italienne protège l’indépendance éthiopienne et retentit bien au-delà du pays.",
          },
          {
            type: "image",
            alt: "Soldats et officiers représentés dans une bataille.",
            legende: "Adoua : illustration britannique publiée le 11 avril 1896.",
            credit: "The Graphic, 1896, domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Adoua_1.jpg",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "**1er mars 1896** : bataille d'Adoua",
              "**100 000** soldats éthiopiens engagés",
              "Une victoire décisive, l'une des plus célèbres d'Afrique",
            ],
          },
        ],
      },
      {
        id: "course-histoire-27-bataille-adoua-lesson-4",
        title: "Une victoire au retentissement mondial",
        blocks: [
          {
            type: "paragraphe",
            text: "En **1896**, la victoire d'Adoua oblige l'Italie à reconnaître l'indépendance de l'Éthiopie. Son retentissement dépasse les frontières du pays.",
          },
          {
            type: "chiffreCle",
            valeur: "1896",
            legende: "reconnaissance de l'indépendance éthiopienne par l'Italie",
          },
          {
            type: "paragraphe",
            text: "**Adoua** contraint l'**Italie** à reconnaître la pleine indépendance de l'Éthiopie (traité d'Addis-Abeba). La nouvelle résonne dans le monde entier et inspire les panafricanistes et les peuples noirs du monde.",
          },
          {
            type: "aRetenir",
            points: [
              "L'Italie reconnaît la pleine indépendance de l'Éthiopie",
              "**1896** : une victoire qui préserve l'indépendance éthiopienne",
              "Une nouvelle qui inspire les panafricanistes du monde entier",
            ],
          },
          {
            type: "leSavaisTu",
            text: "La nouvelle de la victoire d'Adoua traversa les océans et fut célébrée jusque dans la presse afro-américaine, des décennies avant les grands mouvements de décolonisation.",
          },
        ],
      },
      {
        id: "course-histoire-27-bataille-adoua-lesson-5",
        title: "Héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "**Adoua** ne fut pas qu'une bataille gagnée. Ce fut la preuve, pour tout un continent, qu'une autre issue était possible.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1889", texte: "Traité de Wuchale, désaccord initial" },
              { date: "1896", texte: "Victoire éthiopienne à Adoua" },
              { date: "1936-1941", texte: "Brève occupation italienne" },
            ],
          },
          {
            type: "paragraphe",
            text: "Grâce à Adoua, l'Éthiopie reste indépendante (hormis une brève occupation italienne de **1936 à 1941**). La bataille devient un symbole de fierté et de résistance anticoloniale, célébré à travers tout le continent et la diaspora.",
          },
          {
            type: "aRetenir",
            points: [
              "L'Éthiopie reste indépendante, sauf occupation brève (1936-1941)",
              "Un symbole de fierté et de résistance anticoloniale",
              "La preuve qu'une victoire africaine sur le colonialisme était possible",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-27-bataille-adoua-quiz-1",
        question: "Quelle puissance européenne cherchait à coloniser l'Éthiopie ?",
        options: ["L'Italie", "La France", "La Grande-Bretagne", "Le Portugal"],
        correctIndex: 0,
        explanation: "C'est l'Italie qui chercha à coloniser l'Éthiopie à la fin du XIXᵉ siècle, sur fond de désaccord autour du traité de Wuchale.",
      },
      {
        id: "course-histoire-27-bataille-adoua-quiz-2",
        question: "Quel traité est à l'origine du conflit ?",
        options: ["Le traité de Wuchale", "Le traité de Versailles", "Le traité de Tordesillas", "Le traité d'Addis-Abeba"],
        correctIndex: 0,
        explanation: "Le désaccord sur le traité de Wuchale (1889) déclencha le conflit.",
      },
      {
        id: "course-histoire-27-bataille-adoua-quiz-3",
        question: "Quel empereur éthiopien a mené la résistance à Adoua ?",
        options: ["Ménélik II", "Ezana", "Lalibela", "Haïlé Sélassié"],
        correctIndex: 0,
        explanation: "L'empereur Ménélik II unit les forces éthiopiennes et remporta la bataille d'Adoua, aux côtés de l'impératrice Taytu.",
      },
      {
        id: "course-histoire-27-bataille-adoua-quiz-4",
        question: "En quelle année eut lieu la bataille d'Adoua ?",
        options: ["En 1896", "En 1591", "En 1960", "En 1235"],
        correctIndex: 0,
        explanation: "La bataille d'Adoua eut lieu le 1er mars 1896, avec environ 100 000 soldats éthiopiens engagés.",
      },
      {
        id: "course-histoire-27-bataille-adoua-quiz-5",
        question: "Pourquoi la bataille d'Adoua est-elle si importante ?",
        options: ["Elle a permis à l'Éthiopie de préserver son indépendance", "C'est la première bataille de l'histoire", "Elle a marqué le début de la colonisation", "Elle n'a eu aucune conséquence"],
        correctIndex: 0,
        explanation: "La victoire d'Adoua en 1896 préserve l'indépendance de l'Éthiopie, reconnue par l'Italie au traité d'Addis-Abeba. Elle devient un symbole de résistance anticoloniale.",
      },
    ],
  },
  {
    id: "course-histoire-28-independances-africaines",
    categoryId: "histoire",
    emoji: "🎉",
    title: "Indépendances africaines",
    description: "Au milieu du XXᵉ siècle, les peuples africains reconquièrent leur souveraineté. L'année 1960 restera « l'année de l'Afrique ».",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-28-independances-africaines-lesson-1",
        title: "La montée du nationalisme",
        blocks: [
          {
            type: "paragraphe",
            text: "Le **nationalisme** africain remet l’ordre colonial en cause.",
          },
          {
            type: "chiffreCle",
            valeur: "1945",
            legende: "fin de la Seconde Guerre mondiale, essor du nationalisme africain",
          },
          {
            type: "paragraphe",
            text: "Élites instruites, anciens combattants et mouvements urbains réclament des droits, puis l’indépendance. Le **panafricanisme** et les principes de l’ONU les inspirent ; Nkrumah porte ce combat au Ghana.",
          },
          {
            type: "image",
            alt: "Portrait photographique de Kwame Nkrumah.",
            legende: "Kwame Nkrumah, dirigeant du nationalisme et de l’indépendance ghanéens.",
            credit: "The National Archives UK, OGL v1.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Kwame_Nkrumah_-_The_National_Archives_UK_-_CO_1069-50-1-crop.jpg",
            licenseUrl: "http://NationalArchives.gov.uk/doc/open-government-licence/version/1/",
          },
          {
            type: "aRetenir",
            points: [
              "**1945** : la fin de la guerre relance le nationalisme africain",
              "Élites, anciens combattants, mouvements urbains portent la contestation",
              "L'inspiration du panafricanisme et de la décolonisation mondiale",
            ],
          },
        ],
      },
      {
        id: "course-histoire-28-independances-africaines-lesson-2",
        title: "Le Ghana, pionnier",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1957, un seul pays ouvre la voie — et devient, pour tout le continent, une étincelle.",
          },
          {
            type: "chiffreCle",
            valeur: "1957",
            legende: "le Ghana, première indépendance d'Afrique subsaharienne",
          },
          {
            type: "paragraphe",
            text: "Le **Ghana**, conduit par **Kwame Nkrumah**, devient la première colonie d'Afrique subsaharienne à accéder à l'indépendance. Au nord, plusieurs pays (Égypte, Libye, Soudan, Maroc, Tunisie) étaient déjà devenus indépendants dans les années 1950.",
          },
          {
            type: "image",
            alt: "L'Arche de l'Indépendance à Accra, au Ghana.",
            legende: "Accra : la porte de l'Étoile noire, photographiée en 2023.",
            credit: "Kwameghana, CC BY-SA 4.0, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Black_Star_Gate_in_Accra.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
          },
          {
            type: "aRetenir",
            points: [
              "**1957** : le Ghana, première indépendance subsaharienne",
              "Mené par **Kwame Nkrumah**, une étincelle pour le continent",
              "L'Afrique du Nord, déjà indépendante dans les années 1950",
            ],
          },
        ],
      },
      {
        id: "course-histoire-28-independances-africaines-lesson-3",
        title: "1960, l'année de l'Afrique",
        blocks: [
          {
            type: "paragraphe",
            text: "Dix-sept pays. Une seule année. Jamais l'Afrique n'avait connu une vague d'indépendances aussi massive et aussi rapide.",
          },
          {
            type: "chiffreCle",
            valeur: "17",
            legende: "pays africains indépendants en une seule année, 1960",
          },
          {
            type: "paragraphe",
            text: "L'année **1960** est décisive : dix-sept pays africains accèdent à l'indépendance la même année, dont de nombreuses anciennes colonies françaises, le **Nigeria** et le **Congo**. On l'a surnommée « l'année de l'Afrique ».",
          },
          {
            type: "aRetenir",
            points: [
              "**17** pays deviennent indépendants en 1960",
              "Anciennes colonies françaises, le **Nigeria**, le Congo",
              "1960, surnommée « l'année de l'Afrique »",
            ],
          },
          {
            type: "leSavaisTu",
            text: "En une seule année, l'Afrique a vu naître plus de nouveaux États indépendants que n'importe quel autre continent n'en avait jamais connu sur une aussi courte période.",
          },
        ],
      },
      {
        id: "course-histoire-28-independances-africaines-lesson-4",
        title: "Des voies diverses",
        blocks: [
          {
            type: "paragraphe",
            text: "Certaines indépendances se sont signées à la table des négociations. D'autres se sont payées, très cher, par les armes.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1954-1962", texte: "Guerre d'indépendance de l'Algérie" },
              { date: "années 1970", texte: "Indépendance des colonies portugaises" },
              { date: "1990-1994", texte: "Namibie puis fin de l'apartheid" },
            ],
          },
          {
            type: "paragraphe",
            text: "Les indépendances suivent des chemins variés. Certaines sont négociées pacifiquement, d'autres arrachées par la lutte armée : la guerre d'**Algérie** (1954-1962), plus tard les colonies portugaises dans les années 1970, le **Zimbabwe** (1980), la **Namibie** (1990), et enfin la fin de l'apartheid en Afrique du Sud (1994).",
          },
          {
            type: "aRetenir",
            points: [
              "Des voies négociées, d'autres arrachées par la lutte armée",
              "**1954-1962** : la guerre d'indépendance de l'Algérie",
              "Jusqu'en 1994, avec la fin de l'apartheid",
            ],
          },
        ],
      },
      {
        id: "course-histoire-28-independances-africaines-lesson-5",
        title: "Espoirs et défis",
        blocks: [
          {
            type: "paragraphe",
            text: "L'indépendance n'a pas résolu tous les problèmes d'un seul coup. Elle a surtout donné aux Africains le droit de les affronter eux-mêmes.",
          },
          {
            type: "citation",
            texte: "Enfin, la bataille est terminée ! Le Ghana, notre cher pays, est libre à jamais !",
            auteur: "Kwame Nkrumah, 1957",
          },
          {
            type: "paragraphe",
            text: "L'indépendance apporte un immense espoir, mais aussi des défis : frontières héritées de la colonisation, économies fragiles, ingérences de la **guerre froide**, coups d'État. Le rêve d'une **unité africaine** reste à construire.",
          },
          {
            type: "aRetenir",
            points: [
              "Un immense espoir, mais des défis bien réels",
              "Frontières héritées, économies fragiles, ingérences de la guerre froide",
              "Un tournant majeur, une source de fierté durable",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-28-independances-africaines-quiz-1",
        question: "Qu'est-ce qui a favorisé la montée du nationalisme africain ?",
        options: ["La fin de la Seconde Guerre mondiale et la décolonisation mondiale", "La conférence de Berlin", "Le commerce transsaharien", "La chute de Rome"],
        correctIndex: 0,
        explanation: "Après 1945, le nationalisme africain s'affirma, porté par le panafricanisme et la décolonisation mondiale.",
      },
      {
        id: "course-histoire-28-independances-africaines-quiz-2",
        question: "Quel fut le premier pays d'Afrique subsaharienne à devenir indépendant, en 1957 ?",
        options: ["Le Ghana", "Le Nigeria", "Le Kenya", "Le Sénégal"],
        correctIndex: 0,
        explanation: "Le Ghana, mené par Kwame Nkrumah, devint indépendant en 1957, une première en Afrique subsaharienne.",
      },
      {
        id: "course-histoire-28-independances-africaines-quiz-3",
        question: "Pourquoi 1960 est-elle appelée « l'année de l'Afrique » ?",
        options: ["Parce que 17 pays y devinrent indépendants", "Parce que l'Afrique fut colonisée", "Parce qu'une guerre mondiale y éclata", "Parce que l'ONU fut créée"],
        correctIndex: 0,
        explanation: "En 1960, dix-sept pays africains accédèrent à l'indépendance, dont le Nigeria et le Congo : « l'année de l'Afrique ».",
      },
      {
        id: "course-histoire-28-independances-africaines-quiz-4",
        question: "Quelle indépendance fut obtenue au terme d'une longue guerre ?",
        options: ["Celle de l'Algérie (1954-1962)", "Celle du Ghana", "Celle du Sénégal", "Celle du Nigeria"],
        correctIndex: 0,
        explanation: "L'indépendance de l'Algérie fut arrachée par une guerre (1954-1962).",
      },
      {
        id: "course-histoire-28-independances-africaines-quiz-5",
        question: "Quel défi les nouveaux États indépendants ont-ils rencontré ?",
        options: ["Des frontières héritées de la colonisation et des économies fragiles", "Une absence totale de population", "Un excès de richesses", "Aucun défi"],
        correctIndex: 0,
        explanation: "Les jeunes États firent face aux frontières coloniales, à des économies fragiles et aux ingérences de la guerre froide.",
      },
    ],
  },
  {
    id: "course-histoire-29-panafricanisme-union-africaine",
    categoryId: "histoire",
    emoji: "🌍",
    title: "Panafricanisme",
    description: "L'idée que les Africains partagent un destin commun a donné naissance à de puissants mouvements et à des institutions d'unité continentale, de l'OUA à l'Union africaine.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-29-panafricanisme-union-africaine-lesson-1",
        title: "L'idée panafricaine",
        blocks: [
          {
            type: "paragraphe",
            text: "Le **panafricanisme** affirme la solidarité des Africains et de leur diaspora.",
          },
          {
            type: "chiffreCle",
            valeur: "début XXe s.",
            legende: "les premiers Congrès panafricains",
          },
          {
            type: "paragraphe",
            text: "Des intellectuels comme **Du Bois** et Marcus Garvey contribuent à diffuser cette idée. Les premiers congrès panafricains précèdent les indépendances et nourrissent le projet d’unité.",
          },
          {
            type: "image",
            alt: "Portrait photographique de W. E. B. Du Bois, en costume.",
            legende: "W. E. B. Du Bois, photographie de 1907.",
            credit: "James E. Purdy, domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:W.E.B._Du_Bois_by_James_E._Purdy,_1907_(3x4).jpg",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "Le panafricanisme : solidarité entre l'Afrique et sa diaspora",
              "Des racines dans la diaspora : **Du Bois**, Garvey",
              "Les premiers Congrès panafricains, début du XXᵉ siècle",
            ],
          },
        ],
      },
      {
        id: "course-histoire-29-panafricanisme-union-africaine-lesson-2",
        title: "Les pères de l'unité",
        blocks: [
          {
            type: "paragraphe",
            text: "Une fédération immédiate, ou une intégration plus lente ? Après les indépendances, les grands dirigeants africains ne s'accordaient pas tous sur la marche à suivre.",
          },
          {
            type: "citation",
            texte: "Il vaut mieux se gouverner soi-même mal que d'être bien gouverné par d'autres.",
            auteur: "Kwame Nkrumah",
          },
          {
            type: "paragraphe",
            text: "Après les indépendances, des dirigeants portent ce rêve. **Kwame Nkrumah** (Ghana) prône des « États-Unis d'Afrique ». D'autres — **Nyerere**, **Senghor**, Haïlé Sélassié, Nasser — ont des visions différentes, entre fédération immédiate et intégration progressive.",
          },
          {
            type: "aRetenir",
            points: [
              "**Kwame Nkrumah** prône des « États-Unis d'Afrique »",
              "**Nyerere**, Senghor, Haïlé Sélassié, Nasser : d'autres visions",
              "Fédération immédiate ou intégration progressive : le débat",
            ],
          },
        ],
      },
      {
        id: "course-histoire-29-panafricanisme-union-africaine-lesson-3",
        title: "L'OUA",
        blocks: [
          {
            type: "paragraphe",
            text: "En **1963**, une trentaine d'États encore jeunes décident de se donner, ensemble, une organisation commune.",
          },
          {
            type: "chiffreCle",
            valeur: "1963",
            legende: "fondation de l'OUA à Addis-Abeba",
          },
          {
            type: "paragraphe",
            text: "L'**Organisation de l'unité africaine** (OUA) est fondée à Addis-Abeba par une trentaine d'États. Elle vise à promouvoir l'unité, à défendre la souveraineté et à achever la décolonisation, en soutenant les mouvements de libération.",
          },
          {
            type: "aRetenir",
            points: [
              "**1963** : fondation de l'OUA à Addis-Abeba",
              "Une trentaine d'États fondateurs",
              "Objectif : unité, souveraineté, fin de la décolonisation",
            ],
          },
        ],
      },
      {
        id: "course-histoire-29-panafricanisme-union-africaine-lesson-4",
        title: "De l'OUA à l'Union africaine",
        blocks: [
          {
            type: "paragraphe",
            text: "En **2002**, l’**Union africaine** succède à l’OUA.",
          },
          {
            type: "chiffreCle",
            valeur: "2002",
            legende: "l'OUA laisse place à l'Union africaine",
          },
          {
            type: "paragraphe",
            text: "À Addis-Abeba, son siège accueille les institutions d’un projet d’intégration, de paix et de développement. Commission et Parlement accompagnent cette nouvelle organisation, en partie inspirée de l’Union européenne.",
          },
          {
            type: "image",
            alt: "Tour et centre de conférences du siège de l’Union africaine.",
            legende: "Siège de l’Union africaine à Addis-Abeba, photographie contemporaine.",
            credit: "Andrew Moore, CC BY-SA 2.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:African_Union_Conference_Centre_building.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
          },
          {
            type: "aRetenir",
            points: [
              "**2002** : l'OUA devient l'Union africaine",
              "Un modèle en partie inspiré de l'Union européenne",
              "Siège à **Addis-Abeba**, comme l'OUA avant elle",
            ],
          },
        ],
      },
      {
        id: "course-histoire-29-panafricanisme-union-africaine-lesson-5",
        title: "Aujourd'hui",
        blocks: [
          {
            type: "paragraphe",
            text: "55 États membres, une zone de libre-échange continentale : le panafricanisme n'est plus seulement un rêve, c'est aussi une administration.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1963", texte: "Fondation de l'OUA" },
              { date: "2002", texte: "Naissance de l'Union africaine" },
              { date: "2063", texte: "Horizon de l'Agenda 2063" },
            ],
          },
          {
            type: "paragraphe",
            text: "L'**Union africaine** (55 États membres) œuvre pour la paix et la sécurité, l'intégration économique — avec la Zone de libre-échange continentale africaine (**ZLECAf**) — et une vision de long terme, l'**Agenda 2063**.",
          },
          {
            type: "aRetenir",
            points: [
              "**55** États membres de l'Union africaine",
              "La **ZLECAf**, zone de libre-échange continentale",
              "L'**Agenda 2063**, vision de long terme",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-29-panafricanisme-union-africaine-quiz-1",
        question: "Qu'est-ce que le panafricanisme ?",
        options: ["L'idée d'unité et de solidarité entre les peuples africains et la diaspora", "Une religion", "Une langue africaine", "Un fleuve"],
        correctIndex: 0,
        explanation: "Le panafricanisme prône l'unité et la solidarité des peuples africains et de leur diaspora, avec des racines chez Du Bois et Garvey.",
      },
      {
        id: "course-histoire-29-panafricanisme-union-africaine-quiz-2",
        question: "Quel dirigeant prônait les « États-Unis d'Afrique » ?",
        options: ["Kwame Nkrumah", "Nelson Mandela", "Ménélik II", "Léopold II"],
        correctIndex: 0,
        explanation: "Kwame Nkrumah, du Ghana, défendait l'idée d'« États-Unis d'Afrique », face à des visions plus progressives comme celle de Senghor.",
      },
      {
        id: "course-histoire-29-panafricanisme-union-africaine-quiz-3",
        question: "En quelle année l'OUA a-t-elle été fondée ?",
        options: ["En 1963", "En 1884", "En 2002", "En 1896"],
        correctIndex: 0,
        explanation: "L'Organisation de l'unité africaine fut fondée en 1963 à Addis-Abeba, par une trentaine d'États.",
      },
      {
        id: "course-histoire-29-panafricanisme-union-africaine-quiz-4",
        question: "Par quelle organisation l'OUA a-t-elle été remplacée en 2002 ?",
        options: ["L'Union africaine", "L'ONU", "L'Union européenne", "La CEDEAO"],
        correctIndex: 0,
        explanation: "En 2002, l'OUA laissa place à l'Union africaine (UA), en partie inspirée du modèle européen.",
      },
      {
        id: "course-histoire-29-panafricanisme-union-africaine-quiz-5",
        question: "Comment s'appelle la vision de long terme de l'Union africaine ?",
        options: ["L'Agenda 2063", "Le Plan Marshall", "Le rêve américain", "L'Agenda 21"],
        correctIndex: 0,
        explanation: "L'Agenda 2063 est la vision de développement à long terme de l'Union africaine, aux côtés de la ZLECAf.",
      },
    ],
  },
  {
    id: "course-histoire-30-apartheid-mandela",
    categoryId: "histoire",
    emoji: "🕊️",
    title: "Mandela et l'apartheid",
    description: "En Afrique du Sud, un régime de ségrégation raciale a opprimé la majorité noire — jusqu'à la victoire d'une longue lutte pour la liberté, incarnée par Nelson Mandela.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-30-apartheid-mandela-lesson-1",
        title: "Qu'est-ce que l'apartheid ?",
        blocks: [
          {
            type: "paragraphe",
            text: "En **1948**, l'Afrique du Sud impose l'**apartheid**, « séparation » en afrikaans.",
          },
          {
            type: "chiffreCle",
            valeur: "1948",
            legende: "l'apartheid devient un système institutionnalisé",
          },
          {
            type: "paragraphe",
            text: "Le pouvoir de la minorité blanche classe les habitants selon leur « race » et sépare les populations. La majorité noire est privée de droits, de terres et de liberté de circulation.",
          },
          {
            type: "image",
            alt: "Ancienne inscription réservant une salle aux personnes blanches.",
            legende: "Atherston : ancien panneau ségrégationniste, photographié en 2021.",
            credit: "Wynlib40, CC BY-SA 4.0, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:General_Waiting_Room_Whites_Only_-_Atherston_Station,_Eastern_Cape,_South_Africa.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
          },
          {
            type: "aRetenir",
            points: [
              "**1948** : début de l'apartheid en Afrique du Sud",
              "Un système de lois classant les habitants par « race »",
              "La majorité noire privée de droits, de terres, de liberté",
            ],
          },
        ],
      },
      {
        id: "course-histoire-30-apartheid-mandela-lesson-2",
        title: "La résistance",
        blocks: [
          {
            type: "paragraphe",
            text: "Face à l'apartheid, une résistance s'organise. Elle est réprimée à plusieurs reprises, par la force.",
          },
          {
            type: "chiffreCle",
            valeur: "2",
            legende: "répressions majeures : Sharpeville (1960), Soweto (1976)",
          },
          {
            type: "paragraphe",
            text: "Le **Congrès national africain** (ANC) et d'autres organisations mènent la résistance. Les protestations sont réprimées : le massacre de **Sharpeville** (1960), le soulèvement de **Soweto** (1976). Face à l'échec de la lutte pacifique, **Nelson Mandela**, dirigeant de l'ANC, se tourne vers la lutte armée.",
          },
          {
            type: "aRetenir",
            points: [
              "L'**ANC** mène la résistance à l'apartheid",
              "**Sharpeville** (1960), Soweto (1976) : des répressions marquantes",
              "**Mandela** se tourne vers la lutte armée après l'échec pacifique",
            ],
          },
        ],
      },
      {
        id: "course-histoire-30-apartheid-mandela-lesson-3",
        title: "Mandela emprisonné",
        blocks: [
          {
            type: "paragraphe",
            text: "**Mandela** devient le symbole d’une résistance maintenue en prison.",
          },
          {
            type: "chiffreCle",
            valeur: "27 ans",
            legende: "durée de l'emprisonnement de Nelson Mandela",
          },
          {
            type: "paragraphe",
            text: "Condamné à la perpétuité, il passe une grande partie de sa détention à **Robben Island**. Il y subit les conditions du régime tout en poursuivant son engagement politique.",
          },
          {
            type: "image",
            alt: "Petite cellule avec couchage au sol et barreaux.",
            legende: "La cellule de Nelson Mandela à Robben Island, vue actuelle.",
            credit: "Paul Mannix, CC BY-SA 2.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Nelson_Mandela%27s_prison_cell,_Robben_Island,_South_Africa.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
          },
          {
            type: "aRetenir",
            points: [
              "**27 ans** de détention, dont l'île de Robben Island",
              "Mandela devient le symbole mondial de la lutte",
              "Sanctions et boycotts internationaux font pression sur le régime",
            ],
          },
        ],
      },
      {
        id: "course-histoire-30-apartheid-mandela-lesson-4",
        title: "La fin de l'apartheid",
        blocks: [
          {
            type: "paragraphe",
            text: "Sous la double pression de la résistance intérieure et de la communauté internationale, le régime sud-africain finit par céder.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1990", texte: "Libération de Nelson Mandela" },
              { date: "1990-1993", texte: "Négociations, abolition des lois de l'apartheid" },
              { date: "1994", texte: "Premières élections démocratiques multiraciales" },
            ],
          },
          {
            type: "paragraphe",
            text: "Le président **F. W. de Klerk** libère **Mandela** en 1990. Des négociations s'ouvrent, les lois de l'apartheid sont abolies, et en 1994 ont lieu les premières élections démocratiques multiraciales.",
          },
          {
            type: "aRetenir",
            points: [
              "**1990** : F. W. de Klerk libère Nelson Mandela",
              "Négociations, puis abolition des lois de l'apartheid",
              "**1994** : premières élections démocratiques multiraciales",
            ],
          },
        ],
      },
      {
        id: "course-histoire-30-apartheid-mandela-lesson-5",
        title: "Mandela président et héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "En **1994**, Nelson Mandela devient le premier président noir d'Afrique du Sud, démocratiquement élu.",
          },
          {
            type: "citation",
            texte: "J'ai chéri l'idéal d'une société libre et démocratique. C'est un idéal pour lequel je suis prêt à mourir.",
            auteur: "Nelson Mandela, procès de Rivonia (1964)",
          },
          {
            type: "paragraphe",
            text: "**Mandela** choisit la voie de la réconciliation plutôt que de la vengeance, notamment avec la Commission « Vérité et Réconciliation ». Prix Nobel de la paix, il reste un symbole de dignité et de pardon.",
          },
          {
            type: "aRetenir",
            points: [
              "**1994** : Mandela, premier président noir d'Afrique du Sud",
              "La réconciliation choisie plutôt que la vengeance",
              "Prix Nobel de la paix, symbole de dignité et de pardon",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-30-apartheid-mandela-quiz-1",
        question: "Qu'était l'apartheid ?",
        options: ["Un système de ségrégation raciale en Afrique du Sud", "Une monnaie africaine", "Un royaume médiéval", "Une fête traditionnelle"],
        correctIndex: 0,
        explanation: "L'apartheid était un système de ségrégation raciale institutionnalisée, imposé dès 1948 par le pouvoir de la minorité blanche.",
      },
      {
        id: "course-histoire-30-apartheid-mandela-quiz-2",
        question: "Quelle organisation a mené la lutte contre l'apartheid ?",
        options: ["Le Congrès national africain (ANC)", "L'OTAN", "La Ligue arabe", "L'OUA uniquement"],
        correctIndex: 0,
        explanation: "Le Congrès national africain (ANC) fut au cœur de la résistance à l'apartheid, malgré des répressions comme Sharpeville et Soweto.",
      },
      {
        id: "course-histoire-30-apartheid-mandela-quiz-3",
        question: "Combien d'années Nelson Mandela a-t-il passées en prison ?",
        options: ["Vingt-sept ans", "Deux ans", "Cinquante ans", "Six mois"],
        correctIndex: 0,
        explanation: "Mandela passa vingt-sept ans en prison, en grande partie sur l'île de Robben Island.",
      },
      {
        id: "course-histoire-30-apartheid-mandela-quiz-4",
        question: "En quelle année eurent lieu les premières élections démocratiques multiraciales ?",
        options: ["En 1994", "En 1960", "En 1948", "En 1976"],
        correctIndex: 0,
        explanation: "Les premières élections démocratiques multiraciales se tinrent en 1994, après la libération de Mandela en 1990.",
      },
      {
        id: "course-histoire-30-apartheid-mandela-quiz-5",
        question: "Quelle voie Mandela a-t-il choisie une fois devenu président ?",
        options: ["La réconciliation plutôt que la vengeance", "La guerre civile", "Le rétablissement de l'apartheid", "L'exil de la population blanche"],
        correctIndex: 0,
        explanation: "Devenu président en 1994, Mandela promut la réconciliation, notamment via la Commission « Vérité et Réconciliation ».",
      },
    ],
  },
  {
    id: "course-histoire-31-tekrour-islam",
    categoryId: "histoire",
    emoji: "🕌",
    title: "Royaume du Tekrour",
    description: "Sur les rives du fleuve Sénégal, le royaume du Tekrour fut l'un des tout premiers États d'Afrique de l'Ouest à embrasser l'islam, bien avant l'empire du Mali.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-31-tekrour-islam-lesson-1",
        title: "Un royaume sur le fleuve",
        blocks: [
          {
            type: "paragraphe",
            text: "Le **Tekrour** s’établit dans la vallée du fleuve Sénégal.",
          },
          {
            type: "chiffreCle",
            valeur: "IXe-XIe s.",
            legende: "le Tekrour, rival de l'empire du Ghana",
          },
          {
            type: "paragraphe",
            text: "Situé dans la région du **Fouta Toro**, ce royaume précède la puissance du Mali. Il participe à l’histoire des populations halpulaar, aussi appelées Toucouleurs, et aux échanges sénégambiens.",
          },
          {
            type: "image",
            alt: "Carte des royaumes issus du morcellement de l'ancien Ghana.",
            legende: "Takrour dans la région sénégambienne vers 1200, carte indicative.",
            credit: "T L Miles, CC BY-SA 3.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Ghana_successor_map_1200.png",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            fit: "contain",
          },
          {
            type: "aRetenir",
            points: [
              "Le **Tekrour**, dans la vallée du fleuve Sénégal (Fouta Toro)",
              "Contemporain et rival de l'empire du **Ghana**",
              "Les ancêtres des **Halpulaar** (Toucouleurs)",
            ],
          },
        ],
      },
      {
        id: "course-histoire-31-tekrour-islam-lesson-2",
        title: "L'adoption précoce de l'islam",
        blocks: [
          {
            type: "paragraphe",
            text: "Vers **1040**, un roi se convertit — et son royaume devient, deux siècles avant le Mali, l'un des tout premiers musulmans d'Afrique de l'Ouest.",
          },
          {
            type: "chiffreCle",
            valeur: "1040",
            legende: "le roi War Jabi se convertit à l'islam",
          },
          {
            type: "paragraphe",
            text: "Le **Tekrour** devient ainsi l'un des tout premiers États d'Afrique de l'Ouest à adopter la religion musulmane — bien avant le Mali de Soundiata. Ses habitants sont réputés pour leur ferveur : dans le monde musulman, on appelait longtemps « Tekrour » les pèlerins venus d'Afrique de l'Ouest.",
          },
          {
            type: "aRetenir",
            points: [
              "**1040** : le roi War Jabi se convertit à l'islam",
              "Bien avant l'adoption de l'islam par le Mali",
              "« Tekrour » : un nom donné aux pèlerins d'Afrique de l'Ouest",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Le nom même du Tekrour a fini par désigner, dans tout le monde musulman, l'ensemble des pèlerins venus d'Afrique de l'Ouest en route vers La Mecque.",
          },
        ],
      },
      {
        id: "course-histoire-31-tekrour-islam-lesson-3",
        title: "Commerce et puissance",
        blocks: [
          {
            type: "paragraphe",
            text: "Entre le Sahara et l'Atlantique, un seul fleuve suffisait à faire d'un royaume un carrefour commercial incontournable.",
          },
          {
            type: "citation",
            texte: "Le commerçant honnête et digne de confiance sera avec les prophètes.",
            auteur: "Tradition islamique",
          },
          {
            type: "paragraphe",
            text: "Le royaume contrôle le commerce sur le fleuve : or venu du **Bambouk**, sel, céréales. Sa position stratégique, entre le Sahara et l'Atlantique, en fait un carrefour. Le Tekrour noue par moments des alliances avec les **Almoravides**, le mouvement religieux venu du Sahara.",
          },
          {
            type: "aRetenir",
            points: [
              "Contrôle du commerce fluvial : or du Bambouk, sel, céréales",
              "Une position stratégique entre Sahara et Atlantique",
              "Des alliances par moments avec les **Almoravides**",
            ],
          },
        ],
      },
      {
        id: "course-histoire-31-tekrour-islam-lesson-4",
        title: "Le Fouta Toro",
        blocks: [
          {
            type: "paragraphe",
            text: "Le **Fouta Toro** devient un grand foyer de savoir islamique.",
          },
          {
            type: "chiffreCle",
            valeur: "XVIIIe s.",
            legende: "révolution de Souleymane Baal, fondation de l'Almamat",
          },
          {
            type: "paragraphe",
            text: "**Souleymane Baal** et les lettrés torodbe y conduisent une révolution. L’Almamat qui en résulte est dirigé par un chef religieux, l’Almamy. La carte montre la région au XIXe siècle.",
          },
          {
            type: "image",
            alt: "Carte des États de la vallée du Sénégal, dont le Fouta Toro.",
            legende: "Le Fouta Toro et ses voisins vers 1850, carte indicative.",
            credit: "T L Miles, domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Senegalvalleystatesc1850.png",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "Le **Fouta Toro**, grand foyer de savoir islamique",
              "**XVIIIᵉ siècle** : révolution de Souleymane Baal",
              "L'**Almamat**, État théocratique dirigé par l'Almamy",
            ],
          },
        ],
      },
      {
        id: "course-histoire-31-tekrour-islam-lesson-5",
        title: "Héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Un royaume discret a posé, sans le savoir, les fondations religieuses d'un pays tout entier.",
          },
          {
            type: "frise",
            evenements: [
              { date: "IXe-XIe s.", texte: "Le Tekrour, rival du Ghana" },
              { date: "1040", texte: "Conversion du roi War Jabi à l'islam" },
              { date: "XVIIIe s.", texte: "Fouta Toro, révolution et Almamat" },
            ],
          },
          {
            type: "paragraphe",
            text: "Le **Tekrour** puis le **Fouta Toro** sont considérés comme le berceau de l'islam au Sénégal. Cette terre a donné de grandes figures religieuses, dont plus tard **El Hadj Oumar Tall**. C'est aussi l'histoire de la formation de l'identité halpulaar.",
          },
          {
            type: "aRetenir",
            points: [
              "Le berceau de l'islam au Sénégal",
              "A donné de grandes figures religieuses, dont **El Hadj Oumar Tall**",
              "La formation de l'identité **halpulaar**",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-31-tekrour-islam-quiz-1",
        question: "Le long de quel fleuve s'est développé le Tekrour ?",
        options: ["Le fleuve Sénégal", "Le Nil", "Le fleuve Congo", "Le Zambèze"],
        correctIndex: 0,
        explanation: "Le Tekrour s'est développé dans la vallée du fleuve Sénégal, dans la région du Fouta Toro, contemporain et rival de l'empire du Ghana.",
      },
      {
        id: "course-histoire-31-tekrour-islam-quiz-2",
        question: "Qu'est-ce qui rend le Tekrour remarquable dans l'histoire de l'islam ?",
        options: ["Il a rejeté l'islam", "Il fut l'un des premiers États ouest-africains à l'adopter", "Il a inventé l'islam", "Il n'a jamais connu l'islam"],
        correctIndex: 1,
        explanation: "Vers 1040, le roi War Jabi se convertit, faisant du Tekrour l'un des premiers États musulmans d'Afrique de l'Ouest, bien avant le Mali.",
      },
      {
        id: "course-histoire-31-tekrour-islam-quiz-3",
        question: "De quel peuple les habitants du Tekrour sont-ils les ancêtres ?",
        options: ["Les Halpulaar (Toucouleurs)", "Les Zoulous", "Les Yoruba", "Les Berbères"],
        correctIndex: 0,
        explanation: "Les habitants du Tekrour sont les ancêtres des Halpulaar (Toucouleurs).",
      },
      {
        id: "course-histoire-31-tekrour-islam-quiz-4",
        question: "Comment appelle-t-on la région du Tekrour par la suite ?",
        options: ["Le Fouta Toro", "Le Cayor", "Le Sine", "Le Kanem"],
        correctIndex: 0,
        explanation: "La région devint le Fouta Toro, grand foyer de savoir islamique et berceau de figures comme El Hadj Oumar Tall.",
      },
      {
        id: "course-histoire-31-tekrour-islam-quiz-5",
        question: "Quel titre portait le chef de l'État théocratique du Fouta au XVIIIᵉ siècle ?",
        options: ["L'Almamy", "Le Damel", "Le Bourba", "Le Négus"],
        correctIndex: 0,
        explanation: "L'État théocratique du Fouta (l'Almamat), né de la révolution de Souleymane Baal, était dirigé par un chef religieux, l'Almamy.",
      },
    ],
  },
  {
    id: "course-histoire-32-djolof-royaumes-wolof",
    categoryId: "histoire",
    emoji: "👑",
    title: "Empire du Djolof",
    description: "Du XIVᵉ au XVIᵉ siècle, l'empire du Djolof rassembla les royaumes wolof et sérères du Sénégal, avant de se fragmenter en États rivaux qui structurèrent le pays jusqu'à la colonisation.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-32-djolof-royaumes-wolof-lesson-1",
        title: "La naissance du Djolof",
        blocks: [
          {
            type: "paragraphe",
            text: "La tradition raconte qu'un seul homme aurait uni tous les peuples wolof de la Sénégambie en une seule confédération.",
          },
          {
            type: "chiffreCle",
            valeur: "XIVe siècle",
            legende: "fondation légendaire de l'empire du Djolof",
          },
          {
            type: "paragraphe",
            text: "L'empire du **Djolof** (Jolof) est fondé vers le XIVᵉ siècle. La tradition l'attribue au légendaire **Ndiadiane Ndiaye**, qui aurait uni les peuples wolof de la Sénégambie en une confédération. Le souverain porte le titre de **Bourba Djolof**.",
          },
          {
            type: "aRetenir",
            points: [
              "Fondation légendaire attribuée à **Ndiadiane Ndiaye**, XIVᵉ siècle",
              "Le souverain porte le titre de **Bourba Djolof**",
              "Une confédération des peuples wolof de la Sénégambie",
            ],
          },
        ],
      },
      {
        id: "course-histoire-32-djolof-royaumes-wolof-lesson-2",
        title: "Une confédération de royaumes",
        blocks: [
          {
            type: "paragraphe",
            text: "Un seul empire, cinq royaumes, cinq titres royaux différents : la confédération du Djolof n'avait rien d'un pouvoir uniforme.",
          },
          {
            type: "chiffreCle",
            valeur: "5",
            legende: "royaumes tributaires du Djolof",
          },
          {
            type: "paragraphe",
            text: "Le Djolof regroupe plusieurs royaumes qui lui paient tribut : le **Waalo**, le **Cayor** (Kajoor), le **Baol** (Bawol), ainsi que les royaumes sérères du Sine et du Saloum. Chacun a son propre souverain : le Brak du Waalo, le Damel du Cayor, le Teigne du Baol.",
          },
          {
            type: "aRetenir",
            points: [
              "**5** royaumes tributaires : Waalo, Cayor, Baol, Sine, Saloum",
              "Chaque royaume a son propre titre royal",
              "Le **Damel** du Cayor, le Brak du Waalo",
            ],
          },
        ],
      },
      {
        id: "course-histoire-32-djolof-royaumes-wolof-lesson-3",
        title: "L'organisation sociale",
        blocks: [
          {
            type: "paragraphe",
            text: "Nobles, artisans, griots, guerriers : la société wolof suivait un ordre précis, où chacun avait sa place et son rôle.",
          },
          {
            type: "citation",
            texte: "En Afrique, quand un vieillard meurt, c'est une bibliothèque qui brûle.",
            auteur: "Amadou Hampâté Bâ",
          },
          {
            type: "paragraphe",
            text: "La société wolof est très structurée : nobles, hommes libres, castes d'artisans et de griots, et classes serviles. Les rois s'appuient sur des guerriers de la couronne, les **ceddo**. Les **griots** jouent un rôle essentiel de mémoire, de conseil et de louange.",
          },
          {
            type: "aRetenir",
            points: [
              "Une société structurée : nobles, artisans, griots, classes serviles",
              "Les **ceddo**, guerriers de la couronne au service des rois",
              "Les **griots**, gardiens de la mémoire et du conseil",
            ],
          },
        ],
      },
      {
        id: "course-histoire-32-djolof-royaumes-wolof-lesson-4",
        title: "La fragmentation de 1549",
        blocks: [
          {
            type: "paragraphe",
            text: "En **1549**, la victoire du Cayor à Danki brise la domination du Djolof.",
          },
          {
            type: "chiffreCle",
            valeur: "1549",
            legende: "le Cayor gagne son indépendance à la bataille de Danki",
          },
          {
            type: "paragraphe",
            text: "**Amari Ngoné Sobel Fall** mène cette émancipation. Les royaumes côtiers deviennent autonomes ; le commerce atlantique renforce leur poids.",
          },
          {
            type: "aRetenir",
            points: [
              "**1549** : le Cayor gagne son indépendance à Danki",
              "L'empire se fragmente en royaumes côtiers rivaux",
              "Le commerce atlantique renforce la côte, affaiblit le Djolof",
            ],
          },
        ],
      },
      {
        id: "course-histoire-32-djolof-royaumes-wolof-lesson-5",
        title: "Héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Les royaumes wolof façonnent durablement le Sénégal.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XIVe s.", texte: "Fondation de l'empire du Djolof" },
              { date: "1549", texte: "Indépendance du Cayor, fragmentation" },
              { date: "XIXe s.", texte: "Résistance de Lat Dior, dernier Damel du Cayor" },
            ],
          },
          {
            type: "paragraphe",
            text: "**Cayor**, Baol, Waalo et Djolof marquent ses institutions et sa culture. **Lat Dior**, souverain du Cayor, incarne leur résistance à la colonisation.",
          },
          {
            type: "image",
            alt: "Portrait gravé de Lat Dior, vêtu de tissu clair.",
            legende: "Lat Dior, souverain du Cayor, gravure de 1875.",
            credit: "Le Monde illustré, 1875, domaine public, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Lat_Dior,_king_of_Cayot_(Le_Monde_illustr%C3%A9,_1875).jpg",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "Les royaumes wolof structurent le Sénégal jusqu'à la colonisation",
              "Ont vu naître des figures comme **Lat Dior**",
              "La langue et la culture wolof, au cœur du Sénégal actuel",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-32-djolof-royaumes-wolof-quiz-1",
        question: "À qui la tradition attribue-t-elle la fondation de l'empire du Djolof ?",
        options: ["Ndiadiane Ndiaye", "Soundiata Keïta", "Chaka Zoulou", "Mansa Moussa"],
        correctIndex: 0,
        explanation: "La tradition attribue la fondation du Djolof au légendaire Ndiadiane Ndiaye, vers le XIVᵉ siècle.",
      },
      {
        id: "course-histoire-32-djolof-royaumes-wolof-quiz-2",
        question: "Quel titre portait le souverain du Djolof ?",
        options: ["Le Bourba Djolof", "Le Pharaon", "L'Oba", "Le Négus"],
        correctIndex: 0,
        explanation: "Le souverain de l'empire portait le titre de Bourba Djolof.",
      },
      {
        id: "course-histoire-32-djolof-royaumes-wolof-quiz-3",
        question: "Lequel de ces royaumes faisait partie de la confédération du Djolof ?",
        options: ["Le Cayor", "Le Ghana", "Le Kongo", "Aksoum"],
        correctIndex: 0,
        explanation: "Le Cayor, comme le Baol, le Waalo, le Sine et le Saloum, faisait partie de la confédération du Djolof.",
      },
      {
        id: "course-histoire-32-djolof-royaumes-wolof-quiz-4",
        question: "Que s'est-il passé en 1549 à la bataille de Danki ?",
        options: ["Le Cayor a gagné son indépendance", "Le Djolof a conquis l'Égypte", "Les Portugais ont pris Dakar", "L'empire a été agrandi"],
        correctIndex: 0,
        explanation: "En 1549, le Cayor, sous Amari Ngoné Sobel Fall, remporta son indépendance à la bataille de Danki, provoquant la fragmentation de l'empire.",
      },
      {
        id: "course-histoire-32-djolof-royaumes-wolof-quiz-5",
        question: "Comment appelait-on les guerriers de la couronne dans les royaumes wolof ?",
        options: ["Les ceddo", "Les Agojie", "Les samouraïs", "Les légionnaires"],
        correctIndex: 0,
        explanation: "Les ceddo étaient les guerriers de la couronne au service des rois wolof.",
      },
    ],
  },
  {
    id: "course-histoire-33-royaumes-serer-sine-saloum",
    categoryId: "histoire",
    emoji: "🪘",
    title: "Sine et Saloum",
    description: "Au cœur du Sénégal, les royaumes sérères du Sine et du Saloum ont préservé une culture originale, une religion ancestrale et de mystérieux monuments de pierre.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-33-royaumes-serer-sine-saloum-lesson-1",
        title: "Les Sérères, un peuple ancien",
        blocks: [
          {
            type: "paragraphe",
            text: "Autour d'eux, les empires se convertissaient à l'islam les uns après les autres. Les Sérères, eux, ont choisi de rester fidèles à leurs propres dieux.",
          },
          {
            type: "chiffreCle",
            valeur: "Roog",
            legende: "le dieu suprême de la religion traditionnelle sérère",
          },
          {
            type: "paragraphe",
            text: "Les Sérères comptent parmi les plus anciens peuples du Sénégal, installés dans les régions du **Sine** et du **Saloum**. Ils ont longtemps résisté à l'islamisation, conservant leur religion traditionnelle et leurs coutumes. Une dynastie maternelle, les **Guélowar**, y règne.",
          },
          {
            type: "aRetenir",
            points: [
              "Un des plus anciens peuples du Sénégal",
              "Une religion traditionnelle préservée, autour du dieu **Roog**",
              "Une dynastie maternelle, les **Guélowar**",
            ],
          },
        ],
      },
      {
        id: "course-histoire-33-royaumes-serer-sine-saloum-lesson-2",
        title: "Sine et Saloum, deux royaumes",
        blocks: [
          {
            type: "paragraphe",
            text: "Deux royaumes, deux rois, un seul peuple : le Sine et le Saloum ont vécu côte à côte pendant des siècles, sans jamais fusionner.",
          },
          {
            type: "chiffreCle",
            valeur: "2",
            legende: "royaumes sérères : le Sine et le Saloum",
          },
          {
            type: "paragraphe",
            text: "Deux royaumes structurent ce territoire, dirigés par le **Maad a Sinig** (roi du Sine) et le **Maad Saloum** (roi du Saloum). Ce sont des sociétés agraires stables, qui subsistent jusqu'à la colonisation. Le roi **Kumba Ndoffène** fut l'une de leurs grandes figures.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **Maad a Sinig**, roi du Sine",
              "Le **Maad Saloum**, roi du Saloum",
              "Des sociétés agraires stables, jusqu'à la colonisation",
            ],
          },
        ],
      },
      {
        id: "course-histoire-33-royaumes-serer-sine-saloum-lesson-3",
        title: "Les cercles mégalithiques",
        blocks: [
          {
            type: "paragraphe",
            text: "Des milliers de pierres dressées jalonnent la **Sénégambie**.",
          },
          {
            type: "chiffreCle",
            valeur: "2",
            legende: "sites sénégalais de l’ensemble classé par l’UNESCO",
          },
          {
            type: "paragraphe",
            text: "Au Sénégal, **Sine Ngayène** et Wanar présentent cercles et tumulus funéraires. Ces mégalithes témoignent d’une organisation sociale ancienne et élaborée, sans permettre d’attribuer automatiquement leurs bâtisseurs aux Sérères.",
          },
          {
            type: "image",
            alt: "Pierres mégalithiques dressées sur le site de Sine Ngayène.",
            legende: "Cercles mégalithiques de Sine Ngayène, au Sénégal.",
            credit: "Tobias 67, CC BY-SA 4.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Stone_circles_Sine_Ngay%C3%A8ne_TP03.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          },
          {
            type: "aRetenir",
            points: [
              "**Sine Ngayène** et Wanar, cercles mégalithiques classés par l'UNESCO",
              "Des milliers de pierres dressées et de tumulus",
              "Une des plus grandes concentrations de mégalithes au monde",
            ],
          },
          {
            type: "leSavaisTu",
            text: "La construction de ces monuments funéraires nécessitait des chantiers collectifs.",
          },
        ],
      },
      {
        id: "course-histoire-33-royaumes-serer-sine-saloum-lesson-4",
        title: "Une culture préservée",
        blocks: [
          {
            type: "paragraphe",
            text: "La lutte traditionnelle, les rituels agraires, les récits transmis de bouche à oreille : chez les Sérères, la culture ancienne n'a jamais cessé de vivre.",
          },
          {
            type: "citation",
            texte: "La terre ne ment jamais à celui qui la travaille.",
            auteur: "Proverbe sérère",
          },
          {
            type: "paragraphe",
            text: "Les Sérères sont réputés pour la **lutte traditionnelle**, leurs rituels agraires, leurs **traditions orales** et un fort sentiment d'identité. En résistant plus longtemps que leurs voisins à l'islamisation, ils ont maintenu vivantes des pratiques très anciennes.",
          },
          {
            type: "aRetenir",
            points: [
              "La **lutte traditionnelle**, sport emblématique des Sérères",
              "Rituels agraires et traditions orales, transmis sans interruption",
              "Une résistance culturelle plus longue que chez leurs voisins",
            ],
          },
        ],
      },
      {
        id: "course-histoire-33-royaumes-serer-sine-saloum-lesson-5",
        title: "Héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "L’héritage sérère traverse l’histoire du Sénégal.",
          },
          {
            type: "frise",
            evenements: [
              { date: "avant XVe s.", texte: "Installation des Sérères, dynastie Guélowar" },
              { date: "XVe-XIXe s.", texte: "Royaumes du Sine et du Saloum" },
              { date: "1960", texte: "Léopold Sédar Senghor, premier président sénégalais" },
            ],
          },
          {
            type: "paragraphe",
            text: "**Léopold Sédar Senghor**, premier président du pays, est sérère. Langue, traditions et **patrimoine monumental** restent des éléments importants de cette mémoire culturelle.",
          },
          {
            type: "image",
            alt: "Senghor entouré de visiteurs lors de son accueil en 1980.",
            legende: "Léopold Sédar Senghor lors d’une visite présidentielle en 1980.",
            credit: "Archives militaires américaines, domaine public, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:L%C3%A9opold_S%C3%A9dar_Senghor_in_1980.JPEG",
            licenseUrl: "https://commons.wikimedia.org/wiki/Template:PD-US-Military",
          },
          {
            type: "aRetenir",
            points: [
              "**Léopold Sédar Senghor**, premier président du Sénégal, était sérère",
              "Mégalithes, langue, traditions : un patrimoine préservé",
              "Une part précieuse et fière de l'identité sénégalaise",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-33-royaumes-serer-sine-saloum-quiz-1",
        question: "Dans quelles régions du Sénégal vivaient les Sérères ?",
        options: ["Le Sine et le Saloum", "Le Fouta Toro", "La Casamance uniquement", "Le Sahara"],
        correctIndex: 0,
        explanation: "Les royaumes sérères étaient ceux du Sine et du Saloum, dirigés par une dynastie maternelle, les Guélowar.",
      },
      {
        id: "course-histoire-33-royaumes-serer-sine-saloum-quiz-2",
        question: "Comment appelait-on le roi du Sine ?",
        options: ["Le Maad a Sinig", "Le Damel", "Le Bourba", "L'Almamy"],
        correctIndex: 0,
        explanation: "Le roi du Sine portait le titre de Maad a Sinig ; celui du Saloum, Maad Saloum.",
      },
      {
        id: "course-histoire-33-royaumes-serer-sine-saloum-quiz-3",
        question: "Quel monument classé par l'UNESCO se trouve en pays sérère ?",
        options: ["Les cercles mégalithiques de Sénégambie", "Les pyramides de Méroé", "Les stèles d'Aksoum", "La Grande Mosquée de Djenné"],
        correctIndex: 0,
        explanation: "Les cercles mégalithiques de Sénégambie (Sine Ngayène, Wanar) sont classés au patrimoine mondial de l'UNESCO.",
      },
      {
        id: "course-histoire-33-royaumes-serer-sine-saloum-quiz-4",
        question: "Quelle particularité religieuse distingue longtemps les Sérères ?",
        options: ["Ils ont conservé leur religion traditionnelle", "Ils étaient chrétiens dès l'Antiquité", "Ils n'avaient aucune religion", "Ils ont fondé l'islam"],
        correctIndex: 0,
        explanation: "Les Sérères ont longtemps résisté à l'islamisation, conservant leur religion traditionnelle autour du dieu Roog.",
      },
      {
        id: "course-histoire-33-royaumes-serer-sine-saloum-quiz-5",
        question: "Quel président sénégalais était d'origine sérère ?",
        options: ["Léopold Sédar Senghor", "Nelson Mandela", "Kwame Nkrumah", "Ménélik II"],
        correctIndex: 0,
        explanation: "Léopold Sédar Senghor, premier président du Sénégal, était d'origine sérère.",
      },
    ],
  },
  {
    id: "course-histoire-34-goree-saint-louis",
    categoryId: "histoire",
    emoji: "⚓",
    title: "Gorée et Saint-Louis",
    description: "Deux sites du Sénégal, Gorée et Saint-Louis, furent des comptoirs européens majeurs — et sont aujourd'hui des lieux de mémoire classés au patrimoine mondial de l'UNESCO.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-34-goree-saint-louis-lesson-1",
        title: "Des comptoirs sur l'Atlantique",
        blocks: [
          {
            type: "paragraphe",
            text: "Du XVᵉ au XVIIᵉ siècle, plusieurs puissances européennes installent des comptoirs sur la côte sénégalaise.",
          },
          {
            type: "chiffreCle",
            valeur: "1659",
            legende: "fondation de Saint-Louis à l'embouchure du fleuve Sénégal",
          },
          {
            type: "paragraphe",
            text: "Les Européens (Portugais, Néerlandais, Français, Britanniques) établissent des comptoirs sur la côte sénégalaise. L'île de **Gorée**, au large de Dakar, et **Saint-Louis**, fondée en 1659, en deviennent les points les plus importants.",
          },
          {
            type: "aRetenir",
            points: [
              "Comptoirs européens sur la côte sénégalaise, XVᵉ-XVIIᵉ siècle",
              "**1659** : fondation de Saint-Louis",
              "**Gorée** et Saint-Louis, les points les plus importants",
            ],
          },
        ],
      },
      {
        id: "course-histoire-34-goree-saint-louis-lesson-2",
        title: "Gorée, lieu de mémoire",
        blocks: [
          {
            type: "paragraphe",
            text: "**Gorée** et sa Maison des Esclaves symbolisent la mémoire de la traite atlantique.",
          },
          {
            type: "chiffreCle",
            valeur: "1",
            legende: "la « porte du voyage sans retour »",
          },
          {
            type: "paragraphe",
            text: "Les historiens débattent du nombre de captifs passés par l'île. Son rôle mémoriel dépasse ce chiffre : Gorée est un lieu de mémoire mondial, classé par l'**UNESCO**.",
          },
          {
            type: "image",
            alt: "Pièce aux murs dégradés dans la Maison des Esclaves.",
            legende: "Gorée : intérieur de la Maison des Esclaves, photographié en 2024.",
            credit: "Fawaz.tairou, CC BY 4.0, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Gor%C3%A9e_2024_-_Maison_des_esclaves_-_08.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
          },
          {
            type: "aRetenir",
            points: [
              "**Gorée** : symbole mondial de la mémoire de la traite",
              "La Maison des Esclaves et sa « porte du voyage sans retour »",
              "Classée au patrimoine mondial de l'UNESCO",
            ],
          },
        ],
      },
      {
        id: "course-histoire-34-goree-saint-louis-lesson-3",
        title: "Saint-Louis, capitale coloniale",
        blocks: [
          {
            type: "paragraphe",
            text: "**Saint-Louis** est un comptoir installé entre fleuve et océan.",
          },
          {
            type: "chiffreCle",
            valeur: "AOF",
            legende: "Saint-Louis devient capitale de l'Afrique-Occidentale française",
          },
          {
            type: "paragraphe",
            text: "La ville devient capitale du Sénégal, puis de l’**AOF**. Son patrimoine colonial et son organisation insulaire, reliée au continent par le pont Faidherbe, sont aujourd’hui classés par l’UNESCO.",
          },
          {
            type: "image",
            alt: "Pont métallique reliant l’île de Saint-Louis à la rive du fleuve.",
            legende: "Le pont Faidherbe à Saint-Louis, carte postale ancienne.",
            credit: "Photographe inconnu, domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Bridge_Pont_Faidherbe,_Saint-Louis,_Senegal.jpg",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "**Saint-Louis** : premier établissement français d'Afrique de l'Ouest",
              "Capitale du Sénégal, puis de l'**AOF**",
              "Une architecture coloniale classée par l'UNESCO",
            ],
          },
        ],
      },
      {
        id: "course-histoire-34-goree-saint-louis-lesson-4",
        title: "Les signares",
        blocks: [
          {
            type: "paragraphe",
            text: "Ni tout à fait africaines, ni tout à fait européennes : ces femmes ont bâti, à **Gorée** et à Saint-Louis, un pouvoir économique bien à elles.",
          },
          {
            type: "chiffreCle",
            valeur: "2",
            legende: "villes où les signares ont prospéré (Gorée, Saint-Louis)",
          },
          {
            type: "paragraphe",
            text: "Gorée et Saint-Louis voient naître les **signares** : des femmes commerçantes métisses, euro-africaines, qui détiennent un réel pouvoir économique et animent une société créole originale, avec ses codes, sa mode et son influence.",
          },
          {
            type: "aRetenir",
            points: [
              "Les **signares** : femmes commerçantes métisses, euro-africaines",
              "Un réel pouvoir économique, dans le commerce colonial",
              "Une société créole originale, avec ses codes et sa mode",
            ],
          },
        ],
      },
      {
        id: "course-histoire-34-goree-saint-louis-lesson-5",
        title: "Héritage et mémoire",
        blocks: [
          {
            type: "paragraphe",
            text: "Ces deux îles portent aujourd'hui une double mémoire : celle de l'ouverture du Sénégal sur le monde atlantique, et celle de la traite.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XVe-XVIIe s.", texte: "Comptoirs européens à Gorée et Saint-Louis" },
              { date: "XIXe-XXe s.", texte: "Saint-Louis, capitale coloniale de l'AOF" },
              { date: "XXe-XXIe s.", texte: "Gorée, lieu de mémoire et de commémoration" },
            ],
          },
          {
            type: "paragraphe",
            text: "L'**UNESCO** inscrit **Gorée** au patrimoine mondial en 1978, puis Saint-Louis en 2000. Commémorations et préservation des lieux entretiennent cette mémoire au cœur de l'histoire sénégalaise.",
          },
          {
            type: "citation",
            texte: "La mémoire d'un peuple ne s'efface pas, elle se transmet.",
            auteur: "Proverbe sénégalais",
          },
          {
            type: "aRetenir",
            points: [
              "**Gorée**, lieu de commémorations mondiales",
              "Un devoir de mémoire essentiel, au cœur de l'histoire sénégalaise",
              "Deux îles, deux mémoires : l'Atlantique et la traite",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-34-goree-saint-louis-quiz-1",
        question: "Où se situent Gorée et Saint-Louis ?",
        options: ["Au Sénégal", "En Égypte", "en Afrique du Sud", "au Kenya"],
        correctIndex: 0,
        explanation: "Gorée (au large de Dakar) et Saint-Louis (embouchure du fleuve Sénégal, fondée en 1659) sont au Sénégal.",
      },
      {
        id: "course-histoire-34-goree-saint-louis-quiz-2",
        question: "De quoi l'île de Gorée est-elle devenue le symbole ?",
        options: ["De la mémoire de la traite négrière", "Du commerce de l'or", "De la conquête romaine", "De l'islamisation"],
        correctIndex: 0,
        explanation: "Gorée, avec sa Maison des Esclaves et sa « porte du voyage sans retour », est un lieu de mémoire majeur de la traite atlantique, classé par l'UNESCO.",
      },
      {
        id: "course-histoire-34-goree-saint-louis-quiz-3",
        question: "Qu'a été Saint-Louis pour la France ?",
        options: ["Son premier établissement en Afrique de l'Ouest et la capitale de l'AOF", "Une colonie en Asie", "Un port en Méditerranée", "Sa capitale en Europe"],
        correctIndex: 0,
        explanation: "Saint-Louis fut le premier établissement français d'Afrique de l'Ouest, puis la capitale de l'Afrique-Occidentale française.",
      },
      {
        id: "course-histoire-34-goree-saint-louis-quiz-4",
        question: "Qui étaient les signares ?",
        options: ["Des femmes commerçantes métisses influentes", "Des reines égyptiennes", "Des guerrières du Dahomey", "Des exploratrices européennes"],
        correctIndex: 0,
        explanation: "Les signares étaient des femmes commerçantes euro-africaines de Gorée et Saint-Louis, dotées d'un vrai pouvoir économique et d'une société créole propre.",
      },
      {
        id: "course-histoire-34-goree-saint-louis-quiz-5",
        question: "Quel statut l'UNESCO a-t-elle accordé à Gorée et Saint-Louis ?",
        options: ["Patrimoine mondial", "Zone militaire", "Réserve naturelle interdite", "Aucun statut"],
        correctIndex: 0,
        explanation: "Gorée et Saint-Louis sont toutes deux classées au patrimoine mondial de l'UNESCO.",
      },
    ],
  },
  {
    id: "course-histoire-35-lat-dior-cayor",
    categoryId: "histoire",
    emoji: "🐎",
    title: "Lat Dior et le Cayor",
    description: "Damel du Cayor, Lat Dior incarna la résistance sénégalaise à la colonisation française, s'opposant notamment à la construction du chemin de fer.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-35-lat-dior-cayor-lesson-1",
        title: "Le Damel du Cayor",
        blocks: [
          {
            type: "paragraphe",
            text: "À la fin du XIXᵉ siècle, la France cherche à annexer le **Cayor**.",
          },
          {
            type: "chiffreCle",
            valeur: "fin XIXe s.",
            legende: "le règne de Lat Dior, Damel du Cayor",
          },
          {
            type: "paragraphe",
            text: "**Lat Dior** Ngoné Latyr Diop en est le Damel, c'est-à-dire le roi. Ce roi-guerrier gouverne l'un des plus puissants royaumes wolof, soumis à la pression coloniale française.",
          },
          {
            type: "image",
            alt: "Portrait gravé de Lat Dior, vêtu de tissu clair.",
            legende: "Lat Dior, Damel du Cayor : gravure publiée en 1875.",
            credit: "Le Monde illustré, 1875, domaine public, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Lat_Dior,_king_of_Cayot_(Le_Monde_illustr%C3%A9,_1875).jpg",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "**Lat Dior**, Damel (roi) du Cayor, fin XIXᵉ siècle",
              "Le Cayor, l'un des plus puissants royaumes wolof",
              "Un règne marqué par la pression coloniale française",
            ],
          },
        ],
      },
      {
        id: "course-histoire-35-lat-dior-cayor-lesson-2",
        title: "La conversion et la lutte",
        blocks: [
          {
            type: "paragraphe",
            text: "Converti à l'islam, allié aux mouvements religieux de son temps, Lat Dior n'a jamais choisi entre la guerre et la **négociation** : il a mené les deux.",
          },
          {
            type: "citation",
            texte: "On ne connaît la valeur d'un cavalier qu'au moment de la charge.",
            auteur: "Proverbe wolof",
          },
          {
            type: "paragraphe",
            text: "**Lat Dior** se convertit à l'islam et s'allie par moments aux mouvements religieux de son temps. Face à la pénétration française, il alterne la guerre et la négociation, cherchant sans cesse à préserver l'indépendance de son royaume.",
          },
          {
            type: "aRetenir",
            points: [
              "**Lat Dior** se convertit à l'islam",
              "Des alliances ponctuelles avec les mouvements religieux",
              "Guerre et négociation, pour préserver l'indépendance du Cayor",
            ],
          },
        ],
      },
      {
        id: "course-histoire-35-lat-dior-cayor-lesson-3",
        title: "Le refus du chemin de fer",
        blocks: [
          {
            type: "paragraphe",
            text: "**Lat Dior** refuse le chemin de fer Dakar–Saint-Louis.",
          },
          {
            type: "chiffreCle",
            valeur: "1 voie ferrée",
            legende: "que Lat Dior refuse de laisser traverser le Cayor",
          },
          {
            type: "paragraphe",
            text: "La voie traverse le **Cayor**. Il y voit un instrument de pénétration française qui menace l’indépendance de son royaume. La carte postale montre la gare après sa mort.",
          },
          {
            type: "image",
            alt: "Ancienne gare de Saint-Louis avec rails et installations ferroviaires.",
            legende: "Gare de Saint-Louis, carte postale de Fortier vers 1902.",
            credit: "Fortier, Dakar, domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:StLouis1.JPG",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "Les Français veulent traverser le Cayor par le rail",
              "**Lat Dior** refuse, y voyant la fin de l'indépendance",
              "Son refus, un symbole de résistance à la domination coloniale",
            ],
          },
        ],
      },
      {
        id: "course-histoire-35-lat-dior-cayor-lesson-4",
        title: "La bataille de Dékheulé",
        blocks: [
          {
            type: "paragraphe",
            text: "Lat Dior tombe les armes à la main, en 1886, aux côtés de son fidèle cheval, en combattant les Français.",
          },
          {
            type: "chiffreCle",
            valeur: "1886",
            legende: "mort de Lat Dior à la bataille de Dékheulé",
          },
          {
            type: "paragraphe",
            text: "**Lat Dior** tombe les armes à la main lors de la bataille de **Dékheulé**, en 1886, en combattant les Français, aux côtés de son fidèle cheval **Malaw**. Sa mort marque la fin de l'indépendance du Cayor.",
          },
          {
            type: "aRetenir",
            points: [
              "**1886** : bataille de Dékheulé, mort de Lat Dior",
              "Il tombe aux côtés de son cheval **Malaw**",
              "Sa mort marque la fin de l'indépendance du Cayor",
            ],
          },
        ],
      },
      {
        id: "course-histoire-35-lat-dior-cayor-lesson-5",
        title: "Héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Lat Dior n'a pas gagné sa dernière bataille. Il a pourtant gagné une place, définitive, dans la mémoire du Sénégal.",
          },
          {
            type: "frise",
            evenements: [
              { date: "fin XIXe s.", texte: "Lat Dior, Damel du Cayor" },
              { date: "1886", texte: "Bataille de Dékheulé, mort de Lat Dior" },
              { date: "XXe-XXIe s.", texte: "Héros national, symbole de résistance" },
            ],
          },
          {
            type: "paragraphe",
            text: "**Lat Dior** est aujourd'hui un héros national du Sénégal, symbole de dignité et de résistance. Son cheval **Malaw** et son épée sont célébrés, et de nombreux lieux portent son nom. Il incarne le refus de se soumettre à la conquête coloniale.",
          },
          {
            type: "aRetenir",
            points: [
              "**Lat Dior**, héros national, symbole de dignité et de résistance",
              "Son cheval Malaw et son épée, encore célébrés",
              "De nombreux lieux portent aujourd'hui son nom",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-35-lat-dior-cayor-quiz-1",
        question: "De quel royaume Lat Dior était-il le Damel ?",
        options: ["Le Cayor", "Le Sine", "Le Fouta Toro", "Le Mali"],
        correctIndex: 0,
        explanation: "Lat Dior était le Damel (roi) du Cayor, puissant royaume wolof, à la fin du XIXᵉ siècle.",
      },
      {
        id: "course-histoire-35-lat-dior-cayor-quiz-2",
        question: "À quelle grande infrastructure coloniale Lat Dior s'est-il opposé ?",
        options: ["Le chemin de fer Dakar–Saint-Louis", "Le canal de Suez", "Un aéroport", "Un barrage sur le Nil"],
        correctIndex: 0,
        explanation: "Lat Dior s'opposa au chemin de fer Dakar–Saint-Louis, y voyant la fin de l'indépendance de son royaume.",
      },
      {
        id: "course-histoire-35-lat-dior-cayor-quiz-3",
        question: "Où et quand Lat Dior est-il tombé au combat ?",
        options: ["À Dékheulé, en 1886", "À Adoua, en 1896", "À Kirina, en 1235", "À Tondibi, en 1591"],
        correctIndex: 0,
        explanation: "Lat Dior tomba à la bataille de Dékheulé en 1886, en combattant les Français aux côtés de son cheval Malaw.",
      },
      {
        id: "course-histoire-35-lat-dior-cayor-quiz-4",
        question: "Comment s'appelait le cheval fidèle de Lat Dior ?",
        options: ["Malaw", "Bucéphale", "Zaïna", "Bayard"],
        correctIndex: 0,
        explanation: "Le fidèle cheval de Lat Dior s'appelait Malaw, célébré avec lui.",
      },
      {
        id: "course-histoire-35-lat-dior-cayor-quiz-5",
        question: "Que représente Lat Dior pour le Sénégal aujourd'hui ?",
        options: ["Un héros national de la résistance", "Un explorateur européen", "Un pharaon", "Un commerçant portugais"],
        correctIndex: 0,
        explanation: "Lat Dior est un héros national du Sénégal, symbole de dignité et de résistance à la colonisation.",
      },
    ],
  },
  {
    id: "course-histoire-36-cheikh-ahmadou-bamba-mouridisme",
    categoryId: "histoire",
    emoji: "☪️",
    title: "Cheikh Ahmadou Bamba",
    description: "Guide spirituel et fondateur du mouridisme, Cheikh Ahmadou Bamba mena une résistance pacifique à la colonisation et fonda la ville sainte de Touba.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-36-cheikh-ahmadou-bamba-mouridisme-lesson-1",
        title: "Un guide spirituel",
        blocks: [
          {
            type: "paragraphe",
            text: "**Cheikh Ahmadou Bamba** fonde la confrérie **mouride** au Sénégal.",
          },
          {
            type: "chiffreCle",
            valeur: "1853-1927",
            legende: "les années de vie de Cheikh Ahmadou Bamba",
          },
          {
            type: "paragraphe",
            text: "Dans un pays bouleversé par la conquête coloniale, ce maître soufi propose une voie spirituelle fondée sur la foi, l’éducation et le travail. Son enseignement rencontre un immense écho.",
          },
          {
            type: "image",
            alt: "Cheikh Ahmadou Bamba debout, vêtu d’une robe claire.",
            legende: "Cheikh Ahmadou Bamba, photographie ancienne.",
            credit: "Photographe inconnu, domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:AhmaduBamba.jpg",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "**Cheikh Ahmadou Bamba** (1853-1927), maître soufi sénégalais",
              "Fondateur de la confrérie **mouride** (Mouridiyya)",
              "Une voie spirituelle nouvelle, dans un Sénégal bouleversé",
            ],
          },
        ],
      },
      {
        id: "course-histoire-36-cheikh-ahmadou-bamba-mouridisme-lesson-2",
        title: "Une résistance pacifique",
        blocks: [
          {
            type: "paragraphe",
            text: "Il n'a jamais pris les armes. Et pourtant, cet homme a autant inquiété l'administration coloniale que n'importe quel chef de guerre.",
          },
          {
            type: "citation",
            texte: "Nul n'a jamais mangé de meilleure nourriture que celle gagnée par le travail de ses propres mains.",
            auteur: "Tradition islamique",
          },
          {
            type: "paragraphe",
            text: "**Bamba** prêche la foi, la paix et surtout le **travail** et l'éducation comme chemins de dignité. Sa résistance à l'ordre colonial est non-violente : il ne prend jamais les armes, mais son influence grandissante inquiète l'administration française.",
          },
          {
            type: "aRetenir",
            points: [
              "**Bamba** prêche la foi, la paix, le travail, l'éducation",
              "Une résistance non-violente, jamais les armes",
              "Son influence grandissante inquiète l'administration française",
            ],
          },
        ],
      },
      {
        id: "course-histoire-36-cheikh-ahmadou-bamba-mouridisme-lesson-3",
        title: "L'exil",
        blocks: [
          {
            type: "paragraphe",
            text: "Craignant son pouvoir sur les foules, les autorités coloniales choisissent l'exil plutôt que la confrontation directe.",
          },
          {
            type: "chiffreCle",
            valeur: "1895-1902",
            legende: "premier exil de Cheikh Ahmadou Bamba, au Gabon",
          },
          {
            type: "paragraphe",
            text: "Craignant son pouvoir sur les foules, les Français exilent **Cheikh Ahmadou Bamba** : d'abord au **Gabon** (1895-1902), puis en Mauritanie. Cet exil est au cœur de la tradition mouride, riche de récits de foi transmis de génération en génération.",
          },
          {
            type: "aRetenir",
            points: [
              "Exilé par les Français, craignant son influence",
              "**1895-1902** : premier exil au Gabon, puis en Mauritanie",
              "Un exil au cœur de la tradition mouride",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Cet exil a inspiré, dans la tradition mouride, de nombreux récits de foi transmis de génération en génération — dont celui, célèbre, d'une prière accomplie en pleine mer.",
          },
        ],
      },
      {
        id: "course-histoire-36-cheikh-ahmadou-bamba-mouridisme-lesson-4",
        title: "Touba et le mouridisme",
        blocks: [
          {
            type: "paragraphe",
            text: "**Bamba** fonde la ville sainte de **Touba**, centre du mouridisme.",
          },
          {
            type: "chiffreCle",
            valeur: "1",
            legende: "des plus grandes mosquées d'Afrique, à Touba",
          },
          {
            type: "paragraphe",
            text: "Sa Grande Mosquée devient l'une des plus grandes d'Afrique. La confrérie mouride est une force sociale et économique fondée sur le travail, notamment la culture de l'**arachide**, la solidarité et la discipline.",
          },
          {
            type: "image",
            alt: "Colonnes et arches intérieures de la Grande Mosquée de Touba.",
            legende: "Touba : intérieur de la Grande Mosquée, photographié en 2006.",
            credit: "zivax, CC BY-SA 3.0, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Mosqu%C3%A9e_Touba_(senegal)_2006.JPG",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
          },
          {
            type: "aRetenir",
            points: [
              "**Touba**, ville sainte fondée par Bamba",
              "Sa Grande Mosquée, l'une des plus grandes d'Afrique",
              "Une force économique fondée sur le travail (l'**arachide**), la solidarité",
            ],
          },
        ],
      },
      {
        id: "course-histoire-36-cheikh-ahmadou-bamba-mouridisme-lesson-5",
        title: "Le Grand Magal de Touba",
        blocks: [
          {
            type: "paragraphe",
            text: "Chaque année, des millions de pèlerins convergent vers Touba pour commémorer non une victoire, mais un départ en exil.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1853-1927", texte: "Vie de Cheikh Ahmadou Bamba" },
              { date: "1895", texte: "Premier exil, au Gabon" },
              { date: "XXe-XXIe s.", texte: "Grand Magal, des millions de pèlerins" },
            ],
          },
          {
            type: "paragraphe",
            text: "Chaque année, le **Grand Magal** de Touba commémore le départ en exil du cheikh et rassemble des millions de pèlerins. **Cheikh Ahmadou Bamba** demeure une figure centrale de l'islam et de l'identité sénégalaise, symbole d'une résistance par la foi et le travail.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **Grand Magal** commémore chaque année le départ en exil",
              "Des millions de pèlerins rassemblés à Touba",
              "Une résistance par la foi et le travail, toujours vivante",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-36-cheikh-ahmadou-bamba-mouridisme-quiz-1",
        question: "Quelle confrérie Cheikh Ahmadou Bamba a-t-il fondée ?",
        options: ["Le mouridisme (la Mouridiyya)", "Le bouddhisme", "La franc-maçonnerie", "Le protestantisme"],
        correctIndex: 0,
        explanation: "Cheikh Ahmadou Bamba (1853-1927) est le fondateur de la confrérie mouride (Mouridiyya).",
      },
      {
        id: "course-histoire-36-cheikh-ahmadou-bamba-mouridisme-quiz-2",
        question: "Quelle forme de résistance Cheikh Ahmadou Bamba a-t-il incarnée ?",
        options: ["Une résistance pacifique, par la foi et le travail", "Une guerre de conquête", "Une révolte armée", "Aucune résistance"],
        correctIndex: 0,
        explanation: "Sa résistance à la colonisation fut non-violente, fondée sur la foi, le travail et l'éducation.",
      },
      {
        id: "course-histoire-36-cheikh-ahmadou-bamba-mouridisme-quiz-3",
        question: "Où les Français ont-ils d'abord exilé Cheikh Ahmadou Bamba ?",
        options: ["Au Gabon", "En France", "au Brésil", "en Égypte"],
        correctIndex: 0,
        explanation: "Il fut exilé au Gabon (1895-1902), puis en Mauritanie — un épisode central de la tradition mouride.",
      },
      {
        id: "course-histoire-36-cheikh-ahmadou-bamba-mouridisme-quiz-4",
        question: "Quelle ville sainte Cheikh Ahmadou Bamba a-t-il fondée ?",
        options: ["Touba", "Tombouctou", "La Mecque", "Saint-Louis"],
        correctIndex: 0,
        explanation: "Il fonda la ville sainte de Touba, dont la Grande Mosquée est l'une des plus grandes d'Afrique.",
      },
      {
        id: "course-histoire-36-cheikh-ahmadou-bamba-mouridisme-quiz-5",
        question: "Que commémore le Grand Magal de Touba ?",
        options: ["Le départ en exil du cheikh", "La fondation de l'ONU", "Une bataille contre Rome", "La récolte du mil"],
        correctIndex: 0,
        explanation: "Le Grand Magal de Touba commémore le départ en exil de Cheikh Ahmadou Bamba et rassemble des millions de pèlerins.",
      },
    ],
  },
  {
    id: "course-histoire-37-aline-sitoe-diatta",
    categoryId: "histoire",
    emoji: "✊",
    title: "Aline Sitoé Diatta",
    description: "Jeune femme diola de Casamance, Aline Sitoé Diatta se dressa contre l'ordre colonial français — au point d'être surnommée « la Jeanne d'Arc de la Casamance ».",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-37-aline-sitoe-diatta-lesson-1",
        title: "Une jeune femme de Casamance",
        blocks: [
          {
            type: "paragraphe",
            text: "Elle a d'abord travaillé comme domestique à Dakar. Rien, dans ce début de vie, ne laissait présager qu'elle deviendrait une figure de résistance.",
          },
          {
            type: "chiffreCle",
            valeur: "vers 1920",
            legende: "naissance d'Aline Sitoé Diatta à Kabrousse",
          },
          {
            type: "paragraphe",
            text: "**Aline Sitoé Diatta** est une jeune femme **diola**, née à **Kabrousse**, en Casamance, dans le sud du Sénégal. Elle travaille un temps comme domestique à Dakar avant de revenir dans sa région natale, où elle affirme une vocation de guide.",
          },
          {
            type: "aRetenir",
            points: [
              "Née vers **1920** à Kabrousse, en Casamance",
              "Une jeune femme **diola**, domestique à Dakar",
              "De retour en Casamance, elle affirme une vocation de guide",
            ],
          },
        ],
      },
      {
        id: "course-histoire-37-aline-sitoe-diatta-lesson-2",
        title: "Un appel à la résistance",
        blocks: [
          {
            type: "paragraphe",
            text: "Le **riz** est au cœur des réquisitions coloniales en Casamance.",
          },
          {
            type: "chiffreCle",
            valeur: "2",
            legende: "réquisitions coloniales contestées : riz et bétail",
          },
          {
            type: "paragraphe",
            text: "**Aline Sitoé Diatta** dénonce ces prélèvements, ceux de bétail et le travail forcé. Elle appelle aux traditions diola et à la résistance. La photographie montre une pratique agricole actuelle.",
          },
          {
            type: "image",
            alt: "Un adulte et un enfant travaillent une rizière avec des outils traditionnels.",
            legende: "Travail du riz à Boucotte, en Casamance, photographie contemporaine.",
            credit: "Olivier Epron Olivierkeita, CC BY 3.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Culture_riz_boucotte.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by/3.0",
          },
          {
            type: "aRetenir",
            points: [
              "S'élève contre réquisitions et travail forcé",
              "Un appel au retour aux traditions **diola**",
              "Perçue par beaucoup comme une prophétesse",
            ],
          },
        ],
      },
      {
        id: "course-histoire-37-aline-sitoe-diatta-lesson-3",
        title: "La révolte",
        blocks: [
          {
            type: "paragraphe",
            text: "Son message se répand vite en Casamance. Un mot d'ordre simple : ne plus livrer le **riz** à l'effort de guerre français.",
          },
          {
            type: "citation",
            texte: "La terre appartient à ceux qui la cultivent, pas à ceux qui la conquièrent.",
            auteur: "Proverbe diola",
          },
          {
            type: "paragraphe",
            text: "Son message se répand dans la région. Elle exhorte les populations à refuser de livrer leur riz à l'effort de guerre français. Ce mouvement menace directement le contrôle colonial sur la **Casamance**.",
          },
          {
            type: "aRetenir",
            points: [
              "Un appel à refuser de livrer le riz aux Français",
              "Un message qui se répand dans toute la Casamance",
              "Une menace directe pour le contrôle colonial de la région",
            ],
          },
        ],
      },
      {
        id: "course-histoire-37-aline-sitoe-diatta-lesson-4",
        title: "Arrestation et mort",
        blocks: [
          {
            type: "paragraphe",
            text: "Arrêtée en 1943, elle est déportée à des milliers de kilomètres de chez elle.",
          },
          {
            type: "chiffreCle",
            valeur: "1943",
            legende: "arrestation d'Aline Sitoé Diatta par les Français",
          },
          {
            type: "paragraphe",
            text: "Arrêtée par les Français en 1943, **Aline Sitoé Diatta** est déportée loin de chez elle, à **Tombouctou** (Mali), où elle meurt en 1944, âgée d'environ vingt-quatre ans.",
          },
          {
            type: "aRetenir",
            points: [
              "**1943** : arrestation par les autorités françaises",
              "Déportée à **Tombouctou** (Mali), loin de la Casamance",
              "Morte en 1944, âgée d'environ vingt-quatre ans",
            ],
          },
        ],
      },
      {
        id: "course-histoire-37-aline-sitoe-diatta-lesson-5",
        title: "Héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Le nom d’**Aline Sitoé Diatta** demeure dans la mémoire sénégalaise.",
          },
          {
            type: "frise",
            evenements: [
              { date: "vers 1920", texte: "Naissance à Kabrousse, en Casamance" },
              { date: "1943", texte: "Arrestation par les autorités françaises" },
              { date: "1944", texte: "Mort en exil, à Tombouctou" },
            ],
          },
          {
            type: "paragraphe",
            text: "Stade de Ziguinchor, résidence universitaire à Dakar et **bateau** Dakar–Ziguinchor lui rendent hommage. Ces lieux et objets rappellent la résistante et le rôle des femmes.",
          },
          {
            type: "image",
            alt: "Bateau portant le nom d’Aline Sitoé Diatta.",
            legende: "Le bateau Aline Sitoé Diatta, hommage contemporain à la résistante.",
            credit: "rignese, CC BY-SA 2.5, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Bateau_Aline_sito%C3%A9_diatta.JPG",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5",
          },
          {
            type: "aRetenir",
            points: [
              "Surnommée « la Jeanne d'Arc de la Casamance »",
              "Un symbole de résistance et du rôle des femmes",
              "Un stade et une résidence universitaire portent son nom",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-37-aline-sitoe-diatta-quiz-1",
        question: "De quelle région du Sénégal Aline Sitoé Diatta était-elle originaire ?",
        options: ["La Casamance", "Le Fouta Toro", "Le Cayor", "Le Sine"],
        correctIndex: 0,
        explanation: "Aline Sitoé Diatta était une jeune femme diola née à Kabrousse, en Casamance.",
      },
      {
        id: "course-histoire-37-aline-sitoe-diatta-quiz-2",
        question: "Contre quoi Aline Sitoé Diatta s'est-elle dressée pendant la Seconde Guerre mondiale ?",
        options: ["Les réquisitions coloniales et le travail forcé", "Le commerce de l'or", "La construction de pyramides", "L'islamisation"],
        correctIndex: 0,
        explanation: "Elle s'éleva contre les réquisitions (riz, bétail) et le travail forcé imposés par les Français, prêchant un retour aux traditions diola.",
      },
      {
        id: "course-histoire-37-aline-sitoe-diatta-quiz-3",
        question: "Quel est le surnom d'Aline Sitoé Diatta ?",
        options: ["La Jeanne d'Arc de la Casamance", "La reine de Saba", "La Candace", "La signare"],
        correctIndex: 0,
        explanation: "On la surnomme « la Jeanne d'Arc de la Casamance ».",
      },
      {
        id: "course-histoire-37-aline-sitoe-diatta-quiz-4",
        question: "Où Aline Sitoé Diatta fut-elle déportée par les Français ?",
        options: ["À Tombouctou (Mali)", "À Paris", "Au Gabon", "En Algérie"],
        correctIndex: 0,
        explanation: "Arrêtée en 1943, elle fut déportée à Tombouctou, où elle mourut en 1944, âgée d'environ vingt-quatre ans.",
      },
      {
        id: "course-histoire-37-aline-sitoe-diatta-quiz-5",
        question: "Que symbolise Aline Sitoé Diatta dans l'histoire du Sénégal ?",
        options: ["La résistance et le rôle des femmes", "Le commerce transsaharien", "La colonisation réussie", "L'âge des pyramides"],
        correctIndex: 0,
        explanation: "Elle symbolise la résistance à la colonisation et le rôle des femmes dans l'histoire sénégalaise.",
      },
    ],
  },
  {
    id: "course-histoire-38-senghor-negritude-independance",
    categoryId: "histoire",
    emoji: "📜",
    title: "Senghor et la Négritude",
    description: "Poète, penseur et homme d'État, Léopold Sédar Senghor porta le mouvement de la Négritude et devint le premier président du Sénégal indépendant.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-38-senghor-negritude-independance-lesson-1",
        title: "Un poète et un intellectuel",
        blocks: [
          {
            type: "paragraphe",
            text: "**Senghor** est poète, penseur et enseignant avant d’entrer en politique. Sa formation intellectuelle marque ensuite son action publique.",
          },
          {
            type: "chiffreCle",
            valeur: "1906-2001",
            legende: "les années de vie de Léopold Sédar Senghor",
          },
          {
            type: "paragraphe",
            text: "Né à **Joal** dans une famille sérère, Léopold Sédar Senghor est un élève brillant. Il poursuit ses études en France et figure parmi les premiers Africains à obtenir l’agrégation. Il enseigne avant son engagement politique et participe au mouvement qui affirme la valeur des cultures noires.",
          },
          {
            type: "aRetenir",
            points: [
              "**Senghor** (1906-2001), né à Joal dans une famille sérère",
              "Parmi les premiers Africains à obtenir l'**agrégation** en France",
              "Enseignant, avant de s'engager en politique",
            ],
          },
        ],
      },
      {
        id: "course-histoire-38-senghor-negritude-independance-lesson-2",
        title: "La Négritude",
        blocks: [
          {
            type: "paragraphe",
            text: "**Senghor**, **Césaire** et Damas affirment la valeur des cultures noires.",
          },
          {
            type: "chiffreCle",
            valeur: "3",
            legende: "fondateurs de la Négritude : Senghor, Césaire, Damas",
          },
          {
            type: "paragraphe",
            text: "Dans les années **1930**, la **Négritude** conteste le mépris colonial et nourrit une fierté partagée.",
          },
          {
            type: "image",
            alt: "Aimé Césaire penché sur un livre.",
            legende: "Aimé Césaire en 2003, cofondateur de la Négritude.",
            credit: "Jean Baptiste Devaux, CC BY-SA 4.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Aime_Cesaire_2003.jpg",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          },
          {
            type: "aRetenir",
            points: [
              "**3** fondateurs : Senghor, Césaire, Damas",
              "La **Négritude** : dignité et culture noires affirmées",
              "Un courant littéraire et philosophique qui a marqué le XXᵉ siècle",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Ce mouvement littéraire, né dans les années 1930 à Paris, allait influencer la pensée et la culture noires bien au-delà de l'Afrique, jusqu'aux Caraïbes et aux Amériques.",
          },
        ],
      },
      {
        id: "course-histoire-38-senghor-negritude-independance-lesson-3",
        title: "Le chemin vers l'indépendance",
        blocks: [
          {
            type: "paragraphe",
            text: "Avant de devenir président, Senghor a d'abord siégé, pendant des années, au parlement d'un pays qui n'était pas encore le sien : la France.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1945-1958", texte: "Senghor, député au parlement français" },
              { date: "1959-1960", texte: "Éphémère Fédération du Mali" },
              { date: "4 avril 1960", texte: "Indépendance du Sénégal" },
            ],
          },
          {
            type: "paragraphe",
            text: "Député au parlement français, **Senghor** participe activement aux négociations vers l'indépendance. Après l'éphémère **Fédération du Mali** (1959-1960), le Sénégal devient indépendant le 4 avril 1960.",
          },
          {
            type: "aRetenir",
            points: [
              "**Senghor**, député au parlement français, négocie l'indépendance",
              "L'éphémère **Fédération du Mali** (1959-1960)",
              "**4 avril 1960** : indépendance du Sénégal",
            ],
          },
        ],
      },
      {
        id: "course-histoire-38-senghor-negritude-independance-lesson-4",
        title: "Premier président du Sénégal",
        blocks: [
          {
            type: "paragraphe",
            text: "**Senghor** devient le premier président du Sénégal indépendant et reste vingt ans au pouvoir.",
          },
          {
            type: "chiffreCle",
            valeur: "1960-1980",
            legende: "la présidence de Léopold Sédar Senghor",
          },
          {
            type: "paragraphe",
            text: "Il promeut la culture, l’éducation et le dialogue. Sa visite officielle aux États-Unis en **1980** illustre cette fonction. La même année, il quitte volontairement le pouvoir et organise une transition pacifique.",
          },
          {
            type: "image",
            alt: "Senghor entouré de visiteurs lors de son accueil en 1980.",
            legende: "Senghor, au centre, accueilli aux États-Unis en 1980.",
            credit: "Archives militaires américaines, domaine public, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:L%C3%A9opold_S%C3%A9dar_Senghor_in_1980.JPEG",
            licenseUrl: "https://commons.wikimedia.org/wiki/Template:PD-US-Military",
          },
          {
            type: "aRetenir",
            points: [
              "**1960-1980** : Senghor, premier président du Sénégal",
              "Il promeut culture, éducation, dialogue",
              "**1980** : départ volontaire, transition pacifique — un geste rare",
            ],
          },
        ],
      },
      {
        id: "course-histoire-38-senghor-negritude-independance-lesson-5",
        title: "Héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Poète autant que chef d'État, Senghor a fini par entrer là où aucun Africain n'était encore entré avant lui.",
          },
          {
            type: "citation",
            texte: "Femme nue, femme noire, vêtue de ta couleur qui est vie.",
            auteur: "Léopold Sédar Senghor, Femme noire",
          },
          {
            type: "paragraphe",
            text: "**Senghor** est le premier Africain élu à l'**Académie française**. Figure mondiale de la culture et de la Francophonie, il laisse une œuvre poétique majeure et l'idéal de la **Négritude**.",
          },
          {
            type: "aRetenir",
            points: [
              "Premier Africain élu à l'**Académie française**",
              "Une œuvre poétique majeure, l'idéal de la Négritude",
              "Le mariage de la politique et de la culture",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-38-senghor-negritude-independance-quiz-1",
        question: "Qui fut le premier président du Sénégal indépendant ?",
        options: ["Léopold Sédar Senghor", "Lat Dior", "Cheikh Ahmadou Bamba", "Nelson Mandela"],
        correctIndex: 0,
        explanation: "Léopold Sédar Senghor fut le premier président du Sénégal indépendant (1960-1980).",
      },
      {
        id: "course-histoire-38-senghor-negritude-independance-quiz-2",
        question: "Quel mouvement Senghor a-t-il fondé avec Césaire et Damas ?",
        options: ["La Négritude", "Le panafricanisme militaire", "Le surréalisme", "Le romantisme"],
        correctIndex: 0,
        explanation: "Senghor fonda la Négritude avec Aimé Césaire et Léon-Gontran Damas, dans les années 1930.",
      },
      {
        id: "course-histoire-38-senghor-negritude-independance-quiz-3",
        question: "Que défend le mouvement de la Négritude ?",
        options: ["La valeur et la dignité de la culture des peuples noirs", "La supériorité de l'Europe", "La fin des langues africaines", "Le retour à la colonisation"],
        correctIndex: 0,
        explanation: "La Négritude affirme la valeur, la dignité et la culture des peuples noirs face au mépris colonial.",
      },
      {
        id: "course-histoire-38-senghor-negritude-independance-quiz-4",
        question: "En quelle année le Sénégal est-il devenu indépendant ?",
        options: ["En 1960", "En 1886", "En 1914", "En 2000"],
        correctIndex: 0,
        explanation: "Le Sénégal devint indépendant le 4 avril 1960, après l'éphémère Fédération du Mali.",
      },
      {
        id: "course-histoire-38-senghor-negritude-independance-quiz-5",
        question: "Qu'a fait Senghor en 1980, fait rare en Afrique à l'époque ?",
        options: ["Il a quitté volontairement le pouvoir", "Il a déclaré la guerre", "Il a aboli les élections", "Il s'est proclamé empereur"],
        correctIndex: 0,
        explanation: "En 1980, Senghor quitta volontairement le pouvoir, assurant une transition pacifique — un geste rare pour l'époque.",
      },
    ],
  },
  {
    id: "course-histoire-39-reine-nzinga-angola",
    categoryId: "histoire",
    emoji: "👑",
    title: "Reine Nzinga",
    description: "Reine du Ndongo et du Matamba, Nzinga fut une brillante diplomate et guerrière qui tint tête aux Portugais pendant près de quarante ans.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-39-reine-nzinga-angola-lesson-1",
        title: "Une reine d'Afrique centrale",
        blocks: [
          {
            type: "paragraphe",
            text: "Au XVIIᵉ siècle, **Nzinga Mbande** gouverne deux royaumes d'Afrique centrale.",
          },
          {
            type: "chiffreCle",
            valeur: "1583-1663",
            legende: "les années de vie de la reine Nzinga Mbande",
          },
          {
            type: "paragraphe",
            text: "Reine du **Ndongo** puis du **Matamba**, dans l'Angola actuel, elle accède au pouvoir alors que les Portugais étendent leur emprise et intensifient la traite des esclaves.",
          },
          {
            type: "image",
            alt: "Portrait coloré et posthume représentant Nzinga Mbande.",
            legende: "Nzinga : portrait posthume, lithographie coloriée des années 1830.",
            credit: "Achille Devéria / Le Villain, domaine public, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Ann_Zingha.jpg",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "**Nzinga Mbande** (1583-1663), reine du Ndongo puis du Matamba",
              "Accède au pouvoir au début du **XVIIᵉ siècle**",
              "Une époque d'expansion portugaise et de traite intensifiée",
            ],
          },
        ],
      },
      {
        id: "course-histoire-39-reine-nzinga-angola-lesson-2",
        title: "Une diplomate hors pair",
        blocks: [
          {
            type: "paragraphe",
            text: "**Nzinga** négocie à Luanda.",
          },
          {
            type: "chiffreCle",
            valeur: "1622",
            legende: "la négociation de Luanda et le siège refusé",
          },
          {
            type: "paragraphe",
            text: "Selon le récit de **1622**, elle s’assied sur un serviteur pour traiter d’égale à égal avec le gouverneur.",
          },
          {
            type: "image",
            alt: "Nzinga assise sur le dos d’un serviteur face au gouverneur.",
            legende: "Audience de Nzinga : illustration de Pat Masioni pour l’UNESCO, 2014.",
            credit: "Pat Masioni/UNESCO, CC BY-SA 3.0, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Nzinga_Mbandi_Queen_of_Ndongo_and_Matamba_SEQ_08_Ecran_4.png",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
          },
          {
            type: "aRetenir",
            points: [
              "**1622** : négociation à Luanda, siège refusé à Nzinga",
              "Elle s'assoit sur le dos d'un serviteur agenouillé",
              "Un geste pour affirmer : souveraine à souverain",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Ce geste n'était pas un caprice : c'était un message diplomatique calculé, compris de tous, pour rappeler qu'aucune reine ne négocie assise plus bas qu'un gouverneur.",
          },
        ],
      },
      {
        id: "course-histoire-39-reine-nzinga-angola-lesson-3",
        title: "La guerre contre les Portugais",
        blocks: [
          {
            type: "paragraphe",
            text: "Pendant près de quarante ans, une seule reine a empêché une puissance coloniale de conquérir entièrement son royaume.",
          },
          {
            type: "chiffreCle",
            valeur: "~40 ans",
            legende: "la résistance de Nzinga face aux Portugais",
          },
          {
            type: "paragraphe",
            text: "**Nzinga** résiste aux Portugais et à la traite, par la guerre, la diplomatie et les alliances — y compris avec les **Néerlandais**, rivaux du Portugal. Elle accueille les esclaves en fuite et les soldats déserteurs pour renforcer son royaume.",
          },
          {
            type: "aRetenir",
            points: [
              "Près de **40 ans** de résistance, guerre et diplomatie",
              "Alliance avec les Néerlandais, rivaux du Portugal",
              "Accueil des esclaves en fuite pour renforcer le royaume",
            ],
          },
        ],
      },
      {
        id: "course-histoire-39-reine-nzinga-angola-lesson-4",
        title: "Une stratège et cheffe de guerre",
        blocks: [
          {
            type: "paragraphe",
            text: "Elle ne dirigeait pas ses armées depuis un palais. Nzinga les menait elle-même, sur le terrain, jusqu'à un âge avancé.",
          },
          {
            type: "citation",
            texte: "Le chef qui reste au palais perd le respect de son peuple.",
            auteur: "Proverbe mbundu",
          },
          {
            type: "paragraphe",
            text: "**Nzinga** mène ses armées en personne, noue et rompt les alliances selon les circonstances, et fait du **Matamba** une base solide. Toute sa vie, elle empêche les Portugais de conquérir totalement la région.",
          },
          {
            type: "aRetenir",
            points: [
              "**Nzinga** mène ses armées en personne",
              "Alliances nouées et rompues selon les circonstances",
              "Le **Matamba** devient une base solide de résistance",
            ],
          },
        ],
      },
      {
        id: "course-histoire-39-reine-nzinga-angola-lesson-5",
        title: "Héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Une reine qui a résisté quarante ans à un empire n'appartient plus seulement à son royaume : elle appartient à tout un continent.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1583-1663", texte: "Vie de la reine Nzinga Mbande" },
              { date: "1622", texte: "La négociation de Luanda, symbole d'égalité" },
              { date: "XXe-XXIe s.", texte: "Héroïne nationale de l'Angola, figure panafricaine" },
            ],
          },
          {
            type: "paragraphe",
            text: "**Nzinga** est un symbole de résistance et de la puissance des femmes africaines. Héroïne nationale de l'**Angola**, elle est célébrée à travers l'Afrique et la diaspora comme l'une des grandes figures de la lutte contre la colonisation.",
          },
          {
            type: "aRetenir",
            points: [
              "Un symbole de résistance et de puissance féminine",
              "Héroïne nationale de l'**Angola**",
              "Célébrée à travers l'Afrique et la diaspora",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-39-reine-nzinga-angola-quiz-1",
        question: "De quels royaumes Nzinga était-elle la reine ?",
        options: ["Le Ndongo et le Matamba (Angola)", "Le Cayor et le Baol", "Le Sine et le Saloum", "Le Ghana et le Mali"],
        correctIndex: 0,
        explanation: "Nzinga fut reine du Ndongo puis du Matamba, dans l'actuel Angola, de 1583 à 1663.",
      },
      {
        id: "course-histoire-39-reine-nzinga-angola-quiz-2",
        question: "Contre quelle puissance européenne Nzinga a-t-elle résisté ?",
        options: ["Le Portugal", "La Russie", "La Chine", "La Suède"],
        correctIndex: 0,
        explanation: "Nzinga résista aux Portugais et à la traite qu'ils intensifiaient, en s'alliant parfois aux Néerlandais.",
      },
      {
        id: "course-histoire-39-reine-nzinga-angola-quiz-3",
        question: "Quelle anecdote célèbre illustre le sens de la diplomatie de Nzinga ?",
        options: ["Elle s'assit sur le dos d'un serviteur faute de siège", "Elle traversa les Alpes", "Elle brûla sa flotte", "Elle offrit de l'or au Caire"],
        correctIndex: 0,
        explanation: "Privée de siège lors d'une négociation à Luanda en 1622, elle fit s'agenouiller un serviteur pour s'asseoir, affirmant son égalité.",
      },
      {
        id: "course-histoire-39-reine-nzinga-angola-quiz-4",
        question: "Combien de temps Nzinga a-t-elle résisté aux Portugais ?",
        options: ["Près de quarante ans", "Une semaine", "Un an", "Un siècle"],
        correctIndex: 0,
        explanation: "Nzinga résista aux Portugais pendant près de quarante ans, par la guerre et la diplomatie, menant elle-même ses armées.",
      },
      {
        id: "course-histoire-39-reine-nzinga-angola-quiz-5",
        question: "Que symbolise Nzinga aujourd'hui ?",
        options: ["La résistance et la puissance des femmes africaines", "Le commerce de la soie", "La colonisation réussie", "L'âge des pyramides"],
        correctIndex: 0,
        explanation: "Nzinga est un symbole de résistance et de la puissance des femmes africaines, héroïne nationale de l'Angola.",
      },
    ],
  },
  {
    id: "course-histoire-40-chaka-zoulou",
    categoryId: "histoire",
    emoji: "🛡️",
    title: "Chaka et les Zoulous",
    description: "Chef militaire de génie, Chaka transforma un petit clan en un puissant royaume zoulou et révolutionna l'art de la guerre en Afrique australe.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-40-chaka-zoulou-lesson-1",
        title: "La naissance d'un royaume",
        blocks: [
          {
            type: "paragraphe",
            text: "Au début du XIXe siècle, **Chaka** transforme un petit clan en puissance régionale.",
          },
          {
            type: "chiffreCle",
            valeur: "1787-1828",
            legende: "les années de vie de Chaka, roi zoulou",
          },
          {
            type: "paragraphe",
            text: "Fondateur du royaume **zoulou**, dans l’actuelle Afrique du Sud, il associe conquêtes, intégration des peuples voisins et organisation politique. La gravure de 1836 est une représentation publiée après sa mort.",
          },
          {
            type: "image",
            alt: "Dessin représentant Chaka avec lance et grand bouclier.",
            legende: "Chaka, représentation publiée en 1836, après sa mort.",
            credit: "D'après James King, publication de 1836, domaine public, Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:KingShaka.jpg",
            licenseUrl: "https://commons.wikimedia.org/wiki/Template:PD-Art",
          },
          {
            type: "aRetenir",
            points: [
              "**Chaka** (1787-1828), roi fondateur du royaume zoulou",
              "Un petit clan transformé en grande puissance régionale",
              "Un génie à la fois militaire et politique",
            ],
          },
        ],
      },
      {
        id: "course-histoire-40-chaka-zoulou-lesson-2",
        title: "Un génie militaire",
        blocks: [
          {
            type: "paragraphe",
            text: "Sous **Chaka**, les armes et les formations militaires évoluent. L’organisation de l’armée soutient la puissance du royaume.",
          },
          {
            type: "chiffreCle",
            valeur: "3",
            legende: "innovations militaires majeures de Chaka",
          },
          {
            type: "paragraphe",
            text: "L’**iklwa**, courte sagaie d’estoc, et le bouclier équipent des régiments disciplinés, les impis. La formation dite en « cornes de buffle » vise à encercler l’ennemi : un centre engage l’adversaire tandis que les ailes tentent de l’envelopper. Entraînement et coordination jouent un rôle central dans cette manière de combattre.",
          },
          {
            type: "aRetenir",
            points: [
              "L'**iklwa**, une sagaie courte pour le combat rapproché",
              "Les **impis**, des régiments disciplinés",
              "La formation en « cornes de buffle », pour encercler l'ennemi",
            ],
          },
        ],
      },
      {
        id: "course-histoire-40-chaka-zoulou-lesson-3",
        title: "L'expansion zouloue",
        blocks: [
          {
            type: "paragraphe",
            text: "Une armée réformée ne sert à rien si elle reste immobile. Chaka, lui, ne l'a jamais laissée inactive.",
          },
          {
            type: "citation",
            texte: "Seul, un bâton se casse facilement ; en faisceau, jamais.",
            auteur: "Proverbe zoulou",
          },
          {
            type: "paragraphe",
            text: "Grâce à cette armée, **Chaka** étend rapidement son royaume par la conquête et l'intégration des peuples voisins, bâtissant un **État centralisé** et militarisé d'une efficacité remarquable.",
          },
          {
            type: "aRetenir",
            points: [
              "**Chaka** étend son royaume par conquête et intégration",
              "Un État centralisé et militarisé, d'une efficacité remarquable",
              "Les peuples voisins intégrés, pas seulement soumis",
            ],
          },
        ],
      },
      {
        id: "course-histoire-40-chaka-zoulou-lesson-4",
        title: "Le Mfecane",
        blocks: [
          {
            type: "paragraphe",
            text: "Les conquêtes de Chaka ne se limitent pas à son propre royaume. Elles déclenchent, dans toute l'**Afrique australe**, une vague de bouleversements qui porte un nom : le Mfecane.",
          },
          {
            type: "chiffreCle",
            valeur: "l'écrasement",
            legende: "traduction du mot Mfecane",
          },
          {
            type: "paragraphe",
            text: "Ses conquêtes sont associées au **Mfecane**, une période de bouleversements, de migrations et de guerres qui secoue toute l'Afrique australe au début du XIXᵉ siècle — un temps de grands troubles et de déplacements de populations.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **Mfecane** : une vague de bouleversements en Afrique australe",
              "Migrations, guerres, déplacements de populations, début XIXᵉ siècle",
              "Un épisode majeur, encore étudié et débattu aujourd'hui",
            ],
          },
        ],
      },
      {
        id: "course-histoire-40-chaka-zoulou-lesson-5",
        title: "Mort et héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "**Chaka** meurt assassiné en **1828**.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1787-1828", texte: "Vie de Chaka, fondateur du royaume zoulou" },
              { date: "1828", texte: "Assassinat de Chaka par ses demi-frères" },
              { date: "1879", texte: "Victoire zouloue d'Isandlwana sur les Britanniques" },
            ],
          },
          {
            type: "paragraphe",
            text: "Le royaume qu’il a bâti poursuit son histoire. En 1879, longtemps après sa mort, les Zoulous battent l’armée britannique à **Isandlwana**, avant de subir la conquête.",
          },
          {
            type: "image",
            alt: "Soldats zoulous et britanniques représentés à Isandlwana.",
            legende: "Isandlwana, 1879 : peinture de Charles Edwin Fripp, postérieure à Chaka.",
            credit: "Charles Edwin Fripp, domaine public, WebP",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Isandhlwana.jpg",
            licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
          },
          {
            type: "aRetenir",
            points: [
              "**1828** : assassinat de Chaka par ses demi-frères",
              "**1879** : victoire zouloue d'Isandlwana sur les Britanniques",
              "Les Zoulous, l'un des plus grands peuples d'Afrique du Sud",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-40-chaka-zoulou-quiz-1",
        question: "Quel royaume Chaka a-t-il fondé ?",
        options: ["Le royaume zoulou", "L'empire du Mali", "Le royaume du Kongo", "Le royaume d'Aksoum"],
        correctIndex: 0,
        explanation: "Chaka est le roi fondateur du royaume zoulou, en Afrique australe, qu'il bâtit à partir d'un petit clan au début du XIXᵉ siècle.",
      },
      {
        id: "course-histoire-40-chaka-zoulou-quiz-2",
        question: "Quelle innovation militaire est associée à Chaka ?",
        options: ["La formation en « cornes de buffle »", "Le char à cheval", "La poudre à canon", "La flotte de guerre"],
        correctIndex: 0,
        explanation: "Chaka introduisit la courte sagaie (iklwa), les régiments disciplinés (impis) et la formation en « cornes de buffle ».",
      },
      {
        id: "course-histoire-40-chaka-zoulou-quiz-3",
        question: "Comment appelle-t-on la période de bouleversements liée à l'expansion du royaume zoulou de Chaka ?",
        options: ["Le Mfecane", "La Renaissance", "Le Grand Magal", "La Réforme"],
        correctIndex: 0,
        explanation: "Le Mfecane (« l'écrasement ») fut une période de guerres et de migrations en Afrique australe, au début du XIXᵉ siècle.",
      },
      {
        id: "course-histoire-40-chaka-zoulou-quiz-4",
        question: "Comment Chaka est-il mort en 1828 ?",
        options: ["Assassiné par ses demi-frères", "Au combat contre Rome", "De vieillesse", "Noyé en mer"],
        correctIndex: 0,
        explanation: "Chaka fut assassiné en 1828 par ses demi-frères.",
      },
      {
        id: "course-histoire-40-chaka-zoulou-quiz-5",
        question: "Quelle victoire le royaume zoulou a-t-il remportée contre les Britanniques en 1879 ?",
        options: ["Isandlwana", "Adoua", "Tondibi", "Waterloo"],
        correctIndex: 0,
        explanation: "En 1879, les Zoulous remportèrent la célèbre victoire d'Isandlwana contre les Britanniques.",
      },
    ],
  },
];
