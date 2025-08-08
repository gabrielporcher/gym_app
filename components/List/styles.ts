
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
    borderWidth: 1,
    borderColor: colors.bgWhiteBottom
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
    flexWrap: 'wrap'
  },
});

export const selectableListItemStyles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.card,
    borderRadius: radius.regular,
    borderWidth: 1,
    borderColor: colors.bgWhiteBottom
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
