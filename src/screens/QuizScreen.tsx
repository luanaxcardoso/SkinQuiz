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
  {
    question: "Você sente sua pele repuxando ou seca após lavar o rosto?",
    options: [
      { label: "Nunca", value: "oleosa" },
      { label: "Às vezes", value: "mista" },
      { label: "Sempre", value: "seca" },
    ],
  },
  {
    question: "Seus poros são visíveis principalmente na zona T?",
    options: [
      { label: "Muito visíveis", value: "oleosa" },
      { label: "Apenas um pouco", value: "mista" },
      { label: "Quase não aparecem", value: "seca" },
    ],
  },
  {
    question: "Sua pele tem tendência a descamação ou ressecamento?",
    options: [
      { label: "Não", value: "oleosa" },
      { label: "Às vezes", value: "mista" },
      { label: "Sim", value: "seca" },
    ],
  },
  {
    question: "Sua pele apresenta acne ou cravos com frequência?",
    options: [
      { label: "Sim, bastante", value: "oleosa" },
      { label: "Ocasionalmente", value: "mista" },
      { label: "Raramente", value: "seca" },
    ],
  },
  {
    question: "Sua pele fica irritada facilmente com produtos novos?",
    options: [
      { label: "Não", value: "oleosa" },
      { label: "Às vezes", value: "mista" },
      { label: "Sim, facilmente", value: "seca" },
    ],
  },
  {
    question: "Como você descreveria a aparência geral da sua pele?",
    options: [
      { label: "Brilhante e oleosa", value: "oleosa" },
      { label: "Equilibrada, mas com oleosidade na zona T", value: "mista" },
      { label: "Opaca ou seca", value: "seca" },
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
  
  const max = Math.max(...Object.values(counts));
  const winners = Object.keys(counts).filter(k => counts[k] === max);
  
  return winners.length > 1 ? 'mista' : winners[0];
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
