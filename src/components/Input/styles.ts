import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  input: {
    width: 290,
    height: 54,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.GRAY_100,
    backgroundColor: THEME.COLORS.GRAY_500,
    borderRadius: 6,
    padding: 16,
  },
  withBorder: {
    borderWidth: 1,
    borderColor: THEME.COLORS.PURPLE,
  },
});
