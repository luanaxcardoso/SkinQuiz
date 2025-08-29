// src/screens/QuizScreen.tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './styleQuiz';

type Option = {
  label: string;
  value: string;
};

type Question = {
  question: string;
  options: Option[];
};

type RootStackParamList = {
  Quiz: undefined;
  Result: { result: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Quiz'>;

const questions: Question[] = [
  {
    question: "Sua pele costuma ficar oleosa na zona T (testa, nariz, queixo)?",
    options: [
      { label: "Sempre", value: "oleosa" },
      { label: "Às vezes", value: "mista" },
      { label: "Quase nunca", value: "seca" },
    ],
  },
  {
    question: "Sua pele apresenta brilho excessivo ao longo do dia?",
    options: [
      { label: "Sim", value: "oleosa" },
      { label: "Às vezes", value: "mista" },
      { label: "Não", value: "seca" },
    ],
  },
];

const QuizScreen: React.FC<Props> = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const result = calculateResult(newAnswers);
      navigation.navigate('Result', { result });
    }
  };

  const calculateResult = (answers: string[]) => {
    const counts: Record<string, number> = { oleosa: 0, mista: 0, seca: 0 };
    answers.forEach(a => counts[a]++);
    return Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));
  };

  return (
    <View style={styles.container}>
      <QuestionCard
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onSelect={handleSelect}
      />
    </View>
  );
};

export default QuizScreen;
