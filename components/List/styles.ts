
import { StyleSheet } from "react-native";
import { colors, radius, spacing } from "../styles";

export const listStyles = StyleSheet.create({
  listContainer: {
    gap: spacing.m,
  },
});

export const listItemStyles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.card,
    borderRadius: radius.regular,
    borderColor: colors.quinary,
    borderWidth: 1.5,
  },
  icon: {
    marginRight: spacing.m,
  },
  itemTextContainer: {
    flex: 1,
  },
  chipContainer: {
    flexDirection: "row",
    gap: spacing.s,
    marginTop: spacing.s,
  },
});

export const selectableListItemStyles = StyleSheet.create({
  unselectedContainer: {
    borderRadius: radius.regular,
    borderColor: colors.quinary,
    borderWidth: 1.5,
  },
  selectedContainer: {
    backgroundColor: colors.quinary,
    borderRadius: radius.regular,
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.card,
  },
  firstContainer: {
    flex: 1,
    justifyContent: "center",
  },
  mainContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  lastContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  icon: {
    marginLeft: spacing.xs,
  },
  itemTitle: {
    marginBottom: spacing.xs,
  },
  chipContainer: {
    flexDirection: "row",
    gap: spacing.s,
    marginTop: spacing.s,
  },
  checkBox: {
    borderRadius: radius.regular,
  },
  expandedContainer: {
    flexDirection: "row",
    padding: spacing.card,
    borderBottomRightRadius: radius.regular,
    borderBottomLeftRadius: radius.regular,
    gap: spacing.m,
  },
  expandedSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
