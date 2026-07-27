import { describe, expect, it } from "vitest";
import { GEOGRAPHIE_REGIONS_ORDER, getGeographieRegion } from "@/lib/geographieRegions";

describe("getGeographieRegion", () => {
  it("place les bornes de chaque région au bon endroit", () => {
    expect(getGeographieRegion("course-geographie-01-algerie")).toBe("Afrique du Nord");
    expect(getGeographieRegion("course-geographie-07-tunisie")).toBe("Afrique du Nord");
    expect(getGeographieRegion("course-geographie-08-benin")).toBe("Afrique de l'Ouest");
    expect(getGeographieRegion("course-geographie-22-togo")).toBe("Afrique de l'Ouest");
    expect(getGeographieRegion("course-geographie-23-angola")).toBe("Afrique centrale");
    expect(getGeographieRegion("course-geographie-31-tchad")).toBe("Afrique centrale");
    expect(getGeographieRegion("course-geographie-32-burundi")).toBe("Afrique de l'Est");
    expect(getGeographieRegion("course-geographie-45-tanzanie")).toBe("Afrique de l'Est");
    expect(getGeographieRegion("course-geographie-46-afrique-du-sud")).toBe("Afrique australe");
    expect(getGeographieRegion("course-geographie-54-zimbabwe")).toBe("Afrique australe");
  });

  it("renvoie null pour un id qui ne suit pas la convention de nommage Géographie", () => {
    expect(getGeographieRegion("course-histoire-01-egypte-antique")).toBeNull();
    expect(getGeographieRegion("course-perso-voix-plumes-afrique")).toBeNull();
  });

  it("expose les régions dans l'ordre géographique Nord → Australe", () => {
    expect(GEOGRAPHIE_REGIONS_ORDER).toEqual([
      "Afrique du Nord",
      "Afrique de l'Ouest",
      "Afrique centrale",
      "Afrique de l'Est",
      "Afrique australe",
    ]);
  });
});
