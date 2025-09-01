import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Option = {
  label: string;
  value: string;
};

type Props = {
  question: string;
  options: Option[];
  onSelect: (value: string) => void;
};

const QuestionCard: React.FC<Props> = ({ question, options, onSelect }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => onSelect(option.value)}
          >
            <Text style={styles.optionText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 30, 
    paddingHorizontal: 20,
    marginVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8a2be2",
    marginBottom: 25, 
    textAlign: "center",
  },
  optionsContainer: {
    marginTop: 10,
  },
  optionButton: {
    backgroundColor: "#fdf0f6",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
    color: "#5a5a5a",
    fontWeight: "500",
  },
});

export default QuestionCard;
