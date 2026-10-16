import { useEffect, useState } from "react";
import { Animated, Easing, StyleSheet, View, useWindowDimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { ArrowRight, Landmark, Sparkles } from "lucide-react-native";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { HomeText, homeColors } from "./HomeUi";
import { HistoryQuizAction } from "./HistoryQuiz";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const RADIUS = 103;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const CONFETTI = Array.from({ length: 16 }, (_, i) => ({
  angle: (i / 16) * Math.PI * 2,
  distance: 0.68 + (i % 3) * 0.12,
  color: i % 4 === 0 ? homeColors.success : homeColors.gold,
}));

interface HistoryLevelUpProps {
  fromLevel: number;
  toLevel: number;
  primaryLabel: string;
  onPrimary: () => void;
  onSecondary?: () => void;
}

/** Célébration native jouée une fois, sur le niveau réellement confirmé par le store. */
export function HistoryLevelUp({ fromLevel, toLevel, primaryLabel, onPrimary, onSecondary }: HistoryLevelUpProps) {
  const reducedMotion = useReducedMotion();
  const { width, fontScale } = useWindowDimensions();
  const size = Math.max(160, Math.min(224, width - 100));
  const [phase, setPhase] = useState(0);
  const [motion] = useState(() => ({
    entrance: new Animated.Value(0),
    ring: new Animated.Value(0.72),
    swap: new Animated.Value(0),
    bounce: new Animated.Value(0.65),
    burst: new Animated.Value(0),
    halo: new Animated.Value(0),
    actions: new Animated.Value(0),
  }));
  useEffect(() => {
    if (reducedMotion) return;
    let active = true;
    motion.entrance.setValue(0);
    motion.ring.setValue(0.72);
    motion.swap.setValue(0);
    motion.bounce.setValue(0.65);
    motion.burst.setValue(0);
    motion.halo.setValue(0);
    motion.actions.setValue(0);
    const entrance = Animated.parallel([
      Animated.timing(motion.entrance, { toValue: 1, duration: 420, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
      Animated.timing(motion.ring, { toValue: 1, duration: 750, easing: Easing.out(Easing.cubic), useNativeDriver: false }),
    ]);
    const reveal = Animated.timing(motion.swap, { toValue: 1, duration: 230, useNativeDriver: true });
    const celebration = Animated.parallel([
      reveal,
      Animated.spring(motion.bounce, { toValue: 1, stiffness: 170, damping: 11, mass: 0.7, useNativeDriver: true }),
      Animated.timing(motion.burst, { toValue: 1, duration: 1800, easing: Easing.out(Easing.quad), useNativeDriver: true }),
      Animated.timing(motion.halo, { toValue: 1, duration: 750, useNativeDriver: true }),
    ]);
    const actions = Animated.sequence([
      Animated.delay(430),
      Animated.timing(motion.actions, { toValue: 1, duration: 330, useNativeDriver: true }),
    ]);
    // Callback de la révélation : les contrôles restent disponibles pendant la fin des confettis.
    const revealStart = Animated.sequence([entrance, Animated.delay(100)]);
    revealStart.start(({ finished }) => {
      if (!active || !finished) return;
      setPhase(1);
      celebration.start();
      actions.start(({ finished: revealed }) => {
        if (active && revealed) setPhase(2);
      });
    });
    return () => {
      active = false;
      revealStart.stop();
      celebration.stop();
      actions.stop();
    };
  }, [motion, reducedMotion]);
  const settled = reducedMotion || phase === 2;
  const ready = settled;
  const entryStyle = reducedMotion ? undefined : {
    opacity: motion.entrance,
    transform: [{ translateY: motion.entrance.interpolate({ inputRange: [0, 1], outputRange: [18, 0] }) }],
  };
  return <View style={styles.screen}>
    <Animated.View style={[styles.intro, entryStyle]}>
      <View style={styles.subject}><HomeText heading style={styles.subjectText}>HISTOIRE</HomeText></View>
      <HomeText heading accessibilityRole="header" style={styles.heading}>Niveau{"\n"}supérieur !</HomeText>
    </Animated.View>

    <View style={[styles.stage, { height: size + 42 }]}>
      {!reducedMotion && <View pointerEvents="none" accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={styles.effects}>
        <Animated.View style={[styles.halo, { width: size, height: size, borderRadius: size / 2, opacity: motion.halo.interpolate({ inputRange: [0, 0.2, 1], outputRange: [0, 0.6, 0] }), transform: [{ scale: motion.halo.interpolate({ inputRange: [0, 1], outputRange: [0.95, 1.3] }) }] }]}/>
        {CONFETTI.map((piece, i) => {
          const radius = size * 0.68 * piece.distance;
          const x = Math.cos(piece.angle) * radius;
          const y = Math.sin(piece.angle) * radius;
          return <Animated.View key={i} style={[styles.confetti, { backgroundColor: piece.color, width: i % 3 === 0 ? 5 : 7, height: i % 3 === 0 ? 5 : 12, opacity: motion.burst.interpolate({ inputRange: [0, 0.06, 0.75, 1], outputRange: [0, 1, 1, 0] }), transform: [
            { translateX: motion.burst.interpolate({ inputRange: [0, 0.35, 1], outputRange: [0, x, x * 1.1] }) },
            { translateY: motion.burst.interpolate({ inputRange: [0, 0.35, 1], outputRange: [0, y, y + 70] }) },
            { rotate: motion.burst.interpolate({ inputRange: [0, 1], outputRange: [`${i * 23}deg`, `${i * 23 + 240}deg`] }) },
          ] }]}/>;
        })}
      </View>}
      <Animated.View accessible accessibilityLabel={`Bravo, tu passes du niveau ${fromLevel} au niveau ${toLevel} en Histoire !`} style={[styles.medal, { width: size, height: size, borderRadius: size / 2 }, reducedMotion ? undefined : { opacity: motion.entrance, transform: [{ scale: motion.entrance.interpolate({ inputRange: [0, 1], outputRange: [0.8, 1] }) }] }]}>
        <Svg width={size} height={size} viewBox="0 0 224 224" style={styles.ring}>
          <Circle cx={112} cy={112} r={RADIUS} stroke="#5c554b" strokeWidth={4} fill="none"/>
          <AnimatedCircle cx={112} cy={112} r={RADIUS} stroke={homeColors.gold} strokeWidth={4} fill="none" strokeLinecap="round" strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`} strokeDashoffset={reducedMotion ? 0 : motion.ring.interpolate({ inputRange: [0, 1], outputRange: [CIRCUMFERENCE, 0] })} rotation={-90} origin="112, 112"/>
        </Svg>
        <Landmark size={27} color={homeColors.gold} strokeWidth={1.5}/>
        <HomeText heading style={styles.levelLabel}>NIVEAU</HomeText>
        <View style={styles.numberSlot}>
          {!reducedMotion && <Animated.View style={[styles.numberLayer, { opacity: motion.swap.interpolate({ inputRange: [0, 1], outputRange: [1, 0] }), transform: [{ translateY: motion.swap.interpolate({ inputRange: [0, 1], outputRange: [0, -24] }) }] }]}>
            <HomeText heading allowFontScaling={false} style={[styles.number, { fontSize: size * 0.44, lineHeight: size * 0.51 }]}>{fromLevel}</HomeText>
          </Animated.View>}
          <Animated.View style={[styles.numberLayer, reducedMotion ? undefined : { opacity: motion.swap, transform: [{ scale: motion.bounce }, { translateY: motion.swap.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }] }]}>
            <HomeText heading allowFontScaling={false} style={[styles.number, { fontSize: size * 0.44, lineHeight: size * 0.51 }]}>{toLevel}</HomeText>
          </Animated.View>
        </View>
      </Animated.View>
      <Animated.View pointerEvents="none" accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={[styles.sparkles, entryStyle]}><Sparkles size={25} color={homeColors.gold}/></Animated.View>
    </View>

    <Animated.View style={[styles.message, entryStyle]}>
      <View style={styles.levelRow}>
        <HomeText heading style={styles.oldLevel}>Niv. {fromLevel}</HomeText>
        <ArrowRight size={20} color={homeColors.ink}/>
        <Animated.View style={[styles.newLevel, reducedMotion ? undefined : { opacity: motion.swap.interpolate({ inputRange: [0, 1], outputRange: [0.45, 1] }) }]}><HomeText heading style={styles.newLevelText}>Niv. {toLevel}</HomeText></Animated.View>
      </View>
      <HomeText accessibilityLiveRegion="polite" style={styles.status}>{settled ? "Tu progresses en Histoire !" : phase === 1 ? `Niveau ${toLevel} débloqué !` : "Un nouveau cap se prépare…"}</HomeText>
    </Animated.View>
    <Animated.View pointerEvents={ready ? "auto" : "none"} accessibilityElementsHidden={!ready} importantForAccessibility={ready ? "auto" : "no-hide-descendants"} style={[styles.actions, fontScale > 1.3 && styles.largeTextActions, reducedMotion ? undefined : { opacity: motion.actions, transform: [{ translateY: motion.actions.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }] }]}>
      <HistoryQuizAction label={primaryLabel.replace(/\s*→$/u, "")} onPress={onPrimary} disabled={!ready}/>
      {onSecondary && <HistoryQuizAction label="Retour aux cours d’Histoire" onPress={onSecondary} secondary disabled={!ready}/>}
    </Animated.View>
  </View>;
}

const styles = StyleSheet.create({
  screen: { gap: 14, paddingTop: 8, paddingBottom: 6 },
  intro: { gap: 14, alignItems: "center" },
  subject: { backgroundColor: homeColors.gold, borderRadius: 20, paddingHorizontal: 13, paddingVertical: 4 },
  subjectText: { fontSize: 11, lineHeight: 16 },
  heading: { fontSize: 30, lineHeight: 36, letterSpacing: -0.5, textAlign: "center" },
  stage: { alignItems: "center", justifyContent: "center", overflow: "hidden" },
  effects: { position: "absolute", top: 0, right: 0, left: 0, bottom: 0, alignItems: "center", justifyContent: "center" },
  medal: { backgroundColor: homeColors.ink, alignItems: "center", justifyContent: "center", gap: 5 },
  ring: { position: "absolute", top: 0, left: 0 },
  halo: { position: "absolute", borderWidth: 2, borderColor: homeColors.gold },
  confetti: { position: "absolute", left: "50%", top: "50%", borderRadius: 1 },
  levelLabel: { fontSize: 11, lineHeight: 17, color: homeColors.gold, letterSpacing: 2 },
  numberSlot: { height: "49%", width: "80%" },
  numberLayer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" },
  number: { color: homeColors.cream, textAlign: "center", letterSpacing: -2 },
  sparkles: { position: "absolute", top: 17, left: "12%" },
  message: { alignItems: "center", gap: 14 },
  levelRow: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 15 },
  oldLevel: { color: homeColors.muted, fontSize: 16, lineHeight: 24 },
  newLevel: { borderRadius: 20, backgroundColor: homeColors.gold, paddingHorizontal: 14, paddingVertical: 5 },
  newLevelText: { fontSize: 16, lineHeight: 24 },
  status: { fontSize: 14, lineHeight: 21, textAlign: "center", minHeight: 42 },
  actions: { gap: 13 },
  largeTextActions: { marginTop: 8 },
});
