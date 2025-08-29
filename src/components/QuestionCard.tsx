import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => onSelect(option.value)}
        >
          <Text style={styles.buttonText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: { marginVertical: 20, padding: 20, borderWidth: 1, borderRadius: 10, borderColor: '#ccc' },
  question: { fontSize: 18, marginBottom: 10 },
  button: { backgroundColor: '#4e73df', padding: 10, borderRadius: 8, marginVertical: 5 },
  buttonText: { color: '#fff', textAlign: 'center' },
});

export default QuestionCard;
