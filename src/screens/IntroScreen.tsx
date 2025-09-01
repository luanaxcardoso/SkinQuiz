import React from "react";
import { View, Text, TouchableOpacity, Image, Linking, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styles from "../styles/styleQuiz";
import Icon from "react-native-vector-icons/FontAwesome";

type RootStackParamList = {
  Intro: undefined;
  Quiz: undefined;
  Result: { result: string };
};

type Props = NativeStackScreenProps<RootStackParamList, "Intro">;

const IntroScreen: React.FC<Props> = ({ navigation }) => {
  
  const handleWhatsApp = () => {
    const phoneNumber = "12991871456"; 
    const url = `https://wa.me/${phoneNumber}`;
    Linking.openURL(url).catch(() => alert("Não foi possível abrir o WhatsApp"));
  };

  return (
    <View style={styles.container}>

      <View style={localStyles.topBar}>
        <Text style={localStyles.clinicName}>Clínica La Belle</Text>
        <TouchableOpacity onPress={handleWhatsApp}>
          <Icon name="whatsapp" size={24} color="#25D366" />
        </TouchableOpacity>
      </View>

      <Image
        source={require("../assets/capa01.jpg")}
        style={{ width: 300, height: 150, marginVertical: 50, borderRadius: 100 }}
        resizeMode="cover"
      />

      <Text style={styles.title}>Quais suas preocupações com a pele?</Text>
      <Text style={styles.description}>
        Faça nosso quiz e descubra recomendações personalizadas para o seu tipo de pele.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Quiz")}
      >
        <Text style={styles.buttonText}>Começar Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

const localStyles = StyleSheet.create({
  topBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 30,
    marginBottom: 10,
  },
  clinicName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8a2be2",
  },
});

export default IntroScreen;
