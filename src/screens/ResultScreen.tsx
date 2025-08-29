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

  return (
    <View style={styles.resultContainer}>
      <Text style={styles.title}>Seu tipo de pele é:</Text>
      <Text style={styles.result}>{result.toUpperCase()}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.buttonText}>Refazer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultScreen;
