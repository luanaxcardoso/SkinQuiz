// src/screens/ResultScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './styleQuiz';

type RootStackParamList = {
  Quiz: undefined;
  Result: { result: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Result'>;

const ResultScreen: React.FC<Props> = ({ route, navigation }) => {
  const { result } = route.params;

  const descriptions: Record<string, string> = {
    oleosa: "Sua pele produz mais óleo e tende a brilho. Prefira produtos oil-free.",
    mista: "Sua pele tem áreas oleosas e áreas secas. Hidrate equilibradamente.",
    seca: "Sua pele tende a ressecar facilmente. Use produtos hidratantes.",
  };

  const backgroundColors: Record<string, string> = {
    oleosa: '#f5a623',
    mista: '#50e3c2',
    seca: '#4a90e2',
  };

  return (
    <View style={[styles.resultContainer, { backgroundColor: backgroundColors[result] }]}>
      <Text style={styles.title}>Seu tipo de pele é:</Text>
      <Text style={styles.result}>{result.toUpperCase()}</Text>
      <Text style={styles.description}>{descriptions[result]}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={styles.buttonText}>Refazer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultScreen;
