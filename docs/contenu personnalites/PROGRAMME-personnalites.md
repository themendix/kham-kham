# Phase 8 — Matière « Personnalités » : programme des 30 cours

**Statut : PROPOSITION — à valider ou ajuster par Mamadou avant toute rédaction.**
Date : 27 juillet 2026. Projet : Sankofa (`C:\kham-kham`).

---

## 1. Objet et cadre de la phase

La Phase 7 a rendu le déséquilibre du catalogue **non pénalisant** (matières émergentes signalées, maîtrise dérivée, gamification recalibrée). La Phase 8 le **corrige** : elle porte les 4 matières à un seul cours au niveau des deux matières déjà nourries. Elle commence par **Personnalités**, conformément au rythme validé (« une matière à la fois, entièrement, avant la suivante »).

| Paramètre | Valeur retenue |
|---|---|
| Matière | Personnalités (`categoryId: "perso"`) |
| Cible | **30 cours** |
| Format | **5 leçons + quiz de 5 questions** (format Histoire) |
| XP par cours | **70** (règle mécanique du chantier 7.3 : `20 + 10 × nombre de leçons`) |
| Sources autorisées | **UNESCO + Union africaine** uniquement |
| Contenu éditorial | `docs/contenu personnalites/personnalites-NN-slug.md` |
| Identifiants | `course-perso-NN-slug` (NN de 01 à 30) |
| Cible d'intégration | `src/data/courses/personnalites.ts`, export `PERSONNALITES_COURSES` |

**Volume produit** : 30 cours × 5 leçons = **150 leçons**, 150 questions de quiz. Soit **+3 600 XP** au catalogue (2 100 de complétion + 1 500 de leçons).

---

## 2. Sources autorisées — état vérifié le 27/07/2026

La règle de sourcing « UNESCO + Union africaine » avait été fixée pour l'Histoire. Vérification faite, elle est **plus solide qu'elle ne l'était en 2026 au moment de la Phase Histoire**, sur un point décisif :

### 2.1 UNESCO

- **Histoire générale de l'Afrique (HGA)** — l'UNESCO a **achevé l'œuvre en octobre 2025** : les volumes **IX, X et XI** complètent les huit volumes publiés jusqu'en 1993. Plus de 200 experts africains et internationaux y ont contribué.
  - Vol. I-VIII : de la préhistoire à 1935 et au-delà.
  - **Vol. IX** : mise à jour des développements sociaux, politiques et archéologiques récents.
  - **Vol. X** : les **diasporas africaines** et leurs apports aux sociétés modernes.
  - **Vol. XI** : les défis contemporains de l'Afrique et de ses diasporas (construction nationale, jeunesse, égalité de genre, migrations, mondialisation, justice environnementale).
  - **Conséquence directe pour la Phase 8** : le plafond temporel de 1935 est levé. Les figures du XXᵉ siècle et de la diaspora sont désormais couvertes par une source autorisée.
- **Femmes dans l'histoire de l'Afrique** (plateforme pédagogique UNESCO, lancée en 2013) — notices biographiques, dossiers pédagogiques et modules validés scientifiquement, **adossés à l'HGA**, sur une quarantaine de figures féminines : Dihya, Yennenga, Sayyida al-Hurra, Kimpa Vita, Njinga, Nanny, Sojourner Truth, Taytu Betul, Sarraounia, Nehanda, Aoua Keïta, Funmilayo Ransome-Kuti, Miriam Makeba, Wangari Maathai, Mariama Bâ, Bibi Titi Mohammed, Gisèle Rabesahala, Huda Sharawi, Alda do Espírito Santo…
- **Routes des personnes mises en esclavage** (ex-« Route de l'esclave ») — comité scientifique partiellement commun avec l'HGA ; couvre la traite, le marronnage et les figures de la résistance dans la diaspora.

### 2.2 Union africaine

- **Founding Fathers** (`oau60.au.int`) — notices biographiques officielles des chefs d'État fondateurs de l'OUA (1963) : Nkrumah, Haile Selassie, Nasser, Ben Bella, Modibo Keïta, Nyerere, Sékou Touré, Senghor, Kenyatta, Kaunda, Tafawa Balewa, Olympio, Tubman, Ahidjo, Obote, Hamani Diori, Youlou, Dacko, Yaméogo, Tsiranana, Hassan II, Idris, Mwambutsa IV, Sharmarke.
- **Founding Mothers** (`oau60.au.int`) — notices des fondatrices de l'**Organisation panafricaine des femmes (PAWO)**, créée à Dar es-Salaam en **juillet 1962**, un an avant l'OUA : Jeanne Martin Cissé, Huda Shaarawi, Funmilayo Ransome-Kuti, Aoua Keïta, Gisèle Rabesahala, Marie Koré, Taytu Betul, Bibi Titi Mohamed, Josina Machel, Albertina Sisulu, Winnie Madikizela-Mandela, Angie Brooks, Margaret Kenyatta, Alda do Espírito Santo, Adelaide Tambo, Nkosazana Dlamini-Zuma…
- **Agenda 2063**, **Acte constitutif**, **AU Handbook**, **Prix Kwame Nkrumah pour l'excellence scientifique** — pour l'ancrage contemporain et institutionnel.

### 2.3 Limite assumée à signaler

Même élargies aux volumes IX-XI, ces sources restent **institutionnelles et historiennes**. Elles couvrent mal les personnalités **très récentes** des domaines sport, cinéma, technologie ou entrepreneuriat (une Aya Nakamura, un Sadio Mané, une Ngozi Okonjo-Iweala hors de son rôle institutionnel). Le programme ci-dessous est donc **délibérément historique et politique**. Si tu veux une matière « Personnalités » couvrant aussi la culture pop et le sport contemporains, il faudra **élargir la liste blanche** — décision à prendre maintenant, pas en cours de rédaction.

---

## 3. Règles éditoriales

1. **Synthèse et reformulation systématiques** — jamais de copier-coller, même d'une source autorisée.
2. **Faits sensibles croisés** sur au moins deux sources autorisées (dates de naissance/mort, circonstances de décès, attributions contestées).
3. **Traditions orales signalées comme telles.** Plusieurs figures du programme (Yennenga, Sarraounia, Dihya) relèvent en partie du récit oral ou légendaire. Le texte le dit explicitement plutôt que de présenter la légende comme un fait établi — c'est d'ailleurs la position de l'HGA elle-même.
4. **Aucun fait volatil dans les quiz** — pas de « qui dirige aujourd'hui », règle héritée de la Géographie.
5. **Une leçon = un moment de la vie ou un versant de l'œuvre**, pas un découpage arbitraire. Structure type des 5 leçons : origines et contexte → formation et première action → l'épreuve centrale → l'œuvre ou le combat majeur → héritage et postérité.
6. **Ton Sankofa** : « retourner chercher le savoir du passé » — on raconte pour transmettre, pas pour hagiographier. Les zones d'ombre (autoritarisme de certains pères des indépendances, contestations historiographiques) sont mentionnées sobrement.
7. **Correspondance cours → sources** tenue à jour dans `SOURCES-personnalites.md`, hors données de l'app (aucun champ `sources` dans le type `Course`).

---

## 4. Contrôle anti-doublon avec la matière Histoire

Les 40 cours d'Histoire sont déjà rédigés. Neuf figures y sont **déjà traitées comme sujet principal** et sont donc **exclues du programme Personnalités** :

| Figure | Cours d'Histoire existant |
|---|---|
| Soundiata Keïta | `histoire-06-soundiata-mali` |
| Mansa Moussa | `histoire-07-mansa-moussa` |
| Lat Dior | `histoire-35-lat-dior-cayor` |
| Cheikh Ahmadou Bamba | `histoire-36-cheikh-ahmadou-bamba-mouridisme` |
| Aline Sitoé Diatta | `histoire-37-aline-sitoe-diatta` |
| Léopold Sédar Senghor | `histoire-38-senghor-negritude-independance` |
| Reine Njinga (Nzinga) | `histoire-39-reine-nzinga-angola` |
| Chaka Zoulou | `histoire-40-chaka-zoulou` |
| Nelson Mandela | `histoire-30-apartheid-mandela` |

**Recouvrements partiels à surveiller** (le cours d'Histoire traite l'événement, le cours Personnalités traite la personne — angles distincts, à tenir fermement à la rédaction) :

- `histoire-27-bataille-adoua` ↔ cours 13 (Taytu Betul) : l'un raconte la bataille, l'autre la trajectoire de l'impératrice.
- `histoire-26-resistances-colonisation` ↔ cours 11, 12, 14, 15 : le cours d'Histoire fait la synthèse des résistances, les cours Personnalités entrent dans une vie.
- `histoire-29-panafricanisme-union-africaine` ↔ cours 16 et 21 : l'un décrit le mouvement et l'institution, l'autre des itinéraires individuels.
- `histoire-14-royaume-ashanti` ↔ cours 14 (Yaa Asantewaa).
- `histoire-24-traite-negriere-transatlantique` ↔ cours 8, 9, 10.

---

## 5. Le programme — 30 cours en 6 blocs

### Vue d'ensemble

| # | Cours | Période | Aire | Bloc |
|---|---|---|---|---|
| 01 | Hatchepsout | XVᵉ s. av. J.-C. | Nord | A |
| 02 | Taharqa | VIIᵉ s. av. J.-C. | Nord / Nubie | A |
| 03 | Dihya, dite la Kahina | VIIᵉ s. | Nord | A |
| 04 | Yennenga | XIᵉ-XIIᵉ s. | Ouest | A |
| 05 | Ibn Khaldoun | XIVᵉ s. | Nord | A |
| 06 | Sayyida al-Hurra | XVIᵉ s. | Nord | B |
| 07 | Kimpa Vita | 1684-1706 | Centre | B |
| 08 | Nanny des Marrons | XVIIIᵉ s. | Diaspora | B |
| 09 | Toussaint Louverture | 1743-1803 | Diaspora | B |
| 10 | Sojourner Truth | 1797-1883 | Diaspora | B |
| 11 | Abd el-Kader | 1808-1883 | Nord | C |
| 12 | Samori Touré | v. 1830-1900 | Ouest | C |
| 13 | Taytu Betul | v. 1851-1918 | Corne | C |
| 14 | Yaa Asantewaa | v. 1840-1921 | Ouest | C |
| 15 | Sarraounia Mangou | fin XIXᵉ s. | Ouest | C |
| 16 | W. E. B. Du Bois | 1868-1963 | Diaspora | D |
| 17 | Cheikh Anta Diop | 1923-1986 | Ouest | D |
| 18 | Frantz Fanon | 1925-1961 | Diaspora | D |
| 19 | Amílcar Cabral | 1924-1973 | Ouest | D |
| 20 | Agostinho Neto | 1922-1979 | Centre | D |
| 21 | Kwame Nkrumah | 1909-1972 | Ouest | E |
| 22 | Julius Nyerere | 1922-1999 | Est | E |
| 23 | Haile Selassie | 1892-1975 | Corne | E |
| 24 | Patrice Lumumba | 1925-1961 | Centre | E |
| 25 | Jeanne Martin Cissé | 1926-2017 | Ouest | E |
| 26 | Funmilayo Ransome-Kuti | 1900-1978 | Ouest | F |
| 27 | Aoua Keïta | 1912-1980 | Ouest | F |
| 28 | Albertina Sisulu | 1918-2011 | Australe | F |
| 29 | Miriam Makeba | 1932-2008 | Australe | F |
| 30 | Wangari Maathai | 1940-2011 | Est | F |

**Équilibres** : 16 femmes / 14 hommes. Aires : Nord 6, Ouest 10, Centre 3, Est & Corne 4, Australe 2, Diaspora 5. Progression chronologique continue du XVᵉ siècle av. J.-C. à 2011.

> **Faiblesse assumée** : l'Afrique australe n'a que 2 cours (28, 29), parce que Chaka et Mandela sont déjà traités en Histoire. Si tu veux la renforcer, la réserve du § 6 propose Nehanda Nyakasikana, Josina Machel et Winnie Madikizela-Mandela.

---

### Bloc A — Souverains et savants de l'Afrique ancienne et médiévale (01-05)

**01. Hatchepsout, la femme qui régna en pharaon** — `course-perso-01-hatchepsout`
1. L'Égypte du Nouvel Empire et la XVIIIᵉ dynastie · 2. D'épouse royale à régente · 3. Se faire couronner pharaon : le pouvoir et ses images · 4. L'expédition au pays de Pount et les chantiers de Deir el-Bahari · 5. L'effacement posthume et la redécouverte moderne.
*Sources : HGA Vol. II.*

**02. Taharqa, le pharaon venu de Koush** — `course-perso-02-taharqa`
1. Napata et le royaume de Koush · 2. La XXVᵉ dynastie : quand la Nubie gouverne l'Égypte · 3. Taharqa bâtisseur, de Karnak au Gebel Barkal · 4. L'affrontement avec l'Assyrie · 5. Le repli vers Méroé et l'héritage koushite.
*Sources : HGA Vol. II.*

**03. Dihya, dite la Kahina, reine de l'Aurès** — `course-perso-03-dihya`
1. Le Maghreb berbère à la veille des conquêtes · 2. Qui était Dihya : sources, légendes et controverses · 3. La résistance de l'Aurès · 4. La stratégie de la terre brûlée et la défaite · 5. Une figure disputée : mémoire berbère, arabe et nationaliste.
*Sources : HGA Vol. III ; UNESCO, Femmes dans l'histoire de l'Afrique.*

**04. Yennenga, la princesse cavalière** — `course-perso-04-yennenga`
1. Le pays des Dagomba et la tradition orale · 2. Une princesse guerrière · 3. La fuite, la rencontre, la naissance d'Ouédraogo · 4. Aux origines des royaumes mossi · 5. Yennenga aujourd'hui : symbole national et récit vivant.
*Sources : HGA Vol. IV ; UNESCO, Femmes dans l'histoire de l'Afrique. **Traitement explicite du statut de tradition orale.***

**05. Ibn Khaldoun, l'invention de la science sociale** — `course-perso-05-ibn-khaldoun`
1. Tunis, Fès, Grenade : une vie de lettré et de diplomate · 2. La *Muqaddima* · 3. L'`asabiyya` : penser la cohésion et le cycle des dynasties · 4. Le regard d'Ibn Khaldoun sur l'Afrique et ses limites · 5. Postérité d'un précurseur.
*Sources : HGA Vol. IV.*

---

### Bloc B — Traite, marronnage et diasporas (06-10)

**06. Sayyida al-Hurra, la gouverneure de Tétouan** — `course-perso-06-sayyida-al-hurra`
1. L'exil d'al-Andalus · 2. Gouverner Tétouan · 3. La Méditerranée du XVIᵉ siècle et la course · 4. Une souveraine face aux puissances ibériques · 5. Disparition et mémoire.
*Sources : HGA Vol. V ; UNESCO, Femmes dans l'histoire de l'Afrique.*

**07. Kimpa Vita, la prophétesse du Kongo** — `course-perso-07-kimpa-vita`
1. Le royaume Kongo en crise après la bataille d'Ambuila · 2. Une jeune femme initiée devenue prophétesse · 3. L'antonianisme : un christianisme kongo · 4. La reconquête de São Salvador et le bûcher de 1706 · 5. Relectures : hérésie, résistance ou renaissance ?
*Sources : HGA Vol. V ; UNESCO, Femmes dans l'histoire de l'Afrique.*

**08. Nanny et les Marrons de Jamaïque** — `course-perso-08-nanny-marrons`
1. De l'Afrique aux Caraïbes : la traite et ses routes · 2. Le marronnage comme système · 3. Nanny Town et la guerre des Marrons · 4. Le traité de 1739 · 5. Héroïne nationale : la mémoire jamaïcaine et africaine.
*Sources : HGA Vol. X ; Routes des personnes mises en esclavage ; UNESCO, Femmes dans l'histoire de l'Afrique.*

**09. Toussaint Louverture et la révolution de Saint-Domingue** — `course-perso-09-toussaint-louverture`
1. Naître esclave dans la plus riche colonie du monde · 2. 1791 : le soulèvement · 3. Le stratège et l'administrateur · 4. La constitution de 1801 et l'arrestation · 5. Haïti 1804 : l'onde de choc mondiale.
*Sources : HGA Vol. V et X ; Routes des personnes mises en esclavage.*

**10. Sojourner Truth, la parole affranchie** — `course-perso-10-sojourner-truth`
1. Isabella Baumfree, esclave dans l'État de New York · 2. La liberté conquise et le procès gagné · 3. Devenir Sojourner Truth · 4. « Ain't I a Woman? » : abolition et droits des femmes · 5. Une voix de la diaspora dans l'histoire africaine.
*Sources : HGA Vol. X ; UNESCO, Femmes dans l'histoire de l'Afrique.*

---

### Bloc C — Face à la conquête coloniale (11-15)

**11. Abd el-Kader, l'émir et le savant** — `course-perso-11-abd-el-kader`
1. L'Algérie de 1830 · 2. La construction d'un État en guerre · 3. Quinze ans de résistance · 4. La reddition, la captivité, l'exil à Damas · 5. Damas 1860 : le protecteur des chrétiens, et la mémoire algérienne.
*Sources : HGA Vol. VI.*

**12. Samori Touré, l'empire wassoulou** — `course-perso-12-samori-toure`
1. Un marchand devenu chef de guerre · 2. Bâtir un empire : armée, artisanat, administration · 3. Sept ans de guerre de mouvement contre la France · 4. Le grand déplacement vers l'est · 5. Capture, exil, et la mémoire d'un « résistant » disputée.
*Sources : HGA Vol. VI et VII.*

**13. Taytu Betul, l'impératrice d'Éthiopie** — `course-perso-13-taytu-betul`
1. La cour éthiopienne et l'ascension d'une aristocrate · 2. Le traité de Wuchale et le piège des deux versions · 3. Adoua 1896 : le rôle militaire et diplomatique de l'impératrice · 4. La fondation d'Addis-Abeba · 5. La régence, l'écartement, l'héritage.
*Sources : HGA Vol. VII ; UNESCO, Femmes dans l'histoire de l'Afrique ; Union africaine, Founding Mothers.*

**14. Yaa Asantewaa, reine-mère d'Asante** — `course-perso-14-yaa-asantewaa`
1. La confédération asante et la fonction de reine-mère · 2. L'exil du roi Prempeh I · 3. 1900 : l'affaire du Tabouret d'or · 4. La guerre menée par une femme · 5. Déportation aux Seychelles et postérité ghanéenne.
*Sources : HGA Vol. VII ; UNESCO, Femmes dans l'histoire de l'Afrique.*

**15. Sarraounia Mangou, la reine de Lougou** — `course-perso-15-sarraounia`
1. Le pays azna et la fonction de *sarraounia* · 2. Résister à deux poussées : Sokoto et la France · 3. La colonne Voulet-Chanoine · 4. La bataille de Lougou, 1899 · 5. Du récit oral au film : la fabrique d'une héroïne.
*Sources : HGA Vol. VII ; UNESCO, Femmes dans l'histoire de l'Afrique.*

---

### Bloc D — Penser la libération (16-20)

**16. W. E. B. Du Bois et les congrès panafricains** — `course-perso-16-du-bois`
1. Un intellectuel noir dans l'Amérique de la ségrégation · 2. *The Souls of Black Folk* et la « double conscience » · 3. Les congrès panafricains, de 1919 à Manchester 1945 · 4. La rupture avec les États-Unis et l'installation au Ghana · 5. Du panafricanisme de la diaspora à l'OUA.
*Sources : HGA Vol. VII et X ; Union africaine, *The Pan-Africanist Movement and the road to liberation*.*

**17. Cheikh Anta Diop, réécrire l'histoire de l'Afrique** — `course-perso-17-cheikh-anta-diop`
1. De Diourbel à la Sorbonne · 2. *Nations nègres et culture* et la thèse contestée · 3. Le colloque du Caire de 1974 · 4. Sa contribution à l'*Histoire générale de l'Afrique* de l'UNESCO · 5. Le laboratoire de Dakar, l'engagement politique, l'héritage.
*Sources : HGA Vol. II (Diop en est l'un des auteurs) ; UNESCO.*

**18. Frantz Fanon, la clinique et la révolution** — `course-perso-18-frantz-fanon`
1. Martinique, France libre, psychiatrie · 2. *Peau noire, masques blancs* · 3. Blida-Joinville : soigner en pays colonisé · 4. Le FLN, l'Afrique, la diplomatie de la révolution · 5. *Les Damnés de la terre* et sa postérité mondiale.
*Sources : HGA Vol. VIII et X.*

**19. Amílcar Cabral, l'agronome stratège** — `course-perso-19-amilcar-cabral`
1. Cap-Vert et Guinée portugaise : une jeunesse coloniale · 2. Le recensement agricole comme enquête politique · 3. Fonder le PAIGC · 4. « Théorie de la lutte » : culture, zones libérées, éducation · 5. L'assassinat de 1973 et l'indépendance conquise.
*Sources : HGA Vol. VIII.*

**20. Agostinho Neto, le poète et le président** — `course-perso-20-agostinho-neto`
1. Un médecin angolais formé au Portugal · 2. La poésie comme arme · 3. Le MPLA et la lutte armée · 4. L'indépendance de 1975 et la guerre froide en Angola · 5. Diriger un pays en guerre : bilan et controverses.
*Sources : HGA Vol. VIII.*

---

### Bloc E — Bâtir les indépendances (21-25)

**21. Kwame Nkrumah, l'étoile noire** — `course-perso-21-kwame-nkrumah`
1. Formation aux États-Unis et à Londres, Manchester 1945 · 2. « Positive action » et l'indépendance du Ghana en 1957 · 3. *Africa Must Unite* : le projet d'un gouvernement continental · 4. Addis-Abeba 1963 et la fondation de l'OUA · 5. Le coup d'État de 1966, l'exil, la réhabilitation.
*Sources : Union africaine, Founding Fathers ; HGA Vol. VIII.*

**22. Julius Nyerere, le Mwalimu** — `course-perso-22-julius-nyerere`
1. L'instituteur devenu leader de la TANU · 2. L'indépendance du Tanganyika et l'union avec Zanzibar · 3. La déclaration d'Arusha et l'*ujamaa* · 4. Le soutien aux mouvements de libération d'Afrique australe · 5. Quitter le pouvoir de son plein gré : un précédent rare.
*Sources : Union africaine, Founding Fathers ; HGA Vol. VIII.*

**23. Haile Selassie et la naissance de l'OUA** — `course-perso-23-haile-selassie`
1. Ras Tafari Makonnen, régent puis empereur · 2. 1936 : le discours à la Société des Nations · 3. Moderniser l'Éthiopie · 4. Addis-Abeba, capitale de l'unité africaine (1963) · 5. La chute de 1974 et une figure mondiale ambivalente.
*Sources : Union africaine, Founding Fathers ; HGA Vol. VII et VIII.*

**24. Patrice Lumumba, sept mois qui ont marqué le siècle** — `course-perso-24-patrice-lumumba`
1. Le Congo belge et la formation d'un autodidacte · 2. Le Mouvement national congolais · 3. Le discours du 30 juin 1960 · 4. Sécession, crise, intervention étrangère · 5. L'assassinat de janvier 1961 et la mémoire panafricaine.
*Sources : HGA Vol. VIII.*

**25. Jeanne Martin Cissé et les mères fondatrices** — `course-perso-25-jeanne-martin-cisse`
1. Une institutrice guinéenne en politique · 2. Dar es-Salaam, juillet 1962 : la Conférence des femmes africaines · 3. L'Union des femmes africaines devient la PAWO · 4. 1972 : première femme à présider le Conseil de sécurité de l'ONU · 5. Les mères fondatrices oubliées de l'unité africaine.
*Sources : Union africaine, Founding Mothers ; HGA Vol. VIII.*

---

### Bloc F — Droits, voix et écologie (26-30)

**26. Funmilayo Ransome-Kuti, la lionne d'Abeokuta** — `course-perso-26-funmilayo-ransome-kuti`
1. Première fille scolarisée de son école, première Nigériane au volant · 2. L'Abeokuta Women's Union et ses 20 000 membres · 3. La révolte contre l'impôt et la destitution de l'*alake* · 4. Le combat pour le suffrage des femmes et l'indépendance · 5. Une famille, un héritage : Fela, Beko, Wole Soyinka.
*Sources : Union africaine, Founding Mothers ; UNESCO, Femmes dans l'histoire de l'Afrique.*

**27. Aoua Keïta, sage-femme et députée** — `course-perso-27-aoua-keita`
1. Sage-femme dans le Soudan français · 2. L'entrée en politique par le syndicalisme · 3. Première femme élue à une assemblée nationale en Afrique occidentale francophone · 4. Fondatrice de la PAWO en 1962 · 5. *Femme d'Afrique* : écrire sa propre vie.
*Sources : Union africaine, Founding Mothers ; UNESCO, Femmes dans l'histoire de l'Afrique.*

**28. Albertina Sisulu, mère de la nation** — `course-perso-28-albertina-sisulu`
1. Infirmière à Johannesburg · 2. La seule femme présente à la création de l'ANC Youth League · 3. La marche des 20 000 femmes sur Pretoria, 1956 · 4. Bannissements, isolement, résistance de l'intérieur · 5. 1994 et la mémoire des femmes de l'anti-apartheid.
*Sources : Union africaine, Founding Mothers ; HGA Vol. VIII.*

**29. Miriam Makeba, Mama Africa** — `course-perso-29-miriam-makeba`
1. Sophiatown et les débuts · 2. *Come Back, Africa* et le passeport retiré · 3. Chanter et témoigner à l'ONU · 4. Trente et un ans d'exil, de Conakry aux scènes du monde · 5. Le retour en 1990 et la voix comme arme politique.
*Sources : UNESCO, Femmes dans l'histoire de l'Afrique ; HGA Vol. VIII et X.*

**30. Wangari Maathai, la ceinture verte** — `course-perso-30-wangari-maathai`
1. Première femme d'Afrique de l'Est docteure en sciences · 2. La naissance du Green Belt Movement en 1977 · 3. Planter des arbres, affronter un régime · 4. Le prix Nobel de la paix 2004 · 5. Écologie, démocratie et Agenda 2063.
*Sources : UNESCO, Femmes dans l'histoire de l'Afrique ; HGA Vol. IX et XI ; Union africaine, Agenda 2063.*

---

## 6. Réserve de substitution

Figures documentées par les sources autorisées, écartées du programme mais disponibles si tu veux permuter :

Marcus Garvey · Nehanda Nyakasikana · Mariama Bâ · Huda Shaarawi · Gisèle Rabesahala · Bibi Titi Mohamed · Josina Machel · Winnie Madikizela-Mandela · Angie Brooks · Alda do Espírito Santo · Marie Koré et la marche de Grand-Bassam · Ibn Battuta · Sayyid Saïd et Zanzibar · Modibo Keïta · Ahmed Sékou Touré · Sylvanus Olympio · Thomas Sankara *(à vérifier : couverture HGA Vol. IX à confirmer avant sélection)* · Nkosazana Dlamini-Zuma · La Mulâtresse Solitude · Dada Masiti.

---

## 7. Impacts techniques à anticiper

Ces points ne se traitent **pas** pendant la rédaction, mais au moment de l'intégration. Ils sont listés ici pour qu'aucun ne soit découvert trop tard.

1. **Sort du cours hérité `course-perso-voix-plumes-afrique`** (« Voix et plumes d'Afrique », 3 leçons, 50 XP). Il est **référencé par `parcours-voix-et-sons`** (`src/data/parcours.ts`). Trois options : le conserver comme 31ᵉ cours, le réécrire au format 5 leçons, ou le supprimer — auquel cas **le parcours doit être recomposé**, sans quoi `npm run validate` échouera (règle « références de cours résolues », et `getCourseOrWarn` en mode strict lèvera une exception en dev). C'est exactement l'anomalie C1 corrigée en 7.2 ; ne pas la recréer.
2. **Nouveau fichier `src/data/courses/personnalites.ts`** (export `PERSONNALITES_COURSES`), branché par spread dans `COURSES` (`src/data/courses.ts`).
3. **Chunk de matière** à déclarer dans `src/data/courseContent.ts` (import dynamique) — sinon les 30 cours partiront dans le bundle d'entrée et annuleront le gain du chantier 7.5.
4. **Régénérer l'index** : `npm run gen:index` → `src/data/coursesIndex.generated.ts`. Obligatoire après toute modification du catalogue.
5. **Illustrations** : 30 fichiers `course-perso-NN-slug.webp` dans `src/assets/cours/`, puis `npm run images:variants`. Un jeu de 30 prompts d'illustration sera livré comme pour l'Histoire et la Géographie. Sans image, la pastille « Terminé » se désaligne (constat du chantier Géographie).
6. **Recalibrage de la gamification** (`src/lib/gamification.ts`) — mesuré sur le catalogue actuel :

   | | Aujourd'hui | Après Phase 8 |
   |---|---|---|
   | Cours | 98 | 128 |
   | Leçons | 374 | 524 |
   | XP de complétion | 5 700 | 7 800 |
   | XP de leçons | 3 740 | 5 240 |
   | **XP total du catalogue** | **9 440** | **13 040** |

   Paliers proposés en conservant les proportions actuelles : **0 / 1 250 / 3 900 / 7 800 / 13 040**, `OPEN_LEVEL_STEP` porté de 900 à **1 250**. `gamification.test.ts` est à mettre à jour (seuils en dur).

   > **Anomalie relevée au passage** : `LEVEL_TIERS` place aujourd'hui « Gardien du savoir » à **9 260 XP** alors que le catalogue en offre **9 440**. Le dernier rang s'atteint donc à 98 % du catalogue, pas 100 % comme documenté dans `CLAUDE.md`. Écart de 180 XP sans conséquence fonctionnelle, mais à corriger dans le même commit que le recalibrage.

7. **Sortie des matières émergentes** : `isSubjectEmerging` retourne `false` dès 3 cours (`EMERGING_SUBJECT_MAX_COURSES = COURSES_PER_LEVEL = 3`). Le badge « 🚧 En construction » disparaîtra donc de Personnalités dès l'intégration. Rien à coder — mais à vérifier visuellement.
8. **Aucune migration de store** : la Phase 8 n'ajoute aucun champ à `UserProgress`. La version de persistance reste à **7**.
9. **`npm run validate` + `npm test` + `npm run typecheck` + `npm run build`** doivent passer avant tout commit — la CI les enchaîne dans cet ordre.

---

## 8. Workflow proposé

| Jalon | Livrable | Où |
|---|---|---|
| J0 | **Ce programme, validé ou ajusté** | ce fichier |
| J1 | `SOURCES-personnalites.md` (liste blanche + tableau cours → sources) | `docs/contenu personnalites/` |
| J2 | Cours **01** rédigé comme **pilote**, validé sur le fond et la forme avant la suite | `personnalites-01-hatchepsout.md` |
| J3-J8 | Cours 02 à 30, par lots de 5 (un bloc à la fois) | idem |
| J9 | `PROMPTS-IMAGES-personnalites.md` (30 prompts d'illustration) | idem |
| J10 | `PROMPT-INTEGRATION-VSCODE-personnalites.md` (markdown → TypeScript) | idem |
| J11 | Recalibrage gamification + régénération index + tests | prompt dédié |

Le cours pilote (J2) est important : il fixe la longueur des leçons, le ton et le calibrage des quiz pour les 29 suivants. Ne pas l'expédier.

---

## 9. Points à arbitrer avant de démarrer

1. **Le programme des 30** — valides-tu la liste, ou veux-tu des permutations depuis la réserve du § 6 ?
2. **La limite du § 2.3** — assumes-tu une matière « Personnalités » historique et politique, ou faut-il élargir la liste blanche pour couvrir sport, cinéma et technologie contemporains ?
3. **Le cours hérité `course-perso-voix-plumes-afrique`** — conservé, réécrit, ou supprimé avec recomposition du parcours (§ 7.1) ?
4. **L'ordre de rédaction** — chronologique (bloc A → F), ou commencer par un bloc qui t'intéresse davantage ?
