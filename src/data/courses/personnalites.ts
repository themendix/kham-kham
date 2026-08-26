import type { Course } from "@/types";

/**
 * 30 cours (01 → 30) générés depuis `docs/contenu personnalites/` + le cours hérité
 * `course-perso-voix-plumes-afrique` (déplacé depuis `misc.ts`, en fin de tableau), soit 31
 * au total. Chargé à la demande via `SUBJECT_LOADERS` (`src/data/courseContent.ts`).
 */
export const PERSONNALITES_COURSES: Course[] = [
  {
    id: "course-perso-01-hatchepsout",
    categoryId: "perso",
    emoji: "👑",
    title: "Hatchepsout, la femme qui régna en pharaon",
    description: "Elle a gouverné l'Égypte pendant une vingtaine d'années, s'est fait représenter avec la barbe postiche des rois et a envoyé ses navires jusqu'au pays de Pount. Puis on a tenté d'effacer son nom. Voici Hatchepsout.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-01-hatchepsout-lesson-1",
        title: "L'Égypte du Nouvel Empire",
        blocks: [
          {
            type: "paragraphe",
            text: "Vers 1550 avant notre ère, l'Égypte sort d'une longue division. Commence le Nouvel Empire, son âge d'or.",
          },
          {
            type: "frise",
            evenements: [
              { date: "v. 1550", texte: "Début du Nouvel Empire, XVIIIe dynastie" },
              { date: "1479", texte: "Hatchepsout devient régente" },
              { date: "v. 1473", texte: "Elle se fait couronner pharaon" },
              { date: "1458", texte: "Mort d'Hatchepsout" },
            ],
            unite: "av. J.-C.",
          },
          {
            type: "paragraphe",
            text: "Les frontières sont repoussées vers la **Nubie** au sud et la Syrie au nord-est. L'or nubien remplit les caisses de l'État. Karnak et Louxor s'agrandissent sans cesse. Le pharaon garantit la **Maât**, l'ordre juste du monde.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **Nouvel Empire** commence vers 1550 avant notre ère",
              "L'Égypte s'étend de la **Nubie** à la Syrie",
              "Le pharaon garantit la Maât, l'ordre du monde",
            ],
          },
        ],
      },
      {
        id: "course-perso-01-hatchepsout-lesson-2",
        title: "D'épouse royale à régente",
        blocks: [
          {
            type: "paragraphe",
            text: "**Hatchepsout** est la fille du pharaon Thoutmosis Iᵉʳ. Selon la coutume dynastique, elle épouse son demi-frère Thoutmosis II et devient grande épouse royale.",
          },
          {
            type: "chiffreCle",
            valeur: "1479",
            legende: "Hatchepsout prend la régence, av. J.-C.",
          },
          {
            type: "paragraphe",
            text: "De cette union naît une fille, mais aucun fils. À la mort de son époux, l'héritier désigné est un enfant en bas âge, né d'une épouse secondaire : le futur **Thoutmosis III**. Hatchepsout assure la régence, comme d'autres reines l'avaient fait avant elle.",
          },
          {
            type: "aRetenir",
            points: [
              "Fille de **Thoutmosis Iᵉʳ**, épouse de Thoutmosis II",
              "Elle devient régente pour l'enfant **Thoutmosis III**",
              "La régence n'a alors rien d'exceptionnel",
            ],
          },
        ],
      },
      {
        id: "course-perso-01-hatchepsout-lesson-3",
        title: "Se faire couronner pharaon : le pouvoir et ses images",
        blocks: [
          {
            type: "paragraphe",
            text: "Au bout de quelques années, **Hatchepsout** cesse de gouverner au nom de l'enfant-roi. Elle se fait couronner elle-même.",
          },
          {
            type: "image",
            alt: "Grande statue agenouillée d'Hatchepsout en pharaon, offrant deux vases.",
            legende: "Statue agenouillée d'Hatchepsout, en pharaon",
            credit: "The Metropolitan Museum of Art, domaine public (CC0)",
          },
          {
            type: "paragraphe",
            text: "Sur ses monuments, elle porte les attributs royaux : le pagne court, la coiffe némès, la **barbe postiche** des rois. Les inscriptions alternent masculin et féminin. À Deir el-Bahari, elle fait graver sa naissance divine : le dieu Amon l'aurait engendrée.",
          },
          {
            type: "aRetenir",
            points: [
              "Elle prend les cinq noms de la **titulature royale**",
              "Pagne, coiffe némès et **barbe postiche** sur ses portraits",
              "Sa « naissance divine » légitime le couronnement",
            ],
          },
        ],
      },
      {
        id: "course-perso-01-hatchepsout-lesson-4",
        title: "Pount et Deir el-Bahari",
        blocks: [
          {
            type: "paragraphe",
            text: "Le règne d'**Hatchepsout** ne se distingue pas par ses campagnes militaires, mais par le commerce et par les chantiers.",
          },
          {
            type: "chiffreCle",
            valeur: "Pount",
            legende: "pays lointain, vers la Corne de l'Afrique",
          },
          {
            type: "paragraphe",
            text: "Elle envoie une expédition maritime au pays de **Pount**. Les navires reviennent chargés d'encens, de myrrhe, d'ébène, d'ivoire et d'or — et d'arbres à encens transplantés vivants, plantés devant son temple de **Deir el-Bahari**.",
          },
          {
            type: "aRetenir",
            points: [
              "Une expédition maritime part vers le pays de **Pount**",
              "Retour chargé d'encens, myrrhe, ébène, ivoire et or",
              "Les reliefs de **Deir el-Bahari** en gardent le récit",
            ],
          },
          {
            type: "leSavaisTu",
            text: "Les reliefs de Deir el-Bahari montrent jusqu'aux maisons sur pilotis des habitants de Pount, et le portrait de leur reine Ati.",
          },
        ],
      },
      {
        id: "course-perso-01-hatchepsout-lesson-5",
        title: "L'effacement et la redécouverte",
        blocks: [
          {
            type: "paragraphe",
            text: "**Hatchepsout** meurt vers 1458 avant notre ère. Des années plus tard, une campagne s'attaque méthodiquement à sa mémoire.",
          },
          {
            type: "citation",
            texte: "Mon cœur balance, à songer à ce que diront ceux qui verront mes monuments dans les années à venir.",
            auteur: "Hatchepsout, inscription d'un obélisque de Karnak",
          },
          {
            type: "paragraphe",
            text: "Son nom est martelé, ses statues brisées et enfouies, ses images remplacées par celles de son père ou de son neveu. Les listes royales l'omettent. L'effacement a pourtant **échoué**.",
          },
          {
            type: "aRetenir",
            points: [
              "Son nom est **martelé**, ses statues enfouies",
              "Une opération politique, pour sécuriser la succession",
              "Les blocs brisés ont permis de la **redécouvrir**",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-01-hatchepsout-quiz-1",
        question: "À quelle dynastie égyptienne appartient Hatchepsout ?",
        options: ["La XIIᵉ dynastie", "La XVIIIᵉ dynastie", "La XXVᵉ dynastie", "La XXXᵉ dynastie"],
        correctIndex: 1,
        explanation: "Hatchepsout appartient à la XVIIIᵉ dynastie, celle qui ouvre le Nouvel Empire après l'expulsion des Hyksôs.",
      },
      {
        id: "course-perso-01-hatchepsout-quiz-2",
        question: "Quel titre Hatchepsout finit-elle par prendre, au-delà de la régence ?",
        options: ["Grande épouse royale", "Vizir de Haute-Égypte", "Roi de Haute et Basse-Égypte", "Grande prêtresse d'Amon"],
        correctIndex: 2,
        explanation: "Après quelques années de régence au nom du jeune Thoutmosis III, elle se fait couronner et prend la titulature royale complète, dont le titre de roi de Haute et Basse-Égypte.",
      },
      {
        id: "course-perso-01-hatchepsout-quiz-3",
        question: "Vers quelle région se dirige la célèbre expédition maritime envoyée par Hatchepsout ?",
        options: ["Le pays de Pount", "La Crète", "Le pays de Koush", "La Mésopotamie"],
        correctIndex: 0,
        explanation: "L'expédition au pays de Pount, situé vraisemblablement vers la Corne de l'Afrique ou les rives de la mer Rouge, revint chargée d'encens, de myrrhe, d'ébène, d'ivoire et d'arbres à encens vivants.",
      },
      {
        id: "course-perso-01-hatchepsout-quiz-4",
        question: "Où se trouve le temple funéraire à terrasses construit sous son règne ?",
        options: ["À Abou Simbel", "À Deir el-Bahari", "À Giza", "À Napata"],
        correctIndex: 1,
        explanation: "Son temple funéraire s'élève à Deir el-Bahari, au pied d'une falaise de la rive ouest de Thèbes ; ses reliefs racontent l'expédition à Pount et sa naissance divine.",
      },
      {
        id: "course-perso-01-hatchepsout-quiz-5",
        question: "Que s'est-il passé après sa mort, concernant sa mémoire ?",
        options: ["Elle fut proclamée déesse par ses successeurs", "Son règne fut aussitôt oublié, faute de monuments", "Son nom fut martelé et ses représentations effacées", "Elle fut inhumée dans une pyramide de Giza"],
        correctIndex: 2,
        explanation: "Une campagne d'effacement, sans doute tardive et destinée à sécuriser la succession, martela ses cartouches et brisa ses statues. C'est en reconstituant ces blocs que les archéologues ont redécouvert son règne.",
      },
    ],
  },
  {
    id: "course-perso-02-taharqa",
    categoryId: "perso",
    emoji: "🏛️",
    title: "Taharqa, le pharaon venu de Koush",
    description: "Un roi nubien monté sur le trône d'Égypte, bâtisseur de temples de Karnak au Gebel Barkal, qui tint tête à l'empire le plus redouté de son temps. Taharqa, ou quand l'Afrique intérieure gouverna la vallée du Nil.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-02-taharqa-lesson-1",
        title: "Napata et le royaume de Koush",
        blocks: [
          {
            type: "paragraphe",
            text: "Au sud de l'Égypte, sur le Nil, le royaume de **Koush** a sa capitale à Napata, dans l'actuel Soudan.",
          },
          {
            type: "frise",
            evenements: [
              { date: "v. 750", texte: "Piânkhy soumet l'Égypte depuis Napata" },
              { date: "690", texte: "Taharqa monte sur le trône" },
              { date: "671", texte: "Les Assyriens prennent Memphis" },
              { date: "664", texte: "Fin du règne, repli sur Koush" },
            ],
            unite: "av. J.-C.",
          },
          {
            type: "paragraphe",
            text: "Les rois de Koush se disent héritiers des pharaons et servent le dieu **Amon**, dont le grand temple domine le Gebel Barkal. Vers 750 avant notre ère, le roi **Piânkhy** descend le Nil et soumet l'Égypte entière.",
          },
          {
            type: "aRetenir",
            points: [
              "**Koush** a sa capitale à Napata, dans l'actuel Soudan",
              "Ses rois se disent héritiers des pharaons",
              "**Piânkhy** conquiert l'Égypte vers 750 avant notre ère",
            ],
          },
        ],
      },
      {
        id: "course-perso-02-taharqa-lesson-2",
        title: "La XXVᵉ dynastie : quand la Nubie gouverne l'Égypte",
        blocks: [
          {
            type: "paragraphe",
            text: "Pendant près d'un siècle, des rois venus de l'actuel Soudan règnent sur l'Égypte entière. Les égyptologues les appellent la **XXVe dynastie**.",
          },
          {
            type: "chiffreCle",
            valeur: "690-664",
            legende: "le règne de Taharqa, av. J.-C.",
          },
          {
            type: "paragraphe",
            text: "**Taharqa** est le fils de Piânkhy et de la reine Abar, et le frère de Chabataka. Il monte sur le trône en 690, à Napata. Son règne marque l'apogée de la domination koushite sur toute la vallée du Nil.",
          },
          {
            type: "aRetenir",
            points: [
              "La **XXVe dynastie** est koushite, venue de Napata",
              "Taharqa règne de 690 à 664 avant notre ère",
              "Fils de **Piânkhy**, il en marque l'apogée",
            ],
          },
        ],
      },
      {
        id: "course-perso-02-taharqa-lesson-3",
        title: "Taharqa bâtisseur",
        blocks: [
          {
            type: "paragraphe",
            text: "**Taharqa** a couvert de chantiers les deux rives de son royaume, de Karnak en Égypte jusqu'à Kawa au Soudan.",
          },
          {
            type: "image",
            alt: "Sanctuaire de pierre et sphinx à l'effigie de Taharqa.",
            legende: "Sanctuaire et sphinx de Taharqa",
            credit: "Photo Aidan McRae Thomson, CC BY-SA 2.0, via Wikimedia Commons",
          },
          {
            type: "paragraphe",
            text: "Il fait élever colonnes, temples et pyramides. À **Kawa**, ses stèles racontent les travaux qu'il commande. Les rois de Koush se font enterrer sous des pyramides à pente raide, plus étroites que celles d'Égypte.",
          },
          {
            type: "aRetenir",
            points: [
              "Il bâtit de **Karnak** au Soudan, sur les deux rives",
              "Ses stèles de **Kawa** racontent ses chantiers",
              "Les rois koushites reposent sous des pyramides étroites",
            ],
          },
        ],
      },
      {
        id: "course-perso-02-taharqa-lesson-4",
        title: "L'affrontement avec l'Assyrie",
        blocks: [
          {
            type: "paragraphe",
            text: "L'empire assyrien veut l'Égypte. **Taharqa** va passer une bonne part de son règne à lui résister.",
          },
          {
            type: "frise",
            evenements: [
              { date: "674", texte: "Première offensive assyrienne repoussée" },
              { date: "671", texte: "Assarhaddon prend Memphis" },
              { date: "669", texte: "Taharqa reprend brièvement le Nord" },
              { date: "667", texte: "Assurbanipal contre-attaque" },
            ],
            unite: "av. J.-C.",
          },
          {
            type: "paragraphe",
            text: "En 671, **Assarhaddon** prend Memphis et emmène la famille royale en captivité. Taharqa reprend le Nord, puis le perd de nouveau. La supériorité militaire assyrienne, avec ses armes de **fer**, finit par l'emporter.",
          },
          {
            type: "aRetenir",
            points: [
              "L'**Assyrie** conquiert la Basse-Égypte à partir de 671",
              "Taharqa reprend Memphis, puis la reperd",
              "Les armes de **fer** assyriennes font la différence",
            ],
          },
        ],
      },
      {
        id: "course-perso-02-taharqa-lesson-5",
        title: "Le repli vers Méroé et l'héritage koushite",
        blocks: [
          {
            type: "paragraphe",
            text: "Après **Taharqa**, les rois de Koush quittent l'Égypte. Leur royaume ne disparaît pas pour autant : il se déplace vers le sud.",
          },
          {
            type: "citation",
            texte: "Tirhaqa, roi de Koush, s'est mis en marche pour te faire la guerre.",
            auteur: "Deuxième livre des Rois, 19, 9",
          },
          {
            type: "paragraphe",
            text: "La cour s'installe à **Méroé**, entre la cinquième et la sixième cataracte. Le royaume y prospère près de mille ans encore, développe sa propre écriture, le **méroïtique**, et une industrie du fer réputée.",
          },
          {
            type: "aRetenir",
            points: [
              "Koush se replie sur **Méroé**, plus au sud",
              "Le royaume dure près de mille ans encore",
              "Il invente sa propre écriture, le **méroïtique**",
            ],
          },
          {
            type: "leSavaisTu",
            text: "L'écriture méroïtique se lit — on connaît la valeur de ses signes — mais la langue qu'elle note reste largement incomprise aujourd'hui.",
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-02-taharqa-quiz-1",
        question: "De quel royaume Taharqa était-il originaire ?",
        options: ["Le royaume d'Aksoum", "Le royaume de Koush", "Le royaume du Ghana", "Le royaume de Carthage"],
        correctIndex: 1,
        explanation: "Taharqa venait du royaume de Koush, en Nubie (actuel Soudan), dont la capitale était alors Napata, au pied du Gebel Barkal.",
      },
      {
        id: "course-perso-02-taharqa-quiz-2",
        question: "Quel numéro porte la dynastie égyptienne fondée par les rois koushites ?",
        options: ["La XIIᵉ dynastie", "La XVIIIᵉ dynastie", "La XXVᵉ dynastie", "La XXXᵉ dynastie"],
        correctIndex: 2,
        explanation: "La XXVᵉ dynastie, dite nubienne ou koushite, régna près d'un siècle sur un ensemble allant du delta du Nil aux confins du Soudan actuel.",
      },
      {
        id: "course-perso-02-taharqa-quiz-3",
        question: "Quel empire Taharqa a-t-il affronté durant son règne ?",
        options: ["L'Empire romain", "L'Empire perse", "L'Empire assyrien", "L'Empire macédonien"],
        correctIndex: 2,
        explanation: "Taharqa affronta l'Assyrie d'Assarhaddon puis d'Assourbanipal, qui envahit le delta en 671 avant notre ère et finit par pousser jusqu'à Thèbes.",
      },
      {
        id: "course-perso-02-taharqa-quiz-4",
        question: "Comment les rois koushites étaient-ils inhumés ?",
        options: ["Sous des pyramides à pente raide", "Dans des mastabas de brique crue", "Dans des tombes creusées dans la Vallée des Rois", "Dans des tumulus de pierres sèches"],
        correctIndex: 0,
        explanation: "Taharqa fut inhumé à Nouri, en Nubie, sous une pyramide à pente raide — la forme funéraire caractéristique des souverains koushites, dont des centaines subsistent au Soudan.",
      },
      {
        id: "course-perso-02-taharqa-quiz-5",
        question: "Vers quelle ville le royaume de Koush a-t-il déplacé son centre après la perte de l'Égypte ?",
        options: ["Vers Alexandrie", "Vers Méroé", "Vers Aksoum", "Vers Tombouctou"],
        correctIndex: 1,
        explanation: "Le royaume se replia puis s'installa plus au sud à Méroé, où il prospéra encore près de mille ans, développant sa propre écriture, le méroïtique.",
      },
    ],
  },
  {
    id: "course-perso-03-dihya",
    categoryId: "perso",
    emoji: "⚔️",
    title: "Dihya, dite la Kahina, reine de l'Aurès",
    description: "Une reine berbère qui tint tête aux armées arabes dans les montagnes de l'Aurès, et dont la mémoire est aujourd'hui revendiquée par des camps opposés. Histoire d'une figure aussi célèbre que mal connue.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-03-dihya-lesson-1",
        title: "Le Maghreb berbère à la veille des conquêtes",
        blocks: [
          {
            type: "paragraphe",
            text: "Au VIIe siècle, le Maghreb est tenu par des confédérations **berbères**, longtemps sous influence romaine puis byzantine.",
          },
          {
            type: "frise",
            evenements: [
              { date: "647", texte: "Premières incursions arabes en Ifriqiya" },
              { date: "670", texte: "Fondation de Kairouan" },
              { date: "v. 688", texte: "Dihya prend la tête des Jarawa" },
              { date: "703", texte: "Bataille finale dans l'Aurès" },
            ],
          },
          {
            type: "paragraphe",
            text: "Les massifs de l'**Aurès**, dans l'Algérie actuelle, servent à la fois de refuge et de forteresse. Les tribus y gardent leurs chefs, leurs cultes et leurs troupeaux. La conquête arabe s'y heurte à une résistance durable.",
          },
          {
            type: "aRetenir",
            points: [
              "Le Maghreb est tenu par des confédérations **berbères**",
              "L'**Aurès** sert de refuge et de forteresse",
              "La conquête arabe y rencontre une longue résistance",
            ],
          },
        ],
      },
      {
        id: "course-perso-03-dihya-lesson-2",
        title: "Qui était Dihya ?",
        blocks: [
          {
            type: "paragraphe",
            text: "**Dihya** dirige la confédération des Jarawa, dans l'Aurès. Les sources arabes la surnomment « al-Kahina », la devineresse.",
          },
          {
            type: "chiffreCle",
            valeur: "al-Kahina",
            legende: "« la devineresse », surnom venu de ses adversaires",
          },
          {
            type: "paragraphe",
            text: "Ce surnom vient de ses ennemis, qui lui prêtent un don de divination. On ignore sa religion : chrétienne, juive ou berbère traditionnelle, les sources se contredisent. **Ibn Khaldoun**, sept siècles plus tard, reste notre principale source à son sujet.",
          },
          {
            type: "aRetenir",
            points: [
              "**Dihya** dirige les Jarawa, dans le massif de l'Aurès",
              "« al-Kahina » est un surnom donné par ses **adversaires**",
              "Sa religion reste incertaine, les sources se contredisent",
            ],
          },
        ],
      },
      {
        id: "course-perso-03-dihya-lesson-3",
        title: "La résistance de l'Aurès",
        blocks: [
          {
            type: "paragraphe",
            text: "Entre 698 et 703, **Dihya** gouverne un territoire qui va de l'Aurès jusqu'à l'oasis de Ghadamès.",
          },
          {
            type: "image",
            alt: "Sommets enneigés des montagnes de l'Aurès, en Algérie.",
            legende: "Les Aurès, refuge et base de Dihya",
            credit: "Photo Yelles, CC BY-SA 3.0, via Wikimedia Commons",
          },
          {
            type: "paragraphe",
            text: "Elle bat les armées arabes à plusieurs reprises et repousse leur avancée pendant des années. Son autorité s'étend sur des tribus qui ne s'unissaient pas facilement : c'est là sa véritable **réussite politique**.",
          },
          {
            type: "aRetenir",
            points: [
              "De 698 à 703, elle gouverne un **État berbère**",
              "Il s'étend de l'Aurès à l'oasis de **Ghadamès**",
              "Elle unit des tribus qui s'unissaient rarement",
            ],
          },
        ],
      },
      {
        id: "course-perso-03-dihya-lesson-4",
        title: "La terre brûlée et la défaite",
        blocks: [
          {
            type: "paragraphe",
            text: "Pour affamer l'envahisseur, **Dihya** aurait ordonné de détruire vergers et récoltes. La mesure lui aurait coûté le soutien des siens.",
          },
          {
            type: "chiffreCle",
            valeur: "703",
            legende: "bataille finale et mort de Dihya",
          },
          {
            type: "paragraphe",
            text: "Ce récit de la terre brûlée vient des chroniqueurs arabes, longtemps après les faits : les historiens le tiennent aujourd'hui pour douteux. En 703, Dihya tombe les armes à la main, au lieu qu'on appelle depuis **Bir al-Kahina**.",
          },
          {
            type: "aRetenir",
            points: [
              "La **terre brûlée** est un récit tardif, aujourd'hui contesté",
              "Dihya meurt les armes à la main en **703**",
              "Le lieu porte encore le nom de Bir al-Kahina",
            ],
          },
        ],
      },
      {
        id: "course-perso-03-dihya-lesson-5",
        title: "Une figure disputée",
        blocks: [
          {
            type: "paragraphe",
            text: "**Dihya** a été tour à tour héroïne nationale algérienne, symbole berbère, figure féministe et repoussoir. Chaque époque l'a relue selon ses besoins.",
          },
          {
            type: "citation",
            texte: "Elle les dirigeait à sa fantaisie et gouvernait, par leur intermédiaire, toute la tribu.",
            auteur: "Ibn Khaldoun, Histoire des Berbères",
          },
          {
            type: "reperes",
            items: [
              { label: "Sources", valeur: "Chroniqueurs arabes, sept siècles après" },
              { label: "Religion", valeur: "Chrétienne, juive ou berbère : incertain" },
              { label: "Mémoire", valeur: "Revendiquée par des courants opposés" },
            ],
          },
          {
            type: "paragraphe",
            text: "Les nationalistes algériens y ont vu la résistance à l'étranger ; les mouvements **berbères**, l'affirmation amazighe. Ce que l'histoire établit avec certitude tient en quelques lignes ; ce qu'on lui fait dire remplit des bibliothèques.",
          },
          {
            type: "aRetenir",
            points: [
              "Une figure **relue** différemment à chaque époque",
              "Nos sources sont tardives et souvent hostiles",
              "Le certain est mince, le symbolique immense",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-03-dihya-quiz-1",
        question: "Dans quel massif montagneux Dihya dirigeait-elle la résistance ?",
        options: ["Le Rif", "L'Aurès", "Le Hoggar", "Le Tibesti"],
        correctIndex: 1,
        explanation: "Dihya dirigeait la confédération berbère des Djeraoua dans le massif de l'Aurès, dans l'actuelle Algérie orientale.",
      },
      {
        id: "course-perso-03-dihya-quiz-2",
        question: "Que signifie approximativement le surnom « Kahina » ?",
        options: ["La reine des montagnes", "La devineresse", "La mère des Berbères", "La guerrière invincible"],
        correctIndex: 1,
        explanation: "« Kahina » est un mot arabe signifiant à peu près « la devineresse ». C'est un surnom donné par ses adversaires, qui lui prêtaient des dons de divination ; son nom serait Dihya.",
      },
      {
        id: "course-perso-03-dihya-quiz-3",
        question: "Contre quelle expansion Dihya s'est-elle opposée à la fin du VIIᵉ siècle ?",
        options: ["L'expansion arabe au Maghreb", "L'expansion romaine en Numidie", "L'expansion ottomane en Afrique du Nord", "L'expansion vandale en Ifriqiya"],
        correctIndex: 0,
        explanation: "Elle affronta les armées arabes conduites par le général Hassan ibn al-Nu'man, auxquelles elle infligea une défaite qui les contraignit à se replier vers l'est pendant plusieurs années.",
      },
      {
        id: "course-perso-03-dihya-quiz-4",
        question: "Pourquoi la religion de Dihya est-elle incertaine ?",
        options: ["Parce qu'elle changea plusieurs fois de religion", "Parce qu'elle refusait toute appartenance religieuse", "Parce que les sources qui la décrivent sont tardives et divergentes", "Parce que les sources ont toutes été détruites"],
        correctIndex: 2,
        explanation: "Les principaux récits la concernant sont écrits plusieurs siècles après les faits. On l'a dite tour à tour juive, chrétienne ou fidèle aux cultes berbères, sans qu'aucune hypothèse puisse être établie.",
      },
      {
        id: "course-perso-03-dihya-quiz-5",
        question: "Quelle stratégie les récits attribuent-ils à Dihya face au retour des armées arabes ?",
        options: ["La fuite vers le Sahara", "La terre brûlée", "La négociation d'un traité de paix", "Le siège des villes côtières"],
        correctIndex: 1,
        explanation: "Les récits lui attribuent une politique de terre brûlée destinée à priver l'envahisseur de ressources — un motif à lire avec prudence, car il sert aussi à expliquer commodément sa défaite finale.",
      },
    ],
  },
  {
    id: "course-perso-04-yennenga",
    categoryId: "perso",
    emoji: "🐎",
    title: "Yennenga, la princesse cavalière",
    description: "Guerrière, cavalière, fugitive : la tradition mossi fait de Yennenga la mère fondatrice de tout un peuple. Un récit d'origine qui en dit long sur la manière dont l'Afrique de l'Ouest raconte sa propre histoire.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-04-yennenga-lesson-1",
        title: "Une histoire portée par la tradition orale",
        blocks: [
          {
            type: "paragraphe",
            text: "**Yennenga** n'a laissé ni inscription ni chronique. Son histoire est portée par les griots mossi, transmise de bouche à oreille.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XIe s. ?", texte: "Datation la plus haute proposée" },
              { date: "XVe s. ?", texte: "Datation la plus basse proposée" },
              { date: "Depuis", texte: "Les royaumes mossi se réclament de son fils" },
            ],
          },
          {
            type: "paragraphe",
            text: "Elle serait la fille du **Naaba Nedega**, roi de Dagomba, et de la reine Napoko. Les versions varient d'un griot à l'autre, et les historiens ne s'accordent pas sur l'époque. Cette incertitude ne diminue pas son rôle de **mère fondatrice**.",
          },
          {
            type: "aRetenir",
            points: [
              "Aucune source écrite : **tradition orale** seule",
              "Les historiens la situent entre le XIe et le XVe siècle",
              "Fille du Naaba Nedega, roi de **Dagomba**",
            ],
          },
        ],
      },
      {
        id: "course-perso-04-yennenga-lesson-2",
        title: "La princesse guerrière",
        blocks: [
          {
            type: "paragraphe",
            text: "Dans le récit que transmettent les griots, **Yennenga** monte à cheval et combat aux côtés de son père dès l'adolescence.",
          },
          {
            type: "chiffreCle",
            valeur: "Dagomba",
            legende: "le royaume de son père, dans l'actuel Ghana",
          },
          {
            type: "paragraphe",
            text: "Elle commande une unité de cavalerie et se distingue au combat, au point de devenir indispensable à l'armée de son père. Celui-ci tient tant à elle qu'il refuse tous les prétendants et la garde auprès de lui. Le récit dit qu'il finit par l'**enfermer**.",
          },
          {
            type: "aRetenir",
            points: [
              "Cavalière et guerrière dès l'**adolescence**",
              "Son père refuse tous les prétendants",
              "Le récit dit qu'il l'enferme pour la retenir",
            ],
          },
        ],
      },
      {
        id: "course-perso-04-yennenga-lesson-3",
        title: "La fuite et la rencontre",
        blocks: [
          {
            type: "paragraphe",
            text: "Une nuit, **Yennenga** s'échappe à cheval, seule, et prend la direction du sud, loin du royaume de son père.",
          },
          {
            type: "reperes",
            items: [
              { label: "Le cheval", valeur: "Un étalon, dans la plupart des versions" },
              { label: "La rencontre", valeur: "Riale, chasseur mandé" },
              { label: "Le fils", valeur: "Ouedraogo, « étalon mâle » en moore" },
            ],
          },
          {
            type: "paragraphe",
            text: "Épuisée, elle atteint une rivière et rencontre **Riale**, un chasseur mandé qui la recueille. De leur union naît un fils. Ils l'appellent **Ouedraogo**, du nom du cheval qui l'a menée jusque-là.",
          },
          {
            type: "aRetenir",
            points: [
              "Yennenga fuit seule, à cheval, vers le **sud**",
              "Elle rencontre **Riale**, un chasseur mandé",
              "Leur fils Ouedraogo doit son nom au cheval",
            ],
          },
        ],
      },
      {
        id: "course-perso-04-yennenga-lesson-4",
        title: "Aux origines des royaumes mossi",
        blocks: [
          {
            type: "paragraphe",
            text: "**Ouedraogo**, le fils de Yennenga et de Riale, est présenté par la tradition orale comme l'ancêtre de tous les rois mossi qui régneront sur le plateau central.",
          },
          {
            type: "chiffreCle",
            valeur: "Moogo",
            legende: "le pays mossi, dans l'actuel Burkina Faso",
          },
          {
            type: "paragraphe",
            text: "Ses descendants fondent des royaumes qui tiennent la région pendant des siècles : **Ouagadougou**, Yatenga, Tenkodogo. Leur organisation politique, avec le Mogho Naaba à sa tête, a survécu à la colonisation et existe encore aujourd'hui.",
          },
          {
            type: "aRetenir",
            points: [
              "**Ouedraogo** est l'ancêtre revendiqué des rois mossi",
              "Ouagadougou, Yatenga, Tenkodogo en sont issus",
              "Le **Mogho Naaba** est toujours en fonction",
            ],
          },
        ],
      },
      {
        id: "course-perso-04-yennenga-lesson-5",
        title: "Yennenga aujourd'hui",
        blocks: [
          {
            type: "paragraphe",
            text: "Au Burkina Faso, **Yennenga** est partout : dans les statues, sur la monnaie, dans le sport et jusque dans le nom du plus grand prix de cinéma d'Afrique.",
          },
          {
            type: "reperes",
            items: [
              { label: "Étalon d'or", valeur: "Grand prix du FESPACO, à son nom" },
              { label: "Sport", valeur: "Les Étalons, équipe nationale burkinabè" },
              { label: "Espace public", valeur: "Statues et monuments à Ouagadougou" },
            ],
          },
          {
            type: "paragraphe",
            text: "Le grand prix du **FESPACO** s'appelle l'Étalon d'or de Yennenga. L'équipe nationale de football se nomme les **Étalons**. Une figure sans date certaine est ainsi devenue le symbole d'un pays entier.",
          },
          {
            type: "aRetenir",
            points: [
              "L'**Étalon d'or de Yennenga** couronne le FESPACO",
              "Les Étalons, c'est l'équipe nationale du Burkina",
              "Une fondatrice sans date, devenue symbole national",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-04-yennenga-quiz-1",
        question: "Par quel type de source l'histoire de Yennenga nous est-elle parvenue ?",
        options: ["Par des chroniques écrites contemporaines", "Par la tradition orale", "Par des inscriptions sur pierre", "Par des récits de voyageurs arabes"],
        correctIndex: 1,
        explanation: "Yennenga est connue par la tradition orale, transmise dans les cours royales mossi. L'UNESCO considère ces traditions comme des sources historiques à part entière, à traiter avec une méthode propre.",
      },
      {
        id: "course-perso-04-yennenga-quiz-2",
        question: "Quelle était la spécialité militaire attribuée à Yennenga ?",
        options: ["La cavalerie", "La marine de guerre", "La poliorcétique", "Le tir à l'arbalète"],
        correctIndex: 0,
        explanation: "La tradition en fait une cavalière d'exception, formée dès l'enfance au maniement des armes et commandant des unités de l'armée de son père, le roi Nedega.",
      },
      {
        id: "course-perso-04-yennenga-quiz-3",
        question: "Comment se nomme le fils de Yennenga, ancêtre fondateur de la dynastie ?",
        options: ["Naba Zombré", "Riale", "Ouédraogo", "Nedega"],
        correctIndex: 2,
        explanation: "Elle nomma son fils Ouédraogo, un nom qui évoque l'étalon en langue mooré, en mémoire du cheval qui l'avait portée dans sa fuite.",
      },
      {
        id: "course-perso-04-yennenga-quiz-4",
        question: "Dans quel pays actuel se sont développés les royaumes mossi ?",
        options: ["Au Sénégal", "Au Burkina Faso", "Au Cameroun", "En Éthiopie"],
        correctIndex: 1,
        explanation: "Les royaumes mossi occupèrent le plateau central de l'actuel Burkina Faso, avec Ouagadougou comme royaume principal, dirigé par le Mogho Naaba.",
      },
      {
        id: "course-perso-04-yennenga-quiz-5",
        question: "Quel trophée de cinéma porte aujourd'hui le nom de Yennenga ?",
        options: ["L'Étalon d'or de Yennenga, au FESPACO", "Le Lion d'or de Yennenga, à Venise", "Le Tanit d'or de Yennenga, à Carthage", "Le Bayard de Yennenga, à Namur"],
        correctIndex: 0,
        explanation: "L'Étalon d'or de Yennenga est la récompense suprême du FESPACO, le Festival panafricain du cinéma et de la télévision de Ouagadougou.",
      },
    ],
  },
  {
    id: "course-perso-05-ibn-khaldoun",
    categoryId: "perso",
    emoji: "📜",
    title: "Ibn Khaldoun, l'invention de la science sociale",
    description: "Né à Tunis au XIVᵉ siècle, il a cherché à comprendre pourquoi les empires naissent, vieillissent et meurent. Quatre siècles avant la sociologie européenne, un Maghrébin en posait déjà les questions.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-05-ibn-khaldoun-lesson-1",
        title: "Une vie de lettré et de diplomate",
        blocks: [
          {
            type: "paragraphe",
            text: "**Ibn Khaldoun** naît le 27 mai 1332 à Tunis, dans une famille andalouse installée au Maghreb depuis des générations.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1332", texte: "Naissance à Tunis" },
              { date: "1375", texte: "Retraite à Qalat Ibn Salama" },
              { date: "1377", texte: "Rédaction de la Muqaddima" },
              { date: "1406", texte: "Mort au Caire" },
            ],
          },
          {
            type: "paragraphe",
            text: "Il reçoit une éducation arabe classique très poussée, puis passe sa vie entre les cours de Fès, Grenade, Tlemcen et Le Caire. Il y est tour à tour secrétaire, ambassadeur, **conseiller** — et parfois **prisonnier** des princes qu'il sert.",
          },
          {
            type: "aRetenir",
            points: [
              "Né à **Tunis** en 1332, mort au Caire en 1406",
              "Une carrière entre Fès, Grenade, Tlemcen et Le Caire",
              "Homme de cour autant que **savant**",
            ],
          },
        ],
      },
      {
        id: "course-perso-05-ibn-khaldoun-lesson-2",
        title: "La Muqaddima",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1375, **Ibn Khaldoun** se retire dans une forteresse d'Algérie. Il y écrit en quelques mois la Muqaddima.",
          },
          {
            type: "image",
            alt: "Page de manuscrit arabe, de la main d'Ibn Khaldoun.",
            legende: "La Muqaddima, de la main d'Ibn Khaldoun",
            credit: "Domaine public, via Wikimedia Commons",
          },
          {
            type: "paragraphe",
            text: "Le mot signifie « prolégomènes » : c'est l'introduction d'une histoire universelle. Mais l'introduction dépasse l'ouvrage. Ibn Khaldoun y cherche les **lois** qui gouvernent les sociétés, là où ses prédécesseurs alignaient les règnes.",
          },
          {
            type: "aRetenir",
            points: [
              "La **Muqaddima** est écrite vers 1377, en quelques mois",
              "C'est l'introduction d'une histoire universelle",
              "Il y cherche les **lois** des sociétés humaines",
            ],
          },
        ],
      },
      {
        id: "course-perso-05-ibn-khaldoun-lesson-3",
        title: "L'asabiyya et le cycle des dynasties",
        blocks: [
          {
            type: "paragraphe",
            text: "Le mot **asabiyya** se traduit mal. Il désigne la force de cohésion d'un groupe : ce qui fait que ses membres se tiennent les uns aux autres.",
          },
          {
            type: "chiffreCle",
            valeur: "4 générations",
            legende: "la durée qu'il donne à une dynastie",
          },
          {
            type: "paragraphe",
            text: "Selon Ibn Khaldoun, un groupe soudé conquiert le pouvoir. Installé dans les villes, il s'amollit et perd son **asabiyya**. Un autre groupe, plus rude, le renverse. Le cycle dure environ quatre générations, puis recommence.",
          },
          {
            type: "aRetenir",
            points: [
              "L'**asabiyya** est la force de cohésion d'un groupe",
              "Elle se perd avec la vie urbaine et le confort",
              "Le cycle des dynasties dure environ **quatre générations**",
            ],
          },
        ],
      },
      {
        id: "course-perso-05-ibn-khaldoun-lesson-4",
        title: "Son regard sur l'Afrique, et ses limites",
        blocks: [
          {
            type: "paragraphe",
            text: "**Ibn Khaldoun** décrit l'Afrique du Nord avec une précision inégalée. Sur les régions plus au sud, son regard est bien moins sûr.",
          },
          {
            type: "reperes",
            items: [
              { label: "Point fort", valeur: "Histoire des Berbères, source majeure" },
              { label: "Point faible", valeur: "L'Afrique subsaharienne, mal connue" },
              { label: "À corriger", valeur: "Des jugements datés sur les peuples du Sud" },
            ],
          },
          {
            type: "paragraphe",
            text: "Son **Histoire des Berbères** reste une source de premier ordre, parfois la seule sur certaines tribus. Mais il reprend sur les peuples subsahariens des jugements courants à son époque, que les savoirs actuels ont **démentis**.",
          },
          {
            type: "aRetenir",
            points: [
              "L'**Histoire des Berbères** est une source majeure",
              "Son savoir sur l'Afrique subsaharienne est mince",
              "Il reprend des préjugés de son temps",
            ],
          },
        ],
      },
      {
        id: "course-perso-05-ibn-khaldoun-lesson-5",
        title: "Postérité d'un précurseur",
        blocks: [
          {
            type: "paragraphe",
            text: "Pendant des siècles, **Ibn Khaldoun** a été lu comme un historien parmi d'autres. Le XIXe siècle européen le redécouvre autrement.",
          },
          {
            type: "chiffreCle",
            valeur: "1863",
            legende: "traduction française de Slane, à Paris",
          },
          {
            type: "paragraphe",
            text: "Traduit en français par **de Slane**, puis discuté par les sociologues, il apparaît comme un précurseur : il cherchait des régularités là où l'on ne voyait que des récits. On le lit aujourd'hui au Caire comme à Chicago, dans les départements d'histoire autant que de sociologie.",
          },
          {
            type: "aRetenir",
            points: [
              "Redécouvert en Europe au **XIXe siècle**",
              "Lu comme un précurseur de la **sociologie**",
              "Il cherchait des régularités, pas seulement des récits",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-05-ibn-khaldoun-quiz-1",
        question: "Dans quelle ville Ibn Khaldoun est-il né en 1332 ?",
        options: ["Fès", "Tunis", "Le Caire", "Grenade"],
        correctIndex: 1,
        explanation: "Ibn Khaldoun naît à Tunis en 1332, dans une famille d'origine andalouse installée au Maghreb après la reconquête chrétienne de Séville.",
      },
      {
        id: "course-perso-05-ibn-khaldoun-quiz-2",
        question: "Comment s'appelle son œuvre la plus célèbre ?",
        options: ["La Muqaddima", "Le Kitab al-Aghani", "La Rihla", "Le Canon de la médecine"],
        correctIndex: 0,
        explanation: "La Muqaddima, introduction à son histoire universelle, constitue un traité autonome et c'est elle qui a fait sa réputation.",
      },
      {
        id: "course-perso-05-ibn-khaldoun-quiz-3",
        question: "Que désigne le concept d'asabiyya ?",
        options: ["La richesse accumulée par une dynastie", "La solidarité et la cohésion d'un groupe", "La science du droit musulman", "Le commerce transsaharien"],
        correctIndex: 1,
        explanation: "L'asabiyya désigne l'esprit de corps qui unit les membres d'un groupe et les rend capables d'agir ensemble. Ibn Khaldoun en fait le moteur de l'ascension puis du déclin des dynasties.",
      },
      {
        id: "course-perso-05-ibn-khaldoun-quiz-4",
        question: "Selon son modèle cyclique, qu'est-ce qui affaiblit une dynastie installée au pouvoir ?",
        options: ["Les épidémies successives", "L'absence d'écriture administrative", "Le luxe et la dissolution de la solidarité initiale", "L'ouverture au commerce extérieur"],
        correctIndex: 2,
        explanation: "Installée au pouvoir, la dynastie développe le luxe et l'administration, ce qui dissout l'asabiyya qui l'avait portée. Affaiblie, elle tombe au bout de trois ou quatre générations devant un nouveau groupe.",
      },
      {
        id: "course-perso-05-ibn-khaldoun-quiz-5",
        question: "Quelle précaution l'UNESCO invite-t-elle à prendre en lisant Ibn Khaldoun ?",
        options: ["Se méfier de ses chiffres de population", "Tenir compte des préjugés de son époque sur les populations subsahariennes", "Ne pas se fier à ses dates, toutes approximatives", "Ignorer ses développements sur les Berbères"],
        correctIndex: 1,
        explanation: "Ses jugements sur les populations d'Afrique subsaharienne reprennent des préjugés climatiques courants au XIVᵉ siècle, qui furent ensuite détournés au service de thèses racialistes.",
      },
    ],
  },
  {
    id: "course-perso-06-sayyida-al-hurra",
    categoryId: "perso",
    emoji: "⚓",
    title: "Sayyida al-Hurra, la gouverneure de Tétouan",
    description: "Chassée d'Andalousie enfant, elle gouverna Tétouan pendant près de trente ans et devint une puissance de la Méditerranée occidentale. Une femme d'État que les chroniques espagnoles apprirent à redouter.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-06-sayyida-al-hurra-lesson-1",
        title: "L'exil d'al-Andalus",
        blocks: [
          {
            type: "paragraphe",
            text: "**Sayyida al-Hurra** naît en 1485 à Grenade, sept ans avant la chute de la ville aux mains des Rois catholiques.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1485", texte: "Naissance à Grenade" },
              { date: "1492", texte: "Chute de Grenade, exil au Maroc" },
              { date: "1515", texte: "Elle devient gouverneure de Tétouan" },
              { date: "1542", texte: "Évincée par son beau-fils" },
            ],
          },
          {
            type: "paragraphe",
            text: "Sa famille fuit au Maroc et s'installe à **Chefchaouen**, ville fondée pour accueillir les réfugiés d'al-Andalus. Elle y grandit dans le souvenir de la perte, entourée d'exilés qui n'ont pas renoncé.",
          },
          {
            type: "aRetenir",
            points: [
              "Née à **Grenade** en 1485, exilée après 1492",
              "Sa famille s'installe à **Chefchaouen**",
              "Elle grandit parmi les réfugiés d'al-Andalus",
            ],
          },
        ],
      },
      {
        id: "course-perso-06-sayyida-al-hurra-lesson-2",
        title: "Gouverner Tétouan",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1515, **Sayyida al-Hurra** prend la tête de Tétouan. Elle gouvernera la ville pendant trente ans.",
          },
          {
            type: "image",
            alt: "Vue de la médina de Tétouan, maisons blanches serrées au pied des montagnes.",
            legende: "La médina de Tétouan, qu'elle gouverna trente ans",
            credit: "Photo Ideophagous, CC BY-SA 4.0, via Wikimedia Commons",
          },
          {
            type: "paragraphe",
            text: "Son titre, **al-Hurra**, signifie « la libre », « la souveraine ». Elle relève la ville, en fait un port actif et l'administre en son nom propre, sans tuteur ni régent au-dessus d'elle.",
          },
          {
            type: "aRetenir",
            points: [
              "Gouverneure de **Tétouan** de 1515 à 1542",
              "**al-Hurra** signifie « la libre », « la souveraine »",
              "Elle relève la ville et en fait un port actif",
            ],
          },
        ],
      },
      {
        id: "course-perso-06-sayyida-al-hurra-lesson-3",
        title: "La Méditerranée du XVIᵉ siècle",
        blocks: [
          {
            type: "paragraphe",
            text: "Au XVIe siècle, la Méditerranée est un champ de bataille entre l'Espagne, le Portugal et l'Empire ottoman.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1492", texte: "Fin de la présence musulmane à Grenade" },
              { date: "1497", texte: "L'Espagne prend Melilla" },
              { date: "1500-1550", texte: "Essor de la course en Méditerranée" },
            ],
          },
          {
            type: "paragraphe",
            text: "La **course** — la guerre navale autorisée par un souverain — est à la fois une arme et une économie. Sayyida al-Hurra s'allie au corsaire turc **Arudj Barberousse** : butin et rançons deviennent une ressource pour Tétouan.",
          },
          {
            type: "aRetenir",
            points: [
              "La Méditerranée oppose Espagne, Portugal et **Ottomans**",
              "La **course** est une arme autant qu'une économie",
              "Alliance avec Arudj Barberousse, corsaire turc",
            ],
          },
        ],
      },
      {
        id: "course-perso-06-sayyida-al-hurra-lesson-4",
        title: "Une souveraine face aux puissances ibériques",
        blocks: [
          {
            type: "paragraphe",
            text: "Les Portugais tiennent Ceuta et Tanger, les Espagnols Melilla. **Sayyida al-Hurra** traite avec eux d'égale à égal.",
          },
          {
            type: "chiffreCle",
            valeur: "30 ans",
            legende: "la durée de son gouvernement sur Tétouan",
          },
          {
            type: "paragraphe",
            text: "Elle négocie les rançons de captifs, signe des trêves, contrôle les échanges du port. Les chroniques ibériques la nomment et la craignent : c'est l'un des très rares cas, à cette époque, où une femme est reconnue comme **interlocutrice** politique par ces puissances.",
          },
          {
            type: "aRetenir",
            points: [
              "Elle négocie directement avec Portugais et **Espagnols**",
              "Rançons, trêves et contrôle des échanges",
              "Les chroniques ibériques la nomment et la **craignent**",
            ],
          },
        ],
      },
      {
        id: "course-perso-06-sayyida-al-hurra-lesson-5",
        title: "Chute et mémoire",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1542, **Sayyida al-Hurra** est évincée par son propre beau-fils. Elle se retire à Chefchaouen, la ville de son enfance, où elle meurt.",
          },
          {
            type: "reperes",
            items: [
              { label: "Titre", valeur: "al-Hurra, « la libre »" },
              { label: "Fin", valeur: "Évincée en 1542" },
              { label: "Mémoire", valeur: "Longtemps absente des manuels" },
            ],
          },
          {
            type: "paragraphe",
            text: "Elle a longtemps disparu des récits, y compris marocains. La sociologue **Fatema Mernissi** est de celles qui l'ont tirée de l'oubli, en montrant que le pouvoir exercé par des femmes en terre d'islam avait une **histoire** documentée.",
          },
          {
            type: "aRetenir",
            points: [
              "Évincée en **1542** par son beau-fils",
              "Elle meurt à Chefchaouen, où elle avait grandi",
              "Redécouverte tardivement, notamment par **Fatema Mernissi**",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-06-sayyida-al-hurra-quiz-1",
        question: "Que signifie approximativement le titre « Sayyida al-Hurra » ?",
        options: ["La dame libre, la souveraine indépendante", "La mère du sultan", "La gardienne du port", "La savante de Grenade"],
        correctIndex: 0,
        explanation: "« Sayyida al-Hurra » n'est pas un prénom mais un titre, signifiant à peu près « la dame libre » ou « la souveraine indépendante ».",
      },
      {
        id: "course-perso-06-sayyida-al-hurra-quiz-2",
        question: "Quel événement de 1492 explique l'exil de sa famille ?",
        options: ["La chute de Constantinople", "La prise de Grenade", "La bataille de Lépante", "La conquête de Ceuta"],
        correctIndex: 1,
        explanation: "La prise de Grenade en 1492 met fin à la présence musulmane en Espagne ; des dizaines de milliers de réfugiés traversent alors le détroit et s'installent sur la côte nord du Maroc.",
      },
      {
        id: "course-perso-06-sayyida-al-hurra-quiz-3",
        question: "Quelle ville Sayyida al-Hurra a-t-elle gouvernée pendant une trentaine d'années ?",
        options: ["Fès", "Salé", "Tétouan", "Marrakech"],
        correctIndex: 2,
        explanation: "Elle succède à son mari al-Mandri à la tête de Tétouan vers 1515 et y exerce l'autorité effective pendant environ trois décennies.",
      },
      {
        id: "course-perso-06-sayyida-al-hurra-quiz-4",
        question: "Qu'est-ce que la « course » pratiquée depuis les ports du Maghreb au XVIᵉ siècle ?",
        options: ["Une compétition maritime entre cités portuaires", "Une activité navale autorisée par les autorités, dirigée contre la navigation adverse", "Un système de transport de marchandises entre Alger et Tétouan", "Une course de chevaux organisée lors des fêtes religieuses"],
        correctIndex: 1,
        explanation: "La course était une activité encadrée et autorisée, à la fois ressource économique et riposte contre des puissances qui occupaient les côtes du Maghreb — à distinguer d'un banditisme privé.",
      },
      {
        id: "course-perso-06-sayyida-al-hurra-quiz-5",
        question: "Qu'a-t-elle de remarquable dans son mariage de 1541 avec le sultan wattaside ?",
        options: ["Elle refusa de quitter Tétouan, obligeant le sultan à venir", "Elle abdiqua aussitôt en faveur de son époux", "Le mariage fut célébré à Grenade", "Elle épousa le sultan sans jamais le rencontrer"],
        correctIndex: 0,
        explanation: "Elle épousa le sultan Ahmed al-Wattassi sans quitter sa ville ni renoncer à son pouvoir : c'est le souverain qui se déplaça jusqu'à Tétouan pour la cérémonie.",
      },
    ],
  },
  {
    id: "course-perso-07-kimpa-vita",
    categoryId: "perso",
    emoji: "🕯️",
    title: "Kimpa Vita, la prophétesse du Kongo",
    description: "À vingt ans, elle voulut réunifier un royaume déchiré et affirma que le Christ était kongo. Brûlée vive en 1706, Kimpa Vita reste l'une des figures les plus troublantes de l'histoire religieuse africaine.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-07-kimpa-vita-lesson-1",
        title: "Un royaume en ruines",
        blocks: [
          {
            type: "paragraphe",
            text: "À la fin du XVIIe siècle, le royaume du **Kongo** n'est plus qu'un champ de ruines et de guerres entre prétendants.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1665", texte: "Défaite de Mbwila contre les Portugais" },
              { date: "1665-1700", texte: "Guerre civile, capitale abandonnée" },
              { date: "1704", texte: "Kimpa Vita se dit habitée par saint Antoine" },
              { date: "1706", texte: "Elle est brûlée vive" },
            ],
          },
          {
            type: "paragraphe",
            text: "La bataille de **Mbwila**, en 1665, a coûté au royaume son roi et son unité. **São Salvador**, la capitale, est désertée. Les prétendants se disputent un trône vide pendant des décennies.",
          },
          {
            type: "aRetenir",
            points: [
              "La défaite de **Mbwila** (1665) brise le royaume",
              "**São Salvador**, la capitale, est abandonnée",
              "Des prétendants rivaux se disputent le trône",
            ],
          },
        ],
      },
      {
        id: "course-perso-07-kimpa-vita-lesson-2",
        title: "Une jeune femme devenue prophétesse",
        blocks: [
          {
            type: "paragraphe",
            text: "**Kimpa Vita** est une jeune femme kongo, formée aux pratiques de médiation avec l'invisible, dans une société où ce rôle est reconnu.",
          },
          {
            type: "chiffreCle",
            valeur: "1704",
            legende: "elle se dit habitée par saint Antoine",
          },
          {
            type: "paragraphe",
            text: "Elle est baptisée sous le nom de **Dona Béatrice**. En 1704, elle déclare que saint Antoine de Padoue est entré en elle et parle par sa bouche. Elle appelle aussitôt à reconstruire le royaume et à réoccuper la capitale.",
          },
          {
            type: "aRetenir",
            points: [
              "Baptisée **Dona Béatrice**, formée aux traditions kongo",
              "En 1704, elle se dit habitée par **saint Antoine**",
              "Elle appelle à réunifier le royaume",
            ],
          },
        ],
      },
      {
        id: "course-perso-07-kimpa-vita-lesson-3",
        title: "L'antonianisme, un christianisme kongo",
        blocks: [
          {
            type: "paragraphe",
            text: "Le mouvement de **Kimpa Vita** prend le nom d'antonianisme, du saint qui parle par elle.",
          },
          {
            type: "image",
            alt: "Crucifix kongo en laiton, au Christ aux traits africains.",
            legende: "Crucifix kongo en laiton, art chrétien local",
            credit: "Cleveland Museum of Art, domaine public (CC0)",
          },
          {
            type: "paragraphe",
            text: "Elle enseigne que le Christ, Marie et saint François étaient **kongo**, nés à São Salvador. Le christianisme devient ainsi une histoire du pays lui-même, enracinée dans sa terre et dans sa langue.",
          },
          {
            type: "aRetenir",
            points: [
              "L'**antonianisme** naît de ses prédications",
              "Elle situe le Christ et Marie à **São Salvador**",
              "Un christianisme enraciné dans le pays kongo",
            ],
          },
        ],
      },
      {
        id: "course-perso-07-kimpa-vita-lesson-4",
        title: "La reconquête de São Salvador et le bûcher",
        blocks: [
          {
            type: "paragraphe",
            text: "Des milliers de personnes suivent **Kimpa Vita** et repeuplent la capitale abandonnée depuis des décennies.",
          },
          {
            type: "chiffreCle",
            valeur: "1706",
            legende: "Kimpa Vita est condamnée au bûcher",
          },
          {
            type: "paragraphe",
            text: "Le mouvement devient en quelques mois une force politique que plus personne ne peut ignorer. Les prétendants au trône s'en inquiètent, les missionnaires **capucins** y voient une hérésie. Kimpa Vita est capturée sur ordre du roi, jugée par un tribunal ecclésiastique, puis brûlée vive en 1706 avec son enfant nouveau-né.",
          },
          {
            type: "aRetenir",
            points: [
              "Ses partisans réoccupent **São Salvador**",
              "Les **capucins** la jugent hérétique",
              "Elle est brûlée vive en **1706**, avec son enfant",
            ],
          },
        ],
      },
      {
        id: "course-perso-07-kimpa-vita-lesson-5",
        title: "Relectures : hérésie, résistance ou renaissance ?",
        blocks: [
          {
            type: "paragraphe",
            text: "Trois siècles plus tard, on ne s'accorde toujours pas sur ce que fut **Kimpa Vita**.",
          },
          {
            type: "reperes",
            items: [
              { label: "Pour les missionnaires", valeur: "Une hérétique à réduire" },
              { label: "Pour les nationalistes", valeur: "Une résistante à la domination" },
              { label: "Pour les historiens", valeur: "Une réforme religieuse kongo" },
            ],
          },
          {
            type: "paragraphe",
            text: "Les sources dont on dispose sont **capucines** : elles la décrivent pour la condamner. Les historiens y lisent aujourd'hui une tentative de refonder à la fois une religion et un État — l'une des premières **prophétesses** africaines documentées.",
          },
          {
            type: "aRetenir",
            points: [
              "Nos sources viennent de ses **juges**",
              "Hérétique, résistante ou réformatrice selon les lectures",
              "L'une des premières prophétesses africaines documentées",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-07-kimpa-vita-quiz-1",
        question: "Quelle bataille de 1665 précipite le royaume Kongo dans la guerre civile ?",
        options: ["La bataille d'Ambuila (Mbwila)", "La bataille de Kirina", "La bataille d'Adoua", "La bataille de Tondibi"],
        correctIndex: 0,
        explanation: "À Mbwila (Ambuila), en 1665, l'armée kongo est écrasée par les Portugais et le roi tué. S'ensuivent des décennies de guerre civile et l'abandon de la capitale.",
      },
      {
        id: "course-perso-07-kimpa-vita-quiz-2",
        question: "De quel saint Kimpa Vita affirmait-elle être possédée ?",
        options: ["Saint Jacques", "Saint Antoine de Padoue", "Saint Georges", "Saint Benoît"],
        correctIndex: 1,
        explanation: "En 1704, elle déclare avoir été possédée par saint Antoine de Padoue, le saint le plus populaire du Kongo, dont les missionnaires avaient largement diffusé le culte.",
      },
      {
        id: "course-perso-07-kimpa-vita-quiz-3",
        question: "Quel était le cœur de son message religieux ?",
        options: ["Que le christianisme devait être abandonné", "Que le Christ et les saints étaient nés au Kongo", "Que le roi devait se convertir à l'islam", "Que les missionnaires devaient diriger le royaume"],
        correctIndex: 1,
        explanation: "Elle affirmait que Jésus, Marie et saint François étaient nés au Kongo — une africanisation du christianisme qui rendait sans pouvoir les objets de culte importés.",
      },
      {
        id: "course-perso-07-kimpa-vita-quiz-4",
        question: "Quelle action politique concrète son mouvement a-t-il accomplie ?",
        options: ["La réoccupation de la capitale São Salvador", "La signature d'un traité avec le Portugal", "La fondation d'une nouvelle capitale sur la côte", "L'abolition de l'esclavage dans le royaume"],
        correctIndex: 0,
        explanation: "Kimpa Vita conduisit des milliers de fidèles vers la capitale abandonnée depuis la guerre civile, et São Salvador fut réoccupée et repeuplée.",
      },
      {
        id: "course-perso-07-kimpa-vita-quiz-5",
        question: "Comment le mouvement fondé par Kimpa Vita est-il désigné par les historiens ?",
        options: ["Le kimbanguisme", "Le mouridisme", "L'antonianisme", "Le donatisme"],
        correctIndex: 2,
        explanation: "Son mouvement est appelé antonianisme, en référence à saint Antoine de Padoue. Il est considéré comme la première tentative documentée d'africanisation du christianisme.",
      },
    ],
  },
  {
    id: "course-perso-08-nanny-marrons",
    categoryId: "perso",
    emoji: "🌿",
    title: "Nanny et les Marrons de Jamaïque",
    description: "Dans les montagnes de la Jamaïque, des Africains évadés ont bâti des communautés libres et tenu tête à l'armée britannique. À leur tête, une femme : Nanny, seule héroïne nationale de son pays.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-08-nanny-marrons-lesson-1",
        title: "De l'Afrique aux Caraïbes",
        blocks: [
          {
            type: "paragraphe",
            text: "Au XVIIe siècle, des dizaines de milliers de personnes sont déportées d'Afrique de l'Ouest vers les plantations de **Jamaïque**.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1655", texte: "Les Anglais prennent la Jamaïque aux Espagnols" },
              { date: "XVIIe s.", texte: "Essor des plantations sucrières" },
              { date: "1728-1739", texte: "Première guerre des Marrons" },
              { date: "1739", texte: "Traité entre Marrons et Couronne" },
            ],
          },
          {
            type: "paragraphe",
            text: "Beaucoup viennent du pays **akan**, dans l'actuel Ghana ; on les appelle en Jamaïque les Coromantee. Ils arrivent avec des langues, des savoirs militaires et une expérience de l'organisation politique.",
          },
          {
            type: "aRetenir",
            points: [
              "Déportation massive vers les plantations de **Jamaïque**",
              "Beaucoup viennent du pays **akan**, l'actuel Ghana",
              "Ils arrivent avec des savoirs militaires et politiques",
            ],
          },
        ],
      },
      {
        id: "course-perso-08-nanny-marrons-lesson-2",
        title: "Le marronnage comme système",
        blocks: [
          {
            type: "paragraphe",
            text: "**Marron** vient de l'espagnol cimarrón : l'animal domestique retourné à l'état sauvage. Le mot désigne ceux qui fuient les plantations.",
          },
          {
            type: "chiffreCle",
            valeur: "Blue Mountains",
            legende: "le massif où se réfugient les Marrons",
          },
          {
            type: "paragraphe",
            text: "Fuir ne suffit pas : il faut tenir. Les Marrons s'installent dans les **Blue Mountains**, cultivent, s'organisent et se défendent. Ils y créent des communautés durables, avec leurs chefs, leurs règles, leurs cultures vivrières et leurs alliances.",
          },
          {
            type: "aRetenir",
            points: [
              "**Marron** vient de cimarrón, « retourné à l'état sauvage »",
              "Les Blue Mountains servent de refuge et de base",
              "Des communautés durables, organisées et armées",
            ],
          },
        ],
      },
      {
        id: "course-perso-08-nanny-marrons-lesson-3",
        title: "Nanny Town et la guerre des Marrons",
        blocks: [
          {
            type: "paragraphe",
            text: "**Nanny** dirige les Marrons de l'est de l'île, depuis un village perché qui porte son nom.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1728", texte: "Les Britanniques lancent l'offensive" },
              { date: "1734", texte: "Nanny Town est prise et détruite" },
              { date: "1739", texte: "Traité de paix avec la Couronne" },
            ],
          },
          {
            type: "paragraphe",
            text: "Perchée dans les montagnes, **Nanny Town** contrôle les passages. Les Marrons y pratiquent l'embuscade, le camouflage végétal et l'usage de l'**abeng**, une corne taillée dans une défense de bœuf, qui transmet les messages d'une crête à l'autre.",
          },
          {
            type: "aRetenir",
            points: [
              "**Nanny Town** domine les montagnes de l'est",
              "Embuscade, camouflage et signaux à l'**abeng**",
              "Le village est pris et détruit en 1734",
            ],
          },
        ],
      },
      {
        id: "course-perso-08-nanny-marrons-lesson-4",
        title: "Le traité de 1739",
        blocks: [
          {
            type: "paragraphe",
            text: "Après plus de dix ans de guerre, les Britanniques renoncent à vaincre les **Marrons** par les armes et choisissent de négocier.",
          },
          {
            type: "chiffreCle",
            valeur: "1739",
            legende: "traité entre les Marrons et la Couronne",
          },
          {
            type: "paragraphe",
            text: "Le traité leur reconnaît des terres et une autonomie réelle, chose rare dans les Caraïbes de l'époque. En échange, ils doivent rendre les fugitifs qui les rejoindraient — une clause lourde, qui a divisé les Marrons et pèse encore sur la **mémoire** du traité.",
          },
          {
            type: "aRetenir",
            points: [
              "Le traité de **1739** reconnaît terres et autonomie",
              "En contrepartie : rendre les nouveaux fugitifs",
              "Une clause qui **divise** encore les mémoires",
            ],
          },
        ],
      },
      {
        id: "course-perso-08-nanny-marrons-lesson-5",
        title: "Héroïne nationale",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1975, le gouvernement jamaïcain fait de **Nanny** une héroïne nationale.",
          },
          {
            type: "image",
            alt: "Rue d'un village des Blue Mountains, en Jamaïque.",
            legende: "Moore Town, village marron de Jamaïque",
            credit: "Photo Diego Tirira, CC BY-SA 2.0, via Wikimedia Commons",
          },
          {
            type: "paragraphe",
            text: "Elle est la **seule femme** du panthéon national jamaïcain, et le seul membre marron. Son portrait figure sur le billet de 500 dollars. À **Moore Town**, les descendants des Marrons vivent toujours sur les terres du traité.",
          },
          {
            type: "aRetenir",
            points: [
              "Héroïne nationale de la Jamaïque depuis **1975**",
              "**Seule femme** du panthéon national jamaïcain",
              "Moore Town perpétue la communauté marronne",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-08-nanny-marrons-quiz-1",
        question: "Comment appelle-t-on la fuite organisée hors des plantations esclavagistes ?",
        options: ["Le marronnage", "L'affranchissement", "Le cimarronage colonial", "La transhumance"],
        correctIndex: 0,
        explanation: "Le marronnage désigne la fuite hors de la plantation. En Jamaïque, il donna naissance à des communautés organisées, avec villages, chefs, cultures vivrières et discipline militaire.",
      },
      {
        id: "course-perso-08-nanny-marrons-quiz-2",
        question: "De quelle région d'Afrique venait une grande partie des déportés vers la Jamaïque ?",
        options: ["De la Côte de l'Or, l'actuel Ghana", "Du Mozambique", "De la Corne de l'Afrique", "De la vallée du Nil"],
        correctIndex: 0,
        explanation: "Une part importante des captifs venait de la Côte de l'Or, notamment de populations akan, que les colons appelaient « Coromantee » du nom du port de Kormantine.",
      },
      {
        id: "course-perso-08-nanny-marrons-quiz-3",
        question: "Quel instrument les Marrons utilisaient-ils pour transmettre des messages à distance ?",
        options: ["Le tambour parlant", "L'abeng, une corne de bœuf", "La kora", "Le sifflet de bambou"],
        correctIndex: 1,
        explanation: "L'abeng, corne de bœuf dont les sonorités portaient à des kilomètres, permettait de transmettre des messages codés entre les groupes marrons.",
      },
      {
        id: "course-perso-08-nanny-marrons-quiz-4",
        question: "Que prévoyaient les traités signés en 1739 avec les Britanniques ?",
        options: ["La déportation des Marrons vers l'Afrique", "L'abolition de l'esclavage en Jamaïque", "La liberté et des terres pour les Marrons, contre la restitution des futurs fugitifs", "Le versement d'une indemnité annuelle aux planteurs"],
        correctIndex: 2,
        explanation: "Les traités reconnaissaient liberté, autonomie et terres aux communautés marronnes, mais les engageaient à restituer les futurs fugitifs et à aider à réprimer les révoltes — une clause qui pèse encore sur leur mémoire.",
      },
      {
        id: "course-perso-08-nanny-marrons-quiz-5",
        question: "Quelle distinction la Jamaïque a-t-elle accordée à Nanny en 1975 ?",
        options: ["Elle l'a proclamée héroïne nationale", "Elle a fait de sa maison un musée d'État", "Elle lui a décerné le prix Nobel de la paix à titre posthume", "Elle a donné son nom à la capitale"],
        correctIndex: 0,
        explanation: "Proclamée héroïne nationale en 1975, Nanny est la seule femme parmi les sept héros nationaux jamaïcains ; son portrait figure sur le billet de 500 dollars jamaïcains.",
      },
    ],
  },
  {
    id: "course-perso-09-toussaint-louverture",
    categoryId: "perso",
    emoji: "⛓️",
    title: "Toussaint Louverture et la révolution de Saint-Domingue",
    description: "Né esclave dans la colonie la plus rentable du monde, il en devint le maître et écrivit une constitution abolissant l'esclavage. De son combat naîtra Haïti, première république noire de l'histoire.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-09-toussaint-louverture-lesson-1",
        title: "La colonie la plus riche du monde",
        blocks: [
          {
            type: "paragraphe",
            text: "À la fin du XVIIIe siècle, **Saint-Domingue** est la colonie la plus rentable du monde. Sa richesse repose entièrement sur le travail forcé.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1791", texte: "Soulèvement des esclaves du Nord" },
              { date: "1794", texte: "Abolition votée par la Convention" },
              { date: "1801", texte: "Constitution de Toussaint Louverture" },
              { date: "1804", texte: "Indépendance d'Haïti" },
            ],
          },
          {
            type: "paragraphe",
            text: "L'île fournit une grande part du sucre et du café consommés en Europe. Un demi-million de personnes y sont réduites en **esclavage**, pour quelques dizaines de milliers de colons. La mortalité y est telle qu'il faut sans cesse déporter de nouveaux captifs.",
          },
          {
            type: "aRetenir",
            points: [
              "**Saint-Domingue** est la colonie la plus rentable du monde",
              "Sucre et café, produits par le travail **forcé**",
              "Un demi-million de personnes y sont réduites en esclavage",
            ],
          },
        ],
      },
      {
        id: "course-perso-09-toussaint-louverture-lesson-2",
        title: "1791 : le soulèvement",
        blocks: [
          {
            type: "paragraphe",
            text: "Dans la nuit du 22 août 1791, les plantations du Nord s'embrasent. Le soulèvement est massif, coordonné, et il ne s'arrêtera plus.",
          },
          {
            type: "chiffreCle",
            valeur: "1791",
            legende: "l'insurrection générale du Nord de l'île",
          },
          {
            type: "paragraphe",
            text: "**Toussaint**, affranchi depuis des années, rejoint l'insurrection et s'y impose vite. Il passe alors d'un camp à l'autre selon les promesses faites à la liberté des Noirs : d'abord aux côtés des Espagnols, puis de la **France** quand celle-ci abolit l'esclavage en 1794.",
          },
          {
            type: "aRetenir",
            points: [
              "L'insurrection éclate en août **1791**",
              "**Toussaint** s'y impose rapidement comme chef",
              "Il choisit son camp selon la cause de la liberté",
            ],
          },
        ],
      },
      {
        id: "course-perso-09-toussaint-louverture-lesson-3",
        title: "Le stratège et l'administrateur",
        blocks: [
          {
            type: "paragraphe",
            text: "**Toussaint Louverture** est né vers 1743 sur l'habitation Bréda. Devenu général, il gouverne l'île en son nom propre.",
          },
          {
            type: "image",
            alt: "Portrait gravé de Toussaint Louverture en uniforme de général.",
            legende: "Toussaint Louverture, gravure de 1806",
            credit: "Regge & Meineck, CC BY-SA 4.0, via Wikimedia Commons",
          },
          {
            type: "paragraphe",
            text: "Il bat successivement les Espagnols, les Britanniques et ses **rivaux**. Puis il administre : il relance les plantations, rétablit les cultures et impose une discipline du travail sévère, au risque de décevoir ceux qui l'avaient suivi.",
          },
          {
            type: "aRetenir",
            points: [
              "Né vers **1743** sur l'habitation Bréda",
              "Il bat Espagnols, Britanniques et rivaux",
              "Administrateur autant que **stratège**",
            ],
          },
        ],
      },
      {
        id: "course-perso-09-toussaint-louverture-lesson-4",
        title: "La constitution de 1801 et l'arrestation",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1801, **Toussaint Louverture** promulgue une constitution pour Saint-Domingue. Elle abolit l'esclavage à jamais et le nomme gouverneur à vie.",
          },
          {
            type: "chiffreCle",
            valeur: "1801",
            legende: "la constitution qui scelle la rupture",
          },
          {
            type: "paragraphe",
            text: "Le texte reconnaît encore la souveraineté française, mais dans les faits l'île se gouverne seule. **Bonaparte** envoie une expédition. Toussaint est arrêté par ruse en 1802 et déporté en France, où il meurt de froid et de faim au **fort de Joux** en avril 1803.",
          },
          {
            type: "aRetenir",
            points: [
              "La constitution de **1801** abolit l'esclavage à jamais",
              "Bonaparte envoie une expédition dès 1802",
              "Toussaint meurt au **fort de Joux** en 1803",
            ],
          },
        ],
      },
      {
        id: "course-perso-09-toussaint-louverture-lesson-5",
        title: "Haïti 1804 et l'onde de choc",
        blocks: [
          {
            type: "paragraphe",
            text: "Toussaint meurt en captivité, mais la guerre continue sans lui. Le 1er janvier 1804, l'indépendance d'**Haïti** est proclamée.",
          },
          {
            type: "citation",
            texte: "On n'a abattu que le tronc de l'arbre de la liberté, mais il repoussera car ses racines sont profondes et nombreuses.",
            auteur: "Paroles attribuées à Toussaint Louverture, 1802",
          },
          {
            type: "paragraphe",
            text: "C'est la première république née d'une révolte d'esclaves victorieuse. L'onde de choc traverse les Amériques et terrifie les puissances **esclavagistes**. La France imposera en 1825 une dette écrasante, que Haïti mettra plus d'un siècle à rembourser.",
          },
          {
            type: "aRetenir",
            points: [
              "**Haïti** proclame son indépendance en 1804",
              "Première république issue d'une révolte d'esclaves",
              "La **dette** de 1825 pèsera plus d'un siècle",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-09-toussaint-louverture-quiz-1",
        question: "Quel était l'ancien nom colonial de Haïti ?",
        options: ["Hispaniola-Ouest", "Saint-Domingue", "La Tortue", "Nouvelle-Guinée française"],
        correctIndex: 1,
        explanation: "Saint-Domingue, partie occidentale de l'île d'Hispaniola, était la colonie française la plus rentable du monde, fondée sur le travail forcé de près d'un demi-million d'Africains déportés.",
      },
      {
        id: "course-perso-09-toussaint-louverture-quiz-2",
        question: "En quelle année débute l'insurrection générale de la plaine du Nord ?",
        options: ["1789", "1791", "1801", "1804"],
        correctIndex: 1,
        explanation: "L'insurrection éclate en août 1791, préparée lors de la cérémonie du Bois-Caïman et menée par des chefs comme Boukman, Jean-François et Biassou.",
      },
      {
        id: "course-perso-09-toussaint-louverture-quiz-3",
        question: "Pourquoi Toussaint se rallie-t-il à la France en 1794 ?",
        options: ["Parce qu'il y était né", "Parce que la Convention venait d'abolir l'esclavage", "Parce que l'Espagne l'avait chassé de son armée", "Parce que Bonaparte le lui avait promis"],
        correctIndex: 1,
        explanation: "Il rejoint le camp français quand la Convention abolit l'esclavage en 1794 : un calcul politique cohérent avec sa ligne constante, choisir le camp qui garantit la liberté.",
      },
      {
        id: "course-perso-09-toussaint-louverture-quiz-4",
        question: "Que proclamait la constitution qu'il fit adopter en 1801 ?",
        options: ["L'indépendance immédiate de la colonie", "Le rattachement de la colonie à l'Espagne", "L'abolition définitive de l'esclavage et sa nomination comme gouverneur à vie", "Le partage de l'île entre trois gouverneurs"],
        correctIndex: 2,
        explanation: "La constitution de 1801 abolissait définitivement l'esclavage, proclamait l'égalité sans distinction de couleur et faisait de Toussaint le gouverneur à vie — sans rompre formellement avec la France.",
      },
      {
        id: "course-perso-09-toussaint-louverture-quiz-5",
        question: "Qu'est-ce qui rend l'indépendance de Haïti, en 1804, unique dans l'histoire ?",
        options: ["C'est le premier État issu d'une révolte victorieuse d'esclaves", "C'est la première colonie à se séparer de l'Espagne", "C'est le premier pays à abolir la peine de mort", "C'est la première monarchie constitutionnelle des Amériques"],
        correctIndex: 0,
        explanation: "Proclamée le 1ᵉʳ janvier 1804, Haïti devient la première république noire du monde et le premier État né d'une révolte victorieuse de personnes mises en esclavage.",
      },
    ],
  },
  {
    id: "course-perso-10-sojourner-truth",
    categoryId: "perso",
    emoji: "🗣️",
    title: "Sojourner Truth, la parole affranchie",
    description: "Vendue quatre fois avant l'âge de treize ans, elle devint l'une des voix les plus écoutées de l'Amérique du XIXᵉ siècle. Sojourner Truth ne savait ni lire ni écrire — et sa parole a traversé deux siècles.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-10-sojourner-truth-lesson-1",
        title: "Isabella Baumfree, esclave dans l'État de New York",
        blocks: [
          {
            type: "paragraphe",
            text: "**Isabella Baumfree** naît vers 1797 à Hurley, dans l'État de New York. L'esclavage n'existe pas qu'au Sud : il est légal ici aussi.",
          },
          {
            type: "frise",
            evenements: [
              { date: "v. 1797", texte: "Naissance à Hurley, État de New York" },
              { date: "1827", texte: "Elle se libère avant l'abolition de l'État" },
              { date: "1828", texte: "Procès gagné pour récupérer son fils" },
              { date: "1851", texte: "Discours à la convention d'Akron" },
            ],
          },
          {
            type: "paragraphe",
            text: "Elle grandit dans une famille d'esclaves d'anciens colons **néerlandais** : sa langue d'enfance est le néerlandais, pas l'anglais. Vendue plusieurs fois, séparée des siens, elle passe entre les mains de quatre propriétaires successifs.",
          },
          {
            type: "aRetenir",
            points: [
              "Née vers **1797** dans l'État de New York",
              "L'esclavage y était légal, comme au Sud",
              "Sa langue d'enfance est le **néerlandais**",
            ],
          },
        ],
      },
      {
        id: "course-perso-10-sojourner-truth-lesson-2",
        title: "La liberté conquise et le procès gagné",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1827, son maître revient sur sa promesse d'affranchissement. Isabella ne l'attend pas : elle part, à pied, avec son bébé.",
          },
          {
            type: "chiffreCle",
            valeur: "1828",
            legende: "elle gagne son procès et récupère son fils",
          },
          {
            type: "paragraphe",
            text: "Son fils **Peter**, cinq ans, a été vendu illégalement vers l'Alabama. Elle porte l'affaire devant un tribunal et **gagne** : c'est l'une des premières fois qu'une femme noire obtient gain de cause contre un homme blanc aux États-Unis.",
          },
          {
            type: "aRetenir",
            points: [
              "Elle se libère elle-même en **1827**",
              "Elle attaque en justice pour récupérer son fils",
              "L'une des premières victoires judiciaires de ce type",
            ],
          },
        ],
      },
      {
        id: "course-perso-10-sojourner-truth-lesson-3",
        title: "Devenir Sojourner Truth",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1843, Isabella Baumfree change de nom. Elle devient **Sojourner Truth** : « voyageuse » et « vérité ».",
          },
          {
            type: "image",
            alt: "Photographie de Sojourner Truth assise, tricot posé sur les genoux.",
            legende: "Sojourner Truth, photographie de 1870",
            credit: "Randall Studio, domaine public, via Wikimedia Commons",
          },
          {
            type: "paragraphe",
            text: "Elle prend la route, prêche, parle de l'abolition et du droit des femmes. Ne sachant ni lire ni écrire, elle dicte ses mémoires et **vend ses propres photographies** pour financer ses tournées — une manière très moderne de vivre de son image.",
          },
          {
            type: "aRetenir",
            points: [
              "Elle prend le nom de **Sojourner Truth** en 1843",
              "Prédicatrice itinérante, abolitionniste et féministe",
              "Elle finance ses tournées en vendant ses **photographies**",
            ],
          },
        ],
      },
      {
        id: "course-perso-10-sojourner-truth-lesson-4",
        title: "« Ne suis-je pas une femme ? »",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1851, à la convention des femmes d'**Akron**, dans l'Ohio, Sojourner Truth prend la parole sans texte préparé.",
          },
          {
            type: "reperes",
            items: [
              { label: "Juin 1851", valeur: "Compte rendu de l'Anti-Slavery Bugle" },
              { label: "1863", valeur: "Version réécrite par Frances Gage" },
              { label: "Différence", valeur: "La question répétée est ajoutée en 1863" },
            ],
          },
          {
            type: "paragraphe",
            text: "Le discours n'a pas de titre. Un journal abolitionniste en publie un compte rendu quelques semaines plus tard. Douze ans après, **Frances Gage** en donne une version très différente, dans un parler du Sud qui n'a jamais été le sien.",
          },
          {
            type: "aRetenir",
            points: [
              "Discours prononcé sans notes à **Akron**, en 1851",
              "Le compte rendu d'époque paraît en juin 1851",
              "**Frances Gage** en publie une réécriture en 1863",
            ],
          },
        ],
      },
      {
        id: "course-perso-10-sojourner-truth-lesson-5",
        title: "Une voix de la diaspora",
        blocks: [
          {
            type: "paragraphe",
            text: "La phrase qui l'a rendue célèbre dans le monde entier vient de la version de 1863, pas du discours de 1851.",
          },
          {
            type: "citation",
            texte: "Ne suis-je pas une femme ?",
            auteur: "Version publiée par Frances Gage en 1863, absente du compte rendu d'origine",
          },
          {
            type: "paragraphe",
            text: "**Sojourner Truth** meurt en 1883 à Battle Creek. Elle est devenue une figure de la **diaspora** africaine et du féminisme, citée dans le monde entier — souvent par des mots qu'elle n'a probablement pas prononcés sous cette forme.",
          },
          {
            type: "aRetenir",
            points: [
              "Morte en **1883** à Battle Creek, dans le Michigan",
              "Figure du féminisme et de la **diaspora** africaine",
              "Sa phrase la plus célèbre est une réécriture tardive",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-10-sojourner-truth-quiz-1",
        question: "Dans quel État des États-Unis Sojourner Truth est-elle née esclave ?",
        options: ["En Alabama", "En Virginie", "Dans l'État de New York", "En Louisiane"],
        correctIndex: 2,
        explanation: "Elle naît vers 1797 dans le comté d'Ulster, dans l'État de New York, au sein d'une famille asservie dont la langue maternelle était le néerlandais. L'esclavage n'a pas existé qu'au sud des États-Unis.",
      },
      {
        id: "course-perso-10-sojourner-truth-quiz-2",
        question: "Quel était son nom de naissance ?",
        options: ["Isabella Baumfree", "Harriet Jacobs", "Phillis Wheatley", "Elizabeth Freeman"],
        correctIndex: 0,
        explanation: "Née Isabella Baumfree, elle abandonne en 1843 le nom que l'esclavage lui avait donné pour se rebaptiser Sojourner Truth, « voyageuse » et « vérité ».",
      },
      {
        id: "course-perso-10-sojourner-truth-quiz-3",
        question: "Quelle démarche judiciaire remarquable a-t-elle menée en 1828 ?",
        options: ["Elle a fait annuler sa propre vente", "Elle a obtenu en justice le retour de son fils vendu illégalement", "Elle a fait condamner un tramway pour ségrégation", "Elle a obtenu réparation pour les violences subies"],
        correctIndex: 1,
        explanation: "Son fils Peter avait été vendu illégalement en Alabama. Elle porta l'affaire en justice et obtint son retour — l'un des premiers cas où une femme noire l'emporte contre un Blanc devant un tribunal américain.",
      },
      {
        id: "course-perso-10-sojourner-truth-quiz-4",
        question: "Sous quel titre son discours de 1851 à Akron est-il connu ?",
        options: ["« I Have a Dream »", "« Let My People Go »", "« Ain't I a Woman? »", "« The Souls of Black Folk »"],
        correctIndex: 2,
        explanation: "Son intervention à la convention pour les droits des femmes d'Akron, dans l'Ohio, est connue sous le titre « Ain't I a Woman? » — « Ne suis-je pas une femme ? ».",
      },
      {
        id: "course-perso-10-sojourner-truth-quiz-5",
        question: "Pourquoi son autobiographie a-t-elle été dictée plutôt qu'écrite ?",
        options: ["Parce qu'elle ne savait ni lire ni écrire", "Parce qu'elle avait perdu la vue", "Parce que la loi l'interdisait aux anciens esclaves", "Parce qu'elle préférait la tradition orale africaine"],
        correctIndex: 0,
        explanation: "Sojourner Truth n'a jamais appris à lire ni à écrire. Son autobiographie fut dictée en 1850 à une amie, et elle en vendait les exemplaires de ville en ville pour subvenir à ses besoins.",
      },
    ],
  },
  {
    id: "course-perso-11-abd-el-kader",
    categoryId: "perso",
    emoji: "🕌",
    title: "Abd el-Kader, l'émir et le savant",
    description: "Il tint quinze ans face à la plus grande armée d'Europe, bâtit un État en pleine guerre, puis sauva des milliers de vies à Damas. Abd el-Kader, ou la résistance devenue morale.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-11-abd-el-kader-lesson-1",
        title: "L'Algérie de 1830",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1830, la France débarque à Alger et met fin à trois siècles de **régence ottomane**. Le pays se retrouve sans État.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1830", texte: "Prise d'Alger par la France" },
              { date: "1832", texte: "Abd el-Kader proclamé émir" },
              { date: "1837", texte: "Traité de la Tafna avec la France" },
              { date: "1847", texte: "Reddition d'Abd el-Kader" },
            ],
          },
          {
            type: "paragraphe",
            text: "Les tribus de l'ouest cherchent un chef capable de les fédérer. Elles se tournent vers une famille religieuse respectée, les **Qadiriyya**, installée près de Mascara. C'est de là que vient Abd el-Kader, né vers 1808.",
          },
          {
            type: "aRetenir",
            points: [
              "La France prend Alger en **1830**",
              "La régence ottomane s'effondre, l'État disparaît",
              "Les tribus se tournent vers une famille **religieuse**",
            ],
          },
        ],
      },
      {
        id: "course-perso-11-abd-el-kader-lesson-2",
        title: "Bâtir un État en guerre",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1832, à vingt-quatre ans, **Abd el-Kader** est proclamé émir. Il ne se contente pas de lever des troupes : il bâtit un État.",
          },
          {
            type: "chiffreCle",
            valeur: "1832",
            legende: "il est proclamé émir à vingt-quatre ans",
          },
          {
            type: "paragraphe",
            text: "Il lève l'impôt, frappe **monnaie**, nomme des juges, crée des dépôts d'armes et une armée régulière payée. Sa capitale est mobile : la **smala**, une ville de tentes qui se déplace avec lui et abrite des milliers de personnes.",
          },
          {
            type: "aRetenir",
            points: [
              "Proclamé émir en **1832**, à vingt-quatre ans",
              "Impôt, monnaie, justice et armée régulière",
              "La **smala**, capitale mobile de tentes",
            ],
          },
        ],
      },
      {
        id: "course-perso-11-abd-el-kader-lesson-3",
        title: "Quinze ans de résistance",
        blocks: [
          {
            type: "paragraphe",
            text: "Pendant quinze ans, **Abd el-Kader** tient tête à la première armée d'Europe, sur un terrain qu'il connaît mieux qu'elle.",
          },
          {
            type: "reperes",
            items: [
              { label: "Tactique", valeur: "Harcèlement, mobilité, refus du choc frontal" },
              { label: "1837", valeur: "Traité de la Tafna, reconnaissance de fait" },
              { label: "Riposte", valeur: "Colonnes mobiles et razzias françaises" },
            ],
          },
          {
            type: "paragraphe",
            text: "Il pratique le harcèlement et évite la bataille rangée. Le traité de la **Tafna**, en 1837, lui reconnaît de fait deux tiers de l'Algérie. La guerre reprend, et la France répond par les colonnes mobiles et la destruction des récoltes.",
          },
          {
            type: "aRetenir",
            points: [
              "Quinze ans de guerre, de **1832** à 1847",
              "Harcèlement et mobilité contre la bataille rangée",
              "Le traité de la **Tafna** lui reconnaît deux tiers du pays",
            ],
          },
        ],
      },
      {
        id: "course-perso-11-abd-el-kader-lesson-4",
        title: "La captivité et l'exil",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1847, épuisé et encerclé, **Abd el-Kader** se rend. On lui promet un exil en Orient ; on l'enferme en France.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1847", texte: "Reddition, contre promesse d'exil" },
              { date: "1848-1852", texte: "Captivité en France, dont le château d'Amboise" },
              { date: "1852", texte: "Libéré par Louis-Napoléon Bonaparte" },
              { date: "1855", texte: "Installation à Damas" },
            ],
          },
          {
            type: "paragraphe",
            text: "Il passe cinq ans en captivité, notamment au château d'**Amboise**. Libéré en 1852, il s'installe finalement à **Damas**, où il se consacre à la théologie, à la poésie et à l'enseignement soufi.",
          },
          {
            type: "aRetenir",
            points: [
              "Reddition en **1847**, promesse d'exil non tenue",
              "Cinq ans de captivité en France",
              "Il s'installe à **Damas** en 1855",
            ],
          },
        ],
      },
      {
        id: "course-perso-11-abd-el-kader-lesson-5",
        title: "Damas 1860, et la mémoire algérienne",
        blocks: [
          {
            type: "paragraphe",
            text: "En juillet 1860, des massacres de chrétiens éclatent à **Damas**. Abd el-Kader ouvre sa maison et envoie ses hommes en protéger des milliers.",
          },
          {
            type: "chiffreCle",
            valeur: "1860",
            legende: "il protège les chrétiens de Damas",
          },
          {
            type: "paragraphe",
            text: "Le geste lui vaut une renommée mondiale, jusqu'à donner son nom à une ville de l'Iowa. En Algérie, sa mémoire est **disputée** : héros de la résistance pour les uns, figure récupérée par l'État pour d'autres. Il meurt à Damas en 1883.",
          },
          {
            type: "aRetenir",
            points: [
              "En **1860**, il protège les chrétiens de Damas",
              "Une renommée qui dépasse largement l'Algérie",
              "Sa mémoire reste **disputée** dans son pays",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-11-abd-el-kader-quiz-1",
        question: "En quelle année la France débarque-t-elle à Alger ?",
        options: ["1815", "1830", "1848", "1871"],
        correctIndex: 1,
        explanation: "Une flotte française débarque à Sidi-Ferruch en juin 1830 et s'empare d'Alger, faisant s'effondrer la régence ottomane — sans pour autant contrôler l'intérieur du pays.",
      },
      {
        id: "course-perso-11-abd-el-kader-quiz-2",
        question: "Quelle est la particularité de l'action d'Abd el-Kader, au-delà de la résistance armée ?",
        options: ["Il a construit un véritable État : administration, justice, impôt, armée régulière", "Il a négocié l'indépendance de l'Algérie dès 1837", "Il a converti les tribus du Sud au soufisme", "Il a fondé la première université d'Alger"],
        correctIndex: 0,
        explanation: "Son originalité tient à la construction d'un État en pleine guerre : gouverneurs de province, justice uniforme, impôt régulier, armée régulière payée et instruite, ateliers d'armement.",
      },
      {
        id: "course-perso-11-abd-el-kader-quiz-3",
        question: "Comment appelait-on la capitale mobile de l'émir ?",
        options: ["La casbah", "La zaouïa", "La smala", "La médina"],
        correctIndex: 2,
        explanation: "La smala était une ville de tentes qui se déplaçait avec l'État et abritait les archives, le trésor et les écoles. Elle fut surprise et capturée par les Français en 1843.",
      },
      {
        id: "course-perso-11-abd-el-kader-quiz-4",
        question: "Que s'est-il passé après sa reddition de décembre 1847 ?",
        options: ["Il fut conduit en Orient comme promis", "Il fut détenu cinq ans en France, contrairement à la promesse reçue", "Il fut exécuté à Alger", "Il fut nommé gouverneur de l'Oranie"],
        correctIndex: 1,
        explanation: "La promesse d'être conduit en Orient ne fut pas tenue : il fut détenu cinq ans en France, notamment au château d'Amboise, avant d'être libéré en 1852 par Louis-Napoléon Bonaparte.",
      },
      {
        id: "course-perso-11-abd-el-kader-quiz-5",
        question: "Quel acte accompli à Damas en 1860 lui valut une renommée internationale ?",
        options: ["Il négocia un traité entre l'Empire ottoman et la France", "Il fonda une école de droit musulman", "Il protégea plusieurs milliers de chrétiens menacés par des massacres", "Il fit restaurer la grande mosquée des Omeyyades"],
        correctIndex: 2,
        explanation: "En juillet 1860, il ouvrit sa maison et parcourut Damas avec ses hommes pour protéger plusieurs milliers de chrétiens, justifiant son action par le droit musulman lui-même.",
      },
    ],
  },
  {
    id: "course-perso-12-samori-toure",
    categoryId: "perso",
    emoji: "🛡️",
    title: "Samori Touré, l'empire wassoulou",
    description: "Parti de rien, il bâtit en vingt ans un empire de la taille d'un grand pays européen et tint la France en échec pendant seize années de guerre. L'histoire de Samori Touré est celle d'un stratège hors norme.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-12-samori-toure-lesson-1",
        title: "Un marchand devenu chef de guerre",
        blocks: [
          {
            type: "paragraphe",
            text: "**Samori Touré** naît vers 1830 à Miniambaladougou, dans l'actuelle Guinée, dans une famille de commerçants dioula.",
          },
          {
            type: "frise",
            evenements: [
              { date: "v. 1830", texte: "Naissance en pays malinké" },
              { date: "1878", texte: "Il prend le titre de faama" },
              { date: "1882", texte: "Premiers affrontements avec la France" },
              { date: "1898", texte: "Capture et déportation" },
            ],
          },
          {
            type: "paragraphe",
            text: "Il commence sa vie sur les routes du commerce, entre la forêt et le Sahel. La légende veut qu'il ait pris les armes pour libérer sa **mère**, capturée lors d'un raid. De marchand, il devient chef de guerre, puis souverain.",
          },
          {
            type: "aRetenir",
            points: [
              "Né vers **1830** en pays malinké",
              "D'abord commerçant **dioula**, sur les routes du Sahel",
              "Il prend les armes et devient chef de guerre",
            ],
          },
        ],
      },
      {
        id: "course-perso-12-samori-toure-lesson-2",
        title: "Bâtir un empire",
        blocks: [
          {
            type: "paragraphe",
            text: "En une vingtaine d'années, **Samori Touré** bâtit un empire qui s'étend sur une bonne partie de l'actuelle Guinée, du Mali et de la Côte d'Ivoire.",
          },
          {
            type: "chiffreCle",
            valeur: "faama",
            legende: "le titre de souverain qu'il prend en 1878",
          },
          {
            type: "paragraphe",
            text: "Il organise l'État en provinces, unifie la justice et lève une armée permanente. Il achète des **fusils à répétition** aux comptoirs anglais de Sierra Leone, et fait former des forgerons capables de les réparer et d'en copier les pièces.",
          },
          {
            type: "aRetenir",
            points: [
              "Un empire sur la Guinée, le Mali et la Côte d'Ivoire",
              "Il prend le titre de **faama** en 1878",
              "Armée permanente et **fusils** modernes",
            ],
          },
        ],
      },
      {
        id: "course-perso-12-samori-toure-lesson-3",
        title: "Seize ans de guerre contre la France",
        blocks: [
          {
            type: "paragraphe",
            text: "De 1882 à 1898, **Samori Touré** affronte l'armée française. Seize ans : c'est la plus longue résistance armée d'Afrique de l'Ouest.",
          },
          {
            type: "reperes",
            items: [
              { label: "Durée", valeur: "1882-1898, seize années de guerre" },
              { label: "Tactique", valeur: "Mobilité, terre brûlée, repli organisé" },
              { label: "Armement", valeur: "Fusils achetés, puis copiés sur place" },
            ],
          },
          {
            type: "paragraphe",
            text: "Il évite les batailles rangées, déplace ses forces, brûle derrière lui. Ses **sofas**, soldats professionnels, tiennent tête à des colonnes mieux équipées. La France doit engager des moyens considérables et n'en vient jamais à bout par les seules armes.",
          },
          {
            type: "aRetenir",
            points: [
              "**Seize ans** de guerre contre la France",
              "La plus longue résistance armée de la région",
              "Ses **sofas** tiennent tête aux colonnes françaises",
            ],
          },
        ],
      },
      {
        id: "course-perso-12-samori-toure-lesson-4",
        title: "Le grand déplacement vers l'est",
        blocks: [
          {
            type: "paragraphe",
            text: "Vers 1892, **Samori Touré** prend une décision rare dans l'histoire militaire : il déplace son empire entier vers l'est.",
          },
          {
            type: "chiffreCle",
            valeur: "1892",
            legende: "le grand déplacement vers l'est",
          },
          {
            type: "paragraphe",
            text: "Population, troupeaux, ateliers, administration : tout suit. L'objectif est de trouver un territoire hors de portée française, vers l'actuel nord de la Côte d'Ivoire et le Ghana. Le coût humain de ce déplacement est **terrible**, et la manœuvre lui vaut aujourd'hui encore des accusations sévères.",
          },
          {
            type: "aRetenir",
            points: [
              "Vers **1892**, il déplace son État vers l'est",
              "Population, troupeaux et ateliers suivent",
              "Un coût humain lourd, encore discuté aujourd'hui",
            ],
          },
        ],
      },
      {
        id: "course-perso-12-samori-toure-lesson-5",
        title: "Capture, exil et mémoire disputée",
        blocks: [
          {
            type: "paragraphe",
            text: "Le 29 septembre 1898, **Samori Touré** est capturé par surprise. Il est déporté au Gabon, où il meurt le 2 juin 1900.",
          },
          {
            type: "reperes",
            items: [
              { label: "Capture", valeur: "29 septembre 1898" },
              { label: "Exil", valeur: "Ndjolé, au Gabon" },
              { label: "Mort", valeur: "2 juin 1900" },
            ],
          },
          {
            type: "paragraphe",
            text: "Sa mémoire est **disputée**. Les uns retiennent le résistant, l'un des derniers à tenir tête à la conquête ; les autres rappellent la dureté de son État et les razzias d'esclaves qui le finançaient. Son petit-fils **Ahmed Sékou Touré** deviendra le premier président de la Guinée.",
          },
          {
            type: "aRetenir",
            points: [
              "Capturé en **1898**, mort en exil au Gabon en 1900",
              "Une mémoire **disputée**, entre résistance et dureté",
              "Son petit-fils sera le premier président de Guinée",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-12-samori-toure-quiz-1",
        question: "Quel métier Samori Touré exerçait-il avant de devenir chef de guerre ?",
        options: ["Forgeron", "Colporteur, marchand ambulant", "Griot", "Cavalier de la garde royale"],
        correctIndex: 1,
        explanation: "Il commença comme colporteur, parcourant la région et apprenant les routes, les marchés et les rapports de force — une formation qui expliquera son sens de la logistique.",
      },
      {
        id: "course-perso-12-samori-toure-quiz-2",
        question: "Quel titre Samori Touré adopte-t-il à la tête de son empire ?",
        options: ["Mansa", "Askia", "Almami", "Mogho Naaba"],
        correctIndex: 2,
        explanation: "Il adopte le titre d'almami, à la fois politique et religieux, faisant de l'islam un ciment unificateur au-dessus des appartenances claniques.",
      },
      {
        id: "course-perso-12-samori-toure-quiz-3",
        question: "Qu'est-ce qui distinguait son armement de celui des autres pouvoirs africains de l'époque ?",
        options: ["Il possédait de l'artillerie lourde", "Il disposait d'ateliers capables de réparer et de fabriquer des fusils", "Il avait acheté des navires de guerre", "Il n'utilisait que des armes traditionnelles"],
        correctIndex: 1,
        explanation: "Samori achetait des fusils à répétition en Sierra Leone et entretenait des ateliers de forgerons capables de les réparer, d'en copier et d'en fabriquer — une autonomie militaire rare.",
      },
      {
        id: "course-perso-12-samori-toure-quiz-4",
        question: "En quoi consiste la manœuvre entreprise à partir de 1892 ?",
        options: ["Le déplacement de l'empire entier vers l'est", "Une alliance militaire avec les Britanniques", "La construction d'une ligne de forts sur le Niger", "Le partage de l'empire entre ses fils"],
        correctIndex: 0,
        explanation: "Comprenant qu'il ne tiendrait pas sur ses bases d'origine, il entreprit de déplacer l'empire entier vers l'est, vers la région de Kong — une reconstruction qui entraîna razzias et destructions, et qui échoua.",
      },
      {
        id: "course-perso-12-samori-toure-quiz-5",
        question: "Combien de temps a duré sa résistance armée face à la France ?",
        options: ["Environ trois ans", "Environ seize ans", "Environ trente ans", "Quelques mois"],
        correctIndex: 1,
        explanation: "Le conflit s'étend de 1882 à sa capture en 1898, soit seize années — l'une des plus longues résistances à la conquête coloniale sur le continent.",
      },
    ],
  },
  {
    id: "course-perso-13-taytu-betul",
    categoryId: "perso",
    emoji: "👸",
    title: "Taytu Betul, l'impératrice d'Éthiopie",
    description: "Elle déchira un traité, mena ses troupes à Adoua et fonda Addis-Abeba. Sans Taytu Betul, l'Éthiopie ne serait peut-être pas le seul pays d'Afrique à n'avoir jamais été colonisé.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-13-taytu-betul-lesson-1",
        title: "L'ascension d'une aristocrate",
        blocks: [
          {
            type: "paragraphe",
            text: "**Taytu Betul** naît vers 1851 dans le Semien, au nord de l'Éthiopie, dans une famille de la haute aristocratie.",
          },
          {
            type: "frise",
            evenements: [
              { date: "v. 1851", texte: "Naissance dans le Semien" },
              { date: "1883", texte: "Mariage avec Ménélik II" },
              { date: "1889", texte: "Elle devient impératrice" },
              { date: "1896", texte: "Victoire d'Adoua" },
            ],
          },
          {
            type: "paragraphe",
            text: "Elle est mariée plusieurs fois avant d'épouser en 1883 le roi du Choa, futur **Ménélik II**. Instruite, lettrée, elle connaît les manœuvres de cour et ne se contente pas du rôle d'épouse : elle gouverne avec lui.",
          },
          {
            type: "aRetenir",
            points: [
              "Née vers **1851** dans le Semien",
              "Elle épouse **Ménélik II** en 1883",
              "Impératrice dès 1889, et pleinement au pouvoir",
            ],
          },
        ],
      },
      {
        id: "course-perso-13-taytu-betul-lesson-2",
        title: "Le traité de Wuchale et le piège des deux versions",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1889, l'Éthiopie signe avec l'Italie le traité de **Wuchale**. Les deux versions du texte ne disent pas la même chose.",
          },
          {
            type: "chiffreCle",
            valeur: "1889",
            legende: "le traité de Wuchale et ses deux versions",
          },
          {
            type: "paragraphe",
            text: "L'article 17 amharique laisse l'Éthiopie libre de traiter avec les puissances étrangères. La version italienne en fait une obligation, donc un **protectorat**. **Taytu** est parmi les premiers à dénoncer le piège, et elle refuse tout compromis là où d'autres conseillent la prudence.",
          },
          {
            type: "aRetenir",
            points: [
              "Le traité de **Wuchale** date de 1889",
              "Les versions amharique et italienne divergent",
              "**Taytu** dénonce le piège et refuse de céder",
            ],
          },
        ],
      },
      {
        id: "course-perso-13-taytu-betul-lesson-3",
        title: "Adoua, 1896",
        blocks: [
          {
            type: "paragraphe",
            text: "Le 1er mars 1896, à **Adoua**, l'armée éthiopienne écrase les forces italiennes. C'est la seule victoire décisive d'un État africain contre une puissance coloniale.",
          },
          {
            type: "image",
            alt: "Gravure d'époque représentant l'impératrice Taytu Betul.",
            legende: "L'impératrice Taytu Betul, gravure du Petit Journal",
            credit: "H. Meyer, Le Petit Journal, domaine public",
          },
          {
            type: "paragraphe",
            text: "**Taytu** commande en personne un contingent et joue un rôle décisif au siège de Mekele, en coupant l'eau à la garnison italienne. Adoua garantit l'indépendance éthiopienne pour quarante ans.",
          },
          {
            type: "aRetenir",
            points: [
              "Victoire décisive d'**Adoua**, le 1er mars 1896",
              "Taytu commande un contingent et coupe l'eau à Mekele",
              "L'indépendance éthiopienne est préservée",
            ],
          },
        ],
      },
      {
        id: "course-perso-13-taytu-betul-lesson-4",
        title: "La fondation d'Addis-Abeba",
        blocks: [
          {
            type: "paragraphe",
            text: "**Taytu Betul** choisit l'emplacement de la nouvelle capitale et lui donne son nom : Addis-Abeba, « la fleur nouvelle ».",
          },
          {
            type: "chiffreCle",
            valeur: "Addis-Abeba",
            legende: "« la fleur nouvelle », en amharique",
          },
          {
            type: "paragraphe",
            text: "La cour siégeait à Entoto, sur les hauteurs, où le froid et le manque de bois épuisaient tout le monde. Taytu obtient le déplacement de la cour vers les sources chaudes situées en contrebas, puis fait planter des **eucalyptus** pour fournir du combustible.",
          },
          {
            type: "aRetenir",
            points: [
              "Elle nomme et choisit **Addis-Abeba**",
              "Le déplacement depuis Entoto vient d'elle",
              "Les **eucalyptus** plantés résolvent le manque de bois",
            ],
          },
        ],
      },
      {
        id: "course-perso-13-taytu-betul-lesson-5",
        title: "La régence, l'écartement, l'héritage",
        blocks: [
          {
            type: "paragraphe",
            text: "Quand Ménélik tombe malade, **Taytu** assure la régence. Elle place ses proches et gouverne — ce que la cour ne lui pardonne pas.",
          },
          {
            type: "reperes",
            items: [
              { label: "1909-1910", valeur: "Régence pendant la maladie de Ménélik" },
              { label: "1910", valeur: "La noblesse l'écarte du pouvoir" },
              { label: "1918", valeur: "Mort à Entoto" },
            ],
          },
          {
            type: "paragraphe",
            text: "En 1910, la noblesse la contraint à se retirer. Elle finit sa vie à **Entoto**, là même d'où elle avait fait descendre la capitale, et meurt en 1918. L'Éthiopie la tient aujourd'hui pour l'une des grandes figures de sa souveraineté.",
          },
          {
            type: "aRetenir",
            points: [
              "Régente pendant la maladie de **Ménélik**",
              "Écartée par la noblesse en **1910**",
              "Morte en 1918 à Entoto",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-13-taytu-betul-quiz-1",
        question: "De quel souverain éthiopien Taytu Betul était-elle l'épouse ?",
        options: ["Haile Selassie", "Menelik II", "Théodoros II", "Yohannes IV"],
        correctIndex: 1,
        explanation: "Elle épouse en 1883 Menelik, alors roi du Choa, qui devient empereur en 1889 ; elle est alors couronnée impératrice.",
      },
      {
        id: "course-perso-13-taytu-betul-quiz-2",
        question: "Quel était le problème du traité de Wuchale signé en 1889 ?",
        options: ["Il n'avait jamais été ratifié par l'Éthiopie", "Ses versions amharique et italienne ne disaient pas la même chose", "Il cédait le Tigré à l'Italie", "Il avait été signé par un émissaire sans mandat"],
        correctIndex: 1,
        explanation: "La version amharique donnait à l'Éthiopie la faculté de recourir aux bons offices de l'Italie ; la version italienne en faisait une obligation, transformant le pays en protectorat.",
      },
      {
        id: "course-perso-13-taytu-betul-quiz-3",
        question: "Quelle est la portée historique de la bataille d'Adoua, en 1896 ?",
        options: ["C'est la première défaite décisive d'une puissance européenne face à une armée africaine", "C'est la dernière bataille livrée par l'Empire ottoman en Afrique", "Elle marque la fin de la traite en mer Rouge", "Elle ouvre la conquête italienne de l'Éthiopie"],
        correctIndex: 0,
        explanation: "La victoire d'Adoua contraignit l'Italie à reconnaître l'indépendance pleine et entière de l'Éthiopie, seul pays du continent à n'avoir jamais été colonisé durablement.",
      },
      {
        id: "course-perso-13-taytu-betul-quiz-4",
        question: "Que signifie le nom « Addis-Abeba », donné par Taytu ?",
        options: ["La ville des sources", "La nouvelle fleur", "La cité haute", "La porte du Sud"],
        correctIndex: 1,
        explanation: "Addis-Abeba signifie « la nouvelle fleur » en amharique. Taytu choisit le site, obtint d'y bâtir une résidence, et la ville se développa autour à partir de 1886.",
      },
      {
        id: "course-perso-13-taytu-betul-quiz-5",
        question: "Quelle organisation continentale a aujourd'hui son siège dans la ville fondée par Taytu ?",
        options: ["La CEDEAO", "La Banque africaine de développement", "L'Union africaine", "La Ligue arabe"],
        correctIndex: 2,
        explanation: "Addis-Abeba est devenue le siège de l'Organisation de l'unité africaine (1963) puis de l'Union africaine — le centre politique du continent.",
      },
    ],
  },
  {
    id: "course-perso-14-yaa-asantewaa",
    categoryId: "perso",
    emoji: "🪑",
    title: "Yaa Asantewaa, reine-mère d'Asante",
    description: "« Si vous, les hommes, ne voulez pas avancer, alors nous, les femmes, nous le ferons. » En 1900, une reine-mère d'une soixantaine d'années prit la tête de la dernière guerre asante contre l'Empire britannique.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-14-yaa-asantewaa-lesson-1",
        title: "La confédération asante et la reine-mère",
        blocks: [
          {
            type: "paragraphe",
            text: "Chez les **Asante**, au centre de l'actuel Ghana, la reine-mère n'est pas l'épouse du roi. C'est une fonction politique à part entière.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XVIIe s.", texte: "Fondation de la confédération asante" },
              { date: "1874", texte: "Les Britanniques pillent Kumasi" },
              { date: "1896", texte: "Le roi Prempeh Ier est déporté" },
              { date: "1900", texte: "Guerre du Tabouret d'or" },
            ],
          },
          {
            type: "paragraphe",
            text: "L'**ohemaa**, la reine-mère, désigne les candidats au trône, siège au conseil et peut s'opposer au roi. **Yaa Asantewaa** occupe cette fonction à Ejisu, où elle a été nommée par son frère.",
          },
          {
            type: "aRetenir",
            points: [
              "Chez les Asante, la **reine-mère** est une fonction politique",
              "Elle désigne les candidats au trône et siège au conseil",
              "**Yaa Asantewaa** est reine-mère d'Ejisu",
            ],
          },
        ],
      },
      {
        id: "course-perso-14-yaa-asantewaa-lesson-2",
        title: "Le Tabouret d'or et l'exil du roi",
        blocks: [
          {
            type: "paragraphe",
            text: "Le **Tabouret d'or** n'est pas un trône : personne ne s'y assoit, pas même le roi. Il contient l'âme de la nation asante.",
          },
          {
            type: "chiffreCle",
            valeur: "Sika Dwa Kofi",
            legende: "le Tabouret d'or, âme de la nation asante",
          },
          {
            type: "paragraphe",
            text: "En 1896, les Britanniques déportent le roi **Prempeh Ier** aux Seychelles. Quatre ans plus tard, leur gouverneur exige publiquement de s'asseoir sur le Tabouret d'or. La demande est une humiliation que le conseil ne peut pas accepter.",
          },
          {
            type: "aRetenir",
            points: [
              "Le **Tabouret d'or** contient l'âme de la nation",
              "Le roi **Prempeh Ier** est déporté en 1896",
              "Le gouverneur britannique exige de s'y asseoir",
            ],
          },
        ],
      },
      {
        id: "course-perso-14-yaa-asantewaa-lesson-3",
        title: "1900 : la guerre du Tabouret d'or",
        blocks: [
          {
            type: "paragraphe",
            text: "Au conseil, les chefs hésitent. **Yaa Asantewaa** prend la parole et déclare que si les hommes ne se battent pas, les femmes le feront.",
          },
          {
            type: "chiffreCle",
            valeur: "1900",
            legende: "la guerre du Tabouret d'or",
          },
          {
            type: "paragraphe",
            text: "Elle prend aussitôt la tête du soulèvement : c'est la seule fois de leur histoire qu'une femme dirige une armée asante. Plusieurs milliers de combattants venus de tout le pays assiègent le fort britannique de **Kumasi** pendant plusieurs mois.",
          },
          {
            type: "aRetenir",
            points: [
              "**Yaa Asantewaa** prend la tête du soulèvement",
              "La seule femme à avoir commandé une armée asante",
              "Le fort de **Kumasi** est assiégé plusieurs mois",
            ],
          },
        ],
      },
      {
        id: "course-perso-14-yaa-asantewaa-lesson-4",
        title: "La défaite et la déportation",
        blocks: [
          {
            type: "paragraphe",
            text: "Les Britanniques font venir des renforts de toute la région. Le siège est brisé, et la résistance asante cède peu à peu.",
          },
          {
            type: "frise",
            evenements: [
              { date: "Mars 1900", texte: "Début du siège du fort de Kumasi" },
              { date: "Juillet 1900", texte: "Arrivée des renforts britanniques" },
              { date: "1901", texte: "Le pays asante est annexé" },
            ],
          },
          {
            type: "paragraphe",
            text: "**Yaa Asantewaa** est capturée puis déportée aux **Seychelles**, où le roi Prempeh se trouve déjà. Elle y meurt en 1921, sans avoir revu son pays. Le Tabouret d'or, lui, n'a jamais été pris : il avait été caché.",
          },
          {
            type: "aRetenir",
            points: [
              "Le siège est brisé par les renforts britanniques",
              "**Yaa Asantewaa** est déportée aux Seychelles",
              "Le **Tabouret d'or** n'a jamais été capturé",
            ],
          },
        ],
      },
      {
        id: "course-perso-14-yaa-asantewaa-lesson-5",
        title: "Postérité",
        blocks: [
          {
            type: "paragraphe",
            text: "Au Ghana, **Yaa Asantewaa** est une figure nationale : écoles, chants et cérémonies portent son nom.",
          },
          {
            type: "reperes",
            items: [
              { label: "Fonction", valeur: "Reine-mère d'Ejisu" },
              { label: "Fait d'armes", valeur: "Direction de la guerre de 1900" },
              { label: "Mémoire", valeur: "Écoles, chants et musée à Ejisu" },
            ],
          },
          {
            type: "paragraphe",
            text: "Sa guerre a été la dernière grande résistance armée du pays asante face aux Britanniques. Elle est devenue le symbole d'une **autorité féminine** que les Britanniques n'avaient pas su voir, persuadés comme ils l'étaient que le pouvoir asante ne se jouait qu'entre hommes.",
          },
          {
            type: "aRetenir",
            points: [
              "Figure nationale au **Ghana**",
              "La dernière grande résistance armée asante",
              "Symbole d'une **autorité féminine** longtemps ignorée",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-14-yaa-asantewaa-quiz-1",
        question: "Dans quel pays actuel se trouvait la confédération asante ?",
        options: ["Au Nigeria", "Au Ghana", "Au Bénin", "Au Cameroun"],
        correctIndex: 1,
        explanation: "La confédération asante, dont la capitale était Kumasi, se situait dans l'actuel Ghana.",
      },
      {
        id: "course-perso-14-yaa-asantewaa-quiz-2",
        question: "Quelle fonction Yaa Asantewaa occupait-elle ?",
        options: ["Épouse de l'Asantehene", "Grande prêtresse du Tabouret d'or", "Reine-mère (Ohemaa) d'Ejisu", "Gouverneure de la Gold Coast"],
        correctIndex: 2,
        explanation: "Elle était Ohemaa, reine-mère d'Ejisu — la plus haute autorité féminine du lignage royal, qui désignait les candidats au trône et siégeait au conseil. Ce n'est pas l'épouse du roi.",
      },
      {
        id: "course-perso-14-yaa-asantewaa-quiz-3",
        question: "Que représente le Tabouret d'or (Sika Dwa Kofi) ?",
        options: ["Le trésor de guerre de la confédération", "L'âme de la nation asante", "Le siège réservé aux ambassadeurs", "Un symbole de la richesse en or de Kumasi"],
        correctIndex: 1,
        explanation: "Selon la tradition, le Tabouret d'or descendit du ciel sur les genoux du fondateur Osei Tutu et contient l'âme de la nation asante. Nul ne s'y assoit, pas même l'Asantehene.",
      },
      {
        id: "course-perso-14-yaa-asantewaa-quiz-4",
        question: "Quel acte du gouverneur britannique déclencha la guerre de 1900 ?",
        options: ["Il exigea qu'on lui livre le Tabouret d'or pour s'y asseoir", "Il fit incendier le palais de Kumasi", "Il doubla l'impôt sur l'or", "Il interdit la langue twi"],
        correctIndex: 0,
        explanation: "En mars 1900, le gouverneur Frederick Hodgson exigea la remise du Tabouret d'or pour s'y asseoir en signe de souveraineté, ignorant totalement ce que cet objet représentait.",
      },
      {
        id: "course-perso-14-yaa-asantewaa-quiz-5",
        question: "Le Tabouret d'or a-t-il finalement été remis aux Britanniques ?",
        options: ["Oui, à la fin du siège de Kumasi", "Oui, contre la libération de Yaa Asantewaa", "Non, il fut caché dans la forêt et ne fut jamais livré", "Non, il avait été détruit lors de la prise de Kumasi en 1896"],
        correctIndex: 2,
        explanation: "Malgré la défaite militaire et la déportation de Yaa Asantewaa aux Seychelles, le Tabouret d'or ne fut jamais remis : caché dans la forêt, il ne fut redécouvert que des années plus tard.",
      },
    ],
  },
  {
    id: "course-perso-15-sarraounia",
    categoryId: "perso",
    emoji: "🏹",
    title: "Sarraounia Mangou, la reine de Lougou",
    description: "En 1899, dans le sud de l'actuel Niger, une reine résista à la plus violente colonne coloniale que la France ait envoyée en Afrique de l'Ouest. Son nom : Sarraounia.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-15-sarraounia-lesson-1",
        title: "Le pays azna et la fonction de sarraounia",
        blocks: [
          {
            type: "paragraphe",
            text: "Chez les **Azna**, dans l'actuel Niger, « sarraounia » est un titre : celui de la reine-prêtresse qui gouverne Lougou.",
          },
          {
            type: "frise",
            evenements: [
              { date: "XVIIe s.", texte: "Installation des Azna dans la région" },
              { date: "XIXe s.", texte: "Pression des États peuls voisins" },
              { date: "1899", texte: "Passage de la colonne Voulet-Chanoine" },
              { date: "Avril 1899", texte: "Bataille de Lougou" },
            ],
          },
          {
            type: "paragraphe",
            text: "Les Azna ont refusé l'islamisation et conservé leurs cultes. La **sarraounia** cumule l'autorité politique et la fonction religieuse : elle commande et elle intercède. **Mangou** occupe cette charge à la fin du XIXe siècle.",
          },
          {
            type: "aRetenir",
            points: [
              "« **Sarraounia** » est un titre, pas un prénom",
              "Les **Azna** ont conservé leurs cultes propres",
              "La fonction est à la fois politique et religieuse",
            ],
          },
        ],
      },
      {
        id: "course-perso-15-sarraounia-lesson-2",
        title: "Résister sur deux fronts",
        blocks: [
          {
            type: "paragraphe",
            text: "À la fin du XIXe siècle, **Lougou** est prise entre deux pressions : les États peuls islamisés au nord, les colonnes françaises qui remontent du sud.",
          },
          {
            type: "chiffreCle",
            valeur: "Lougou",
            legende: "la cité que gouverne la sarraounia",
          },
          {
            type: "paragraphe",
            text: "Refuser l'islam avait déjà valu aux Azna des décennies de conflits avec leurs voisins. La cité s'est fortifiée, entraînée, habituée au siège et aux longues résistances. Quand les Français arrivent à leur tour, **Sarraounia Mangou** refuse également de se soumettre.",
          },
          {
            type: "aRetenir",
            points: [
              "Pression des États **peuls** au nord",
              "Avancée des colonnes françaises au sud",
              "Lougou refuse de se soumettre aux deux",
            ],
          },
        ],
      },
      {
        id: "course-perso-15-sarraounia-lesson-3",
        title: "La colonne Voulet-Chanoine",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1899, la mission **Voulet-Chanoine** traverse le Niger pour relier les possessions françaises. Elle laisse derrière elle une traînée de villages brûlés.",
          },
          {
            type: "reperes",
            items: [
              { label: "Objectif", valeur: "Relier le Niger au lac Tchad" },
              { label: "Méthode", valeur: "Villages brûlés, exécutions massives" },
              { label: "Fin", valeur: "Les deux officiers tués par leurs hommes" },
            ],
          },
          {
            type: "paragraphe",
            text: "Les exactions sont telles que Paris envoie un officier pour relever les deux capitaines. Voulet et Chanoine le font abattre, puis sont tués par leurs propres **tirailleurs**. L'affaire deviendra l'un des scandales les mieux documentés de la conquête.",
          },
          {
            type: "aRetenir",
            points: [
              "La mission **Voulet-Chanoine** traverse le Niger en 1899",
              "Villages brûlés et exécutions massives",
              "Les deux officiers sont tués par leurs **tirailleurs**",
            ],
          },
        ],
      },
      {
        id: "course-perso-15-sarraounia-lesson-4",
        title: "La bataille de Lougou, avril 1899",
        blocks: [
          {
            type: "paragraphe",
            text: "En avril 1899, la colonne arrive devant **Lougou**. La sarraounia a fait évacuer une partie de la population et préparé la défense.",
          },
          {
            type: "chiffreCle",
            valeur: "Avril 1899",
            legende: "la bataille de Lougou",
          },
          {
            type: "paragraphe",
            text: "Le combat est violent. La cité tombe, mais **Sarraounia Mangou** et ses combattants se replient dans la brousse au lieu de se rendre. La colonne reprend sa route sans avoir obtenu la soumission qu'elle exigeait.",
          },
          {
            type: "aRetenir",
            points: [
              "La bataille de **Lougou** a lieu en avril 1899",
              "La cité tombe, mais la reine ne se rend pas",
              "Elle se **replie** dans la brousse avec ses combattants",
            ],
          },
        ],
      },
      {
        id: "course-perso-15-sarraounia-lesson-5",
        title: "Du récit oral au film",
        blocks: [
          {
            type: "paragraphe",
            text: "L'histoire de **Sarraounia** a d'abord vécu par la parole, transmise à Lougou et dans les villages azna.",
          },
          {
            type: "reperes",
            items: [
              { label: "1980", valeur: "Roman d'Abdoulaye Mamani" },
              { label: "1986", valeur: "Film de Med Hondo" },
              { label: "Aujourd'hui", valeur: "Figure nationale nigérienne" },
            ],
          },
          {
            type: "paragraphe",
            text: "L'écrivain nigérien **Abdoulaye Mamani** en tire un roman en 1980, que le cinéaste mauritanien **Med Hondo** porte à l'écran en 1986. Le film la fait connaître bien au-delà du Niger et lui donne une seconde vie.",
          },
          {
            type: "aRetenir",
            points: [
              "Une histoire d'abord portée par la **tradition orale**",
              "Le roman d'**Abdoulaye Mamani** paraît en 1980",
              "Le film de Med Hondo la fait connaître en 1986",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-15-sarraounia-quiz-1",
        question: "Que désigne le mot « sarraounia » ?",
        options: ["Une reine, en langue haoussa", "Une prêtresse de la pluie", "Un village fortifié", "Un titre militaire peul"],
        correctIndex: 0,
        explanation: "« Sarraounia » signifie reine en haoussa. Il s'agit d'une fonction héréditaire à la fois politique et religieuse, tenue par des femmes depuis des générations chez les Azna.",
      },
      {
        id: "course-perso-15-sarraounia-quiz-2",
        question: "Quelle particularité religieuse caractérisait la communauté azna de Lougou ?",
        options: ["Elle était majoritairement chrétienne", "Elle était restée fidèle aux religions traditionnelles", "Elle pratiquait un islam soufi propre à la région", "Elle avait adopté le judaïsme"],
        correctIndex: 1,
        explanation: "Les Azna étaient restés fidèles aux religions traditionnelles alors que la région s'islamisait, ce qui définissait leur identité politique et leur avait valu de repousser plusieurs offensives venues de Sokoto.",
      },
      {
        id: "course-perso-15-sarraounia-quiz-3",
        question: "Comment s'appelait la colonne militaire française affrontée en 1899 ?",
        options: ["La colonne Faidherbe", "La mission Marchand", "La colonne Voulet-Chanoine", "La mission Foureau-Lamy"],
        correctIndex: 2,
        explanation: "La mission Afrique centrale, confiée aux capitaines Voulet et Chanoine, devint tristement célèbre pour les razzias et massacres de civils qui provoquèrent un scandale jusqu'à Paris.",
      },
      {
        id: "course-perso-15-sarraounia-quiz-4",
        question: "Quelle fut l'issue de la bataille de Lougou pour Sarraounia et les siens ?",
        options: ["Ils furent capturés et déportés", "Ils repoussèrent définitivement la colonne", "Ils se replièrent en bon ordre et poursuivirent le harcèlement", "Ils signèrent un traité de protectorat"],
        correctIndex: 2,
        explanation: "Incapables de tenir un choc frontal, les Azna se replièrent dans la forêt sans être anéantis ni capturés, et continuèrent le harcèlement. La colonne quitta Lougou sans avoir soumis la communauté.",
      },
      {
        id: "course-perso-15-sarraounia-quiz-5",
        question: "Quelles œuvres ont fait de Sarraounia une figure panafricaine ?",
        options: ["Un roman d'Abdoulaye Mamani et un film de Med Hondo", "Une pièce de Wole Soyinka et un opéra malien", "Une chanson de Miriam Makeba", "Une bande dessinée éditée par l'Union africaine"],
        correctIndex: 0,
        explanation: "Le roman Sarraounia d'Abdoulaye Mamani (1980) et le film de Med Hondo (1986), Étalon d'or de Yennenga au FESPACO, ont largement porté sa mémoire au-delà du Niger.",
      },
    ],
  },
  {
    id: "course-perso-16-du-bois",
    categoryId: "perso",
    emoji: "🌍",
    title: "W. E. B. Du Bois et les congrès panafricains",
    description: "Il a organisé les congrès qui ont donné au panafricanisme sa forme politique, et il est mort au Ghana la veille d'une grande marche à Washington. Du Bois, ou le fil qui relie la diaspora au continent.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-16-du-bois-lesson-1",
        title: "Un intellectuel noir dans l'Amérique de la ségrégation",
        blocks: [
          {
            type: "paragraphe",
            text: "W. E. B. **Du Bois** naît en 1868 dans le Massachusetts, trois ans après l'abolition de l'esclavage aux États-Unis.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1868", texte: "Naissance à Great Barrington" },
              { date: "1895", texte: "Premier doctorat noir de Harvard" },
              { date: "1903", texte: "The Souls of Black Folk" },
              { date: "1963", texte: "Mort à Accra, au Ghana" },
            ],
          },
          {
            type: "paragraphe",
            text: "Il grandit dans un Nord où la ségrégation existe sans les lois du Sud. En 1895, il devient le premier Afro-Américain à obtenir un **doctorat** à Harvard. Il choisit la sociologie pour établir par les faits ce que le pays préfère ignorer.",
          },
          {
            type: "aRetenir",
            points: [
              "Né en **1868** dans le Massachusetts",
              "Premier Afro-Américain **docteur** de Harvard, en 1895",
              "Il choisit la sociologie pour établir les faits",
            ],
          },
        ],
      },
      {
        id: "course-perso-16-du-bois-lesson-2",
        title: "The Souls of Black Folk et la double conscience",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1903, **Du Bois** publie The Souls of Black Folk, un recueil d'essais qui change la manière de poser la question raciale.",
          },
          {
            type: "image",
            alt: "Portrait photographique de W. E. B. Du Bois, en costume.",
            legende: "W. E. B. Du Bois en 1907",
            credit: "James E. Purdy, domaine public, via Wikimedia Commons",
          },
          {
            type: "paragraphe",
            text: "Il y forge la notion de **double conscience** : l'expérience de se voir toujours à travers le regard d'un autre monde, qui vous méprise. Le livre mêle sociologie, autobiographie et musique — chaque chapitre s'ouvre sur un chant spirituel.",
          },
          {
            type: "aRetenir",
            points: [
              "« The Souls of Black Folk » paraît en **1903**",
              "Il y forge la notion de **double conscience**",
              "Sociologie, autobiographie et chants spirituels mêlés",
            ],
          },
        ],
      },
      {
        id: "course-perso-16-du-bois-lesson-3",
        title: "Les congrès panafricains",
        blocks: [
          {
            type: "paragraphe",
            text: "Dès 1919, **Du Bois** organise à Paris le premier d'une série de congrès qui réunissent Africains, Antillais et Afro-Américains.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1919", texte: "Premier congrès panafricain, à Paris" },
              { date: "1921", texte: "Congrès de Londres, Bruxelles et Paris" },
              { date: "1945", texte: "Congrès de Manchester" },
              { date: "1957", texte: "Indépendance du Ghana" },
            ],
          },
          {
            type: "paragraphe",
            text: "Ces **congrès panafricains** réclament d'abord des réformes, puis l'indépendance. Celui de **Manchester**, en 1945, réunit Nkrumah et Kenyatta : les futurs dirigeants des indépendances s'y rencontrent et s'y accordent sur un programme.",
          },
          {
            type: "aRetenir",
            points: [
              "Premier congrès **panafricain** à Paris, en 1919",
              "Celui de **Manchester** (1945) réunit les futurs dirigeants",
              "On y passe de la réforme à l'exigence d'indépendance",
            ],
          },
        ],
      },
      {
        id: "course-perso-16-du-bois-lesson-4",
        title: "Le Ghana, terme du voyage",
        blocks: [
          {
            type: "paragraphe",
            text: "En 1961, à quatre-vingt-treize ans, **Du Bois** quitte les États-Unis pour le **Ghana**, à l'invitation de Kwame Nkrumah.",
          },
          {
            type: "chiffreCle",
            valeur: "1961",
            legende: "il s'installe au Ghana, à 93 ans",
          },
          {
            type: "paragraphe",
            text: "Il vient y diriger un projet d'Encyclopedia Africana, une somme sur l'Afrique écrite par des Africains. Il prend la nationalité ghanéenne et meurt à **Accra** le 27 août 1963, la veille exacte de la grande marche sur Washington.",
          },
          {
            type: "aRetenir",
            points: [
              "Il s'installe au **Ghana** en 1961, invité par Nkrumah",
              "Il y dirige le projet d'**Encyclopedia Africana**",
              "Mort à Accra la veille de la marche sur Washington",
            ],
          },
        ],
      },
      {
        id: "course-perso-16-du-bois-lesson-5",
        title: "De la diaspora à l'Union africaine",
        blocks: [
          {
            type: "paragraphe",
            text: "La phrase qui ouvre The Souls of Black Folk a traversé le siècle qu'elle annonçait.",
          },
          {
            type: "citation",
            texte: "Le problème du XXe siècle est le problème de la ligne de partage des couleurs.",
            auteur: "W. E. B. Du Bois, The Souls of Black Folk, 1903",
          },
          {
            type: "paragraphe",
            text: "Du panafricanisme des congrès à l'**Union africaine**, la filiation est directe : les hommes qui ont fait les indépendances s'étaient rencontrés à **Manchester**. Du Bois n'a pas gouverné, mais il a fourni le cadre intellectuel de ceux qui l'ont fait.",
          },
          {
            type: "aRetenir",
            points: [
              "Sa phrase de **1903** a défini le siècle",
              "Les congrès panafricains mènent aux **indépendances**",
              "Une filiation directe jusqu'à l'Union africaine",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-16-du-bois-quiz-1",
        question: "Quelle distinction universitaire Du Bois obtient-il en 1895 ?",
        options: ["Il est le premier Afro-Américain docteur de Harvard", "Il est le premier Afro-Américain professeur à Berlin", "Il reçoit le prix Nobel de littérature", "Il fonde la première université noire des États-Unis"],
        correctIndex: 0,
        explanation: "En 1895, Du Bois devient le premier Afro-Américain à obtenir un doctorat de Harvard, avec une thèse sur la suppression de la traite négrière aux États-Unis.",
      },
      {
        id: "course-perso-16-du-bois-quiz-2",
        question: "Que désigne le concept de « double conscience » ?",
        options: ["La coexistence de deux langues chez les Afro-Américains", "Le fait de se voir à travers le regard d'un monde qui vous méprise", "La distinction entre conscience politique et conscience religieuse", "L'alternance entre militantisme et travail universitaire"],
        correctIndex: 1,
        explanation: "Formulé dans The Souls of Black Folk (1903), le concept désigne l'expérience de porter deux appartenances inconciliables et de se percevoir constamment à travers le regard méprisant d'autrui.",
      },
      {
        id: "course-perso-16-du-bois-quiz-3",
        question: "Quel congrès panafricain marque le passage de la revendication de réformes à l'exigence d'indépendance ?",
        options: ["Le congrès de Paris, en 1919", "Le congrès de Londres, en 1921", "Le congrès de Manchester, en 1945", "Le congrès de New York, en 1927"],
        correctIndex: 2,
        explanation: "Au cinquième congrès panafricain, à Manchester en 1945, Du Bois siège aux côtés de Nkrumah, Kenyatta et Padmore : on n'y demande plus des réformes, on y exige l'indépendance.",
      },
      {
        id: "course-perso-16-du-bois-quiz-4",
        question: "Dans quel pays Du Bois s'est-il installé à la fin de sa vie, et à l'invitation de qui ?",
        options: ["Au Ghana, invité par Kwame Nkrumah", "En Éthiopie, invité par Haile Selassie", "En Tanzanie, invité par Julius Nyerere", "En Guinée, invité par Sékou Touré"],
        correctIndex: 0,
        explanation: "En 1961, à quatre-vingt-treize ans, il s'installe à Accra à l'invitation de Nkrumah pour diriger le projet d'Encyclopaedia Africana. Il y meurt le 27 août 1963.",
      },
      {
        id: "course-perso-16-du-bois-quiz-5",
        question: "Comment l'Union africaine désigne-t-elle aujourd'hui la diaspora africaine ?",
        options: ["Le partenaire historique", "La sixième région du continent", "Le septième pilier de l'Agenda 2063", "L'observateur permanent"],
        correctIndex: 1,
        explanation: "Héritière de l'OUA fondée en 1963, l'Union africaine considère la diaspora comme une composante à part entière du projet continental, qu'elle désigne comme sa « sixième région ».",
      },
    ],
  },
  {
    id: "course-perso-17-cheikh-anta-diop",
    categoryId: "perso",
    emoji: "🔬",
    title: "Cheikh Anta Diop, réécrire l'histoire de l'Afrique",
    description: "Physicien, historien, linguiste : il a passé sa vie à démontrer que l'Afrique avait une histoire, et que l'Égypte antique en faisait partie. Une œuvre discutée, mais qui a changé le regard d'un continent sur lui-même.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-17-cheikh-anta-diop-lesson-1",
        title: "De Diourbel à la Sorbonne",
        blocks: [
          { type: "paragraphe", text: "Cheikh Anta Diop naît en 1923 à Caytu, près de Diourbel, au Sénégal, dans une famille wolof de tradition mouride. Il suit d'abord l'enseignement coranique, puis l'école française, et se révèle un élève exceptionnel. En 1946, il part à Paris. Il y entreprend un parcours d'une ampleur inhabituelle : licence de philosophie, puis études de physique nucléaire — il travaille au laboratoire de chimie nucléaire du Collège de France, sous la direction de Frédéric Joliot-Curie, gendre de Marie Curie — tout en se formant à la linguistique, à l'histoire et à l'égyptologie. Ce cumul n'est pas de la dispersion : il correspond à un projet précis. Diop est convaincu que l'histoire africaine ne pourra être établie qu'en mobilisant les sciences dures — physique, chimie, biologie — à côté des sciences humaines, parce que les preuves matérielles résistent mieux aux préjugés que les interprétations. Toute sa méthode découle de cette conviction." },
        ],
      },
      {
        id: "course-perso-17-cheikh-anta-diop-lesson-2",
        title: "Nations nègres et culture",
        blocks: [
          { type: "paragraphe", text: "Sa thèse de doctorat, soutenue à la Sorbonne, est d'abord refusée : le jury juge ses positions trop hétérodoxes. Il en publie le contenu en 1954 sous le titre Nations nègres et culture, livre qui fait immédiatement scandale et devient l'un des ouvrages les plus lus de la pensée africaine du XXᵉ siècle. Sa thèse centrale : l'Égypte antique était une civilisation négro-africaine, et elle constitue pour l'Afrique noire ce que la Grèce et Rome représentent pour l'Europe — une matrice culturelle, linguistique et scientifique. Il s'appuie sur des arguments d'anthropologie physique, sur les témoignages d'auteurs grecs anciens, sur des rapprochements linguistiques entre l'égyptien ancien et des langues africaines, en particulier le wolof, et sur des analyses de la mélanine des momies qu'il conduira plus tard dans son laboratoire. Son objectif dépasse l'érudition : il veut rendre aux Africains une antériorité historique que la science coloniale leur déniait. Il finit par obtenir son doctorat en 1960, avec un jury différent." },
        ],
      },
      {
        id: "course-perso-17-cheikh-anta-diop-lesson-3",
        title: "Le colloque du Caire, 1974",
        blocks: [
          { type: "paragraphe", text: "Le moment décisif est le colloque international organisé par l'UNESCO au Caire en 1974, consacré au peuplement de l'Égypte ancienne et au déchiffrement de l'écriture méroïtique, dans le cadre de la préparation de l'Histoire générale de l'Afrique. Diop y confronte ses thèses à celles des égyptologues du monde entier, aux côtés de son compatriote Théophile Obenga. Le rapport final du colloque est mesuré et honnête : il constate que la démonstration de Diop et d'Obenga n'a pas emporté l'adhésion générale, mais il souligne que leurs communications ont été rigoureusement préparées, qu'elles ont profondément renouvelé les termes du débat, et que les égyptologues présents n'avaient pas anticipé l'ampleur de leur argumentation. C'est un fait notable, souvent déformé dans les deux sens : Diop n'a ni triomphé ni été disqualifié. Il a obligé une discipline à examiner sérieusement une question qu'elle écartait." },
        ],
      },
      {
        id: "course-perso-17-cheikh-anta-diop-lesson-4",
        title: "Sa contribution à l'Histoire générale de l'Afrique",
        blocks: [
          { type: "paragraphe", text: "L'UNESCO ne l'a pas tenu à l'écart, au contraire : Cheikh Anta Diop est l'un des auteurs de l'Histoire générale de l'Afrique. Il signe, dans le volume II consacré à l'Afrique ancienne, le chapitre sur l'origine des anciens Égyptiens — une reconnaissance institutionnelle considérable, dans une collection dirigée par un comité scientifique international majoritairement africain. Cette place mérite d'être comprise pour ce qu'elle est : l'UNESCO n'a pas entériné toutes ses conclusions, mais elle a jugé que sa contribution devait figurer dans l'ouvrage de référence, avec ses arguments exposés en son nom propre. C'est le fonctionnement normal d'une science vivante. En parallèle, Diop poursuit une œuvre abondante — L'Afrique noire précoloniale, Antériorité des civilisations nègres, Civilisation ou barbarie — où il aborde aussi les structures politiques africaines, les systèmes de parenté et les conditions d'un développement scientifique du continent." },
        ],
      },
      {
        id: "course-perso-17-cheikh-anta-diop-lesson-5",
        title: "Le laboratoire, la politique, l'héritage",
        blocks: [
          { type: "paragraphe", text: "Rentré au Sénégal, il obtient en 1966 la création d'un laboratoire de radiocarbone à l'IFAN de Dakar — l'un des premiers d'Afrique — où il applique les datations au carbone 14 à l'archéologie africaine et poursuit ses analyses sur la mélanine. Il s'engage aussi en politique, fonde plusieurs formations d'opposition et connaît l'interdiction de ses partis et l'emprisonnement sous la présidence de Senghor, avec qui il entretient une relation d'adversaires respectueux. Il meurt à Dakar en 1986. L'université de Dakar porte aujourd'hui son nom. Son héritage est double et il faut le dire tel quel : plusieurs de ses thèses restent contestées par une part de la communauté scientifique, et certains de ses continuateurs les ont durcies bien au-delà de ce qu'il affirmait ; mais son apport de fond n'est pas discuté — il a établi que l'Afrique devait écrire elle-même son histoire, avec ses propres chercheurs et des méthodes vérifiables. L'Histoire générale de l'Afrique est née de cette exigence." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-17-cheikh-anta-diop-quiz-1",
        question: "Quelle discipline scientifique Cheikh Anta Diop a-t-il étudiée à Paris, en plus des sciences humaines ?",
        options: ["La médecine", "La physique nucléaire", "L'astronomie", "La géologie"],
        correctIndex: 1,
        explanation: "Il travailla au laboratoire de chimie nucléaire du Collège de France sous la direction de Frédéric Joliot-Curie, convaincu que les sciences dures devaient servir à établir l'histoire africaine.",
      },
      {
        id: "course-perso-17-cheikh-anta-diop-quiz-2",
        question: "Quelle est la thèse centrale de Nations nègres et culture (1954) ?",
        options: ["Que l'Afrique n'a pas connu d'État avant la colonisation", "Que l'écriture est née en Afrique de l'Ouest", "Que l'Égypte antique était une civilisation négro-africaine", "Que le wolof descend directement du grec ancien"],
        correctIndex: 2,
        explanation: "Diop y soutient que l'Égypte antique était une civilisation négro-africaine, constituant pour l'Afrique noire une matrice comparable à ce que la Grèce et Rome représentent pour l'Europe.",
      },
      {
        id: "course-perso-17-cheikh-anta-diop-quiz-3",
        question: "Qu'a conclu le colloque UNESCO du Caire de 1974 ?",
        options: ["Que ses thèses étaient définitivement démontrées", "Que ses thèses n'emportaient pas l'adhésion générale, mais avaient renouvelé le débat", "Que ses travaux devaient être retirés des publications de l'UNESCO", "Qu'aucune conclusion n'était possible faute de participants"],
        correctIndex: 1,
        explanation: "Le rapport final constate que la démonstration n'a pas emporté l'adhésion générale, tout en soulignant la rigueur de la préparation et le renouvellement profond des termes du débat.",
      },
      {
        id: "course-perso-17-cheikh-anta-diop-quiz-4",
        question: "Quelle place occupe Cheikh Anta Diop dans l'Histoire générale de l'Afrique de l'UNESCO ?",
        options: ["Il en est l'un des auteurs, pour le volume II", "Il en a dirigé l'ensemble des onze volumes", "Il n'y figure pas, ses thèses ayant été écartées", "Il n'y est cité que dans la bibliographie"],
        correctIndex: 0,
        explanation: "Il signe dans le volume II, consacré à l'Afrique ancienne, le chapitre sur l'origine des anciens Égyptiens — une reconnaissance institutionnelle notable, sans que l'UNESCO entérine toutes ses conclusions.",
      },
      {
        id: "course-perso-17-cheikh-anta-diop-quiz-5",
        question: "Quel équipement scientifique a-t-il fait créer à Dakar en 1966 ?",
        options: ["Un observatoire astronomique", "Un laboratoire de radiocarbone", "Un institut de génétique des populations", "Un centre de recherche océanographique"],
        correctIndex: 1,
        explanation: "Il obtint la création à l'IFAN de Dakar d'un laboratoire de radiocarbone, l'un des premiers d'Afrique, pour appliquer les datations au carbone 14 à l'archéologie africaine.",
      },
    ],
  },
  {
    id: "course-perso-18-frantz-fanon",
    categoryId: "perso",
    emoji: "🧠",
    title: "Frantz Fanon, la clinique et la révolution",
    description: "Psychiatre martiniquais devenu diplomate de la révolution algérienne, il a décrit comme personne les blessures mentales que la colonisation inflige. Mort à trente-six ans, Fanon n'a jamais cessé d'être lu.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-18-frantz-fanon-lesson-1",
        title: "Martinique, France libre, psychiatrie",
        blocks: [
          { type: "paragraphe", text: "Frantz Fanon naît en 1925 à Fort-de-France, en Martinique, alors colonie française. Il grandit dans une famille de la classe moyenne et reçoit une éducation qui l'invite à se penser comme français ; l'un de ses professeurs de lycée est Aimé Césaire, dont l'enseignement et la poésie lui font découvrir la négritude. En 1943, à dix-huit ans, il quitte clandestinement l'île pour rejoindre les Forces françaises libres et combat en Afrique du Nord puis en Europe ; il est blessé et décoré. Cette expérience est décisive à rebours : il découvre le racisme au sein même de l'armée qui prétend libérer le monde, et mesure l'écart entre les principes proclamés et le traitement réservé aux soldats des colonies. Après la guerre, il étudie la médecine et la psychiatrie à Lyon, où il suit aussi les cours de philosophie. Il se forme ensuite à Saint-Alban, auprès de François Tosquelles, à une psychiatrie qui soigne aussi l'institution et pas seulement le patient." },
        ],
      },
      {
        id: "course-perso-18-frantz-fanon-lesson-2",
        title: "Peau noire, masques blancs",
        blocks: [
          { type: "paragraphe", text: "En 1952, à vingt-sept ans, il publie Peau noire, masques blancs. Le livre — refusé comme thèse, puis publié à part — analyse ce que la domination coloniale produit dans la psychè des dominés. Fanon y décrit l'intériorisation du regard blanc, l'aliénation de celui qui apprend à se juger avec les catégories de son oppresseur, et le rapport à la langue : parler la langue du colonisateur, c'est en assumer la vision du monde. Il examine l'expérience du Noir antillais découvrant en France qu'il n'est pas ce qu'il croyait être, et il forge des analyses qui deviendront classiques sur le complexe d'infériorité produit par le racisme. Son originalité est de refuser à la fois l'explication purement individuelle et l'explication purement économique : pour lui, l'aliénation coloniale est un fait social qui se loge dans la psychologie, et on ne peut la soigner sans transformer la situation qui la produit." },
        ],
      },
      {
        id: "course-perso-18-frantz-fanon-lesson-3",
        title: "Blida-Joinville : soigner en pays colonisé",
        blocks: [
          { type: "paragraphe", text: "En 1953, Fanon est nommé médecin-chef à l'hôpital psychiatrique de Blida-Joinville, en Algérie. Il y introduit des méthodes de psychothérapie institutionnelle, refuse la ségrégation des services, forme le personnel, ouvre les pavillons. Mais il se heurte à une contradiction qu'il ne pourra pas contourner. La guerre d'indépendance éclate en novembre 1954, et son service reçoit à la fois des militants algériens torturés et des policiers français que la pratique de la torture rend malades. Il constate que la psychiatrie coloniale, telle qu'elle s'enseigne alors, tient les troubles des Algériens pour l'effet d'une infériorité constitutive — une doctrine qu'il réfute méthodiquement. Il conclut qu'il est impossible de rendre un homme à la santé mentale tout en le renvoyant dans le système qui le rend malade. En 1956, il démissionne par une lettre au ministre résident restée célèbre, et il est expulsé d'Algérie en 1957." },
        ],
      },
      {
        id: "course-perso-18-frantz-fanon-lesson-4",
        title: "Le FLN, l'Afrique, la diplomatie de la révolution",
        blocks: [
          { type: "paragraphe", text: "Fanon rejoint alors le Front de libération nationale algérien. Installé à Tunis, il écrit dans El Moudjahid, l'organe du FLN, soigne les combattants, forme des infirmiers, et devient l'un des porte-parole de la révolution algérienne à l'échelle du continent. En 1960, le Gouvernement provisoire de la République algérienne le nomme ambassadeur au Ghana, à Accra — la capitale de Nkrumah, alors centre névralgique du panafricanisme. Il participe aux conférences panafricaines, plaide pour l'ouverture d'un front sud qui permettrait de ravitailler l'Algérie à travers le Sahara, et reconnaît ce trajet à travers le Mali au péril de sa vie. Son horizon a changé d'échelle : l'indépendance algérienne n'est plus pour lui une affaire nationale, mais l'un des fronts d'une libération continentale. C'est cette dimension africaine, souvent effacée derrière le penseur, que l'Histoire générale de l'Afrique met en avant." },
        ],
      },
      {
        id: "course-perso-18-frantz-fanon-lesson-5",
        title: "Les Damnés de la terre et la postérité",
        blocks: [
          { type: "paragraphe", text: "Atteint d'une leucémie diagnostiquée en 1960, Fanon dicte en quelques mois son dernier livre, Les Damnés de la terre, publié en 1961 avec une préface de Jean-Paul Sartre. L'ouvrage analyse la violence coloniale et la violence de la libération, mais il contient surtout un chapitre d'une lucidité rare, « Mésaventures de la conscience nationale », où il prévient les futurs États indépendants : si une bourgeoisie nationale se contente de remplacer le colon sans transformer les structures, l'indépendance ne sera qu'un changement de personnel, et le pouvoir dérivera vers l'autoritarisme et le clientélisme. Le livre se clôt sur une série d'observations cliniques tirées de sa pratique en Algérie. Fanon meurt aux États-Unis le 6 décembre 1961, à trente-six ans, quelques mois avant l'indépendance algérienne. Il est enterré, selon sa volonté, en Algérie. Son œuvre nourrira les mouvements de libération africains, la lutte anti-apartheid, les études postcoloniales et les mouvements des droits civiques américains." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-18-frantz-fanon-quiz-1",
        question: "De quel territoire Frantz Fanon était-il originaire ?",
        options: ["De la Guadeloupe", "De la Martinique", "D'Haïti", "De la Guyane"],
        correctIndex: 1,
        explanation: "Fanon naît en 1925 à Fort-de-France, en Martinique, alors colonie française. Il eut Aimé Césaire pour professeur au lycée.",
      },
      {
        id: "course-perso-18-frantz-fanon-quiz-2",
        question: "Qu'analyse Peau noire, masques blancs (1952) ?",
        options: ["Les effets psychiques de la domination coloniale sur les dominés", "L'organisation économique des plantations antillaises", "L'histoire du mouvement de la négritude", "Les méthodes de la psychiatrie institutionnelle"],
        correctIndex: 0,
        explanation: "Le livre analyse l'intériorisation du regard du colonisateur et l'aliénation produite par le racisme, en refusant les explications purement individuelles comme purement économiques.",
      },
      {
        id: "course-perso-18-frantz-fanon-quiz-3",
        question: "Pourquoi Fanon démissionne-t-il de l'hôpital de Blida-Joinville en 1956 ?",
        options: ["Parce qu'il avait été muté en France", "Parce que son service allait fermer", "Parce qu'on ne peut soigner un homme pour le renvoyer dans le système qui le rend malade", "Parce qu'il avait été dénoncé par ses collègues"],
        correctIndex: 2,
        explanation: "Recevant à la fois des militants torturés et des policiers rendus malades par la pratique de la torture, il conclut à l'impossibilité de soigner sans transformer la situation coloniale, et démissionne par une lettre restée célèbre.",
      },
      {
        id: "course-perso-18-frantz-fanon-quiz-4",
        question: "Quelle fonction diplomatique a-t-il occupée en 1960 ?",
        options: ["Ambassadeur du Ghana en Algérie", "Ambassadeur du GPRA algérien au Ghana", "Représentant de l'OUA à Tunis", "Délégué du FLN aux Nations unies"],
        correctIndex: 1,
        explanation: "Le Gouvernement provisoire de la République algérienne le nomma ambassadeur à Accra, capitale de Nkrumah et centre du panafricanisme, où il plaida pour l'ouverture d'un front sud à travers le Sahara.",
      },
      {
        id: "course-perso-18-frantz-fanon-quiz-5",
        question: "De quoi met-il en garde les futurs États indépendants dans Les Damnés de la terre ?",
        options: ["Du risque d'une nouvelle invasion militaire européenne", "Du danger d'une industrialisation trop rapide", "Du risque qu'une bourgeoisie nationale remplace le colon sans rien transformer", "De la nécessité d'abandonner les langues européennes"],
        correctIndex: 2,
        explanation: "Dans le chapitre « Mésaventures de la conscience nationale », il avertit qu'une indépendance qui se contente de changer le personnel dirigeant dérive vers l'autoritarisme et le clientélisme.",
      },
    ],
  },
  {
    id: "course-perso-19-amilcar-cabral",
    categoryId: "perso",
    emoji: "🌾",
    title: "Amílcar Cabral, l'agronome stratège",
    description: "Il a commencé par recenser les sols de son pays et fini par en organiser la libération. Amílcar Cabral, le théoricien qui pensait que la culture était l'arme la plus sûre d'un peuple.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-19-amilcar-cabral-lesson-1",
        title: "Une jeunesse dans l'empire portugais",
        blocks: [
          { type: "paragraphe", text: "Amílcar Cabral naît en 1924 à Bafatá, en Guinée portugaise — l'actuelle Guinée-Bissau —, de parents originaires du Cap-Vert. Il grandit entre les deux territoires, tous deux colonies du Portugal, et connaît au Cap-Vert les grandes famines des années 1940, qui tuent des dizaines de milliers de personnes dans l'indifférence de l'administration coloniale. Cette expérience marque durablement sa manière de poser les problèmes politiques en termes concrets : la terre, l'eau, les récoltes, la survie. La colonisation portugaise est alors la plus rigide d'Afrique : le régime de Salazar refuse toute évolution, considère ses colonies comme des provinces d'outre-mer et classe la population en « indigènes » et en une minorité d'« assimilés » disposant de droits limités. En 1945, Cabral obtient une bourse et part étudier à Lisbonne, où il s'inscrit en agronomie." },
        ],
      },
      {
        id: "course-perso-19-amilcar-cabral-lesson-2",
        title: "Le recensement agricole comme enquête politique",
        blocks: [
          { type: "paragraphe", text: "À Lisbonne, il rencontre d'autres étudiants venus des colonies portugaises — Agostinho Neto pour l'Angola, Mário de Andrade, Eduardo Mondlane pour le Mozambique. Ils forment un cercle de discussion sur l'identité africaine et la décolonisation, dans un pays où toute activité politique est surveillée par la police politique. Diplômé ingénieur agronome, Cabral revient en Guinée en 1952 et est chargé par l'administration coloniale d'une mission d'une portée qu'elle n'a pas mesurée : le premier recensement agricole du territoire. Pendant deux ans, il parcourt le pays village par village, mesure les sols, évalue les rendements, interroge les paysans. Il en sort avec une connaissance de la Guinée que personne ne possède — géographie, structures sociales, langues, hiérarchies, rapports fonciers, degré de pénétration coloniale selon les régions. Cette enquête technique deviendra la base de sa stratégie politique et militaire." },
        ],
      },
      {
        id: "course-perso-19-amilcar-cabral-lesson-3",
        title: "Fonder le PAIGC",
        blocks: [
          { type: "paragraphe", text: "En 1956, Cabral fonde avec quelques compagnons le Parti africain pour l'indépendance de la Guinée et du Cap-Vert (PAIGC). Le mouvement tente d'abord la voie pacifique : grèves et revendications syndicales. La réponse tombe en août 1959 au port de Pidjiguiti, à Bissau, où la police tire sur des dockers en grève et fait des dizaines de morts. Le PAIGC en tire la conclusion que la voie légale est fermée. Mais Cabral refuse de lancer immédiatement la lutte armée : il consacre plusieurs années à la préparation politique, envoyant des militants former les paysans dans les campagnes, expliquer les raisons du combat, organiser les comités de village. Sa conviction est nette et il la répétera : une guerre de libération se gagne d'abord dans la conscience des populations rurales, non dans les états-majors. La lutte armée commence en 1963." },
        ],
      },
      {
        id: "course-perso-19-amilcar-cabral-lesson-4",
        title: "Zones libérées, culture et éducation",
        blocks: [
          { type: "paragraphe", text: "La guerre menée par le PAIGC devient un modèle étudié dans le monde entier. Le mouvement ne se contente pas de harceler l'armée portugaise : il libère des territoires et y installe une administration civile — tribunaux populaires, magasins d'approvisionnement du peuple pour échapper aux commerçants coloniaux, dispensaires, et surtout écoles. Au plus fort du conflit, le PAIGC contrôle une grande partie des campagnes, et le Portugal ne tient plus que les villes et les axes. Cabral y déploie sa pensée la plus originale, exposée dans des textes comme L'arme de la théorie : la libération nationale est un acte de culture. La domination coloniale, dit-il, ne peut se maintenir qu'en interdisant à un peuple de poursuivre son propre développement historique ; le retour à ce développement passe donc par la culture, entendue non comme un folklore à célébrer mais comme la capacité vivante d'un peuple à produire son histoire. Il demande aussi aux cadres issus de la petite bourgeoisie de « se suicider comme classe » pour se fondre dans le peuple — formule brutale et restée célèbre." },
        ],
      },
      {
        id: "course-perso-19-amilcar-cabral-lesson-5",
        title: "L'assassinat de 1973 et l'indépendance conquise",
        blocks: [
          { type: "paragraphe", text: "Le 20 janvier 1973, Amílcar Cabral est assassiné à Conakry, où le PAIGC avait sa base arrière, par des membres de son propre mouvement manipulés dans une opération à laquelle la police politique portugaise n'était pas étrangère. Il a quarante-huit ans. Le calcul échoue : le parti ne se disloque pas. Le 24 septembre 1973, la Guinée-Bissau proclame unilatéralement son indépendance, reconnue par des dizaines d'États et par l'Assemblée générale des Nations unies avant même que le Portugal ne l'admette. L'onde de choc atteint la métropole : l'enlisement des guerres coloniales en Guinée, en Angola et au Mozambique contribue directement à la révolution des Œillets d'avril 1974, qui renverse la dictature à Lisbonne. Le Portugal reconnaît alors l'indépendance de la Guinée-Bissau, puis celle du Cap-Vert en 1975. L'aéroport de Bissau et l'université du Cap-Vert portent son nom ; sa pensée reste enseignée bien au-delà de l'Afrique." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-19-amilcar-cabral-quiz-1",
        question: "Quelle était la formation professionnelle d'Amílcar Cabral ?",
        options: ["Médecin", "Ingénieur agronome", "Avocat", "Officier de marine"],
        correctIndex: 1,
        explanation: "Diplômé ingénieur agronome à Lisbonne, il fut chargé en 1952 du premier recensement agricole de la Guinée portugaise.",
      },
      {
        id: "course-perso-19-amilcar-cabral-quiz-2",
        question: "En quoi le recensement agricole a-t-il servi son action politique ?",
        options: ["Il lui a permis d'obtenir un poste dans l'administration coloniale", "Il lui a donné une connaissance du pays que personne d'autre ne possédait", "Il lui a permis de constituer un stock d'armes", "Il a servi à cartographier les positions militaires portugaises"],
        correctIndex: 1,
        explanation: "Deux années passées à parcourir le pays village par village lui donnèrent une connaissance inégalée des sols, des structures sociales, des langues et des rapports fonciers — la base de sa stratégie.",
      },
      {
        id: "course-perso-19-amilcar-cabral-quiz-3",
        question: "Quel événement de 1959 convainc le PAIGC que la voie légale est fermée ?",
        options: ["Le massacre des dockers en grève à Pidjiguiti", "L'interdiction du parti par Salazar", "L'arrestation de Cabral à Lisbonne", "La fermeture des écoles de Bissau"],
        correctIndex: 0,
        explanation: "En août 1959, la police tira sur des dockers en grève au port de Pidjiguiti, à Bissau, faisant des dizaines de morts. Le PAIGC en conclut que la voie pacifique était sans issue.",
      },
      {
        id: "course-perso-19-amilcar-cabral-quiz-4",
        question: "Que le PAIGC installait-il dans les zones libérées ?",
        options: ["Uniquement des bases militaires", "Des comptoirs commerciaux portugais reconvertis", "Une administration civile : tribunaux, magasins du peuple, dispensaires et écoles", "Des exploitations agricoles collectives obligatoires"],
        correctIndex: 2,
        explanation: "Le PAIGC ne se contentait pas de harceler l'armée : il administrait les territoires libérés, avec une attention particulière portée aux écoles et à la santé.",
      },
      {
        id: "course-perso-19-amilcar-cabral-quiz-5",
        question: "Quelle idée centrale Cabral défend-il sur la libération nationale ?",
        options: ["Qu'elle est avant tout un acte de culture", "Qu'elle dépend d'abord de l'aide militaire étrangère", "Qu'elle doit être menée par les élites urbaines", "Qu'elle suppose d'abandonner les langues africaines"],
        correctIndex: 0,
        explanation: "Pour Cabral, la domination coloniale interdit à un peuple de poursuivre son propre développement historique ; la libération est donc un acte de culture, entendue comme la capacité vivante d'un peuple à produire son histoire.",
      },
    ],
  },
  {
    id: "course-perso-20-agostinho-neto",
    categoryId: "perso",
    emoji: "🖋️",
    title: "Agostinho Neto, le poète et le président",
    description: "Médecin, poète, prisonnier politique, chef de guérilla, puis premier président de l'Angola. Agostinho Neto a mené sa vie comme il écrivait ses vers : avec une obstination tournée vers un seul objectif.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-20-agostinho-neto-lesson-1",
        title: "Un médecin angolais formé au Portugal",
        blocks: [
          { type: "paragraphe", text: "António Agostinho Neto naît en 1922 à Icolo e Bengo, près de Luanda, en Angola, dans une famille protestante — son père est pasteur méthodiste et instituteur. Cette origine compte : les missions protestantes ont formé une partie de l'élite angolaise et ont maintenu, contre la politique d'assimilation portugaise, un attachement aux langues locales. Excellent élève, Neto travaille d'abord aux services de santé de Luanda, puis obtient en 1947 une bourse pour étudier la médecine au Portugal, à Coimbra puis à Lisbonne. Il y retrouve le cercle d'étudiants africains qui deviendra la matrice de la libération lusophone : Amílcar Cabral, Mário de Andrade, Eduardo Mondlane. Ensemble, ils animent la Maison des étudiants de l'Empire, lieu de discussion sur l'identité africaine que la police politique de Salazar surveille étroitement. Neto est arrêté à plusieurs reprises dès cette période, pour ses activités politiques et ses écrits." },
        ],
      },
      {
        id: "course-perso-20-agostinho-neto-lesson-2",
        title: "La poésie comme arme",
        blocks: [
          { type: "paragraphe", text: "Neto est aussi, et très tôt, un poète. Son œuvre — dont le recueil Sagrada Esperança, « Sacrée espérance » — est écrite en portugais mais tournée entièrement vers l'Angola : les travailleurs des plantations de café, les femmes des quartiers pauvres de Luanda, les rythmes et les chants du pays, la mémoire des humiliations quotidiennes de la colonisation. Ce n'est pas une activité annexe de son combat : dans un empire où toute expression politique est interdite, la poésie devient l'un des rares espaces où une conscience nationale peut se dire. Ses textes circulent clandestinement, sont traduits, et le font connaître bien au-delà de l'Angola — des intellectuels et des artistes internationaux se mobiliseront d'ailleurs pour obtenir sa libération lors de ses emprisonnements. La littérature africaine de langue portugaise lui doit l'une de ses voix majeures, et l'Histoire générale de l'Afrique souligne ce lien étroit, dans les colonies portugaises, entre création littéraire et éveil politique." },
        ],
      },
      {
        id: "course-perso-20-agostinho-neto-lesson-3",
        title: "Le MPLA et la lutte armée",
        blocks: [
          { type: "paragraphe", text: "De retour en Angola en 1959 comme médecin, Neto est arrêté l'année suivante dans son cabinet. La population du village de Catete manifeste pour réclamer sa libération ; la troupe tire, faisant plusieurs dizaines de morts — un épisode connu comme le « massacre d'Icolo e Bengo ». Déporté au Cap-Vert puis au Portugal, il est assigné à résidence à Lisbonne, d'où il s'évade en 1962 et gagne le Maroc, puis le Congo. Il prend alors la direction du Mouvement populaire de libération de l'Angola (MPLA), l'une des trois organisations qui combattent la présence portugaise, aux côtés du FNLA d'Holden Roberto et, plus tard, de l'UNITA de Jonas Savimbi. La guerre commence en 1961 et dure treize ans. Cette division du camp indépendantiste, sur des bases régionales, ethniques et idéologiques, et attisée par les soutiens extérieurs de chaque camp, pèsera lourdement sur la suite." },
        ],
      },
      {
        id: "course-perso-20-agostinho-neto-lesson-4",
        title: "L'indépendance de 1975 et la guerre froide",
        blocks: [
          { type: "paragraphe", text: "La révolution des Œillets d'avril 1974 renverse la dictature à Lisbonne et ouvre brutalement la voie à la décolonisation. Le Portugal se retire, mais les trois mouvements angolais ne parviennent pas à s'entendre et le pays bascule dans la guerre civile avant même d'être indépendant. Le 11 novembre 1975, le MPLA proclame l'indépendance de l'Angola à Luanda et Agostinho Neto en devient le premier président. L'Angola se retrouve immédiatement au cœur des affrontements de la guerre froide : le MPLA reçoit l'appui de l'Union soviétique et surtout de Cuba, dont les troupes interviennent massivement ; le FNLA et l'UNITA sont soutenus par les États-Unis, le Zaïre de Mobutu et l'Afrique du Sud de l'apartheid, qui envoie ses forces sur le territoire angolais. Le pays devient l'un des principaux champs de bataille indirects entre les blocs — une guerre qui durera, sous diverses formes, jusqu'en 2002." },
        ],
      },
      {
        id: "course-perso-20-agostinho-neto-lesson-5",
        title: "Diriger un pays en guerre",
        blocks: [
          { type: "paragraphe", text: "Neto gouverne un pays en guerre, vidé de ses cadres par le départ massif des colons portugais, et dont l'économie repose sur le pétrole et les diamants. Il engage une politique d'inspiration socialiste : nationalisations, planification, et surtout un effort considérable en matière d'alphabétisation et de santé publique, dans un pays où l'immense majorité de la population n'avait jamais eu accès à l'école. L'Angola devient aussi une base arrière essentielle pour les mouvements de libération d'Afrique australe — la SWAPO namibienne et l'ANC sud-africain —, ce qui lui vaut les incursions répétées de l'armée sud-africaine. Le bilan comporte une face sombre qu'il serait malhonnête d'omettre : la répression violente de la tentative de coup d'État de mai 1977 fit, selon les estimations, des milliers de victimes, et reste un traumatisme non réglé de l'histoire angolaise. Neto meurt à Moscou le 10 septembre 1979, des suites d'un cancer. La date de sa naissance, le 17 septembre, est en Angola la Journée nationale du héros ; il reste célébré autant comme poète que comme fondateur de l'État." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-20-agostinho-neto-quiz-1",
        question: "Quelle profession Agostinho Neto exerçait-il avant d'être un dirigeant politique ?",
        options: ["Avocat", "Médecin", "Professeur de littérature", "Ingénieur des mines"],
        correctIndex: 1,
        explanation: "Il obtint en 1947 une bourse pour étudier la médecine au Portugal, à Coimbra puis à Lisbonne, et exerça comme médecin à son retour en Angola en 1959.",
      },
      {
        id: "course-perso-20-agostinho-neto-quiz-2",
        question: "Quel rôle jouait la poésie dans les colonies portugaises ?",
        options: ["Elle était encouragée par l'administration coloniale", "Elle offrait l'un des rares espaces où une conscience nationale pouvait s'exprimer", "Elle était réservée aux auteurs métropolitains", "Elle n'existait qu'en langues africaines"],
        correctIndex: 1,
        explanation: "Dans un empire où toute expression politique était interdite, la poésie devenait l'un des rares espaces d'expression d'une conscience nationale. Les textes de Neto circulaient clandestinement.",
      },
      {
        id: "course-perso-20-agostinho-neto-quiz-3",
        question: "Quel mouvement de libération Agostinho Neto a-t-il dirigé ?",
        options: ["Le FNLA", "L'UNITA", "Le MPLA", "Le PAIGC"],
        correctIndex: 2,
        explanation: "Il prit la direction du Mouvement populaire de libération de l'Angola (MPLA), l'une des trois organisations combattant la présence portugaise, avec le FNLA et l'UNITA.",
      },
      {
        id: "course-perso-20-agostinho-neto-quiz-4",
        question: "Quel événement européen de 1974 a précipité l'indépendance de l'Angola ?",
        options: ["La révolution des Œillets au Portugal", "La chute du mur de Berlin", "Les accords d'Helsinki", "L'entrée du Portugal dans la CEE"],
        correctIndex: 0,
        explanation: "La révolution des Œillets d'avril 1974 renversa la dictature à Lisbonne et ouvrit brutalement la voie à la décolonisation ; l'indépendance de l'Angola fut proclamée le 11 novembre 1975.",
      },
      {
        id: "course-perso-20-agostinho-neto-quiz-5",
        question: "Pourquoi l'Angola indépendant devient-il un champ de bataille de la guerre froide ?",
        options: ["Parce qu'il contrôlait le canal de Suez", "Parce que les mouvements rivaux étaient soutenus par des puissances opposées", "Parce qu'il refusait d'adhérer à l'OUA", "Parce qu'il possédait des installations nucléaires"],
        correctIndex: 1,
        explanation: "Le MPLA était appuyé par l'URSS et Cuba, le FNLA et l'UNITA par les États-Unis, le Zaïre et l'Afrique du Sud de l'apartheid : l'Angola devint l'un des principaux affrontements indirects entre les blocs.",
      },
    ],
  },
  {
    id: "course-perso-21-kwame-nkrumah",
    categoryId: "perso",
    emoji: "⭐",
    title: "Kwame Nkrumah, l'étoile noire",
    description: "Il a conduit le premier pays d'Afrique subsaharienne à l'indépendance et voulait un gouvernement unique pour tout le continent. Renversé, exilé, Nkrumah reste la figure la plus citée du panafricanisme.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-21-kwame-nkrumah-lesson-1",
        title: "Formation aux États-Unis et à Londres",
        blocks: [
          {
            type: "paragraphe",
            text: "**Kwame Nkrumah** est né en 1909 à Nkroful, dans la Côte-de-l'Or britannique. Il mènera son pays à l'indépendance.",
          },
          {
            type: "image",
            alt: "Portrait photographique de Kwame Nkrumah, en costume.",
            legende: "Kwame Nkrumah, archives nationales britanniques",
            credit: "The National Archives UK, Open Government Licence v1.0",
          },
          {
            type: "frise",
            evenements: [
              { date: "1909", texte: "Naissance à Nkroful, Côte-de-l'Or" },
              { date: "1935-1947", texte: "Études aux États-Unis puis à Londres" },
              { date: "1957", texte: "Indépendance du Ghana" },
              { date: "1966", texte: "Renversé par un coup d'État" },
            ],
          },
          {
            type: "paragraphe",
            text: "Instituteur, il part étudier en 1935 aux États-Unis, où il découvre le panafricanisme de Garvey et de **Du Bois**. À Londres, il co-organise le congrès de **Manchester** en 1945.",
          },
          {
            type: "aRetenir",
            points: [
              "Né en **1909** en Côte-de-l'Or, actuel Ghana",
              "Formé aux États-Unis puis à **Londres**",
              "Co-organisateur du congrès de Manchester, en 1945",
            ],
          },
        ],
      },
      {
        id: "course-perso-21-kwame-nkrumah-lesson-2",
        title: "« Positive action » et l'indépendance de 1957",
        blocks: [
          {
            type: "paragraphe",
            text: "De retour en Côte-de-l'Or en 1947, **Nkrumah** trouve un mouvement nationaliste prudent, mené par des notables. Il le juge beaucoup trop lent.",
          },
          {
            type: "chiffreCle",
            valeur: "1957",
            legende: "premier pays d'Afrique noire indépendant",
          },
          {
            type: "paragraphe",
            text: "Il fonde son propre parti et lance la **positive action** : grèves, boycotts et désobéissance civile, sans recours à la violence. Emprisonné par les Britanniques, il est élu depuis sa cellule et sort de prison pour gouverner. Le 6 mars 1957, la Côte-de-l'Or devient le **Ghana**.",
          },
          {
            type: "aRetenir",
            points: [
              "La **positive action** : grèves, boycotts, désobéissance",
              "Élu alors qu'il était en **prison**",
              "Le Ghana devient indépendant le 6 mars 1957",
            ],
          },
        ],
      },
      {
        id: "course-perso-21-kwame-nkrumah-lesson-3",
        title: "Africa Must Unite",
        blocks: [
          {
            type: "paragraphe",
            text: "Pour **Nkrumah**, l'indépendance d'un seul pays ne veut pas dire grand-chose. Il la juge sans effet réel tant que le continent reste morcelé en trente États séparés.",
          },
          {
            type: "chiffreCle",
            valeur: "1963",
            legende: "publication d'Africa Must Unite",
          },
          {
            type: "paragraphe",
            text: "Il défend la création d'un **gouvernement continental** : une armée commune, une monnaie commune, une politique étrangère commune. Son livre Africa Must Unite paraît la veille même du sommet d'Addis-Abeba, pour peser sur les débats. Il y voit la seule parade sérieuse au **néocolonialisme**.",
          },
          {
            type: "aRetenir",
            points: [
              "Il prône un **gouvernement continental** unique",
              "Armée, monnaie et diplomatie communes",
              "**Africa Must Unite** paraît en 1963",
            ],
          },
        ],
      },
      {
        id: "course-perso-21-kwame-nkrumah-lesson-4",
        title: "Addis-Abeba 1963 : l'unité, mais laquelle ?",
        blocks: [
          {
            type: "paragraphe",
            text: "En mai 1963, trente-deux chefs d'État se réunissent à **Addis-Abeba**. Deux visions de l'unité africaine s'y affrontent ouvertement.",
          },
          {
            type: "frise",
            evenements: [
              { date: "1961", texte: "Groupe de Casablanca, pour l'unité politique" },
              { date: "1961", texte: "Groupe de Monrovia, pour une coopération souple" },
              { date: "Mai 1963", texte: "Création de l'OUA à Addis-Abeba" },
            ],
          },
          {
            type: "paragraphe",
            text: "Le groupe de **Casablanca**, autour de Nkrumah, veut des États-Unis d'Afrique dès maintenant. Le groupe de **Monrovia** préfère une coopération entre États souverains, sans abandon de souveraineté. L'OUA qui naît de ce sommet reprend la seconde option.",
          },
          {
            type: "aRetenir",
            points: [
              "Deux camps : **Casablanca** contre Monrovia",
              "Nkrumah défend les États-Unis d'Afrique",
              "L'**OUA** de 1963 choisit la coopération souple",
            ],
          },
        ],
      },
      {
        id: "course-perso-21-kwame-nkrumah-lesson-5",
        title: "La chute, l'exil, la réhabilitation",
        blocks: [
          {
            type: "paragraphe",
            text: "Le 24 février 1966, pendant que **Nkrumah** est en voyage à Pékin, l'armée ghanéenne le renverse.",
          },
          {
            type: "citation",
            texte: "Cherchez d'abord le royaume politique, et tout le reste vous sera donné par surcroît.",
            auteur: "Kwame Nkrumah",
          },
          {
            type: "paragraphe",
            text: "Il finit sa vie en **Guinée**, où Sékou Touré le nomme coprésident d'honneur, et meurt à Bucarest en 1972. Longtemps effacé au Ghana, il y est aujourd'hui réhabilité : son mausolée est à Accra, et l'aéroport international porte son nom.",
          },
          {
            type: "aRetenir",
            points: [
              "Renversé par l'armée en **1966**, pendant un voyage",
              "Exil en **Guinée**, mort à Bucarest en 1972",
              "Réhabilité au Ghana, mausolée à Accra",
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-21-kwame-nkrumah-quiz-1",
        question: "Quel pays Kwame Nkrumah a-t-il conduit à l'indépendance, et en quelle année ?",
        options: ["Le Nigeria, en 1960", "Le Ghana, en 1957", "La Guinée, en 1958", "Le Kenya, en 1963"],
        correctIndex: 1,
        explanation: "Le 6 mars 1957, la Gold Coast devient le Ghana — premier pays d'Afrique subsaharienne à accéder à l'indépendance.",
      },
      {
        id: "course-perso-21-kwame-nkrumah-quiz-2",
        question: "D'où vient le nom « Ghana » choisi pour le pays indépendant ?",
        options: ["D'un mot akan signifiant « liberté »", "Du nom d'un empire médiéval du Sahel", "Du nom du fleuve traversant le pays", "Du nom du premier roi ashanti"],
        correctIndex: 1,
        explanation: "Le nom reprend celui de l'empire du Ghana, État médiéval du Sahel — un choix délibéré, destiné à rattacher le nouvel État à une grandeur africaine antérieure à la colonisation.",
      },
      {
        id: "course-perso-21-kwame-nkrumah-quiz-3",
        question: "Que défend Nkrumah dans Africa Must Unite (1963) ?",
        options: ["Le maintien des liens privilégiés avec l'ancienne métropole", "La création d'un gouvernement continental unique", "Le retour aux frontières précoloniales", "La neutralité de l'Afrique dans la guerre froide"],
        correctIndex: 1,
        explanation: "Il y soutient que les États issus des frontières coloniales sont trop faibles pour être réellement souverains, et que seule une union politique continentale, avec armée et monnaie communes, leur donnerait un poids réel.",
      },
      {
        id: "course-perso-21-kwame-nkrumah-quiz-4",
        question: "Quel concept Nkrumah a-t-il forgé pour désigner la domination maintenue après l'indépendance formelle ?",
        options: ["Le néocolonialisme", "L'impérialisme culturel", "La dépendance structurelle", "Le pacte colonial"],
        correctIndex: 0,
        explanation: "Il théorise le néocolonialisme : la domination poursuivie par des moyens économiques et financiers après le départ formel du colonisateur. C'est l'un de ses apports les plus durables.",
      },
      {
        id: "course-perso-21-kwame-nkrumah-quiz-5",
        question: "Quelle option a prévalu lors de la création de l'OUA à Addis-Abeba en 1963 ?",
        options: ["L'union politique immédiate voulue par le groupe de Casablanca", "La coopération entre États souverains, avec frontières intangibles", "La création d'une armée continentale unique", "L'adhésion obligatoire de tous les territoires encore colonisés"],
        correctIndex: 1,
        explanation: "L'OUA fut fondée comme une organisation de coopération entre États souverains, sur les principes de non-ingérence et d'intangibilité des frontières — la position du groupe de Monrovia, majoritaire.",
      },
    ],
  },
  {
    id: "course-perso-22-julius-nyerere",
    categoryId: "perso",
    emoji: "📖",
    title: "Julius Nyerere, le Mwalimu",
    description: "On l'appelait « l'instituteur ». Il a fait de la Tanzanie un pays uni dans un continent fracturé, soutenu toutes les luttes de libération d'Afrique australe, et quitté le pouvoir de lui-même.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-22-julius-nyerere-lesson-1",
        title: "L'instituteur devenu leader",
        blocks: [
          { type: "paragraphe", text: "Julius Kambarage Nyerere naît en 1922 à Butiama, au bord du lac Victoria, dans le Tanganyika — territoire administré par la Grande-Bretagne sous mandat de la Société des Nations après avoir été colonie allemande. Il est le fils d'un chef zanaki. Scolarisé tardivement, il rattrape son retard avec une facilité remarquable, étudie à Makerere en Ouganda, puis obtient une bourse pour l'université d'Édimbourg — devenant l'un des premiers Tanganyikais diplômés d'une université britannique. Il enseigne à son retour, ce qui lui vaut le surnom qu'il gardera toute sa vie : Mwalimu, « l'instituteur » en swahili. En 1954, il transforme une association existante en parti politique de masse, la TANU (Tanganyika African National Union), et démissionne de l'enseignement pour se consacrer à la politique. Il plaide la cause de l'indépendance devant les Nations unies et mène une campagne pacifique, méthodique, fondée sur l'organisation de dizaines de milliers d'adhérents." },
        ],
      },
      {
        id: "course-perso-22-julius-nyerere-lesson-2",
        title: "L'indépendance et l'union avec Zanzibar",
        blocks: [
          { type: "paragraphe", text: "La stratégie non violente aboutit : le Tanganyika accède à l'indépendance en décembre 1961, sans guerre, et Nyerere en devient Premier ministre puis président de la République en 1962. Fait rare et révélateur, il démissionne peu après son premier mandat de Premier ministre pour se consacrer à la réorganisation du parti à la base, avant de revenir. En 1964, une révolution renverse le sultanat de Zanzibar, île voisine à l'histoire distincte — commerciale, swahilie, longtemps liée à Oman. Nyerere négocie alors l'union des deux territoires : le 26 avril 1964 naît la République-Unie de Tanzanie, dont le nom même combine Tanganyika et Zanzibar. Cette union, qui conserve à Zanzibar un gouvernement propre et une large autonomie, tient depuis plus de soixante ans — une longévité exceptionnelle en Afrique, où la plupart des tentatives de fédération de la même époque ont échoué en quelques années." },
        ],
      },
      {
        id: "course-perso-22-julius-nyerere-lesson-3",
        title: "Arusha et l'ujamaa",
        blocks: [
          { type: "paragraphe", text: "En 1967, Nyerere promulgue la déclaration d'Arusha, texte fondateur de sa politique. Il y expose l'ujamaa — mot swahili signifiant « famille élargie », qu'il traduit par socialisme africain. Sa thèse : les sociétés africaines traditionnelles reposaient sur l'entraide et le partage, et le développement doit s'appuyer sur ces principes plutôt que sur l'imitation des modèles étrangers. Concrètement, la déclaration prévoit la nationalisation des banques et des grandes entreprises, un code de conduite interdisant aux dirigeants du parti de posséder des actions ou de percevoir plusieurs salaires — et Nyerere s'y astreint personnellement —, la priorité à l'agriculture et à l'autonomie nationale plutôt qu'à l'aide extérieure. Il lance surtout la villagisation : le regroupement des populations rurales dispersées en villages collectifs, pour y installer écoles, dispensaires et eau potable. Le résultat est contrasté et il faut le dire nettement." },
        ],
      },
      {
        id: "course-perso-22-julius-nyerere-lesson-4",
        title: "Un bilan à deux faces",
        blocks: [
          { type: "paragraphe", text: "Les réussites sont massives et mesurables. L'alphabétisation passe d'une petite minorité à l'un des taux les plus élevés d'Afrique de l'époque ; l'école primaire devient quasi universelle ; l'espérance de vie progresse fortement ; les dispensaires et les points d'eau se multiplient. Surtout, la Tanzanie évite ce qui ravage ses voisins : Nyerere impose le swahili comme langue nationale, ce qui donne un ciment commun à plus de cent groupes linguistiques et neutralise les rivalités ethniques. Le pays ne connaîtra ni guerre civile ni coup d'État. À l'inverse, l'économie décroche : la villagisation, d'abord volontaire, devient contrainte au milieu des années 1970 — des millions de personnes sont déplacées, souvent brutalement, vers des villages parfois mal choisis —, la production agricole chute, la pénurie s'installe et la dépendance à l'aide extérieure augmente, contredisant l'objectif d'autonomie. Nyerere reconnaîtra lui-même publiquement une partie de ces échecs." },
        ],
      },
      {
        id: "course-perso-22-julius-nyerere-lesson-5",
        title: "L'Afrique australe et le départ volontaire",
        blocks: [
          { type: "paragraphe", text: "Sur le plan continental, son rôle est considérable. Dar es-Salaam devient le quartier général des mouvements de libération d'Afrique australe : l'ANC sud-africain, la SWAPO namibienne, la ZANU et la ZAPU zimbabwéennes, le FRELIMO mozambicain y installent leurs bureaux, leurs camps d'entraînement et leurs écoles. Nyerere préside les « États de la ligne de front » qui coordonnent le soutien à la lutte contre l'apartheid, au prix de représailles et d'un coût économique lourd pour son pays. En 1979, il engage l'armée tanzanienne pour renverser le régime d'Idi Amin Dada en Ouganda, après que celui-ci a envahi le nord de la Tanzanie. Puis, en 1985, il fait ce que presque aucun de ses pairs n'a fait : il quitte volontairement le pouvoir, en pleine santé, et organise sa succession. Il continue ensuite à médier des conflits africains, notamment au Burundi. Il meurt à Londres en 1999. L'Union africaine le compte parmi ses pères fondateurs ; en Tanzanie, on l'appelle toujours simplement Mwalimu." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-22-julius-nyerere-quiz-1",
        question: "Que signifie le surnom « Mwalimu » donné à Nyerere ?",
        options: ["Le père de la nation", "L'instituteur", "Le sage", "Le libérateur"],
        correctIndex: 1,
        explanation: "« Mwalimu » signifie « l'instituteur » en swahili — Nyerere fut enseignant avant de se consacrer à la politique, et le surnom lui est resté toute sa vie.",
      },
      {
        id: "course-perso-22-julius-nyerere-quiz-2",
        question: "De quels territoires la Tanzanie est-elle née en 1964 ?",
        options: ["Du Tanganyika et du Kenya", "Du Tanganyika et de Zanzibar", "Du Tanganyika et de l'Ouganda", "De Zanzibar et des Comores"],
        correctIndex: 1,
        explanation: "La République-Unie de Tanzanie naît le 26 avril 1964 de l'union du Tanganyika et de Zanzibar — son nom combine les deux. Cette union dure depuis plus de soixante ans.",
      },
      {
        id: "course-perso-22-julius-nyerere-quiz-3",
        question: "Que désigne l'ujamaa, exposé dans la déclaration d'Arusha de 1967 ?",
        options: ["Un système de partis multiples", "Un programme d'industrialisation lourde", "Un socialisme africain fondé sur l'entraide, littéralement « famille élargie »", "Une politique de non-alignement diplomatique"],
        correctIndex: 2,
        explanation: "L'ujamaa, mot swahili signifiant « famille élargie », désigne un socialisme fondé sur les principes d'entraide que Nyerere attribuait aux sociétés africaines traditionnelles.",
      },
      {
        id: "course-perso-22-julius-nyerere-quiz-4",
        question: "Quelle mesure a contribué à l'unité nationale tanzanienne ?",
        options: ["L'adoption du swahili comme langue nationale", "La création d'une fédération avec le Kenya", "Le maintien de l'anglais comme unique langue officielle", "La suppression des chefferies traditionnelles"],
        correctIndex: 0,
        explanation: "L'imposition du swahili comme langue nationale a donné un ciment commun à plus de cent groupes linguistiques ; la Tanzanie n'a connu ni guerre civile ni coup d'État.",
      },
      {
        id: "course-perso-22-julius-nyerere-quiz-5",
        question: "Qu'a fait Nyerere en 1985, geste rare parmi ses pairs ?",
        options: ["Il a instauré le multipartisme intégral", "Il a quitté volontairement le pouvoir", "Il a fusionné la Tanzanie avec le Mozambique", "Il a renoncé à l'aide internationale"],
        correctIndex: 1,
        explanation: "En 1985, en pleine santé, il quitta volontairement la présidence et organisa sa succession — un précédent rare sur le continent à cette époque.",
      },
    ],
  },
  {
    id: "course-perso-23-haile-selassie",
    categoryId: "perso",
    emoji: "🦁",
    title: "Haile Selassie et la naissance de l'OUA",
    description: "Empereur d'Éthiopie pendant plus de quarante ans, il a plaidé seul devant la Société des Nations, présidé la naissance de l'unité africaine, et fini renversé par une révolution. Une trajectoire à deux versants.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-23-haile-selassie-lesson-1",
        title: "Ras Tafari Makonnen",
        blocks: [
          { type: "paragraphe", text: "Tafari Makonnen naît le 23 juillet 1892 à Ejersa Goro, dans la province du Harar. Son père, le ras Makonnen, est un cousin et un général de l'empereur Menelik II, vainqueur d'Adoua. Éduqué par des précepteurs éthiopiens et français, Tafari est nommé très jeune gouverneur de province et se distingue par son intelligence politique. Dans la crise de succession qui suit la mort de Menelik, il s'impose progressivement : en 1916, il devient régent et héritier du trône, avec le titre de ras — d'où le nom de « Ras Tafari » sous lequel il est alors connu. Il gouverne aux côtés de l'impératrice Zewditou, fille de Menelik. Réformateur, il fait adhérer l'Éthiopie à la Société des Nations en 1923, abolit officiellement l'esclavage, envoie des étudiants se former à l'étranger et voyage en Europe. À la mort de Zewditou, en 1930, il est couronné empereur sous le nom de Haile Selassie Iᵉʳ — « puissance de la Trinité »." },
        ],
      },
      {
        id: "course-perso-23-haile-selassie-lesson-2",
        title: "1936 : le discours à Genève",
        blocks: [
          { type: "paragraphe", text: "En octobre 1935, l'Italie fasciste de Mussolini envahit l'Éthiopie, quarante ans après l'humiliation d'Adoua. La guerre est d'une brutalité extrême : l'armée italienne emploie l'aviation et les gaz de combat contre les troupes et les populations civiles, en violation des conventions internationales. Addis-Abeba tombe en mai 1936 et l'empereur part en exil. Le 30 juin 1936, il se présente devant l'assemblée de la Société des Nations à Genève — seul chef d'État africain indépendant à y siéger — et prononce le discours qui fixera son image dans le monde entier. Il y décrit les gaz déversés sur les villages, dénonce l'agression, et avertit l'assemblée que si la sécurité collective n'est pas appliquée à un petit État aujourd'hui, elle ne protégera personne demain : « C'est nous aujourd'hui. Ce sera vous demain. » Les grandes puissances ne font rien. Trois ans plus tard, la guerre mondiale commence." },
        ],
      },
      {
        id: "course-perso-23-haile-selassie-lesson-3",
        title: "Moderniser l'Éthiopie",
        blocks: [
          { type: "paragraphe", text: "Revenu au pouvoir en 1941 avec l'appui des forces britanniques et de la résistance éthiopienne — les arbegnoch, « patriotes », qui n'avaient jamais cessé de combattre —, Haile Selassie entreprend de moderniser l'État. Il promulgue des constitutions, crée une administration centrale au détriment des grands féodaux, fonde l'université d'Addis-Abeba, développe les écoles, l'aviation civile et les infrastructures. Sur le plan diplomatique, l'Éthiopie devient membre fondateur de l'Organisation des Nations unies et joue un rôle actif dans le mouvement des non-alignés. Mais la modernisation reste partielle : le régime demeure une monarchie absolue appuyée sur une aristocratie foncière, la réforme agraire attendue n'a pas lieu, et la paysannerie continue de vivre sous un système de redevances écrasantes. Ce décalage entre une élite formée et un pays maintenu en l'état finira par se retourner contre lui." },
        ],
      },
      {
        id: "course-perso-23-haile-selassie-lesson-4",
        title: "Addis-Abeba, capitale de l'unité africaine",
        blocks: [
          { type: "paragraphe", text: "L'Éthiopie possède un capital symbolique unique : c'est le seul pays africain qui n'a jamais été durablement colonisé, et Adoua en a fait, pour tout le continent, la preuve vivante qu'une puissance européenne pouvait être vaincue. Haile Selassie s'en sert méthodiquement. Il soutient les mouvements d'indépendance, accueille des étudiants africains, se pose en médiateur entre les blocs rivaux du continent — le groupe de Casablanca de Nkrumah et le groupe de Monrovia. Le 25 mai 1963, il réunit à Addis-Abeba les chefs d'État de trente-deux pays africains indépendants, préside la conférence et obtient un compromis entre les deux courants. L'Organisation de l'unité africaine (OUA) est créée ce jour-là, avec son siège à Addis-Abeba, et Haile Selassie en devient le premier président en exercice. L'Union africaine, qui lui succède en 2002, le compte parmi ses pères fondateurs. Le 25 mai est resté la Journée de l'Afrique." },
        ],
      },
      {
        id: "course-perso-23-haile-selassie-lesson-5",
        title: "La chute de 1974 et une figure ambivalente",
        blocks: [
          { type: "paragraphe", text: "Au début des années 1970, la situation intérieure se dégrade. Une famine frappe la province du Wollo en 1972-1973, faisant des dizaines de milliers de morts ; le pouvoir tarde à réagir et tente d'en minimiser l'ampleur, ce qui provoque une indignation profonde quand un documentaire étranger la révèle. S'y ajoutent l'inflation, les grèves, la contestation étudiante et le mécontentement de l'armée. En 1974, un groupe d'officiers, le Derg, prend le pouvoir par étapes et dépose l'empereur le 12 septembre. Détenu au palais, il meurt en août 1975 dans des circonstances non élucidées ; ses restes ne seront retrouvés et inhumés que bien plus tard. Le Derg, dirigé par Mengistu Haile Mariam, instaure un régime militaire d'une violence extrême. La mémoire de Haile Selassie est ainsi partagée : figure de la souveraineté africaine et fondateur de l'unité continentale d'un côté, souverain absolu d'un pays maintenu dans l'inégalité de l'autre. Il est par ailleurs vénéré comme une figure messianique par le mouvement rastafari, né en Jamaïque à partir de son nom de régent — un culte qu'il n'a jamais revendiqué." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-23-haile-selassie-quiz-1",
        question: "Sous quel nom Haile Selassie était-il connu avant son couronnement ?",
        options: ["Ras Tafari", "Ras Makonnen", "Négus Menelik", "Ras Zewditou"],
        correctIndex: 0,
        explanation: "Devenu régent en 1916 avec le titre de ras, il était connu sous le nom de Ras Tafari Makonnen. Il fut couronné empereur en 1930 sous le nom de Haile Selassie Iᵉʳ.",
      },
      {
        id: "course-perso-23-haile-selassie-quiz-2",
        question: "Devant quelle organisation a-t-il prononcé son célèbre discours de 1936 ?",
        options: ["L'Organisation des Nations unies", "La Société des Nations", "La Ligue arabe", "L'Organisation de l'unité africaine"],
        correctIndex: 1,
        explanation: "Le 30 juin 1936, après l'invasion italienne, il s'adressa à la Société des Nations à Genève pour dénoncer l'agression et l'emploi de gaz de combat, avertissant : « C'est nous aujourd'hui. Ce sera vous demain. »",
      },
      {
        id: "course-perso-23-haile-selassie-quiz-3",
        question: "Quel événement s'est produit à Addis-Abeba le 25 mai 1963 ?",
        options: ["Le couronnement de Haile Selassie", "La signature du traité de paix avec l'Italie", "La création de l'Organisation de l'unité africaine", "La proclamation de la République d'Éthiopie"],
        correctIndex: 2,
        explanation: "Haile Selassie réunit ce jour-là les chefs d'État de trente-deux pays africains indépendants ; l'OUA fut créée, avec son siège à Addis-Abeba, et il en devint le premier président en exercice. Le 25 mai est la Journée de l'Afrique.",
      },
      {
        id: "course-perso-23-haile-selassie-quiz-4",
        question: "Quel atout symbolique l'Éthiopie apportait-elle au projet d'unité africaine ?",
        options: ["Elle était le pays le plus peuplé du continent", "Elle était le seul pays jamais durablement colonisé", "Elle possédait la plus ancienne université d'Afrique", "Elle était le premier producteur d'or africain"],
        correctIndex: 1,
        explanation: "Seul pays africain n'ayant jamais été durablement colonisé, l'Éthiopie était, depuis la victoire d'Adoua, la preuve vivante qu'une puissance européenne pouvait être vaincue.",
      },
      {
        id: "course-perso-23-haile-selassie-quiz-5",
        question: "Quel facteur intérieur a précipité sa chute en 1974 ?",
        options: ["Une invasion de la Somalie", "Un référendum perdu", "Une famine dans le Wollo, longtemps minimisée par le pouvoir", "La sécession de la province du Harar"],
        correctIndex: 2,
        explanation: "La famine du Wollo de 1972-1973, que le pouvoir tarda à reconnaître, provoqua une indignation profonde ; s'y ajoutèrent inflation, grèves et contestation, jusqu'à sa déposition par le Derg.",
      },
    ],
  },
  {
    id: "course-perso-24-patrice-lumumba",
    categoryId: "perso",
    emoji: "🕊️",
    title: "Patrice Lumumba, sept mois qui ont marqué le siècle",
    description: "Il fut Premier ministre du Congo pendant moins de trois mois et assassiné à trente-cinq ans. Soixante ans après, Patrice Lumumba reste l'un des noms les plus puissants du panafricanisme.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-24-patrice-lumumba-lesson-1",
        title: "Le Congo belge et la formation d'un autodidacte",
        blocks: [
          { type: "paragraphe", text: "Le Congo belge est un cas extrême dans l'histoire coloniale. D'abord propriété personnelle du roi Léopold II sous le nom d'État indépendant du Congo, il fut le théâtre d'une exploitation du caoutchouc d'une violence telle qu'elle provoqua un scandale international et contraignit la Belgique à en reprendre l'administration en 1908. Le régime qui suit repose sur une doctrine explicite : développer les infrastructures et l'enseignement primaire, mais empêcher la formation d'une élite politique africaine. À la veille de l'indépendance, le pays compte à peine une poignée de diplômés universitaires congolais. Patrice Émery Lumumba naît en 1925 dans la province du Kasaï. Formé à l'école des missions, il devient employé des postes puis commis à Stanleyville, se forme seul par la lecture, écrit dans la presse, milite dans les associations d'« évolués » — cette catégorie administrative d'Africains jugés assimilés — et devient un orateur remarqué." },
        ],
      },
      {
        id: "course-perso-24-patrice-lumumba-lesson-2",
        title: "Le Mouvement national congolais",
        blocks: [
          { type: "paragraphe", text: "En 1958, Lumumba fonde le Mouvement national congolais (MNC). Sa différence avec les autres formations est décisive : alors que la plupart des partis congolais se constituent sur des bases régionales ou ethniques, le MNC est explicitement unitaire et national, refusant que le pays se fragmente. La même année, Lumumba assiste à la conférence panafricaine d'Accra organisée par Nkrumah, où il rencontre les figures du continent et revient transformé. En janvier 1959, des émeutes à Léopoldville font des dizaines de morts et ébranlent la certitude belge d'avoir le temps. Bruxelles accélère brutalement le calendrier. Lumumba est emprisonné, puis libéré pour participer à la Table ronde de Bruxelles en janvier 1960, où l'indépendance est fixée au 30 juin 1960 — six mois plus tard. Aux élections de mai, le MNC arrive en tête. Lumumba devient Premier ministre, Joseph Kasa-Vubu président." },
        ],
      },
      {
        id: "course-perso-24-patrice-lumumba-lesson-3",
        title: "Le discours du 30 juin 1960",
        blocks: [
          { type: "paragraphe", text: "La cérémonie d'indépendance, à Léopoldville, devait être une célébration consensuelle. Le roi Baudouin y prononce un discours louant l'œuvre civilisatrice de Léopold II ; Kasa-Vubu répond dans un registre courtois. Puis Lumumba, qui n'était pas prévu à la tribune, prend la parole. Il s'adresse aux Congolais et non au roi, et énumère ce que la colonisation a réellement été : le travail forcé, les salaires de misère, les logements et les lois séparées, les insultes quotidiennes, les prisons pour ceux qui protestaient. Il déclare que cette indépendance n'a pas été octroyée mais conquise par la lutte. Le discours provoque un choc immédiat à Bruxelles et fait de Lumumba, dans l'heure, une figure mondiale — et pour certaines chancelleries occidentales, un homme à écarter. Ce texte reste l'un des plus cités de l'histoire politique africaine." },
        ],
      },
      {
        id: "course-perso-24-patrice-lumumba-lesson-4",
        title: "Sécession, crise et intervention étrangère",
        blocks: [
          { type: "paragraphe", text: "Tout s'effondre en quelques jours. Début juillet, l'armée se mutine contre son encadrement resté entièrement belge. La Belgique envoie des troupes sans l'accord du gouvernement congolais. Le 11 juillet, la province du Katanga, qui concentre l'essentiel des richesses minières du pays, fait sécession sous la conduite de Moïse Tshombé, avec l'appui de la Belgique et des intérêts miniers ; le Sud-Kasaï suit. Lumumba demande l'aide de l'ONU, qui déploie une force mais refuse de l'employer contre la sécession katangaise. Il se tourne alors vers l'Union soviétique pour obtenir un appui logistique — ce qui, en pleine guerre froide, achève de le désigner comme une menace aux yeux de Washington et de Bruxelles. En septembre 1960, Kasa-Vubu le révoque, Lumumba conteste la révocation, et le colonel Mobutu neutralise les deux pouvoirs par un coup de force. Lumumba est placé en résidence surveillée." },
        ],
      },
      {
        id: "course-perso-24-patrice-lumumba-lesson-5",
        title: "L'assassinat et la mémoire",
        blocks: [
          { type: "paragraphe", text: "Il s'échappe fin novembre pour rejoindre ses partisans à Stanleyville, mais il est capturé. Le 17 janvier 1961, il est transféré par avion au Katanga, aux mains de ses adversaires les plus déterminés, avec deux compagnons, Maurice Mpolo et Joseph Okito. Tous trois sont torturés puis exécutés le soir même, et leurs corps dissous dans l'acide pour ne laisser aucune trace. Il avait trente-cinq ans. Une commission d'enquête parlementaire belge a conclu en 2001 à une responsabilité morale de la Belgique dans les circonstances de sa mort, et le gouvernement belge a présenté des excuses ; en 2022, une dent — seul reste identifié — a été restituée à sa famille. La disparition de Lumumba ouvre une longue période : Mobutu prend le pouvoir en 1965 et gouverne le pays pendant trente-deux ans. Mais son nom, lui, a essaimé bien au-delà du Congo : rues, universités, mouvements et chansons le portent sur tout le continent. Il est devenu la figure de l'indépendance confisquée." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-24-patrice-lumumba-quiz-1",
        question: "Quelle était la particularité du Mouvement national congolais fondé par Lumumba ?",
        options: ["Il était unitaire et national, non régional ou ethnique", "Il réunissait uniquement les anciens combattants", "Il refusait de participer aux élections", "Il militait pour le maintien du lien avec la Belgique"],
        correctIndex: 0,
        explanation: "Alors que la plupart des partis congolais se constituaient sur des bases régionales ou ethniques, le MNC était explicitement unitaire et national, refusant la fragmentation du pays.",
      },
      {
        id: "course-perso-24-patrice-lumumba-quiz-2",
        question: "Qu'est-ce qui rend célèbre le discours de Lumumba du 30 juin 1960 ?",
        options: ["Il annonçait la nationalisation des mines", "Il énumérait publiquement les réalités de la colonisation, devant le roi des Belges", "Il proclamait l'adhésion du Congo au bloc soviétique", "Il proposait une fédération avec le Congo-Brazzaville"],
        correctIndex: 1,
        explanation: "Prenant la parole sans y être prévu, Lumumba s'adressa aux Congolais et énuméra le travail forcé, les salaires de misère et les lois séparées, affirmant que l'indépendance avait été conquise et non octroyée.",
      },
      {
        id: "course-perso-24-patrice-lumumba-quiz-3",
        question: "Quelle province a fait sécession en juillet 1960 ?",
        options: ["Le Kivu", "L'Équateur", "Le Katanga", "La Province orientale"],
        correctIndex: 2,
        explanation: "Le Katanga, qui concentrait l'essentiel des richesses minières, fit sécession le 11 juillet 1960 sous la conduite de Moïse Tshombé, avec l'appui de la Belgique et des intérêts miniers.",
      },
      {
        id: "course-perso-24-patrice-lumumba-quiz-4",
        question: "Pourquoi Lumumba se tourne-t-il vers l'Union soviétique ?",
        options: ["Parce qu'il avait adhéré au parti communiste", "Parce que l'ONU refusait d'employer sa force contre la sécession katangaise", "Parce que la Belgique le lui avait conseillé", "Parce qu'il voulait quitter les Nations unies"],
        correctIndex: 1,
        explanation: "L'ONU avait déployé une force mais refusait de l'utiliser contre la sécession. Lumumba demanda un appui logistique soviétique — ce qui, en pleine guerre froide, le désigna comme une menace pour Washington et Bruxelles.",
      },
      {
        id: "course-perso-24-patrice-lumumba-quiz-5",
        question: "Qu'a conclu la commission d'enquête parlementaire belge en 2001 ?",
        options: ["Que la Belgique n'avait joué aucun rôle", "Que la mort de Lumumba était accidentelle", "Qu'il existait une responsabilité morale de la Belgique", "Que les responsables étaient exclusivement congolais"],
        correctIndex: 2,
        explanation: "La commission a conclu à une responsabilité morale de la Belgique dans les circonstances de l'assassinat ; le gouvernement belge a présenté des excuses, et une dent — seul reste identifié — a été restituée à la famille en 2022.",
      },
    ],
  },
  {
    id: "course-perso-25-jeanne-martin-cisse",
    categoryId: "perso",
    emoji: "🤝",
    title: "Jeanne Martin Cissé et les mères fondatrices",
    description: "Un an avant l'OUA, des femmes africaines créaient leur propre organisation continentale. Jeanne Martin Cissé en fut la première secrétaire générale — et la première femme à présider le Conseil de sécurité de l'ONU.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-25-jeanne-martin-cisse-lesson-1",
        title: "Une institutrice guinéenne en politique",
        blocks: [
          { type: "paragraphe", text: "Jeanne Martin Cissé naît en 1926 à Kankan, en Guinée, alors colonie française. Elle est formée à l'École normale de jeunes filles de Rufisque, au Sénégal — un établissement décisif dans l'histoire des femmes d'Afrique de l'Ouest francophone, qui a formé la plupart des premières institutrices africaines de la région et, par là, une grande partie des militantes de la génération des indépendances. Devenue enseignante puis directrice d'école, elle s'engage dans le syndicalisme et dans le mouvement politique guinéen. En 1958, la Guinée est le seul territoire d'Afrique française à voter « non » au référendum proposé par de Gaulle et accède immédiatement à l'indépendance, dans un isolement brutal — la France retire ses cadres, ses équipements et son aide. Jeanne Martin Cissé appartient à cette génération qui doit tout construire sans transition, et qui considère l'engagement des femmes comme une condition de ce chantier, non comme une revendication séparée." },
        ],
      },
      {
        id: "course-perso-25-jeanne-martin-cisse-lesson-2",
        title: "Dar es-Salaam, juillet 1962",
        blocks: [
          { type: "paragraphe", text: "Un fait est très largement ignoré : l'organisation continentale des femmes africaines est née avant celle des chefs d'État. En juillet 1962, à Dar es-Salaam, au Tanganyika, se tient la première Conférence des femmes africaines. Quatorze pays et une douzaine de mouvements de libération y sont représentés — venus de territoires indépendants comme de territoires encore colonisés. Les participantes décident de créer une plateforme commune pour la solidarité et la mobilisation : l'Union des femmes africaines. Leurs objectifs sont explicitement politiques : soutenir les luttes d'indépendance, combattre l'apartheid et la ségrégation sous toutes leurs formes, et obtenir la participation des femmes africaines aux structures de décision politique. La même conférence proclame le 31 juillet Journée de la femme africaine, célébrée depuis chaque année. L'Organisation de l'unité africaine ne sera fondée qu'un an plus tard, en mai 1963." },
        ],
      },
      {
        id: "course-perso-25-jeanne-martin-cisse-lesson-3",
        title: "La PAWO et ses fondatrices",
        blocks: [
          { type: "paragraphe", text: "En 1974, l'Union des femmes africaines devient l'Organisation panafricaine des femmes (PAWO), dont Jeanne Martin Cissé avait été la première secrétaire générale. L'organisation est aujourd'hui présente dans les 55 États membres de l'Union africaine, avec cinq représentations régionales. Ses fondatrices forment une liste que l'Union africaine honore sous le nom de « mères fondatrices » et qui mérite d'être connue : Aoua Keïta pour le Mali, Funmilayo Ransome-Kuti pour le Nigeria, Gisèle Rabesahala pour Madagascar, Bibi Titi Mohamed pour le Tanganyika, Huda Shaarawi pour l'Égypte, Marie Koré pour la Côte d'Ivoire, Angie Brooks pour le Liberia, Alda do Espírito Santo pour São Tomé, Putuse Apollos pour la Namibie, Adelaide Tambo et Albertina Sisulu pour l'Afrique du Sud, Josina Machel pour le Mozambique, parmi des dizaines d'autres. Beaucoup étaient institutrices, sages-femmes ou syndicalistes — des métiers qui donnaient accès aux populations et permettaient d'organiser." },
        ],
      },
      {
        id: "course-perso-25-jeanne-martin-cisse-lesson-4",
        title: "1972 : présider le Conseil de sécurité",
        blocks: [
          { type: "paragraphe", text: "La carrière de Jeanne Martin Cissé se poursuit sur la scène internationale. Elle est élue députée à l'Assemblée nationale guinéenne, dont elle devient vice-présidente, puis nommée ambassadrice de la Guinée auprès des Nations unies. En 1972, la Guinée siégeant comme membre non permanent du Conseil de sécurité, elle en assure la présidence tournante : elle devient la première femme de l'histoire à présider le Conseil de sécurité des Nations unies. Elle y consacre son mandat à une cause précise : durcir la position internationale contre le régime d'apartheid sud-africain, plaidant pour l'adoption de sanctions et pour la reconnaissance des mouvements de libération d'Afrique australe. Elle sera ensuite ministre des Affaires sociales de son pays. Elle meurt en 2017, à quatre-vingt-onze ans." },
        ],
      },
      {
        id: "course-perso-25-jeanne-martin-cisse-lesson-5",
        title: "Les fondatrices oubliées de l'unité africaine",
        blocks: [
          { type: "paragraphe", text: "Pourquoi ces noms sont-ils si peu connus ? L'Union africaine elle-même pose la question en consacrant à ces femmes une page de son site officiel du soixantenaire de l'OUA : elle rappelle que « les femmes étaient au premier rang de la libération et doivent être célébrées parmi les héros de l'Afrique ». Plusieurs facteurs se conjuguent. Les récits nationaux des indépendances se sont construits autour de figures masculines devenues chefs d'État ; les archives ont mieux conservé les discours officiels que les procès-verbaux d'organisations de femmes ; et l'histoire de la mobilisation sociale a longtemps été jugée moins importante que celle des institutions. Le travail de l'UNESCO avec son projet Femmes dans l'histoire de l'Afrique et celui de l'Union africaine avec ses Founding Mothers visent précisément à corriger ce déséquilibre. Retenir un fait suffit à changer le regard : la première organisation panafricaine née à l'échelle du continent fut celle des femmes, et elle précède l'OUA d'un an." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-25-jeanne-martin-cisse-quiz-1",
        question: "Où et quand s'est tenue la première Conférence des femmes africaines ?",
        options: ["À Accra, en 1958", "À Dar es-Salaam, en juillet 1962", "À Addis-Abeba, en mai 1963", "À Conakry, en 1960"],
        correctIndex: 1,
        explanation: "La conférence s'est tenue à Dar es-Salaam en juillet 1962, réunissant quatorze pays et une douzaine de mouvements de libération — un an avant la fondation de l'OUA.",
      },
      {
        id: "course-perso-25-jeanne-martin-cisse-quiz-2",
        question: "Quelle organisation est née de cette conférence ?",
        options: ["L'Organisation panafricaine des femmes (PAWO)", "La Commission de la condition de la femme de l'ONU", "L'Union des femmes de l'Ouest africain", "Le Conseil international des femmes"],
        correctIndex: 0,
        explanation: "La conférence créa l'Union des femmes africaines, renommée Organisation panafricaine des femmes (PAWO) en 1974. Elle est aujourd'hui présente dans les 55 États membres de l'Union africaine.",
      },
      {
        id: "course-perso-25-jeanne-martin-cisse-quiz-3",
        question: "Quelle date a été proclamée Journée de la femme africaine ?",
        options: ["Le 8 mars", "Le 25 mai", "Le 31 juillet", "Le 11 octobre"],
        correctIndex: 2,
        explanation: "La conférence de Dar es-Salaam proclama le 31 juillet Journée de la femme africaine, célébrée chaque année depuis 1962.",
      },
      {
        id: "course-perso-25-jeanne-martin-cisse-quiz-4",
        question: "Quelle première historique Jeanne Martin Cissé réalise-t-elle en 1972 ?",
        options: ["Elle devient la première femme cheffe d'État africaine", "Elle préside pour la première fois l'Assemblée générale de l'ONU", "Elle devient la première femme à présider le Conseil de sécurité de l'ONU", "Elle est la première femme élue à l'Assemblée nationale guinéenne"],
        correctIndex: 2,
        explanation: "La Guinée siégeant comme membre non permanent, elle assura la présidence tournante du Conseil de sécurité en 1972 — une première mondiale — et y plaida pour des sanctions contre l'apartheid.",
      },
      {
        id: "course-perso-25-jeanne-martin-cisse-quiz-5",
        question: "Quel métier exerçaient beaucoup des mères fondatrices de la PAWO ?",
        options: ["Journalistes", "Institutrices, sages-femmes ou syndicalistes", "Avocates", "Commerçantes internationales"],
        correctIndex: 1,
        explanation: "Beaucoup étaient institutrices, sages-femmes ou syndicalistes — des métiers qui donnaient un accès direct aux populations et permettaient d'organiser la mobilisation.",
      },
    ],
  },
  {
    id: "course-perso-26-funmilayo-ransome-kuti",
    categoryId: "perso",
    emoji: "✊",
    title: "Funmilayo Ransome-Kuti, la lionne d'Abeokuta",
    description: "Elle a organisé vingt mille femmes, fait tomber un roi et arraché aux Britanniques le droit de vote des Nigérianes. Funmilayo Ransome-Kuti, la femme la plus redoutée du Nigeria colonial.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-26-funmilayo-ransome-kuti-lesson-1",
        title: "Une jeunesse de premières fois",
        blocks: [
          { type: "paragraphe", text: "Frances Abigail Olufunmilayo Thomas naît en 1900 à Abeokuta, en pays yoruba, dans l'actuel Nigeria. Sa famille est chrétienne et lettrée ; son père descend d'un ancêtre libéré d'un navire négrier et rétabli en Sierra Leone. Elle est la première élève fille admise à l'Abeokuta Grammar School, jusque-là réservée aux garçons. Envoyée poursuivre ses études en Angleterre, elle y séjourne trois ans et revient en 1922 avec une double conviction : la valeur de l'instruction et le refus de la condescendance coloniale. C'est à ce retour qu'elle abandonne son prénom anglais Frances pour n'utiliser que Funmilayo, son nom yoruba — geste politique avant l'heure. Elle devient enseignante, épouse le pasteur et éducateur Israel Oludotun Ransome-Kuti, et se fait remarquer par une série de premières : elle serait la première femme du pays à conduire une automobile, et l'une des premières à se déplacer à moto." },
        ],
      },
      {
        id: "course-perso-26-funmilayo-ransome-kuti-lesson-2",
        title: "L'Abeokuta Women's Union",
        blocks: [
          { type: "paragraphe", text: "Elle commence par des cours d'alphabétisation destinés aux femmes du marché, puis comprend que leur problème n'est pas seulement l'instruction. Le système colonial britannique repose sur l'administration indirecte : les Britanniques gouvernent par l'intermédiaire des autorités traditionnelles, et à Abeokuta par l'alake, le souverain. Or les femmes du marché, qui font vivre l'économie locale, subissent un impôt forfaitaire dont elles sont les seules à s'acquitter directement, des réquisitions arbitraires de riz par les agents chargés du contrôle des prix, et des humiliations lors des contrôles. Funmilayo transforme son club de dames instruites en une organisation de masse ouverte à toutes : l'Abeokuta Women's Union (AWU), qui atteindra plus de vingt mille membres. Elle impose que les réunions se tiennent en yoruba et non en anglais, adopte le vêtement traditionnel, et abolit toute distinction entre les femmes lettrées et celles du marché. C'est ce qui fera sa force." },
        ],
      },
      {
        id: "course-perso-26-funmilayo-ransome-kuti-lesson-3",
        title: "Faire tomber un roi",
        blocks: [
          { type: "paragraphe", text: "Entre 1946 et 1949, l'AWU engage l'épreuve de force. Les femmes refusent de payer l'impôt, déposent des pétitions détaillées, organisent des veillées de protestation devant le palais — parfois des jours entiers, avec chants et danses satiriques, une forme de contestation collective enracinée dans les pratiques yoruba. Elles subissent gaz lacrymogènes et arrestations sans céder. Leur revendication est double : la suppression de l'impôt frappant les femmes, et la représentation des femmes dans les organes de décision — car, argumentent-elles, il n'y a pas d'imposition légitime sans participation. L'issue est spectaculaire : l'impôt est supprimé, quatre femmes entrent au conseil local, et l'alake Ademola II, contraint et discrédité, doit abdiquer en 1949. Il ne reviendra qu'en 1950. Rares sont les mouvements coloniaux de femmes ayant obtenu un tel résultat, et il est obtenu sans une seule arme." },
        ],
      },
      {
        id: "course-perso-26-funmilayo-ransome-kuti-lesson-4",
        title: "Le suffrage, l'indépendance, le monde",
        blocks: [
          { type: "paragraphe", text: "Le combat s'élargit. Funmilayo fonde la Federation of Nigerian Women's Societies, qui fédère les organisations de femmes à l'échelle du pays et revendique le droit de vote. Elle rejoint le mouvement nationaliste, devient l'une des rares femmes aux instances dirigeantes du principal parti indépendantiste, et participe aux délégations qui négocient l'avenir constitutionnel du Nigeria à Londres. Le suffrage féminin est acquis dans le sud du pays avant l'indépendance de 1960 — plus tardivement dans le nord. Sur la scène internationale, elle voyage beaucoup, siège dans des organisations féminines mondiales, se rend en Union soviétique, en Chine — où elle rencontre Mao Zedong — et en Europe de l'Est. Ces voyages lui valent le retrait de son passeport par les autorités nigérianes, qui la soupçonnent de sympathies communistes. En 1962, elle est l'une des fondatrices de l'Organisation panafricaine des femmes à Dar es-Salaam." },
        ],
      },
      {
        id: "course-perso-26-funmilayo-ransome-kuti-lesson-5",
        title: "Une famille, un héritage",
        blocks: [
          { type: "paragraphe", text: "La famille Ransome-Kuti occupe une place singulière dans l'histoire nigériane. Ses fils sont Fela Anikulapo Kuti, créateur de l'afrobeat et opposant permanent aux régimes militaires, Beko Ransome-Kuti, médecin et figure majeure de la défense des droits humains, et Olikoye Ransome-Kuti, médecin et ministre de la Santé reconnu pour son action en santé publique ; l'écrivain Wole Soyinka, prix Nobel de littérature, est son parent. En février 1977, l'armée nigériane attaque la résidence de Fela à Lagos, la Kalakuta Republic, en représailles à ses chansons. Funmilayo, âgée de soixante-dix-sept ans, est jetée par une fenêtre de l'étage. Elle ne se remettra pas de ses blessures et meurt en avril 1978. Fela déposera symboliquement son cercueil devant la caserne de Lagos et lui consacrera le morceau Coffin for Head of State. Elle est aujourd'hui honorée par l'UNESCO et par l'Union africaine, qui la compte parmi les mères fondatrices du panafricanisme." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-26-funmilayo-ransome-kuti-quiz-1",
        question: "Dans quel pays Funmilayo Ransome-Kuti a-t-elle mené son combat ?",
        options: ["Au Ghana", "Au Nigeria", "Au Cameroun", "En Sierra Leone"],
        correctIndex: 1,
        explanation: "Née en 1900 à Abeokuta, en pays yoruba, elle a mené l'essentiel de son action au Nigeria, alors colonie britannique.",
      },
      {
        id: "course-perso-26-funmilayo-ransome-kuti-quiz-2",
        question: "Combien de membres comptait l'Abeokuta Women's Union ?",
        options: ["Environ deux cents", "Environ deux mille", "Plus de vingt mille", "Plus de deux cent mille"],
        correctIndex: 2,
        explanation: "L'AWU dépassa les vingt mille membres, en réunissant sans distinction les femmes lettrées et celles du marché, avec des réunions tenues en yoruba plutôt qu'en anglais.",
      },
      {
        id: "course-perso-26-funmilayo-ransome-kuti-quiz-3",
        question: "Quel était l'argument central des femmes d'Abeokuta contre l'impôt ?",
        options: ["Que l'impôt était trop élevé pour les commerçantes", "Qu'il n'y a pas d'imposition légitime sans participation aux décisions", "Que seules les femmes mariées devaient être imposées", "Que l'impôt devait être payé en nature"],
        correctIndex: 1,
        explanation: "Elles revendiquaient à la fois la suppression de l'impôt frappant les femmes et leur représentation dans les organes de décision, au motif qu'il n'y a pas d'imposition légitime sans participation.",
      },
      {
        id: "course-perso-26-funmilayo-ransome-kuti-quiz-4",
        question: "Quel résultat spectaculaire le mouvement a-t-il obtenu en 1949 ?",
        options: ["L'abdication de l'alake d'Abeokuta", "L'indépendance immédiate de la région", "La nomination d'une femme au poste de gouverneur", "La fermeture de l'administration coloniale d'Abeokuta"],
        correctIndex: 0,
        explanation: "L'impôt fut supprimé, quatre femmes entrèrent au conseil local, et l'alake Ademola II, contraint et discrédité, dut abdiquer en 1949 — sans qu'une seule arme ait été employée.",
      },
      {
        id: "course-perso-26-funmilayo-ransome-kuti-quiz-5",
        question: "Quel musicien nigérian était son fils ?",
        options: ["King Sunny Adé", "Fela Anikulapo Kuti", "Babatunde Olatunji", "Tony Allen"],
        correctIndex: 1,
        explanation: "Fela Kuti, créateur de l'afrobeat, était son fils. C'est lors d'une attaque de l'armée contre la résidence de Fela, en 1977, qu'elle fut jetée par une fenêtre ; elle mourut de ses blessures en 1978.",
      },
    ],
  },
  {
    id: "course-perso-27-aoua-keita",
    categoryId: "perso",
    emoji: "🩺",
    title: "Aoua Keïta, sage-femme et députée",
    description: "Première femme élue à une assemblée nationale en Afrique occidentale francophone, fondatrice de l'organisation panafricaine des femmes, et autrice d'un livre où elle raconte tout. Aoua Keïta n'a jamais demandé la permission.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-27-aoua-keita-lesson-1",
        title: "Sage-femme dans le Soudan français",
        blocks: [
          { type: "paragraphe", text: "Aoua Keïta naît en 1912 à Bamako, dans le Soudan français — l'actuel Mali. Son père, militaire, décide de la scolariser, ce qui suscite l'hostilité d'une partie de l'entourage familial : envoyer une fille à l'école française est alors une décision contestée. Elle poursuit néanmoins jusqu'à l'École de médecine de Dakar, où elle obtient en 1931 son diplôme de sage-femme. Elle est affectée à Gao, puis dans plusieurs localités du pays. Ce métier, qu'elle exercera pendant des décennies, est la clé de tout son parcours politique : une sage-femme entre dans les familles, connaît les conditions réelles d'existence des femmes, gagne leur confiance et parle avec une autorité que personne ne lui conteste. Elle constate au quotidien la mortalité maternelle, le poids des mariages précoces, l'absence de soins — et comprend que ces réalités ne relèvent pas de la fatalité mais de décisions politiques." },
        ],
      },
      {
        id: "course-perso-27-aoua-keita-lesson-2",
        title: "L'entrée en politique",
        blocks: [
          { type: "paragraphe", text: "Après la Seconde Guerre mondiale, l'Afrique occidentale française connaît un réveil politique : les partis se créent, les syndicats se structurent, les assemblées territoriales apparaissent. Aoua Keïta rejoint l'Union soudanaise-RDA, section soudanaise du Rassemblement démocratique africain, le grand mouvement interterritorial dirigé notamment par Félix Houphouët-Boigny et où milite Modibo Keïta. Elle y fait un travail que peu font : elle organise les femmes, crée une section féminine du parti, monte un syndicat de sages-femmes, parcourt les villages pour recruter et former des militantes. Son engagement lui coûte cher. Elle est mutée à répétition par l'administration coloniale, qui utilise l'affectation comme sanction ; son mariage n'y résiste pas, et elle divorce — un choix qu'elle assumera publiquement. Elle continue." },
        ],
      },
      {
        id: "course-perso-27-aoua-keita-lesson-3",
        title: "Première députée",
        blocks: [
          { type: "paragraphe", text: "En 1959, à la veille de l'indépendance, Aoua Keïta est élue à l'Assemblée législative du Soudan français — devenant la première femme élue à une assemblée nationale en Afrique occidentale francophone. L'année suivante, le Mali accède à l'indépendance et elle siège à l'Assemblée nationale du nouvel État. Elle entre également au bureau politique de l'Union soudanaise-RDA, seule femme parmi les dirigeants du parti au pouvoir. Elle y défend des positions constantes : la formation des femmes, l'accès aux soins et à la maternité, l'encadrement juridique du mariage, la place des femmes dans les instances politiques — non comme une catégorie à protéger mais comme une force à mobiliser. Elle a une formule directe pour résumer sa conviction : un pays qui laisse la moitié de sa population à l'écart ne se développera pas." },
        ],
      },
      {
        id: "course-perso-27-aoua-keita-lesson-4",
        title: "Dar es-Salaam, 1962",
        blocks: [
          { type: "paragraphe", text: "En juillet 1962, Aoua Keïta fait partie des femmes réunies à Dar es-Salaam pour la première Conférence des femmes africaines, qui donne naissance à l'Union des femmes africaines, future Organisation panafricaine des femmes (PAWO). Elle y côtoie Jeanne Martin Cissé, Funmilayo Ransome-Kuti, Bibi Titi Mohamed, Gisèle Rabesahala et des dizaines d'autres venues de quatorze pays et d'une douzaine de mouvements de libération. L'Union africaine la compte aujourd'hui parmi ses mères fondatrices. Ce que cette réunion établit vaut d'être souligné : ces femmes ne se contentent pas de soutenir les luttes d'indépendance de leurs pays respectifs, elles construisent une structure continentale autonome, avec ses propres objectifs — la fin du colonialisme, la fin de l'apartheid, et l'accès des femmes africaines aux positions de décision. Cette organisation naît un an avant l'OUA." },
        ],
      },
      {
        id: "course-perso-27-aoua-keita-lesson-5",
        title: "Femme d'Afrique : écrire sa propre vie",
        blocks: [
          { type: "paragraphe", text: "En 1975, Aoua Keïta publie Femme d'Afrique. La vie d'Aoua Kéita racontée par elle-même, qui reçoit le Grand prix littéraire d'Afrique noire. Le livre est un document rare : ce n'est ni un essai théorique ni un témoignage recueilli par un tiers, mais une autobiographie politique écrite à la première personne par une militante africaine de sa génération. Elle y raconte l'école contestée, la formation à Dakar, le métier de sage-femme dans les villages, les mutations-sanctions, le divorce, les réunions clandestines, les campagnes électorales, les rivalités du parti — sans lisser les difficultés ni s'ériger en héroïne. Pour les historiens, c'est une source de première main sur la période des indépendances vue depuis l'intérieur d'un parti et depuis la position d'une femme. Aoua Keïta meurt à Bamako en 1980. Un centre de santé et des institutions maliennes portent son nom, et l'UNESCO l'a intégrée à son projet Femmes dans l'histoire de l'Afrique." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-27-aoua-keita-quiz-1",
        question: "Quel métier Aoua Keïta a-t-elle exercé pendant des décennies ?",
        options: ["Institutrice", "Sage-femme", "Journaliste", "Avocate"],
        correctIndex: 1,
        explanation: "Diplômée sage-femme de l'École de médecine de Dakar en 1931, elle exerça dans plusieurs localités du Soudan français. Ce métier lui donnait un accès direct aux familles et à la confiance des femmes.",
      },
      {
        id: "course-perso-27-aoua-keita-quiz-2",
        question: "Quelle première historique réalise-t-elle en 1959 ?",
        options: ["Elle devient la première femme ministre du Mali", "Elle devient la première femme médecin d'Afrique de l'Ouest", "Elle devient la première femme élue à une assemblée nationale en Afrique occidentale francophone", "Elle devient la première femme à diriger un syndicat africain"],
        correctIndex: 2,
        explanation: "Élue en 1959 à l'Assemblée législative du Soudan français, elle est la première femme élue à une assemblée nationale en Afrique occidentale francophone.",
      },
      {
        id: "course-perso-27-aoua-keita-quiz-3",
        question: "Comment l'administration coloniale sanctionnait-elle son engagement ?",
        options: ["Par des mutations répétées", "Par la suspension de son diplôme", "Par une interdiction de quitter Bamako", "Par une amende mensuelle"],
        correctIndex: 0,
        explanation: "L'administration utilisait l'affectation comme sanction et la mutait à répétition. Son mariage n'y résista pas et elle divorça — un choix qu'elle assuma publiquement.",
      },
      {
        id: "course-perso-27-aoua-keita-quiz-4",
        question: "À quelle organisation continentale a-t-elle participé en 1962 ?",
        options: ["À l'Organisation de l'unité africaine", "À l'Organisation panafricaine des femmes", "À la Commission économique pour l'Afrique", "À la Ligue des États africains"],
        correctIndex: 1,
        explanation: "Elle participe à la conférence de Dar es-Salaam de juillet 1962, qui crée l'Union des femmes africaines, future PAWO. L'Union africaine la compte parmi ses mères fondatrices.",
      },
      {
        id: "course-perso-27-aoua-keita-quiz-5",
        question: "Qu'est-ce qui rend son livre Femme d'Afrique (1975) précieux pour les historiens ?",
        options: ["C'est le premier roman écrit en bambara", "C'est une autobiographie politique écrite à la première personne par une militante", "C'est un recueil de discours parlementaires", "C'est une enquête statistique sur la santé maternelle"],
        correctIndex: 1,
        explanation: "Il s'agit d'une autobiographie politique de première main, où elle raconte sans lisser les difficultés la période des indépendances vue de l'intérieur d'un parti et depuis la position d'une femme.",
      },
    ],
  },
  {
    id: "course-perso-28-albertina-sisulu",
    categoryId: "perso",
    emoji: "🌺",
    title: "Albertina Sisulu, mère de la nation",
    description: "Elle a tenu le combat pendant que les hommes étaient à Robben Island : vingt ans d'interdiction, de perquisitions et de prison, sans jamais renoncer. Albertina Sisulu, l'endurance faite politique.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-28-albertina-sisulu-lesson-1",
        title: "Infirmière à Johannesburg",
        blocks: [
          { type: "paragraphe", text: "Nontsikelelo Albertina Thethiwe naît en 1918 à Camama, dans le Transkei, une région rurale pauvre de l'actuelle province du Cap-Oriental. Orpheline de père à onze ans, elle élève ses frères et sœurs tout en poursuivant sa scolarité grâce aux missions catholiques. En 1940, elle obtient une bourse pour se former comme infirmière au General Hospital de Johannesburg. La ville lui apprend en quelques mois ce que la campagne lui avait caché : la ségrégation urbaine, les laissez-passer, les salaires différenciés, les services séparés. Le métier d'infirmière, comme celui de sage-femme ailleurs sur le continent, la met en contact direct avec les conditions de vie des populations noires des townships. C'est à l'hôpital qu'elle rencontre Walter Sisulu, militant de l'ANC, qu'elle épouse en 1944. Nelson Mandela est le témoin du marié. Ce mariage sera aussi un engagement partagé." },
        ],
      },
      {
        id: "course-perso-28-albertina-sisulu-lesson-2",
        title: "La seule femme à la création de l'ANC Youth League",
        blocks: [
          { type: "paragraphe", text: "En 1944 est fondée la Ligue de la jeunesse de l'ANC, qui va radicaliser le mouvement et en renouveler la direction — c'est d'elle que viendront Mandela, Sisulu et Oliver Tambo. Albertina est la seule femme présente à sa réunion de fondation. Elle s'engage ensuite dans la Ligue des femmes de l'ANC et dans la Fédération des femmes sud-africaines (FEDSAW), créée en 1954. En 1948, le Parti national arrive au pouvoir et institue l'apartheid : classification raciale de la population, interdiction des mariages mixtes, ségrégation généralisée, déplacements forcés vers des zones assignées, et surtout extension aux femmes du système des laissez-passer, ces documents que tout Africain devait présenter en permanence sous peine d'arrestation. C'est cette extension qui va déclencher l'une des plus grandes mobilisations de l'histoire du pays." },
        ],
      },
      {
        id: "course-perso-28-albertina-sisulu-lesson-3",
        title: "La marche des vingt mille, 1956",
        blocks: [
          { type: "paragraphe", text: "Le 9 août 1956, vingt mille femmes — africaines, indiennes, métisses et blanches — convergent vers les Union Buildings, siège du gouvernement à Pretoria, pour déposer des pétitions contre l'extension des laissez-passer aux femmes. Albertina Sisulu est parmi les organisatrices, aux côtés de Lilian Ngoyi, Helen Joseph et Rahima Moosa. La marche est silencieuse ; les femmes déposent leurs pétitions, se tiennent immobiles pendant trente minutes, puis entonnent un chant devenu emblématique dont le refrain avertit le pouvoir qu'il a frappé les femmes et heurté un rocher. Le 9 août est aujourd'hui la Journée nationale de la femme en Afrique du Sud. Albertina avait déjà participé, l'année précédente, au Congrès du peuple qui adopta la Charte de la liberté, texte fondateur de l'ANC proclamant que l'Afrique du Sud appartient à tous ceux qui y vivent, noirs et blancs." },
        ],
      },
      {
        id: "course-perso-28-albertina-sisulu-lesson-4",
        title: "Vingt ans d'interdiction",
        blocks: [
          { type: "paragraphe", text: "La répression s'abat. En 1963, Walter Sisulu est arrêté ; au procès de Rivonia, en 1964, il est condamné à la perpétuité avec Mandela et envoyé à Robben Island, où il restera vingt-six ans. Albertina reste seule avec cinq enfants, dans un pays qui fait tout pour l'empêcher d'exister. Elle est la première femme arrêtée en vertu de la loi de 1963 autorisant la détention sans jugement, et subit près de deux mois d'isolement total. Elle est ensuite frappée de banning orders successifs pendant près de vingt ans : interdiction de quitter son quartier, de se trouver avec plus d'une personne à la fois, d'être citée dans la presse, de participer à toute réunion. Ses enfants sont arrêtés, torturés, contraints à l'exil. Elle continue pourtant : elle travaille comme infirmière dans une clinique de Soweto, où elle soigne, informe et fait circuler les messages, sous surveillance permanente." },
        ],
      },
      {
        id: "course-perso-28-albertina-sisulu-lesson-5",
        title: "1994 et la mémoire des femmes",
        blocks: [
          { type: "paragraphe", text: "Quand l'étau se desserre dans les années 1980, elle revient au premier plan : elle est élue coprésidente du Front démocratique uni (UDF), vaste coalition anti-apartheid légale, en 1983, et présidente de la Ligue des femmes de l'ANC. En 1989, elle conduit une délégation qui rencontre plusieurs chefs d'État occidentaux pour plaider le maintien des sanctions. Mandela est libéré en 1990, Walter Sisulu la même année. En 1994, aux premières élections libres, elle est élue députée et c'est elle qui a l'honneur de proposer officiellement la candidature de Nelson Mandela à la présidence devant le Parlement. Elle se retire en 1999 et meurt en 2011. On l'appelle en Afrique du Sud « Ma Sisulu », mère de la nation. L'Union africaine la compte parmi ses mères fondatrices : son parcours rappelle que la lutte anti-apartheid ne s'est pas seulement menée dans les prisons et les tribunaux dont on a retenu les noms, mais aussi, année après année, dans les cliniques et les cuisines des townships, tenue par des femmes." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-28-albertina-sisulu-quiz-1",
        question: "Quel métier Albertina Sisulu exerçait-elle ?",
        options: ["Enseignante", "Infirmière", "Avocate", "Journaliste"],
        correctIndex: 1,
        explanation: "Formée comme infirmière à Johannesburg à partir de 1940, elle exerça ce métier toute sa vie, notamment dans une clinique de Soweto où elle soignait et faisait circuler l'information sous surveillance.",
      },
      {
        id: "course-perso-28-albertina-sisulu-quiz-2",
        question: "Quelle particularité a marqué sa présence à la fondation de la Ligue de la jeunesse de l'ANC en 1944 ?",
        options: ["Elle en fut élue présidente", "Elle était la seule femme présente", "Elle y représentait le Transkei", "Elle en fut exclue la même année"],
        correctIndex: 1,
        explanation: "Albertina Sisulu était la seule femme présente à la réunion de fondation de l'ANC Youth League, d'où viendront Mandela, Walter Sisulu et Oliver Tambo.",
      },
      {
        id: "course-perso-28-albertina-sisulu-quiz-3",
        question: "Contre quoi les vingt mille femmes ont-elles marché sur Pretoria le 9 août 1956 ?",
        options: ["Contre l'extension des laissez-passer aux femmes", "Contre la fermeture des écoles de townships", "Contre l'interdiction de l'ANC", "Contre la hausse du prix du pain"],
        correctIndex: 0,
        explanation: "La marche protestait contre l'extension aux femmes du système des laissez-passer. Le 9 août est aujourd'hui la Journée nationale de la femme en Afrique du Sud.",
      },
      {
        id: "course-perso-28-albertina-sisulu-quiz-4",
        question: "Combien de temps Albertina Sisulu a-t-elle vécu sous banning orders ?",
        options: ["Environ deux ans", "Environ cinq ans", "Près de vingt ans", "Toute la durée de l'apartheid"],
        correctIndex: 2,
        explanation: "Elle subit des banning orders successifs pendant près de vingt ans : interdiction de quitter son quartier, d'être avec plus d'une personne, d'être citée dans la presse ou de participer à toute réunion.",
      },
      {
        id: "course-perso-28-albertina-sisulu-quiz-5",
        question: "Quel rôle a-t-elle joué au Parlement en 1994 ?",
        options: ["Elle a été élue présidente de l'Assemblée", "Elle a proposé officiellement la candidature de Nelson Mandela à la présidence", "Elle a rédigé la nouvelle Constitution", "Elle a présidé la Commission vérité et réconciliation"],
        correctIndex: 1,
        explanation: "Élue députée aux premières élections libres, c'est elle qui proposa officiellement devant le Parlement la candidature de Nelson Mandela à la présidence de la République.",
      },
    ],
  },
  {
    id: "course-perso-29-miriam-makeba",
    categoryId: "perso",
    emoji: "🎤",
    title: "Miriam Makeba, Mama Africa",
    description: "Son passeport fut annulé parce qu'elle avait témoigné devant l'ONU. Trente et un ans d'exil plus tard, elle rentrait chez elle. Miriam Makeba a fait de sa voix une arme diplomatique.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-29-miriam-makeba-lesson-1",
        title: "Sophiatown et les débuts",
        blocks: [
          { type: "paragraphe", text: "Zenzile Miriam Makeba naît en 1932 à Johannesburg. Sa mère est employée de maison et guérisseuse traditionnelle ; l'enfant passe ses premières semaines en prison avec elle, condamnée pour avoir brassé de la bière clandestinement — un détail qui dit l'ordinaire de la vie noire sud-africaine. Elle grandit en partie à Sophiatown, quartier de Johannesburg où se mêlent musiciens, écrivains et journalistes, et qui est alors le foyer d'une culture urbaine noire d'une vitalité exceptionnelle — avant d'être rasé par le régime en 1955 et ses habitants déportés à Soweto. Miriam chante d'abord dans les chorales scolaires et les églises, puis rejoint les Cuban Brothers, et surtout les Manhattan Brothers, l'un des grands groupes vocaux du pays. Elle forme ensuite les Skylarks, ensemble féminin qui mêle jazz américain et harmonies sud-africaines. Sa voix, la précision de sa diction en xhosa, en zoulou et en anglais, la font vite remarquer." },
        ],
      },
      {
        id: "course-perso-29-miriam-makeba-lesson-2",
        title: "Come Back, Africa et le passeport retiré",
        blocks: [
          { type: "paragraphe", text: "En 1959, elle tient un petit rôle dans Come Back, Africa, film tourné clandestinement en Afrique du Sud par l'Américain Lionel Rogosin pour documenter la réalité de l'apartheid. Le film est présenté au festival de Venise et Makeba obtient l'autorisation de s'y rendre. Elle enchaîne sur Londres, où elle rencontre Harry Belafonte, puis sur les États-Unis, où sa carrière décolle immédiatement : passages télévisés à très forte audience, concerts, premier album américain. Elle chante Pata Pata et le « chant du clic » xhosa, qui la rendent mondialement célèbre. Mais quand elle veut rentrer en Afrique du Sud pour les funérailles de sa mère, en 1960, elle découvre que son passeport a été annulé. Le régime lui interdit le retour. Elle est apatride ; plusieurs pays africains et européens lui délivreront des passeports d'honneur pour lui permettre de voyager." },
        ],
      },
      {
        id: "course-perso-29-miriam-makeba-lesson-3",
        title: "Témoigner à l'ONU",
        blocks: [
          { type: "paragraphe", text: "En 1963, Miriam Makeba fait ce qu'aucune artiste de sa notoriété n'avait fait : elle témoigne devant le Comité spécial des Nations unies contre l'apartheid. Elle y décrit le système de l'intérieur — les laissez-passer, les déplacements forcés, les familles séparées par le travail migrant, la violence policière — et demande explicitement un embargo et des sanctions internationales contre le régime de Pretoria. Elle témoignera à nouveau à plusieurs reprises au fil des années. La réponse du régime est immédiate : sa musique est interdite en Afrique du Sud, ses disques retirés de la vente, sa citoyenneté révoquée. À partir de ce moment, sa carrière et son engagement ne se distinguent plus : chacun de ses concerts dans le monde devient une tribune, et elle est l'une des voix qui installent l'apartheid dans la conscience internationale, bien avant que les sanctions ne deviennent un consensus." },
        ],
      },
      {
        id: "course-perso-29-miriam-makeba-lesson-4",
        title: "Trente et un ans d'exil",
        blocks: [
          { type: "paragraphe", text: "Le prix de cet engagement est lourd. En 1968, elle épouse Stokely Carmichael, figure du Black Power américain ; aux États-Unis, ses contrats sont annulés, ses concerts déprogrammés, ses disques boycottés. Elle quitte le pays et s'installe en Guinée, à Conakry, où le président Ahmed Sékou Touré l'accueille. Elle y vivra quinze ans. L'Afrique devient sa base : elle se produit dans presque tous les pays du continent, est nommée déléguée de la Guinée aux Nations unies, reçoit des passeports diplomatiques de plusieurs États, et se lie aux dirigeants des indépendances. Elle chante aux cérémonies d'indépendance, aux sommets de l'OUA, dans les camps de réfugiés. Son répertoire mêle des langues et des traditions de tout le continent — c'est ce qui lui vaut son surnom de « Mama Africa ». Elle traverse aussi des épreuves personnelles répétées, dont la mort de sa fille unique en 1985." },
        ],
      },
      {
        id: "course-perso-29-miriam-makeba-lesson-5",
        title: "Le retour et la voix comme arme",
        blocks: [
          { type: "paragraphe", text: "En 1990, Nelson Mandela est libéré. Il demande personnellement à Miriam Makeba de rentrer. Elle revient en Afrique du Sud la même année, après trente et un ans d'exil, munie d'un passeport français. Elle assiste à l'investiture de Mandela en 1994, chante dans le pays qui l'avait bannie, et se consacre ensuite à des causes sociales : elle fonde un centre pour jeunes filles vulnérables et devient ambassadrice de bonne volonté de la FAO. Elle meurt le 9 novembre 2008 en Italie, terrassée par une crise cardiaque à la fin d'un concert donné en soutien à Roberto Saviano, l'écrivain menacé par la Camorra. Elle avait soixante-seize ans. L'UNESCO l'a intégrée à son projet Femmes dans l'histoire de l'Afrique. Sa trajectoire montre une chose que les États comprennent mal : une chanteuse privée de son pays peut peser sur la politique internationale davantage que bien des ambassades." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-29-miriam-makeba-quiz-1",
        question: "Quel quartier de Johannesburg a marqué la jeunesse musicale de Miriam Makeba ?",
        options: ["Soweto", "Sophiatown", "Alexandra", "Sharpeville"],
        correctIndex: 1,
        explanation: "Sophiatown était le foyer d'une culture urbaine noire d'une vitalité exceptionnelle, avant d'être rasé par le régime en 1955 et ses habitants déportés à Soweto.",
      },
      {
        id: "course-perso-29-miriam-makeba-quiz-2",
        question: "Que découvre-t-elle en 1960, en voulant rentrer pour les funérailles de sa mère ?",
        options: ["Que son passeport a été annulé", "Que sa maison a été détruite", "Qu'elle a été condamnée par contumace", "Que ses disques ont été interdits"],
        correctIndex: 0,
        explanation: "Après son départ pour le festival de Venise en 1959, le régime annula son passeport et lui interdit le retour. Elle devint apatride, et plusieurs pays lui délivrèrent des passeports d'honneur.",
      },
      {
        id: "course-perso-29-miriam-makeba-quiz-3",
        question: "Que demande-t-elle en témoignant devant les Nations unies en 1963 ?",
        options: ["La création d'un fonds culturel africain", "Un embargo et des sanctions internationales contre le régime d'apartheid", "L'asile politique aux États-Unis", "L'envoi d'une force de paix en Afrique du Sud"],
        correctIndex: 1,
        explanation: "Devant le Comité spécial contre l'apartheid, elle décrivit le système de l'intérieur et demanda explicitement un embargo et des sanctions. Le régime interdit alors sa musique et révoqua sa citoyenneté.",
      },
      {
        id: "course-perso-29-miriam-makeba-quiz-4",
        question: "Dans quel pays africain s'est-elle installée après avoir quitté les États-Unis ?",
        options: ["Au Ghana", "En Tanzanie", "En Guinée", "En Algérie"],
        correctIndex: 2,
        explanation: "Après le boycott de sa carrière américaine consécutif à son mariage avec Stokely Carmichael, elle s'installa à Conakry, accueillie par Ahmed Sékou Touré, et y vécut quinze ans.",
      },
      {
        id: "course-perso-29-miriam-makeba-quiz-5",
        question: "Combien de temps a duré son exil hors d'Afrique du Sud ?",
        options: ["Environ dix ans", "Environ vingt ans", "Trente et un ans", "Quarante ans"],
        correctIndex: 2,
        explanation: "Exilée à partir de 1960, elle ne rentra qu'en 1990, à la demande personnelle de Nelson Mandela après sa libération — soit trente et un ans d'exil.",
      },
    ],
  },
  {
    id: "course-perso-30-wangari-maathai",
    categoryId: "perso",
    emoji: "🌳",
    title: "Wangari Maathai, la ceinture verte",
    description: "Elle a compris avant tout le monde que planter des arbres était un acte politique. Cinquante et un millions d'arbres plus tard, Wangari Maathai devenait la première Africaine prix Nobel de la paix.",
    xp: 70,
    lessons: [
      {
        id: "course-perso-30-wangari-maathai-lesson-1",
        title: "Première femme d'Afrique de l'Est docteure en sciences",
        blocks: [
          { type: "paragraphe", text: "Wangari Muta Maathai naît en 1940 à Ihithe, dans les hautes terres du centre du Kenya, dans une famille de paysans kikuyu. Elle grandit au milieu de forêts, de sources et de champs qu'elle verra disparaître au cours de sa vie. Scolarisée dans les écoles des missions, elle est sélectionnée en 1960 pour un programme de bourses destiné à former les cadres des futurs États africains indépendants et part étudier la biologie aux États-Unis, où elle obtient une licence puis une maîtrise. Elle poursuit en Allemagne, puis soutient en 1971 à l'université de Nairobi un doctorat en anatomie vétérinaire : elle devient la première femme d'Afrique de l'Est ou centrale à obtenir un doctorat. Elle est ensuite la première femme nommée professeure et cheffe de département dans cette université. Chacune de ces étapes lui vaut des obstacles administratifs qu'aucun homme n'aurait rencontrés, et elle en tire une conclusion durable : les droits des femmes et les autres combats ne se séparent pas." },
        ],
      },
      {
        id: "course-perso-30-wangari-maathai-lesson-2",
        title: "La naissance du Green Belt Movement",
        blocks: [
          { type: "paragraphe", text: "Engagée dans le Conseil national des femmes du Kenya, elle écoute les femmes rurales décrire leurs difficultés : elles marchent toujours plus loin pour trouver du bois de chauffe, les ruisseaux tarissent, les sols s'épuisent, la nourriture manque. Elle établit le lien que personne ne faisait alors : ces problèmes n'ont pas des causes séparées, ils découlent tous de la déforestation et de l'agriculture d'exportation qui a remplacé les forêts et les cultures vivrières. Sa réponse est d'une simplicité désarmante. En 1977, elle lance le Green Belt Movement : payer les femmes des villages pour qu'elles fassent pousser des semis d'arbres locaux dans des pépinières, puis les plantent. Le dispositif règle plusieurs problèmes à la fois — reboisement, revenu monétaire pour les femmes, sécurité alimentaire, restauration des sources. Il essaime au Kenya, puis dans d'autres pays africains. Au total, le mouvement revendique la plantation de plus de cinquante millions d'arbres." },
        ],
      },
      {
        id: "course-perso-30-wangari-maathai-lesson-3",
        title: "Planter des arbres, affronter un régime",
        blocks: [
          { type: "paragraphe", text: "Ce qui pouvait passer pour un programme environnemental devient rapidement une affaire politique. Sous la présidence de Daniel arap Moi, les terres publiques et les forêts sont distribuées à des proches du pouvoir. En 1989, Wangari Maathai s'oppose publiquement à la construction d'une tour de soixante étages dans le parc Uhuru, principal espace vert de Nairobi. Elle écrit, alerte les bailleurs internationaux, organise la contestation — et le projet est abandonné. En 1992, elle mène une grève de la faim avec les mères de prisonniers politiques dans ce même parc ; la police les disperse violemment et elle est frappée jusqu'à perdre connaissance. Elle sera arrêtée à plusieurs reprises, qualifiée de folle et de divorcée indigne par le pouvoir — son divorce fut effectivement utilisé contre elle, un juge estimant qu'elle était « trop instruite » pour être maîtrisée par son mari. Elle ne recule pas. En 1998, elle s'oppose de la même manière à la privatisation de la forêt de Karura." },
        ],
      },
      {
        id: "course-perso-30-wangari-maathai-lesson-4",
        title: "Le Nobel de 2004",
        blocks: [
          { type: "paragraphe", text: "Le régime de Moi cède en 2002 ; Wangari Maathai est élue députée avec 98 % des voix dans sa circonscription et devient vice-ministre de l'Environnement. En octobre 2004, le comité norvégien lui décerne le prix Nobel de la paix. Elle est la première femme africaine à le recevoir, et la première écologiste. Le choix surprend et suscite un débat : quel rapport entre les arbres et la paix ? La motivation du comité répond précisément à cette objection — la paix durable suppose une gestion équitable des ressources naturelles et un environnement viable, car la raréfaction des terres, de l'eau et du bois nourrit les conflits. Wangari Maathai formule la même idée à sa manière : on ne peut pas parler de démocratie sans parler de qui contrôle la terre. Elle utilise ensuite sa notoriété pour porter les enjeux environnementaux africains dans les négociations internationales, et lance notamment une campagne mondiale de plantation d'un milliard d'arbres." },
        ],
      },
      {
        id: "course-perso-30-wangari-maathai-lesson-5",
        title: "Écologie, démocratie et Agenda 2063",
        blocks: [
          { type: "paragraphe", text: "Wangari Maathai meurt d'un cancer à Nairobi le 25 septembre 2011. Elle est enterrée dans un cercueil de jacinthe d'eau et de bambou, ayant demandé qu'aucun arbre ne soit abattu pour ses obsèques. Son héritage est directement inscrit dans les priorités africaines actuelles. L'Agenda 2063 de l'Union africaine — le plan de développement du continent à cinquante ans — fait de l'environnement durable, de la résilience climatique et de l'autonomisation des femmes des objectifs centraux ; la Grande Muraille verte, initiative africaine de reboisement à travers le Sahel, procède de la même intuition que le Green Belt Movement. Le volume XI de l'Histoire générale de l'Afrique, consacré aux défis contemporains, traite précisément de la justice environnementale et de l'égalité de genre comme des enjeux liés. Wangari Maathai clôt ce parcours de trente figures sur une idée qui les relie toutes : reprendre en main son histoire commence toujours par un geste concret, à portée de main — ici, un arbre." },
        ],
      },
    ],
    quiz: [
      {
        id: "course-perso-30-wangari-maathai-quiz-1",
        question: "Quelle première a réalisé Wangari Maathai en 1971 ?",
        options: ["Elle devient la première femme professeure du Kenya", "Elle devient la première femme d'Afrique de l'Est ou centrale docteure", "Elle devient la première femme ministre kenyane", "Elle devient la première femme élue au Parlement kenyan"],
        correctIndex: 1,
        explanation: "Elle soutient en 1971 à l'université de Nairobi un doctorat en anatomie vétérinaire, devenant la première femme d'Afrique de l'Est ou centrale à obtenir un doctorat.",
      },
      {
        id: "course-perso-30-wangari-maathai-quiz-2",
        question: "En quoi consiste le Green Belt Movement, lancé en 1977 ?",
        options: ["Payer les femmes des villages pour cultiver et planter des arbres", "Créer des réserves naturelles fermées aux populations", "Importer des essences forestières européennes", "Interdire l'exploitation du bois de chauffe"],
        correctIndex: 0,
        explanation: "Le dispositif rémunère les femmes des villages pour faire pousser des semis d'arbres locaux et les planter — traitant à la fois le reboisement, le revenu des femmes, la sécurité alimentaire et les sources.",
      },
      {
        id: "course-perso-30-wangari-maathai-quiz-3",
        question: "Quel projet a-t-elle fait échouer à Nairobi en 1989 ?",
        options: ["La construction d'un aéroport international", "L'installation d'une centrale thermique", "La construction d'une tour de soixante étages dans le parc Uhuru", "Le détournement d'une rivière"],
        correctIndex: 2,
        explanation: "Elle s'opposa publiquement à ce projet dans le principal espace vert de Nairobi, alerta les bailleurs internationaux et organisa la contestation ; le projet fut abandonné.",
      },
      {
        id: "course-perso-30-wangari-maathai-quiz-4",
        question: "Pourquoi le prix Nobel décerné en 2004 était-il un prix de la paix ?",
        options: ["Parce qu'elle avait négocié un accord entre deux pays voisins", "Parce que la paix durable suppose une gestion équitable des ressources naturelles", "Parce qu'aucun prix d'écologie n'existait alors", "Parce qu'elle avait mis fin à un conflit armé au Kenya"],
        correctIndex: 1,
        explanation: "Le comité a retenu que la raréfaction des terres, de l'eau et du bois nourrit les conflits : la paix durable suppose un environnement viable et une gestion équitable des ressources.",
      },
      {
        id: "course-perso-30-wangari-maathai-quiz-5",
        question: "Quelle initiative continentale prolonge aujourd'hui son intuition ?",
        options: ["La Grande Muraille verte", "Le corridor de Nacala", "Le barrage de la Renaissance", "La zone de libre-échange continentale"],
        correctIndex: 0,
        explanation: "La Grande Muraille verte, initiative africaine de reboisement à travers le Sahel, procède de la même logique que le Green Belt Movement ; l'Agenda 2063 de l'Union africaine en fait un objectif central.",
      },
    ],
  },
  {
    id: "course-perso-voix-plumes-afrique",
    categoryId: "perso",
    emoji: "✍️",
    title: "Voix et plumes d'Afrique",
    description:
      "Des pionniers du Nobel aux voix contemporaines : cinq écrivains qui ont porté la littérature africaine sur la scène mondiale.",
    xp: 50,
    lessons: [
      {
        id: "lesson-perso-pionniers-nobel",
        title: "Les pionniers du Nobel",
        blocks: [
          { type: "paragraphe", text: "Wole Soyinka, dramaturge et écrivain nigérian, devient en 1986 le premier Africain à recevoir le prix Nobel de littérature, notamment pour son théâtre engagé. Deux ans plus tard, en 1988, l'Égyptien Naguib Mahfouz, auteur de la Trilogie du Caire, devient le premier écrivain de langue arabe distingué par ce prix." },
        ],
      },
      {
        id: "lesson-perso-peres-fondateurs",
        title: "Pères fondateurs de la littérature africaine moderne",
        blocks: [
          { type: "paragraphe", text: "Le Nigérian Chinua Achebe publie en 1958 « Le monde s'effondre », roman fondateur de la littérature africaine moderne en langue anglaise. Au Sénégal, Léopold Sédar Senghor, poète et premier président du pays, cofonde le mouvement de la Négritude et devient en 1983 le premier Africain élu à l'Académie française." },
        ],
      },
      {
        id: "lesson-perso-nouvelle-generation",
        title: "Une nouvelle génération de voix",
        blocks: [
          { type: "paragraphe", text: "Chimamanda Ngozi Adichie, romancière nigériane, s'impose avec des œuvres comme « Americanah » et « L'autre moitié du soleil ». Sa conférence TED « Le danger de l'histoire unique » a marqué durablement les discussions sur la représentation de l'Afrique dans le monde." },
        ],
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
];
