import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import QuizScreen from "../src/screens/QuizScreen";

const mockNavigate = jest.fn();

jest.mock("@react-navigation/native-stack", () => ({
  createNativeStackNavigator: jest.fn(),
}));

describe("QuizScreen - Integração", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renderiza a primeira pergunta e navega ao selecionar respostas", () => {
    const { getByText } = render(
      <QuizScreen navigation={{ navigate: mockNavigate } as any} route={{} as any} />
    );

    expect(getByText("Sua pele costuma ficar oleosa na zona T? \n(testa, nariz, queixo)")).toBeTruthy();

    const firstOption = getByText("Sempre");
    fireEvent.press(firstOption);


    const secondOption = getByText("Sim");
    fireEvent.press(secondOption);

    const remainingOptions = [
      "Nunca", "Muito visíveis", "Não", "Sim, bastante", "Não", "Brilhante e oleosa"
    ];

    remainingOptions.forEach(opt => {
      fireEvent.press(getByText(opt));
    });

    
    expect(mockNavigate).toHaveBeenCalledWith("Result", expect.any(Object));
  });
});
