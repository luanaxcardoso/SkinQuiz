import React from 'react';
import { render } from '@testing-library/react-native';

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }: any) => children,
}));

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: ({ children }: any) => <>{children}</>,
    Screen: ({ children }: any) => <>{children}</>,
  }),
}));

import AppNavigator from '../src/navigation/AppNavigator';

test('renderiza o AppNavigator sem crashar', () => {
  const tree = render(<AppNavigator />);
  expect(tree).toBeTruthy();
});
