import { describe, it, expect } from '@jest/globals';

const calculateResult = (answers: string[]) => {
  const counts: Record<string, number> = { oleosa: 0, mista: 0, seca: 0 };
  answers.forEach(a => counts[a]++);
  const max = Math.max(...Object.values(counts));
  const winners = Object.keys(counts).filter(k => counts[k] === max);
  return winners.length > 1 ? 'mista' : winners[0];
};

describe('Função calculateResult', () => {
  it('retorna oleosa quando a maioria das respostas é oleosa', () => {
    const answers = ['oleosa', 'oleosa', 'mista'];
    expect(calculateResult(answers)).toBe('oleosa');
  });

  it('retorna seca quando a maioria das respostas é seca', () => {
    const answers = ['seca', 'mista', 'seca', 'seca'];
    expect(calculateResult(answers)).toBe('seca');
  });

  it('retorna mista em caso de empate', () => {
    const answers = ['oleosa', 'seca'];
    expect(calculateResult(answers)).toBe('mista');
  });
});


