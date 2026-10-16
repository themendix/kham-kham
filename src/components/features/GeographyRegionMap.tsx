import { Pressable, StyleSheet, View, useWindowDimensions } from "react-native";
import Svg, { Circle, Line, Path } from "react-native-svg";
import { GEOGRAPHY_MAP_COUNTRIES, GEOGRAPHY_MAP_VIEWBOX, GEOGRAPHY_REGION_ANCHORS, type GeographyMapRegionId } from "@/data/geographyMap.generated";
import type { GeographieRegion } from "@/lib/geographieRegions";
import { HomeText, homeColors } from "./HomeUi";

interface GeographyRegionMapProps {
  selectedRegion: GeographieRegion;
  onSelect: (region: GeographieRegion) => void;
}

const regions: {
  id: GeographyMapRegionId;
  name: GeographieRegion;
  label: string;
  color: string;
  left: number;
  top: number;
  width: number;
  labelEnd: [number, number];
}[] = [
  { id: "nord", name: "Afrique du Nord", label: "Afrique du Nord", color: "#ffe7bd", left: 10, top: 4, width: 25, labelEnd: [342, 62] },
  { id: "ouest", name: "Afrique de l'Ouest", label: "Afrique de l’Ouest", color: "#f9d9bc", left: 1.5, top: 27, width: 32, labelEnd: [325, 208] },
  { id: "centrale", name: "Afrique centrale", label: "Afrique centrale", color: "#c5dcbc", left: 23, top: 54, width: 24, labelEnd: [450, 390] },
  { id: "est", name: "Afrique de l'Est", label: "Afrique de l’Est", color: "#d9c6ee", left: 77, top: 45, width: 22, labelEnd: [790, 330] },
  { id: "australe", name: "Afrique australe", label: "Afrique australe", color: "#b7d5ed", left: 29, top: 84, width: 25, labelEnd: [520, 597] },
];
const selectionColor = "#fa501b";

/** Geography artwork and proportions follow the approved mockup, with native touch controls. */
export function GeographyRegionMap({ selectedRegion, onSelect }: GeographyRegionMapProps) {
  const { fontScale, width } = useWindowDimensions();
  const separateLabels = fontScale > 1.3 || width < 350;
  const label = (region: typeof regions[number]) => {
    const selected = selectedRegion === region.name;
    return (
      <Pressable
        key={region.id}
        accessibilityRole="button"
        accessibilityLabel={region.name}
        accessibilityHint="Afficher les cours des pays de cette région"
        accessibilityState={{ selected }}
        onPress={() => onSelect(region.name)}
        hitSlop={{ top: 10, bottom: 10, left: 2, right: 2 }}
        style={[styles.label, separateLabels ? styles.legendLabel : {
          position: "absolute", left: `${region.left}%`, top: `${region.top}%`, width: `${region.width}%`,
        }, { backgroundColor: selected ? selectionColor : region.color }]}
      >
        {({ pressed }) => <View style={[styles.labelContent, pressed && styles.pressed]}>
          <HomeText numberOfLines={separateLabels ? undefined : 1} adjustsFontSizeToFit minimumFontScale={0.8} style={[styles.labelText, separateLabels && styles.legendText, selected && styles.selectedText]}>{region.label}</HomeText>
          {selected && <View style={styles.check}><HomeText style={styles.checkText}>✓</HomeText></View>}
        </View>}
      </Pressable>
    );
  };
  return (
    <View style={styles.panel}>
      <View style={styles.canvas}>
        <Svg width="100%" height="100%" viewBox={GEOGRAPHY_MAP_VIEWBOX} accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          {/* Heavy outer silhouette, then fine internal borders, as in the reference. */}
          {GEOGRAPHY_MAP_COUNTRIES.map((country, index) => <Path key={`coast:${country.iso}:${index}`} d={country.d} fill={homeColors.ink} stroke={homeColors.ink} strokeWidth={5.5} strokeLinejoin="round" pointerEvents="none"/>)}
          {GEOGRAPHY_MAP_COUNTRIES.map((country, index) => {
            const region = regions.find((candidate) => candidate.id === country.region)!;
            return <Path key={`${country.iso}:${index}`} d={country.d} fill={selectedRegion === region.name ? selectionColor : region.color} stroke={homeColors.ink} strokeWidth={1.35} strokeLinejoin="round" onPress={() => onSelect(region.name)}/>;
          })}
          {!separateLabels && regions.filter((region) => region.name !== selectedRegion).map((region) => {
            const [x, y] = GEOGRAPHY_REGION_ANCHORS[region.id];
            return <Line key={region.id} x1={x} y1={y} x2={region.labelEnd[0]} y2={region.labelEnd[1]} stroke={homeColors.ink} strokeWidth={2.6} pointerEvents="none"/>;
          })}
          {!separateLabels && regions.filter((region) => region.name !== selectedRegion).map((region) => {
            const [x, y] = GEOGRAPHY_REGION_ANCHORS[region.id];
            return <Circle key={region.id} cx={x} cy={y} r={5.5} fill={homeColors.ink} pointerEvents="none"/>;
          })}
        </Svg>
        {!separateLabels && regions.map(label)}
      </View>
      {separateLabels && <View style={styles.legend}>{regions.map(label)}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  panel: { borderWidth: 2, borderColor: homeColors.ink, borderRadius: 16, backgroundColor: homeColors.card, boxShadow: "4px 5px 0px 0px #1e1b18", marginBottom: 6 },
  canvas: { width: "100%", aspectRatio: 1000 / 680, position: "relative", overflow: "hidden", borderRadius: 14 },
  label: { minHeight: 23, borderRadius: 9, paddingHorizontal: 6, paddingVertical: 3, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 3 },
  labelContent: { width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 3 },
  labelText: { flexShrink: 1, fontFamily: "Inter", fontWeight: "700", fontSize: 10, lineHeight: 16, textAlign: "center" },
  selectedText: { color: homeColors.card },
  check: { width: 13, height: 13, borderRadius: 7, alignItems: "center", justifyContent: "center", backgroundColor: homeColors.card },
  checkText: { fontSize: 10, fontWeight: "700", lineHeight: 13, color: selectionColor },
  legend: { flexDirection: "row", flexWrap: "wrap", gap: 8, padding: 12 },
  legendLabel: { minHeight: 44, flexGrow: 1, flexBasis: "45%" },
  legendText: { fontSize: 12, lineHeight: 18 },
  pressed: { opacity: 0.7 },
});
