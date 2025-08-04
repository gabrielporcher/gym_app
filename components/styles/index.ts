
import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#000',
  secondary: '#fff',
  tertiary: '#8e8e93',
  quaternary: '#f2f2f7',
  quinary: '#e5e5ea',
  senary: '#d1d1d6',
  septenary: '#c7c7cc',
  octonary: '#aeaeb2',
  nonary: '#98989d',
  denary: '#8e8e93',
  transparent: 'transparent',
  background: '#FAFAFA',
  defaultText: '#666',
  red: '#D89A9A',
  green: '#9FC5A2',
  yellow: '#E7D88F',
  blue: '#A2B8E0',
  white: '#FFF',
  active: '#000',
  disabled: '#aeaeb2',
  inactive: '#aeaeb2'
};

export const spacing = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
  card: 16,
  section: 24,
};

export const radius = {
  smooth: 2,
  regular: 8,
  round: 16,
}

export const typography = StyleSheet.create({
  title1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
  },
  title2: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
  },
  title3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  headline: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.secondary,
  },
  body: {
    fontSize: 17,
    color: colors.primary,
  },
  callout: {
    fontSize: 16,
    color: colors.primary,
  },
  subhead: {
    fontSize: 15,
    color: colors.primary,
  },
  footnote: {
    fontSize: 13,
    color: colors.tertiary,
  },
  caption1: {
    fontSize: 12,
    color: colors.tertiary,
  },
  caption2: {
    fontSize: 11,
    color: colors.tertiary,
  },
});

export const miscellaneous = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})
