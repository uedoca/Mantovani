import { StyleSheet } from 'react-native';

export const themes = {
  light: {
    type: 'light',
    background: '#FFFFFF',
    text: '#000000',
    buttonBackground: '#DDDDDD',
    buttonText: '#000000',
  },
  dark: {
    type: 'dark',
    background: '#222222',
    text: '#FFFFFF',
    buttonBackground: '#555555',
    buttonText: '#FFFFFF',
  },
};

export const getOppositeTheme = (currentTheme) => {
  return currentTheme.type === 'light' ? themes.dark : themes.light;
};

export const createStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  text: {
    color: theme.text,
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: theme.buttonBackground,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: theme.buttonText,
    fontSize: 16,
  },
});