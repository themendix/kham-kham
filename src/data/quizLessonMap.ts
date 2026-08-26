/**
 * Rattachement explicite d'une question de quiz à la leçon qui en donne la réponse.
 *
 * Sert le module Quiz : quand l'utilisateur se trompe, la correction déplie sur place la leçon
 * concernée, et l'écran de fin de partie liste toutes les leçons des questions ratées. C'est ce
 * qui fait de l'échec une porte d'entrée dans le catalogue plutôt qu'une sanction.
 *
 * **Cette table ne contient que les exceptions.** Quand un cours a autant de questions que de
 * leçons (78 cours sur 136 : toute l'Histoire, 30 Personnalités, 8 Découverte — le quiz y suit
 * l'ordre des leçons, une question par leçon), `scripts/generate-quiz-index.ts` dérive le
 * rattachement par position et rien n'est à déclarer ici. Les 286 questions restantes sont celles
 * des 54 fiches Géographie (3 leçons pour 5 questions) et de 4 cours hérités (3 pour 4).
 *
 * **267 des 286 sont rattachées ici** — soit 657 des 676 questions du catalogue une fois les
 * dérivées comptées. Établies par rapprochement de contenu (la réponse est-elle citée dans la
 * leçon ?) puis relecture : 222 questions citent leur réponse mot pour mot dans une seule leçon ;
 * une vingtaine la citent dans plusieurs, auquel cas toutes répondent réellement et celle qui
 * développe le plus a été retenue ; le reste a été rattaché par recouvrement de vocabulaire, puis
 * relu un par un.
 *
 * **Les 19 absentes ne sont pas un oubli.** Leur réponse ne figure dans *aucune* leçon de leur
 * propre cours :
 * - langue officielle du Ghana, du Liberia et du Kenya ; devise du Cameroun ;
 * - sortie du Niger de la CEDEAO ; alliance AES formée par le Mali ;
 * - océan bordant l'Angola et Madagascar ; équateur au Gabon ; frontière nord de la Guinée-Bissau ;
 * - enclavement de l'Éthiopie, du Rwanda, de l'Eswatini, du Malawi, de la Zambie, du Zimbabwe,
 *   du Tchad, du Burundi et du Botswana.
 *
 * Les rattacher quand même enverrait l'utilisateur vers une leçon qui ne répond pas — le module
 * renvoie donc vers le cours, ce qui est honnête. **Le vrai correctif est éditorial** : ajouter
 * ces faits aux leçons concernées, après quoi elles pourront être rattachées ici. À noter que le
 * cas inverse existe et a été retenu : le Burkina Faso a bien une leçon sur son enclavement
 * (« À la merci des ports voisins »), et sa question y renvoie.
 *
 * Clé = clé de question (`${courseId}:${questionId}`), valeur = id de leçon du même cours.
 * L'intégrité des deux est vérifiée par la règle 22 de `npm run validate`, qui compte aussi les
 * questions non rattachées.
 */

export const QUIZ_LESSON_MAP: Record<string, string> = {
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

  // course-geographie-13-ghana — 1 question(s) sans reponse dans le cours, non rattachee(s)
  "course-geographie-13-ghana:course-geographie-13-ghana-quiz-1": "course-geographie-13-ghana-lesson-3",
  "course-geographie-13-ghana:course-geographie-13-ghana-quiz-2": "course-geographie-13-ghana-lesson-1",
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

  // course-geographie-16-liberia — 1 question(s) sans reponse dans le cours, non rattachee(s)
  "course-geographie-16-liberia:course-geographie-16-liberia-quiz-1": "course-geographie-16-liberia-lesson-2",
  "course-geographie-16-liberia:course-geographie-16-liberia-quiz-2": "course-geographie-16-liberia-lesson-3",
  "course-geographie-16-liberia:course-geographie-16-liberia-quiz-4": "course-geographie-16-liberia-lesson-3",
  "course-geographie-16-liberia:course-geographie-16-liberia-quiz-5": "course-geographie-16-liberia-lesson-3",

  // course-geographie-17-mali
  "course-geographie-17-mali:course-geographie-17-mali-quiz-1": "course-geographie-17-mali-lesson-1",
  "course-geographie-17-mali:course-geographie-17-mali-quiz-2": "course-geographie-17-mali-lesson-3",
  "course-geographie-17-mali:course-geographie-17-mali-quiz-3": "course-geographie-17-mali-lesson-3",
  "course-geographie-17-mali:course-geographie-17-mali-quiz-4": "course-geographie-17-mali-lesson-3",

  // course-geographie-18-niger — 1 question(s) sans reponse dans le cours, non rattachee(s)
  "course-geographie-18-niger:course-geographie-18-niger-quiz-1": "course-geographie-18-niger-lesson-3",
  "course-geographie-18-niger:course-geographie-18-niger-quiz-2": "course-geographie-18-niger-lesson-1",
  "course-geographie-18-niger:course-geographie-18-niger-quiz-3": "course-geographie-18-niger-lesson-3",
  "course-geographie-18-niger:course-geographie-18-niger-quiz-4": "course-geographie-18-niger-lesson-3",

  // course-geographie-19-nigeria
  "course-geographie-19-nigeria:course-geographie-19-nigeria-quiz-1": "course-geographie-19-nigeria-lesson-3",
  "course-geographie-19-nigeria:course-geographie-19-nigeria-quiz-2": "course-geographie-19-nigeria-lesson-1",
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

  // course-geographie-23-angola — 1 question(s) sans reponse dans le cours, non rattachee(s)
  "course-geographie-23-angola:course-geographie-23-angola-quiz-1": "course-geographie-23-angola-lesson-3",
  "course-geographie-23-angola:course-geographie-23-angola-quiz-2": "course-geographie-23-angola-lesson-2",
  "course-geographie-23-angola:course-geographie-23-angola-quiz-3": "course-geographie-23-angola-lesson-2",
  "course-geographie-23-angola:course-geographie-23-angola-quiz-4": "course-geographie-23-angola-lesson-1",

  // course-geographie-24-cameroun — 1 question(s) sans reponse dans le cours, non rattachee(s)
  "course-geographie-24-cameroun:course-geographie-24-cameroun-quiz-1": "course-geographie-24-cameroun-lesson-1",
  "course-geographie-24-cameroun:course-geographie-24-cameroun-quiz-2": "course-geographie-24-cameroun-lesson-2",
  "course-geographie-24-cameroun:course-geographie-24-cameroun-quiz-3": "course-geographie-24-cameroun-lesson-3",
  "course-geographie-24-cameroun:course-geographie-24-cameroun-quiz-4": "course-geographie-24-cameroun-lesson-1",

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

  // course-geographie-28-gabon — 1 question(s) sans reponse dans le cours, non rattachee(s)
  "course-geographie-28-gabon:course-geographie-28-gabon-quiz-1": "course-geographie-28-gabon-lesson-2",
  "course-geographie-28-gabon:course-geographie-28-gabon-quiz-2": "course-geographie-28-gabon-lesson-3",
  "course-geographie-28-gabon:course-geographie-28-gabon-quiz-3": "course-geographie-28-gabon-lesson-3",
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
  "course-geographie-31-tchad:course-geographie-31-tchad-quiz-2": "course-geographie-31-tchad-lesson-1",
  "course-geographie-31-tchad:course-geographie-31-tchad-quiz-3": "course-geographie-31-tchad-lesson-3",
  "course-geographie-31-tchad:course-geographie-31-tchad-quiz-4": "course-geographie-31-tchad-lesson-2",
  "course-geographie-31-tchad:course-geographie-31-tchad-quiz-5": "course-geographie-31-tchad-lesson-3",

  // course-geographie-32-burundi
  "course-geographie-32-burundi:course-geographie-32-burundi-quiz-1": "course-geographie-32-burundi-lesson-1",
  "course-geographie-32-burundi:course-geographie-32-burundi-quiz-2": "course-geographie-32-burundi-lesson-1",
  "course-geographie-32-burundi:course-geographie-32-burundi-quiz-3": "course-geographie-32-burundi-lesson-3",
  "course-geographie-32-burundi:course-geographie-32-burundi-quiz-4": "course-geographie-32-burundi-lesson-3",

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

  // course-geographie-36-ethiopie — 1 question(s) sans reponse dans le cours, non rattachee(s)
  "course-geographie-36-ethiopie:course-geographie-36-ethiopie-quiz-1": "course-geographie-36-ethiopie-lesson-2",
  "course-geographie-36-ethiopie:course-geographie-36-ethiopie-quiz-2": "course-geographie-36-ethiopie-lesson-3",
  "course-geographie-36-ethiopie:course-geographie-36-ethiopie-quiz-3": "course-geographie-36-ethiopie-lesson-3",
  "course-geographie-36-ethiopie:course-geographie-36-ethiopie-quiz-4": "course-geographie-36-ethiopie-lesson-3",

  // course-geographie-37-kenya — 1 question(s) sans reponse dans le cours, non rattachee(s)
  "course-geographie-37-kenya:course-geographie-37-kenya-quiz-1": "course-geographie-37-kenya-lesson-3",
  "course-geographie-37-kenya:course-geographie-37-kenya-quiz-2": "course-geographie-37-kenya-lesson-1",
  "course-geographie-37-kenya:course-geographie-37-kenya-quiz-3": "course-geographie-37-kenya-lesson-3",
  "course-geographie-37-kenya:course-geographie-37-kenya-quiz-4": "course-geographie-37-kenya-lesson-3",

  // course-geographie-38-madagascar — 1 question(s) sans reponse dans le cours, non rattachee(s)
  "course-geographie-38-madagascar:course-geographie-38-madagascar-quiz-1": "course-geographie-38-madagascar-lesson-2",
  "course-geographie-38-madagascar:course-geographie-38-madagascar-quiz-2": "course-geographie-38-madagascar-lesson-1",
  "course-geographie-38-madagascar:course-geographie-38-madagascar-quiz-3": "course-geographie-38-madagascar-lesson-3",
  "course-geographie-38-madagascar:course-geographie-38-madagascar-quiz-4": "course-geographie-38-madagascar-lesson-3",

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

  // course-geographie-41-rwanda — 1 question(s) sans reponse dans le cours, non rattachee(s)
  "course-geographie-41-rwanda:course-geographie-41-rwanda-quiz-1": "course-geographie-41-rwanda-lesson-1",
  "course-geographie-41-rwanda:course-geographie-41-rwanda-quiz-2": "course-geographie-41-rwanda-lesson-2",
  "course-geographie-41-rwanda:course-geographie-41-rwanda-quiz-3": "course-geographie-41-rwanda-lesson-3",
  "course-geographie-41-rwanda:course-geographie-41-rwanda-quiz-4": "course-geographie-41-rwanda-lesson-1",

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
  "course-geographie-47-botswana:course-geographie-47-botswana-quiz-5": "course-geographie-47-botswana-lesson-2",

  // course-geographie-48-eswatini — 1 question(s) sans reponse dans le cours, non rattachee(s)
  "course-geographie-48-eswatini:course-geographie-48-eswatini-quiz-1": "course-geographie-48-eswatini-lesson-3",
  "course-geographie-48-eswatini:course-geographie-48-eswatini-quiz-2": "course-geographie-48-eswatini-lesson-1",
  "course-geographie-48-eswatini:course-geographie-48-eswatini-quiz-3": "course-geographie-48-eswatini-lesson-3",
  "course-geographie-48-eswatini:course-geographie-48-eswatini-quiz-4": "course-geographie-48-eswatini-lesson-3",

  // course-geographie-49-lesotho
  "course-geographie-49-lesotho:course-geographie-49-lesotho-quiz-1": "course-geographie-49-lesotho-lesson-1",
  "course-geographie-49-lesotho:course-geographie-49-lesotho-quiz-2": "course-geographie-49-lesotho-lesson-1",
  "course-geographie-49-lesotho:course-geographie-49-lesotho-quiz-3": "course-geographie-49-lesotho-lesson-3",
  "course-geographie-49-lesotho:course-geographie-49-lesotho-quiz-4": "course-geographie-49-lesotho-lesson-3",
  "course-geographie-49-lesotho:course-geographie-49-lesotho-quiz-5": "course-geographie-49-lesotho-lesson-3",

  // course-geographie-50-malawi — 1 question(s) sans reponse dans le cours, non rattachee(s)
  "course-geographie-50-malawi:course-geographie-50-malawi-quiz-1": "course-geographie-50-malawi-lesson-1",
  "course-geographie-50-malawi:course-geographie-50-malawi-quiz-2": "course-geographie-50-malawi-lesson-2",
  "course-geographie-50-malawi:course-geographie-50-malawi-quiz-3": "course-geographie-50-malawi-lesson-3",
  "course-geographie-50-malawi:course-geographie-50-malawi-quiz-4": "course-geographie-50-malawi-lesson-3",

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

  // course-geographie-53-zambie — 1 question(s) sans reponse dans le cours, non rattachee(s)
  "course-geographie-53-zambie:course-geographie-53-zambie-quiz-1": "course-geographie-53-zambie-lesson-3",
  "course-geographie-53-zambie:course-geographie-53-zambie-quiz-2": "course-geographie-53-zambie-lesson-1",
  "course-geographie-53-zambie:course-geographie-53-zambie-quiz-3": "course-geographie-53-zambie-lesson-1",
  "course-geographie-53-zambie:course-geographie-53-zambie-quiz-4": "course-geographie-53-zambie-lesson-2",

  // course-geographie-54-zimbabwe — 1 question(s) sans reponse dans le cours, non rattachee(s)
  "course-geographie-54-zimbabwe:course-geographie-54-zimbabwe-quiz-1": "course-geographie-54-zimbabwe-lesson-3",
  "course-geographie-54-zimbabwe:course-geographie-54-zimbabwe-quiz-2": "course-geographie-54-zimbabwe-lesson-1",
  "course-geographie-54-zimbabwe:course-geographie-54-zimbabwe-quiz-3": "course-geographie-54-zimbabwe-lesson-1",
  "course-geographie-54-zimbabwe:course-geographie-54-zimbabwe-quiz-4": "course-geographie-54-zimbabwe-lesson-3",

  // course-perso-voix-plumes-afrique
  "course-perso-voix-plumes-afrique:quiz-perso-1": "lesson-perso-pionniers-nobel",
  "course-perso-voix-plumes-afrique:quiz-perso-2": "lesson-perso-peres-fondateurs",
  "course-perso-voix-plumes-afrique:quiz-perso-3": "lesson-perso-peres-fondateurs",
  "course-perso-voix-plumes-afrique:quiz-perso-4": "lesson-perso-pionniers-nobel",

  // course-arts-rythmes-continent
  "course-arts-rythmes-continent:quiz-arts-1": "lesson-arts-afrobeat",
  "course-arts-rythmes-continent:quiz-arts-2": "lesson-arts-mbalax-soukous",
  "course-arts-rythmes-continent:quiz-arts-3": "lesson-arts-mbalax-soukous",
  "course-arts-rythmes-continent:quiz-arts-4": "lesson-arts-amapiano",

  // course-trad-griots-sagesses
  "course-trad-griots-sagesses:quiz-trad-1": "lesson-trad-griots",
  "course-trad-griots-sagesses:quiz-trad-2": "lesson-trad-griots",
  "course-trad-griots-sagesses:quiz-trad-3": "lesson-trad-rites-passage",
  "course-trad-griots-sagesses:quiz-trad-4": "lesson-trad-ubuntu",

  // course-actu-afrique-qui-innove
  "course-actu-afrique-qui-innove:quiz-actu-1": "lesson-actu-mobile-money",
  "course-actu-afrique-qui-innove:quiz-actu-2": "lesson-actu-union-africaine",
  "course-actu-afrique-qui-innove:quiz-actu-3": "lesson-actu-union-africaine",
  "course-actu-afrique-qui-innove:quiz-actu-4": "lesson-actu-nollywood",
};
