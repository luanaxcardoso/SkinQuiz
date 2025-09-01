import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Linking } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/FontAwesome"; 
import styles from "../styles/styleQuiz";

type RootStackParamList = {
  Intro: undefined;
  Quiz: undefined;
  Result: { result: string };
};

type Props = NativeStackScreenProps<RootStackParamList, "Result">;

const ResultScreen: React.FC<Props> = ({ route, navigation }) => {
  const { result } = route.params;

  const handleWhatsApp = () => {
    const phoneNumber = "12991871456"; 
    const url = `https://wa.me/${phoneNumber}`;
    Linking.openURL(url).catch(() => alert("Não foi possível abrir o WhatsApp"));
  };

  const getRecommendation = (type: string) => {
    switch (type) {
      case "oleosa":
        return {
          title: "Recomendação:",
          points: ["Máscara de Argila", "Radiofrequência", "Ultrassom Facial"],
          image: require("../assets/peleoleosa.jpg"),
        };
      case "mista":
        return {
          title: "Recomendação:",
          points: ["Máscara Peel-off Equilibrante", "Ultrassom facial", "Peelings suaves, químicos ou físicos"],
          image: require("../assets/pele02.jpg"),
        };
      case "seca":
        return {
          title: "Recomendação:",
          points: ["Máscara de Ácido Hialurônico", "Criolipólise Facial", "Microdermoabrasão"],
          image: require("../assets/pele03.jpg"),
        };
      default:
        return { title: "Tipo de pele indeterminado", points: [], image: require("../assets/capa.jpg") };
    }
  };

  const recommendation = getRecommendation(result);

  return (
    <View style={styles.resultContainer}>
      
      <View style={localStyles.whatsappContainer}>
        <TouchableOpacity onPress={handleWhatsApp}>
          <Icon name="whatsapp" size={35} color="#25D366" />
        </TouchableOpacity>
      </View>

      <Text style={localStyles.title}>Seu tipo de pele é:</Text>
      <Text style={localStyles.result}>{result.toUpperCase()}</Text>

      <Image source={recommendation.image} style={localStyles.image} />

      <Text style={localStyles.recommendationTitle}>{recommendation.title}</Text>

      <Text style={localStyles.points}>
        {recommendation.points.map(point => `\u2022 ${point}`).join("\n")}
      </Text>
      
      <Text style={localStyles.contact}>Para mais informações, entre em contato com a Clínica La Belle.</Text>

     
      <TouchableOpacity
        style={localStyles.refazerButton}
        onPress={() => navigation.navigate("Intro")}
      >
        <Text style={localStyles.buttonText}>Refazer</Text>
      </TouchableOpacity>
    </View>
  );
};

const localStyles = StyleSheet.create({
  whatsappContainer: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#8a2be2",
    textAlign: "center",
    marginBottom: 8,
  },
  result: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#d63384",
    marginBottom: 16,
    textAlign: "center",
  },
  image: {
    width: 160,
    height: 160,
    marginVertical: 15,
    borderRadius: 12,
  },
  recommendationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8a2be2",
    textAlign: "center",
    marginBottom: 8,
  },
  points: {
    fontSize: 16,
    color: "#5a5a5a",
    lineHeight: 24,
    marginBottom: 15,
    textAlign: "left",
  },
  contact: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  refazerButton: {
    backgroundColor: '#d63384',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ResultScreen;
