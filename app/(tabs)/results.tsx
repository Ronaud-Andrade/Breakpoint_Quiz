import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

const circleSize = Math.min(width * 0.46, 180);

export default function ResultsScreen() {
  const total = 10;
  const correct = 8;
  const percent = (correct / total) * 100;
  const points = 850;

  return (
    <LinearGradient colors={["#00B7FF", "#00FF84"]} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>PARABÉNS !</Text>

          <AnimatedCircularProgress
            size={circleSize}
            width={18}
            fill={percent}
            tintColor="#00FF4D"
            backgroundColor="#BDBDBD"
            rotation={0}
            lineCap="round"
          >
            {() => (
              <View style={styles.innerCircle}>
                <Text style={styles.circleText}>{correct}</Text>
              </View>
            )}
          </AnimatedCircularProgress>

          <Text style={styles.label}>VOCÊ ACERTOU</Text>
          <Text style={styles.score}>{correct} DE {total}!</Text>

          <Text style={styles.performance}>ÓTIMO ⭐⭐⭐</Text>
          <Text style={styles.performance2}>DESEMPENHO!</Text>

          <Text style={styles.points}>
            SUA PONTUAÇÃO: {points} PTS
          </Text>

          <View style={styles.bottom}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.replace("/quiz")}
            >
              <Text style={styles.buttonText}>▶ Refazer Quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => router.replace("/")}
            >
              <Text style={styles.buttonText}>Voltar ao Início</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 40,
  },

  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#000",
    marginBottom: 28,
  },

  innerCircle: {
    justifyContent: "center",
    alignItems: "center",
  },

  circleText: {
    fontSize: 36,
    fontWeight: "900",
    color: "#000",
  },

  label: {
    marginTop: 22,
    fontSize: 24,
    fontWeight: "900",
    color: "#000",
  },

  score: {
    fontSize: 30,
    fontWeight: "900",
    color: "#000",
    marginBottom: 18,
  },

  performance: {
    fontSize: 24,
    fontWeight: "900",
    color: "#000",
  },

  performance2: {
    fontSize: 24,
    fontWeight: "900",
    color: "#000",
    marginBottom: 18,
  },

  points: {
    fontSize: 20,
    fontWeight: "900",
    color: "#000",
    marginBottom: 25,
    textAlign: "center",
  },

  bottom: {
    width: "100%",
    gap: 14,
    marginTop: "auto",
  },

  button: {
    width: "100%",
    backgroundColor: "#008CFF",
    paddingVertical: 15,
    borderRadius: 30,
    elevation: 8,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
});