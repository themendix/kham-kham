# Finition éditoriale v1 — corrections appliquées

Date : 15 octobre 2026. Demande utilisateur : terminer la finition éditoriale et conserver les
blocs des 18 portraits sans citation, avec adaptation explicite de la charte.

**Réalisé :** corrections ciblées dans 77 leçons ; 60 renvois quiz corrigés (59 de l'audit,
plus Jeanne Martin Cissé Q5) ; formulations Adoua, Berlin, kente, Funmilayo, Jeanne Martin Cissé
et explication Makeba corrigées ; index Quiz synchronisé. Les trois liens facultatifs restent
conservés. Les 79 décisions de l'annexe ont été vérifiées après modification.

Les 19 dépassements nominaux en Géographie et les 44 avertissements de gras sont corrigés.
Les trois erreurs de forme Personnalités sont corrigées. Le §7.3 de la charte autorise les
18 alternatives identifiées (`reperes`, `chiffreCle`, `image`) et borne l'exception thématique
« Voix et plumes ». Le validateur applique désormais les règles communes aux 155 leçons
Personnalités et refuse une alternative différente ou un nouveau portrait sans conclusion
autorisée. Les blocs visuels de postérité des 18 portraits sont conservés à l'identique.

Les deux affirmations restées à documenter ont reçu un traitement prudent : Cabral ne présente
plus le rôle portugais comme une certitude ; le Grand Zimbabwe enseigne les échanges attestés
par les vestiges sans affirmer qu'aucun marchand n'a voyagé. Références :
[note contemporaine de 1973, Office of the Historian](https://history.state.gov/historicaldocuments/frus1969-76ve06/d66),
dont les conclusions sont explicitement provisoires, et [fiche UNESCO du Grand Zimbabwe](https://whc.unesco.org/en/list/364).
Une affirmation périmée découverte dans la fiche Tunisie a aussi été corrigée : la transition
démocratique n'est plus qualifiée de durable au présent ; la rupture de 2021 est documentée
par [Amnesty International](https://www.amnesty.org/en/documents/mde30/5876/2022/en/).

Quatre blocs de citation sont ajustés : extrait continu de Lumumba ; remplacement du texte
Makeba par une parole attestée et traduction signalée ; attestation de 2018 et traduction
explicites pour Maathai ; réserve « paroles attribuées » pour Toussaint en Histoire.
Les versions antérieures restent dans [citations.csv](audit-editorial-v1/citations.csv), avec
les textes finaux et les références. **La provenance exhaustive des autres citations reste
ouverte** : les réserves sur les recueils, éditions/pages et traductions ne sont pas levées.
Les documents originaux Personnalités et leur registre de sources sont inchangés.

Contrôles finaux : **0 erreur / 45 avertissements**, lint et typecheck réussis,
**34 fichiers / 363 tests réussis**. Les 45 avertissements restent visibles et justifiés dans
l'annexe : 20 leçons Histoire courtes mais dans la tolérance ; 12 bannières différées ;
13 faux positifs sur le sujet des questions. Aucun seuil global n'a été abaissé.
Identifiants, ordre/types des blocs, bonnes réponses par index, XP, progression et métadonnées
d'images conservés ; les 680 entrées de l'index Quiz correspondent au catalogue final.
Preuves locales : `.vibeflow-local/editorial-finish-2026-10-15/`.
Photos toujours en attente. Aucun build, commit, push ou déploiement.

---

## Audit initial — constats et propositions avant corrections

Les sections suivantes conservent le raisonnement initial. Les mentions « proposé »,
« non appliqué » et « validation attendue » décrivent cet état antérieur ; le bilan ci-dessus
et les colonnes finales des annexes font foi pour le résultat du 15 octobre 2026.

## Périmètre et résultat

| Catalogue actuel | Cours | Leçons | Questions | Citations |
|---|---:|---:|---:|---:|
| Histoire | 40 | 200 | 200 | 40 |
| Géographie | 54 | 162 | 270 | 0 |
| Personnalités | 31 | 155 | 155 | 12 |
| Découverte | 11 | 55 | 55 | 2 |
| Total | 136 | 572 | 680 | 54 |

Contrôles structurels sur l’ensemble du catalogue ; revue ciblée des paires quiz-leçon signalées par recherche lexicale, des avertissements et des citations. Les 680 questions ont une leçon associée : plusieurs associations sont toutefois pédagogiquement incorrectes. L’absence littérale de la bonne réponse sert au tri, elle ne prouve pas une erreur.

Ce travail ne certifie pas chaque affirmation historique des 572 leçons ni l’actualité de toutes les statistiques des fiches pays. Les vérifications documentaires sont ciblées sur les problèmes relevés. Une référence repérée n’est pas automatiquement une citation authentifiée.

`npm.cmd run validate` : **0 erreur, 111 avertissements**. Personnalités est exclu des règles de charte dans le validateur courant. Une copie temporaire avec cette matière incluse donne **42 erreurs et les mêmes 111 avertissements** : 39 erreurs de gabarit et 3 de forme. Le validateur du projet n’a pas été modifié.

## 1. Changements de fond proposés

Les numéros L/Q désignent la leçon/question dans son cours. Les identifiants et fichiers exacts figurent dans les annexes.

| Cours et élément | Constat | Changement proposé |
|---|---|---|
| Histoire 27, Adoua L4 et Q5 | La leçon et le quiz présentent Adoua comme une première défaite coloniale face à un État africain. Isandlwana en 1879 fournit un contre-exemple. | Retirer les formulations universelles de « première », y compris dans le chiffre clé et le résumé. Expliquer la victoire de 1896 et la reconnaissance de l’indépendance éthiopienne. Remplacer la réponse et l’explication de Q5 en conséquence. |
| Découverte 02, kente L1 et Q1 | La présentation et la question suggèrent une origine exclusivement ashanti. | Mentionner les traditions Akan/Asante et Ewe. Question proposée : « À quel peuple du Ghana le kente est-il notamment associé ? » Garder Ashanti comme bonne option, préciser aussi les Ewe dans l’explication. Préserver l’image et son crédit. |
| Personnalités 29, Makeba L5 et Q5 | L’explication fait commencer 31 ans d’exil en 1960 et finir en 1990 ; L5 n’enseigne pas la durée demandée. | Distinguer départ en 1959, retrait du passeport en 1960 et retour en 1990. Ajouter les 31 ans à L5 et corriger l’explication. Remplacer « morte sur scène » par une formulation prudente : mort en Italie en 2008 après un concert de soutien à Roberto Saviano. |
| Histoire 19, Grands Lacs L1/Q1 | La leçon cite les pays mais n’explicite pas la région géographique demandée. | Ajouter « en Afrique de l’Est » au contexte, conserver le lien de Q1. |
| Histoire 34, Gorée/Saint-Louis L5/Q5 | Q5 demande le statut patrimonial des deux villes ; L5 ne l’énonce pas. | Préciser les inscriptions UNESCO : Gorée en 1978 et Saint-Louis en 2000. L5 compte actuellement 110 mots ; ajuster sans dépasser son budget. |
| Histoire 11, cités haoussa L4 | Les deux paragraphes répètent rivalités, domination extérieure et héritage commercial. | Donner une fonction distincte à chaque paragraphe ; préserver les influences Songhaï/Bornou et le rôle de la langue haoussa. |
| Personnalités 25, Jeanne Martin Cissé Q5 | La réponse généralise les métiers des fondatrices ; aucune des cinq leçons ne l’enseigne. | Interroger plutôt le métier de Jeanne Martin Cissé : institutrice. Modifier question, option correcte et explication, puis renvoyer à L1. Ne pas ajouter une généralisation insuffisamment sourcée pour justifier le quiz. |

Sources des corrections historiques : le [National Army Museum décrit la victoire zouloue de 1879](https://www.nam.ac.uk/explore/zulu-war) ; une [notice UNESCO identifie les tissages asante et ewe](https://ich.unesco.org/es/-00973?photoID=00236), en complément du [dossier kente](https://ich.unesco.org/fr/RL/l-artisanat-du-kente-un-textile-traditionnel-tisse-02130) ; la [Fondation Miriam Makeba documente départ, retour et parcours](https://miriammakeba.org/wordpress/about/). Les dates patrimoniales viennent des fiches UNESCO de [Gorée](https://whc.unesco.org/fr/list/26/) et [Saint-Louis](https://whc.unesco.org/fr/list/956/).

Deux points supplémentaires restent **à documenter, sans correction factuelle arrêtée** : la responsabilité présentée comme certaine de la police coloniale dans l’assassinat de Cabral (Personnalités 19 L5), et l’affirmation absolue sur l’absence de déplacement des marchands du Grand Zimbabwe hors d’Afrique australe (Histoire 17 L2). Rechercher une référence précise ou proposer une formulation moins catégorique avant validation de leur texte.

## 2. Quiz concernés

Parmi **77 paires examinées après tri lexical** :

| Décision proposée | Nombre | Portée |
|---|---:|---|
| Corriger uniquement le renvoi | 59 | La réponse est expliquée dans une autre leçon du même cours. |
| Compléter la leçon actuelle | 3 | Grands Lacs Q1, Gorée/Saint-Louis Q5, Makeba Q5. |
| Reformuler le quiz | 2 | Adoua Q5 et Jeanne Martin Cissé Q5 ; ce dernier change aussi de renvoi. |
| Renvoi plus direct, facultatif | 3 | Égypte Q1, Madagascar Q1, Botswana Q1 ; le lien actuel reste défendable. |
| Conserver après lecture | 10 | Faux positifs lexicaux : réponse déjà expliquée malgré un libellé différent. |

Exemples de renvois : Carthage/Hannibal Q2 L2 → L3 ; Ghana/Koumbi Saleh Q4 L4 → L3 ; Tombouctou/Sankoré Q1 L1 → L2 ; Taharqa/inhumation Q4 L4 → L3 ; Funmilayo/abdication Q4 L4 → L3. Les 59 changements sont identifiés individuellement dans [quiz.csv](audit-editorial-v1/quiz.csv).

Deux questions supplémentaires ont une proposition de formulation : Berlin Q3 doit nommer l’Afrique ; kente Q1 doit éviter une origine exclusive. Funmilayo Q4 doit aussi nommer le mouvement des femmes d’Abeokuta. **79 lignes** dans l’annexe : les 77 paires et ces deux questions supplémentaires, avec décisions de conservation incluses. Il ne s’agit donc pas de 79 erreurs.

Préserver les identifiants de questions/leçons, leur nombre et l’index correct quand la réponse est reformulée. Ne pas modifier progression, XP ou historique. Les corrections de contenu et leur provenance doivent rester traçables.

## 3. Harmonisation de Personnalités : décision de charte requise

Les **155 leçons sont déjà dans leur budget nominal**, avec des blocs structurés. Une réécriture générale n’est pas justifiée par cet audit.

Trois corrections de forme sont précises :

- Aoua Keïta L5 : un paragraphe de 54 mots, à réduire à 50 maximum en conservant livre de 1975 et prix de 1976.
- « Les pionniers du Nobel » : conserver le titre complet *La Mort et l’Écuyer du roi*, retirer son gras et mettre plutôt 1986 en évidence.
- « La nouvelle génération » : conserver le titre complet *Le danger de l’histoire unique*, reporter le gras sur une notion déjà présente de quatre mots maximum.

Les **39 erreurs de gabarit simulées** se décomposent autrement : 19 cours sans citation déclenchent chacun deux messages ; le cours thématique « Voix et plumes d’Afrique » déclenche aussi une absence de frise initiale. Ce ne sont pas 39 leçons à réécrire.

La charte §7.3 permet une frise si aucune parole attestée n’existe ; le validateur exige pourtant toujours une citation. **Corriger cet écart est proposé avant d’activer les règles sur Personnalités.**

Pour les **18 portraits biographiques sans citation finale**, je recommande de conserver leurs blocs actuels et d’autoriser explicitement une alternative sourcée en repères, chiffre clé ou image, plutôt que d’imposer une citation non retrouvée ou une frise artificielle. Cela élargit la charte actuelle et nécessite ta validation. L’autre option consiste à remplacer les repères/chiffres par des frises de dates attestées, en examinant séparément les images déjà présentes de Nanny et Yaa Asantewaa.

Portraits concernés, tous en L5 : Yennenga, Ibn Khaldoun, Sayyida al-Hurra, Kimpa Vita, Nanny, Abd el-Kader, Samori Touré, Taytu Betul, Yaa Asantewaa, Sarraounia, Cheikh Anta Diop, Amílcar Cabral, Agostinho Neto, Julius Nyerere, Jeanne Martin Cissé, Funmilayo Ransome-Kuti, Aoua Keïta et Albertina Sisulu.

« Voix et plumes d’Afrique » présente plusieurs écrivains : proposer un gabarit thématique explicite, conserver ses cinq leçons et appliquer les règles communes de longueur/gras. Ne pas lui imposer automatiquement le squelette d’une biographie unique. Actualiser également les mentions obsolètes « 153 leçons » de la charte en distinguant état actuel et historique.

## 4. Traitement proposé des 111 avertissements

| Famille | Nombre | Traitement proposé |
|---|---:|---|
| Budget de mots | 39 | Alléger 19 leçons de Géographie de 1 à 7 mots (141–147 actuellement). Pour 20 leçons Histoire courtes (71–89 mots), rester dans la tolérance autorisée si elles sont complètes ; ajouter uniquement une information pédagogique manquante. |
| Gras | 44 | 39 cas de paragraphes insuffisamment balisés : mettre en valeur des noms/dates existants. 5 cas de puces trop balisées : revenir à un seul passage en gras par puce. |
| Question sans sujet nommé | 16 | Deux clarifications nécessaires : Berlin et Funmilayo. Les 14 autres ont un sujet identifiable ; conserver leurs formulations sauf la nuance historique distincte du kente. Documenter ces faux positifs. |
| Bannière de cours absente | 12 | 11 cours Découverte et « Voix et plumes ». Différer conformément à la décision sur les photos ; conserver les avertissements visibles. |

Toutes les leçons hors budget nominal restent dans les tolérances du validateur. L’objectif proposé est de **corriger ou justifier chaque avertissement**, sans gonfler artificiellement les textes ni désactiver les règles globalement. Chaque message et son traitement figurent dans [avertissements.csv](audit-editorial-v1/avertissements.csv).

## 5. Sources et citations à préserver

Un [registre de 54 citations](audit-editorial-v1/citations.csv) conserve texte actuel, attribution, document original disponible, statut et référence repérée. Il reste à compléter les éditions/pages et traductions manquantes ; ce registre n’est pas une certification de toutes les citations.

- **18 proverbes et 5 attributions « Tradition islamique »** demandent une référence précise : recueil/collecteur ou texte identifié, langue et traduction. Une attribution collective ne suffit pas à conclure que la phrase est fausse. Ne pas les supprimer ni les remplacer en série.
- **Toussaint Louverture** : conserver la réserve « paroles attribuées » du portrait et proposer la même prudence pour la citation en Histoire 24 L4.
- **Sojourner Truth** : conserver la mention de la version Gage de 1863 et de son absence dans le compte rendu d’origine ; cette distinction est étayée par le [National Park Service](https://www.nps.gov/wori/learn/historyculture/sojourner-truth.htm).
- **Lumumba** : le texte actuel contracte le discours sans indiquer les coupures. Proposition d’extrait exact : « Nous allons montrer au monde ce que peut faire l’homme noir quand il travaille dans la liberté. » Même discours du 30 juin 1960, [édition présidentielle, pages imprimées 6–7](https://www.presidence.cd/uploads/files/f1b22811ac2c63fd8db29d8438271513.pdf).
- **Makeba** : la citation actuelle sur la transmission orale n’a pas été localisée dans une source primaire pendant cette recherche ciblée. Soumettre son remplacement par « Je ne chante pas la politique, je chante simplement la vérité. », traduction française à identifier comme telle, attestée en anglais par sa [fondation](https://miriammakeba.org/wordpress/about/). Conserver l’ancienne version dans la trace de correction.
- **Maathai** : conserver la citation dont l’original anglais est attesté dans une publication du [Green Belt Movement chez Goldman](https://www.goldmanprize.org/blog/green-belt-movement-wangari-maathai/). L’attribution précise à un discours de 2006 reste à établir ; citer l’attestation retrouvée si ce contexte n’est pas confirmé. Identifier la traduction française.
- **Taharqa et Du Bois** : passage biblique et original anglais identifiés ; préciser la traduction utilisée. **Hatchepsout, Dihya, Fanon, Nkrumah et Sélassié** : retrouver édition/page ou passage exact ; ne pas déduire une authenticité de la seule présence dans les documents de préparation.

Préserver les documents originaux, références UNESCO/UA existantes, crédits/licences et métadonnées d’images. Ajouter les références précises à un registre lisible sans surcharger chaque écran. Si une citation reste non établie, soumettre son traitement individuellement ; en Histoire, son retrait peut aussi nécessiter une décision de gabarit puisque la charte exige une citation par cours.

## Validation attendue et contrôles après accord

Je propose : corrections de fond et liens quiz ci-dessus ; corrections de forme ciblées ; traitement documenté des avertissements ; registre de provenance et changements de citations explicitement indiqués. La modification du gabarit Personnalités est une décision distincte à approuver. Les deux affirmations restant à documenter ne constituent pas des corrections déjà arrêtées.

Après validation : modifier uniquement les éléments approuvés, puis lancer validation du contenu et typecheck ; contrôler les liens quiz, budgets, identifiants et provenance après correction. Toute évolution du validateur demandera des tests ciblés sur alternatives admises et véritables erreurs. Aucun build/index régénéré, commit, push ou déploiement n’est inclus.

Pièces de contrôle : [inventaire des 572 leçons](audit-editorial-v1/lecons.csv), [79 décisions de quiz](audit-editorial-v1/quiz.csv), [111 avertissements](audit-editorial-v1/avertissements.csv), [54 citations](audit-editorial-v1/citations.csv). Les annexes sont des propositions ; les cellules vides de provenance restent à renseigner.

Vérification de préservation : les empreintes des **38 fichiers suivis par l’audit** (catalogue, associations quiz, validateur, charte, 30 documents Personnalités et leur registre de sources) sont inchangées. Les journaux et la simulation temporaire sont dans `.vibeflow-local/editorial-audit-2026-10-15/`. Aucun test applicatif ni build n’était nécessaire pour ce rapport sans modification du produit.
