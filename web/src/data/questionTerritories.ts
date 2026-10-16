/**
 * Rattachement d'une **question** de quiz à son territoire (module Quiz).
 *
 * Cette table est la contrepartie de la dissolution du Baobab, la zone transversale qui recueillait
 * les sujets panafricains, la diaspora et toute la matière Découverte. Sans géographie, elle
 * n'avait aucun tracé sur la carte de conquête — donc aucune porte d'entrée, alors que la carte est
 * devenue le seul sélecteur de territoire. Ses 100 questions ont été réparties dans les cinq
 * territoires régionaux, **une par une**.
 *
 * **Pourquoi par question et non par cours.** Un cours comme « Rythmes du continent » couvre
 * l'afrobeat nigérian, le mbalax sénégalais, la rumba congolaise, l'amapiano sud-africain et le raï
 * oranais : le rattacher entier égarerait quatre questions sur cinq. Et taguer ces cours en
 * multi-territoire aurait été pire — une question comptée dans trois territoires y gonfle les
 * totaux et fait monter trois maîtrises d'un coup pour une seule bonne réponse.
 *
 * **Un seul territoire par question**, donc, choisi dans cet ordre :
 * 1. le lieu que la question ou sa leçon nomme (la règle qui tranche la grande majorité des cas) ;
 * 2. pour la **diaspora** (Nanny, Toussaint Louverture, Sojourner Truth, Du Bois), la côte d'où
 *    partaient les déportés dont parle la leçon — la Côte de l'Or pour la Jamaïque, l'Afrique
 *    centrale pour Saint-Domingue et la Nouvelle-Néerlande. Ce rattachement est éditorial et
 *    assumé : il dit d'où vient l'histoire, pas où elle se déroule ;
 * 3. pour les questions réellement continentales (Berlin, les indépendances, le panafricanisme),
 *    l'ancrage le plus concret disponible, en arbitrant vers les territoires les moins fournis.
 *
 * Une entrée ici **prime** sur le rattachement de cours (`courseTerritories.ts`). Un cours dont
 * le tableau y est vide doit avoir **toutes** ses questions déclarées ici : la règle 21 de
 * `npm run validate` échoue sinon.
 *
 * Répartition apportée par cette table : ouest 43, centrale 24, australe 13, est 12, nord 8.
 */
import type { TerritoryId } from "@/lib/territories";

export const QUESTION_TERRITORIES: Record<string, TerritoryId> = {
  // ── La conférence de Berlin et le partage de l'Afrique (histoire) ───
  // Le partage concerne tout le continent : ses cinq questions sont réparties là où chacune
  // s'incarne le plus concrètement.
  "course-histoire-25-conference-berlin:course-histoire-25-conference-berlin-quiz-1": "australe", // la ruée part des diamants de Kimberley et de l'or du Witwatersrand
  "course-histoire-25-conference-berlin:course-histoire-25-conference-berlin-quiz-2": "centrale", // Berlin siège d'abord sur le bassin du Congo
  "course-histoire-25-conference-berlin:course-histoire-25-conference-berlin-quiz-3": "nord", // les frontières tirées à la règle sont d'abord celles du Sahara
  "course-histoire-25-conference-berlin:course-histoire-25-conference-berlin-quiz-4": "est", // l'Éthiopie, l'un des deux États restés indépendants
  "course-histoire-25-conference-berlin:course-histoire-25-conference-berlin-quiz-5": "centrale", // le Congo attribué à Léopold II

  // ── Les grandes résistances à la colonisation (histoire) ───
  // Chaque résistance a un théâtre ; les deux questions générales vont aux plus pauvres.
  "course-histoire-26-resistances-colonisation:course-histoire-26-resistances-colonisation-quiz-1": "australe", // guerres anglo-zouloues et guerre des Boers, résistance armée du Sud
  "course-histoire-26-resistances-colonisation:course-histoire-26-resistances-colonisation-quiz-2": "ouest", // Samory Touré, de la Guinée au Soudan français
  "course-histoire-26-resistances-colonisation:course-histoire-26-resistances-colonisation-quiz-3": "ouest", // Béhanzin, roi du Dahomey
  "course-histoire-26-resistances-colonisation:course-histoire-26-resistances-colonisation-quiz-4": "est", // la révolte Maji Maji en Afrique orientale allemande
  "course-histoire-26-resistances-colonisation:course-histoire-26-resistances-colonisation-quiz-5": "centrale", // l'héritage passe par les indépendances du Congo et de Lumumba

  // ── Les indépendances africaines (histoire) ───
  // 1960 est d'abord une année centrafricaine ; la lutte armée, d'abord algérienne.
  "course-histoire-28-independances-africaines:course-histoire-28-independances-africaines-quiz-1": "nord", // le nationalisme d'après-guerre éclate à Sétif et au Maghreb
  "course-histoire-28-independances-africaines:course-histoire-28-independances-africaines-quiz-2": "ouest", // le Ghana, premier indépendant en 1957
  "course-histoire-28-independances-africaines:course-histoire-28-independances-africaines-quiz-3": "centrale", // sur les 17 pays de 1960, six sont d'Afrique centrale
  "course-histoire-28-independances-africaines:course-histoire-28-independances-africaines-quiz-4": "nord", // la guerre d'Algérie, 1954-1962
  "course-histoire-28-independances-africaines:course-histoire-28-independances-africaines-quiz-5": "australe", // indépendances tardives et économies dépendantes du Sud

  // ── Le panafricanisme et l'Union africaine (histoire) ───
  // Le panafricanisme a deux capitales — Accra et Addis-Abeba — et un acte de naissance à Durban.
  "course-histoire-29-panafricanisme-union-africaine:course-histoire-29-panafricanisme-union-africaine-quiz-1": "australe", // la renaissance africaine portée depuis l'Afrique du Sud
  "course-histoire-29-panafricanisme-union-africaine:course-histoire-29-panafricanisme-union-africaine-quiz-2": "ouest", // Nkrumah et les « États-Unis d'Afrique », depuis Accra
  "course-histoire-29-panafricanisme-union-africaine:course-histoire-29-panafricanisme-union-africaine-quiz-3": "est", // l'OUA fondée à Addis-Abeba en 1963
  "course-histoire-29-panafricanisme-union-africaine:course-histoire-29-panafricanisme-union-africaine-quiz-4": "australe", // l'Union africaine lancée à Durban en 2002
  "course-histoire-29-panafricanisme-union-africaine:course-histoire-29-panafricanisme-union-africaine-quiz-5": "est", // l'Agenda 2063, adopté au siège d'Addis-Abeba

  // ── Nanny et les Marrons de Jamaïque (perso) ───
  // Diaspora — rattachée à la côte d'où partaient les déportés dont parle la leçon : la Côte
  // de l'Or, l'actuel Ghana, que le cours nomme explicitement.
  "course-perso-08-nanny-marrons:course-perso-08-nanny-marrons-quiz-1": "centrale", // le marronnage déborde la Jamaïque : quilombos du Brésil, palenques d'Angola
  "course-perso-08-nanny-marrons:course-perso-08-nanny-marrons-quiz-2": "ouest", // la Côte de l'Or, l'actuel Ghana
  "course-perso-08-nanny-marrons:course-perso-08-nanny-marrons-quiz-3": "ouest", // l'abeng, corne akan passée aux Antilles
  "course-perso-08-nanny-marrons:course-perso-08-nanny-marrons-quiz-4": "ouest", // les Marrons akan de Jamaïque
  "course-perso-08-nanny-marrons:course-perso-08-nanny-marrons-quiz-5": "ouest", // héritage akan revendiqué par la Jamaïque

  // ── Toussaint Louverture et la révolution de Saint-Domingue (perso) ───
  // Diaspora — Saint-Domingue a été peuplée en majorité de déportés d'Afrique centrale ;
  // les combattants « congo » sont au cœur du soulèvement de 1791.
  "course-perso-09-toussaint-louverture:course-perso-09-toussaint-louverture-quiz-1": "centrale", // Saint-Domingue, première destination des déportés du Kongo et d'Angola
  "course-perso-09-toussaint-louverture:course-perso-09-toussaint-louverture-quiz-2": "centrale", // les combattants kongo dans l'insurrection de 1791
  "course-perso-09-toussaint-louverture:course-perso-09-toussaint-louverture-quiz-3": "centrale", // même filiation
  "course-perso-09-toussaint-louverture:course-perso-09-toussaint-louverture-quiz-4": "centrale", // même filiation
  "course-perso-09-toussaint-louverture:course-perso-09-toussaint-louverture-quiz-5": "centrale", // même filiation

  // ── Sojourner Truth, la parole affranchie (perso) ───
  // Diaspora — née dans l'ancienne Nouvelle-Néerlande : la traite néerlandaise chargeait à
  // Loango et sur la côte d'Afrique centrale.
  "course-perso-10-sojourner-truth:course-perso-10-sojourner-truth-quiz-1": "centrale", // New York, ancienne Nouvelle-Néerlande, et la traite néerlandaise de Loango
  "course-perso-10-sojourner-truth:course-perso-10-sojourner-truth-quiz-2": "centrale", // même filiation
  "course-perso-10-sojourner-truth:course-perso-10-sojourner-truth-quiz-3": "centrale", // même filiation
  "course-perso-10-sojourner-truth:course-perso-10-sojourner-truth-quiz-4": "centrale", // même filiation
  "course-perso-10-sojourner-truth:course-perso-10-sojourner-truth-quiz-5": "centrale", // même filiation

  // ── W. E. B. Du Bois et les congrès panafricains (perso) ───
  // Diaspora — le fil de Du Bois relie Accra (où il meurt) et Addis-Abeba (où l'UA le prolonge).
  "course-perso-16-du-bois:course-perso-16-du-bois-quiz-1": "ouest", // trajectoire qui aboutit au Ghana
  "course-perso-16-du-bois:course-perso-16-du-bois-quiz-2": "ouest", // même trajectoire
  "course-perso-16-du-bois:course-perso-16-du-bois-quiz-3": "est", // Manchester 1945, co-organisé par Jomo Kenyatta
  "course-perso-16-du-bois:course-perso-16-du-bois-quiz-4": "ouest", // le Ghana de Nkrumah
  "course-perso-16-du-bois:course-perso-16-du-bois-quiz-5": "est", // la diaspora reconnue sixième région par l'UA, à Addis-Abeba

  // ── Voix et plumes d'Afrique (perso) ───
  // Chaque écrivain à son pays.
  "course-perso-voix-plumes-afrique:quiz-perso-1": "ouest", // Wole Soyinka, Nigeria
  "course-perso-voix-plumes-afrique:quiz-perso-2": "ouest", // Senghor, Sénégal
  "course-perso-voix-plumes-afrique:quiz-perso-3": "ouest", // Chinua Achebe, Nigeria
  "course-perso-voix-plumes-afrique:quiz-perso-4": "nord", // Naguib Mahfouz, Égypte
  "course-perso-voix-plumes-afrique:quiz-perso-5": "ouest", // Chimamanda Ngozi Adichie, Nigeria

  // ── Rythmes du continent (decouverte) ───
  // Un genre musical, un foyer : le cours en couvre cinq, dans quatre régions.
  "course-arts-rythmes-continent:quiz-arts-1": "ouest", // l'afrobeat de Fela Kuti, Nigeria
  "course-arts-rythmes-continent:quiz-arts-2": "ouest", // le mbalax, Sénégal
  "course-arts-rythmes-continent:quiz-arts-3": "centrale", // le soukous et la rumba congolaise
  "course-arts-rythmes-continent:quiz-arts-4": "australe", // l'amapiano, townships de Pretoria
  "course-arts-rythmes-continent:quiz-arts-5": "nord", // le raï, Oran

  // ── Griots et sagesses ancestrales (decouverte) ───
  // Les griots sont ouest-africains, Ubuntu est bantou, l'arbre à palabres est partout.
  "course-trad-griots-sagesses:quiz-trad-1": "ouest", // les griots mandingues
  "course-trad-griots-sagesses:quiz-trad-2": "ouest", // la kora, harpe-luth mandingue
  "course-trad-griots-sagesses:quiz-trad-3": "ouest", // Poro et Sandé, de la Sierra Leone à la Côte d'Ivoire
  "course-trad-griots-sagesses:quiz-trad-4": "australe", // Ubuntu, philosophie nguni d'Afrique australe
  "course-trad-griots-sagesses:quiz-trad-5": "centrale", // l'arbre à palabres, institution du bassin du Congo comme du Sahel

  // ── L'Afrique qui innove (decouverte) ───
  // L'innovation contemporaine a des adresses : Nairobi, Kigali, Lagos, Durban.
  "course-actu-afrique-qui-innove:quiz-actu-1": "est", // M-Pesa, lancé au Kenya
  "course-actu-afrique-qui-innove:quiz-actu-2": "est", // la ZLECAf, signée à Kigali en 2018
  "course-actu-afrique-qui-innove:quiz-actu-3": "australe", // l'Union africaine lancée à Durban en 2002
  "course-actu-afrique-qui-innove:quiz-actu-4": "ouest", // Nollywood, Nigeria
  "course-actu-afrique-qui-innove:quiz-actu-5": "est", // la Silicon Savannah de Nairobi

  // ── Masques et sculptures (decouverte) ───
  // Les objets nomment leur région : Bénin (ouest), Fang et Kota (centrale).
  "course-decouverte-01-masques-sculptures:quiz-decouverte-01-1": "centrale", // les masques dansés kuba, punu, fang
  "course-decouverte-01-masques-sculptures:quiz-decouverte-01-2": "ouest", // les bronzes du royaume du Bénin
  "course-decouverte-01-masques-sculptures:quiz-decouverte-01-3": "centrale", // les Fang et les Kota, sculptures qui frappent les peintres de Paris
  "course-decouverte-01-masques-sculptures:quiz-decouverte-01-4": "centrale", // le byeri fang, Gabon
  "course-decouverte-01-masques-sculptures:quiz-decouverte-01-5": "ouest", // les bronzes restitués au Nigeria

  // ── Tissus et parures (decouverte) ───
  // Kente et bogolan à l'ouest, raphia kuba au Kasaï, wax partout mais roi à Kinshasa.
  "course-decouverte-02-tissus-parures:quiz-decouverte-02-1": "ouest", // le kente ashanti, Ghana
  "course-decouverte-02-tissus-parures:quiz-decouverte-02-2": "ouest", // le bogolan malien
  "course-decouverte-02-tissus-parures:quiz-decouverte-02-3": "centrale", // le wax, dont Kinshasa est l'autre grand marché
  "course-decouverte-02-tissus-parures:quiz-decouverte-02-4": "ouest", // les poids akan à peser l'or
  "course-decouverte-02-tissus-parures:quiz-decouverte-02-5": "centrale", // le raphia kuba, Kasaï

  // ── Architectures de terre (decouverte) ───
  // Djenné à l'ouest, mais l'architecture de terre est aussi celle des ksour et de l'Égypte.
  "course-decouverte-03-architectures-terre:quiz-decouverte-03-1": "ouest", // Djenné, Mali
  "course-decouverte-03-architectures-terre:quiz-decouverte-03-2": "nord", // l'inertie thermique, principe des ksour sahariens
  "course-decouverte-03-architectures-terre:quiz-decouverte-03-3": "nord", // les ksour du M'zab, patrimoine qu'il faut refaire pour le garder
  "course-decouverte-03-architectures-terre:quiz-decouverte-03-4": "nord", // Hassan Fathy et New Gourna, Égypte
  "course-decouverte-03-architectures-terre:quiz-decouverte-03-5": "ouest", // Francis Kéré, Burkina Faso

  // ── La photographie africaine (decouverte) ───
  // Bamako pour le studio, l'Afrique du Sud pour le portrait opposé au regard colonial.
  "course-decouverte-04-photographie-africaine:quiz-decouverte-04-1": "ouest", // les studios de Bamako
  "course-decouverte-04-photographie-africaine:quiz-decouverte-04-2": "centrale", // les mêmes années redécouvrent Jean Depara, à Kinshasa
  "course-decouverte-04-photographie-africaine:quiz-decouverte-04-3": "australe", // Ernest Cole et le portrait contre l'image d'apartheid
  "course-decouverte-04-photographie-africaine:quiz-decouverte-04-4": "ouest", // les Rencontres de Bamako
  "course-decouverte-04-photographie-africaine:quiz-decouverte-04-5": "australe", // Zanele Muholi, Afrique du Sud

  // ── Le cinéma d'auteur africain (decouverte) ───
  // Le cinéma d'auteur est né entre Dakar et Ouagadougou ; le streaming se joue au Sud.
  "course-decouverte-05-cinema-auteur:quiz-decouverte-05-1": "ouest", // Sembène et le wolof, Sénégal
  "course-decouverte-05-cinema-auteur:quiz-decouverte-05-2": "ouest", // le FESPACO, Ouagadougou
  "course-decouverte-05-cinema-auteur:quiz-decouverte-05-3": "ouest", // Djibril Diop Mambéty, Sénégal
  "course-decouverte-05-cinema-auteur:quiz-decouverte-05-4": "ouest", // Safi Faye, Sénégal
  "course-decouverte-05-cinema-auteur:quiz-decouverte-05-5": "australe", // les plateformes, dont Showmax, produisent surtout depuis l'Afrique du Sud

  // ── Littératures africaines (decouverte) ───
  // La question de la langue est kényane, le roman fondateur est nigérian.
  "course-decouverte-06-litteratures-africaines:quiz-decouverte-06-1": "est", // Ngugi wa Thiong'o, Kenya
  "course-decouverte-06-litteratures-africaines:quiz-decouverte-06-2": "ouest", // Chinua Achebe, Nigeria
  "course-decouverte-06-litteratures-africaines:quiz-decouverte-06-3": "ouest", // Wole Soyinka, Nigeria
  "course-decouverte-06-litteratures-africaines:quiz-decouverte-06-4": "ouest", // Djibril Tamsir Niane et l'épopée mandingue
  "course-decouverte-06-litteratures-africaines:quiz-decouverte-06-5": "ouest", // Mariama Bâ, Sénégal

  // ── Danses et corps en mouvement (decouverte) ───
  // Le sabar au Sénégal, la capoeira née d'Angola, l'amapiano en Afrique du Sud.
  "course-decouverte-07-danses:quiz-decouverte-07-1": "ouest", // le sabar, Sénégal
  "course-decouverte-07-danses:quiz-decouverte-07-2": "centrale", // capoeira et rumba, héritées d'Angola et du Kongo
  "course-decouverte-07-danses:quiz-decouverte-07-3": "australe", // l'amapiano, Afrique du Sud
  "course-decouverte-07-danses:quiz-decouverte-07-4": "ouest", // l'École des Sables, Sénégal
  "course-decouverte-07-danses:quiz-decouverte-07-5": "ouest", // le dama dogon, Mali

  // ── Mode et création contemporaine (decouverte) ───
  // Le kanga est est-africain, la friperie se joue à Nairobi et Kigali, les semaines de mode au Sud et à Lagos.
  "course-decouverte-08-mode-creation:quiz-decouverte-08-1": "est", // le kanga et son proverbe, Afrique de l'Est
  "course-decouverte-08-mode-creation:quiz-decouverte-08-2": "ouest", // Chris Seydou, Mali
  "course-decouverte-08-mode-creation:quiz-decouverte-08-3": "est", // l'interdiction rwandaise et les marchés est-africains de la friperie
  "course-decouverte-08-mode-creation:quiz-decouverte-08-4": "ouest", // la Lagos Fashion Week
  "course-decouverte-08-mode-creation:quiz-decouverte-08-5": "australe", // la South African Fashion Week, la plus ancienne du continent
};
