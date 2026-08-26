/**
 * Rattachement des cours aux territoires du module Quiz (voir `src/lib/territories.ts`).
 *
 * Ne concerne que les matières **hors Géographie** : les 54 fiches pays dérivent leur territoire
 * de leur numéro d'ordre (`getGeographieRegion`) et n'ont donc rien à maintenir ici.
 *
 * - Un tableau **non vide** rattache le cours à un ou plusieurs territoires. Le multi-territoire
 *   est réservé aux sujets qui chevauchent réellement deux régions (le Kanem-Bornou autour du
 *   lac Tchad, le commerce transsaharien entre Maghreb et Sahel) — pas une facilité pour éviter
 *   de trancher.
 * - Un tableau **vide** signifie « transversal » : le cours est versé dans Le Baobab. C'est le
 *   cas des sujets panafricains (indépendances, panafricanisme, Berlin), de la diaspora
 *   (Toussaint Louverture, Nanny, Sojourner Truth) et de toute la matière Découverte.
 *
 * Tout cours hors Géographie doit figurer ici : la règle 21 de `npm run validate` échoue sinon.
 * Le rattachement suit la taxonomie de l'app, pas la géographie académique — le Soudan est en
 * Afrique du Nord dans `geographieRegions.ts`, donc Koush et Méroé y sont aussi.
 */
import type { TerritoryId } from "@/lib/territories";

export const COURSE_TERRITORIES: Record<string, TerritoryId[]> = {
  // ─── Histoire (40) ───────────────────────────────────────────────────────
  "course-histoire-01-egypte-antique": ["nord"],
  "course-histoire-02-koush-meroe": ["nord"],
  "course-histoire-03-aksoum": ["est"],
  "course-histoire-04-carthage-afrique-du-nord": ["nord"],
  "course-histoire-05-empire-du-ghana": ["ouest"],
  "course-histoire-06-soundiata-mali": ["ouest"],
  "course-histoire-07-mansa-moussa": ["ouest"],
  "course-histoire-08-empire-songhai": ["ouest"],
  "course-histoire-09-tombouctou-djenne": ["ouest"],
  // Le Kanem-Bornou tient autour du lac Tchad : Tchad (centrale) et Niger/Nigeria (ouest).
  "course-histoire-10-kanem-bornou": ["ouest", "centrale"],
  "course-histoire-11-cites-etats-haoussa": ["ouest"],
  "course-histoire-12-royaume-benin-bronzes": ["ouest"],
  "course-histoire-13-empire-oyo-yoruba": ["ouest"],
  "course-histoire-14-royaume-ashanti": ["ouest"],
  "course-histoire-15-royaume-dahomey": ["ouest"],
  "course-histoire-16-royaume-kongo": ["centrale"],
  "course-histoire-17-grand-zimbabwe": ["australe"],
  "course-histoire-18-monomotapa-mutapa": ["australe"],
  "course-histoire-19-royaumes-grands-lacs": ["est"],
  "course-histoire-20-ethiopie-medievale-lalibela": ["est"],
  // Les caravanes relient les cités du Maghreb aux empires du Sahel : les deux rives comptent.
  "course-histoire-21-commerce-transsaharien": ["nord", "ouest"],
  "course-histoire-22-islamisation-afrique-ouest": ["ouest"],
  "course-histoire-23-cote-swahilie": ["est"],
  // La traite a frappé surtout les côtes ouest et centrale — le sujet reste régional malgré sa portée.
  "course-histoire-24-traite-negriere-transatlantique": ["ouest", "centrale"],
  "course-histoire-25-conference-berlin": [],
  "course-histoire-26-resistances-colonisation": [],
  "course-histoire-27-bataille-adoua": ["est"],
  "course-histoire-28-independances-africaines": [],
  "course-histoire-29-panafricanisme-union-africaine": [],
  "course-histoire-30-apartheid-mandela": ["australe"],
  "course-histoire-31-tekrour-islam": ["ouest"],
  "course-histoire-32-djolof-royaumes-wolof": ["ouest"],
  "course-histoire-33-royaumes-serer-sine-saloum": ["ouest"],
  "course-histoire-34-goree-saint-louis": ["ouest"],
  "course-histoire-35-lat-dior-cayor": ["ouest"],
  "course-histoire-36-cheikh-ahmadou-bamba-mouridisme": ["ouest"],
  "course-histoire-37-aline-sitoe-diatta": ["ouest"],
  "course-histoire-38-senghor-negritude-independance": ["ouest"],
  "course-histoire-39-reine-nzinga-angola": ["centrale"],
  "course-histoire-40-chaka-zoulou": ["australe"],

  // ─── Personnalités (31) ──────────────────────────────────────────────────
  "course-perso-01-hatchepsout": ["nord"],
  // Taharqa règne sur Koush et sur l'Égypte : les deux sont en Afrique du Nord ici.
  "course-perso-02-taharqa": ["nord"],
  "course-perso-03-dihya": ["nord"],
  "course-perso-04-yennenga": ["ouest"],
  "course-perso-05-ibn-khaldoun": ["nord"],
  "course-perso-06-sayyida-al-hurra": ["nord"],
  "course-perso-07-kimpa-vita": ["centrale"],
  "course-perso-08-nanny-marrons": [],
  "course-perso-09-toussaint-louverture": [],
  "course-perso-10-sojourner-truth": [],
  "course-perso-11-abd-el-kader": ["nord"],
  "course-perso-12-samori-toure": ["ouest"],
  "course-perso-13-taytu-betul": ["est"],
  "course-perso-14-yaa-asantewaa": ["ouest"],
  "course-perso-15-sarraounia": ["ouest"],
  "course-perso-16-du-bois": [],
  "course-perso-17-cheikh-anta-diop": ["ouest"],
  // Fanon est né en Martinique mais son œuvre et son combat sont algériens.
  "course-perso-18-frantz-fanon": ["nord"],
  "course-perso-19-amilcar-cabral": ["ouest"],
  "course-perso-20-agostinho-neto": ["centrale"],
  "course-perso-21-kwame-nkrumah": ["ouest"],
  "course-perso-22-julius-nyerere": ["est"],
  "course-perso-23-haile-selassie": ["est"],
  "course-perso-24-patrice-lumumba": ["centrale"],
  "course-perso-25-jeanne-martin-cisse": ["ouest"],
  "course-perso-26-funmilayo-ransome-kuti": ["ouest"],
  "course-perso-27-aoua-keita": ["ouest"],
  "course-perso-28-albertina-sisulu": ["australe"],
  "course-perso-29-miriam-makeba": ["australe"],
  "course-perso-30-wangari-maathai": ["est"],
  "course-perso-voix-plumes-afrique": [],

  // ─── Découverte (11) — transversale par nature ───────────────────────────
  "course-arts-rythmes-continent": [],
  "course-trad-griots-sagesses": [],
  "course-actu-afrique-qui-innove": [],
  "course-decouverte-01-masques-sculptures": [],
  "course-decouverte-02-tissus-parures": [],
  "course-decouverte-03-architectures-terre": [],
  "course-decouverte-04-photographie-africaine": [],
  "course-decouverte-05-cinema-auteur": [],
  "course-decouverte-06-litteratures-africaines": [],
  "course-decouverte-07-danses": [],
  "course-decouverte-08-mode-creation": [],
};
