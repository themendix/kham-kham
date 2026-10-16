/**
 * Rattachement explicite d'une question de quiz à la leçon qui en donne la réponse.
 *
 * Sert le module Quiz : quand l'utilisateur se trompe, la correction déplie sur place la leçon
 * concernée, et l'écran de fin de partie liste toutes les leçons des questions ratées. C'est ce
 * qui fait de l'échec une porte d'entrée dans le catalogue plutôt qu'une sanction.
 *
 * Cette table déclare les renvois explicites, y compris les corrections éditoriales.
 * À défaut, un cours ayant autant de questions que de leçons dérive son renvoi par position.
 * Les 680 questions actuelles ont une leçon associée ; intégrité vérifiée par la règle 22.
 *
 * Clé = clé de question (`${courseId}:${questionId}`), valeur = id de leçon du même cours.
 * L'intégrité des deux est vérifiée par la règle 22 de `npm run validate`.
 */

export const QUIZ_LESSON_MAP: Record<string, string> = {
  // Renvois éditoriaux vérifiés le 15 octobre 2026 (audit-editorial-v1/quiz.csv).
  "course-histoire-01-egypte-antique:course-histoire-01-egypte-antique-quiz-2": "course-histoire-01-egypte-antique-lesson-1",
  "course-histoire-02-koush-meroe:course-histoire-02-koush-meroe-quiz-1": "course-histoire-02-koush-meroe-lesson-3",
  "course-histoire-03-aksoum:course-histoire-03-aksoum-quiz-5": "course-histoire-03-aksoum-lesson-1",
  "course-histoire-04-carthage-afrique-du-nord:course-histoire-04-carthage-afrique-du-nord-quiz-2": "course-histoire-04-carthage-afrique-du-nord-lesson-3",
  "course-histoire-05-empire-du-ghana:course-histoire-05-empire-du-ghana-quiz-4": "course-histoire-05-empire-du-ghana-lesson-3",
  "course-histoire-06-soundiata-mali:course-histoire-06-soundiata-mali-quiz-2": "course-histoire-06-soundiata-mali-lesson-3",
  "course-histoire-07-mansa-moussa:course-histoire-07-mansa-moussa-quiz-5": "course-histoire-07-mansa-moussa-lesson-1",
  "course-histoire-08-empire-songhai:course-histoire-08-empire-songhai-quiz-4": "course-histoire-08-empire-songhai-lesson-5",
  "course-histoire-09-tombouctou-djenne:course-histoire-09-tombouctou-djenne-quiz-1": "course-histoire-09-tombouctou-djenne-lesson-2",
  "course-histoire-09-tombouctou-djenne:course-histoire-09-tombouctou-djenne-quiz-5": "course-histoire-09-tombouctou-djenne-lesson-2",
  "course-histoire-10-kanem-bornou:course-histoire-10-kanem-bornou-quiz-3": "course-histoire-10-kanem-bornou-lesson-4",
  "course-histoire-11-cites-etats-haoussa:course-histoire-11-cites-etats-haoussa-quiz-4": "course-histoire-11-cites-etats-haoussa-lesson-5",
  "course-histoire-14-royaume-ashanti:course-histoire-14-royaume-ashanti-quiz-4": "course-histoire-14-royaume-ashanti-lesson-5",
  "course-histoire-15-royaume-dahomey:course-histoire-15-royaume-dahomey-quiz-4": "course-histoire-15-royaume-dahomey-lesson-5",
  "course-histoire-16-royaume-kongo:course-histoire-16-royaume-kongo-quiz-2": "course-histoire-16-royaume-kongo-lesson-3",
  "course-histoire-17-grand-zimbabwe:course-histoire-17-grand-zimbabwe-quiz-2": "course-histoire-17-grand-zimbabwe-lesson-1",
  "course-histoire-17-grand-zimbabwe:course-histoire-17-grand-zimbabwe-quiz-3": "course-histoire-17-grand-zimbabwe-lesson-2",
  "course-histoire-17-grand-zimbabwe:course-histoire-17-grand-zimbabwe-quiz-4": "course-histoire-17-grand-zimbabwe-lesson-2",
  "course-histoire-18-monomotapa-mutapa:course-histoire-18-monomotapa-mutapa-quiz-3": "course-histoire-18-monomotapa-mutapa-lesson-2",
  "course-histoire-19-royaumes-grands-lacs:course-histoire-19-royaumes-grands-lacs-quiz-5": "course-histoire-19-royaumes-grands-lacs-lesson-4",
  "course-histoire-27-bataille-adoua:course-histoire-27-bataille-adoua-quiz-2": "course-histoire-27-bataille-adoua-lesson-1",
  "course-histoire-31-tekrour-islam:course-histoire-31-tekrour-islam-quiz-5": "course-histoire-31-tekrour-islam-lesson-4",
  "course-histoire-32-djolof-royaumes-wolof:course-histoire-32-djolof-royaumes-wolof-quiz-3": "course-histoire-32-djolof-royaumes-wolof-lesson-2",
  "course-histoire-32-djolof-royaumes-wolof:course-histoire-32-djolof-royaumes-wolof-quiz-5": "course-histoire-32-djolof-royaumes-wolof-lesson-3",
  "course-histoire-35-lat-dior-cayor:course-histoire-35-lat-dior-cayor-quiz-2": "course-histoire-35-lat-dior-cayor-lesson-3",
  "course-histoire-37-aline-sitoe-diatta:course-histoire-37-aline-sitoe-diatta-quiz-3": "course-histoire-37-aline-sitoe-diatta-lesson-5",
  "course-histoire-39-reine-nzinga-angola:course-histoire-39-reine-nzinga-angola-quiz-4": "course-histoire-39-reine-nzinga-angola-lesson-3",
  "course-histoire-40-chaka-zoulou:course-histoire-40-chaka-zoulou-quiz-3": "course-histoire-40-chaka-zoulou-lesson-4",
  "course-perso-01-hatchepsout:course-perso-01-hatchepsout-quiz-3": "course-perso-01-hatchepsout-lesson-4",
  "course-perso-02-taharqa:course-perso-02-taharqa-quiz-3": "course-perso-02-taharqa-lesson-4",
  "course-perso-02-taharqa:course-perso-02-taharqa-quiz-4": "course-perso-02-taharqa-lesson-3",
  "course-perso-03-dihya:course-perso-03-dihya-quiz-5": "course-perso-03-dihya-lesson-4",
  "course-perso-07-kimpa-vita:course-perso-07-kimpa-vita-quiz-5": "course-perso-07-kimpa-vita-lesson-3",
  "course-perso-10-sojourner-truth:course-perso-10-sojourner-truth-quiz-2": "course-perso-10-sojourner-truth-lesson-1",
  "course-perso-11-abd-el-kader:course-perso-11-abd-el-kader-quiz-3": "course-perso-11-abd-el-kader-lesson-2",
  "course-perso-14-yaa-asantewaa:course-perso-14-yaa-asantewaa-quiz-3": "course-perso-14-yaa-asantewaa-lesson-2",
  "course-perso-24-patrice-lumumba:course-perso-24-patrice-lumumba-quiz-3": "course-perso-24-patrice-lumumba-lesson-4",
  "course-perso-26-funmilayo-ransome-kuti:course-perso-26-funmilayo-ransome-kuti-quiz-4": "course-perso-26-funmilayo-ransome-kuti-lesson-3",
  "course-histoire-05-empire-du-ghana:course-histoire-05-empire-du-ghana-quiz-3": "course-histoire-05-empire-du-ghana-lesson-1",
  "course-histoire-06-soundiata-mali:course-histoire-06-soundiata-mali-quiz-3": "course-histoire-06-soundiata-mali-lesson-4",
  "course-histoire-09-tombouctou-djenne:course-histoire-09-tombouctou-djenne-quiz-3": "course-histoire-09-tombouctou-djenne-lesson-4",
  "course-histoire-10-kanem-bornou:course-histoire-10-kanem-bornou-quiz-2": "course-histoire-10-kanem-bornou-lesson-1",
  "course-histoire-12-royaume-benin-bronzes:course-histoire-12-royaume-benin-bronzes-quiz-4": "course-histoire-12-royaume-benin-bronzes-lesson-5",
  "course-histoire-13-empire-oyo-yoruba:course-histoire-13-empire-oyo-yoruba-quiz-4": "course-histoire-13-empire-oyo-yoruba-lesson-3",
  "course-histoire-16-royaume-kongo:course-histoire-16-royaume-kongo-quiz-3": "course-histoire-16-royaume-kongo-lesson-1",
  "course-histoire-17-grand-zimbabwe:course-histoire-17-grand-zimbabwe-quiz-5": "course-histoire-17-grand-zimbabwe-lesson-4",
  "course-histoire-18-monomotapa-mutapa:course-histoire-18-monomotapa-mutapa-quiz-5": "course-histoire-18-monomotapa-mutapa-lesson-1",
  "course-histoire-19-royaumes-grands-lacs:course-histoire-19-royaumes-grands-lacs-quiz-4": "course-histoire-19-royaumes-grands-lacs-lesson-5",
  "course-histoire-31-tekrour-islam:course-histoire-31-tekrour-islam-quiz-3": "course-histoire-31-tekrour-islam-lesson-1",
  "course-histoire-35-lat-dior-cayor:course-histoire-35-lat-dior-cayor-quiz-3": "course-histoire-35-lat-dior-cayor-lesson-4",
  "course-histoire-38-senghor-negritude-independance:course-histoire-38-senghor-negritude-independance-quiz-5": "course-histoire-38-senghor-negritude-independance-lesson-4",
  "course-histoire-40-chaka-zoulou:course-histoire-40-chaka-zoulou-quiz-4": "course-histoire-40-chaka-zoulou-lesson-5",
  "course-perso-14-yaa-asantewaa:course-perso-14-yaa-asantewaa-quiz-2": "course-perso-14-yaa-asantewaa-lesson-1",
  "course-perso-19-amilcar-cabral:course-perso-19-amilcar-cabral-quiz-5": "course-perso-19-amilcar-cabral-lesson-4",
  "course-perso-20-agostinho-neto:course-perso-20-agostinho-neto-quiz-4": "course-perso-20-agostinho-neto-lesson-3",
  "course-perso-22-julius-nyerere:course-perso-22-julius-nyerere-quiz-4": "course-perso-22-julius-nyerere-lesson-3",
  "course-perso-23-haile-selassie:course-perso-23-haile-selassie-quiz-3": "course-perso-23-haile-selassie-lesson-4",
  "course-perso-25-jeanne-martin-cisse:course-perso-25-jeanne-martin-cisse-quiz-5": "course-perso-25-jeanne-martin-cisse-lesson-1",

  // course-geographie-01-algerie
  "course-geographie-01-algerie:course-geographie-01-algerie-quiz-1": "course-geographie-01-algerie-lesson-3",
  "course-geographie-01-algerie:course-geographie-01-algerie-quiz-2": "course-geographie-01-algerie-lesson-1",
  "course-geographie-01-algerie:course-geographie-01-algerie-quiz-3": "course-geographie-01-algerie-lesson-3",
  "course-geographie-01-algerie:course-geographie-01-algerie-quiz-4": "course-geographie-01-algerie-lesson-3",
  "course-geographie-01-algerie:course-geographie-01-algerie-quiz-5": "course-geographie-01-algerie-lesson-1",

  // course-geographie-02-egypte
  "course-geographie-02-egypte:course-geographie-02-egypte-quiz-1": "course-geographie-02-egypte-lesson-2",
  "course-geographie-02-egypte:course-geographie-02-egypte-quiz-2": "course-geographie-02-egypte-lesson-3",
  "course-geographie-02-egypte:course-geographie-02-egypte-quiz-3": "course-geographie-02-egypte-lesson-3",
  "course-geographie-02-egypte:course-geographie-02-egypte-quiz-4": "course-geographie-02-egypte-lesson-2",
  "course-geographie-02-egypte:course-geographie-02-egypte-quiz-5": "course-geographie-02-egypte-lesson-3",

  // course-geographie-03-libye
  "course-geographie-03-libye:course-geographie-03-libye-quiz-1": "course-geographie-03-libye-lesson-1",
  "course-geographie-03-libye:course-geographie-03-libye-quiz-2": "course-geographie-03-libye-lesson-3",
  "course-geographie-03-libye:course-geographie-03-libye-quiz-3": "course-geographie-03-libye-lesson-1",
  "course-geographie-03-libye:course-geographie-03-libye-quiz-4": "course-geographie-03-libye-lesson-3",
  "course-geographie-03-libye:course-geographie-03-libye-quiz-5": "course-geographie-03-libye-lesson-3",

  // course-geographie-04-maroc
  "course-geographie-04-maroc:course-geographie-04-maroc-quiz-1": "course-geographie-04-maroc-lesson-1",
  "course-geographie-04-maroc:course-geographie-04-maroc-quiz-2": "course-geographie-04-maroc-lesson-3",
  "course-geographie-04-maroc:course-geographie-04-maroc-quiz-3": "course-geographie-04-maroc-lesson-3",
  "course-geographie-04-maroc:course-geographie-04-maroc-quiz-4": "course-geographie-04-maroc-lesson-3",
  "course-geographie-04-maroc:course-geographie-04-maroc-quiz-5": "course-geographie-04-maroc-lesson-1",

  // course-geographie-05-mauritanie
  "course-geographie-05-mauritanie:course-geographie-05-mauritanie-quiz-1": "course-geographie-05-mauritanie-lesson-3",
  "course-geographie-05-mauritanie:course-geographie-05-mauritanie-quiz-2": "course-geographie-05-mauritanie-lesson-3",
  "course-geographie-05-mauritanie:course-geographie-05-mauritanie-quiz-3": "course-geographie-05-mauritanie-lesson-3",
  "course-geographie-05-mauritanie:course-geographie-05-mauritanie-quiz-4": "course-geographie-05-mauritanie-lesson-2",
  "course-geographie-05-mauritanie:course-geographie-05-mauritanie-quiz-5": "course-geographie-05-mauritanie-lesson-1",

  // course-geographie-06-soudan
  "course-geographie-06-soudan:course-geographie-06-soudan-quiz-1": "course-geographie-06-soudan-lesson-1",
  "course-geographie-06-soudan:course-geographie-06-soudan-quiz-2": "course-geographie-06-soudan-lesson-3",
  "course-geographie-06-soudan:course-geographie-06-soudan-quiz-3": "course-geographie-06-soudan-lesson-2",
  "course-geographie-06-soudan:course-geographie-06-soudan-quiz-4": "course-geographie-06-soudan-lesson-1",
  "course-geographie-06-soudan:course-geographie-06-soudan-quiz-5": "course-geographie-06-soudan-lesson-3",

  // course-geographie-07-tunisie
  "course-geographie-07-tunisie:course-geographie-07-tunisie-quiz-1": "course-geographie-07-tunisie-lesson-2",
  "course-geographie-07-tunisie:course-geographie-07-tunisie-quiz-2": "course-geographie-07-tunisie-lesson-3",
  "course-geographie-07-tunisie:course-geographie-07-tunisie-quiz-3": "course-geographie-07-tunisie-lesson-3",
  "course-geographie-07-tunisie:course-geographie-07-tunisie-quiz-4": "course-geographie-07-tunisie-lesson-3",
  "course-geographie-07-tunisie:course-geographie-07-tunisie-quiz-5": "course-geographie-07-tunisie-lesson-3",

  // course-geographie-08-benin
  "course-geographie-08-benin:course-geographie-08-benin-quiz-1": "course-geographie-08-benin-lesson-2",
  "course-geographie-08-benin:course-geographie-08-benin-quiz-2": "course-geographie-08-benin-lesson-3",
  "course-geographie-08-benin:course-geographie-08-benin-quiz-3": "course-geographie-08-benin-lesson-3",
  "course-geographie-08-benin:course-geographie-08-benin-quiz-4": "course-geographie-08-benin-lesson-3",
  "course-geographie-08-benin:course-geographie-08-benin-quiz-5": "course-geographie-08-benin-lesson-2",

  // course-geographie-09-burkina-faso
  "course-geographie-09-burkina-faso:course-geographie-09-burkina-faso-quiz-1": "course-geographie-09-burkina-faso-lesson-1",
  "course-geographie-09-burkina-faso:course-geographie-09-burkina-faso-quiz-2": "course-geographie-09-burkina-faso-lesson-3",
  "course-geographie-09-burkina-faso:course-geographie-09-burkina-faso-quiz-3": "course-geographie-09-burkina-faso-lesson-2",
  "course-geographie-09-burkina-faso:course-geographie-09-burkina-faso-quiz-4": "course-geographie-09-burkina-faso-lesson-3",
  "course-geographie-09-burkina-faso:course-geographie-09-burkina-faso-quiz-5": "course-geographie-09-burkina-faso-lesson-3",

  // course-geographie-10-cap-vert
  "course-geographie-10-cap-vert:course-geographie-10-cap-vert-quiz-1": "course-geographie-10-cap-vert-lesson-1",
  "course-geographie-10-cap-vert:course-geographie-10-cap-vert-quiz-2": "course-geographie-10-cap-vert-lesson-1",
  "course-geographie-10-cap-vert:course-geographie-10-cap-vert-quiz-3": "course-geographie-10-cap-vert-lesson-3",
  "course-geographie-10-cap-vert:course-geographie-10-cap-vert-quiz-4": "course-geographie-10-cap-vert-lesson-2",
  "course-geographie-10-cap-vert:course-geographie-10-cap-vert-quiz-5": "course-geographie-10-cap-vert-lesson-3",

  // course-geographie-11-cote-divoire
  "course-geographie-11-cote-divoire:course-geographie-11-cote-divoire-quiz-1": "course-geographie-11-cote-divoire-lesson-2",
  "course-geographie-11-cote-divoire:course-geographie-11-cote-divoire-quiz-2": "course-geographie-11-cote-divoire-lesson-3",
  "course-geographie-11-cote-divoire:course-geographie-11-cote-divoire-quiz-3": "course-geographie-11-cote-divoire-lesson-3",
  "course-geographie-11-cote-divoire:course-geographie-11-cote-divoire-quiz-4": "course-geographie-11-cote-divoire-lesson-3",
  "course-geographie-11-cote-divoire:course-geographie-11-cote-divoire-quiz-5": "course-geographie-11-cote-divoire-lesson-1",

  // course-geographie-12-gambie
  "course-geographie-12-gambie:course-geographie-12-gambie-quiz-1": "course-geographie-12-gambie-lesson-2",
  "course-geographie-12-gambie:course-geographie-12-gambie-quiz-2": "course-geographie-12-gambie-lesson-1",
  "course-geographie-12-gambie:course-geographie-12-gambie-quiz-3": "course-geographie-12-gambie-lesson-2",
  "course-geographie-12-gambie:course-geographie-12-gambie-quiz-4": "course-geographie-12-gambie-lesson-2",
  "course-geographie-12-gambie:course-geographie-12-gambie-quiz-5": "course-geographie-12-gambie-lesson-3",

  // course-geographie-13-ghana
  "course-geographie-13-ghana:course-geographie-13-ghana-quiz-1": "course-geographie-13-ghana-lesson-3",
  "course-geographie-13-ghana:course-geographie-13-ghana-quiz-2": "course-geographie-13-ghana-lesson-1",
  "course-geographie-13-ghana:course-geographie-13-ghana-quiz-3": "course-geographie-13-ghana-lesson-2",
  "course-geographie-13-ghana:course-geographie-13-ghana-quiz-4": "course-geographie-13-ghana-lesson-3",
  "course-geographie-13-ghana:course-geographie-13-ghana-quiz-5": "course-geographie-13-ghana-lesson-3",

  // course-geographie-14-guinee
  "course-geographie-14-guinee:course-geographie-14-guinee-quiz-1": "course-geographie-14-guinee-lesson-1",
  "course-geographie-14-guinee:course-geographie-14-guinee-quiz-2": "course-geographie-14-guinee-lesson-1",
  "course-geographie-14-guinee:course-geographie-14-guinee-quiz-3": "course-geographie-14-guinee-lesson-3",
  "course-geographie-14-guinee:course-geographie-14-guinee-quiz-4": "course-geographie-14-guinee-lesson-3",
  "course-geographie-14-guinee:course-geographie-14-guinee-quiz-5": "course-geographie-14-guinee-lesson-3",

  // course-geographie-15-guinee-bissau
  "course-geographie-15-guinee-bissau:course-geographie-15-guinee-bissau-quiz-1": "course-geographie-15-guinee-bissau-lesson-1",
  "course-geographie-15-guinee-bissau:course-geographie-15-guinee-bissau-quiz-2": "course-geographie-15-guinee-bissau-lesson-3",
  "course-geographie-15-guinee-bissau:course-geographie-15-guinee-bissau-quiz-3": "course-geographie-15-guinee-bissau-lesson-2",
  "course-geographie-15-guinee-bissau:course-geographie-15-guinee-bissau-quiz-4": "course-geographie-15-guinee-bissau-lesson-3",
  "course-geographie-15-guinee-bissau:course-geographie-15-guinee-bissau-quiz-5": "course-geographie-15-guinee-bissau-lesson-1",

  // course-geographie-16-liberia
  "course-geographie-16-liberia:course-geographie-16-liberia-quiz-1": "course-geographie-16-liberia-lesson-2",
  "course-geographie-16-liberia:course-geographie-16-liberia-quiz-2": "course-geographie-16-liberia-lesson-3",
  "course-geographie-16-liberia:course-geographie-16-liberia-quiz-3": "course-geographie-16-liberia-lesson-2",
  "course-geographie-16-liberia:course-geographie-16-liberia-quiz-4": "course-geographie-16-liberia-lesson-3",
  "course-geographie-16-liberia:course-geographie-16-liberia-quiz-5": "course-geographie-16-liberia-lesson-3",

  // course-geographie-17-mali
  "course-geographie-17-mali:course-geographie-17-mali-quiz-1": "course-geographie-17-mali-lesson-1",
  "course-geographie-17-mali:course-geographie-17-mali-quiz-2": "course-geographie-17-mali-lesson-3",
  "course-geographie-17-mali:course-geographie-17-mali-quiz-3": "course-geographie-17-mali-lesson-3",
  "course-geographie-17-mali:course-geographie-17-mali-quiz-4": "course-geographie-17-mali-lesson-3",
  "course-geographie-17-mali:course-geographie-17-mali-quiz-5": "course-geographie-17-mali-lesson-3",

  // course-geographie-18-niger
  "course-geographie-18-niger:course-geographie-18-niger-quiz-1": "course-geographie-18-niger-lesson-3",
  "course-geographie-18-niger:course-geographie-18-niger-quiz-2": "course-geographie-18-niger-lesson-1",
  "course-geographie-18-niger:course-geographie-18-niger-quiz-3": "course-geographie-18-niger-lesson-3",
  "course-geographie-18-niger:course-geographie-18-niger-quiz-4": "course-geographie-18-niger-lesson-3",
  "course-geographie-18-niger:course-geographie-18-niger-quiz-5": "course-geographie-18-niger-lesson-3",

  // course-geographie-19-nigeria
  "course-geographie-19-nigeria:course-geographie-19-nigeria-quiz-1": "course-geographie-19-nigeria-lesson-3",
  "course-geographie-19-nigeria:course-geographie-19-nigeria-quiz-2": "course-geographie-19-nigeria-lesson-3",
  "course-geographie-19-nigeria:course-geographie-19-nigeria-quiz-3": "course-geographie-19-nigeria-lesson-3",
  "course-geographie-19-nigeria:course-geographie-19-nigeria-quiz-4": "course-geographie-19-nigeria-lesson-3",
  "course-geographie-19-nigeria:course-geographie-19-nigeria-quiz-5": "course-geographie-19-nigeria-lesson-3",

  // course-geographie-20-senegal
  "course-geographie-20-senegal:course-geographie-20-senegal-quiz-1": "course-geographie-20-senegal-lesson-3",
  "course-geographie-20-senegal:course-geographie-20-senegal-quiz-2": "course-geographie-20-senegal-lesson-1",
  "course-geographie-20-senegal:course-geographie-20-senegal-quiz-3": "course-geographie-20-senegal-lesson-2",
  "course-geographie-20-senegal:course-geographie-20-senegal-quiz-4": "course-geographie-20-senegal-lesson-3",
  "course-geographie-20-senegal:course-geographie-20-senegal-quiz-5": "course-geographie-20-senegal-lesson-3",

  // course-geographie-21-sierra-leone
  "course-geographie-21-sierra-leone:course-geographie-21-sierra-leone-quiz-1": "course-geographie-21-sierra-leone-lesson-3",
  "course-geographie-21-sierra-leone:course-geographie-21-sierra-leone-quiz-2": "course-geographie-21-sierra-leone-lesson-3",
  "course-geographie-21-sierra-leone:course-geographie-21-sierra-leone-quiz-3": "course-geographie-21-sierra-leone-lesson-3",
  "course-geographie-21-sierra-leone:course-geographie-21-sierra-leone-quiz-4": "course-geographie-21-sierra-leone-lesson-2",
  "course-geographie-21-sierra-leone:course-geographie-21-sierra-leone-quiz-5": "course-geographie-21-sierra-leone-lesson-2",

  // course-geographie-22-togo
  "course-geographie-22-togo:course-geographie-22-togo-quiz-1": "course-geographie-22-togo-lesson-2",
  "course-geographie-22-togo:course-geographie-22-togo-quiz-2": "course-geographie-22-togo-lesson-3",
  "course-geographie-22-togo:course-geographie-22-togo-quiz-3": "course-geographie-22-togo-lesson-1",
  "course-geographie-22-togo:course-geographie-22-togo-quiz-4": "course-geographie-22-togo-lesson-3",
  "course-geographie-22-togo:course-geographie-22-togo-quiz-5": "course-geographie-22-togo-lesson-3",

  // course-geographie-23-angola
  "course-geographie-23-angola:course-geographie-23-angola-quiz-1": "course-geographie-23-angola-lesson-3",
  "course-geographie-23-angola:course-geographie-23-angola-quiz-2": "course-geographie-23-angola-lesson-2",
  "course-geographie-23-angola:course-geographie-23-angola-quiz-3": "course-geographie-23-angola-lesson-2",
  "course-geographie-23-angola:course-geographie-23-angola-quiz-4": "course-geographie-23-angola-lesson-1",
  "course-geographie-23-angola:course-geographie-23-angola-quiz-5": "course-geographie-23-angola-lesson-1",

  // course-geographie-24-cameroun
  "course-geographie-24-cameroun:course-geographie-24-cameroun-quiz-1": "course-geographie-24-cameroun-lesson-1",
  "course-geographie-24-cameroun:course-geographie-24-cameroun-quiz-2": "course-geographie-24-cameroun-lesson-2",
  "course-geographie-24-cameroun:course-geographie-24-cameroun-quiz-3": "course-geographie-24-cameroun-lesson-3",
  "course-geographie-24-cameroun:course-geographie-24-cameroun-quiz-4": "course-geographie-24-cameroun-lesson-1",
  "course-geographie-24-cameroun:course-geographie-24-cameroun-quiz-5": "course-geographie-24-cameroun-lesson-3",

  // course-geographie-25-centrafrique
  "course-geographie-25-centrafrique:course-geographie-25-centrafrique-quiz-1": "course-geographie-25-centrafrique-lesson-1",
  "course-geographie-25-centrafrique:course-geographie-25-centrafrique-quiz-2": "course-geographie-25-centrafrique-lesson-1",
  "course-geographie-25-centrafrique:course-geographie-25-centrafrique-quiz-3": "course-geographie-25-centrafrique-lesson-3",
  "course-geographie-25-centrafrique:course-geographie-25-centrafrique-quiz-4": "course-geographie-25-centrafrique-lesson-3",
  "course-geographie-25-centrafrique:course-geographie-25-centrafrique-quiz-5": "course-geographie-25-centrafrique-lesson-2",

  // course-geographie-26-congo-brazzaville
  "course-geographie-26-congo-brazzaville:course-geographie-26-congo-brazzaville-quiz-1": "course-geographie-26-congo-brazzaville-lesson-1",
  "course-geographie-26-congo-brazzaville:course-geographie-26-congo-brazzaville-quiz-2": "course-geographie-26-congo-brazzaville-lesson-1",
  "course-geographie-26-congo-brazzaville:course-geographie-26-congo-brazzaville-quiz-3": "course-geographie-26-congo-brazzaville-lesson-3",
  "course-geographie-26-congo-brazzaville:course-geographie-26-congo-brazzaville-quiz-4": "course-geographie-26-congo-brazzaville-lesson-1",
  "course-geographie-26-congo-brazzaville:course-geographie-26-congo-brazzaville-quiz-5": "course-geographie-26-congo-brazzaville-lesson-1",

  // course-geographie-27-rd-congo
  "course-geographie-27-rd-congo:course-geographie-27-rd-congo-quiz-1": "course-geographie-27-rd-congo-lesson-1",
  "course-geographie-27-rd-congo:course-geographie-27-rd-congo-quiz-2": "course-geographie-27-rd-congo-lesson-3",
  "course-geographie-27-rd-congo:course-geographie-27-rd-congo-quiz-3": "course-geographie-27-rd-congo-lesson-2",
  "course-geographie-27-rd-congo:course-geographie-27-rd-congo-quiz-4": "course-geographie-27-rd-congo-lesson-1",
  "course-geographie-27-rd-congo:course-geographie-27-rd-congo-quiz-5": "course-geographie-27-rd-congo-lesson-2",

  // course-geographie-28-gabon
  "course-geographie-28-gabon:course-geographie-28-gabon-quiz-1": "course-geographie-28-gabon-lesson-2",
  "course-geographie-28-gabon:course-geographie-28-gabon-quiz-2": "course-geographie-28-gabon-lesson-3",
  "course-geographie-28-gabon:course-geographie-28-gabon-quiz-3": "course-geographie-28-gabon-lesson-3",
  "course-geographie-28-gabon:course-geographie-28-gabon-quiz-4": "course-geographie-28-gabon-lesson-1",
  "course-geographie-28-gabon:course-geographie-28-gabon-quiz-5": "course-geographie-28-gabon-lesson-3",

  // course-geographie-29-guinee-equatoriale
  "course-geographie-29-guinee-equatoriale:course-geographie-29-guinee-equatoriale-quiz-1": "course-geographie-29-guinee-equatoriale-lesson-2",
  "course-geographie-29-guinee-equatoriale:course-geographie-29-guinee-equatoriale-quiz-2": "course-geographie-29-guinee-equatoriale-lesson-2",
  "course-geographie-29-guinee-equatoriale:course-geographie-29-guinee-equatoriale-quiz-3": "course-geographie-29-guinee-equatoriale-lesson-2",
  "course-geographie-29-guinee-equatoriale:course-geographie-29-guinee-equatoriale-quiz-4": "course-geographie-29-guinee-equatoriale-lesson-3",
  "course-geographie-29-guinee-equatoriale:course-geographie-29-guinee-equatoriale-quiz-5": "course-geographie-29-guinee-equatoriale-lesson-3",

  // course-geographie-30-sao-tome-et-principe
  "course-geographie-30-sao-tome-et-principe:course-geographie-30-sao-tome-et-principe-quiz-1": "course-geographie-30-sao-tome-et-principe-lesson-2",
  "course-geographie-30-sao-tome-et-principe:course-geographie-30-sao-tome-et-principe-quiz-2": "course-geographie-30-sao-tome-et-principe-lesson-3",
  "course-geographie-30-sao-tome-et-principe:course-geographie-30-sao-tome-et-principe-quiz-3": "course-geographie-30-sao-tome-et-principe-lesson-2",
  "course-geographie-30-sao-tome-et-principe:course-geographie-30-sao-tome-et-principe-quiz-4": "course-geographie-30-sao-tome-et-principe-lesson-2",
  "course-geographie-30-sao-tome-et-principe:course-geographie-30-sao-tome-et-principe-quiz-5": "course-geographie-30-sao-tome-et-principe-lesson-2",

  // course-geographie-31-tchad
  "course-geographie-31-tchad:course-geographie-31-tchad-quiz-1": "course-geographie-31-tchad-lesson-1",
  "course-geographie-31-tchad:course-geographie-31-tchad-quiz-2": "course-geographie-31-tchad-lesson-1",
  "course-geographie-31-tchad:course-geographie-31-tchad-quiz-3": "course-geographie-31-tchad-lesson-3",
  "course-geographie-31-tchad:course-geographie-31-tchad-quiz-4": "course-geographie-31-tchad-lesson-2",
  "course-geographie-31-tchad:course-geographie-31-tchad-quiz-5": "course-geographie-31-tchad-lesson-3",

  // course-geographie-32-burundi
  "course-geographie-32-burundi:course-geographie-32-burundi-quiz-1": "course-geographie-32-burundi-lesson-1",
  "course-geographie-32-burundi:course-geographie-32-burundi-quiz-2": "course-geographie-32-burundi-lesson-1",
  "course-geographie-32-burundi:course-geographie-32-burundi-quiz-3": "course-geographie-32-burundi-lesson-3",
  "course-geographie-32-burundi:course-geographie-32-burundi-quiz-4": "course-geographie-32-burundi-lesson-3",
  "course-geographie-32-burundi:course-geographie-32-burundi-quiz-5": "course-geographie-32-burundi-lesson-1",

  // course-geographie-33-comores
  "course-geographie-33-comores:course-geographie-33-comores-quiz-1": "course-geographie-33-comores-lesson-1",
  "course-geographie-33-comores:course-geographie-33-comores-quiz-2": "course-geographie-33-comores-lesson-1",
  "course-geographie-33-comores:course-geographie-33-comores-quiz-3": "course-geographie-33-comores-lesson-2",
  "course-geographie-33-comores:course-geographie-33-comores-quiz-4": "course-geographie-33-comores-lesson-3",
  "course-geographie-33-comores:course-geographie-33-comores-quiz-5": "course-geographie-33-comores-lesson-3",

  // course-geographie-34-djibouti
  "course-geographie-34-djibouti:course-geographie-34-djibouti-quiz-1": "course-geographie-34-djibouti-lesson-3",
  "course-geographie-34-djibouti:course-geographie-34-djibouti-quiz-2": "course-geographie-34-djibouti-lesson-1",
  "course-geographie-34-djibouti:course-geographie-34-djibouti-quiz-3": "course-geographie-34-djibouti-lesson-3",
  "course-geographie-34-djibouti:course-geographie-34-djibouti-quiz-4": "course-geographie-34-djibouti-lesson-3",
  "course-geographie-34-djibouti:course-geographie-34-djibouti-quiz-5": "course-geographie-34-djibouti-lesson-2",

  // course-geographie-35-erythree
  "course-geographie-35-erythree:course-geographie-35-erythree-quiz-1": "course-geographie-35-erythree-lesson-1",
  "course-geographie-35-erythree:course-geographie-35-erythree-quiz-2": "course-geographie-35-erythree-lesson-3",
  "course-geographie-35-erythree:course-geographie-35-erythree-quiz-3": "course-geographie-35-erythree-lesson-3",
  "course-geographie-35-erythree:course-geographie-35-erythree-quiz-4": "course-geographie-35-erythree-lesson-1",
  "course-geographie-35-erythree:course-geographie-35-erythree-quiz-5": "course-geographie-35-erythree-lesson-3",

  // course-geographie-36-ethiopie
  "course-geographie-36-ethiopie:course-geographie-36-ethiopie-quiz-1": "course-geographie-36-ethiopie-lesson-2",
  "course-geographie-36-ethiopie:course-geographie-36-ethiopie-quiz-2": "course-geographie-36-ethiopie-lesson-3",
  "course-geographie-36-ethiopie:course-geographie-36-ethiopie-quiz-3": "course-geographie-36-ethiopie-lesson-3",
  "course-geographie-36-ethiopie:course-geographie-36-ethiopie-quiz-4": "course-geographie-36-ethiopie-lesson-3",
  "course-geographie-36-ethiopie:course-geographie-36-ethiopie-quiz-5": "course-geographie-36-ethiopie-lesson-1",

  // course-geographie-37-kenya
  "course-geographie-37-kenya:course-geographie-37-kenya-quiz-1": "course-geographie-37-kenya-lesson-3",
  "course-geographie-37-kenya:course-geographie-37-kenya-quiz-2": "course-geographie-37-kenya-lesson-1",
  "course-geographie-37-kenya:course-geographie-37-kenya-quiz-3": "course-geographie-37-kenya-lesson-3",
  "course-geographie-37-kenya:course-geographie-37-kenya-quiz-4": "course-geographie-37-kenya-lesson-3",
  "course-geographie-37-kenya:course-geographie-37-kenya-quiz-5": "course-geographie-37-kenya-lesson-2",

  // course-geographie-38-madagascar
  "course-geographie-38-madagascar:course-geographie-38-madagascar-quiz-1": "course-geographie-38-madagascar-lesson-2",
  "course-geographie-38-madagascar:course-geographie-38-madagascar-quiz-2": "course-geographie-38-madagascar-lesson-1",
  "course-geographie-38-madagascar:course-geographie-38-madagascar-quiz-3": "course-geographie-38-madagascar-lesson-3",
  "course-geographie-38-madagascar:course-geographie-38-madagascar-quiz-4": "course-geographie-38-madagascar-lesson-3",
  "course-geographie-38-madagascar:course-geographie-38-madagascar-quiz-5": "course-geographie-38-madagascar-lesson-1",

  // course-geographie-39-maurice
  "course-geographie-39-maurice:course-geographie-39-maurice-quiz-1": "course-geographie-39-maurice-lesson-3",
  "course-geographie-39-maurice:course-geographie-39-maurice-quiz-2": "course-geographie-39-maurice-lesson-1",
  "course-geographie-39-maurice:course-geographie-39-maurice-quiz-3": "course-geographie-39-maurice-lesson-3",
  "course-geographie-39-maurice:course-geographie-39-maurice-quiz-4": "course-geographie-39-maurice-lesson-3",
  "course-geographie-39-maurice:course-geographie-39-maurice-quiz-5": "course-geographie-39-maurice-lesson-3",

  // course-geographie-40-ouganda
  "course-geographie-40-ouganda:course-geographie-40-ouganda-quiz-1": "course-geographie-40-ouganda-lesson-3",
  "course-geographie-40-ouganda:course-geographie-40-ouganda-quiz-2": "course-geographie-40-ouganda-lesson-1",
  "course-geographie-40-ouganda:course-geographie-40-ouganda-quiz-3": "course-geographie-40-ouganda-lesson-3",
  "course-geographie-40-ouganda:course-geographie-40-ouganda-quiz-4": "course-geographie-40-ouganda-lesson-3",
  "course-geographie-40-ouganda:course-geographie-40-ouganda-quiz-5": "course-geographie-40-ouganda-lesson-3",

  // course-geographie-41-rwanda
  "course-geographie-41-rwanda:course-geographie-41-rwanda-quiz-1": "course-geographie-41-rwanda-lesson-1",
  "course-geographie-41-rwanda:course-geographie-41-rwanda-quiz-2": "course-geographie-41-rwanda-lesson-2",
  "course-geographie-41-rwanda:course-geographie-41-rwanda-quiz-3": "course-geographie-41-rwanda-lesson-3",
  "course-geographie-41-rwanda:course-geographie-41-rwanda-quiz-4": "course-geographie-41-rwanda-lesson-1",
  "course-geographie-41-rwanda:course-geographie-41-rwanda-quiz-5": "course-geographie-41-rwanda-lesson-1",

  // course-geographie-42-seychelles
  "course-geographie-42-seychelles:course-geographie-42-seychelles-quiz-1": "course-geographie-42-seychelles-lesson-1",
  "course-geographie-42-seychelles:course-geographie-42-seychelles-quiz-2": "course-geographie-42-seychelles-lesson-3",
  "course-geographie-42-seychelles:course-geographie-42-seychelles-quiz-3": "course-geographie-42-seychelles-lesson-3",
  "course-geographie-42-seychelles:course-geographie-42-seychelles-quiz-4": "course-geographie-42-seychelles-lesson-1",
  "course-geographie-42-seychelles:course-geographie-42-seychelles-quiz-5": "course-geographie-42-seychelles-lesson-3",

  // course-geographie-43-somalie
  "course-geographie-43-somalie:course-geographie-43-somalie-quiz-1": "course-geographie-43-somalie-lesson-1",
  "course-geographie-43-somalie:course-geographie-43-somalie-quiz-2": "course-geographie-43-somalie-lesson-1",
  "course-geographie-43-somalie:course-geographie-43-somalie-quiz-3": "course-geographie-43-somalie-lesson-3",
  "course-geographie-43-somalie:course-geographie-43-somalie-quiz-4": "course-geographie-43-somalie-lesson-3",
  "course-geographie-43-somalie:course-geographie-43-somalie-quiz-5": "course-geographie-43-somalie-lesson-3",

  // course-geographie-44-soudan-du-sud
  "course-geographie-44-soudan-du-sud:course-geographie-44-soudan-du-sud-quiz-1": "course-geographie-44-soudan-du-sud-lesson-1",
  "course-geographie-44-soudan-du-sud:course-geographie-44-soudan-du-sud-quiz-2": "course-geographie-44-soudan-du-sud-lesson-2",
  "course-geographie-44-soudan-du-sud:course-geographie-44-soudan-du-sud-quiz-3": "course-geographie-44-soudan-du-sud-lesson-3",
  "course-geographie-44-soudan-du-sud:course-geographie-44-soudan-du-sud-quiz-4": "course-geographie-44-soudan-du-sud-lesson-1",
  "course-geographie-44-soudan-du-sud:course-geographie-44-soudan-du-sud-quiz-5": "course-geographie-44-soudan-du-sud-lesson-1",

  // course-geographie-45-tanzanie
  "course-geographie-45-tanzanie:course-geographie-45-tanzanie-quiz-1": "course-geographie-45-tanzanie-lesson-1",
  "course-geographie-45-tanzanie:course-geographie-45-tanzanie-quiz-2": "course-geographie-45-tanzanie-lesson-1",
  "course-geographie-45-tanzanie:course-geographie-45-tanzanie-quiz-3": "course-geographie-45-tanzanie-lesson-3",
  "course-geographie-45-tanzanie:course-geographie-45-tanzanie-quiz-4": "course-geographie-45-tanzanie-lesson-2",
  "course-geographie-45-tanzanie:course-geographie-45-tanzanie-quiz-5": "course-geographie-45-tanzanie-lesson-3",

  // course-geographie-46-afrique-du-sud
  "course-geographie-46-afrique-du-sud:course-geographie-46-afrique-du-sud-quiz-1": "course-geographie-46-afrique-du-sud-lesson-3",
  "course-geographie-46-afrique-du-sud:course-geographie-46-afrique-du-sud-quiz-2": "course-geographie-46-afrique-du-sud-lesson-3",
  "course-geographie-46-afrique-du-sud:course-geographie-46-afrique-du-sud-quiz-3": "course-geographie-46-afrique-du-sud-lesson-2",
  "course-geographie-46-afrique-du-sud:course-geographie-46-afrique-du-sud-quiz-4": "course-geographie-46-afrique-du-sud-lesson-3",
  "course-geographie-46-afrique-du-sud:course-geographie-46-afrique-du-sud-quiz-5": "course-geographie-46-afrique-du-sud-lesson-2",

  // course-geographie-47-botswana
  "course-geographie-47-botswana:course-geographie-47-botswana-quiz-1": "course-geographie-47-botswana-lesson-1",
  "course-geographie-47-botswana:course-geographie-47-botswana-quiz-2": "course-geographie-47-botswana-lesson-3",
  "course-geographie-47-botswana:course-geographie-47-botswana-quiz-3": "course-geographie-47-botswana-lesson-1",
  "course-geographie-47-botswana:course-geographie-47-botswana-quiz-4": "course-geographie-47-botswana-lesson-3",
  "course-geographie-47-botswana:course-geographie-47-botswana-quiz-5": "course-geographie-47-botswana-lesson-2",

  // course-geographie-48-eswatini
  "course-geographie-48-eswatini:course-geographie-48-eswatini-quiz-1": "course-geographie-48-eswatini-lesson-3",
  "course-geographie-48-eswatini:course-geographie-48-eswatini-quiz-2": "course-geographie-48-eswatini-lesson-1",
  "course-geographie-48-eswatini:course-geographie-48-eswatini-quiz-3": "course-geographie-48-eswatini-lesson-3",
  "course-geographie-48-eswatini:course-geographie-48-eswatini-quiz-4": "course-geographie-48-eswatini-lesson-3",
  "course-geographie-48-eswatini:course-geographie-48-eswatini-quiz-5": "course-geographie-48-eswatini-lesson-1",

  // course-geographie-49-lesotho
  "course-geographie-49-lesotho:course-geographie-49-lesotho-quiz-1": "course-geographie-49-lesotho-lesson-1",
  "course-geographie-49-lesotho:course-geographie-49-lesotho-quiz-2": "course-geographie-49-lesotho-lesson-3",
  "course-geographie-49-lesotho:course-geographie-49-lesotho-quiz-3": "course-geographie-49-lesotho-lesson-3",
  "course-geographie-49-lesotho:course-geographie-49-lesotho-quiz-4": "course-geographie-49-lesotho-lesson-3",
  "course-geographie-49-lesotho:course-geographie-49-lesotho-quiz-5": "course-geographie-49-lesotho-lesson-3",

  // course-geographie-50-malawi
  "course-geographie-50-malawi:course-geographie-50-malawi-quiz-1": "course-geographie-50-malawi-lesson-1",
  "course-geographie-50-malawi:course-geographie-50-malawi-quiz-2": "course-geographie-50-malawi-lesson-2",
  "course-geographie-50-malawi:course-geographie-50-malawi-quiz-3": "course-geographie-50-malawi-lesson-3",
  "course-geographie-50-malawi:course-geographie-50-malawi-quiz-4": "course-geographie-50-malawi-lesson-3",
  "course-geographie-50-malawi:course-geographie-50-malawi-quiz-5": "course-geographie-50-malawi-lesson-1",

  // course-geographie-51-mozambique
  "course-geographie-51-mozambique:course-geographie-51-mozambique-quiz-1": "course-geographie-51-mozambique-lesson-1",
  "course-geographie-51-mozambique:course-geographie-51-mozambique-quiz-2": "course-geographie-51-mozambique-lesson-3",
  "course-geographie-51-mozambique:course-geographie-51-mozambique-quiz-3": "course-geographie-51-mozambique-lesson-2",
  "course-geographie-51-mozambique:course-geographie-51-mozambique-quiz-4": "course-geographie-51-mozambique-lesson-3",
  "course-geographie-51-mozambique:course-geographie-51-mozambique-quiz-5": "course-geographie-51-mozambique-lesson-1",

  // course-geographie-52-namibie
  "course-geographie-52-namibie:course-geographie-52-namibie-quiz-1": "course-geographie-52-namibie-lesson-1",
  "course-geographie-52-namibie:course-geographie-52-namibie-quiz-2": "course-geographie-52-namibie-lesson-2",
  "course-geographie-52-namibie:course-geographie-52-namibie-quiz-3": "course-geographie-52-namibie-lesson-3",
  "course-geographie-52-namibie:course-geographie-52-namibie-quiz-4": "course-geographie-52-namibie-lesson-3",
  "course-geographie-52-namibie:course-geographie-52-namibie-quiz-5": "course-geographie-52-namibie-lesson-3",

  // course-geographie-53-zambie
  "course-geographie-53-zambie:course-geographie-53-zambie-quiz-1": "course-geographie-53-zambie-lesson-3",
  "course-geographie-53-zambie:course-geographie-53-zambie-quiz-2": "course-geographie-53-zambie-lesson-1",
  "course-geographie-53-zambie:course-geographie-53-zambie-quiz-3": "course-geographie-53-zambie-lesson-1",
  "course-geographie-53-zambie:course-geographie-53-zambie-quiz-4": "course-geographie-53-zambie-lesson-2",
  "course-geographie-53-zambie:course-geographie-53-zambie-quiz-5": "course-geographie-53-zambie-lesson-1",

  // course-geographie-54-zimbabwe
  "course-geographie-54-zimbabwe:course-geographie-54-zimbabwe-quiz-1": "course-geographie-54-zimbabwe-lesson-3",
  "course-geographie-54-zimbabwe:course-geographie-54-zimbabwe-quiz-2": "course-geographie-54-zimbabwe-lesson-1",
  "course-geographie-54-zimbabwe:course-geographie-54-zimbabwe-quiz-3": "course-geographie-54-zimbabwe-lesson-1",
  "course-geographie-54-zimbabwe:course-geographie-54-zimbabwe-quiz-4": "course-geographie-54-zimbabwe-lesson-3",
  "course-geographie-54-zimbabwe:course-geographie-54-zimbabwe-quiz-5": "course-geographie-54-zimbabwe-lesson-1",




};
