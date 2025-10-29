import { StyleSheet } from "react-native";

export const colors = {
  /*
      A ideia das cores:
      Usando HSL quanto mais no topo da pilha de elementos, maior a exposição de luz.
  */
  bgDarkBottom: "hsl(0, 0%, 0%)",
  bgDarkMid: "hsl(0, 0%, 5%)",
  bgDarkTop: "hsl(0, 0%, 10%)",
  textWhite: "hsl(0,0%, 95%)",
  textWhiteSecondary: "hsl(0, 0%, 70%)",

  bgWhiteBottom: "hsl(0, 0%, 92%)",
  bgWhiteMid: "hsl(0, 0%, 97%)",
  bgWhiteTop: "hsl(0, 0%, 100%)",
  textDark: "hsl(0, 0%, 5%)",
  textDarkSecondary: "hsl(0, 0%, 30%)",

  bgGray: "hsl(0, 0%, 85%)",

  active: "hsl(0, 0%, 0%)", // no modo escuro deve ser o contrário
  disabled: "hsl(0, 0%, 60%)", // no modo escuro deve ser o contrário
  inactive: "hsl(0, 0%, 60%)", // no modo escuro deve ser o contrário
  placeholderText: "hsl(0, 0%, 50%)",

  primary: "hsl(0, 0%, 0%)", // no modo escuro deve ser o contrário
  secondary: "hsl(0, 0%, 90%)", // no modo escuro deve ser o contrário

  lighter: "hsl(0, 0%, 100%)",
  light: "hsl(0, 0%, 95%)",
  midShade: "hsl(0, 0%, 85%)",
  dark: "hsl(0, 0%, 10%)",
  darkest: "hsl(0, 0%, 0%)",

  transparent: "transparent",
  red: "#D89A9A",
  green: "#9FC5A2",
  yellow: "#E7D88F",
  blue: "#A2B8E0",
  white: "#FFF",
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
};

export const typography = StyleSheet.create({
  title1: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.textWhite,
  },
  title2: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.primary,
  },
  title3: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
  headline: {
    fontSize: 17,
    fontWeight: "600",
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
});

export const listStyles = StyleSheet.create({
  listContainer: {
    gap: spacing.m,
  },
});

export const miscellaneous = StyleSheet.create({
  shadow: {
    //REVER TUDO POIS NO ANDROID SO FUNCIONA ELEVATION
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },

  shadowWrapper: {
    backgroundColor: colors.bgWhiteTop,
    elevation: 2, // sombra no Android
    shadowColor: "#000", // sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    borderRadius: 16,
  },
});
