import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import IntroScreen from "../src/screens/IntroScreen";

const mockNavigate = jest.fn();

jest.mock("@react-navigation/native-stack", () => ({
  createNativeStackNavigator: jest.fn(),
}));

jest.mock("@expo/vector-icons", () => ({
  FontAwesome: () => null,
}));

describe("IntroScreen - Integração", () => {
  it("renderiza elementos principais e navega para Quiz", () => {
    const { getByText } = render(
      <IntroScreen navigation={{ navigate: mockNavigate } as any} route={{} as any} />
    );

    expect(getByText("Clínica La Belle")).toBeTruthy();
    expect(getByText("Quais suas preocupações com a pele?")).toBeTruthy();

    const button = getByText("Começar Quiz");
    fireEvent.press(button);

    expect(mockNavigate).toHaveBeenCalledWith("Quiz");
  });
});
