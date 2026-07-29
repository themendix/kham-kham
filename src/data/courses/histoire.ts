import type { Course } from "@/types";

// 40 cours (01 → 40), triés par numéro de fichier croissant
export const HISTOIRE_COURSES: Course[] = [
  {
    id: "course-histoire-01-egypte-antique",
    categoryId: "histoire",
    emoji: "🏺",
    title: "L'Égypte antique",
    description: "Au bord du Nil, l'une des plus anciennes civilisations du monde est née en Afrique. Pharaons, pyramides, hiéroglyphes : découvre l'Égypte antique et ses liens profonds avec le reste du continent.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-01-egypte-antique-lesson-1",
        title: "Une civilisation née sur le Nil",
        blocks: [
          {
            type: "paragraphe",
            text: "Chaque été, le Nil débordait et recouvrait ses rives d'un limon noir. Les Égyptiens n'appelaient pas leur pays « Égypte » : ils l'appelaient **Kemet**, « la terre noire ».",
          },
          {
            type: "chiffreCle",
            valeur: "3100 av. J.-C.",
            legende: "l'unification qui ouvre 3 000 ans d'histoire pharaonique",
          },
          {
            type: "paragraphe",
            text: "Sans cette crue, rien n'aurait poussé dans une région aride. Deux royaumes — la Haute-Égypte au sud, la Basse-Égypte au nord — sont alors unifiés, un geste attribué au roi **Narmer**. L'UNESCO replace cette civilisation au cœur de l'Afrique, dans ce qu'elle nomme le « corridor du Nil ».",
          },
          {
            type: "aRetenir",
            points: [
              "Kemet, « la terre noire », doit tout à la crue du Nil",
              "Unification vers **3100 av. J.-C.**, attribuée au roi Narmer",
              "Une civilisation africaine, en dialogue avec le continent",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Le désert qui entourait Kemet, les Égyptiens l'appelaient **Deshret** — « la terre rouge ». Deux mondes que tout opposait, séparés par une berge.",
          },
        ],
      },
      {
        id: "course-histoire-01-egypte-antique-lesson-2",
        title: "Un dieu vivant à la tête de l'État",
        blocks: [
          {
            type: "paragraphe",
            text: "Le pharaon n'est pas un roi. C'est un dieu vivant, chargé de maintenir la **Maât** — l'ordre juste du monde. Tout l'État égyptien tient sur cette idée.",
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
            text: "Sous lui, une administration redoutable : vizirs, gouverneurs, prêtres, et surtout des **scribes** qui comptent, taxent et enregistrent tout. Mobiliser des milliers d'ouvriers pendant vingt ans pour une pyramide suppose un État d'une organisation exceptionnelle.",
          },
          {
            type: "aRetenir",
            points: [
              "Le pharaon est un dieu vivant, garant de la **Maât**",
              "Trois grands Empires sur près de 3 000 ans",
              "Les scribes sont le vrai moteur de l'État",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Un texte scolaire égyptien vante le métier de scribe : le seul, dit-il, où l'on ne se salit jamais les mains.",
          },
        ],
      },
      {
        id: "course-histoire-01-egypte-antique-lesson-3",
        title: "Le secret des hiéroglyphes",
        blocks: [
          {
            type: "paragraphe",
            text: "Pendant plus de mille quatre cents ans, personne au monde ne savait lire les hiéroglyphes égyptiens. Il a fallu une pierre gravée trois fois pour qu'un jeune Français en perce enfin le secret.",
          },
          {
            type: "chiffreCle",
            valeur: "1822",
            legende: "Champollion déchiffre les hiéroglyphes",
          },
          {
            type: "paragraphe",
            text: "Le déchiffreur s'appelle **Jean-François Champollion**. Sa clé fut la **pierre de Rosette**, où un même texte est gravé en hiéroglyphes, en démotique et en grec. Seuls les scribes, une élite respectée, savaient tracer ces signes sur la pierre ou le papyrus.",
          },
          {
            type: "aRetenir",
            points: [
              "**1822** : Champollion déchiffre les hiéroglyphes grâce à la pierre de Rosette",
              "Seuls les scribes, une élite respectée, savaient écrire",
              "Médecine, mathématiques, astronomie : des savoirs égyptiens avancés",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Le calendrier égyptien comptait déjà **365 jours** : il suivait le retour de la crue et le lever, à l'aube, de l'étoile **Sirius**.",
          },
        ],
      },
      {
        id: "course-histoire-01-egypte-antique-lesson-4",
        title: "Peser le cœur du défunt",
        blocks: [
          {
            type: "paragraphe",
            text: "Pour les Égyptiens, la mort n'était pas une fin brutale, mais un passage. C'était un examen que chacun devait réussir pour espérer vivre éternellement.",
          },
          {
            type: "citation",
            texte: "Je n'ai privé personne de nourriture, je n'ai fait pleurer personne, je n'ai pas menti.",
            auteur: "Livre des Morts, formule 125",
          },
          {
            type: "paragraphe",
            text: "Les Égyptiens vénéraient de nombreux dieux : **Rê**, le soleil ; **Osiris**, maître des morts ; Isis, Horus et **Anubis**, le gardien à tête de chacal. Pour préserver le corps, ils pratiquaient la momification, jugée nécessaire à la survie de l'âme.",
          },
          {
            type: "aRetenir",
            points: [
              "Un monde peuplé de dieux, dont **Osiris**, maître des morts",
              "La momification préservait le corps pour l'éternité",
              "Le cœur du défunt était jugé après la mort",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Le cœur du défunt était pesé face à la plume de la **Maât**. Trop lourd, il était dévoré par un monstre ; sinon, le mort accédait à la vie éternelle.",
          },
        ],
      },
      {
        id: "course-histoire-01-egypte-antique-lesson-5",
        title: "L'Égypte, en dialogue avec l'Afrique",
        blocks: [
          {
            type: "paragraphe",
            text: "Au sud de l'Égypte coulait le même fleuve, et vivait un partenaire constant : la Nubie. Alliée ou rivale selon les siècles, elle a même fini par régner sur l'Égypte.",
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
            text: "Au VIIIᵉ siècle av. J.-C., des rois nubiens conquirent l'Égypte et fondèrent la **XXVᵉ dynastie**, régnant depuis Napata près d'un siècle. Cette Égypte n'est pas isolée : c'est une civilisation africaine, en dialogue avec le royaume de **Koush**, que nous retrouverons dans le prochain cours.",
          },
          {
            type: "aRetenir",
            points: [
              "Nubie et Égypte : échanges constants d'or et d'ivoire",
              "**VIIIᵉ siècle av. J.-C.** : des rois nubiens règnent sur l'Égypte",
              "Une civilisation pleinement africaine",
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
    title: "Le royaume de Koush et Méroé",
    description: "Au sud de l'Égypte, le long du Nil, un puissant royaume africain a rivalisé avec les pharaons, régné sur l'Égypte, puis brillé par son fer et son écriture : le royaume de Koush.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-02-koush-meroe-lesson-1",
        title: "Le pays de l'arc",
        blocks: [
          {
            type: "paragraphe",
            text: "Les Égyptiens redoutaient tant les archers du sud qu'ils avaient surnommé leur voisin « **Ta-Séti** », le pays de l'arc. Ce voisin puissant, c'était la Nubie.",
          },
          {
            type: "chiffreCle",
            valeur: "2500 av. J.-C.",
            legende: "Kerma, première grande capitale du royaume de Koush",
          },
          {
            type: "paragraphe",
            text: "Riche en or, en ivoire et en ébène, la Nubie attirait les marchands autant qu'elle inquiétait les pharaons. Voisine et rivale de l'**Égypte**, elle développe très tôt sa propre civilisation, profondément africaine, sans jamais cesser de dialoguer avec elle.",
          },
          {
            type: "aRetenir",
            points: [
              "Ta-Séti, « le pays de l'arc », nom donné par les Égyptiens",
              "**Kerma** : première capitale, dès le IIIᵉ millénaire av. J.-C.",
              "Une terre riche en or, en ivoire et en ébène",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Les archers nubiens étaient si redoutés que l'Égypte les recrutait souvent comme mercenaires dans sa propre armée.",
          },
        ],
      },
      {
        id: "course-histoire-02-koush-meroe-lesson-2",
        title: "Les pharaons noirs de Napata",
        blocks: [
          {
            type: "paragraphe",
            text: "Pendant des siècles, l'Égypte avait dominé la Nubie. Un jour, les rôles s'inversent : un roi nubien devient lui-même pharaon d'Égypte.",
          },
          {
            type: "chiffreCle",
            valeur: "747 av. J.-C.",
            legende: "le roi Piânkhy conquiert l'Égypte",
          },
          {
            type: "paragraphe",
            text: "Depuis leur capitale de **Napata**, les rois de Koush conquièrent l'Égypte et fondent la XXVᵉ dynastie, celle des « pharaons noirs ». Le plus célèbre, **Taharqa**, bâtit des temples des deux côtés de la frontière — jusqu'à ce que les Assyriens, mieux armés en fer, repoussent Koush vers le sud.",
          },
          {
            type: "aRetenir",
            points: [
              "**747 av. J.-C.** : Piânkhy conquiert l'Égypte, XXVᵉ dynastie",
              "Taharqa, souverain bâtisseur, l'un des plus célèbres pharaons noirs",
              "Les Assyriens, mieux armés en fer, repoussent Koush vers le sud",
            ],
          },
          {
            type: "leSavaisTu",
            text: "On appelle aujourd'hui ces souverains les « pharaons noirs » : des rois nubiens qui ont régné sur l'Égypte pendant près d'un siècle.",
          },
        ],
      },
      {
        id: "course-histoire-02-koush-meroe-lesson-3",
        title: "Méroé, la cité du fer",
        blocks: [
          {
            type: "paragraphe",
            text: "On a surnommé **Méroé** « la Birmingham de l'Afrique » : ses forges tournaient sans relâche, des siècles avant la révolution industrielle anglaise.",
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
            text: "Ce grand centre de production du **fer** devient aussi un carrefour commercial reliant l'Afrique centrale, la mer Rouge, l'Inde et Rome. Sa richesse repose sur la métallurgie, l'agriculture irriguée par le Nil et le commerce à longue distance.",
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
            text: "Les scories de fer s'accumulaient si haut autour de Méroé qu'on peut aujourd'hui encore en voir les collines depuis le site.",
          },
        ],
      },
      {
        id: "course-histoire-02-koush-meroe-lesson-4",
        title: "Une écriture, des dieux, des reines",
        blocks: [
          {
            type: "paragraphe",
            text: "Comment une civilisation africaine invente-t-elle sa propre écriture, ses propres dieux — et se fait-elle gouverner par des reines ? Bienvenue à Méroé.",
          },
          {
            type: "chiffreCle",
            valeur: "200+",
            legende: "pyramides bâties à Méroé, plus qu'en Égypte",
          },
          {
            type: "paragraphe",
            text: "Les Koushites créent leur propre écriture, le **méroïtique**, encore partiellement indéchiffrée aujourd'hui. Ils honorent leurs propres dieux, comme **Apédémak**, le dieu-lion guerrier, aux côtés d'Amon. Fait remarquable : des reines règnent en leur nom propre, les **Candaces** (Kandakè).",
          },
          {
            type: "aRetenir",
            points: [
              "Le méroïtique : une écriture propre, encore mal déchiffrée",
              "**Apédémak**, le dieu-lion guerrier, honoré aux côtés d'Amon",
              "Les Candaces : des reines qui régnaient en leur nom propre",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Le méroïtique se lit en partie aujourd'hui — on en connaît les sons — mais personne ne comprend encore vraiment ce qu'il dit.",
          },
        ],
      },
      {
        id: "course-histoire-02-koush-meroe-lesson-5",
        title: "Déclin et héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Vers le **IVᵉ siècle**, les forges de Méroé s'éteignent peu à peu. Un nouveau rival, venu des hauts plateaux éthiopiens, prend le relais du commerce de la mer Rouge.",
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
            text: "Koush prouve qu'une civilisation africaine a maîtrisé, seule, le fer, l'écriture, la monarchie et l'architecture monumentale. Les sites de Méroé sont aujourd'hui classés au patrimoine mondial de l'UNESCO. C'est vers ce rival montant, le royaume d'**Aksoum**, que nous nous tournerons dans le prochain cours.",
          },
          {
            type: "citation",
            texte: "Celui qui a bu l'eau du Nil y reviendra toujours.",
            auteur: "Proverbe nubien",
          },
          {
            type: "aRetenir",
            points: [
              "Koush a maîtrisé seul le fer, l'écriture et la monarchie",
              "Méroé décline au **IVᵉ siècle**, face à la montée d'Aksoum",
              "Les sites de Méroé, aujourd'hui classés par l'UNESCO",
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
    title: "Le royaume d'Aksoum",
    description: "Sur les hauts plateaux d'Éthiopie et d'Érythrée, Aksoum fut l'une des grandes puissances du monde antique, carrefour entre l'Afrique, l'Arabie et Rome — et l'un des premiers États chrétiens de l'histoire.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-03-aksoum-lesson-1",
        title: "Un pont entre trois mondes",
        blocks: [
          {
            type: "paragraphe",
            text: "Rome, la Perse, la Chine — et un royaume africain. Au IIIᵉ siècle, un prophète perse plaçait **Aksoum** parmi les quatre plus grandes puissances du monde.",
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
            text: "Sa puissance reposait sur le commerce : par le port d'**Adoulis**, sur la mer Rouge, Aksoum échangeait ivoire, or et encens avec Rome, l'Égypte, l'Arabie et jusqu'à l'Inde. Sa position en faisait un pont entre l'Afrique et le monde méditerranéen et oriental.",
          },
          {
            type: "aRetenir",
            points: [
              "Aksoum domine les hauts plateaux d'Éthiopie et d'Érythrée",
              "Le port d'**Adoulis** relie Aksoum à Rome, l'Arabie, l'Inde",
              "Comptée parmi les 4 plus grandes puissances du monde antique",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Le prophète perse Mani rangeait Aksoum aux côtés de Rome, de la Perse et de la Chine — un honneur rare pour un royaume africain.",
          },
        ],
      },
      {
        id: "course-histoire-03-aksoum-lesson-2",
        title: "Aksoum, royaume qui frappait monnaie",
        blocks: [
          {
            type: "paragraphe",
            text: "Très peu de royaumes africains de l'Antiquité ont frappé leur propre monnaie. **Aksoum**, lui, en frappait trois : en or, en argent et en bronze.",
          },
          {
            type: "chiffreCle",
            valeur: "350",
            legende: "Aksoum conquiert son rival, le royaume de Méroé",
          },
          {
            type: "paragraphe",
            text: "Sous le roi **Ezana**, au IVᵉ siècle, le royaume atteint son apogée : il contrôle les routes commerciales et étend son influence jusqu'en Arabie. Cette monnaie, gravée du nom des souverains, sert aussi de puissant outil de propagande dans tout le bassin de la mer Rouge.",
          },
          {
            type: "aRetenir",
            points: [
              "Aksoum frappe sa propre monnaie : or, argent, bronze",
              "**Ezana** (IVᵉ siècle) : apogée du royaume, influence jusqu'en Arabie",
              "**350** : Aksoum conquiert son rival, le royaume de Méroé",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Chaque pièce aksoumite portait le nom et le portrait du roi — une signature qui voyageait plus loin que ses armées.",
          },
        ],
      },
      {
        id: "course-histoire-03-aksoum-lesson-3",
        title: "L'un des premiers États chrétiens",
        blocks: [
          {
            type: "paragraphe",
            text: "Au **IVᵉ siècle**, Aksoum se convertit au christianisme presque en même temps que Rome. Un royaume africain devient l'un des tout premiers États chrétiens du monde.",
          },
          {
            type: "chiffreCle",
            valeur: "IVᵉ siècle",
            legende: "le roi Ezana convertit Aksoum au christianisme",
          },
          {
            type: "paragraphe",
            text: "Cette conversion donne naissance à l'Église orthodoxe éthiopienne, l'une des plus anciennes de la chrétienté, encore très vivante aujourd'hui. La religion s'exprime dans la langue liturgique locale, le **guèze**, qui laisse un riche patrimoine de manuscrits.",
          },
          {
            type: "aRetenir",
            points: [
              "**Ezana** convertit Aksoum au christianisme au IVᵉ siècle",
              "Naissance de l'Église orthodoxe éthiopienne, toujours vivante",
              "Le **guèze** : langue liturgique et patrimoine de manuscrits",
            ],
          },
          {
            type: "leSavaisTu",
            text: "L'Église éthiopienne compte parmi les toutes premières du monde à avoir adopté le christianisme comme religion d'État — presque aussi tôt que Rome.",
          },
        ],
      },
      {
        id: "course-histoire-03-aksoum-lesson-4",
        title: "Les stèles géantes d'Aksoum",
        blocks: [
          {
            type: "paragraphe",
            text: "Un seul bloc de granit, taillé, transporté puis dressé à la verticale — sans grue, sans moteur. Certaines stèles d'**Aksoum** dépassent **30 mètres** de haut.",
          },
          {
            type: "chiffreCle",
            valeur: "30 m",
            legende: "hauteur des plus grandes stèles d'Aksoum",
          },
          {
            type: "paragraphe",
            text: "Ces obélisques monumentaux servaient de monuments funéraires au-dessus des tombes royales, sculptés pour imiter des tours à plusieurs étages. Leur taille et leur transport témoignent d'une maîtrise technique remarquable pour l'époque.",
          },
          {
            type: "aRetenir",
            points: [
              "Des stèles de granit, dressées au-dessus des tombes royales",
              "Certaines dépassent **30 mètres** de haut, taillées d'un seul bloc",
              "Classées aujourd'hui au patrimoine mondial de l'UNESCO",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Sculptées pour imiter des tours à plusieurs étages, ces stèles simulaient même de fausses portes et fenêtres — de véritables gratte-ciel de pierre.",
          },
        ],
      },
      {
        id: "course-histoire-03-aksoum-lesson-5",
        title: "Déclin et héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "À partir du **VIIᵉ siècle**, l'essor de l'islam déplace le commerce de la mer Rouge. Peu à peu, Aksoum se retrouve isolée du monde qui avait fait sa fortune.",
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
            text: "Son héritage fonde la civilisation éthiopienne : l'écriture guèze, le christianisme orthodoxe et une tradition impériale durable. La légende relie Aksoum à la reine de **Saba** ; cette Éthiopie chrétienne, aux églises taillées dans le roc, nous la retrouverons plus loin dans le programme.",
          },
          {
            type: "citation",
            texte: "De la reine de Saba descend la lignée des rois d'Éthiopie.",
            auteur: "Kebra Nagast (Gloire des Rois)",
          },
          {
            type: "aRetenir",
            points: [
              "L'islam déplace le commerce, Aksoum décline dès le **VIIᵉ siècle**",
              "Héritage : écriture guèze, christianisme orthodoxe, tradition impériale",
              "La légende de la reine de Saba, encore vivante aujourd'hui",
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
    title: "Carthage et l'Afrique du Nord antique",
    description: "Fondée par des marchands venus d'Orient, Carthage devint une superpuissance méditerranéenne face à Rome. Autour d'elle, l'Afrique du Nord vit naître de puissants royaumes berbères.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-04-carthage-afrique-du-nord-lesson-1",
        title: "Une fondation venue d'Orient",
        blocks: [
          {
            type: "paragraphe",
            text: "Une reine en fuite, venue d'Orient, aurait fondé la plus grande rivale de Rome. La légende de **Didon** commence par un exil.",
          },
          {
            type: "chiffreCle",
            valeur: "814 av. J.-C.",
            legende: "fondation de Carthage par des marchands phéniciens",
          },
          {
            type: "paragraphe",
            text: "Venus de **Tyr** (actuel Liban), ces marchands s'installent sur la côte de l'actuelle Tunisie. Grâce à sa position idéale au centre de la Méditerranée, la cité prospère vite et devient indépendante, passant en quelques siècles du simple comptoir à la métropole.",
          },
          {
            type: "aRetenir",
            points: [
              "**814 av. J.-C.** : des marchands phéniciens de Tyr fondent Carthage",
              "La légende attribue sa fondation à la reine Didon",
              "D'un comptoir commercial à une véritable métropole",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Le nom légendaire de la fondatrice de Carthage, Didon, est aussi connu sous son nom phénicien : **Élissa**.",
          },
        ],
      },
      {
        id: "course-histoire-04-carthage-afrique-du-nord-lesson-2",
        title: "Un empire commercial et maritime",
        blocks: [
          {
            type: "paragraphe",
            text: "De l'Espagne à la Sicile, la flotte carthaginoise sillonnait toute la **Méditerranée**. Aucune autre puissance de son temps ne maîtrisait autant la mer.",
          },
          {
            type: "chiffreCle",
            valeur: "~670 ans",
            legende: "de sa fondation à sa chute face à Rome",
          },
          {
            type: "paragraphe",
            text: "Carthage bâtit sa puissance sur le commerce et la mer : métaux, produits agricoles, artisanat. Son arrière-pays africain, très fertile, fournit d'abondantes récoltes. Cette domination finit par la mettre en concurrence directe avec une autre puissance montante : **Rome**.",
          },
          {
            type: "aRetenir",
            points: [
              "Une flotte redoutée, de l'Espagne à la Sicile",
              "Un arrière-pays africain fertile, source de richesse",
              "La rivale montante : **Rome**",
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
            text: "Pendant plus de cent ans, deux superpuissances s'affrontent pour dominer la Méditerranée. Un seul homme, avec des éléphants, a failli changer le cours de l'histoire.",
          },
          {
            type: "chiffreCle",
            valeur: "218 av. J.-C.",
            legende: "Hannibal franchit les Alpes avec ses éléphants",
          },
          {
            type: "paragraphe",
            text: "Entre **264-146 av. J.-C.**, Carthage et Rome se livrent trois guerres puniques. Le général **Hannibal** inflige de lourdes défaites aux Romains sur leur propre sol. Mais Rome finit par l'emporter : en 146 av. J.-C., elle rase Carthage.",
          },
          {
            type: "aRetenir",
            points: [
              "Trois guerres puniques opposent Carthage à Rome (**264-146 av. J.-C.**)",
              "**Hannibal** franchit les Alpes avec des éléphants en 218 av. J.-C.",
              "Rome l'emporte et rase Carthage en 146 av. J.-C.",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Pour franchir les Alpes, Hannibal perd la majeure partie de ses éléphants de guerre — mais jamais sa détermination à atteindre Rome.",
          },
        ],
      },
      {
        id: "course-histoire-04-carthage-afrique-du-nord-lesson-4",
        title: "Les royaumes berbères de Numidie",
        blocks: [
          {
            type: "paragraphe",
            text: "Carthage n'était pas seule en Afrique du Nord. À ses côtés, un royaume berbère s'alliait, résistait, puis résistait encore — face à Rome comme face à Carthage.",
          },
          {
            type: "chiffreCle",
            valeur: "IIe av. J.-C.",
            legende: "Massinissa unifie le royaume de Numidie",
          },
          {
            type: "paragraphe",
            text: "Le roi **Massinissa** unifie la Numidie et en fait un État prospère, tour à tour allié et rival de Rome et de Carthage. Plus tard, le roi **Jugurtha** résiste longuement à la conquête romaine.",
          },
          {
            type: "aRetenir",
            points: [
              "La Numidie : un puissant royaume berbère (amazigh)",
              "**Massinissa** unifie la Numidie au IIᵉ siècle av. J.-C.",
              "**Jugurtha** résiste longuement à la conquête romaine",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Ces royaumes rappellent que l'Afrique du Nord antique, ce n'était pas que Carthage : des peuples autochtones y bâtissaient depuis longtemps leurs propres États.",
          },
        ],
      },
      {
        id: "course-histoire-04-carthage-afrique-du-nord-lesson-5",
        title: "L'Afrique romaine et l'héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Après la chute de Carthage, l'Afrique du Nord ne disparaît pas : elle devient l'une des provinces les plus riches de tout l'**Empire romain**.",
          },
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
            text: "Surnommée le « grenier de Rome » pour son blé et son huile d'olive, la région voit se développer des villes brillantes, comme **Timgad**. Sous ces couches successives, le fond amazigh (berbère) de l'Afrique du Nord n'a jamais disparu et perdure aujourd'hui.",
          },
          {
            type: "citation",
            texte: "Notre cœur est sans repos tant qu'il ne repose en Toi.",
            auteur: "Augustin d'Hippone, Confessions",
          },
          {
            type: "aRetenir",
            points: [
              "L'Afrique du Nord devient le « grenier de Rome »",
              "**Augustin d'Hippone**, grand penseur né dans l'Afrique romaine",
              "Le fond amazigh (berbère) n'a jamais disparu",
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
    title: "L'empire du Ghana (Wagadou)",
    description: "Bien avant le pays qui porte aujourd'hui son nom, l'empire du Ghana dominait le Sahel ouest-africain grâce à l'or et au commerce transsaharien. Les Arabes l'appelaient « le pays de l'or ».",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-05-empire-du-ghana-lesson-1",
        title: "Wagadou, pas le Ghana d'aujourd'hui",
        blocks: [
          {
            type: "paragraphe",
            text: "Le premier grand empire d'Afrique de l'Ouest ne se trouvait pas dans le pays qui porte aujourd'hui son nom. Ses fondateurs l'appelaient **Wagadou**.",
          },
          {
            type: "chiffreCle",
            valeur: "IVe-XIIIe s.",
            legende: "l'empire du Ghana domine le Sahel ouest-africain",
          },
          {
            type: "paragraphe",
            text: "Fondé par le peuple **soninké**, l'empire s'étend sur le sud de la Mauritanie et l'ouest du Mali actuels, avec pour capitale **Koumbi Saleh**. « Ghana » désignait à l'origine le titre du roi, « chef de guerre ».",
          },
          {
            type: "aRetenir",
            points: [
              "**Wagadou** : le nom donné par les Soninké à leur empire",
              "Capitale à **Koumbi Saleh**, entre Mauritanie et Mali actuels",
              "« Ghana » : d'abord un titre royal, pas un lieu",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Le pays qui porte aujourd'hui le nom Ghana n'a, historiquement, aucun territoire commun avec cet empire médiéval : le nom a simplement été repris par fierté.",
          },
        ],
      },
      {
        id: "course-histoire-05-empire-du-ghana-lesson-2",
        title: "L'or et le sel",
        blocks: [
          {
            type: "paragraphe",
            text: "Le sel valait presque son pesant d'or. Sur les routes du **Sahara**, deux richesses se croisaient sans jamais venir du même endroit.",
          },
          {
            type: "chiffreCle",
            valeur: "XIe siècle",
            legende: "al-Bakri décrit la richesse de la cour du Ghana",
          },
          {
            type: "paragraphe",
            text: "L'or vient des régions du sud, le sel des mines du Sahara. Le roi prélève une taxe sur tout ce qui entre et sort du royaume — la vraie source de sa fortune. Le géographe arabe **al-Bakri** a décrit cette richesse fabuleuse.",
          },
          {
            type: "aRetenir",
            points: [
              "L'or du sud contre le sel du Sahara : deux flux inverses",
              "Une taxe sur tout le commerce : la vraie richesse du roi",
              "**Al-Bakri** (XIᵉ siècle) décrit la cour fabuleuse du Ghana",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Le sel était parfois si rare au sud qu'il s'échangeait presque à poids égal contre l'or qui remontait vers le nord.",
          },
        ],
      },
      {
        id: "course-histoire-05-empire-du-ghana-lesson-3",
        title: "Deux villes pour un royaume",
        blocks: [
          {
            type: "paragraphe",
            text: "Deux villes, un seul royaume : d'un côté le pouvoir et les religions traditionnelles, de l'autre les marchands venus du nord.",
          },
          {
            type: "citation",
            texte: "Derrière le roi se tiennent dix pages, portant boucliers et épées garnis d'or.",
            auteur: "Al-Bakri, XIe siècle",
          },
          {
            type: "paragraphe",
            text: "La capitale, **Koumbi Saleh**, comprend deux villes reliées entre elles : l'une royale, l'autre habitée par les marchands musulmans. Le roi rend lui-même la justice, entouré d'une cour fastueuse.",
          },
          {
            type: "aRetenir",
            points: [
              "Deux villes reliées : la cité royale et la cité marchande",
              "Le roi rendait lui-même la justice",
              "Une cour fastueuse, décrite par les récits arabes",
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
            text: "Les marchands du Sahara n'apportent pas que de l'or et du sel : ils apportent aussi une religion nouvelle.",
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
            text: "Les rois du **Ghana** conservent longtemps leur religion traditionnelle, mais s'appuient sur des lettrés et administrateurs musulmans pour gérer le commerce et la diplomatie. Cette coexistence est caractéristique des grands États sahéliens.",
          },
          {
            type: "aRetenir",
            points: [
              "L'islam arrive par les marchands du nord",
              "Les rois gardent leur religion, mais emploient des lettrés musulmans",
              "Une coexistence caractéristique des grands États sahéliens",
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
            text: "Un empire ne meurt jamais tout à fait. Six siècles après la chute du **Ghana**, son nom renaît — à des centaines de kilomètres de distance.",
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
            text: "Affaibli par les rivalités internes et le déplacement des routes commerciales, le Ghana laisse place à un empire plus vaste : le **Mali**, fondé par un prince en exil que nous découvrons dans le prochain cours.",
          },
          {
            type: "aRetenir",
            points: [
              "Déclin aux **XIᵉ-XIIIᵉ siècles**, face aux rivalités et au Mali montant",
              "Un modèle : l'empire sahélien fondé sur l'or et le commerce",
              "**1957** : le Ghana moderne reprend le nom de l'empire",
            ],
          },
          {
            type: "leSavaisTu",
            text: "En 1957, le Ghana devient le premier pays d'Afrique subsaharienne indépendant — et choisit, par fierté, le nom de cet empire disparu six siècles plus tôt.",
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
    title: "Soundiata Keïta et la naissance de l'empire du Mali",
    description: "De prince exilé à fondateur d'empire, Soundiata Keïta a uni les Mandingues, bâti le Mali et donné à l'Afrique de l'Ouest l'une de ses plus anciennes chartes.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-06-soundiata-mali-lesson-1",
        title: "L'ombre du roi du Sosso",
        blocks: [
          {
            type: "paragraphe",
            text: "Après la chute du Ghana, un roi redouté domine l'Afrique de l'Ouest : **Soumaoro Kanté**, du royaume du Sosso, que l'on dit invincible.",
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
            text: "Les Mandingues (Malinké), installés autour du royaume de **Kangaba**, sur le haut Niger, vivent alors sous la menace de Soumaoro. C'est dans ce contexte d'oppression qu'émerge une figure fondatrice de l'histoire africaine : **Soundiata Keïta**.",
          },
          {
            type: "aRetenir",
            points: [
              "Après le Ghana, l'Afrique de l'Ouest se morcelle en royaumes rivaux",
              "**Soumaoro Kanté**, roi du Sosso, domine et opprime la région",
              "Les Mandingues vivent autour de Kangaba, sur le haut Niger",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Soumaoro Kanté, roi du Sosso, était réputé si cruel et si puissant qu'on le disait invincible — jusqu'à sa rencontre avec Soundiata.",
          },
        ],
      },
      {
        id: "course-histoire-06-soundiata-mali-lesson-2",
        title: "Soundiata, l'enfant qui ne marchait pas",
        blocks: [
          {
            type: "paragraphe",
            text: "On le disait incapable de marcher, enfant. Ce même enfant allait devenir le fondateur d'un empire.",
          },
          {
            type: "chiffreCle",
            valeur: "~800 ans",
            legende: "l'épopée transmise oralement par les griots",
          },
          {
            type: "paragraphe",
            text: "Selon l'épopée, **Soundiata** se relève par un effort de volonté devenu légendaire. Contraint à l'exil pour échapper aux rivalités de cour, il grandit loin de son pays, se forme auprès d'autres souverains, puis revient pour libérer son peuple.",
          },
          {
            type: "aRetenir",
            points: [
              "Un enfant fragile, incapable de marcher dans sa jeunesse",
              "Il se relève par un effort de volonté devenu légendaire",
              "L'exil, la formation, puis le retour pour libérer son peuple",
            ],
          },
          {
            type: "leSavaisTu",
            text: "L'histoire de Soundiata nous vient uniquement de la tradition orale des **griots** : aucun texte écrit de l'époque ne la raconte.",
          },
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
          {
            type: "paragraphe",
            text: "Vers 1236, une grande assemblée se réunit à Kurukan Fuga. Elle proclame l'une des plus anciennes chartes de droits connues en Afrique.",
          },
          {
            type: "chiffreCle",
            valeur: "1236",
            legende: "proclamation de la Charte du Manden à Kurukan Fuga",
          },
          {
            type: "paragraphe",
            text: "Cette charte répartit les rôles entre clans, garantit des droits et énonce des principes de respect de la vie humaine et de solidarité. Transmise par les **griots**, elle est aujourd'hui inscrite au patrimoine immatériel de l'**UNESCO**.",
          },
          {
            type: "citation",
            texte: "Toute vie humaine est une vie.",
            auteur: "Charte du Manden, Kurukan Fuga (1236)",
          },
          {
            type: "aRetenir",
            points: [
              "**1236** : proclamation de la Charte du Manden à Kurukan Fuga",
              "Des droits, des rôles par clan, et un principe de solidarité",
              "Une des plus anciennes « constitutions » d'Afrique, inscrite par l'UNESCO",
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
            text: "Soundiata ne fonde pas seulement un empire : il pose les bases d'une prospérité qui dépassera son propre règne.",
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
            text: "Sous **Soundiata**, le Mali contrôle les routes de l'or, développe l'agriculture dans la vallée du Niger et intègre de nombreux peuples. C'est sous l'un de ses successeurs, **Mansa Moussa**, que le Mali atteindra son apogée.",
          },
          {
            type: "aRetenir",
            points: [
              "Contrôle de l'or, agriculture du Niger, intégration des peuples",
              "Soundiata, héros fondateur et symbole de bonne gouvernance",
              "Son successeur **Mansa Moussa** mènera le Mali à son apogée",
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
    title: "Mansa Moussa et l'apogée du Mali",
    description: "Souvent présenté comme l'homme le plus riche de l'histoire, Mansa Moussa a fait rayonner le Mali de Tombouctou jusqu'à La Mecque, et inscrit l'Afrique de l'Ouest sur les cartes du monde.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-07-mansa-moussa-lesson-1",
        title: "Le plus riche souverain du monde",
        blocks: [
          {
            type: "paragraphe",
            text: "On a longtemps présenté **Mansa Moussa** comme l'homme le plus riche de toute l'histoire. Il régnait sur l'un des plus vastes empires d'Afrique de l'Ouest.",
          },
          {
            type: "chiffreCle",
            valeur: "1312-1337",
            legende: "le règne de Mansa Moussa sur l'empire du Mali",
          },
          {
            type: "paragraphe",
            text: "Sous son règne, l'empire atteint sa plus grande étendue, de l'Atlantique aux confins du Niger. Le mot **mansa** signifie « roi des rois ». Maître des régions productrices d'or les plus riches de l'époque, il dispose de moyens colossaux.",
          },
          {
            type: "aRetenir",
            points: [
              "**1312-1337** : le règne de Mansa Moussa (Kankou Moussa)",
              "Mansa : « roi des rois », un empire de l'Atlantique au Niger",
              "Maître des régions d'or les plus riches de son temps",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Mansa Moussa est aussi appelé Kankou Moussa, du nom de sa mère, **Kankou** — une pratique fréquente dans la tradition mandingue.",
          },
        ],
      },
      {
        id: "course-histoire-07-mansa-moussa-lesson-2",
        title: "Le pèlerinage à La Mecque",
        blocks: [
          {
            type: "paragraphe",
            text: "En **1324**, un souverain africain traverse le désert avec une caravane de milliers de personnes — et assez d'or pour changer, pour des années, l'économie d'une ville entière.",
          },
          {
            type: "chiffreCle",
            valeur: "1324",
            legende: "le pèlerinage de Mansa Moussa à La Mecque",
          },
          {
            type: "paragraphe",
            text: "Accompagné d'une immense caravane, Mansa Moussa distribue et dépense tant d'or lors de son passage au **Caire** que sa valeur y reste déprimée pendant plusieurs années, selon les chroniqueurs.",
          },
          {
            type: "citation",
            texte: "La main qui donne est au-dessus de la main qui reçoit.",
            auteur: "Tradition islamique",
          },
          {
            type: "aRetenir",
            points: [
              "**1324** : le grand pèlerinage (hajj) de Mansa Moussa",
              "Au Caire, ses dépenses en or font chuter sa valeur",
              "Ce voyage révèle au monde la richesse du Mali",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Selon les chroniqueurs, la valeur de l'or resta affaiblie au Caire pendant plusieurs années après le passage de Mansa Moussa.",
          },
        ],
      },
      {
        id: "course-histoire-07-mansa-moussa-lesson-3",
        title: "Une renommée mondiale",
        blocks: [
          {
            type: "paragraphe",
            text: "En **1375**, une carte européenne représente pour la première fois un souverain d'Afrique de l'Ouest — assis sur son trône, une pépite d'or à la main.",
          },
          {
            type: "chiffreCle",
            valeur: "1375",
            legende: "l'Atlas catalan représente Mansa Moussa",
          },
          {
            type: "paragraphe",
            text: "L'**Atlas catalan**, célèbre carte européenne, désigne Mansa Moussa comme le souverain le plus riche de la région. Pour la première fois, un empire d'Afrique de l'Ouest figure en bonne place sur les cartes du monde méditerranéen.",
          },
          {
            type: "aRetenir",
            points: [
              "**1375** : l'Atlas catalan représente Mansa Moussa sur son trône",
              "Une pépite d'or à la main, souverain le plus riche",
              "Le Mali apparaît enfin sur les cartes du monde méditerranéen",
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
            text: "De retour chez lui, Mansa Moussa ne rapporte pas que des souvenirs de voyage : il ramène des savants, des architectes, et un projet de ville.",
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
            text: "Il fait venir des savants, dont **Es-Sahéli**, et construit des mosquées comme la **Djinguereber**. Sous son impulsion, Tombouctou et Djenné deviennent de grands centres du savoir islamique, avec leurs bibliothèques et leurs milliers de manuscrits.",
          },
          {
            type: "aRetenir",
            points: [
              "**Es-Sahéli** conçoit la mosquée Djinguereber à Tombouctou",
              "Tombouctou et Djenné deviennent de grands centres de savoir",
              "Des bibliothèques et des milliers de manuscrits",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Ces mêmes villes de Tombouctou et de Djenné sont aujourd'hui classées au patrimoine mondial de l'UNESCO.",
          },
        ],
      },
      {
        id: "course-histoire-07-mansa-moussa-lesson-5",
        title: "Héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "**Mansa Moussa** est devenu, dans la mémoire mondiale, le symbole de la richesse, du savoir et de l'ouverture de l'Afrique médiévale.",
          },
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
            text: "Son règne montre qu'un empire africain pouvait rivaliser avec les plus grandes puissances de son temps. Après lui, le Mali connaît un lent déclin, laissant la place à un nouvel empire venu de l'est : le **Songhaï**, dont nous parlerons ensuite.",
          },
          {
            type: "aRetenir",
            points: [
              "Symbole mondial de la richesse et du savoir africains",
              "Un empire qui rivalisait avec les plus grandes puissances",
              "Le déclin du Mali ouvre la voie au Songhaï",
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
        question: "Que se passa-t-il lorsqu'il distribua son or au Caire ?",
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
    title: "L'empire Songhaï et Askia Mohammed",
    description: "Sur les rives du Niger, le Songhaï devint le plus vaste empire de l'histoire ouest-africaine, avec Gao pour capitale et de grands souverains réformateurs.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-08-empire-songhai-lesson-1",
        title: "Gao et la montée du Songhaï",
        blocks: [
          {
            type: "paragraphe",
            text: "Longtemps soumis au Mali, un peuple du fleuve profite de son déclin pour bâtir, à son tour, un empire.",
          },
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
            text: "Installé le long de la boucle du **Niger**, autour de **Gao**, le peuple songhaï profite de sa position sur le fleuve — un axe de communication et de commerce — pour étendre son autorité sur les grandes cités marchandes, dont Tombouctou et Djenné.",
          },
          {
            type: "aRetenir",
            points: [
              "Le peuple songhaï s'installe autour de **Gao**, sur le Niger",
              "Longtemps vassal du Mali, il s'émancipe à son déclin",
              "Le fleuve Niger : un axe de commerce et de pouvoir",
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
            text: "Grand conquérant pour les uns, souverain redouté pour les autres : la mémoire de Sonni Ali Ber reste profondément partagée.",
          },
          {
            type: "chiffreCle",
            valeur: "1464-1492",
            legende: "le règne de Sonni Ali Ber",
          },
          {
            type: "paragraphe",
            text: "Chef de guerre redoutable, il s'appuie sur une puissante cavalerie et sur une flotte de guerre naviguant sur le **Niger** pour conquérir **Tombouctou** puis **Djenné**. Sous son règne, le Songhaï devient l'État dominant de l'Afrique de l'Ouest.",
          },
          {
            type: "aRetenir",
            points: [
              "**1464-1492** : le règne de Sonni Ali Ber",
              "Une cavalerie et une flotte fluviale, armes de conquête",
              "Conquête de Tombouctou et Djenné ; le Songhaï domine",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Les lettrés de Tombouctou gardent de Sonni Ali Ber un souvenir sévère — quand les chroniques militaires célèbrent avant tout le conquérant.",
          },
        ],
      },
      {
        id: "course-histoire-08-empire-songhai-lesson-3",
        title: "Askia Mohammed, le réformateur",
        blocks: [
          {
            type: "paragraphe",
            text: "Après le conquérant vient le bâtisseur. Askia Mohammed n'agrandit pas l'empire : il le réorganise, pièce par pièce.",
          },
          {
            type: "chiffreCle",
            valeur: "1493-1528",
            legende: "le règne d'Askia Mohammed, « Askia le Grand »",
          },
          {
            type: "paragraphe",
            text: "Musulman fervent, il accomplit un pèlerinage à **La Mecque** et réorganise l'empire : provinces dirigées par des gouverneurs, administration centralisée, armée permanente, poids et mesures unifiés. Sous lui, le **Songhaï** atteint son apogée.",
          },
          {
            type: "citation",
            texte: "Un chef est le berger de son peuple, il est responsable de son troupeau.",
            auteur: "Tradition islamique",
          },
          {
            type: "aRetenir",
            points: [
              "**1493-1528** : le règne d'Askia Mohammed, « Askia le Grand »",
              "Provinces, gouverneurs, armée permanente : un empire réorganisé",
              "Apogée politique et culturelle du Songhaï",
            ],
          },
        ],
      },
      {
        id: "course-histoire-08-empire-songhai-lesson-4",
        title: "Un empire vaste et savant",
        blocks: [
          {
            type: "paragraphe",
            text: "À son sommet, un seul empire domine tout le Sahel ouest-africain — plus vaste qu'aucun autre avant lui dans la région.",
          },
          {
            type: "chiffreCle",
            valeur: "~35 ans",
            legende: "la durée de l'apogée politique et culturelle du Songhaï",
          },
          {
            type: "paragraphe",
            text: "Son administration structurée, son armée et son contrôle du commerce transsaharien en font une puissance de premier plan. **Tombouctou** et **Djenné** connaissent, sous sa protection, un remarquable rayonnement intellectuel, avec leurs écoles et leurs bibliothèques.",
          },
          {
            type: "aRetenir",
            points: [
              "Le plus vaste empire de l'histoire de l'Afrique de l'Ouest",
              "Administration, armée, commerce transsaharien : une puissance de premier plan",
              "Tombouctou et Djenné rayonnent sous la protection du Songhaï",
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
            text: "En 1591, une armée équipée d'un tout nouvel outil de guerre met fin à des siècles de puissance sahélienne : les armes à feu.",
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
            text: "Une armée venue du **Maroc**, équipée d'armes à feu encore inconnues dans la région, écrase l'armée songhaï à la bataille de **Tondibi**. Cette défaite marque la fin des grands empires sahéliens fondés sur l'or et le commerce transsaharien.",
          },
          {
            type: "aRetenir",
            points: [
              "**1591** : défaite de Tondibi face à une armée marocaine",
              "Les armes à feu, inconnues dans la région, font la différence",
              "La fin des grands empires sahéliens (Ghana, Mali, Songhaï)",
            ],
          },
          {
            type: "leSavaisTu",
            text: "L'éclat intellectuel de Tombouctou et de Djenné, lui, survit à la chute politique du Songhaï — c'est leur histoire que nous racontons dans le prochain cours.",
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
    title: "Tombouctou et Djenné, foyers du savoir",
    description: "Deux villes de la boucle du Niger sont devenues des phares mondiaux de la connaissance, avec leurs universités, leurs bibliothèques de manuscrits et une architecture de terre unique au monde.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-09-tombouctou-djenne-lesson-1",
        title: "Du commerce au savoir",
        blocks: [
          {
            type: "paragraphe",
            text: "L'or et le sel ont fait la fortune de ces villes. Mais c'est un autre trésor qui allait les rendre immortelles : le savoir.",
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
            text: "Situées aux carrefours du commerce transsaharien et fluvial, **Tombouctou** et **Djenné** s'enrichissent d'abord grâce aux caravanes d'or et de sel. Cette prospérité attire des marchands, mais aussi des lettrés et des étudiants venus de tout le monde musulman.",
          },
          {
            type: "aRetenir",
            points: [
              "Deux villes enrichies par le commerce de l'or et du sel",
              "La prospérité attire aussi des lettrés et des étudiants",
              "Le savoir devient une richesse aussi prisée que l'or",
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
            text: "Des milliers d'étudiants, venus de tout le monde musulman, étudient dans une seule mosquée-université au cœur du **Sahel**.",
          },
          {
            type: "chiffreCle",
            valeur: "6",
            legende: "disciplines enseignées à l'université de Sankoré",
          },
          {
            type: "paragraphe",
            text: "On y enseigne le droit, la théologie, la grammaire, mais aussi l'astronomie, les mathématiques et la médecine. Des savants réputés, comme **Ahmed Baba**, y écrivent des ouvrages qui circulent dans tout le monde islamique.",
          },
          {
            type: "citation",
            texte: "Cherche le savoir du berceau jusqu'à la tombe.",
            auteur: "Tradition islamique",
          },
          {
            type: "aRetenir",
            points: [
              "**6** disciplines enseignées, du droit à l'astronomie",
              "**Ahmed Baba**, savant réputé, diffusé dans le monde islamique",
              "Tombouctou devient synonyme de savoir, cité mythique",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Tombouctou est entrée dans l'imaginaire mondial comme une cité mythique du savoir — un nom utilisé encore aujourd'hui pour désigner un lieu lointain.",
          },
        ],
      },
      {
        id: "course-histoire-09-tombouctou-djenne-lesson-3",
        title: "Les manuscrits de Tombouctou",
        blocks: [
          {
            type: "paragraphe",
            text: "Des centaines de milliers de pages, conservées de génération en génération, dans des bibliothèques familiales : les manuscrits de **Tombouctou**.",
          },
          {
            type: "chiffreCle",
            valeur: "100 000+",
            legende: "manuscrits conservés à Tombouctou",
          },
          {
            type: "paragraphe",
            text: "Ces manuscrits traitent de religion, de droit, d'histoire, de sciences et d'astronomie, rassemblés dans des bibliothèques familiales transmises de génération en génération. Ils prouvent que l'**Afrique de l'Ouest** possédait une tradition écrite savante.",
          },
          {
            type: "aRetenir",
            points: [
              "Des centaines de milliers de manuscrits, en bibliothèques familiales",
              "Religion, droit, histoire, sciences, astronomie : tous les savoirs",
              "La preuve d'une tradition écrite savante en Afrique de l'Ouest",
            ],
          },
        ],
      },
      {
        id: "course-histoire-09-tombouctou-djenne-lesson-4",
        title: "L'architecture de terre",
        blocks: [
          {
            type: "paragraphe",
            text: "Le plus vaste édifice en terre crue du monde ne se trouve ni en Asie ni en Europe : il est à Djenné.",
          },
          {
            type: "chiffreCle",
            valeur: "N° 1 mondial",
            legende: "plus vaste édifice en terre crue du monde",
          },
          {
            type: "paragraphe",
            text: "Chaque année, toute la population de **Djenné** participe à la réfection de sa Grande Mosquée, lors d'une grande fête communautaire. À **Tombouctou**, la mosquée Djinguereber témoigne du même génie de l'architecture de terre.",
          },
          {
            type: "aRetenir",
            points: [
              "La Grande Mosquée de Djenné : le plus vaste édifice en terre crue",
              "Une réfection collective chaque année, en fête communautaire",
              "Djinguereber, à Tombouctou, le même génie architectural",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Ces monuments de terre, entretenus depuis des siècles par les mêmes gestes collectifs, sont aujourd'hui classés au patrimoine mondial de l'UNESCO.",
          },
        ],
      },
      {
        id: "course-histoire-09-tombouctou-djenne-lesson-5",
        title: "Héritage et préservation",
        blocks: [
          {
            type: "paragraphe",
            text: "Ce patrimoine reste fragile. En **2012**, des mausolées de Tombouctou furent détruits — et des habitants ont risqué leur vie pour sauver les manuscrits.",
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
            text: "L'**UNESCO** et les communautés locales œuvrent aujourd'hui à la protection et à la numérisation de ces trésors. Préserver ces manuscrits et ces monuments, c'est préserver la mémoire écrite de tout un continent.",
          },
          {
            type: "aRetenir",
            points: [
              "**2012** : des mausolées détruits, des manuscrits sauvés par les habitants",
              "UNESCO et communautés locales : protection et numérisation",
              "Préserver ce patrimoine, c'est préserver la mémoire d'un continent",
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
        question: "Quel savant réputé de Tombouctou est cité dans ce cours ?",
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
    title: "L'empire du Kanem-Bornou",
    description: "Autour du lac Tchad, un empire a duré près de mille ans, reliant l'Afrique centrale au monde méditerranéen par le commerce, la diplomatie et l'islam.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-10-kanem-bornou-lesson-1",
        title: "Mille ans d'une seule dynastie",
        blocks: [
          {
            type: "paragraphe",
            text: "Une seule famille a gouverné le même royaume pendant près de mille ans. Peu d'États, dans le monde entier, peuvent en dire autant.",
          },
          {
            type: "chiffreCle",
            valeur: "~1000 ans",
            legende: "le règne de la dynastie Sayfawa au Kanem",
          },
          {
            type: "paragraphe",
            text: "Vers le IXᵉ siècle, à l'est et au nord du lac **Tchad**, émerge le royaume du **Kanem**, peuplé notamment de Kanouri. Il est gouverné par la dynastie des **Sayfawa**, l'une des plus durables de toute l'histoire mondiale.",
          },
          {
            type: "aRetenir",
            points: [
              "Le royaume du Kanem émerge vers le **IXᵉ siècle**",
              "La dynastie **Sayfawa** règne près de mille ans",
              "Une stabilité politique rare à cette échelle de temps",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Peu de dynasties dans l'histoire du monde — Europe ou Asie comprises — ont gouverné un même royaume aussi longtemps que les Sayfawa du Kanem.",
          },
        ],
      },
      {
        id: "course-histoire-10-kanem-bornou-lesson-2",
        title: "L'essor du Kanem et l'islam",
        blocks: [
          {
            type: "paragraphe",
            text: "Le sel, le cuivre, les tissus — et une religion nouvelle. Tout circule sur les mêmes routes qui traversent le Sahara vers le Kanem.",
          },
          {
            type: "chiffreCle",
            valeur: "XIe siècle",
            legende: "les mai du Kanem adoptent l'islam",
          },
          {
            type: "paragraphe",
            text: "Le Kanem tire sa puissance du contrôle des routes transsahariennes reliant l'Afrique centrale au Maghreb et à l'Égypte. Vers le XIᵉ siècle, ses souverains, les **mai**, adoptent l'**islam**, qui renforce leurs liens commerciaux et diplomatiques avec le monde musulman.",
          },
          {
            type: "aRetenir",
            points: [
              "Le Kanem contrôle les routes transsahariennes vers le Maghreb",
              "**XIᵉ siècle** : les mai adoptent l'islam",
              "Des liens commerciaux et diplomatiques avec le monde musulman",
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
            text: "Après des crises internes, un royaume ne s'effondre pas forcément : il se déplace, se relève ailleurs, et prend un nouveau nom.",
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
            text: "Le centre du pouvoir se déplace au sud-ouest du lac Tchad, vers la région du **Bornou**. Le royaume renaît sous le nom de **Kanem-Bornou**, avec une nouvelle capitale, **Ngazargamu** — loin de marquer un déclin, une nouvelle prospérité s'ouvre.",
          },
          {
            type: "aRetenir",
            points: [
              "Le pouvoir se déplace vers le Bornou, au sud-ouest",
              "Nouvelle capitale : **Ngazargamu**",
              "Un déplacement, pas un déclin : une nouvelle prospérité",
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
            text: "Un roi peut agrandir un empire par les armes. Idris Alooma, lui, le transforme aussi par les mousquets, la diplomatie et la loi.",
          },
          {
            type: "chiffreCle",
            valeur: "fin XVIe s.",
            legende: "l'apogée du Kanem-Bornou sous Idris Alooma",
          },
          {
            type: "paragraphe",
            text: "Grand réformateur, il modernise l'armée en introduisant des mousquetaires et des armes à feu, noue des relations diplomatiques avec l'Empire **ottoman**, et renforce la justice fondée sur la loi islamique.",
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
            text: "Le Kanem-Bornou d'Idris Alooma est l'un des rares États d'Afrique subsaharienne de son temps à nouer des relations directes avec Istanbul.",
          },
        ],
      },
      {
        id: "course-histoire-10-kanem-bornou-lesson-5",
        title: "Longévité et héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Le **Kanem-Bornou** n'a pas seulement duré. Il a montré que les grands États africains ne s'arrêtaient pas au Sahel de l'Ouest.",
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
            text: "Son histoire illustre le rôle des empires du **Soudan central** dans la diffusion de l'islam, le commerce à longue distance et la stabilité politique — la preuve que les grands États africains s'étendent bien au-delà du Sahel de l'Ouest.",
          },
          {
            type: "aRetenir",
            points: [
              "Le Kanem-Bornou perdure jusqu'au **XIXᵉ siècle**",
              "Un des États les plus durables d'Afrique",
              "Les grands États africains s'étendent bien au-delà du Sahel",
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
        question: "Sous quel souverain l'empire a-t-il atteint son apogée ?",
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
    title: "Les cités-États haoussa",
    description: "Dans le nord de l'actuel Nigeria, un réseau de cités marchandes prospères — Kano, Katsina, Zaria — a rayonné par le commerce, l'artisanat et le savoir, sans jamais former un empire unique.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-11-cites-etats-haoussa-lesson-1",
        title: "Sept cités, aucun empire",
        blocks: [
          {
            type: "paragraphe",
            text: "Pas de capitale unique, pas de souverain commun : les Haoussa ont bâti leur puissance sur des cités rivales et complémentaires.",
          },
          {
            type: "chiffreCle",
            valeur: "7",
            legende: "cités-États haoussa (Hausa Bakwai)",
          },
          {
            type: "paragraphe",
            text: "Dans le nord de l'actuel Nigeria et du Niger vivent les **Haoussa**. La tradition évoque les « sept vrais États haoussa », parmi lesquels **Kano**, **Katsina** et Zaria. Chaque cité, fortifiée, est gouvernée par un souverain, le sarki.",
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
            text: "À Kano, des fosses de teinture creusées il y a des siècles servent encore aujourd'hui. Peu d'ateliers, dans le monde, ont une telle continuité.",
          },
          {
            type: "chiffreCle",
            valeur: "3",
            legende: "savoir-faire qui firent la réputation de Kano",
          },
          {
            type: "paragraphe",
            text: "Situées à la charnière entre le Sahara et les régions forestières, les cités haoussa prospèrent grâce au commerce. **Kano**, la plus célèbre, est réputée pour ses textiles, son travail du cuir et sa teinture à l'indigo.",
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
            text: "Les cités deviennent des centres d'administration et de savoir islamique, avec leurs écoles et leurs lettrés. La religion nouvelle se mêle longtemps aux croyances traditionnelles, avant de s'imposer plus fortement.",
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
            text: "Souvent en rivalité, parfois dominées par des voisins plus puissants, les cités haoussa ont pourtant légué à l'Afrique de l'Ouest l'une de ses grandes langues de commerce.",
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
            text: "Souvent en concurrence, parfois dominées par des voisins plus puissants comme le **Songhaï** ou le **Kanem-Bornou**, les cités haoussa conservent une grande vitalité culturelle. La langue haoussa devient une véritable langue de commerce, comprise sur de vastes territoires.",
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
    title: "Le royaume du Bénin (Edo) et ses bronzes",
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
            text: "Un roi qui n'est pas qu'un roi : à la fois chef politique et figure sacrée, l'Oba incarnait l'État tout entier.",
          },
          {
            type: "chiffreCle",
            valeur: "XVe-XVIIe s.",
            legende: "l'apogée du royaume du Bénin",
          },
          {
            type: "paragraphe",
            text: "Le royaume est gouverné par l'**Oba**, un roi à la fois politique et sacré, entouré d'une cour raffinée et de puissantes corporations d'artisans. Le Bénin atteint son apogée notamment sous le règne de l'Oba **Ewuare le Grand**, réformateur et conquérant.",
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
            text: "Un métal en fusion, versé dans un moule de cire fondue : de ce geste répété pendant des siècles sont nées des œuvres admirées dans le monde entier.",
          },
          {
            type: "chiffreCle",
            valeur: "Laiton",
            legende: "le vrai métal des « bronzes » du Bénin",
          },
          {
            type: "paragraphe",
            text: "Plaques et sculptures d'une extraordinaire finesse, réalisées selon la technique de la **cire perdue**, ornaient le palais royal, représentant les rois, la cour et l'histoire du royaume. Une corporation de fondeurs se transmettait ce savoir-faire de génération en génération.",
          },
          {
            type: "citation",
            texte: "Benvenuto Cellini lui-même n'aurait pu réaliser un meilleur moulage.",
            auteur: "Felix von Luschan, ethnologue allemand",
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
            text: "Ces plaques et sculptures ne décoraient pas au hasard : elles servaient d'archives visuelles, racontant en images l'histoire même du royaume.",
          },
        ],
      },
      {
        id: "course-histoire-12-royaume-benin-bronzes-lesson-4",
        title: "Le commerce avec les Européens",
        blocks: [
          {
            type: "paragraphe",
            text: "Dès la fin du XVᵉ siècle, des navires européens accostent sur les côtes du Bénin. Le royaume, lui, impose ses propres règles du jeu.",
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
            text: "Ce pillage est aujourd'hui au cœur d'un grand débat sur la restitution des œuvres d'art africaines : certaines pièces ont récemment été rendues. Les bronzes du Bénin restent un symbole du génie artistique africain et des injustices de la période coloniale.",
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
    title: "L'empire Oyo et le monde yoruba",
    description: "Puissance de cavalerie de l'Afrique de l'Ouest, l'empire Oyo domina le pays yoruba grâce à un système politique équilibré et à une culture d'une richesse mondiale.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-13-empire-oyo-yoruba-lesson-1",
        title: "Le pays yoruba",
        blocks: [
          {
            type: "paragraphe",
            text: "Selon la tradition, c'est ici même que le monde a été créé. Ici, c'est Ilé-Ifè, cœur spirituel de tout le monde yoruba.",
          },
          {
            type: "chiffreCle",
            valeur: "2",
            legende: "matières des célèbres têtes d'Ifè (terre cuite, bronze)",
          },
          {
            type: "paragraphe",
            text: "Les **Yoruba**, installés dans le sud-ouest de l'actuel Nigeria et l'est du Bénin, s'organisent en de nombreuses cités et royaumes. **Ilé-Ifè** en est le cœur spirituel : selon la tradition, c'est là que le monde yoruba fut créé.",
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
            text: "Entre le XVᵉ et le XVIIᵉ siècle, un empire s'impose sur les plaines de savane grâce à une arme que peu de ses voisins forestiers possédaient : le cheval.",
          },
          {
            type: "chiffreCle",
            valeur: "XVe-XVIIe s.",
            legende: "Oyo s'impose comme la grande puissance yoruba",
          },
          {
            type: "paragraphe",
            text: "Sa force repose sur une puissante **cavalerie** — les chevaux viennent du nord — qui lui permet de dominer les plaines de savane et de contrôler de vastes territoires. Sa capitale est **Oyo-Ilé**.",
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
            text: "Grâce à son armée et à sa position, Oyo contrôle d'importantes routes commerciales et étend son influence jusqu'à la côte, faisant même du royaume voisin du **Dahomey** un tributaire à certaines périodes.",
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
            text: "Au début du **XIXᵉ siècle**, Oyo décline, miné par des guerres civiles et la pression des jihads venus du nord. Mais la culture yoruba ne disparaît pas : elle rayonne dans le monde entier, notamment à travers la diaspora issue de la traite, jusqu'aux Amériques.",
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
    title: "Le royaume ashanti",
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
            text: "Les Européens ont donné à cette région un nom qui dit tout : la Côte de l'Or.",
          },
          {
            type: "chiffreCle",
            valeur: "Côte de l'Or",
            legende: "surnom européen de la région, riche en or",
          },
          {
            type: "paragraphe",
            text: "Les Ashanti commercent l'or, mais aussi, comme d'autres États côtiers, des captifs, avec les Européens installés sur le littoral. Le royaume, prospère, dispose d'une administration structurée, d'une armée et d'une riche culture de cour (étoffes **kente**, symboles **adinkra**).",
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
            text: "Pendant des décennies, un royaume africain a résisté, les armes à la main, à l'une des plus grandes puissances coloniales du monde.",
          },
          {
            type: "chiffreCle",
            valeur: "XIXe siècle",
            legende: "les guerres anglo-ashanti",
          },
          {
            type: "paragraphe",
            text: "Les **Ashanti** livrent une série de guerres contre les **Britanniques**, qui convoitent leur territoire. Pendant des décennies, ils résistent farouchement, infligeant parfois de lourdes pertes à l'envahisseur, avant que la supériorité militaire britannique ne finisse par l'emporter.",
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
            text: "En 1900, alors que les hommes hésitaient, une reine-mère a pris seule la tête d'un dernier soulèvement.",
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
    title: "Le royaume du Dahomey",
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
            text: "Un corps de femmes soldats d'élite, entraînées pour le combat : ce modèle est presque unique dans toute l'histoire militaire mondiale.",
          },
          {
            type: "chiffreCle",
            valeur: "Agojie",
            legende: "le nom réel des guerrières surnommées « Amazones »",
          },
          {
            type: "paragraphe",
            text: "Le Dahomey est mondialement connu pour son corps de femmes soldats, les **Agojie**, que les Européens surnommèrent les « Amazones ». Ces guerrières d'élite, entraînées et redoutées, forment une part importante de l'armée royale.",
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
            text: "Redoutées au combat, les Agojie suivaient un entraînement aussi dur que celui des soldats hommes — un fait qui stupéfiait les observateurs européens de l'époque.",
          },
        ],
      },
      {
        id: "course-histoire-15-royaume-dahomey-lesson-3",
        title: "Le roi et le pouvoir",
        blocks: [
          {
            type: "paragraphe",
            text: "Chaque année, la cour du Dahomey organisait de grandes cérémonies. Sur les murs du palais, l'histoire du royaume se lisait comme un livre.",
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
            text: "Le Dahomey est une monarchie absolue, dirigée par des rois puissants comme **Agaja**, **Ghézo**, Glèlè ou **Béhanzin**. Les bas-reliefs des palais d'Abomey servent d'archives, racontant en images les hauts faits de chaque règne.",
          },
          {
            type: "citation",
            texte: "Le roi voit avec les yeux du peuple.",
            auteur: "Proverbe fon",
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
            text: "Le roi **Béhanzin** résiste à la conquête française, mais est vaincu en 1894 et le Dahomey devient une colonie française. En 2021, la France restitue au Bénin des trésors royaux pillés durant la conquête. Nous retrouverons Béhanzin dans le cours sur les résistances à la colonisation.",
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
    title: "Le royaume du Kongo",
    description: "Vaste et bien organisé, le royaume du Kongo fut l'un des premiers États africains à nouer des relations diplomatiques d'égal à égal avec l'Europe — avant d'être miné par la traite.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-16-royaume-kongo-lesson-1",
        title: "Un grand royaume d'Afrique centrale",
        blocks: [
          {
            type: "paragraphe",
            text: "Bien avant l'arrivée des premiers navires européens, un État déjà vaste et organisé prospérait au bord du fleuve Congo.",
          },
          {
            type: "chiffreCle",
            valeur: "XIVe siècle",
            legende: "fondation du royaume du Kongo",
          },
          {
            type: "paragraphe",
            text: "Le royaume s'étend autour du bas cours du fleuve **Congo**, sur des territoires des actuels Angola, RD Congo et Congo. Sa capitale, **Mbanza-Kongo**, est aujourd'hui classée au patrimoine mondial de l'UNESCO — un État divisé en provinces, avec une monnaie de coquillages, les **nzimbu**.",
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
            text: "Il correspond avec le pape et le roi du Portugal, d'égal à égal. Ce souverain d'Afrique centrale ne demande la permission de personne.",
          },
          {
            type: "chiffreCle",
            valeur: "1509-1543",
            legende: "le règne d'Afonso Iᵉʳ (Nzinga Mbemba)",
          },
          {
            type: "paragraphe",
            text: "**Afonso Iᵉʳ** (Nzinga Mbemba) se convertit au christianisme et en fait la religion de l'État. Lettré, il correspond avec le roi du Portugal et le pape d'égal à égal, envoie des jeunes Kongo étudier en Europe et fait construire des églises.",
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
            text: "Le **Kongo** a montré qu'un État africain pouvait dialoguer d'égal à égal avec l'Europe — avant d'être emporté par la traite qu'il avait lui-même dénoncée.",
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
    title: "Le Grand Zimbabwe",
    description: "En Afrique australe, une cité de pierre monumentale, bâtie sans mortier, témoigne d'un puissant royaume de l'or et du commerce — et dément les préjugés coloniaux.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-17-grand-zimbabwe-lesson-1",
        title: "Une cité de pierre",
        blocks: [
          {
            type: "paragraphe",
            text: "Onze mètres de haut, en pierres sèches, sans une seule goutte de mortier. Certaines murailles du Grand Zimbabwe défient encore l'ingénierie moderne.",
          },
          {
            type: "chiffreCle",
            valeur: "11 m",
            legende: "hauteur de certaines murailles du Grand Zimbabwe",
          },
          {
            type: "paragraphe",
            text: "Le Grand Zimbabwe, dans l'actuel Zimbabwe, connaît son apogée entre le XIᵉ et le XVᵉ siècle. Il est bâti par les ancêtres du peuple **Shona**. Son nom vient de l'expression *dzimba dza mabwe*, « les maisons de pierre ».",
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
            text: "Ces murailles massives ont été édifiées sans aucun mortier : chaque pierre est taillée et assemblée avec une précision telle qu'elle tient seule, depuis près de mille ans.",
          },
        ],
      },
      {
        id: "course-histoire-17-grand-zimbabwe-lesson-2",
        title: "Un royaume de l'or",
        blocks: [
          {
            type: "paragraphe",
            text: "L'or extrait dans ces collines a voyagé jusqu'en Chine et en Perse — sans qu'aucun marchand du Grand Zimbabwe n'ait jamais quitté l'Afrique australe.",
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
            text: "18 000 habitants, un centre royal, une Grande Enceinte : le Grand Zimbabwe n'était pas un village, c'était une capitale.",
          },
          {
            type: "chiffreCle",
            valeur: "18 000",
            legende: "habitants estimés à l'apogée du Grand Zimbabwe",
          },
          {
            type: "paragraphe",
            text: "La cité comprend un centre royal et religieux, avec la célèbre **Grande Enceinte** et le complexe de la colline. Les artisans y sculptent de remarquables oiseaux en stéatite, les « oiseaux du Zimbabwe », devenus aujourd'hui l'emblème national du pays.",
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
            text: "Pendant plus d'un siècle, des colonisateurs ont refusé de croire que des Africains aient pu bâtir cette cité. L'archéologie leur a donné tort.",
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
    title: "Le royaume du Monomotapa (Mutapa)",
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
            text: "Comme son prédécesseur le Grand Zimbabwe, le Mutapa a compris une chose simple : l'or ne vaut rien tant qu'il ne voyage pas.",
          },
          {
            type: "chiffreCle",
            valeur: "Sofala",
            legende: "le port par lequel l'or du Mutapa rejoignait l'océan Indien",
          },
          {
            type: "paragraphe",
            text: "Le Mutapa tire sa puissance du commerce de l'**or** et de l'ivoire, acheminés vers la côte swahilie et le port de **Sofala**. Les marchands arabes et swahilis viennent y échanger tissus, perles et porcelaines contre les richesses de l'intérieur.",
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
            text: "Certains Portugais crurent avoir retrouvé, au cœur de l'Afrique australe, un lieu mentionné dans la Bible.",
          },
          {
            type: "chiffreCle",
            valeur: "XVIe siècle",
            legende: "les Portugais s'installent, fascinés par l'or du Mutapa",
          },
          {
            type: "paragraphe",
            text: "Les Portugais sont fascinés par les récits des mines d'or du **Monomotapa**. Certains croient y reconnaître le mythique pays d'**Ophir** de la Bible. Avides de contrôler ce commerce, ils cherchent à s'immiscer dans les affaires du royaume.",
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
            text: "Le mythique pays d'Ophir, source d'or du roi Salomon selon la Bible, n'a jamais été localisé avec certitude — mais des Portugais crurent l'avoir enfin trouvé, à tort, au Mutapa.",
          },
        ],
      },
      {
        id: "course-histoire-18-monomotapa-mutapa-lesson-4",
        title: "Tensions et déclin",
        blocks: [
          {
            type: "paragraphe",
            text: "Les Portugais rêvaient de richesses fabuleuses. Le Mutapa, lui, ne leur offrit jamais que des dettes et des rivalités.",
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
            text: "L'histoire du Grand Zimbabwe puis du **Mutapa** montre la continuité d'une puissante civilisation d'Afrique australe, bâtie sur l'or, le bétail et le commerce à longue distance. Ces royaumes shona rappellent que la région fut, bien avant la colonisation, le siège d'États organisés et prospères.",
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
    title: "Les royaumes des Grands Lacs",
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
            text: "La région des Grands Lacs, dans les actuels Ouganda, Rwanda, Burundi et Tanzanie, est une zone de hauts plateaux fertiles. Cette richesse agricole permet de fortes densités de population et l'émergence de royaumes centralisés : **Buganda**, Bunyoro, **Rwanda**, Burundi ou encore Ankole.",
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
            text: "Une flotte de pirogues, une administration de chefs, des routes : le Buganda ressemblait, par bien des aspects, à un État moderne.",
          },
          {
            type: "chiffreCle",
            valeur: "XVIIIe-XIXe s.",
            legende: "l'apogée du royaume du Buganda",
          },
          {
            type: "paragraphe",
            text: "Le **Buganda**, dans l'actuel Ouganda, est l'un des plus puissants. Dirigé par le **Kabaka** (roi), c'est un État très organisé, doté d'une administration de chefs, de routes, d'une armée solide et d'une flotte de pirogues sur le lac Victoria.",
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
            text: "Des tambours qui parlent le pouvoir, des récits qui traversent les siècles : ces royaumes n'ont jamais été « sans histoire ».",
          },
          {
            type: "citation",
            texte: "Le tambour ne parle pas seul, il parle pour tout le royaume.",
            auteur: "Proverbe ganda",
          },
          {
            type: "paragraphe",
            text: "L'économie de ces royaumes repose sur l'agriculture (notamment la **banane**) et l'élevage. Leurs cultures de cour sont riches : traditions orales, **tambours royaux** symboles du pouvoir, cérémonies et hiérarchies complexes.",
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
            text: "Les colonisateurs rigidifient les identités sociales et exploitent les rivalités, préparant de futurs conflits. Malgré tout, l'héritage de ces royaumes — leurs cultures, leurs langues, leurs institutions — reste très vivant dans l'Afrique de l'Est d'aujourd'hui.",
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
        question: "Quel objet symbolisait le pouvoir royal dans ces royaumes ?",
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
    title: "L'Éthiopie médiévale et les églises de Lalibela",
    description: "Héritière d'Aksoum, l'Éthiopie chrétienne médiévale a taillé dans le roc des églises extraordinaires et maintenu, en plein cœur de l'Afrique, une civilisation unique.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-lesson-1",
        title: "L'héritière d'Aksoum",
        blocks: [
          { type: "paragraphe", text: "Après le déclin d'Aksoum, la civilisation chrétienne éthiopienne se perpétua sur les hauts plateaux. Deux grandes dynasties marquèrent le Moyen Âge : la dynastie Zagwé (XIIᵉ-XIIIᵉ siècle), puis la dynastie dite salomonienne, qui prit le pouvoir en 1270 et prétendait descendre du roi Salomon et de la reine de Saba. L'Éthiopie resta ainsi un royaume chrétien continu, cas unique en Afrique." },
        ],
      },
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-lesson-2",
        title: "Les églises de Lalibela",
        blocks: [
          { type: "paragraphe", text: "Le roi Lalibela (dynastie Zagwé) fit tailler, vers les XIIᵉ-XIIIᵉ siècles, onze églises directement dans la roche, conçues comme une « Nouvelle Jérusalem ». Ces édifices monolithes, creusés vers le bas dans le sol puis sculptés, sont une prouesse d'ingénierie et de foi. Toujours en activité, ils sont classés au patrimoine mondial de l'UNESCO et restent un grand lieu de pèlerinage." },
        ],
      },
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-lesson-3",
        title: "Un christianisme unique",
        blocks: [
          { type: "paragraphe", text: "L'Église orthodoxe éthiopienne est l'une des plus anciennes du monde. Elle a conservé une langue liturgique propre, le guèze, son propre calendrier, de nombreux monastères et de superbes manuscrits enluminés. Isolée du reste de la chrétienté, elle a développé des traditions originales qui perdurent depuis plus de quinze siècles." },
        ],
      },
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-lesson-4",
        title: "Un État qui a résisté",
        blocks: [
          { type: "paragraphe", text: "Gouvernée par des empereurs (les négus), l'Éthiopie médiévale sut se maintenir face aux changements et aux menaces. Son épopée nationale, le Kebra Nagast (« la Gloire des rois »), relie la dynastie à Salomon et à la reine de Saba, et la tradition affirme que l'Arche d'Alliance est conservée à Aksoum. Ces récits nourrissent une identité nationale forte." },
        ],
      },
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-lesson-5",
        title: "Héritage",
        blocks: [
          { type: "paragraphe", text: "L'Éthiopie est unique en Afrique : elle n'a jamais été durablement colonisée, allant jusqu'à vaincre l'Italie à Adoua en 1896 (que nous verrons plus loin), et elle a maintenu une civilisation chrétienne continue. Lalibela, ses manuscrits et son Église orthodoxe témoignent de cette exceptionnelle profondeur historique, source de fierté pour tout le continent." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-quiz-1",
        question: "De quelle civilisation antique l'Éthiopie médiévale est-elle l'héritière ?",
        options: ["D'Aksoum", "de Carthage", "du Grand Zimbabwe", "du Mali"],
        correctIndex: 0,
        explanation: "L'Éthiopie chrétienne médiévale prolonge la civilisation d'Aksoum sur les hauts plateaux.",
      },
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-quiz-2",
        question: "Qu'ont de particulier les églises de Lalibela ?",
        options: ["Elles sont taillées directement dans la roche", "Elles sont construites en verre", "Elles flottent sur un lac", "Elles sont en briques de terre"],
        correctIndex: 0,
        explanation: "Les onze églises de Lalibela sont monolithes, taillées directement dans le roc.",
      },
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-quiz-3",
        question: "Quelle est la langue liturgique de l'Église orthodoxe éthiopienne ?",
        options: ["Le latin", "Le guèze", "L'arabe", "Le grec"],
        correctIndex: 1,
        explanation: "Le guèze est la langue liturgique ancienne de l'Église orthodoxe éthiopienne.",
      },
      {
        id: "course-histoire-20-ethiopie-medievale-lalibela-quiz-4",
        question: "En quelle année la dynastie salomonienne prit-elle le pouvoir ?",
        options: ["En 1270", "En 1896", "En 330", "En 1591"],
        correctIndex: 0,
        explanation: "La dynastie dite salomonienne prit le pouvoir en 1270, se disant issue de Salomon et de la reine de Saba.",
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
    title: "Le commerce transsaharien",
    description: "Pendant près de mille ans, des caravanes ont traversé le Sahara, reliant l'Afrique de l'Ouest au monde méditerranéen et faisant la fortune des grands empires du Sahel.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-21-commerce-transsaharien-lesson-1",
        title: "Traverser le désert",
        blocks: [
          {
            type: "paragraphe",
            text: "Le Sahara n'était pas un mur. C'était une route — à condition de savoir la traverser.",
          },
          {
            type: "chiffreCle",
            valeur: "Ier s.",
            legende: "le chameau, introduit dans la région saharienne",
          },
          {
            type: "paragraphe",
            text: "Grâce au **chameau**, introduit dans les premiers siècles de notre ère, de longues caravanes — parfois des milliers de bêtes — traversent le désert d'oasis en oasis. Ces pistes relient les villes du Sahel aux ports et cités d'Afrique du Nord.",
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
            text: "Avant le chameau, traverser le Sahara relevait presque de l'exploit : c'est cet animal, seul, qui a ouvert le désert au grand commerce.",
          },
        ],
      },
      {
        id: "course-histoire-21-commerce-transsaharien-lesson-2",
        title: "L'or contre le sel",
        blocks: [
          {
            type: "paragraphe",
            text: "Deux richesses filaient en sens inverse sur les mêmes pistes : l'or montait, le sel descendait — et parfois s'échangeaient à poids égal.",
          },
          {
            type: "chiffreCle",
            valeur: "1:1",
            legende: "l'or et le sel, parfois échangés à poids égal",
          },
          {
            type: "paragraphe",
            text: "L'or, extrait dans les régions du sud (**Bambouk**, **Bouré**), monte vers le nord ; le sel, tiré des mines sahariennes (**Taghaza**, Taoudenni), descend vers le sud. Circulent aussi cuivre, tissus, chevaux, livres — et, tragiquement, des captifs.",
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
        question: "Quelles étaient les deux marchandises principales de ce commerce ?",
        options: ["L'or et le sel", "Le thé et la soie", "Le café et le cacao", "Le fer et le bois"],
        correctIndex: 0,
        explanation: "L'or venu du sud (Bambouk, Bouré) et le sel venu du Sahara (Taghaza, Taoudenni) étaient au cœur du commerce transsaharien, parfois échangés à poids égal.",
      },
      {
        id: "course-histoire-21-commerce-transsaharien-quiz-3",
        question: "Comment les empires du Sahel s'enrichissaient-ils grâce à ce commerce ?",
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
    title: "L'islamisation de l'Afrique de l'Ouest",
    description: "Porté par le commerce plutôt que par la conquête, l'islam s'est diffusé progressivement en Afrique de l'Ouest, se mêlant aux cultures locales pour donner un islam profondément africain.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-22-islamisation-afrique-ouest-lesson-1",
        title: "Une religion venue par le commerce",
        blocks: [
          {
            type: "paragraphe",
            text: "L'**islam** n'est pas arrivé en Afrique de l'Ouest par la conquête. Il est arrivé par les routes du commerce, sans une seule bataille.",
          },
          {
            type: "chiffreCle",
            valeur: "IXe-XIe s.",
            legende: "diffusion pacifique de l'islam par les marchands",
          },
          {
            type: "paragraphe",
            text: "En Afrique de l'Ouest, l'islam se diffuse pacifiquement et progressivement, grâce aux marchands qui traversent le **Sahara**. Les contacts commerciaux réguliers avec le monde musulman ouvrent la voie à la nouvelle religion, sans violence militaire.",
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
            text: "L'islam est d'abord adopté par les marchands puis par les souverains et leurs cours : la religion facilite le commerce et la diplomatie. Mais une grande partie de la population conserve longtemps ses religions traditionnelles.",
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
            text: "Prier, apprendre, échanger : dans certaines villes, ces trois gestes se confondaient au même endroit, sous le même toit.",
          },
          {
            type: "chiffreCle",
            valeur: "2 villes",
            legende: "Tombouctou et Djenné, foyers de savoir islamique",
          },
          {
            type: "paragraphe",
            text: "Des villes comme **Tombouctou** et **Djenné** deviennent de brillants foyers de savoir islamique, avec leurs mosquées, leurs écoles coraniques et leurs lettrés. Le pèlerinage de Mansa Moussa à La Mecque, en 1324, illustre l'ancrage de l'islam au sommet de l'État malien.",
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
    title: "La côte swahilie et l'océan Indien",
    description: "Le long de la côte est-africaine, des cités marchandes florissantes ont fait le lien entre l'Afrique, l'Arabie, la Perse, l'Inde et la Chine, donnant naissance à la civilisation swahilie.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-23-cote-swahilie-lesson-1",
        title: "Un chapelet de cités",
        blocks: [
          {
            type: "paragraphe",
            text: "À l'est de l'Afrique, face à l'océan Indien, un tout autre monde commercial s'est développé — tourné vers l'Arabie, la Perse et l'Inde.",
          },
          {
            type: "chiffreCle",
            valeur: "VIIIe siècle",
            legende: "essor des cités-États swahilies sur la côte est",
          },
          {
            type: "paragraphe",
            text: "La côte est-africaine (actuels Kenya, Tanzanie, Mozambique) se couvre de cités-États marchandes tournées vers l'océan Indien : **Kilwa**, **Mombasa**, **Zanzibar**, Sofala, Lamu, Mogadiscio. Ces ports prospères vivent du commerce maritime.",
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
            text: "Un voyageur venu de loin y admira, au XIVᵉ siècle, une richesse qu'il ne s'attendait pas à trouver sur cette côte.",
          },
          {
            type: "citation",
            texte: "Kilwa est l'une des plus belles et des mieux bâties villes du monde.",
            auteur: "Ibn Battuta, XIVe siècle",
          },
          {
            type: "paragraphe",
            text: "**Kilwa Kisiwani** est la plus riche de ces cités. On y frappe monnaie et l'on y bâtit le palais de **Husuni Kubwa**. Le site de Kilwa est aujourd'hui classé au patrimoine mondial de l'UNESCO.",
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
    title: "La traite négrière transatlantique",
    description: "Du XVIᵉ au XIXᵉ siècle, des millions d'Africains furent déportés vers les Amériques. C'est l'une des plus grandes tragédies de l'histoire humaine, reconnue comme un crime contre l'humanité.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-24-traite-negriere-transatlantique-lesson-1",
        title: "Un commerce triangulaire",
        blocks: [
          {
            type: "paragraphe",
            text: "Du XVIᵉ au XIXᵉ siècle, les puissances européennes organisent un commerce entre trois continents. Sur l'un de ses trois trajets : des femmes et des hommes réduits en esclavage.",
          },
          {
            type: "chiffreCle",
            valeur: "3 continents",
            legende: "reliés par le commerce triangulaire",
          },
          {
            type: "paragraphe",
            text: "Des marchandises manufacturées partent d'Europe vers l'Afrique. Des Africains, déportés de force, traversent l'Atlantique vers les Amériques — la « **traversée du milieu** ». Les produits des plantations, sucre, coton, tabac, repartent ensuite vers l'Europe.",
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
            text: "Dépeuplement, guerres menées pour capturer des prisonniers, déstabilisation des sociétés et des États, distorsions économiques : les effets touchent tout le continent. Des royaumes côtiers sont eux-mêmes entraînés dans ce système.",
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
            text: "Face à la traite et à l'esclavage, la résistance ne cesse jamais : révoltes, fuites, préservation des cultures.",
          },
          {
            type: "citation",
            texte: "Il repoussera par les racines, car elles sont profondes et nombreuses.",
            auteur: "Toussaint Louverture",
          },
          {
            type: "paragraphe",
            text: "La révolution de Haïti (**1791-1804**) aboutit à la première république noire indépendante, née d'une révolte d'esclaves victorieuse. Sous la pression des mouvements abolitionnistes, la traite puis l'esclavage sont progressivement abolis au XIXᵉ siècle.",
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
            text: "Le marronnage — la fuite vers des zones reculées — a permis à des communautés entières de personnes libres de se maintenir, parfois pendant des générations.",
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
            text: "La diaspora africaine a profondément façonné les Amériques : musique, religion, cultures. Des lieux comme **Gorée**, Ouidah ou Elmina portent aujourd'hui cette mémoire.",
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
    title: "La conférence de Berlin et le partage de l'Afrique",
    description: "En 1884-1885, les puissances européennes se réunirent à Berlin pour se partager l'Afrique — sans un seul Africain à la table. Ses conséquences pèsent encore aujourd'hui.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-25-conference-berlin-lesson-1",
        title: "La « course à l'Afrique »",
        blocks: [
          { type: "paragraphe", text: "À la fin du XIXᵉ siècle, les puissances européennes se lancèrent dans une « course à l'Afrique » (Scramble for Africa) : chacune voulait s'emparer de territoires pour leurs ressources, leurs marchés et le prestige. Cette rivalité menaçait de dégénérer en conflits entre Européens." },
        ],
      },
      {
        id: "course-histoire-25-conference-berlin-lesson-2",
        title: "La conférence de Berlin (1884-1885)",
        blocks: [
          { type: "paragraphe", text: "Pour régler ces rivalités, le chancelier allemand Bismarck convoqua à Berlin, en 1884-1885, une conférence réunissant les puissances européennes. Elles y fixèrent les règles du partage du continent — notamment le principe d'« occupation effective ». Aucun représentant africain n'y fut convié. L'immense bassin du Congo fut même attribué à titre personnel au roi belge Léopold II." },
        ],
      },
      {
        id: "course-histoire-25-conference-berlin-lesson-3",
        title: "Des frontières artificielles",
        blocks: [
          { type: "paragraphe", text: "Les Européens tracèrent des frontières à la règle sur des cartes, ignorant les peuples, royaumes et réalités ethniques ou linguistiques existants. Des communautés furent séparées, des groupes rivaux réunis de force. La plupart des frontières actuelles de l'Afrique datent de ce découpage arbitraire." },
        ],
      },
      {
        id: "course-histoire-25-conference-berlin-lesson-4",
        title: "La conquête",
        blocks: [
          { type: "paragraphe", text: "La conférence fut suivie d'une conquête militaire entre 1885 et 1914. À la veille de la Première Guerre mondiale, presque toute l'Afrique était colonisée ; seuls l'Éthiopie et le Liberia restaient à peu près indépendants. La conquête fut souvent brutale, comme les atrocités de l'« État indépendant du Congo » de Léopold II." },
        ],
      },
      {
        id: "course-histoire-25-conference-berlin-lesson-5",
        title: "Des conséquences durables",
        blocks: [
          { type: "paragraphe", text: "Frontières artificielles, économies d'exploitation, sociétés bouleversées : les effets du partage de Berlin se font encore sentir aujourd'hui (conflits frontaliers, peuples divisés). La conférence de Berlin reste le symbole d'une Afrique dont le sort fut décidé sans les Africains." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-25-conference-berlin-quiz-1",
        question: "Comment appelle-t-on la ruée européenne sur l'Afrique à la fin du XIXᵉ siècle ?",
        options: ["La « course à l'Afrique »", "La « route de la soie »", "La « paix des braves »", "La « ruée vers l'or »"],
        correctIndex: 0,
        explanation: "Cette ruée est appelée la « course à l'Afrique » (Scramble for Africa).",
      },
      {
        id: "course-histoire-25-conference-berlin-quiz-2",
        question: "Qui participait à la conférence de Berlin de 1884-1885 ?",
        options: ["Les puissances européennes, sans aucun Africain", "Uniquement des rois africains", "Les Nations unies", "Des représentants de chaque peuple africain"],
        correctIndex: 0,
        explanation: "Seules les puissances européennes y participaient ; aucun représentant africain ne fut convié.",
      },
      {
        id: "course-histoire-25-conference-berlin-quiz-3",
        question: "Comment les frontières coloniales ont-elles été tracées ?",
        options: ["Selon les peuples et royaumes existants", "À la règle sur des cartes, en ignorant les réalités locales", "Par des votes populaires", "Selon les fleuves uniquement"],
        correctIndex: 1,
        explanation: "Les frontières furent tracées arbitrairement, ignorant peuples, royaumes et réalités ethniques.",
      },
      {
        id: "course-histoire-25-conference-berlin-quiz-4",
        question: "Quels pays africains restaient à peu près indépendants vers 1914 ?",
        options: ["L'Éthiopie et le Liberia", "Le Mali et le Ghana", "L'Égypte et le Maroc", "Aucun"],
        correctIndex: 0,
        explanation: "À la veille de 1914, seuls l'Éthiopie et le Liberia demeuraient à peu près indépendants.",
      },
      {
        id: "course-histoire-25-conference-berlin-quiz-5",
        question: "À qui le bassin du Congo fut-il attribué à titre personnel ?",
        options: ["Au roi Léopold II de Belgique", "À la reine Victoria", "À Bismarck", "Au sultan ottoman"],
        correctIndex: 0,
        explanation: "Le bassin du Congo fut attribué personnellement au roi belge Léopold II.",
      },
    ],
  },
  {
    id: "course-histoire-26-resistances-colonisation",
    categoryId: "histoire",
    emoji: "✊",
    title: "Les grandes résistances à la colonisation",
    description: "Partout, les Africains ont résisté à la conquête coloniale — par les armes, la diplomatie ou la révolte. Des figures d'héroïsme trop souvent oubliées.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-26-resistances-colonisation-lesson-1",
        title: "Une conquête contestée",
        blocks: [
          { type: "paragraphe", text: "La colonisation ne fut pas paisible : partout, les Africains résistèrent, militairement, diplomatiquement et spirituellement. On distingue une résistance « primaire », contre la conquête elle-même, puis des révoltes une fois l'occupation installée. L'idée d'une Afrique passive face à l'Europe est un mythe." },
        ],
      },
      {
        id: "course-histoire-26-resistances-colonisation-lesson-2",
        title: "Samory Touré",
        blocks: [
          { type: "paragraphe", text: "Samory Touré, fondateur de l'empire du Wassoulou en Afrique de l'Ouest, tint tête à l'armée française pendant près de dix-sept ans (années 1880-1898). Il disposait d'une armée bien organisée, pratiquait une guerre de mouvement et fabriquait lui-même des armes. Il ne fut capturé qu'en 1898." },
        ],
      },
      {
        id: "course-histoire-26-resistances-colonisation-lesson-3",
        title: "Béhanzin et les autres rois",
        blocks: [
          { type: "paragraphe", text: "Le roi Béhanzin du Dahomey combattit les Français (1890-1894) ; les Ashanti résistèrent aux Britanniques ; Lat Dior s'opposa à la pénétration française au Sénégal. En Namibie, les peuples Herero et Nama furent écrasés par les Allemands lors d'une répression d'une extrême violence (1904-1908), reconnue comme un génocide." },
        ],
      },
      {
        id: "course-histoire-26-resistances-colonisation-lesson-4",
        title: "Révoltes et résistances populaires",
        blocks: [
          { type: "paragraphe", text: "Après la conquête, les révoltes se poursuivirent. La révolte Maji Maji (Tanganyika, 1905-1907) souleva de nombreux peuples contre les Allemands. Ailleurs, la résistance passa par des prophètes, des mouvements religieux et le refus quotidien de l'ordre colonial." },
        ],
      },
      {
        id: "course-histoire-26-resistances-colonisation-lesson-5",
        title: "Un héritage de dignité",
        blocks: [
          { type: "paragraphe", text: "Militairement, ces résistances furent le plus souvent vaincues, en raison de la supériorité des armes européennes. Mais elles prouvèrent que les Africains n'ont jamais été passifs, et elles nourrirent les futurs mouvements nationalistes et la marche vers l'indépendance. Ces figures sont aujourd'hui célébrées comme des héros." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-26-resistances-colonisation-quiz-1",
        question: "La colonisation de l'Afrique s'est-elle faite sans résistance ?",
        options: ["Oui, sans aucune résistance", "Non, les Africains ont résisté partout", "Seuls quelques villages ont résisté", "La résistance fut uniquement diplomatique"],
        correctIndex: 1,
        explanation: "Les Africains ont résisté partout, par les armes, la diplomatie et la révolte.",
      },
      {
        id: "course-histoire-26-resistances-colonisation-quiz-2",
        question: "Combien de temps Samory Touré a-t-il résisté aux Français ?",
        options: ["Près de dix-sept ans", "Une semaine", "Cinquante ans", "Six mois"],
        correctIndex: 0,
        explanation: "Samory Touré tint tête aux Français pendant près de dix-sept ans, jusqu'à sa capture en 1898.",
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
        question: "Quel a été l'héritage de ces résistances ?",
        options: ["Elles ont nourri les futurs mouvements d'indépendance", "Elles ont été oubliées sans effet", "Elles ont renforcé la colonisation", "Elles n'ont jamais existé"],
        correctIndex: 0,
        explanation: "Bien que souvent vaincues, ces résistances ont nourri le nationalisme et la marche vers l'indépendance.",
      },
    ],
  },
  {
    id: "course-histoire-27-bataille-adoua",
    categoryId: "histoire",
    emoji: "🦅",
    title: "La bataille d'Adoua (1896)",
    description: "En 1896, l'Éthiopie infligea à l'Italie une défaite retentissante — la plus grande victoire d'un État africain contre une puissance coloniale européenne.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-27-bataille-adoua-lesson-1",
        title: "L'Éthiopie menacée",
        blocks: [
          { type: "paragraphe", text: "À la fin du XIXᵉ siècle, l'Italie cherchait à coloniser l'Éthiopie. Le conflit naquit d'un désaccord sur le traité de Wuchale (1889) : la version italienne prétendait établir un protectorat sur l'Éthiopie, ce que celle-ci refusa catégoriquement." },
        ],
      },
      {
        id: "course-histoire-27-bataille-adoua-lesson-2",
        title: "Ménélik II",
        blocks: [
          { type: "paragraphe", text: "L'empereur Ménélik II sut unir les forces éthiopiennes et moderniser son armée : il acheta des armes modernes et rallia les seigneurs régionaux. L'impératrice Taytu joua également un rôle de premier plan dans la résistance à l'Italie." },
        ],
      },
      {
        id: "course-histoire-27-bataille-adoua-lesson-3",
        title: "La bataille (1er mars 1896)",
        blocks: [
          { type: "paragraphe", text: "Le 1er mars 1896, à Adoua, l'armée éthiopienne — environ 100 000 hommes — écrasa les forces italiennes venues l'envahir. Ce fut une victoire éclatante et décisive, l'une des plus célèbres de l'histoire militaire africaine." },
        ],
      },
      {
        id: "course-histoire-27-bataille-adoua-lesson-4",
        title: "Une victoire au retentissement mondial",
        blocks: [
          { type: "paragraphe", text: "Adoua contraignit l'Italie à reconnaître la pleine indépendance de l'Éthiopie (traité d'Addis-Abeba). Ce fut la première grande défaite d'une puissance coloniale européenne face à un État africain. La nouvelle résonna dans le monde entier et inspira les panafricanistes et les peuples noirs du monde." },
        ],
      },
      {
        id: "course-histoire-27-bataille-adoua-lesson-5",
        title: "Héritage",
        blocks: [
          { type: "paragraphe", text: "Grâce à Adoua, l'Éthiopie resta indépendante (hormis une brève occupation italienne de 1936 à 1941). La bataille devint un symbole de fierté, de dignité et de résistance anticoloniale, célébré à travers tout le continent et la diaspora. Elle prouva qu'une victoire africaine sur le colonialisme était possible." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-27-bataille-adoua-quiz-1",
        question: "Quelle puissance européenne cherchait à coloniser l'Éthiopie ?",
        options: ["L'Italie", "La France", "La Grande-Bretagne", "Le Portugal"],
        correctIndex: 0,
        explanation: "C'est l'Italie qui chercha à coloniser l'Éthiopie à la fin du XIXᵉ siècle.",
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
        explanation: "L'empereur Ménélik II unit les forces éthiopiennes et remporta la bataille d'Adoua.",
      },
      {
        id: "course-histoire-27-bataille-adoua-quiz-4",
        question: "En quelle année eut lieu la bataille d'Adoua ?",
        options: ["En 1896", "En 1591", "En 1960", "En 1235"],
        correctIndex: 0,
        explanation: "La bataille d'Adoua eut lieu le 1er mars 1896.",
      },
      {
        id: "course-histoire-27-bataille-adoua-quiz-5",
        question: "Pourquoi la bataille d'Adoua est-elle si importante ?",
        options: ["C'est la première grande défaite d'une puissance coloniale face à un État africain", "C'est la première bataille de l'histoire", "Elle a marqué le début de la colonisation", "Elle n'a eu aucune conséquence"],
        correctIndex: 0,
        explanation: "Adoua fut la première grande victoire d'un État africain sur une puissance coloniale européenne, un symbole mondial.",
      },
    ],
  },
  {
    id: "course-histoire-28-independances-africaines",
    categoryId: "histoire",
    emoji: "🎉",
    title: "Les indépendances africaines",
    description: "Au milieu du XXᵉ siècle, les peuples africains reconquièrent leur souveraineté. L'année 1960 restera « l'année de l'Afrique ».",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-28-independances-africaines-lesson-1",
        title: "La montée du nationalisme",
        blocks: [
          { type: "paragraphe", text: "Après la Seconde Guerre mondiale, le nationalisme africain s'affirma. Élites instruites, anciens combattants et mouvements urbains réclamèrent d'abord des droits, puis l'indépendance. Ils s'inspiraient du panafricanisme, du mouvement mondial de décolonisation et des principes de l'ONU. L'ordre colonial était désormais contesté de toutes parts." },
        ],
      },
      {
        id: "course-histoire-28-independances-africaines-lesson-2",
        title: "Le Ghana, pionnier (1957)",
        blocks: [
          { type: "paragraphe", text: "En 1957, le Ghana, conduit par Kwame Nkrumah, devint la première colonie d'Afrique subsaharienne à accéder à l'indépendance. Ce fut une étincelle pour tout le continent. Au nord, plusieurs pays (Égypte, Libye, Soudan, Maroc, Tunisie) étaient déjà devenus indépendants dans les années 1950." },
        ],
      },
      {
        id: "course-histoire-28-independances-africaines-lesson-3",
        title: "1960, « l'année de l'Afrique »",
        blocks: [
          { type: "paragraphe", text: "L'année 1960 fut décisive : dix-sept pays africains accédèrent à l'indépendance la même année, dont de nombreuses anciennes colonies françaises, le Nigeria et le Congo. On l'a surnommée « l'année de l'Afrique »." },
        ],
      },
      {
        id: "course-histoire-28-independances-africaines-lesson-4",
        title: "Des voies diverses",
        blocks: [
          { type: "paragraphe", text: "Les indépendances suivirent des chemins variés. Certaines furent négociées pacifiquement, d'autres arrachées par la lutte armée : la guerre d'Algérie (1954-1962), plus tard les colonies portugaises (Angola, Mozambique, Guinée-Bissau) dans les années 1970, le Zimbabwe (1980), la Namibie (1990), et enfin la fin de l'apartheid en Afrique du Sud (1994)." },
        ],
      },
      {
        id: "course-histoire-28-independances-africaines-lesson-5",
        title: "Espoirs et défis",
        blocks: [
          { type: "paragraphe", text: "L'indépendance apporta un immense espoir, mais aussi des défis : frontières héritées de la colonisation, économies fragiles, ingérences de la guerre froide, coups d'État. Le rêve d'une unité africaine (voir le cours suivant) restait à construire. Ces indépendances n'en demeurent pas moins un tournant majeur et une source de fierté." },
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
        explanation: "En 1960, dix-sept pays africains accédèrent à l'indépendance : « l'année de l'Afrique ».",
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
    title: "Le panafricanisme et l'Union africaine",
    description: "L'idée que les Africains partagent un destin commun a donné naissance à de puissants mouvements et à des institutions d'unité continentale, de l'OUA à l'Union africaine.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-29-panafricanisme-union-africaine-lesson-1",
        title: "L'idée panafricaine",
        blocks: [
          { type: "paragraphe", text: "Le panafricanisme est l'idée de solidarité et d'unité entre les peuples africains et leur diaspora. Ses racines se trouvent d'abord dans la diaspora, avec des figures comme W. E. B. Du Bois ou Marcus Garvey, et les premiers Congrès panafricains au début du XXᵉ siècle." },
        ],
      },
      {
        id: "course-histoire-29-panafricanisme-union-africaine-lesson-2",
        title: "Les pères de l'unité",
        blocks: [
          { type: "paragraphe", text: "Après les indépendances, des dirigeants portèrent ce rêve. Kwame Nkrumah (Ghana) prônait des « États-Unis d'Afrique ». D'autres — Nyerere, Senghor, Haïlé Sélassié, Nasser — avaient des visions différentes, entre une fédération immédiate et une intégration plus progressive." },
        ],
      },
      {
        id: "course-histoire-29-panafricanisme-union-africaine-lesson-3",
        title: "L'OUA (1963)",
        blocks: [
          { type: "paragraphe", text: "En 1963, l'Organisation de l'unité africaine (OUA) fut fondée à Addis-Abeba par une trentaine d'États. Elle visait à promouvoir l'unité, à défendre la souveraineté et à achever la décolonisation, en soutenant les mouvements de libération (contre les dernières colonies et l'apartheid)." },
        ],
      },
      {
        id: "course-histoire-29-panafricanisme-union-africaine-lesson-4",
        title: "De l'OUA à l'Union africaine (2002)",
        blocks: [
          { type: "paragraphe", text: "En 2002, l'OUA laissa place à l'Union africaine (UA), en partie inspirée du modèle de l'Union européenne : une Commission, un Parlement, des objectifs d'intégration, de paix et de développement. Son siège reste à Addis-Abeba." },
        ],
      },
      {
        id: "course-histoire-29-panafricanisme-union-africaine-lesson-5",
        title: "Aujourd'hui",
        blocks: [
          { type: "paragraphe", text: "L'Union africaine (55 États membres) œuvre pour la paix et la sécurité, l'intégration économique — avec la Zone de libre-échange continentale africaine (ZLECAf) — et une vision de long terme, l'Agenda 2063. Le panafricanisme demeure un idéal directeur pour l'avenir du continent." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-29-panafricanisme-union-africaine-quiz-1",
        question: "Qu'est-ce que le panafricanisme ?",
        options: ["L'idée d'unité et de solidarité entre les peuples africains et la diaspora", "Une religion", "Une langue africaine", "Un fleuve"],
        correctIndex: 0,
        explanation: "Le panafricanisme prône l'unité et la solidarité des peuples africains et de leur diaspora.",
      },
      {
        id: "course-histoire-29-panafricanisme-union-africaine-quiz-2",
        question: "Quel dirigeant prônait les « États-Unis d'Afrique » ?",
        options: ["Kwame Nkrumah", "Nelson Mandela", "Ménélik II", "Léopold II"],
        correctIndex: 0,
        explanation: "Kwame Nkrumah, du Ghana, défendait l'idée d'« États-Unis d'Afrique ».",
      },
      {
        id: "course-histoire-29-panafricanisme-union-africaine-quiz-3",
        question: "En quelle année l'OUA a-t-elle été fondée ?",
        options: ["En 1963", "En 1884", "En 2002", "En 1896"],
        correctIndex: 0,
        explanation: "L'Organisation de l'unité africaine fut fondée en 1963 à Addis-Abeba.",
      },
      {
        id: "course-histoire-29-panafricanisme-union-africaine-quiz-4",
        question: "Par quelle organisation l'OUA a-t-elle été remplacée en 2002 ?",
        options: ["L'Union africaine", "L'ONU", "L'Union européenne", "La CEDEAO"],
        correctIndex: 0,
        explanation: "En 2002, l'OUA laissa place à l'Union africaine (UA).",
      },
      {
        id: "course-histoire-29-panafricanisme-union-africaine-quiz-5",
        question: "Comment s'appelle la vision de long terme de l'Union africaine ?",
        options: ["L'Agenda 2063", "Le Plan Marshall", "Le rêve américain", "L'Agenda 21"],
        correctIndex: 0,
        explanation: "L'Agenda 2063 est la vision de développement à long terme de l'Union africaine.",
      },
    ],
  },
  {
    id: "course-histoire-30-apartheid-mandela",
    categoryId: "histoire",
    emoji: "🕊️",
    title: "L'apartheid et Nelson Mandela",
    description: "En Afrique du Sud, un régime de ségrégation raciale a opprimé la majorité noire — jusqu'à la victoire d'une longue lutte pour la liberté, incarnée par Nelson Mandela.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-30-apartheid-mandela-lesson-1",
        title: "Qu'est-ce que l'apartheid ?",
        blocks: [
          { type: "paragraphe", text: "L'apartheid (« séparation » en afrikaans) était un système de ségrégation raciale institutionnalisée, imposé en Afrique du Sud à partir de 1948 par le pouvoir de la minorité blanche. Des lois classaient les habitants selon leur « race », séparaient de force les populations et privaient la majorité noire de droits, de terres et de liberté de circulation (les fameux pass)." },
        ],
      },
      {
        id: "course-histoire-30-apartheid-mandela-lesson-2",
        title: "La résistance",
        blocks: [
          { type: "paragraphe", text: "Le Congrès national africain (ANC) et d'autres organisations menèrent la résistance. Les protestations furent souvent réprimées dans le sang : le massacre de Sharpeville (1960), le soulèvement de Soweto (1976). Face à l'échec de la lutte pacifique, Nelson Mandela, dirigeant de l'ANC, se tourna vers la lutte armée." },
        ],
      },
      {
        id: "course-histoire-30-apartheid-mandela-lesson-3",
        title: "Mandela emprisonné",
        blocks: [
          { type: "paragraphe", text: "Arrêté, Mandela fut condamné à la prison à vie et passa vingt-sept ans en détention, en grande partie sur l'île de Robben Island. Il devint le symbole mondial de la lutte contre l'apartheid. À l'étranger, sanctions et boycotts firent pression sur le régime sud-africain." },
        ],
      },
      {
        id: "course-histoire-30-apartheid-mandela-lesson-4",
        title: "La fin de l'apartheid",
        blocks: [
          { type: "paragraphe", text: "Sous la double pression de la résistance intérieure et de la communauté internationale, le président F. W. de Klerk libéra Mandela en 1990. Des négociations s'ouvrirent, les lois de l'apartheid furent abolies, et en 1994 eurent lieu les premières élections démocratiques multiraciales." },
        ],
      },
      {
        id: "course-histoire-30-apartheid-mandela-lesson-5",
        title: "Mandela président et héritage",
        blocks: [
          { type: "paragraphe", text: "En 1994, Nelson Mandela devint le premier président noir d'Afrique du Sud, démocratiquement élu. Il choisit la voie de la réconciliation plutôt que de la vengeance, notamment avec la Commission « Vérité et Réconciliation ». Prix Nobel de la paix, il reste dans le monde entier un symbole de dignité, de pardon et de triomphe sur le racisme." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-30-apartheid-mandela-quiz-1",
        question: "Qu'était l'apartheid ?",
        options: ["Un système de ségrégation raciale en Afrique du Sud", "Une monnaie africaine", "Un royaume médiéval", "Une fête traditionnelle"],
        correctIndex: 0,
        explanation: "L'apartheid était un système de ségrégation raciale institutionnalisée, imposé dès 1948.",
      },
      {
        id: "course-histoire-30-apartheid-mandela-quiz-2",
        question: "Quelle organisation a mené la lutte contre l'apartheid ?",
        options: ["Le Congrès national africain (ANC)", "L'OTAN", "La Ligue arabe", "L'OUA uniquement"],
        correctIndex: 0,
        explanation: "Le Congrès national africain (ANC) fut au cœur de la résistance à l'apartheid.",
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
        explanation: "Les premières élections démocratiques multiraciales se tinrent en 1994.",
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
    title: "Le Tekrour, berceau de l'islam au Sénégal",
    description: "Sur les rives du fleuve Sénégal, le royaume du Tekrour fut l'un des tout premiers États d'Afrique de l'Ouest à embrasser l'islam, bien avant l'empire du Mali.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-31-tekrour-islam-lesson-1",
        title: "Un royaume sur le fleuve Sénégal",
        blocks: [
          { type: "paragraphe", text: "Le Tekrour (ou Takrour) se développa le long de la vallée du fleuve Sénégal, dans la région du Fouta Toro. C'est l'un des plus anciens royaumes d'Afrique de l'Ouest, contemporain et rival de l'empire du Ghana (IXᵉ-XIᵉ siècle). Ses habitants sont les ancêtres des Halpulaar (Toucouleurs), un nom qui dériverait justement de « Tekrour »." },
        ],
      },
      {
        id: "course-histoire-31-tekrour-islam-lesson-2",
        title: "L'adoption précoce de l'islam",
        blocks: [
          { type: "paragraphe", text: "Vers 1040, le roi War Jabi se convertit à l'islam. Le Tekrour devint ainsi l'un des tout premiers États d'Afrique de l'Ouest à adopter la religion musulmane — bien avant le Mali de Soundiata. Ses habitants furent réputés pour leur ferveur : dans le monde musulman, on appelait longtemps « Tekrour » les pèlerins venus d'Afrique de l'Ouest." },
        ],
      },
      {
        id: "course-histoire-31-tekrour-islam-lesson-3",
        title: "Commerce et puissance",
        blocks: [
          { type: "paragraphe", text: "Le royaume contrôlait le commerce sur le fleuve : or venu du Bambouk, sel, céréales. Sa position stratégique, entre le Sahara et l'Atlantique, en faisait un carrefour. Le Tekrour noua par moments des alliances avec les Almoravides, le mouvement religieux venu du Sahara." },
        ],
      },
      {
        id: "course-histoire-31-tekrour-islam-lesson-4",
        title: "Le Fouta Toro",
        blocks: [
          { type: "paragraphe", text: "La région devint plus tard le Fouta Toro, grand foyer de savoir islamique. Au XVIIIᵉ siècle, une révolution menée par Souleymane Baal et les lettrés torodbe y fonda un État théocratique, l'Almamat, dirigé par un chef religieux, l'Almamy. Le Fouta resta un cœur battant de l'islam sénégalais." },
        ],
      },
      {
        id: "course-histoire-31-tekrour-islam-lesson-5",
        title: "Héritage",
        blocks: [
          { type: "paragraphe", text: "Le Tekrour puis le Fouta Toro sont considérés comme le berceau de l'islam au Sénégal. Cette terre a donné de grandes figures religieuses, dont plus tard El Hadj Oumar Tall. L'histoire du Tekrour est aussi celle de la formation de l'identité halpulaar, l'une des grandes composantes du Sénégal actuel." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-31-tekrour-islam-quiz-1",
        question: "Le long de quel fleuve s'est développé le Tekrour ?",
        options: ["Le fleuve Sénégal", "Le Nil", "Le fleuve Congo", "Le Zambèze"],
        correctIndex: 0,
        explanation: "Le Tekrour s'est développé dans la vallée du fleuve Sénégal, dans la région du Fouta Toro.",
      },
      {
        id: "course-histoire-31-tekrour-islam-quiz-2",
        question: "Qu'est-ce qui rend le Tekrour remarquable dans l'histoire de l'islam ?",
        options: ["Il a rejeté l'islam", "Il fut l'un des premiers États ouest-africains à l'adopter", "Il a inventé l'islam", "Il n'a jamais connu l'islam"],
        correctIndex: 1,
        explanation: "Vers 1040, le roi War Jabi se convertit, faisant du Tekrour l'un des premiers États musulmans d'Afrique de l'Ouest.",
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
        explanation: "La région devint le Fouta Toro, grand foyer de savoir islamique.",
      },
      {
        id: "course-histoire-31-tekrour-islam-quiz-5",
        question: "Quel titre portait le chef de l'État théocratique du Fouta au XVIIIᵉ siècle ?",
        options: ["L'Almamy", "Le Damel", "Le Bourba", "Le Négus"],
        correctIndex: 0,
        explanation: "L'État théocratique du Fouta (l'Almamat) était dirigé par un chef religieux, l'Almamy.",
      },
    ],
  },
  {
    id: "course-histoire-32-djolof-royaumes-wolof",
    categoryId: "histoire",
    emoji: "👑",
    title: "L'empire du Djolof et les royaumes wolof",
    description: "Du XIVᵉ au XVIᵉ siècle, l'empire du Djolof rassembla les royaumes wolof et sérères du Sénégal, avant de se fragmenter en États rivaux qui structurèrent le pays jusqu'à la colonisation.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-32-djolof-royaumes-wolof-lesson-1",
        title: "La naissance du Djolof",
        blocks: [
          { type: "paragraphe", text: "L'empire du Djolof (Jolof) fut fondé vers le XIVᵉ siècle. La tradition l'attribue au légendaire Ndiadiane Ndiaye, qui aurait uni les peuples wolof de la Sénégambie en une confédération. Le souverain portait le titre de Bourba Djolof." },
        ],
      },
      {
        id: "course-histoire-32-djolof-royaumes-wolof-lesson-2",
        title: "Une confédération de royaumes",
        blocks: [
          { type: "paragraphe", text: "Le Djolof regroupait plusieurs royaumes qui lui payaient tribut : le Waalo, le Cayor (Kajoor), le Baol (Bawol), ainsi que les royaumes sérères du Sine et du Saloum. Chacun avait son propre souverain : le Brak du Waalo, le Damel du Cayor, le Teigne du Baol." },
        ],
      },
      {
        id: "course-histoire-32-djolof-royaumes-wolof-lesson-3",
        title: "L'organisation sociale",
        blocks: [
          { type: "paragraphe", text: "La société wolof était très structurée : nobles, hommes libres, castes d'artisans et de griots, et classes serviles. Les rois s'appuyaient sur des guerriers de la couronne, les ceddo. Les griots jouaient un rôle essentiel de mémoire, de conseil et de louange auprès des puissants." },
        ],
      },
      {
        id: "course-histoire-32-djolof-royaumes-wolof-lesson-4",
        title: "La fragmentation (1549)",
        blocks: [
          { type: "paragraphe", text: "En 1549, le Cayor, sous Amari Ngoné Sobel Fall, remporta son indépendance à la bataille de Danki. L'empire se fragmenta alors en royaumes côtiers rivaux. Le déplacement du commerce vers l'Atlantique renforça les royaumes de la côte au détriment du Djolof, à l'intérieur des terres." },
        ],
      },
      {
        id: "course-histoire-32-djolof-royaumes-wolof-lesson-5",
        title: "Héritage",
        blocks: [
          { type: "paragraphe", text: "Les royaumes wolof — Cayor, Baol, Waalo, Djolof — structurèrent le Sénégal jusqu'à la colonisation, et virent naître des figures comme Lat Dior. La langue wolof et la culture qui en sont issues sont aujourd'hui au cœur de l'identité sénégalaise." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-32-djolof-royaumes-wolof-quiz-1",
        question: "À qui la tradition attribue-t-elle la fondation de l'empire du Djolof ?",
        options: ["Ndiadiane Ndiaye", "Soundiata Keïta", "Chaka Zoulou", "Mansa Moussa"],
        correctIndex: 0,
        explanation: "La tradition attribue la fondation du Djolof au légendaire Ndiadiane Ndiaye.",
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
        explanation: "En 1549, le Cayor remporta son indépendance à la bataille de Danki, provoquant la fragmentation de l'empire.",
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
    title: "Les royaumes sérères du Sine et du Saloum",
    description: "Au cœur du Sénégal, les royaumes sérères du Sine et du Saloum ont préservé une culture originale, une religion ancestrale et de mystérieux monuments de pierre.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-33-royaumes-serer-sine-saloum-lesson-1",
        title: "Les Sérères, un peuple ancien",
        blocks: [
          { type: "paragraphe", text: "Les Sérères comptent parmi les plus anciens peuples du Sénégal, installés dans les régions du Sine et du Saloum. Ils ont longtemps résisté à l'islamisation, conservant leur religion traditionnelle (avec un dieu suprême, Roog) et leurs coutumes. Une dynastie maternelle, les Guélowar, y régna." },
        ],
      },
      {
        id: "course-histoire-33-royaumes-serer-sine-saloum-lesson-2",
        title: "Les royaumes du Sine et du Saloum",
        blocks: [
          { type: "paragraphe", text: "Deux royaumes structuraient ce territoire, dirigés par le Maad a Sinig (roi du Sine) et le Maad Saloum (roi du Saloum). C'étaient des sociétés agraires stables, qui subsistèrent jusqu'à la colonisation. Le roi Kumba Ndoffène fut l'une de leurs grandes figures." },
        ],
      },
      {
        id: "course-histoire-33-royaumes-serer-sine-saloum-lesson-3",
        title: "Les cercles mégalithiques",
        blocks: [
          { type: "paragraphe", text: "La région abrite les cercles mégalithiques de Sénégambie (Sine Ngayène, Wanar) : des milliers de pierres dressées et de tumulus, monuments funéraires parmi les plus grandes concentrations de mégalithes au monde. Ils sont classés au patrimoine mondial de l'UNESCO et témoignent d'une organisation sociale ancienne et élaborée." },
        ],
      },
      {
        id: "course-histoire-33-royaumes-serer-sine-saloum-lesson-4",
        title: "Une culture préservée",
        blocks: [
          { type: "paragraphe", text: "Les Sérères sont réputés pour la lutte traditionnelle, leurs rituels agraires, leurs traditions orales et un fort sentiment d'identité. En résistant plus longtemps que leurs voisins à l'islamisation, ils ont maintenu vivantes des pratiques très anciennes." },
        ],
      },
      {
        id: "course-histoire-33-royaumes-serer-sine-saloum-lesson-5",
        title: "Héritage",
        blocks: [
          { type: "paragraphe", text: "Le peuple sérère a donné au Sénégal moderne de grandes figures — le président Léopold Sédar Senghor était sérère. Leurs mégalithes, leur langue et leurs traditions constituent une part précieuse et fière du patrimoine sénégalais." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-33-royaumes-serer-sine-saloum-quiz-1",
        question: "Dans quelles régions du Sénégal vivaient les Sérères ?",
        options: ["Le Sine et le Saloum", "Le Fouta Toro", "La Casamance uniquement", "Le Sahara"],
        correctIndex: 0,
        explanation: "Les royaumes sérères étaient ceux du Sine et du Saloum.",
      },
      {
        id: "course-histoire-33-royaumes-serer-sine-saloum-quiz-2",
        question: "Comment appelait-on le roi du Sine ?",
        options: ["Le Maad a Sinig", "Le Damel", "Le Bourba", "L'Almamy"],
        correctIndex: 0,
        explanation: "Le roi du Sine portait le titre de Maad a Sinig.",
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
        explanation: "Les Sérères ont longtemps résisté à l'islamisation, conservant leur religion traditionnelle.",
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
    title: "Gorée et Saint-Louis : comptoirs et mémoire de la traite",
    description: "Deux sites du Sénégal, Gorée et Saint-Louis, furent des comptoirs européens majeurs — et sont aujourd'hui des lieux de mémoire classés au patrimoine mondial de l'UNESCO.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-34-goree-saint-louis-lesson-1",
        title: "Des comptoirs sur l'Atlantique",
        blocks: [
          { type: "paragraphe", text: "Du XVᵉ au XVIIᵉ siècle, les Européens (Portugais, Néerlandais, Français, Britanniques) établirent des comptoirs sur la côte sénégalaise. L'île de Gorée, au large de Dakar, et Saint-Louis, fondée en 1659 à l'embouchure du fleuve Sénégal, en devinrent les points les plus importants." },
        ],
      },
      {
        id: "course-histoire-34-goree-saint-louis-lesson-2",
        title: "Gorée, lieu de mémoire de la traite",
        blocks: [
          { type: "paragraphe", text: "Gorée est devenue le symbole de la traite négrière atlantique, avec sa Maison des Esclaves et sa « porte du voyage sans retour ». Les historiens débattent du nombre exact de captifs ayant transité par l'île elle-même, mais Gorée s'impose comme un puissant lieu de mémoire, classé au patrimoine mondial de l'UNESCO, pour l'ensemble de cette tragédie." },
        ],
      },
      {
        id: "course-histoire-34-goree-saint-louis-lesson-3",
        title: "Saint-Louis, capitale coloniale",
        blocks: [
          { type: "paragraphe", text: "Saint-Louis fut le premier établissement français d'Afrique de l'Ouest. Elle devint la capitale du Sénégal, puis celle de l'Afrique-Occidentale française (AOF). Son architecture coloniale, entre le fleuve et la mer, est aujourd'hui classée au patrimoine mondial de l'UNESCO." },
        ],
      },
      {
        id: "course-histoire-34-goree-saint-louis-lesson-4",
        title: "Les signares",
        blocks: [
          { type: "paragraphe", text: "Gorée et Saint-Louis virent naître les signares : des femmes commerçantes métisses, euro-africaines, qui détenaient un réel pouvoir économique et animaient une société créole originale, avec ses codes, sa mode et son influence." },
        ],
      },
      {
        id: "course-histoire-34-goree-saint-louis-lesson-5",
        title: "Héritage et mémoire",
        blocks: [
          { type: "paragraphe", text: "Ces deux îles incarnent l'entrée du Sénégal dans le monde atlantique et la mémoire de l'esclavage. Gorée accueille aujourd'hui des commémorations et la visite de dirigeants du monde entier. Elles rappellent un devoir de mémoire essentiel, au cœur de l'histoire sénégalaise." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-34-goree-saint-louis-quiz-1",
        question: "Où se situent Gorée et Saint-Louis ?",
        options: ["Au Sénégal", "En Égypte", "en Afrique du Sud", "au Kenya"],
        correctIndex: 0,
        explanation: "Gorée (au large de Dakar) et Saint-Louis (embouchure du fleuve Sénégal) sont au Sénégal.",
      },
      {
        id: "course-histoire-34-goree-saint-louis-quiz-2",
        question: "De quoi l'île de Gorée est-elle devenue le symbole ?",
        options: ["De la mémoire de la traite négrière", "Du commerce de l'or", "De la conquête romaine", "De l'islamisation"],
        correctIndex: 0,
        explanation: "Gorée, avec sa Maison des Esclaves, est un lieu de mémoire majeur de la traite atlantique, classé par l'UNESCO.",
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
        explanation: "Les signares étaient des femmes commerçantes euro-africaines de Gorée et Saint-Louis, dotées d'un vrai pouvoir économique.",
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
    title: "Lat Dior et la résistance du Cayor",
    description: "Damel du Cayor, Lat Dior incarna la résistance sénégalaise à la colonisation française, s'opposant notamment à la construction du chemin de fer.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-35-lat-dior-cayor-lesson-1",
        title: "Le Damel du Cayor",
        blocks: [
          { type: "paragraphe", text: "Lat Dior Ngoné Latyr Diop fut le Damel (roi) du Cayor, l'un des plus puissants royaumes wolof, à la fin du XIXᵉ siècle. Roi-guerrier, il régna à une époque où la France cherchait à étendre son emprise sur le Sénégal." },
        ],
      },
      {
        id: "course-histoire-35-lat-dior-cayor-lesson-2",
        title: "La conversion et la lutte",
        blocks: [
          { type: "paragraphe", text: "Lat Dior se convertit à l'islam et s'allia par moments aux mouvements religieux de son temps. Face à la pénétration française, il alterna la guerre et la négociation, cherchant sans cesse à préserver l'indépendance de son royaume." },
        ],
      },
      {
        id: "course-histoire-35-lat-dior-cayor-lesson-3",
        title: "Le refus du chemin de fer",
        blocks: [
          { type: "paragraphe", text: "Les Français voulaient construire la voie ferrée Dakar–Saint-Louis à travers le Cayor. Lat Dior s'y opposa fermement, comprenant que ce chemin de fer signerait la fin de l'indépendance de son royaume. Son refus est devenu un symbole de la résistance à la domination coloniale." },
        ],
      },
      {
        id: "course-histoire-35-lat-dior-cayor-lesson-4",
        title: "La bataille de Dékheulé (1886)",
        blocks: [
          { type: "paragraphe", text: "Lat Dior tomba les armes à la main lors de la bataille de Dékheulé, en 1886, en combattant les Français, aux côtés de son fidèle cheval Malaw. Sa mort marqua la fin de l'indépendance du Cayor." },
        ],
      },
      {
        id: "course-histoire-35-lat-dior-cayor-lesson-5",
        title: "Héritage",
        blocks: [
          { type: "paragraphe", text: "Lat Dior est aujourd'hui un héros national du Sénégal, symbole de dignité et de résistance. Son cheval Malaw et son épée sont célébrés, et de nombreux lieux portent son nom. Il incarne le refus de se soumettre à la conquête coloniale." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-35-lat-dior-cayor-quiz-1",
        question: "De quel royaume Lat Dior était-il le Damel ?",
        options: ["Le Cayor", "Le Sine", "Le Fouta Toro", "Le Mali"],
        correctIndex: 0,
        explanation: "Lat Dior était le Damel (roi) du Cayor, puissant royaume wolof.",
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
        explanation: "Lat Dior tomba à la bataille de Dékheulé en 1886, en combattant les Français.",
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
    title: "Cheikh Ahmadou Bamba et le mouridisme",
    description: "Guide spirituel et fondateur du mouridisme, Cheikh Ahmadou Bamba mena une résistance pacifique à la colonisation et fonda la ville sainte de Touba.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-36-cheikh-ahmadou-bamba-mouridisme-lesson-1",
        title: "Un guide spirituel",
        blocks: [
          { type: "paragraphe", text: "Cheikh Ahmadou Bamba Mbacké (1853-1927) était un maître soufi sénégalais, fondateur de la confrérie mouride (la Mouridiyya). Dans un Sénégal bouleversé par la conquête coloniale, il proposa une voie spirituelle nouvelle, qui rencontra un immense écho." },
        ],
      },
      {
        id: "course-histoire-36-cheikh-ahmadou-bamba-mouridisme-lesson-2",
        title: "Une résistance pacifique",
        blocks: [
          { type: "paragraphe", text: "Bamba prêcha la foi, la paix et surtout le travail et l'éducation comme chemins de dignité. Sa résistance à l'ordre colonial fut non-violente : il ne prit jamais les armes, mais son influence grandissante et son indépendance d'esprit inquiétèrent l'administration française." },
        ],
      },
      {
        id: "course-histoire-36-cheikh-ahmadou-bamba-mouridisme-lesson-3",
        title: "L'exil",
        blocks: [
          { type: "paragraphe", text: "Craignant son pouvoir sur les foules, les Français exilèrent Cheikh Ahmadou Bamba : d'abord au Gabon (1895-1902), puis en Mauritanie. Cet exil est au cœur de la tradition mouride, riche de récits de foi et de miracles, comme la célèbre prière accomplie sur la mer." },
        ],
      },
      {
        id: "course-histoire-36-cheikh-ahmadou-bamba-mouridisme-lesson-4",
        title: "Touba et le mouridisme",
        blocks: [
          { type: "paragraphe", text: "Bamba fonda la ville sainte de Touba, dont la Grande Mosquée est devenue l'une des plus grandes d'Afrique. La confrérie mouride se développa en une puissante force sociale et économique, fondée sur le travail (notamment la culture de l'arachide), la solidarité et la discipline." },
        ],
      },
      {
        id: "course-histoire-36-cheikh-ahmadou-bamba-mouridisme-lesson-5",
        title: "Le Grand Magal et l'héritage",
        blocks: [
          { type: "paragraphe", text: "Chaque année, le Grand Magal de Touba commémore le départ en exil du cheikh et rassemble des millions de pèlerins. Cheikh Ahmadou Bamba demeure une figure centrale de l'islam et de l'identité sénégalaise, symbole d'une résistance par la foi et le travail." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-histoire-36-cheikh-ahmadou-bamba-mouridisme-quiz-1",
        question: "Quelle confrérie Cheikh Ahmadou Bamba a-t-il fondée ?",
        options: ["Le mouridisme (la Mouridiyya)", "Le bouddhisme", "La franc-maçonnerie", "Le protestantisme"],
        correctIndex: 0,
        explanation: "Cheikh Ahmadou Bamba est le fondateur de la confrérie mouride (Mouridiyya).",
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
        explanation: "Il fut exilé au Gabon (1895-1902), puis en Mauritanie.",
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
    title: "Aline Sitoé Diatta, héroïne de la Casamance",
    description: "Jeune femme diola de Casamance, Aline Sitoé Diatta se dressa contre l'ordre colonial français — au point d'être surnommée « la Jeanne d'Arc de la Casamance ».",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-37-aline-sitoe-diatta-lesson-1",
        title: "Une jeune femme de Casamance",
        blocks: [
          { type: "paragraphe", text: "Aline Sitoé Diatta (vers 1920-1944) était une jeune femme diola, née à Kabrousse, en Casamance, dans le sud du Sénégal. Elle travailla un temps comme domestique à Dakar avant de revenir dans sa région natale, où elle affirma une vocation de guide." },
        ],
      },
      {
        id: "course-histoire-37-aline-sitoe-diatta-lesson-2",
        title: "Un appel à la résistance",
        blocks: [
          { type: "paragraphe", text: "Pendant la Seconde Guerre mondiale, elle s'éleva contre les réquisitions coloniales (de riz, de bétail) et le travail forcé imposés par l'administration française. Elle appela au retour aux traditions diola et à la résistance à l'autorité coloniale, et fut perçue comme une prophétesse." },
        ],
      },
      {
        id: "course-histoire-37-aline-sitoe-diatta-lesson-3",
        title: "La révolte",
        blocks: [
          { type: "paragraphe", text: "Son message se répandit dans la région. Elle exhorta les populations à refuser de livrer leur riz à l'effort de guerre français. Ce mouvement menaça directement le contrôle colonial sur la Casamance." },
        ],
      },
      {
        id: "course-histoire-37-aline-sitoe-diatta-lesson-4",
        title: "Arrestation et mort",
        blocks: [
          { type: "paragraphe", text: "Arrêtée par les Français en 1943, Aline Sitoé Diatta fut déportée loin de chez elle, à Tombouctou (Mali), où elle mourut en 1944, âgée d'environ vingt-quatre ans." },
        ],
      },
      {
        id: "course-histoire-37-aline-sitoe-diatta-lesson-5",
        title: "Héritage",
        blocks: [
          { type: "paragraphe", text: "Surnommée « la Jeanne d'Arc de la Casamance », elle est devenue un symbole de la résistance et du rôle des femmes dans l'histoire du Sénégal. Le grand stade de Ziguinchor et une résidence universitaire de Dakar portent son nom." },
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
        question: "Contre quoi s'est-elle dressée pendant la Seconde Guerre mondiale ?",
        options: ["Les réquisitions coloniales et le travail forcé", "Le commerce de l'or", "La construction de pyramides", "L'islamisation"],
        correctIndex: 0,
        explanation: "Elle s'éleva contre les réquisitions (riz, bétail) et le travail forcé imposés par les Français.",
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
        question: "Où fut-elle déportée par les Français ?",
        options: ["À Tombouctou (Mali)", "À Paris", "Au Gabon", "En Algérie"],
        correctIndex: 0,
        explanation: "Arrêtée en 1943, elle fut déportée à Tombouctou, où elle mourut en 1944.",
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
    title: "Senghor, la Négritude et l'indépendance",
    description: "Poète, penseur et homme d'État, Léopold Sédar Senghor porta le mouvement de la Négritude et devint le premier président du Sénégal indépendant.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-38-senghor-negritude-independance-lesson-1",
        title: "Un poète et un intellectuel",
        blocks: [
          { type: "paragraphe", text: "Léopold Sédar Senghor (1906-2001), né à Joal dans une famille sérère, fut un élève brillant devenu poète et penseur. Il fut l'un des premiers Africains à obtenir l'agrégation en France, où il enseigna avant de s'engager en politique." },
        ],
      },
      {
        id: "course-histoire-38-senghor-negritude-independance-lesson-2",
        title: "La Négritude",
        blocks: [
          { type: "paragraphe", text: "Avec Aimé Césaire (Martinique) et Léon-Gontran Damas (Guyane), Senghor fonda dans les années 1930 le mouvement de la Négritude : une affirmation de la valeur, de la dignité et de la culture des peuples noirs, contre le mépris colonial. Ce courant littéraire et philosophique marqua tout le XXᵉ siècle." },
        ],
      },
      {
        id: "course-histoire-38-senghor-negritude-independance-lesson-3",
        title: "Le chemin vers l'indépendance",
        blocks: [
          { type: "paragraphe", text: "Député au parlement français, Senghor participa activement aux négociations vers l'indépendance. Après l'éphémère Fédération du Mali (1959-1960), le Sénégal devint indépendant le 4 avril 1960." },
        ],
      },
      {
        id: "course-histoire-38-senghor-negritude-independance-lesson-4",
        title: "Premier président du Sénégal",
        blocks: [
          { type: "paragraphe", text: "Senghor devint le premier président du Sénégal indépendant (1960-1980). Il promut la culture, l'éducation et le dialogue. Fait rare pour l'époque en Afrique, il quitta volontairement le pouvoir en 1980, assurant une transition pacifique — un geste qui força le respect." },
        ],
      },
      {
        id: "course-histoire-38-senghor-negritude-independance-lesson-5",
        title: "Héritage",
        blocks: [
          { type: "paragraphe", text: "Senghor fut le premier Africain élu à l'Académie française. Figure mondiale de la culture et de la Francophonie, il laisse une œuvre poétique majeure et l'idéal de la Négritude. Il incarne le mariage de la politique et de la culture au service de son pays." },
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
        explanation: "Senghor fonda la Négritude avec Aimé Césaire et Léon-Gontran Damas.",
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
        explanation: "Le Sénégal devint indépendant le 4 avril 1960.",
      },
      {
        id: "course-histoire-38-senghor-negritude-independance-quiz-5",
        question: "Qu'a fait Senghor en 1980, fait rare en Afrique à l'époque ?",
        options: ["Il a quitté volontairement le pouvoir", "Il a déclaré la guerre", "Il a aboli les élections", "Il s'est proclamé empereur"],
        correctIndex: 0,
        explanation: "En 1980, Senghor quitta volontairement le pouvoir, assurant une transition pacifique.",
      },
    ],
  },
  {
    id: "course-histoire-39-reine-nzinga-angola",
    categoryId: "histoire",
    emoji: "👑",
    title: "La reine Nzinga, résistante d'Angola",
    description: "Reine du Ndongo et du Matamba, Nzinga fut une brillante diplomate et guerrière qui tint tête aux Portugais pendant près de quarante ans.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-39-reine-nzinga-angola-lesson-1",
        title: "Une reine d'Afrique centrale",
        blocks: [
          {
            type: "paragraphe",
            text: "Une femme accède au pouvoir à un moment où deux mondes s'affrontent déjà en Angola : les royaumes africains, et les marchands d'esclaves portugais.",
          },
          {
            type: "chiffreCle",
            valeur: "1583-1663",
            legende: "les années de vie de la reine Nzinga Mbande",
          },
          {
            type: "paragraphe",
            text: "**Nzinga Mbande** est reine du **Ndongo** puis du **Matamba**, dans l'actuel Angola. Elle accède au pouvoir au début du XVIIᵉ siècle, à une époque où les Portugais étendent leur emprise et intensifient la traite des esclaves en Afrique centrale.",
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
            text: "Faute de siège, on voulait l'humilier. Nzinga a transformé l'affront en démonstration de pouvoir, sous les yeux mêmes de ceux qui l'avaient tendu.",
          },
          {
            type: "chiffreCle",
            valeur: "1622",
            legende: "la négociation de Luanda et le siège refusé",
          },
          {
            type: "paragraphe",
            text: "Lors d'une négociation à **Luanda**, en 1622, le gouverneur portugais ne lui offre pas de siège pour l'humilier. **Nzinga** fait alors s'agenouiller un serviteur pour s'asseoir sur son dos, affirmant qu'elle traite en égale, de souveraine à souverain.",
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
        question: "Quelle anecdote célèbre illustre son sens de la diplomatie ?",
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
    title: "Chaka Zoulou et le royaume zoulou",
    description: "Chef militaire de génie, Chaka transforma un petit clan en un puissant royaume zoulou et révolutionna l'art de la guerre en Afrique australe.",
    xp: 70,
    lessons: [
      {
        id: "course-histoire-40-chaka-zoulou-lesson-1",
        title: "La naissance d'un royaume",
        blocks: [
          {
            type: "paragraphe",
            text: "Un petit clan, presque invisible sur la carte. En quelques années à peine, un seul homme en a fait une grande puissance régionale.",
          },
          {
            type: "chiffreCle",
            valeur: "1787-1828",
            legende: "les années de vie de Chaka, roi zoulou",
          },
          {
            type: "paragraphe",
            text: "**Chaka** est le roi fondateur du royaume **zoulou**, en Afrique australe (actuelle Afrique du Sud). Au début du XIXᵉ siècle, il transforme un petit clan en une grande puissance régionale par son génie militaire et politique.",
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
            text: "Une sagaie courte, des boucliers renforcés, une formation en cornes de buffle : Chaka a réinventé la guerre avant même de conquérir son premier territoire.",
          },
          {
            type: "chiffreCle",
            valeur: "3",
            legende: "innovations militaires majeures de Chaka",
          },
          {
            type: "paragraphe",
            text: "**Chaka** révolutionne l'art de la guerre : il introduit une courte sagaie d'estoc (l'**iklwa**), de meilleurs boucliers, des régiments disciplinés (les **impis**) et la célèbre formation en « cornes de buffle », destinée à encercler l'ennemi.",
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
            text: "Grâce à cette armée, **Chaka** étend rapidement son royaume par la conquête et l'intégration des peuples voisins, bâtissant un État centralisé et militarisé d'une efficacité remarquable.",
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
            text: "Les conquêtes de Chaka ne se limitent pas à son propre royaume. Elles déclenchent, dans toute l'Afrique australe, une vague de bouleversements qui porte un nom : le Mfecane.",
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
            text: "Chaka meurt assassiné par les siens. Le royaume qu'il a bâti, lui, continuera longtemps à résister — jusque contre les Britanniques.",
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
            text: "**Chaka** est assassiné en 1828 par ses demi-frères. Le royaume qu'il avait bâti résiste plus tard farouchement aux Britanniques, remportant notamment la victoire d'**Isandlwana** (1879). Les Zoulous restent l'un des plus grands peuples d'Afrique du Sud.",
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
        question: "Comment appelle-t-on la période de bouleversements liée à son expansion ?",
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
