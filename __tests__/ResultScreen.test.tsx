import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ResultScreen from "../src/screens/ResultScreen";

const mockNavigate = jest.fn();

jest.mock("@react-navigation/native-stack", () => ({
  createNativeStackNavigator: jest.fn(),
}));

jest.mock("react-native/Libraries/Linking/Linking", () => ({
  openURL: jest.fn(),
}));

jest.mock("@expo/vector-icons", () => ({
  FontAwesome: () => null,
}));

describe("ResultScreen - Integração", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renderiza resultado, recomendações e navega ao refazer", () => {
    const route = { params: { result: "oleosa" } };

    const { getByText } = render(
      <ResultScreen navigation={{ navigate: mockNavigate } as any} route={route as any} />
    );

    expect(getByText(/Seu tipo de pele é:/)).toBeTruthy();
    expect(getByText(/OLEOSA/)).toBeTruthy();
    expect(getByText(/Recomendação:/)).toBeTruthy();
    expect(getByText(/Máscara de Argila/)).toBeTruthy();
    expect(getByText(/Radiofrequência/)).toBeTruthy();
    expect(getByText(/Ultrassom Facial/)).toBeTruthy();

    const button = getByText(/Refazer/);
    fireEvent.press(button);
    expect(mockNavigate).toHaveBeenCalledWith("Intro");
  });
});
